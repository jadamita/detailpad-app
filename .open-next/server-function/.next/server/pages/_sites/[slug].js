"use strict";
(() => {
var exports = {};
exports.id = 791;
exports.ids = [791];
exports.modules = {

/***/ 9339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
;// CONCATENATED MODULE: external "@mantine/dates"
const dates_namespaceObject = require("@mantine/dates");
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/pages/_sites/[slug].tsx





function getServerSideProps(context) {
    const { req  } = context;
    const subDomain = req?.headers.host?.split(".")[0];
    return {
        props: {
            subdomain: subDomain
        }
    };
}
const TestSlug = ({ subdomain  })=>{
    const [value, setValue] = (0,external_react_.useState)(null);
    const times = [
        "9:00am",
        "10:00am"
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "DetailPad - Book"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "DetailPad Book"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Center, {
                    sx: (theme)=>({
                            minHeight: "100vh",
                            background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
                        }),
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Container, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Space, {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid.Col, {
                                        span: 6,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                                sx: (theme)=>({
                                                        fontFamily: `Greycliff CF, ${theme.fontFamily || ""}`,
                                                        fontWeight: 500,
                                                        fontSize: 18
                                                    }),
                                                children: "Select an Appointment Date"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Paper, {
                                                withBorder: true,
                                                p: 10,
                                                mt: 10,
                                                radius: "md",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(dates_namespaceObject.DatePicker, {
                                                    value: value,
                                                    onChange: setValue,
                                                    locale: "en"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid.Col, {
                                        span: 6,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                                                sx: (theme)=>({
                                                        fontFamily: `Greycliff CF, ${theme.fontFamily || ""}`,
                                                        fontWeight: 500,
                                                        fontSize: 18
                                                    }),
                                                children: "Select an Appointment Date"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(core_.Paper, {
                                                withBorder: true,
                                                p: 10,
                                                mt: 10,
                                                radius: "md",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.SimpleGrid, {
                                                    cols: 3,
                                                    children: times.map((x)=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Button, {
                                                                children: x
                                                            }, x)
                                                        }))
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const _slug_ = (TestSlug); // interface ISiteWildcardProps {
 //   wildcard: string;
 // }
 // export async function getServerSideProps<ISiteWildcardProps>(
 //   context: NextPageContext
 // ) {
 //   const wildcard = "asd"; //context.req?.headers.host?.split(".")[0];
 //   //   let wildcard = context.req.headers.host.split(".")[0];
 //   //   wildcard =
 //   //     wildcard != "yourdomain"
 //   //       ? process.env.NODE_ENV != "development"
 //   //         ? wildcard
 //   //         : process.env.TEST_WILDCARD
 //   //       : "home";
 //   return { props: { wildcard } };
 // }
 // const Site: NextPageWithLayout<ISiteWildcardProps> = (props) => {
 //   return (
 //     <>
 //       <Head>
 //         <title>DetailPad - Book</title>
 //         <meta name="description" content="Generated by create-t3-app" />
 //         <link rel="icon" href="/favicon.ico" />
 //       </Head>
 //       <div>Booking page for: {props.wildcard}</div>
 //     </>
 //   );
 // };
 // export default Site;


/***/ }),

/***/ 2247:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9339));
module.exports = __webpack_exports__;

})();