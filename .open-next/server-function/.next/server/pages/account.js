"use strict";
(() => {
var exports = {};
exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 9026:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ AvatarEdit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(914);
/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9336);
/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7829);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6555);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_6__, uuid__WEBPACK_IMPORTED_MODULE_7__]);
([_utils_api__WEBPACK_IMPORTED_MODULE_6__, uuid__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const s3 = new aws_sdk__WEBPACK_IMPORTED_MODULE_4__.S3({
    endpoint: "https://ca858bec81d1bc99aa2d04d31afb614a.r2.cloudflarestorage.com",
    accessKeyId: "0afc2da2dabcbbbd4c73728f0c9096bd",
    secretAccessKey: "773ab0c08f292cbc3510f57c23f6153eabb5400132e96fab9e40582a00587af4",
    signatureVersion: "v4"
});
const AvatarEdit = ()=>{
    /* eslint-disable @typescript-eslint/no-unused-vars */ const [upload, setUpload] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const [file, setFile] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
    const [isUploading, setIsUploading] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [progress, setProg] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const { data: session , update: sessionUpdate  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession)();
    const { data: avatar , isLoading , refetch  } = _utils_api__WEBPACK_IMPORTED_MODULE_6__/* .api.user.getAvatar.useQuery */ .h.user.getAvatar.useQuery();
    const setAvatarMutation = _utils_api__WEBPACK_IMPORTED_MODULE_6__/* .api.user.setAvatar.useMutation */ .h.user.setAvatar.useMutation({
        onSuccess: async ()=>{
            await refetch();
            await sessionUpdate();
            setFile(null);
            _mantine_notifications__WEBPACK_IMPORTED_MODULE_2__.notifications.show({
                color: "green",
                title: "Success!",
                message: "Successfully updated your avatar! \uD83C\uDF89"
            });
        },
        onError: ()=>{
            _mantine_notifications__WEBPACK_IMPORTED_MODULE_2__.notifications.show({
                color: "red",
                title: "Error!",
                message: "Error when uploading your avatar"
            });
        }
    });
    const uploadAvatar = async ()=>{
        setIsUploading(true);
        setProg(0);
        if (file != null) {
            const fileName = `${(0,uuid__WEBPACK_IMPORTED_MODULE_7__.v4)()}_${file.name}`;
            const params = {
                Bucket: "dpdev",
                Key: `${"avatars/"}${fileName}`,
                Body: file
            };
            try {
                const upload = s3.upload(params);
                setUpload(upload);
                upload.on("httpUploadProgress", (p)=>{
                    const prog = p.loaded / p.total * 100;
                    setProg(prog);
                });
                await upload.promise();
                setAvatarMutation.mutate({
                    name: fileName
                });
            } catch (error) {}
        }
    };
    const getAvatar = ()=>{
        if (file) return URL.createObjectURL(file);
        return `${"https://qamedia.detailpad.com"}/avatars/${avatar != null ? avatar : "default_ava.jpg"}`;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
            withBorder: true,
            p: 10,
            radius: "md",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    sx: (theme)=>({
                            fontFamily: `Greycliff CF, ${theme.fontFamily || ""}`,
                            fontWeight: 500,
                            fontSize: 24
                        }),
                    children: "Avatar"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                    my: "sm",
                    pb: 5
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Center, {
                    children: isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                        height: 200,
                        width: 200,
                        mb: "xl",
                        radius: "md"
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Image, {
                        radius: "md",
                        width: 200,
                        height: 200,
                        src: getAvatar(),
                        alt: "Profile Picture",
                        caption: file != null ? "Avatar Preview" : "Current Avatar",
                        withPlaceholder: true,
                        placeholder: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            align: "center",
                            children: "Error loading Image"
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.FileInput, {
                    value: file,
                    onChange: setFile,
                    icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.IconUpload, {
                        size: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(14)
                    }),
                    placeholder: "Click here to select image",
                    label: "New Avatar",
                    accept: "image/png,image/jpeg",
                    withAsterisk: true
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                    my: "sm"
                }),
                isUploading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Progress, {
                    mt: 15,
                    value: progress
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {
                    position: "right",
                    mt: "md",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            leftIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__.IconTrash, {
                                size: (0,_mantine_core__WEBPACK_IMPORTED_MODULE_1__.rem)(18)
                            }),
                            color: "red",
                            disabled: file == null,
                            onClick: ()=>{
                                setFile(null);
                                setIsUploading(false);
                            },
                            children: "Clear"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            loading: setAvatarMutation.isLoading,
                            disabled: file == null,
                            onClick: async ()=>{
                                await uploadAvatar();
                            },
                            children: "Upload"
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2043:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ ProfileEdit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9445);
/* harmony import */ var _mantine_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mantine_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(914);
/* harmony import */ var _mantine_notifications__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mantine_notifications__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7829);
/* harmony import */ var _static_timezones_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8886);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2236);
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_5__]);
_utils_api__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ProfileEdit = ()=>{
    const { data , isLoading , refetch  } = _utils_api__WEBPACK_IMPORTED_MODULE_5__/* .api.profile.getAccountProfile.useQuery */ .h.profile.getAccountProfile.useQuery();
    const setProfileMutation = _utils_api__WEBPACK_IMPORTED_MODULE_5__/* .api.profile.setAccountProfile.useMutation */ .h.profile.setAccountProfile.useMutation({
        onSuccess: async ()=>{
            await refetch();
            _mantine_notifications__WEBPACK_IMPORTED_MODULE_3__.notifications.show({
                color: "green",
                title: "Success!",
                message: "Successfully updated your profile! \uD83C\uDF89"
            });
        },
        onError: ()=>{
            _mantine_notifications__WEBPACK_IMPORTED_MODULE_3__.notifications.show({
                color: "red",
                title: "Error!",
                message: "Error when uploading your profile"
            });
        }
    });
    const profileForm = (0,_mantine_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        initialValues: {
            firstName: data?.firstName || "",
            lastName: data?.lastName || "",
            timeZone: data?.timeZone || ""
        },
        validate: {
            firstName: (value)=>value.length < 1 ? "You must enter a fist name" : null,
            lastName: (value)=>value.length < 1 ? "You must enter a last name" : null
        }
    });
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        profileForm.setValues({
            firstName: data?.firstName || "",
            lastName: data?.lastName || "",
            timeZone: data?.timeZone || ""
        });
    /* eslint-disable react-hooks/exhaustive-deps */ }, [
        isLoading,
        data
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Paper, {
            withBorder: true,
            p: 10,
            radius: "md",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    sx: (theme)=>({
                            fontFamily: `Greycliff CF, ${theme.fontFamily || ""}`,
                            fontWeight: 500,
                            fontSize: 24
                        }),
                    children: "Profile"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                    my: "sm",
                    pb: 5
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: profileForm.onSubmit(async (values)=>{
                        if (profileForm.isTouched()) {
                            try {
                                await setProfileMutation.mutateAsync({
                                    firstName: values.firstName || "",
                                    lastName: values.lastName || "",
                                    timeZone: values.timeZone || ""
                                });
                            } catch (error) {
                                console.error(error);
                            }
                            profileForm.resetTouched();
                        }
                    }),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, {
                            withAsterisk: true,
                            label: "First Name",
                            placeholder: "John",
                            disabled: isLoading,
                            ...profileForm.getInputProps("firstName")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.TextInput, {
                            mt: 15,
                            withAsterisk: true,
                            label: "Last Name",
                            placeholder: "Doe",
                            disabled: isLoading,
                            ...profileForm.getInputProps("lastName")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Select, {
                            mt: 15,
                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__.IconGlobe, {
                                size: "1rem"
                            }),
                            label: `Time Zone`,
                            placeholder: "Pick one",
                            maxDropdownHeight: 280,
                            disabled: isLoading,
                            ...profileForm.getInputProps("timeZone"),
                            data: _static_timezones_json__WEBPACK_IMPORTED_MODULE_6__.map((item)=>({
                                    value: item.value,
                                    label: item.text
                                }))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Divider, {
                            my: "sm"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Group, {
                            position: "right",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                loading: setProfileMutation.isLoading,
                                disabled: setProfileMutation.isLoading,
                                type: "submit",
                                children: "Update"
                            })
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7061);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2247);
/* harmony import */ var _mantine_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mantine_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_account_AvatarEdit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9026);
/* harmony import */ var _components_account_ProfileEdit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2043);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_account_AvatarEdit__WEBPACK_IMPORTED_MODULE_5__, _components_account_ProfileEdit__WEBPACK_IMPORTED_MODULE_6__]);
([_components_account_AvatarEdit__WEBPACK_IMPORTED_MODULE_5__, _components_account_ProfileEdit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







async function getServerSideProps(context) {
    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getSession)(context);
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
const Account = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "DetailPad - Account"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create-t3-app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Grid, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Grid.Col, {
                            xl: 3,
                            lg: 6,
                            md: 6,
                            sm: 12,
                            xs: 12,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_account_AvatarEdit__WEBPACK_IMPORTED_MODULE_5__/* .AvatarEdit */ .o, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mantine_core__WEBPACK_IMPORTED_MODULE_4__.Grid.Col, {
                            xl: 5,
                            lg: 6,
                            md: 6,
                            sm: 12,
                            xs: 12,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_account_ProfileEdit__WEBPACK_IMPORTED_MODULE_6__/* .ProfileEdit */ .X, {})
                        })
                    ]
                })
            })
        ]
    });
};
Account.getLayout = function getLayout(page) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_DashboardLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: page
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Account);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2247:
/***/ ((module) => {

module.exports = require("@mantine/core");

/***/ }),

/***/ 9445:
/***/ ((module) => {

module.exports = require("@mantine/form");

/***/ }),

/***/ 914:
/***/ ((module) => {

module.exports = require("@mantine/notifications");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 2236:
/***/ ((module) => {

module.exports = require("@tabler/icons-react");

/***/ }),

/***/ 9336:
/***/ ((module) => {

module.exports = require("aws-sdk");

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

/***/ 7583:
/***/ ((module) => {

module.exports = require("react-ssr-prepass");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 72:
/***/ ((module) => {

module.exports = require("superjson");

/***/ }),

/***/ 5776:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 272:
/***/ ((module) => {

module.exports = import("@trpc/client");;

/***/ }),

/***/ 9740:
/***/ ((module) => {

module.exports = import("@trpc/react-query");;

/***/ }),

/***/ 8794:
/***/ ((module) => {

module.exports = import("@trpc/react-query/shared");;

/***/ }),

/***/ 3558:
/***/ ((module) => {

module.exports = import("@trpc/server/shared");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 8886:
/***/ ((module) => {

module.exports = JSON.parse('[{"value":"Dateline Standard Time","abbr":"DST","offset":-12,"isdst":false,"text":"(UTC-12:00) International Date Line West","utc":["Etc/GMT+12"]},{"value":"UTC-11","abbr":"U","offset":-11,"isdst":false,"text":"(UTC-11:00) Coordinated Universal Time-11","utc":["Etc/GMT+11","Pacific/Midway","Pacific/Niue","Pacific/Pago_Pago"]},{"value":"Hawaiian Standard Time","abbr":"HST","offset":-10,"isdst":false,"text":"(UTC-10:00) Hawaii","utc":["Etc/GMT+10","Pacific/Honolulu","Pacific/Johnston","Pacific/Rarotonga","Pacific/Tahiti"]},{"value":"Alaskan Standard Time","abbr":"AKDT","offset":-8,"isdst":true,"text":"(UTC-09:00) Alaska","utc":["America/Anchorage","America/Juneau","America/Nome","America/Sitka","America/Yakutat"]},{"value":"Pacific Standard Time (Mexico)","abbr":"PDT","offset":-7,"isdst":true,"text":"(UTC-08:00) Baja California","utc":["America/Santa_Isabel"]},{"value":"Pacific Daylight Time","abbr":"PDT","offset":-7,"isdst":true,"text":"(UTC-07:00) Pacific Daylight Time (US & Canada)","utc":["America/Los_Angeles","America/Tijuana","America/Vancouver"]},{"value":"Pacific Standard Time","abbr":"PST","offset":-8,"isdst":false,"text":"(UTC-08:00) Pacific Standard Time (US & Canada)","utc":["America/Los_Angeles","America/Tijuana","America/Vancouver","PST8PDT"]},{"value":"US Mountain Standard Time","abbr":"UMST","offset":-7,"isdst":false,"text":"(UTC-07:00) Arizona","utc":["America/Creston","America/Dawson","America/Dawson_Creek","America/Hermosillo","America/Phoenix","America/Whitehorse","Etc/GMT+7"]},{"value":"Mountain Standard Time (Mexico)","abbr":"MDT","offset":-6,"isdst":true,"text":"(UTC-07:00) Chihuahua, La Paz, Mazatlan","utc":["America/Chihuahua","America/Mazatlan"]},{"value":"Mountain Standard Time","abbr":"MDT","offset":-6,"isdst":true,"text":"(UTC-07:00) Mountain Time (US & Canada)","utc":["America/Boise","America/Cambridge_Bay","America/Denver","America/Edmonton","America/Inuvik","America/Ojinaga","America/Yellowknife","MST7MDT"]},{"value":"Central America Standard Time","abbr":"CAST","offset":-6,"isdst":false,"text":"(UTC-06:00) Central America","utc":["America/Belize","America/Costa_Rica","America/El_Salvador","America/Guatemala","America/Managua","America/Tegucigalpa","Etc/GMT+6","Pacific/Galapagos"]},{"value":"Central Standard Time","abbr":"CDT","offset":-5,"isdst":true,"text":"(UTC-06:00) Central Time (US & Canada)","utc":["America/Chicago","America/Indiana/Knox","America/Indiana/Tell_City","America/Matamoros","America/Menominee","America/North_Dakota/Beulah","America/North_Dakota/Center","America/North_Dakota/New_Salem","America/Rainy_River","America/Rankin_Inlet","America/Resolute","America/Winnipeg","CST6CDT"]},{"value":"Central Standard Time (Mexico)","abbr":"CDT","offset":-5,"isdst":true,"text":"(UTC-06:00) Guadalajara, Mexico City, Monterrey","utc":["America/Bahia_Banderas","America/Cancun","America/Merida","America/Mexico_City","America/Monterrey"]},{"value":"Canada Central Standard Time","abbr":"CCST","offset":-6,"isdst":false,"text":"(UTC-06:00) Saskatchewan","utc":["America/Regina","America/Swift_Current"]},{"value":"SA Pacific Standard Time","abbr":"SPST","offset":-5,"isdst":false,"text":"(UTC-05:00) Bogota, Lima, Quito","utc":["America/Bogota","America/Cayman","America/Coral_Harbour","America/Eirunepe","America/Guayaquil","America/Jamaica","America/Lima","America/Panama","America/Rio_Branco","Etc/GMT+5"]},{"value":"Eastern Standard Time","abbr":"EST","offset":-5,"isdst":false,"text":"(UTC-05:00) Eastern Time (US & Canada)","utc":["America/Detroit","America/Havana","America/Indiana/Petersburg","America/Indiana/Vincennes","America/Indiana/Winamac","America/Iqaluit","America/Kentucky/Monticello","America/Louisville","America/Montreal","America/Nassau","America/New_York","America/Nipigon","America/Pangnirtung","America/Port-au-Prince","America/Thunder_Bay","America/Toronto"]},{"value":"Eastern Daylight Time","abbr":"EDT","offset":-4,"isdst":true,"text":"(UTC-04:00) Eastern Daylight Time (US & Canada)","utc":["America/Detroit","America/Havana","America/Indiana/Petersburg","America/Indiana/Vincennes","America/Indiana/Winamac","America/Iqaluit","America/Kentucky/Monticello","America/Louisville","America/Montreal","America/Nassau","America/New_York","America/Nipigon","America/Pangnirtung","America/Port-au-Prince","America/Thunder_Bay","America/Toronto"]},{"value":"US Eastern Standard Time","abbr":"UEDT","offset":-5,"isdst":false,"text":"(UTC-05:00) Indiana (East)","utc":["America/Indiana/Marengo","America/Indiana/Vevay","America/Indianapolis"]},{"value":"Venezuela Standard Time","abbr":"VST","offset":-4.5,"isdst":false,"text":"(UTC-04:30) Caracas","utc":["America/Caracas"]},{"value":"Paraguay Standard Time","abbr":"PYT","offset":-4,"isdst":false,"text":"(UTC-04:00) Asuncion","utc":["America/Asuncion"]},{"value":"Atlantic Standard Time","abbr":"ADT","offset":-3,"isdst":true,"text":"(UTC-04:00) Atlantic Time (Canada)","utc":["America/Glace_Bay","America/Goose_Bay","America/Halifax","America/Moncton","America/Thule","Atlantic/Bermuda"]},{"value":"Central Brazilian Standard Time","abbr":"CBST","offset":-4,"isdst":false,"text":"(UTC-04:00) Cuiaba","utc":["America/Campo_Grande","America/Cuiaba"]},{"value":"SA Western Standard Time","abbr":"SWST","offset":-4,"isdst":false,"text":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan","utc":["America/Anguilla","America/Antigua","America/Aruba","America/Barbados","America/Blanc-Sablon","America/Boa_Vista","America/Curacao","America/Dominica","America/Grand_Turk","America/Grenada","America/Guadeloupe","America/Guyana","America/Kralendijk","America/La_Paz","America/Lower_Princes","America/Manaus","America/Marigot","America/Martinique","America/Montserrat","America/Port_of_Spain","America/Porto_Velho","America/Puerto_Rico","America/Santo_Domingo","America/St_Barthelemy","America/St_Kitts","America/St_Lucia","America/St_Thomas","America/St_Vincent","America/Tortola","Etc/GMT+4"]},{"value":"Pacific SA Standard Time","abbr":"PSST","offset":-4,"isdst":false,"text":"(UTC-04:00) Santiago","utc":["America/Santiago","Antarctica/Palmer"]},{"value":"Newfoundland Standard Time","abbr":"NDT","offset":-2.5,"isdst":true,"text":"(UTC-03:30) Newfoundland","utc":["America/St_Johns"]},{"value":"E. South America Standard Time","abbr":"ESAST","offset":-3,"isdst":false,"text":"(UTC-03:00) Brasilia","utc":["America/Sao_Paulo"]},{"value":"Argentina Standard Time","abbr":"AST","offset":-3,"isdst":false,"text":"(UTC-03:00) Buenos Aires","utc":["America/Argentina/Buenos_Aires","America/Argentina/Catamarca","America/Argentina/Cordoba","America/Argentina/Jujuy","America/Argentina/La_Rioja","America/Argentina/Mendoza","America/Argentina/Rio_Gallegos","America/Argentina/Salta","America/Argentina/San_Juan","America/Argentina/San_Luis","America/Argentina/Tucuman","America/Argentina/Ushuaia","America/Buenos_Aires","America/Catamarca","America/Cordoba","America/Jujuy","America/Mendoza"]},{"value":"SA Eastern Standard Time","abbr":"SEST","offset":-3,"isdst":false,"text":"(UTC-03:00) Cayenne, Fortaleza","utc":["America/Araguaina","America/Belem","America/Cayenne","America/Fortaleza","America/Maceio","America/Paramaribo","America/Recife","America/Santarem","Antarctica/Rothera","Atlantic/Stanley","Etc/GMT+3"]},{"value":"Greenland Standard Time","abbr":"GDT","offset":-3,"isdst":true,"text":"(UTC-03:00) Greenland","utc":["America/Godthab"]},{"value":"Montevideo Standard Time","abbr":"MST","offset":-3,"isdst":false,"text":"(UTC-03:00) Montevideo","utc":["America/Montevideo"]},{"value":"Bahia Standard Time","abbr":"BST","offset":-3,"isdst":false,"text":"(UTC-03:00) Salvador","utc":["America/Bahia"]},{"value":"UTC-02","abbr":"U","offset":-2,"isdst":false,"text":"(UTC-02:00) Coordinated Universal Time-02","utc":["America/Noronha","Atlantic/South_Georgia","Etc/GMT+2"]},{"value":"Mid-Atlantic Standard Time","abbr":"MDT","offset":-1,"isdst":true,"text":"(UTC-02:00) Mid-Atlantic - Old","utc":[]},{"value":"Azores Standard Time","abbr":"ADT","offset":0,"isdst":true,"text":"(UTC-01:00) Azores","utc":["America/Scoresbysund","Atlantic/Azores"]},{"value":"Cape Verde Standard Time","abbr":"CVST","offset":-1,"isdst":false,"text":"(UTC-01:00) Cape Verde Is.","utc":["Atlantic/Cape_Verde","Etc/GMT+1"]},{"value":"Morocco Standard Time","abbr":"MDT","offset":1,"isdst":true,"text":"(UTC) Casablanca","utc":["Africa/Casablanca","Africa/El_Aaiun"]},{"value":"UTC","abbr":"UTC","offset":0,"isdst":false,"text":"(UTC) Coordinated Universal Time","utc":["America/Danmarkshavn","Etc/GMT"]},{"value":"GMT Standard Time","abbr":"GMT","offset":0,"isdst":false,"text":"(UTC) Edinburgh, London","utc":["Europe/Isle_of_Man","Europe/Guernsey","Europe/Jersey","Europe/London"]},{"value":"British Summer Time","abbr":"BST","offset":1,"isdst":true,"text":"(UTC+01:00) Edinburgh, London","utc":["Europe/Isle_of_Man","Europe/Guernsey","Europe/Jersey","Europe/London"]},{"value":"GMT Standard Time","abbr":"GDT","offset":1,"isdst":true,"text":"(UTC) Dublin, Lisbon","utc":["Atlantic/Canary","Atlantic/Faeroe","Atlantic/Madeira","Europe/Dublin","Europe/Lisbon"]},{"value":"Greenwich Standard Time","abbr":"GST","offset":0,"isdst":false,"text":"(UTC) Monrovia, Reykjavik","utc":["Africa/Abidjan","Africa/Accra","Africa/Bamako","Africa/Banjul","Africa/Bissau","Africa/Conakry","Africa/Dakar","Africa/Freetown","Africa/Lome","Africa/Monrovia","Africa/Nouakchott","Africa/Ouagadougou","Africa/Sao_Tome","Atlantic/Reykjavik","Atlantic/St_Helena"]},{"value":"W. Europe Standard Time","abbr":"WEDT","offset":2,"isdst":true,"text":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna","utc":["Arctic/Longyearbyen","Europe/Amsterdam","Europe/Andorra","Europe/Berlin","Europe/Busingen","Europe/Gibraltar","Europe/Luxembourg","Europe/Malta","Europe/Monaco","Europe/Oslo","Europe/Rome","Europe/San_Marino","Europe/Stockholm","Europe/Vaduz","Europe/Vatican","Europe/Vienna","Europe/Zurich"]},{"value":"Central Europe Standard Time","abbr":"CEDT","offset":2,"isdst":true,"text":"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague","utc":["Europe/Belgrade","Europe/Bratislava","Europe/Budapest","Europe/Ljubljana","Europe/Podgorica","Europe/Prague","Europe/Tirane"]},{"value":"Romance Standard Time","abbr":"RDT","offset":2,"isdst":true,"text":"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris","utc":["Africa/Ceuta","Europe/Brussels","Europe/Copenhagen","Europe/Madrid","Europe/Paris"]},{"value":"Central European Standard Time","abbr":"CEDT","offset":2,"isdst":true,"text":"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb","utc":["Europe/Sarajevo","Europe/Skopje","Europe/Warsaw","Europe/Zagreb"]},{"value":"W. Central Africa Standard Time","abbr":"WCAST","offset":1,"isdst":false,"text":"(UTC+01:00) West Central Africa","utc":["Africa/Algiers","Africa/Bangui","Africa/Brazzaville","Africa/Douala","Africa/Kinshasa","Africa/Lagos","Africa/Libreville","Africa/Luanda","Africa/Malabo","Africa/Ndjamena","Africa/Niamey","Africa/Porto-Novo","Africa/Tunis","Etc/GMT-1"]},{"value":"Namibia Standard Time","abbr":"NST","offset":1,"isdst":false,"text":"(UTC+01:00) Windhoek","utc":["Africa/Windhoek"]},{"value":"GTB Standard Time","abbr":"GDT","offset":3,"isdst":true,"text":"(UTC+02:00) Athens, Bucharest","utc":["Asia/Nicosia","Europe/Athens","Europe/Bucharest","Europe/Chisinau"]},{"value":"Middle East Standard Time","abbr":"MEDT","offset":3,"isdst":true,"text":"(UTC+02:00) Beirut","utc":["Asia/Beirut"]},{"value":"Egypt Standard Time","abbr":"EST","offset":2,"isdst":false,"text":"(UTC+02:00) Cairo","utc":["Africa/Cairo"]},{"value":"Syria Standard Time","abbr":"SDT","offset":3,"isdst":true,"text":"(UTC+02:00) Damascus","utc":["Asia/Damascus"]},{"value":"E. Europe Standard Time","abbr":"EEDT","offset":3,"isdst":true,"text":"(UTC+02:00) E. Europe","utc":["Asia/Nicosia","Europe/Athens","Europe/Bucharest","Europe/Chisinau","Europe/Helsinki","Europe/Kiev","Europe/Mariehamn","Europe/Nicosia","Europe/Riga","Europe/Sofia","Europe/Tallinn","Europe/Uzhgorod","Europe/Vilnius","Europe/Zaporozhye"]},{"value":"South Africa Standard Time","abbr":"SAST","offset":2,"isdst":false,"text":"(UTC+02:00) Harare, Pretoria","utc":["Africa/Blantyre","Africa/Bujumbura","Africa/Gaborone","Africa/Harare","Africa/Johannesburg","Africa/Kigali","Africa/Lubumbashi","Africa/Lusaka","Africa/Maputo","Africa/Maseru","Africa/Mbabane","Etc/GMT-2"]},{"value":"FLE Standard Time","abbr":"FDT","offset":3,"isdst":true,"text":"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius","utc":["Europe/Helsinki","Europe/Kiev","Europe/Mariehamn","Europe/Riga","Europe/Sofia","Europe/Tallinn","Europe/Uzhgorod","Europe/Vilnius","Europe/Zaporozhye"]},{"value":"Turkey Standard Time","abbr":"TDT","offset":3,"isdst":false,"text":"(UTC+03:00) Istanbul","utc":["Europe/Istanbul"]},{"value":"Israel Standard Time","abbr":"JDT","offset":3,"isdst":true,"text":"(UTC+02:00) Jerusalem","utc":["Asia/Jerusalem"]},{"value":"Libya Standard Time","abbr":"LST","offset":2,"isdst":false,"text":"(UTC+02:00) Tripoli","utc":["Africa/Tripoli"]},{"value":"Jordan Standard Time","abbr":"JST","offset":3,"isdst":false,"text":"(UTC+03:00) Amman","utc":["Asia/Amman"]},{"value":"Arabic Standard Time","abbr":"AST","offset":3,"isdst":false,"text":"(UTC+03:00) Baghdad","utc":["Asia/Baghdad"]},{"value":"Kaliningrad Standard Time","abbr":"KST","offset":3,"isdst":false,"text":"(UTC+02:00) Kaliningrad","utc":["Europe/Kaliningrad"]},{"value":"Arab Standard Time","abbr":"AST","offset":3,"isdst":false,"text":"(UTC+03:00) Kuwait, Riyadh","utc":["Asia/Aden","Asia/Bahrain","Asia/Kuwait","Asia/Qatar","Asia/Riyadh"]},{"value":"E. Africa Standard Time","abbr":"EAST","offset":3,"isdst":false,"text":"(UTC+03:00) Nairobi","utc":["Africa/Addis_Ababa","Africa/Asmera","Africa/Dar_es_Salaam","Africa/Djibouti","Africa/Juba","Africa/Kampala","Africa/Khartoum","Africa/Mogadishu","Africa/Nairobi","Antarctica/Syowa","Etc/GMT-3","Indian/Antananarivo","Indian/Comoro","Indian/Mayotte"]},{"value":"Moscow Standard Time","abbr":"MSK","offset":3,"isdst":false,"text":"(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk","utc":["Europe/Kirov","Europe/Moscow","Europe/Simferopol","Europe/Volgograd","Europe/Minsk"]},{"value":"Samara Time","abbr":"SAMT","offset":4,"isdst":false,"text":"(UTC+04:00) Samara, Ulyanovsk, Saratov","utc":["Europe/Astrakhan","Europe/Samara","Europe/Ulyanovsk"]},{"value":"Iran Standard Time","abbr":"IDT","offset":4.5,"isdst":true,"text":"(UTC+03:30) Tehran","utc":["Asia/Tehran"]},{"value":"Arabian Standard Time","abbr":"AST","offset":4,"isdst":false,"text":"(UTC+04:00) Abu Dhabi, Muscat","utc":["Asia/Dubai","Asia/Muscat","Etc/GMT-4"]},{"value":"Azerbaijan Standard Time","abbr":"ADT","offset":5,"isdst":true,"text":"(UTC+04:00) Baku","utc":["Asia/Baku"]},{"value":"Mauritius Standard Time","abbr":"MST","offset":4,"isdst":false,"text":"(UTC+04:00) Port Louis","utc":["Indian/Mahe","Indian/Mauritius","Indian/Reunion"]},{"value":"Georgian Standard Time","abbr":"GET","offset":4,"isdst":false,"text":"(UTC+04:00) Tbilisi","utc":["Asia/Tbilisi"]},{"value":"Caucasus Standard Time","abbr":"CST","offset":4,"isdst":false,"text":"(UTC+04:00) Yerevan","utc":["Asia/Yerevan"]},{"value":"Afghanistan Standard Time","abbr":"AST","offset":4.5,"isdst":false,"text":"(UTC+04:30) Kabul","utc":["Asia/Kabul"]},{"value":"West Asia Standard Time","abbr":"WAST","offset":5,"isdst":false,"text":"(UTC+05:00) Ashgabat, Tashkent","utc":["Antarctica/Mawson","Asia/Aqtau","Asia/Aqtobe","Asia/Ashgabat","Asia/Dushanbe","Asia/Oral","Asia/Samarkand","Asia/Tashkent","Etc/GMT-5","Indian/Kerguelen","Indian/Maldives"]},{"value":"Yekaterinburg Time","abbr":"YEKT","offset":5,"isdst":false,"text":"(UTC+05:00) Yekaterinburg","utc":["Asia/Yekaterinburg"]},{"value":"Pakistan Standard Time","abbr":"PKT","offset":5,"isdst":false,"text":"(UTC+05:00) Islamabad, Karachi","utc":["Asia/Karachi"]},{"value":"India Standard Time","abbr":"IST","offset":5.5,"isdst":false,"text":"(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi","utc":["Asia/Kolkata","Asia/Calcutta"]},{"value":"Sri Lanka Standard Time","abbr":"SLST","offset":5.5,"isdst":false,"text":"(UTC+05:30) Sri Jayawardenepura","utc":["Asia/Colombo"]},{"value":"Nepal Standard Time","abbr":"NST","offset":5.75,"isdst":false,"text":"(UTC+05:45) Kathmandu","utc":["Asia/Kathmandu"]},{"value":"Central Asia Standard Time","abbr":"CAST","offset":6,"isdst":false,"text":"(UTC+06:00) Nur-Sultan (Astana)","utc":["Antarctica/Vostok","Asia/Almaty","Asia/Bishkek","Asia/Qyzylorda","Asia/Urumqi","Etc/GMT-6","Indian/Chagos"]},{"value":"Bangladesh Standard Time","abbr":"BST","offset":6,"isdst":false,"text":"(UTC+06:00) Dhaka","utc":["Asia/Dhaka","Asia/Thimphu"]},{"value":"Myanmar Standard Time","abbr":"MST","offset":6.5,"isdst":false,"text":"(UTC+06:30) Yangon (Rangoon)","utc":["Asia/Rangoon","Indian/Cocos"]},{"value":"SE Asia Standard Time","abbr":"SAST","offset":7,"isdst":false,"text":"(UTC+07:00) Bangkok, Hanoi, Jakarta","utc":["Antarctica/Davis","Asia/Bangkok","Asia/Hovd","Asia/Jakarta","Asia/Phnom_Penh","Asia/Pontianak","Asia/Saigon","Asia/Vientiane","Etc/GMT-7","Indian/Christmas"]},{"value":"N. Central Asia Standard Time","abbr":"NCAST","offset":7,"isdst":false,"text":"(UTC+07:00) Novosibirsk","utc":["Asia/Novokuznetsk","Asia/Novosibirsk","Asia/Omsk"]},{"value":"China Standard Time","abbr":"CST","offset":8,"isdst":false,"text":"(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi","utc":["Asia/Hong_Kong","Asia/Macau","Asia/Shanghai"]},{"value":"North Asia Standard Time","abbr":"NAST","offset":8,"isdst":false,"text":"(UTC+08:00) Krasnoyarsk","utc":["Asia/Krasnoyarsk"]},{"value":"Singapore Standard Time","abbr":"MPST","offset":8,"isdst":false,"text":"(UTC+08:00) Kuala Lumpur, Singapore","utc":["Asia/Brunei","Asia/Kuala_Lumpur","Asia/Kuching","Asia/Makassar","Asia/Manila","Asia/Singapore","Etc/GMT-8"]},{"value":"W. Australia Standard Time","abbr":"WAST","offset":8,"isdst":false,"text":"(UTC+08:00) Perth","utc":["Antarctica/Casey","Australia/Perth"]},{"value":"Taipei Standard Time","abbr":"TST","offset":8,"isdst":false,"text":"(UTC+08:00) Taipei","utc":["Asia/Taipei"]},{"value":"Ulaanbaatar Standard Time","abbr":"UST","offset":8,"isdst":false,"text":"(UTC+08:00) Ulaanbaatar","utc":["Asia/Choibalsan","Asia/Ulaanbaatar"]},{"value":"North Asia East Standard Time","abbr":"NAEST","offset":8,"isdst":false,"text":"(UTC+08:00) Irkutsk","utc":["Asia/Irkutsk"]},{"value":"Japan Standard Time","abbr":"JST","offset":9,"isdst":false,"text":"(UTC+09:00) Osaka, Sapporo, Tokyo","utc":["Asia/Dili","Asia/Jayapura","Asia/Tokyo","Etc/GMT-9","Pacific/Palau"]},{"value":"Korea Standard Time","abbr":"KST","offset":9,"isdst":false,"text":"(UTC+09:00) Seoul","utc":["Asia/Pyongyang","Asia/Seoul"]},{"value":"Cen. Australia Standard Time","abbr":"CAST","offset":9.5,"isdst":false,"text":"(UTC+09:30) Adelaide","utc":["Australia/Adelaide","Australia/Broken_Hill"]},{"value":"AUS Central Standard Time","abbr":"ACST","offset":9.5,"isdst":false,"text":"(UTC+09:30) Darwin","utc":["Australia/Darwin"]},{"value":"E. Australia Standard Time","abbr":"EAST","offset":10,"isdst":false,"text":"(UTC+10:00) Brisbane","utc":["Australia/Brisbane","Australia/Lindeman"]},{"value":"AUS Eastern Standard Time","abbr":"AEST","offset":10,"isdst":false,"text":"(UTC+10:00) Canberra, Melbourne, Sydney","utc":["Australia/Melbourne","Australia/Sydney"]},{"value":"West Pacific Standard Time","abbr":"WPST","offset":10,"isdst":false,"text":"(UTC+10:00) Guam, Port Moresby","utc":["Antarctica/DumontDUrville","Etc/GMT-10","Pacific/Guam","Pacific/Port_Moresby","Pacific/Saipan","Pacific/Truk"]},{"value":"Tasmania Standard Time","abbr":"TST","offset":10,"isdst":false,"text":"(UTC+10:00) Hobart","utc":["Australia/Currie","Australia/Hobart"]},{"value":"Yakutsk Standard Time","abbr":"YST","offset":9,"isdst":false,"text":"(UTC+09:00) Yakutsk","utc":["Asia/Chita","Asia/Khandyga","Asia/Yakutsk"]},{"value":"Central Pacific Standard Time","abbr":"CPST","offset":11,"isdst":false,"text":"(UTC+11:00) Solomon Is., New Caledonia","utc":["Antarctica/Macquarie","Etc/GMT-11","Pacific/Efate","Pacific/Guadalcanal","Pacific/Kosrae","Pacific/Noumea","Pacific/Ponape"]},{"value":"Vladivostok Standard Time","abbr":"VST","offset":11,"isdst":false,"text":"(UTC+11:00) Vladivostok","utc":["Asia/Sakhalin","Asia/Ust-Nera","Asia/Vladivostok"]},{"value":"New Zealand Standard Time","abbr":"NZST","offset":12,"isdst":false,"text":"(UTC+12:00) Auckland, Wellington","utc":["Antarctica/McMurdo","Pacific/Auckland"]},{"value":"UTC+12","abbr":"U","offset":12,"isdst":false,"text":"(UTC+12:00) Coordinated Universal Time+12","utc":["Etc/GMT-12","Pacific/Funafuti","Pacific/Kwajalein","Pacific/Majuro","Pacific/Nauru","Pacific/Tarawa","Pacific/Wake","Pacific/Wallis"]},{"value":"Fiji Standard Time","abbr":"FST","offset":12,"isdst":false,"text":"(UTC+12:00) Fiji","utc":["Pacific/Fiji"]},{"value":"Magadan Standard Time","abbr":"MST","offset":12,"isdst":false,"text":"(UTC+12:00) Magadan","utc":["Asia/Anadyr","Asia/Kamchatka","Asia/Magadan","Asia/Srednekolymsk"]},{"value":"Kamchatka Standard Time","abbr":"KDT","offset":13,"isdst":true,"text":"(UTC+12:00) Petropavlovsk-Kamchatsky - Old","utc":["Asia/Kamchatka"]},{"value":"Tonga Standard Time","abbr":"TST","offset":13,"isdst":false,"text":"(UTC+13:00) Nuku\'alofa","utc":["Etc/GMT-13","Pacific/Enderbury","Pacific/Fakaofo","Pacific/Tongatapu"]},{"value":"Samoa Standard Time","abbr":"SST","offset":13,"isdst":false,"text":"(UTC+13:00) Samoa","utc":["Pacific/Apia"]}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [989,283,61], () => (__webpack_exec__(930)));
module.exports = __webpack_exports__;

})();