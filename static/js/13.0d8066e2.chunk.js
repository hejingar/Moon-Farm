(this["webpackJsonpgoose-frontend"] = this["webpackJsonpgoose-frontend"] || []).push([
    [13],
    {
        695: function (e, n, t) {
            "use strict";
            t.r(n),
                t.d(n, "default", function () {
                    return le;
                });
            var c = t(12),
                r = t(51),
                a = t(0),
                i = t(3),
                o = t(38),
                s = t(171),
                u = t(176),
                j = t(4),
                b = t.n(j),
                l = t(15),
                f = t(20),
                O = t(66),
                d = t(13),
                x = t.n(d),
                p = t(672),
                h = t(16),
                m = t(31),
                v = t(40),
                g = t(73),
                w = t(671),
                k = t(130),
                S = function () {
                    var e = Object(a.useState)([]),
                        n = Object(f.a)(e, 2),
                        t = n[0],
                        c = n[1],
                        r = Object(O.m)().account,
                        i = Object(k.a)().fastRefresh;
                    return (
                        Object(a.useEffect)(
                            function () {
                                r &&
                                    (function () {
                                        var e = Object(l.a)(
                                            b.a.mark(function e() {
                                                var n, t, a;
                                                return b.a.wrap(function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = w.a.map(function (e) {
                                                                        return { address: Object(v.d)(), name: "pendingMoon", params: [e.pid, r] };
                                                                    })),
                                                                    (e.next = 3),
                                                                    Object(m.a)(g, n)
                                                                );
                                                            case 3:
                                                                (t = e.sent),
                                                                    (a = w.a.map(function (e, n) {
                                                                        return Object(h.a)(Object(h.a)({}, e), {}, { balance: new x.a(t[n]) });
                                                                    })),
                                                                    c(a);
                                                            case 6:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                }, e);
                                            })
                                        );
                                        return function () {
                                            return e.apply(this, arguments);
                                        };
                                    })()();
                            },
                            [r, i]
                        ),
                        t
                    );
                },
                y = t(673),
                z = t(681),
                B = function (e) {
                    var n = e.value,
                        t = e.decimals,
                        r = e.fontSize,
                        i = void 0 === r ? "40px" : r,
                        s = e.prefix,
                        u = Object(z.useCountUp)({ start: 0, end: n, duration: 1, separator: ",", decimals: void 0 !== t ? t : n < 0 ? 4 : n > 1e5 ? 0 : 3 }),
                        j = u.countUp,
                        b = u.update,
                        l = Object(a.useRef)(b);
                    return (
                        Object(a.useEffect)(
                            function () {
                                l.current(n);
                            },
                            [n, l]
                        ),
                        Object(c.jsxs)(o.B, { bold: !0, fontSize: i, children: [s, j] })
                    );
                },
                M = function (e) {
                    var n = e.earningsSum,
                        t = Object(s.a)();
                    return Object(O.m)().account ? Object(c.jsx)(B, { value: n }) : Object(c.jsx)(o.B, { color: "textDisabled", style: { lineHeight: "60px" }, children: t(298, "Locked") });
                },
                N = function (e) {
                    var n = e.cakeBalance,
                        t = Object(s.a)();
                    return Object(O.m)().account ? Object(c.jsx)(B, { value: n, fontSize: "24px" }) : Object(c.jsx)(o.B, { color: "textDisabled", style: { lineHeight: "36px" }, children: t(298, "Locked") });
                },
                E = t(109),
                F = t(269),
                R = t(85),
                C = t(674),
                T = function (e) {
                    var n = Object(a.useState)(new x.a(0)),
                        t = Object(f.a)(n, 2),
                        c = t[0],
                        r = t[1],
                        i = Object(O.m)(),
                        o = i.account,
                        s = i.ethereum,
                        u = Object(k.a)().fastRefresh;
                    return (
                        Object(a.useEffect)(
                            function () {
                                o &&
                                    s &&
                                    (function () {
                                        var n = Object(l.a)(
                                            b.a.mark(function n() {
                                                var t;
                                                return b.a.wrap(function (n) {
                                                    for (;;)
                                                        switch ((n.prev = n.next)) {
                                                            case 0:
                                                                return (n.next = 2), Object(C.b)(s, e, o);
                                                            case 2:
                                                                (t = n.sent), r(new x.a(t));
                                                            case 4:
                                                            case "end":
                                                                return n.stop();
                                                        }
                                                }, n);
                                            })
                                        );
                                        return function () {
                                            return n.apply(this, arguments);
                                        };
                                    })()();
                            },
                            [o, s, e, u]
                        ),
                        c
                    );
                },
                H = function () {
                    var e = Object(a.useState)([]),
                        n = Object(f.a)(e, 2),
                        t = n[0],
                        c = n[1],
                        r = Object(O.m)().account,
                        i = Object(k.a)().fastRefresh;
                    return (
                        Object(a.useEffect)(
                            function () {
                                r &&
                                    (function () {
                                        var e = Object(l.a)(
                                            b.a.mark(function e() {
                                                var n, t;
                                                return b.a.wrap(function (e) {
                                                    for (;;)
                                                        switch ((e.prev = e.next)) {
                                                            case 0:
                                                                return (
                                                                    (n = w.a.map(function (e) {
                                                                        return { address: Object(v.d)(), name: "pendingMoon", params: [e.pid, r] };
                                                                    })),
                                                                    (e.next = 3),
                                                                    Object(m.a)(g, n)
                                                                );
                                                            case 3:
                                                                (t = e.sent), c(t);
                                                            case 5:
                                                            case "end":
                                                                return e.stop();
                                                        }
                                                }, e);
                                            })
                                        );
                                        return function () {
                                            return e.apply(this, arguments);
                                        };
                                    })()();
                            },
                            [r, i]
                        ),
                        t
                    );
                },
                L = t(662);
            function $() {
                var e = Object(r.a)(["\n  margin-top: 24px;\n"]);
                return (
                    ($ = function () {
                        return e;
                    }),
                    e
                );
            }
            function D() {
                var e = Object(r.a)(["\n  color: black;\n  font-size: 14px;\n font-weight: bold;"]);
                return (
                    (D = function () {
                        return e;
                    }),
                    e
                );
            }
            function P() {
                var e = Object(r.a)(["\n  margin-bottom: 16px;\n"]);
                return (
                    (P = function () {
                        return e;
                    }),
                    e
                );
            }
            function Q() {
                var e = Object(r.a)(["\n  margin-bottom: 16px;\n"]);
                return (
                    (Q = function () {
                        return e;
                    }),
                    e
                );
            }
            function W() {
                var e = Object(r.a)(["\n  background-image: url('/images/moon.svg');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]);
                return (
                    (W = function () {
                        return e;
                    }),
                    e
                );
            }
            var A = Object(i.e)(o.h)(W()),
                J = i.e.div(Q()),
                U = i.e.img(P()),
                V = i.e.div(D(), function (e) {
                    return e.theme.colors.textSubtle;
                }),
                G = i.e.div($()),
                q = function () {
                    var e = Object(a.useState)(!1),
                        n = Object(f.a)(e, 2),
                        t = n[0],
                        r = n[1],
                        i = Object(O.m)().account,
                        u = Object(s.a)(),
                        j = S(),
                        d = Object(L.a)(T(Object(v.a)())),
                        h = Object(E.f)().toNumber(),
                        m = H().reduce(function (e, n) {
                            return e + new x.a(n).div(new x.a(10).pow(18)).toNumber();
                        }, 0),
                        g = j.filter(function (e) {
                            return e.balance.toNumber() > 0;
                        }),
                        w = Object(p.a)(
                            g.map(function (e) {
                                return e.pid;
                            })
                        ).onReward,
                        k = Object(a.useCallback)(
                            Object(l.a)(
                                b.a.mark(function e() {
                                    return b.a.wrap(
                                        function (e) {
                                            for (;;)
                                                switch ((e.prev = e.next)) {
                                                    case 0:
                                                        return r(!0), (e.prev = 1), (e.next = 4), w();
                                                    case 4:
                                                        e.next = 8;
                                                        break;
                                                    case 6:
                                                        (e.prev = 6), (e.t0 = e.catch(1));
                                                    case 8:
                                                        return (e.prev = 8), r(!1), e.finish(8);
                                                    case 11:
                                                    case "end":
                                                        return e.stop();
                                                }
                                        },
                                        e,
                                        null,
                                        [[1, 6, 8, 11]]
                                    );
                                })
                            ),
                            [w]
                        );
                    return Object(c.jsx)(A, {
                        children: Object(c.jsxs)(o.i, {
                            children: [
                                Object(c.jsx)(o.n, { size: "xl", mb: "24px", children: u(542, "Farms & Staking") }),
                                Object(c.jsx)(U, { src: "/images/full-moon.svg", alt: "cake logo", width: 64, height: 64 }),
                                Object(c.jsxs)(J, { children: [Object(c.jsx)(V, { children: "Moon to Harvest" }), Object(c.jsx)(M, { earningsSum: m }), Object(c.jsxs)(V, { children: ["~$", (h * m).toFixed(2)] })] }),
                                Object(c.jsxs)(J, { children: [Object(c.jsx)(V, { children: "Moon in Wallet" }), Object(c.jsx)(N, { cakeBalance: d }), Object(c.jsxs)(V, { children: ["~$", (h * d).toFixed(2)] })] }),
                                Object(c.jsx)(G, {
                                    children: i
                                        ? Object(c.jsx)(o.d, { id: "harvest-all", disabled: g.length <= 0 || t, onClick: k, fullWidth: !0, children: t ? u(548, "Collecting Moon") : u(999, "Harvest all (".concat(g.length, ")")) })
                                        : Object(c.jsx)(y.a, { fullWidth: !0 }),
                                }),
                            ],
                        }),
                    });
                },
                I = t(669);
            function K() {
                var e = Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);
                return (
                    (K = function () {
                        return e;
                    }),
                    e
                );
            }
            function X() {
                var e = Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);
                return (
                    (X = function () {
                        return e;
                    }),
                    e
                );
            }
            var Y = Object(i.e)(o.h)(X()),
                Z = i.e.div(K()),
                _ = function () {
                    var e = Object(s.a)(),
                        n = (function () {
                            var e = Object(k.a)().slowRefresh,
                                n = Object(a.useState)(),
                                t = Object(f.a)(n, 2),
                                c = t[0],
                                r = t[1];
                            return (
                                Object(a.useEffect)(
                                    function () {
                                        function e() {
                                            return (e = Object(l.a)(
                                                b.a.mark(function e() {
                                                    var n, t;
                                                    return b.a.wrap(function (e) {
                                                        for (;;)
                                                            switch ((e.prev = e.next)) {
                                                                case 0:
                                                                    return (n = Object(R.a)(F, Object(v.a)())), (e.next = 3), n.methods.totalSupply().call();
                                                                case 3:
                                                                    (t = e.sent), r(new x.a(t));
                                                                case 5:
                                                                case "end":
                                                                    return e.stop();
                                                            }
                                                    }, e);
                                                })
                                            )).apply(this, arguments);
                                        }
                                        !(function () {
                                            e.apply(this, arguments);
                                        })();
                                    },
                                    [e]
                                ),
                                c
                            );
                        })(),
                        t = (function (e) {
                            var n = Object(a.useState)(new x.a(0)),
                                t = Object(f.a)(n, 2),
                                c = t[0],
                                r = t[1],
                                i = Object(k.a)().slowRefresh;
                            return (
                                Object(a.useEffect)(
                                    function () {
                                        !(function () {
                                            var e = Object(l.a)(
                                                b.a.mark(function e() {
                                                    var n, t;
                                                    return b.a.wrap(function (e) {
                                                        for (;;)
                                                            switch ((e.prev = e.next)) {
                                                                case 0:
                                                                    return (n = Object(R.a)(F, Object(v.a)())), (e.next = 3), n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();
                                                                case 3:
                                                                    (t = e.sent), r(new x.a(t));
                                                                case 5:
                                                                case "end":
                                                                    return e.stop();
                                                            }
                                                    }, e);
                                                })
                                            );
                                            return function () {
                                                return e.apply(this, arguments);
                                            };
                                        })()();
                                    },
                                    [e, i]
                                ),
                                c
                            );
                        })(Object(v.a)()),
                        r = Object(E.c)(),
                        i = Object(E.f)(),
                        u = n ? n.minus(t) : new I.a(0),
                        j = Object(L.a)(u),
                        O = i.times(u),
                        d = 0;
                    return (
                        r && r[0] && r[0].moonPerBlock && (d = new I.a(r[0].moonPerBlock).div(new I.a(10).pow(18)).toNumber()),
                        Object(c.jsx)(Y, {
                            children: Object(c.jsxs)(o.i, {
                                children: [
                                    Object(c.jsx)(o.n, { size: "xl", mb: "24px", children: "Moon Stats" }),
                                    Object(c.jsxs)(Z, { children: [Object(c.jsx)(o.B, { fontSize: "14px", children: e(10005, "Market Cap") }), Object(c.jsx)(B, { fontSize: "14px", value: Object(L.a)(O), decimals: 0, prefix: "$" })] }),
                                    Object(c.jsxs)(Z, { children: [Object(c.jsx)(o.B, { fontSize: "14px", children: e(536, "Total Minted") }), n && Object(c.jsx)(B, { fontSize: "14px", value: Object(L.a)(n), decimals: 0 })] }),
                                    Object(c.jsxs)(Z, { children: [Object(c.jsx)(o.B, { fontSize: "14px", children: e(538, "Total Burned") }), Object(c.jsx)(B, { fontSize: "14px", value: Object(L.a)(t), decimals: 0 })] }),
                                    Object(c.jsxs)(Z, { children: [Object(c.jsx)(o.B, { fontSize: "14px", children: e(10004, "Circulating Supply") }), j && Object(c.jsx)(B, { fontSize: "14px", value: j, decimals: 0 })] }),
                                    Object(c.jsxs)(Z, { children: [Object(c.jsx)(o.B, { fontSize: "14px", children: "New MOON/block" }), Object(c.jsx)(o.B, { bold: !0, fontSize: "14px", children: d })] }),
                                ],
                            }),
                        })
                    );
                };
            function ee() {
                var e = Object(r.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]);
                return (
                    (ee = function () {
                        return e;
                    }),
                    e
                );
            }
            var ne = Object(i.e)(o.h)(ee()),
                te = function () {
                    var e = Object(s.a)(),
                        n = Object(E.g)();
                    return Object(c.jsx)(ne, {
                        children: Object(c.jsxs)(o.i, {
                            children: [
                                Object(c.jsx)(o.n, { size: "lg", mb: "24px", children: e(999, "Total Value Locked (TVL)") }),
                                Object(c.jsxs)(c.Fragment, { children: [Object(c.jsx)(B, { value: n.toNumber(), prefix: "$", decimals: 2 }), Object(c.jsx)(o.B, { color: "textSubtle", children: e(999, "Across all Farms and Pools") })] }),
                            ],
                        }),
                    });
                },
                ce = t(692);
            function re() {
                var e = Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);
                return (
                    (re = function () {
                        return e;
                    }),
                    e
                );
            }
            function ae() {
                var e = Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);
                return (
                    (ae = function () {
                        return e;
                    }),
                    e
                );
            }
            var ie = Object(i.e)(o.h)(ae()),
                oe =
                    (i.e.div(re()),
                    function () {
                        var e = Object(s.a)();
                        return Object(c.jsx)(ie, {
                            children: Object(c.jsxs)(o.i, {
                                children: [
                                    Object(c.jsx)(o.n, { size: "xl", mb: "24px", children: e(10003, "Announcements") }),
                                    Object(c.jsx)(ce.a, { dataSource: { sourceType: "profile", screenName: "MoonFarm4" }, options: { height: "300", chrome: "noheader, nofooter", width: "400" } }),
                                ],
                            }),
                        });
                    });
            function se() {
                var e = Object(r.a)([
                    "\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  ",
                    " {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  ",
                    " {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n",
                ]);
                return (
                    (se = function () {
                        return e;
                    }),
                    e
                );
            }
            function ue() {
                var e = Object(r.a)([
                    "\n  align-items: center;\n  background-image: url('/images/half-moon.svg');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  ",
                    " {\n    background-image: url('/images/full-moon.svg');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n",
                ]);
                return (
                    (ue = function () {
                        return e;
                    }),
                    e
                );
            }
            var je = i.e.div(ue(), function (e) {
                    return e.theme.mediaQueries.lg;
                }),
                be = Object(i.e)(o.b)(
                    se(),
                    function (e) {
                        return e.theme.mediaQueries.sm;
                    },
                    function (e) {
                        return e.theme.mediaQueries.lg;
                    }
                ),
                le = function () {
                    Object(s.a)();
                    return Object(c.jsxs)(u.a, {
                        children: [
                            Object(c.jsxs)(je, { children: [Object(c.jsx)(o.n, { as: "h1", size: "xl", mb: "24px", color: "secondary", children: "Moon Finance" }), Object(c.jsx)(o.B, { children: "Farming starts at block #9094451" })] }),
                            Object(c.jsx)("div", { children: Object(c.jsxs)(be, { children: [Object(c.jsx)(q, {}), Object(c.jsx)(oe, {}), Object(c.jsx)(_, {}), Object(c.jsx)(te, {})] }) }),
                        ],
                    });
                };
        },
    },
]);
//# sourceMappingURL=13.0d8066e2.chunk.js.map
