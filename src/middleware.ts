import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  // we can only put routes that are actual detailer pages routes here
  // matcher: ["/", "/([^/.]*)"],
  matcher: ["/", "/([^/.]*)"],
};

const appUrl =
  process.env.NODE_ENV === "production"
    ? "detailpad.com"
    : "detailpaddev.com:3000";
const reservedSubdomains = ["app", "www"];
const allowedSubdomainPaths = ["/reviews"];

export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  const host = req.headers.get("host")?.includes(".com")
    ? req.headers.get("host")
    : null;

  console.log(host);

  if (host != null) {
    const hasSubdomain = !host.includes("www.") && host.includes("." + appUrl);
    console.log(hasSubdomain);

    if (hasSubdomain) {
      const subdomain = host.split(".")[0] || "";
      console.log(subdomain);

      if (!reservedSubdomains.includes(subdomain)) {
        console.log(url.pathname);

        if (allowedSubdomainPaths.includes(url.pathname)) {
          url.pathname = `/_sites/reviews`;
        } else {
          url.pathname = `/_sites/${subdomain}`;
        }
      }
    }
  }

  return NextResponse.rewrite(url);
}
