(function(e) {
    function t(t) {
        for (var r, o, i = t[0], d = t[1], l = t[2], c = 0, m = []; c < i.length; c++) o = i[c], Object.prototype.hasOwnProperty.call(n, o) && n[o] && m.push(n[o][0]), n[o] = 0;
        for (r in d) Object.prototype.hasOwnProperty.call(d, r) && (e[r] = d[r]);
        u && u(t);
        while (m.length) m.shift()();
        return s.push.apply(s, l || []), a()
    }

    function a() {
        for (var e, t = 0; t < s.length; t++) {
            for (var a = s[t], r = !0, o = 1; o < a.length; o++) {
                var d = a[o];
                0 !== n[d] && (r = !1)
            }
            r && (s.splice(t--, 1), e = i(i.s = a[0]))
        }
        return e
    }
    var r = {},
        n = {
            app: 0
        },
        s = [];

    function o(e) {
        return i.p + "js/" + ({
            all: "all",
            manage: "manage",
            pay: "pay"
        }[e] || e) + "." + {
            all: "66d8ffc2",
            manage: "28fe53a1",
            pay: "7bfe25b2"
        }[e] + ".js"
    }

    function i(t) {
        if (r[t]) return r[t].exports;
        var a = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, i), a.l = !0, a.exports
    }
    i.e = function(e) {
        var t = [],
            a = n[e];
        if (0 !== a)
            if (a) t.push(a[2]);
            else {
                var r = new Promise((function(t, r) {
                    a = n[e] = [t, r]
                }));
                t.push(a[2] = r);
                var s, d = document.createElement("script");
                d.charset = "utf-8", d.timeout = 120, i.nc && d.setAttribute("nonce", i.nc), d.src = o(e);
                var l = new Error;
                s = function(t) {
                    d.onerror = d.onload = null, clearTimeout(c);
                    var a = n[e];
                    if (0 !== a) {
                        if (a) {
                            var r = t && ("load" === t.type ? "missing" : t.type),
                                s = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + r + ": " + s + ")", l.name = "ChunkLoadError", l.type = r, l.request = s, a[1](l)
                        }
                        n[e] = void 0
                    }
                };
                var c = setTimeout((function() {
                    s({
                        type: "timeout",
                        target: d
                    })
                }), 12e4);
                d.onerror = d.onload = s, document.head.appendChild(d)
            }
        return Promise.all(t)
    }, i.m = e, i.c = r, i.d = function(e, t, a) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }, i.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) i.d(a, r, function(t) {
                return e[t]
            }.bind(null, r));
        return a
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/", i.oe = function(e) {
        throw console.error(e), e
    };
    var d = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = d.push.bind(d);
    d.push = t, d = d.slice();
    for (var c = 0; c < d.length; c++) t(d[c]);
    var u = l;
    s.push([0, "main", "chunk-vendors"]), a()
})({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    "22e0": function(e) {
        e.exports = JSON.parse('{"VERSION":"c7467d6","BRANCH":"stable_testa"}')
    },
    "356d": function(e, t, a) {
        var r = {
            "./AbrilFatface-Regular.scss": ["65a9", "main"],
            "./Anton-Regular.scss": ["5c1c", "main"],
            "./Bangers-Regular.scss": ["7c84", "main"],
            "./CormorantGaramond-Regular.scss": ["9eb5", "main"],
            "./Courgette-Regular.scss": ["5a32", "main"],
            "./DancingScript-VariableFont_wght.scss": ["39ca", "main"],
            "./DelaGothicOne-Regular.scss": ["b814", "main"],
            "./EmilysCandy-Regular.scss": ["3dea", "main"],
            "./FredokaOne-Regular.scss": ["bce5", "main"],
            "./Frijole-Regular.scss": ["af6e", "main"],
            "./GreatVibes-Regular.scss": ["4295", "main"],
            "./Jua-Regular.scss": ["ee6b", "main"],
            "./KaushanScript-Regular.scss": ["f00d", "main"],
            "./KirangHaerang-Regular.scss": ["706f", "main"],
            "./OpenSansCondensed-Light.scss": ["92dc", "main"],
            "./OrelegaOne-Regular.scss": ["3587", "main"],
            "./PTSerif-Bold.scss": ["0006", "main"],
            "./PlayfairDisplay-VariableFont_wght.scss": ["9f8d", "main"],
            "./Poppins-Light.scss": ["5fd8", "main"],
            "./PressStart2P-Regular.scss": ["455c", "main"],
            "./Quicksand-Regular.scss": ["421c", "main"],
            "./RobotoSlab-Light.scss": ["1d06", "main"],
            "./Rubik-Bold.scss": ["fdd8", "main"],
            "./SairaCondensed-Bold.scss": ["5f86", "main"],
            "./Skranji-Regular.scss": ["d95b", "main"],
            "./SpecialElite-Regular.scss": ["f2a5", "main"],
            "./Tangerine-Bold.scss": ["9cb4", "main"],
            "./Ubuntu-Regular.scss": ["6b36", "main"],
            "./Yellowtail-Regular.scss": ["d456", "main"]
        };

        function n(e) {
            if (!a.o(r, e)) return Promise.resolve().then((function() {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }));
            var t = r[e],
                n = t[0];
            return a.e(t[1]).then((function() {
                return a.t(n, 7)
            }))
        }
        n.keys = function() {
            return Object.keys(r)
        }, n.id = "356d", e.exports = n
    },
    "458f": function(e, t, a) {},
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        a("e260"), a("e6cf"), a("cca6"), a("a79d"), a("a4d3"), a("e01a"), a("b0c0");
        var r = a("2b0e"),
            n = function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    attrs: {
                        id: "app"
                    }
                }, [a("div", [a("router-view")], 1), a("div", {
                    staticClass: "modal fade",
                    attrs: {
                        id: "EditHeaderNameModal",
                        tabindex: "-1",
                        "aria-labelledby": "exampleModalLabel",
                        "aria-hidden": "true"
                    }
                }, [a("div", {
                    staticClass: "modal-dialog"
                }, [a("div", {
                    staticClass: "modal-content"
                }, [a("div", {
                    staticClass: "modal-header"
                }, [a("h5", {
                    staticClass: "modal-title",
                    attrs: {
                        id: "exampleModalLabel"
                    }
                }, [e._v(" " + e._s(e.$t("Edit_username")) + " ")]), a("button", {
                    staticClass: "btn-close",
                    attrs: {
                        type: "button",
                        "data-bs-dismiss": "modal",
                        "aria-label": "Close"
                    },
                    on: {
                        click: e.cancelEditUserName
                    }
                })]), a("div", {
                    staticClass: "modal-body"
                }, [a("div", {
                    staticClass: "form-group mb-3 row",
                    staticStyle: {
                        "align-items": "center"
                    }
                }, [a("label", {
                    staticClass: "col-auto mb-0 me-2",
                    attrs: {
                        for: "EL_EditLinkTitle"
                    }
                }, [e._v("linkr.bio/")]), a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.headUserName,
                        expression: "headUserName"
                    }],
                    staticClass: "form-control col username_input",
                    attrs: {
                        type: "text",
                        placeholder: e.$t("Username")
                    },
                    domProps: {
                        value: e.headUserName
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.headUserName = t.target.value)
                        }
                    }
                })]), e.errorMsg ? a("div", {
                    staticClass: "alert alert-danger alert-dismissible fade show",
                    attrs: {
                        role: "alert"
                    }
                }, [e._v(" " + e._s(e.errorMsg) + " "), a("button", {
                    staticClass: "btn-close",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(t) {
                            e.errorMsg = ""
                        }
                    }
                })]) : e._e()]), a("div", {
                    staticClass: "modal-footer"
                }, [a("div", {
                    staticClass: "col ml-0 pl-0"
                }, [a("button", {
                    staticClass: "btn btn-outline-secondary",
                    attrs: {
                        type: "button",
                        "data-bs-dismiss": "modal"
                    },
                    on: {
                        click: e.cancelEditUserName
                    }
                }, [e._v(" " + e._s(e.$t("Close")) + " ")])]), a("div", {
                    staticClass: "col-auto mr-0 pr-0 text-right"
                }, [a("button", {
                    staticClass: "btn btn-primary",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: e.saveUserName
                    }
                }, [e._v(" " + e._s(e.$t("Save")) + " ")])])])])])]), a("div", {
                    staticClass: "modal fade",
                    attrs: {
                        id: "ST_SettingsQRCodeModal",
                        tabindex: "-1",
                        role: "dialog",
                        "aria-labelledby": "ST_SettingsQRCodeModalLabel",
                        "aria-modal": "true"
                    }
                }, [a("div", {
                    staticClass: "modal-dialog modal-dialog-custom",
                    attrs: {
                        role: "document"
                    }
                }, [a("div", {
                    staticClass: "modal-content model-content-border"
                }, [e._m(0), a("div", {
                    staticClass: "modal-body modal-body-custom"
                }, [a("p", {
                    staticClass: "share-text"
                }, [e._v(e._s(e.shareUrl))]), a("canvas", {
                    ref: "QRCode_canvas",
                    staticStyle: {
                        margin: "20px auto 40px auto",
                        display: "block"
                    },
                    attrs: {
                        id: "QRCode_header"
                    }
                }), a("div", {
                    staticClass: "text-center"
                }, [a("button", {
                    staticClass: "btn-save-img",
                    attrs: {
                        id: "lnkbio-qrcode-download"
                    },
                    on: {
                        click: e.savePic
                    }
                }, [e._v(" " + e._s(e.$t("Save image")) + " ")])]), e._m(1)])])])]), e.$route.meta.hideContact ? e._e() : a("div", {
                    class: e.isLogin ? "intercom-wrapper_login" : "intercom-wrapper",
                    attrs: {
                        id: "custom_launcher_selector"
                    },
                    on: {
                        click: e.onContactClick
                    }
                }), a("operate-dialog")], 1)
            },
            s = [function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "modal-header model-header-customboder"
                }, [a("button", {
                    staticClass: "btn-close",
                    attrs: {
                        type: "button",
                        "data-bs-dismiss": "modal",
                        "aria-label": "Close"
                    }
                })])
            }, function() {
                var e = this,
                    t = e.$createElement,
                    a = e._self._c || t;
                return a("div", {
                    staticClass: "modal-errors d-none"
                }, [a("div", {
                    staticClass: "alert alert-danger modal-errors-builtin",
                    attrs: {
                        role: "alert"
                    }
                })])
            }],
            o = a("5530"),
            i = (a("ac1f"), a("5319"), a("2f62")),
            d = a("4ec3"),
            l = a.n(d),
            c = a("1157"),
            u = a.n(c),
            m = a("d055"),
            f = a.n(m),
            g = a("5d2d"),
            p = a("92da"),
            b = {
                components: {
                    OperateDialog: p["a"]
                },
                data: function() {
                    return {
                        headUserName: "",
                        editHeaderUserName: "",
                        errorMsg: "",
                        iconurl: a("534f"),
                        isLogin: !1
                    }
                },
                computed: Object(o["a"])(Object(o["a"])({}, Object(i["d"])("user", ["userInfo"])), {}, {
                    userName: function() {
                        return this.userInfo && this.userInfo.username
                    },
                    shareUrl: function() {
                        return window.location.origin + "/" + this.userInfo.username
                    }
                }),
                watch: {
                    userInfo: function(e) {
                        this.isLogin = !!e.id
                    },
                    userName: function(e) {
                        e && (this.headUserName = e)
                    },
                    headUserName: function(e) {
                        var t = /(^\s+)|(\s+$)|\s+/g;
                        if (t.test(e)) {
                            var a = e.replace(t, ".");
                            this.$data.headUserName = a, this.editHeaderUserName = a.toLowerCase()
                        } else this.editHeaderUserName = e.toLowerCase()
                    }
                },
                created: function() {
                    g["diySessionStorage"].getItem("linkrReferrer") || g["diySessionStorage"].setItem("linkrReferrer", document.referrer)
                },
                mounted: function() {
                    g["diyLocalStorage"].getItem("token") || this.$store.state.user.token ? this.checkToken() : this.isLogin = !1;
                    var e = this;
                    u()("#ST_SettingsQRCodeModal")[0].addEventListener("show.bs.modal", (function() {
                        e.getQRCode()
                    })), u()("#EditHeaderNameModal")[0].addEventListener("hide.bs.modal", (function() {
                        setTimeout((function() {
                            e.errorMsg = "", e.cancelEditUserName()
                        }), 500)
                    })), window.addEventListener("resize", (function() {
                        return function() {
                            window.$_Tawk && (document.body.clientWidth <= 768 && window.$_Tawk.hideWidget ? window.$_Tawk.hideWidget() : window.$_Tawk.showWidget && window.$_Tawk.showWidget())
                        }()
                    }))
                },
                methods: {
                    checkToken: function() {
                        var e = this;
                        l()("/user/token_invalid", {}, !1, !0).then((function(t) {
                            e.end = !0, 402 == t.code || 403 == t.code ? (g["diyLocalStorage"].removeItem("token"), g["diyLocalStorage"].removeItem("isInit"), e.isLogin = !1) : e.isLogin = !0
                        }))
                    },
                    onContactClick: function() {
                        window.$_Tawk && window.$_Tawk.toggle && window.$_Tawk.toggle()
                    },
                    copyAction: function() {},
                    saveUserName: function() {
                        var e = this;
                        "" != this.editHeaderUserName ? (this.showEditError = !1, l()("user/edit_username", {
                            username: this.editHeaderUserName
                        }).then((function(t) {
                            var a = {
                                411: "Edit_Username_Errcode411",
                                412: "Edit_Username_Errcode412",
                                413: "Edit_Username_Errcode413",
                                414: "Edit_Username_Errcode414"
                            };
                            if (0 == t.code) {
                                var r = e.$bootstrap.Modal.getInstance(u()("#EditHeaderNameModal")[0]);
                                g["diyLocalStorage"].setItem("username", e.editHeaderUserName), r.hide(), e.$store.commit("user/changeUserName", e.editHeaderUserName)
                            } else a[t.code] ? e.errorMsg = e.$i18n.t(a[t.code]) : e.errorMsg = t.msg
                        }))) : this.errorMsg = this.$i18n.t("enter_Username")
                    },
                    cancelEditUserName: function() {
                        this.headUserName !== this.userName && (this.headUserName = this.userName)
                    },
                    getQRCode: function() {
                        var e = this.shareUrl;
                        e.indexOf("?") > 0 ? e += "&from=qrcode" : e += "?from=qrcode";
                        var t = {
                                errorCorrectionLevel: "H",
                                type: "image/png",
                                quality: .3,
                                margin: 3,
                                width: 160,
                                height: 160,
                                text: e,
                                color: {
                                    dark: "#333333",
                                    light: "#fff"
                                }
                            },
                            r = e,
                            n = document.getElementById("QRCode_header"),
                            s = n,
                            o = new Image(35, 35);
                        o.src = null === this.userInfo.portrait || void 0 === this.userInfo.portrait ? a("534f") : this.userInfo.portrait;
                        var i = s.getContext("2d");
                        o.crossOrigin = "Anonymous", o.onload = function() {
                            i.strokeStyle = "white", i.lineWidth = 4, i.drawImage(o, 63, 63, 35, 35), i.strokeRect(63, 63, 35, 35)
                        }, f.a.toCanvas(n, r, t, (function(e) {}))
                    },
                    savePic: function() {
                        var e = this.$refs.QRCode_canvas,
                            t = document.createElement("a");
                        t.href = e.toDataURL("image/png").replace("image/png", "image/octet-stream"), t.download = "QRcode.jpg", t.click()
                    }
                }
            },
            h = b,
            v = (a("5c0b"), a("2877")),
            w = Object(v["a"])(h, n, s, !1, null, null, null),
            y = w.exports,
            _ = a("a18c"),
            C = a("4360"),
            k = (a("5b52"), a("0d50"), a("4034"), a("bc1b")),
            S = a.n(k),
            E = (a("77ed"), a("5887")),
            N = a.n(E),
            R = a("eae4"),
            U = a("313e"),
            L = a("7b17"),
            x = a("a925"),
            O = a("d99a"),
            $ = a("7212"),
            T = a.n($),
            P = (a("bbe3"), a("f588")),
            I = a.n(P),
            M = a("a584"),
            j = a("c9bf"),
            H = a("1dce"),
            A = a.n(H),
            Q = a("5c96"),
            q = a.n(Q),
            B = (a("0fae"), a("b2d6")),
            D = a.n(B),
            F = a("58ca");
        a("63bf"), a("000c"), a("e8d8"), a("9747"), a("b489"), a("3d55"), a("a40a"), a("db5b");
        r["default"].prototype.$wow = S.a, window.appver = a("22e0"), r["default"].use(N.a, {
            componentPrefix: "vc",
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px"
            }
        }), r["default"].use(R["a"]), r["default"].prototype.$Echarts = U, r["default"].prototype.$bootstrap = L, r["default"].use(x["a"]);
        var W = new x["a"]({
            locale: g["diyLocalStorage"].getItem("locale-language") || O["a"].defaultLanguage(),
            messages: O["a"].languages
        });
        r["default"].use(T.a), r["default"].use(I.a), r["default"].use(M["b"], {
            bootstrap: !1,
            pageTrackerScreenviewEnabled: !0
        }, _["a"]);
        var J = {
            clientId: "119003559378-tg1n4u33rb3s34q9q657c4ihga0bt7c7.apps.googleusercontent.com",
            scope: "profile email",
            prompt: "select_account"
        };
        r["default"].use(j["a"], J), r["default"].use(A.a), r["default"].use(q.a, {
            locale: D.a
        }), r["default"].use(F["a"]), _["a"].beforeEach((function(e, t, a) {
            var r = g["diyLocalStorage"].getItem("token") || C["default"].state.user.token,
                n = 1,
                s = g["diyLocalStorage"].getItem("billAddressStatus");
            if (e.meta.title && (document.title = "".concat(W.t(e.meta.title))), e.meta.content) {
                var o = document.getElementsByTagName("head"),
                    i = document.createElement("meta");
                document.querySelector('meta[name="description"]').setAttribute("content", e.meta.content.description), i.content = e.meta.content, o[0].appendChild(i)
            }
            r && !n && "complete-profile" !== e.name && "logout" !== e.name && "iframe" !== e.query.from ? a({
                name: "complete-profile"
            }) : r && 1 == s && "complete-profile" !== e.name && "logout" !== e.name && "billing" !== e.name && "iframe" !== e.query.from ? a({
                name: "billing"
            }) : a()
        })), r["default"].config.productionTip = !1;
        var V = function() {
            var e = navigator.userAgent,
                t = /(?:Windows Phone)/.test(e),
                a = /(?:SymbianOS)/.test(e) || t,
                r = /(?:Android)/.test(e),
                n = /(?:Firefox)/.test(e),
                s = /(?:iPad|PlayBook)/.test(e) || r && !/(?:Mobile)/.test(e) || n && /(?:Tablet)/.test(e),
                o = /(?:iPhone)/.test(e) && !s,
                i = !o && !r && !a;
            return {
                isTablet: s,
                isPhone: o,
                isAndroid: r,
                isPc: i
            }
        }();
        r["default"].prototype.os = V, new r["default"]({
            router: _["a"],
            store: C["default"],
            i18n: W,
            render: function(e) {
                return e(y)
            }
        }).$mount("#app")
    },
    "5c0b": function(e, t, a) {
        "use strict";
        a("458f")
    }
});