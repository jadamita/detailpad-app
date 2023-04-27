"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5041:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: ./src/layouts/DashboardLayout.tsx + 3 modules
var DashboardLayout = __webpack_require__(7061);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
// EXTERNAL MODULE: external "@tabler/icons-react"
var icons_react_ = __webpack_require__(2236);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/dashboard/StatCard.tsx




const StatCard = (props)=>{
    const DiffIcon = props.diff > 0 ? icons_react_.IconArrowUpRight : icons_react_.IconArrowDownRight;
    const useStyles = (0,core_.createStyles)((theme)=>({
            root: {
                padding: `calc(${theme.spacing.xl} * 1.5)`
            },
            value: {
                fontSize: (0,core_.rem)(24),
                fontWeight: 700,
                lineHeight: 1
            },
            diff: {
                lineHeight: 1,
                display: "flex",
                alignItems: "center"
            },
            icon: {
                color: theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[4]
            },
            title: {
                fontWeight: 700,
                textTransform: "uppercase"
            }
        }));
    const { classes  } = useStyles();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Paper, {
            withBorder: true,
            p: "md",
            radius: "md",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                    position: "apart",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                            size: "xs",
                            color: "dimmed",
                            className: classes.title,
                            children: props.title
                        }),
                        /*#__PURE__*/ (0,external_react_.cloneElement)(props.icon, {
                            size: "1.4rem",
                            stroke: "1.5",
                            className: classes.icon
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                    align: "flex-end",
                    spacing: "xs",
                    mt: 25,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                            className: classes.value,
                            children: props.value
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Text, {
                            color: props.diff > 0 ? "teal" : "red",
                            fz: "sm",
                            fw: 500,
                            className: classes.diff,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    children: [
                                        props.diff,
                                        "%"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(DiffIcon, {
                                    size: "1rem",
                                    stroke: 1.5
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                    fz: "xs",
                    c: "dimmed",
                    mt: 7,
                    children: props.caption
                })
            ]
        }, props.title)
    });
};

;// CONCATENATED MODULE: ./src/pages/index.tsx







async function getServerSideProps(context) {
    const session = await (0,react_.getSession)(context);
    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        };
    }
    return {
        props: {
            session
        }
    };
}
const Home = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Create T3 App"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Generated by create-t3-app"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Grid, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid.Col, {
                            xl: 3,
                            lg: 3,
                            md: 4,
                            sm: 6,
                            xs: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(StatCard, {
                                title: "Appointments",
                                caption: "Compared to previous month",
                                value: "200",
                                diff: 5,
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconCalendar, {})
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid.Col, {
                            xl: 3,
                            lg: 3,
                            md: 4,
                            sm: 6,
                            xs: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(StatCard, {
                                title: "Revenue",
                                caption: "Compared to previous month",
                                value: "$1,276",
                                diff: 34,
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconCash, {})
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid.Col, {
                            xl: 3,
                            lg: 3,
                            md: 4,
                            sm: 6,
                            xs: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(StatCard, {
                                title: "Satisfaction",
                                caption: "Compared to previous month",
                                value: "4.8",
                                diff: 3,
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconStar, {})
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.Grid.Col, {
                            xl: 3,
                            lg: 3,
                            md: 4,
                            sm: 6,
                            xs: 12,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(StatCard, {
                                title: "Cancelation",
                                caption: "Compared to previous month",
                                value: "3%",
                                diff: -1,
                                icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconStar, {})
                            })
                        })
                    ]
                })
            })
        ]
    });
};
Home.getLayout = function getLayout(page) {
    return /*#__PURE__*/ jsx_runtime_.jsx(DashboardLayout/* default */.Z, {
        children: page
    });
};
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 2247:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 2236:
/***/ ((module) => {

module.exports = require("@tabler/icons-react");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("react-error-boundary");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [61], () => (__webpack_exec__(5041)));
module.exports = __webpack_exports__;

})();