(() => {
    var t = {
            162: function(t) {
                "undefined" != typeof self && self, t.exports = function(t) {
                    var e = {};

                    function n(r) {
                        if (e[r]) return e[r].exports;
                        var o = e[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                    }
                    return n.m = t, n.c = e, n.d = function(t, e, r) {
                        n.o(t, e) || Object.defineProperty(t, e, {
                            configurable: !1,
                            enumerable: !0,
                            get: r
                        })
                    }, n.n = function(t) {
                        var e = t && t.__esModule ? function() {
                            return t.default
                        } : function() {
                            return t
                        };
                        return n.d(e, "a", e), e
                    }, n.o = function(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }, n.p = "", n(n.s = 4)
                }([function(t, e, n) {
                    "use strict";
                    n.d(e, "i", (function() {
                        return s
                    })), n.d(e, "d", (function() {
                        return f
                    })), n.d(e, "e", (function() {
                        return h
                    })), n.d(e, "c", (function() {
                        return p
                    })), n.d(e, "h", (function() {
                        return d
                    })), n.d(e, "f", (function() {
                        return v
                    })), n.d(e, "b", (function() {
                        return y
                    })), n.d(e, "g", (function() {
                        return b
                    })), n.d(e, "a", (function() {
                        return g
                    }));
                    var r, o, i, a, c, u = n(3),
                        l = Object(u.b)(),
                        s = (null === (r = null == l ? void 0 : l.navigator) || void 0 === r ? void 0 : r.userAgent) || "unknown",
                        f = "InstallTrigger" in ((null == l ? void 0 : l.window) || {}) || /firefox/i.test(s),
                        h = /trident/i.test(s) || /msie/i.test(s),
                        p = /edge/i.test(s) || /EdgiOS/i.test(s),
                        d = /webkit/i.test(s),
                        v = /IqiyiApp/.test(s),
                        y = void 0 !== (null === (o = null == l ? void 0 : l.window) || void 0 === o ? void 0 : o.chrome) || /chrome/i.test(s) || /CriOS/i.test(s),
                        b = "[object SafariRemoteNotification]" === ((null === (a = null === (i = null == l ? void 0 : l.window) || void 0 === i ? void 0 : i.safari) || void 0 === a ? void 0 : a.pushNotification) || !1).toString() || /safari/i.test(s) && !y,
                        g = "function" == typeof(null === (c = l.document) || void 0 === c ? void 0 : c.createElement)
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "b", (function() {
                        return i
                    })), n.d(e, "c", (function() {
                        return a
                    })), n.d(e, "a", (function() {
                        return c
                    }));
                    var r = n(0);

                    function o(t) {
                        if (r.a && console) {
                            if (!r.e && !r.c) return console[t];
                            if ("log" === t || "clear" === t) return function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                console[t].apply(console, e)
                            }
                        }
                        return function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
                        }
                    }
                    var i = o("log"),
                        a = o("table"),
                        c = o("clear")
                }, function(t, e, n) {
                    "use strict";
                    e.a = function(t) {
                        void 0 === t && (t = {});
                        for (var e = t.includes, n = void 0 === e ? [] : e, r = t.excludes, o = void 0 === r ? [] : r, i = !1, a = !1, c = 0, u = n; c < u.length; c++)
                            if (!0 === u[c]) {
                                i = !0;
                                break
                            } for (var l = 0, s = o; l < s.length; l++)
                            if (!0 === s[l]) {
                                a = !0;
                                break
                            } return i && !a
                    }
                }, function(t, e, n) {
                    "use strict";
                    (function(t) {
                        e.b = c, e.a = function() {
                            for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            var r = c();
                            return (null == r ? void 0 : r.document) ? (t = r.document).createElement.apply(t, e) : {}
                        }, e.c = function() {
                            if (r) return r;
                            if (u) {
                                var t = new Blob([o.a.workerScript]);
                                try {
                                    var e = URL.createObjectURL(t);
                                    r = new o.a(new Worker(e)), URL.revokeObjectURL(e)
                                } catch (t) {
                                    try {
                                        r = new o.a(new Worker("data:text/javascript;base64,".concat(btoa(o.a.workerScript))))
                                    } catch (t) {
                                        u = !1
                                    }
                                }
                                return r
                            }
                        }, n.d(e, "d", (function() {
                            return l
                        }));
                        var r, o = n(10),
                            i = this && this.__awaiter || function(t, e, n, r) {
                                return new(n || (n = Promise))((function(o, i) {
                                    function a(t) {
                                        try {
                                            u(r.next(t))
                                        } catch (t) {
                                            i(t)
                                        }
                                    }

                                    function c(t) {
                                        try {
                                            u(r.throw(t))
                                        } catch (t) {
                                            i(t)
                                        }
                                    }

                                    function u(t) {
                                        t.done ? o(t.value) : function(t) {
                                            return t instanceof n ? t : new n((function(e) {
                                                e(t)
                                            }))
                                        }(t.value).then(a, c)
                                    }
                                    u((r = r.apply(t, e || [])).next())
                                }))
                            },
                            a = this && this.__generator || function(t, e) {
                                var n, r, o, i, a = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & o[0]) throw o[1];
                                        return o[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return i = {
                                    next: c(0),
                                    throw: c(1),
                                    return: c(2)
                                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                    return this
                                }), i;

                                function c(c) {
                                    return function(u) {
                                        return function(c) {
                                            if (n) throw new TypeError("Generator is already executing.");
                                            for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                                if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                                switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                    case 0:
                                                    case 1:
                                                        o = c;
                                                        break;
                                                    case 4:
                                                        return a.label++, {
                                                            value: c[1],
                                                            done: !1
                                                        };
                                                    case 5:
                                                        a.label++, r = c[1], c = [0];
                                                        continue;
                                                    case 7:
                                                        c = a.ops.pop(), a.trys.pop();
                                                        continue;
                                                    default:
                                                        if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                            a = 0;
                                                            continue
                                                        }
                                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                            a.label = c[1];
                                                            break
                                                        }
                                                        if (6 === c[0] && a.label < o[1]) {
                                                            a.label = o[1], o = c;
                                                            break
                                                        }
                                                        if (o && a.label < o[2]) {
                                                            a.label = o[2], a.ops.push(c);
                                                            break
                                                        }
                                                        o[2] && a.ops.pop(), a.trys.pop();
                                                        continue
                                                }
                                                c = e.call(t, a)
                                            } catch (t) {
                                                c = [6, t], r = 0
                                            } finally {
                                                n = o = 0
                                            }
                                            if (5 & c[0]) throw c[1];
                                            return {
                                                value: c[0] ? c[1] : void 0,
                                                done: !0
                                            }
                                        }([c, u])
                                    }
                                }
                            };

                        function c() {
                            return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : this
                        }
                        var u = !0,
                            l = function() {
                                return i(this, void 0, void 0, (function() {
                                    var t;
                                    return a(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                if (t = !1, !navigator.brave) return [3, 4];
                                                if (!navigator.brave.isBrave) return [3, 4];
                                                e.label = 1;
                                            case 1:
                                                return e.trys.push([1, 3, , 4]), [4, Promise.race([navigator.brave.isBrave(), new Promise((function(t) {
                                                    return setTimeout((function() {
                                                        return t(!1)
                                                    }), 1e3)
                                                }))])];
                                            case 2:
                                                return t = e.sent(), [3, 4];
                                            case 3:
                                                return e.sent(), [3, 4];
                                            case 4:
                                                return l = function() {
                                                    return i(this, void 0, void 0, (function() {
                                                        return a(this, (function(e) {
                                                            return [2, t]
                                                        }))
                                                    }))
                                                }, [2, t]
                                        }
                                    }))
                                }))
                            }
                    }).call(e, n(9))
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.addListener = function(t) {
                        h.addListener(t)
                    }, e.removeListener = function(t) {
                        h.removeListener(t)
                    }, e.isLaunch = function() {
                        return h.isLaunch()
                    }, e.launch = function() {
                        h.launch()
                    }, e.stop = function() {
                        h.stop()
                    }, e.setDetectDelay = function(t) {
                        h.setDetectDelay(t)
                    };
                    var r = n(8),
                        o = n(12);
                    n.d(e, "DevtoolsDetector", (function() {
                        return r.a
                    })), n.d(e, "checkers", (function() {
                        return o
                    }));
                    var i = n(23);
                    n.d(e, "crashBrowserCurrentTab", (function() {
                        return i.b
                    })), n.d(e, "crashBrowser", (function() {
                        return i.a
                    }));
                    var a = n(2);
                    n.d(e, "match", (function() {
                        return a.a
                    }));
                    var c = n(3);
                    n.d(e, "getGlobalThis", (function() {
                        return c.b
                    })), n.d(e, "createElement", (function() {
                        return c.a
                    })), n.d(e, "getWorkerConsole", (function() {
                        return c.c
                    })), n.d(e, "isBrave", (function() {
                        return c.d
                    }));
                    var u = n(24);
                    n.d(e, "versionMap", (function() {
                        return u.a
                    }));
                    var l = n(0);
                    n.d(e, "userAgent", (function() {
                        return l.i
                    })), n.d(e, "isFirefox", (function() {
                        return l.d
                    })), n.d(e, "isIE", (function() {
                        return l.e
                    })), n.d(e, "isEdge", (function() {
                        return l.c
                    })), n.d(e, "isWebkit", (function() {
                        return l.h
                    })), n.d(e, "isIqiyiApp", (function() {
                        return l.f
                    })), n.d(e, "isChrome", (function() {
                        return l.b
                    })), n.d(e, "isSafari", (function() {
                        return l.g
                    })), n.d(e, "inBrowser", (function() {
                        return l.a
                    }));
                    var s = n(1);
                    n.d(e, "log", (function() {
                        return s.b
                    })), n.d(e, "table", (function() {
                        return s.c
                    })), n.d(e, "clear", (function() {
                        return s.a
                    }));
                    var f = n(5);
                    n.d(e, "isMac", (function() {
                        return f.d
                    })), n.d(e, "isIpad", (function() {
                        return f.b
                    })), n.d(e, "isIphone", (function() {
                        return f.c
                    })), n.d(e, "isAndroid", (function() {
                        return f.a
                    })), n.d(e, "isWindows", (function() {
                        return f.e
                    }));
                    var h = new r.a({
                        checkers: [o.erudaChecker, o.elementIdChecker, o.regToStringChecker, o.functionToStringChecker, o.depRegToStringChecker, o.dateToStringChecker, o.devtoolsFormatterChecker, o.performanceChecker, o.debuggerChecker]
                    });
                    e.default = h
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "d", (function() {
                        return o
                    })), n.d(e, "b", (function() {
                        return i
                    })), n.d(e, "c", (function() {
                        return a
                    })), n.d(e, "a", (function() {
                        return c
                    })), n.d(e, "e", (function() {
                        return u
                    }));
                    var r = n(0),
                        o = /macintosh/i.test(r.i),
                        i = /ipad/i.test(r.i) || o && navigator.maxTouchPoints > 1,
                        a = /iphone/i.test(r.i),
                        c = /android/i.test(r.i),
                        u = /windows/i.test(r.i)
                }, function(t, e, n) {
                    "use strict";
                    e.a = function() {
                        return "undefined" != typeof performance ? performance.now() : Date.now()
                    }
                }, function(t, e, n) {
                    "use strict";
                    e.a = function() {
                        return null === r && (r = function() {
                            for (var t = function() {
                                    for (var t = {}, e = 0; e < 500; e++) t["".concat(e)] = "".concat(e);
                                    return t
                                }(), e = [], n = 0; n < 50; n++) e.push(t);
                            return e
                        }()), r
                    };
                    var r = null
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return a
                    }));
                    var r = n(0),
                        o = this && this.__awaiter || function(t, e, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function a(t) {
                                    try {
                                        u(r.next(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function c(t) {
                                    try {
                                        u(r.throw(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function u(t) {
                                    t.done ? o(t.value) : function(t) {
                                        return t instanceof n ? t : new n((function(e) {
                                            e(t)
                                        }))
                                    }(t.value).then(a, c)
                                }
                                u((r = r.apply(t, e || [])).next())
                            }))
                        },
                        i = this && this.__generator || function(t, e) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: c(0),
                                throw: c(1),
                                return: c(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function c(c) {
                                return function(u) {
                                    return function(c) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                            if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                            switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                case 0:
                                                case 1:
                                                    o = c;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: c[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = c[1], c = [0];
                                                    continue;
                                                case 7:
                                                    c = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                        a.label = c[1];
                                                        break
                                                    }
                                                    if (6 === c[0] && a.label < o[1]) {
                                                        a.label = o[1], o = c;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(c);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            c = e.call(t, a)
                                        } catch (t) {
                                            c = [6, t], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & c[0]) throw c[1];
                                        return {
                                            value: c[0] ? c[1] : void 0,
                                            done: !0
                                        }
                                    }([c, u])
                                }
                            }
                        },
                        a = function() {
                            function t(t) {
                                var e = t.checkers;
                                this._listeners = [], this._isOpen = !1, this._detectLoopStopped = !0, this._detectLoopDelay = 500, this._checkers = e.slice()
                            }
                            return Object.defineProperty(t.prototype, "isOpen", {
                                get: function() {
                                    return this._isOpen
                                },
                                enumerable: !1,
                                configurable: !0
                            }), t.prototype.launch = function() {
                                r.a && (this._detectLoopDelay <= 0 && this.setDetectDelay(500), this._detectLoopStopped && (this._detectLoopStopped = !1, this._detectLoop()))
                            }, t.prototype.stop = function() {
                                this._detectLoopStopped || (this._detectLoopStopped = !0, this._isOpen = !1, clearTimeout(this._timer))
                            }, t.prototype.isLaunch = function() {
                                return !this._detectLoopStopped
                            }, t.prototype.setDetectDelay = function(t) {
                                this._detectLoopDelay = t
                            }, t.prototype.addListener = function(t) {
                                this._listeners.push(t)
                            }, t.prototype.removeListener = function(t) {
                                this._listeners = this._listeners.filter((function(e) {
                                    return e !== t
                                }))
                            }, t.prototype._broadcast = function(t) {
                                for (var e = 0, n = this._listeners; e < n.length; e++) {
                                    var r = n[e];
                                    try {
                                        r(t.isOpen, t)
                                    } catch (t) {}
                                }
                            }, t.prototype._detectLoop = function() {
                                return o(this, void 0, void 0, (function() {
                                    var t, e, n, r, o, a = this;
                                    return i(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                t = !1, e = "", n = 0, r = this._checkers, i.label = 1;
                                            case 1:
                                                return n < r.length ? [4, (o = r[n]).isEnable()] : [3, 6];
                                            case 2:
                                                return i.sent() ? (e = o.name, [4, o.isOpen()]) : [3, 4];
                                            case 3:
                                                t = i.sent(), i.label = 4;
                                            case 4:
                                                if (t) return [3, 6];
                                                i.label = 5;
                                            case 5:
                                                return n++, [3, 1];
                                            case 6:
                                                return t != this._isOpen && (this._isOpen = t, this._broadcast({
                                                    isOpen: t,
                                                    checkerName: e
                                                })), this._detectLoopDelay > 0 && !this._detectLoopStopped ? this._timer = setTimeout((function() {
                                                    return a._detectLoop()
                                                }), this._detectLoopDelay) : this.stop(), [2]
                                        }
                                    }))
                                }))
                            }, t
                        }()
                }, function(t, e) {
                    var n;
                    n = function() {
                        return this
                    }();
                    try {
                        n = n || Function("return this")() || (0, eval)("this")
                    } catch (t) {
                        "object" == typeof window && (n = window)
                    }
                    t.exports = n
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return c
                    }));
                    var r = n(11),
                        o = this && this.__awaiter || function(t, e, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function a(t) {
                                    try {
                                        u(r.next(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function c(t) {
                                    try {
                                        u(r.throw(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function u(t) {
                                    t.done ? o(t.value) : function(t) {
                                        return t instanceof n ? t : new n((function(e) {
                                            e(t)
                                        }))
                                    }(t.value).then(a, c)
                                }
                                u((r = r.apply(t, e || [])).next())
                            }))
                        },
                        i = this && this.__generator || function(t, e) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: c(0),
                                throw: c(1),
                                return: c(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function c(c) {
                                return function(u) {
                                    return function(c) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                            if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                            switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                case 0:
                                                case 1:
                                                    o = c;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: c[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = c[1], c = [0];
                                                    continue;
                                                case 7:
                                                    c = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                        a.label = c[1];
                                                        break
                                                    }
                                                    if (6 === c[0] && a.label < o[1]) {
                                                        a.label = o[1], o = c;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(c);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            c = e.call(t, a)
                                        } catch (t) {
                                            c = [6, t], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & c[0]) throw c[1];
                                        return {
                                            value: c[0] ? c[1] : void 0,
                                            done: !0
                                        }
                                    }([c, u])
                                }
                            }
                        },
                        a = this && this.__spreadArray || function(t, e, n) {
                            if (n || 2 === arguments.length)
                                for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                            return t.concat(r || Array.prototype.slice.call(e))
                        },
                        c = function() {
                            function t(t) {
                                var e = this;
                                this.callbacks = new Map, this.worker = t, this.worker.onmessage = function(t) {
                                    var n = t.data,
                                        r = n.id,
                                        o = e.callbacks.get(n.id);
                                    o && (o({
                                        time: n.time
                                    }), e.callbacks.delete(r))
                                }, this.log = function() {
                                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                    return e.send.apply(e, a(["log"], t, !1))
                                }, this.table = function() {
                                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                    return e.send.apply(e, a(["table"], t, !1))
                                }, this.clear = function() {
                                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                                    return e.send.apply(e, a(["clear"], t, !1))
                                }
                            }
                            return t.prototype.send = function(t) {
                                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                                return o(this, void 0, void 0, (function() {
                                    var n, o = this;
                                    return i(this, (function(i) {
                                        return n = Object(r.a)(), [2, new Promise((function(r, i) {
                                            o.callbacks.set(n, r), o.worker.postMessage({
                                                id: n,
                                                type: t,
                                                payload: e
                                            }), setTimeout((function() {
                                                i(new Error("timeout")), o.callbacks.delete(n)
                                            }), 2e3)
                                        }))]
                                    }))
                                }))
                            }, t.workerScript = "\nonmessage = function(event) {\n  var action = event.data;\n  var startTime = performance.now()\n\n  console[action.type](...action.payload);\n  postMessage({\n    id: action.id,\n    time: performance.now() - startTime\n  })\n}\n", t
                        }()
                }, function(t, e, n) {
                    "use strict";
                    e.a = function() {
                        return r > Number.MAX_SAFE_INTEGER && (r = 0), r++
                    };
                    var r = 0
                }, function(t, e, n) {
                    "use strict";
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = n(13);
                    n.d(e, "depRegToStringChecker", (function() {
                        return r.a
                    }));
                    var o = n(14);
                    n.d(e, "elementIdChecker", (function() {
                        return o.a
                    }));
                    var i = n(15);
                    n.d(e, "functionToStringChecker", (function() {
                        return i.a
                    }));
                    var a = n(16);
                    n.d(e, "regToStringChecker", (function() {
                        return a.a
                    }));
                    var c = n(17);
                    n.d(e, "debuggerChecker", (function() {
                        return c.a
                    }));
                    var u = n(18);
                    n.d(e, "dateToStringChecker", (function() {
                        return u.a
                    }));
                    var l = n(19);
                    n.d(e, "performanceChecker", (function() {
                        return l.a
                    }));
                    var s = n(20);
                    n.d(e, "erudaChecker", (function() {
                        return s.a
                    }));
                    var f = n(21);
                    n.d(e, "devtoolsFormatterChecker", (function() {
                        return f.a
                    }));
                    var h = n(22);
                    n.d(e, "workerPerformanceChecker", (function() {
                        return h.a
                    }))
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return s
                    }));
                    var r = n(0),
                        o = n(1),
                        i = n(2),
                        a = this && this.__awaiter || function(t, e, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function a(t) {
                                    try {
                                        u(r.next(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function c(t) {
                                    try {
                                        u(r.throw(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function u(t) {
                                    t.done ? o(t.value) : function(t) {
                                        return t instanceof n ? t : new n((function(e) {
                                            e(t)
                                        }))
                                    }(t.value).then(a, c)
                                }
                                u((r = r.apply(t, e || [])).next())
                            }))
                        },
                        c = this && this.__generator || function(t, e) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: c(0),
                                throw: c(1),
                                return: c(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function c(c) {
                                return function(u) {
                                    return function(c) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                            if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                            switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                case 0:
                                                case 1:
                                                    o = c;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: c[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = c[1], c = [0];
                                                    continue;
                                                case 7:
                                                    c = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                        a.label = c[1];
                                                        break
                                                    }
                                                    if (6 === c[0] && a.label < o[1]) {
                                                        a.label = o[1], o = c;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(c);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            c = e.call(t, a)
                                        } catch (t) {
                                            c = [6, t], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & c[0]) throw c[1];
                                        return {
                                            value: c[0] ? c[1] : void 0,
                                            done: !0
                                        }
                                    }([c, u])
                                }
                            }
                        },
                        u = / /,
                        l = !1;
                    u.toString = function() {
                        return l = !0, s.name
                    };
                    var s = {
                        name: "dep-reg-to-string",
                        isOpen: function() {
                            return a(this, void 0, void 0, (function() {
                                return c(this, (function(t) {
                                    return l = !1, Object(o.c)({
                                        dep: u
                                    }), Object(o.a)(), [2, l]
                                }))
                            }))
                        },
                        isEnable: function() {
                            return a(this, void 0, void 0, (function() {
                                return c(this, (function(t) {
                                    return [2, Object(i.a)({
                                        includes: [!0],
                                        excludes: [r.d, r.e]
                                    })]
                                }))
                            }))
                        }
                    }
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return f
                    }));
                    var r = n(0),
                        o = n(1),
                        i = n(2),
                        a = n(3),
                        c = this && this.__awaiter || function(t, e, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function a(t) {
                                    try {
                                        u(r.next(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function c(t) {
                                    try {
                                        u(r.throw(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function u(t) {
                                    t.done ? o(t.value) : function(t) {
                                        return t instanceof n ? t : new n((function(e) {
                                            e(t)
                                        }))
                                    }(t.value).then(a, c)
                                }
                                u((r = r.apply(t, e || [])).next())
                            }))
                        },
                        u = this && this.__generator || function(t, e) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: c(0),
                                throw: c(1),
                                return: c(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function c(c) {
                                return function(u) {
                                    return function(c) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                            if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                            switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                case 0:
                                                case 1:
                                                    o = c;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: c[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = c[1], c = [0];
                                                    continue;
                                                case 7:
                                                    c = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                        a.label = c[1];
                                                        break
                                                    }
                                                    if (6 === c[0] && a.label < o[1]) {
                                                        a.label = o[1], o = c;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(c);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            c = e.call(t, a)
                                        } catch (t) {
                                            c = [6, t], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & c[0]) throw c[1];
                                        return {
                                            value: c[0] ? c[1] : void 0,
                                            done: !0
                                        }
                                    }([c, u])
                                }
                            }
                        },
                        l = Object(a.a)("div"),
                        s = !1;
                    Object.defineProperty(l, "id", {
                        get: function() {
                            return s = !0, f.name
                        },
                        configurable: !0
                    });
                    var f = {
                        name: "element-id",
                        isOpen: function() {
                            return c(this, void 0, void 0, (function() {
                                return u(this, (function(t) {
                                    return s = !1, Object(o.b)(l), Object(o.a)(), [2, s]
                                }))
                            }))
                        },
                        isEnable: function() {
                            return c(this, void 0, void 0, (function() {
                                return u(this, (function(t) {
                                    return [2, Object(i.a)({
                                        includes: [!0],
                                        excludes: [r.e, r.c, r.d]
                                    })]
                                }))
                            }))
                        }
                    }
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return f
                    }));
                    var r = n(0),
                        o = n(1),
                        i = n(5),
                        a = n(2),
                        c = this && this.__awaiter || function(t, e, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function a(t) {
                                    try {
                                        u(r.next(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function c(t) {
                                    try {
                                        u(r.throw(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function u(t) {
                                    t.done ? o(t.value) : function(t) {
                                        return t instanceof n ? t : new n((function(e) {
                                            e(t)
                                        }))
                                    }(t.value).then(a, c)
                                }
                                u((r = r.apply(t, e || [])).next())
                            }))
                        },
                        u = this && this.__generator || function(t, e) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: c(0),
                                throw: c(1),
                                return: c(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function c(c) {
                                return function(u) {
                                    return function(c) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                            if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                            switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                case 0:
                                                case 1:
                                                    o = c;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: c[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = c[1], c = [0];
                                                    continue;
                                                case 7:
                                                    c = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                        a.label = c[1];
                                                        break
                                                    }
                                                    if (6 === c[0] && a.label < o[1]) {
                                                        a.label = o[1], o = c;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(c);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            c = e.call(t, a)
                                        } catch (t) {
                                            c = [6, t], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & c[0]) throw c[1];
                                        return {
                                            value: c[0] ? c[1] : void 0,
                                            done: !0
                                        }
                                    }([c, u])
                                }
                            }
                        };

                    function l() {}
                    var s = 0;
                    l.toString = function() {
                        return s++, ""
                    };
                    var f = {
                        name: "function-to-string",
                        isOpen: function() {
                            return c(this, void 0, void 0, (function() {
                                return u(this, (function(t) {
                                    return s = 0, Object(o.b)(l), Object(o.a)(), [2, 2 === s]
                                }))
                            }))
                        },
                        isEnable: function() {
                            return c(this, void 0, void 0, (function() {
                                var t;
                                return u(this, (function(e) {
                                    return t = i.b || i.c, [2, Object(a.a)({
                                        includes: [!0],
                                        excludes: [r.f, r.d, t && r.b, t && r.c]
                                    })]
                                }))
                            }))
                        }
                    }
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return s
                    }));
                    var r = n(1),
                        o = n(0),
                        i = n(2),
                        a = this && this.__awaiter || function(t, e, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function a(t) {
                                    try {
                                        u(r.next(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function c(t) {
                                    try {
                                        u(r.throw(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function u(t) {
                                    t.done ? o(t.value) : function(t) {
                                        return t instanceof n ? t : new n((function(e) {
                                            e(t)
                                        }))
                                    }(t.value).then(a, c)
                                }
                                u((r = r.apply(t, e || [])).next())
                            }))
                        },
                        c = this && this.__generator || function(t, e) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: c(0),
                                throw: c(1),
                                return: c(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function c(c) {
                                return function(u) {
                                    return function(c) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                            if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                            switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                case 0:
                                                case 1:
                                                    o = c;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: c[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = c[1], c = [0];
                                                    continue;
                                                case 7:
                                                    c = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                        a.label = c[1];
                                                        break
                                                    }
                                                    if (6 === c[0] && a.label < o[1]) {
                                                        a.label = o[1], o = c;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(c);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            c = e.call(t, a)
                                        } catch (t) {
                                            c = [6, t], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & c[0]) throw c[1];
                                        return {
                                            value: c[0] ? c[1] : void 0,
                                            done: !0
                                        }
                                    }([c, u])
                                }
                            }
                        },
                        u = / /,
                        l = !1;
                    u.toString = function() {
                        return l = !0, s.name
                    };
                    var s = {
                        name: "reg-to-string",
                        isOpen: function() {
                            return a(this, void 0, void 0, (function() {
                                return c(this, (function(t) {
                                    return l = !1, Object(r.b)(u), Object(r.a)(), [2, l]
                                }))
                            }))
                        },
                        isEnable: function() {
                            return a(this, void 0, void 0, (function() {
                                return c(this, (function(t) {
                                    return [2, Object(i.a)({
                                        includes: [!0],
                                        excludes: [o.h]
                                    })]
                                }))
                            }))
                        }
                    }
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return a
                    }));
                    var r = n(6),
                        o = this && this.__awaiter || function(t, e, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function a(t) {
                                    try {
                                        u(r.next(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function c(t) {
                                    try {
                                        u(r.throw(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function u(t) {
                                    t.done ? o(t.value) : function(t) {
                                        return t instanceof n ? t : new n((function(e) {
                                            e(t)
                                        }))
                                    }(t.value).then(a, c)
                                }
                                u((r = r.apply(t, e || [])).next())
                            }))
                        },
                        i = this && this.__generator || function(t, e) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: c(0),
                                throw: c(1),
                                return: c(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function c(c) {
                                return function(u) {
                                    return function(c) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                            if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                            switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                case 0:
                                                case 1:
                                                    o = c;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: c[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = c[1], c = [0];
                                                    continue;
                                                case 7:
                                                    c = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                        a.label = c[1];
                                                        break
                                                    }
                                                    if (6 === c[0] && a.label < o[1]) {
                                                        a.label = o[1], o = c;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(c);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            c = e.call(t, a)
                                        } catch (t) {
                                            c = [6, t], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & c[0]) throw c[1];
                                        return {
                                            value: c[0] ? c[1] : void 0,
                                            done: !0
                                        }
                                    }([c, u])
                                }
                            }
                        },
                        a = {
                            name: "debugger-checker",
                            isOpen: function() {
                                return o(this, void 0, void 0, (function() {
                                    var t;
                                    return i(this, (function(e) {
                                        t = Object(r.a)();
                                        try {
                                            (function() {}).constructor("debugger")()
                                        } catch (t) {}
                                        return [2, Object(r.a)() - t > 100]
                                    }))
                                }))
                            },
                            isEnable: function() {
                                return o(this, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        return [2, !0]
                                    }))
                                }))
                            }
                        }
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return f
                    }));
                    var r = n(0),
                        o = n(1),
                        i = n(2),
                        a = n(4),
                        c = this && this.__awaiter || function(t, e, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function a(t) {
                                    try {
                                        u(r.next(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function c(t) {
                                    try {
                                        u(r.throw(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function u(t) {
                                    t.done ? o(t.value) : function(t) {
                                        return t instanceof n ? t : new n((function(e) {
                                            e(t)
                                        }))
                                    }(t.value).then(a, c)
                                }
                                u((r = r.apply(t, e || [])).next())
                            }))
                        },
                        u = this && this.__generator || function(t, e) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: c(0),
                                throw: c(1),
                                return: c(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function c(c) {
                                return function(u) {
                                    return function(c) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                            if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                            switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                case 0:
                                                case 1:
                                                    o = c;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: c[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = c[1], c = [0];
                                                    continue;
                                                case 7:
                                                    c = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                        a.label = c[1];
                                                        break
                                                    }
                                                    if (6 === c[0] && a.label < o[1]) {
                                                        a.label = o[1], o = c;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(c);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            c = e.call(t, a)
                                        } catch (t) {
                                            c = [6, t], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & c[0]) throw c[1];
                                        return {
                                            value: c[0] ? c[1] : void 0,
                                            done: !0
                                        }
                                    }([c, u])
                                }
                            }
                        },
                        l = new Date,
                        s = 0;
                    l.toString = function() {
                        return s++, ""
                    };
                    var f = {
                        name: "date-to-string",
                        isOpen: function() {
                            return c(this, void 0, void 0, (function() {
                                return u(this, (function(t) {
                                    return s = 0, Object(o.b)(l), Object(o.a)(), [2, 2 === s]
                                }))
                            }))
                        },
                        isEnable: function() {
                            return c(this, void 0, void 0, (function() {
                                return u(this, (function(t) {
                                    return [2, Object(i.a)({
                                        includes: [r.b],
                                        excludes: [(a.isIpad || a.isIphone) && r.b]
                                    })]
                                }))
                            }))
                        }
                    }
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return h
                    }));
                    var r = n(1),
                        o = n(0),
                        i = n(7),
                        a = n(2),
                        c = n(3),
                        u = n(6),
                        l = this && this.__awaiter || function(t, e, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function a(t) {
                                    try {
                                        u(r.next(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function c(t) {
                                    try {
                                        u(r.throw(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function u(t) {
                                    t.done ? o(t.value) : function(t) {
                                        return t instanceof n ? t : new n((function(e) {
                                            e(t)
                                        }))
                                    }(t.value).then(a, c)
                                }
                                u((r = r.apply(t, e || [])).next())
                            }))
                        },
                        s = this && this.__generator || function(t, e) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: c(0),
                                throw: c(1),
                                return: c(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function c(c) {
                                return function(u) {
                                    return function(c) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                            if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                            switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                case 0:
                                                case 1:
                                                    o = c;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: c[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = c[1], c = [0];
                                                    continue;
                                                case 7:
                                                    c = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                        a.label = c[1];
                                                        break
                                                    }
                                                    if (6 === c[0] && a.label < o[1]) {
                                                        a.label = o[1], o = c;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(c);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            c = e.call(t, a)
                                        } catch (t) {
                                            c = [6, t], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & c[0]) throw c[1];
                                        return {
                                            value: c[0] ? c[1] : void 0,
                                            done: !0
                                        }
                                    }([c, u])
                                }
                            }
                        },
                        f = 0,
                        h = {
                            name: "performance",
                            isOpen: function() {
                                return l(this, void 0, void 0, (function() {
                                    var t, e;
                                    return s(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return navigator.webdriver ? [2, !1] : (t = function() {
                                                    var t = Object(i.a)(),
                                                        e = Object(u.a)();
                                                    return Object(r.c)(t), Object(u.a)() - e
                                                }(), e = Math.max(p(), p()), f = Math.max(f, e), Object(r.a)(), 0 === t ? [2, !1] : 0 !== f ? [3, 2] : [4, Object(c.d)()]);
                                            case 1:
                                                return n.sent() ? [2, !0] : [2, !1];
                                            case 2:
                                                return [2, t >= 7 * f]
                                        }
                                    }))
                                }))
                            },
                            isEnable: function() {
                                return l(this, void 0, void 0, (function() {
                                    return s(this, (function(t) {
                                        return [2, Object(a.a)({
                                            includes: [o.b],
                                            excludes: []
                                        })]
                                    }))
                                }))
                            }
                        };

                    function p() {
                        var t = Object(i.a)(),
                            e = Object(u.a)();
                        return Object(r.b)(t), Object(u.a)() - e
                    }
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return i
                    }));
                    var r = this && this.__awaiter || function(t, e, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function a(t) {
                                    try {
                                        u(r.next(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function c(t) {
                                    try {
                                        u(r.throw(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function u(t) {
                                    t.done ? o(t.value) : function(t) {
                                        return t instanceof n ? t : new n((function(e) {
                                            e(t)
                                        }))
                                    }(t.value).then(a, c)
                                }
                                u((r = r.apply(t, e || [])).next())
                            }))
                        },
                        o = this && this.__generator || function(t, e) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: c(0),
                                throw: c(1),
                                return: c(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function c(c) {
                                return function(u) {
                                    return function(c) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                            if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                            switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                case 0:
                                                case 1:
                                                    o = c;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: c[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = c[1], c = [0];
                                                    continue;
                                                case 7:
                                                    c = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                        a.label = c[1];
                                                        break
                                                    }
                                                    if (6 === c[0] && a.label < o[1]) {
                                                        a.label = o[1], o = c;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(c);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            c = e.call(t, a)
                                        } catch (t) {
                                            c = [6, t], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & c[0]) throw c[1];
                                        return {
                                            value: c[0] ? c[1] : void 0,
                                            done: !0
                                        }
                                    }([c, u])
                                }
                            }
                        },
                        i = {
                            name: "eruda",
                            isOpen: function() {
                                var t;
                                return r(this, void 0, void 0, (function() {
                                    return o(this, (function(e) {
                                        return "undefined" != typeof eruda ? [2, !0 === (null === (t = null === eruda || void 0 === eruda ? void 0 : eruda._devTools) || void 0 === t ? void 0 : t._isShow)] : [2, !1]
                                    }))
                                }))
                            },
                            isEnable: function() {
                                return r(this, void 0, void 0, (function() {
                                    return o(this, (function(t) {
                                        return [2, !0]
                                    }))
                                }))
                            }
                        }
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return u
                    }));
                    var r = n(1),
                        o = this && this.__awaiter || function(t, e, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function a(t) {
                                    try {
                                        u(r.next(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function c(t) {
                                    try {
                                        u(r.throw(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function u(t) {
                                    t.done ? o(t.value) : function(t) {
                                        return t instanceof n ? t : new n((function(e) {
                                            e(t)
                                        }))
                                    }(t.value).then(a, c)
                                }
                                u((r = r.apply(t, e || [])).next())
                            }))
                        },
                        i = this && this.__generator || function(t, e) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: c(0),
                                throw: c(1),
                                return: c(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function c(c) {
                                return function(u) {
                                    return function(c) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                            if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                            switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                case 0:
                                                case 1:
                                                    o = c;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: c[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = c[1], c = [0];
                                                    continue;
                                                case 7:
                                                    c = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                        a.label = c[1];
                                                        break
                                                    }
                                                    if (6 === c[0] && a.label < o[1]) {
                                                        a.label = o[1], o = c;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(c);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            c = e.call(t, a)
                                        } catch (t) {
                                            c = [6, t], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & c[0]) throw c[1];
                                        return {
                                            value: c[0] ? c[1] : void 0,
                                            done: !0
                                        }
                                    }([c, u])
                                }
                            }
                        },
                        a = !1,
                        c = {
                            header: function() {
                                return a = !0, null
                            }
                        },
                        u = {
                            name: "DevtoolsFormatters",
                            isOpen: function() {
                                return o(this, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        return window.devtoolsFormatters ? -1 === window.devtoolsFormatters.indexOf(c) && window.devtoolsFormatters.push(c) : window.devtoolsFormatters = [c], a = !1, Object(r.b)({}), Object(r.a)(), [2, a]
                                    }))
                                }))
                            },
                            isEnable: function() {
                                return o(this, void 0, void 0, (function() {
                                    return i(this, (function(t) {
                                        return [2, !0]
                                    }))
                                }))
                            }
                        }
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return s
                    }));
                    var r = n(0),
                        o = n(2),
                        i = n(3),
                        a = n(7),
                        c = this && this.__awaiter || function(t, e, n, r) {
                            return new(n || (n = Promise))((function(o, i) {
                                function a(t) {
                                    try {
                                        u(r.next(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function c(t) {
                                    try {
                                        u(r.throw(t))
                                    } catch (t) {
                                        i(t)
                                    }
                                }

                                function u(t) {
                                    t.done ? o(t.value) : function(t) {
                                        return t instanceof n ? t : new n((function(e) {
                                            e(t)
                                        }))
                                    }(t.value).then(a, c)
                                }
                                u((r = r.apply(t, e || [])).next())
                            }))
                        },
                        u = this && this.__generator || function(t, e) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: c(0),
                                throw: c(1),
                                return: c(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;

                            function c(c) {
                                return function(u) {
                                    return function(c) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                            if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                                            switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                case 0:
                                                case 1:
                                                    o = c;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: c[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = c[1], c = [0];
                                                    continue;
                                                case 7:
                                                    c = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                        a.label = c[1];
                                                        break
                                                    }
                                                    if (6 === c[0] && a.label < o[1]) {
                                                        a.label = o[1], o = c;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(c);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            c = e.call(t, a)
                                        } catch (t) {
                                            c = [6, t], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & c[0]) throw c[1];
                                        return {
                                            value: c[0] ? c[1] : void 0,
                                            done: !0
                                        }
                                    }([c, u])
                                }
                            }
                        },
                        l = 0,
                        s = {
                            name: "worker-performance",
                            isOpen: function() {
                                return c(this, void 0, void 0, (function() {
                                    var t, e, n;
                                    return u(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return null == (t = Object(i.c)()) ? [2, !1] : [4, function(t) {
                                                    return c(this, void 0, void 0, (function() {
                                                        var e;
                                                        return u(this, (function(n) {
                                                            switch (n.label) {
                                                                case 0:
                                                                    return e = Object(a.a)(), [4, t.table(e)];
                                                                case 1:
                                                                    return [2, n.sent().time]
                                                            }
                                                        }))
                                                    }))
                                                }(t)];
                                            case 1:
                                                return e = r.sent(), [4, function(t) {
                                                    return c(this, void 0, void 0, (function() {
                                                        var e;
                                                        return u(this, (function(n) {
                                                            switch (n.label) {
                                                                case 0:
                                                                    return e = Object(a.a)(), [4, t.log(e)];
                                                                case 1:
                                                                    return [2, n.sent().time]
                                                            }
                                                        }))
                                                    }))
                                                }(t)];
                                            case 2:
                                                return n = r.sent(), l = Math.max(l, n), [4, t.clear()];
                                            case 3:
                                                return r.sent(), 0 === e ? [2, !1] : 0 !== l ? [3, 5] : [4, Object(i.d)()];
                                            case 4:
                                                return r.sent() ? [2, !0] : [2, !1];
                                            case 5:
                                                return [2, e > 10 * l]
                                        }
                                    }))
                                }))
                            },
                            isEnable: function() {
                                return c(this, void 0, void 0, (function() {
                                    return u(this, (function(t) {
                                        return [2, Object(o.a)({
                                            includes: [r.b],
                                            excludes: []
                                        })]
                                    }))
                                }))
                            }
                        }
                }, function(t, e, n) {
                    "use strict";
                    e.b = function() {
                        if (r.a)
                            for (var t = 0; t < Number.MAX_VALUE; t++) window["".concat(t)] = new Array(Math.pow(2, 32) - 1).fill(0)
                    }, e.a = function() {
                        if (r.a)
                            for (var t = [];;) t.push(0), location.reload()
                    };
                    var r = n(0)
                }, function(t, e, n) {
                    "use strict";
                    n.d(e, "a", (function() {
                        return r
                    }));
                    for (var r = {}, o = 0, i = (n(0).i || "").match(/\w+\/(\d|\.)+(\s|$)/gi) || []; o < i.length; o++) {
                        var a = i[o].split("/"),
                            c = a[0],
                            u = a[1];
                        r[c] = u
                    }
                }])
            }
        },
        e = {};

    function n(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var i = e[r] = {
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.exports
    }
    n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }), e
    }, n.d = (t, e) => {
        for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    }, n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
        "use strict";
        var t = {
            tenantId: "",
            domainName: "",
            serverUrl: "",
            detectOnLoad: !0,
            detectDevTools: !0,
            detectClickBehavior: !0,
            detectClickSampleSize: 10,
            detectClickThreshold: 10,
            detectClickMaxTimeDiff: 6e4,
            redirectOnLocation: !0,
            networkTimeout: 3e3,
            useMainDomain: !0,
            logging: !1
        };

        function e(t) {
            return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, e(t)
        }

        function r(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? r(Object(n), !0).forEach((function(e) {
                    i(t, e, n[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }))
            }
            return t
        }

        function i(t, n, r) {
            return (n = function(t) {
                var n = function(t, n) {
                    if ("object" != e(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var o = r.call(t, n || "default");
                        if ("object" != e(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === n ? String : Number)(t)
                }(t, "string");
                return "symbol" == e(n) ? n : n + ""
            }(n)) in t ? Object.defineProperty(t, n, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[n] = r, t
        }

        function a(e) {
            if (!e || 0 === Object.keys(e).length) return null;
            var n = function(e) {
                var n = o(o({}, t), e);
                return "loginId" in e || (n.loginId = void 0), "customId" in e || (n.customId = void 0), n
            }(e);
            return function(t) {
                return !!(t.domainName && t.tenantId && t.serverUrl)
            }(n) ? n : (console.error("Invalid BotManager configuration."), t)
        }
        var c = "BM-login-id",
            u = "BM-session-id",
            l = "BM-clickTimes",
            s = "BM-lastClickTime",
            f = "x-botmanager-location",
            h = "".concat("BM-browser-agent", "-").concat("1.0.7"),
            p = "developer-tools",
            d = "selenium",
            v = "";
        var y = "/deny/index.html",
            b = {
                0: null,
                1: y,
                2: y,
                3: y,
                6: y,
                7: y,
                11: y,
                12: y,
                13: y,
                14: y,
                71: y,
                99: y,
                4: "/challenge/index.html",
                5: "/captcha/index.html"
            },
            g = "/detect",
            w = "detectClick";

        function m(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t
            }(t) || function(t, e) {
                var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                if (null != n) {
                    var r, o, i, a, c = [],
                        u = !0,
                        l = !1;
                    try {
                        if (i = (n = n.call(t)).next, 0 === e) {
                            if (Object(n) !== n) return;
                            u = !1
                        } else
                            for (; !(u = (r = i.call(n)).done) && (c.push(r.value), c.length !== e); u = !0);
                    } catch (t) {
                        l = !0, o = t
                    } finally {
                        try {
                            if (!u && null != n.return && (a = n.return(), Object(a) !== a)) return
                        } finally {
                            if (l) throw o
                        }
                    }
                    return c
                }
            }(t, e) || function(t, e) {
                if (t) {
                    if ("string" == typeof t) return S(t, e);
                    var n = {}.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? S(t, e) : void 0
                }
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function S(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
            return r
        }
        var k = function() {
                return window.location.href
            },
            O = function(t) {
                var e = document.cookie.match(new RegExp("(^| )" + t + "=([^;]+)"));
                return e ? decodeURIComponent(e[2]) : null
            };

        function x(t, e, n, r) {
            var o = new Date;
            o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
            var i = "";
            i = r.useMainDomain ? function() {
                var t = window.location.hostname,
                    e = t.split(".");
                if (/^[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+$/.test(t)) return "";
                if (1 === e.length) return t;
                var n = e.length > 2 && ["co", "gov"].includes(e[e.length - 2]) ? e.slice(-3).join(".") : e.slice(-2).join(".");
                return ".".concat(n)
            }() : window.location.hostname;
            var a = "".concat(t, "=").concat(encodeURIComponent(e), ";expires=").concat(o.toUTCString(), ";path=/");
            i && (a += ";domain=".concat(i)), "https:" === location.protocol && (a += ";SameSite=None;Secure"), document.cookie = a
        }
        var _ = function(t) {
                return btoa(t)
            },
            L = function(t) {
                try {
                    return atob(t)
                } catch (t) {
                    return console.error("Failed to decode base64 string", t), ""
                }
            };

        function j(t) {
            if (t) try {
                var e = new URL(t);
                e.searchParams.append("redirectUrl", window.location.href), window.top && window.top !== window.self ? window.top.location.href = e.toString() : window.location.href = e.toString()
            } catch (t) {
                console.error("Unable to redirect using top. Falling back to current window redirect.", t)
            }
        }

        function E(t) {
            if (!t) {
                var e = new URL(window.location.href);
                return {
                    pageUrl: e.pathname,
                    queryString: e.search.replace("?", "")
                }
            }
            try {
                var n = new URL(t);
                return {
                    pageUrl: n.pathname,
                    queryString: n.search.replace("?", "")
                }
            } catch (e) {
                var r = window.location.origin,
                    o = new URL(t.startsWith("/") ? t : "/".concat(t), r);
                return {
                    pageUrl: o.pathname,
                    queryString: o.search.replace("?", "")
                }
            }
        }

        function T(t, e, n) {
            if (!ht.getRedirectingStatus()) {
                var r = e.blockType;
				window.alert("1");
				window.alert(r);
                if (0 !== r) {
                    var o, i = function(t, e) {
                        var n = (o = t.protectionServerUrl, o || "https://cdn-botmanager.stclab.com"),
                            r = b[e];
                        var o;
                        return r ? "".concat(n).concat(r) : null
                    }(t, r);
                    if (i) {
                        ht.setRedirectingStatus(!0);
                        var a = function(t, e, n) {
                                var r = new URLSearchParams({
                                    serverUrl: encodeURIComponent(t.serverUrl),
                                    tenantId: t.tenantId,
                                    domainName: t.domainName,
                                    loginId: _(e.loginId),
                                    sessionId: e.sessionId,
                                    pageUrl: e.pageUrl,
                                    queryString: e.queryString,
                                    blockType: n.blockType.toString(),
                                    agentTag: h,
                                    redirectUrl: encodeURIComponent(k())
                                });
                                if (5 === n.blockType) {
                                    var o, i;
                                    r.append("captchaTryLimit", (null === (o = n.captchaTryLimit) || void 0 === o ? void 0 : o.toString()) || ""), r.append("requiredCaptchaSuccessCount", (null === (i = n.requiredCaptchaSuccessCount) || void 0 === i ? void 0 : i.toString()) || "")
                                }
                                return r
                            }(t, n, e),
                            c = "".concat(i, "?").concat(a.toString());
							window.alert("3");
                        o = c, window.top && window.top !== window.self ? window.top.location.href = o.toString() : window.location.href = o.toString()
                    }
                }
            }
        }

        function P(t) {
            try {
                return btoa(atob(t)) === t
            } catch (t) {
                return !1
            }
        }

        function I(t, e) {
            var n = arguments.length > 3 ? arguments[3] : void 0,
                r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? _(e) : e;
            localStorage.setItem(t, r), x(t, r, 365, n)
        }

        function C(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = localStorage.getItem(t),
                o = O(t) ? decodeURIComponent(O(t)) : null,
                i = null;
            return r === o ? i = r : r && o && r !== o ? (i = o, localStorage.setItem(t, o)) : (i = r || o || null) && (r || localStorage.setItem(t, i), o || x(t, i, 365, n)), i && e && P(i) ? L(i) : i
        }

        function U(t, e) {
            if (void 0 !== e) return I(c, e, !0, t), e;
            var n = C(c, !1, t);
            return n ? P(n) ? L(n) : (x(c, _(n), 365, t), n) : ""
        }

        function D(t) {
            var e, n, r = C(u, !1, t);
            return r && 17 === r.length || (e = (new Date).getTime().toString(36), n = Math.random().toString(36).substring(2, 10), r = "".concat(e, "-").concat(n), I(u, r, !1, t)), r
        }

        function R(t) {
            return R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, R(t)
        }

        function M() {
            M = function() {
                return e
            };
            var t, e = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = Object.defineProperty || function(t, e, n) {
                    t[e] = n.value
                },
                i = "function" == typeof Symbol ? Symbol : {},
                a = i.iterator || "@@iterator",
                c = i.asyncIterator || "@@asyncIterator",
                u = i.toStringTag || "@@toStringTag";

            function l(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e]
            }
            try {
                l({}, "")
            } catch (t) {
                l = function(t, e, n) {
                    return t[e] = n
                }
            }

            function s(t, e, n, r) {
                var i = e && e.prototype instanceof b ? e : b,
                    a = Object.create(i.prototype),
                    c = new P(r || []);
                return o(a, "_invoke", {
                    value: L(t, n, c)
                }), a
            }

            function f(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            e.wrap = s;
            var h = "suspendedStart",
                p = "suspendedYield",
                d = "executing",
                v = "completed",
                y = {};

            function b() {}

            function g() {}

            function w() {}
            var m = {};
            l(m, a, (function() {
                return this
            }));
            var S = Object.getPrototypeOf,
                k = S && S(S(I([])));
            k && k !== n && r.call(k, a) && (m = k);
            var O = w.prototype = b.prototype = Object.create(m);

            function x(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    l(t, e, (function(t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function _(t, e) {
                function n(o, i, a, c) {
                    var u = f(t[o], t, i);
                    if ("throw" !== u.type) {
                        var l = u.arg,
                            s = l.value;
                        return s && "object" == R(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                            n("next", t, a, c)
                        }), (function(t) {
                            n("throw", t, a, c)
                        })) : e.resolve(s).then((function(t) {
                            l.value = t, a(l)
                        }), (function(t) {
                            return n("throw", t, a, c)
                        }))
                    }
                    c(u.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(t, r) {
                        function o() {
                            return new e((function(e, o) {
                                n(t, r, e, o)
                            }))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }

            function L(e, n, r) {
                var o = h;
                return function(i, a) {
                    if (o === d) throw Error("Generator is already running");
                    if (o === v) {
                        if ("throw" === i) throw a;
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    for (r.method = i, r.arg = a;;) {
                        var c = r.delegate;
                        if (c) {
                            var u = j(c, r);
                            if (u) {
                                if (u === y) continue;
                                return u
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === h) throw o = v, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = d;
                        var l = f(e, n, r);
                        if ("normal" === l.type) {
                            if (o = r.done ? v : p, l.arg === y) continue;
                            return {
                                value: l.arg,
                                done: r.done
                            }
                        }
                        "throw" === l.type && (o = v, r.method = "throw", r.arg = l.arg)
                    }
                }
            }

            function j(e, n) {
                var r = n.method,
                    o = e.iterator[r];
                if (o === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, j(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                var i = f(o, e.iterator, n.arg);
                if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, y;
                var a = i.arg;
                return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, y) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
            }

            function E(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function T(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function P(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(E, this), this.reset(!0)
            }

            function I(e) {
                if (e || "" === e) {
                    var n = e[a];
                    if (n) return n.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var o = -1,
                            i = function n() {
                                for (; ++o < e.length;)
                                    if (r.call(e, o)) return n.value = e[o], n.done = !1, n;
                                return n.value = t, n.done = !0, n
                            };
                        return i.next = i
                    }
                }
                throw new TypeError(R(e) + " is not iterable")
            }
            return g.prototype = w, o(O, "constructor", {
                value: w,
                configurable: !0
            }), o(w, "constructor", {
                value: g,
                configurable: !0
            }), g.displayName = l(w, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
            }, e.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w, l(t, u, "GeneratorFunction")), t.prototype = Object.create(O), t
            }, e.awrap = function(t) {
                return {
                    __await: t
                }
            }, x(_.prototype), l(_.prototype, c, (function() {
                return this
            })), e.AsyncIterator = _, e.async = function(t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new _(s(t, n, r, o), i);
                return e.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }))
            }, x(O), l(O, u, "Generator"), l(O, a, (function() {
                return this
            })), l(O, "toString", (function() {
                return "[object Generator]"
            })), e.keys = function(t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return n.reverse(),
                    function t() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in e) return t.value = r, t.done = !1, t
                        }
                        return t.done = !0, t
                    }
            }, e.values = I, P.prototype = {
                constructor: P,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(T), !e)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var n = this;

                    function o(r, o) {
                        return c.type = "throw", c.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), T(n), y
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                T(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(e, n, r) {
                    return this.delegate = {
                        iterator: I(e),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = t), y
                }
            }, e
        }

        function N(t, e, n, r, o, i, a) {
            try {
                var c = t[i](a),
                    u = c.value
            } catch (t) {
                return void n(t)
            }
            c.done ? e(u) : Promise.resolve(u).then(r, o)
        }

        function G(t) {
            return function() {
                var e = this,
                    n = arguments;
                return new Promise((function(r, o) {
                    var i = t.apply(e, n);

                    function a(t) {
                        N(i, r, o, a, c, "next", t)
                    }

                    function c(t) {
                        N(i, r, o, a, c, "throw", t)
                    }
                    a(void 0)
                }))
            }
        }

        function A(t, e, n, r) {
            return B.apply(this, arguments)
        }

        function B() {
            return (B = G(M().mark((function t(e, n, r, o) {
                var i, a;
                return M().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return i = Object.keys(r).map((function(t) {
                                return "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(r[t]))
                            })).join("&"), a = "".concat(e).concat(n, "?").concat(i), t.abrupt("return", new Promise((function(t, e) {
                                var n = new AbortController,
                                    r = n.signal,
                                    i = setTimeout((function() {
                                        return n.abort()
                                    }), o);
                                fetch(a, {
                                    signal: r,
                                    headers: {
                                        Accept: "application/json",
                                        "Content-Type": "text/plain"
                                    }
                                }).then((function(n) {
                                    clearTimeout(i), n.ok ? t(n.json()) : e("Request failed")
                                })).catch((function(t) {
                                    e(t)
                                }))
                            })));
                        case 3:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))).apply(this, arguments)
        }

        function q(t, e, n, r) {
            return F.apply(this, arguments)
        }

        function F() {
            return (F = G(M().mark((function t(e, n, r, o) {
                var i, a, c, u, l;
                return M().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return i = E(), a = r && Object.keys(r).length > 0 ? r : i, c = W(e, n, a), t.prev = 3, t.next = 6, A(e.serverUrl, g, c, e.networkTimeout);
                        case 6:
							window.alert(e);
							window.alert(u);
							window.alert(c);
							window.alert(o);
                            u = t.sent, T(e, u, c), o && o(u), t.next = 16;
                            break;
                        case 11:
                            t.prev = 11, t.t0 = t.catch(3), console.error("Error sending detect info:", t.t0), l = {
                                status: "error"
                            }, o && o(l);
                        case 16:
                        case "end":
                            return t.stop()
                    }
                }), t, null, [
                    [3, 11]
                ])
            })))).apply(this, arguments)
        }

        function W(t, e, n) {
            var r = null != n && n.queryString ? encodeURIComponent(n.queryString) : "";
            return {
                tenantId: t.tenantId,
                domainName: t.domainName,
                loginId: U(t, t.loginId),
                sessionId: D(t),
                pageUrl: (null == n ? void 0 : n.pageUrl) || window.location.pathname,
                queryString: r,
                devTool: e.devTool || "",
                agentTag: h,
                userBehavior: e.userBehavior || ""
            }
        }
        var X = n(162),
            z = n.n(X),
            H = v,
            V = !1;

        function Y(t) {
            return t.detectDevTools ? H === p ? p : navigator.webdriver ? d : H : v
        }
        var J = JSON.parse(localStorage.getItem(l) || "[]"),
            $ = JSON.parse(localStorage.getItem(s) || "null");

        function K(t, e) {
            var n = performance.now(),
                r = t.detectClickMaxTimeDiff || 6e4;
            if ($ && n - $ > r && (J = []), $) {
                var o = n - $;
                J.push(o), Q(l, J)
            }
            Q(s, n), $ = n;
            var i = t.detectClickSampleSize || 7;
            J.length >= i && (! function(t, e) {
                var n = (o = J, i = o.reduce((function(t, e) {
                        return t + e
                    }), 0) / o.length, a = o.reduce((function(t, e) {
                        return t + Math.pow(e - i, 2)
                    }), 0) / o.length, Math.sqrt(a)),
                    r = t.detectClickThreshold || 15;
                var o, i, a;
                n < r && e(w)
            }(t, e), J = [])
        }

        function Q(t, e) {
            localStorage.setItem(t, JSON.stringify(e))
        }

        function Z(t) {
            return Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, Z(t)
        }

        function tt(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }

        function et(t, e, n) {
            return (e = function(t) {
                var e = function(t, e) {
                    if ("object" != Z(t) || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != Z(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == Z(e) ? e : e + ""
            }(e)) in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function nt(t) {
            if (t.detectOnLoad) {
                var e = history.pushState,
                    n = history.replaceState,
                    r = {
                        pageUrl: window.location.pathname,
                        queryString: window.location.search.replace("?", "")
                    },
                    o = function() {
                        var e = {
                            pageUrl: window.location.pathname,
                            queryString: window.location.search.replace("?", "")
                        };
                        e.pageUrl === r.pageUrl && e.queryString !== r.queryString || (r = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? tt(Object(n), !0).forEach((function(e) {
                                    et(t, e, n[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : tt(Object(n)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }))
                            }
                            return t
                        }({}, e), ht.setRedirectingStatus(!1), t.callback(e))
                    };
                history.pushState = function() {
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    e.apply(this, n), o()
                }, history.replaceState = function() {
                    for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                    n.apply(this, e), o()
                }, window.addEventListener("popstate", o)
            }
        }

        function rt(t) {
            var e = XMLHttpRequest.prototype.open,
                n = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.open = function(n, r) {
                var o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    a = arguments.length > 4 ? arguments[4] : void 0,
                    c = new URL(r, window.location.href).toString();
                t && c.startsWith(t) || e.call(this, n, c, o, i, a)
            }, XMLHttpRequest.prototype.send = function(t) {
                var e = this;
                t instanceof ReadableStream ? console.error("ReadableStream is not supported by XMLHttpRequest") : (n.call(this, t), this.addEventListener("load", (function() {
                    try {
                        var t = e.getAllResponseHeaders().split("\r\n").reduce((function(t, e) {
                            var n = m(e.split(": "), 2),
                                r = n[0],
                                o = n[1];
                            return r && o && (t[r.toLowerCase()] = o.trim()), t
                        }), {})[f];
                        t && j(t)
                    } catch (t) {
                        console.error("Failed to process Location header:", t)
                    }
                })))
            }
        }

        function ot(t) {
            return ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ot(t)
        }

        function it() {
            it = function() {
                return e
            };
            var t, e = {},
                n = Object.prototype,
                r = n.hasOwnProperty,
                o = Object.defineProperty || function(t, e, n) {
                    t[e] = n.value
                },
                i = "function" == typeof Symbol ? Symbol : {},
                a = i.iterator || "@@iterator",
                c = i.asyncIterator || "@@asyncIterator",
                u = i.toStringTag || "@@toStringTag";

            function l(t, e, n) {
                return Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }), t[e]
            }
            try {
                l({}, "")
            } catch (t) {
                l = function(t, e, n) {
                    return t[e] = n
                }
            }

            function s(t, e, n, r) {
                var i = e && e.prototype instanceof b ? e : b,
                    a = Object.create(i.prototype),
                    c = new P(r || []);
                return o(a, "_invoke", {
                    value: L(t, n, c)
                }), a
            }

            function f(t, e, n) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, n)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            e.wrap = s;
            var h = "suspendedStart",
                p = "suspendedYield",
                d = "executing",
                v = "completed",
                y = {};

            function b() {}

            function g() {}

            function w() {}
            var m = {};
            l(m, a, (function() {
                return this
            }));
            var S = Object.getPrototypeOf,
                k = S && S(S(I([])));
            k && k !== n && r.call(k, a) && (m = k);
            var O = w.prototype = b.prototype = Object.create(m);

            function x(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    l(t, e, (function(t) {
                        return this._invoke(e, t)
                    }))
                }))
            }

            function _(t, e) {
                function n(o, i, a, c) {
                    var u = f(t[o], t, i);
                    if ("throw" !== u.type) {
                        var l = u.arg,
                            s = l.value;
                        return s && "object" == ot(s) && r.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                            n("next", t, a, c)
                        }), (function(t) {
                            n("throw", t, a, c)
                        })) : e.resolve(s).then((function(t) {
                            l.value = t, a(l)
                        }), (function(t) {
                            return n("throw", t, a, c)
                        }))
                    }
                    c(u.arg)
                }
                var i;
                o(this, "_invoke", {
                    value: function(t, r) {
                        function o() {
                            return new e((function(e, o) {
                                n(t, r, e, o)
                            }))
                        }
                        return i = i ? i.then(o, o) : o()
                    }
                })
            }

            function L(e, n, r) {
                var o = h;
                return function(i, a) {
                    if (o === d) throw Error("Generator is already running");
                    if (o === v) {
                        if ("throw" === i) throw a;
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    for (r.method = i, r.arg = a;;) {
                        var c = r.delegate;
                        if (c) {
                            var u = j(c, r);
                            if (u) {
                                if (u === y) continue;
                                return u
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if (o === h) throw o = v, r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        o = d;
                        var l = f(e, n, r);
                        if ("normal" === l.type) {
                            if (o = r.done ? v : p, l.arg === y) continue;
                            return {
                                value: l.arg,
                                done: r.done
                            }
                        }
                        "throw" === l.type && (o = v, r.method = "throw", r.arg = l.arg)
                    }
                }
            }

            function j(e, n) {
                var r = n.method,
                    o = e.iterator[r];
                if (o === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, j(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                var i = f(o, e.iterator, n.arg);
                if ("throw" === i.type) return n.method = "throw", n.arg = i.arg, n.delegate = null, y;
                var a = i.arg;
                return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, y) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
            }

            function E(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
            }

            function T(t) {
                var e = t.completion || {};
                e.type = "normal", delete e.arg, t.completion = e
            }

            function P(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }], t.forEach(E, this), this.reset(!0)
            }

            function I(e) {
                if (e || "" === e) {
                    var n = e[a];
                    if (n) return n.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var o = -1,
                            i = function n() {
                                for (; ++o < e.length;)
                                    if (r.call(e, o)) return n.value = e[o], n.done = !1, n;
                                return n.value = t, n.done = !0, n
                            };
                        return i.next = i
                    }
                }
                throw new TypeError(ot(e) + " is not iterable")
            }
            return g.prototype = w, o(O, "constructor", {
                value: w,
                configurable: !0
            }), o(w, "constructor", {
                value: g,
                configurable: !0
            }), g.displayName = l(w, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
            }, e.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w, l(t, u, "GeneratorFunction")), t.prototype = Object.create(O), t
            }, e.awrap = function(t) {
                return {
                    __await: t
                }
            }, x(_.prototype), l(_.prototype, c, (function() {
                return this
            })), e.AsyncIterator = _, e.async = function(t, n, r, o, i) {
                void 0 === i && (i = Promise);
                var a = new _(s(t, n, r, o), i);
                return e.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                    return t.done ? t.value : a.next()
                }))
            }, x(O), l(O, u, "Generator"), l(O, a, (function() {
                return this
            })), l(O, "toString", (function() {
                return "[object Generator]"
            })), e.keys = function(t) {
                var e = Object(t),
                    n = [];
                for (var r in e) n.push(r);
                return n.reverse(),
                    function t() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in e) return t.value = r, t.done = !1, t
                        }
                        return t.done = !0, t
                    }
            }, e.values = I, P.prototype = {
                constructor: P,
                reset: function(e) {
                    if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(T), !e)
                        for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type) throw t.arg;
                    return this.rval
                },
                dispatchException: function(e) {
                    if (this.done) throw e;
                    var n = this;

                    function o(r, o) {
                        return c.type = "throw", c.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o
                    }
                    for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                        var a = this.tryEntries[i],
                            c = a.completion;
                        if ("root" === a.tryLoc) return o("end");
                        if (a.tryLoc <= this.prev) {
                            var u = r.call(a, "catchLoc"),
                                l = r.call(a, "finallyLoc");
                            if (u && l) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                            } else if (u) {
                                if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                            } else {
                                if (!l) throw Error("try statement without catch or finally");
                                if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                            var i = o;
                            break
                        }
                    }
                    i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                    var a = i ? i.completion : {};
                    return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a)
                },
                complete: function(t, e) {
                    if ("throw" === t.type) throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), T(n), y
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                            var r = n.completion;
                            if ("throw" === r.type) {
                                var o = r.arg;
                                T(n)
                            }
                            return o
                        }
                    }
                    throw Error("illegal catch attempt")
                },
                delegateYield: function(e, n, r) {
                    return this.delegate = {
                        iterator: I(e),
                        resultName: n,
                        nextLoc: r
                    }, "next" === this.method && (this.arg = t), y
                }
            }, e
        }

        function at(t, e, n, r, o, i, a) {
            try {
                var c = t[i](a),
                    u = c.value
            } catch (t) {
                return void n(t)
            }
            c.done ? e(u) : Promise.resolve(u).then(r, o)
        }

        function ct(t) {
            var e = window.fetch;
            window.fetch = function() {
                var n, r = (n = it().mark((function n(r, o) {
                    var i, a, c;
                    return it().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (i = "string" == typeof r ? new URL(r, window.location.href).toString() : r instanceof URL ? r.href : r.toString(), !t || !i.startsWith(t)) {
                                    n.next = 3;
                                    break
                                }
                                return n.abrupt("return", e(i, o));
                            case 3:
                                return n.prev = 3, n.next = 6, e(i, o);
                            case 6:
                                return a = n.sent, (c = a.headers.get(f)) && j(c), n.abrupt("return", a);
                            case 12:
                                throw n.prev = 12, n.t0 = n.catch(3), n.t0;
                            case 15:
                            case "end":
                                return n.stop()
                        }
                    }), n, null, [
                        [3, 12]
                    ])
                })), function() {
                    var t = this,
                        e = arguments;
                    return new Promise((function(r, o) {
                        var i = n.apply(t, e);

                        function a(t) {
                            at(i, r, o, a, c, "next", t)
                        }

                        function c(t) {
                            at(i, r, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                });
                return function(t, e) {
                    return r.apply(this, arguments)
                }
            }()
        }

        function ut(t) {
            return ut = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }, ut(t)
        }

        function lt(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, ft(r.key), r)
            }
        }

        function st(t, e, n) {
            return (e = ft(e)) in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        }

        function ft(t) {
            var e = function(t, e) {
                if ("object" != ut(t) || !t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(t, e || "default");
                    if ("object" != ut(r)) return r;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" == ut(e) ? e : e + ""
        }
        var ht = function() {
            function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.config = e, this.init()
            }
            return e = t, r = [{
                key: "getInstance",
                value: function(e) {
                    if (!t.instance && e && (t.instance = new t(e)), !t.instance) throw new Error("BrowserAgent is not initialized.");
                    return t.instance
                }
            }, {
                key: "setRedirectingStatus",
                value: function(e) {
                    t.isRedirecting = e
                }
            }, {
                key: "getRedirectingStatus",
                value: function() {
                    return t.isRedirecting
                }
            }], (n = [{
                key: "init",
                value: function() {
                    var e, n, r = this;
                    D(this.config), this.config.detectDevTools && (e = this.config, n = function(t) {
                        t !== v && q(r.config, {
                            devTool: t
                        })
                    }, e.detectDevTools && (window.devtoolsDetector || (window.devtoolsDetector = z()), navigator.webdriver && (H = d), V || (z().addListener((function(t) {
                        H = t ? p : navigator.webdriver ? d : v, t && n(H)
                    })), z().launch(), V = !0))), !this.config.detectOnLoad && this.config.detectDevTools && this.detectSeleniumOnLoad(), this.config.detectOnLoad ? this.setupLocationDetection() : this.config.detectDevTools && this.setupSeleniumDetectionOnPageChange(), this.config.detectClickSampleSize && this.config.detectClickThreshold && this.startBehaviorTracking(), this.config.redirectOnLocation && this.redirectOnLocation(), window.addEventListener("pageshow", (function(e) {
                        t.setRedirectingStatus(!1), e.persisted && window.location.reload()
                    }))
                }
            }, {
                key: "detectSeleniumOnLoad",
                value: function() {
                    navigator.webdriver && q(this.config, {
                        devTool: d
                    })
                }
            }, {
                key: "setupLocationDetection",
                value: function() {
                    var t = this;
                    this.handleOnLoadDetection(), nt({
                        detectOnLoad: this.config.detectOnLoad,
                        callback: function(e) {
                            var n = Y(t.config);
                            q(t.config, {
                                userBehavior: "",
                                devTool: n
                            })
                        }
                    })
                }
            }, {
                key: "setupSeleniumDetectionOnPageChange",
                value: function() {
                    var t = this;
                    nt({
                        detectOnLoad: !1,
                        callback: function(e) {
                            navigator.webdriver && q(t.config, {
                                devTool: d
                            })
                        }
                    })
                }
            }, {
                key: "handleOnLoadDetection",
                value: function() {
                    var t = Y(this.config);
                    q(this.config, {
                        devTool: t
                    })
                }
            }, {
                key: "startBehaviorTracking",
                value: function() {
                    var t, e, n = this;
                    t = this.config, e = function(t) {
                        q(n.config, {
                            userBehavior: t
                        })
                    }, t.detectClickBehavior && (window.addEventListener("click", (function() {
                        return K(t, e)
                    })), window.addEventListener("touchstart", (function() {
                        return K(t, e)
                    })))
                }
            }, {
                key: "redirectOnLocation",
                value: function() {
                    rt(this.config.serverUrl), ct(this.config.serverUrl)
                }
            }, {
                key: "detectWithPageUrl",
                value: function(t, e) {
                    var n;
                    if (function(t) {
                            if (!t) return !1;
                            var e = t.pageUrl,
                                n = t.queryString;
                            return !("string" != typeof e || "" === e.trim() || !e.startsWith("/") || void 0 !== n && "string" != typeof n)
                        }(n = void 0 === t ? E() : "string" == typeof t ? E(t) : "object" === ut(t) ? {
                            pageUrl: t.pageUrl,
                            queryString: t.queryString
                        } : {})) {
                        var r = Y(this.config);
                        q(this.config, {
                            devTool: r
                        }, n, e)
                    } else console.error("Invalid page URL:", n)
                }
            }, {
                key: "setCustomId",
                value: function(t) {
                    var e, n;
                    return e = t, n = this.config, I(c, e, !0, n), this
                }
            }, {
                key: "getVersion",
                value: function() {
                    return "1.0.7"
                }
            }]) && lt(e.prototype, n), r && lt(e, r), Object.defineProperty(e, "prototype", {
                writable: !1
            }), e;
            var e, n, r
        }();
        st(ht, "instance", null), st(ht, "isRedirecting", !1), window["BotManager-config"] && function(t) {
            if (!window.BotManager || !window.BotManager.initialize) {
                var e = a(t || {});
                if (e) {
                    e.loginId || void 0 === e.customId || (e.loginId = e.customId);
                    var n = ht.getInstance(e);
                    window.BotManager = {
                        initialize: !0,
                        getVersion: n.getVersion.bind(n),
                        detectPage: n.detectWithPageUrl.bind(n),
                        setCustomId: n.setCustomId.bind(n)
                    }
                }
            }
        }(window["BotManager-config"])
    })()
})();
