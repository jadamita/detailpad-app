/* eslint-disable @typescript-eslint/no-explicit-any */

import { log } from "next-axiom";

export const logDebug = (
  message: string,
  args?: {
    [key: string]: any;
  }
) => {
  if (process.env.NODE_ENV != "production") {
    console.log(`[AXIOM_LOG] - ${message} - ${JSON.stringify(args)}`);
  } else {
    log.debug(message, args);
  }
};
