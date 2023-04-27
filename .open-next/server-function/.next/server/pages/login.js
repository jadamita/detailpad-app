"use strict";
(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 6959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ BareLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);


function BareLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Center, {
            sx: (theme)=>({
                    minHeight: "100vh",
                    background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
                }),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Container, {
                size: "xs",
                sx: {
                    width: 480,
                    paddingBottom: 16
                },
                children: children
            })
        })
    });
}


/***/ }),

/***/ 933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9445);
/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mantine_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _layouts_BareLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6959);








async function getServerSideProps(context) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)(context);
    if (session) {
        return {
            redirect: {
                destination: "/",
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
const Login = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const loginForm = (0,_mantine_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        initialValues: {
            email: "",
            password: ""
        },
        validate: {
            email: (value)=>/^\S+@\S+$/.test(value) ? null : "Invalid email",
            password: (value)=>{
                if (value.length < 6) {
                    return "Password must be at least 6 characters";
                } else {
                    return null;
                }
            }
        }
    });
    const submitForm = async (values)=>{
        setIsLoading(true);
        setError("");
        const result = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)("credentials", {
            username: values.email,
            password: values.password,
            redirect: false
        });
        if (result?.status === 200) {
            await router.push("/");
        } else {
            setIsLoading(false);
            setError("Invalid username or password");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Title, {
                align: "center",
                sx: (theme)=>({
                        fontFamily: `Greycliff CF, ${theme.fontFamily || ""}`,
                        fontWeight: 900
                    }),
                children: "Welcome back!"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                color: "dimmed",
                size: "sm",
                align: "center",
                mt: 5,
                children: [
                    "Do not have an account yet?",
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Anchor, {
                        href: "/register",
                        size: "sm",
                        children: "Create account"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
            error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Alert, {
                icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__.IconAlertCircle, {
                    size: "1rem"
                }),
                title: "Error!",
                color: "red",
                variant: "filled",
                children: error
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
                withBorder: true,
                shadow: "md",
                p: 30,
                mt: 30,
                radius: "md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlay, {
                        visible: isLoading,
                        overlayBlur: 2
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: loginForm.onSubmit(async (values)=>await submitForm(values)),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, {
                                label: "Email",
                                placeholder: "you@mantine.dev",
                                required: true,
                                ...loginForm.getInputProps("email")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.PasswordInput, {
                                label: "Password",
                                placeholder: "Your password",
                                required: true,
                                mt: "md",
                                ...loginForm.getInputProps("password")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {
                                position: "apart",
                                mt: "lg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Anchor, {
                                    href: "/forgot",
                                    size: "sm",
                                    children: "Forgot password?"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                type: "submit",
                                fullWidth: true,
                                mt: "xl",
                                children: "Sign in"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
Login.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_BareLayout__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        children: page
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);


/***/ }),

/***/ 2247:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 9445:
/***/ ((module) => {

module.exports = require("@mantine/form");

/***/ }),

/***/ 2236:
/***/ ((module) => {

module.exports = require("@tabler/icons-react");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(933));
module.exports = __webpack_exports__;

})();