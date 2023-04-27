"use strict";
exports.id = 61;
exports.ids = [61];
exports.modules = {

/***/ 7061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DashboardLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mantine/core"
var core_ = __webpack_require__(2247);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-error-boundary"
var external_react_error_boundary_ = __webpack_require__(5184);
;// CONCATENATED MODULE: ./src/components/util/LayoutErrorBoundary.tsx
/* eslint-disable @typescript-eslint/no-unsafe-member-access */ 

const LayoutErrorBoundary = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_error_boundary_.ErrorBoundary, {
        FallbackComponent: ErrorFallback,
        children: children
    });
};
const ErrorFallback = ({ error  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: "Something went wrong:"
            }),
            error.message
        ]
    });
};

// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(3524);
// EXTERNAL MODULE: external "@tabler/icons-react"
var icons_react_ = __webpack_require__(2236);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/NavigationBar.tsx
/* eslint-disable @typescript-eslint/no-floating-promises */ 






const MainLink = ({ icon , color , label , path , setOpened  })=>{
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.UnstyledButton, {
        sx: (theme)=>({
                display: "block",
                width: "100%",
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                backgroundColor: path == router.pathname ? theme.colorScheme === "dark" ? theme.colors.dark : theme.colors.blue[1] : theme.colors.white,
                color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
                "&:hover": {
                    backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[2]
                }
            }),
        onClick: ()=>{
            router.push(path);
            setOpened(false);
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(core_.ThemeIcon, {
                    color: color,
                    variant: "light",
                    size: "lg",
                    children: icon
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                    size: "sm",
                    children: label
                })
            ]
        })
    });
};
const getMenuitems = (user)=>{
    const menuItems = [
        {
            icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconDashboard, {
                size: "1rem"
            }),
            color: "blue",
            label: "Dashboard",
            path: "/",
            sortOrder: 0
        },
        {
            icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconUser, {
                size: "1rem"
            }),
            color: "green",
            label: "Account",
            path: "/account",
            sortOrder: 3
        },
        {
            icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconAlignBoxLeftMiddle, {
                size: "1rem"
            }),
            color: "orange",
            label: "Services",
            path: "/services",
            sortOrder: 3
        }
    ];
    // add manager only menu items
    if (user.role == client_.UserRole.MANAGER) {
        menuItems.push({
            icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconUsers, {
                size: "1rem"
            }),
            color: "grape",
            label: "Team",
            path: "/team",
            sortOrder: 2
        });
    }
    return menuItems.sort((a, b)=>a.sortOrder > b.sortOrder ? 1 : -1);
};
function NavigationBar({ opened , setOpened  }) {
    const session = (0,react_.useSession)();
    if (session.status != "authenticated") {
        return /*#__PURE__*/ jsx_runtime_.jsx(core_.Navbar, {
            p: "md",
            hiddenBreakpoint: "sm",
            hidden: !opened,
            width: {
                sm: 200,
                lg: 300
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Navbar.Section, {
                grow: true,
                mt: "md",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: "Loading..."
                })
            })
        });
    }
    const links = getMenuitems(session.data.user).map((link)=>/*#__PURE__*/ (0,external_react_.createElement)(MainLink, {
            ...link,
            key: link.label,
            setOpened: setOpened
        }));
    return /*#__PURE__*/ jsx_runtime_.jsx(core_.Navbar, {
        p: "md",
        hiddenBreakpoint: "sm",
        hidden: !opened,
        width: {
            sm: 200,
            lg: 300
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Navbar.Section, {
            grow: true,
            mt: "md",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: links
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/UserMenu.tsx




function UserMenu() {
    const { data: session  } = (0,react_.useSession)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Menu, {
        shadow: "md",
        width: 200,
        withArrow: true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(core_.Menu.Target, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(core_.ActionIcon, {
                    variant: "hover",
                    radius: "xl",
                    size: 40,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Avatar, {
                        src: `${"https://qamedia.detailpad.com"}/avatars/${session?.user.avatar != null ? session?.user.avatar : "default_ava.jpg"}`,
                        radius: "xl"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Menu.Dropdown, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Menu.Label, {
                        children: "Application"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Menu.Item, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconSettings, {
                            size: 14
                        }),
                        children: "Settings"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Menu.Item, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconMessageCircle, {
                            size: 14
                        }),
                        children: "Messages"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Menu.Item, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconPhoto, {
                            size: 14
                        }),
                        children: "Gallery"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Menu.Item, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconSearch, {
                            size: 14
                        }),
                        rightSection: /*#__PURE__*/ jsx_runtime_.jsx(core_.Text, {
                            size: "xs",
                            color: "dimmed",
                            children: "⌘K"
                        }),
                        children: "Search"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Menu.Divider, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Menu.Label, {
                        children: "Danger zone"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Menu.Item, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconArrowsLeftRight, {
                            size: 14
                        }),
                        children: "Transfer my data"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(core_.Menu.Item, {
                        color: "red",
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_react_.IconDoor, {
                            size: 14
                        }),
                        onClick: ()=>(0,react_.signOut)(),
                        children: "Logout"
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/layouts/DashboardLayout.tsx
/* eslint-disable @typescript-eslint/no-unsafe-assignment */ /* eslint-disable @typescript-eslint/no-unsafe-member-access */ 





function DashboardLayout({ children  }) {
    const theme = (0,core_.useMantineTheme)();
    const [opened, setOpened] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(core_.AppShell, {
            padding: "md",
            navbarOffsetBreakpoint: "sm",
            asideOffsetBreakpoint: "sm",
            styles: (theme)=>({
                    main: {
                        backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
                    }
                }),
            navbar: /*#__PURE__*/ jsx_runtime_.jsx(NavigationBar, {
                opened: opened,
                setOpened: setOpened
            }),
            header: /*#__PURE__*/ jsx_runtime_.jsx(core_.Header, {
                height: 70,
                p: "md",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(core_.Group, {
                    position: "apart",
                    noWrap: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.MediaQuery, {
                            largerThan: "sm",
                            styles: {
                                display: "none"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Burger, {
                                style: {
                                    justifyContent: "start"
                                },
                                opened: opened,
                                onClick: ()=>setOpened((o)=>!o),
                                size: "sm",
                                color: theme.colors.gray[6],
                                mr: "xl"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(core_.MediaQuery, {
                            smallerThan: "sm",
                            styles: {
                                display: "none"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx(core_.Title, {
                                children: "App"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(UserMenu, {})
                    ]
                })
            }),
            footer: /*#__PURE__*/ jsx_runtime_.jsx(core_.Footer, {
                height: 60,
                p: "md",
                children: "Detailpad Footer"
            }),
            children: /*#__PURE__*/ jsx_runtime_.jsx(LayoutErrorBoundary, {
                children: children
            })
        })
    });
}


/***/ })

};
;