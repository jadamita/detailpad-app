"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 2104:
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 1246:
/***/ ((module) => {

module.exports = require("@upstash/ratelimit");

/***/ }),

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 3227:
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ 7449:
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ 2930:
/***/ ((module) => {

module.exports = require("next-axiom");

/***/ }),

/***/ 72:
/***/ ((module) => {

module.exports = require("superjson");

/***/ }),

/***/ 2937:
/***/ ((module) => {

module.exports = import("@trpc/server");;

/***/ }),

/***/ 6282:
/***/ ((module) => {

module.exports = import("@trpc/server/adapters/next");;

/***/ }),

/***/ 1721:
/***/ ((module) => {

module.exports = import("@upstash/redis");;

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 2148:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6282);
/* harmony import */ var _env_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6205);
/* harmony import */ var _server_api_trpc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7571);
/* harmony import */ var _server_api_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5025);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, _env_mjs__WEBPACK_IMPORTED_MODULE_1__, _server_api_trpc__WEBPACK_IMPORTED_MODULE_2__, _server_api_root__WEBPACK_IMPORTED_MODULE_3__]);
([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, _env_mjs__WEBPACK_IMPORTED_MODULE_1__, _server_api_trpc__WEBPACK_IMPORTED_MODULE_2__, _server_api_root__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// export API handler
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__.createNextApiHandler)({
    router: _server_api_root__WEBPACK_IMPORTED_MODULE_3__/* .appRouter */ .q,
    createContext: _server_api_trpc__WEBPACK_IMPORTED_MODULE_2__/* .createTRPCContext */ .uw,
    onError: _env_mjs__WEBPACK_IMPORTED_MODULE_1__/* .env.NODE_ENV */ .O.NODE_ENV === "development" ? ({ path , error  })=>{
        console.error(`❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`);
    } : undefined
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5025:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ appRouter)
/* harmony export */ });
/* harmony import */ var _server_api_trpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7571);
/* harmony import */ var _server_api_routers_example__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(660);
/* harmony import */ var _routers_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5110);
/* harmony import */ var _routers_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4060);
/* harmony import */ var _routers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4608);
/* harmony import */ var _routers_booking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(526);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_api_trpc__WEBPACK_IMPORTED_MODULE_0__, _server_api_routers_example__WEBPACK_IMPORTED_MODULE_1__, _routers_user__WEBPACK_IMPORTED_MODULE_2__, _routers_profile__WEBPACK_IMPORTED_MODULE_3__, _routers_service__WEBPACK_IMPORTED_MODULE_4__, _routers_booking__WEBPACK_IMPORTED_MODULE_5__]);
([_server_api_trpc__WEBPACK_IMPORTED_MODULE_0__, _server_api_routers_example__WEBPACK_IMPORTED_MODULE_1__, _routers_user__WEBPACK_IMPORTED_MODULE_2__, _routers_profile__WEBPACK_IMPORTED_MODULE_3__, _routers_service__WEBPACK_IMPORTED_MODULE_4__, _routers_booking__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */ const appRouter = (0,_server_api_trpc__WEBPACK_IMPORTED_MODULE_0__/* .createTRPCRouter */ .hA)({
    example: _server_api_routers_example__WEBPACK_IMPORTED_MODULE_1__/* .exampleRouter */ .z,
    user: _routers_user__WEBPACK_IMPORTED_MODULE_2__/* .userRouter */ .O,
    profile: _routers_profile__WEBPACK_IMPORTED_MODULE_3__/* .profileRouter */ .q,
    service: _routers_service__WEBPACK_IMPORTED_MODULE_4__/* .serviceRouter */ .w,
    booking: _routers_booking__WEBPACK_IMPORTED_MODULE_5__/* .bookingRouter */ .l
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 526:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ bookingRouter)
/* harmony export */ });
/* harmony import */ var _server_api_trpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7571);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_api_trpc__WEBPACK_IMPORTED_MODULE_0__]);
_server_api_trpc__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const bookingRouter = (0,_server_api_trpc__WEBPACK_IMPORTED_MODULE_0__/* .createTRPCRouter */ .hA)({
    getAll: _server_api_trpc__WEBPACK_IMPORTED_MODULE_0__/* .publicProcedure.query */ .$y.query(()=>{
        return "asd";
    })
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 660:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ exampleRouter)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7571);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__, _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__]);
([zod__WEBPACK_IMPORTED_MODULE_0__, _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const exampleRouter = (0,_server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .createTRPCRouter */ .hA)({
    hello: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .publicProcedure.input */ .$y.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        text: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    })).query(({ input  })=>{
        return {
            greeting: `Hello ${input.text}`
        };
    }),
    getAll: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .publicProcedure.query */ .$y.query(()=>{
        return "asd";
    }),
    getSecretMessage: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .protectedProcedure.query */ .U5.query(()=>{
        return "you can now see this secret message!";
    })
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4060:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ profileRouter)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7571);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__, _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__]);
([zod__WEBPACK_IMPORTED_MODULE_0__, _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const profileRouter = (0,_server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .createTRPCRouter */ .hA)({
    setAccountProfile: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .protectedProcedure.input */ .U5.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        firstName: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
        lastName: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
        timeZone: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    })).mutation(async ({ ctx , input  })=>{
        return await ctx.prisma.profile.update({
            where: {
                userId: ctx.session.user.id
            },
            data: {
                firstName: input.firstName,
                lastName: input.lastName,
                timeZone: input.timeZone
            }
        });
    }),
    getAccountProfile: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .protectedProcedure.query */ .U5.query(async ({ ctx  })=>{
        return await ctx.prisma.profile.findFirst({
            where: {
                userId: ctx.session.user.id
            },
            select: {
                firstName: true,
                lastName: true,
                timeZone: true
            }
        });
    })
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4608:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ serviceRouter)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7571);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__, _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__]);
([zod__WEBPACK_IMPORTED_MODULE_0__, _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const getNamedType = (type)=>{
    switch(type){
        case "INTERIOR":
            return "Interior";
        case "EXTERIOR":
            return "Exterior";
        case "OTHER":
            return "Add ons";
    }
};
const serviceRouter = (0,_server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .createTRPCRouter */ .hA)({
    getServices: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .protectedProcedure.query */ .U5.query(async ({ ctx  })=>{
        const data = await ctx.prisma.service.findMany({
            where: {
                isCustom: false
            }
        });
        const totalServices = data.map((x)=>({
                value: x.id.toString(),
                image: x.icon,
                label: x.name,
                description: x.description,
                group: getNamedType(x.type)
            }));
        const selectedServicesResults = await ctx.prisma.companyServices.findMany({
            where: {
                companyId: ctx.session.user.org
            },
            include: {
                service: true
            }
        });
        const selectedServices = selectedServicesResults.map((x)=>({
                ...x.service
            })).map((x)=>({
                value: x.id.toString(),
                image: x.icon,
                label: x.name,
                description: x.description,
                group: getNamedType(x.type)
            }));
        const filteredServices = totalServices.filter((x)=>{
            return !selectedServices.some((y)=>y.value === x.value);
        });
        const returnList = [
            filteredServices,
            selectedServices
        ];
        return returnList;
    }),
    updateServices: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .protectedProcedure.input */ .U5.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        selected: zod__WEBPACK_IMPORTED_MODULE_0__.z.array(zod__WEBPACK_IMPORTED_MODULE_0__.z.number())
    })).mutation(async ({ ctx , input  })=>{
        try {
            await ctx.prisma.companyServices.deleteMany({
                where: {
                    companyId: ctx.session.user.org
                }
            });
            const batch = input.selected.map((x)=>({
                    companyId: ctx.session.user.org,
                    serviceId: x
                }));
            await ctx.prisma.companyServices.createMany({
                data: batch
            });
            return true;
        } catch (error) {
            return false;
        }
    })
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5110:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ userRouter)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7571);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2937);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__, _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__, _trpc_server__WEBPACK_IMPORTED_MODULE_3__, uuid__WEBPACK_IMPORTED_MODULE_5__]);
([zod__WEBPACK_IMPORTED_MODULE_0__, _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__, _trpc_server__WEBPACK_IMPORTED_MODULE_3__, uuid__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const userRouter = (0,_server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .createTRPCRouter */ .hA)({
    setAvatar: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .protectedProcedure.input */ .U5.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        name: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    })).mutation(async ({ ctx , input  })=>{
        const user = await ctx.prisma.user.update({
            where: {
                id: ctx.session.user.id
            },
            data: {
                avatar: input.name
            }
        });
        return user?.avatar;
    }),
    getAvatar: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .protectedProcedure.query */ .U5.query(async ({ ctx  })=>{
        const user = await ctx.prisma.user.findFirst({
            where: {
                id: ctx.session.user.id
            }
        });
        return user?.avatar;
    }),
    activateUser: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .publicProcedure.input */ .$y.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        hash: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().uuid(),
        password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    })).mutation(async ({ ctx , input  })=>{
        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(input.password, 5);
        const user = await ctx.prisma.user.update({
            where: {
                hash: input.hash
            },
            data: {
                status: _prisma_client__WEBPACK_IMPORTED_MODULE_4__.UserStatus.ACTIVATED,
                passwordHash: hashedPassword
            }
        });
        if (user) {
            await ctx.prisma.activityLog.create({
                data: {
                    type: _prisma_client__WEBPACK_IMPORTED_MODULE_4__.ActivityType.USER_ACTIVATE,
                    message: `User: ${user.email || "ERROR"} has been activated`,
                    userId: user.id
                }
            });
            return true;
        }
        return false;
    }),
    getUnactivatedUser: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .publicProcedure.input */ .$y.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        hash: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().uuid()
    })).query(async ({ ctx , input  })=>{
        const user = await ctx.prisma.user.findFirst({
            where: {
                hash: input.hash,
                status: _prisma_client__WEBPACK_IMPORTED_MODULE_4__.UserStatus.PENDING_ACTIVATION
            },
            select: {
                email: true
            }
        });
        if (user) return user;
        return null;
    }),
    getUsers: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .roleProtectedProcedure.meta */ .tc.meta({
        roleRequired: _prisma_client__WEBPACK_IMPORTED_MODULE_4__.UserRole.MANAGER
    }).query(async ({ ctx  })=>{
        const users = await ctx.prisma.user.findMany({
            where: {
                company: {
                    id: ctx.session.user.org
                },
                id: {
                    not: {
                        equals: ctx.session.user.id
                    }
                }
            },
            select: {
                id: true,
                avatar: true,
                name: true,
                email: true,
                status: true,
                role: true,
                hash: true
            }
        });
        return users;
    }),
    addUser: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .roleProtectedProcedure.meta */ .tc.meta({
        roleRequired: _prisma_client__WEBPACK_IMPORTED_MODULE_4__.UserRole.MANAGER
    }).input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        username: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(3),
        email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email()
    })).mutation(async ({ ctx , input  })=>{
        const doesExist = await ctx.prisma.user.findFirst({
            where: {
                OR: [
                    {
                        name: {
                            equals: input.username.toLowerCase()
                        }
                    },
                    {
                        email: {
                            equals: input.email.toLowerCase()
                        }
                    }
                ]
            }
        });
        const company = await ctx.prisma.company.findFirst({
            where: {
                userId: ctx.session.user.id
            }
        });
        const DEFAULT_PASSWORD = "123123123";
        if (doesExist == null) {
            const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(DEFAULT_PASSWORD, 5);
            await ctx.prisma.user.create({
                data: {
                    name: input.username,
                    email: input.email,
                    passwordHash: hashedPassword,
                    status: _prisma_client__WEBPACK_IMPORTED_MODULE_4__.UserStatus.PENDING_ACTIVATION,
                    role: _prisma_client__WEBPACK_IMPORTED_MODULE_4__.UserRole.EMPLOYEE,
                    hash: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
                    avatar: "default_ava.jpg",
                    company: {
                        connect: {
                            id: company?.id
                        }
                    },
                    profile: {
                        create: {
                            firstName: "",
                            lastName: ""
                        }
                    }
                }
            });
        } else {
            throw new _trpc_server__WEBPACK_IMPORTED_MODULE_3__.TRPCError({
                code: "BAD_REQUEST",
                message: "The username or email already exist"
            });
        }
        return true;
    }),
    register: _server_api_trpc__WEBPACK_IMPORTED_MODULE_1__/* .publicProcedure.input */ .$y.input(zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        companyName: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(3),
        username: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(3),
        email: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().email(),
        password: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(6),
        confirmPassword: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().min(6)
    })).mutation(async ({ ctx , input  })=>{
        const doesExist = await ctx.prisma.user.findFirst({
            where: {
                OR: [
                    {
                        name: {
                            equals: input.username.toLowerCase()
                        }
                    },
                    {
                        email: {
                            equals: input.email.toLowerCase()
                        }
                    }
                ]
            }
        });
        if (doesExist == null) {
            const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().hash(input.password, 5);
            const result = await ctx.prisma.user.create({
                data: {
                    name: input.username,
                    email: input.email,
                    passwordHash: hashedPassword,
                    status: _prisma_client__WEBPACK_IMPORTED_MODULE_4__.UserStatus.PENDING_VERIFICATION,
                    hash: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
                    avatar: "default_ava.jpg",
                    profile: {
                        create: {
                            firstName: "",
                            lastName: ""
                        }
                    }
                }
            });
            const newCompany = await ctx.prisma.company.create({
                data: {
                    name: input.companyName,
                    userId: result.id
                }
            });
            await ctx.prisma.user.update({
                where: {
                    id: result.id
                },
                data: {
                    companyId: newCompany.id
                }
            });
        } else {
            throw new _trpc_server__WEBPACK_IMPORTED_MODULE_3__.TRPCError({
                code: "BAD_REQUEST",
                message: "The username or email already exist"
            });
        }
        return true;
    })
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7571:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$y": () => (/* binding */ publicProcedure),
/* harmony export */   "U5": () => (/* binding */ protectedProcedure),
/* harmony export */   "hA": () => (/* binding */ createTRPCRouter),
/* harmony export */   "tc": () => (/* binding */ roleProtectedProcedure),
/* harmony export */   "uw": () => (/* binding */ createTRPCContext)
/* harmony export */ });
/* harmony import */ var _server_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7550);
/* harmony import */ var _server_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5495);
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2937);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_auth__WEBPACK_IMPORTED_MODULE_0__, _server_db__WEBPACK_IMPORTED_MODULE_1__, _trpc_server__WEBPACK_IMPORTED_MODULE_2__, zod__WEBPACK_IMPORTED_MODULE_4__]);
([_server_auth__WEBPACK_IMPORTED_MODULE_0__, _server_db__WEBPACK_IMPORTED_MODULE_1__, _trpc_server__WEBPACK_IMPORTED_MODULE_2__, zod__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/**
 * YOU PROBABLY DON'T NEED TO EDIT THIS FILE, UNLESS:
 * 1. You want to modify request context (see Part 1).
 * 2. You want to create a new middleware or type of procedure (see Part 3).
 *
 * TL;DR - This is where all the tRPC server stuff is created and plugged in. The pieces you will
 * need to use are documented accordingly near the end.
 */ /**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the database, the session, etc.
 */ 

/**
 * This helper generates the "internals" for a tRPC context. If you need to use it, you can export
 * it from here.
 *
 * Examples of things you may need it for:
 * - testing, so we don't have to mock Next.js' req/res
 * - tRPC's `createSSGHelpers`, where we don't have req/res
 *
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 */ const createInnerTRPCContext = (opts)=>{
    return {
        session: opts.session,
        prisma: _server_db__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ ._
    };
};
/**
 * This is the actual context you will use in your router. It will be used to process every request
 * that goes through your tRPC endpoint.
 *
 * @see https://trpc.io/docs/context
 */ const createTRPCContext = async (opts)=>{
    const { req , res  } = opts;
    // Get the session from the server using the getServerSession wrapper function
    const session = await (0,_server_auth__WEBPACK_IMPORTED_MODULE_0__/* .getServerAuthSession */ .W)({
        req,
        res
    });
    return createInnerTRPCContext({
        session
    });
};
/**
 * 2. INITIALIZATION
 *
 * This is where the tRPC API is initialized, connecting the context and transformer. We also parse
 * ZodErrors so that you get typesafety on the frontend if your procedure fails due to validation
 * errors on the backend.
 */ 


const t = _trpc_server__WEBPACK_IMPORTED_MODULE_2__.initTRPC.context().meta().create({
    transformer: (superjson__WEBPACK_IMPORTED_MODULE_3___default()),
    errorFormatter ({ shape , error  }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError: error.cause instanceof zod__WEBPACK_IMPORTED_MODULE_4__.ZodError ? error.cause.flatten() : null
            }
        };
    }
});
/**
 * 3. ROUTER & PROCEDURE (THE IMPORTANT BIT)
 *
 * These are the pieces you use to build your tRPC API. You should import these a lot in the
 * "/src/server/api/routers" directory.
 */ /**
 * This is how you create new routers and sub-routers in your tRPC API.
 *
 * @see https://trpc.io/docs/router
 */ const createTRPCRouter = t.router;
/**
 * Public (unauthenticated) procedure
 *
 * This is the base piece you use to build new queries and mutations on your tRPC API. It does not
 * guarantee that a user querying is authorized, but you can still access user session data if they
 * are logged in.
 */ const publicProcedure = t.procedure;
/** Reusable middleware that enforces users are logged in before running the procedure. */ const enforceUserIsAuthed = t.middleware(({ ctx , next  })=>{
    if (!ctx.session || !ctx.session.user) {
        throw new _trpc_server__WEBPACK_IMPORTED_MODULE_2__.TRPCError({
            code: "UNAUTHORIZED"
        });
    }
    return next({
        ctx: {
            // infers the `session` as non-nullable
            session: {
                ...ctx.session,
                user: ctx.session.user
            }
        }
    });
});
const enforceUserIsAuthedAndRole = t.middleware(({ meta , ctx , next  })=>{
    if (!ctx.session || !ctx.session.user) {
        throw new _trpc_server__WEBPACK_IMPORTED_MODULE_2__.TRPCError({
            code: "UNAUTHORIZED"
        });
    }
    if (ctx.session.user.role != meta?.roleRequired) {
        throw new _trpc_server__WEBPACK_IMPORTED_MODULE_2__.TRPCError({
            code: "UNAUTHORIZED"
        });
    }
    return next({
        ctx: {
            // infers the `session` as non-nullable
            session: {
                ...ctx.session,
                user: ctx.session.user
            }
        }
    });
});
/**
 * Protected (authenticated) procedure
 *
 * If you want a query or mutation to ONLY be accessible to logged in users, use this. It verifies
 * the session is valid and guarantees `ctx.session.user` is not null.
 *
 * @see https://trpc.io/docs/procedures
 */ const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
const roleProtectedProcedure = t.procedure.use(enforceUserIsAuthedAndRole);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [550], () => (__webpack_exec__(2148)));
module.exports = __webpack_exports__;

})();