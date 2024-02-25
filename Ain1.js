/*! jQuery v1.6.3 http://jquery.com/ | http://jquery.org/license */
(function (a, b) {
    function cu(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }

    function cr(a) {
        if (!cg[a]) {
            var b = c.body, d = f("<" + a + ">").appendTo(b), e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ch || (ch = c.createElement("iframe"), ch.frameBorder = ch.width = ch.height = 0), b.appendChild(ch);
                if (!ci || !ch.createElement) ci = (ch.contentWindow || ch.contentDocument).document, ci.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"), ci.close();
                d = ci.createElement(a), ci.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ch)
            }
            cg[a] = e
        }
        return cg[a]
    }

    function cq(a, b) {
        var c = {};
        f.each(cm.concat.apply([], cm.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }

    function cp() {
        cn = b
    }

    function co() {
        setTimeout(cp, 0);
        return cn = f.now()
    }

    function cf() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    function ce() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function b$(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1) for (h in a.converters) typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k, k = d[g];
            if (k === "*") k = l; else if (l !== "*" && l !== k) {
                m = l + " " + k, n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }
                !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }

    function bZ(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g) i in d && (c[g[i]] = d[i]);
        while (f[0] === "*") f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h) for (i in e) if (e[i] && e[i].test(h)) {
            f.unshift(i);
            break
        }
        if (f[0] in d) j = f[0]; else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function bY(a, b, c, d) {
        if (f.isArray(b)) f.each(b, function (b, e) {
            c || bA.test(a) ? d(a, e) : bY(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
        }); else if (!c && b != null && typeof b == "object") for (var e in b) bY(a + "[" + e + "]", b[e], c, d); else d(a, b)
    }

    function bX(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
        e && f.extend(!0, a, e)
    }

    function bW(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === bP, l;
        for (; i < j && (k || !l); i++) l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bW(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = bW(a, c, d, e, "*", g));
        return l
    }

    function bV(a) {
        return function (b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bL), e = 0, g = d.length, h, i, j;
                for (; e < g; e++) h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c)
            }
        }
    }

    function by(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight, e = b === "width" ? bt : bu;
        if (d > 0) {
            c !== "border" && f.each(e, function () {
                c || (d -= parseFloat(f.css(a, "padding" + this)) || 0), c === "margin" ? d += parseFloat(f.css(a, c + this)) || 0 : d -= parseFloat(f.css(a, "border" + this + "Width")) || 0
            });
            return d + "px"
        }
        d = bv(a, b, b);
        if (d < 0 || d == null) d = a.style[b] || 0;
        d = parseFloat(d) || 0, c && f.each(e, function () {
            d += parseFloat(f.css(a, "padding" + this)) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + this + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + this)) || 0)
        });
        return d + "px"
    }

    function bl(a, b) {
        b.src ? f.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bd, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b)
    }

    function bk(a) {
        f.nodeName(a, "input") ? bj(a) : "getElementsByTagName" in a && f.grep(a.getElementsByTagName("input"), bj)
    }

    function bj(a) {
        if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked
    }

    function bi(a) {
        return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
    }

    function bh(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase();
            if (c === "object") b.outerHTML = a.outerHTML; else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                if (c === "option") b.selected = a.defaultSelected; else if (c === "input" || c === "textarea") b.defaultValue = a.defaultValue
            } else a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value);
            b.removeAttribute(f.expando)
        }
    }

    function bg(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c = f.expando, d = f.data(a), e = f.data(b, d);
            if (d = d[c]) {
                var g = d.events;
                e = e[c] = f.extend({}, d);
                if (g) {
                    delete e.handle, e.events = {};
                    for (var h in g) for (var i = 0, j = g[h].length; i < j; i++) f.event.add(b, h + (g[h][i].namespace ? "." : "") + g[h][i].namespace, g[h][i], g[h][i].data)
                }
            }
        }
    }

    function bf(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function V(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) return f.grep(a, function (a, d) {
            var e = !!b.call(a, d, a);
            return e === c
        });
        if (b.nodeType) return f.grep(a, function (a, d) {
            return a === b === c
        });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (Q.test(b)) return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function U(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function M(a, b) {
        return (a && a !== "*" ? a + "." : "") + b.replace(y, "`").replace(z, "&")
    }

    function L(a) {
        var b, c, d, e, g, h, i, j, k, l, m, n, o, p = [], q = [], r = f._data(this, "events");
        if (!(a.liveFired === this || !r || !r.live || a.target.disabled || a.button && a.type === "click")) {
            a.namespace && (n = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")), a.liveFired = this;
            var s = r.live.slice(0);
            for (i = 0; i < s.length; i++) g = s[i], g.origType.replace(w, "") === a.type ? q.push(g.selector) : s.splice(i--, 1);
            e = f(a.target).closest(q, a.currentTarget);
            for (j = 0, k = e.length; j < k; j++) {
                m = e[j];
                for (i = 0; i < s.length; i++) {
                    g = s[i];
                    if (m.selector === g.selector && (!n || n.test(g.namespace)) && !m.elem.disabled) {
                        h = m.elem, d = null;
                        if (g.preType === "mouseenter" || g.preType === "mouseleave") a.type = g.preType, d = f(a.relatedTarget).closest(g.selector)[0], d && f.contains(h, d) && (d = h);
                        (!d || d !== h) && p.push({elem: h, handleObj: g, level: m.level})
                    }
                }
            }
            for (j = 0, k = p.length; j < k; j++) {
                e = p[j];
                if (c && e.level > c) break;
                a.currentTarget = e.elem, a.data = e.handleObj.data, a.handleObj = e.handleObj, o = e.handleObj.origHandler.apply(e.elem, arguments);
                if (o === !1 || a.isPropagationStopped()) {
                    c = e.level, o === !1 && (b = !1);
                    if (a.isImmediatePropagationStopped()) break
                }
            }
            return b
        }
    }

    function J(a, c, d) {
        var e = f.extend({}, d[0]);
        e.type = a, e.originalEvent = {}, e.liveFired = b, f.event.handle.call(c, e), e.isDefaultPrevented() && d[0].preventDefault()
    }

    function D() {
        return !0
    }

    function C() {
        return !1
    }

    function m(a, c, d) {
        var e = c + "defer", g = c + "queue", h = c + "mark", i = f.data(a, e, b, !0);
        i && (d === "queue" || !f.data(a, g, b, !0)) && (d === "mark" || !f.data(a, h, b, !0)) && setTimeout(function () {
            !f.data(a, g, b, !0) && !f.data(a, h, b, !0) && (f.removeData(a, e, !0), i.resolve())
        }, 0)
    }

    function l(a) {
        for (var b in a) if (b !== "toJSON") return !1;
        return !0
    }

    function k(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(j, "$1-$2").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNaN(d) ? i.test(d) ? f.parseJSON(d) : d : parseFloat(d)
                } catch (g) {
                }
                f.data(a, c, d)
            } else d = b
        }
        return d
    }

    var c = a.document, d = a.navigator, e = a.location, f = function () {
        function K() {
            if (!e.isReady) {
                try {
                    c.documentElement.doScroll("left")
                } catch (a) {
                    setTimeout(K, 1);
                    return
                }
                e.ready()
            }
        }

        var e = function (a, b) {
                return new e.fn.init(a, b, h)
            }, f = a.jQuery, g = a.$, h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/,
            m = /\d/, n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, o = /^[\],:{}\s]*$/, p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, r = /(?:^|:|,)(?:\s*\[)+/g,
            s = /(webkit)[ \/]([\w.]+)/, t = /(opera)(?:.*version)?[ \/]([\w.]+)/, u = /(msie) ([\w.]+)/,
            v = /(mozilla)(?:.*? rv:([\w.]+))?/, w = /-([a-z]|[0-9])/ig, x = /^-ms-/, y = function (a, b) {
                return (b + "").toUpperCase()
            }, z = d.userAgent, A, B, C, D = Object.prototype.toString, E = Object.prototype.hasOwnProperty,
            F = Array.prototype.push, G = Array.prototype.slice, H = String.prototype.trim, I = Array.prototype.indexOf,
            J = {};
        e.fn = e.prototype = {
            constructor: e, init: function (a, d, f) {
                var g, h, j, k;
                if (!a) return this;
                if (a.nodeType) {
                    this.context = this[0] = a, this.length = 1;
                    return this
                }
                if (a === "body" && !d && c.body) {
                    this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
                    return this
                }
                if (typeof a == "string") {
                    a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                    if (g && (g[1] || !d)) {
                        if (g[1]) {
                            d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = n.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                            return e.merge(this, a)
                        }
                        h = c.getElementById(g[2]);
                        if (h && h.parentNode) {
                            if (h.id !== g[2]) return f.find(a);
                            this.length = 1, this[0] = h
                        }
                        this.context = c, this.selector = a;
                        return this
                    }
                    return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                }
                if (e.isFunction(a)) return f.ready(a);
                a.selector !== b && (this.selector = a.selector, this.context = a.context);
                return e.makeArray(a, this)
            }, selector: "", jquery: "1.6.3", length: 0, size: function () {
                return this.length
            }, toArray: function () {
                return G.call(this, 0)
            }, get: function (a) {
                return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
            }, pushStack: function (a, b, c) {
                var d = this.constructor();
                e.isArray(a) ? F.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                return d
            }, each: function (a, b) {
                return e.each(this, a, b)
            }, ready: function (a) {
                e.bindReady(), B.done(a);
                return this
            }, eq: function (a) {
                return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, slice: function () {
                return this.pushStack(G.apply(this, arguments), "slice", G.call(arguments).join(","))
            }, map: function (a) {
                return this.pushStack(e.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: F, sort: [].sort, splice: [].splice
        }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
            var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
            typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), typeof i != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);
            for (; j < k; j++) if ((a = arguments[j]) != null) for (c in a) {
                d = i[c], f = a[c];
                if (i === f) continue;
                l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
            }
            return i
        }, e.extend({
            noConflict: function (b) {
                a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
                return e
            }, isReady: !1, readyWait: 1, holdReady: function (a) {
                a ? e.readyWait++ : e.ready(!0)
            }, ready: function (a) {
                if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                    if (!c.body) return setTimeout(e.ready, 1);
                    e.isReady = !0;
                    if (a !== !0 && --e.readyWait > 0) return;
                    B.resolveWith(c, [e]), e.fn.trigger && e(c).trigger("ready").unbind("ready")
                }
            }, bindReady: function () {
                if (!B) {
                    B = e._Deferred();
                    if (c.readyState === "complete") return setTimeout(e.ready, 1);
                    if (c.addEventListener) c.addEventListener("DOMContentLoaded", C, !1), a.addEventListener("load", e.ready, !1); else if (c.attachEvent) {
                        c.attachEvent("onreadystatechange", C), a.attachEvent("onload", e.ready);
                        var b = !1;
                        try {
                            b = a.frameElement == null
                        } catch (d) {
                        }
                        c.documentElement.doScroll && b && K()
                    }
                }
            }, isFunction: function (a) {
                return e.type(a) === "function"
            }, isArray: Array.isArray || function (a) {
                return e.type(a) === "array"
            }, isWindow: function (a) {
                return a && typeof a == "object" && "setInterval" in a
            }, isNaN: function (a) {
                return a == null || !m.test(a) || isNaN(a)
            }, type: function (a) {
                return a == null ? String(a) : J[D.call(a)] || "object"
            }, isPlainObject: function (a) {
                if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;
                try {
                    if (a.constructor && !E.call(a, "constructor") && !E.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (c) {
                    return !1
                }
                var d;
                for (d in a) ;
                return d === b || E.call(a, d)
            }, isEmptyObject: function (a) {
                for (var b in a) return !1;
                return !0
            }, error: function (a) {
                throw a
            }, parseJSON: function (b) {
                if (typeof b != "string" || !b) return null;
                b = e.trim(b);
                if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
                if (o.test(b.replace(p, "@").replace(q, "]").replace(r, ""))) return (new Function("return " + b))();
                e.error("Invalid JSON: " + b)
            }, parseXML: function (c) {
                var d, f;
                try {
                    a.DOMParser ? (f = new DOMParser, d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c))
                } catch (g) {
                    d = b
                }
                (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
                return d
            }, noop: function () {
            }, globalEval: function (b) {
                b && j.test(b) && (a.execScript || function (b) {
                    a.eval.call(a, b)
                })(b)
            }, camelCase: function (a) {
                return a.replace(x, "ms-").replace(w, y)
            }, nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
            }, each: function (a, c, d) {
                var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
                if (d) {
                    if (i) {
                        for (f in a) if (c.apply(a[f], d) === !1) break
                    } else for (; g < h;) if (c.apply(a[g++], d) === !1) break
                } else if (i) {
                    for (f in a) if (c.call(a[f], f, a[f]) === !1) break
                } else for (; g < h;) if (c.call(a[g], g, a[g++]) === !1) break;
                return a
            }, trim: H ? function (a) {
                return a == null ? "" : H.call(a)
            } : function (a) {
                return a == null ? "" : (a + "").replace(k, "").replace(l, "")
            }, makeArray: function (a, b) {
                var c = b || [];
                if (a != null) {
                    var d = e.type(a);
                    a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? F.call(c, a) : e.merge(c, a)
                }
                return c
            }, inArray: function (a, b) {
                if (!b) return -1;
                if (I) return I.call(b, a);
                for (var c = 0, d = b.length; c < d; c++) if (b[c] === a) return c;
                return -1
            }, merge: function (a, c) {
                var d = a.length, e = 0;
                if (typeof c.length == "number") for (var f = c.length; e < f; e++) a[d++] = c[e]; else while (c[e] !== b) a[d++] = c[e++];
                a.length = d;
                return a
            }, grep: function (a, b, c) {
                var d = [], e;
                c = !!c;
                for (var f = 0, g = a.length; f < g; f++) e = !!b(a[f], f), c !== e && d.push(a[f]);
                return d
            }, map: function (a, c, d) {
                var f, g, h = [], i = 0, j = a.length,
                    k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                if (k) for (; i < j; i++) f = c(a[i], i, d), f != null && (h[h.length] = f); else for (g in a) f = c(a[g], g, d), f != null && (h[h.length] = f);
                return h.concat.apply([], h)
            }, guid: 1, proxy: function (a, c) {
                if (typeof c == "string") {
                    var d = a[c];
                    c = a, a = d
                }
                if (!e.isFunction(a)) return b;
                var f = G.call(arguments, 2), g = function () {
                    return a.apply(c, f.concat(G.call(arguments)))
                };
                g.guid = a.guid = a.guid || g.guid || e.guid++;
                return g
            }, access: function (a, c, d, f, g, h) {
                var i = a.length;
                if (typeof c == "object") {
                    for (var j in c) e.access(a, j, c[j], f, g, d);
                    return a
                }
                if (d !== b) {
                    f = !h && f && e.isFunction(d);
                    for (var k = 0; k < i; k++) g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                    return a
                }
                return i ? g(a[0], c) : b
            }, now: function () {
                return (new Date).getTime()
            }, uaMatch: function (a) {
                a = a.toLowerCase();
                var b = s.exec(a) || t.exec(a) || u.exec(a) || a.indexOf("compatible") < 0 && v.exec(a) || [];
                return {browser: b[1] || "", version: b[2] || "0"}
            }, sub: function () {
                function a(b, c) {
                    return new a.fn.init(b, c)
                }

                e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
                    f && f instanceof e && !(f instanceof a) && (f = a(f));
                    return e.fn.init.call(this, d, f, b)
                }, a.fn.init.prototype = a.fn;
                var b = a(c);
                return a
            }, browser: {}
        }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
            J["[object " + b + "]"] = b.toLowerCase()
        }), A = e.uaMatch(z), A.browser && (e.browser[A.browser] = !0, e.browser.version = A.version), e.browser.webkit && (e.browser.safari = !0), j.test("б═") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? C = function () {
            c.removeEventListener("DOMContentLoaded", C, !1), e.ready()
        } : c.attachEvent && (C = function () {
            c.readyState === "complete" && (c.detachEvent("onreadystatechange", C), e.ready())
        });
        return e
    }(), g = "done fail isResolved isRejected promise then always pipe".split(" "), h = [].slice;
    f.extend({
        _Deferred: function () {
            var a = [], b, c, d, e = {
                done: function () {
                    if (!d) {
                        var c = arguments, g, h, i, j, k;
                        b && (k = b, b = 0);
                        for (g = 0, h = c.length; g < h; g++) i = c[g], j = f.type(i), j === "array" ? e.done.apply(e, i) : j === "function" && a.push(i);
                        k && e.resolveWith(k[0], k[1])
                    }
                    return this
                }, resolveWith: function (e, f) {
                    if (!d && !b && !c) {
                        f = f || [], c = 1;
                        try {
                            while (a[0]) a.shift().apply(e, f)
                        } finally {
                            b = [e, f], c = 0
                        }
                    }
                    return this
                }, resolve: function () {
                    e.resolveWith(this, arguments);
                    return this
                }, isResolved: function () {
                    return !!c || !!b
                }, cancel: function () {
                    d = 1, a = [];
                    return this
                }
            };
            return e
        }, Deferred: function (a) {
            var b = f._Deferred(), c = f._Deferred(), d;
            f.extend(b, {
                then: function (a, c) {
                    b.done(a).fail(c);
                    return this
                },
                always: function () {
                    return b.done.apply(b, arguments).fail.apply(this, arguments)
                },
                fail: c.done,
                rejectWith: c.resolveWith,
                reject: c.resolve,
                isRejected: c.isResolved,
                pipe: function (a, c) {
                    return f.Deferred(function (d) {
                        f.each({done: [a, "resolve"], fail: [c, "reject"]}, function (a, c) {
                            var e = c[0], g = c[1], h;
                            f.isFunction(e) ? b[a](function () {
                                h = e.apply(this, arguments), h && f.isFunction(h.promise) ? h.promise().then(d.resolve, d.reject) : d[g + "With"](this === b ? d : this, [h])
                            }) : b[a](d[g])
                        })
                    }).promise()
                },
                promise: function (a) {
                    if (a == null) {
                        if (d) return d;
                        d = a = {}
                    }
                    var c = g.length;
                    while (c--) a[g[c]] = b[g[c]];
                    return a
                }
            }), b.done(c.cancel).fail(b.cancel), delete b.cancel, a && a.call(b, b);
            return b
        }, when: function (a) {
            function i(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? h.call(arguments, 0) : c, --e || g.resolveWith(g, h.call(b, 0))
                }
            }

            var b = arguments, c = 0, d = b.length, e = d,
                g = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred();
            if (d > 1) {
                for (; c < d; c++) b[c] && f.isFunction(b[c].promise) ? b[c].promise().then(i(c), g.reject) : --e;
                e || g.resolveWith(g, b)
            } else g !== a && g.resolveWith(g, d ? [a] : []);
            return g.promise()
        }
    }), f.support = function () {
        var a = c.createElement("div"), b = c.documentElement, d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
        a.setAttribute("className", "t"), a.innerHTML = "   <link><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type=checkbox>", d = a.getElementsByTagName("*"), e = a.getElementsByTagName("a")[0];
        if (!d || !d.length || !e) return {};
        g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = a.getElementsByTagName("input")[0], k = {
            leadingWhitespace: a.firstChild.nodeType === 3,
            tbody: !a.getElementsByTagName("tbody").length,
            htmlSerialize: !!a.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: /^0.55$/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: i.value === "on",
            optSelected: h.selected,
            getSetAttribute: a.className !== "t",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0
        }, i.checked = !0, k.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, k.optDisabled = !h.disabled;
        try {
            delete a.test
        } catch (v) {
            k.deleteExpando = !1
        }
        !a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function () {
            k.noCloneEvent = !1
        }), a.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), k.radioValue = i.value === "t", i.setAttribute("checked", "checked"), a.appendChild(i), l = c.createDocumentFragment(), l.appendChild(a.firstChild), k.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, a.innerHTML = "", a.style.width = a.style.paddingLeft = "1px", m = c.getElementsByTagName("body")[0], o = c.createElement(m ? "div" : "body"), p = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        }, m && f.extend(p, {position: "absolute", left: "-1000px", top: "-1000px"});
        for (t in p) o.style[t] = p[t];
        o.appendChild(a), n = m || b, n.insertBefore(o, n.firstChild), k.appendChecked = i.checked, k.boxModel = a.offsetWidth === 2, "zoom" in a.style && (a.style.display = "inline", a.style.zoom = 1, k.inlineBlockNeedsLayout = a.offsetWidth === 2, a.style.display = "", a.innerHTML = "<div style='width:4px;'></div>", k.shrinkWrapBlocks = a.offsetWidth !== 2), a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>", q = a.getElementsByTagName("td"), u = q[0].offsetHeight === 0, q[0].style.display = "", q[1].style.display = "none", k.reliableHiddenOffsets = u && q[0].offsetHeight === 0, a.innerHTML = "", c.defaultView && c.defaultView.getComputedStyle && (j = c.createElement("div"), j.style.width = "0", j.style.marginRight = "0", a.appendChild(j), k.reliableMarginRight = (parseInt((c.defaultView.getComputedStyle(j, null) || {marginRight: 0}).marginRight, 10) || 0) === 0), o.innerHTML = "", n.removeChild(o);
        if (a.attachEvent) for (t in {
            submit: 1,
            change: 1,
            focusin: 1
        }) s = "on" + t, u = s in a, u || (a.setAttribute(s, "return;"), u = typeof a[s] == "function"), k[t + "Bubbles"] = u;
        o = l = g = h = m = j = a = i = null;
        return k
    }(), f.boxModel = f.support.boxModel;
    var i = /^(?:\{.*\}|\[.*\])$/, j = /([a-z])([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !l(a)
        },
        data: function (a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i = f.expando, j = typeof c == "string", k = a.nodeType, l = k ? f.cache : a,
                    m = k ? a[f.expando] : a[f.expando] && f.expando;
                if ((!m || e && m && l[m] && !l[m][i]) && j && d === b) return;
                m || (k ? a[f.expando] = m = ++f.uuid : m = f.expando), l[m] || (l[m] = {}, k || (l[m].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function") e ? l[m][i] = f.extend(l[m][i], c) : l[m] = f.extend(l[m], c);
                g = l[m], e && (g[i] || (g[i] = {}), g = g[i]), d !== b && (g[f.camelCase(c)] = d);
                if (c === "events" && !g[c]) return g[i] && g[i].events;
                j ? (h = g[c], h == null && (h = g[f.camelCase(c)])) : h = g;
                return h
            }
        },
        removeData: function (a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e = f.expando, g = a.nodeType, h = g ? f.cache : a, i = g ? a[f.expando] : f.expando;
                if (!h[i]) return;
                if (b) {
                    d = c ? h[i][e] : h[i];
                    if (d) {
                        d[b] || (b = f.camelCase(b)), delete d[b];
                        if (!l(d)) return
                    }
                }
                if (c) {
                    delete h[i][e];
                    if (!l(h[i])) return
                }
                var j = h[i][e];
                f.support.deleteExpando || !h.setInterval ? delete h[i] : h[i] = null, j ? (h[i] = {}, g || (h[i].toJSON = f.noop), h[i][e] = j) : g && (f.support.deleteExpando ? delete a[f.expando] : a.removeAttribute ? a.removeAttribute(f.expando) : a[f.expando] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }), f.fn.extend({
        data: function (a, c) {
            var d = null;
            if (typeof a == "undefined") {
                if (this.length) {
                    d = f.data(this[0]);
                    if (this[0].nodeType === 1) {
                        var e = this[0].attributes, g;
                        for (var h = 0, i = e.length; h < i; h++) g = e[h].name, g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)), k(this[0], g, d[g]))
                    }
                }
                return d
            }
            if (typeof a == "object") return this.each(function () {
                f.data(this, a)
            });
            var j = a.split(".");
            j[1] = j[1] ? "." + j[1] : "";
            if (c === b) {
                d = this.triggerHandler("getData" + j[1] + "!", [j[0]]), d === b && this.length && (d = f.data(this[0], a), d = k(this[0], a, d));
                return d === b && j[1] ? this.data(j[0]) : d
            }
            return this.each(function () {
                var b = f(this), d = [j[0], c];
                b.triggerHandler("setData" + j[1] + "!", d), f.data(this, a, c), b.triggerHandler("changeData" + j[1] + "!", d)
            })
        }, removeData: function (a) {
            return this.each(function () {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function (a, c) {
            a && (c = (c || "fx") + "mark", f.data(a, c, (f.data(a, c, b, !0) || 0) + 1, !0))
        }, _unmark: function (a, c, d) {
            a !== !0 && (d = c, c = a, a = !1);
            if (c) {
                d = d || "fx";
                var e = d + "mark", g = a ? 0 : (f.data(c, e, b, !0) || 1) - 1;
                g ? f.data(c, e, g, !0) : (f.removeData(c, e, !0), m(c, d, "mark"))
            }
        }, queue: function (a, c, d) {
            if (a) {
                c = (c || "fx") + "queue";
                var e = f.data(a, c, b, !0);
                d && (!e || f.isArray(d) ? e = f.data(a, c, f.makeArray(d), !0) : e.push(d));
                return e || []
            }
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = f.queue(a, b), d = c.shift(), e;
            d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), d.call(a, function () {
                f.dequeue(a, b)
            })), c.length || (f.removeData(a, b + "queue", !0), m(a, b, "queue"))
        }
    }), f.fn.extend({
        queue: function (a, c) {
            typeof a != "string" && (c = a, a = "fx");
            if (c === b) return f.queue(this[0], a);
            return this.each(function () {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                f.dequeue(this, a)
            })
        }, delay: function (a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function () {
                var c = this;
                setTimeout(function () {
                    f.dequeue(c, b)
                }, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }

            typeof a != "string" && (c = a, a = b), a = a || "fx";
            var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
            while (g--) if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f._Deferred(), !0)) h++, l.done(m);
            m();
            return d.promise()
        }
    });
    var n = /[\n\t\r]/g, o = /\s+/, p = /\r/g, q = /^(?:button|input)$/i,
        r = /^(?:button|input|object|select|textarea)$/i, s = /^a(?:rea)?$/i,
        t = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        u, v;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, a, b, !0, f.attr)
        }, removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        }, prop: function (a, b) {
            return f.access(this, a, b, !0, f.prop)
        }, removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b, delete this[a]
                } catch (c) {
                }
            })
        }, addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).addClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string") {
                b = a.split(o);
                for (c = 0, d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a; else {
                        g = " " + e.className + " ";
                        for (h = 0, i = b.length; h < i; h++) ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                        e.className = f.trim(g)
                    }
                }
            }
            return this
        }, removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).removeClass(a.call(this, b, this.className))
            });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(o);
                for (d = 0, e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className) if (a) {
                        h = (" " + g.className + " ").replace(n, " ");
                        for (i = 0, j = c.length; i < j; i++) h = h.replace(" " + c[i] + " ", " ");
                        g.className = f.trim(h)
                    } else g.className = ""
                }
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a, d = typeof b == "boolean";
            if (f.isFunction(a)) return this.each(function (c) {
                f(this).toggleClass(a.call(this, c, this.className, b), b)
            });
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0, h = f(this), i = b, j = a.split(o);
                    while (e = j[g++]) i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        }, hasClass: function (a) {
            var b = " " + a + " ";
            for (var c = 0, d = this.length; c < d; c++) if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(n, " ").indexOf(b) > -1) return !0;
            return !1
        }, val: function (a) {
            var c, d, e = this[0];
            if (!arguments.length) {
                if (e) {
                    c = f.valHooks[e.nodeName.toLowerCase()] || f.valHooks[e.type];
                    if (c && "get" in c && (d = c.get(e, "value")) !== b) return d;
                    d = e.value;
                    return typeof d == "string" ? d.replace(p, "") : d == null ? "" : d
                }
                return b
            }
            var g = f.isFunction(a);
            return this.each(function (d) {
                var e = f(this), h;
                if (this.nodeType === 1) {
                    g ? h = a.call(this, d, e.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                        return a == null ? "" : a + ""
                    })), c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                    if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h
                }
            })
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = a.attributes.value;
                    return !b || b.specified ? a.value : a.text
                }
            }, select: {
                get: function (a) {
                    var b, c = a.selectedIndex, d = [], e = a.options, g = a.type === "select-one";
                    if (c < 0) return null;
                    for (var h = g ? c : 0, i = g ? c + 1 : e.length; h < i; h++) {
                        var j = e[h];
                        if (j.selected && (f.support.optDisabled ? !j.disabled : j.getAttribute("disabled") === null) && (!j.parentNode.disabled || !f.nodeName(j.parentNode, "optgroup"))) {
                            b = f(j).val();
                            if (g) return b;
                            d.push(b)
                        }
                    }
                    if (g && !d.length && e.length) return f(e[c]).val();
                    return d
                }, set: function (a, b) {
                    var c = f.makeArray(b);
                    f(a).find("option").each(function () {
                        this.selected = f.inArray(f(this).val(), c) >= 0
                    }), c.length || (a.selectedIndex = -1);
                    return c
                }
            }
        },
        attrFn: {val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0},
        attrFix: {tabindex: "tabIndex"},
        attr: function (a, c, d, e) {
            var g = a.nodeType;
            if (!a || g === 3 || g === 8 || g === 2) return b;
            if (e && c in f.attrFn) return f(a)[c](d);
            if (!("getAttribute" in a)) return f.prop(a, c, d);
            var h, i, j = g !== 1 || !f.isXMLDoc(a);
            j && (c = f.attrFix[c] || c, i = f.attrHooks[c], i || (t.test(c) ? i = v : u && (i = u)));
            if (d !== b) {
                if (d === null) {
                    f.removeAttr(a, c);
                    return b
                }
                if (i && "set" in i && j && (h = i.set(a, d, c)) !== b) return h;
                a.setAttribute(c, "" + d);
                return d
            }
            if (i && "get" in i && j && (h = i.get(a, c)) !== null) return h;
            h = a.getAttribute(c);
            return h === null ? b : h
        },
        removeAttr: function (a, b) {
            var c;
            a.nodeType === 1 && (b = f.attrFix[b] || b, f.attr(a, b, ""), a.removeAttribute(b), t.test(b) && (c = f.propFix[b] || b) in a && (a[c] = !1))
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (q.test(a.nodeName) && a.parentNode) f.error("type property can't be changed"); else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b), c && (a.value = c);
                        return b
                    }
                }
            }, value: {
                get: function (a, b) {
                    if (u && f.nodeName(a, "button")) return u.get(a, b);
                    return b in a ? a.value : null
                }, set: function (a, b, c) {
                    if (u && f.nodeName(a, "button")) return u.set(a, b, c);
                    a.value = b
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (a, c, d) {
            var e = a.nodeType;
            if (!a || e === 3 || e === 8 || e === 2) return b;
            var g, h, i = e !== 1 || !f.isXMLDoc(a);
            i && (c = f.propFix[c] || c, h = f.propHooks[c]);
            return d !== b ? h && "set" in h && (g = h.set(a, d, c)) !== b ? g : a[c] = d : h && "get" in h && (g = h.get(a, c)) !== null ? g : a[c]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var c = a.getAttributeNode("tabindex");
                    return c && c.specified ? parseInt(c.value, 10) : r.test(a.nodeName) || s.test(a.nodeName) && a.href ? 0 : b
                }
            }
        }
    }), f.attrHooks.tabIndex = f.propHooks.tabIndex, v = {
        get: function (a, c) {
            var d;
            return f.prop(a, c) === !0 || (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
        }, set: function (a, b, c) {
            var d;
            b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
            return c
        }
    }, f.support.getSetAttribute || (u = f.valHooks.button = {
        get: function (a, c) {
            var d;
            d = a.getAttributeNode(c);
            return d && d.nodeValue !== "" ? d.nodeValue : b
        }, set: function (a, b, d) {
            var e = a.getAttributeNode(d);
            e || (e = c.createAttribute(d), a.setAttributeNode(e));
            return e.nodeValue = b + ""
        }
    }, f.each(["width", "height"], function (a, b) {
        f.attrHooks[b] = f.extend(f.attrHooks[b], {
            set: function (a, c) {
                if (c === "") {
                    a.setAttribute(b, "auto");
                    return c
                }
            }
        })
    })), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
        f.attrHooks[c] = f.extend(f.attrHooks[c], {
            get: function (a) {
                var d = a.getAttribute(c, 2);
                return d === null ? b : d
            }
        })
    }), f.support.style || (f.attrHooks.style = {
        get: function (a) {
            return a.style.cssText.toLowerCase() || b
        }, set: function (a, b) {
            return a.style.cssText = "" + b
        }
    }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
        get: function (a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
            return null
        }
    })), f.support.checkOn || f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            get: function (a) {
                return a.getAttribute("value") === null ? "on" : a.value
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = f.extend(f.valHooks[this], {
            set: function (a, b) {
                if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0
            }
        })
    });
    var w = /\.(.*)$/, x = /^(?:textarea|input|select)$/i, y = /\./g, z = / /g, A = /[^\w\s.|`]/g, B = function (a) {
        return a.replace(A, "\\$&")
    };
    f.event = {
        add: function (a, c, d, e) {
            if (a.nodeType !== 3 && a.nodeType !== 8) {
                if (d === !1) d = C; else if (!d) return;
                var g, h;
                d.handler && (g = d, d = g.handler), d.guid || (d.guid = f.guid++);
                var i = f._data(a);
                if (!i) return;
                var j = i.events, k = i.handle;
                j || (i.events = j = {}), k || (i.handle = k = function (a) {
                    return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.handle.apply(k.elem, arguments) : b
                }), k.elem = a, c = c.split(" ");
                var l, m = 0, n;
                while (l = c[m++]) {
                    h = g ? f.extend({}, g) : {
                        handler: d,
                        data: e
                    }, l.indexOf(".") > -1 ? (n = l.split("."), l = n.shift(), h.namespace = n.slice(0).sort().join(".")) : (n = [], h.namespace = ""), h.type = l, h.guid || (h.guid = d.guid);
                    var o = j[l], p = f.event.special[l] || {};
                    if (!o) {
                        o = j[l] = [];
                        if (!p.setup || p.setup.call(a, e, n, k) === !1) a.addEventListener ? a.addEventListener(l, k, !1) : a.attachEvent && a.attachEvent("on" + l, k)
                    }
                    p.add && (p.add.call(a, h), h.handler.guid || (h.handler.guid = d.guid)), o.push(h), f.event.global[l] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, c, d, e) {
            if (a.nodeType !== 3 && a.nodeType !== 8) {
                d === !1 && (d = C);
                var g, h, i, j, k = 0, l, m, n, o, p, q, r, s = f.hasData(a) && f._data(a), t = s && s.events;
                if (!s || !t) return;
                c && c.type && (d = c.handler, c = c.type);
                if (!c || typeof c == "string" && c.charAt(0) === ".") {
                    c = c || "";
                    for (h in t) f.event.remove(a, h + c);
                    return
                }
                c = c.split(" ");
                while (h = c[k++]) {
                    r = h, q = null, l = h.indexOf(".") < 0, m = [], l || (m = h.split("."), h = m.shift(), n = new RegExp("(^|\\.)" + f.map(m.slice(0).sort(), B).join("\\.(?:.*\\.)?") + "(\\.|$)")), p = t[h];
                    if (!p) continue;
                    if (!d) {
                        for (j = 0; j < p.length; j++) {
                            q = p[j];
                            if (l || n.test(q.namespace)) f.event.remove(a, r, q.handler, j), p.splice(j--, 1)
                        }
                        continue
                    }
                    o = f.event.special[h] || {};
                    for (j = e || 0; j < p.length; j++) {
                        q = p[j];
                        if (d.guid === q.guid) {
                            if (l || n.test(q.namespace)) e == null && p.splice(j--, 1), o.remove && o.remove.call(a, q);
                            if (e != null) break
                        }
                    }
                    if (p.length === 0 || e != null && p.length === 1) (!o.teardown || o.teardown.call(a, m) === !1) && f.removeEvent(a, h, s.handle), g = null
                        , delete t[h]
                }
                if (f.isEmptyObject(t)) {
                    var u = s.handle;
                    u && (u.elem = null), delete s.events, delete s.handle, f.isEmptyObject(s) && f.removeData(a, b, !0)
                }
            }
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (c, d, e, g) {
            var h = c.type || c, i = [], j;
            h.indexOf("!") >= 0 && (h = h.slice(0, -1), j = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
            if (!!e && !f.event.customEvent[h] || !!f.event.global[h]) {
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.exclusive = j, c.namespace = i.join("."), c.namespace_re = new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)");
                if (g || !e) c.preventDefault(), c.stopPropagation();
                if (!e) {
                    f.each(f.cache, function () {
                        var a = f.expando, b = this[a];
                        b && b.events && b.events[h] && f.event.trigger(c, d, b.handle.elem)
                    });
                    return
                }
                if (e.nodeType === 3 || e.nodeType === 8) return;
                c.result = b, c.target = e, d = d != null ? f.makeArray(d) : [], d.unshift(c);
                var k = e, l = h.indexOf(":") < 0 ? "on" + h : "";
                do {
                    var m = f._data(k, "handle");
                    c.currentTarget = k, m && m.apply(k, d), l && f.acceptData(k) && k[l] && k[l].apply(k, d) === !1 && (c.result = !1, c.preventDefault()), k = k.parentNode || k.ownerDocument || k === c.target.ownerDocument && a
                } while (k && !c.isPropagationStopped());
                if (!c.isDefaultPrevented()) {
                    var n, o = f.event.special[h] || {};
                    if ((!o._default || o._default.call(e.ownerDocument, c) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e)) {
                        try {
                            l && e[h] && (n = e[l], n && (e[l] = null), f.event.triggered = h, e[h]())
                        } catch (p) {
                        }
                        n && (e[l] = n), f.event.triggered = b
                    }
                }
                return c.result
            }
        },
        handle: function (c) {
            c = f.event.fix(c || a.event);
            var d = ((f._data(this, "events") || {})[c.type] || []).slice(0), e = !c.exclusive && !c.namespace,
                g = Array.prototype.slice.call(arguments, 0);
            g[0] = c, c.currentTarget = this;
            for (var h = 0, i = d.length; h < i; h++) {
                var j = d[h];
                if (e || c.namespace_re.test(j.namespace)) {
                    c.handler = j.handler, c.data = j.data, c.handleObj = j;
                    var k = j.handler.apply(this, g);
                    k !== b && (c.result = k, k === !1 && (c.preventDefault(), c.stopPropagation()));
                    if (c.isImmediatePropagationStopped()) break
                }
            }
            return c.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (a) {
            if (a[f.expando]) return a;
            var d = a;
            a = f.Event(d);
            for (var e = this.props.length, g; e;) g = this.props[--e], a[g] = d[g];
            a.target || (a.target = a.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
            if (a.pageX == null && a.clientX != null) {
                var h = a.target.ownerDocument || c, i = h.documentElement, j = h.body;
                a.pageX = a.clientX + (i && i.scrollLeft || j && j.scrollLeft || 0) - (i && i.clientLeft || j && j.clientLeft || 0), a.pageY = a.clientY + (i && i.scrollTop || j && j.scrollTop || 0) - (i && i.clientTop || j && j.clientTop || 0)
            }
            a.which == null && (a.charCode != null || a.keyCode != null) && (a.which = a.charCode != null ? a.charCode : a.keyCode), !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey), !a.which && a.button !== b && (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
            return a
        },
        guid: 1e8,
        proxy: f.proxy,
        special: {
            ready: {setup: f.bindReady, teardown: f.noop}, live: {
                add: function (a) {
                    f.event.add(this, M(a.origType, a.selector), f.extend({}, a, {handler: L, guid: a.handler.guid}))
                }, remove: function (a) {
                    f.event.remove(this, M(a.origType, a.selector), a)
                }
            }, beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                }, teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        }
    }, f.removeEvent = c.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        a.detachEvent && a.detachEvent("on" + b, c)
    }, f.Event = function (a, b) {
        if (!this.preventDefault) return new f.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? D : C) : this.type = a, b && f.extend(this, b), this.timeStamp = f.now(), this[f.expando] = !0
    }, f.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = D;
            var a = this.originalEvent;
            !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        }, stopPropagation: function () {
            this.isPropagationStopped = D;
            var a = this.originalEvent;
            !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = D, this.stopPropagation()
        }, isDefaultPrevented: C, isPropagationStopped: C, isImmediatePropagationStopped: C
    };
    var E = function (a) {
        var b = a.relatedTarget, c = !1, d = a.type;
        a.type = a.data, b !== this && (b && (c = f.contains(this, b)), c || (f.event.handle.apply(this, arguments), a.type = d))
    }, F = function (a) {
        a.type = a.data, f.event.handle.apply(this, arguments)
    };
    f.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (a, b) {
        f.event.special[a] = {
            setup: function (c) {
                f.event.add(this, b, c && c.selector ? F : E, a)
            }, teardown: function (a) {
                f.event.remove(this, b, a && a.selector ? F : E)
            }
        }
    }), f.support.submitBubbles || (f.event.special.submit = {
        setup: function (a, b) {
            if (!f.nodeName(this, "form")) f.event.add(this, "click.specialSubmit", function (a) {
                var b = a.target, c = f.nodeName(b, "input") ? b.type : "";
                (c === "submit" || c === "image") && f(b).closest("form").length && J("submit", this, arguments)
            }), f.event.add(this, "keypress.specialSubmit", function (a) {
                var b = a.target, c = f.nodeName(b, "input") ? b.type : "";
                (c === "text" || c === "password") && f(b).closest("form").length && a.keyCode === 13 && J("submit", this, arguments)
            }); else return !1
        }, teardown: function (a) {
            f.event.remove(this, ".specialSubmit")
        }
    });
    if (!f.support.changeBubbles) {
        var G, H = function (a) {
            var b = f.nodeName(a, "input") ? a.type : "", c = a.value;
            b === "radio" || b === "checkbox" ? c = a.checked : b === "select-multiple" ? c = a.selectedIndex > -1 ? f.map(a.options, function (a) {
                return a.selected
            }).join("-") : "" : f.nodeName(a, "select") && (c = a.selectedIndex);
            return c
        }, I = function (c) {
            var d = c.target, e, g;
            if (!!x.test(d.nodeName) && !d.readOnly) {
                e = f._data(d, "_change_data"), g = H(d), (c.type !== "focusout" || d.type !== "radio") && f._data(d, "_change_data", g);
                if (e === b || g === e) return;
                if (e != null || g) c.type = "change", c.liveFired = b, f.event.trigger(c, arguments[1], d)
            }
        };
        f.event.special.change = {
            filters: {
                focusout: I, beforedeactivate: I, click: function (a) {
                    var b = a.target, c = f.nodeName(b, "input") ? b.type : "";
                    (c === "radio" || c === "checkbox" || f.nodeName(b, "select")) && I.call(this, a)
                }, keydown: function (a) {
                    var b = a.target, c = f.nodeName(b, "input") ? b.type : "";
                    (a.keyCode === 13 && !f.nodeName(b, "textarea") || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") && I.call(this, a)
                }, beforeactivate: function (a) {
                    var b = a.target;
                    f._data(b, "_change_data", H(b))
                }
            }, setup: function (a, b) {
                if (this.type === "file") return !1;
                for (var c in G) f.event.add(this, c + ".specialChange", G[c]);
                return x.test(this.nodeName)
            }, teardown: function (a) {
                f.event.remove(this, ".specialChange");
                return x.test(this.nodeName)
            }
        }, G = f.event.special.change.filters, G.focus = G.beforeactivate
    }
    f.support.focusinBubbles || f.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        function e(a) {
            var c = f.event.fix(a);
            c.type = b, c.originalEvent = {}, f.event.trigger(c, null, c.target), c.isDefaultPrevented() && a.preventDefault()
        }

        var d = 0;
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            }, teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }), f.each(["bind", "one"], function (a, c) {
        f.fn[c] = function (a, d, e) {
            var g;
            if (typeof a == "object") {
                for (var h in a) this[c](h, d, a[h], e);
                return this
            }
            if (arguments.length === 2 || d === !1) e = d, d = b;
            c === "one" ? (g = function (a) {
                f(this).unbind(a, g);
                return e.apply(this, arguments)
            }, g.guid = e.guid || f.guid++) : g = e;
            if (a === "unload" && c !== "one") this.one(a, d, e); else for (var i = 0, j = this.length; i < j; i++) f.event.add(this[i], a, g, d);
            return this
        }
    }), f.fn.extend({
        unbind: function (a, b) {
            if (typeof a == "object" && !a.preventDefault) for (var c in a) this.unbind(c, a[c]); else for (var d = 0, e = this.length; d < e; d++) f.event.remove(this[d], a, b);
            return this
        }, delegate: function (a, b, c, d) {
            return this.live(b, c, d, a)
        }, undelegate: function (a, b, c) {
            return arguments.length === 0 ? this.unbind("live") : this.die(b, null, c, a)
        }, trigger: function (a, b) {
            return this.each(function () {
                f.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            if (this[0]) return f.event.trigger(a, b, this[0], !0)
        }, toggle: function (a) {
            var b = arguments, c = a.guid || f.guid++, d = 0, e = function (c) {
                var e = (f.data(this, "lastToggle" + a.guid) || 0) % d;
                f.data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
                return b[e].apply(this, arguments) || !1
            };
            e.guid = c;
            while (d < b.length) b[d++].guid = c;
            return this.click(e)
        }, hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var K = {focus: "focusin", blur: "focusout", mouseenter: "mouseover", mouseleave: "mouseout"};
    f.each(["live", "die"], function (a, c) {
        f.fn[c] = function (a, d, e, g) {
            var h, i = 0, j, k, l, m = g || this.selector, n = g ? this : f(this.context);
            if (typeof a == "object" && !a.preventDefault) {
                for (var o in a) n[c](o, d, a[o], m);
                return this
            }
            if (c === "die" && !a && g && g.charAt(0) === ".") {
                n.unbind(g);
                return this
            }
            if (d === !1 || f.isFunction(d)) e = d || C, d = b;
            a = (a || "").split(" ");
            while ((h = a[i++]) != null) {
                j = w.exec(h), k = "", j && (k = j[0], h = h.replace(w, ""));
                if (h === "hover") {
                    a.push("mouseenter" + k, "mouseleave" + k);
                    continue
                }
                l = h, K[h] ? (a.push(K[h] + k), h = h + k) : h = (K[h] || h) + k;
                if (c === "live") for (var p = 0, q = n.length; p < q; p++) f.event.add(n[p], "live." + M(h, m), {
                    data: d,
                    selector: m,
                    handler: e,
                    origType: h,
                    origHandler: e,
                    preType: l
                }); else n.unbind("live." + M(h, m), e)
            }
            return this
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (a, b) {
        f.fn[b] = function (a, c) {
            c == null && (c = a, a = null);
            return arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
        }, f.attrFn && (f.attrFn[b] = !0)
    }), function () {
        function u(a, b, c, d, e, f) {
            for (var g = 0, h = d.length; g < h; g++) {
                var i = d[g];
                if (i) {
                    var j = !1;
                    i = i[a];
                    while (i) {
                        if (i.sizcache === c) {
                            j = d[i.sizset];
                            break
                        }
                        if (i.nodeType === 1) {
                            f || (i.sizcache = c, i.sizset = g);
                            if (typeof b != "string") {
                                if (i === b) {
                                    j = !0;
                                    break
                                }
                            } else if (k.filter(b, [i]).length > 0) {
                                j = i;
                                break
                            }
                        }
                        i = i[a]
                    }
                    d[g] = j
                }
            }
        }

        function t(a, b, c, d, e, f) {
            for (var g = 0, h = d.length; g < h; g++) {
                var i = d[g];
                if (i) {
                    var j = !1;
                    i = i[a];
                    while (i) {
                        if (i.sizcache === c) {
                            j = d[i.sizset];
                            break
                        }
                        i.nodeType === 1 && !f && (i.sizcache = c, i.sizset = g);
                        if (i.nodeName.toLowerCase() === b) {
                            j = i;
                            break
                        }
                        i = i[a]
                    }
                    d[g] = j
                }
            }
        }

        var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
            d = 0, e = Object.prototype.toString, g = !1, h = !0, i = /\\/g, j = /\W/;
        [0, 0].sort(function () {
            h = !1;
            return 0
        });
        var k = function (b, d, f, g) {
            f = f || [], d = d || c;
            var h = d;
            if (d.nodeType !== 1 && d.nodeType !== 9) return [];
            if (!b || typeof b != "string") return f;
            var i, j, n, o, q, r, s, t, u = !0, w = k.isXML(d), x = [], y = b;
            do {
                a.exec(""), i = a.exec(y);
                if (i) {
                    y = i[3], x.push(i[1]);
                    if (i[2]) {
                        o = i[3];
                        break
                    }
                }
            } while (i);
            if (x.length > 1 && m.exec(b)) if (x.length === 2 && l.relative[x[0]]) j = v(x[0] + x[1], d); else {
                j = l.relative[x[0]] ? [d] : k(x.shift(), d);
                while (x.length) b = x.shift(), l.relative[b] && (b += x.shift()), j = v(b, j)
            } else {
                !g && x.length > 1 && d.nodeType === 9 && !w && l.match.ID.test(x[0]) && !l.match.ID.test(x[x.length - 1]) && (q = k.find(x.shift(), d, w), d = q.expr ? k.filter(q.expr, q.set)[0] : q.set[0]);
                if (d) {
                    q = g ? {
                        expr: x.pop(),
                        set: p(g)
                    } : k.find(x.pop(), x.length === 1 && (x[0] === "~" || x[0] === "+") && d.parentNode ? d.parentNode : d, w), j = q.expr ? k.filter(q.expr, q.set) : q.set, x.length > 0 ? n = p(j) : u = !1;
                    while (x.length) r = x.pop(), s = r, l.relative[r] ? s = x.pop() : r = "", s == null && (s = d), l.relative[r](n, s, w)
                } else n = x = []
            }
            n || (n = j), n || k.error(r || b);
            if (e.call(n) === "[object Array]") if (!u) f.push.apply(f, n); else if (d && d.nodeType === 1) for (t = 0; n[t] != null; t++) n[t] && (n[t] === !0 || n[t].nodeType === 1 && k.contains(d, n[t])) && f.push(j[t]); else for (t = 0; n[t] != null; t++) n[t] && n[t].nodeType === 1 && f.push(j[t]); else p(n, f);
            o && (k(o, h, f, g), k.uniqueSort(f));
            return f
        };
        k.uniqueSort = function (a) {
            if (r) {
                g = h, a.sort(r);
                if (g) for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1)
            }
            return a
        }, k.matches = function (a, b) {
            return k(a, null, null, b)
        }, k.matchesSelector = function (a, b) {
            return k(b, null, null, [a]).length > 0
        }, k.find = function (a, b, c) {
            var d;
            if (!a) return [];
            for (var e = 0, f = l.order.length; e < f; e++) {
                var g, h = l.order[e];
                if (g = l.leftMatch[h].exec(a)) {
                    var j = g[1];
                    g.splice(1, 1);
                    if (j.substr(j.length - 1) !== "\\") {
                        g[1] = (g[1] || "").replace(i, ""), d = l.find[h](g, b, c);
                        if (d != null) {
                            a = a.replace(l.match[h], "");
                            break
                        }
                    }
                }
            }
            d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
            return {set: d, expr: a}
        }, k.filter = function (a, c, d, e) {
            var f, g, h = a, i = [], j = c, m = c && c[0] && k.isXML(c[0]);
            while (a && c.length) {
                for (var n in l.filter) if ((f = l.leftMatch[n].exec(a)) != null && f[2]) {
                    var o, p, q = l.filter[n], r = f[1];
                    g = !1, f.splice(1, 1);
                    if (r.substr(r.length - 1) === "\\") continue;
                    j === i && (i = []);
                    if (l.preFilter[n]) {
                        f = l.preFilter[n](f, j, d, i, e, m);
                        if (!f) g = o = !0; else if (f === !0) continue
                    }
                    if (f) for (var s = 0; (p = j[s]) != null; s++) if (p) {
                        o = q(p, f, s, j);
                        var t = e ^ !!o;
                        d && o != null ? t ? g = !0 : j[s] = !1 : t && (i.push(p), g = !0)
                    }
                    if (o !== b) {
                        d || (j = i), a = a.replace(l.match[n], "");
                        if (!g) return [];
                        break
                    }
                }
                if (a === h) if (g == null) k.error(a); else break;
                h = a
            }
            return j
        }, k.error = function (a) {
            throw "Syntax error, unrecognized expression: " + a
        };
        var l = k.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
            },
            leftMatch: {},
            attrMap: {"class": "className", "for": "htmlFor"},
            attrHandle: {
                href: function (a) {
                    return a.getAttribute("href")
                }, type: function (a) {
                    return a.getAttribute("type")
                }
            },
            relative: {
                "+": function (a, b) {
                    var c = typeof b == "string", d = c && !j.test(b), e = c && !d;
                    d && (b = b.toLowerCase());
                    for (var f = 0, g = a.length, h; f < g; f++) if (h = a[f]) {
                        while ((h = h.previousSibling) && h.nodeType !== 1) ;
                        a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                    }
                    e && k.filter(b, a, !0)
                }, ">": function (a, b) {
                    var c, d = typeof b == "string", e = 0, f = a.length;
                    if (d && !j.test(b)) {
                        b = b.toLowerCase();
                        for (; e < f; e++) {
                            c = a[e];
                            if (c) {
                                var g = c.parentNode;
                                a[e] = g.nodeName.toLowerCase() === b ? g : !1
                            }
                        }
                    } else {
                        for (; e < f; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                        d && k.filter(b, a, !0)
                    }
                }, "": function (a, b, c) {
                    var e, f = d++, g = u;
                    typeof b == "string" && !j.test(b) && (b = b.toLowerCase(), e = b, g = t), g("parentNode", b, f, a, e, c)
                }, "~": function (a, b, c) {
                    var e, f = d++, g = u;
                    typeof b == "string" && !j.test(b) && (b = b.toLowerCase(), e = b, g = t), g("previousSibling", b, f, a, e, c)
                }
            },
            find: {
                ID: function (a, b, c) {
                    if (typeof b.getElementById != "undefined" && !c) {
                        var d = b.getElementById(a[1]);
                        return d && d.parentNode ? [d] : []
                    }
                }, NAME: function (a, b) {
                    if (typeof b.getElementsByName != "undefined") {
                        var c = [], d = b.getElementsByName(a[1]);
                        for (var e = 0, f = d.length; e < f; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                        return c.length === 0 ? null : c
                    }
                }, TAG: function (a, b) {
                    if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1])
                }
            },
            preFilter: {
                CLASS: function (a, b, c, d, e, f) {
                    a = " " + a[1].replace(i, "") + " ";
                    if (f) return a;
                    for (var g = 0, h; (h = b[g]) != null; g++) h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                    return !1
                }, ID: function (a) {
                    return a[1].replace(i, "")
                }, TAG: function (a, b) {
                    return a[1].replace(i, "").toLowerCase()
                }, CHILD: function (a) {
                    if (a[1] === "nth") {
                        a[2] || k.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                        var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                        a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0
                    } else a[2] && k.error(a[0]);
                    a[0] = d++;
                    return a
                }, ATTR: function (a, b, c, d, e, f) {
                    var g = a[1] = a[1].replace(i, "");
                    !f && l.attrMap[g] && (a[1] = l.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(i, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
                    return a
                }, PSEUDO: function (b, c, d, e, f) {
                    if (b[1] === "not") if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = k(b[3], null, null, c); else {
                        var g = k.filter(b[3], c, d, !0 ^ f);
                        d || e.push.apply(e, g);
                        return !1
                    } else if (l.match.POS.test(b[0]) || l.match.CHILD.test(b[0])) return !0;
                    return b
                }, POS: function (a) {
                    a.unshift(!0);
                    return a
                }
            },
            filters: {
                enabled: function (a) {
                    return a.disabled === !1 && a.type !== "hidden"
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    return a.checked === !0
                }, selected: function (a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return a.selected === !0
                }, parent: function (a) {
                    return !!a.firstChild
                }, empty: function (a) {
                    return !a.firstChild
                }, has: function (a, b, c) {
                    return !!k(c[3], a).length
                }, header: function (a) {
                    return /h\d/i.test(a.nodeName)
                }, text: function (a) {
                    var b = a.getAttribute("type"), c = a.type;
                    return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                }, radio: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                }, checkbox: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                }, file: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "file" === a.type
                }, password: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "password" === a.type
                }, submit: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "submit" === a.type
                }, image: function (a) {
                    return a.nodeName.toLowerCase() === "input" && "image" === a.type
                }, reset: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return (b === "input" || b === "button") && "reset" === a.type
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return b === "input" && "button" === a.type || b === "button"
                }, input: function (a) {
                    return /input|select|textarea|button/i.test(a.nodeName)
                }, focus: function (a) {
                    return a === a.ownerDocument.activeElement
                }
            },
            setFilters: {
                first: function (a, b) {
                    return b === 0
                }, last: function (a, b, c, d) {
                    return b === d.length - 1
                }, even: function (a, b) {
                    return b % 2 === 0
                }, odd: function (a, b) {
                    return b % 2 === 1
                }, lt: function (a, b, c) {
                    return b < c[3] - 0
                }, gt: function (a, b, c) {
                    return b > c[3] - 0
                }, nth: function (a, b, c) {
                    return c[3] - 0 === b
                }, eq: function (a, b, c) {
                    return c[3] - 0 === b
                }
            },
            filter: {
                PSEUDO: function (a, b, c, d) {
                    var e = b[1], f = l.filters[e];
                    if (f) return f(a, c, b, d);
                    if (e === "contains") return (a.textContent || a.innerText || k.getText([a]) || "").indexOf(b[3]) >= 0;
                    if (e === "not") {
                        var g = b[3];
                        for (var h = 0, i = g.length; h < i; h++) if (g[h] === a) return !1;
                        return !0
                    }
                    k.error(e)
                }, CHILD: function (a, b) {
                    var c = b[1], d = a;
                    switch (c) {
                        case"only":
                        case"first":
                            while (d = d.previousSibling) if (d.nodeType === 1) return !1;
                            if (c === "first") return !0;
                            d = a;
                        case"last":
                            while (d = d.nextSibling) if (d.nodeType === 1) return !1;
                            return !0;
                        case"nth":
                            var e = b[2], f = b[3];
                            if (e === 1 && f === 0) return !0;
                            var g = b[0], h = a.parentNode;
                            if (h && (h.sizcache !== g || !a.nodeIndex)) {
                                var i = 0;
                                for (d = h.firstChild; d; d = d.nextSibling) d.nodeType === 1 && (d.nodeIndex = ++i);
                                h.sizcache = g
                            }
                            var j = a.nodeIndex - f;
                            return e === 0 ? j === 0 : j % e === 0 && j / e >= 0
                    }
                }, ID: function (a, b) {
                    return a.nodeType === 1 && a.getAttribute("id") === b
                }, TAG: function (a, b) {
                    return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
                }, CLASS: function (a, b) {
                    return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                }, ATTR: function (a, b) {
                    var c = b[1], d = l.attrHandle[c] ? l.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
                        e = d + "", f = b[2], g = b[4];
                    return d == null ? f === "!=" : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                }, POS: function (a, b, c, d) {
                    var e = b[2], f = l.setFilters[e];
                    if (f) return f(a, c, b, d)
                }
            }
        }, m = l.match.POS, n = function (a, b) {
            return "\\" + (b - 0 + 1)
        };
        for (var o in l.match) l.match[o] = new RegExp(l.match[o].source + /(?![^\[]*\])(?![^\(]*\))/.source), l.leftMatch[o] = new RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[o].source.replace(/\\(\d+)/g, n));
        var p = function (a, b) {
            a = Array.prototype.slice.call(a, 0);
            if (b) {
                b.push.apply(b, a);
                return b
            }
            return a
        };
        try {
            Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
        } catch (q) {
            p = function (a, b) {
                var c = 0, d = b || [];
                if (e.call(a) === "[object Array]") Array.prototype.push.apply(d, a); else if (typeof a.length == "number") for (var f = a.length; c < f; c++) d.push(a[c]); else for (; a[c]; c++) d.push(a[c]);
                return d
            }
        }
        var r, s;
        c.documentElement.compareDocumentPosition ? r = function (a, b) {
            if (a === b) {
                g = !0;
                return 0
            }
            if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
            return a.compareDocumentPosition(b) & 4 ? -1 : 1
        } : (r = function (a, b) {
            if (a === b) {
                g = !0;
                return 0
            }
            if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
            var c, d, e = [], f = [], h = a.parentNode, i = b.parentNode, j = h;
            if (h === i) return s(a, b);
            if (!h) return -1;
            if (!i) return 1;
            while (j) e.unshift(j), j = j.parentNode;
            j = i;
            while (j) f.unshift(j), j = j.parentNode;
            c = e.length, d = f.length;
            for (var k = 0; k < c && k < d; k++) if (e[k] !== f[k]) return s(e[k], f[k]);
            return k === c ? s(a, f[k], -1) : s(e[k], b, 1)
        }, s = function (a, b, c) {
            if (a === b) return c;
            var d = a.nextSibling;
            while (d) {
                if (d === b) return -1;
                d = d.nextSibling
            }
            return 1
        }), k.getText = function (a) {
            var b = "", c;
            for (var d = 0; a[d]; d++) c = a[d], c.nodeType === 3 || c.nodeType === 4 ? b += c.nodeValue : c.nodeType !== 8 && (b += k.getText(c.childNodes));
            return b
        }, function () {
            var a = c.createElement("div"), d = "script" + (new Date).getTime(), e = c.documentElement;
            a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (l.find.ID = function (a, c, d) {
                if (typeof c.getElementById != "undefined" && !d) {
                    var e = c.getElementById(a[1]);
                    return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                }
            }, l.filter.ID = function (a, b) {
                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                return a.nodeType === 1 && c && c.nodeValue === b
            }), e.removeChild(a), e = a = null
        }(), function () {
            var a = c.createElement("div");
            a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (l.find.TAG = function (a, b) {
                var c = b.getElementsByTagName(a[1]);
                if (a[1] === "*") {
                    var d = [];
                    for (var e = 0; c[e]; e++) c[e].nodeType === 1 && d.push(c[e]);
                    c = d
                }
                return c
            }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (l.attrHandle.href = function (a) {
                return a.getAttribute("href", 2)
            }), a = null
        }(), c.querySelectorAll && function () {
            var a = k, b = c.createElement("div"), d = "__sizzle__";
            b.innerHTML = "<p class='TEST'></p>";
            if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                k = function (b, e, f, g) {
                    e = e || c;
                    if (!g && !k.isXML(e)) {
                        var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                        if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                            if (h[1]) return p(e.getElementsByTagName(b), f);
                            if (h[2] && l.find.CLASS && e.getElementsByClassName) return p(e.getElementsByClassName(h[2]), f)
                        }
                        if (e.nodeType === 9) {
                            if (b === "body" && e.body) return p([e.body], f);
                            if (h && h[3]) {
                                var i = e.getElementById(h[3]);
                                if (!i || !i.parentNode) return p([], f);
                                if (i.id === h[3]) return p([i], f)
                            }
                            try {
                                return p(e.querySelectorAll(b), f)
                            } catch (j) {
                            }
                        } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                            var m = e, n = e.getAttribute("id"), o = n || d, q = e.parentNode, r = /^\s*[+~]/.test(b);
                            n ? o = o.replace(/'/g, "\\$&") : e.setAttribute("id", o), r && q && (e = e.parentNode);
                            try {
                                if (!r || q) return p(e.querySelectorAll("[id='" + o + "'] " + b), f)
                            } catch (s) {
                            } finally {
                                n || m.removeAttribute("id")
                            }
                        }
                    }
                    return a(b, e, f, g)
                };
                for (var e in a) k[e] = a[e];
                b = null
            }
        }(), function () {
            var a = c.documentElement,
                b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
            if (b) {
                var d = !b.call(c.createElement("div"), "div"), e = !1;
                try {
                    b.call(c.documentElement, "[test!='']:sizzle")
                } catch (f) {
                    e = !0
                }
                k.matchesSelector = function (a, c) {
                    c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                    if (!k.isXML(a)) try {
                        if (e || !l.match.PSEUDO.test(c) && !/!=/.test(c)) {
                            var f = b.call(a, c);
                            if (f || !d || a.document && a.document.nodeType !== 11) return f
                        }
                    } catch (g) {
                    }
                    return k(c, null, null, [a]).length > 0
                }
            }
        }(), function () {
            var a = c.createElement("div");
            a.innerHTML = "<div class='test e'></div><div class='test'></div>";
            if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                a.lastChild.className = "e";
                if (a.getElementsByClassName("e").length === 1) return;
                l.order.splice(1, 0, "CLASS"), l.find.CLASS = function (a, b, c) {
                    if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1])
                }, a = null
            }
        }(), c.documentElement.contains ? k.contains = function (a, b) {
            return a !== b && (a.contains ? a.contains(b) : !0)
        } : c.documentElement.compareDocumentPosition ? k.contains = function (a, b) {
            return !!(a.compareDocumentPosition(b) & 16)
        } : k.contains = function () {
            return !1
        }, k.isXML = function (a) {
            var b = (a ? a.ownerDocument || a : 0).documentElement;
            return b ? b.nodeName !== "HTML" : !1
        };
        var v = function (a, b) {
            var c, d = [], e = "", f = b.nodeType ? [b] : b;
            while (c = l.match.PSEUDO.exec(a)) e += c[0], a = a.replace(l.match.PSEUDO, "");
            a = l.relative[a] ? a + "*" : a;
            for (var g = 0, h = f.length; g < h; g++) k(a, f[g], d);
            return k.filter(e, d)
        };
        f.find = k, f.expr = k.selectors, f.expr[":"] = f.expr.filters, f.unique = k.uniqueSort, f.text = k.getText, f.isXMLDoc = k.isXML, f.contains = k.contains
    }();
    var N = /Until$/, O = /^(?:parents|prevUntil|prevAll)/, P = /,/, Q = /^.[^:#\[\.,]*$/, R = Array.prototype.slice,
        S = f.expr.match.POS, T = {children: !0, contents: !0, next: !0, prev: !0};
    f.fn.extend({
        find: function (a) {
            var b = this, c, d;
            if (typeof a != "string") return f(a).filter(function () {
                for (c = 0, d = b.length; c < d; c++) if (f.contains(b[c], this)) return !0
            });
            var e = this.pushStack("", "find", a), g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0) for (h = g; h < e.length; h++) for (i = 0; i < g; i++) if (e[i] === e[h]) {
                    e.splice(h--, 1);
                    break
                }
            }
            return e
        }, has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++) if (f.contains(this, b[a])) return !0
            })
        }, not: function (a) {
            return this.pushStack(V(this, a, !1), "not", a)
        }, filter: function (a) {
            return this.pushStack(V(this, a, !0), "filter", a)
        }, is: function (a) {
            return !!a && (typeof a == "string" ? f.filter(a, this).length > 0 : this.filter(a).length > 0)
        }, closest: function (a, b) {
            var c = [], d, e, g = this[0];
            if (f.isArray(a)) {
                var h, i, j = {}, k = 1;
                if (g && a.length) {
                    for (d = 0, e = a.length; d < e; d++) i = a[d], j[i] || (j[i] = S.test(i) ? f(i, b || this.context) : i);
                    while (g && g.ownerDocument && g !== b) {
                        for (i in j) h = j[i], (h.jquery ? h.index(g) > -1 : f(g).is(h)) && c.push({
                            selector: i,
                            elem: g,
                            level: k
                        });
                        g = g.parentNode, k++
                    }
                }
                return c
            }
            var l = S.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (l ? l.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        }, index: function (a) {
            if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
            if (typeof a == "string") return f.inArray(this[0], f(a));
            return f.inArray(a.jquery ? a[0] : a, this)
        }, add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a), d = f.merge(this.get(), c);
            return this.pushStack(U(c[0]) || U(d[0]) ? d : f.unique(d))
        }, andSelf: function () {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        }, parents: function (a) {
            return f.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return f.dir(a, "parentNode", c)
        }, next: function (a) {
            return f.nth(a, 2, "nextSibling")
        }, prev: function (a) {
            return f.nth(a, 2, "previousSibling")
        }, nextAll: function (a) {
            return f.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return f.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return f.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return f.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return f.sibling(a.parentNode.firstChild, a)
        }, children: function (a) {
            return f.sibling(a.firstChild)
        }, contents: function (a) {
            return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function (a, b) {
        f.fn[a] = function (c, d) {
            var e = f.map(this, b, c), g = R.call(arguments);
            N.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !T[a] ? f.unique(e) : e, (this.length > 1 || P.test(d)) && O.test(a) && (e = e.reverse());
            return this.pushStack(e, a, g.join(","))
        }
    }), f.extend({
        filter: function (a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
        }, dir: function (a, c, d) {
            var e = [], g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) g.nodeType === 1 && e.push(g), g = g[c];
            return e
        }, nth: function (a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) if (a.nodeType === 1 && ++e === b) break;
            return a
        }, sibling: function (a, b) {
            var c = [];
            for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
            return c
        }
    });
    var W = / jQuery\d+="(?:\d+|null)"/g, X = /^\s+/,
        Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig, Z = /<([\w:]+)/, $ = /<tbody/i,
        _ = /<|&#?\w+;/, ba = /<(?:script|object|embed|option|style)/i, bb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        bc = /\/(java|ecma)script/i, bd = /^\s*<!(?:\[CDATA\[|\-\-)/, be = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    be.optgroup = be.option, be.tbody = be.tfoot = be.colgroup = be.caption = be.thead, be.th = be.td, f.support.htmlSerialize || (be._default = [1, "div<div>", "</div>"]), f.fn.extend({
        text: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                var c = f(this);
                c.text(a.call(this, b, c.text()))
            });
            if (typeof a != "object" && a !== b) return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
            return f.text(this)
        }, wrapAll: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && a.firstChild.nodeType === 1) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            if (f.isFunction(a)) return this.each(function (b) {
                f(this).wrapInner(a.call(this, b))
            });
            return this.each(function () {
                var b = f(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            return this.each(function () {
                f(this).wrapAll(a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.appendChild(a)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (a) {
                this.nodeType === 1 && this.insertBefore(a, this.firstChild)
            })
        }, before: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this)
            });
            if (arguments.length) {
                var a = f(arguments[0]);
                a.push.apply(a, this.toArray());
                return this.pushStack(a, "before", arguments)
            }
        }, after: function () {
            if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling)
            });
            if (arguments.length) {
                var a = this.pushStack(this, "after", arguments);
                a.push.apply(a, f(arguments[0]).toArray());
                return a
            }
        }, remove: function (a, b) {
            for (var c = 0, d; (d = this[c]) != null; c++) if (!a || f.filter(a, [d]).length) !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
            return this
        }, empty: function () {
            for (var a = 0, b; (b = this[a]) != null; a++) {
                b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                while (b.firstChild) b.removeChild(b.firstChild)
            }
            return this
        }, clone: function (a, b) {
            a = a == null ? !1 : a, b = b == null ? a : b;
            return this.map(function () {
                return f.clone(this, a, b)
            })
        }, html: function (a) {
            if (a === b) return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(W, "") : null;
            if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !be[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
                a = a.replace(Y, "<$1></$2>");
                try {
                    for (var c = 0, d = this.length; c < d; c++) this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")), this[c].innerHTML = a)
                } catch (e) {
                    this.empty().append(a)
                }
            } else f.isFunction(a) ? this.each(function (b) {
                var c = f(this);
                c.html(a.call(this, b, c.html()))
            }) : this.empty().append(a);
            return this
        }, replaceWith: function (a) {
            if (this[0] && this[0].parentNode) {
                if (f.isFunction(a)) return this.each(function (b) {
                    var c = f(this), d = c.html();
                    c.replaceWith(a.call(this, b, d))
                });
                typeof a != "string" && (a = f(a).detach());
                return this.each(function () {
                    var b = this.nextSibling, c = this.parentNode;
                    f(this).remove(), b ? f(b).before(a) : f(c).append(a)
                })
            }
            return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, c, d) {
            var e, g, h, i, j = a[0], k = [];
            if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bb.test(j)) return this.each(function () {
                f(this).domManip(a, c, d, !0)
            });
            if (f.isFunction(j)) return this.each(function (e) {
                var g = f(this);
                a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d)
            });
            if (this[0]) {
                i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {fragment: i} : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                if (g) {
                    c = c && f.nodeName(g, "tr");
                    for (var l = 0, m = this.length, n = m - 1; l < m; l++) d.call(c ? bf(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                }
                k.length && f.each(k, bl)
            }
            return this
        }
    }), f.buildFragment = function (a, b, d) {
        var e, g, h, i;
        b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof a[0] == "string" && a[0].length < 512 && i === c && a[0].charAt(0) === "<" && !ba.test(a[0]) && (f.support.checkClone || !bb.test(a[0])) && (g = !0, h = f.fragments[a[0]], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[a[0]] = h ? e : 1);
        return {fragment: e, cacheable: g}
    }, f.fragments = {}, f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        f.fn[a] = function (c) {
            var d = [], e = f(c), g = this.length === 1 && this[0].parentNode;
            if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                e[b](this[0]);
                return this
            }
            for (var h = 0, i = e.length; h < i; h++) {
                var j = (h > 0 ? this.clone(!0) : this).get();
                f(e[h])[b](j), d = d.concat(j)
            }
            return this.pushStack(d, a, e.selector)
        }
    }), f.extend({
        clone: function (a, b, c) {
            var d = a.cloneNode(!0), e, g, h;
            if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                bh(a, d), e = bi(a), g = bi(d);
                for (h = 0; e[h]; ++h) g[h] && bh(e[h], g[h])
            }
            if (b) {
                bg(a, d);
                if (c) {
                    e = bi(a), g = bi(d);
                    for (h = 0; e[h]; ++h) bg(e[h], g[h])
                }
            }
            e = g = null;
            return d
        }, clean: function (a, b, d, e) {
            var g;
            b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
            var h = [], i;
            for (var j = 0, k; (k = a[j]) != null; j++) {
                typeof k == "number" && (k += "");
                if (!k) continue;
                if (typeof k == "string") if (!_.test(k)) k = b.createTextNode(k); else {
                    k = k.replace(Y, "<$1></$2>");
                    var l = (Z.exec(k) || ["", ""])[1].toLowerCase(), m = be[l] || be._default, n = m[0],
                        o = b.createElement("div");
                    o.innerHTML = m[1] + k + m[2];
                    while (n--) o = o.lastChild;
                    if (!f.support.tbody) {
                        var p = $.test(k),
                            q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                        for (i = q.length - 1; i >= 0; --i) f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                    }
                    !f.support.leadingWhitespace && X.test(k) && o.insertBefore(b.createTextNode(X.exec(k)[0]), o.firstChild), k = o.childNodes
                }
                var r;
                if (!f.support.appendChecked) if (k[0] && typeof (r = k.length) == "number") for (i = 0; i < r; i++) bk(k[i]); else bk(k);
                k.nodeType ? h.push(k) : h = f.merge(h, k)
            }
            if (d) {
                g = function (a) {
                    return !a.type || bc.test(a.type)
                };
                for (j = 0; h[j]; j++) if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript")) e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]); else {
                    if (h[j].nodeType === 1) {
                        var s = f.grep(h[j].getElementsByTagName("script"), g);
                        h.splice.apply(h, [j + 1, 0].concat(s))
                    }
                    d.appendChild(h[j])
                }
            }
            return h
        }, cleanData: function (a) {
            var b, c, d = f.cache, e = f.expando, g = f.event.special, h = f.support.deleteExpando;
            for (var i = 0, j; (j = a[i]) != null; i++) {
                if (j.nodeName && f.noData[j.nodeName.toLowerCase()]) continue;
                c = j[f.expando];
                if (c) {
                    b = d[c] && d[c][e];
                    if (b && b.events) {
                        for (var k in b.events) g[k] ? f.event.remove(j, k) : f.removeEvent(j, k, b.handle);
                        b.handle && (b.handle.elem = null)
                    }
                    h ? delete j[f.expando] : j.removeAttribute && j.removeAttribute(f.expando), delete d[c]
                }
            }
        }
    });
    var bm = /alpha\([^)]*\)/i, bn = /opacity=([^)]*)/, bo = /([A-Z]|^ms)/g, bp = /^-?\d+(?:px)?$/i, bq = /^-?\d/,
        br = /^([\-+])=([\-+.\de]+)/, bs = {position: "absolute", visibility: "hidden", display: "block"},
        bt = ["Left", "Right"], bu = ["Top", "Bottom"], bv, bw, bx;
    f.fn.css = function (a, c) {
        if (arguments.length === 2 && c === b) return this;
        return f.access(this, a, c, !0, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }, f.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = bv(a, "opacity", "opacity");
                        return c === "" ? "1" : c
                    }
                    return a.style.opacity
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": f.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, c, d, e) {
            if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
                c = f.cssProps[i] || i;
                if (d === b) {
                    if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
                    return j[c]
                }
                h = typeof d, h === "string" && (g = br.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
                if (d == null || h === "number" && isNaN(d)) return;
                h === "number" && !f.cssNumber[i] && (d += "px");
                if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
                    j[c] = d
                } catch (l) {
                }
            }
        },
        css: function (a, c, d) {
            var e, g;
            c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
            if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
            if (bv) return bv(a, c)
        },
        swap: function (a, b, c) {
            var d = {};
            for (var e in b) d[e] = a.style[e], a.style[e] = b[e];
            c.call(a);
            for (e in b) a.style[e] = d[e]
        }
    }), f.curCSS = f.css, f.each(["height", "width"], function (a, b) {
        f.cssHooks[b] = {
            get: function (a, c, d) {
                var e;
                if (c) {
                    if (a.offsetWidth !== 0) return by(a, b, d);
                    f.swap(a, bs, function () {
                        e = by(a, b, d)
                    });
                    return e
                }
            }, set: function (a, b) {
                if (!bp.test(b)) return b;
                b = parseFloat(b);
                if (b >= 0) return b + "px"
            }
        }
    }), f.support.opacity || (f.cssHooks.opacity = {
        get: function (a, b) {
            return bn.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = f.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")",
                g = d && d.filter || c.filter || "";
            c.zoom = 1;
            if (b >= 1 && f.trim(g.replace(bm, "")) === "") {
                c.removeAttribute("filter");
                if (d && !d.filter) return
            }
            c.filter = bm.test(g) ? g.replace(bm, e) : g + " " + e
        }
    }), f(function () {
        f.support.reliableMarginRight || (f.cssHooks.marginRight = {
            get: function (a, b) {
                var c;
                f.swap(a, {display: "inline-block"}, function () {
                    b ? c = bv(a, "margin-right", "marginRight") : c = a.style.marginRight
                });
                return c
            }
        })
    }), c.defaultView && c.defaultView.getComputedStyle && (bw = function (a, c) {
        var d, e, g;
        c = c.replace(bo, "-$1").toLowerCase();
        if (!(e = a.ownerDocument.defaultView)) return b;
        if (g = e.getComputedStyle(a, null)) d = g.getPropertyValue(c), d === "" && !f.contains(a.ownerDocument.documentElement, a) && (d = f.style(a, c));
        return d
    }), c.documentElement.currentStyle && (bx = function (a, b) {
        var c, d = a.currentStyle && a.currentStyle[b], e = a.runtimeStyle && a.runtimeStyle[b], f = a.style;
        !bp.test(d) && bq.test(d) && (c = f.left, e && (a.runtimeStyle.left = a.currentStyle.left), f.left = b === "fontSize" ? "1em" : d || 0, d = f.pixelLeft + "px", f.left = c, e && (a.runtimeStyle.left = e));
        return d === "" ? "auto" : d
    }), bv = bw || bx, f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
        var b = a.offsetWidth, c = a.offsetHeight;
        return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style.display || f.css(a, "display")) === "none"
    }, f.expr.filters.visible = function (a) {
        return !f.expr.filters.hidden(a)
    });
    var bz = /%20/g, bA = /\[\]$/, bB = /\r?\n/g, bC = /#.*$/, bD = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bE = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bF = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, bG = /^(?:GET|HEAD)$/, bH = /^\/\//,
        bI = /\?/, bJ = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bK = /^(?:select|textarea)/i, bL = /\s+/,
        bM = /([?&])_=[^&]*/, bN = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bO = f.fn.load, bP = {}, bQ = {},
        bR, bS, bT = ["*/"] + ["*"];
    try {
        bR = e.href
    } catch (bU) {
        bR = c.createElement("a"), bR.href = "", bR = bR.href
    }
    bS = bN.exec(bR.toLowerCase()) || [], f.fn.extend({
        load: function (a, c, d) {
            if (typeof a != "string" && bO) return bO.apply(this, arguments);
            if (!this.length) return this;
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
            var i = this;
            f.ajax({
                url: a, type: h, dataType: "html", data: c, complete: function (a, b, c) {
                    c = a.responseText, a.isResolved() && (a.done(function (a) {
                        c = a
                    }), i.html(g ? f("<div>").append(c.replace(bJ, "")).find(g) : c)), d && i.each(d, [c, b, a])
                }
            });
            return this
        }, serialize: function () {
            return f.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? f.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || bK.test(this.nodeName) || bE.test(this.type))
            }).map(function (a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                    return {name: b.name, value: a.replace(bB, "\r\n")}
                }) : {name: b.name, value: c.replace(bB, "\r\n")}
            }).get()
        }
    }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
        f.fn[b] = function (a) {
            return this.bind(b, a)
        }
    }), f.each(["get", "post"], function (a, c) {
        f[c] = function (a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({type: c, url: a, data: d, success: e, dataType: g})
        }
    }), f.extend({
        getScript: function (a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function (a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function (a, b) {
            b ? bX(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), bX(a, b);
            return a
        },
        ajaxSettings: {
            url: bR,
            isLocal: bF.test(bS[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bT
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": a.String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML},
            flatOptions: {context: !0, url: !0}
        },
        ajaxPrefilter: bV(bP),
        ajaxTransport: bV(bQ),
        ajax: function (a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
                    var o, r, u, w = c, x = l ? bZ(d, v, l) : b, y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
                            if (z = v.getResponseHeader("Etag")) f.etag[k] = z
                        }
                        if (a === 304) w = "notmodified", o = !0; else try {
                            r = b$(d, x), w = "success", o = !0
                        } catch (A) {
                            w = "parsererror", u = A
                        }
                    } else {
                        u = w;
                        if (!w || a) w = "error", a < 0 && (a = 0)
                    }
                    v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.resolveWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"))
                }
            }

            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c), e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f._Deferred(),
                j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {
                    readyState: 0, setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    }, getAllResponseHeaders: function () {
                        return s === 2 ? n : null
                    }, getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bD.exec(n)) o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    }, overrideMimeType: function (a) {
                        s || (d.mimeType = a);
                        return this
                    }, abort: function (a) {
                        a = a || "abort", p && p.abort(a), w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.done, v.statusCode = function (a) {
                if (a) {
                    var b;
                    if (s < 2) for (b in a) j[b] = [j[b], a[b]]; else b = a[v.status], v.then(b, b)
                }
                return this
            }, d.url = ((a || d.url) + "").replace(bC, "").replace(bH, bS[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bL), d.crossDomain == null && (r = bN.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bS[1] && r[2] == bS[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bS[3] || (bS[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bW(bP, d, c, v);
            if (s === 2) return !1;
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bG.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bI.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(), y = d.url.replace(bM, "$1_=" + x);
                    d.url = y + (y === d.url ? (bI.test(d.url) ? "&" : "?") + "_=" + x : "")
                }
            }
            (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bT + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) v.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {success: 1, error: 1, complete: 1}) v[u](d[u]);
            p = bW(bQ, d, c, v);
            if (!p) w(-1, "No Transport"); else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
                    v.abort("timeout")
                }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    s < 2 ? w(-1, z) : f.error(z)
                }
            }
            return v
        },
        param: function (a, c) {
            var d = [], e = function (a, b) {
                b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () {
                e(this.name, this.value)
            }); else for (var g in a) bY(g, a[g], c, e);
            return d.join("&").replace(bz, "+")
        }
    }), f.extend({active: 0, lastModified: {}, etag: {}});
    var b_ = f.now(), ca = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            return f.expando + "_" + b_++
        }
    }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ca.test(b.url) || e && ca.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h],
                j = b.url, k = b.data, l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(ca, l), b.url === j && (e && (k = k.replace(ca, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
                g = [a]
            }, d.always(function () {
                a[h] = i, g && f.isFunction(i) && a[h](g[0])
            }), b.converters["script json"] = function () {
                g || f.error(h + " was not called");
                return g[0]
            }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function (a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), f.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
            return {
                send: function (f, g) {
                    d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
                        if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success")
                    }, e.insertBefore(d, e.firstChild)
                }, abort: function () {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var cb = a.ActiveXObject ? function () {
        for (var a in cd) cd[a](0, 1)
    } : !1, cc = 0, cd;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ce() || cf()
    } : ce, function (a) {
        f.extend(f.support, {ajax: !!a, cors: !!a && "withCredentials" in a})
    }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
        if (!c.crossDomain || f.support.cors) {
            var d;
            return {
                send: function (e, g) {
                    var h = c.xhr(), i, j;
                    c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                    if (c.xhrFields) for (j in c.xhrFields) h[j] = c.xhrFields[j];
                    c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (j in e) h.setRequestHeader(j, e[j])
                    } catch (k) {
                    }
                    h.send(c.hasContent && c.data || null), d = function (a, e) {
                        var j, k, l, m, n;
                        try {
                            if (d && (e || h.readyState === 4)) {
                                d = b, i && (h.onreadystatechange = f.noop, cb && delete cd[i]);
                                if (e) h.readyState !== 4 && h.abort(); else {
                                    j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n), m.text = h.responseText;
                                    try {
                                        k = h.statusText
                                    } catch (o) {
                                        k = ""
                                    }
                                    !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                }
                            }
                        } catch (p) {
                            e || g(-1, p)
                        }
                        m && g(j, k, m, l)
                    }, !c.async || h.readyState === 4 ? d() : (i = ++cc, cb && (cd || (cd = {}, f(a).unload(cb)), cd[i] = d), h.onreadystatechange = d)
                }, abort: function () {
                    d && d(0, 1)
                }
            }
        }
    });
    var cg = {}, ch, ci, cj = /^(?:toggle|show|hide)$/, ck = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, cl,
        cm = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
        cn;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0) return this.animate(cq("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++) d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cr(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        }, hide: function (a, b, c) {
            if (a || a === 0) return this.animate(cq("hide", 3), a, b, c);
            for (var d = 0, e = this.length; d < e; d++) if (this[d].style) {
                var g = f.css(this[d], "display");
                g !== "none" && !f._data(this[d], "olddisplay") && f._data(this[d], "olddisplay", g)
            }
            for (d = 0; d < e; d++) this[d].style && (this[d].style.display = "none");
            return this
        }, _toggle: f.fn.toggle, toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(cq("toggle", 3), a, b, c);
            return this
        }, fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return this[e.queue === !1 ? "each" : "queue"](function () {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m,
                    n, o;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]), h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (f.support.inlineBlockNeedsLayout ? (j = cr(this.nodeName), j === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline", this.style.zoom = 1)) : this.style.display = "inline-block"))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a) k = new f.fx(this, b, i), h = a[i], cj.test(h) ? k[h === "toggle" ? d ? "show" : "hide" : h]() : (l = ck.exec(h), m = k.cur(), l ? (n = parseFloat(l[2]), o = l[3] || (f.cssNumber[i] ? "" : "px"), o !== "px" && (f.style(this, i, (n || 1) + o), m = (n || 1) / k.cur() * m, f.style(this, i, m + o)), l[1] && (n = (l[1] === "-=" ? -1 : 1) * n + m), k.custom(m, n, o)) : k.custom(m, h, ""));
                return !0
            })
        }, stop: function (a, b) {
            a && this.queue([]), this.each(function () {
                var a = f.timers, c = a.length;
                b || f._unmark(!0, this);
                while (c--) a[c].elem === this && (b && a[c](!0), a.splice(c, 1))
            }), b || this.dequeue();
            return this
        }
    }), f.each({
        slideDown: cq("show", 1),
        slideUp: cq("hide", 1),
        slideToggle: cq("toggle", 1),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        f.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function (a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) && b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default, d.old = d.complete, d.complete = function (a) {
                f.isFunction(d.old) && d.old.call(this), d.queue !== !1 ? f.dequeue(this) : a !== !1 && f._unmark(this)
            };
            return d
        }, easing: {
            linear: function (a, b, c, d) {
                return c + d * a
            }, swing: function (a, b, c, d) {
                return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
            }
        }, timers: [], fx: function (a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {}
        }
    }), f.fx.prototype = {
        update: function () {
            this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this)
        }, cur: function () {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
        }, custom: function (a, b, c) {
            function g(a) {
                return d.step(a)
            }

            var d = this, e = f.fx;
            this.startTime = cn || co(), this.start = a, this.end = b, this.unit = c || this.unit || (f.cssNumber[this.prop] ? "" : "px"), this.now = this.start, this.pos = this.state = 0, g.elem = this.elem, g() && f.timers.push(g) && !cl && (cl = setInterval(e.tick, e.interval))
        }, show: function () {
            this.options.orig[this.prop] = f.style(this.elem, this.prop), this.options.show = !0, this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show()
        }, hide: function () {
            this.options.orig[this.prop] = f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0)
        }, step: function (a) {
            var b = cn || co(), c = !0, d = this.elem, e = this.options, g, h;
            if (a || b >= e.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1, this.update(), e.animatedProperties[this.prop] = !0;
                for (g in e.animatedProperties) e.animatedProperties[g] !== !0 && (c = !1);
                if (c) {
                    e.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                        d.style["overflow" + b] = e.overflow[a]
                    }), e.hide && f(d).hide();
                    if (e.hide || e.show) for (var i in e.animatedProperties) f.style(d, i, e.orig[i]);
                    e.complete.call(d)
                }
                return !1
            }
            e.duration == Infinity ? this.now = b : (h = b - this.startTime, this.state = h / e.duration, this.pos = f.easing[e.animatedProperties[this.prop]](this.state, h, 0, 1, e.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function () {
            for (var a = f.timers, b = 0; b < a.length; ++b) a[b]() || a.splice(b--, 1);
            a.length || f.fx.stop()
        }, interval: 13, stop: function () {
            clearInterval(cl), cl = null
        }, speeds: {slow: 600, fast: 200, _default: 400}, step: {
            opacity: function (a) {
                f.style(a.elem, "opacity", a.now)
            }, _default: function (a) {
                a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
            }
        }
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
        return f.grep(f.timers, function (b) {
            return a === b.elem
        }).length
    });
    var cs = /^t(?:able|d|h)$/i, ct = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? f.fn.offset = function (a) {
        var b = this[0], c;
        if (a) return this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        try {
            c = b.getBoundingClientRect()
        } catch (d) {
        }
        var e = b.ownerDocument, g = e.documentElement;
        if (!c || !f.contains(g, b)) return c ? {top: c.top, left: c.left} : {top: 0, left: 0};
        var h = e.body, i = cu(e), j = g.clientTop || h.clientTop || 0, k = g.clientLeft || h.clientLeft || 0,
            l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop,
            m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft, n = c.top + l - j,
            o = c.left + m - k;
        return {top: n, left: o}
    } : f.fn.offset = function (a) {
        var b = this[0];
        if (a) return this.each(function (b) {
            f.offset.setOffset(this, a, b)
        });
        if (!b || !b.ownerDocument) return null;
        if (b === b.ownerDocument.body) return f.offset.bodyOffset(b);
        f.offset.initialize();
        var c, d = b.offsetParent, e = b, g = b.ownerDocument, h = g.documentElement, i = g.body, j = g.defaultView,
            k = j ? j.getComputedStyle(b, null) : b.currentStyle, l = b.offsetTop, m = b.offsetLeft;
        while ((b = b.parentNode) && b !== i && b !== h) {
            if (f.offset.supportsFixedPosition && k.position === "fixed") break;
            c = j ? j.getComputedStyle(b, null) : b.currentStyle, l -= b.scrollTop, m -= b.scrollLeft, b === d && (l += b.offsetTop, m += b.offsetLeft, f.offset.doesNotAddBorder && (!f.offset.doesAddBorderForTableAndCells || !cs.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), e = d, d = b.offsetParent), f.offset.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0, m += parseFloat(c.borderLeftWidth) || 0), k = c
        }
        if (k.position === "relative" || k.position === "static") l += i.offsetTop, m += i.offsetLeft;
        f.offset.supportsFixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop), m += Math.max(h.scrollLeft, i.scrollLeft));
        return {top: l, left: m}
    }, f.offset = {
        initialize: function () {
            var a = c.body, b = c.createElement("div"), d, e, g, h, i = parseFloat(f.css(a, "marginTop")) || 0,
                j = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
            f.extend(b.style, {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            }), b.innerHTML = j, a.insertBefore(b, a.firstChild), d = b.firstChild, e = d.firstChild, h = d.nextSibling.firstChild.firstChild, this.doesNotAddBorder = e.offsetTop !== 5, this.doesAddBorderForTableAndCells = h.offsetTop === 5, e.style.position = "fixed", e.style.top = "20px", this.supportsFixedPosition = e.offsetTop === 20 || e.offsetTop === 15, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", this.subtractsBorderForOverflowNotVisible = e.offsetTop === -5, this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== i, a.removeChild(b), f.offset.initialize = f.noop
        }, bodyOffset: function (a) {
            var b = a.offsetTop, c = a.offsetLeft;
            f.offset.initialize(), f.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
            return {top: b, left: c}
        }, setOffset: function (a, b, c) {
            var d = f.css(a, "position");
            d === "static" && (a.style.position = "relative");
            var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"),
                j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
            j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k)
        }
    }, f.fn.extend({
        position: function () {
            if (!this[0]) return null;
            var a = this[0], b = this.offsetParent(), c = this.offset(),
                d = ct.test(b[0].nodeName) ? {top: 0, left: 0} : b.offset();
            c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
            return {top: c.top - d.top, left: c.left - d.left}
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || c.body;
                while (a && !ct.test(a.nodeName) && f.css(a, "position") === "static") a = a.offsetParent;
                return a
            })
        }
    }), f.each(["Left", "Top"], function (a, c) {
        var d = "scroll" + c;
        f.fn[d] = function (c) {
            var e, g;
            if (c === b) {
                e = this[0];
                if (!e) return null;
                g = cu(e);
                return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
            }
            return this.each(function () {
                g = cu(this), g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
            })
        }
    }), f.each(["Height", "Width"], function (a, c) {
        var d = c.toLowerCase();
        f.fn["inner" + c] = function () {
            var a = this[0];
            return a && a.style ? parseFloat(f.css(a, d, "padding")) : null
        }, f.fn["outer" + c] = function (a) {
            var b = this[0];
            return b && b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : null
        }, f.fn[d] = function (a) {
            var e = this[0];
            if (!e) return a == null ? null : this;
            if (f.isFunction(a)) return this.each(function (b) {
                var c = f(this);
                c[d](a.call(this, b, c[d]()))
            });
            if (f.isWindow(e)) {
                var g = e.document.documentElement["client" + c], h = e.document.body;
                return e.document.compatMode === "CSS1Compat" && g || h && h["client" + c] || g
            }
            if (e.nodeType === 9) return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
            if (a === b) {
                var i = f.css(e, d), j = parseFloat(i);
                return f.isNaN(j) ? i : j
            }
            return this.css(d, typeof a == "string" ? a : a + "px")
        }
    }), a.jQuery = a.$ = f
})(window);/*!
 * jQuery blockUI plugin
 * Version 2.33 (29-MAR-2010)
 * @requires jQuery v1.2.3 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2008 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function ($) {

    if (/1\.(0|1|2)\.(0|1|2)/.test($.fn.jquery) || /^1.1/.test($.fn.jquery)) {
        alert('blockUI requires jQuery v1.2.3 or later!  You are using v' + $.fn.jquery);
        return;
    }

    $.fn._fadeIn = $.fn.fadeIn;

    var noOp = function () {
    };

// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
// retarded userAgent strings on Vista)
    var mode = document.documentMode || 0;
    var setExpr = $.browser.msie && (($.browser.version < 8 && !mode) || mode < 8);
    var ie6 = $.browser.msie && /MSIE 6.0/.test(navigator.userAgent) && !mode;

// global $ methods for blocking/unblocking the entire page
    $.blockUI = function (opts) {
        install(window, opts);
    };
    $.unblockUI = function (opts) {
        remove(window, opts);
    };

// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
    $.growlUI = function (title, message, timeout, onClose) {
        var $m = $('<div class="growlUI"></div>');
        if (title) $m.append('<h1>' + title + '</h1>');
        if (message) $m.append('<h2>' + message + '</h2>');
        if (timeout == undefined) timeout = 3000;
        $.blockUI({
            message: $m, fadeIn: 700, fadeOut: 1000, centerY: false,
            timeout: timeout, showOverlay: false,
            onUnblock: onClose,
            css: $.blockUI.defaults.growlCSS
        });
    };

// plugin method for blocking element content
    $.fn.block = function (opts) {
        return this.unblock({fadeOut: 0}).each(function () {
            if ($.css(this, 'position') == 'static')
                this.style.position = 'relative';
            if ($.browser.msie)
                this.style.zoom = 1; // force 'hasLayout'
            install(this, opts);
        });
    };

// plugin method for unblocking element content
    $.fn.unblock = function (opts) {
        return this.each(function () {
            remove(this, opts);
        });
    };

    $.blockUI.version = 2.33; // 2nd generation blocking at no extra cost!

// override these in your code to change the default behavior and style
    $.blockUI.defaults = {
        // message displayed when blocking (use null for no message)
        message: '<h1>Please wait...</h1>',

        title: null,	  // title string; only used when theme == true
        draggable: true,  // only used when theme == true (requires jquery-ui.js to be loaded)

        theme: false, // set to true to use with jQuery UI themes

        // styles for the message when blocking; if you wish to disable
        // these and use an external stylesheet then do this in your code:
        // $.blockUI.defaults.css = {};
        css: {
            padding: 0,
            margin: 0,
            width: '30%',
            top: '40%',
            left: '35%',
            textAlign: 'center',
            color: '#000',
            border: '3px solid #aaa',
            backgroundColor: '#fff',
            cursor: 'wait'
        },

        // minimal style set used when themes are used
        themedCSS: {
            width: '30%',
            top: '40%',
            left: '35%'
        },

        // styles for the overlay
        overlayCSS: {
            backgroundColor: '#000',
            opacity: 0.3,
            cursor: 'wait'
        },

        // styles applied when using $.growlUI
        growlCSS: {
            width: '350px',
            top: '10px',
            left: '',
            right: '10px',
            border: 'none',
            padding: '5px',
            opacity: 0.6,
            cursor: 'default',
            color: '#fff',
            backgroundColor: '#000',
            '-webkit-border-radius': '10px',
            '-moz-border-radius': '10px',
            'border-radius': '10px'
        },

        // IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
        // (hat tip to Jorge H. N. de Vasconcelos)
        iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

        // force usage of iframe in non-IE browsers (handy for blocking applets)
        forceIframe: false,

        // z-index for the blocking overlay
        baseZ: 660,

        // set these to true to have the message automatically centered
        centerX: true, // <-- only effects element blocking (page block controlled via css above)
        centerY: true,

        // allow body element to be stetched in ie6; this makes blocking look better
        // on "short" pages.  disable if you wish to prevent changes to the body height
        allowBodyStretch: true,

        // enable if you want key and mouse events to be disabled for content that is blocked
        bindEvents: true,

        // be default blockUI will supress tab navigation from leaving blocking content
        // (if bindEvents is true)
        constrainTabKey: true,

        // fadeIn time in millis; set to 0 to disable fadeIn on block
        fadeIn: 0, //200

        // fadeOut time in millis; set to 0 to disable fadeOut on unblock
        fadeOut: 0, //400

        // time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
        timeout: 0,

        // disable if you don't want to show the overlay
        showOverlay: true,

        // if true, focus will be placed in the first available input field when
        // page blocking
        focusInput: true,

        // suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
        applyPlatformOpacityRules: false, //true,

        // callback method invoked when fadeIn has completed and blocking message is visible
        onBlock: null,

        // callback method invoked when unblocking has completed; the callback is
        // passed the element that has been unblocked (which is the window object for page
        // blocks) and the options that were passed to the unblock call:
        //	 onUnblock(element, options)
        onUnblock: null,

        // don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
        quirksmodeOffsetHack: 4
    };

// private data and functions follow...

    var pageBlock = null;
    var pageBlockEls = [];

    function install(el, opts) {
        var full = (el == window);
        var msg = opts && opts.message !== undefined ? opts.message : undefined;
        opts = $.extend({}, $.blockUI.defaults, opts || {});
        opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
        var css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
        var themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
        msg = msg === undefined ? opts.message : msg;

        // remove the current block (if there is one)
        if (full && pageBlock)
            remove(window, {fadeOut: 0});

        // if an existing element is being used as the blocking content then we capture
        // its current place in the DOM (and current display style) so we can restore
        // it when we unblock
        if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
            var node = msg.jquery ? msg[0] : msg;
            var data = {};
            $(el).data('blockUI.history', data);
            data.el = node;
            data.parent = node.parentNode;
            data.display = node.style.display;
            data.position = node.style.position;
            if (data.parent)
                data.parent.removeChild(node);
        }

        var z = opts.baseZ;

        // blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
        // layer1 is the iframe layer which is used to supress bleed through of underlying content
        // layer2 is the overlay layer which has opacity and a wait cursor (by default)
        // layer3 is the message content that is displayed while blocking

        var lyr1 = ($.browser.msie || opts.forceIframe)
            ? $('<iframe class="blockUI" style="z-index:' + (z++) + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + opts.iframeSrc + '"></iframe>')
            : $('<div class="blockUI" style="display:none"></div>');
        var lyr2 = $('<div class="blockUI blockOverlay" style="z-index:' + (z++) + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');

        var lyr3, s;
        if (opts.theme && full) {
            s = '<div class="blockUI blockMsg blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + z + ';display:none;position:fixed">' +
                '<div class="ui-widget-header ui-dialog-titlebar blockTitle">' + (opts.title || '&nbsp;') + '</div>' +
                '<div class="ui-widget-content ui-dialog-content"></div>' +
                '</div>';
        } else if (opts.theme) {
            s = '<div class="blockUI blockMsg blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + z + ';display:none;position:absolute">' +
                '<div class="ui-widget-header ui-dialog-titlebar blockTitle">' + (opts.title || '&nbsp;') + '</div>' +
                '<div class="ui-widget-content ui-dialog-content"></div>' +
                '</div>';
        } else if (full) {
            s = '<div class="blockUI blockMsg blockPage" style="z-index:' + z + ';display:none;position:fixed"></div>';
        } else {
            s = '<div class="blockUI blockMsg blockElement" style="z-index:' + z + ';display:none;position:absolute"></div>';
        }
        lyr3 = $(s);

        // if we have a message, style it
        if (msg) {
            if (opts.theme) {
                lyr3.css(themedCSS);
                lyr3.addClass('ui-widget-content');
            } else
                lyr3.css(css);
        }

        // style the overlay
        if (!opts.applyPlatformOpacityRules || !($.browser.mozilla && /Linux/.test(navigator.platform)))
            lyr2.css(opts.overlayCSS);
        lyr2.css('position', full ? 'fixed' : 'absolute');

        // make iframe layer transparent in IE
        if ($.browser.msie || opts.forceIframe)
            lyr1.css('opacity', 0.0);

        //$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
        var layers = [lyr1, lyr2, lyr3], $par = full ? $('body') : $(el);
        $.each(layers, function () {
            this.appendTo($par);
        });

        if (opts.theme && opts.draggable && $.fn.draggable) {
            lyr3.draggable({
                handle: '.ui-dialog-titlebar',
                cancel: 'li'
            });
        }

        // ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
        var expr = setExpr && (!$.boxModel || $('object,embed', full ? null : el).length > 0);
        if (ie6 || expr) {
            // give body 100% height
            if (full && opts.allowBodyStretch && $.boxModel)
                $('html,body').css('height', '100%');

            // fix ie6 issue when blocked element has a border width
            if ((ie6 || !$.boxModel) && !full) {
                var t = sz(el, 'borderTopWidth'), l = sz(el, 'borderLeftWidth');
                var fixT = t ? '(0 - ' + t + ')' : 0;
                var fixL = l ? '(0 - ' + l + ')' : 0;
            }

            // simulate fixed position
            $.each([lyr1, lyr2, lyr3], function (i, o) {
                var s = o[0].style;
                s.position = 'absolute';
                if (i < 2) {
                    full ? s.setExpression('height', 'Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.boxModel?0:' + opts.quirksmodeOffsetHack + ') + "px"')
                        : s.setExpression('height', 'this.parentNode.offsetHeight + "px"');
                    full ? s.setExpression('width', 'jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"')
                        : s.setExpression('width', 'this.parentNode.offsetWidth + "px"');
                    if (fixL) s.setExpression('left', fixL);
                    if (fixT) s.setExpression('top', fixT);
                } else if (opts.centerY) {
                    if (full) s.setExpression('top', '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
                    s.marginTop = 0;
                } else if (!opts.centerY && full) {
                    var top = (opts.css && opts.css.top) ? parseInt(opts.css.top) : 0;
                    var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + ' + top + ') + "px"';
                    s.setExpression('top', expression);
                }
            });
        }

        // show the message
        if (msg) {
            if (opts.theme)
                lyr3.find('.ui-widget-content').append(msg);
            else
                lyr3.append(msg);
            if (msg.jquery || msg.nodeType)
                $(msg).show();
        }

        if (($.browser.msie || opts.forceIframe) && opts.showOverlay)
            lyr1.show(); // opacity is zero
        if (opts.fadeIn) {
            var cb = opts.onBlock ? opts.onBlock : noOp;
            var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
            var cb2 = msg ? cb : noOp;
            if (opts.showOverlay)
                lyr2._fadeIn(opts.fadeIn, cb1);
            if (msg)
                lyr3._fadeIn(opts.fadeIn, cb2);
        } else {
            if (opts.showOverlay)
                lyr2.show();
            if (msg)
                lyr3.show();
            if (opts.onBlock)
                opts.onBlock();
        }

        // bind key and mouse events
        bind(1, el, opts);

        if (full) {
            pageBlock = lyr3[0];
            pageBlockEls = $(':input:enabled:visible', pageBlock);
            if (opts.focusInput)
                setTimeout(focus, 20);
        } else
            center(lyr3[0], opts.centerX, opts.centerY);

        if (opts.timeout) {
            // auto-unblock
            var to = setTimeout(function () {
                full ? $.unblockUI(opts) : $(el).unblock(opts);
            }, opts.timeout);
            $(el).data('blockUI.timeout', to);
        }
    };

// remove the block
    function remove(el, opts) {
        var full = (el == window);
        var $el = $(el);
        var data = $el.data('blockUI.history');
        var to = $el.data('blockUI.timeout');
        if (to) {
            clearTimeout(to);
            $el.removeData('blockUI.timeout');
        }
        opts = $.extend({}, $.blockUI.defaults, opts || {});
        bind(0, el, opts); // unbind events

        var els;
        if (full) // crazy selector to handle odd field errors in ie6/7
            els = $('body').children().filter('.blockUI').add('body > .blockUI');
        else
            els = $('.blockUI', el);

        if (full)
            pageBlock = pageBlockEls = null;

        if (opts.fadeOut) {
            els.fadeOut(opts.fadeOut);
            setTimeout(function () {
                reset(els, data, opts, el);
            }, opts.fadeOut);
        } else
            reset(els, data, opts, el);
    };

// move blocking element back into the DOM where it started
    function reset(els, data, opts, el) {
        els.each(function (i, o) {
            // remove via DOM calls so we don't lose event handlers
            if (this.parentNode)
                this.parentNode.removeChild(this);
        });

        if (data && data.el) {
            data.el.style.display = data.display;
            data.el.style.position = data.position;
            if (data.parent)
                data.parent.appendChild(data.el);
            $(el).removeData('blockUI.history');
        }

        if (typeof opts.onUnblock == 'function')
            opts.onUnblock(el, opts);
    };

// bind/unbind the handler
    function bind(b, el, opts) {
        var full = el == window, $el = $(el);

        // don't bother unbinding if there is nothing to unbind
        if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
            return;
        if (!full)
            $el.data('blockUI.isBlocked', b);

        // don't bind events when overlay is not in use or if bindEvents is false
        if (!opts.bindEvents || (b && !opts.showOverlay))
            return;

        // bind anchors and inputs for mouse and key events
        var events = 'mousedown mouseup keydown keypress';
        b ? $(document).bind(events, opts, handler) : $(document).unbind(events, handler);

// former impl...
//	   var $e = $('a,:input');
//	   b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
    };

// event handler to suppress keyboard/mouse events when blocking
    function handler(e) {
        // allow tab navigation (conditionally)
        if (e.keyCode && e.keyCode == 9) {
            if (pageBlock && e.data.constrainTabKey) {
                var els = pageBlockEls;
                var fwd = !e.shiftKey && e.target == els[els.length - 1];
                var back = e.shiftKey && e.target == els[0];
                if (fwd || back) {
                    setTimeout(function () {
                        focus(back)
                    }, 10);
                    return false;
                }
            }
        }
        // allow events within the message content
        if ($(e.target).parents('div.blockMsg').length > 0)
            return true;

        // allow events for content that is not being blocked
        return $(e.target).parents().children().filter('div.blockUI').length == 0;
    };

    function focus(back) {
        if (!pageBlockEls)
            return;
        var e = pageBlockEls[back === true ? pageBlockEls.length - 1 : 0];
        if (e)
            e.focus();
    };

    function center(el, x, y) {
        var p = el.parentNode, s = el.style;
        var l = ((p.offsetWidth - el.offsetWidth) / 2) - sz(p, 'borderLeftWidth');
        var t = ((p.offsetHeight - el.offsetHeight) / 2) - sz(p, 'borderTopWidth');
        if (x) s.left = l > 0 ? (l + 'px') : '0';
        if (y) s.top = t > 0 ? (t + 'px') : '0';
    };

    function sz(el, p) {
        return parseInt($.css(el, p)) || 0;
    };

})(jQuery);
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};/*
 * jQuery.appear
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 *
 * 06.09.2011 hac support for 'earlyload' added
 *
 * 12.09.2011 hac,peet dont fire for "$.fn.appear.run()" if "attr" was called with 1 arg
 *
*/
(function ($) {

    $.fn.appear = function (fn, options) {

        var settings = $.extend({

            //arbitrary data to pass to fn
            data: undefined,

            //call fn only on the first appear?
            one: true

        }, options);

        return this.each(function () {

            var t = $(this);

            //whether the element is currently visible
            t.appeared = false;

            if (!fn) {

                //trigger the custom event
                t.trigger('appear', settings.data);
                return;
            }

            var w = $(window);

            //fires the appear event when appropriate
            var check = function () {

                //is the element hidden?
                if (!t.is(':visible')) {

                    //it became hidden
                    t.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;
                var wh = w.height();
                var whd = t.attr('earlyload') ? wh : 0;

//if () {
//console.log("tag" + tag + "href " + href + " y " + y + " th " + t.height() + " b " + b + " wh " + wh + " whd " + whd + " x " + x + "tw " + t.width() + " a " +  a + " ww " + w.width() );
//}

                if (y + t.height() >= b - whd &&
                    y <= b + wh + whd &&
                    x + t.width() >= a &&
                    x <= a + w.width()) {

                    //trigger the custom event
                    if (!t.appeared) t.trigger('appear', settings.data);
                } else {

                    //it scrolled out of view
                    t.appeared = false;
                }
            };

            //create a modified fn with some additional logic
            var modifiedFn = function () {

                //mark the element as visible
                t.appeared = true;

                //is this supposed to happen only once?
                if (settings.one) {

                    //remove the check
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }

                //trigger the original fn
                fn.apply(this, arguments);
            };

            //bind the modified fn to the element
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);

            //check whenever the window scrolls
            w.scroll(check);

            //check whenever the dom changes
            $.fn.appear.checks.push(check);

            //check now
            (check)();
        });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {

        checks: [],
        timeout: null,

        //process the queue
        checkAll: function () {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        //check the queue asynchronously
        run: function () {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    //run checks when these methods are called
    $.each(['append', 'prepend', 'after', 'before',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function (i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function () {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });

    //run checks when these methods are called with > 1 args only
    /* dont matter for us
  $.each(['attr'
         ], function(i, n) {
    var old = $.fn[n];
    if (old) {
      $.fn[n] = function() {
        var r = old.apply(this, arguments);
        if (arguments.length > 1) {
            $.fn.appear.run();
        }
        return r;
      }
    }
  });
*/

})(jQuery);
/* jTemplates 0.7.8 (http://jtemplates.tpython.com) Copyright (c) 2009 Tomasz Gloc */
eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--) r[e(c)] = k[c] || e(c);
        k = [function (e) {
            return r[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    }
    ;
    while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('a(37.b&&!37.b.38){(9(b){6 m=9(s,A,f){5.1M=[];5.1u={};5.2p=E;5.1N={};5.1c={};5.f=b.1m({1Z:1f,3a:1O,2q:1f,2r:1f,3b:1O,3c:1O},f);5.1v=(5.f.1v!==F)?(5.f.1v):(13.20);5.Y=(5.f.Y!==F)?(5.f.Y):(13.3d);5.3e(s,A);a(s){5.1w(5.1c[\'21\'],A,5.f)}5.1c=E};m.y.2s=\'0.7.8\';m.R=1O;m.y.3e=9(s,A){6 2t=/\\{#14 *(\\w*?)( .*)*\\}/g;6 22,1x,M;6 1y=E;6 2u=[];2v((22=2t.3N(s))!=E){1y=2t.1y;1x=22[1];M=s.2w(\'{#/14 \'+1x+\'}\',1y);a(M==-1){C j Z(\'15: m "\'+1x+\'" 2x 23 3O.\');}5.1c[1x]=s.2y(1y,M);2u[1x]=13.2z(22[2])}a(1y===E){5.1c[\'21\']=s;c}N(6 i 24 5.1c){a(i!=\'21\'){5.1N[i]=j m()}}N(6 i 24 5.1c){a(i!=\'21\'){5.1N[i].1w(5.1c[i],b.1m({},A||{},5.1N||{}),b.1m({},5.f,2u[i]));5.1c[i]=E}}};m.y.1w=9(s,A,f){a(s==F){5.1M.B(j 1g(\'\',1,5));c}s=s.U(/[\\n\\r]/g,\'\');s=s.U(/\\{\\*.*?\\*\\}/g,\'\');5.2p=b.1m({},5.1N||{},A||{});5.f=j 2A(f);6 p=5.1M;6 1P=s.1h(/\\{#.*?\\}/g);6 16=0,M=0;6 e;6 1i=0;6 25=0;N(6 i=0,l=(1P)?(1P.V):(0);i<l;++i){6 17=1P[i];a(1i){M=s.2w(\'{#/1z}\');a(M==-1){C j Z("15: 3P 1Q 3f 1z.");}a(M>16){p.B(j 1g(s.2y(16,M),1,5))}16=M+11;1i=0;i=b.3Q(\'{#/1z}\',1P);1R}M=s.2w(17,16);a(M>16){p.B(j 1g(s.2y(16,M),1i,5))}6 3R=17.1h(/\\{#([\\w\\/]+).*?\\}/);6 26=I.$1;2B(26){q\'3S\':++25;p.27();q\'a\':e=j 1A(17,p);p.B(e);p=e;D;q\'J\':p.27();D;q\'/a\':2v(25){p=p.28();--25}q\'/N\':q\'/29\':p=p.28();D;q\'29\':e=j 1n(17,p,5);p.B(e);p=e;D;q\'N\':e=2a(17,p,5);p.B(e);p=e;D;q\'1R\':q\'D\':p.B(j 18(26));D;q\'2C\':p.B(j 2D(17,5.2p));D;q\'h\':p.B(j 2E(17));D;q\'2F\':p.B(j 2G(17));D;q\'3T\':p.B(j 1g(\'{\',1,5));D;q\'3U\':p.B(j 1g(\'}\',1,5));D;q\'1z\':1i=1;D;q\'/1z\':a(m.R){C j Z("15: 3V 2H 3f 1z.");}D;2I:a(m.R){C j Z(\'15: 3W 3X: \'+26+\'.\');}}16=M+17.V}a(s.V>16){p.B(j 1g(s.3Y(16),1i,5))}};m.y.K=9(d,h,z,H){++H;6 $T=d,2b,2c;a(5.f.3b){$T=5.1v(d,{2d:(5.f.3a&&H==1),1S:5.f.1Z},5.Y)}a(!5.f.3c){2b=5.1u;2c=h}J{2b=5.1v(5.1u,{2d:(5.f.2q),1S:1f},5.Y);2c=5.1v(h,{2d:(5.f.2q&&H==1),1S:1f},5.Y)}6 $P=b.1m({},2b,2c);6 $Q=(z!=F)?(z):({});$Q.2s=5.2s;6 19=\'\';N(6 i=0,l=5.1M.V;i<l;++i){19+=5.1M[i].K($T,$P,$Q,H)}--H;c 19};m.y.2J=9(1T,1o){5.1u[1T]=1o};13=9(){};13.3d=9(3g){c 3g.U(/&/g,\'&3Z;\').U(/>/g,\'&3h;\').U(/</g,\'&3i;\').U(/"/g,\'&40;\').U(/\'/g,\'&#39;\')};13.20=9(d,1B,Y){a(d==E){c d}2B(d.2K){q 2A:6 o={};N(6 i 24 d){o[i]=13.20(d[i],1B,Y)}a(!1B.1S){a(d.41("2L"))o.2L=d.2L}c o;q 42:6 o=[];N(6 i=0,l=d.V;i<l;++i){o[i]=13.20(d[i],1B,Y)}c o;q 2M:c(1B.2d)?(Y(d)):(d);q 43:a(1B.1S){a(m.R)C j Z("15: 44 45 23 46.");J c F}2I:c d}};13.2z=9(2e){a(2e===E||2e===F){c{}}6 o=2e.47(/[= ]/);a(o[0]===\'\'){o.48()}6 2N={};N(6 i=0,l=o.V;i<l;i+=2){2N[o[i]]=o[i+1]}c 2N};6 1g=9(2O,1i,14){5.2f=2O;5.3j=1i;5.1d=14};1g.y.K=9(d,h,z,H){6 2g=5.2f;a(!5.3j){6 2P=5.1d;6 $T=d;6 $P=h;6 $Q=z;2g=2g.U(/\\{(.*?)\\}/g,9(49,3k){1C{6 1D=10(3k);a(1E 1D==\'9\'){a(2P.f.1Z||!2P.f.2r){c\'\'}J{1D=1D($T,$P,$Q)}}c(1D===F)?(""):(2M(1D))}1F(e){a(m.R){a(e 1G 18)e.1j="4a";C e;}c""}})}c 2g};6 1A=9(L,1H){5.2h=1H;L.1h(/\\{#(?:J)*a (.*?)\\}/);5.3l=I.$1;5.1p=[];5.1q=[];5.1I=5.1p};1A.y.B=9(e){5.1I.B(e)};1A.y.28=9(){c 5.2h};1A.y.27=9(){5.1I=5.1q};1A.y.K=9(d,h,z,H){6 $T=d;6 $P=h;6 $Q=z;6 19=\'\';1C{6 2Q=(10(5.3l))?(5.1p):(5.1q);N(6 i=0,l=2Q.V;i<l;++i){19+=2Q[i].K(d,h,z,H)}}1F(e){a(m.R||(e 1G 18))C e;}c 19};2a=9(L,1H,14){a(L.1h(/\\{#N (\\w+?) *= *(\\S+?) +4b +(\\S+?) *(?:12=(\\S+?))*\\}/)){L=\'{#29 2a.3m 3n \'+I.$1+\' 2H=\'+(I.$2||0)+\' 1Q=\'+(I.$3||-1)+\' 12=\'+(I.$4||1)+\' u=$T}\';c j 1n(L,1H,14)}J{C j Z(\'15: 4c 4d "3o": \'+L);}};2a.3m=9(i){c i};6 1n=9(L,1H,14){5.2h=1H;5.1d=14;L.1h(/\\{#29 (.+?) 3n (\\w+?)( .+)*\\}/);5.3p=I.$1;5.x=I.$2;5.W=I.$3||E;5.W=13.2z(5.W);5.1p=[];5.1q=[];5.1I=5.1p};1n.y.B=9(e){5.1I.B(e)};1n.y.28=9(){c 5.2h};1n.y.27=9(){5.1I=5.1q};1n.y.K=9(d,h,z,H){1C{6 $T=d;6 $P=h;6 $Q=z;6 1r=10(5.3p);6 1U=[];6 1J=1E 1r;a(1J==\'3q\'){6 2R=[];b.1e(1r,9(k,v){1U.B(k);2R.B(v)});1r=2R}6 u=(5.W.u!==F)?(10(5.W.u)):(($T!=E)?($T):({}));6 s=1V(10(5.W.2H)||0),e;6 12=1V(10(5.W.12)||1);a(1J!=\'9\'){e=1r.V}J{a(5.W.1Q===F||5.W.1Q===E){e=1V.4e}J{e=1V(10(5.W.1Q))+((12>0)?(1):(-1))}}6 19=\'\';6 i,l;a(5.W.1W){6 2S=s+1V(10(5.W.1W));e=(2S>e)?(e):(2S)}a((e>s&&12>0)||(e<s&&12<0)){6 1K=0;6 3r=(1J!=\'9\')?(4f.4g((e-s)/12)):F;6 1s,1k;N(;((12>0)?(s<e):(s>e));s+=12,++1K){1s=1U[s];a(1J!=\'9\'){1k=1r[s]}J{1k=1r(s);a(1k===F||1k===E){D}}a((1E 1k==\'9\')&&(5.1d.f.1Z||!5.1d.f.2r)){1R}a((1J==\'3q\')&&(1s 24 2A)){1R}6 3s=u[5.x];u[5.x]=1k;u[5.x+\'$3t\']=s;u[5.x+\'$1K\']=1K;u[5.x+\'$3u\']=(1K==0);u[5.x+\'$3v\']=(s+12>=e);u[5.x+\'$3w\']=3r;u[5.x+\'$1U\']=(1s!==F&&1s.2K==2M)?(5.1d.Y(1s)):(1s);u[5.x+\'$1E\']=1E 1k;N(i=0,l=5.1p.V;i<l;++i){1C{19+=5.1p[i].K(u,h,z,H)}1F(2T){a(2T 1G 18){2B(2T.1j){q\'1R\':i=l;D;q\'D\':i=l;s=e;D;2I:C e;}}J{C e;}}}1l u[5.x+\'$3t\'];1l u[5.x+\'$1K\'];1l u[5.x+\'$3u\'];1l u[5.x+\'$3v\'];1l u[5.x+\'$3w\'];1l u[5.x+\'$1U\'];1l u[5.x+\'$1E\'];1l u[5.x];u[5.x]=3s}}J{N(i=0,l=5.1q.V;i<l;++i){19+=5.1q[i].K($T,h,z,H)}}c 19}1F(e){a(m.R||(e 1G 18))C e;c""}};6 18=9(1j){5.1j=1j};18.y=Z;18.y.K=9(d){C 5;};6 2D=9(L,A){L.1h(/\\{#2C (.*?)(?: 4h=(.*?))?\\}/);5.1d=A[I.$1];a(5.1d==F){a(m.R)C j Z(\'15: 4i 3o 2C: \'+I.$1);}5.3x=I.$2};2D.y.K=9(d,h,z,H){6 $T=d;6 $P=h;1C{c 5.1d.K(10(5.3x),h,z,H)}1F(e){a(m.R||(e 1G 18))C e;}c\'\'};6 2E=9(L){L.1h(/\\{#h 1T=(\\w*?) 1o=(.*?)\\}/);5.x=I.$1;5.2f=I.$2};2E.y.K=9(d,h,z,H){6 $T=d;6 $P=h;6 $Q=z;1C{h[5.x]=10(5.2f)}1F(e){a(m.R||(e 1G 18))C e;h[5.x]=F}c\'\'};6 2G=9(L){L.1h(/\\{#2F 4j=(.*?)\\}/);5.2U=10(I.$1);5.2V=5.2U.V;a(5.2V<=0){C j Z(\'15: 2F 4k 4l 4m\');}5.2W=0;5.2X=-1};2G.y.K=9(d,h,z,H){6 2Y=b.O(z,\'1X\');a(2Y!=5.2X){5.2X=2Y;5.2W=0}6 i=5.2W++%5.2V;c 5.2U[i]};b.1a.1w=9(s,A,f){a(s.2K===m){c b(5).1e(9(){b.O(5,\'2i\',s);b.O(5,\'1X\',0)})}J{c b(5).1e(9(){b.O(5,\'2i\',j m(s,A,f));b.O(5,\'1X\',0)})}};b.1a.4n=9(1L,A,f){6 s=b.2Z({1t:1L,1Y:1f}).3y;c b(5).1w(s,A,f)};b.1a.4o=9(30,A,f){6 s=b(\'#\'+30).2O();a(s==E){s=b(\'#\'+30).3z();s=s.U(/&3i;/g,"<").U(/&3h;/g,">")}s=b.4p(s);s=s.U(/^<\\!\\[4q\\[([\\s\\S]*)\\]\\]>$/3A,\'$1\');s=s.U(/^<\\!--([\\s\\S]*)-->$/3A,\'$1\');c b(5).1w(s,A,f)};b.1a.4r=9(){6 1W=0;b(5).1e(9(){a(b.2j(5)){++1W}});c 1W};b.1a.4s=9(){b(5).3B();c b(5).1e(9(){b.3C(5,\'2i\')})};b.1a.2J=9(1T,1o){c b(5).1e(9(){6 t=b.2j(5);a(t===F){a(m.R)C j Z(\'15: m 2x 23 3D.\');J c}t.2J(1T,1o)})};b.1a.31=9(d,h){c b(5).1e(9(){6 t=b.2j(5);a(t===F){a(m.R)C j Z(\'15: m 2x 23 3D.\');J c}b.O(5,\'1X\',b.O(5,\'1X\')+1);b(5).3z(t.K(d,h,5,0))})};b.1a.4t=9(1L,h,G){6 X=5;G=b.1m({1j:\'4u\',1Y:1O,32:1f},G);b.2Z({1t:1L,1j:G.1j,O:G.O,3E:G.3E,1Y:G.1Y,32:G.32,3F:G.3F,4v:\'4w\',4x:9(d){6 r=b(X).31(d,h);a(G.2k){G.2k(r)}},4y:G.4z,4A:G.4B});c 5};6 2l=9(1t,h,2m,2n,1b,G){5.3G=1t;5.1u=h;5.3H=2m;5.3I=2n;5.1b=1b;5.3J=E;5.33=G||{};6 X=5;b(1b).1e(9(){b.O(5,\'34\',X)});5.35()};2l.y.35=9(){5.3K();a(5.1b.V==0){c}6 X=5;b.4C(5.3G,5.3I,9(d){6 r=b(X.1b).31(d,X.1u);a(X.33.2k){X.33.2k(r)}});5.3J=4D(9(){X.35()},5.3H)};2l.y.3K=9(){5.1b=b.3L(5.1b,9(o){a(b.4E.4F){6 n=o.36;2v(n&&n!=4G){n=n.36}c n!=E}J{c o.36!=E}})};b.1a.4H=9(1t,h,2m,2n,G){c j 2l(1t,h,2m,2n,5,G)};b.1a.3B=9(){c b(5).1e(9(){6 2o=b.O(5,\'34\');a(2o==E){c}6 X=5;2o.1b=b.3L(2o.1b,9(o){c o!=X});b.3C(5,\'34\')})};b.1m({38:9(s,A,f){c j m(s,A,f)},4I:9(1L,A,f){6 s=b.2Z({1t:1L,1Y:1f}).3y;c j m(s,A,f)},2j:9(z){c b.O(z,\'2i\')},4J:9(14,O,3M){c 14.K(O,3M,F,0)},4K:9(1o){m.R=1o}})})(b)}', 62, 295, '|||||this|var|||function|if|jQuery|return|||settings||param||new|||Template|||node|case||||extData|||_name|prototype|element|includes|push|throw|break|null|undefined|options|deep|RegExp|else|get|oper|se|for|data|||DEBUG_MODE|||replace|length|_option|that|f_escapeString|Error|eval||step|TemplateUtils|template|jTemplates|ss|this_op|JTException|ret|fn|objs|_templates_code|_template|each|false|TextNode|match|literalMode|type|cval|delete|extend|opFOREACH|value|_onTrue|_onFalse|fcount|ckey|url|_param|f_cloneData|setTemplate|tname|lastIndex|literal|opIF|filter|try|__tmp|typeof|catch|instanceof|par|_currentState|mode|iteration|url_|_tree|_templates|true|op|end|continue|noFunc|name|key|Number|count|jTemplateSID|async|disallow_functions|cloneData|MAIN|iter|not|in|elseif_level|op_|switchToElse|getParent|foreach|opFORFactory|_param1|_param2|escapeData|optionText|_value|__t|_parent|jTemplate|getTemplate|on_success|Updater|interval|args|updater|_includes|filter_params|runnable_functions|version|reg|_template_settings|while|indexOf|is|substring|optionToObject|Object|switch|include|Include|UserParam|cycle|Cycle|begin|default|setParam|constructor|toString|String|obj|val|__template|tab|arr|tmp|ex|_values|_length|_index|_lastSessionID|sid|ajax|elementName|processTemplate|cache|_options|jTemplateUpdater|run|parentNode|window|createTemplate||filter_data|clone_data|clone_params|escapeHTML|splitTemplates|of|txt|gt|lt|_literalMode|__1|_cond|funcIterator|as|find|_arg|object|_total|prevValue|index|first|last|total|_root|responseText|html|im|processTemplateStop|removeData|defined|dataFilter|timeout|_url|_interval|_args|timer|detectDeletedNodes|grep|parameter|exec|closed|No|inArray|ppp|elseif|ldelim|rdelim|Missing|unknown|tag|substr|amp|quot|hasOwnProperty|Array|Function|Functions|are|allowed|split|shift|__0|subtemplate|to|Operator|failed|MAX_VALUE|Math|ceil|root|Cannot|values|has|no|elements|setTemplateURL|setTemplateElement|trim|CDATA|hasTemplate|removeTemplate|processTemplateURL|GET|dataType|json|success|error|on_error|complete|on_complete|getJSON|setTimeout|browser|msie|document|processTemplateStart|createTemplateURL|processTemplateToText|jTemplatesDebugMode'.split('|'), 0, {}));/*
 * Login and register popup form
 *
 * 01.08.2012 gin hands. v0.1   !
 *
 */

$(document).ready(function () {
    //  О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
    $("#js_loginFormBut").live("click", function (event) {
        if (userinfo['console']) console.log("$(#loginFormBut).click");
        ajax_auth();
        return false;
    });

    $("#js_regFormBut").live("click", function () {
        if (userinfo['console']) console.log("$(#regFormBut).click");
        //О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫. О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
        if ($('#js_tap_panel_checkbox_kupivip').prop("checked") == true) {
            userinfo['kupivip_partner'] = 1;
        }
        ajax_reg();
        return false;
    });

    $('#js_tap_panel_checkbox_personal').live("click", function () {
        if ($('#js_tap_panel_checkbox_personal').prop("checked") == true) {
            $('#reg_msg2').css('display', 'none');
        } else {
            $('#reg_msg2').css('display', 'block');
        }
    });

    $('#js_confirmFormBut').live("click", function () { // О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
        if (userinfo['console']) console.log("$(#confirmFormBut).click");
        ajax_confirm();
        return false;
    });

    $(".js_keydown_selector").live("keyup", function (event) {//О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫ 'enter' О©╫О©╫О©╫ 'esc' О©╫О©╫ О©╫О©╫О©╫О©╫О©╫
        if (event.keyCode == 13) {//О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫
            if (userinfo['console']) console.log(current_login_register_tab);
            if ($(this).data('js_submit') == 'yes') {//need submit
                //О©╫О©╫О©╫О©╫О©╫О©╫О©╫ - О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ 'js_submit' - О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫ О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫ О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫ $(this).data('js_action')
                $('#' + $(this).data('js_action')).click()
            } else if ($(this).data('js_next_input_name')) {//need focus in next input
                $('#' + $(this).data('js_next_input_name')).focus();
            }
        } else if (event.keyCode == 27) {//press esc
            hidebo();
        }
    });
    $(".blockOverlay").live("click", function () { //
        hidebo();
    });
    // \О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫

    /**
     * output alternative login page for /member/lenta
     * @author Kulakov Sergey
     */
    var _match = /^\/member\/lenta(.*)$/.exec(location.pathname);
    if (_match) {
        if (_match[1]) {
            showloginForm(0, location.pathname);
        } else {
            var exception = $('.optline .mod_anketa, .reg_error').length ? '?exception=wrong_password' : '',
                href = location.protocol + "//" + location.host + "/clipanon" + exception;

            $('body').css({
                width: '100%',
                height: '100%'
            }).html('');

            location.href = href;
        }
    }
});

//О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
var current_login_register_tab = 'js_tab_auth'; //О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫ О©╫ О©╫О©╫О©╫ О©╫О©╫О©╫

function rgNav(tab) {//
    if (userinfo['console']) console.log(tab);
    current_login_register_tab = tab;
    if (tab == 'js_tab_auth') {
        if (userinfo['console']) console.log('auth_click');
        $("#js_tmpl").setParam("login_register_tab", 1);
        $("#js_tmpl").processTemplate().html();
    } else if (tab == 'js_tab_reg') {
        if (userinfo['console']) console.log('reg_click');
        $("#js_tmpl").setParam("login_register_tab", 2);
        $("#js_tmpl").processTemplate().html();
    }
    var blockmsg = $("#js_tmpl").html();
    $.blockUI({message: $(blockmsg)});

    $("#js_tmpl").empty();
};


// О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
function ajax_auth() {
    if (userinfo['console']) console.log("function ajax_auth");
    $('#js_loginFormBut').removeClass('button button-red').addClass('button-red_anim');
    $('.loading-cover').show();
    $('#js_loginFormBut').attr('disabled', 'disabled');
    var h = {
        'credential_0': $('#credential_0').val(),
        'credential_1': encodeURIComponent($('#credential_1').val()),
        'destination': ''
    };
    var data = h2q(h);
    if (userinfo['console']) console.log('auth = ' + data);
    $.ajax(
        {
            'type': 'POST',
            'url': ajax_url['auth'],
            'data': data,
            'dataType': 'text',
            'success': function (data) {
                $('#js_loginFormBut').removeClass('button-red_anim').addClass('button button-red');
                $('.loading-cover').hide();
                // $('#js_loginFormBut').attr('disabled', '');
                $('#js_loginFormBut').removeAttr('disabled');
                parse_result(data, ['auth_msg']);
                // vajen: add cookie for advert
                var cuserid = data.split("\n")[2];
                setCookie(cuserid);
            },
            'error': function (XMLHttpRequest, textStatus, errorThrown) {
                $('#js_loginFormBut').removeClass('button-red_anim').addClass('button button-red');
                $('.loading-cover').hide();
                //$('#js_loginFormBut').attr('disabled', '');
                $('#js_loginFormBut').removeAttr('disabled');
                show_msg("auth_msg", uimsg['httperr'] + ' ' + XMLHttpRequest.status, 0);
            }
        });
    //return false;
};


// О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫ О©╫ О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
function ajax_recall_code() {
    if (userinfo['console']) console.log('function ajax_send_code_again()');
    var h = {'email': userinfo['email'], 'js': 1};
    var data = h2q(h);
    if (userinfo['console']) console.log('url = ' + ajax_url['reg'] + '?' + data);
    $.ajax(
        {
            'type': 'POST',
            'url': ajax_url['recall'],
            'data': data,
            'dataType': 'text',
            'success': function (res) {
                if (userinfo['console']) console.log('success:' + res);
                res = res.split(/\n/)[0];
                show_msg('confirm_msg', apimsg[res], (res == 'info/done') ? 1 : 0);
            },
            'error': function (XMLHttpRequest, textStatus, errorThrown) {
                if (userinfo['console']) console.log(XMLHttpRequest, textStatus, errorThrown);
            }
        });
}

// О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
function ajax_reg() {


    if ($('#js_tap_panel_checkbox_terms').prop("checked") !== true) {
        show_msg('reg_msg', apimsg['error/confirm/terms_and_conditions'], 0);
    }
    if ($('#js_tap_panel_checkbox_personal').prop("checked") !== true) {
        show_msg('reg_msg2', apimsg['error/confirm/personal_data'], 0);
    } else {
        $('reg_msg2').css('display', 'none');
    }
    if ($('#js_tap_panel_checkbox_personal').prop("checked") !== true || $('#js_tap_panel_checkbox_terms').prop("checked") !== true) {
        return false;
    }

    userinfo['email'] = $('#arfemail').val();
    $('#js_regFormBut').removeClass('button button-red').addClass('button-red_anim');
    $('.loading-cover').show();
    $('#js_reginFormBut').attr('disabled', 'disabled');

    var email = $('#arfemail').val();
    var passwd = $('#arfpasswd1').val();
    var destination = '';
    var h = {'email': email, 'passwd1': passwd, 'passwd2': passwd, 'js': 1};
    var data = h2q(h);
    if (userinfo['console']) console.log('url = ' + ajax_url['reg'] + '?' + data);
    $.ajax(
        {
            'type': 'POST',
            'url': ajax_url['reg'],
            'data': data,
            'dataType': 'text',
            'success': function (data) {
                $('#js_regFormBut').removeClass('button-red_anim').addClass('button button-red');
                $('.loading-cover').hide();
                $('#js_reginFormBut').attr('disabled', '');
                parse_result(data, ['reg_msg']);
            },
            'error': function (XMLHttpRequest, textStatus, errorThrown) {
                $('#js_regFormBut').removeClass('button-red_anim').addClass('button button-red');
                $('.loading-cover').hide();
                $('#js_reginFormBut').attr('disabled', '');
            }
        });

    return false;
};

function _kupivip(email) {
    if (userinfo['console']) console.log('function _kupivip');
    $.ajax({
        url: '/R/cross-domain-ajax.cgi',
        dataType: 'json',
        data: {
            'url': 'http://www.kupivip.ru/account/coregistration',
            'partnerId': 'sub_co',
            'email': userinfo['email'],
            'firstName': 'О©╫О©╫О©╫О©╫О©╫О©╫'
        },
        type: 'POST',
        success: function (data) {
            if (data['status'] == 1) {//save to options
                $.post('/member', {'addopt': 'partner.kupivip', 'partner.kupivip': '1', 'action': 'update', 'js': '1'});
            }
            ;
        }
    });
};

//О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫
function ajax_confirm() {

    $('#js_tap_panel_auth').addClass('confirm_email');//
    $('#js_confirmFormBut').removeClass('button button-red').addClass('button-red_anim');
    $('.loading-cover').show();
    $('#js_confirmFormBut').attr('disabled', 'disabled');
    var h = {};
    h['email'] = userinfo['email'];
    h['js'] = 1;
    h['cookie'] = $('#confirm_code').val();
    var data = h2q(h);
    if (userinfo['console']) console.log('confirm = ' + ajax_url['confirm'] + '?' + data);
    $.ajax(
        {
            type: 'POST',
            url: ajax_url['confirm'],
            data: data,
            dataType: 'text',
            success: function (res) {
                if (userinfo['console']) console.log('confirm res = ' + res);
                $('#js_confirmFormBut').removeClass('button-red_anim').addClass('button button-red');
                $('.loading-cover').hide();
                $('#js_confirmFormBut').attr('disabled', '');
                res = res.split(/\n/)[0];
                var match;
                if (match = res.match(/^member\/confirm\/(done|wait.html)$/)) {

                    userinfo['confirmed'] = 1; // О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫, О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫

                    if (match[1] == "wait.html") {
                        show_msg("confirm_msg", apimsg[res], 0);
                        setTimeout(function () {
                            window.location = "/member/anketa/join/target";
                        }, 5000)
                    } else {
                        window.location = "/member/anketa/join/target";
                    }
                } else {
                    var msg = typeof (apimsg[res]) != "undefined" ? apimsg[res] : apimsg['member/confirm/wrong badcookie'];
                    show_msg("confirm_msg", msg, 0);
                    $('#js_confirmFormBut').removeClass('button-red_anim').addClass('button button-red');
                    $('.loading-cover').hide();
                    $('#js_confirmFormBut').attr("disabled", "");
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                $('#js_confirmFormBut').removeClass('button-red_anim').addClass('button button-red');
                $('.loading-cover').hide();
                $('#js_confirmFormBut').attr('disabled', '');
                show_msg("confirm_msg", uimsg['httperr'] + ' ' + XMLHttpRequest.status, 0);
            }
        })
};


// О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫, О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫
function showloginForm(tab, destination) {
    if (userinfo['console']) console.log('function showloginForm');
    if (!$('#loginForm').length) {
        defblockUI();  // О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫  //
        // О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
        /**@author Kulakov*/
        $('body').css({
            'heigth': '100%',
            'position': 'relative',
            //'overflow': 'hidden',
            'width': $(window).width()
        });

        eventstat('show'); // -what this?
        //var blockmsg = $.createTemplate("js_tmpl_login_register");
        $("#js_tmpl").setTemplateElement("js_tmpl_login_register");

        if (tab == 1) {
            $("#js_tmpl").setParam("login_register_tab", 2);
        } else {
            $("#js_tmpl").setParam("login_register_tab", 1);
        }
        /**@author Kulakov*/
        $("#js_tmpl").setParam("login_register_destination", destination);

        $("#js_tmpl").processTemplate().html();
        var blockmsg = $("#js_tmpl").html();
        $.blockUI({message: $(blockmsg)});

        toggleActiveClass($('.usermenu_link-1'));
        $("#js_tmpl").empty();
        $('.blockOverlay').attr('title', uimsg['unblock']).click(function () {
            hidebo();
        });
        return false;
    } else {
        hidebo();
        toggleActiveClass($('.usermenu_link-1'));
    }
};

function toggleActiveClass(elem) {
    elem.hasClass('active') ? elem.removeClass('active') : elem.addClass('active');
};


// show attention message for input password
//@author Vajen
function showAttention(event, shift) {
    for (var i = 0; i < event.value.length; i++) {
        var targ = event.value.substr(i, 1).charCodeAt(0);
        if (targ >= 1034 && targ <= 1113) {   //О©╫О©╫О©╫О©╫  О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
            var attention = 1;
        }
        //О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫ О©╫ shift  О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫ shift О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
        if (((targ >= 1072 && targ <= 1105) || (targ >= 97 && targ <= 122)) && shift || ((targ >= 1040 && targ <= 1071) || (targ >= 65 && targ <= 90)) && !shift) {
            var attention = 2;
        }
        if ((targ >= 1034 && targ <= 1113) && (((targ >= 1072 && targ <= 1105) || (targ >= 97 && targ <= 122)) && shift || ((targ >= 1040 && targ <= 1071) || (targ >= 65 && targ <= 90)) && !shift)) {
            var attention = 3;
        }
    }
    if (!attention) {
        $('#attention_pswd').hide();
    } else {
        $('#attention_pswd').show();
        $('.pswd_attention-text').hide();
        $('#attention-text_pswd' + attention).show();
    }
}

// О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ email О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
function showconfirmForm(arg) {
    if (userinfo['kupivip_partner'] == 1) {//all ok!
        _kupivip(userinfo['email']);
    }
    ;


    if (userinfo['console']) console.log('function showconfirmForm');
    hidebo(); //fast fix (close all popup)
    defblockUI();
    // О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
    $('body').css('heigth', '100%');
    $('body').css('position', 'relative');
    $('body').css('overflow', 'hidden');
    //О©╫О©╫О©╫О©╫О©╫ О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫
    $.blockUI.defaults.css.top = '10%';
    $.blockUI.defaults.css.left = '50%';

    $("#js_tmpl").setTemplateElement("js_tmpl_confirm_register");
    $("#js_tmpl").setParam("register_confirm_mail", userinfo['email']);
    $("#js_tmpl").processTemplate().html();
    var blockmsg = $("#js_tmpl").html();
    $.blockUI({message: $(blockmsg)});

    $("#js_tmpl").empty();
    $.blockUI.defaults.focusInput = true;
};

// О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
function parse_result(res, farg) {
    if (userinfo['console']) console.log("parse_result(res, farg)");
    userinfo['authorized'] = 0;
    var rec = res.split("\n");
    if (userinfo['console']) console.log(rec);
    res = rec[0];
    if (userinfo['console']) console.log('auth/reg res = ' + res);
    var msg_id = farg[0]; // id О©╫О©╫О©╫О©╫ О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
    var info = res.split('|'); // :
    var re = /^error/;
    var mf = re.test(info[0]) ? 0 : 1;
    var code;
    if (info.length == 3) {
        code = info[1];
    } else if (info.length == 1) {
        code = info[0];
    }
    var msg = typeof (apimsg[code]) != "undefined" ? apimsg[code] : res;
    if (userinfo['console']) console.log(msg, mf, code);
    if (mf == 1) {// О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫
        user_anonymous = false;
        userinfo['authorized'] = 1;
        $('.subscriberu_unknown').removeClass("subscriberu_unknown");
        $('.ask-anonymous').removeClass("ask-anonymous");
        if (msg_id == 'reg_msg') { // О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
            eventstat('reg'); // О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
            if (userinfo['console']) console.log('needconfirm: showconfirmForm()');
            userinfo['needconfirm'] == 1 ? showconfirmForm() : showqForm();
            userinfo['newreg'] = 1;
            if (typeof (aobj) != "undefined") {
                userinfo['aid'] = aobj.attr('id');
                userinfo['aobj'] = aobj;
            }
        } else if (msg_id == 'auth_msg') {
            eventstat('auth'); // О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
            if (typeof (aobj) != "undefined") {// О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
                if (userinfo['console']) console.log("aobj: " + aobj.attr('href'));
                aobj.click();

            }
            /**@author Kulakov*/
            else {
                var dest = $("#login_register_destination").val();
                dest && (location.href = dest);
            }
            hidebo();
        }
    } else {// О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫
        show_msg(msg_id, msg, mf);
        if (userinfo['console']) console.log(msg_id, msg, mf);
        if (typeof (aobj) != "undefined") {
            if (aobj.hasClass('subscriberu_subscribe')) {
                if (code == 'error/password/wrong') $('#' + msg_id).append(uimsg['maybebest']);
                var listgid; // О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
                if (aobj.attr('href').match(/(?:grp=|catalog\/)(.+?)$/)) listgid = RegExp.$1
                var h = {};
                h['addgrp'] = listgid;
                h['email'] = $('#credential_0').val();
                h['js'] = 1;
                h['byemail'] = 1;
                $('.linkconfirm').attr('href', ajax_url['quick'] + '?addgrp=' + listgid + '&email=' + h['email'] + '&byemail=1');
                $('.linkconfirm').click( //О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
                    function () {
                        var data = h2q(h);
                        confirmbyemail(data);
                        return false;
                    });
            }
            ;
        }
        ;
    }
    ;
};

/**@author Kulakov*/
//О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫/О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫
function _checkSocConfirm(event) {
    if ($('#js_tab_reg').hasClass('rg_active_nav') && !$('#js_tap_panel_checkbox_terms_reg').is(':checked')) {
        //$('#reg_msg_soc').html('<span style="color:red">О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫</span>');  //
        show_msg('reg_msg_soc', apimsg['error/confirm/terms_and_conditions'], 0);
        event.preventDefault();
        return false;
    } else {
        $('#loginForm').hide();
    }
}

/**
 * О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫ (О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫)
 * @author Vajen */
function setCookie(id) {
    var date = new Date;
    date.setDate(date.getDate() + 180);  // О©╫О©╫ 180 О©╫О©╫О©╫О©╫
    document.cookie = "SSO_id=" + id + "; path=/; expires=" + date.toUTCString();
}/*
 v1.62 22.06.2018
 */
var nh = 0;
var ua;
if (/(?:Chrome|Safari)/i.test(navigator.userAgent)) {
    nh = 1;
    ua = 'chrome';
} else if (/(?:Opera)/i.test(navigator.userAgent)) {
    nh = 1;
    ua = 'opera';
} else if (/Firefox/i.test(navigator.userAgent)) {
    nh = 1;
    ua = 'firefox';
} else if (/MSIE/i.test(navigator.userAgent)) {
    nh = 1;
    ua = 'ie';
}

if (nh == 1) {
    var content = '<link rel="stylesheet" href="/css/fblock.' + ua + '.css" type="text/css" media="screen"/>';
    //document.write(content); not working in FF
    var headtag = document.getElementsByTagName('head')[0];
    headtag.insertAdjacentHTML('beforeend', content);
}

// vajen: п©я─п╬п╡п╣я─п╨п╟ п©п╬п╩п╣п╧ я└п╬я─п╪я▀ group/create


// vajen: п╥п╟п╪п╣п╫п╟ п╫п╣п©п╣я┤п╟я┌п╟п╣п╪я▀я┘ п╢п╣я│я▐я┌п╦я┤п╫я▀я┘ html-п╨п╬п╢п╬п╡ п╫п╟ hex(п╫п╟я├. п╟п╩я└п╟п╡п╦я┌я▀) (я│я┌я─п╟п╫п╦я├я▀ я─п╟я│я│я▀п╩п╬п╨)
function decimalToHexString(number) {
    if (number < 0) {
        number = 0xFFFFFFFF + number + 1;
    }
    return number.toString(16).toUpperCase();
}

function replacer(str) {
    var num = parseInt(str.substring(6, str.length - 1));
    var res = "&#x" + decimalToHexString(num);
    return res;
}

function chsymb(cl) {
    var str = $(cl).html();
    if (str) {
        $(cl).html(str.replace(/(&amp;#)([0-9]{3,4})(;)/g, replacer));
    }
}


// я┤я┌п╬ п╢п╣п╩п╟я┌я▄ п©п╬я│п╩п╣ п╟п╡я┌п╬я─п╦п╥п╟я├п╦п╦
var subscriberu = {
    'subscriberu_subscribe': {'redirect': '', 'reload': 1},
    'subscriberu_love': {'redirect': '', 'reload': 1},
    'subscriberu_check_reg': {'redirect': '', 'reload': 0},
    'subscriberu_answer': {'redirect': '', 'reload': 1},
    'ssbtn': {'redirect': '', 'reload': 1},
    'subscriberu_group_join': {'redirect': '', 'reload': 1}
}

var w = $('html').width();

$.blockUI.defaults.css = {}; // я│п╠я─п╬я│ п╫п╟я│я┌я─п╬п╣п╨ css п╢п╩я▐ п╠п╩п╬п╨п╦я─п╟я┌п╬я─п╟
$.blockUI.defaults.css.border = 0;
$.blockUI.defaults.css.top = '40%';
if (w <= 900 && w > 770) {
    $.blockUI.defaults.css.left = '20%';
} else if (w <= 770 && w > 330) {
    $.blockUI.defaults.css.left = '20%';
} else if (w <= 330) {
    $.blockUI.defaults.css.left = '0%';
    $.blockUI.defaults.css.top = 'auto';
} else {
    $.blockUI.defaults.css.left = '35%';
}

$.blockUI.defaults.overlayCSS.opacity = 0.6;

var userinfo = {
    'defgrplist': '',
    'email': '',
    'authorized': 0,
    'new': 0,
    'quick': 0,
    'needclick': 0,
    'newreg': 0,
    'aid': 0,
    'aobj': null,
    'extquick': 0,
    'confirmed': 0, // п©п╬п╢я┌п╡п╣я─п╤п╢п╣п╫п╫я▀п╧ п╟п╨п╨п╟я┐п╫я┌
    'recommendation': 0, // я─п╣п╨п╬п╪п╣п╫п╢п╟я├п╦я▐ я─п╟я│я│я▀п╩п╬п╨ п╦ п╢п╟п╧п╢п╤п╣я│я┌п╬п╡
    'eq': {
        'redirect': '',
        'email': '',
        'grp': '',
        'event': '',
        'warning': 0,
        'defgrplist': 0
    },
    'needconfirm': 1,
    'console': 0, // 0 | 1
    'vk': {'type': '', 'event': ''},
    'mru': {'type': '', 'event': ''},
    'anksync': 0,
    'kupivip_partner': 0
};


//if (typeof(console) != 'object') userinfo['console'] = 0;

//'eq_redirect': '', 'eq_email' : '', 'eq_grp' : '', 'eq_event' : ''

var aobj; // п╬п╠я┼п╣п╨я┌ п╡я▀п╠я─п╟п╫п╫п╬п╧ я│я│я▀п╩п╨п╦ (п╢п╩я▐ п©п╬я│п╩п╣п╢я┐я▌я┴п╦я┘ п╢п╣п╧я│я┌п╡п╦п╧ (п©п╬п╢п©п╦я│п╨п╟, п╡я│я┌я┐п©п╩п╣п╫п╦п╣ п╡ пЁя─я┐п©п©я┐, etc))

var ui = {'pbimg': '<img src="/img/progressbar.gif" width=32 heigth=32/>'};

var ajax_url = {
    'auth': '/MEMBERLOGIN_authen_cred', //п╟п╡я┌п╬я─п╦п╥п╟я├п╦я▐
    'reg': '/member/join', //я─п╣пЁп╦я│я┌я─п╟я├п╦я▐
    'recall': '/member/info', //п╫п╟п©п╬п╪п╦п╫п╟п╫п╦п╣ п©п╟я─п╬п╩я▐
    'subscribe': '/member', // п©п╬п╢п©п╦я│п╨п╟
    'love': '/member/love', // п╡ п╦п╥п╠я─п╟п╫п╫п╬п╣ (п╡ п╢я─я┐п╥я▄я▐)
    'quick': '/member/quick', // п╠я▀я│я┌я─п╟я▐ п©п╬п╢п©п╦я│п╨п╟
    'update': '/member/sub', // п╟п╫п╨п╣я┌п╟
    'profile': '/member/profile', // п©я─п╬я└п╦п╩я▄ п©п╬п╢п©п╦я│я┤п╦п╨п╟
    'confirm': '/member/confirm' // п©п╬п╢я┌п╡п╣я─п╤п╢п╣п╫п╦п╣ п╟п╨п╨п╟я┐п╫я┌п╟

};

function lateloadimg() {
    var t = $(this);

    var latesrc = t.attr('latesrc');

    if (latesrc) {
        t.attr('src', latesrc);
    }

    t.removeAttr('latesrc');
    t.removeClass('lateload');
    t.removeClass('hidden');
};

function doR(redirect, reload) {
    if (redirect != '') {
        window.location.href = redirect;
    } else if (reload == 1) {
        window.location.href = document.URL;
    }
};

function eventstat(e) {
    if (!e.match(/^show|auth|reg|extquick$/)) return false;
    var h = {'show': 203338, 'auth': 204137, 'reg': 204146, 'extquick': 204315}
    var src = 'http://link.subscribe.ru/' + h[e];
    var i = $('<img></img>').hide().appendTo('body'); // я│п╬п╥п╢п╟п╣п╪ я│п╨я─я▀я┌я▀п╧ я█п╩п╣п╪п╣п╫я┌
    i.attr('id', 'esi'); // п╦п╢п╣п╫я┌п╦я└п╦я├п╦я─я┐п╣п╪
    i.attr('src', src); // п╥п╟пЁя─я┐п╤п╟п╣п╪
    i.remove();
};

// п╡я▀п©п╬п╩п╫я▐п╣я┌ п╬я┌п╩п╬п╤п╣п╫п╫п╬п╣ (п╟п╡я┌п╬я─п╦п╥п╟я├п╦п╣п╧ п╫п╟ п╢я─я┐пЁп╬п╪ я│п╟п╧я┌п╣) п╢п╣п╧я│я┌п╡п╦п╣
function dosuspended() {
    if (typeof ($.cookie) == 'function') { // п╣я│я┌я▄ п╨я┐п╨п╦
        var suspended = $.cookie('Felissuspended'); // п╬я┌п╩п╬п╤п╣п╫п╫п╬п╣ п╢п╣п╧я│я┌п╡п╦п╣
        var list = suspended.split('?');
        var data = list[1];
        var url = list[0];
        if (url.match(/^(?:http|HTTP):\/\/(?:[^\/]+?)\/(.+?)$/)) url = RegExp.$1;
        $.ajax({
            'type': 'GET',
            'url': url,
            'data': data,
            'dataType': 'text',
            'success': function (data) {
                if (userinfo['console']) console.log('success join = ' + suspended);
                doR('', 1);
            },
            'error': function (XMLHttpRequest, textStatus, errorThrown) {
            }
        });
    }
}

function defblockUI() {
    $.blockUI.defaults.css = {}; // я│п╠я─п╬я│ п╫п╟я│я┌я─п╬п╣п╨ css п╢п╩я▐ п╠п╩п╬п╨п╦я─п╟я┌п╬я─п╟
    $.blockUI.defaults.css.border = 0;
    $.blockUI.defaults.css.top = '40%';
    $.blockUI.defaults.css.left = '35%';
    $.blockUI.defaults.overlayCSS.opacity = 0.3;
}

function getPageSize() {
    var xScroll, yScroll;
    if (window.innerHeight && window.scrollMaxY) {
        xScroll = document.body.scrollWidth;
        yScroll = window.innerHeight + window.scrollMaxY;
    } else if (document.body.scrollHeight > document.body.offsetHeight) { // all but Explorer Mac
        xScroll = document.body.scrollWidth;
        yScroll = document.body.scrollHeight;
    } else if (document.documentElement && document.documentElement.scrollHeight > document.documentElement.offsetHeight) { // Explorer 6 strict mode
        xScroll = document.documentElement.scrollWidth;
        yScroll = document.documentElement.scrollHeight;
    } else { // Explorer Mac...would also work in Mozilla and Safari
        xScroll = document.body.offsetWidth;
        yScroll = document.body.offsetHeight;
    }
    var windowWidth, windowHeight;
    if (self.innerHeight) { // all except Explorer
        windowWidth = self.innerWidth;
        windowHeight = self.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
    } else if (document.body) { // other Explorers
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    }
    // for small pages with total height less then height of the viewport
    if (yScroll < windowHeight) {
        pageHeight = windowHeight;
    } else {
        pageHeight = yScroll;
    }
    // for small pages with total width less then width of the viewport
    if (xScroll < windowWidth) {
        pageWidth = windowWidth;
    } else {
        pageWidth = xScroll;
    }
    return [pageWidth, pageHeight, windowWidth, windowHeight];
}

// qfb - quick form button

function quickFormOk() {
    $('#quickFormSubBut').hide();
    $('#quickFormNextBut').hide();
    $('#quickFormCloseBut').show();
    $('#quickForminputblock').hide();
    $('#qf_tapanel').hide();
    $('#trsubscriberu_anksyncq').hide();
    $('#trsubscriberu_anksyncqmr').hide();
    //$('#trtypeauth').hide(); // я│п╨я─я▀п╡п╟п╣п╪ я─п╟п╢п╦п╬п╨п╫п╬п©п╨п╦ п╡я▀п╠п╬я─п╟ я┌п╦п©п╟ п╟п╡я┌п╬я─п╦п╥п╟я├п╦п╦/я─п╣пЁп╦я│я┌я─п╟я├п╦п╦
}

// п╡я▀п╡п╬п╢ я└п╬я─п╪я▀ п©я─п╬п╡п╣я─п╨п╦ п╦ п╢п╬п╠п╟п╡п╩п╣п╫п╦я▐ п╫п╦п╨п╟
function shownickForm() {
    var blockmsg = '#nickForm';
    $('#nick_msg').html('');
    $('#nickFormBut').attr('disabled', ''); // п╡п╨п╩я▌я┤п╟п╣п╪ п╨п╫п╬п©п╨я┐
    $('.subscriberu_popup').hide(); // п╥п╟п╨я─я▀п╡п╟п╣п╪ п╡я│п╣ п╢я─я┐пЁп╦п╣ я└п╬я─п╪я▀
    $.blockUI.defaults.focusInput = true;
    $.blockUI({message: $(blockmsg)});
    $('.blockOverlay').attr('title', uimsg['unblock']).click(function () {
        hidebo();
    });
    return false;
}

/* GiN hands (go to login_register_form.js)
 // п╡я▀п╡п╬п╢ я└п╬я─п╪я▀ п©п╬п╢я┌п╡п╣я─п╤п╢п╣п╫п╦я▐ п╟п╨п╨п╟я┐п╫я┌п╟
 function showconfirmForm(arg){
 defblockUI();
 var blockmsg = '#confirmForm';
 $('#needconfirmcode').attr('href', '/member/info?email=' + userinfo['email']);
 $('#confirm_email').text(userinfo['email']); // я┐я│я┌п╟п╫п╟п╡п╩п╦п╡п╟п╣п╪ п╟п╢я─п╣я│ п╡ я┌п╣п╨я│я┌
 $('.subscriberu_popup').hide(); // п╥п╟п╨я─я▀п╡п╟п╣п╪ п╡я│п╣ п╢я─я┐пЁп╦п╣ я└п╬я─п╪я▀
 $.blockUI.defaults.focusInput = true;
 $.blockUI({ message: $(blockmsg) });
 }
 */

$('#needconfirmcode').live('click', function () { // п©п╬п╢я┌п╡п╣я─п╤п╢п╣п╫п╦п╣ я─п╣пЁп╦я│я┌я─п╟я├п╦п╦
    var pb = $('#subscriberu_confirm_pb');
    pb.html(ui['pbimg']);
    pb.show();
    $.get($(this).attr('href'), function (data) {
        pb.hide();
        show_msg('confirm_msg', uimsg['confirmcode'], 1);
    });
    return false;
});

// п╡я▀п╡п╬п╢ я└п╬я─п╪я▀ п╟п╫п╨п╣я┌я▀
function showqForm(arg) {
    defblockUI();
    $('#qFormSubBut').attr('disabled', '');
    var blockmsg = '#qForm';
    $('#q_msg').html('');
    //$('#qForm').find('div.subscriberu_pb').html('');
    $('#qForm').find('div.subscriberu_pb').hide('');
    if ($('#ddselect').html() == '') {
        //alert('ddselect is empty');
        var content = [];
        content.push('<select class=content name="ankDD" style="width: 6em; margin: 0em 0.2em 0em 0em; padding: 0.1em;"><option id="day_on" style="display: none" value="">' + subscriberu_period['day'] + '</option>');
        for (i = 1; i <= 31; i++) {
            var v = i < 10 ? '0' + i : i;
            content.push('<option value="');
            content.push(v);
            content.push('">');
            content.push(i);
            content.push('</option>');
        }
        $('#ddselect').html(content.join(''));
        content = [];
        content.push('<select class="qq" name="ankMM" style="width: 6em; margin: 0em 0.2em 0em 0em; padding: 0.1em;"><option id="mon_on" style="display: none" value="">' + subscriberu_period['month'] + '</option>');
        for (i = 1; i < subscriberu_month['genitivus'].length; i++) {
            var v = i < 10 ? '0' + i : i;
            content.push('<option value="');
            content.push(v);
            content.push('">');
            content.push(subscriberu_month['genitivus'][i]);
            content.push('</option>');
        }
        $('#mmselect').html(content.join(''));
        content = [];
        content.push('<select class="qq" name="ankYYYY" style="width: 5em; padding: 0.1em;"><option value="">' + subscriberu_period['year'] + '</option>');
        var now = new Date();
        var cur_year = now.getFullYear();
        var f = cur_year - 10;
        var t = cur_year - 90;
        for (i = f; i > t; i--) {
            content.push('<option value="');
            content.push(i);
            content.push('">');
            content.push(i);
            content.push('</option>');
        }
        $('#yyselect').html(content.join(''));
        content = [];
        content.push('<select class="qq" NAME="ankSG" style="width: 18em;"><option value="">' + uimsg['pleaseselect'] + '</option>');
        $.each(subscriberu_country_name, function (i) {
            content.push('<option value="');
            content.push(subscriberu_country_code[i]);
            content.push('">');
            content.push(subscriberu_country_name[i]);
            content.push('</option>');
        });
        $('#lselect').html(content.join(''));
    }
    $('.subscriberu_popup').hide(); // п╥п╟п╨я─я▀п╡п╟п╣п╪ п╡я│п╣ п╢я─я┐пЁп╦п╣ я└п╬я─п╪я▀
    $.blockUI.defaults.focusInput = true;
    $.blockUI({message: $(blockmsg)});
    $('.blockOverlay').attr('title', uimsg['unblock']).click(function () {
        hidebo();
        if (userinfo['new'] == 1) window.location.href = window.location;
    });
    return false;
}


function cts(c) { // code to simbol
    var list = c.split(';');
    for (i = 1; i <= list.length; i++) {
        list[i].replace(/\&\#/, '');
        list[i] = String.fromCharCode(list[i]);
    }
    return list.join('');
}

function showinfoForm(arg) {
    $.blockUI.defaults.css.top = '30%';
    $.blockUI.defaults.css.left = '25%';
    var blockmsg = '#infoForm';
    $('#info_msg').html('');
    $('.subscriberu_popup').hide();
    $.blockUI.defaults.focusInput = true;
    $.blockUI({message: $(blockmsg)});
    $('.blockOverlay').attr('title', uimsg['unblock']).click(function () {
        hidebo();
        if (userinfo['new'] == 1) window.location.href = window.location;
    });
    return false;
}


// GiN hands!

function showquickForm(arg) {
    defblockUI();
    //if (!userinfo['vk']['event'].match(/^login|xz$/)) $('#trsubscriberu_anksyncq').hide();
    //if (!userinfo['mru']['event'].match(/^login|xz$/)) $('#trsubscriberu_anksyncqmr').hide();
    $('#email_msg').text('');
    $('#qf_tapanel').show();
    $('#quickFormSubBut').attr('disabled', ''); // п╡п╨п╩я▌я┤п╟п╣п╪ п╨п╫п╬п©п╨я┐
    $('#subscriberu_email_pb').html(''); // п╡я▀п╨п╩я▌я┤п╟п╣п╪ пЁя─п╟п╢я┐я│п╫п╦п╨
    if (!arg) {
        arg = {'quickForminputblock': 1, 'quickFormSubBut': 1, 'quickFormCloseBut': 0, 'quickFormNextBut': 0};
    }// п╡я▀п╡п╬п╢п╦п╪ я█п╩п╣п╪п╣п╫я┌я▀ п©п╬ я┐п╪п╬п╩я┤п╟п╫п╦я▌
    if ($('#qf_typeauthid').val() == 'vkontakte' || $('#qf_typeauthid').val() == 'mailru') arg['quickForminputblock'] = 0;
    $('#qfta_' + $('#qf_typeauthid').val()).addClass('taitemact');

    var a = ['quickForminputblock', 'quickFormSubBut', 'quickFormCloseBut', 'quickFormNextBut'];
    for (i in a) {
        $('#' + a[i])[arg[a[i]] == 1 ? 'show' : 'hide']();
    }
    var blockmsg = '#quickForm';
    $('#email_msg').html('');
    $('.subscriberu_popup').hide();
    $.blockUI.defaults.focusInput = true;
    $.blockUI({message: $(blockmsg)});
    eventstat('show');
    $('.blockOverlay').attr('title', uimsg['unblock']).click(function () {
        hidebo();
        if (userinfo['new'] == 1) window.location.href = window.location;
    });
    return false;
}


function showLJForm() {
    var blockmsg = '#toblog';
    if ($(blockmsg).length) {
        $.blockUI.defaults.css.top = '30%';
        $('.subscriberu_popup').hide();
        $.blockUI.defaults.focusInput = false;
        $.blockUI({message: $(blockmsg)});
        $('.blockOverlay').attr('title', uimsg['unblock']).click(function () {
            hidebo();
        });
    }
    return false;
}

/* GiN hands
 function showregForm(){
 defblockUI();
 $('#reg_msg').html('');
 $('#arfemail').attr('value', '');
 $('#arfpasswd1').attr('value', '');
 $('#arfpasswd2').attr('value', '');
 $('#rf_tapanel').show();
 $('#regFormBut').attr('disabled', '');
 $('#rfta_' + $('#rf_typeauthid').val()).addClass('taitemact');
 $('.subscriberu_popup').hide();
 $.blockUI.defaults.focusInput = false;
 $.blockUI({ message: $('#regForm') });
 $('.blockOverlay').attr('title', uimsg['unblock']).click($.unblockUI);
 if ($('#arfemail').is(':visible')){$('#arfemail').focus();}
 return false;
 }
 */

function hidebo() {  // hide block overlay
    //alert('hidebo');

    var ccf = $('#confirm_code').length; // п©п╬п╩п╣ п╢п╩я▐ п╡п╡п╬п╢п╟ п©п╬п╢я┌п╡п╣я─п╤п╢п╣п╫п╦я▐

    if (userinfo['console']) console.log('function hidebo()');
    $.blockUI.defaults.overlayCSS.opacity = 0.3;
    if (typeof (aobj) != "undefined") {
        if (aobj.attr('id') == 'autoclick') {
            var d = document.domain.match(/subscribe\.ru/) ? document.domain : 'subscribe.ru'; // п╡п╢я─я┐пЁ п╬я┌п╨я─я▀п╩п╦ п╦п╥ п╨п╣я┬п╟ - п╢п╬п╪п╣п╫ п÷п║
            var url = 'http://' + d + '/group/'; // пЁп╩п╟п╡п╫п╟я▐ пЁя─я┐п©п©
            if (aobj.attr('href').match(/redirect_to\=\/group\/(.+?)\//)) {
                //url += RegExp.$1 + '/'; // п╨п╬я─п╫п╣п╡п╟я▐ п╨п╬п╫п╨я─п╣я┌п╫п╬п╧ пЁя─я┐п©п©я▀
                url += RegExp.$1; // п╨п╬я─п╫п╣п╡п╟я▐ п╨п╬п╫п╨я─п╣я┌п╫п╬п╧ пЁя─я┐п©п©я▀
                //console.log('redirect=',url)
            }
            window.location.href = url;
        }
        if (aobj.hasClass('subscriberu_answer')) $.cookie('Subscribe::Digest_commentid', null, {path: '/'});
    }
    $('.subscriberu_popup').hide()
    $.unblockUI({message: ''});

// GiN fast fix !!!
    $('body').css(
        /**@author Kulakov*/
        {
            'overflow': 'auto',
            'width': 'auto',
            'height': 'auto',
            'position': 'static'
        }
    );
//\GiN fast fix !!!

    //console.log('hidebo, new = ' + userinfo['new'] + ' ');
    if (userinfo['new'] == 1) window.location.href = window.location;

    if (ccf) { // п╫п╟ я└п╬я─п╪п╣ п╠я▀п╩п╬ п©п╬п╩п╣ п╡п╡п╬п╢п╟ п©п╬п╢я┌п╡п╣я─п╤п╢п╣п╫п╦я▐, п╦ п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▄ - п╟п╡я┌п╬я─п╦п╥п╬п╡п╟п╫
        // console.log('confirm_code, user_anonymous = ' + user_anonymous);
        if (user_anonymous == false) window.location.href = window.location;
    }


}

function advcheck() {
    var flag = ($('#ankDD').val() != '' && $('#ankMM').val() != '' && $('#ankYYYY').val() != '' && $('#ankSG').val() != '' && $('form :text[name=ae\\_fam]').val() != '' && $('form :text[name=ae\\_nam]').val() != '');
    var cb = $("form :checkbox[name=adv\\.ivroshe]");
    if (!flag) cb.attr('checked', '');
    flag ? cb.removeAttr("disabled") : cb.attr("disabled", "disabled");
    $('#advmsg')[flag ? 'hide' : 'show']();
}

function h2q(h) { // п©я─п╣п╬п╠я─п╟п╥я┐п╣я┌ я┘п╣я┬ п╡ я│я┌я─п╬п╨я┐ п©п╟я─п╟п╪п╣я┌я─п╬п╡ (p1=v1&p2=v2&...&pN=vN)
    var res = [];
    var i = 0;
    $.each(h, function (key) {
        if (i > 0) res.push('&');
        res.push(key);
        res.push('=');
        res.push(h[key]);
        i++;
    });
    return res.join('');
}

function pbshow(id) {
    var pb = $('#' + id);
    pb.html(ui['pbimg']);
    pb.show(); // п©п╬п╨п╟п╥я▀п╡п╟п╣п╪ п©я─п╬пЁя─п╣я│я│-п╠п╟я─
}

function pbhide(id) {
    var pb = $('#' + id);
    pb.hide();
}


/* GiN hands
 function confirmbyemail(data){
 pbshow('subscriberu_authform_pb'); // п©п╬п╨п╟п╥я▀п╡п╟п╣п╪ п©я─п╬пЁя─п╣я│я│-п╠п╟я─
 $.ajax({
 'type' : 'POST',
 'url' :  ajax_url['quick'],
 'data' :  data,
 'dataType' : 'text',
 'success' : function(data){
 pbhide('subscriberu_authform_pb');
 data = data.split(/\n/)[0];
 if (data == 'member/quick/byemail'){
 var farg =  {'quickForminputblock' : 0, 'quickFormSubBut' : 0, 'quickFormCloseBut' : 1, 'quickFormNextBut' : 0};
 showquickForm(farg);
 $('#qf_tapanel').hide();
 $('#trpwd').show(); // п©п╬п╩п╣ п╢п╩я▐ п╡п╡п╬п╢п╟ п©п╟я─п╬п╩я▐
 show_msg('email_msg', uimsg['confirm'], 1);
 $('#trtypeauth').hide();
 }
 },
 'error' : function(XMLHttpRequest, textStatus, errorThrown){
 pbhide('subscriberu_authform_pb');
 }
 });
 }
 */


$(document).ready(function () {
    if (typeof ($.cookie) == 'function') { // п╣я│я┌я▄ п╨я┐п╨п╦
        var vkcontent = $.cookie('FelisVKontakte'); // п©я─п╬п╡п╣я─я▐п╣п╪ - п©я─п╦я┬п╩п╦ я│ vk?
        $.cookie('FelisVKontakte', null, {path: '/'});
        var mrucontent = $.cookie('FelisMailRu'); // п©я─п╬п╡п╣я─я▐п╣п╪ - п©я─п╦я┬п╩п╦ я│ mailru?
        $.cookie('FelisMailRu', null, {path: '/'});
        if (vkcontent != null && vkcontent != '') {
            userinfo['vk']['event'] = vkcontent;
            if (userinfo['console']) console.log('dom vk, type = |' + vkcontent + '|');
            if (vkcontent == 'login') {
                showloginForm();
                $('#trsubscriberu_anksync').show();
                $('#lf_tapanel').hide();
            } else if (vkcontent == 'join') {
                showregForm();
                $('#rf_tapanel').hide();
            } else if (vkcontent == 'known') {
                return dosuspended();
            } else if (vkcontent == 'xz') {
                if (userinfo['console']) console.log('XZ');
                showquickForm();
                show_msg('email_msg', uimsg['vkok'], 1);
                $('#trsubscriberu_anksyncq').show();
                $('#qf_tapanel').hide();
            } else if (vkcontent == 'error') {
                showquickForm(); // п©п╬п╨п╟п╥я▀п╡п╟п╣п╪ я└п╬я─п╪я┐ п╠я▀я│я┌я─п╬п╧ п©п╬п╢п©п╦я│п╨п╦
                quickFormOk(); // п╡я▀п╡п╬п╢п╦п╪ п╡ я│п╬п╨я─п╟я┴п╣п╫п╫п╬п╪ п╡п╦п╢п╣
                show_msg('email_msg', uimsg['vkerror'], 1);
            }
        } else if (mrucontent != null && mrucontent != '') {
            userinfo['mru']['event'] = mrucontent;
            if (userinfo['console']) console.log('dom mru, type = |' + mrucontent + '|');
            if (mrucontent == 'login') {
                showloginForm();
                $('#trsubscriberu_anksyncmr').show();
                $('#lf_tapanel').hide();
            } else if (mrucontent == 'join') {
                showregForm();
                $('#rf_tapanel').hide();
            } else if (mrucontent == 'known') {
                return dosuspended();
            } else if (mrucontent == 'xz') {
                if (userinfo['console']) console.log('XZ');
                showquickForm();
                show_msg('email_msg', uimsg['mruok'], 1);
                $('#trsubscriberu_anksyncqmr').show();
                $('#qf_tapanel').hide();
            } else if (mrucontent == 'error') {
                showquickForm(); // п©п╬п╨п╟п╥я▀п╡п╟п╣п╪ я└п╬я─п╪я┐ п╠я▀я│я┌я─п╬п╧ п©п╬п╢п©п╦я│п╨п╦
                quickFormOk(); // п╡я▀п╡п╬п╢п╦п╪ п╡ я│п╬п╨я─п╟я┴п╣п╫п╫п╬п╪ п╡п╦п╢п╣
                show_msg('email_msg', uimsg['mruerror'], 1);
            }
        }
    }

    $('div.taitem').live("mouseenter", function () {
        $(this).addClass('taitemover');
    });
    $('div.taitem').live("mouseleave", function () {
        $(this).removeClass('taitemover');
    });

    $('div.taitem').click(function (e) {
        if (e.button != 0) return false;

        $('#quickFormCloseBut').hide();
        $('#quickFormSubBut').show();
        $('#email_msg').text('');
        $('.taitem').removeClass('taitemact');
        $(this).addClass('taitemact');
        var ta = '';
        if ($(this).attr('id').match(/^(q|l|r)fta_(.+?)$/)) {
            var p = RegExp.$1;
            var ta = RegExp.$2;
            $('#' + p + 'f_typeauthid').val(ta);

            if (ta == 'vkontakte') {
                if (typeof (VK) == "undefined") {
                    $.getScript('http://vkontakte.ru/js/api/openapi.js');
                }
            }

            if ($('#quickForm').is(':visible')) { // п╣я│п╩п╦ я█я┌п╬ я└п╬я─п╪п╟ п╠я▀я│я┌я─п╬п╧ п©п╬п╢п©п╦я│п╨п╦

                if (ta != 'vkontakte' && ta != 'mailru') $('#authidcpt').html(uimsg[ta + 'cpt']);
                $('#quickForminputblock')[ta == 'vkontakte' || ta == 'mailru' ? 'hide' : 'show']();

            } else if ($('#loginForm').is(':visible')) { // я└п╬я─п╪п╟ п╟п╡я┌п╬я─п╦п╥п╟я├п╦п╦

                if (ta != 'vkontakte' && ta != 'mailru') $('#lfidcpt').html(uimsg['s' + ta + 'cpt']);
                if (ta == 'email') {
                    $("#trlinkrecall").show();
                    $("#trpwd").show();
                    $("#tremail").show();
                    //$('#trsubscriberu_anksync').hide();
                } else if (ta == 'openid') {
                    $("#trlinkrecall").hide();
                    $("#trpwd").hide();
                    $("#tremail").show();
                    //$('#trsubscriberu_anksync').hide();
                } else if (ta == 'vkontakte') {
                    $("#trlinkrecall").hide();
                    $("#trpwd").hide();
                    $("#tremail").hide();
                    //$('#trsubscriberu_anksync').show();
                } else if (ta == 'mailru') {
                    $("#trlinkrecall").hide();
                    $("#trpwd").hide();
                    $("#tremail").hide();
                    //$('#trsubscriberu_anksyncmr').show();
                }
            } else if ($('#regForm').is(':visible')) { // я└п╬я─п╪п╟ я─п╣пЁп╦я│я┌я─п╟я├п╦п╦
                if (ta == 'email') {
                    $(".trrf").show();
                    $("#trrfid").hide();
                } else if (ta == 'openid') {
                    $(".trrf").hide();
                    $("#trrfid").show();
                } else if (ta == 'vkontakte' || ta == 'mailru') {
                    $(".trrf").hide();
                    $("#trrfid").hide();
                }
            }
        }

    });


    $('#infoFormNextBut').click(function (e) {
        if (e.button != 0) return false;
        userinfo['needconfirm'] == 1 ? showconfirmForm() : showqForm();
    })

    $('#ljcodebut').live('click', function (event) {
        aobj = $(this);
        if (event.button == 0) {
            showLJForm();
        }
        return false;
    });
    // я└п╬я─п╪п╟я┌ п©п╦я│я▄п╪п╟
    $(".subscriberu_lf").click(
        function () {
            var k = $(this).attr('name');
            var h = {};
            h[k] = $(this).val();
            var pb = $(this).parent().parent().parent().parent().children('div.subscriberu_pb');
            pb.html(ui['pbimg']);
            pb.show();
            var url = ajax_url['update'] + '?' + $(this).attr('name') + '=' + $(this).val() + '&action=update';
            $.ajax({
                type: 'GET',
                url: url,
                dataType: 'text',
                timeout: 5000,
                success: function (data) {
                    pb.hide();
                }, //pb.html('');
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                    pb.hide();
                } //pb.html('');
            })
        }
    );

    $('.subscriberu_invite_group').live('click', function (e) {
        var link = $(this).attr('href');
        if ($(this).hasClass('subscriberu_unknown')) return true;
        show_confirm_form(uimsg['groupmemberonlyshort'],
            {
                show: true,
                text: subscriberu_but_cpt['joingroup'], // ok
                callback: function () {
                    window.location.href = $('a.joingroup').attr('href');
                }
            },
            {
                show: false,
                callback: function () {
                }
            }
        );
        return false;
    });

    // я┐п╢п╟п╩п╣п╫п╦п╣ я┌п╣п╪я▀ п╡ пЁя─я┐п©п©п╣
    $('.deletit').live("click", function (e) {
        var link = $(this).attr('href');
        var theme = $(this).closest('.groupentry');
        show_confirm_form(uimsg['doyouwantdeletetheme'],
            {
                show: true,
                text: subscriberu_but_cpt['deletetheme'], // ok
                callback: function () {
                    theme.hide();
                    $.ajax({
                        'type': 'POST',
                        'url': link
                    });
                }
            },
            {
                show: false
            }
        );

        return false;
    });

    // п©я┐п╠п╩п╦п╨п╟я├п╦я▐ п╨п╬п╪п╪п╣п╫я┌п╟я─п╦я▐ п╡ я┌п╣п╪п╣ пЁя─я┐п©п©я▀
    $('[id^=public_]').live("click", function (e) {
        e.preventDefault();

        var link = $(this).attr('href'),
            comm = $(this).closest('.commententry'),
            commid = comm.attr('id'),
            pub = $(this);
        //console.log('п·п©я┐п╠п╩п╦п╨п╬п╡п╟я┌я▄? '+link+' comm='+comm+' public='+pub);
        $.ajax({
            'type': 'POST',
            'url': link,
            success: function (data) {
                var result = JSON.parse(data);
                var answer = '<a href="#" comment_id="' + commid + '" onclick="show_comment_form(' + commid + '); return false;" rel="' + commid + '" class="com_reply">п·я┌п╡п╣я┌п╦я┌я▄</a>';
                console.log("public comments  success:", result['result']);
                comm.removeClass("banned");
                comm.find('.comm_notice').remove();
                comm.find('.comm_body').removeClass('grey');
                pub.closest('.act').append(answer);
                pub.remove();
            },
            error: function (jqXHR, exception) {
                console.error('public comments failed:', jqXHR, exception);
            }
        });

    });

    // я┐п╢п╟п╩п╣п╫п╦п╣ п╨п╬п╪п╪п╣п╫я┌п╟я─п╦я▐ п╡ я┌п╣п╪п╣ пЁя─я┐п©п©я▀
    $('#delcom').live("click", function (e) {
        var link = $(this).attr('href'),
            comm = $(this).closest('.commententry'),
            del = $(this),
            allcomments = $(this).closest('.to_delete');
        show_confirm_form(uimsg['doyouwantdeletecomment'],
            {
                show: true,
                text: subscriberu_but_cpt['deletecomm'],
                callback: function () {
                    comm.addClass('deleted');

                    if (allcomments) {
                        comm.find('.content').before('<div class="del_note">п п╬п╪п╪п╣п╫я┌п╟я─п╦п╧ я┐п╢п╟п╩п╣п╫, п╣пЁп╬ п╡п╦п╢я▐я┌ я┌п╬п╩я▄п╨п╬ п╪п╬п╢п╣я─п╟я┌п╬я─я▀ пЁя─я┐п©п©я▀ п╦ п╣пЁп╬ п╟п╡я┌п╬я─</div>');
                    } else {
                        comm.find('.content').prepend('<div>п п╬п╪п╪п╣п╫я┌п╟я─п╦п╧ я┐п╢п╟п╩п╣п╫, п╣пЁп╬ п╡п╦п╢я▐я┌ я┌п╬п╩я▄п╨п╬ п╪п╬п╢п╣я─п╟я┌п╬я─я▀ пЁя─я┐п©п©я▀ п╦ п╣пЁп╬ п╟п╡я┌п╬я─</div>');
                    }
                    del.closest('.act').hide();
                    if ($(".allcomments_item:not(.deleted)").length > 0) {
                    } else {
                        $('.deleteallcomments').hide();
                    }
                    $.ajax({
                        'type': 'POST',
                        'url': link,
                        success: function (data) {
                            var result = JSON.parse(data);
                            if (result['error'] == 'error/delete/comments/norights') {
                                alert('пё п╡п╟я│ п╫п╣ я┘п╡п╟я┌п╟п╣я┌ п©я─п╟п╡ п╢п╩я▐ я┐п╢п╟п╩п╣п╫п╦я▐ я█я┌п╬пЁп╬ п╨п╬п╪п╪п╣п╫я┌п╟я─п╦я▐. п·п╠я─п╟я┌п╦я┌п╣я│я▄ п╨ п╟п╢п╪п╦п╫п╦я│я┌я─п╟я┌п╬я─я┐ пЁя─я┐п©п©я▀');
                                console.log("Rights for delete comments is absent: ", result);
                            }

                            $(".submit-debounce").submit();
                        },
                        error: function (jqXHR, exception) {
                            console.error('Failed delete comment:', jqXHR, exception);
                        }
                    });
                }
            },
            {
                show: false
            }
        );

        return false;
    });

    // я┐п╢п╟п╩п╣п╫п╦п╣ п╡я│п╣я┘ п╨п╬п╪п╪п╣п╫я┌п╟я─п╦п╣п╡ п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▐ п╡ пЁя─я┐п©п©п╣
    $('.deleteallcomments').live("click", function (e) {
        var link = $(this).attr('href'),
            comms = $('.commententry'),
            buttondel = $(this),
            alldeleted = $(this).closest('.user-actions').find('.alldeleted');
        show_confirm_form(uimsg['deleteallusercomments'],
            {
                show: true,
                text: subscriberu_but_cpt['deletecomments'],
                callback: function () {
                    comms.addClass('deleted');
                    buttondel.remove();
                    alldeleted.show();
                    $.ajax({
                        'type': 'POST',
                        'url': link,
                        success: function (data) {

                        }
                    });
                }
            },
            {
                show: false
            }
        );

        return false;
    });

    // я│п╢п╣п╩п╟я┌я▄ я┌п╣п╪я┐ п╡п╟п╤п╫п╬п╧
    $('.importantit').live("click", function (e) {
        var link = $(this).attr('href'),
            tag = event.target;
        var add = $('.addimp');
        var del = $('.delimp');
        if (add.hasClass('hidden')) {
            add.removeClass('hidden');
        } else {
            del.removeClass('hidden');
        }
        $(tag).addClass('hidden');
        $.ajax({
            'type': 'POST',
            'url': link,
            success: function (data) {
            }
        });
        return false;
    });

    // я┐п╢п╟п╩п╦я┌я▄ п╨п╬п╪п╪п╣п╫я┌п╟я─п╦п╧ п╦ п╥п╟п╠п╟п╫п╦я┌я▄ п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▐ п╡ пЁя─я┐п©п©п╣
    $('#del_and_ban').live("click", function (e) {
        var link = $(this).attr('href');
        var comm = $(this).closest('.commententry');
        var userlink = comm.find('a.subscriberu_titlesand').attr('href').split('/'),
            userid = userlink[2],
            dellink = comm.find('#delcom').attr('href'),
            del = $(this);
        show_confirm_form(uimsg['deletecommentbanneduser'],
            {
                show: true,
                text: subscriberu_but_cpt['deleteandbanned'],
                callback: function () {
                    comm.addClass('deleted');
                    comm.find('.content').prepend('<div>п п╬п╪п╪п╣п╫я┌п╟я─п╦п╧ я┐п╢п╟п╩п╣п╫, п╣пЁп╬ п╡п╦п╢я▐я┌ я┌п╬п╩я▄п╨п╬ п╪п╬п╢п╣я─п╟я┌п╬я─я▀ пЁя─я┐п©п©я▀, п╣пЁп╬ п╟п╡я┌п╬я─ п╥п╟п╠п╟п╫п╣п╫</div>');
                    del.closest('.act').hide();
                    $.ajax({
                        'type': 'POST',
                        'url': dellink,
                        success: function (data) {
                            $(".submit-debounce").submit();
                        }
                    });
                    // п╠п╟п╫п╦п╪ п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▐
                    $.ajax({
                        type: 'post',
                        url: link,
                        data: {
                            "user_id": userid
                        },
                        success: function (data) {
                            console.log("user banned");
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.error('error requests: ', jqXHR, textStatus, errorThrown);
                        }
                    });


                }
            },
            {
                show: false
            }
        );

        return false;
    });

    // п╥п╟п╠п╟п╫п╦я┌я▄ п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▐ п╡ пЁя─я┐п©п©п╣
    $('.banneduser').live("click", function (e) {
        var link = $(this).attr('href');
        var bann = $(this);
        show_confirm_form(uimsg['banneduser'],
            {
                show: true,
                text: subscriberu_but_cpt['banneduser'],
                callback: function () {
                    var wrapblock = $('.allcomments_right');
                    if (wrapblock && !wrapblock.hasClass('ban')) {
                        wrapblock.addClass('ban');
                        wrapblock.find(".attention").removeClass('hidden');
                    }
                    var useractions = bann.closest('.user-actions');
                    if (useractions) {
                        bann.addClass('hidden');
                        useractions.find('.unbanneduser').removeClass('hidden');
                    }
                    $.ajax({
                        type: 'post',
                        url: link,
                        success: function (data) {
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.error('error requests: ', jqXHR, textStatus, errorThrown);
                        }
                    });


                }
            },
            {
                show: false
            }
        );

        return false;
    });

    // я─п╟п╥п╠п╟п╫п╦я┌я▄ п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▐ п╡ пЁя─я┐п©п©п╣
    $('.unbanneduser').live("click", function (e) {
        var link = $(this).attr('href');
        var unban = $(this);
        show_confirm_form(uimsg['unbanneduser'],
            {
                show: true,
                text: subscriberu_but_cpt['unbanneduser'],
                callback: function () {
                    var wrapblock = $('.allcomments_right');
                    if (wrapblock && wrapblock.hasClass('ban')) {
                        wrapblock.removeClass('ban');
                        wrapblock.find(".attention").addClass('hidden');
                    }
                    var useractions = unban.closest('.user-actions');
                    if (useractions) {
                        unban.addClass('hidden');
                        useractions.find('.banneduser').removeClass('hidden');
                    }
                    $.ajax({
                        type: 'post',
                        url: link,
                        success: function (data) {
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            console.error('error unbanned: ', jqXHR, textStatus, errorThrown);
                        }
                    });
                }
            },
            {
                show: false
            }
        );

        return false;
    });

    // п╡п╬я│я│я┌п╟п╫п╬п╡п╩п╣п╫п╦п╣ я┐п╢п╟п╩п╣п╫п╫п╬пЁп╬ п╨п╬п╪п╪п╣п╫я┌п╟я─п╦я▐ п╡ я┌п╣п╪п╣ пЁя─я┐п©п©я▀
    $('.recover').live("click", function (e) {
        var link = $(this).attr('href'),
            comm = $(this).closest('.commententry');

        show_confirm_form(uimsg['recoverdeletedcomment'],
            {
                show: true,
                text: subscriberu_but_cpt['recovercomm'],
                callback: function () {
                    comm.removeClass('deleted');
                    comm.find('.del_note').detach();
                    if (!$('.deleteallcomments').is(':visible')) {
                        $('.deleteallcomments').show();
                    }
                    $.ajax({
                        'type': 'POST',
                        'url': link,
                        success: function (data) {
                        }
                    });
                }
            },
            {
                show: false
            }
        );

        return false;
    });

    // п╦п╥п╪п╣п╫п╣п╫п╦п╣\п╢п╬п╠п╟п╡п╩п╣п╫п╦п╣ п╪п╣я┌п╨п╦ п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▐
    $('#userlabel').live("blur", function (e) {
        var form = $(this).closest('#setlabel');
        var userid = form.find('input[name="userid"]').val();
        var label = form.find('input[name="label"]').val();
        var slug = form.find('input[name="slug"]').val();
        var link = '/group/' + slug + '/author/' + userid + '/label/';
        form.find('.user-label_ok').removeClass('hidden');
        $.ajax({
            'type': 'POST',
            'url': link,
            'data': "label=" + label,
            success: function (data) {

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('err', jqXHR, textStatus, errorThrown);
            }

        });
    });

    // п©я─п╦п╫я▐я┌я▄ п╥п╟я▐п╡п╨я┐ п╫п╟ я┐я┤п╟я│я┌п╦п╣ п╡ пЁя─я┐п©п©п╣
    $('button.accept').live("click", function (e) {
        var formtag = $(this).closest('form'),
            memberid = formtag.find('input[name=member]').val(),
            accButton = formtag.find('button[name=accept]').val();
        formtag.find('button.accept').text('п÷я─п╦п╫я▐я┌п╬').removeClass('button-orange').addClass('button-green');
        formtag.find('button').attr('disabled', true);
        $.ajax({
            type: 'POST',
            data: {member: memberid, accept: accButton},
            url: window.location.pathname,
            success: function () {
                $('#grc').text(parseInt($('#grc').text()) - 1);
                $('.tabs_link-active span').text(parseInt($('.tabs_link-active span').text()) - 1);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('error requests: ', jqXHR, textStatus, errorThrown);
            }

        });
        return false;
    });
    // п╬я┌п╨п╩п╬п╫п╦я┌я▄ п╥п╟я▐п╡п╨я┐ п╫п╟ я┐я┤п╟я│я┌п╦п╣ п╡ пЁя─я┐п©п©п╣
    $('button.cancel').live("click", function (e) {
        var formtag = $(this).closest('form'),
            memberid = formtag.find('input[name=member]').val(),
            declButton = formtag.find('button[name=decline]').val();
        formtag.find('button.cancel').text('п·я┌п╨п╩п╬п╫п╣п╫п╬').removeClass('button-grey').addClass('button-red');
        formtag.find('button').attr('disabled', true);
        $.ajax({
            type: 'POST',
            data: {member: memberid, decline: declButton},
            success: function () {
                $('#grc').text(parseInt($('#grc').text()) - 1);
                $('.tabs_link-active span').text(parseInt($('.tabs_link-active span').text()) - 1);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.error('error requests: ', jqXHR, textStatus, errorThrown);
            }

        });
        return false;
    });

    // п╨п╫п╬п©п╨п╟ я│ п©п╬п©п╟п©п╬п╪ "п╟п╢п╪п╦п╫п╦я│я┌я─п╦я─п╬п╡п╟я┌я▄" п╡ пЁя─я┐п©п©п╟я┘
    $('.admin_icon').live("click", function (e) {
        var popup = $(this).closest('.list_botAuthor').find('.admin-popup');
        if (popup.css('display') != "inline-block") {
            popup.css({display: "inline-block"});

        } else {
            popup.hide();
        }
    });

    $('.close_popup').live("click", function (e) {
        $(this).closest('.admin-popup').hide();
    });

    function hideAdminPopup() {
        if ($('.admin-popup:visible')) {
            $('.admin-popup').hide();
        }
    }

    // п╬п╠я─п╟п╠п╟я┌я▀п╡п╟п╣п╪ tab п╦ esc п╫п╟ я─п╟п╢п╦п╬п╨п╫п╬п©п╨п╣ я│п╪п╣п╫я▀ я└п╬я─п╪п╟я┌я▀ я─п╟я│я│я▀п╩п╨п╦ п╦ п╢п╦я│п╨. п╩п╦я│я┌п╟
    function lfesc(obj) {
        var res = obj.parent().attr('id');
        if (res) {
            if (res.match(/^lf(\d+?)$/)) {
                var id = '#fb' + RegExp.$1;
                if ($(id).length) {
                    $(id).parent().removeClass('subscriberu_fbhover');
                    $(id).hide();
                    $(id).parent().children("a.subscriberu_gear").focus();
                }
            }
        }
    }

    $(".subscriberu_lf").keydown(function (event) {
        switch (event.keyCode) {
            case  9:
                lfesc($(this));
            case 27:
                lfesc($(this));
            default:
                ;
        }
    });

    // п╥п╟п©п╦я│я▄ п╢п╟я┌я▀ я─п╬п╤п╢п╣п╫п╦я▐ п╡ п╟п╫п╨п╣я┌я┐
    $('#ymdankbut').click(
        function () {
            var data = '';
            var obj = $(this);
            var res = [];
            var a = ['ankDD', 'ankMM', 'ankYYYY'];
            $.each(a, function (i) {
                if (i > 0) res.push('&');
                res.push(a[i]);
                res.push('=');
                content = $(':input[name=' + a[i] + ']').val();
                res.push(content);
                console.log('a[i]: ', a[i])
            });
            var b = ['&js=1', '&anketa=rotator'];
            $.each(b, function (i) {
                res.push(b[i]);
            });
            data = res.join('');
            console.log('data: ', data, 'res:', res)
            $.ajax({
                type: 'POST',
                url: ajax_url['update'],
                data: data,
                dataType: 'text',
                success: function (res) {
                    res = res.split(/\n/)[0];
                    if (res.match(/^member\/update\/done ank$/)) {
                        $('#ankst').show(); // п©п╬п╨п╟п╥я▀п╡п╟п╣п╪, я┤я┌п╬ п╢п╣п╧я│я┌п╡п╦п╣ п╡я▀п©п╬п╩п╫п╣п╫п╬
                        obj.attr("disabled", "disabled"); // п╡я▀п╨п╩я▌я┤п╟п╣п╪ п╨п╫п╬п©п╨я┐
                        $.each(a, function (i) {
                            $('#' + a[i]).attr("disabled", "disabled");
                        });
                        $('#lankDate').css('color', 'gray');
                    } else {
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                }
            });
        });

    $('.subscriberu_ank_select').change(
        function () {
            var data = '';
            var obj = $(this);
            var a = [$(this).attr('name'), '=', $(this).val(), '&js=1', '&anketa=rotator'];
            var res = [];
            $.each(a, function (i) {
                res.push(a[i]);
            });
            data = res.join('');
            $.ajax({
                type: 'POST',
                url: ajax_url['update'],
                data: data,
                dataType: 'text',
                success: function (res) {
                    res = res.split(/\n/)[0];
                    if (res.match(/^member\/update\/done ank$/)) {
                        obj.attr("disabled", "disabled"); // п╡я▀п╨п╩я▌я┤п╟п╣п╪ п╨п╫п╬п©п╨я┐
                        $('#l' + obj.attr('name')).css('color', 'gray');
                        $('#ankst').show(); // п©п╬п╨п╟п╥я▀п╡п╟п╣п╪, я┤я┌п╬ п╢п╣п╧я│я┌п╡п╦п╣ п╡я▀п©п╬п╩п╫п╣п╫п╬
                    } else {
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                }
            });
        });

    // п╪п╫п╬п╤п╣я│я┌п╡п╣п╫п╫я▀п╧ п╡я▀п╠п╬я─
    $(".subscriberu_ank_r").click(
        function () {
            ank_click($(this));
            return;
        });

    // п©п╬п╢п©п╦я│п╨п╟ п╫п╟ я─п╣п╨п╩п╟п╪п╫я▀п╣ п╪п╟я┌п╣я─п╦п╟п╩я▀ (optin)
    $(".subscriberu_ank_cb").click(
        function () {
            ank_click($(this));
            return;
        });

    // п╬п╠я─п╟п╠п╬я┌я┤п╦п╨ п╫п╟ п╢п╣п╧я│я┌п╡п╦п╣ п╟п╫п╨п╣я┌п╫я▀я┘ п©п╣я─п╣п╨п╩я▌я┤п╟я┌п╣п╩п╣п╧ п╦ я─п╟п╢п╦п╬п╨п╫п╬п©п╬п╨
    function ank_click(obj) {
        var data = '';
        var a = [obj.attr('name'), '=', obj.val(), '&js=1', '&anketa=rotator', '&', obj.attr('name'), 'try'];
        var res = [];
        $.each(a, function (i) {
            res.push(a[i]);
        });
        data = res.join('');
        $.ajax({
            type: 'POST',
            url: ajax_url['update'],
            data: data,
            dataType: 'text',
            success: function (res) {
                res = res.split(/\n/)[0];
                if (res.match(/^member\/update\/done ank$/)) {
                    if (obj.attr('type') == 'radio') { // п╣я│п╩п╦ п╪п╫п╬п╤п╣я│я┌п╡п╣п╫п╫я▀п╧ п╡я▀п╠п╬я─,
                        var a = $(':radio[name=' + obj.attr('name') + ']');
                        $.each(a, function (i) {
                            a[i].disabled = true;
                        }); // п╡я▀п╨п╩я▌я┤п╟п╣п╪ п╡я│п╣ я█п╩п╣п╪п╣п╫я┌я▀
                    } else {
                        obj.attr("disabled", "disabled"); // п╡я▀п╨п╩я▌я┤п╟п╣п╪ п╨п╫п╬п©п╨я┐
                    }
                    $('#l' + obj.attr('name')).css('color', 'gray');
                    $('#ankst').show(); // п©п╬п╨п╟п╥я▀п╡п╟п╣п╪, я┤я┌п╬ п╢п╣п╧я│я┌п╡п╦п╣ п╡я▀п©п╬п╩п╫п╣п╫п╬
                } else {
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
            }
        });
    }

    // п╥п╟п╨я─я▀п╡п╟п╣п╪ п╠п╩п╬п╨ п╦ п©п╬п╥п╦я├п╦п╬п╫п╦я─я┐п╣п╪я│я▐ п╫п╟ я█п╩п╣п╪п╣п╫я┌п╣ я┐п©я─п╟п╡п╩п╣п╫п╦я▐,
    // vajen: я┐п╠п╦я─п╟п╣п╪ п╨п╩п╟я│я│ active  я┐ п╨п╫п╬п©п╨п╦
    function scroll2gear(id) {
        $('#fb' + id).hide();
        //var to = $('#sg' + id).offset().top; // п©п╬п╥п╦я├п╦п╬п╫п╦я─я┐п╣п╪я│я▐
        $('html,body').animate({scrollTop: 0}, "slow");
        $('#fb' + id).closest('.article_actions').find('.subscriberu_selection_gear').removeClass('active');
        $('#fb' + id).closest('.subs_item').find('.subscriberu_selection_gear').removeClass('active');
    }

    $('.cssbtn').click(function () {
        var id = $(this).attr('id');
        if (id.match(/^cssbtn(\d+?)$/)) { // п╥п╟п╨я─я▀п╡п╟п╣п╪ п╠п╩п╬п╨ я│ я└п╬я─п╪п╬п╧ п╡я▀п╠п╬я─п╬я┤п╫п╬п╧ п©п╬п╢п©п╦я│п╨п╦
            id = RegExp.$1
            scroll2gear(id);
        }
    })

    // п╥п╟п©я─п╬я│ п╫п╟ п╡я▀п╠п╬я─п╬я┤п╫я┐я▌ п©п╬п╢п©п╦я│п╨я┐
    $('.ssbtn').click(function () {
        //if (userinfo.authorized==0){
        if ($('.subscriberu_unknown').length) { // п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▄ п╫п╣ п╟п╡я┌п╬я─п╦п╥п╬п╡п╟п╫
            aobj = $(this);
            //showquickForm();
            showloginForm();
            return;
        }
        var id = $(this).attr('id');
        var a = $(this).parent('form').find(':input');
        var res = [];
        var content = '';
        $.each(a, function (i) {
            if (a[i].name.match(/^gc_/) && ((a[i].type == 'checkbox' && a[i].checked) || a[i].type == 'hidden')) {
                content = a[i].name + '=' + a[i].value;
                res.push(content);
            }
        });
        res.push('js=1');
        res.push('action=update');
        var data = res.join('&'); // я└п╬я─п╪п╦я─я┐п╣п╪ п╥п╟п©я─п╬я│
        var pb = $(this).parent('form').children('div.subscriberu_pb');
        pb.html(ui['pbimg']); // п╡п╨п╩я▌я┤п╟п╣п╪ пЁя─п╟п╢я┐я│п╫п╦п╨
        pb.show();
        $.ajax({
            type: 'POST',
            url: ajax_url['update'],
            data: data,
            dataType: 'text',
            success: function (data) {
                pb.hide(); //html(''); // я┐п╠п╦я─п╟п╣п╪ пЁя─п╟п╢я┐я│п╫п╦п╨
                if (id.match(/^ssbtn(\d+?)$/)) { // п╥п╟п╨я─я▀п╡п╟п╣п╪ п╠п╩п╬п╨ я│ я└п╬я─п╪п╬п╧
                    var redirect = '';
                    var reload = 0;
                    if (userinfo['authorized'] == 1) { // п╣я│п╩п╦ п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▄ п╟п╡я┌п╬я─п╦п╥п╬п╡п╟п╩я│я▐
                        redirect = subscriberu['ssbtn']['redirect'];
                        reload = subscriberu['ssbtn']['reload'];
                        doR(redirect, reload); // п╡я▀п©п╬п╩п╫я▐п╣п╪ я─п╣п╢п╦я─п╣п╨я┌ п╦п╩п╦ п©п╣я─п╣п╥п╟пЁя─я┐п╥п╨я┐ я│я┌я─п╟п╫п╦я├я▀
                    }
                    id = RegExp.$1
                    // п╪п╣п╫я▐п╣п╪ п╟п╫п╨п╬я─я▀ п╦ я│я│я▀п╩п╨п╦ п©п╬п╢п©п╦я│п╫я▀я┘ я│я│я▀п╩п╬п╨
                    var lid = '.l' + id;
                    if ($(lid).not('.subscriberu_subscribed').length > 0) {
                        var title = subscriberu_anchor['subscriberu_subscribe']['subhover'];
                        $(lid).attr('href', $(lid).attr('href').replace('/sub?', '/unsub?'));
                        $(lid).addClass('subscriberu_subscribed');
                        $(lid).removeClass('subscriberu_notsubscribed');
                        $(lid).html(title);
                    }
                    scroll2gear(id);
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                pb.hide();
            } //pb.html('');
        })
        return false;
    });

    // п╬я┌п╨я─я▀я┌п╦п╣/п╥п╟п╨я─я▀я┌п╦п╣ я└п╬я─п╪я▀ п╡я▀п╠п╬я─п╬я┤п╫п╬п╧ п©п╬п╢п©п╦я│п╨п╦
    $(".subscriberu_selection_gear").live('click', function () {
        if ($(this).attr('id').match(/^sg(\d+?)$/)) {
            var num = RegExp.$1;
            var fid = '#f' + num;
            var id = '#fb' + num;
            $(this).addClass('active');
            // п╥п╟п╨я─я▀п╡п╟п╣п╪ п╡я│п╣ п╬я┌п╨я─я▀я┌я▀п╣ п╠п╩п╬п╨п╦ п╨я─п╬п╪п╣ я┌п╣п╨я┐я┴п╣пЁп╬
            var a = $('.subscriberu_fblock_category:visible');
            $.each(a, function (i) {
                if (a[i].id != 'fb' + num) {
                    $('#' + a[i].id).hide();
                }
            });
            $(fid).children('div.subscriberu_pb').hide(); //html(''); // пЁя─п╟п╢я┐я│п╫п╦п╨
            $(id)[$(id).is(':visible') ? 'hide' : 'show']();
            if ($(id).is(':visible')) {
                $(id).css("z-index", 99);
            } else {
                $(this).removeClass('active');
            }
            return false;
        }
    })

    //tab - 9, esc -27
    $(".subscriberu_gear").keydown(function (event) {
        switch (event.keyCode) {
            case 13:
                $(this).parent().addClass('subscriberu_fbhover');
                $(this).parent().children("div").show();
                var res = $(this).parent().children("div").attr('id');
                if (res) {
                    if (res.match(/^fb(\d+?)$/)) {
                        var id = '#lf' + RegExp.$1;
                        if ($(id).length) {
                            var r = $(id).children('.subscriberu_lf').focus();
                            $(id).children('.subscriberu_lf').focus();
                        }
                    }
                }
                return false;
                break;
            default:
                $(this).parent().removeClass('subscriberu_fbhover');
                $(this).parent().children("div").hide();
                $(this).focus();
        }
    });

    // п╥п╟п╨я─я▀я┌п╦п╣ п╡я│п©п╩я▀п╡п╟я▌я┴п╣п╧ п©п╬п╢я│п╨п╟п╥п╨п╦
    $("div.subscriberu_fbx").click(
        function () {
            var fbid = 0;
            if ($(this).attr("id").match(/^fbx(\d+?)$/)) fbid = RegExp.$1;
            if (fbid != 0) {
                fbid = '#fb' + fbid;
                $(fbid).parent().removeClass('subscriberu_fbhover');
                $(fbid).hide();
            }
        }
    );

    if ($('#archsearchq').length) { // п╣я│п╩п╦ п╫п╟ я│я┌я─п╟п╫п╦я├п╣ п╣я│я┌я▄ п©п╬п╩п╣ п©п╬п╦я│п╨п╟ п©п╬ п╟я─я┘п╦п╡я┐
        $("#archsearchq").val(uimsg['archsearchtext']); // п╦п╫п╦я├п╦п╟п╩п╦п╥п╦я─я┐п╣п╪ п╣пЁп╬
    }

    // п╣я│п╩п╦ п╡ п©п╬п╦я│п╨п╬п╡п╬п╪ п╥п╟п©я─п╬я│п╣ я┐п╨п╟п╥п╟п╫ п©п╬я▐я│п╫п╦я┌п╣п╩я▄п╫я▀п╧ я┌п╣п╨я│я┌, п╬я┌п©я─п╟п╡п╩я▐п╣п╪ п©я┐я│я┌п╬п╧ п╥п╟п©я─п╬я│
    $(".search").submit(function () {
        if ($("#archsearchq").val() == uimsg['archsearchtext']) $("#archsearchq").val('');
    });
    $("#archsearchq").mouseover(function () {
        $(this).removeClass('empty');
        if ($(this).val() == uimsg['archsearchtext']) $(this).val('');
    });
    $("#archsearchq").mouseout(function () {
        if ($(this).val() == '') {
            $(this).val(uimsg['archsearchtext']);
            $(this).addClass('empty');
        }
    });

    $("form :radio[name=ank16]").click(
        function () {
            //$('#ricaud')[$(this).val() == 'w' ? 'show' : 'hide']();
            if ($('#ricaud').length) {
                if ($(this).val() == 'w') {
                    $('#ricaud').show();
                    advcheck()
                } else {
                    var cb = $("form :checkbox[name=adv\\.ivroshe]");
                    cb.attr('checked', '');
                    cb.attr("disabled", "disabled");
                    $('#ricaud').hide();
                }
            }
        }
    )

    $('.foradv').change(function () {
        advcheck();
    })
    $('.foradv').keyup(function () {
        advcheck();
    })

    // я│я┤п╣я┌я┤п╦п╨ я│п╬п╬п╠я┴п╣п╫п╦п╧
    if ($('#new_pm_count').length) {
        $.ajax({
            url: '/ajax/pm/?what=get_new_count&js=1',
            dataType: 'text',
            timeout: 10000,
            success: function (data) {
                var re = /^\d/;
                if (re.test(data)) {
                    data = data != '0' ? '+' + data : '';
                    if (data != '') {
                        $('#new_pm_count,#new_pm_count_head').text(data);
                        $('#new_pm_count,#new_pm_count_head').show();
                        $('title').prepend('(' + data + ') ');
                    } else {
                        $('#new_pm_count,#new_pm_count_head').hide();
                    }
                }
            }
        });
    }

    if ($('#yadb32').length && $('#yadb32filler').length) {
        var yadb32filler = document.getElementById('yadb32filler');
        var yadb32 = document.getElementById('yadb32');
        yadb32.appendChild(yadb32filler);
//    if ($('.y5_ya').length){
//      alert('y5_ya: ');
//   }
    }

    $(".typeauthid").click(function () {
        if ($('#quickForm').is(':visible')) { // п╣я│п╩п╦ я█я┌п╬ я└п╬я─п╪п╟ п╠я▀я│я┌я─п╬п╧ п©п╬п╢п©п╦я│п╨п╦
            $('#authidcpt').html(uimsg[$(this).val() + 'cpt']);
        } else if ($('#loginForm').is(':visible')) { // я└п╬я─п╪п╟ п╟п╡я┌п╬я─п╦п╥п╟я├п╦п╦
            if ($(this).val() == 'email') {
                $("#trlinkrecall").show();
                $("#trpwd").show();
                $('#lfidcpt').html(uimsg['s' + $(this).val() + 'cpt']);
            } else if ($(this).val() == 'openid') {
                $("#trlinkrecall").hide();
                $("#trpwd").hide();
                $('#lfidcpt').html(uimsg['s' + $(this).val() + 'cpt']);
            }
        } else if ($('#regForm').is(':visible')) { // я└п╬я─п╪п╟ я─п╣пЁп╦я│я┌я─п╟я├п╦п╦
            if ($(this).val() == 'email') {
                $(".trrf").show();
                $("#trrfid").hide();
            } else if ($(this).val() == 'openid') {
                $(".trrf").hide();
                $("#trrfid").show();
            }
        }
    });

    $(".fff").submit(function () {
        return false;
    }); // п╠п╩п╬п╨п╦я─я┐п╣п╪ п╬я┌п©я─п╟п╡п╨я┐ п╢п╟п╫п╫я▀я┘ я└п╬я─п╪я▀
    //$("#rff").submit( function(){return false;});
    //$("#lff").submit( function(){return false;});

    $('#quickForm').keydown(function (event) {
        switch (event.keyCode) {
            case 13:
                $('#quickFormSubBut').click();
                break; // enter
            case 27:
                hidebo();
                break; // hide_form
            default:
                ;
        }
    });


    function changelinkrecall(v) {
        var color = v != '' ? '#1c70a0' : 'gray';
        var cursor = v != '' ? 'pointer' : 'text';
        $('#linkrecall').css('color', color);
        $('#linkrecall').css('cursor', cursor);
        $('#linkrecall').attr('href', ajax_url['recall'] + '?email=' + $('#credential_0').val());
    }

    $('#ajaxlogin').click(function () {
        return showloginForm();
    })
    $('#ajaxreg').live('click', function () {
        showregForm();
        $('#arfemail').focus();
        return false;
    })

    $('.fx').click(function () { // п╬п╠я┴п╣п╣ п╥п╟п╨я─я▀я┌п╦п╣ я└п╬я─п╪я▀-п╠п╩п╬п╨п╟ - п©п╬ п╨п╩п╟я│я│я┐
        if ($(this).attr('id') == 'fxq') { // п╣я│п╩п╦ я█я┌п╬ я└п╬я─п╪п╟ п╡п╡п╬п╢п╟ п╟п╫п╨п╣я┌я▀
            if (userinfo['newreg'] == 1 || userinfo['extquick'] == 2) { // п╢п╩я▐ п╫п╬п╡п╬п╧ я─п╣пЁп╦я│я┌я─п╟я├п╦п╦ п╫п╣ п╡я▀п╡п╬п╢п╦п╪ я│п╬п╬п╠я┴п╣п╫п╦п╣
                if (userinfo['vk']['event'] != '' || userinfo['mru']['event'] != '') { // п╣я│п╩п╦ п©я─п╦я┬п╩п╦ п╦п╥ п╨п╬п╫я┌п╟п╨я┌п╟ п╦п╩п╦ mailru
                    return dosuspended();
                }
                if (userinfo['aobj'] != null) userinfo['aobj'].click(); // п╡я▀п©п╬п╩п╫я▐п╣п╪ п╬я┌п╩п╬п╤п╣п╫п╫п╬п╣ п╢п╣п╧я│я┌п╡п╦п╣
            } else {
                userinfo['new'] = 1; // я└п╦п╨я│п╦я─я┐п╣п╪, я┤я┌п╬ п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▄ п╫п╬п╡я▀п╧
                if (userinfo['confirmed'] != 1) {
                    showquickForm(); // п©п╬п╨п╟п╥я▀п╡п╟п╣п╪ я└п╬я─п╪я┐ п╠я▀я│я┌я─п╬п╧ п©п╬п╢п©п╦я│п╨п╦
                    quickFormOk(); // п╡я▀п╡п╬п╢п╦п╪ п╡ я│п╬п╨я─п╟я┴п╣п╫п╫п╬п╪ п╡п╦п╢п╣
                    show_msg('email_msg', uimsg['congradulation'], 1); // я│п╬п╬п╠я┴п╣п╫п╦п╣ п╬п╠ я┐я│п©п╣я┬п╫п╬п╧ я─п╣пЁп╦я│я┌я─п╟я├п╦п╦
                } else {
                    hidebo();
                }
                return;
            }

        }
        //console.log('fx click');     /**/
        userinfo['vk']['event'] = '';
        userinfo['mru']['event'] = '';
        hidebo();
    })

    $('#credential_0').click(function () {
        changelinkrecall($('#credential_0').attr('value'));
    });
    $('#credential_1').click(function () {
        changelinkrecall($('#credential_0').attr('value'));
    });
    $('#credential_0').keypress(function () {
        changelinkrecall($('#credential_0').attr('value'));
    });
    $('#credential_0').keyup(function () {
        changelinkrecall($('#credential_0').attr('value'));
    });

    // п╥п╟п©п╦я│я▀п╡п╟п╣п╪ п╡ п╨я┐п╨я┐ href я█п╩п╣п╪п╣п╫я┌п╟, п╡я▀п©п╬п╩п╫п╣п╫п╦п╣ п╢п╣п╧я│я┌п╡п╦я▐ п╨п╬я┌п╬я─п╬пЁп╬ п╬я┌п╨п╩п╟п╢я▀п╡п╟п╣п╪ п╢п╬ п╟п╡я┌п╬я─п╦п╥п╟я├п╦я▐ п╦п╩п╦ я─п╣пЁп╦я│я┌я─п╟я├п╦п╦
    function a2c() { // a2c - action to cookie
        if (typeof ($.cookie) == 'function') { // п╣я│я┌я▄ п╨я┐п╨п╦
            if (aobj != null) { // п╣я│п╩п╦ п╬п╠я┼п╣п╨я┌ п╬п©я─п╣п╢п╣п╩п╣п╫
                //alert('a2c');
                if (typeof (aobj.attr('href')) != 'undefined') { // я█п╩п╣п╪п╣п╫я┌ - пЁп╦п©п╣я─я│я│я▀п╩п╨п╟
                    var content = aobj.attr('href');
                    if (content.match(/\/member\/quick/)) { // /member/love
                        content = content.replace('quick?grp', 'sub?grp');
                    }
                    if (userinfo['console']) console.log('content = ' + content);
                    $.cookie('Felissuspended', content, {expires: 7, path: '/'}); //'FelisVKontakte'
                }
            }
        }
    }


    /* GiN hands
     // п╬я┌п©я─п╟п╡п╨п╟ п╢п╟п╫п╫я▀я┘ п╟п╡я┌п╬я─п╦п╥п╟я├п╦п╦
     $('#loginFormBut').click(function(){
     if ($("#lf_typeauthid").val() == 'openid'){
     var url;
     if ($('#loginFormBut').val() == subscriberu_but_cpt['joingroup']){ // п╣я│п╩п╦ п╡я│я┌я┐п©п╟п╣п╪ п╡ пЁя─я┐п©п©я┐
     if (aobj.attr('href').match(/(.+?)\?redirect_to\=(.+?)$/)){
     url = aobj.attr('href');
     if (!url.match(/^http\:\/\//)) url = 'http://' + document.domain + url;
     }
     } else {
     url = aobj.attr('href').replace('quick?grp', 'sub?grp');
     }
     $('#rform').children('input[name=openid]').val($('#credential_0').val());
     $('#rform').children('input[name=destination]').val(url);
     $('#rform').submit();
     } else if ($("#lf_typeauthid").val() == 'email'){
     ajax_auth();
     } else if ($("#lf_typeauthid").val() == 'vkontakte'){
     userinfo['vk']['type'] = 'login';
     a2c();
     $('#loginFormBut').attr('disabled', 'disabled');
     doLogin();
     } else if ($("#lf_typeauthid").val() == 'mailru'){
     $.cookie('mrc', null, {path: '/'});
     userinfo['mru']['type'] = 'login';
     a2c();
     $('#loginFormBut').attr('disabled', 'disabled');
     MruDoLogin();
     }
     return false;
     })
     */
    /* GiN hands
     // п╬я┌п©я─п╟п╡п╨п╟ п╢п╟п╫п╫я▀я┘ я─п╣пЁп╦я│я┌я─п╟я├п╦п╦
     $('#regFormBut').click(function(){
     //if ($(".typeauthid:visible:checked").val() == 'openid'){
     if ($("#rf_typeauthid").val() == 'openid'){
     var url = aobj.attr('href');
     $('#rform').children('input[name=destination]').val(url);
     $('#rform').children('input[name=openid]').val($('#regFormid').val());
     $('#rform').submit();
     } else if ($("#rf_typeauthid").val() == 'email'){
     ajax_reg();
     } else if ($("#rf_typeauthid").val() == 'vkontakte'){
     userinfo['vk']['type'] = 'join';
     a2c();
     $('#regFormBut').attr('disabled', 'disabled');
     //if (userinfo['console']) console.log('dologin' + typeof(VK));
     doLogin();
     } else if ($("#rf_typeauthid").val() == 'mailru'){
     userinfo['mru']['type'] = 'join';
     a2c();
     $('#regFormBut').attr('disabled', 'disabled');
     //if (userinfo['console']) console.log('dologin' + typeof(mailru));
     MruDoLogin();
     }
     return false;
     });

     */

    $('#qFormSubBut').click( // я│п╬я┘я─п╟п╫п╣п╫п╦п╣ п╢п╟п╫п╫я▀я┘ п╟п╫п╨п╣я┌я▀
        function () {
            $(this).attr("disabled", "disabled"); // п╡я▀п╨п╩я▌я┤п╟п╣п╪ п╨п╫п╬п©п╨я┐
            var res = [];
            var data;
            var a = ['ank16', 'ae_fam', 'ae_nam', 'ankDD', 'ankMM', 'ankYYYY', 'ankSG'];
            var content = '';
            var et = '';
            $.each(a, function (i) {
                if (i > 0) {
                    res.push('&')
                }
                ;
                res.push(a[i]);
                res.push('=');
                if (i == 0) {
                    et = 'radio:checked';
                } else if (i == 1 || i == 2) {
                    et = 'text';
                    a[i].replace('_', '\\_');
                } else {
                    et = 'input';
                }
                content = $(':' + et + '[name=' + a[i] + ']').val();
                res.push(content);
            });
            //$('#quickFormid').val()
            var a = ['&charset=', $(':input[name=charset]').val(), '&email=', userinfo['email'], '&js=1', '&anketa=quick', '&try_ae=1'];
            $.each(a, function (i) {
                res.push(a[i]);
            });
            var data = res.join(''); // я└п╬я─п╪п╦я─я┐п╣п╪ п╥п╟п©я─п╬я│
            var pb = $('#qForm').find('div.subscriberu_pb');
            pb.html(ui['pbimg']); // п╡я▀п╡п╬п╢п╦п╪ п©я─п╬пЁя─п╣я│я│п╠п╟я─
            pb.show();
            if (userinfo['console']) console.log('data = ' + ajax_url['update'] + '?' + data);
            $.ajax({
                type: 'POST',
                url: ajax_url['update'],
                data: data,
                dataType: 'text',
                success: function (res) {
                    pb.hide();
                    res = res.split(/\n/)[0];
                    if (userinfo['console']) console.log('res = ' + res);
                    if (res.match(/^member\/update\/done ank$/)) {
                        if (userinfo['newreg'] == 1 || userinfo['extquick'] == 2) { // п╢п╩я▐ п╫п╬п╡п╬п╧ я─п╣пЁп╦я│я┌я─п╟я├п╦п╦ п╫п╣ п╡я▀п╡п╬п╢п╦п╪ я│п╬п╬п╠я┴п╣п╫п╦п╣
                            hidebo();
                            if (userinfo['vk']['event'] != '') { // п╣я│п╩п╦ п©я─п╦я┬п╩п╦ п╦п╥ п╨п╬п╫я┌п╟п╨я┌п╟
                                return dosuspended();
                            }
                            if (userinfo['aobj'] != null) userinfo['aobj'].click(); // п╡я▀п©п╬п╩п╫я▐п╣п╪ п╬я┌п╩п╬п╤п╣п╫п╫п╬п╣ п╢п╣п╧я│я┌п╡п╦п╣
                        } else {
                            userinfo['new'] = 1; // я└п╦п╨я│п╦я─я┐п╣п╪, я┤я┌п╬ п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▄ п╫п╬п╡я▀п╧
                            if (userinfo['confirmed'] != 1) { // п╣я│п╩п╦ п╣я┴п╣ п╫п╣ п©п╬п╢я┌п╡п╣я─п╢п╦п╩ я─п╣пЁп╦я│я┌я─п╟я├п╦я▌
                                showquickForm(); // п©п╬п╨п╟п╥я▀п╡п╟п╣п╪ я└п╬я─п╪я┐ п╠я▀я│я┌я─п╬п╧ п©п╬п╢п©п╦я│п╨п╦
                                quickFormOk(); // п╡я▀п╡п╬п╢п╦п╪ п╡ я│п╬п╨я─п╟я┴п╣п╫п╫п╬п╪ п╡п╦п╢п╣
                                show_msg('email_msg', uimsg['congradulation'], 1); // я│п╬п╬п╠я┴п╣п╫п╦п╣ п╬п╠ я┐я│п©п╣я┬п╫п╬п╧ я─п╣пЁп╦я│я┌я─п╟я├п╦п╦
                            } else {
                                hidebo(); // п©я─п╬я│я┌п╬ п╥п╟п╨я─я▀п╡п╟п╣п╪ п╬п╨п╫п╬
                            }
                        }
                    } else {
                        var msg = typeof (apimsg[data]) != "undefined" ? apimsg[data] : '';
                        show_msg('q_msg', msg, 0);
                        pb.hide();
                        $('#qFormSubBut').attr("disabled", "");
                    }
                },
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                }
            })
        }
    )

    // п╡я▀п╡п╬п╢ я└п╬я─п╪я▀ п╟п╡я┌п╬я─п╦п╥п╟я├п╦п╦ я┌п╬п╩я▄п╨п╬ я│ п©п╟я─п╬п╩п╣п╪
    function showpwdform(arg) {
        userinfo['recommendation'] = 1;
        showloginForm(); // п╡п╡п╣я│я┌п╦ п©п╟я─п╬п╩я▄

        var cb = $(":checkbox[name=addgrp]");
        cb.attr("checked", ""); // п╡я▀п╨п╩я▌я┤п╟п╣п╪ п╡я│п╣ я└п╩п╟п╤п╨п╦

        //
        if (userinfo['defgrplist'] != '' && typeof (userinfo['defgrplist']) != "undefined") {
            var pattern = userinfo['defgrplist'];
            for (i = 0; i < cb.length; i++) {
                if (cb[i].value.match(pattern)) {
                    cb[i].checked = true; // п╬я┌п╪п╣я┤п╟п╣п╪ я─п╣п╨п╬п╪п╣п╫п╢п╬п╡п╟п╫п╫я▀п╣ п╢п╟п╧п╢п╤п╣я│я┌я▀ п╦ я─п╟я│я│я▀п╩п╨п╦
                }
            }
        }
        if (userinfo['console']) console.log('cb length = ' + cb.length);
        $('#tremail').hide(); // я│п╨я─я▀п╡п╟п╣п╪ п©п╬п╩п╣ email
        $('#trpwd').show(); // п©п╬п╨п╟п╥я▀п╡п╟п╣п╪ п©п╬п╩п╣ п©п╟я─п╬п╩я▐
        $('#lf_tapanel').hide();
        $('#loginFormCpt').css('margin-left', '3em');
        $('#loginFormBut').val(subscriberu_but_cpt['subscribe']);
        $('#credential_0').attr('value', arg['email']); // я┐я│я┌п╟п╫п╟п╡п╩п╦п╡п╟п╣п╪ п╟п╢я─п╣я│ п╡ я│п╨я─я▀я┌п╬п╣ п©п╬п╩п╣
        changelinkrecall(1); // п╡п╨п╩я▌я┤п╟п╣п╪ я│я│я▀п╩п╨я┐ п╫п╟п©п╬п╪п╦п╫п╟п╫п╦я▐
        var msg = uimsg['quickadd'].replace('XXX', arg['email']); // п©п╬п╢я│я┌п╟п╫п╬п╡п╨п╟ п╡ я│п╬п╬п╠я┴п╣п╫п╦п╣ email-п╟п╢я─п╣я│п╟
        show_msg('auth_msg', msg, 1); // п╡я▀п╡п╬п╢п╦п╪ я┌п╣п╨я│я┌ я│п╬ я│я│я▀п╩п╨п╬п╧ п╫п╟ п╬я┌п©я─п╟п╡п╨я┐ п╥п╟п©я─п╬я│п╟ п©п╬п╢я┌п╡п╣я─п╤п╢п╣п╫п╦я▐
        $('#auth_msg_b').html(uimsg['sendmeletter']);
        $('.linkconfirm').attr('href', ajax_url['quick'] + '?addgrp=' + arg['addgrp'] + '&email=' + arg['email'] + '&byemail=1');
        $('#lftrtypeauth').hide(); // я│п╨я─я▀п╡п╟п╣п╪ п╡я▀п╠п╬я─ я│п©п╬я│п╬п╠п╟ п╟п╡я┌п╬я─п╦п╥п╟я├п╦п╦
        $('.linkconfirm').click( //п╥п╟п©я─п╬я│ п╫п╟ п©п╬п╩я┐я┤п╣п╫п╦п╣ п©п╦я│я▄п╪п╟ я│п╬ я│я│я▀п╩п╨п╬п╧ п╢п╩я▐ п©п╬п╢п©п╦я│п╨п╦
            function () {
                var h = arg;
                h['byemail'] = 1;
                var data = h2q(h);
                confirmbyemail(data);
                return false;
            }
        )
    }


    $('#confirmlaterFormBut').click(function () { // п╬я┌п╩п╬п╤п╣п╫п╫я▀п╧ п╡п╡п╬п╢ п╨п╬п╢п╟ п©п╬п╢я┌п╡п╣я─п╤п╢п╣п╫п╦я▐ - п©п╣я─п╣я┘п╬п╢ п╨ п╟п╫п╨п╣я┌п╣
        showqForm(); // п╟п╫п╨п╣я┌п╟
    });

    $('#quickFormSubBut').click( // п╠я▀я│я┌я─п╟я▐ п©п╬п╢п©п╦я│п╨п╟
        function () {
            var ta = $("#qf_typeauthid").val();
            if (ta == 'openid') {
                var listgid;
                if (aobj.attr('href').match(/\?grp=(.+?)$/)) listgid = RegExp.$1
                $('#rform').children('input[name=openid]').val($('#quickFormid').val());
                $('#rform').children('#addgrp').val(listgid);
                $('#rform').children('input[name=destination]').val(document.URL);
                $('#rform').submit();
                return false;
            } else if (ta == 'email') {
                $('#quickFormSubBut').attr('disabled', 'disabled');
                userinfo['email'] = $('#quickFormid').val();
                $(this).attr("disabled", "disabled"); // п╡я▀п╨п╩я▌я┤п╟п╣п╪ п╨п╫п╬п©п╨я┐
                if (!aobj && userinfo['vk']['event'] == '' && userinfo['mru']['event'] == '') return false;
                userinfo['quick'] = 1;
                var listgid; // п╨п╬п╢ я─п╟я│я│я▀п╩п╨п╦
                var pb = $('#subscriberu_email_pb');
                pb.html(ui['pbimg']);
                pb.show();

                if (typeof (aobj) != "undefined") {
                    if (aobj.hasClass('ssbtn')) { // п╡я▀п╠п╬я─п╬я┤п╫п╟я▐ п©п╬п╢п©п╦я│п╨п╟ --
                        var h = {};
                        if (aobj.attr('id').match(/^ssbtn(\d+?)$/)) {
                            id = RegExp.$1
                            var a = $('#f' + id).find(':input');
                            var res = [];
                            var content = '';
                            $.each(a, function (i) {
                                if (a[i].name.match(/^gc_/) && ((a[i].type == 'checkbox' && a[i].checked) || a[i].type == 'hidden')) {
                                    content = a[i].name + '=' + a[i].value;
                                    res.push(content);
                                }
                            });
                            res.push('js=1');
                            res.push('email=' + $('#quickFormid').val());
                            if (userinfo['vk']['event'].match(/^login|xz$/)) {
                                res.push('credential_2=');
                                res.push('credential_3=vk.join');
                            } else if (userinfo['mru']['event'].match(/^login|xz$/)) {
                                res.push('credential_2=');
                                res.push('credential_3=mru.join');
                            }
                            var data = res.join('&'); // я└п╬я─п╪п╦я─я┐п╣п╪ п╥п╟п©я─п╬я│
                            $.ajax({
                                type: 'POST',
                                url: ajax_url['quick'],
                                data: data,
                                dataType: 'text',
                                timeout: 5000,
                                success: function (res) {
                                    pb.hide();
                                    $('#quickFormSubBut').attr('disabled', '');
                                    res = res.split(/\n/)[0];
                                    if (res.match(/^member\/quick\/(add|new)$/)) {
                                        var what = RegExp.$1
                                        if (what == 'add') { // п╟п╢я─п╣я│ я┐п╤п╣ п©п╬п╢п©п╦я│п╟п╫, п©я─п╣п╢п╩п╟пЁп╟п╣п╪ п╡п╟я─п╦п╟п╫я┌я▀
                                            showloginForm(); // п╡п╡п╣я│я┌п╦ п©п╟я─п╬п╩я▄
                                            $('#lf_tapanel').hide();
                                            $('#loginFormCpt').css('margin-left', '3em');
                                            $('#loginFormBut').val(subscriberu_but_cpt['subscribe']);
                                            $('#credential_0').attr('value', $('#quickFormid').val());
                                            $('#credential_0').click(); // п╡п╨п╩я▌я┤п╟п╣п╪ я│я│я▀п╩п╨я┐ п╫п╟п©п╬п╪п╦п╫п╟п╫п╦я▐
                                        } else if (what == 'new') {
                                            eventstat('reg');
                                            userinfo['needconfirm'] == 1 ? showconfirmForm() : showqForm();
                                        }
                                    } else {
                                        var msg = typeof (apimsg[res]) != "undefined" ? apimsg[res] : '';
                                        showquickForm();
                                        $('#qf_tapanel').hide();
                                        show_msg('email_msg', msg, 0);
                                    }
                                },
                                error: function (XMLHttpRequest, textStatus, errorThrown) {
                                    pb.hide();
                                    $('#quickFormSubBut').attr('disabled', '');
                                    show_msg("email_msg", uimsg['httperr'] + ' ' + XMLHttpRequest.status, 0);
                                }
                            })
                        }
                        return;
                    } // -- п╡я▀п╠п╬я─п╬я┤п╫п╟я▐ п©п╬п╢п©п╦я│п╨п╟
                } // aobj

                if (userinfo['vk']['event'] == 'xz' || userinfo['mru']['event'] == 'xz') {
                    if (typeof ($.cookie) == 'function') { // п╣я│я┌я▄ п╨я┐п╨п╦
                        var suspended = $.cookie('Felissuspended'); // п╬я┌п╩п╬п╤п╣п╫п╫п╬п╣ п╢п╣п╧я│я┌п╡п╦п╣
                        if (suspended.match(/grp=(.+?)$/)) listgid = RegExp.$1;
                        if (userinfo['console']) console.log('XZ, listgid = ' + listgid);
                    }
                } else {
                    if (typeof (aobj) != "undefined") {
                        if (aobj.attr('href')) {
                            if (aobj.attr('href').match(/(?:grp=|catalog\/)(.+?)$/)) listgid = RegExp.$1
                        }
                    }
                }
                var h = {};
                h['addgrp'] = listgid;
                h['email'] = $('#quickFormid').val();
                h['js'] = 1;
                if (userinfo['vk']['event'].match(/^login|xz$/)) {
                    h['credential_2'] = '';
                    h['credential_3'] = 'vk.join';

                    if ($('#subscriberu_anksyncq').attr('checked') == true) { // п╡я▀п╠я─п╟п╫п╬ п╬п╠п╫п╬п╡п╩п╣п╫п╦п╣ п╟п╫п╨п╣я┌я▀ п╢п╟п╫п╫я▀п╪п╦ п╦п╥ vk
                        h['credential_3'] = 'vk.join,anksync';
                        userinfo['anksync'] = 1;
                    }
                }

                if (userinfo['mru']['event'].match(/^login|xz$/)) {
                    h['credential_2'] = '';
                    h['credential_3'] = 'mru.join';

                    if ($('#subscriberu_anksyncqmr').attr('checked') == true) { // п╡я▀п╠я─п╟п╫п╬ п╬п╠п╫п╬п╡п╩п╣п╫п╦п╣ п╟п╫п╨п╣я┌я▀ п╢п╟п╫п╫я▀п╪п╦ п╦п╥ Mail.ru
                        h['credential_3'] = 'mru.join,anksync';
                        userinfo['anksync'] = 1;
                    }
                }

                var data = h2q(h);
                if (userinfo['console']) console.log('quick = ' + ajax_url['quick'] + '?' + data);
                $.ajax({
                    type: 'POST',
                    url: ajax_url['quick'],
                    data: data,
                    dataType: 'text',
                    success: function (r) {
                        pb.hide();
                        $('#quickFormSubBut').attr('disabled', '');

                        var a = r.split(/\n/);
                        var res = a[0];
                        if (typeof (a[1]) != 'undefined') userinfo['defgrplist'] = a[1];

                        if (userinfo['console']) console.log('defgrplist  = ' + userinfo['defgrplist']);
                        if (userinfo['console']) console.log('quick res = ' + res);
                        if (res.match(/^member\/quick\/(add|new)$/)) {
                            var what = RegExp.$1
                            if (what == 'add') { // п╟п╢я─п╣я│ я┐п╤п╣ п©п╬п╢п©п╦я│п╟п╫, п©я─п╣п╢п╩п╟пЁп╟п╣п╪ п╡п╟я─п╦п╟п╫я┌я▀
                                showpwdform(h); // я└п╬я─п╪п╟ п╢п╩я▐ п╡п╡п╬п╢п╟ п©п╟я─п╬п╩я▐
                            } else if (what == 'new') {
                                eventstat('reg');
                                userinfo['needconfirm'] == 1 ? showconfirmForm() : showqForm();
                            }
                        } else { // п╫п╟п©я─п╦п╪п╣я─, я┐п╤п╣ п©п╬п╢п©п╦я│п╟п╫ - member\/quick\/already
                            var msg = typeof (apimsg[res]) != "undefined" ? apimsg[res] : res;
                            showquickForm();
                            $('#qf_tapanel').hide();
                            show_msg('email_msg', msg, 0);
                        }
                    },
                    error: function (XMLHttpRequest, textStatus, errorThrown) {
                        pb.hide();
                        $('#quickFormSubBut').attr('disabled', '');
                        show_msg("email_msg", uimsg['httperr'] + ' ' + XMLHttpRequest.status, 0);
                    }
                });
                return false;
            } // email
            else if (ta == 'vkontakte') {
                userinfo['vk']['type'] = 'xz';
                a2c();
                $('#quickFormSubBut').attr('disabled', 'disabled');
                doLogin();
            } else if (ta == 'mailru') {
                userinfo['mru']['type'] = 'xz';
                a2c();
                $('#quickFormSubBut').attr('disabled', 'disabled');
                MruDoLogin();
            }

        }
    )
    // п╬п╠я─п╟п╠п╬я┌я┤п╦п╨ п╫п╟п©п╬п╪п╦п╫п╟п╫п╦я▐ п©п╟я─п╬п╩я▐
    $('#linkrecall').click(
        function () {
            if ($('#credential_0').val() != '') {
                var data = 'email=' + $('#credential_0').val();
                var pb = 'subscriberu_authform_pb';
                pbshow(pb);
                $.ajax({
                    'type': 'GET',
                    'url': ajax_url['recall'],
                    'data': data,
                    'dataType': 'text',
                    'success': function (data) {
                        pbhide(pb);
                        show_msg('auth_msg', uimsg['recall'], 1);
                        $('#linkrecall').css('color', 'gray');
                        $('#linkrecall').css('cursor', 'text');
                    },
                    'error': function (XMLHttpRequest, textStatus, errorThrown) {
                        pbhide(pb);
                    }
                });
            }
            return false;
        }
    );

    $('#nf_nick').keydown(function (event) {
        switch (event.keyCode) {
            case 13:
                $('#nickFormBut').click();
                break;
            case 27:
                hidebo();
                break;
            default:
                ;
        }
    });

    // п©я─п╬п╡п╣я─п╨п╟ п╦ (п╡ я│п╩я┐я┤п╟п╣ я┐я│п©п╣я┬п╫п╬пЁп╬ я─п╣п╥я┐п╩я▄я┌п╟я┌п╟) п╢п╬п╠п╟п╡п╩п╣п╫п╦п╣ п╫п╦п╨п╟ п╡ п©я─п╬я└п╦п╩я▄
    $('#nickFormBut').click(function (e) {
        if (e.button == 0 || !$(this).hasClass('subscriberu_nonick')) { // я┌п╬п╩я▄п╨п╬ п╢п╩я▐ п╩п╣п╡п╬п╧ п╨п╫п╬п©п╨п╦ п╪я▀я┬п╦
            $(this).attr('disabled', 'disabled');
            var nick = $('#nf_nick').val().replace(/(^\s+)|(\s+$)/g, '');
            if (!nick) {
                show_msg('nick_msg', blog_msg_code['nick_used'], 0);
                $(this).attr('disabled', '');
                return false;
            }
            ;
            var pb = $('#subscriberu_nick_pb');
            pb.html(ui['pbimg']);
            pb.show();
            var data = 'nick=' + nick + '&js=1';
            $.ajax({
                'type': 'POST',
                'url': ajax_url['profile'],
                'data': data,
                'dataType': 'text',
                'success': function (res) {
                    $('#nickFormBut').attr('disabled', '');
                    if (res == '0') { // п╫п╦п╨ я│п╡п╬п╠п╬п╢п╣п╫
                        show_msg('nick_msg', blog_msg_code['nick_free'], 1);
                        var d = 'ae_nick=' + nick + '&js=1&anketa=grppost' + '&charset=' + $('#nick_charset').val() + '&try_ae=1';
                        $.ajax({
                            'type': 'POST',
                            'url': ajax_url['update'],
                            'data': d,
                            'dataType': 'text',
                            'success': function (r) {
                                pb.hide();
                                r = r.split(/\n/)[0];
                                if (r.match(/^member\/update\/done ank$/)) {
                                    userinfo['needclick'] = 1;
                                    $('.subscriberu_nonick').removeClass('subscriberu_nonick');
                                    hidebo();
                                    if (typeof (aobj) != "undefined") aobj.click();
                                } else { // п╬п╠я─п╟п╠п╬я┌п╨п╟ п╬я┬п╦п╠п╨п╦
                                }

                            },
                            'error': function (XMLHttpRequest, textStatus, errorThrown) {
                                $('#nickFormBut').attr('disabled', '');
                                pb.hide();
                            }
                        });
                    } else if (res == '1') {
                        pb.hide();
                        show_msg('nick_msg', blog_msg_code['nick_used'], 0);
                        return false;
                    }
                },
                'error': function (XMLHttpRequest, textStatus, errorThrown) {
                    $('#nickFormBut').attr('disabled', '');
                    pb.hide();
                }
            })
        } // if e.button==0
    });

    $('.subscriberu_reload').live('click', function () {
        if (!$(this).hasClass('subscriberu_unknown')) doR('', 1);
    });


    $('.subscriberu_neednick').live('click', function () {
        if (!$(this).hasClass('subscriberu_nonick')) {
            doR('', 1);
        }
    });
    $('.subscriberu_nonick').live('click', function () { // п©п╬п©я▀я┌п╨п╟ п╢п╬п╠п╟п╡п╦я┌я▄ п╨п╬п╪п╪п╣п╫я┌п╟я─п╦п╧ п╦п╩п╦ п╬я┌п╨я─я▀я┌я▄ п©п╬я│я┌ п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩п╣п╪ я│ п╫п╣я┐п╨п╟п╥п╟п╫п╫я▀п╪ п╫п╦п╨п╬п╪
        aobj = $(this);
        shownickForm();
        return false;
    });


    $('.subscriberu_check_reg').live("click", function () {
        var i = $(this);
        if (!i.hasClass('subscriberu_unknown')) { // п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▄ п╦п╥п╡п╣я│я┌п╣п╫
            i.attr("checked", "checked");
            var redirect = subscriberu['subscriberu_check_reg']['redirect'];
            var reload = subscriberu['subscriberu_check_reg']['reload'];
            if (redirect != '') {
                window.location.href = redirect;
            } else if (reload == 1) {
                window.location.href = window.location;
            }
        }
    });

    // ank - я─п╟я│п╨я─я▀п╡п╟я▌я┴п╦п╣я│я▐ п╠п╟п╫п╫п╣я─я▀
    $('.advban_open').mouseover(function () {
        var fon_obj = $('#advban_' + $(this).attr('advban_id') + '_fon');
        if (fon_obj.length) fon_obj.show();
        var div_obj = $('#advban_' + $(this).attr('advban_id') + '_big');
        if (div_obj.length) div_obj.show();
    });
    $('.advban_close').mouseout(function () {
        var div_obj = $('#advban_' + $(this).attr('advban_id') + '_big');
        if (div_obj.length) div_obj.hide();
        var fon_obj = $('#advban_' + $(this).attr('advban_id') + '_fon');
        if (fon_obj.length) fon_obj.hide();
    });
    // ank

    // я│я│я▀п╩п╨п╟ пЁя─я┐п©п©я▀: п©я─п╦я│п╬п╣п╢п╦п╫п╣п╫п╦п╣/п╡я▀я┘п╬п╢
    $('a.joingroup').click(function () {
        if (!$(this).hasClass('ask-anonymous')) {
            if ($(this).hasClass('removemefromgroup')) {
                window.location.href = $(this).attr('href');
            } else {
                $.cookie('_fsg', 1, {path: '/group'});
                $.cookie('_hb', 1, {expires: 3000, path: document.URL});
                if ($(this).attr('href').match(/(.+?)\?redirect_to\=(.+?)$/)) {
                    var url = {'join': RegExp.$1, 'redirect': RegExp.$2};
                    $.ajax({
                        'url': url['join'], 'dataType': 'text', 'timeout': 5000, 'success': function (data) {
                            window.location.href = document.URL;
                        }
                    });
                } else {
                    window.location.href = $(this).attr('href');
                }
            }
        }
        return false;
    });


// GiN FixMe please -> go to new file (ajax_actions_for_unknown_user)

// я┐п╫п╦п╡п╣я─я│п╟п╩я▄п╫я▀п╧ п╬п╠я─п╟п╠п╬я┌я┤п╦п╨ п╡я│п╣я┘ п╢п╣п╧я│я┌п╡п╦п╧ п╫п╣п╟п╡я┌п╬я─п╦п╥п╬п╡п╟п╫п╫п╬пЁп╬ п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▐ - п╥п╟п©п╬п╪п╦п╫п╟п╣я┌ п╬п╠я┼п╣п╨я┌, п╦ п╬я┌п╨п╩п╟п╢я▀п╡п╟п╣я┌ п╡я▀п©п╬п╩п╫п╣п╫п╦п╣ п╣пЁп╬ п╢п╣п╧я│я┌п╡п╦я▐ п╢п╬ п╟п╡я┌п╬я─п╦п╥п╟я├п╦п╦
// GiN hands: п╫п╣, п╫п╣ я┐п╫п╦п╡п╣я─я│п╟п╩я▄п╫я▀п╧ :( я┌п╟п╪ п╫п╦п╤п╣ п╣я┴п╣ п╣я│я┌я▄ п╬п╢п╦п╫ п╢п╩я▐ п©п╬п╢п©п╦я│п╨п╦ - я┌п╟п╨ п╬п╫п╦ п╬п╠п╟ п╦ я│я─п╟п╠п╟я┌я▀п╡п╟я▌я┌.
    $('.subscriberu_unknown').live("click", function (e) {
        if (userinfo['console']) console.log("$(.subscriberu_unknown).click");
        /* if (e.button==0 || userinfo['authorized']==1)
         { // я┌п╬п╩я▄п╨п╬ п╢п╩я▐ п╩п╣п╡п╬п╧ п╨п╫п╬п©п╨п╦ п╪я▀я┬п╦
         aobj = $(this);
         if (aobj.hasClass('subscriberu_unknown'))
         { // я█я┌п╬ я┐я│п╩п╬п╡п╦п╣ п╫я┐п╤п╫п╬ п╦п╥-п╥п╟ п╢п╦п╫п╟п╪п╦я┤п╣я│п╨п╬пЁп╬ п©п╣я─п╣п╨п╩я▌я┤п╣п╫п╦я▐ п╨п╩п╟я│я│п╬п╡
         if (userinfo['console']) console.log('subscriberu_unknown need show login');
         userinfo['quick'] = 0;
         showloginForm();
         if (aobj.hasClass('subscriberu_answer'))
         {
         if (userinfo['console']) console.log('subscriberu_answer');
         if (aobj.attr('id').match(/^add_comment_(\d+?)$/)){ // п╣я│п╩п╦ id п╥п╟п╢п╟п╫
         var id = RegExp.$1;
         $.cookie('Subscribe::Digest_commentid', id, {expires: 7, path: '/'}); // п╥п╟п©п╦я│я▀п╡п╟п╣п╪ п╣пЁп╬ п╡ п╨я┐п╨я┐, я┤я┌п╬п╠я▀ п©п╬я┌п╬п╪ я│п©п╬п╥п╦я├п╦п╬п╫п╦я─п╬п╡п╟я┌я▄я│я▐
         }
         }
         }

         }
         */
        return false;
    });


    $('a.subscriberu_group_join').live("click", function (e) {
        if (userinfo['console']) console.log("$('a.subscriberu_group_join').click");
        if (e.button == 0 || userinfo['authorized'] == 1) {// я┌п╬п╩я▄п╨п╬ п╢п╩я▐ п╩п╣п╡п╬п╧ п╨п╫п╬п©п╨п╦ п╪я▀я┬п╦
            var i = $(this);
            if (i.hasClass('subscriberu_unknown')) {//п╫п╣п╟п╡я┌п╬я─п╦п╥п╦я─п╬п╡п╟п╫п╫я▀п╧ п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▄, п©п╬п╨п╟п╥я▀п╡п╟п╣п╪ я└п╬я─п╪я┐ п╩п╬пЁп╦п╫п╟/я─п╣пЁп╦я│я┌я─п╟я├п╦п╦
                aobj = $(this);
                showloginForm();
                return;
            } else {//п©п╬п╩я▄п╥п╬п╡п╟п╣я┌п╩я▄ п╦п╥п╡п╣я│я┌п╣п╫
                var redirect = subscriberu['subscriberu_group_join']['redirect'];
                var reload = subscriberu['subscriberu_group_join']['reload'];
                if (redirect != '') {
                    window.location.href = redirect;
                } else if (reload == 1) {
                    window.location.href = window.location;
                }
                $.post(i.attr('href'), {}, function (data) {
                    if (userinfo['console']) console.log('group_join: ' + data);
                });
            }
        }
        return false;
    });


    $('a.subscriberu_subscribe').live('click', function (e) {//п©п╬п╢п©п╦я│п╨п╟ п╫п╟ я─п╟я│я│я▀п╩п╨я┐
        if (userinfo['console']) console.log("$(a.subscriberu_subscribe.click)");

        if (e.button == 0 || userinfo['authorized'] == 1) { // я┌п╬п╩я▄п╨п╬ п╢п╩я▐ п╩п╣п╡п╬п╧ п╨п╫п╬п©п╨п╦ п╪я▀я┬п╦
            var i = $(this);
            aobj = $(this);
            if (i.hasClass('subscriberu_unknown')) {//п╫п╣п╟п╡я┌п╬я─п╦п╥п╦я─п╬п╡п╟п╫п╫я▀п╧ п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▄, п©п╬п╨п╟п╥я▀п╡п╟п╣п╪ я└п╬я─п╪я┐ п╩п╬пЁп╦п╫п╟/я─п╣пЁп╦я│я┌я─п╟я├п╦п╦
                aobj = $(this);
                showloginForm();
                return;
            } else { // п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▄ п╦п╥п╡п╣я│я┌п╣п╫
                var sub_action = i.hasClass('subscriberu_notsubscribed') ? 'addgrp' : 'rmgrp';
                var href = i.attr('href');
                var listgid;
                if (href.match(/(?:grp=|catalog\/)(.+?)$/)) listgid = RegExp.$1
                var h = {};
                h['grp'] = listgid;
                h['js'] = 1;
                h['action'] = 'update';
                if (sub_action) {//п╬я┌я┤п╣пЁп╬п╤п╣ п╬я┌я┤п╣пЁп╬п╤п╣ п╬я┌я┤п╣пЁп╬п╤п╣ п╫п╣я┌я┐ я┐ п╫п╟я│ п©я─п╦п╥п╫п╟п╨п╟ я┤п╣ я│п╬п╠я│я┌п╡п╣п╫п╫п╬ п╢п╣п╩п╟п╣п╪?
                    h[sub_action] = h['grp'];
                }
                var redirect = '';
                var reload = 0;
                if (userinfo['authorized'] == 1) { // п╣я│п╩п╦ п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▄ п╟п╡я┌п╬я─п╦п╥п╬п╡п╟п╩я│я▐
                    redirect = subscriberu['subscriberu_subscribe']['redirect'];
                    reload = subscriberu['subscriberu_subscribe']['reload'];
                }

                var farg = new Array(i.attr('lid'), redirect, reload);

                var data = h2q(h);

                if (userinfo['authorized'] == 1) {
                    var cb = $(":checkbox[name=addgrp]:checked");
                    for (i = 0; i < cb.length; i++) {
                        data += '&addgrp=' + cb[i].value;
                    }
                }
                if (userinfo['console']) console.log('send update: ->' + ajax_url['subscribe'] + '-> ' + data);
                $.ajax(
                    { // п╡я▀п©п╬п╩п╫я▐п╣п╪ п╥п╟п©я─п╬я│ п╫п╟ п©п╬п╢п©п╦я│п╨я┐
                        'type': 'POST',
                        'url': ajax_url['subscribe'],
                        'data': data,
                        'dataType': 'text',
                        'success': function (data) {
                            /*if(data.indexOf('unsub')<0)  {
                                changeFlocktoryClass(e.target);    // surprise from flocktory - show block
                            } else {
                                hideSurprise();
                            }*/
                            parse_sub_res(data, farg);
                        },
                        'error': function (XMLHttpRequest, textStatus, errorThrown) {
                        }
                    });
            }
        }
        return false;
    });

    // п©п╬п╢я│п╨п╟п╥п╨п╦ -п╢п╩я▐ я┌п╬п╩я▄п╨п╬-я┤я┌п╬ п╡я│я┌я┐п©п╦п╡я┬п╣пЁп╬ п╡ пЁя─я┐п©п©я┐,
    function showHelpbox() {
        $(document).ready(function () {
            $.cookie('_hb', 2, {expires: 3000, path: document.URL});
            $('.group_actions .phSelect').css({"zIndex": "445", "backgroundColor": "#fff"});
            $('.flockwrap,.group_sets.button-abs').css({"zIndex": "445"});
            $('.helpbox').show();
            $('.overlay').show();
        });
    }

    if ($.cookie('_hb') == 1) {
        showHelpbox();
    }

    $('.overlay').live('click', function () {
        $('.helpbox').hide();
    });

    /* flocktory - surprise  */


    // п╣я│п╩п╦ п╡ пЁя─я┐п©п©п╟я┘
    /*    if($.cookie('_fsg')==1) {
        var cookies = $.cookie('_fs'),
            elem = $('.create-theme');
        if(!cookies) {
            cookies = 1;
        } else {
            cookies=parseInt(cookies)+1;
        }
        $.cookie('_fs',cookies,{expires:30,path:'/'});
        if(cookies > 2 && cookies < 6) {
            $.cookie('_fsg',30,{path: '/group'});
            openSurprise(elem,true);
        } else if(cookies && cookies < 3) {
            $.cookie('_fsg',30,{path: '/group'});
            openSurprise(elem,false);
        }
    }*/


    // я│п©п╟я│п╦п╠п╬, п╫п╣ п╫п╟п╢п╬
    /*$('.flocktory_close').live('click', function (e) {
        $.cookie('_fs', 30, {expires: 30, path: '/'});
        hideSurprise();
    });*/


    /*$('body').live('click',function(){
        hideSurprise();
        //hideAdminPopup();
    });*/

    // open surprise when user subscribed
    /*function changeFlocktoryClass(elem) {
        hideSurprise();
        var cookies = $.cookie('_fs');
        if(!cookies || +cookies < 6)  {
            var flock = $(elem).siblings(".flockwrap");
            flock.css({'display':'inline-block','width':'1px','height':'1px'});
            showSurprise(true,elem);
        }
    }*/

    /*function showSurprise(subs,elem) {
        var cookies = $.cookie('_fs'),
            expires = 30;     // п╪п╣я│я▐я├
        if(subs) {
            switch (+cookies) {
                case 1:
                    openSurprise(elem,false);
                    $.cookie('_fs',2,{expires:expires,path:'/'});
                    break;
                case 2:
                    openSurprise(elem,true);
                    $.cookie('_fs', 3, {expires: expires, path: '/'});
                    break;
                case 3:
                    openSurprise(elem,true);
                    $.cookie('_fs', 4, {expires: expires, path: '/'});
                    break;
                case 4:
                    openSurprise(elem,true);
                    $.cookie('_fs', 5, {expires: expires, path: '/'});
                    break;
                default:
                    if (!cookies || +cookies < 1) {
                        $.cookie('_fs', 1, {expires: expires, path: '/'});
                        openSurprise(elem,false);
                    } else {
                        $.cookie('_fs', 30, {expires: expires, path: '/'});
                        hideSurprise();
                    }
                    break;
            }
        }
    }*/

    /*function hideSurprise(){
        if($('.flockwrap').is(':visible')) {
            $('.flockwrap').hide();
        }
    }*/
    /*function openSurprise(elem,close) {
        if ($(elem).hasClass('unicsub_text') || $(elem).hasClass('rubric_subtext')) {
            var flock = $(elem).parent('.subscriberu_subscribe').siblings(".flockwrap");
        } else {
            var flock = $(elem).siblings(".flockwrap");
        }
        if(flock.is(':hidden'))  {
            flock.css({'display':'inline-block','width':'1px','height':'1px'});
        }
        close &&  $('.flocktory').css({maxWidth:"120px",minWidth:"120px", marginLeft: "0"}).removeClass('noclose').find('.flocktory_close').css({display: "block"});

        var intervalID = setInterval(
            function() {
                var img = flock.find('iframe').contents().find('#stat img');
                if(img.length) {
                    $.cookie('_fs', 30, {expires: 30, path: '/'});
                    hideSurprise();
                    clearInterval(intervalID);
                }
                else if(flock.css('display')!='inline-block' && flock.css('display')!='block') {
                    clearInterval(intervalID);
                }
                else {
                }
                window.onbeforeunload = function (event) {
                    clearInterval(intervalID);
                }
            },
            5000);
    }*/


    /* end flocktory surprise  */


// п╢п╬п╠п╟п╡п╩п╣п╫п╦п╣ п╬п╠я┼п╣п╨я┌п╟ п╡ п╦п╥п╠я─п╟п╫п╬п╣
    $('a.subscriberu_love').live('click', function (e) {
        if (e.button == 0 || userinfo['authorized'] == 1) {
            var i = $(this);
            if (!i.hasClass('subscriberu_unknown')) { // п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▄ п╦п╥п╡п╣я│я┌п╣п╫
                var href = i.attr('href');
                if (href.match(/what=(.+?)\&type=(.+?)\&content=(.+?)$/)) {
                    var h = {};
                    h['what'] = RegExp.$1;
                    h['type'] = RegExp.$2;
                    h['content'] = RegExp.$3;
                    h['js'] = 1;
                    var redirect = '';
                    var reload = 0;
                    if (userinfo['authorized'] == 1) {// п╣я│п╩п╦ п©п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▄ п╟п╡я┌п╬я─п╦п╥п╬п╡п╟п╩я│я▐ п╦п╩п╦ п╥п╟я─п╣пЁп╦я│я┌я─п╦я─п╬п╡п╟п╩я│я▐
                        redirect = subscriberu['subscriberu_love']['redirect'];
                        reload = subscriberu['subscriberu_love']['reload'];
                    }
                    var farg = {
                        'id': i.attr('id'),
                        'what': h['what'],
                        'redirect': redirect,
                        'reload': reload,
                        'type': h['type']
                    };
                    //$("a.subscriberu_bookmark#" + i.attr('id') + ' dfn').css('background', 'url("/img/ludi/ico/favorite-bit.gif")  no-repeat 0 0');
                    //$("a.subscriberu_bookmark#" + i.attr('id')).css('background', 'url("/img/new/index/icon_likeGrey.png") no-repeat 0 0');
                    $("a.subscriberu_bookmark#" + i.attr('id')).addClass('subscriberu_load');
                    $.post(ajax_url['love'], h, function (data) {
                        parse_love_res(data, farg)
                    });
                } else {
                    // п©п╟я─п╟п╪п╣я┌я─я▀ п╫п╣ п╬п©я─п╣п╢п╣п╩п╣п╫я▀
                }
            } else {
                aobj = $(this);
                userinfo['quick'] = 0;
                showloginForm();
            }
        }
        return false;
    });

// GiN FixMe please -> go to new file (ajax_actions_for_unknown_user)

    /*$('a.subscriberu_bookmark').live("mouseover",
        function () {
            if (!$(this).hasClass('subscriberu_loved')) {
                $("a.subscriberu_bookmark#" + $(this).attr('id')).css('background-image', 'url("/img/new/index/icon_likeGrey.png")');
            }
        }
    );


    $("a.subscriberu_bookmark").live("mouseout",
        function () {
            if (!$(this).hasClass('subscriberu_loved')) {
                $("a.subscriberu_bookmark#" + $(this).attr('id')).css('background-image', 'url("/img/new/index/icon_unlikeGrey.png")');
            }
        }
    );*/


// я│п╪п╣п╫п╟ п╦п╨п╬п╫п╨п╦ я│я│я▀п╩п╨п╦ п╢п╬п╠п╟п╡п╩п╣п╫п╦я▐ п╡ п╦п╥п╠я─п╟п╫п╫п╬п╣

    /*
     $("a.subscriberu_bookmark").hover(
     function() {
     if (!$(this).hasClass('subscriberu_loved')){
     $("a.subscriberu_bookmark#" + $(this).attr('id') + ' dfn').css('background', 'url("/img/sprites.png") no-repeat 0px -50px');
     $("a.subscriberu_bookmark#" + $(this).attr('id') + ' var').css('background', "#f05500");
     $("a.subscriberu_bookmark#" + $(this).attr('id') + ' var').css('color', "#ffffff");
     }
     },
     function() {
     if (!$(this).hasClass('subscriberu_loved')){
     $("a.subscriberu_bookmark#" + $(this).attr('id') + ' dfn').css('background', 'url("/img/sprites.png") no-repeat -50px -50px');
     $("a.subscriberu_bookmark#" + $(this).attr('id') + ' var').css('background', "");
     $("a.subscriberu_bookmark#" + $(this).attr('id') + ' var').css('color', "#f05500");
     }
     }
     );
     */

// я│п╪п╣п╫п╟ п╟п╫п╨п╬я─п╟ я│я│я▀п╩п╨п╦ п╦п╥ п╦п╥п╠я─п╟п╫п╫п╬пЁп╬
    $("a.subscriberu_love").hover(
        function () {
            var anchor = '';
            if ($(this).hasClass('subscriberu_loved')) {
                anchor = subscriberu_anchor['subscriberu_love']['lovehover'];
            } else if ($(this).hasClass('subscriberu_friended')) {
                anchor = subscriberu_anchor['subscriberu_love']['friendhover'];
            }
            var e = $(".subscriberu_love#" + $(this).attr('id') + ' var');
            if (e.html() != '' && anchor != '') e.html(anchor);
        },
        function () {
            var e = $("a.subscriberu_love#" + $(this).attr('id') + ' var');
            if (e.html() != '') {
                var anchor;
                if ($(this).hasClass('subscriberu_loved')) {
                    anchor = subscriberu_anchor['subscriberu_love']['love'];
                } else if ($(this).hasClass('subscriberu_unloved')) {
                    anchor = subscriberu_anchor['subscriberu_love']['unlove'];
                } else if ($(this).hasClass('subscriberu_friended')) {
                    anchor = subscriberu_anchor['subscriberu_love']['friend'];
                } else if ($(this).hasClass('subscriberu_nofriend')) {
                    anchor = subscriberu_anchor['subscriberu_love']['nofriend'];
                }
                if (anchor != '') e.html(anchor);
            }

        }
    );


// я│п╪п╣п╫п╟ п╟п╫п╨п╬я─п╟ я│я│я▀п╩п╨п╦ п©п╬п╢п©п╦я│п╨п╦
    $("a.subscriberu_subscribe").hover(
        function () {
            if ($(this).hasClass('subscriberu_subscribed')) {
                $(this).html(subscriberu_anchor['subscriberu_subscribe']['subhover']);
            }
        },
        function () {
            if (!$(this).hasClass('subscriberu_subscribed_unsub')) {
                var title = $(this).hasClass('subscriberu_subscribed') ? subscriberu_anchor['subscriberu_subscribe']['sub'] : subscriberu_anchor['subscriberu_subscribe']['unsub'];
                $(this).html(title);
            }
        }
    );

//.hover(

    $('div.subscriberu_fbbox').live("mouseover",
        function () {

            /*
             var obj = $(this).parent('div.act').children('div.subscriberu_fbbox');
             if (obj.length){      // п©п╬п╥п╦я├п╦п╬п╫п╦я─п╬п╡п╟п╫п╦п╣ п╠п╩п╬п╨п╟ п╡п╫я┐я┌я─п╦ я│я┌я─п╟п╫п╦я├я▀, п©п╩я▐я│п╨п╦ я│ п╠я┐п╠п╫п╬п╪
             var tops = obj.offset().top;
             obj = $(this);
             var topa = obj.offset().top;
             var lefta = obj.offset().top;
             var list = getPageSize();
             var wh = list[3];
             var ph = list[1];
             var ww = list[2];
             var pw = list[0];
             var l = $(this).offset().left;
             var t = $(this).offset().top;
             var rs = pw - l;
             var ts = wh - t + $(window).scrollTop();
             var def = {top : -8, left: -6};
             var displace = {top : 10, left: -527};
             var gap = 25;

             if ($(this).children('div').hasClass('subscriberu_fblock_author')) def.top = -15;

             // п╟п╡я┌п╬я─я│п╨п╬п╣ п╬п╨п╬я┬п╨п╬ п╢п╩я▐ firefox, п╡п╫я┐я┌я─п╦ п╠п╩п╬п╨п╟ "div.act"
             if ($(this).children('div').hasClass('subscriberu_fblock_author') && ua == 'firefox' && $(this).parent('div.act').length){
             var flag = 0;
             if (rs < $(this).children('div:first').width() && l > rs){
             if (flag){
             $(this).children('div:first').css("left", def.left);
             } else {
             $(this).children('div:first').css("left", -$(this).children('div:first').width() + rs - gap);
             }
             } else {
             if (flag){
             $(this).children('div:first').css("left", displace.left);
             $(this).children('div:first').css("top", displace.top);
             } else {
             $(this).children('div:first').css("left", def.left);
             }
             }
             if (ts < $(this).children('div:first').height() && t > ts){
             $(this).children('div:first').css("top", -$(this).children('div:first').height() + ts - gap);
             } else {
             $(this).children('div:first').css("top", flag ? displace.top : def.top);
             }
             } else { // п╬я│я┌п╟п╩я▄п╫п╬п╣ п╡я▀я─п╟п╡п╫п╦п╡п╟п╣п╪ п©п╬ п╡п╣я─я┌п╦п╨п╟п╩п╦
             if (ts < $(this).children('div:first').height() && t > ts){
             $(this).children('div:first').css("top", -$(this).children('div:first').height() + ts - gap);
             } else {
             $(this).children('div:first').css("top", def.top);
             }
             }
             }

             // п©я─п╬п╡п╣я─п╨п╟ п╫п╟ п╬я┌п╨я─я▀я┌я▀п╣ п╠п╩п╬п╨п╦
             $('div.subscriberu_fbbox').removeClass('subscriberu_fbhover');
             $('div.subscriberu_fblock').hide();


             */


            $(this).addClass('subscriberu_fbhover');

            var res = $(this).children('div.subscriberu_fblock_format:first').attr('id');
            if (res) {
                if (res.match(/^fb(\d+?)$/)) {
                    var id = '#lf' + RegExp.$1;
                    if ($(id).length) {
                        //var r = $(id).children('.subscriberu_lf').focus();
                        $(id).children('.subscriberu_lf:first').focus();
                    }
                }
            }


        }
    );


    $('div.subscriberu_fbbox').live("mouseout", function () {
        $(this).removeClass('subscriberu_fbhover');
    });


    /*
     ,
     function(){
     $(this).removeClass('subscriberu_fbhover');
     }
     */


// п╬п╠я─п╟п╠п╬я┌п╨п╟ п╢п╬п╠п╟п╡п╩п╣п╫п╦я▐ п╬п╠я┼п╣п╨я┌п╟ п╡ п╦п╥п╠я─п╟п╫п╫п╬п╣
    function parse_love_res(data, farg) {
        var redirect = farg['redirect'];
        var reload = farg['reload'];
        var what = farg['what'];
        var id = farg['id'];
        var type = farg['type'];

        data = data.split(/\n/)[0];
        var info = data.split(':');
        var re = /^error/;
        var res = re.test(info[0]) ? 0 : 1;
        var code;
        if (info.length == 3) {
            code = info[1];
        } else if (info.length == 1) {
            code = info[0];
        }
        if (res == 1) {
            var i = $('a.subscriberu_love#' + id);
            i.removeClass('subscriberu_load'); // п╥п╟пЁя─я┐п╥п╨п╟ п╡я▀п©п╬п╩п╫п╣п╫п╟, п╡п╬п╥п╡я─п╟я┴п╟п╣п╪ я█п╩п╣п╪п╣п╫я┌я┐ п╬п╠я▀я┤п╫п╬п╣ п©п╬п╡п╣п╢п╣п╫п╦п╣
            //$("a.subscriberu_bookmark#" + id + ' dfn').css('background', 'url("/img/sprites.png") no-repeat -50px -50px');
            //$("a.subscriberu_bookmark#" + id).css('background', 'url("/img/new/index/icon_unlikeGrey.png") no-repeat 0 0');
            var v = $('a.subscriberu_love#' + id + ' var');

            if (i.is('subscriberu_needreload')) reload = 1;

            var aclass = {'a': 'subscriberu_loved', 'b': 'subscriberu_unlove'}
            var key = {'a': 'love', 'b': 'unlove'};
            if (type == 'friend') {
                aclass = {'a': 'subscriberu_friended', 'b': 'subscriberu_nofriend'}
                key = {'a': 'friend', 'b': 'nofriend'};
            }
            var anchor = {
                'a': subscriberu_anchor['subscriberu_love'][key['a']],
                'b': subscriberu_anchor['subscriberu_love'][key['b']]
            };
            // я┐я│я┌п╟п╫п╬п╡п╨п╟ п╟п╫п╨п╬я─п╬п╡
            if (data == 'add') {
                if (v.html() != '') v.html(anchor['a']);  //п▓ п╦п╥п╠я─п╟п╫п╫п╬п╪
                i.addClass(aclass['a']);
                i.removeClass(aclass['b']);
                i.attr('href', i.attr('href').replace('=add', '=del'));
                i.css('color', "#ffffff");
            } else if (data == 'del') {
                if (v.html() != '') v.html(anchor['b']); //п▓ п╦п╥п╠я─п╟п╫п╫п╬п╣
                i.addClass(aclass['b']);
                i.removeClass(aclass['a']);
                i.attr('href', i.attr('href').replace('=del', '=add'));
                i.css('color', "#f05500");
                $("a.subscriberu_bookmark#" + i.attr('id') + ' var').css('color', '#f05500');
                $("a.subscriberu_bookmark#" + i.attr('id') + ' var').css('background', '');
            } else {
                showloginForm();
                show_msg('auth_msg', uimsg['endsession'], 0);
                return;
            }
        } else {
            //alert('я─п╟п╥п╠п╬я─ п╬я┬п╦п╠п╨п╦');
        }
        doR(redirect, reload);
    }

// п╬п╠я─п╟п╠п╬я┌п╨п╟ п╢п╬п╠п╟п╡п╩п╣п╫п╦я▐ п©п╬п╢п©п╦я│п╨п╦
    function parse_sub_res(res, farg) {
        if (userinfo['console']) console.log("function parse_sub_res (res, farg)");
        if (userinfo['console']) console.log('res= ' + res + ' ,farg= ' + farg);
        var lid = farg[0];
        var redirect = farg[1];
        var reload = farg[2];
        res = res.replace(/\r\n|\r|\n/g, '');

        //alert('res = ' + res);
        var info = res.split(/\s/);
        var title;
        if (info[0] == 'member/update/done') { // я┐я│я┌п╟п╫п╬п╡п╨п╟ п╟п╫п╨п╬я─п╬п╡
            // sub - я▐ п©п╬п╢п©п╦я│п╟п╫
            if (info[1] == 'sub') { // п©п╬п╢п©п╦я│п╟п╩я│я▐
                title = subscriberu_anchor['subscriberu_subscribe']['sub'];
                $('.' + lid).attr('href', $('.' + lid).attr('href').replace('/sub?', '/unsub?'));
            } else if (info[1] == 'unsub') { // п╬я┌п©п╦я│п╟п╩я│я▐
                if (lid.match(/^l(\d+?)$/)) {
                    var fid = '#f' + RegExp.$1;
                    if ($(fid).length) { // п╣я│п╩п╦ п╣я│я┌я▄ я└п╬я─п╪п╟, п╡я▀п╨п╩я▌я┤п╟п╣п╪ п╥п╫п╟я┤п╣п╫п╦я▐ п╡я▀п╠п╬я─п╬я┤п╫п╬п╧ п©п╬п╢п©п╦я│п╨п╦
                        var a = $(fid).find(':input');
                        $.each(a, function (i) {
                            if (a[i].name.match(/^gc_/) && a[i].type == 'checkbox' && a[i].checked) {
                                a[i].checked = '';
                            }
                        });
                    }
                }
                title = subscriberu_anchor['subscriberu_subscribe']['unsub'];
                $('.' + lid).attr('href', $('.' + lid).attr('href').replace('/unsub?', '/sub?'));
            }
        } else {
            showloginForm();
            show_msg('auth_msg', uimsg['endsession'], 0);
            return;
        }
        if (info[1].match(/^sub|unsub$/)) {
            $('.' + lid).toggleClass('subscriberu_subscribed');
            $('.' + lid).toggleClass('subscriberu_notsubscribed');
            $('.' + lid).html(title);

            if (userinfo['console']) console.log(info);

            if (info[1] == 'sub') {
                $('.' + lid + '.subscriberu_subscribed_unsub').html(subscriberu_anchor['subscriberu_subscribe']['subhover']);
                if (aobj.hasClass('subscriberu_subscribed_unsub')) {
                    aobj.html(subscriberu_anchor['subscriberu_subscribe']['subhover']);
                }
            }
        } else if (info[1]) {
            //alert(uimsg[info[1]]);
        }
        doR(redirect, reload);
    }


    $('.subscriberu_category').each(function () {
        var cid = $(this).attr('id');
        $(this).find('p.minimize').click(
            function () {
                var cname = $(this).parents('.category').find('.left h3').text();
                var clink = $(this).parents('.category').find('.left h3 a').attr('href');
                $(this).parents('.category').hide();
                $(this).parents('.category').addClass('subscriberu_hidden'); // п╨п╟я┌п╣пЁп╬я─п╦я▐ я│п╨я─я▀я┌п╟

                var a = new Array();
                a = $('div.subscriberu_category:not(.subscriberu_hidden)'); // п╡я▀п╠п╦я─п╟п╣п╪ п╫п╣я│п╨я─я▀я┌я▀п╣ п╨п╟я┌п╣пЁп╬я─п╦п╦
                if (a.length == 0) $('#issue_menu').hide(); // п╣я│п╩п╦ я┌п╟п╨п╦я┘ п╫п╣я┌, я│п╨я─я▀п╡п╟п╣п╪ п╦ п╥п╟пЁп╬п╩п╬п╡п╬п╨

                var tmp = cid;
                var cookie = $.cookie('Subscribe::Digest_foldedid');
                var cookie_check = 1;
                if (cookie != null && cookie != '') {
                    cookie = cookie.split(/(?:\s)/);
                    var h = {};
                    for (var i in cookie) h[cookie[i]] = 1;
                    if (h[cid] != 1) {
                        tmp = $.cookie('Subscribe::Digest_foldedid') + " " + cid;
                    } else {
                        cookie_check = 0;
                    }
                } else {
                    $('.maximize p.title').show();
                }
                if (cookie_check) { // п╨я┐п╨п╦ п╫п╣я┌, п╥п╫п╟я┤п╦я┌ п╦ п╨п╟я┌п╣пЁп╬я─п╦п╦ п╡ я│п©п╦я│п╨п╣ я│п╡п╣я─п╫я┐я┌я▀я┘ п╫п╣я┌
                    $.cookie('Subscribe::Digest_foldedid', tmp, {expires: 7, path: '/'});
                    var content = '<li><a href="' + clink + '">' + cname + '</a><span class="hv"  cid="' + cid + '">' + uimsg['maximize'] + '<var></var></span></li>';
                    $('.maximize ul').prepend(content).find('li').eq(0)
                        .hover(
                            function () {
                                $(this).addClass('jshover');
                            },
                            function () {
                                $(this).removeClass('jshover');
                            }
                        ).find('span.hv').click(
                        function () {
                            $(this).parents('li').remove();
                            var cid = $(this).attr('cid')
                            var cookie = $.cookie('Subscribe::Digest_foldedid');
                            cookie = cookie.split(/(?:\s)/);
                            var tmp = '';
                            for (var j in cookie) {
                                if (cookie[j] != cid) {
                                    if (tmp != '') tmp += ' ';
                                    tmp += cookie[j];
                                }
                            }
                            ;
                            $.cookie('Subscribe::Digest_foldedid', tmp, {expires: 7, path: '/'});
                            if (tmp == '') $('.maximize p.title').hide(); // п╣я│п╩п╦ п╡ п╨я┐п╨п╣ п╫п╣я┌ п╨п╟я┌п╣пЁп╬я─п╦п╧, я│п╨я─я▀п╡п╟п╣п╪ п╥п╟пЁп╬п╩п╬п╡п╬п╨ я│п©п╦я│п╨п╟
                            $("#content .category#" + cid).removeClass('subscriberu_hidden');
                            $("#content .category#" + cid).show();
                            var to = $(".category#" + cid).offset().top;
                            $('html,body').animate({scrollTop: to}, "fast");

                            if ($('#issue_menu').is(':hidden')) $('#issue_menu').show();
                            return false;
                        }
                    );
                } //endif (cookie_check)
                return false;
            });
        $(this).hover(
            function () {
                $(this).addClass('category-jshover');
            },
            function () {
                $(this).removeClass('category-jshover');
            }
        );
    });

// я└п╬я─п╪я─я┐п╣я┌ я│п©п╦я│п╬п╨ я│п╡п╣я─п╫я┐я┌я▀я┘ п╨п╟я┌п╣пЁп╬я─п╦п╧
    function rollupcatlist() {
        var cookie = $.cookie('Subscribe::Digest_foldedid'); // я│п╡п╣я─п╫я┐я┌я▀я┘ п╨п╟я┌п╣пЁп╬я─п╦п╧ п╡ п╨я┐п╨п╣ п╫п╣я┌
        if (cookie == '' || cookie == null) return false;
        $.cookie('Subscribe::Digest_foldedid', cookie, {expires: 7, path: '/'});
        $('.maximize p.title').show(); // п©п╬п╨п╟п╥я▀п╡п╟п╣п╪ п╥п╟пЁп╬п╩п╬п╡п╬п╨ я│п╡п╣я─п╫я┐я┌я▀я┘ п╨п╟я┌п╣пЁп╬я─п╦п╧
        cookie = cookie.split(/(?:\s)/);
        for (var i in cookie) {
            var item = $('#' + cookie[i]);
            var cname = item.find('.left h3').text();
            var clink = item.find('.left h3 a').attr('href');
            $("#content .category#" + cookie[i]).hide();
            $("#content .category#" + cookie[i]).addClass('subscriberu_hidden');

            var content = '<li><a href="' + clink + '">' + cname + '</a><span class="hv" cid="' + cookie[i] + '">' + uimsg['maximize'] + '<var></var></span></li>';
            $('.maximize ul').prepend(content).find('li').eq(0)
                .hover(
                    function () {
                        $(this).addClass('jshover');
                    },
                    function () {
                        $(this).removeClass('jshover');
                    }
                ).find('span.hv').click(
                function () {
                    $(this).parents('li').remove();
                    var cid = $(this).attr('cid');
                    var cookie = $.cookie('Subscribe::Digest_foldedid');
                    cookie = cookie.split(/(?:\s)/);
                    var tmp = '';
                    for (var j in cookie) {
                        if (cookie[j] != cid) {
                            if (tmp != '') tmp += ' ';
                            tmp += cookie[j];
                        }
                    }
                    ;
                    $.cookie('Subscribe::Digest_foldedid', tmp, {expires: 7, path: '/'});
                    if (tmp == '') $('.maximize p.title').hide(); // п╣я│п╩п╦ п╡ п╨я┐п╨п╣ п╫п╣я┌ п╨п╟я┌п╣пЁп╬я─п╦п╧, я│п╨я─я▀п╡п╟п╣п╪ п╥п╟пЁп╬п╩п╬п╡п╬п╨ я│п©п╦я│п╨п╟
                    $("#content .category#" + cid).removeClass('subscriberu_hidden');
                    $("#content .category#" + cid).show();
                    var to = $(".category#" + cid).offset().top;
                    $('html,body').animate({scrollTop: to}, "fast"); // п©п╬п╥п╦я├п╦п╬п╫п╦я─п╬п╡п╟п╫п╦п╣ п©п╬ id п╫п╟ п╫я┐п╤п╫п╬п╧ я─я┐п╠я─п╦п╨п╣

                    if ($('#issue_menu').is(':hidden')) $('#issue_menu').show();
                    return false;
                } // span.hv click
            );
        } // i in cookie
        var a = new Array();
        a = $('div.subscriberu_category:not(.subscriberu_hidden)');
        if (a.length == 0) $('#issue_menu').hide();
    }

// я│я┌п╟я┌п╦я│я┌п╦п╨п╟ пЁя┐пЁп╩п╟
    function gaset() {
        $.ajax({
            'type': 'GET',
            'async': true,
            'url': 'http://www.google-analytics.com/ga.js',
            'dataType': 'script',
            'cache': true,
            'success': function (data) {
                _gat._getTracker("UA-2163144-1")._trackPageview();
            }
        });
    }

    /* gaset(); */

    var url = document.location.href; //document.URL;
    var isindex = 0;
    if (url.match(/http:\/\/(?:test\.)?subscribe.ru\/$/)) isindex = 1;
    if (isindex) rollupcatlist(); // п╣я│п╩п╦ я│я┌я─п╟п╫п╦я├п╟ п╦п╫п╢п╣п╨я│п╫п╟я▐, п╡я▀п╡п╬п╢п╦п╪ я│п©п╦я│п╬п╨ п╨п╟я┌п╣пЁп╬я─п╦п╧

    $('.group_notify a').click(function (e) {
        group_member_notify($(this));
        return false;
    });

    /* lateload */

    $('img.lateload').appear(lateloadimg);

    $('img.lateload.hidden').removeClass('hidden');

    /* linkappear */

    $('a.linkappear').appear(function () {
        var t = $(this);

        var href = t.attr('href');

        if (href) {
            var parts = /(\?)/.exec(href);
            /* wrong if href has #-part !!! */
            if (parts == null) {
                href = href + "?appear=1";
            } else {
                href = href + "&appear=1";
            }

            t.attr('href', href);

//console.log('linkappear ' + href);
        }

        t.removeClass('linkappear');

    });

    $('span.linkappear').appear(function () {
        var t = $(this);

        var sca = t.children('a'); //.linkappear');

        $.each(sca, function (i) {
            var a = $(sca[i]);

            var href = a.attr('href');

            if (href) {
                var parts = /(\?)/.exec(href);
                /* wrong if href has #-part !!! */
                if (parts == null) {
                    href = href + "?appear=2";
                } else {
                    href = href + "&appear=2";
                }

                a.attr('href', href);

//console.log('span.linkappear ' + href);
            }
        });

        t.removeClass('spanlinkappear');

    });

    $('span.embedappear').appear(function () {
        var t = $(this);

        var sco = t.children('object')

        $.each(sco, function (i) {
            var o = $(sco[i]);

            var scp = o.children('param');

            $.each(scp, function (i) {
                var p = $(scp[i]);

                var name = p.attr('name');

                if (name == "movie") {
                    var href = p.attr('value');

                    if (href) {
                        var parts = /(\?clickTAG)/.exec(href);
                        if (parts == null) {
                            // we dont know what is it
                        } else {

                            parts = /(\?clickTAG.+\?)/.exec(href);
                            /* wrong if href has #-part !!! */
                            if (parts == null) {
                                href = href + "%3fappear=3";
                            } else {
                                href = href + "%26appear=3";
                            }

                        }

                        p.attr('value', href);

//console.log('span.embedappear param ' + name + ' value ' + href);
                    }
                }

            });

            var sce = o.children('embed');

            $.each(sce, function (i) {
                var p = $(sce[i]);

                var href = p.attr('src');

                if (href) {
                    var parts = /(\?clickTAG)/.exec(href);
                    if (parts == null) {
                        // we dont know what is it
                    } else {

                        parts = /(\?clickTAG.+\?)/.exec(href);
                        /* wrong if href has #-part !!! */
                        if (parts == null) {
                            href = href + "%3fappear=3";
                        } else {
                            href = href + "%26appear=3";
                        }

                    }

                    p.attr('src', href);

//console.log('span.embedappear embed src ' + href);
                }

            });

        });

        t.removeClass('spanlinkappear');

    });

}) // end of document ready

function toggleMsg(current, thread_id, id) {
    var _href = '/member/dialog/';
    if ($(current).parents('.messagefrom').hasClass('messagedeleted')) {
        /* AJAX-п╥п╟п©я─п╬я│*/
        $.post(_href, {'thread_id': thread_id, 'id': id, 'what': 'undelete_letter', 'js': 1}, function (data) {
        });
        $(current).parents('.messagefrom').removeClass('messagedeleted');
        $(current).parents('.messagefrom').find('p.deletelink').html('<a href="" onclick="return toggleMsg(this,' + thread_id + ',' + id + ');">' + uimsg['deletemsg'] + '</a>');
    } else {
        /* AJAX-п╥п╟п©я─п╬я│*/
        $.post(_href, {'thread_id': thread_id, 'id': id, 'what': 'delete_letter', 'js': 1}, function (data) {
        });
        $(current).parents('.messagefrom').addClass('messagedeleted');
        $(current).parents('.messagefrom').find('p.deletelink').html(uimsg['msgdeleted'] + ': <a href="" onclick="return toggleMsg(this,' + thread_id + ',' + id + ');">' + uimsg['cancel'] + '</a>');
    }
    return false;
}

function eraseMsg(current, thread_id, id) {
    var _href = '/member/dialog/';
    if ($(current).parents('.messagefrom')) {
        /* AJAX-п╥п╟п©я─п╬я│*/
        $.post(_href, {'thread_id': thread_id, 'id': id, 'what': 'erase_letter', 'js': 1}, function (data) {
        });
        $(current).parents('.messagefrom').hide();
    }
    return false;
}

function undeleteMsg(current, thread_id, id) {
    var _href = '/member/dialog/';
    if ($(current).parents('.messagefrom')) {
        /* AJAX-п╥п╟п©я─п╬я│*/
        $.post(_href, {'thread_id': thread_id, 'id': id, 'what': 'undelete_letter', 'js': 1}, function (data) {
            _href = _href + 'thread/' + thread_id + '#' + id;
            window.location.href = _href;
        });
    }
    return false;
}


function isEmptyCheck(id) {
    var curText = $("#feedback_text").val();
    var patt = /^(\s*)$/g;
    if (curText.match(patt)) {
        $('#feedback_button').css('color', '#cccccc');
        $("#feedback_button").attr('disabled', true);
    } else {
        $('#feedback_button').css('color', '#000000');
        $("#feedback_button").attr('disabled', false);
    }
    return true;
}


function var2innerHTML(id, val) {
    try {
        var obj = document.getElementById(id);
        obj.innerHTML = val;
        return obj;
    } catch (err) {
        return null;
    }
}

function innerHTML2var(id, defval) {
    var v;
    try {
        v = document.getElementById(id);
        v = v.innerHTML;
    } catch (err) {
        v = defval;
    }
    return v;
}

// п╡я▀п╡п╬п╢п╦я┌ я│п╬п╬п╠я┴п╣п╫п╦п╣
function show_msg(id, msg, mf) {
    if (id == 'auth_msg') {
        //$('#auth_cpt_msg').html('');
    }
    var color = (mf == 1) ? '#000000' : 'red';
    var content = '<font color=' + color + '>' + msg + '</font> ';
    var2innerHTML(id, content);
};

function group_unsubscribe_member(slug) {//п╬я┌п©п╦я│п╟я┌я│я▐ п╬я┌ пЁя─я┐п©п©я▀
    $.get('/group/' + slug + '/unsubscribe/');
    $('#group_unsubscribe_member').hide();
    $('#group_subscribe_member').show();
};

function group_subscribe_member(slug) {//п©п╬п╢п©п╦я│п╟я┌я│я▐
    $.get('/group/' + slug + '/subscribe/');
    $('#group_subscribe_member').hide();
    $('#group_unsubscribe_member').show();
};

function group_member_notify(obj) {//п╦п╥п╪п╣п╫п╦я┌я▄ я│п©п╬я│п╬п╠ я┐п╡п╣п╢п╬п╪п╩п╣п╫п╦я▐

    $.get($(obj).attr('href') + '?js=1');

    var papa = $(obj).parent();

    var brothers = $(papa).parent().children();

// a->li->ul
    $(brothers).removeClass('active');
    $(brothers).addClass('inactive');

// a->li
    $(papa).addClass('active');
    $(papa).removeClass('inactive');
};

/*
 function show_settings(t){
 t = $(t);
 var elementMenu = $(t).next('ul');
 if(elementMenu.is(':visible'))
 elementMenu.hide();
 else
 elementMenu.show();
 }

 $(document).ready(function(){
 $(document).click(function(e){
 var curentClass = $(e.target).parents('.optbox').find('ul').is(':visible');
 if(!curentClass)
 $('.optbox ul').hide();
 });
 });
 */

function toggle_optbox(t, ct) {

    $(ct).hide();

    var el = $(t);
    if (el.is(':visible'))
        el.hide();
    else
        el.show();
    return false;
}

/* #5135 */
function remove_counter() {
    var t = $(this);

    t.hide();
    var href = t.attr('href');
    $.ajax({
        url: href + '&js=1',
        timeout: 10000
    });
}

/* #5135 */
function remove_all_counters() {
    var t = $(this);

    $('.unreaded_counter').hide();
    var href = t.attr('href');
    $.ajax({
        url: href + '&js=1',
        timeout: 10000
    });
}

/* old +/- for group topic
 $(function(){
 $('.ev-VoteUp , .ev-VoteDown').click(function(e) {
 var url = $(this).attr('href'),
 vote = ( $(this).hasClass('ev-VoteUp') ? 1 : -1 ),
 vts = $('.ev-VoteValue').text(),
 newVote = vote + parseInt(vts,10),
 newVoteStr = (newVote > 0 ? '+' : '') + newVote,
 voteD = $('.ev-VoteValue');

 voteD.css({'overflow':'hidden','height':'13px'}); // п÷п╬п╢пЁп╬я┌п╬п╡п╨п╟ п╨ я│п╨я─п╬п╩я┐

 if (vote > 0)
 {
 sroll_to = '0';
 inj = '<div class="new">' + newVoteStr + '</div><div class="old">' + vts + '</div>';
 }else{
 inj = '<div class="old">' + vts + '</div><div class="new">' + newVoteStr + '</div>';
 sroll_to = '16';
 }
 voteD.html(inj);

 if(vote > 0) {
 voteD.animate({ 'scrollTop': '16px' },1);
 }

 voteD.animate({ 'scrollTop': sroll_to+'px' }, 300, function(el) {
 if (newVote > 0) {
 $(voteD).addClass('topic-vote-value-positive');
 }else if (newVote < 0) {
 $(voteD).addClass('topic-vote-value-negative');
 } else {
 $(voteD).removeClass('topic-vote-value-positive').removeClass('topic-vote-value-negative');
 }
 voteD.animate({ 'overflow': 'visible', 'scrollTop': '0px' }); // п╓п╦п╨я│ п╢п╩я▐ FF 3.0 - 4.0
 voteD.html(newVoteStr); // п≈п╟п╪п╣п╫п╟ html п╫п╟ п╬п╠я▀я┤п╫я▀п╧ я┌п╣п╨я│я┌
 });

 $('.ev-VoteUp, .ev-VoteDown').css('visibility','hidden');
 $.getJSON(url, {js: 1}); // п≈п╟п©я─п╬я│ п╫п╟ п╦п╥п╪п╣п╫п╣п╫п╦п╣ я│я┤п╣я┌я┤п╦п╨п╟

 return false;
 });
 });
 */

$(function () {
    $('.VoteUp').click(function (e) {
        var url = $(this).attr('href'),
            vote = ($(this).hasClass('VoteUp') ? 1 : -1),
            vts = $('.VoteValue').text(),
            newVote = vote + parseInt(vts, 10),
            newVoteStr = (newVote > 0 ? '+' : '') + newVote,
            voteD = $('.VoteValue');

        voteD.css({'overflow': 'hidden', 'height': '13px'});  // п÷п╬п╢пЁп╬я┌п╬п╡п╨п╟ п╨ я│п╨я─п╬п╩я┐

        if (vote > 0) {
            sroll_to = '0';
            inj = '';
        } else {
            inj = '';
            sroll_to = '0';
        }
        voteD.html(inj);

        if (vote > 0) {
            voteD.animate({'scrollTop': '16px'}, 1);
        }

        voteD.animate({'scrollTop': sroll_to + 'px'}, 300, function (el) {
            if (newVote > 0) {
                $(voteD).addClass('');
            } else if (newVote < 0) {
                $(voteD).addClass('');
            } else {
                $(voteD).removeClass('topic-vote-value-positive').removeClass('topic-vote-value-negative');
            }
            voteD.animate({'overflow': 'hidden', 'scrollTop': '0px'});
            voteD.html(newVoteStr);
        });

        $('.VoteUp').closest('.subslike_box_right').css('display', 'none');
        $('.VoteUp').closest('.subslike_box_count_auth').css('display', 'none');
        $('.Voted').css('display', 'inline-block');
        $.getJSON(url, {js: 1});
        return false;
    });
});

/* #7269 adv client load */
$(document).ready(function () {
    if ($.writeCapture) {
        var a = $('span.adskijadv');
        $.each(a, function (i, item) {
            $.ajax({
                'url': $(item).data('advurl'),
                'cache': false,
                'success': function (html) {
                    $(item).replaceWith(html);
                },
                'error': function () {
                    $(item).remove();
                }
            });
        })

        $('img.adskijadv').appear(function () {
            var item = $(this);
            $.ajax({
                'url': item.data('advurl'),
                'cache': false,
                'success': function (html) {
                    var id = 'adv' + Math.round(Math.random() * 100000);
                    item.replaceWith('<span id="' + id + '"></span>');
                    $.writeCapture
                    $('#' + id).writeCapture().html(html, {
                        'done': function () {
                            var list = $('#' + id).find('img.lateload');
                            if (list.length > 0) {
                                $.each(list, function (i, e) {
                                    lateloadimg.apply($(e));
                                    $(e).removeClass('hidden');
                                });
                            }
                        }
                    });
                },
                'error': function () {
                    item.remove();
                }
            });
        });
    }
});


/**
 * writeCapture.js v1.0.5
 *
 * @author noah <noah.sloan@gmail.com>
 *
 */
(function ($, global) {
    var doc = global.document;

    function doEvil(code) {
        var div = doc.createElement('div');
        doc.body.insertBefore(div, null);
        $.replaceWith(div, '<script type="text/javascript">' + code + '</script>');
    }

    // ensure we have our support functions
    $ = $ || (function (jQuery) {
        /**
         * @name writeCaptureSupport
         *
         * The support functions writeCapture needs.
         */
        return {
            /**
             * Takes an options parameter that must support the following:
             * {
             *    url: url,
             *    type: 'GET', // all requests are GET
             *    dataType: "script", // it this is set to script, script tag injection is expected, otherwise, treat as plain text
             *    async: true/false, // local scripts are loaded synchronously by default
             *    success: callback(text,status), // must not pass a truthy 3rd parameter
             *    error: callback(xhr,status,error) // must pass truthy 3rd parameter to indicate error
             * }
             */
            ajax: jQuery.ajax,
            /**
             * @param {String Element} selector an Element or selector
             * @return {Element} the first element matching selector
             */
            $: function (s) {
                return jQuery(s)[0];
            },
            /**
             * @param {String jQuery Element} selector the element to replace.
             * writeCapture only needs the first matched element to be replaced.
             * @param {String} content the content to replace
             * the matched element with. script tags must be evaluated/loaded
             * and executed if present.
             */
            replaceWith: function (selector, content) {
                // jQuery 1.4? has a bug in replaceWith so we can't use it directly
                var el = jQuery(selector)[0];
                var next = el.nextSibling, parent = el.parentNode;

                jQuery(el).remove();

                if (next) {
                    jQuery(next).before(content);
                } else {
                    jQuery(parent).append(content);
                }
            },

            onLoad: function (fn) {
                jQuery(fn);
            },

            copyAttrs: function (src, dest) {
                var el = jQuery(dest), attrs = src.attributes;
                for (var i = 0, len = attrs.length; i < len; i++) {
                    if (attrs[i] && attrs[i].value) {
                        try {
                            el.attr(attrs[i].name, attrs[i].value);
                        } catch (e) {
                        }
                    }
                }
            }
        };
    })(global.jQuery);

    $.copyAttrs = $.copyAttrs || function () {
    };
    $.onLoad = $.onLoad || function () {
        throw "error: autoAsync cannot be used without jQuery " +
        "or defining writeCaptureSupport.onLoad";
    };

    // utilities
    function each(array, fn) {
        for (var i = 0, len = array.length; i < len; i++) {
            if (fn(array[i]) === false) return;
        }
    }

    function isFunction(o) {
        return Object.prototype.toString.call(o) === "[object Function]";
    }

    function isString(o) {
        return Object.prototype.toString.call(o) === "[object String]";
    }

    function slice(array, start, end) {
        return Array.prototype.slice.call(array, start || 0, end || array && array.length);
    }

    function any(array, fn) {
        var result = false;
        each(array, check);

        function check(it) {
            return !(result = fn(it));
        }

        return result;
    }

    function SubQ(parent) {
        this._queue = [];
        this._children = [];
        this._parent = parent;
        if (parent) parent._addChild(this);
    }

    SubQ.prototype = {
        _addChild: function (q) {
            this._children.push(q);
        },
        push: function (task) {
            this._queue.push(task);
            this._bubble('_doRun');
        },
        pause: function () {
            this._bubble('_doPause');
        },
        resume: function () {
            this._bubble('_doResume');
        },
        _bubble: function (name) {
            var root = this;
            while (!root[name]) {
                root = root._parent;
            }
            return root[name]();
        },
        _next: function () {
            if (any(this._children, runNext)) return true;

            function runNext(c) {
                return c._next();
            }

            var task = this._queue.shift();
            if (task) {
                task();
            }
            return !!task;
        }
    };

    /**
     * Provides a task queue for ensuring that scripts are run in order.
     *
     * The only public methods are push, pause and resume.
     */
    function Q(parent) {
        if (parent) {
            return new SubQ(parent);
        }
        SubQ.call(this);
        this.paused = 0;
    }

    Q.prototype = (function () {
        function f() {
        }

        f.prototype = SubQ.prototype;
        return new f();
    })();

    Q.prototype._doRun = function () {
        if (!this.running) {
            this.running = true;
            try {
                // just in case there is a bug, always resume
                // if paused is less than 1
                while (this.paused < 1 && this._next()) {
                }
            } finally {
                this.running = false;
            }
        }
    };
    Q.prototype._doPause = function () {
        this.paused++;
    };
    Q.prototype._doResume = function () {
        this.paused--;
        this._doRun();
    };

    // TODO unit tests...
    function MockDocument() {
    }

    MockDocument.prototype = {
        _html: '',
        open: function () {
            this._opened = true;
            if (this._delegate) {
                this._delegate.open();
            }
        },
        write: function (s) {
            if (this._closed) return;
            this._written = true;
            if (this._delegate) {
                this._delegate.write(s);
            } else {
                this._html += s;
            }
        },
        writeln: function (s) {
            this.write(s + '\n');
        },
        close: function () {
            this._closed = true;
            if (this._delegate) {
                this._delegate.close();
            }
        },
        copyTo: function (d) {
            this._delegate = d;
            d.foobar = true;
            if (this._opened) {
                d.open();
            }
            if (this._written) {
                d.write(this._html);
            }
            if (this._closed) {
                d.close();
            }
        }
    };

    // test for IE 6/7 issue (issue 6) that prevents us from using call
    var canCall = (function () {
        var f = {f: doc.getElementById};
        try {
            f.f.call(doc, 'abc');
            return true;
        } catch (e) {
            return false;
        }
    })();

    function unProxy(elements) {
        each(elements, function (it) {
            var real = doc.getElementById(it.id);
            if (!real) {
                logError('<proxyGetElementById - finish>',
                    'no element in writen markup with id ' + it.id);
                return;
            }

            each(it.el.childNodes, function (it) {
                real.appendChild(it);
            });

            if (real.contentWindow) {
                // TODO why is the setTimeout necessary?
                global.setTimeout(function () {
                    it.el.contentWindow.document.copyTo(real.contentWindow.document);
                }, 1);
            }
            $.copyAttrs(it.el, real);
        });
    }

    function getOption(name, options) {
        if (options && options[name] === false) {
            return false;
        }
        return options && options[name] || self[name];
    }

    function capture(context, options) {
        var tempEls = [],
            proxy = getOption('proxyGetElementById', options),
            forceLast = getOption('forceLastScriptTag', options),
            writeOnGet = getOption('writeOnGetElementById', options),
            immediate = getOption('immediateWrites', options),
            state = {
                write: doc.write,
                writeln: doc.writeln,
                finish: function () {
                },
                out: ''
            };
        context.state = state;
        doc.write = immediate ? immediateWrite : replacementWrite;
        doc.writeln = immediate ? immediateWriteln : replacementWriteln;
        if (proxy || writeOnGet) {
            state.getEl = doc.getElementById;
            doc.getElementById = getEl;
            if (writeOnGet) {
                findEl = writeThenGet;
            } else {
                findEl = makeTemp;
                state.finish = function () {
                    unProxy(tempEls);
                };
            }
        }
        if (forceLast) {
            state.getByTag = doc.getElementsByTagName;
            doc.getElementsByTagName = function (name) {
                var result = slice(canCall ? state.getByTag.call(doc, name) :
                    state.getByTag(name));
                if (name === 'script') {
                    result.push($.$(context.target));
                }
                return result;
            };
            var f = state.finish;
            state.finish = function () {
                f();
                doc.getElementsByTagName = state.getByTag;
            };
        }

        function replacementWrite(s) {
            state.out += s;
        }

        function replacementWriteln(s) {
            state.out += s + '\n';
        }

        function immediateWrite(s) {
            var target = $.$(context.target);
            var div = doc.createElement('div');
            target.parentNode.insertBefore(div, target);
            $.replaceWith(div, sanitize(s));
        }

        function immediateWriteln(s) {
            var target = $.$(context.target);
            var div = doc.createElement('div');
            target.parentNode.insertBefore(div, target);
            $.replaceWith(div, sanitize(s) + '\n');
        }

        function makeTemp(id) {
            var t = doc.createElement('div');
            tempEls.push({id: id, el: t});
            // mock contentWindow in case it's supposed to be an iframe
            t.contentWindow = {document: new MockDocument()};
            return t;
        }

        function writeThenGet(id) {
            var target = $.$(context.target);
            var div = doc.createElement('div');
            target.parentNode.insertBefore(div, target);
            $.replaceWith(div, state.out);
            state.out = '';
            return canCall ? state.getEl.call(doc, id) :
                state.getEl(id);
        }

        function getEl(id) {
            var result = canCall ? state.getEl.call(doc, id) :
                state.getEl(id);
            return result || findEl(id);
        }

        return state;
    }

    function uncapture(state) {
        doc.write = state.write;
        doc.writeln = state.writeln;
        if (state.getEl) {
            doc.getElementById = state.getEl;
        }
        return state.out;
    }

    function clean(code) {
        // IE will execute inline scripts with <!-- (uncommented) on the first
        // line, but will not eval() them happily
        return code && code.replace(/^\s*<!(\[CDATA\[|--)/, '').replace(/(\]\]|--)>\s*$/, '');
    }

    function ignore() {
    }

    function doLog(code, error) {
        console.error("Error", error, "executing code:", code);
    }

    var logError = isFunction(global.console && console.error) ?
        doLog : ignore;

    function captureWrite(code, context, options) {
        var state = capture(context, options);
        try {
            doEvil(clean(code));
        } catch (e) {
            logError(code, e);
        } finally {
            uncapture(state);
        }
        return state;
    }

    // copied from jQuery
    function isXDomain(src) {
        var parts = /^(\w+:)?\/\/([^\/?#]+)/.exec(src);
        return parts && (parts[1] && parts[1] != location.protocol || parts[2] != location.host);
    }

    function attrPattern(name) {
        return new RegExp('\\b' + name + '[\\s\\r\\n]*=[\\s\\r\\n]*(?:(["\'])([\\s\\S]*?)\\1|([^\\s>]+))', 'i');
    }

    function matchAttr(name) {
        var regex = attrPattern(name);
        return function (tag) {
            var match = regex.exec(tag) || [];
            return match[2] || match[3];
        };
    }

    var SCRIPT_TAGS = /(<script[^>]*>)([\s\S]*?)<\/script>/ig,
        SCRIPT_2 = /<script[^>]*\/>/ig,
        SRC_REGEX = attrPattern('src'),
        SRC_ATTR = matchAttr('src'),
        TYPE_ATTR = matchAttr('type'),
        LANG_ATTR = matchAttr('language'),
        GLOBAL = "__document_write_ajax_callbacks__",
        DIV_PREFIX = "__document_write_ajax_div-",
        TEMPLATE = "window['" + GLOBAL + "']['%d']();",
        callbacks = global[GLOBAL] = {},
        TEMPLATE_TAG = '<script type="text/javascript">' + TEMPLATE + '</script>',
        global_id = 0;

    function nextId() {
        return (++global_id).toString();
    }

    function normalizeOptions(options, callback) {
        var done;
        if (isFunction(options)) {
            done = options;
            options = null;
        }
        options = options || {};
        done = done || options && options.done;
        options.done = callback ? function () {
            callback(done);
        } : done;
        return options;
    }

    // The global Q synchronizes all sanitize operations.
    // The only time this synchronization is really necessary is when two or
    // more consecutive sanitize operations make async requests. e.g.,
    // sanitize call A requests foo, then sanitize B is called and bar is
    // requested. document.write was replaced by B, so if A returns first, the
    // content will be captured by B, then when B returns, document.write will
    // be the original document.write, probably messing up the page. At the
    // very least, A will get nothing and B will get the wrong content.
    var GLOBAL_Q = new Q();

    var debug = [];
    var logDebug = window._debugWriteCapture ? function () {
        } :
        function (type, src, data) {
            debug.push({type: type, src: src, data: data});
        };

    var logString = window._debugWriteCapture ? function () {
        } :
        function () {
            debug.push(arguments);
        };

    function newCallback(fn) {
        var id = nextId();
        callbacks[id] = function () {
            fn();
            delete callbacks[id];
        };
        return id;
    }

    function newCallbackTag(fn) {
        return TEMPLATE_TAG.replace(/%d/, newCallback(fn));
    }

    /**
     * Sanitize the given HTML so that the scripts will execute with a modified
     * document.write that will capture the output and append it in the
     * appropriate location.
     *
     * @param {String} html
     * @param {Object Function} [options]
     * @param {Function} [options.done] Called when all the scripts in the
     * sanitized HTML have run.
     * @param {boolean} [options.asyncAll] If true, scripts loaded from the
     * same domain will be loaded asynchronously. This can improve UI
     * responsiveness, but will delay completion of the scripts and may
     * cause problems with some scripts, so it defaults to false.
     */
    function sanitize(html, options, parentQ, parentContext) {
        // each HTML fragment has it's own queue
        var queue = parentQ && new Q(parentQ) || GLOBAL_Q;
        options = normalizeOptions(options);
        var done = getOption('done', options);
        var doneHtml = '';

        var fixUrls = getOption('fixUrls', options);
        if (!isFunction(fixUrls)) {
            fixUrls = function (src) {
                return src;
            };
        }

        // if a done callback is passed, append a script to call it
        if (isFunction(done)) {
            // no need to proxy the call to done, so we can append this to the
            // filtered HTML
            doneHtml = newCallbackTag(function () {
                queue.push(done);
            });
        }
        // for each tag, generate a function to load and eval the code and queue
        // themselves
        return html.replace(SCRIPT_TAGS, proxyTag).replace(SCRIPT_2, proxyBodyless) + doneHtml;

        function proxyBodyless(tag) {
            // hack in a bodyless tag...
            return proxyTag(tag, tag.substring(0, tag.length - 2) + '>', '');
        }

        function proxyTag(element, openTag, code) {
            var src = SRC_ATTR(openTag),
                type = TYPE_ATTR(openTag) || '',
                lang = LANG_ATTR(openTag) || '',
                isJs = (!type && !lang) || // no type or lang assumes JS
                    type.toLowerCase().indexOf('javascript') !== -1 ||
                    lang.toLowerCase().indexOf('javascript') !== -1;

            logDebug('replace', src, element);

            if (!isJs) {
                return element;
            }

            var id = newCallback(queueScript), divId = DIV_PREFIX + id,
                run, context = {target: '#' + divId, parent: parentContext};

            function queueScript() {
                queue.push(run);
            }

            if (src) {
                // fix for the inline script that writes a script tag with encoded
                // ampersands hack (more comon than you'd think)
                src = fixUrls(src);

                openTag = openTag.replace(SRC_REGEX, '');
                if (isXDomain(src)) {
                    // will load async via script tag injection (eval()'d on
                    // it's own)
                    run = loadXDomain;
                } else {
                    // can be loaded then eval()d
                    if (getOption('asyncAll', options)) {
                        run = loadAsync();
                    } else {
                        run = loadSync;
                    }
                }
            } else {
                // just eval code and be done
                run = runInline;

            }

            function runInline() {
                captureHtml(code);
            }

            function loadSync() {
                $.ajax({
                    url: src,
                    type: 'GET',
                    dataType: 'text',
                    async: false,
                    success: function (html) {
                        captureHtml(html);
                    }
                });
            }

            function logAjaxError(xhr, status, error) {
                logError("<XHR for " + src + ">", error);
                queue.resume();
            }

            function setupResume() {
                return newCallbackTag(function () {
                    queue.resume();
                });
            }

            function loadAsync() {
                var ready, scriptText;

                function captureAndResume(script, status) {
                    if (!ready) {
                        // loaded before queue run, cache text
                        scriptText = script;
                        return;
                    }
                    try {
                        captureHtml(script, setupResume());
                    } catch (e) {
                        logError(script, e);
                    }
                }

                // start loading the text
                $.ajax({
                    url: src,
                    type: 'GET',
                    dataType: 'text',
                    async: true,
                    success: captureAndResume,
                    error: logAjaxError
                });
                return function () {
                    ready = true;
                    if (scriptText) {
                        // already loaded, so don't pause the queue and don't resume!
                        captureHtml(scriptText);
                    } else {
                        queue.pause();
                    }
                };
            }

            function loadXDomain(cb) {
                var state = capture(context, options);
                queue.pause(); // pause the queue while the script loads
                logDebug('pause', src);

                doXDomainLoad(context.target, src, captureAndResume);

                function captureAndResume(xhr, st, error) {
                    logDebug('out', src, state.out);
                    html(uncapture(state),
                        newCallbackTag(state.finish) + setupResume());
                    logDebug('resume', src);
                }
            }

            function captureHtml(script, cb) {
                var state = captureWrite(script, context, options);
                cb = newCallbackTag(state.finish) + (cb || '');
                html(state.out, cb);
            }

            function safeOpts(options) {
                var copy = {};
                for (var i in options) {
                    if (options.hasOwnProperty(i)) {
                        copy[i] = options[i];
                    }
                }
                delete copy.done;
                return copy;
            }

            function html(markup, cb) {
                $.replaceWith(context.target, sanitize(markup, safeOpts(options), queue, context) + (cb || ''));
            }

            return '<div style="display: none" id="' + divId + '"></div>' + openTag +
                TEMPLATE.replace(/%d/, id) + '</script>';
        }
    }

    function doXDomainLoad(target, url, success) {
        // TODO what about scripts that fail to load? bad url, etc.?
        var script = document.createElement("script");
        script.src = url;

        target = $.$(target);

        var done = false, parent = target.parentNode;

        // Attach handlers for all browsers
        script.onload = script.onreadystatechange = function () {
            if (!done && (!this.readyState ||
                this.readyState == "loaded" || this.readyState == "complete")) {
                done = true;
                success();

                // Handle memory leak in IE
                script.onload = script.onreadystatechange = null;
                parent.removeChild(script);
            }
        };

        parent.insertBefore(script, target);
    }

    /**
     * Sanitizes all the given fragments and calls action with the HTML.
     * The next fragment is not started until the previous fragment
     * has executed completely.
     *
     * @param {Array} fragments array of objects like this:
     * {
     *   html: '<p>My html with a <script...',
     *   action: function(safeHtml,frag) { doSomethingToInject(safeHtml); },
     *   options: {} // optional, see #sanitize
     * }
     * Where frag is the object.
     *
     * @param {Function} [done] Optional. Called when all fragments are done.
     */
    function sanitizeSerial(fragments, done) {
        // create a queue for these fragments and make it the parent of each
        // sanitize call
        var queue = GLOBAL_Q;
        each(fragments, function (f) {
            queue.push(run);

            function run() {
                f.action(sanitize(f.html, f.options, queue), f);
            }
        });
        if (done) {
            queue.push(done);
        }
    }

    function findLastChild(el) {
        var n = el;
        while (n && n.nodeType === 1) {
            el = n;
            n = n.lastChild;
            // last child may not be an element
            while (n && n.nodeType !== 1) {
                n = n.previousSibling;
            }
        }
        return el;
    }

    /**
     * Experimental - automatically captures document.write calls and
     * defers them untill after page load.
     * @param {Function} [done] optional callback for when all the
     * captured content has been loaded.
     */
    function autoCapture(done) {
        var write = doc.write,
            writeln = doc.writeln,
            currentScript,
            autoQ = [];
        doc.writeln = function (s) {
            doc.write(s + '\n');
        };
        var state;
        doc.write = function (s) {
            var scriptEl = findLastChild(doc.body);
            if (scriptEl !== currentScript) {
                currentScript = scriptEl;
                autoQ.push(state = {
                    el: scriptEl,
                    out: []
                });
            }
            state.out.push(s);
        };
        $.onLoad(function () {
            // for each script, append a div immediately after it,
            // then replace the div with the sanitized output
            var el, div, out, safe, doneFn;
            done = normalizeOptions(done);
            doneFn = done.done;
            done.done = function () {
                doc.write = write;
                doc.writeln = writeln;
                if (doneFn) doneFn();
            };
            for (var i = 0, len = autoQ.length; i < len; i++) {
                el = autoQ[i].el;
                div = doc.createElement('div');
                el.parentNode.insertBefore(div, el.nextSibling);
                out = autoQ[i].out.join('');
                // only the last snippet gets passed the callback
                safe = len - i === 1 ? sanitize(out, done) : sanitize(out);
                $.replaceWith(div, safe);
            }
        });
    }

    function extsrc(cb) {
        var scripts = document.getElementsByTagName('script'),
            s, o, html, q, ext, async, doneCount = 0,
            done = cb ? newCallbackTag(function () {
                if (++doneCount >= exts.length) {
                    cb();
                }
            }) : '',
            exts = [];

        for (var i = 0, len = scripts.length; i < len; i++) {
            s = scripts[i];
            ext = s.getAttribute('extsrc');
            async = s.getAttribute('asyncsrc');
            if (ext || async) {
                exts.push({ext: ext, async: async, s: s});
            }
        }

        for (i = 0, len = exts.length; i < len; i++) {
            o = exts[i];
            if (o.ext) {
                html = '<script type="text/javascript" src="' + o.ext + '"> </script>';
                $.replaceWith(o.s, sanitize(html) + done);
            } else if (o.async) {
                html = '<script type="text/javascript" src="' + o.async + '"> </script>';
                $.replaceWith(o.s, sanitize(html, {asyncAll: true}, new Q()) + done);
            }
        }
    }

    var name = 'writeCapture';
    var self = global[name] = {
        _original: global[name],
        support: $,
        /**
         */
        fixUrls: function (src) {
            return src.replace(/&amp;/g, '&');
        },
        noConflict: function () {
            global[name] = this._original;
            return this;
        },
        debug: debug,
        /**
         * Enables a fun little hack that replaces document.getElementById and
         * creates temporary elements for the calling code to use.
         */
        proxyGetElementById: false,
        // this is only for testing, please don't use these
        _forTest: {
            Q: Q,
            GLOBAL_Q: GLOBAL_Q,
            $: $,
            matchAttr: matchAttr,
            slice: slice,
            capture: capture,
            uncapture: uncapture,
            captureWrite: captureWrite
        },
        replaceWith: function (selector, content, options) {
            $.replaceWith(selector, sanitize(content, options));
        },
        html: function (selector, content, options) {
            var el = $.$(selector);
            el.innerHTML = '<span/>';
            $.replaceWith(el.firstChild, sanitize(content, options));
        },
        load: function (selector, url, options) {
            $.ajax({
                url: url,
                dataType: 'text',
                type: "GET",
                success: function (content) {
                    self.html(selector, content, options);
                }
            });
        },
        extsrc: extsrc,
        autoAsync: autoCapture,
        sanitize: sanitize,
        sanitizeSerial: sanitizeSerial
    };

})(this.writeCaptureSupport, this);

/**
 * jquery.writeCapture.js
 *
 * Note that this file only provides the jQuery plugin functionality, you still
 * need writeCapture.js. The compressed version will contain both as as single
 * file.
 *
 * @author noah <noah.sloan@gmail.com>
 *
 */
(function ($, wc, noop) {
    // methods that take HTML content (according to API)
    var methods = {
        html: html
    };
    // TODO wrap domManip instead?
    $.each(['append', 'prepend', 'after', 'before', 'wrap', 'wrapAll', 'replaceWith',
        'wrapInner'], function () {
        methods[this] = makeMethod(this);
    });

    function isString(s) {
        return Object.prototype.toString.call(s) == "[object String]";
    }

    function executeMethod(method, content, options, cb) {
        if (arguments.length == 0) return proxyMethods.call(this);

        var m = methods[method];
        if (method == 'load') {
            return load.call(this, content, options, cb);
        }
        if (!m) error(method);
        return doEach.call(this, content, options, m);
    }

    $.fn.writeCapture = executeMethod;

    var PROXIED = '__writeCaptureJsProxied-fghebd__';
    // inherit from the jQuery instance, proxying the HTML injection methods
    // so that the HTML is sanitized
    function proxyMethods() {
        if (this[PROXIED]) return this;

        var jq = this;

        function F() {
            var _this = this, sanitizing = false;
            this[PROXIED] = true;
            $.each(methods, function (method) {
                var _super = jq[method];
                if (!_super) return;
                _this[method] = function (content, options, cb) {
                    // if it's unsanitized HTML, proxy it
                    if (!sanitizing && isString(content)) {
                        try {
                            sanitizing = true;
                            return executeMethod.call(_this, method, content,
                                options, cb);
                        } finally {
                            sanitizing = false;
                        }
                    }
                    return _super.apply(_this, arguments); // else delegate
                };
            });
            // wrap pushStack so that the new jQuery instance is also wrapped
            this.pushStack = function () {
                return proxyMethods.call(jq.pushStack.apply(_this, arguments));
            };
            this.endCapture = function () {
                return jq;
            };
        }

        F.prototype = jq;
        return new F();
    }

    function doEach(content, options, action) {
        var done, self = this;
        if (options && options.done) {
            done = options.done;
            delete options.done;
        } else if ($.isFunction(options)) {
            done = options;
            options = null;
        }
        wc.sanitizeSerial($.map(this, function (el) {
            return {
                html: content,
                options: options,
                action: function (text) {
                    action.call(el, text);
                }
            };
        }), done && function () {
            done.call(self);
        } || done);
        return this;
    }


    function html(safe) {
        $(this).html(safe);
    }

    function makeMethod(method) {
        return function (safe) {
            $(this)[method](safe);
        };
    }

    function load(url, options, callback) {
        var self = this, selector, off = url.indexOf(' ');
        if (off >= 0) {
            selector = url.slice(off, url.length);
            url = url.slice(0, off);
        }
        if ($.isFunction(callback)) {
            options = options || {};
            options.done = callback;
        }
        return $.ajax({
            url: url,
            type: options && options.type || "GET",
            dataType: "html",
            data: options && options.params,
            complete: loadCallback(self, options, selector)
        });
    }

    function loadCallback(self, options, selector) {
        return function (res, status) {
            if (status == "success" || status == "notmodified") {
                var text = getText(res.responseText, selector);
                doEach.call(self, text, options, html);
            }
        };
    }

    var PLACEHOLDER = /jquery-writeCapture-script-placeholder-(\d+)-wc/g;

    function getText(text, selector) {
        if (!selector || !text) return text;

        var id = 0, scripts = {};
        return $('<div/>').append(
            text.replace(/<script(.|\s)*?\/script>/g, function (s) {
                scripts[id] = s;
                return "jquery-writeCapture-script-placeholder-" + (id++) + '-wc';
            })
        ).find(selector).html().replace(PLACEHOLDER, function (all, id) {
            return scripts[id];
        });
    }

    function error(method) {
        throw "invalid method parameter " + method;
    }

    // expose core
    $.writeCapture = wc;
})(jQuery, writeCapture.noConflict());


$(function () {

    var waitForFinalEvent = (function () {
        var timers = {};
        return function (callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = "Don't call this twice without a uniqueId";
            }
            if (timers[uniqueId]) {
                clearTimeout(timers[uniqueId]);
            }
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();


// ! width classes

    var $html = $('html');


    function removeWidthClasses(elem) {
        elem.removeClass('w1216 w9012 w7590 wl75 wg16 w1024 noadv');
    };

    $(window).scroll(function () {
        var sc = window.pageYOffset || document.documentElement.scrollTop;
        if (sc > 0) {
            $('header').addClass('scrolled');
            $('.up').show();
        } else {
            $('header').removeClass('scrolled');
            $('.up').hide();
        }
    });

    function setWidthClasses() {
        var w = $html.width(),
            all = $('#all').width() + 50;
        if (w > 1600) {
            removeWidthClasses($html);
            $html.addClass('wg16');
            if (w >= 1680) {
                addSendsayadv();
            }
        } else if (w <= 1600 && w > 1200) {
            removeWidthClasses($html);
            $html.addClass('w1216');
            all >= w && $html.addClass('noadv');
        } else if (w <= 1200 && w > 900) {
            removeWidthClasses($html);
            $html.addClass('w9012');
            w > 1024 && $html.addClass('w1024');
            all >= w && $html.addClass('noadv');
        } else if (w <= 900 && w > 750) {
            removeWidthClasses($html);
            $html.addClass('w7590');
            all >= w && $html.addClass('noadv');
        } else if (w <= 750 && w > 300) {
            removeWidthClasses($html);
            $html.addClass('wl75');
            cutRubric();
            all >= w && $html.addClass('noadv');
        }
    };

    function setCurrentYear() {
        var curr_date = new Date();
        $('.year_auto').html(curr_date.getFullYear());
    }


    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if (isMobile.any()) {
        $html.addClass(isMobile.any()[0]);
    }


    /* don't used */
    function showFeedback() {
        var w = $html.width(),
            all = $('#all').width() + 50,
            //minWidth = 990;
            minWidth = 750;
        if (w < all) {
            if (w < minWidth) {
                $('#opinionsBottom').append($('.opinions').removeClass('wideScreen'));
            } else {
                $('#opinions').append($('.opinions').removeClass('wideScreen'));
            }
        }
    }

    /* for wide screen adv_sendsay -- */
    function addSendsayadv() {
        if ($("div.wrap_adv").length == 0) {
            $('#all').wrap("<div class='wrap_adv'></div>");
            $('#all').after($(".mediawayss_adv"));
            $('#all').after($(".sendsay_adv"));
        }
    }

    function delAdv() {
        var layout = $('html'),
            w = layout.width();
        $(document).ready(function () {
            if (w > 750) {
                var el = document.getElementById('googleadvmobile');
                if (el) {
                    el.innerHTML = "";
                }
            }
        });
    }


    function changeTarget() {
        if ($('.topicentry #usertext').length) {
            var text = $('#usertext'),
                links = text.find('a');
            var regexpSub = new RegExp("subscribe\.ru", "i");
            var regexpHttp = new RegExp("http", "i");
            links.each(function () {
                var link = $(this).attr('href'),
                    target = $(this).attr('target');
                if (link.search(regexpSub) < 0 && link.search(regexpHttp) > -1) {    // О©╫О©╫О©╫ О©╫О©╫О©╫О©╫ subscribe.ru О©╫ О©╫О©╫О©╫О©╫ http
                    if (!target || target != "_blank") {
                        $(this).attr("target", "_blank");
                    }
                }
            });
        }
    }


    var is_touch_device = 'ontouchstart' in document.documentElement;
    if (is_touch_device) {
        $html.addClass('touch')
    }


    splicer();
    setWidthClasses();
    checkboxActive();
    delAdv();
    changeTarget();
    setCurrentYear();


    $(window).resize(function () {
        setWidthClasses();
        delAdv();
    });

    /* add class Active for checked checkboxes on the edit/members/ page */
    function checkboxActive() {
        $('.group-adminPage_members .chk').find('input[type=checkbox][id$="is_banned"]:checked').closest('.chk').addClass('active');
    }

    /* О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫ */
    function splicer() {
        if (window.location.pathname == '/group/create/') {
            var elem = $('#id_description').parent().find('span.mceEditor.nevodSkin'),
                elemC = elem.length;
            if (elemC > 1) {
                $('#id_description').parent().find('span.mceEditor.nevodSkin').filter(':visible').remove();
                $('#id_description').parent().find('span.mceEditor.nevodSkin').css({display: "block"});
            }
        }
    }

    $('#id_name').live('click', function (e) {
        splicer();
    });

// ! menu

    function showLeftMenu() {
        $('.maincontent, .b-maincol,.new-functions,.search').addClass('maincontent-pushed');
        $('.leftmenu, .b-leftcol').addClass('leftmenu-opened');
        $('.menu_link').addClass('active');
    };

    function hideLeftMenu() {
        $('.maincontent, .b-maincol,.new-functions,.search').removeClass('maincontent-pushed');
        $('.leftmenu, .b-leftcol').removeClass('leftmenu-opened');
        $('.menu_link').removeClass('active');
        hideLeftSubMenus();
    };

    function slideUpLeftMenu() {
        $('.leftmenu-2').animate({'left': '-750'}, 400);
        $('.menu_link').removeClass('active-2');
    };

    function slideDownLeftMenu() {
        $('.leftmenu-2').animate({'left': '0'}, 400);
        $('.menu_link').addClass('active-2');
    };


    $('.up').live('click touchstart', function (e) {
        $("body").animate({"scrollTop": 0}, "fast");
    });

    $('.menu_link').live('click touchstart', function (e) {
        e.preventDefault();
        if (!$html.hasClass('wl75')) {
            if (!$(this).hasClass('active')) {
                showLeftMenu();
            } else {
                hideLeftMenu();
            }
        } else {
            if (!$(this).hasClass('active-2')) {
                slideDownLeftMenu();
                hideLogreg($('.usermenu_link-1'));
            } else {
                slideUpLeftMenu();
            }
        }
    });

    $('.leftmenu').clone().appendTo('#all');
    $('#all .leftmenu:eq(1)').removeClass('leftmenu noPhones').addClass('leftmenu-2');
    $('.leftmenu_arrows').live('click', function () {
        hideLeftMenu()
    });


    function getHeightsOfSubMenus() {
        $('.leftmenu_innerList').each(function () {
            $(this).removeAttr('style');
            var h = $(this).height();
            $(this).attr('data-height', h).height(0);
        });
    };

    function showLeftSubMenu(link) {
        showLeftMenu();
        var h = parseInt(link.find('.leftmenu_innerList').attr('data-height')) + 5;
        link.find('.leftmenu_innerList').animate({'height': h + 'px'}, 400);
        link.addClass('active');
    };

    function hideLeftSubMenu(link) {
        link.find('.leftmenu_innerList').animate({'height': '0px'}, 400);
        link.removeClass('active');
    };

    function hideLeftSubMenus() {
        $('.leftmenu_innerList').animate({'height': '0px'}, 400);
        $('.leftmenu_link').removeClass('active');
    };


    getHeightsOfSubMenus();
    $(window).resize(function () {
        getHeightsOfSubMenus();
    });

    $('.leftmenu_link').live('click', function (e) {
        var $this = $(this);
        if ($this.find('.leftmenu_innerList').size() != 0) {
            e.preventDefault();
            if (!$this.hasClass('active')) {
                showLeftSubMenu($this);
            } else {
                hideLeftSubMenu($this);
            }
        }
    });


// ! search && logreg & logged

    var animTime = 200;

    function showOverlay() {
        $('.overlay').fadeIn(animTime);
    };

    function hideOverlay() {
        $('.overlay').fadeOut(animTime);
        //$.unblockUI({message: ''});
    };

    function showSearchForm(elem) {
        hideLogreg($('.usermenu_link-1'));
        hideLogged($('.usermenu_link-3'));
        showOverlay();
        $('.search, .b-soc-search').fadeIn(animTime).find('input:first').focus();
        elem.addClass('active');
    };

    function hideSearchForm(elem) {
        $('.search, .b-soc-search').fadeOut(animTime);
        elem.removeClass('active');
    };

    function showLogreg(elem) {
        hideSearchForm($('.usermenu_link-2'));
        //showOverlay();
        $('.logreg, #loginForm').fadeIn(animTime).find('input:not(:hidden):first').focus();
        if (!$('.logreg_log').hasClass('active') && !$('logreg_reg').hasClass('active')) {
            $('.logreg_log').addClass('active');
        }
        $('.logreg, #loginForm').find('input:not(:hidden):first').focus();
        elem.addClass('active');
    };

    /*function setActiveClass(elem){
        if (!$(elem).hasClass('active')) { $(elem).addClass('active'); }
    };*/

    function hideLogreg(elem) {
        $('.logreg, #loginForm').fadeOut(animTime);
        $.unblockUI({message: ''});
        elem.removeClass('active');
    };

    function showLogged(elem) {
        hideSearchForm($('.usermenu_link-2'));
        showOverlay();
        $('.logged').fadeIn(animTime);
        elem.addClass('active');
    };

    function hideLogged(elem) {
        $('.logged').fadeOut(animTime);
        elem.removeClass('active');
    };

    function showTopMenu(elem) {
        $('.topmenu_list,.topmenu_info,.topmenu_item').removeClass('active');
        $('.topmenu_info').hide();
        $(elem).closest('.topmenu_item').addClass('active').find('.topmenu_list').fadeIn(animTime);
        showOverlay();
        elem.closest('.topmenu_info').addClass('active').show();
    }

    function hideTopMenu() {
        $('.topmenu_item,.topmenu_info').removeClass('active');
        $('.topmenu_info').show();
    }

    function hideRegularPopups() {
        $('.popup-regular').fadeOut(animTime);
    };

    function showAddFile(elem) {
        showOverlay();
        $('.addFileForm').show();
        $('.addFileForm').css({display: "block"});
        elem.addClass('active');
    };

    function hideAddFile(elem) {
        $('.addFileForm').fadeOut(animTime);
        elem.removeClass('active');
    };


    $('.toggler').live('click', function (e) {
        e.preventDefault();
        console.log('toggler click');
        if (!$(this).hasClass('active')) {
            showOverlay();
            showAddFile($(this));
        } else {
            hideOverlay();
            hideAddFile($(this));
        }
    });


    $('.topmenu_info').live('click', function (e) {
        showTopMenu($(e.target));
    });
    $('.topmenu_info.active').live('click', function (e) {
        hideTopMenu();
        hideOverlay();

    });


    $('.usermenu_link-1.active').live('click touchstart', function (e) {
        // hideLogreg($(this));     console.log('actclick')
    });

    $('.usermenu_link-1').live('click touchstart', function (e) {
        hideSearchForm($('.usermenu_link-2'));
        slideUpLeftMenu();
    });

    $('.usermenu_link-2').live('click', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            showSearchForm($(this));
        } else {
            hideOverlay();
            hideSearchForm($(this));
        }
        if ($html.hasClass('wl75')) {
            slideUpLeftMenu();
        }
    });

    $('.search-submit, .group_sends-search input[type=submit]').live('click', function (e) {
        e.preventDefault();
        var query = $(this).closest('form').find('input[name=q]').val();
        var curr_url = window.location.href;
        window.open("https://www.google.ru/search?q=" + query + "&sitesearch=" + curr_url.substring(7), "_blank");
    });


    $('.maps_menuLink').live('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('maps_menuLink-led')) {
            $('.maps_led').addClass('maps_active');
            $('.maps_mow').removeClass('maps_active');
            $('.maps_menuLink-mow').removeClass('maps_menuLink-active');
        }
        if ($(this).hasClass('maps_menuLink-mow')) {
            $('.maps_led').removeClass('maps_active');
            $('.maps_mow').addClass('maps_active');
            $('.maps_menuLink-led').removeClass('maps_menuLink-active');
        }
        $(this).addClass('maps_menuLink-active');
    });

    function clickSearch() {
        if (!$(this).hasClass('active')) {
            showSearchForm($(this));
        } else {
            hideOverlay();
            hideSearchForm($(this));
        }
    }

    $('.usermenu_link-3').live('click', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            showLogged($(this));
            slideUpLeftMenu();
        } else {
            hideOverlay();
            hideLogged($(this));
        }
    });

    $('.overlay, .blockOverlay').live('click touchstart', function (e) {
        e.preventDefault();
        hideOverlay();
        hideLogreg($('.usermenu_link-1'));
        hideSearchForm($('.usermenu_link-2'));
        hideLogged($('.usermenu_link-3'));
        hideRegularPopups();
        hideTopMenu();
    });


//function clearInput() {$('.search input[type="text"]').val('').focus();};

    $('.search-clear, .b-soc-search__search-clear').live('click', function () {
        hideOverlay();
        hideSearchForm($('.usermenu_link-2'));
    });

// for each element we should take attr [data-action], which contains a className of element we want to show
    $('[data-action]').live('click', function (e) {
        e.preventDefault();
        var class_name = $(this).attr('data-action');
        $('.overlay, .' + class_name).fadeIn(animTime);
    });

// recommends
    var recUlI = 0,
        recUlCount = 0;

    $('.logreg_recomUl').each(function () {
        $(this).attr('data-index', recUlI);
        recUlI++;
        recUlCount++;
    });

    function showOtherRecs() {
        var i = 0;
        if ((parseInt($('.logreg_recomUl.active').attr('data-index')) + 1) < recUlCount) {
            i = parseInt($('.logreg_recomUl.active').attr('data-index')) + 1
        }
        $('.logreg_recomUl.active').removeClass('active').addClass('hidden');
        $('.logreg_recomUl:eq(' + i + ')').addClass('active').removeClass('hidden');
    };

    $('.logreg_show').live('click', function (e) {
        e.preventDefault();
        showOtherRecs();
    });


// ! tabs

    function changeTab(elem) {
        if (!elem.hasClass('active')) {
            var index = elem.attr('data-tab');
            $('[data-cont]').hide();
            $('[data-cont="' + index + '"]').show().find('input:first').focus();
            $('[data-tab]').removeClass('active');
            elem.addClass('active');
        }
    };


    $('.logreg_tab').live('click', function (e) {
        e.preventDefault();
        changeTab($(this));
    });

    $('[data-func="registr"]').live('click', function () {
        changeTab($('.logreg_tab:eq(1)'));
    });


// ! phone horizontal catmenu

    var
        critW = 0,
        catTime = 200,
        cur = 0;

    function setCritW() {
        critW = 0;
        $('.catmenu_item').each(function () {
            critW += $(this).width() + parseInt($(this).css('padding-left')) + parseInt($(this).css('padding-right'));
        });
    };

    function scrollToNextLink() {
        var current = $('.catmenu_item:eq(' + cur + ')');
        if (Math.abs(parseInt($('.catmenu_ul').css('margin-left'))) + current.width() < critW) {
            $('.catmenu_grad2').fadeIn(catTime);
            $('.catmenu_ul').animate({'margin-left': '-=' + current.width() + 'px'}, catTime);
            cur += 1;
        }
        if (Math.abs(parseInt($('.catmenu_ul').css('margin-left'))) + current.width() >= critW - $html.width()) {
            $('.catmenu_grad').fadeOut(catTime);
        }
    };

    function scrollToPrevLink() {
        var current = $('.catmenu_item:eq(' + (cur - 1) + ')');
        if (parseInt($('.catmenu_ul').css('margin-left')) < -20) {
            $('.catmenu_grad').fadeIn(catTime);
            $('.catmenu_ul').animate({'margin-left': '+=' + current.width() + 'px'}, catTime);
            cur -= 1;
        }
        if (parseInt($('.catmenu_ul').css('margin-left')) + current.width() >= -20) {
            $('.catmenu_grad2').fadeOut(catTime);
        }
    };

    function checkGrads() {
        setCritW();
        if (critW > $html.width()) {
            $('.catmenu_grad').show();
        }
    };


    checkGrads();
    $('.catmenu_grad2').hide();
    $(window).resize(function () {
        checkGrads();
    });

    $('.catmenu_grad').live('click', function () {
        scrollToNextLink();
    });
    $('.catmenu_grad2').live('click', function () {
        scrollToPrevLink();
    });

// show author-friends
    $('.mod_friendsLink-allLinkMy').live('click', function () {
        $(this).closest('.mod_friendsItem').hide();
        $('.mod_friendsLink-allMyFriends').show();
        return false;
    });
    $('.mod_friendsLink-allLinkMe').live('click', function () {
        $(this).closest('.mod_friendsItem').hide();
        $('.mod_friendsLink-allMeFriends').show();
        return false;
    });

// show search for age groups
    $('#searchGroup_tab').live('click', function () {
        $(this).closest('.tabs_item').siblings().find('a.tabs_link-active').removeClass('tabs_link-active');
        $(this).addClass('tabs_link-active');
        $('.group_sends-search').show();
        $('.group_sends,.group_menu').hide();
        return false;
    });
    $('#searchGroup_phoneTab').live('click', function () {
        $(this).closest('.catmenu_item').siblings().find('a.catmenu_link-active').removeClass('catmenu_link-active');
        $(this).addClass('catmenu_link-active');
        $('.group_sends-search').show();
        $('.group_sends,.group_menu').hide();
        scrollToNextLink();
        return false;
    });

//cut rubric for left column phone-mode  (economics,comp)
    function cutRubric() {
        var rubric6 = $('.wl75 .leftmenu_icon-6 + .leftmenu_title');
        var cutrubric6 = rubric6.text().split(' ');
        rubric6.text(cutrubric6[0]);
        var rubric3 = $('.wl75 .leftmenu_icon-3 + .leftmenu_title');
        var cutrubric3 = rubric3.text().split(' ');
        rubric3.text(cutrubric3[0]);
        var rubric12 = $('.wl75 .leftmenu_icon-12 + .leftmenu_title');
        var cutrubric12 = rubric12.text().split(',');
        rubric12.text(cutrubric12[0]);
    }

// ! phone site map

    function showSiteMap() {
        $('.map').show();
    };

    function hideSiteMap() {
        $('.map').hide();
    };


    $('.footer_cr2-info').live('click', function (e) {
        e.preventDefault();
        showSiteMap();
    });

    $('.map_icon').live('click', function (e) {
        e.preventDefault();
        hideSiteMap();
    });


// ! phSelect

    var
        phSelTime = 100,
        zi = 99;


    $('.phSelect').each(function () {
        $(this).css('z-index', zi);
        zi--;
    });


    function showPhSelectList(sel, e) {
        if ($(e.target).closest('.phSelect_tohold').size() != 0) {
            return false;
        }
        if (!sel.hasClass('active') && $(e.target).closest('.phSelect_list').size() == 0) {
            e.preventDefault();
            e.cancelBubble = true;
            e.stopPropagation();
            $('.phSelect.active .phSelect_list').hide().removeClass('active');
            sel.find('.phSelect_list').fadeIn(phSelTime);
            sel.addClass('active');
            $html.live('click', function (e) {
                if ($(e.target).closest('.phSelect').size() == 0) {
                    $('.phSelect.active').removeClass('active');
                    $('.phSelect_list').fadeOut(phSelTime)
                }
            });
            //$('.phSelect_link a').bind('click', function (e) {
            $('.phSelect_link a, a.phSelect_link, .phSelect_list a.group_menuLink').bind('click', function (e) {
                $('.phSelect.active').removeClass('active');
                $('.phSelect_list').fadeOut(phSelTime);
                var value = $(e.target).text();
                $(e.target).closest('.phSelect').find('.phSelect_value').html(value);
                $(e.target).closest('.phSelect_list').fadeOut(phSelTime);
                $(e.target).closest('.phSelect').removeClass('active');
            });
        } else if ($(e.target).closest('.phSelect_list').size() !== 0 && !$(e.target).hasClass('phSelect_read')) {
            e.preventDefault();
            e.cancelBubble = true;
            e.stopPropagation();
            $(e.target).closest('.phSelect_list').find('.phSelect_link').removeClass('active');
            $(e.target).closest('.phSelect_link').addClass('active');
            var value = $(e.target).closest('.phSelect_link').text(),
                valueID = $(e.target).closest('.phSelect_link').attr('id');
            $(e.target).closest('.phSelect').find('.phSelect_value').html(value);

            if (valueID) {
                $(e.target).closest('.phSelect').find('.phSelect_hideList').val(valueID);
                $(e.target).closest('.phSelect').find('.phSelect_hideList option[val=' + valueID + ']').prop({selected: true});
                //$(e.target).closest('.phSelect').find('.phSelect_hideList option[val=' + valueID + ']').attr('selected',true);
            } else {
                $(e.target).closest('.phSelect').find('.phSelect_hideList').val(value);
                $(e.target).closest('.phSelect').find('.phSelect_hideList option:contains("' + value + '")').prop({selected: true});
            }

            $(e.target).closest('.phSelect_list').fadeOut(phSelTime);
            $(e.target).closest('.phSelect').removeClass('active');
        }
    };


    $('.phSelect').live('click', function (e) {
        showPhSelectList($(this), e);
    });

    (function ($) {
        if ($.ui && $.ui.autocomplete) {
            $.widget("custom.catcomplete", $.ui.autocomplete, {
                _create: function () {
                    this._super();
                    this.widget().menu("option", "items", "> :not(.ui-autocomplete-category)");
                    this.options.defaultText && this.element.val(this.options.defaultText);

                    var _this = this;
                    this.element.bind('change input', function () {
                        _this.options.showAll = false;
                    });
                },

                _renderItem: function (ul, item) {
                    if (!item.category || this.options.showAll) {
                        return $("<li>")
                            .addClass(item.category ? 'ui-autocomplete-category' : '')
                            .append(item.label)
                            .appendTo(ul);
                    } else {
                        return $("");
                    }
                }
            });


            $.widget("custom.combobox", {
                _create: function () {
                    this.wrapper = $("<span>")
                        .addClass("custom-combobox phSelect-wide")
                        .insertAfter(this.element);

                    this.element.hide();
                    this._createAutocomplete();
                    this._createShowAllButton();
                },

                _createAutocomplete: function () {
                    var selected = this.element.children(":selected"),
                        value = selected.val() ? selected.text() : "",
                        firstOption = this.element.children("option:first"),
                        defaultText = this.defaultText = this.options.defaultText || value || !firstOption.val() && firstOption.text();

                    this.input = $("<input>")
                        .appendTo(this.wrapper)
                        .val(value)
                        .attr("title", "")
                        .addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left")
                        .val(this.wrapper.prev().children(':first-child').html())
                        .tooltip({
                            tooltipClass: "ui-state-highlight"
                        })
                        .catcomplete({
                            delay: 0,
                            minLength: 0,
                            source: $.proxy(this, "_source"),
                            defaultText: defaultText
                        })

                    this._on(this.input, {
                        catcompleteselect: function (event, ui) {
                            ui.item.option.selected = true;
                            this._trigger("select", event, {
                                item: ui.item.option
                            });
                        },

                        catcompletechange: "_removeIfInvalid",

                        catcompleteopen: function (event, ui) {
                            var elem = $('.ui-autocomplete:first'),
                                win = $(window);
                            if (elem.length) {
                                elem.css({
                                    'overflow-x': '',
                                    'overflow-y': '',
                                    height: ''
                                });
                                if (elem.offset().top + elem.height() > win.scrollTop() + win.height()) {
                                    var scroll = elem.offset().top - (this.options.minScrollTop || 0);
                                    window.scrollTo(0, scroll > 0 ? scroll : 0);
                                    elem.css({
                                        height: win.height() - (elem.offset().top - win.scrollTop()) + 'px',
                                        'overflow-x': 'hidden',
                                        'overflow-y': 'scroll'
                                    })
                                }
                            }
                        }
                    });
                },

                _createShowAllButton: function () {
                    var input = this.input,
                        wasOpen = false;

                    $("<a>")
                        .attr("tabIndex", -1)
                        //.attr( "title", "Show All Items" )
                        .tooltip()
                        .appendTo(this.wrapper)
                        .button({})
                        .removeClass("ui-corner-all")
                        .addClass("custom-combobox-toggle ui-corner-right")
                        .mousedown(function () {
                            wasOpen = input.catcomplete("widget").is(":visible");
                        })
                        .click(function () {
                            input.catcomplete("option", "showAll", true);
                            input.focus();

                            // Close if already visible
                            if (wasOpen) {
                                return;
                            }

                            // Pass empty string as value to search for, displaying all results
                            input.catcomplete("search", "");
                        });
                },

                _source: function (request, response) {
                    var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), "i");
                    response(this.element.children("option").map(function (num) {
                        var text = $(this).text();
                        if (num && (!request.term || matcher.test(text)))
                            return {
                                //label: text,
                                //value: this.value,
                                category: !this.value,
                                value: text,
                                option: this
                            };
                    }));
                },

                _removeIfInvalid: function (event, ui) {
                    // Selected an item, nothing to do
                    if (ui.item) {
                        if (ui.item.option) {
                            $(ui.item.option).attr('selected', 'selected');
                        }
                        return;
                    }

                    this.element.children("option:first").attr('selected', 'selected');

                    // Search for a match (case-insensitive)
                    var value = this.input.val(),
                        valueLowerCase = value.toLowerCase(),
                        valid = false;
                    this.element.children("option").each(function () {
                        if ($(this).text().toLowerCase() === valueLowerCase) {
                            this.selected = valid = true;
                            return false;
                        }
                    });

                    // Found a match, nothing to do
                    if (valid) {
                        return;
                    }

                    if (this.input.val()) {
                        this.input
                            .attr("title", value + " О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫")
                            .tooltip("open");
                    }

                    // Remove invalid value
                    this.input
                        .val(this.defaultText || '');
                    this.element.val('');
                    this._delay(function () {
                        this.input.tooltip("close").attr("title", "");
                    }, 2500);
                    this.input.catcomplete("instance").term = "";
                },

                _destroy: function () {
                    this.wrapper.remove();
                    this.element.show();
                }
            });

        }
    })(jQuery);

    $.custom && $.custom.combobox && $(".ankSG").combobox({
        minScrollTop: 130
    });


// ! chk

    function changeCHKState(elem) {
        if (elem.parents('.chk').hasClass('active')) {
            elem.parents('.chk').removeClass('active');
        } else {
            elem.parents('.chk').addClass('active');
        }
    };


    $('.chk input').live('change', function () {
        changeCHKState($(this))
    });


    function changeRadioState(elem) {
        var name = elem.attr('name');
        $('[name="' + name + '"]').parents('.radio').removeClass('active');
        elem.parents('.radio').addClass('active');
    };


    $('.radio input').live('change', function () {
        changeRadioState($(this))
    });

    $('.user-opinions').live('click', function () {
        $('.form-opinion').toggleClass('open');
    });

    /* don't used */
    $('.opinions_head').live('click', function () {
        var arrow = $(this).find('.opinions_arrow'),
            directionLabel;

        directionLabel = $(".opinions:visible").hasClass("wideScreen") ? "right" : "up";
        $(this).closest('.opinions').find(".opinions_form").toggle("slide", {direction: directionLabel}, "slow", function () {
            arrow.toggleClass('hide');
        });
        if ($(this).closest('footer').length) {
            if (isMobile.Android()[0]) {
                $('#opinionsBottom').css('marginBottom', '300px');
            }
            window.scrollBy(0, $(this).parent().height());
        }
    });
    /* don't used */
    $('.opinions_send').live('click', function () {
        var parent = $(this).closest('.opinions');
        parent.find('.opinions_arrow').removeClass('hide');
        parent.find('.opinions_form').hide();
        parent.find('.opinions_thanks').fadeIn('fast');
        setTimeout(function () {
            parent.find('.opinions_thanks').fadeOut('fast')
        }, 4000);

    });

    $('.opinions_body').live('click', function () {
        $(this).attr('placeholder', '');
    });

    $('.opinions_thanks-close').live('click', function () {
        $('.opinions_thanks').fadeOut('fast');
    });

    // show all description
    $('.group_description-overflow').live('click', function () {
        $(this).closest('.group_description').find('.group_description-text').css('maxHeight', 'none');
        $(this).hide();
    });

// ! hovers

    /*function showDigestInfo(elem) {
     elem.parents('')
     };*/


// ! mod_rate numbering

    var mod_i = 1;


    $('.mod_rate').each(function () {
        var $this = $(this);
        $this.find('li').each(function () {
            $(this).prepend('<span class="mod_rateNumber">' + mod_i + '.</span>');
            mod_i++;
        });
        mod_i = 1;
    });


// ! mod_sections

    var mod_secTime = 200;


    function setMod_sectionsHeights() {
        $('.mod_secSublist').each(function () {
            var h = 0;
            var $this = $(this);
            $this
                .show()
                .find('.mod_secSublink').each(function () {
                h += ($(this).height() + parseInt($(this).css('padding-top')) + parseInt($(this).css('padding-bottom')))
            });
            $this.attr('data-height', h).animate({'height': '0'}, 0).hide();
            console.log(h);
        });
    };

    function chooseMod_sectionSublist(link, e) {
        e.preventDefault();
        var $list = link.parents('.mod_secItem').find('.mod_secSublist');
        if ($list.hasClass('active')) {
            closeMod_sectionSublink(link)
        } else {
            openMod_sectionSublink(link)
        }
    };

    function openMod_sectionSublink(link) {
        var $list = link.parents('.mod_secItem').find('.mod_secSublist');
        var h = $list.attr('data-height');
        $list.show().animate({'height': h + 'px'}, mod_secTime).addClass('active');
    };

    function closeMod_sectionSublink(link) {
        var $list = link.parents('.mod_secItem').find('.mod_secSublist');
        var h = 0;
        $list.animate({'height': h + 'px'}, mod_secTime).removeClass('active');
        setTimeout(function () {
            $list.hide();
        }, mod_secTime);
    };


    setMod_sectionsHeights();
    $(window).resize(function () {
        waitForFinalEvent(function () {
            setMod_sectionsHeights();
        }, 500, "some unique string");
    });
    $('.mod_secLink').live('click', function (e) {
        chooseMod_sectionSublist($(this), e);
    });


// manage views

    function changeView(elem) {
        var ind = elem.attr('data-view');
        $('.ex').removeClass().addClass('ex ex' + ind);
    };


    $('[data-view]').live('click', function () {
        changeView($(this));
    });


// ! mod_menu2

    var mod_m2Time = 200;


    function setMod_menu2Heights() {
        $('.mod_menu2Inner').each(function () {
            var h = 0;
            var $this = $(this);
            $this
                .show()
                .find('.mod_menu2InnerLink').each(function () {
                h += ($(this).height() + parseInt($(this).css('padding-top')) + parseInt($(this).css('padding-bottom')))
            });
            $this.attr('data-height', h).animate({'height': '0'}, 0).hide();
            console.log(h);
        });
    };

    function chooseMod_menu2Sublist(link, e) {
        e.preventDefault();
        var $list = link.parents('.mod_m2Item').find('.mod_menu2Inner');
        if ($list.hasClass('active')) {
            closeMod_menu2Sublink(link)
        } else {
            openMod_menu2Sublink(link)
        }
    };

    function openMod_menu2Sublink(link) {
        var $list = link.parents('.mod_m2Item').find('.mod_menu2Inner');
        var h = $list.attr('data-height');
        $list.show().animate({'height': h + 'px'}, mod_m2Time).addClass('active');
    };

    function closeMod_menu2Sublink(link) {
        var $list = link.parents('.mod_m2Item').find('.mod_menu2Inner');
        var h = 0;
        $list.animate({'height': h + 'px'}, mod_m2Time).removeClass('active');
        setTimeout(function () {
            $list.hide();
        }, mod_m2Time);
    };


    setMod_menu2Heights();
    $(window).resize(function () {
        waitForFinalEvent(function () {
            setMod_menu2Heights();
        }, 500, "some unique string");
    });
    $('.mod_m2Link').live('click', function (e) {
        chooseMod_menu2Sublist($(this), e);
    });


// ! calendar UI

    /*if ($('.calendar').size() != 0 || $('.calendarInput').size() != 0) {
     $.datepicker.regional['ru'] = {
     closeText: 'О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
     prevText: '&#x3c;О©╫О©╫О©╫О©╫',
     nextText: 'О©╫О©╫О©╫О©╫&#x3e;',
     currentText: 'О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
     monthNames: ['О©╫О©╫О©╫О©╫О©╫О©╫','О©╫О©╫О©╫О©╫О©╫О©╫О©╫','О©╫О©╫О©╫О©╫','О©╫О©╫О©╫О©╫О©╫О©╫','О©╫О©╫О©╫','О©╫О©╫О©╫О©╫','О©╫О©╫О©╫О©╫','О©╫О©╫О©╫О©╫О©╫О©╫','О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫','О©╫О©╫О©╫О©╫О©╫О©╫О©╫','О©╫О©╫О©╫О©╫О©╫О©╫','О©╫О©╫О©╫О©╫О©╫О©╫О©╫'],
     monthNamesShort: ['О©╫О©╫О©╫','О©╫О©╫О©╫','О©╫О©╫О©╫','О©╫О©╫О©╫','О©╫О©╫О©╫','О©╫О©╫О©╫','О©╫О©╫О©╫','О©╫О©╫О©╫','О©╫О©╫О©╫','О©╫О©╫О©╫','О©╫О©╫О©╫','О©╫О©╫О©╫'],
     dayNames: ['О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫','О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫','О©╫О©╫О©╫О©╫О©╫О©╫О©╫','О©╫О©╫О©╫О©╫О©╫','О©╫О©╫О©╫О©╫О©╫О©╫О©╫','О©╫О©╫О©╫О©╫О©╫О©╫О©╫','О©╫О©╫О©╫О©╫О©╫О©╫О©╫'],
     dayNamesShort: */
    /*['О©╫О©╫О©╫','О©╫О©╫О©╫','О©╫О©╫О©╫','О©╫О©╫О©╫','О©╫О©╫О©╫','О©╫О©╫О©╫','О©╫О©╫О©╫']*/
    /*['О©╫О©╫','О©╫О©╫','О©╫О©╫','О©╫О©╫','О©╫О©╫','О©╫О©╫','О©╫О©╫'],
     dayNamesMin: ['О©╫О©╫','О©╫О©╫','О©╫О©╫','О©╫О©╫','О©╫О©╫','О©╫О©╫','О©╫О©╫'],
     weekHeader: 'О©╫О©╫О©╫',
     dateFormat: 'dd.mm.yy',
     firstDay: 1,
     isRTL: false,
     showMonthAfterYear: false,
     yearSuffix: ''
     };
     $.datepicker.setDefaults($.datepicker.regional['ru']);

     $('.calendar, .calendarInput').datepicker({});

     var calTime = 200;

     $('.mod_calIcon').click(function(){
     var $cal = $(this).find('.mod_calendar');
     $cal.fadeIn(calTime);
     $('html').live('click', function(e){
     if ($(e.target).closest('.mod_calIcon').size() == 0) {$cal.fadeOut(calTime);}
     });
     });

     }*/

    if ($.datepicker) {
        /*$.datepicker.regional['ru'] = {
            closeText: 'О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
            prevText: '&#x3c;О©╫О©╫О©╫О©╫',
            nextText: 'О©╫О©╫О©╫О©╫&#x3e;',
            currentText: 'О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
            monthNames: ['О©╫О©╫О©╫О©╫О©╫О©╫', 'О©╫О©╫О©╫О©╫О©╫О©╫О©╫', 'О©╫О©╫О©╫О©╫', 'О©╫О©╫О©╫О©╫О©╫О©╫', 'О©╫О©╫О©╫', 'О©╫О©╫О©╫О©╫', 'О©╫О©╫О©╫О©╫', 'О©╫О©╫О©╫О©╫О©╫О©╫', 'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫', 'О©╫О©╫О©╫О©╫О©╫О©╫О©╫', 'О©╫О©╫О©╫О©╫О©╫О©╫', 'О©╫О©╫О©╫О©╫О©╫О©╫О©╫'],
            monthNamesShort: ['О©╫О©╫О©╫', 'О©╫О©╫О©╫', 'О©╫О©╫О©╫', 'О©╫О©╫О©╫', 'О©╫О©╫О©╫', 'О©╫О©╫О©╫', 'О©╫О©╫О©╫', 'О©╫О©╫О©╫', 'О©╫О©╫О©╫', 'О©╫О©╫О©╫', 'О©╫О©╫', 'О©╫О©╫О©╫'],
            dayNames: ['О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫', 'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫', 'О©╫О©╫О©╫О©╫О©╫О©╫О©╫', 'О©╫О©╫О©╫О©╫О©╫', 'О©╫О©╫О©╫О©╫О©╫О©╫О©╫', 'О©╫О©╫О©╫О©╫О©╫О©╫О©╫', 'О©╫О©╫О©╫О©╫О©╫О©╫О©╫'],
            dayNamesShort: ['О©╫О©╫', 'О©╫О©╫', 'О©╫О©╫', 'О©╫О©╫', 'О©╫О©╫', 'О©╫О©╫', 'О©╫О©╫'],
            dayNamesMin: ['О©╫О©╫', 'О©╫О©╫', 'О©╫О©╫', 'О©╫О©╫', 'О©╫О©╫', 'О©╫О©╫', 'О©╫О©╫'],
            weekHeader: 'О©╫О©╫О©╫',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        };*/
        /*$.datepicker.setDefaults($.datepicker.regional['ru']);*/

        $('.calendarInput').datepicker({
            dateFormat: 'dd-mm-yy',
            changeMonth: true,
            changeYear: true,
            yearRange: '-100:+00',
            onSelect: function (dateText, inst) {
                dateText = $.datepicker.formatDate(
                    'dd.mm.yy',
                    new Date(inst.selectedYear, inst.selectedMonth, inst.selectedDay)
                );
                var ankDD = dateText.split('.', 1)[0],
                    ankMM = dateText.split('.', 2)[1],
                    ankYYYY = dateText.split('.', 3)[2];
                $('#ankDD').append($('<option value=' + ankDD + ' selected>' + ankDD + '</option>'));
                $('#ankMM').append($('<option value=' + ankMM + ' selected>' + ankMM + '</option>'));
                $('#ankYYYY').append($('<option value=' + ankYYYY + ' selected>' + ankYYYY + '</option>'));
                childUser(ankYYYY);
            }
        });


    }

    // О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
    function getUserAge(useryear) {
        var user_born = useryear,
            curr_year = new Date();
        curr_year = curr_year.getFullYear();
        var user_age = parseInt(curr_year - user_born);
        return user_age;
    };

    // О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫\О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫ О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
    function childUser(year) {
        var userAge = getUserAge(year);
        if (userAge < 16) {
            $(".user_a_20,.user_a_21,.user_a_22,.user_a_23,.user_a_18").hide();
            $("div.user_a_18 select option").attr('selected', false);
            $("div.user_a_18 select option[value=1]").attr('selected', 'selected');   // О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ 1 О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫ О©╫О©╫О©╫О©╫О©╫
            if ($(".continue-learn").prop("checked")) {
                $("div.user_a_22 select option").attr('selected', false);
                $("div.user_a_22 select option[VALUE=j]").attr('selected', 'selected');   // О©╫О©╫О©╫.-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ - О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫
            }
        } else {
            $(".user_a_20,.user_a_21,.user_a_22,.user_a_23,.user_a_18").show();
        }
    };

// ! faq to up

    $('.toTop').live('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });


// ! prevent action on disabled button

    $('.button-disabled').live('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.cancelBubble = true;
        return false;
    });


// ! tags in search page delete (s:jnb)

// ! inputs and values
// such a beautiful pair
// never too late

    function checkMinSize($input) {
        var size = $input.val().length;
        var min = $input.attr('data-min-length');
        if (size < min) {
            $input.addClass('required');
        } else {
            $input.removeClass('required');
        }
    };

    function checkMaxSize($input) {
        var size = $input.val().length;
        var max = $input.attr('size');
        if (size > max) {
            $input.addClass('required');
        } else {
            $input.removeClass('required');
        }
    };

    function checkMinVal($input) {
        var val = parseInt($input.val());
        var min = parseInt($input.attr('min'));
        if (val < min) {
            $input.addClass('required');
        } else {
            $input.removeClass('required');
        }
    };

    $('input[size]').live('keyup change', function () {
        checkMaxSize($(this));
    });
    $('input[data-min-length]').live('blur', function () {
        checkMinSize($(this));
    });
    $('input[min]').live('blur', function () {
        checkMinVal($(this));
    });

    $('.author_cal').live('click', function (e) {
        e.preventDefault();
        $(this).parents('.author_editRow').find('input').focus();
    });
    $('.add_cal').live('click', function (e) {
        e.preventDefault();
        $(this).parents('.add_maxWidth').find('input').focus();
    });


// ! search field bug
    function ifLargeField() {
        var w = $('html').width();
        if (w >= 1650) {
            $('.search, .b-soc-search').addClass('search-modernized');
        }
    };

    ifLargeField();


// ! hover touch fallback
    if (is_touch_device) {
        $('.sub_parent').live('click', function () {
            var $t = $(this).find('.sub_info');
            if ($t.is(':hidden')) {
                $t.show();
            } else {
                $t.hide();
            }
        });
    }

    /* group_create logo preview */
    $('[id^=id_logo]').live('change', function () {
        var parentBlock = $(this).closest('.add_upload');
        parentBlock.find($('[id ^= logoimg]'))
            .attr("alt", $(this).val()
                .substr($(this).val().lastIndexOf('\\') + 1))
    });

    /*// add input type=file
    $('#addfileinput').click(function() {
        *//*$("#id_file").clone().each(function() {
            var file_input = $(this);
            file_input.removeAttr('id');
            file_input.val('');
            $('#mfi').append(file_input);
        });*//*
        var blockADD = $("#addFileBlock");
        var newBlock = blockADD.clone()
            .attr("id","addFileBlock"+ blockADD.length)
            .appendTo("#mfi");

        var file_input = $(newBlock).find('#id_file');
        file_input.attr('id','id_file'+blockADD.length);
        file_input.val('');

        //file_but.val('');
        var file_val = $(newBlock).find('#valID');
        file_val.attr('id','valID'+blockADD.length);
        file_val.val('');

        var file_but = $(newBlock).find('#upFile');
        file_but.attr('id','upFile'+blockADD.length)
            .change(function() {
                file_val.html( file_input.val().substr(file_input.val().lastIndexOf('\\') + 1) )

            });
        return false;
    });*/

    // add input type=file new

    $('[id^=id_file]').live('change', function () {
        var parentBlock = $(this).closest('.add_FileBlock');
        parentBlock.find($('[id ^= valID]'))
            .html(parentBlock.find($('[id ^= id_file]')).val()
                .substr(parentBlock.find($('[id ^= id_file]')).val().lastIndexOf('\\') + 1));
    });

    $('#addfileinput').click(function () {
        var blockADD = $("#addFileBlock");
        var blockADDcnt = $("[id^=addFileBlock]").length;
        var newBlock = blockADD.clone()
            .attr("id", "addFileBlock" + blockADDcnt)
            .appendTo("#mfi");
        newBlock.find('#valID').attr('id', 'valID' + blockADDcnt).text('').end()
            .find('#id_file').attr('id', 'id_file' + blockADDcnt).val('').end()
            .find('.button').attr('for', 'id_file' + blockADDcnt).end()
            .find('#upFile').attr('id', 'upFile' + blockADDcnt);
        return false;
    });


// ! copy from member/anketa/join/target - autocomplete

    availablePlaces =
        [
            ["О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫тёО©╫", "О©╫О©╫тёО©╫О©╫О©╫О©╫О©╫", "О©╫О©╫тёО©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫лёО©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫рёО©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫дёО©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫нёО©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫чёО©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫зёО©╫О©╫О©╫", "О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫лёО©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫зёО©╫О©╫О©╫О©╫", "О©╫О©╫О©╫зёО©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫-О©╫О©╫-О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫-О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫лёО©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫-О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫лёО©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫рёО©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫мёО©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫лёО©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫ О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫. О©╫О©╫О©╫.", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫-О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫пёО©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫зёО©╫О©╫О©╫", "О©╫зёО©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫лёО©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫рёО©╫", "О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫чёО©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫лёО©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫лёО©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫чёО©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫-О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫-О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫ - О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫мёО©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫чёО©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫шёО©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫рёО©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫-О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫-О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫. О©╫О©╫О©╫.", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫. О©╫О©╫О©╫.", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫тёО©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫-О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫. О©╫О©╫О©╫.", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫", "О©╫О©╫О©╫О©╫О©╫О©╫",
                'О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫О©╫ (О©╫О©╫О©╫)',
                'О©╫О©╫О©╫О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫',
                'О©╫О©╫О©╫О©╫О©╫О©╫ О©╫О©╫О©╫О©╫О©╫О©╫'],
            ["RU77", "RU78", "RU78", "RU98", "RU99", "RU99", "RU19", "RU19", "RU56", "RU23", "RU16", "RU01", "RU01", "RU16", "RU61", "RU17", "RU61", "RU15", "RU66", "RU21", "RU14", "RU22", "RU33", "RU59", "RU65", "RU31", "RU71", "RU38", "RU02", "RU22", "RU16", "RU27", "RU28", "RU87", "RU23", "RU38", "RU69", "RU42", "RU65", "RU51", "RU50", "RU23", "RU66", "RU95", "RU13", "RU15", "RU52", "RU64", "RU23", "RU25", "RU16", "RU25", "RU24", "RU66", "RU29", "RU29", "RU66", "RU70", "RU30", "RU30", "RU64", "RU30", "RU24", "RU74", "RU35", "RU03", "RU16", "RU39", "RU38", "RU02", "RU74", "RU07", "RU40", "RU64", "RU52", "RU50", "RU64", "RU75", "RU39", "RU54", "RU22", "RU73", "RU61", "RU02", "RU69", "RU61", "RU43", "RU31", "RU31", "RU02", "RU42", "RU28", "RU35", "RU22", "RU10", "RU02", "RU23", "RU40", "RU69", "RU71", "RU54", "RU59", "RU42", "RU15", "RU22", "RU27", "RU87", "RU78", "RU02", "RU38", "RU31", "RU28", "RU26", "RU36", "RU66", "RU71", "RU52", "RU36", "RU38", "RU47", "RU16", "RU69", "RU54", "RU71", "RU57", "RU25", "RU75", "RU36", "RU53", "RU40", "RU24", "RU38", "RU50", "RU32", "RU32", "RU16", "RU56", "RU26", "RU56", "RU16", "RU44", "RU05", "RU03", "RU36", "RU53", "RU31", "RU67", "RU60", "RU53", "RU35", "RU29", "RU71", "RU59", "RU50", "RU74", "RU66", "RU74", "RU66", "RU66", "RU66", "RU66", "RU14", "RU69", "RU52", "RU50", "RU14", "RU41", "RU38", "RU37", "RU25", "RU15", "RU33", "RU33", "RU34", "RU34", "RU61", "RU44", "RU12", "RU34", "RU35", "RU35", "RU52", "RU50", "RU47", "RU47", "RU66", "RU64", "RU11", "RU36", "RU36", "RU52", "RU50", "RU18", "RU47", "RU11", "RU47", "RU52", "RU50", "RU47", "RU35", "RU69", "RU27", "RU33", "RU67", "RU43", "RU37", "RU76", "RU67", "RU51", "RU56", "RU44", "RU47", "RU39", "RU60", "RU23", "RU26", "RU18", "RU50", "RU52", "RU02", "RU59", "RU22", "RU52", "RU58", "RU08", "RU33", "RU23", "RU31", "RU59", "RU95", "RU48", "RU35", "RU59", "RU31", "RU89", "RU95", "RU23", "RU39", "RU39", "RU03", "RU33", "RU02", "RU05", "RU05", "RU45", "RU25", "RU25", "RU76", "RU48", "RU66", "RU50", "RU67", "RU05", "RU67", "RU52", "RU50", "RU24", "RU15", "RU73", "RU46", "RU50", "RU57", "RU60", "RU59", "RU50", "RU65", "RU50", "RU61", "RU71", "RU67", "RU50", "RU50", "RU34", "RU24", "RU67", "RU02", "RU32", "RU78", "RU50", "RU23", "RU66", "RU16", "RU48", "RU41", "RU67", "RU74", "RU11", "RU24", "RU64", "RU26", "RU71", "RU26", "RU24", "RU38", "RU50", "RU68", "RU63", "RU40", "RU34", "RU40", "RU50", "RU75", "RU28", "RU72", "RU37", "RU52", "RU48", "RU16", "RU03", "RU24", "RU51", "RU69", "RU51", "RU50", "RU58", "RU22", "RU12", "RU50", "RU61", "RU24", "RU39", "RU26", "RU61", "RU28", "RU38", "RU74", "RU32", "RU22", "RU30", "RU69", "RU43", "RU47", "RU37", "RU37", "RU50", "RU66", "RU24", "RU18", "RU05", "RU26", "RU24", "RU06", "RU73", "RU11", "RU26", "RU66", "RU38", "RU38", "RU55", "RU54", "RU50", "RU72", "RU02", "RU12", "RU07", "RU35", "RU16", "RU36", "RU34", "RU55", "RU39", "RU39", "RU64", "RU08", "RU40", "RU40", "RU69", "RU18", "RU58", "RU47", "RU66", "RU61", "RU22", "RU33", "RU41", "RU30", "RU34", "RU66", "RU21", "RU51", "RU24", "RU33", "RU74", "RU06", "RU54", "RU09", "RU09", "RU32", "RU54", "RU29", "RU10", "RU66", "RU74", "RU62", "RU74", "RU05", "RU74", "RU45", "RU66", "RU69", "RU50", "RU70", "RU42", "RU42", "RU10", "RU59", "RU05", "RU05", "RU71", "RU69", "RU47", "RU63", "RU37", "RU38", "RU33", "RU35", "RU47", "RU40", "RU66", "RU43", "RU47", "RU43", "RU43", "RU68", "RU42", "RU26", "RU50", "RU50", "RU32", "RU52", "RU51", "RU33", "RU13", "RU86", "RU24", "RU40", "RU21", "RU12", "RU51", "RU44", "RU50", "RU70", "RU78", "RU33", "RU11", "RU37", "RU27", "RU69", "RU10", "RU40", "RU61", "RU74", "RU62", "RU23", "RU74", "RU50", "RU31", "RU65", "RU29", "RU33", "RU10", "RU44", "RU44", "RU50", "RU34", "RU43", "RU29", "RU34", "RU68", "RU37", "RU35", "RU50", "RU59", "RU50", "RU23", "RU23", "RU78", "RU50", "RU39", "RU75", "RU59", "RU34", "RU66", "RU66", "RU66", "RU24", "RU24", "RU64", "RU61", "RU69", "RU40", "RU78", "RU23", "RU23", "RU52", "RU50", "RU56", "RU69", "RU59", "RU54", "RU52", "RU02", "RU59", "RU54", "RU45", "RU23", "RU45", "RU65", "RU33", "RU50", "RU46", "RU46", "RU45", "RU46", "RU74", "RU66", "RU17", "RU74", "RU03", "RU23", "RU89", "RU08", "RU39", "RU16", "RU33", "RU86", "RU10", "RU48", "RU47", "RU34", "RU42", "RU14", "RU26", "RU66", "RU25", "RU24", "RU57", "RU50", "RU48", "RU48", "RU71", "RU36", "RU69", "RU50", "RU47", "RU78", "RU50", "RU47", "RU43", "RU52", "RU50", "RU52", "RU59", "RU50", "RU46", "RU47", "RU50", "RU76", "RU40", "RU86", "RU49", "RU49", "RU06", "RU74", "RU01", "RU07", "RU65", "RU44", "RU45", "RU53", "RU06", "RU43", "RU57", "RU40", "RU16", "RU39", "RU44", "RU42", "RU21", "RU12", "RU64", "RU05", "RU32", "RU86", "RU10", "RU56", "RU40", "RU02", "RU42", "RU29", "RU33", "RU02", "RU16", "RU16", "RU40", "RU74", "RU11", "RU61", "RU26", "RU24", "RU74", "RU29", "RU62", "RU34", "RU66", "RU68", "RU75", "RU50", "RU18", "RU15", "RU51", "RU13", "RU61", "RU68", "RU40", "RU50", "RU77", "RU89", "RU43", "RU51", "RU51", "RU33", "RU57", "RU42", "RU50", "RU76", "RU16", "RU52", "RU37", "RU89", "RU24", "RU06", "RU55", "RU07", "RU30", "RU50", "RU07", "RU83", "RU25", "RU60", "RU65", "RU26", "RU66", "RU69", "RU39", "RU83", "RU44", "RU75", "RU14", "RU39", "RU63", "RU02", "RU26", "RU86", "RU44", "RU52", "RU86", "RU16", "RU38", "RU66", "RU58", "RU52", "RU66", "RU66", "RU66", "RU34", "RU27", "RU35", "RU47", "RU47", "RU66", "RU53", "RU26", "RU22", "RU34", "RU36", "RU29", "RU32", "RU23", "RU42", "RU63", "RU62", "RU71", "RU26", "RU60", "RU23", "RU54", "RU54", "RU57", "RU60", "RU56", "RU64", "RU73", "RU66", "RU36", "RU21", "RU61", "RU61", "RU31", "RU89", "RU50", "RU43", "RU24", "RU89", "RU16", "RU59", "RU14", "RU86", "RU74", "RU29", "RU40", "RU46", "RU54", "RU50", "RU50", "RU39", "RU50", "RU63", "RU02", "RU53", "RU51", "RU10", "RU14", "RU55", "RU55", "RU43", "RU29", "RU60", "RU56", "RU56", "RU50", "RU43", "RU57", "RU56", "RU57", "RU59", "RU42", "RU69", "RU60", "RU51", "RU36", "RU47", "RU63", "RU65", "RU59", "RU59", "RU36", "RU50", "RU34", "RU25", "RU87", "RU58", "RU58", "RU52", "RU66", "RU52", "RU50", "RU76", "RU59", "RU59", "RU53", "RU78", "RU34", "RU64", "RU75", "RU10", "RU41", "RU45", "RU33", "RU11", "RU60", "RU47", "RU39", "RU10", "RU71", "RU74", "RU37", "RU36", "RU50", "RU47", "RU86", "RU14", "RU66", "RU39", "RU42", "RU51", "RU51", "RU65", "RU60", "RU63", "RU32", "RU67", "RU76", "RU39", "RU37", "RU39", "RU25", "RU23", "RU47", "RU42", "RU61", "RU50", "RU07", "RU60", "RU60", "RU64", "RU10", "RU60", "RU37", "RU78", "RU50", "RU50", "RU60", "RU86", "RU26", "RU33", "RU28", "RU50", "RU68", "RU66", "RU66", "RU50", "RU69", "RU37", "RU67", "RU36", "RU76", "RU61", "RU61", "RU50", "RU64", "RU22", "RU67", "RU50", "RU13", "RU76", "RU62", "RU46", "RU62", "RU62", "RU62", "RU02", "RU42", "RU89", "RU61", "RU63", "RU63", "RU13", "RU18", "RU64", "RU64", "RU52", "RU62", "RU74", "RU65", "RU19", "RU38", "RU66", "RU39", "RU26", "RU39", "RU47", "RU38", "RU28", "RU60", "RU15", "RU65", "RU03", "RU29", "RU51", "RU66", "RU32", "RU10", "RU32", "RU61", "RU36", "RU52", "RU73", "RU34", "RU52", "RU50", "RU58", "RU66", "RU50", "RU78", "RU02", "RU74", "RU28", "RU62", "RU22", "RU39", "RU23", "RU47", "RU43", "RU38", "RU67", "RU67", "RU74", "RU51", "RU33", "RU39", "RU27", "RU86", "RU35", "RU44", "RU59", "RU50", "RU56", "RU29", "RU53", "RU56", "RU19", "RU10", "RU40", "RU43", "RU24", "RU47", "RU11", "RU23", "RU40", "RU62", "RU58", "RU25", "RU62", "RU14", "RU66", "RU75", "RU26", "RU26", "RU50", "RU53", "RU69", "RU32", "RU31", "RU02", "RU70", "RU31", "RU33", "RU50", "RU71", "RU46", "RU33", "RU33", "RU10", "RU32", "RU86", "RU34", "RU58", "RU49", "RU40", "RU63", "RU11", "RU66", "RU67", "RU47", "RU66", "RU61", "RU42", "RU38", "RU50", "RU66", "RU68", "RU68", "RU55", "RU89", "RU54", "RU16", "RU42", "RU69", "RU69", "RU09", "RU37", "RU13", "RU23", "RU07", "RU16", "RU23", "RU47", "RU23", "RU72", "RU54", "RU63", "RU65", "RU14", "RU70", "RU70", "RU69", "RU69", "RU47", "RU35", "RU74", "RU32", "RU74", "RU23", "RU02", "RU71", "RU38", "RU71", "RU17", "RU66", "RU76", "RU17", "RU28", "RU07", "RU55", "RU72", "RU72", "RU65", "RU76", "RU14", "RU18", "RU69", "RU24", "RU71", "RU03", "RU73", "RU73", "RU32", "RU86", "RU52", "RU43", "RU95", "RU34", "RU11", "RU48", "RU59", "RU38", "RU25", "RU09", "RU38", "RU74", "RU38", "RU23", "RU35", "RU02", "RU11", "RU02", "RU24", "RU46", "RU32", "RU34", "RU50", "RU37", "RU27", "RU27", "RU23", "RU19", "RU86", "RU86", "RU30", "RU35", "RU05", "RU64", "RU75", "RU50", "RU53", "RU65", "RU50", "RU21", "RU61", "RU17", "RU59", "RU63", "RU48", "RU74", "RU21", "RU07", "RU71", "RU74", "RU74", "RU59", "RU38", "RU54", "RU35", "RU09", "RU50", "RU19", "RU59", "RU39", "RU50", "RU95", "RU16", "RU75", "RU52", "RU21", "RU53", "RU87", "RU54", "RU59", "RU44", "RU59", "RU17", "RU45", "RU95", "RU24", "RU44", "RU50", "RU65", "RU52", "RU62", "RU31", "RU38", "RU29", "RU75", "RU28", "RU47", "RU21", "RU45", "RU37", "RU77", "RU46", "RU45", "RU71", "RU50", "RU50", "RU50", "RU50", "RU08", "RU64", "RU36", "RU50", "RU86", "RU37", "RU65", "RU05", "RU74", "RU42", "RU33", "RU37", "RU74", "RU40", "RU21", "RU14", "RU14", "RU72", "RU89", "RU02", "RU43", "RU22", "RU76", "RU76", "RU67", "RU71", "RU56", "RU50",
                'RU',
                'AZ',
                'AM',
                'BY',
                'GE',
                'KZ',
                'KG',
                'MD',
                'TJ',
                'TM',
                'UZ',
                'UA',
                'LT',
                'LV',
                'EE',
                'US',
                'IL',
                'DE',
                'CA',
                'UK',
                'AU',
                'SE',
                'LU',
                'FR',
                'IT',
                'NL',
                'JP',
                'BG',
                'CN',
                'FI',
                'ES',
                'PL',
                'CZ',
                'TR',
                'BE',
                'AT',
                'CY',
                'BR',
                'CH',
                'SA',
                'AE',
                'NO',
                'KR',
                'WW'
            ]
        ];
});


/*! jQuery UI - v1.11.4 - 2015-03-11
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js,
* button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js,
* effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js,
* effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js,
* effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js,
* resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js,
* tabs.js, tooltip.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function (e) {
    function t(t, s) {
        var n, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
            return "hidden" === e.css(this, "visibility")
        }).length
    }

    function s(e) {
        for (var t, i; e.length && e[0] !== document;) {
            if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (i = parseInt(e.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            e = e.parent()
        }
        return 0
    }

    function n() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function a(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function () {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", o)
    }

    function o() {
        e.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    }

    function r(t, i) {
        e.extend(t, i);
        for (var s in i) null == i[s] && (t[s] = i[s]);
        return t
    }

    function h(e) {
        return function () {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
        }
    }

    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function (t) {
            var i = this.css("position"), s = "absolute" === i, n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                a = this.parents().filter(function () {
                    var t = e(this);
                    return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
        }, uniqueId: function () {
            var e = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(), removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
            return function (i) {
                return !!e.data(i, t)
            }
        }) : function (t, i, s) {
            return !!e.data(t, s[3])
        }, focusable: function (i) {
            return t(i, !isNaN(e.attr(i, "tabindex")))
        }, tabbable: function (i) {
            var s = e.attr(i, "tabindex"), n = isNaN(s);
            return (n || s >= 0) && t(i, !n)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
        function s(t, i, s, a) {
            return e.each(n, function () {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }

        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], a = i.toLowerCase(), o = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + i] = function (t) {
            return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
                e(this).css(a, s(this, t) + "px")
            })
        }, e.fn["outer" + i] = function (t, n) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
                e(this).css(a, s(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
        return function (i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function (t) {
            return function (i, s) {
                return "number" == typeof i ? this.each(function () {
                    var t = this;
                    setTimeout(function () {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus), disableSelection: function () {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.bind(e + ".ui-disableSelection", function (e) {
                    e.preventDefault()
                })
            }
        }(), enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        }, zIndex: function (t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length) for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                n = n.parent()
            }
            return 0
        }
    }), e.ui.plugin = {
        add: function (t, i, s) {
            var n, a = e.ui[t].prototype;
            for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
        }, call: function (e, t, i, s) {
            var n, a = e.plugins[t];
            if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
        }
    };
    var l = 0, u = Array.prototype.slice;
    e.cleanData = function (t) {
        return function (i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++) try {
                s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
            } catch (o) {
            }
            t(i)
        }
    }(e.cleanData), e.widget = function (t, i, s) {
        var n, a, o, r, h = {}, l = t.split(".")[0];
        return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function (t) {
            return !!e.data(t, n)
        }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function (e, t) {
            return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t)
        }, e.extend(o, a, {
            version: s.version,
            _proto: e.extend({}, s),
            _childConstructors: []
        }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function (t, s) {
            return e.isFunction(s) ? (h[t] = function () {
                var e = function () {
                    return i.prototype[t].apply(this, arguments)
                }, n = function (e) {
                    return i.prototype[t].apply(this, e)
                };
                return function () {
                    var t, i = this._super, a = this._superApply;
                    return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
                }
            }(), void 0) : (h[t] = s, void 0)
        }), o.prototype = e.widget.extend(r, {widgetEventPrefix: a ? r.widgetEventPrefix || t : t}, h, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: n
        }), a ? (e.each(a._childConstructors, function (t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
    }, e.widget.extend = function (t) {
        for (var i, s, n = u.call(arguments, 1), a = 0, o = n.length; o > a; a++) for (i in n[a]) s = n[a][i], n[a].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
        return t
    }, e.widget.bridge = function (t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function (n) {
            var a = "string" == typeof n, o = u.call(arguments, 1), r = this;
            return a ? this.each(function () {
                var i, a = e.data(this, s);
                return "instance" === n ? (r = a, !1) : a ? e.isFunction(a[n]) && "_" !== n.charAt(0) ? (i = a[n].apply(a, o), i !== a && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + n + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + n + "'")
            }) : (o.length && (n = e.widget.extend.apply(null, [n].concat(o))), this.each(function () {
                var t = e.data(this, s);
                t ? (t.option(n || {}), t._init && t._init()) : e.data(this, s, new i(n, this))
            })), r
        }
    }, e.Widget = function () {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {disabled: !1, create: null},
        _createWidget: function (t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (t, i) {
            var s, n, a, o = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t) if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
                if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                n[t] = i
            } else {
                if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                o[t] = i
            }
            return this._setOptions(o), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _on: function (t, i, s) {
            var n, a = this;
            "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function (s, o) {
                function r() {
                    return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                }

                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/), l = h[1] + a.eventNamespace, u = h[2];
                u ? n.delegate(u, l, r) : i.bind(l, r)
            })
        },
        _off: function (t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function (e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }

            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                }, mouseleave: function (t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                }, focusout: function (t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (t, i, s) {
            var n, a, o = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent) for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, i) {
        e.Widget.prototype["_" + t] = function (s, n, a) {
            "string" == typeof n && (n = {effect: n});
            var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {duration: n}), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function (i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    }), e.widget;
    var d = !1;
    e(document).mouseup(function () {
        d = !1
    }), e.widget("ui.mouse", {
        version: "1.11.4",
        options: {cancel: "input,textarea,button,select,option", distance: 1, delay: 0},
        _mouseInit: function () {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function (e) {
                return t._mouseDown(e)
            }).bind("click." + this.widgetName, function (i) {
                return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (t) {
            if (!d) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var i = this, s = 1 === t.which,
                    n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
                    return i._mouseMove(e)
                }, this._mouseUpDelegate = function (e) {
                    return i._mouseUp(e)
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), d = !0, !0)) : !0
            }
        },
        _mouseMove: function (t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
                if (!t.which) return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function (t) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), d = !1, !1
        },
        _mouseDistanceMet: function (e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    }), function () {
        function t(e, t, i) {
            return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)]
        }

        function i(t, i) {
            return parseInt(e.css(t, i), 10) || 0
        }

        function s(t) {
            var i = t[0];
            return 9 === i.nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {top: 0, left: 0}
            } : e.isWindow(i) ? {
                width: t.width(),
                height: t.height(),
                offset: {top: t.scrollTop(), left: t.scrollLeft()}
            } : i.preventDefault ? {
                width: 0,
                height: 0,
                offset: {top: i.pageY, left: i.pageX}
            } : {width: t.outerWidth(), height: t.outerHeight(), offset: t.offset()}
        }

        e.ui = e.ui || {};
        var n, a, o = Math.max, r = Math.abs, h = Math.round, l = /left|center|right/, u = /top|center|bottom/,
            d = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, p = /%$/, f = e.fn.position;
        e.position = {
            scrollbarWidth: function () {
                if (void 0 !== n) return n;
                var t, i,
                    s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    a = s.children()[0];
                return e("body").append(s), t = a.offsetWidth, s.css("overflow", "scroll"), i = a.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), n = t - i
            }, getScrollInfo: function (t) {
                var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                    s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                    n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                    a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
                return {width: a ? e.position.scrollbarWidth() : 0, height: n ? e.position.scrollbarWidth() : 0}
            }, getWithinInfo: function (t) {
                var i = e(t || window), s = e.isWindow(i[0]), n = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: n,
                    offset: i.offset() || {left: 0, top: 0},
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: s || n ? i.width() : i.outerWidth(),
                    height: s || n ? i.height() : i.outerHeight()
                }
            }
        }, e.fn.position = function (n) {
            if (!n || !n.of) return f.apply(this, arguments);
            n = e.extend({}, n);
            var p, m, g, v, y, b, _ = e(n.of), x = e.position.getWithinInfo(n.within), w = e.position.getScrollInfo(x),
                k = (n.collision || "flip").split(" "), T = {};
            return b = s(_), _[0].preventDefault && (n.at = "left top"), m = b.width, g = b.height, v = b.offset, y = e.extend({}, v), e.each(["my", "at"], function () {
                var e, t, i = (n[this] || "").split(" ");
                1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
            }), 1 === k.length && (k[1] = k[0]), "right" === n.at[0] ? y.left += m : "center" === n.at[0] && (y.left += m / 2), "bottom" === n.at[1] ? y.top += g : "center" === n.at[1] && (y.top += g / 2), p = t(T.at, m, g), y.left += p[0], y.top += p[1], this.each(function () {
                var s, l, u = e(this), d = u.outerWidth(), c = u.outerHeight(), f = i(this, "marginLeft"),
                    b = i(this, "marginTop"), D = d + f + i(this, "marginRight") + w.width,
                    S = c + b + i(this, "marginBottom") + w.height, M = e.extend({}, y),
                    C = t(T.my, u.outerWidth(), u.outerHeight());
                "right" === n.my[0] ? M.left -= d : "center" === n.my[0] && (M.left -= d / 2), "bottom" === n.my[1] ? M.top -= c : "center" === n.my[1] && (M.top -= c / 2), M.left += C[0], M.top += C[1], a || (M.left = h(M.left), M.top = h(M.top)), s = {
                    marginLeft: f,
                    marginTop: b
                }, e.each(["left", "top"], function (t, i) {
                    e.ui.position[k[t]] && e.ui.position[k[t]][i](M, {
                        targetWidth: m,
                        targetHeight: g,
                        elemWidth: d,
                        elemHeight: c,
                        collisionPosition: s,
                        collisionWidth: D,
                        collisionHeight: S,
                        offset: [p[0] + C[0], p[1] + C[1]],
                        my: n.my,
                        at: n.at,
                        within: x,
                        elem: u
                    })
                }), n.using && (l = function (e) {
                    var t = v.left - M.left, i = t + m - d, s = v.top - M.top, a = s + g - c, h = {
                        target: {element: _, left: v.left, top: v.top, width: m, height: g},
                        element: {element: u, left: M.left, top: M.top, width: d, height: c},
                        horizontal: 0 > i ? "left" : t > 0 ? "right" : "center",
                        vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
                    };
                    d > m && m > r(t + i) && (h.horizontal = "center"), c > g && g > r(s + a) && (h.vertical = "middle"), h.important = o(r(t), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical", n.using.call(this, e, h)
                }), u.offset(e.extend(M, {using: l}))
            })
        }, e.ui.position = {
            fit: {
                left: function (e, t) {
                    var i, s = t.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width,
                        r = e.left - t.collisionPosition.marginLeft, h = n - r, l = r + t.collisionWidth - a - n;
                    t.collisionWidth > a ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - a - n, e.left += h - i) : e.left = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionWidth : n : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left)
                }, top: function (e, t) {
                    var i, s = t.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = t.within.height,
                        r = e.top - t.collisionPosition.marginTop, h = n - r, l = r + t.collisionHeight - a - n;
                    t.collisionHeight > a ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - a - n, e.top += h - i) : e.top = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top)
                }
            }, flip: {
                left: function (e, t) {
                    var i, s, n = t.within, a = n.offset.left + n.scrollLeft, o = n.width,
                        h = n.isWindow ? n.scrollLeft : n.offset.left, l = e.left - t.collisionPosition.marginLeft,
                        u = l - h, d = l + t.collisionWidth - o - h,
                        c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                        p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                        f = -2 * t.offset[0];
                    0 > u ? (i = e.left + c + p + f + t.collisionWidth - o - a, (0 > i || r(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h, (s > 0 || d > r(s)) && (e.left += c + p + f))
                }, top: function (e, t) {
                    var i, s, n = t.within, a = n.offset.top + n.scrollTop, o = n.height,
                        h = n.isWindow ? n.scrollTop : n.offset.top, l = e.top - t.collisionPosition.marginTop,
                        u = l - h, d = l + t.collisionHeight - o - h, c = "top" === t.my[1],
                        p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                        f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                        m = -2 * t.offset[1];
                    0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - a, (0 > s || r(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, (i > 0 || d > r(i)) && (e.top += p + f + m))
                }
            }, flipfit: {
                left: function () {
                    e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                }, top: function () {
                    e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                }
            }
        }, function () {
            var t, i, s, n, o, r = document.getElementsByTagName("body")[0], h = document.createElement("div");
            t = document.createElement(r ? "div" : "body"), s = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, r && e.extend(s, {position: "absolute", left: "-1000px", top: "-1000px"});
            for (o in s) t.style[o] = s[o];
            t.appendChild(h), i = r || document.documentElement, i.insertBefore(t, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", n = e(h).offset().left, a = n > 10 && 11 > n, t.innerHTML = "", i.removeChild(t)
        }()
    }(), e.ui.position, e.widget("ui.accordion", {
        version: "1.11.4",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function () {
            var t = this.options;
            this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function () {
            return {header: this.active, panel: this.active.length ? this.active.next() : e()}
        },
        _createIcons: function () {
            var t = this.options.icons;
            t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var e;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "")
        },
        _setOption: function (e, t) {
            return "active" === e ? (this._activate(t), void 0) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t)), void 0)
        },
        _keydown: function (t) {
            if (!t.altKey && !t.ctrlKey) {
                var i = e.ui.keyCode, s = this.headers.length, n = this.headers.index(t.target), a = !1;
                switch (t.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        a = this.headers[(n + 1) % s];
                        break;
                    case i.LEFT:
                    case i.UP:
                        a = this.headers[(n - 1 + s) % s];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(t);
                        break;
                    case i.HOME:
                        a = this.headers[0];
                        break;
                    case i.END:
                        a = this.headers[s - 1]
                }
                a && (e(t.target).attr("tabIndex", -1), e(a).attr("tabIndex", 0), a.focus(), t.preventDefault())
            }
        },
        _panelKeyDown: function (t) {
            t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
        },
        refresh: function () {
            var t = this.options;
            this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function () {
            var e = this.headers, t = this.panels;
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), t && (this._off(e.not(this.headers)), this._off(t.not(this.panels)))
        },
        _refresh: function () {
            var t, i = this.options, s = i.heightStyle, n = this.element.parent();
            this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function () {
                var t = e(this), i = t.uniqueId().attr("id"), s = t.next(), n = s.uniqueId().attr("id");
                t.attr("aria-controls", n), s.attr("aria-labelledby", i)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({"aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (t = n.height(), this.element.siblings(":visible").each(function () {
                var i = e(this), s = i.css("position");
                "absolute" !== s && "fixed" !== s && (t -= i.outerHeight(!0))
            }), this.headers.each(function () {
                t -= e(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : "auto" === s && (t = 0, this.headers.next().each(function () {
                t = Math.max(t, e(this).css("height", "").height())
            }).height(t))
        },
        _activate: function (t) {
            var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: e.noop
            }))
        },
        _findActive: function (t) {
            return "number" == typeof t ? this.headers.eq(t) : e()
        },
        _setupEvents: function (t) {
            var i = {keydown: "_keydown"};
            t && e.each(t.split(" "), function (e, t) {
                i[t] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function (t) {
            var i = this.options, s = this.active, n = e(t.currentTarget), a = n[0] === s[0], o = a && i.collapsible,
                r = o ? e() : n.next(), h = s.next(),
                l = {oldHeader: s, oldPanel: h, newHeader: o ? e() : n, newPanel: r};
            t.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", t, l) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? e() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function (t) {
            var i = t.newPanel, s = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, t) : (s.hide(), i.show(), this._toggleComplete(t)), s.attr({"aria-hidden": "true"}), s.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), i.length && s.length ? s.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter(function () {
                return 0 === parseInt(e(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function (e, t, i) {
            var s, n, a, o = this, r = 0, h = e.css("box-sizing"), l = e.length && (!t.length || e.index() < t.index()),
                u = this.options.animate || {}, d = l && u.down || u, c = function () {
                    o._toggleComplete(i)
                };
            return "number" == typeof d && (a = d), "string" == typeof d && (n = d), n = n || d.easing || u.easing, a = a || d.duration || u.duration, t.length ? e.length ? (s = e.show().outerHeight(), t.animate(this.hideProps, {
                duration: a,
                easing: n,
                step: function (e, t) {
                    t.now = Math.round(e)
                }
            }), e.hide().animate(this.showProps, {
                duration: a, easing: n, complete: c, step: function (e, i) {
                    i.now = Math.round(e), "height" !== i.prop ? "content-box" === h && (r += i.now) : "content" !== o.options.heightStyle && (i.now = Math.round(s - t.outerHeight() - r), r = 0)
                }
            }), void 0) : t.animate(this.hideProps, a, n, c) : e.animate(this.showProps, a, n, c)
        },
        _toggleComplete: function (e) {
            var t = e.oldPanel;
            t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
        }
    }), e.widget("ui.menu", {
        version: "1.11.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {submenu: "ui-icon-carat-1-e"},
            items: "> *",
            menus: "ul",
            position: {my: "left-1 top", at: "right top"},
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item": function (e) {
                    e.preventDefault()
                }, "click .ui-menu-item": function (t) {
                    var i = e(t.target);
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && e(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                }, "mouseenter .ui-menu-item": function (t) {
                    if (!this.previousFilter) {
                        var i = e(t.currentTarget);
                        i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(t, i)
                    }
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (e, t) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    t || this.focus(e, i)
                }, blur: function (t) {
                    this._delay(function () {
                        e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                    })
                }, keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (e) {
                    this._closeOnDocumentClick(e) && this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                var t = e(this);
                t.data("ui-menu-submenu-carat") && t.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function (t) {
            var i, s, n, a, o = !0;
            switch (t.keyCode) {
                case e.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case e.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case e.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case e.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case e.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case e.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case e.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case e.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case e.ui.keyCode.ENTER:
                case e.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case e.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    o = !1, s = this.previousFilter || "", n = String.fromCharCode(t.keyCode), a = !1, clearTimeout(this.filterTimer), n === s ? a = !0 : n = s + n, i = this._filterMenuItems(n), i = a && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(t.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(t, i), this.previousFilter = n, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            o && t.preventDefault()
        },
        _activate: function (e) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e))
        },
        refresh: function () {
            var t, i, s = this, n = this.options.icons.submenu, a = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var t = e(this), i = t.parent(),
                    s = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                i.attr("aria-haspopup", "true").prepend(s), t.attr("aria-labelledby", i.attr("id"))
            }), t = a.add(this.element), i = t.find(this.options.items), i.not(".ui-menu-item").each(function () {
                var t = e(this);
                s._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
            }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {menu: "menuitem", listbox: "option"}[this.options.role]
        },
        _setOption: function (e, t) {
            "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t)
        },
        focus: function (e, t) {
            var i, s;
            this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), s = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), i = t.children(".ui-menu"), i.length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {item: t})
        },
        _scrollIntoView: function (t) {
            var i, s, n, a, o, r;
            this._hasScroll() && (i = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, n = t.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = t.outerHeight(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
        },
        blur: function (e, t) {
            t || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {item: this.active}))
        },
        _startOpening: function (e) {
            clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(e)
            }, this.delay))
        },
        _open: function (t) {
            var i = e.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function (t, i) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var s = i ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(t), this.activeMenu = s
            }, this.delay)
        },
        _close: function (e) {
            e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function (t) {
            return !e(t.target).closest(".ui-menu").length
        },
        _isDivider: function (e) {
            return !/[^\-\u2014\u2013\s]/.test(e.text())
        },
        collapse: function (e) {
            var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            t && t.length && (this._close(), this.focus(e, t))
        },
        expand: function (e) {
            var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            t && t.length && (this._open(t.parent()), this._delay(function () {
                this.focus(e, t)
            }))
        },
        next: function (e) {
            this._move("next", "first", e)
        },
        previous: function (e) {
            this._move("prev", "last", e)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (e, t, i) {
            var s;
            this.active && (s = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[t]()), this.focus(i, s)
        },
        nextPage: function (t) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return i = e(this), 0 > i.offset().top - s - n
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0)
        },
        previousPage: function (t) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return i = e(this), i.offset().top - s + n > 0
            }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (t) {
            this.active = this.active || e(t.target).closest(".ui-menu-item");
            var i = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, i)
        },
        _filterMenuItems: function (t) {
            var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), s = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                return s.test(e.trim(e(this).text()))
            })
        }
    }), e.widget("ui.autocomplete", {
        version: "1.11.4",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {my: "left top", at: "left bottom", collision: "none"},
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
            var t, i, s, n = this.element[0].nodeName.toLowerCase(), a = "textarea" === n, o = "input" === n;
            this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (n) {
                    if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, void 0;
                    t = !1, s = !1, i = !1;
                    var a = e.ui.keyCode;
                    switch (n.keyCode) {
                        case a.PAGE_UP:
                            t = !0, this._move("previousPage", n);
                            break;
                        case a.PAGE_DOWN:
                            t = !0, this._move("nextPage", n);
                            break;
                        case a.UP:
                            t = !0, this._keyEvent("previous", n);
                            break;
                        case a.DOWN:
                            t = !0, this._keyEvent("next", n);
                            break;
                        case a.ENTER:
                            this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case a.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case a.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n)
                    }
                }, keypress: function (s) {
                    if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), void 0;
                    if (!i) {
                        var n = e.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                }, input: function (e) {
                    return s ? (s = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0)
                }, focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                }, blur: function (e) {
                    return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0)
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance"), this._on(this.menu.element, {
                mousedown: function (t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function () {
                        var t = this;
                        this.document.one("mousedown", function (s) {
                            s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                        })
                    })
                }, menufocus: function (t, i) {
                    var s, n;
                    return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
                        e(t.target).trigger(t.originalEvent)
                    }), void 0) : (n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {item: n}) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(n.value), s = i.item.attr("aria-label") || n.value, s && e.trim(s).length && (this.liveRegion.children().hide(), e("<div>").text(s).appendTo(this.liveRegion)), void 0)
                }, menuselect: function (e, t) {
                    var i = t.item.data("ui-autocomplete-item"), s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", e, {item: i}) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                }
            }), this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _initSource: function () {
            var t, i, s = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
                s(e.ui.autocomplete.filter(t, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, n) {
                s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                    url: i, data: t, dataType: "json", success: function (e) {
                        n(e)
                    }, error: function () {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (e) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                var t = this.term === this._value(), i = this.menu.element.is(":visible"),
                    s = e.altKey || e.ctrlKey || e.metaKey || e.shiftKey;
                (!t || t && !i && !s) && (this.selectedItem = null, this.search(null, e))
            }, this.options.delay)
        },
        search: function (e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0
        },
        _search: function (e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: e}, this._response())
        },
        _response: function () {
            var t = ++this.requestIndex;
            return e.proxy(function (e) {
                t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function (e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {content: e}), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function (e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function (e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function (e) {
            this.previous !== this._value() && this._trigger("change", e, {item: this.selectedItem})
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
                return "string" == typeof t ? {label: t, value: t} : e.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function (t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function () {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (t, i) {
            var s = this;
            e.each(i, function (e, i) {
                s._renderItemData(t, i)
            })
        },
        _renderItemData: function (e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function (t, i) {
            return e("<li>").text(i.label).appendTo(t)
        },
        _move: function (e, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (e, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function (e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }, filter: function (t, i) {
            var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function (e) {
                return s.test(e.label || e.value || e)
            })
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        }, __response: function (t) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), e("<div>").text(i).appendTo(this.liveRegion))
        }
    }), e.ui.autocomplete;
    var c, p = "ui-button ui-widget ui-state-default ui-corner-all",
        f = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        m = function () {
            var t = e(this);
            setTimeout(function () {
                t.find(":ui-button").button("refresh")
            }, 1)
        }, g = function (t) {
            var i = t.name, s = t.form, n = e([]);
            return i && (i = i.replace(/'/g, "\\'"), n = s ? e(s).find("[name='" + i + "'][type=radio]") : e("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function () {
                return !this.form
            })), n
        };
    e.widget("ui.button", {
        version: "1.11.4",
        defaultElement: "<button>",
        options: {disabled: null, text: !0, label: null, icons: {primary: null, secondary: null}},
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, m), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var t = this, i = this.options, s = "checkbox" === this.type || "radio" === this.type,
                n = s ? "" : "ui-state-active";
            null === i.label && (i.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(p).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                i.disabled || this === c && e(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                i.disabled || e(this).removeClass(n)
            }).bind("click" + this.eventNamespace, function (e) {
                i.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }), this._on({
                focus: function () {
                    this.buttonElement.addClass("ui-state-focus")
                }, blur: function () {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            }), s && this.element.bind("change" + this.eventNamespace, function () {
                t.refresh()
            }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                return i.disabled ? !1 : void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (i.disabled) return !1;
                e(this).addClass("ui-state-active"), t.buttonElement.attr("aria-pressed", "true");
                var s = t.element[0];
                g(s).not(s).map(function () {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                return i.disabled ? !1 : (e(this).addClass("ui-state-active"), c = this, t.document.one("mouseup", function () {
                    c = null
                }), void 0)
            }).bind("mouseup" + this.eventNamespace, function () {
                return i.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0)
            }).bind("keydown" + this.eventNamespace, function (t) {
                return i.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0)
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", i.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            var e, t, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(p + " ui-state-active " + f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (e, t) {
            return this._super(e, t), "disabled" === e ? (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), t && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")), void 0) : (this._resetButton(), void 0)
        },
        refresh: function () {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? g(this.element[0]).each(function () {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
            var t = this.buttonElement.removeClass(f),
                i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                s = this.options.icons, n = s.primary && s.secondary, a = [];
            s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : a.push("ui-button-text-only"), t.addClass(a.join(" "))
        }
    }), e.widget("ui.buttonset", {
        version: "1.11.4",
        options: {items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (e, t) {
            "disabled" === e && this.buttons.button("option", e, t), this._super(e, t)
        },
        refresh: function () {
            var t = "rtl" === this.element.css("direction"), i = this.element.find(this.options.items),
                s = i.filter(":ui-button");
            i.not(":ui-button").button(), s.button("refresh"), this.buttons = i.map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    }), e.ui.button, e.extend(e.ui, {datepicker: {version: "1.11.4"}});
    var v;
    e.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (e) {
            return r(this._defaults, e || {}), this
        },
        _attachDatepicker: function (t, i) {
            var s, n, a;
            s = t.nodeName.toLowerCase(), n = "div" === s || "span" === s, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), n), a.settings = e.extend({}, i || {}), "input" === s ? this._connectDatepicker(t, a) : n && this._inlineDatepicker(t, a)
        },
        _newInst: function (t, i) {
            var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (t, i) {
            var s = e(t);
            i.append = e([]), i.trigger = e([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function (t, i) {
            var s, n, a, o = this._get(i, "appendText"), r = this._get(i, "isRTL");
            i.append && i.append.remove(), o && (i.append = e("<span class='" + this._appendClass + "'>" + o + "</span>"), t[r ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && t.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: a,
                alt: n,
                title: n
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({
                src: a,
                alt: n,
                title: n
            }) : n)), t[r ? "before" : "after"](i.trigger), i.trigger.click(function () {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function (e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, s, n, a = new Date(2009, 11, 20), o = this._get(e, "dateFormat");
                o.match(/[DM]/) && (t = function (e) {
                    for (i = 0, s = 0, n = 0; e.length > n; n++) e[n].length > i && (i = e[n].length, s = n);
                    return s
                }, a.setMonth(t(this._get(e, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length)
            }
        },
        _inlineDatepicker: function (t, i) {
            var s = e(t);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), e.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (t, i, s, n, a) {
            var o, h, l, u, d, c = this._dialogInst;
            return c || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, e.data(this._dialogInput[0], "datepicker", c)), r(c.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(c, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", c), this
        },
        _destroyDatepicker: function (t) {
            var i, s = e(t), n = e.data(t, "datepicker");
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), v === n && (v = null))
        },
        _enableDatepicker: function (t) {
            var i, s, n = e(t), a = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, a.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function (t) {
            var i, s, n = e(t), a = e.data(t, "datepicker");
            n.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, a.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function (e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++) if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function (t) {
            try {
                return e.data(t, "datepicker")
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (t, i, s) {
            var n, a, o, h, l = this._getInst(t);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? e.extend({}, e.datepicker._defaults) : l ? "all" === i ? e.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), a = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), r(l.settings, n), null !== o && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, o)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), l), this._autoSize(l), this._setDate(l, a), this._updateAlternate(l), this._updateDatepicker(l)), void 0)
        },
        _changeDatepicker: function (e, t, i) {
            this._optionDatepicker(e, t, i)
        },
        _refreshDatepicker: function (e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function (e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function (t) {
            var i, s, n, a = e.datepicker._getInst(t.target), o = !0, r = a.dpDiv.is(".ui-datepicker-rtl");
            if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), o = !1;
                    break;
                case 13:
                    return n = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), n[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, n[0]), i = e.datepicker._get(a, "onSelect"), i ? (s = e.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, r ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : o = !1;
            o && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function (t) {
            var i, s, n = e.datepicker._getInst(t.target);
            return e.datepicker._get(n, "constrainInput") ? (i = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
        },
        _doKeyUp: function (t) {
            var i, s = e.datepicker._getInst(t.target);
            if (s.input.val() !== s.lastVal) try {
                i = e.datepicker.parseDate(e.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, e.datepicker._getFormatConfig(s)), i && (e.datepicker._setDateFromField(s), e.datepicker._updateAlternate(s), e.datepicker._updateDatepicker(s))
            } catch (n) {
            }
            return !0
        },
        _showDatepicker: function (t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, n, a, o, h, l, u;
                i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), n = e.datepicker._get(i, "beforeShow"), a = n ? n.apply(t, [t, i]) : {}, a !== !1 && (r(i.settings, a), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), o = !1, e(t).parents().each(function () {
                    return o |= "fixed" === e(this).css("position"), !o
                }), h = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(i), h = e.datepicker._checkOffset(i, h, o), i.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : o ? "fixed" : "absolute",
                    display: "none",
                    left: h.left + "px",
                    top: h.top + "px"
                }), i.inline || (l = e.datepicker._get(i, "showAnim"), u = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", s(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[l] ? i.dpDiv.show(l, e.datepicker._get(i, "showOptions"), u) : i.dpDiv[l || "show"](l ? u : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function (t) {
            this.maxRows = 4, v = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var i, s = this._getNumberOfMonths(t), n = s[1], a = 17, r = t.dpDiv.find("." + this._dayOverClass + " a");
            r.length > 0 && o.apply(r.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), t.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function () {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function (e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function (t, i, s) {
            var n = t.dpDiv.outerWidth(), a = t.dpDiv.outerHeight(), o = t.input ? t.input.outerWidth() : 0,
                r = t.input ? t.input.outerHeight() : 0,
                h = document.documentElement.clientWidth + (s ? 0 : e(document).scrollLeft()),
                l = document.documentElement.clientHeight + (s ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? n - o : 0, i.left -= s && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= s && i.top === t.input.offset().top + r ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0), i
        },
        _findPos: function (t) {
            for (var i, s = this._getInst(t), n = this._get(s, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[n ? "previousSibling" : "nextSibling"];
            return i = e(t).offset(), [i.left, i.top]
        },
        _hideDatepicker: function (t) {
            var i, s, n, a, o = this._curInst;
            !o || t && o !== e.data(t, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function () {
                e.datepicker._tidyDialog(o)
            }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (t) {
            if (e.datepicker._curInst) {
                var i = e(t.target), s = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== s) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (t, i, s) {
            var n = e(t), a = this._getInst(n[0]);
            this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
        },
        _gotoToday: function (t) {
            var i, s = e(t), n = this._getInst(s[0]);
            this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
        },
        _selectMonthYear: function (t, i, s) {
            var n = e(t), a = this._getInst(n[0]);
            a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
        },
        _selectDay: function (t, i, s, n) {
            var a, o = e(t);
            e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = e("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
        },
        _clearDate: function (t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function (t, i) {
            var s, n = e(t), a = this._getInst(n[0]);
            i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (t) {
            var i, s, n, a = this._get(t, "altField");
            a && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), s = this._getDate(t), n = this.formatDate(i, s, this._getFormatConfig(t)), e(a).each(function () {
                e(this).val(n)
            }))
        },
        noWeekends: function (e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function (e) {
            var t, i = new Date(e.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
        },
        parseDate: function (t, i, s) {
            if (null == t || null == i) throw "Invalid arguments";
            if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
            var n, a, o, r, h = 0, l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
                d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                c = (s ? s.dayNames : null) || this._defaults.dayNames,
                p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (s ? s.monthNames : null) || this._defaults.monthNames, m = -1, g = -1, v = -1, y = -1, b = !1,
                _ = function (e) {
                    var i = t.length > n + 1 && t.charAt(n + 1) === e;
                    return i && n++, i
                }, x = function (e) {
                    var t = _(e), s = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        n = "y" === e ? s : 1, a = RegExp("^\\d{" + n + "," + s + "}"), o = i.substring(h).match(a);
                    if (!o) throw "Missing number at position " + h;
                    return h += o[0].length, parseInt(o[0], 10)
                }, w = function (t, s, n) {
                    var a = -1, o = e.map(_(t) ? n : s, function (e, t) {
                        return [[t, e]]
                    }).sort(function (e, t) {
                        return -(e[1].length - t[1].length)
                    });
                    if (e.each(o, function (e, t) {
                        var s = t[1];
                        return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (a = t[0], h += s.length, !1) : void 0
                    }), -1 !== a) return a + 1;
                    throw "Unknown name at position " + h
                }, k = function () {
                    if (i.charAt(h) !== t.charAt(n)) throw "Unexpected literal at position " + h;
                    h++
                };
            for (n = 0; t.length > n; n++) if (b) "'" !== t.charAt(n) || _("'") ? k() : b = !1; else switch (t.charAt(n)) {
                case"d":
                    v = x("d");
                    break;
                case"D":
                    w("D", d, c);
                    break;
                case"o":
                    y = x("o");
                    break;
                case"m":
                    g = x("m");
                    break;
                case"M":
                    g = w("M", p, f);
                    break;
                case"y":
                    m = x("y");
                    break;
                case"@":
                    r = new Date(x("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                    break;
                case"!":
                    r = new Date((x("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                    break;
                case"'":
                    _("'") ? k() : b = !0;
                    break;
                default:
                    k()
            }
            if (i.length > h && (o = i.substr(h), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), y > -1) for (g = 1, v = y; ;) {
                if (a = this._getDaysInMonth(m, g - 1), a >= v) break;
                g++, v -= a
            }
            if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (e, t, i) {
            if (!t) return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                a = (i ? i.dayNames : null) || this._defaults.dayNames,
                o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames, h = function (t) {
                    var i = e.length > s + 1 && e.charAt(s + 1) === t;
                    return i && s++, i
                }, l = function (e, t, i) {
                    var s = "" + t;
                    if (h(e)) for (; i > s.length;) s = "0" + s;
                    return s
                }, u = function (e, t, i, s) {
                    return h(e) ? s[t] : i[t]
                }, d = "", c = !1;
            if (t) for (s = 0; e.length > s; s++) if (c) "'" !== e.charAt(s) || h("'") ? d += e.charAt(s) : c = !1; else switch (e.charAt(s)) {
                case"d":
                    d += l("d", t.getDate(), 2);
                    break;
                case"D":
                    d += u("D", t.getDay(), n, a);
                    break;
                case"o":
                    d += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                case"m":
                    d += l("m", t.getMonth() + 1, 2);
                    break;
                case"M":
                    d += u("M", t.getMonth(), o, r);
                    break;
                case"y":
                    d += h("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                    break;
                case"@":
                    d += t.getTime();
                    break;
                case"!":
                    d += 1e4 * t.getTime() + this._ticksTo1970;
                    break;
                case"'":
                    h("'") ? d += "'" : c = !0;
                    break;
                default:
                    d += e.charAt(s)
            }
            return d
        },
        _possibleChars: function (e) {
            var t, i = "", s = !1, n = function (i) {
                var s = e.length > t + 1 && e.charAt(t + 1) === i;
                return s && t++, s
            };
            for (t = 0; e.length > t; t++) if (s) "'" !== e.charAt(t) || n("'") ? i += e.charAt(t) : s = !1; else switch (e.charAt(t)) {
                case"d":
                case"m":
                case"y":
                case"@":
                    i += "0123456789";
                    break;
                case"D":
                case"M":
                    return null;
                case"'":
                    n("'") ? i += "'" : s = !0;
                    break;
                default:
                    i += e.charAt(t)
            }
            return i
        },
        _get: function (e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function (e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"), s = e.lastVal = e.input ? e.input.val() : null,
                    n = this._getDefaultDate(e), a = n, o = this._getFormatConfig(e);
                try {
                    a = this.parseDate(i, s, o) || n
                } catch (r) {
                    s = t ? "" : s
                }
                e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = s ? a.getDate() : 0, e.currentMonth = s ? a.getMonth() : 0, e.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function (e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function (t, i, s) {
            var n = function (e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                }, a = function (i) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                    } catch (s) {
                    }
                    for (var n = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, a = n.getFullYear(), o = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
                        switch (l[2] || "d") {
                            case"d":
                            case"D":
                                r += parseInt(l[1], 10);
                                break;
                            case"w":
                            case"W":
                                r += 7 * parseInt(l[1], 10);
                                break;
                            case"m":
                            case"M":
                                o += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o));
                                break;
                            case"y":
                            case"Y":
                                a += parseInt(l[1], 10), r = Math.min(r, e.datepicker._getDaysInMonth(a, o))
                        }
                        l = h.exec(i)
                    }
                    return new Date(a, o, r)
                },
                o = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
            return o = o && "Invalid Date" == "" + o ? s : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function (e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function (e, t, i) {
            var s = !t, n = e.selectedMonth, a = e.selectedYear,
                o = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = o.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = o.getMonth(), e.drawYear = e.selectedYear = e.currentYear = o.getFullYear(), n === e.selectedMonth && a === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(s ? "" : this._formatDate(e))
        },
        _getDate: function (e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function (t) {
            var i = this._get(t, "stepMonths"), s = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function () {
                var t = {
                    prev: function () {
                        e.datepicker._adjustDate(s, -i, "M")
                    }, next: function () {
                        e.datepicker._adjustDate(s, +i, "M")
                    }, hide: function () {
                        e.datepicker._hideDatepicker()
                    }, today: function () {
                        e.datepicker._gotoToday(s)
                    }, selectDay: function () {
                        return e.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    }, selectMonth: function () {
                        return e.datepicker._selectMonthYear(s, this, "M"), !1
                    }, selectYear: function () {
                        return e.datepicker._selectMonthYear(s, this, "Y"), !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (e) {
            var t, i, s, n, a, o, r, h, l, u, d, c, p, f, m, g, v, y, b, _, x, w, k, T, D, S, M, C, N, A, P, I, H, z, F,
                E, O, j, W, L = new Date,
                R = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
                Y = this._get(e, "isRTL"), B = this._get(e, "showButtonPanel"), J = this._get(e, "hideIfNoPrevNext"),
                q = this._get(e, "navigationAsDateFormat"), K = this._getNumberOfMonths(e),
                V = this._get(e, "showCurrentAtPos"), U = this._get(e, "stepMonths"), Q = 1 !== K[0] || 1 !== K[1],
                G = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                X = this._getMinMaxDate(e, "min"), $ = this._getMinMaxDate(e, "max"), Z = e.drawMonth - V,
                et = e.drawYear;
            if (0 > Z && (Z += 12, et--), $) for (t = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - K[0] * K[1] + 1, $.getDate())), t = X && X > t ? X : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, et--);
            for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - U, 1)), this._getFormatConfig(e)) : i, s = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(e, "nextText"), n = q ? this.formatDate(n, this._daylightSavingAdjust(new Date(et, Z + U, 1)), this._getFormatConfig(e)) : n, a = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", o = this._get(e, "currentText"), r = this._get(e, "gotoCurrent") && e.currentDay ? G : R, o = q ? this.formatDate(o, r, this._getFormatConfig(e)) : o, h = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(e, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(e, "firstDay"), 10), u = isNaN(u) ? 0 : u, d = this._get(e, "showWeek"), c = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), f = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), g = this._get(e, "beforeShowDay"), v = this._get(e, "showOtherMonths"), y = this._get(e, "selectOtherMonths"), b = this._getDefaultDate(e), _ = "", w = 0; K[0] > w; w++) {
                for (k = "", this.maxRows = 4, T = 0; K[1] > T; T++) {
                    if (D = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), S = " ui-corner-all", M = "", Q) {
                        if (M += "<div class='ui-datepicker-group", K[1] > 1) switch (T) {
                            case 0:
                                M += " ui-datepicker-group-first", S = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case K[1] - 1:
                                M += " ui-datepicker-group-last", S = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                M += " ui-datepicker-group-middle", S = ""
                        }
                        M += "'>"
                    }
                    for (M += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === w ? Y ? a : s : "") + (/all|right/.test(S) && 0 === w ? Y ? s : a : "") + this._generateMonthYearHeader(e, Z, et, X, $, w > 0 || T > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", C = d ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) N = (x + u) % 7, C += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + c[N] + "'>" + p[N] + "</span></th>";
                    for (M += C + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), P = (this._getFirstDayOfMonth(et, Z) - u + 7) % 7, I = Math.ceil((P + A) / 7), H = Q ? this.maxRows > I ? this.maxRows : I : I, this.maxRows = H, z = this._daylightSavingAdjust(new Date(et, Z, 1 - P)), F = 0; H > F; F++) {
                        for (M += "<tr>", E = d ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(z) + "</td>" : "", x = 0; 7 > x; x++) O = g ? g.apply(e.input ? e.input[0] : null, [z]) : [!0, ""], j = z.getMonth() !== Z, W = j && !y || !O[0] || X && X > z || $ && z > $, E += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (j ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && Z === e.selectedMonth && e._keyEvent || b.getTime() === z.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (j && !v ? "" : " " + O[1] + (z.getTime() === G.getTime() ? " " + this._currentClass : "") + (z.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (j && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (j && !v ? "&#xa0;" : W ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === R.getTime() ? " ui-state-highlight" : "") + (z.getTime() === G.getTime() ? " ui-state-active" : "") + (j ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
                        M += E + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, et++), M += "</tbody></table>" + (Q ? "</div>" + (K[0] > 0 && T === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += M
                }
                _ += k
            }
            return _ += l, e._keyEvent = !1, _
        },
        _generateMonthYearHeader: function (e, t, i, s, n, a, o, r) {
            var h, l, u, d, c, p, f, m, g = this._get(e, "changeMonth"), v = this._get(e, "changeYear"),
                y = this._get(e, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", _ = "";
            if (a || !g) _ += "<span class='ui-datepicker-month'>" + o[t] + "</span>"; else {
                for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++) (!h || u >= s.getMonth()) && (!l || n.getMonth() >= u) && (_ += "<option value='" + u + "'" + (u === t ? " selected='selected'" : "") + ">" + r[u] + "</option>");
                _ += "</select>"
            }
            if (y || (b += _ + (!a && g && v ? "" : "&#xa0;")), !e.yearshtml) if (e.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                for (d = this._get(e, "yearRange").split(":"), c = (new Date).getFullYear(), p = function (e) {
                    var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? c + parseInt(e, 10) : parseInt(e, 10);
                    return isNaN(t) ? c : t
                }, f = p(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) e.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                e.yearshtml += "</select>", b += e.yearshtml, e.yearshtml = null
            }
            return b += this._get(e, "yearSuffix"), y && (b += (!a && g && v ? "" : "&#xa0;") + _), b += "</div>"
        },
        _adjustInstDate: function (e, t, i) {
            var s = e.drawYear + ("Y" === i ? t : 0), n = e.drawMonth + ("M" === i ? t : 0),
                a = Math.min(e.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? t : 0),
                o = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(s, n, a)));
            e.selectedDay = o.getDate(), e.drawMonth = e.selectedMonth = o.getMonth(), e.drawYear = e.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
        },
        _restrictMinMax: function (e, t) {
            var i = this._getMinMaxDate(e, "min"), s = this._getMinMaxDate(e, "max"), n = i && i > t ? i : t;
            return s && n > s ? s : n
        },
        _notifyChange: function (e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function (e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function (e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function (e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function (e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function (e, t, i, s) {
            var n = this._getNumberOfMonths(e),
                a = this._daylightSavingAdjust(new Date(i, s + (0 > t ? t : n[0] * n[1]), 1));
            return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
        },
        _isInRange: function (e, t) {
            var i, s, n = this._getMinMaxDate(e, "min"), a = this._getMinMaxDate(e, "max"), o = null, r = null,
                h = this._get(e, "yearRange");
            return h && (i = h.split(":"), s = (new Date).getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), (!n || t.getTime() >= n.getTime()) && (!a || t.getTime() <= a.getTime()) && (!o || t.getFullYear() >= o) && (!r || r >= t.getFullYear())
        },
        _getFormatConfig: function (e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function (e, t, i, s) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var n = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(s, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function (t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function () {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.4", e.datepicker, e.widget("ui.draggable", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function (e, t) {
            this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function () {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy(), void 0)
        },
        _mouseCapture: function (t) {
            var i = this.options;
            return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
        },
        _blockFrames: function (t) {
            this.iframeBlocks = this.document.find(t).map(function () {
                var t = e(this);
                return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function (t) {
            var i = this.document[0];
            if (this.handleElement.is(t.target)) try {
                i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur()
            } catch (s) {
            }
        },
        _mouseStart: function (t) {
            var i = this.options;
            return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
                return "fixed" === e(this).css("position")
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
        },
        _refreshOffsets: function (e) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top}
        },
        _mouseDrag: function (t, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var i = this, s = !1;
            return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                i._trigger("stop", t) !== !1 && i._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1
        },
        _mouseUp: function (t) {
            return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (t) {
            return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function () {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function () {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function (t) {
            var i = this.options, s = e.isFunction(i.helper),
                n = s ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
        },
        _setPositionRelative: function () {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function (e) {
            return /(html|body)/i.test(e.tagName) || e === this.document[0]
        },
        _getParentOffset: function () {
            var t = this.offsetParent.offset(), i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition) return {top: 0, left: 0};
            var e = this.element.position(), t = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var t, i, s, n = this.options, a = this.document[0];
            return this.relativeContainer = null, n.containment ? "window" === n.containment ? (this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === n.containment ? (this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : n.containment.constructor === Array ? (this.containment = n.containment, void 0) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], s && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i), void 0) : (this.containment = null, void 0)
        },
        _convertPositionTo: function (e, t) {
            t || (t = this.position);
            var i = "absolute" === e ? 1 : -1, s = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function (e, t) {
            var i, s, n, a, o = this.options, r = this._isRootNode(this.scrollParent[0]), h = e.pageX, l = e.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _normalizeRightBottom: function () {
            "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        },
        _trigger: function (t, i, s) {
            return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, s)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), e.ui.plugin.add("draggable", "connectToSortable", {
        start: function (t, i, s) {
            var n = e.extend({}, i, {item: s.element});
            s.sortables = [], e(s.options.connectToSortable).each(function () {
                var i = e(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, n))
            })
        }, stop: function (t, i, s) {
            var n = e.extend({}, i, {item: s.element});
            s.cancelHelperRemoval = !1, e.each(s.sortables, function () {
                var e = this;
                e.isOver ? (e.isOver = 0, s.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                    position: e.placeholder.css("position"),
                    top: e.placeholder.css("top"),
                    left: e.placeholder.css("left")
                }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, n))
            })
        }, drag: function (t, i, s) {
            e.each(s.sortables, function () {
                var n = !1, a = this;
                a.positionAbs = s.positionAbs, a.helperProportions = s.helperProportions, a.offset.click = s.offset.click, a._intersectsWith(a.containerCache) && (n = !0, e.each(s.sortables, function () {
                    return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== a && this._intersectsWith(this.containerCache) && e.contains(a.element[0], this.element[0]) && (n = !1), n
                })), n ? (a.isOver || (a.isOver = 1, s._parent = i.helper.parent(), a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function () {
                    return i.helper[0]
                }, t.target = a.currentItem[0], a._mouseCapture(t, !0), a._mouseStart(t, !0, !0), a.offset.click.top = s.offset.click.top, a.offset.click.left = s.offset.click.left, a.offset.parent.left -= s.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= s.offset.parent.top - a.offset.parent.top, s._trigger("toSortable", t), s.dropped = a.element, e.each(s.sortables, function () {
                    this.refreshPositions()
                }), s.currentItem = s.element, a.fromOutside = s), a.currentItem && (a._mouseDrag(t), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert, a.options.revert = !1, a._trigger("out", t, a._uiHash(a)), a._mouseStop(t, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(t), i.position = s._generatePosition(t, !0), s._trigger("fromSortable", t), s.dropped = !1, e.each(s.sortables, function () {
                    this.refreshPositions()
                }))
            })
        }
    }), e.ui.plugin.add("draggable", "cursor", {
        start: function (t, i, s) {
            var n = e("body"), a = s.options;
            n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor)
        }, stop: function (t, i, s) {
            var n = s.options;
            n._cursor && e("body").css("cursor", n._cursor)
        }
    }), e.ui.plugin.add("draggable", "opacity", {
        start: function (t, i, s) {
            var n = e(i.helper), a = s.options;
            n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity)
        }, stop: function (t, i, s) {
            var n = s.options;
            n._opacity && e(i.helper).css("opacity", n._opacity)
        }
    }), e.ui.plugin.add("draggable", "scroll", {
        start: function (e, t, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        }, drag: function (t, i, s) {
            var n = s.options, a = !1, o = s.scrollParentNotHidden[0], r = s.document[0];
            o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t)
        }
    }), e.ui.plugin.add("draggable", "snap", {
        start: function (t, i, s) {
            var n = s.options;
            s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function () {
                var t = e(this), i = t.offset();
                this !== s.element[0] && s.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        }, drag: function (t, i, s) {
            var n, a, o, r, h, l, u, d, c, p, f = s.options, m = f.snapTolerance, g = i.offset.left,
                v = g + s.helperProportions.width, y = i.offset.top, b = y + s.helperProportions.height;
            for (c = s.snapElements.length - 1; c >= 0; c--) h = s.snapElements[c].left - s.margins.left, l = h + s.snapElements[c].width, u = s.snapElements[c].top - s.margins.top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), {snapItem: s.snapElements[c].item})), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", {
                top: u - s.helperProportions.height,
                left: 0
            }).top), a && (i.position.top = s._convertPositionTo("relative", {
                top: d,
                left: 0
            }).top), o && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: h - s.helperProportions.width
            }).left), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", {
                top: u,
                left: 0
            }).top), a && (i.position.top = s._convertPositionTo("relative", {
                top: d - s.helperProportions.height,
                left: 0
            }).top), o && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l - s.helperProportions.width
            }).left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), {snapItem: s.snapElements[c].item})), s.snapElements[c].snapping = n || a || o || r || p)
        }
    }), e.ui.plugin.add("draggable", "stack", {
        start: function (t, i, s) {
            var n, a = s.options, o = e.makeArray(e(a.stack)).sort(function (t, i) {
                return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
            });
            o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function (t) {
                e(this).css("zIndex", n + t)
            }), this.css("zIndex", n + o.length))
        }
    }), e.ui.plugin.add("draggable", "zIndex", {
        start: function (t, i, s) {
            var n = e(i.helper), a = s.options;
            n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex)
        }, stop: function (t, i, s) {
            var n = s.options;
            n._zIndex && e(i.helper).css("zIndex", n._zIndex)
        }
    }), e.ui.draggable, e.widget("ui.resizable", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function (e) {
            return parseInt(e, 10) || 0
        },
        _isNumber: function (e) {
            return !isNaN(parseInt(e, 10))
        },
        _hasScroll: function (t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop", n = !1;
            return t[s] > 0 ? !0 : (t[s] = 1, n = t[s] > 0, t[s] = 0, n)
        },
        _create: function () {
            var t, i, s, n, a, o = this, r = this.options;
            if (this.element.addClass("ui-resizable"), e.extend(this, {
                _aspectRatio: !!r.aspectRatio,
                aspectRatio: r.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({margin: this.originalElement.css("margin")}), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this._handles = e(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({zIndex: r.zIndex}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
            this._renderAxis = function (t) {
                var i, s, n, a;
                t = t || this.element;
                for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = e(this.handles[i]), this._on(this.handles[i], {mousedown: o._mouseDown})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function () {
                o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
            }), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
            }).mouseleave(function () {
                r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var t, i = function (t) {
                e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function (t) {
            var i, s, n = !1;
            for (i in this.handles) s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function (t) {
            var i, s, n, a = this.options, o = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), a.containment && (i += e(a.containment).scrollLeft() || 0, s += e(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: s
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {width: o.width(), height: o.height()}, this.originalSize = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            } : {width: o.width(), height: o.height()}, this.sizeDiff = {
                width: o.outerWidth() - o.width(),
                height: o.outerHeight() - o.height()
            }, this.originalPosition = {left: i, top: s}, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function (t) {
            var i, s, n = this.originalMousePosition, a = this.axis, o = t.pageX - n.left || 0,
                r = t.pageY - n.top || 0, h = this._change[a];
            return this._updatePrevProperties(), h ? (i = h.apply(this, [t, o, r]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var i, s, n, a, o, r, h, l = this.options, u = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {
                width: u.helper.width() - a,
                height: u.helper.height() - n
            }, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, {
                top: h,
                left: r
            })), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function () {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {width: this.size.width, height: this.size.height}
        },
        _applyChanges: function () {
            var e = {};
            return this.position.top !== this.prevPosition.top && (e.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (e.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (e.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (e.height = this.size.height + "px"), this.helper.css(e), e
        },
        _updateVirtualBoundaries: function (e) {
            var t, i, s, n, a, o = this.options;
            a = {
                minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
                minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
            }, (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio, s = a.minWidth / this.aspectRatio, i = a.maxHeight * this.aspectRatio, n = a.maxWidth / this.aspectRatio, t > a.minWidth && (a.minWidth = t), s > a.minHeight && (a.minHeight = s), a.maxWidth > i && (a.maxWidth = i), a.maxHeight > n && (a.maxHeight = n)), this._vBoundaries = a
        },
        _updateCache: function (e) {
            this.offset = this.helper.offset(), this._isNumber(e.left) && (this.position.left = e.left), this._isNumber(e.top) && (this.position.top = e.top), this._isNumber(e.height) && (this.size.height = e.height), this._isNumber(e.width) && (this.size.width = e.width)
        },
        _updateRatio: function (e) {
            var t = this.position, i = this.size, s = this.axis;
            return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio), "sw" === s && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === s && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
        },
        _respectSize: function (e) {
            var t = this._vBoundaries, i = this.axis, s = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width,
                n = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height,
                a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width,
                o = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height,
                r = this.originalPosition.left + this.originalSize.width, h = this.position.top + this.size.height,
                l = /sw|nw|w/.test(i), u = /nw|ne|n/.test(i);
            return a && (e.width = t.minWidth), o && (e.height = t.minHeight), s && (e.width = t.maxWidth), n && (e.height = t.maxHeight), a && l && (e.left = r - t.minWidth), s && l && (e.left = r - t.maxWidth), o && u && (e.top = h - t.minHeight), n && u && (e.top = h - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
        },
        _getPaddingPlusBorderDimensions: function (e) {
            for (var t = 0, i = [], s = [e.css("borderTopWidth"), e.css("borderRightWidth"), e.css("borderBottomWidth"), e.css("borderLeftWidth")], n = [e.css("paddingTop"), e.css("paddingRight"), e.css("paddingBottom"), e.css("paddingLeft")]; 4 > t; t++) i[t] = parseInt(s[t], 10) || 0, i[t] += parseInt(n[t], 10) || 0;
            return {height: i[0] + i[2], width: i[1] + i[3]}
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) for (var e, t = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > t; t++) e = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(e)), e.css({
                height: i.height() - this.outerDimensions.height || 0,
                width: i.width() - this.outerDimensions.width || 0
            })
        },
        _renderProxy: function () {
            var t = this.element, i = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (e, t) {
                return {width: this.originalSize.width + t}
            }, w: function (e, t) {
                var i = this.originalSize, s = this.originalPosition;
                return {left: s.left + t, width: i.width - t}
            }, n: function (e, t, i) {
                var s = this.originalSize, n = this.originalPosition;
                return {top: n.top + i, height: s.height - i}
            }, s: function (e, t, i) {
                return {height: this.originalSize.height + i}
            }, se: function (t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            }, sw: function (t, i, s) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            }, ne: function (t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
            }, nw: function (t, i, s) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
            }
        },
        _propagate: function (t, i) {
            e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), e.ui.plugin.add("resizable", "animate", {
        stop: function (t) {
            var i = e(this).resizable("instance"), s = i.options, n = i._proportionallyResizeElements,
                a = n.length && /textarea/i.test(n[0].nodeName),
                o = a && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height, r = a ? 0 : i.sizeDiff.width,
                h = {width: i.size.width - r, height: i.size.height - o},
                l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(e.extend(h, u && l ? {top: u, left: l} : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function () {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && e(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", t)
                }
            })
        }
    }), e.ui.plugin.add("resizable", "containment", {
        start: function () {
            var t, i, s, n, a, o, r, h = e(this).resizable("instance"), l = h.options, u = h.element, d = l.containment,
                c = d instanceof e ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
            c && (h.containerElement = e(c), /document/.test(d) || d === document ? (h.containerOffset = {
                left: 0,
                top: 0
            }, h.containerPosition = {left: 0, top: 0}, h.parentData = {
                element: e(document),
                left: 0,
                top: 0,
                width: e(document).width(),
                height: e(document).height() || document.body.parentNode.scrollHeight
            }) : (t = e(c), i = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, s) {
                i[e] = h._num(t.css("padding" + s))
            }), h.containerOffset = t.offset(), h.containerPosition = t.position(), h.containerSize = {
                height: t.innerHeight() - i[3],
                width: t.innerWidth() - i[1]
            }, s = h.containerOffset, n = h.containerSize.height, a = h.containerSize.width, o = h._hasScroll(c, "left") ? c.scrollWidth : a, r = h._hasScroll(c) ? c.scrollHeight : n, h.parentData = {
                element: c,
                left: s.left,
                top: s.top,
                width: o,
                height: r
            }))
        }, resize: function (t) {
            var i, s, n, a, o = e(this).resizable("instance"), r = o.options, h = o.containerOffset, l = o.position,
                u = o._aspectRatio || t.shiftKey, d = {top: 0, left: 0}, c = o.containerElement, p = !0;
            c[0] !== document && /static/.test(c.css("position")) && (d = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - d.left), u && (o.size.height = o.size.width / o.aspectRatio, p = !1), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio, p = !1), o.position.top = o._helper ? h.top : 0), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), i = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - d.left : o.offset.left - h.left)), s = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - d.top : o.offset.top - h.top)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio, p = !1)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio, p = !1)), p || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
        }, stop: function () {
            var t = e(this).resizable("instance"), i = t.options, s = t.containerOffset, n = t.containerPosition,
                a = t.containerElement, o = e(t.helper), r = o.offset(), h = o.outerWidth() - t.sizeDiff.width,
                l = o.outerHeight() - t.sizeDiff.height;
            t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            }), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            })
        }
    }), e.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var t = e(this).resizable("instance"), i = t.options;
            e(i.alsoResize).each(function () {
                var t = e(this);
                t.data("ui-resizable-alsoresize", {
                    width: parseInt(t.width(), 10),
                    height: parseInt(t.height(), 10),
                    left: parseInt(t.css("left"), 10),
                    top: parseInt(t.css("top"), 10)
                })
            })
        }, resize: function (t, i) {
            var s = e(this).resizable("instance"), n = s.options, a = s.originalSize, o = s.originalPosition, r = {
                height: s.size.height - a.height || 0,
                width: s.size.width - a.width || 0,
                top: s.position.top - o.top || 0,
                left: s.position.left - o.left || 0
            };
            e(n.alsoResize).each(function () {
                var t = e(this), s = e(this).data("ui-resizable-alsoresize"), n = {},
                    a = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                e.each(a, function (e, t) {
                    var i = (s[t] || 0) + (r[t] || 0);
                    i && i >= 0 && (n[t] = i || null)
                }), t.css(n)
            })
        }, stop: function () {
            e(this).removeData("resizable-alsoresize")
        }
    }), e.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var t = e(this).resizable("instance"), i = t.options, s = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
        }, resize: function () {
            var t = e(this).resizable("instance");
            t.ghost && t.ghost.css({position: "relative", height: t.size.height, width: t.size.width})
        }, stop: function () {
            var t = e(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), e.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var t, i = e(this).resizable("instance"), s = i.options, n = i.size, a = i.originalSize,
                o = i.originalPosition, r = i.axis, h = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                l = h[0] || 1, u = h[1] || 1, d = Math.round((n.width - a.width) / l) * l,
                c = Math.round((n.height - a.height) / u) * u, p = a.width + d, f = a.height + c,
                m = s.maxWidth && p > s.maxWidth, g = s.maxHeight && f > s.maxHeight, v = s.minWidth && s.minWidth > p,
                y = s.minHeight && s.minHeight > f;
            s.grid = h, v && (p += l), y && (f += u), m && (p -= l), g && (f -= u), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = o.top - c) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = o.left - d) : ((0 >= f - u || 0 >= p - l) && (t = i._getPaddingPlusBorderDimensions(this)), f - u > 0 ? (i.size.height = f, i.position.top = o.top - c) : (f = u - t.height, i.size.height = f, i.position.top = o.top + a.height - f), p - l > 0 ? (i.size.width = p, i.position.left = o.left - d) : (p = l - t.width, i.size.width = p, i.position.left = o.left + a.width - p))
        }
    }), e.ui.resizable, e.widget("ui.dialog", {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center", at: "center", of: window, collision: "fit", using: function (t) {
                    var i = e(this).css(t).offset().top;
                    0 > i && e(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0},
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function () {
            var e, t = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: e.noop,
        enable: e.noop,
        close: function (t) {
            var i, s = this;
            if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                    i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && e(i).blur()
                } catch (n) {
                }
                this._hide(this.uiDialog, this.options.hide, function () {
                    s._trigger("close", t)
                })
            }
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (t, i) {
            var s = !1, n = this.uiDialog.siblings(".ui-front:visible").map(function () {
                return +e(this).css("z-index")
            }).get(), a = Math.max.apply(null, n);
            return a >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", a + 1), s = !0), s && !i && this._trigger("focus", t), s
        },
        open: function () {
            var t = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
                t._focusTabbable(), t._trigger("focus")
            }), this._makeFocusTarget(), this._trigger("open"), void 0)
        },
        _focusTabbable: function () {
            var e = this._focusedElement;
            e || (e = this.element.find("[autofocus]")), e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
        },
        _keepFocus: function (t) {
            function i() {
                var t = this.document[0].activeElement, i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }

            t.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function () {
            this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function (t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), void 0;
                    if (t.keyCode === e.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"), s = i.filter(":first"), n = i.filter(":last");
                        t.target !== n[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== s[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function () {
                            n.focus()
                        }), t.preventDefault()) : (this._delay(function () {
                            s.focus()
                        }), t.preventDefault())
                    }
                }, mousedown: function (e) {
                    this._moveToTop(e) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
        },
        _createTitlebar: function () {
            var t;
            this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function (t) {
                    e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {primary: "ui-icon-closethick"},
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function (e) {
                    e.preventDefault(), this.close(e)
                }
            }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({"aria-labelledby": t.attr("id")})
        },
        _title: function (e) {
            this.options.title || e.html("&#160;"), e.text(this.options.title)
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function () {
            var t = this, i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), void 0) : (e.each(i, function (i, s) {
                var n, a;
                s = e.isFunction(s) ? {
                    click: s,
                    text: i
                } : s, s = e.extend({type: "button"}, s), n = s.click, s.click = function () {
                    n.apply(t.element[0], arguments)
                }, a = {
                    icons: s.icons,
                    text: s.showText
                }, delete s.icons, delete s.showText, e("<button></button>", s).button(a).appendTo(t.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
        },
        _makeDraggable: function () {
            function t(e) {
                return {position: e.position, offset: e.offset}
            }

            var i = this, s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (s, n) {
                    e(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, t(n))
                },
                drag: function (e, s) {
                    i._trigger("drag", e, t(s))
                },
                stop: function (n, a) {
                    var o = a.offset.left - i.document.scrollLeft(), r = a.offset.top - i.document.scrollTop();
                    s.position = {
                        my: "left top",
                        at: "left" + (o >= 0 ? "+" : "") + o + " " + "top" + (r >= 0 ? "+" : "") + r,
                        of: i.window
                    }, e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, t(a))
                }
            })
        },
        _makeResizable: function () {
            function t(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }

            var i = this, s = this.options, n = s.resizable, a = this.uiDialog.css("position"),
                o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function (s, n) {
                    e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, t(n))
                },
                resize: function (e, s) {
                    i._trigger("resize", e, t(s))
                },
                stop: function (n, a) {
                    var o = i.uiDialog.offset(), r = o.left - i.document.scrollLeft(),
                        h = o.top - i.document.scrollTop();
                    s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
                        my: "left top",
                        at: "left" + (r >= 0 ? "+" : "") + r + " " + "top" + (h >= 0 ? "+" : "") + h,
                        of: i.window
                    }, e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, t(a))
                }
            }).css("position", a)
        },
        _trackFocus: function () {
            this._on(this.widget(), {
                focusin: function (t) {
                    this._makeFocusTarget(), this._focusedElement = e(t.target)
                }
            })
        },
        _makeFocusTarget: function () {
            this._untrackInstance(), this._trackingInstances().unshift(this)
        },
        _untrackInstance: function () {
            var t = this._trackingInstances(), i = e.inArray(this, t);
            -1 !== i && t.splice(i, 1)
        },
        _trackingInstances: function () {
            var e = this.document.data("ui-dialog-instances");
            return e || (e = [], this.document.data("ui-dialog-instances", e)), e
        },
        _minHeight: function () {
            var e = this.options;
            return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function () {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
        },
        _setOptions: function (t) {
            var i = this, s = !1, n = {};
            e.each(t, function (e, t) {
                i._setOption(e, t), e in i.sizeRelatedOptions && (s = !0), e in i.resizableRelatedOptions && (n[e] = t)
            }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
        },
        _setOption: function (e, t) {
            var i, s, n = this.uiDialog;
            "dialogClass" === e && n.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({label: "" + t}), "draggable" === e && (i = n.is(":data(ui-draggable)"), i && !t && n.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = n.is(":data(ui-resizable)"), s && !t && n.resizable("destroy"), s && "string" == typeof t && n.resizable("option", "handles", t), s || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var e, t, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), s.minWidth > s.width && (s.width = s.minWidth), e = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), t = Math.max(0, s.minHeight - e), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - e) : "none", "auto" === s.height ? this.element.css({
                minHeight: t,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var t = e(this);
                return e("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (t) {
            return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            if (this.options.modal) {
                var t = !0;
                this._delay(function () {
                    t = !1
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function (e) {
                        t || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {mousedown: "_keepFocus"}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function () {
            if (this.options.modal && this.overlay) {
                var e = this.document.data("ui-dialog-overlays") - 1;
                e ? this.document.data("ui-dialog-overlays", e) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
            }
        }
    }), e.widget("ui.droppable", {
        version: "1.11.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function () {
            var t, i = this.options, s = i.accept;
            this.isover = !1, this.isout = !0, this.accept = e.isFunction(s) ? s : function (e) {
                return e.is(s)
            }, this.proportions = function () {
                return arguments.length ? (t = arguments[0], void 0) : t ? t : t = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            }, this._addToManager(i.scope), i.addClasses && this.element.addClass("ui-droppable")
        },
        _addToManager: function (t) {
            e.ui.ddmanager.droppables[t] = e.ui.ddmanager.droppables[t] || [], e.ui.ddmanager.droppables[t].push(this)
        },
        _splice: function (e) {
            for (var t = 0; e.length > t; t++) e[t] === this && e.splice(t, 1)
        },
        _destroy: function () {
            var t = e.ui.ddmanager.droppables[this.options.scope];
            this._splice(t), this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function (t, i) {
            if ("accept" === t) this.accept = e.isFunction(i) ? i : function (e) {
                return e.is(i)
            }; else if ("scope" === t) {
                var s = e.ui.ddmanager.droppables[this.options.scope];
                this._splice(s), this._addToManager(i)
            }
            this._super(t, i)
        },
        _activate: function (t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
        },
        _deactivate: function (t) {
            var i = e.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
        },
        _over: function (t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
        },
        _out: function (t) {
            var i = e.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
        },
        _drop: function (t, i) {
            var s = i || e.ui.ddmanager.current, n = !1;
            return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var i = e(this).droppable("instance");
                return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(i, {offset: i.element.offset()}), i.options.tolerance, t) ? (n = !0, !1) : void 0
            }), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1
        },
        ui: function (e) {
            return {
                draggable: e.currentItem || e.element,
                helper: e.helper,
                position: e.position,
                offset: e.positionAbs
            }
        }
    }), e.ui.intersect = function () {
        function e(e, t, i) {
            return e >= t && t + i > e
        }

        return function (t, i, s, n) {
            if (!i.offset) return !1;
            var a = (t.positionAbs || t.position.absolute).left + t.margins.left,
                o = (t.positionAbs || t.position.absolute).top + t.margins.top, r = a + t.helperProportions.width,
                h = o + t.helperProportions.height, l = i.offset.left, u = i.offset.top, d = l + i.proportions().width,
                c = u + i.proportions().height;
            switch (s) {
                case"fit":
                    return a >= l && d >= r && o >= u && c >= h;
                case"intersect":
                    return a + t.helperProportions.width / 2 > l && d > r - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > u && c > h - t.helperProportions.height / 2;
                case"pointer":
                    return e(n.pageY, u, i.proportions().height) && e(n.pageX, l, i.proportions().width);
                case"touch":
                    return (o >= u && c >= o || h >= u && c >= h || u > o && h > c) && (a >= l && d >= a || r >= l && d >= r || l > a && r > d);
                default:
                    return !1
            }
        }
    }(), e.ui.ddmanager = {
        current: null, droppables: {"default": []}, prepareOffsets: function (t, i) {
            var s, n, a = e.ui.ddmanager.droppables[t.options.scope] || [], o = i ? i.type : null,
                r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            e:for (s = 0; a.length > s; s++) if (!(a[s].options.disabled || t && !a[s].accept.call(a[s].element[0], t.currentItem || t.element))) {
                for (n = 0; r.length > n; n++) if (r[n] === a[s].element[0]) {
                    a[s].proportions().height = 0;
                    continue e
                }
                a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions({
                    width: a[s].element[0].offsetWidth,
                    height: a[s].element[0].offsetHeight
                }))
            }
        }, drop: function (t, i) {
            var s = !1;
            return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
                this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), s
        }, dragStart: function (t, i) {
            t.element.parentsUntil("body").bind("scroll.droppable", function () {
                t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
            })
        }, drag: function (t, i) {
            t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, a, o = e.ui.intersect(t, this, this.options.tolerance, i),
                        r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function () {
                        return e(this).droppable("instance").options.scope === n
                    }), a.length && (s = e(a[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        }, dragStop: function (t, i) {
            t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
        }
    }, e.ui.droppable;
    var y = "ui-effects-", b = e;
    e.effects = {effect: {}}, function (e, t) {
        function i(e, t, i) {
            var s = d[t.type] || {};
            return null == e ? i || !t.def ? null : t.def : (e = s.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e)
        }

        function s(i) {
            var s = l(), n = s._rgba = [];
            return i = i.toLowerCase(), f(h, function (e, a) {
                var o, r = a.re.exec(i), h = r && a.parse(r), l = a.space || "rgba";
                return h ? (o = s[l](h), s[u[l].cache] = o[u[l].cache], n = s._rgba = o._rgba, !1) : t
            }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, a.transparent), s) : a[i]
        }

        function n(e, t, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
        }

        var a,
            o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            r = /^([\-+])=\s*(\d+\.?\d*)/, h = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (e) {
                    return [e[1], e[2], e[3], e[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (e) {
                    return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (e) {
                    return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (e) {
                    return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (e) {
                    return [e[1], e[2] / 100, e[3] / 100, e[4]]
                }
            }], l = e.Color = function (t, i, s, n) {
                return new e.Color.fn.parse(t, i, s, n)
            }, u = {
                rgba: {
                    props: {
                        red: {idx: 0, type: "byte"},
                        green: {idx: 1, type: "byte"},
                        blue: {idx: 2, type: "byte"}
                    }
                },
                hsla: {
                    props: {
                        hue: {idx: 0, type: "degrees"},
                        saturation: {idx: 1, type: "percent"},
                        lightness: {idx: 2, type: "percent"}
                    }
                }
            }, d = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, c = l.support = {},
            p = e("<p>")[0], f = e.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", c.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function (e, t) {
            t.cache = "_" + e, t.props.alpha = {idx: 3, type: "percent", def: 1}
        }), l.fn = e.extend(l.prototype, {
            parse: function (n, o, r, h) {
                if (n === t) return this._rgba = [null, null, null, null], this;
                (n.jquery || n.nodeType) && (n = e(n).css(o), o = t);
                var d = this, c = e.type(n), p = this._rgba = [];
                return o !== t && (n = [n, o, r, h], c = "array"), "string" === c ? this.parse(s(n) || a._default) : "array" === c ? (f(u.rgba.props, function (e, t) {
                    p[t.idx] = i(n[t.idx], t)
                }), this) : "object" === c ? (n instanceof l ? f(u, function (e, t) {
                    n[t.cache] && (d[t.cache] = n[t.cache].slice())
                }) : f(u, function (t, s) {
                    var a = s.cache;
                    f(s.props, function (e, t) {
                        if (!d[a] && s.to) {
                            if ("alpha" === e || null == n[e]) return;
                            d[a] = s.to(d._rgba)
                        }
                        d[a][t.idx] = i(n[e], t, !0)
                    }), d[a] && 0 > e.inArray(null, d[a].slice(0, 3)) && (d[a][3] = 1, s.from && (d._rgba = s.from(d[a])))
                }), this) : t
            }, is: function (e) {
                var i = l(e), s = !0, n = this;
                return f(u, function (e, a) {
                    var o, r = i[a.cache];
                    return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (e, i) {
                        return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : t
                    })), s
                }), s
            }, _space: function () {
                var e = [], t = this;
                return f(u, function (i, s) {
                    t[s.cache] && e.push(i)
                }), e.pop()
            }, transition: function (e, t) {
                var s = l(e), n = s._space(), a = u[n], o = 0 === this.alpha() ? l("transparent") : this,
                    r = o[a.cache] || a.to(o._rgba), h = r.slice();
                return s = s[a.cache], f(a.props, function (e, n) {
                    var a = n.idx, o = r[a], l = s[a], u = d[n.type] || {};
                    null !== l && (null === o ? h[a] = l : (u.mod && (l - o > u.mod / 2 ? o += u.mod : o - l > u.mod / 2 && (o -= u.mod)), h[a] = i((l - o) * t + o, n)))
                }), this[n](h)
            }, blend: function (t) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(), s = i.pop(), n = l(t)._rgba;
                return l(e.map(i, function (e, t) {
                    return (1 - s) * n[t] + s * e
                }))
            }, toRgbaString: function () {
                var t = "rgba(", i = e.map(this._rgba, function (e, t) {
                    return null == e ? t > 2 ? 1 : 0 : e
                });
                return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
            }, toHslaString: function () {
                var t = "hsla(", i = e.map(this.hsla(), function (e, t) {
                    return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                });
                return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
            }, toHexString: function (t) {
                var i = this._rgba.slice(), s = i.pop();
                return t && i.push(~~(255 * s)), "#" + e.map(i, function (e) {
                    return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), l.fn.parse.prototype = l.fn, u.hsla.to = function (e) {
            if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
            var t, i, s = e[0] / 255, n = e[1] / 255, a = e[2] / 255, o = e[3], r = Math.max(s, n, a),
                h = Math.min(s, n, a), l = r - h, u = r + h, d = .5 * u;
            return t = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= d ? l / u : l / (2 - u), [Math.round(t) % 360, i, d, null == o ? 1 : o]
        }, u.hsla.from = function (e) {
            if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
            var t = e[0] / 360, i = e[1], s = e[2], a = e[3], o = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - o;
            return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a]
        }, f(u, function (s, n) {
            var a = n.props, o = n.cache, h = n.to, u = n.from;
            l.fn[s] = function (s) {
                if (h && !this[o] && (this[o] = h(this._rgba)), s === t) return this[o].slice();
                var n, r = e.type(s), d = "array" === r || "object" === r ? s : arguments, c = this[o].slice();
                return f(a, function (e, t) {
                    var s = d["object" === r ? e : t.idx];
                    null == s && (s = c[t.idx]), c[t.idx] = i(s, t)
                }), u ? (n = l(u(c)), n[o] = c, n) : l(c)
            }, f(a, function (t, i) {
                l.fn[t] || (l.fn[t] = function (n) {
                    var a, o = e.type(n), h = "alpha" === t ? this._hsla ? "hsla" : "rgba" : s, l = this[h](),
                        u = l[i.idx];
                    return "undefined" === o ? u : ("function" === o && (n = n.call(this, u), o = e.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = u + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
                })
            })
        }), l.hook = function (t) {
            var i = t.split(" ");
            f(i, function (t, i) {
                e.cssHooks[i] = {
                    set: function (t, n) {
                        var a, o, r = "";
                        if ("transparent" !== n && ("string" !== e.type(n) || (a = s(n)))) {
                            if (n = l(a || n), !c.rgba && 1 !== n._rgba[3]) {
                                for (o = "backgroundColor" === i ? t.parentNode : t; ("" === r || "transparent" === r) && o && o.style;) try {
                                    r = e.css(o, "backgroundColor"), o = o.parentNode
                                } catch (h) {
                                }
                                n = n.blend(r && "transparent" !== r ? r : "_default")
                            }
                            n = n.toRgbaString()
                        }
                        try {
                            t.style[i] = n
                        } catch (h) {
                        }
                    }
                }, e.fx.step[i] = function (t) {
                    t.colorInit || (t.start = l(t.elem, i), t.end = l(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        }, l.hook(o), e.cssHooks.borderColor = {
            expand: function (e) {
                var t = {};
                return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
                    t["border" + s + "Color"] = e
                }), t
            }
        }, a = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(b), function () {
        function t(t) {
            var i, s,
                n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                a = {};
            if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[e.camelCase(i)] = n[i]); else for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
            return a
        }

        function i(t, i) {
            var s, a, o = {};
            for (s in i) a = i[s], t[s] !== a && (n[s] || (e.fx.step[s] || !isNaN(parseFloat(a))) && (o[s] = a));
            return o
        }

        var s = ["add", "remove", "toggle"], n = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) {
            e.fx.step[i] = function (e) {
                ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (b.style(e.elem, i, e.end), e.setAttr = !0)
            }
        }), e.fn.addBack || (e.fn.addBack = function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }), e.effects.animateClass = function (n, a, o, r) {
            var h = e.speed(a, o, r);
            return this.queue(function () {
                var a, o = e(this), r = o.attr("class") || "", l = h.children ? o.find("*").addBack() : o;
                l = l.map(function () {
                    var i = e(this);
                    return {el: i, start: t(this)}
                }), a = function () {
                    e.each(s, function (e, t) {
                        n[t] && o[t + "Class"](n[t])
                    })
                }, a(), l = l.map(function () {
                    return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this
                }), o.attr("class", r), l = l.map(function () {
                    var t = this, i = e.Deferred(), s = e.extend({}, h, {
                        queue: !1, complete: function () {
                            i.resolve(t)
                        }
                    });
                    return this.el.animate(this.diff, s), i.promise()
                }), e.when.apply(e, l.get()).done(function () {
                    a(), e.each(arguments, function () {
                        var t = this.el;
                        e.each(this.diff, function (e) {
                            t.css(e, "")
                        })
                    }), h.complete.call(o[0])
                })
            })
        }, e.fn.extend({
            addClass: function (t) {
                return function (i, s, n, a) {
                    return s ? e.effects.animateClass.call(this, {add: i}, s, n, a) : t.apply(this, arguments)
                }
            }(e.fn.addClass), removeClass: function (t) {
                return function (i, s, n, a) {
                    return arguments.length > 1 ? e.effects.animateClass.call(this, {remove: i}, s, n, a) : t.apply(this, arguments)
                }
            }(e.fn.removeClass), toggleClass: function (t) {
                return function (i, s, n, a, o) {
                    return "boolean" == typeof s || void 0 === s ? n ? e.effects.animateClass.call(this, s ? {add: i} : {remove: i}, n, a, o) : t.apply(this, arguments) : e.effects.animateClass.call(this, {toggle: i}, s, n, a)
                }
            }(e.fn.toggleClass), switchClass: function (t, i, s, n, a) {
                return e.effects.animateClass.call(this, {add: i, remove: t}, s, n, a)
            }
        })
    }(), function () {
        function t(t, i, s, n) {
            return e.isPlainObject(t) && (i = t, t = t.effect), t = {effect: t}, null == i && (i = {}), e.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (n = s, s = i, i = {}), e.isFunction(s) && (n = s, s = null), i && e.extend(t, i), s = s || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default, t.complete = n || i.complete, t
        }

        function i(t) {
            return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
        }

        e.extend(e.effects, {
            version: "1.11.4", save: function (e, t) {
                for (var i = 0; t.length > i; i++) null !== t[i] && e.data(y + t[i], e[0].style[t[i]])
            }, restore: function (e, t) {
                var i, s;
                for (s = 0; t.length > s; s++) null !== t[s] && (i = e.data(y + t[s]), void 0 === i && (i = ""), e.css(t[s], i))
            }, setMode: function (e, t) {
                return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
            }, getBaseline: function (e, t) {
                var i, s;
                switch (e[0]) {
                    case"top":
                        i = 0;
                        break;
                    case"middle":
                        i = .5;
                        break;
                    case"bottom":
                        i = 1;
                        break;
                    default:
                        i = e[0] / t.height
                }
                switch (e[1]) {
                    case"left":
                        s = 0;
                        break;
                    case"center":
                        s = .5;
                        break;
                    case"right":
                        s = 1;
                        break;
                    default:
                        s = e[1] / t.width
                }
                return {x: s, y: i}
            }, createWrapper: function (t) {
                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                var i = {width: t.outerWidth(!0), height: t.outerHeight(!0), "float": t.css("float")},
                    s = e("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), n = {width: t.width(), height: t.height()}, a = document.activeElement;
                try {
                    a.id
                } catch (o) {
                    a = document.body
                }
                return t.wrap(s), (t[0] === a || e.contains(t[0], a)) && e(a).focus(), s = t.parent(), "static" === t.css("position") ? (s.css({position: "relative"}), t.css({position: "relative"})) : (e.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), e.each(["top", "left", "bottom", "right"], function (e, s) {
                    i[s] = t.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), t.css(n), s.css(i).show()
            }, removeWrapper: function (t) {
                var i = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t
            }, setTransition: function (t, i, s, n) {
                return n = n || {}, e.each(i, function (e, i) {
                    var a = t.cssUnit(i);
                    a[0] > 0 && (n[i] = a[0] * s + a[1])
                }), n
            }
        }), e.fn.extend({
            effect: function () {
                function i(t) {
                    function i() {
                        e.isFunction(a) && a.call(n[0]), e.isFunction(t) && t()
                    }

                    var n = e(this), a = s.complete, r = s.mode;
                    (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), i()) : o.call(n[0], s, i)
                }

                var s = t.apply(this, arguments), n = s.mode, a = s.queue, o = e.effects.effect[s.effect];
                return e.fx.off || !o ? n ? this[n](s.duration, s.complete) : this.each(function () {
                    s.complete && s.complete.call(this)
                }) : a === !1 ? this.each(i) : this.queue(a || "fx", i)
            }, show: function (e) {
                return function (s) {
                    if (i(s)) return e.apply(this, arguments);
                    var n = t.apply(this, arguments);
                    return n.mode = "show", this.effect.call(this, n)
                }
            }(e.fn.show), hide: function (e) {
                return function (s) {
                    if (i(s)) return e.apply(this, arguments);
                    var n = t.apply(this, arguments);
                    return n.mode = "hide", this.effect.call(this, n)
                }
            }(e.fn.hide), toggle: function (e) {
                return function (s) {
                    if (i(s) || "boolean" == typeof s) return e.apply(this, arguments);
                    var n = t.apply(this, arguments);
                    return n.mode = "toggle", this.effect.call(this, n)
                }
            }(e.fn.toggle), cssUnit: function (t) {
                var i = this.css(t), s = [];
                return e.each(["em", "px", "%", "pt"], function (e, t) {
                    i.indexOf(t) > 0 && (s = [parseFloat(i), t])
                }), s
            }
        })
    }(), function () {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) {
            t[i] = function (t) {
                return Math.pow(t, e + 2)
            }
        }), e.extend(t, {
            Sine: function (e) {
                return 1 - Math.cos(e * Math.PI / 2)
            }, Circ: function (e) {
                return 1 - Math.sqrt(1 - e * e)
            }, Elastic: function (e) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
            }, Back: function (e) {
                return e * e * (3 * e - 2)
            }, Bounce: function (e) {
                for (var t, i = 4; ((t = Math.pow(2, --i)) - 1) / 11 > e;) ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
            }
        }), e.each(t, function (t, i) {
            e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function (e) {
                return 1 - i(1 - e)
            }, e.easing["easeInOut" + t] = function (e) {
                return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
            }
        })
    }(), e.effects, e.effects.effect.blind = function (t, i) {
        var s, n, a, o = e(this), r = /up|down|vertical/, h = /up|left|vertical|horizontal/,
            l = ["position", "top", "bottom", "left", "right", "height", "width"],
            u = e.effects.setMode(o, t.mode || "hide"), d = t.direction || "up", c = r.test(d),
            p = c ? "height" : "width", f = c ? "top" : "left", m = h.test(d), g = {}, v = "show" === u;
        o.parent().is(".ui-effects-wrapper") ? e.effects.save(o.parent(), l) : e.effects.save(o, l), o.show(), s = e.effects.createWrapper(o).css({overflow: "hidden"}), n = s[p](), a = parseFloat(s.css(f)) || 0, g[p] = v ? n : 0, m || (o.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({position: "absolute"}), g[f] = v ? a : n + a), v && (s.css(p, 0), m || s.css(f, a + n)), s.animate(g, {
            duration: t.duration,
            easing: t.easing,
            queue: !1,
            complete: function () {
                "hide" === u && o.hide(), e.effects.restore(o, l), e.effects.removeWrapper(o), i()
            }
        })
    }, e.effects.effect.bounce = function (t, i) {
        var s, n, a, o = e(this), r = ["position", "top", "bottom", "left", "right", "height", "width"],
            h = e.effects.setMode(o, t.mode || "effect"), l = "hide" === h, u = "show" === h, d = t.direction || "up",
            c = t.distance, p = t.times || 5, f = 2 * p + (u || l ? 1 : 0), m = t.duration / f, g = t.easing,
            v = "up" === d || "down" === d ? "top" : "left", y = "up" === d || "left" === d, b = o.queue(),
            _ = b.length;
        for ((u || l) && r.push("opacity"), e.effects.save(o, r), o.show(), e.effects.createWrapper(o), c || (c = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), u && (a = {opacity: 1}, a[v] = 0, o.css("opacity", 0).css(v, y ? 2 * -c : 2 * c).animate(a, m, g)), l && (c /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++) n = {}, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g).animate(a, m, g), c = l ? 2 * c : c / 2;
        l && (n = {opacity: 0}, n[v] = (y ? "-=" : "+=") + c, o.animate(n, m, g)), o.queue(function () {
            l && o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i()
        }), _ > 1 && b.splice.apply(b, [1, 0].concat(b.splice(_, f + 1))), o.dequeue()
    }, e.effects.effect.clip = function (t, i) {
        var s, n, a, o = e(this), r = ["position", "top", "bottom", "left", "right", "height", "width"],
            h = e.effects.setMode(o, t.mode || "hide"), l = "show" === h, u = t.direction || "vertical",
            d = "vertical" === u, c = d ? "height" : "width", p = d ? "top" : "left", f = {};
        e.effects.save(o, r), o.show(), s = e.effects.createWrapper(o).css({overflow: "hidden"}), n = "IMG" === o[0].tagName ? s : o, a = n[c](), l && (n.css(c, 0), n.css(p, a / 2)), f[c] = l ? a : 0, f[p] = l ? 0 : a / 2, n.animate(f, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                l || o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i()
            }
        })
    }, e.effects.effect.drop = function (t, i) {
        var s, n = e(this), a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            o = e.effects.setMode(n, t.mode || "hide"), r = "show" === o, h = t.direction || "left",
            l = "up" === h || "down" === h ? "top" : "left", u = "up" === h || "left" === h ? "pos" : "neg",
            d = {opacity: r ? 1 : 0};
        e.effects.save(n, a), n.show(), e.effects.createWrapper(n), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === u ? -s : s), d[l] = (r ? "pos" === u ? "+=" : "-=" : "pos" === u ? "-=" : "+=") + s, n.animate(d, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
            }
        })
    }, e.effects.effect.explode = function (t, i) {
        function s() {
            b.push(this), b.length === d * c && n()
        }

        function n() {
            p.css({visibility: "visible"}), e(b).remove(), m || p.hide(), i()
        }

        var a, o, r, h, l, u, d = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = d, p = e(this),
            f = e.effects.setMode(p, t.mode || "hide"), m = "show" === f,
            g = p.show().css("visibility", "hidden").offset(), v = Math.ceil(p.outerWidth() / c),
            y = Math.ceil(p.outerHeight() / d), b = [];
        for (a = 0; d > a; a++) for (h = g.top + a * y, u = a - (d - 1) / 2, o = 0; c > o; o++) r = g.left + o * v, l = o - (c - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -o * v,
            top: -a * y
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: v,
            height: y,
            left: r + (m ? l * v : 0),
            top: h + (m ? u * y : 0),
            opacity: m ? 0 : 1
        }).animate({
            left: r + (m ? 0 : l * v),
            top: h + (m ? 0 : u * y),
            opacity: m ? 1 : 0
        }, t.duration || 500, t.easing, s)
    }, e.effects.effect.fade = function (t, i) {
        var s = e(this), n = e.effects.setMode(s, t.mode || "toggle");
        s.animate({opacity: n}, {queue: !1, duration: t.duration, easing: t.easing, complete: i})
    }, e.effects.effect.fold = function (t, i) {
        var s, n, a = e(this), o = ["position", "top", "bottom", "left", "right", "height", "width"],
            r = e.effects.setMode(a, t.mode || "hide"), h = "show" === r, l = "hide" === r, u = t.size || 15,
            d = /([0-9]+)%/.exec(u), c = !!t.horizFirst, p = h !== c, f = p ? ["width", "height"] : ["height", "width"],
            m = t.duration / 2, g = {}, v = {};
        e.effects.save(a, o), a.show(), s = e.effects.createWrapper(a).css({overflow: "hidden"}), n = p ? [s.width(), s.height()] : [s.height(), s.width()], d && (u = parseInt(d[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(c ? {
            height: 0,
            width: u
        } : {
            height: u,
            width: 0
        }), g[f[0]] = h ? n[0] : u, v[f[1]] = h ? n[1] : 0, s.animate(g, m, t.easing).animate(v, m, t.easing, function () {
            l && a.hide(), e.effects.restore(a, o), e.effects.removeWrapper(a), i()
        })
    }, e.effects.effect.highlight = function (t, i) {
        var s = e(this), n = ["backgroundImage", "backgroundColor", "opacity"],
            a = e.effects.setMode(s, t.mode || "show"), o = {backgroundColor: s.css("backgroundColor")};
        "hide" === a && (o.opacity = 0), e.effects.save(s, n), s.show().css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(o, {
            queue: !1, duration: t.duration, easing: t.easing, complete: function () {
                "hide" === a && s.hide(), e.effects.restore(s, n), i()
            }
        })
    }, e.effects.effect.size = function (t, i) {
        var s, n, a, o = e(this),
            r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            l = ["width", "height", "overflow"], u = ["fontSize"],
            d = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            c = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            p = e.effects.setMode(o, t.mode || "effect"), f = t.restore || "effect" !== p, m = t.scale || "both",
            g = t.origin || ["middle", "center"], v = o.css("position"), y = f ? r : h,
            b = {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
        "show" === p && o.show(), s = {
            height: o.height(),
            width: o.width(),
            outerHeight: o.outerHeight(),
            outerWidth: o.outerWidth()
        }, "toggle" === t.mode && "show" === p ? (o.from = t.to || b, o.to = t.from || s) : (o.from = t.from || ("show" === p ? b : s), o.to = t.to || ("hide" === p ? b : s)), a = {
            from: {
                y: o.from.height / s.height,
                x: o.from.width / s.width
            }, to: {y: o.to.height / s.height, x: o.to.width / s.width}
        }, ("box" === m || "both" === m) && (a.from.y !== a.to.y && (y = y.concat(d), o.from = e.effects.setTransition(o, d, a.from.y, o.from), o.to = e.effects.setTransition(o, d, a.to.y, o.to)), a.from.x !== a.to.x && (y = y.concat(c), o.from = e.effects.setTransition(o, c, a.from.x, o.from), o.to = e.effects.setTransition(o, c, a.to.x, o.to))), ("content" === m || "both" === m) && a.from.y !== a.to.y && (y = y.concat(u).concat(l), o.from = e.effects.setTransition(o, u, a.from.y, o.from), o.to = e.effects.setTransition(o, u, a.to.y, o.to)), e.effects.save(o, y), o.show(), e.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), g && (n = e.effects.getBaseline(g, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === m || "both" === m) && (d = d.concat(["marginTop", "marginBottom"]).concat(u), c = c.concat(["marginLeft", "marginRight"]), l = r.concat(d).concat(c), o.find("*[width]").each(function () {
            var i = e(this),
                s = {height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth()};
            f && e.effects.save(i, l), i.from = {
                height: s.height * a.from.y,
                width: s.width * a.from.x,
                outerHeight: s.outerHeight * a.from.y,
                outerWidth: s.outerWidth * a.from.x
            }, i.to = {
                height: s.height * a.to.y,
                width: s.width * a.to.x,
                outerHeight: s.height * a.to.y,
                outerWidth: s.width * a.to.x
            }, a.from.y !== a.to.y && (i.from = e.effects.setTransition(i, d, a.from.y, i.from), i.to = e.effects.setTransition(i, d, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = e.effects.setTransition(i, c, a.from.x, i.from), i.to = e.effects.setTransition(i, c, a.to.x, i.to)), i.css(i.from), i.animate(i.to, t.duration, t.easing, function () {
                f && e.effects.restore(i, l)
            })
        })), o.animate(o.to, {
            queue: !1, duration: t.duration, easing: t.easing, complete: function () {
                0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), e.effects.restore(o, y), f || ("static" === v ? o.css({
                    position: "relative",
                    top: o.to.top,
                    left: o.to.left
                }) : e.each(["top", "left"], function (e, t) {
                    o.css(t, function (t, i) {
                        var s = parseInt(i, 10), n = e ? o.to.left : o.to.top;
                        return "auto" === i ? n + "px" : s + n + "px"
                    })
                })), e.effects.removeWrapper(o), i()
            }
        })
    }, e.effects.effect.scale = function (t, i) {
        var s = e(this), n = e.extend(!0, {}, t), a = e.effects.setMode(s, t.mode || "effect"),
            o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === a ? 0 : 100),
            r = t.direction || "both", h = t.origin,
            l = {height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth()},
            u = {y: "horizontal" !== r ? o / 100 : 1, x: "vertical" !== r ? o / 100 : 1};
        n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = t.from || ("show" === a ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : l), n.to = {
            height: l.height * u.y,
            width: l.width * u.x,
            outerHeight: l.outerHeight * u.y,
            outerWidth: l.outerWidth * u.x
        }, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
    }, e.effects.effect.puff = function (t, i) {
        var s = e(this), n = e.effects.setMode(s, t.mode || "hide"), a = "hide" === n,
            o = parseInt(t.percent, 10) || 150, r = o / 100,
            h = {height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth()};
        e.extend(t, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: n,
            complete: i,
            percent: a ? o : 100,
            from: a ? h : {
                height: h.height * r,
                width: h.width * r,
                outerHeight: h.outerHeight * r,
                outerWidth: h.outerWidth * r
            }
        }), s.effect(t)
    }, e.effects.effect.pulsate = function (t, i) {
        var s, n = e(this), a = e.effects.setMode(n, t.mode || "show"), o = "show" === a, r = "hide" === a,
            h = o || "hide" === a, l = 2 * (t.times || 5) + (h ? 1 : 0), u = t.duration / l, d = 0, c = n.queue(),
            p = c.length;
        for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), d = 1), s = 1; l > s; s++) n.animate({opacity: d}, u, t.easing), d = 1 - d;
        n.animate({opacity: d}, u, t.easing), n.queue(function () {
            r && n.hide(), i()
        }), p > 1 && c.splice.apply(c, [1, 0].concat(c.splice(p, l + 1))), n.dequeue()
    }, e.effects.effect.shake = function (t, i) {
        var s, n = e(this), a = ["position", "top", "bottom", "left", "right", "height", "width"],
            o = e.effects.setMode(n, t.mode || "effect"), r = t.direction || "left", h = t.distance || 20,
            l = t.times || 3, u = 2 * l + 1, d = Math.round(t.duration / u),
            c = "up" === r || "down" === r ? "top" : "left", p = "up" === r || "left" === r, f = {}, m = {}, g = {},
            v = n.queue(), y = v.length;
        for (e.effects.save(n, a), n.show(), e.effects.createWrapper(n), f[c] = (p ? "-=" : "+=") + h, m[c] = (p ? "+=" : "-=") + 2 * h, g[c] = (p ? "-=" : "+=") + 2 * h, n.animate(f, d, t.easing), s = 1; l > s; s++) n.animate(m, d, t.easing).animate(g, d, t.easing);
        n.animate(m, d, t.easing).animate(f, d / 2, t.easing).queue(function () {
            "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
        }), y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, u + 1))), n.dequeue()
    }, e.effects.effect.slide = function (t, i) {
        var s, n = e(this), a = ["position", "top", "bottom", "left", "right", "width", "height"],
            o = e.effects.setMode(n, t.mode || "show"), r = "show" === o, h = t.direction || "left",
            l = "up" === h || "down" === h ? "top" : "left", u = "up" === h || "left" === h, d = {};
        e.effects.save(n, a), n.show(), s = t.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(n).css({overflow: "hidden"}), r && n.css(l, u ? isNaN(s) ? "-" + s : -s : s), d[l] = (r ? u ? "+=" : "-=" : u ? "-=" : "+=") + s, n.animate(d, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function () {
                "hide" === o && n.hide(), e.effects.restore(n, a), e.effects.removeWrapper(n), i()
            }
        })
    }, e.effects.effect.transfer = function (t, i) {
        var s = e(this), n = e(t.to), a = "fixed" === n.css("position"), o = e("body"), r = a ? o.scrollTop() : 0,
            h = a ? o.scrollLeft() : 0, l = n.offset(),
            u = {top: l.top - r, left: l.left - h, height: n.innerHeight(), width: n.innerWidth()}, d = s.offset(),
            c = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
                top: d.top - r,
                left: d.left - h,
                height: s.innerHeight(),
                width: s.innerWidth(),
                position: a ? "fixed" : "absolute"
            }).animate(u, t.duration, t.easing, function () {
                c.remove(), i()
            })
    }, e.widget("ui.progressbar", {
        version: "1.11.4", options: {max: 100, value: 0, change: null, complete: null}, min: 0, _create: function () {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        }, _destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        }, value: function (e) {
            return void 0 === e ? this.options.value : (this.options.value = this._constrainedValue(e), this._refreshValue(), void 0)
        }, _constrainedValue: function (e) {
            return void 0 === e && (e = this.options.value), this.indeterminate = e === !1, "number" != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e))
        }, _setOptions: function (e) {
            var t = e.value;
            delete e.value, this._super(e), this.options.value = this._constrainedValue(t), this._refreshValue()
        }, _setOption: function (e, t) {
            "max" === e && (t = Math.max(this.min, t)), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this._super(e, t)
        }, _percentage: function () {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        }, _refreshValue: function () {
            var t = this.options.value, i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
        }
    }), e.widget("ui.selectable", e.ui.mouse, {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function () {
            var t, i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function () {
                    var t = e(this), i = t.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function (t) {
            var i = this, s = this.options;
            this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({
                left: t.pageX,
                top: t.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var s = e.data(this, "selectable-item");
                s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, {unselecting: s.element}))
            }), e(t.target).parents().addBack().each(function () {
                var s, n = e.data(this, "selectable-item");
                return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, {selecting: n.element}) : i._trigger("unselecting", t, {unselecting: n.element}), !1) : void 0
            }))
        },
        _mouseDrag: function (t) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this, n = this.options, a = this.opos[0], o = this.opos[1], r = t.pageX, h = t.pageY;
                return a > r && (i = r, r = a, a = i), o > h && (i = h, h = o, o = i), this.helper.css({
                    left: a,
                    top: o,
                    width: r - a,
                    height: h - o
                }), this.selectees.each(function () {
                    var i = e.data(this, "selectable-item"), l = !1;
                    i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || a > i.right || i.top > h || o > i.bottom) : "fit" === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, {selecting: i.element}))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, {unselecting: i.element}))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, {unselecting: i.element})))))
                }), !1
            }
        },
        _mouseStop: function (t) {
            var i = this;
            return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function () {
                var s = e.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, {unselected: s.element})
            }), e(".ui-selecting", this.element[0]).each(function () {
                var s = e.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, {selected: s.element})
            }), this._trigger("stop", t), this.helper.remove(), !1
        }
    }), e.widget("ui.selectmenu", {
        version: "1.11.4",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            disabled: null,
            icons: {button: "ui-icon-triangle-1-s"},
            position: {my: "left top", at: "left bottom", collision: "none"},
            width: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function () {
            var e = this.element.uniqueId().attr("id");
            this.ids = {
                element: e,
                button: e + "-button",
                menu: e + "-menu"
            }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
        },
        _drawButton: function () {
            var t = this;
            this.label = e("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
                click: function (e) {
                    this.button.focus(), e.preventDefault()
                }
            }), this.element.hide(), this.button = e("<span>", {
                "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true"
            }).insertAfter(this.element), e("<span>", {"class": "ui-icon " + this.options.icons.button}).prependTo(this.button), this.buttonText = e("<span>", {"class": "ui-selectmenu-text"}).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
                t.menuItems || t._refreshMenu()
            }), this._hoverable(this.button), this._focusable(this.button)
        },
        _drawMenu: function () {
            var t = this;
            this.menu = e("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = e("<div>", {"class": "ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                role: "listbox",
                select: function (e, i) {
                    e.preventDefault(), t._setSelection(), t._select(i.item.data("ui-selectmenu-item"), e)
                },
                focus: function (e, i) {
                    var s = i.item.data("ui-selectmenu-item");
                    null != t.focusIndex && s.index !== t.focusIndex && (t._trigger("focus", e, {item: s}), t.isOpen || t._select(s, e)), t.focusIndex = s.index, t.button.attr("aria-activedescendant", t.menuItems.eq(s.index).attr("id"))
                }
            }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
                return !1
            }, this.menuInstance._isDivider = function () {
                return !1
            }
        },
        refresh: function () {
            this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
        },
        _refreshMenu: function () {
            this.menu.empty();
            var e, t = this.element.find("option");
            t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), e = this._getSelectedItem(), this.menuInstance.focus(null, e), this._setAria(e.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function (e) {
            this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", e))
        },
        _position: function () {
            this.menuWrap.position(e.extend({of: this.button}, this.options.position))
        },
        close: function (e) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", e))
        },
        widget: function () {
            return this.button
        },
        menuWidget: function () {
            return this.menu
        },
        _renderMenu: function (t, i) {
            var s = this, n = "";
            e.each(i, function (i, a) {
                a.optgroup !== n && (e("<li>", {
                    "class": "ui-selectmenu-optgroup ui-menu-divider" + (a.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                    text: a.optgroup
                }).appendTo(t), n = a.optgroup), s._renderItemData(t, a)
            })
        },
        _renderItemData: function (e, t) {
            return this._renderItem(e, t).data("ui-selectmenu-item", t)
        },
        _renderItem: function (t, i) {
            var s = e("<li>");
            return i.disabled && s.addClass("ui-state-disabled"), this._setText(s, i.label), s.appendTo(t)
        },
        _setText: function (e, t) {
            t ? e.text(t) : e.html("&#160;")
        },
        _move: function (e, t) {
            var i, s, n = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), n += ":not(.ui-state-disabled)"), s = "first" === e || "last" === e ? i["first" === e ? "prevAll" : "nextAll"](n).eq(-1) : i[e + "All"](n).eq(0), s.length && this.menuInstance.focus(t, s)
        },
        _getSelectedItem: function () {
            return this.menuItems.eq(this.element[0].selectedIndex)
        },
        _toggle: function (e) {
            this[this.isOpen ? "close" : "open"](e)
        },
        _setSelection: function () {
            var e;
            this.range && (window.getSelection ? (e = window.getSelection(), e.removeAllRanges(), e.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: {
            mousedown: function (t) {
                this.isOpen && (e(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t))
            }
        },
        _buttonEvents: {
            mousedown: function () {
                var e;
                window.getSelection ? (e = window.getSelection(), e.rangeCount && (this.range = e.getRangeAt(0))) : this.range = document.selection.createRange()
            }, click: function (e) {
                this._setSelection(), this._toggle(e)
            }, keydown: function (t) {
                var i = !0;
                switch (t.keyCode) {
                    case e.ui.keyCode.TAB:
                    case e.ui.keyCode.ESCAPE:
                        this.close(t), i = !1;
                        break;
                    case e.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(t);
                        break;
                    case e.ui.keyCode.UP:
                        t.altKey ? this._toggle(t) : this._move("prev", t);
                        break;
                    case e.ui.keyCode.DOWN:
                        t.altKey ? this._toggle(t) : this._move("next", t);
                        break;
                    case e.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                        break;
                    case e.ui.keyCode.LEFT:
                        this._move("prev", t);
                        break;
                    case e.ui.keyCode.RIGHT:
                        this._move("next", t);
                        break;
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.PAGE_UP:
                        this._move("first", t);
                        break;
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_DOWN:
                        this._move("last", t);
                        break;
                    default:
                        this.menu.trigger(t), i = !1
                }
                i && t.preventDefault()
            }
        },
        _selectFocusedItem: function (e) {
            var t = this.menuItems.eq(this.focusIndex);
            t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), e)
        },
        _select: function (e, t) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = e.index, this._setText(this.buttonText, e.label), this._setAria(e), this._trigger("select", t, {item: e}), e.index !== i && this._trigger("change", t, {item: e}), this.close(t)
        },
        _setAria: function (e) {
            var t = this.menuItems.eq(e.index).attr("id");
            this.button.attr({
                "aria-labelledby": t,
                "aria-activedescendant": t
            }), this.menu.attr("aria-activedescendant", t)
        },
        _setOption: function (e, t) {
            "icons" === e && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button), this._super(e, t), "appendTo" === e && this.menuWrap.appendTo(this._appendTo()), "disabled" === e && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === e && this._resizeButton()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _toggleAttr: function () {
            this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function () {
            var e = this.options.width;
            e || (e = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(e)
        },
        _resizeMenu: function () {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function () {
            return {disabled: this.element.prop("disabled")}
        },
        _parseOptions: function (t) {
            var i = [];
            t.each(function (t, s) {
                var n = e(s), a = n.parent("optgroup");
                i.push({
                    element: n,
                    index: t,
                    value: n.val(),
                    label: n.text(),
                    optgroup: a.attr("label") || "",
                    disabled: a.prop("disabled") || n.prop("disabled")
                })
            }), this.items = i
        },
        _destroy: function () {
            this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
        }
    }), e.widget("ui.slider", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var t, i, s = this.options,
                n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>", o = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) o.push(a);
            this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (t) {
                e(this).data("ui-slider-handle-index", t)
            })
        },
        _createRange: function () {
            var t = this.options, i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function () {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function () {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var i, s, n, a, o, r, h, l, u = this, d = this.options;
            return d.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: t.pageX,
                y: t.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                var i = Math.abs(s - u.values(t));
                (n > i || n === i && (t === u._lastChangedValue || u.values(t) === d.min)) && (n = i, a = e(this), o = t)
            }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - h.left - a.width() / 2,
                top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (e) {
            var t = {x: e.pageX, y: e.pageY}, i = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, i), !1
        },
        _mouseStop: function (e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (e) {
            var t, i, s, n, a;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
        },
        _start: function (e, t) {
            var i = {handle: this.handles[t], value: this.value()};
            return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i)
        },
        _slide: function (e, t, i) {
            var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i,
                values: n
            }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, {
                handle: this.handles[t],
                value: i
            }), a !== !1 && this.value(i))
        },
        _stop: function (e, t) {
            var i = {handle: this.handles[t], value: this.value()};
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i)
        },
        _change: function (e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {handle: this.handles[t], value: this.value()};
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i)
            }
        },
        value: function (e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function (t, i) {
            var s, n, a;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0;
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
            this._refreshValue()
        },
        _setOption: function (t, i) {
            var s, n = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
                case"orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case"value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case"values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case"step":
                case"min":
                case"max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case"range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function () {
            var e = this.options.value;
            return e = this._trimAlignValue(e)
        },
        _values: function (e) {
            var t, i, s;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function (e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1, i = (e - this._valueMin()) % t, s = e - i;
            return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function () {
            var e = this.options.max, t = this._valueMin(), i = this.options.step,
                s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
            e = s + t, this.max = parseFloat(e.toFixed(this._precision()))
        },
        _precision: function () {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
        },
        _precisionOf: function (e) {
            var t = "" + e, i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.max
        },
        _refreshValue: function () {
            var t, i, s, n, a, o = this.options.range, r = this.options, h = this,
                l = this._animateOff ? !1 : r.animate, u = {};
            this.options.values && this.options.values.length ? this.handles.each(function (s) {
                i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({left: i + "%"}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({width: i - t + "%"}, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({bottom: i + "%"}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({height: i - t + "%"}, {
                    queue: !1,
                    duration: r.animate
                }))), t = i
            }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({width: i + "%"}, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({width: 100 - i + "%"}, {
                queue: !1,
                duration: r.animate
            }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({height: i + "%"}, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({height: 100 - i + "%"}, {
                queue: !1,
                duration: r.animate
            }))
        },
        _handleEvents: {
            keydown: function (t) {
                var i, s, n, a, o = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return
                }
                switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
                    case e.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case e.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case e.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (s === this._valueMax()) return;
                        n = this._trimAlignValue(s + a);
                        break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (s === this._valueMin()) return;
                        n = this._trimAlignValue(s - a)
                }
                this._slide(t, o, n)
            }, keyup: function (t) {
                var i = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active"))
            }
        }
    }), e.widget("ui.sortable", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function (e, t, i) {
            return e >= t && t + i > e
        },
        _isFloating: function (e) {
            return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"))
        },
        _create: function () {
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function (e, t) {
            this._super(e, t), "handle" === e && this._setHandleClassName()
        },
        _setHandleClassName: function () {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function () {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
            })
        },
        _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function (t, i) {
            var s = null, n = !1, a = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), e(t.target).parents().each(function () {
                return e.data(this, a.widgetName + "-item") === a ? (s = e(this), !1) : void 0
            }), e.data(t.target, a.widgetName + "-item") === a && (s = e(t.target)), s ? !this.options.handle || i || (e(this.options.handle, s).find("*").addBack().each(function () {
                this === t.target && (n = !0)
            }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function (t, i, s) {
            var n, a, o = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top},
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = e("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function (t) {
            var i, s, n, a, o = this.options, r = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !e.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !e.contains(this.element[0], n) : !0)) {
                if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                this._rearrange(t, s), this._trigger("change", t, this._uiHash());
                break
            }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (t, i) {
            if (t) {
                if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                    var s = this, n = this.placeholder.offset(), a = this.options.axis, o = {};
                    a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
                        s._clear(t)
                    })
                } else this._clear(t, i);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp({target: null}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (t) {
            var i = this._getItemsAsjQuery(t && t.connected), s = [];
            return t = t || {}, e(i).each(function () {
                var i = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                i && s.push((t.key || i[1] + "[]") + "=" + (t.key && t.expression ? i[1] : i[2]))
            }), !s.length && t.key && s.push(t.key + "="), s.join("&")
        },
        toArray: function (t) {
            var i = this._getItemsAsjQuery(t && t.connected), s = [];
            return t = t || {}, i.each(function () {
                s.push(e(t.item || this).attr(t.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function (e) {
            var t = this.positionAbs.left, i = t + this.helperProportions.width, s = this.positionAbs.top,
                n = s + this.helperProportions.height, a = e.left, o = a + e.width, r = e.top, h = r + e.height,
                l = this.offset.click.top, u = this.offset.click.left,
                d = "x" === this.options.axis || s + l > r && h > s + l,
                c = "y" === this.options.axis || t + u > a && o > t + u, p = d && c;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? p : t + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function (e) {
            var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height),
                i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width),
                s = t && i, n = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection();
            return s ? this.floating ? a && "right" === a || "down" === n ? 2 : 1 : n && ("down" === n ? 2 : 1) : !1
        },
        _intersectsWithSides: function (e) {
            var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
                s = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && t || "up" === s && !t)
        },
        _getDragVerticalDirection: function () {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== e && (e > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== e && (e > 0 ? "right" : "left")
        },
        refresh: function (e) {
            return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function () {
            var e = this.options;
            return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith
        },
        _getItemsAsjQuery: function (t) {
            function i() {
                r.push(this)
            }

            var s, n, a, o, r = [], h = [], l = this._connectWith();
            if (l && t) for (s = l.length - 1; s >= 0; s--) for (a = e(l[s], this.document[0]), n = a.length - 1; n >= 0; n--) o = e.data(a[n], this.widgetFullName), o && o !== this && !o.options.disabled && h.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
            for (h.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
            return e(r)
        },
        _removeCurrentsFromItems: function () {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, function (e) {
                for (var i = 0; t.length > i; i++) if (t[i] === e.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (t) {
            this.items = [], this.containers = [this];
            var i, s, n, a, o, r, h, l, u = this.items,
                d = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {item: this.currentItem}) : e(this.options.items, this.element), this]],
                c = this._connectWith();
            if (c && this.ready) for (i = c.length - 1; i >= 0; i--) for (n = e(c[i], this.document[0]), s = n.length - 1; s >= 0; s--) a = e.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (d.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {item: this.currentItem}) : e(a.options.items, a.element), a]), this.containers.push(a));
            for (i = d.length - 1; i >= 0; i--) for (o = d[i][1], r = d[i][0], s = 0, l = r.length; l > s; s++) h = e(r[s]), h.data(this.widgetName + "-item", o), u.push({
                item: h,
                instance: o,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function (t) {
            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, a;
            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item, t || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function (t) {
            t = t || this;
            var i, s = t.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function () {
                    var s = t.currentItem[0].nodeName.toLowerCase(),
                        n = e("<" + s + ">", t.document[0]).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tbody" === s ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(n)) : "tr" === s ? t._createTrPlaceholder(t.currentItem, n) : "img" === s && n.attr("src", t.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                }, update: function (e, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                }
            }), t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), s.placeholder.update(t, t.placeholder)
        },
        _createTrPlaceholder: function (t, i) {
            var s = this;
            t.children().each(function () {
                e("<td>&#160;</td>", s.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(i)
            })
        },
        _contactContainers: function (t) {
            var i, s, n, a, o, r, h, l, u, d, c = null, p = null;
            for (i = this.containers.length - 1; i >= 0; i--) if (!e.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                if (c && e.contains(this.containers[i].element[0], c.element[0])) continue;
                c = this.containers[i], p = i
            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", t, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (c) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1); else {
                for (n = 1e4, a = null, u = c.floating || this._isFloating(this.currentItem), o = u ? "left" : "top", r = u ? "width" : "height", d = u ? "clientX" : "clientY", s = this.items.length - 1; s >= 0; s--) e.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (h = this.items[s].item.offset()[o], l = !1, t[d] - h > this.items[s][r] / 2 && (l = !0), n > Math.abs(t[d] - h) && (n = Math.abs(t[d] - h), a = this.items[s], this.direction = l ? "up" : "down"));
                if (!a && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[p]) return this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
                a ? this._rearrange(t, a, null, !0) : this._rearrange(t, null, this.containers[p].element, !0), this._trigger("change", t, this._uiHash()), this.containers[p]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", t, this._uiHash(this)), this.containers[p].containerCache.over = 1
            }
        },
        _createHelper: function (t) {
            var i = this.options,
                s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || e("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var t, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (t = e(n.containment)[0], i = e(n.containment).offset(), s = "hidden" !== e(t).css("overflow"), this.containment = [i.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (t, i) {
            i || (i = this.position);
            var s = "absolute" === t ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                a = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function (t) {
            var i, s, n = this.options, a = t.pageX, o = t.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function (e, t, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function () {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function (e, t) {
            function i(e, t, i) {
                return function (s) {
                    i._trigger(e, s, t._uiHash(t))
                }
            }

            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS) ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !t && n.push(function (e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || n.push(function (e) {
                this._trigger("update", e, this._uiHash())
            }), this !== this.currentContainer && (t || (n.push(function (e) {
                this._trigger("remove", e, this._uiHash())
            }), n.push(function (e) {
                return function (t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), n.push(function (e) {
                return function (t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) t || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                for (s = 0; n.length > s; s++) n[s].call(this, e);
                this._trigger("stop", e, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function () {
            e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (t) {
            var i = t || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || e([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: t ? t.element : null
            }
        }
    }), e.widget("ui.spinner", {
        version: "1.11.4",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var t = {}, i = this.element;
            return e.each(["min", "max", "step"], function (e, s) {
                var n = i.attr(s);
                void 0 !== n && n.length && (t[s] = n)
            }), t
        },
        _events: {
            keydown: function (e) {
                this._start(e) && this._keydown(e) && e.preventDefault()
            }, keyup: "_stop", focus: function () {
                this.previous = this.element.val()
            }, blur: function (e) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", e), void 0)
            }, mousewheel: function (e, t) {
                if (t) {
                    if (!this.spinning && !this._start(e)) return !1;
                    this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(e)
                    }, 100), e.preventDefault()
                }
            }, "mousedown .ui-spinner-button": function (t) {
                function i() {
                    var e = this.element[0] === this.document[0].activeElement;
                    e || (this.element.focus(), this.previous = s, this._delay(function () {
                        this.previous = s
                    }))
                }

                var s;
                s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
                    delete this.cancelBlur, i.call(this)
                }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (t) {
                return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : (this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0
            }, "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function () {
            var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
        },
        _keydown: function (t) {
            var i = this.options, s = e.ui.keyCode;
            switch (t.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, t), !0;
                case s.DOWN:
                    return this._repeat(null, -1, t), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, t), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, t), !0
            }
            return !1
        },
        _uiSpinnerHtml: function () {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function () {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
        },
        _start: function (e) {
            return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function (e, t, i) {
            e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                this._repeat(40, t, i)
            }, e), this._spin(t * this.options.step, i)
        },
        _spin: function (e, t) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, {value: i}) === !1 || (this._value(i), this.counter++)
        },
        _increment: function (t) {
            var i = this.options.incremental;
            return i ? e.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function () {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e
        },
        _precisionOf: function (e) {
            var t = "" + e, i = t.indexOf(".");
            return -1 === i ? 0 : t.length - i - 1
        },
        _adjustValue: function (e) {
            var t, i, s = this.options;
            return t = null !== s.min ? s.min : 0, i = e - t, i = Math.round(i / s.step) * s.step, e = t + i, e = parseFloat(e.toFixed(this._precision())), null !== s.max && e > s.max ? s.max : null !== s.min && s.min > e ? s.min : e
        },
        _stop: function (e) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e))
        },
        _setOption: function (e, t) {
            if ("culture" === e || "numberFormat" === e) {
                var i = this._parse(this.element.val());
                return this.options[e] = t, this.element.val(this._format(i)), void 0
            }
            ("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), "icons" === e && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)), this._super(e, t), "disabled" === e && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable"))
        },
        _setOptions: h(function (e) {
            this._super(e)
        }),
        _parse: function (e) {
            return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e
        },
        _format: function (e) {
            return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function () {
            var e = this.value();
            return null === e ? !1 : e === this._adjustValue(e)
        },
        _value: function (e, t) {
            var i;
            "" !== e && (i = this._parse(e), null !== i && (t || (i = this._adjustValue(i)), e = this._format(i))), this.element.val(e), this._refresh()
        },
        _destroy: function () {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: h(function (e) {
            this._stepUp(e)
        }),
        _stepUp: function (e) {
            this._start() && (this._spin((e || 1) * this.options.step), this._stop())
        },
        stepDown: h(function (e) {
            this._stepDown(e)
        }),
        _stepDown: function (e) {
            this._start() && (this._spin((e || 1) * -this.options.step), this._stop())
        },
        pageUp: h(function (e) {
            this._stepUp((e || 1) * this.options.page)
        }),
        pageDown: h(function (e) {
            this._stepDown((e || 1) * this.options.page)
        }),
        value: function (e) {
            return arguments.length ? (h(this._value).call(this, e), void 0) : this._parse(this.element.val())
        },
        widget: function () {
            return this.uiSpinner
        }
    }), e.widget("ui.tabs", {
        version: "1.11.4",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function () {
            var e = /#.*$/;
            return function (t) {
                var i, s;
                t = t.cloneNode(!1), i = t.href.replace(e, ""), s = location.href.replace(e, "");
                try {
                    i = decodeURIComponent(i)
                } catch (n) {
                }
                try {
                    s = decodeURIComponent(s)
                } catch (n) {
                }
                return t.hash.length > 1 && i === s
            }
        }(),
        _create: function () {
            var t = this, i = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
                return t.tabs.index(e)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function () {
            var t = this.options.active, i = this.options.collapsible, s = location.hash.substring(1);
            return null === t && (s && this.tabs.each(function (i, n) {
                return e(n).attr("aria-controls") === s ? (t = i, !1) : void 0
            }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t
        },
        _getCreateEventData: function () {
            return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : e()}
        },
        _tabKeydown: function (t) {
            var i = e(this.document[0].activeElement).closest("li"), s = this.tabs.index(i), n = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                        s++;
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.LEFT:
                        n = !1, s--;
                        break;
                    case e.ui.keyCode.END:
                        s = this.anchors.length - 1;
                        break;
                    case e.ui.keyCode.HOME:
                        s = 0;
                        break;
                    case e.ui.keyCode.SPACE:
                        return t.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;
                    case e.ui.keyCode.ENTER:
                        return t.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;
                    default:
                        return
                }
                t.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), t.ctrlKey || t.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", s)
                }, this.delay))
            }
        },
        _panelKeydown: function (t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
        },
        _handlePageNav: function (t) {
            return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function (t, i) {
            function s() {
                return t > n && (t = 0), 0 > t && (t = n), t
            }

            for (var n = this.tabs.length - 1; -1 !== e.inArray(s(), this.options.disabled);) t = i ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function (e, t) {
            return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e
        },
        _setOption: function (e, t) {
            return "active" === e ? (this._activate(t), void 0) : "disabled" === e ? (this._setupDisabled(t), void 0) : (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), "heightStyle" === e && this._setupHeightStyle(t), void 0)
        },
        _sanitizeSelector: function (e) {
            return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var t = this.options, i = this.tablist.children(":has(a[href])");
            t.disabled = e.map(i.filter(".ui-state-disabled"), function (e) {
                return i.index(e)
            }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
        },
        _refresh: function () {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden": "true"}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({"aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var t = this, i = this.tabs, s = this.anchors, n = this.panels;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (t) {
                e(this).is(".ui-state-disabled") && t.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                e(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function () {
                return e("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = e(), this.anchors.each(function (i, s) {
                var n, a, o, r = e(s).uniqueId().attr("id"), h = e(s).closest("li"), l = h.attr("aria-controls");
                t._isLocal(s) ? (n = s.hash, o = n.substring(1), a = t.element.find(t._sanitizeSelector(n))) : (o = h.attr("aria-controls") || e({}).uniqueId()[0].id, n = "#" + o, a = t.element.find(n), a.length || (a = t._createPanel(o), a.insertAfter(t.panels[i - 1] || t.tablist)), a.attr("aria-live", "polite")), a.length && (t.panels = t.panels.add(a)), l && h.data("ui-tabs-aria-controls", l), h.attr({
                    "aria-controls": o,
                    "aria-labelledby": r
                }), a.attr("aria-labelledby", r)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
        },
        _getList: function () {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function (t) {
            return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function (t) {
            e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
            for (var i, s = 0; i = this.tabs[s]; s++) t === !0 || -1 !== e.inArray(s, t) ? e(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = t
        },
        _setupEvents: function (t) {
            var i = {};
            t && e.each(t.split(" "), function (e, t) {
                i[t] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function (e) {
                    e.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (t) {
            var i, s = this.element.parent();
            "fill" === t ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var t = e(this), s = t.css("position");
                "absolute" !== s && "fixed" !== s && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                i -= e(this).outerHeight(!0)
            }), this.panels.each(function () {
                e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
                i = Math.max(i, e(this).height("").height())
            }).height(i))
        },
        _eventHandler: function (t) {
            var i = this.options, s = this.active, n = e(t.currentTarget), a = n.closest("li"), o = a[0] === s[0],
                r = o && i.collapsible, h = r ? e() : this._getPanelForTab(a),
                l = s.length ? this._getPanelForTab(s) : e(),
                u = {oldTab: s, oldPanel: l, newTab: r ? e() : a, newPanel: h};
            t.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", t, u) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? e() : a, this.xhr && this.xhr.abort(), l.length || h.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), t), this._toggle(t, u))
        },
        _toggle: function (t, i) {
            function s() {
                a.running = !1, a._trigger("activate", t, i)
            }

            function n() {
                i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
            }

            var a = this, o = i.newPanel, r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
                i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
            }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
                return 0 === e(this).attr("tabIndex")
            }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function (t) {
            var i, s = this._findActive(t);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: e.noop
            }))
        },
        _findActive: function (t) {
            return t === !1 ? e() : this.tabs.eq(t)
        },
        _getIndex: function (e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function () {
                e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function () {
                var t = e(this), i = t.data("ui-tabs-aria-controls");
                i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function (t) {
            var i = this.options.disabled;
            i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = e.isArray(i) ? e.map(i, function (e) {
                return e !== t ? e : null
            }) : e.map(this.tabs, function (e, i) {
                return i !== t ? i : null
            })), this._setupDisabled(i))
        },
        disable: function (t) {
            var i = this.options.disabled;
            if (i !== !0) {
                if (void 0 === t) i = !0; else {
                    if (t = this._getIndex(t), -1 !== e.inArray(t, i)) return;
                    i = e.isArray(i) ? e.merge([t], i).sort() : [t]
                }
                this._setupDisabled(i)
            }
        },
        load: function (t, i) {
            t = this._getIndex(t);
            var s = this, n = this.tabs.eq(t), a = n.find(".ui-tabs-anchor"), o = this._getPanelForTab(n),
                r = {tab: n, panel: o}, h = function (e, t) {
                    "abort" === t && s.panels.stop(!1, !0), n.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), e === s.xhr && delete s.xhr
                };
            this._isLocal(a[0]) || (this.xhr = e.ajax(this._ajaxSettings(a, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (n.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function (e, t, n) {
                setTimeout(function () {
                    o.html(e), s._trigger("load", i, r), h(n, t)
                }, 1)
            }).fail(function (e, t) {
                setTimeout(function () {
                    h(e, t)
                }, 1)
            })))
        },
        _ajaxSettings: function (t, i, s) {
            var n = this;
            return {
                url: t.attr("href"), beforeSend: function (t, a) {
                    return n._trigger("beforeLoad", i, e.extend({jqXHR: t, ajaxSettings: a}, s))
                }
            }
        },
        _getPanelForTab: function (t) {
            var i = e(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    }), e.widget("ui.tooltip", {
        version: "1.11.4", options: {
            content: function () {
                var t = e(this).attr("title") || "";
                return e("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        }, _addDescribedBy: function (t, i) {
            var s = (t.attr("aria-describedby") || "").split(/\s+/);
            s.push(i), t.data("ui-tooltip-id", i).attr("aria-describedby", e.trim(s.join(" ")))
        }, _removeDescribedBy: function (t) {
            var i = t.data("ui-tooltip-id"), s = (t.attr("aria-describedby") || "").split(/\s+/), n = e.inArray(i, s);
            -1 !== n && s.splice(n, 1), t.removeData("ui-tooltip-id"), s = e.trim(s.join(" ")), s ? t.attr("aria-describedby", s) : t.removeAttr("aria-describedby")
        }, _create: function () {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = e("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
        }, _setOption: function (t, i) {
            var s = this;
            return "disabled" === t ? (this[i ? "_disable" : "_enable"](), this.options[t] = i, void 0) : (this._super(t, i), "content" === t && e.each(this.tooltips, function (e, t) {
                s._updateContent(t.element)
            }), void 0)
        }, _disable: function () {
            var t = this;
            e.each(this.tooltips, function (i, s) {
                var n = e.Event("blur");
                n.target = n.currentTarget = s.element[0], t.close(n, !0)
            }), this.element.find(this.options.items).addBack().each(function () {
                var t = e(this);
                t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
            })
        }, _enable: function () {
            this.element.find(this.options.items).addBack().each(function () {
                var t = e(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            })
        }, open: function (t) {
            var i = this, s = e(t ? t.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), t && "mouseover" === t.type && s.parents().each(function () {
                var t, s = e(this);
                s.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                }, s.attr("title", ""))
            }), this._registerCloseHandlers(t, s), this._updateContent(s, t))
        }, _updateContent: function (e, t) {
            var i, s = this.options.content, n = this, a = t ? t.type : null;
            return "string" == typeof s ? this._open(t, e, s) : (i = s.call(e[0], function (i) {
                n._delay(function () {
                    e.data("ui-tooltip-open") && (t && (t.type = a), this._open(t, e, i))
                })
            }), i && this._open(t, e, i), void 0)
        }, _open: function (t, i, s) {
            function n(e) {
                l.of = e, o.is(":hidden") || o.position(l)
            }

            var a, o, r, h, l = e.extend({}, this.options.position);
            if (s) {
                if (a = this._find(i)) return a.tooltip.find(".ui-tooltip-content").html(s), void 0;
                i.is("[title]") && (t && "mouseover" === t.type ? i.attr("title", "") : i.removeAttr("title")), a = this._tooltip(i), o = a.tooltip, this._addDescribedBy(i, o.attr("id")), o.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), s.clone ? (h = s.clone(), h.removeAttr("id").find("[id]").removeAttr("id")) : h = s, e("<div>").html(h).appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {mousemove: n}), n(t)) : o.position(e.extend({of: i}, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
                    o.is(":visible") && (n(l.of), clearInterval(r))
                }, e.fx.interval)), this._trigger("open", t, {tooltip: o})
            }
        }, _registerCloseHandlers: function (t, i) {
            var s = {
                keyup: function (t) {
                    if (t.keyCode === e.ui.keyCode.ESCAPE) {
                        var s = e.Event(t);
                        s.currentTarget = i[0], this.close(s, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (s.remove = function () {
                this._removeTooltip(this._find(i).tooltip)
            }), t && "mouseover" !== t.type || (s.mouseleave = "close"), t && "focusin" !== t.type || (s.focusout = "close"), this._on(!0, i, s)
        }, close: function (t) {
            var i, s = this, n = e(t ? t.currentTarget : this.element), a = this._find(n);
            return a ? (i = a.tooltip, a.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), a.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
                s._removeTooltip(e(this))
            }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function (t, i) {
                e(i.element).attr("title", i.title), delete s.parents[t]
            }), a.closing = !0, this._trigger("close", t, {tooltip: i}), a.hiding || (a.closing = !1)), void 0) : (n.removeData("ui-tooltip-open"), void 0)
        }, _tooltip: function (t) {
            var i = e("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                s = i.uniqueId().attr("id");
            return e("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[s] = {
                element: t,
                tooltip: i
            }
        }, _find: function (e) {
            var t = e.data("ui-tooltip-id");
            return t ? this.tooltips[t] : null
        }, _removeTooltip: function (e) {
            e.remove(), delete this.tooltips[e.attr("id")]
        }, _destroy: function () {
            var t = this;
            e.each(this.tooltips, function (i, s) {
                var n = e.Event("blur"), a = s.element;
                n.target = n.currentTarget = a[0], t.close(n, !0), e("#" + i).remove(), a.data("ui-tooltip-title") && (a.attr("title") || a.attr("title", a.data("ui-tooltip-title")), a.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    })
});// for commit on the prod - decomment lines 374-380 & 350
$(document).ready(function () {
    append_extra_css();
    list_entry_hover();
    bind_submit_debounce();
    set_default_flash_wmode();
    ask_anonymous();
    init_group_membership_requests_behavior();
    $('#autoclick').click();   // auto click for showing login/join modal window
    init_group_edit_behavior();
    init_group_edit_forum_behavior();
    init_group_edit_antispam_behavior();
    init_group_subscriptions_behavior();
    init_topic_edit_behavior();
    init_comment_behavior();
    init_upload_file_page_behavior();
    $("#id_text.feedback_text-spam").DefaultValue("п÷п╬я┤п╣п╪я┐ п╡я▀ я│я┤п╦я┌п╟п╣я┌п╣ я█я┌п╬ я│п©п╟п╪п╬п╪?");
    $("#id_email.members_invite_emails").DefaultValue("п╣я│п╩п╦ п╫п╣я│п╨п╬п╩я▄п╨п╬, я┌п╬ я┤п╣я─п╣п╥ п╥п╟п©я▐я┌я┐я▌");
    $('.nonregisteredpart #id_email').DefaultValue('@');
    $('#groupsearchq').DefaultValue('п÷п╬п╦я│п╨ п©п╬ пЁя─я┐п©п©п╣');
    checkboxActive();
});


/* add class Active for checked checkboxes on the edit/members/ page */
function checkboxActive() {
    $('.group-adminPage_members .chk').find('input[type=checkbox][id$="is_banned"]:checked').closest('.chk').addClass('active');
}

function show_confirm_form(msg, ok_btn, cancel_btn) {
    var confirm_form = $('#confirm_form');
    var ok_btn_obj = $('#confirm_form_ok', confirm_form);
    var cancel_btn_obj = $('#confirm_form_cancel', confirm_form);

    if (confirm_form.length) {
        $('#confirm_form_text', confirm_form).html(msg);

        $('.subscriberu_popup').hide();
        $.blockUI({message: confirm_form});

        if (ok_btn.show) {
            ok_btn_obj
                .unbind('click')
                .click($.unblockUI)
                .click(ok_btn.callback);
            if (ok_btn.text) {
                ok_btn_obj.val(ok_btn.text);
            }
        } else {
            ok_btn_obj.hide();
        }

        if (cancel_btn.show) {
            cancel_btn_obj
                .unbind('click')
                .click($.unblockUI)
                .click(cancel_btn.callback);
            if (cancel_btn.text) {
                cancel_btn_obj.val(cancel_btn.text);
            }
        } else {
            cancel_btn_obj.hide();
        }

        $('.blockOverlay')
            .attr('title', uimsg['unblock'])
            .unbind('click')
            .click($.unblockUI)
            .click(cancel_btn.callback);
        $('.fx', confirm_form)
            .unbind('click')
            .click($.unblockUI)
            .click(cancel_btn.callback);
    }
    return false;
}

function show_alert(msg) {
    var confirm_form = $('#confirm_form');
    if (confirm_form.length) {
        $('#confirm_form_text', confirm_form).html(msg);
        $('.subscriberu_popup').hide();
        $.blockUI({message: confirm_form});
        $('#confirm_form_cancel', confirm_form).hide();
        $('#confirm_form_ok', confirm_form)
            .unbind('click')
            .click($.unblockUI)
            .val('Ok');
        $('.fx', confirm_form)
            .unbind('click')
            .click($.unblockUI);
        $('.blockOverlay').attr('title', uimsg['unblock'])
            .unbind('click')
            .click($.unblockUI);
    }
    return false;
}

jQuery.fn.DefaultValue = function (text) {
    text = text + ' ';
    return this.each(function () {
        var fld_current = $(this);

        function set_text() {
            fld_current.val(text);
            fld_current.addClass('empty');
        }

        function remove_text() {
            fld_current.val('');
            fld_current.removeClass('empty');
        }

        if (fld_current.val() == text || fld_current.val() == '') {
            set_text();
        } else {
            return;
        }

        fld_current.focus(function () {
            if (fld_current.val() == text || fld_current.val() == '') {
                remove_text();
            }
        });

        fld_current.blur(function () {
            if (fld_current.val() == text || fld_current.val() == '') {
                set_text();
            }
        });

        fld_current.parents('form').each(function () {
            $(this).submit(function () {
                if (fld_current.hasClass('empty')) {
                    remove_text();
                }
            });
        });
    });
};

function append_extra_css() {
    if (!static_url) {
        var static_url = '/static/';
    }
    if (/(Firefox)/i.test(navigator.userAgent)) {
        $('head').append('<link rel="stylesheet" href="' + static_url + '/css/screen.ff.css" type="text/css" media="screen" charset="utf-8"/>');
    }
    if (/(Opera)/i.test(navigator.userAgent)) {
        $('head').append('<link rel="stylesheet" href="' + static_url + '/css/screen.opera.css" type="text/css" media="screen" charset="utf-8"/>');
    }
}

function bind_comment() {
    if (typeof (tinyMCE) == 'undefined') return true;

    var ed = tinyMCE.get('id_body');
    var nobody = ed.getContent();
    var reply_to = document.getElementById("id_reply_to").value;

    ed.setProgressState(1);

    $.post("./ajxc/?reply_to=" + reply_to,
        {reply_to: reply_to, body: nobody},
        function (response) {

            var oef = document.getElementById("addcomment");
            var div = document.createElement("div");
            div.setAttribute("id", "addactive");
            var ref = oef.parentNode;
            var ref_style = ref.getAttribute("class");
            var this_level = parseInt(ref_style.replace(/.*level([0-9]+).*/, "$1")) + 1;
            var this_style = ref_style.replace(/level([0-9]+)/, "level" + this_level);

            ref.parentNode.insertBefore(div, ref.nextSibling);
            $("#addactive").html(response);

            for (i in div.childNodes) {
                try {
                    div.childNodes[i].getAttribute("class");
                    div.childNodes[i].setAttribute("class", this_style);
                    break;
                } catch (e) {
                    ;
                }
                ;
            }

            document.getElementById("addactive").removeAttribute("id");
            // oef.parentNode.removeChild(oef);

            $('.reply').click(function () {
                return reinit_mce(this);
            });

            ed.setContent('');
            ed.setProgressState(0);
            oef.style.display = "none";
        }
    );

    return false;
}

function init_comment_tinymce(textarea) {
    if (textarea.length && (typeof (textarea.tinymce) != 'undefined')) {
        textarea.tinymce({
            theme: "modern",
            skin: "lightgray",
            language: "ru_RU",
            language_url: "/static/javascript/tinymce_4.5.0/langs/ru_RU.js",
            relative_urls: false,
            height: '10em',
            menubar: false,
            plugins: [
                'autolink link',
                'code fullscreen',
                'media table contextmenu paste emoticons'
            ],
            toolbar: 'undo redo link | underline bold italic strikethrough | emoticons '
            /*setup : function(ed) {
                ed.onPaste.add(function (editor, e) {
                    e.preventDefault();
                    // Check for clipboard data in various places for cross-browser compatibility.
                    // Get that data as text.
                    var content = ((e.originalEvent || e).clipboardData || window.clipboardData).getData('Text');
                    // Let TinyMCE do the heavy lifting for inserting that content into the editor.
                    editor.execCommand('mceInsertContent', false, content);
                });
            }*/
        });

    }
}

function reinit_mce(self) {
    if (self.className.search('follow-link') != -1) {
        return true;
    }

    var replyForm = $('#reply-form');
    var replyFormParent = replyForm.parent();
    replyFormParent.show();

    $('#id_reply_to', replyForm).val(self.rel);
    replyForm.attr('action', self.href);

    var ta = $('textarea', replyForm);
    ta.tinymce().destroy();
    $(ta.tinymce().getContainer()).remove();
    ta.show();

    var selfparent = $(self).parent();

    var form_header = $('.reply-form-header', replyForm);
    if (form_header.length) {
        $('span', form_header).html('п·я┌п╡п╣я┌ п╫п╟ п╨п╬п╪п╪п╣п╫я┌п╟я─п╦п╧');
        $('a', form_header).remove();
        var selfparent_parent = selfparent.parent();
        var subscriberu_titlesand_parent = $('.subscriberu_fbbox > a.subscriberu_titlesand', selfparent_parent);
        if (subscriberu_titlesand_parent.length) {
            var author_name = subscriberu_titlesand_parent.text();
            var author_link = subscriberu_titlesand_parent.attr('href');
            $('<a class="subscriberu_titlesand" href="' + author_link + '">' + author_name + '</a>').appendTo(form_header);
        } else {
            author_link = $('a.title', selfparent_parent).clone();
            author_link.appendTo(form_header);
            author_link.attr('href', $('p.p-title a', selfparent_parent).attr('href'));
        }
    }

    selfparent.after(replyFormParent);
    init_comment_tinymce(ta);
    ta.tinymce().focus();

    return false;
}

function init_comment_behavior() {
    init_comment_tinymce($('#reply-form textarea'));

    $('.reply').click(function () {
        return reinit_mce(this);
    });
}

function init_group_edit_behavior() {
    // init group description tinymce +
    var textarea = $('#id_description');
    if (textarea.length) {
        tinymce.init({
            selector: '#id_description',
            theme: "modern",
            skin: "lightgray",
            language: "ru_RU",
            language_url: "/static/javascript/tinymce_4.5.0/langs/ru_RU.js",
            relative_urls: false,
            menubar: false,
            image_advtab: true,
            plugins: [
                'advlist autolink lists link print preview',
                'searchreplace visualblocks fullscreen',
                ' contextmenu paste emoticons'
            ],
            toolbar: 'undo redo | underline bold italic strikethrough | emoticons ',
            setup: function (ed) {
                var wordscount = function () {
                    content = ed.getContent({format: 'text'});
                    ////п▓я│я┌п╟п╡п╨я┐ п╨п╬п╢п╟ (pre) - п╡я▀я─п╣п╥п╟п╣п╪///////////
                    content = content.replace(/(<\s*\/?\s*)pre(\s*([^>]*)?\s*>)*(<\s*\/?\s*)pre(\s*([^>]*)?\s*>)/gi, "");
                    content = content.replace(/<\/?[^>]+(>|$)/g, ' ');
                    content = content.replace(/&(lt|gt);/g, function (strMatch, p1) {
                        return (p1 == "lt") ? "<" : ">";
                    });
                    content = content.replace(/ /g, ' ');
                    content = content.replace(/&nbsp;+/g, ' ');
                    content = content.replace(/\n/, " ");
                    content = content.replace(/ +/g, ' ');
                    content = content.replace(/\s*((\S+\s*)*)/, '$1');
                    content = content.replace(/((\s*\S+)*)\s*/, '$1');
                    words = content.split(" ").length;
                    charsws = content.length;
                    chars = content.replace(/ +/g, '').length;
                    if (content == '') {
                        words = 0;
                        chars = 0;
                        charsws = 0;
                    }
                    $('#charswscount').html(charsws + '/700');
                    if (charsws < 51) {
                        $('#charswscount').css({color: '#c31e2f'});
                    } else {
                        $('#charswscount').css({color: '#ccc'});
                        $('.id_description_attention').hide();
                        $('input[type=submit].bigsubmit').removeAttr('disabled');
                    }
                };
                ed.onKeyUp.add(wordscount);
                ed.onInit.add(wordscount);
            }
        });
    }

    // select inside label
    var group_edit_form = $('form.group-edit');
    $('label[for="id_premoderating_type_2"]', group_edit_form).click(function (e) {
        $('#id_premoderating_type_2', group_edit_form).click();
        e.preventDefault();
    });

    // category selects - don't use
    function loadCats(target, parent) {
        if (parent) {
            target.html("<option value=''></option><option value=''>п≤п╢п╣я┌ п╥п╟пЁя─я┐п╥п╨п╟ п╢п╟п╫п╫я▀я┘...</option>");
            $.getJSON(group_get_cats_url, {
                "cat": parent
            }, function (data) {
                if (data.length > 0) {
                    target.html("<option value=''></option>");
                    $.each(data, function (i, cat) {
                        target.append("<option value='" + cat.pk + "'>" + cat.fields.name + "</option>");
                    });
                    target.show();
                } else {
                    target.hide();
                }
            });
        } else {
            target.hide();
        }
    }

    //var cat = $('select#cat');
    //var subcat1 = $('select#subcat1');
    //var subcat2 = $('select#subcat2');
    /*cat.change(function() {            //use for create group - old catalog
        loadCats(subcat1, cat.val());
        subcat2.hide();
    });
    subcat1.change(function() {
        loadCats(subcat2, subcat1.val());
    });*/

    // new catalog
    var cat0 = "",
        subcat1 = "",
        subcat2 = "",
        cat = {
            "Hi-Tech": "hitech",
            "п░п╡я┌п╬п╪п╬п╠п╦п╩п╦": "auto",
            "п▒п╦п╥п╫п╣я│ п╦ п╨п╟я─я▄п╣я─п╟": "business",
            "п■п╬п╪ п╦ я│п╣п╪я▄я▐": "home",
            "п п╬п╪п©я▄я▌я┌п╣я─я▀ п╦ п╦п╫я┌п╣я─п╫п╣я┌": "comp",
            "п я┐п╩я▄я┌я┐я─п╟, я│я┌п╦п╩я▄ п╤п╦п╥п╫п╦": "culture",
            "п°п╦я─ п╤п╣п╫я┴п╦п╫я▀": "woman",
            "п²п╬п╡п╬я│я┌п╦ п╦ п║п°п≤": "media",
            "п·п╠я┴п╣я│я┌п╡п╬": "socio",
            "п÷я─п╬пЁп╫п╬п╥ п©п╬пЁп╬п╢я▀": "weather",
            "п║п©п╬я─я┌": "sport",
            "п║я┌я─п╟п╫я▀ п╦ я─п╣пЁп╦п╬п╫я▀": "country",
            "п╒я┐я─п╦п╥п╪": "travel",
            "п╜п╨п╬п╫п╬п╪п╦п╨п╟ п╦ я└п╦п╫п╟п╫я│я▀": "economics"
        },
        hitech = {
            "п▓п╦п╢п╣п╬ п╦ п╥п╡я┐п╨": "hitech.video",
            "п⌠п╟п╢п╤п╣я┌я▀": "hitech.gadj",
            "п п╬п╫я├п╣п©я┌я▀": "hitech.kon",
            "п²п╬п╡п╬я│я┌п╦": "hitech.news",
            "п║п╡я▐п╥я▄": "hitech.connection"
        },
        hitech_connection = {
            "п°п╬п╠п╦п╩я▄п╫п╟я▐ я│п╡я▐п╥я▄": "hitech.connection.mobile"
        },
        hitech_video, hitech_gadj, hitech_kon, hitech_news,
        auto = {
            "п░п╡я┌п╬п╠п╦п╥п╫п╣я│": "auto.biz",
            "п░п╡я┌п╬п╫п╬п╡п╬я│я┌п╦": "auto.worldnews",
            "п■п╬я─п╬пЁп╦": "auto.roads",
            "п²п╬п╡п╦п╫п╨п╦": "auto.newness",
            "п·п╠п╥п╬я─я▀": "auto.review",
            "п÷п╬п╩п╣п╥п╫я▀п╣ я│п╬п╡п╣я┌я▀": "auto.advice",
            "п║п°п≤ п╬п╠ п╟п╡я┌п╬п╪п╬п╠п╦п╩я▐я┘": "auto.smi",
            "п║п╦пЁп╫п╟п╩п╦п╥п╟я├п╦п╦": "auto.alarm",
            "п╒п╣я│я┌я▀": "auto.test",
            "п╒я▌п╫п╦п╫пЁ": "auto.tuning"
        },
        auto_biz, auto_worldnews, auto_roads, auto_newness, auto_review, auto_advice, auto_smi, auto_alarm, auto_test,
        auto_tuning,
        business = {
            "п≈п╟п╨п╬п╫": "business.law",
            "п п╫п╦пЁп╦ п╦ п÷п·": "business.book",
            "п°п╟я─п╨п╣я┌п╦п╫пЁ": "business.marketing",
            "п²п╣п╢п╡п╦п╤п╦п╪п╬я│я┌я▄": "business.realty",
            "п·п╠я─п╟п╥п╬п╡п╟п╫п╦п╣": "business.edu",
            "п÷п╬п╦я│п╨ я─п╟п╠п╬я┌я▀": "business.job",
            "п÷я─п╬я└п╣я│я│п╦п╬п╫п╟п╩п╦п╥п╪": "business.school",
            "п═п╣п╨п╩п╟п╪п╟": "business.ad",
            "п╒п╣я┘п╫п╬п╩п╬пЁп╦п╦ п╢п╩я▐ п╠п╦п╥п╫п╣я│п╟": "business.tech"
        },
        business_law, business_book, business_edu, business_ad, business_tech,
        business_marketing = {
            "п■п╦я─п╣п╨я┌-п╪п╟я─п╨п╣я┌п╦п╫пЁ": "business.marketing.direct",
            "п≤п╫я┌п╣я─п╫п╣я┌-п╪п╟я─п╨п╣я┌п╦п╫пЁ": "business.marketing.internet",
            "п≤я│я│п╩п╣п╢п╬п╡п╟п╫п╦я▐": "business.marketing.research"
        },
        business_realty = {
            "п≤п©п╬я┌п╣п╨п╟": "business.realty.mortgage",
            "п²п╬п╡п╬я│я┌п╦": "business.realty.realty"
        },
        business_job = {
            "п▓п╟п╨п╟п╫я│п╦п╦": "business.job.vacancy",
            "п·п╠я┐я┤п╣п╫п╦п╣": "business.job.education",
            "п═п╣п╥я▌п╪п╣": "business.job.resume"
        },
        business_school = {
            "п▒п╦п╥п╫п╣я│-п╬п╠я─п╟п╥п╬п╡п╟п╫п╦п╣": "business.school.edu",
            "п°п╣п╫п╣п╢п╤п╪п╣п╫я┌": "business.school.manage",
            "пёп©я─п╟п╡п╩п╣п╫п╦п╣ п╨п╟я─я▄п╣я─п╬п╧": "business.school.career",
            "пёп©я─п╟п╡п╩п╣п╫п╦п╣ п©п╣я─я│п╬п╫п╟п╩п╬п╪": "business.school.hr"
        },
        home = {
            "п■п╣я┌п╦": "home.children",
            "п√п╦п╡п╬я┌п╫я▀п╣": "home.animals",
            "п≈п╢п╬я─п╬п╡я▄п╣": "home.health",
            "п≤п╫я┌п╣я─я▄п╣я─": "home.interior",
            "п я┐п╩п╦п╫п╟я─п╦я▐": "home.cookery",
            "п÷п╬п╩п╣п╥п╫я▀п╣ я│п╬п╡п╣я┌я▀": "home.help",
            "п÷я─п╦я─п╬п╢п╟": "home.nature",
            "п═п╣п╪п╬п╫я┌": "home.build",
            "п═п╬я│п╨п╬я┬я▄": "home.luxury"
        },
        home_children = {
            "п▒п╣я─п╣п╪п╣п╫п╫п╬я│я┌я▄ п╦ я─п╬п╢я▀": "home.children.pregnancy",
            "п▓п╬я│п©п╦я┌п╟п╫п╦п╣": "home.children.education",
            "п═п╟п╥п╡п╦я┌п╦п╣": "home.children.development",
            "п║п╬п╡п╣я┌я▀ я─п╬п╢п╦я┌п╣п╩я▐п╪": "home.children.advice",
            "п╗п╨п╬п╩п╟": "home.children.school"
        },
        home_animals = {
            "п▓п╣я┌п╣я─п╦п╫п╟я─п╦я▐": "home.animals.veterinary",
            "п п╬я┬п╨п╦": "home.animals.cat",
            "п÷п╬п╩п╣п╥п╫я▀п╣ я│п╬п╡п╣я┌я▀": "home.animals.advice",
            "п║п╬п╠п╟п╨п╦": "home.animals.dog",
            "п╜п╨п╥п╬я┌п╦п╨п╟": "home.animals.exotic"
        },
        home_health = {
            "п■п╦п╣я┌я▀": "home.health.diets",
            "п■п╬п╨я┌п╬я─ п╬я┌п╡п╣я┤п╟п╣я┌": "home.health.doctor",
            "п⌡п╣я┤п╣п╫п╦п╣": "home.health.treatment",
            "п²п╟я─п╬п╢п╫п╟я▐ п╪п╣п╢п╦я├п╦п╫п╟": "home.health.medicine",
            "п·п╠я─п╟п╥ п╤п╦п╥п╫п╦": "home.health.life",
            "п÷я─п╬я└п╦п╩п╟п╨я┌п╦п╨п╟": "home.health.preventive"
        }, home_interior,
        home_cookery = {
            "п▓я▀п©п╣я┤п╨п╟": "home.cookery.batch",
            "п■п╣я│п╣я─я┌я▀": "home.cookery.dessert",
            "п°я▐я│п╫я▀п╣ п╠п╩я▌п╢п╟": "home.cookery.meat",
            "п²п╟п©п╦я┌п╨п╦": "home.cookery.cocktail",
            "п·п╡п╬я┴п╫я▀п╣ п╠п╩я▌п╢п╟": "home.cookery.vegetable",
            "п÷п╬п╩п╣п╥п╫я▀п╣ я│п╬п╡п╣я┌я▀": "home.cookery.advice",
            "п═я▀п╠п╫я▀п╣ п╠п╩я▌п╢п╟": "home.cookery.fish",
            "п║п╟п╩п╟я┌я▀": "home.cookery.salad",
            "п║я┐п©я▀": "home.cookery.soup"
        },
        home_help = {
            "п▒я▀я┌п╬п╡п╟я▐ я┌п╣я┘п╫п╦п╨п╟": "home.help.device",
            "п÷п╬я┌я─п╣п╠п╦я┌п╣п╩я▌": "home.help.consume"
        }, home_nature, home_build, home_luxury,
        comp = {
            "IT-п╥п╟я┴п╦я┌п╟": "comp.safety",
            "п▓п╣п╠": "comp.web",
            "п⌠я─п╟я└п╦п╨п╟ п╦ п╢п╦п╥п╟п╧п╫": "comp.design",
            "п■п╬п╨я┐п╪п╣п╫я┌п╟я├п╦я▐, п╨п╫п╦пЁп╦, я│п╩п╬п╡п╟я─п╦": "comp.paper",
            "п√п╣п╩п╣п╥п╬": "comp.hard",
            "п≤пЁя─я▀": "comp.games",
            "п≤п╫я┌п╣я─п╫п╣я┌": "comp.inet",
            "п²п╬п╡п╦п╫п╨п╦": "comp.newness",
            "п²п╬п╡п╬я│я┌п╦": "comp.news",
            "п·п╠п╥п╬я─я▀": "comp.review",
            "п·п╠я┐я┤п╣п╫п╦п╣": "comp.edu",
            "п║п╬я└я┌": "comp.soft",
            "п╒п╣я│я┌я▀": "comp.test"
        },
        comp_safety, comp_design, comp_paper,
        comp_web = {
            "п▒п╩п╬пЁп╦ п╦ п©п╣я─я│п╬п╫п╟п╩я▄п╫я▀п╣ я│п╟п╧я┌я▀": "comp.web.personal",
            "п÷п╬я─я┌п╟п╩я▀": "comp.web.portal",
            "п║п╬п╬п╠я┴п╣я│я┌п╡п╟": "comp.web.community"
        },
        comp_hard = {
            "п║п╣я┌п╦ п╦ я│п╡я▐п╥я▄": "comp.hard.telecom"
        }, comp_games,
        comp_inet = {
            "п▓п╣п╠-п╢п╦п╥п╟п╧п╫": "comp.inet.design",
            "п▓п╣п╠-я│я┌я─п╬п╦я┌п╣п╩я▄я│я┌п╡п╬": "comp.inet.webbuild",
            "п·п╠п╥п╬я─я▀": "comp.inet.review",
            "п÷я─п╬п╢п╡п╦п╤п╣п╫п╦п╣ я│п╟п╧я┌п╬п╡. SEO": "comp.inet.search"
        }, comp_newness,
        comp_news = {
            "п²п╬п╡п╬я│я┌п╦ п╦п╫я┌п╣я─п╫п╣я┌п╟": "comp.news.inet",
            "п²п╬п╡п╬я│я┌п╦ п╨п╬п╪п©я▄я▌я┌п╣я─п╫я▀я┘ п╦пЁя─": "comp.news.games"
        },
        comp_review = {
            "п·п╠п╥п╬я─я▀ п÷п·": "comp.review.soft"
        },
        comp_edu, comp_test,
        comp_soft = {
            "3D пЁя─п╟я└п╦п╨п╟": "comp.soft.3d",
            "п▒п╟п╥я▀ п╢п╟п╫п╫я▀я┘": "comp.soft.db",
            "п▒п╦п╥п╫п╣я│": "comp.soft.biz",
            "п⌠я─п╟я└п╦я┤п╣я│п╨п╦п╣ я─п╣п╢п╟п╨я┌п╬я─я▀": "comp.soft.graph",
            "п·п©п╣я─п╟я├п╦п╬п╫п╫я▀п╣ я│п╦я│я┌п╣п╪я▀": "comp.soft.os",
            "п÷я─п╬пЁя─п╟п╪п╪п╦я─п╬п╡п╟п╫п╦п╣": "comp.soft.prog",
            "п÷я─п╬я┤п╣п╣": "comp.soft.others",
            "п║п░п÷п═": "comp.soft.sapr",
            "п╒п╣я│я┌п╦я─п╬п╡п╟п╫п╦п╣ п÷п·": "comp.soft.testing"
        },
        culture = {
            "Pro Art": "culture.art",
            "п п╦п╫п╬ п╦ п╒п▓": "culture.kino",
            "п⌡п╦я┌п╣я─п╟я┌я┐я─п╟": "culture.lit",
            "п°я┐п╥я▀п╨п╟": "culture.music",
            "п²п╬п╡п╬я│я┌п╦": "culture.news",
            "п·я┌п╢я▀я┘": "culture.rest",
            "п÷я│п╦я┘п╬п╩п╬пЁп╦я▐": "culture.psychology",
            "п═п╣п╩п╦пЁп╦я▐": "culture.religion",
            "п╒п╟п╦п╫я│я┌п╡п╣п╫п╫п╬п╣": "culture.mystery",
            "п╓п╬я┌п╬": "culture.foto",
            "п╔п╬п╠п╠п╦": "culture.hobby",
            "п╗п╬я┐-п╠п╦п╥п╫п╣я│": "culture.showbiz"
        },
        culture_religion, culture_foto, culture_hobby, culture_showbiz,
        culture_art = {
            "п√п╦п╡п╬п©п╦я│я▄ п╦ п╟я─я┘п╦я┌п╣п╨я┌я┐я─п╟": "culture.art.arch",
            "п°я┐п╥п╣п╦": "culture.art.museum",
            "п╒п╟п╫я├я▀": "culture.art.dance",
            "п╒п╣п╟я┌я─": "culture.art.theatre",
            "п╓п╬я┌п╬пЁя─п╟я└п╦я▐": "culture.art.photo",
            "п╕п╦я─п╨": "culture.art.circus",
            "п╝п╡п╣п╩п╦я─п╫п╬п╣ п╦я│п╨я┐я│я│я┌п╡п╬": "culture.art.jewelry"
        },
        culture_kino = {
            "п≤п╫я┌п╣я─п╡я▄я▌": "culture.kino.interview",
            "п²п╬п╡п╬я│я┌п╦": "culture.kino.news",
            "п÷я─п╣п╪я▄п╣я─я▀": "culture.kino.premiere",
            "п═п╣я├п╣п╫п╥п╦п╦": "culture.kino.review"
        },
        culture_lit = {
            "п▒п╦п╠п╩п╦п╬я┌п╣п╨п╦": "culture.lit.library",
            "п⌠я─п╟я└п╬п╪п╟п╫п╦я▐": "culture.lit.graph",
            "п■п╩я▐ п╢п╣я┌п╣п╧": "culture.lit.kids",
            "п п╫п╦пЁп╦": "culture.lit.book",
            "п²п╬п╡п╬я│я┌п╦ п╦ п╬п╠п╥п╬я─я▀ п╨п╫п╦п╤п╫п╬пЁп╬ я─я▀п╫п╨п╟": "culture.lit.news",
            "п·п╠п╬п╥я─п╣п╫п╦я▐": "culture.lit.review",
            "п÷п╦я│п╟я┌п╣п╩п╦. п≤п╫я┌п╣я─п╡я▄я▌. п╒п╣п╨я│я┌я▀": "culture.lit.writer",
            "п÷п╬я█п╥п╦я▐": "culture.lit.poetry",
            "п║п╦пЁп╫п╟п╩я▄п╫я▀п╣ я█п╨п╥п╣п╪п©п╩я▐я─я▀": "culture.lit.signal",
            "п╕п╦я┌п╟я┌я▀. п я─я▀п╩п╟я┌я▀п╣ п╡я▀я─п╟п╤п╣п╫п╦я▐": "culture.lit.quotation",
            "п╜я─п╬я┌п╦я┤п╣я│п╨п╟я▐ п╩п╦я┌п╣я─п╟я┌я┐я─п╟": "culture.lit.erotic"
        },
        culture_music = {
            "п░п╡я┌п╬я─я│п╨п╟я▐ п©п╣я│п╫я▐": "culture.music.bard",
            "п░п╫п╬п╫я│я▀ п╪я┐п╥я▀п╨п╟п╩я▄п╫я▀я┘ я│п╬п╠я▀я┌п╦п╧": "culture.music.announce",
            "п⌠п╦я┌п╟я─п╟": "culture.music.guitar",
            "п°я┐п╥я▀п╨п╟п╩я▄п╫я▀п╣ п╫п╬п╡п╬я│я┌п╦": "culture.music.news",
            "п²п╬п╡п╬я│я┌п╦ пЁя─я┐п©п©": "culture.music.group",
            "п═п╬п╨ (я┌я▐п╤п╣п╩я▀п╧ п╦ п╫п╣ п╬я┤п╣п╫я▄)": "culture.music.rock",
            "п╔п╦я┌-п©п╟я─п╟п╢я▀": "culture.music.hit"
        }, culture_news,
        culture_rest = {
            "п░я│я┌я─п╬п╩п╬пЁп╦я▐": "culture.rest.hscope",
            "п≈п╫п╟п╨п╬п╪я│я┌п╡п╟": "culture.rest.dating",
            "п≤п╫я┌п╣п╩п╩п╣п╨я┌я┐п╟п╩я▄п╫я▀п╣ п╦пЁя─я▀": "culture.rest.brain",
            "п· п╩я▌п╠п╡п╦ п╦ я│п╣п╨я│п╣": "culture.rest.love",
            "п÷я─п╟п╥п╢п╫п╦п╨": "culture.rest.fest",
            "п║п©п╬я─я┌п╦п╡п╫я▀п╣ п╦пЁя─я▀": "culture.rest.gambling",
            "п╒п╣я│я┌я▀": "culture.rest.test",
            "п╝п╪п╬я─": "culture.rest.funny"
        },
        culture_psychology = {
            "п╒п╣я│я┌я▀": "culture.psychology.test"
        },
        culture_mystery = {
            "п╜п╥п╬я┌п╣я─п╦п╨п╟": "culture.mystery.esoteric"
        },
        woman = {
            "п√я┐я─п╫п╟п╩я▀": "woman.magazines",
            "п я─п╟я│п╬я┌п╟": "woman.beauty",
            "п·я┌п╫п╬я┬п╣п╫п╦я▐": "woman.relation"
        },
        woman_magazines,
        woman_beauty = {
            "п·п╢п╣п╤п╢п╟, п╬п╠я┐п╡я▄, п╟п╨я│п╣я│я│я┐п╟я─я▀": "woman.beauty.goods"
        },
        woman_relation = {
            "п п╟я─я▄п╣я─п╟": "woman.relation.job"
        },
        media = {
            "п≤я─п╟п╨": "media.iraq",
            "п²п╬п╡п╬я│я┌п╦ п╢п╫я▐": "media.today",
            "п═п≤п░ \"п²п╬п╡п╬я│я┌п╦\"": "media.rian",
            "п═п╟п╢п╦п╬": "media.radio"
        },
        media_iraq, media_rian, media_radio,
        media_today = {
            "п²п╬п╡п╬я│я┌п╦ п╬я┌ Infox.ru": "media.today.infox",
            "п²п╬п╡п╬я│я┌п╦ п╬я┌ KM.RU": "media.today.km"
        },
        socio = {
            "п⌠п╬я│я┐п╢п╟я─я│я┌п╡п╬": "socio.state",
            "п²п╟я┐п╨п╟": "socio.science",
            "п·п╠я─п╟п╥п╬п╡п╟п╫п╦п╣": "socio.edu",
            "п╖п╣п╩п╬п╡п╣п╨ п╦ п╬п╠я┴п╣я│я┌п╡п╬": "socio.people"
        },
        socio_state = {
            "п░я─п╪п╦я▐ п╦ я│п╦п╩п╬п╡я▀п╣ я│я┌я─я┐п╨я┌я┐я─я▀": "socio.state.army",
            "п≈п╟п╨п╬п╫п╬п╢п╟я┌п╣п╩я▄я│я┌п╡п╬": "socio.state.law",
            "п÷п╬п╩п╦я┌п╦п╨п╟": "socio.state.politics"
        },
        socio_science = {
            "п⌠я┐п╪п╟п╫п╦я┌п╟я─п╫я▀п╣ п╫п╟я┐п╨п╦": "socio.science.humanity",
            "п∙я│я┌п╣я│я┌п╡п╣п╫п╫я▀п╣ п╫п╟я┐п╨п╦": "socio.science.natural",
            "п°п╬п╢п╣п╩п╦я─п╬п╡п╟п╫п╦п╣": "socio.science.model",
            "п²п╬п╡п╬я│я┌п╦ п╫п╟я┐п╨п╦": "socio.science.news",
            "п╒п╣я┘п╫п╦п╨п╟": "socio.science.tech",
            "п╒п╬я┤п╫я▀п╣ п╫п╟я┐п╨п╦": "socio.science.exact"
        },
        socio_edu = {
            "п≤п╫п╬я│я┌я─п╟п╫п╫я▀п╣ я▐п╥я▀п╨п╦": "socio.edu.lang",
            "п║я┌я┐п╢п╣п╫я┌я┐": "socio.edu.student",
            "п╗п╨п╬п╩п╟ п╠п╦п╥п╫п╣я│п╟": "socio.edu.business"
        },
        socio_people = {
            "п²п╟я─п╬п╢я▀ п╪п╦я─п╟": "socio.people.world"
        },
        weather = {
            "п≈п╟ я─я┐п╠п╣п╤п╬п╪": "weather.world",
            "п═п╬я│я│п╦я▐": "weather.russia"
        },
        weather_world, weather_russia,
        sport = {
            "п▒п╟я│п╨п╣я┌п╠п╬п╩": "sport.basket",
            "п▒п╬п╣п╡я▀п╣ п╦я│п╨я┐я│я│я┌п╡п╟": "sport.fighting",
            "п■я─я┐пЁп╦п╣ п╡п╦п╢я▀ я│п©п╬я─я┌п╟": "sport.others",
            "п≥п╬пЁп╟": "sport.yoga",
            "п²п╬п╡п╬я│я┌п╦. п·п╠п╥п╬я─я▀. п═п╟п╥п╪я▀я┬п╩п╣п╫п╦я▐": "sport.news",
            "п╒п╣п╫п╫п╦я│": "sport.tennis",
            "п╓п╦п╥п╨я┐п╩я▄я┌я┐я─п╟": "sport.fitness",
            "п╓п╬я─п╪я┐п╩п╟-1": "sport.auto",
            "п╓я┐я┌п╠п╬п╩": "sport.soccer",
            "п╔п╬п╨п╨п╣п╧": "sport.hockey",
            "п╜п╨я│я┌я─п╦п╪": "sport.extreme"
        },
        sport_basket, sport_fighting, sport_others, sport_yoga, sport_news, sport_tennis, sport_fitness, sport_auto,
        sport_soccer = {
            "п╓я┐я┌п╠п╬п╩я▄п╫я▀п╣ п╨п╩я┐п╠я▀": "sport.soccer.clubs"
        },
        sport_hockey, sport_extreme,
        country = {
            "п▒п╣п╩п╬я─я┐я│я│п╦я▐": "country.by",
            "п■я─я┐пЁп╦п╣ я│я┌я─п╟п╫я▀": "country.other",
            "п∙п╡я─п╬п©п╣п╧я│п╨п╦п╣ я│я┌я─п╟п╫я▀": "country.europe",
            "п≤п╥я─п╟п╦п╩я▄": "country.il",
            "п п╟п╥п╟я┘я│я┌п╟п╫": "country.kz",
            "п═п╬я│я│п╦я▐": "country.ru",
            "п║п╗п░": "country.usa",
            "пёп╨я─п╟п╦п╫п╟": "country.ua"
        },
        country_by, country_other, country_europe, country_il, country_kz, country_usa,
        country_ru = {
            "п■п╟п╩я▄п╫п╦п╧ п╡п╬я│я┌п╬п╨": "country.ru.fareast",
            "п°п╬я│п╨п╡п╟ п╦ п╬п╠п╩п╟я│я┌я▄": "country.ru.msk",
            "п÷п╬п╡п╬п╩п╤я▄п╣": "country.ru.volg",
            "п║п╟п╫п╨я┌-п÷п╣я┌п╣я─п╠я┐я─пЁ": "country.ru.spb",
            "п║п╣п╡п╣я─п╬-п≈п╟п©п╟п╢": "country.ru.nwest",
            "п║п╦п╠п╦я─я▄": "country.ru.sib",
            "пёя─п╟п╩": "country.ru.ural",
            "п╕п╣п╫я┌я─п╟п╩я▄п╫п╟я▐ я┤п╟я│я┌я▄": "country.ru.center"
        },
        country_ua = {
            "п≈п╟п╨п╬п╫п╬п╢п╟я┌п╣п╩я▄я│я┌п╡п╬": "country.ua.law",
            "п²п╬п╡п╬я│я┌п╦": "country.ua.news",
            "п╓п╦п╫п╟п╫я│я▀": "country.ua.fin"
        },
        travel = {
            "п▓п╦п╥я▀, пЁя─п╟п╫п╦я├я▀": "travel.visa",
            "п≈п╟п╤п╦пЁп╟я┌п╣п╩я▄п╫я▀п╣ п╦п╢п╣п╦": "travel.idea",
            "п°п╦я─п╬п╡я▀п╣ п╫п╬п╡п╬я│я┌п╦": "travel.worldnews",
            "п²п╬п╡п╬я│я┌п╦ я┌я┐я─п╦п╥п╪п╟": "travel.news",
            "п·я┌п╢я▀я┘ п╥п╟ я─я┐п╠п╣п╤п╬п╪": "travel.foreign",
            "п╖я┌п╬ п©п╬я│п╪п╬я┌я─п╣я┌я▄?": "travel.towatch"
        },
        travel_visa, travel_idea, travel_worldnews, travel_news, travel_foreign, travel_towatch,
        economics = {
            "п░п╫п╟п╩п╦я┌п╦п╨п╟, п©я─п╬пЁп╫п╬п╥я▀, п╨я┐я─я│я▀ п╡п╟п╩я▌я┌": "economics.news",
            "п≤п╫п╡п╣я│я┌п╦я├п╦п╦": "economics.invest",
            "п°п╦я─п╬п╡п╬п╧ п╨я─п╦п╥п╦я│": "economics.kris",
            "п·п╠я┴п╣я│я┌п╡п╬": "economics.society",
            "п·я┌я─п╟я│п╩п╦": "economics.industry",
            "п║п╬п╡п╣я┌я▀ я█п╨я│п©п╣я─я┌п╬п╡": "economics.advice",
            "п╓п╦п╫п╟п╫я│я▀": "economics.fin",
            "п╜п╨я│п©я─п╣я│я│-п╫п╬п╡п╬я│я┌п╦": "economics.express"
        },
        economics_news, economics_invest, economics_kris, economics_society, economics_advice, economics_fin,
        economics_express,
        economics_industry = {
            "п░я┐я┌я│п╬я─я│п╦п╫пЁ": "economics.industry.outsourcing",
            "п▒п╣п╥п╬п©п╟я│п╫п╬я│я┌я▄. п·я┘я─п╟п╫п╫п╟я▐ п╢п╣я▐я┌п╣п╩я▄п╫п╬я│я┌я▄": "economics.industry.security",
            "п▓я▀я│п╬п╨п╦п╣ я┌п╣я┘п╫п╬п╩п╬пЁп╦п╦": "economics.industry.comp",
            "п≤п╫п╢я┐я│я┌я─п╦я▐ п╨я─п╟я│п╬я┌я▀": "economics.industry.beauty",
            "п÷п╬п╩п╦пЁя─п╟я└п╦я▐": "economics.industry.polygraphy",
            "п÷я─п╬п╪я▀я┬п╩п╣п╫п╫п╬я│я┌я▄": "economics.industry.bll",
            "п÷я─п╬я┤п╣п╣": "economics.industry.other",
            "п═п╣я│я┌п╬я─п╟п╫п╫я▀п╧ п╠п╦п╥п╫п╣я│": "economics.industry.resto",
            "п║п╣п╩я▄я│п╨п╬п╣ я┘п╬п╥я▐п╧я│я┌п╡п╬ п╦ п©п╦я┴п╣п╡п╟я▐ п©я─п╬п╪я▀я┬п╩п╣п╫п╫п╬я│я┌я▄": "economics.industry.food",
            "п║я┌я─п╬п╦я┌п╣п╩я▄я│я┌п╡п╬": "economics.industry.build",
            "п╒п╬я─пЁп╬п╡п╩я▐": "economics.industry.trade",
            "п╒я─п╟п╫я│п©п╬я─я┌ п╦ пЁя─я┐п╥п╬п©п╣я─п╣п╡п╬п╥п╨п╦": "economics.industry.trans",
            "пёя│п╩я┐пЁп╦": "economics.industry.service"
        },

        selectcat = $('#cat'),
        selectsubcat1 = $('select#subcat1'),
        selectsubcat2 = $('select#subcat2');


    function showCats(target, catname, parent) {
        if (parent) {
            target.html("<option value=''></option>");
            $.each(parent, function (i, val) {
                if (val == catname) {
                    target.append("<option value='" + val + "' selected='selected'>" + i + "</option>");
                } else {
                    target.append("<option value='" + val + "'>" + i + "</option>");
                }
            });
            target.show();
        } else {
            target.hide();
        }
    }

    selectcat.change(function () {
        var curval = selectcat.val();
        showCats(selectsubcat1, "", eval(curval));
        selectsubcat2.hide();
    });
    selectsubcat1.change(function () {
        var curval2 = selectsubcat1.val(),
            realcurval = curval2.replace('.', '_');
        if (!$.isEmptyObject(eval(realcurval))) {
            showCats(selectsubcat2, "", eval(curval2.replace('.', '_')));
        } else {
            selectsubcat2.val('');
            selectsubcat2.hide();
        }
    });
    if (selectcat.length > 0) {
        showCats(selectcat, "", cat);
        console.log('selectcat', selectcat);
    }
    // \new catalog

    $('.f-edit.group-edit select').each(function () {
        var self = $(this);
        if (self.children('option').length > 1) {
            self.show();
        } else {
            self.hide();
        }
    });
}

function list_entry_hover() {       <!-- don't use -->
    $('.entry').each(function () {
        var entry = $(this);
        entry.hover(function () {
            entry.addClass('entryhover');
        }, function () {
            entry.removeClass('entryhover');
        });
    });

    $('.sub-popup, .cat-popup, .group-popup, .user-popup, .calendar-popup').each(function () {
        var popup = $(this);
        popup.hover(function () {
            popup.addClass('phover');
        }, function () {
            popup.removeClass('phover');
        });
    });

    $('.users .user').each(function () {
        var user = $(this);
        user.hover(function () {
            user.addClass('jshover');
        }, function () {
            user.removeClass('jshover');
        });
    });
}

function init_upload_file_page_behavior() {
    // upload form toggle
    var adding_file_toogler = $('.toggler');
    adding_file_toogler.click(function () {
        $(this).parents('.addfile').addClass('addfile-active');
        return false;
    });
    $('.emptyfilelist a.first_upload').click(function () {
        adding_file_toogler.click();
        return false;
    });
    $('.adding-file .last a').click(function () {
        $(this).parents('.addfile').removeClass('addfile-active');
        return false;
    });

    // п©п╬п╢я│п╨п╟п╥п╨п╟ п╢п╩я▐ п╫п╣п╟п╡я┌п╬я─п╦п╥п╬п╡п╟п╫п╫п╬п╧ п╥п╟пЁя─я┐п╥п╨п╦ я└п╟п╧п╩п╟.
    $('div.add-file-form input.submit').click(function () {
        if ($('p.grouplabel a.addmeplease').length > 0) {
            show_alert('п▓я│я┌я┐п©п╦я┌п╣ п╡ пЁя─я┐п©п©я┐, я┤я┌п╬п╠я▀ п╢п╬п╠п╟п╡п╩я▐я┌я▄ я└п╟п╧п╩я▀.');
            return false;
        }
    });

    $('#namethefile input[name="filename"]').DefaultValue('п²п╟п╥п╬п╡п╦я┌п╣ я└п╟п╧п╩');
}

function init_topic_edit_behavior() {
    //multi uploads form
    /* $('#addfileinput').click(function() {
        $("#id_file").clone().each(function() {
            var file_input = $(this);
            file_input.removeAttr('id');
            file_input.val('');
            $('#mfi').append(file_input);
        });
        alert('!!!')
        return false;
    }); temp, recovery*/

    // я┐п╢п╟п╩п╣п╫п╦п╣ я└п╟п╧п╩п╬п╡ п╦п╥ я┌п╬п©п╦п╨п╬п╡
    $('form#topic-create a.delete').click(function () {
        var el = this;
        show_confirm_form('п▓я▀ п╢п╣п╧я│я┌п╡п╦я┌п╣п╩я▄п╫п╬ я┘п╬я┌п╦я┌п╣ я┐п╢п╟п╩п╦я┌я▄ я└п╟п╧п╩?',
            {
                show: true,
                callback: function () {
                    $.post(el.href, {'confirmed': 1}, function () {
                        $(el).parent().hide()
                    });
                }
            },
            {
                show: true,
                callback: function () {
                }
            });
        return false;
    });

    // change topic edit form by ttype
    var form = $('#topic-create');
    if (form.length) {
        var ttype_input = $('#id_ttype', form);
        var poll_fields = $('.poll_fields', form);
        var topic_files_wrapper = $('#topic_files_wrapper', form);
        var subj_field = $('#id_subject', form);
        var subj_label = $('label[for="id_subject"]', form);
        var theme_title = $('p.theme-title', form);
        var topic_type_control = $('ul.write-type', form);

        $('a.js', topic_type_control).click(function (e) {
            var parent_li = $(this).parent('li');
            $('li', topic_type_control).removeClass('active');
            parent_li.addClass('active');

            var ttype_id = parent_li.attr('id');
            if (ttype_id === 'ttype_link') {
                ttype_input.val(1);
                theme_title.addClass('theme-link');
                subj_label.text('п■п╬п╠п╟п╡п╦я┌я▄ я│я│я▀п╩п╨я┐:');
                if (!subj_field.attr('value').match(/^[A-Z]+[A-Z0-9+-.]*:\/\//i)) {
                    subj_field.attr('value', 'http://' + subj_field.attr('value'));
                }
                poll_fields.hide();
                topic_files_wrapper.show();
            } else {
                if (ttype_id === 'ttype_poll') {
                    ttype_input.val(4);
                    subj_label.text('п▓п╬п©я─п╬я│ п╢п╩я▐ пЁп╬п╩п╬я│п╬п╡п╟п╫п╦я▐:');
                    poll_fields.show();
                    topic_files_wrapper.hide();
                } else if (ttype_id === 'ttype_topic') {
                    ttype_input.val(0);
                    subj_label.text('п²п╟п╥п╡п╟п╫п╦п╣ я┌п╣п╪я▀:');
                    poll_fields.hide();
                    topic_files_wrapper.show();
                }
                theme_title.removeClass('theme-link');
                if (subj_field.attr('value') == 'http://') {
                    subj_field.attr('value', '');
                }
            }
            e.preventDefault();
        });
    }
}

function ask_anonymous() {
    $('.ask-anonymous').click(function () {
        aobj = $(this);
        console.log('join anonymous');
        showloginForm(aobj);
        return false;
    });
}

function form_rip(form) {
    var data = {};
    $(':input', form).each(function () {
        if (this.name) {
            var input_type = this.type;
            if (input_type === 'radio') {
                if (this.checked) {
                    data[this.name] = this.value;
                }
            } else if (input_type === 'checkbox') {
                data[this.name] = this.checked;
            } else {
                data[this.name] = this.value;
            }
        }
    });
    return data;
}

function form_set(form, data) {
    if (data) {
        $(':input', form).each(function () {
            var input_data = data[this.name];
            if (input_data) {
                var input_type = this.type;
                if (input_type === 'radio') {
                    if (input_data === this.value) {
                        $(this).click();
                    }
                } else if (input_type === 'checkbox') {
                    this.checked = (input_data === true);
                } else {
                    this.value = input_data;
                }
            }
        });
    }
}

function show_mp3_player(ux) {
    // hide cover image
    $('#' + ux)[0].style.display = 'none';
    // player embed for mp3 files
    var a = $('#a-' + ux);
    var fl_params = {
        src: static_url + "/mp3player.swf",
        wmode: "transparent",
        width: 400,
        height: 40
    };
    a.before($("<div></div>").flashembed(
        fl_params,
        {
            "mp3": a[0].href,
            "autoplay": 1,
            "bgcolor1": "f5f5f5",
            "bgcolor2": "83af38",
            "slidercolor2": "628a1d",
            "showvolume": 1,
            "showloading": "autohide"
        }
    ));
}

function set_default_flash_wmode() {
    //set wmode='opaque' for objects and embed
    var content_area = $('div.right');
    $.each($('object', content_area), function (i, val) {
        var param_wmode = $('param[name="wmode"]', val);
        if (!param_wmode.length) {
            $(val).append('<param value="opaque" name="wmode"/>');
        } else {
            if (param_wmode.attr('value') != 'opaque') {
                param_wmode.attr('value', 'opaque');
            }
        }
    });
    $.each($('embed', content_area), function (i, val) {
        val = $(val);
        if (val.attr('wmode') != 'opaque') {
            val.attr('wmode', 'opaque');
        }
    });
}

function bind_submit_debounce() {
    $('form.submit-debounce').submit(function () {
        $(':submit', $(this)).attr('disabled', 'disabled');
    });
}

function init_group_subscriptions_behavior() {
    var sub_lock = new Date();

    // subscription removing
    function remove_subscription() {
        var li = $(this).parents('li');
        $.post($(this).attr('href'), {
            'gid': $(this).attr('rel')
        }, function (data) {
            li.remove();
        });
        return false;
    }

    function add_subscription() {
        var form = $(this).parents('form');
        var gid = $(this).attr('rel');
        var text = $(this).text();
        $.post(form.attr('action'),
            {'gid': gid},
            function (data) {
                $('.subscriptions').removeClass('addfile-active');
                data = eval('(' + data + ')');
                if (!data.added) {
                    return false;
                }
                var list = $('#subscription-list');
                var li = $('<li/>').appendTo(list);
                var a = $('<a/>').attr('href', api_list_archive_url + '/' + gid + '/').text(text);
                a.appendTo(li);
                var del = $('<a/>').attr({
                    'class': 'delete',
                    'rel': gid,
                    'href': list.attr('rel')
                });
                del.html('<img src="' + static_url + '/img/ico/delete.png" alt="пёп╢п╟п╩п╦я┌я▄" title="пёп╢п╟п╩п╦я┌я▄"/>');
                del.click(remove_subscription);
                del.appendTo(li);
            });
        return false;
    }

    function getSubs() {
        var now = new Date();
        var group_subscriptions = $('.subscriptions');
        if (now - sub_lock > 900) {
            var val = $('.subscription-name input', group_subscriptions).val();
            if (val.length > 2) {
                var subs_list = $('.ajaxList', group_subscriptions);
                subs_list.html('');
                $.getJSON(group_get_lists_url,
                    {'name': val},
                    function (data) {
                        subs_list.html('');
                        var empty = 0;
                        document.getElementById('glaziki').style.display = 'none';
                        $.each(data, function (i, item) {
                            if (i < 10) {
                                empty = 1;
                                var li = $('<li/>').appendTo(subs_list);
                                var a = $('<a/>').attr('href', '#').attr('rel', item.fields.gid).text(item.fields.name);
                                a.click(add_subscription);
                                a.appendTo(li);
                            } else if (i == 10) {
                                var b = $('<p style="margin-top: 1em;"><strong>п÷п╣я─п╡я▀п╣ 10 п╫п╟п╧п╢п╣п╫п╫я▀я┘ я─п╟я│я│я▀п╩п╬п╨. п∙я│п╩п╦ я│я─п╣п╢п╦ п╫п╦я┘ п╫п╣я┌ п╦я│п╨п╬п╪п╬п╧ Б─■ я┐я┌п╬я┤п╫п╦я┌п╣ я│п╩п╬п╡п╬ п©п╬п╦я│п╨п╟.</strong></p>');
                                b.appendTo(subs_list);
                            }
                        });
                        if (empty == 0) {
                            var b = $('<p style="margin-top: 1em;"><strong>п²п╦я┤п╣пЁп╬ п╫п╣ п╫п╟п╧п╢п╣п╫п╬.</strong></p>');
                            b.appendTo(subs_list);
                        }
                    });
            }
        }
    }

    // subscription adding
    function handleSubsAdd() {
        var now = new Date();
        setTimeout(getSubs, 1000);
        sub_lock = now;
        return false;
    }

    var group_subscriptions = $('.subscriptions');
    var subscription_name_input = $('.subscription-name input', group_subscriptions);
    subscription_name_input.keyup(handleSubsAdd).change(handleSubsAdd);
    $('li a.delete', group_subscriptions).click(remove_subscription);
    $('.add-subscription-form-switch', group_subscriptions).click(function () {
        group_subscriptions.toggleClass('addfile-active');
        return false;
    });
    $('form', group_subscriptions).submit(function () {
        return false;
    });
}

function init_group_edit_antispam_behavior() {
    $("#id_antispam_filter").DefaultValue("п╬п╢п╫п╟ я│я┌я─п╬п╨п╟ - п╬п╢п╫п╬ п╟п╫я┌п╦я│п©п╟п╪-п©я─п╟п╡п╦п╩п╬");

    $('#id_topic_links_limit').bind("change click", function (e) {
        $('#id_is_topic_links_limit_active').attr('checked', true);
        e.preventDefault();
    });
}

function init_group_edit_forum_behavior() {
    // control visibility of group's service filters links
    $('#service_filter_links input:checkbox').change(function (e) {
        var target = this;
        var visibility = this.checked;
        $.post(group_service_filter_visibility_control_link,
            {
                filter_name: this.getAttribute('name'),
                visibility: visibility
            },
            function (data) {
                if (data.error) {
                    target.checked = !visibility;
                }
            },
            'json'
        );
    });

    function show_arrows(elem) {
        var top = $('.ord-top img', elem);
        var bot = $('.ord-bot img', elem);
        if (elem.prev().length) {
            top.show();
        } else {
            top.hide();
        }
        if (elem.next().length) {
            bot.show();
        } else {
            bot.hide();
        }
    }

    // admin: forum interests/important topics order
    function order_switch(url, top, bot) {
        top.insertAfter(bot);
        $.post(url, {
            'pk1': top.attr('id'),
            'pk2': bot.attr('id')
        }, function (data, textstatus, jqXHR) {

            show_arrows(top);
            show_arrows(bot);
        });
    }

    var interest_list = $('#forum-interest-list');
    $('a.ord-top', interest_list).click(function () {  // don't used
        var bot = $(this).parents('tr');
        var top = bot.prev();
        order_switch($(this).attr('rel'), top, bot);
        return false;
    });
    $('a.ord-bot', interest_list).click(function () {  //don't used
        var top = $(this).parents('tr');
        var bot = top.next();
        order_switch($(this).attr('rel'), top, bot);
        return false;
    });

    var important_list = $('#forum-topic-list');
    $('#forum-topic-list a.ord-top').click(function () {
        var bot = $(this).parents('p');
        var top = bot.prev();
        order_switch($(this).attr('rel'), top, bot);
        return false;
    });
    $('#forum-topic-list a.ord-bot').click(function () {
        var top = $(this).parents('p');
        var bot = top.next();
        order_switch($(this).attr('rel'), top, bot);
        return false;
    });

    // important topic remove
    $('#forum-topic-list a.delete').click(function () {
        var self = $(this);
        var p = self.parents('p');
        //console.log('delete ',self,p.attr('id'));
        show_confirm_form('п▓я▀ п╢п╣п╧я│я┌п╡п╦я┌п╣п╩я▄п╫п╬ я┘п╬я┌п╦я┌п╣ я┐п╢п╟п╩п╦я┌я▄ п╡п╟п╤п╫я┐я▌ я┌п╣п╪я┐?',
            {
                show: true,
                callback: function () {
                    p.remove();
                    $.ajax({
                        url: self.attr('href'),
                        type: "POST",
                        data: {'imptopic': p.attr('id')},
                        success: function (data) {
                            $('p.important', important_list).each(function () {
                                show_arrows($(this));
                            });
                        }
                    });

                }
            },
            {
                show: true,
                callback: function () {
                }
            });
        return false;
    });

    //send invite to group
    $('.f-invite').submit(function (event) {
        $.ajax({
            url: $(this).attr('action'),
            type: "POST",
            data: {
                'email': $(this).find('input[name=email]').val(),
                'msg': $(this).find('textarea[name=msg]').val(),
                'subject': $(this).find('input[name=subject]').val()
            },
            success: function (data) {
                if (data == 1) {
                    $('#sendresult').text('п÷я─п╦пЁп╩п╟я┬п╣п╫п╦п╣ п╬я┌п©я─п╟п╡п╩п╣п╫п╬.').show();
                } else {
                    $('#sendresult').text('п÷я─п╦пЁп╩п╟я┬п╣п╫п╦п╣ п╫п╣ п╬я┌п©я─п╟п╡п╩п╣п╫п╬. п÷п╬п╩я▄п╥п╬п╡п╟я┌п╣п╩я▄ я│ я┌п╟п╨п╦п╪ п╟п╢я─п╣я│п╬п╪ я┐п╤п╣ я│я┐я┴п╣я│я┌п╡я┐п╣я┌!').show();
                }
            },
            error: function (data) {
                console.log('err', data);
            }
        });
        return false;
    });

    // interest remove
    interest_list.find('a.delete').click(function () {
        var self = $(this);
        var tr = self.parents('tr');
        var interest_name = $('.interest_name', tr).text();
        var interest_id = tr.attr('id');

        show_confirm_form('п▓я▀ п╢п╣п╧я│я┌п╡п╦я┌п╣п╩я▄п╫п╬ я┘п╬я┌п╦я┌п╣ я┐п╢п╟п╩п╦я┌я▄ я─п╟п╥п╢п╣п╩?',
            {
                show: true,
                callback: function () {
                    interest_list.find('select option').each(function (i, val) {
                        if (val.textContent == interest_name)
                            $(val).remove();
                    });
                    tr.remove();
                    $.ajax({
                        url: self.attr('href'),
                        type: "POST",
                        data: {'interest': interest_id},
                        success: function (data) {

                            //interest_list.find('tr').each(function() {
                            //    show_arrows($(this));
                            //});
                        }
                    });
                }
            },
            {
                show: true,
                callback: function () {
                }
            });
        return false;
    });

    // interest content move to another interest
    $('select', interest_list).change(function () {
        var self = $(this);
        var opt = $('option:selected', self).val();
        var tr = self.parents('tr');
        var gra_id = tr.attr('id');
        var self_topics_count_container = $('var', tr);
        var self_topics_count = parseInt(self_topics_count_container.text());

        if (opt != "-1" && self_topics_count > 0) {
            show_confirm_form('п▓я▀ п╢п╣п╧я│я┌п╡п╦я┌п╣п╩я▄п╫п╬ я┘п╬я┌п╦я┌п╣ п©п╣я─п╣п╪п╣я│я┌п╦я┌я▄ п╡я│п╣ я│п╬п╢п╣я─п╤п╦п╪п╬п╣ п╡ п╢я─я┐пЁп╬п╧ я─п╟п╥п╢п╣п╩?',
                {
                    show: true,
                    callback: function () {
                        var cnt = self_topics_count_container.text();
                        var cnt2 = $('#' + opt).find('var').text();
                        self_topics_count_container.text(0);
                        $('#' + opt).find('var').text(parseInt(cnt2) + parseInt(cnt));
                        $.ajax({
                            url: group_interest_move_link,
                            type: "POST",
                            data: {'interest_from': gra_id, 'interest_to': opt},
                            success: function (data) {
                            },
                            error: function (data) {
                                window.location.reload();
                            }
                        });
                    }
                },
                {
                    show: true,
                    callback: function () {
                    }
                });
        } else if (opt != "-1" && self_topics_count == 0) {
            show_alert('п═п╟п╥п╢п╣п╩ п©я┐я│я┌.');
        }
        return false;
    });
}

function init_group_membership_requests_behavior() {
    // premod group membership request cancelling
    $('a.cancelmemberrequest')
        .unbind('click')
        .click(function () {
            var link = this.getAttribute('href');
            show_confirm_form('п▓я▀ п╢п╣п╧я│я┌п╡п╦я┌п╣п╩я▄п╫п╬ я┘п╬я┌п╦я┌п╣ п╬я┌п╪п╣п╫п╦я┌я▄ п╥п╟я▐п╡п╨я┐?',
                {
                    show: true,
                    callback: function () {
                        location.replace(link);
                    }
                },
                {
                    show: true,
                    callback: function () {
                    }
                });
            return false;
        });

    // join group before post topic
    $('form.joinbeforepost').submit(function () {
        var self = $(this);
        show_confirm_form('<b>п÷п╦я│п╟я┌я▄ п╡ пЁя─я┐п©п©я┐ п╪п╬пЁя┐я┌ я┌п╬п╩я▄п╨п╬ п╣я▒ я┐я┤п╟я│я┌п╫п╦п╨п╦.</b>',
            {
                show: true,
                text: 'п▓я│я┌я┐п©п╦я┌я▄ п╡ пЁя─я┐п©п©я┐',
                callback: function () {
                    self.unbind('submit').submit();
                }
            },
            {
                show: false,
                callback: function () {
                }
            });
        return false;
    });

    // join group before upload file
    var add_file_form = $('div.add-file-form');
    $('button.joinbeforeupload', add_file_form).unbind('click').click(function () {
        add_file_form.removeClass('addfile-active');
        show_confirm_form('<b>п■п╬п╠п╟п╡п╩я▐я┌я▄ я└п╟п╧п╩я▀ п╡ пЁя─я┐п©п©я┐ п╪п╬пЁя┐я┌ я┌п╬п╩я▄п╨п╬ п╣я▒ я┐я┤п╟я│я┌п╫п╦п╨п╦.</b>',
            {
                show: true,
                text: 'п▓я│я┌я┐п©п╦я┌я▄ п╡ пЁя─я┐п©п©я┐',
                callback: function () {
                    $('form', add_file_form).submit();
                }
            },
            {
                show: false,
                callback: function () {
                }
            });
        return false;
    });

    /*$('a.joinbeforeview').click(function(){
        var self = $(this);
        var link = self.attr('href');
        var autoclick = self.attr('id') === 'autoclick';

        if (autoclick) {
            $.blockUI.defaults.overlayCSS.opacity = 0.8;
            $('body').css({
                'heigth': '100%',
                'position': 'relative',
                'overflow': 'hidden'
            });
        }

        show_confirm_form('<b>п°п╟я┌п╣я─п╦п╟п╩я▀ пЁя─я┐п©п©я▀ п╢п╬я│я┌я┐п©п╫я▀ я┌п╬п╩я▄п╨п╬ п╣п╣ я┐я┤п╟я│я┌п╫п╦п╨п╟п╪.</b>',
            {
                show: true,
                text: 'п▓я│я┌я┐п©п╦я┌я▄ п╡ пЁя─я┐п©п©я┐',
                callback: function() {window.location.href = link + '&join_accepted=1';}
            },
            {
                show: false,
                callback: function() {
                    if(autoclick) {
                        var group_link = $('#group_link');
                        if(group_link) {
                            window.location.href = group_link.attr('href');
                        } else {
                            window.location.href = '/';
                        }
                    }
                }
            });
        return false;
    });*/   //old
    //new
    $('a.joinbeforeview').click(function () {
        var self = $(this);
        var link = self.attr('href');
        var autoclick = self.attr('id') === 'autoclick';
        var joingroupAdded = autoclick && $('a.joingroup').hasClass('joingroup-added');
        var messageText = joingroupAdded ? 'п║п©п╟я│п╦п╠п╬, п╡п╟я┬п╟ п╥п╟я▐п╡п╨п╟ п╠я┐п╢п╣я┌ я─п╟я│я│п╪п╬я┌я─п╣п╫п╟ п╟п╢п╪п╦п╫п╦я│я┌я─п╟я┌п╬я─п╬п╪ п╡ п╠п╩п╦п╤п╟п╧я┬п╣п╣ п╡я─п╣п╪я▐.' : 'п°п╟я┌п╣я─п╦п╟п╩я▀ пЁя─я┐п©п©я▀ п╢п╬я│я┌я┐п©п╫я▀ я┌п╬п╩я▄п╨п╬ п╣п╣ я┐я┤п╟я│я┌п╫п╦п╨п╟п╪.';
        var redirectLink = joingroupAdded ? link.replace(/^(\/group\/[^\/]+).*$/, "$1") : link + '&join_accepted=1';
        var buttonText = joingroupAdded ? 'п▓п╣я─п╫я┐я┌я▄я│я▐ п╫п╟п╥п╟п╢' : 'п▓я│я┌я┐п©п╦я┌я▄ п╡ пЁя─я┐п©п©я┐';

        if (autoclick) {
            $.blockUI.defaults.overlayCSS.opacity = 0.8;
            $('body').css({
                'heigth': '100%',
                'position': 'relative',
                'overflow': 'hidden'
            });
        }

        show_confirm_form('<b>' + messageText + '</b>',
            {
                show: true,
                text: buttonText,
                callback: function () {
                    window.location.href = redirectLink;
                    /*$.cookie('_fsg', 1, {expires: 30, path: '/group/'}); cookie for surprise flocktory */
                }
            },
            {
                show: false,
                callback: function () {
                    if (autoclick) {
                        var group_link = $('#group_link');
                        if (group_link) {
                            window.location.href = group_link.attr('href');
                        } else {
                            window.location.href = '/';
                        }
                    }
                }
            });
        return false;
    });
}

function expand_group_stats_topic_subjects(json_topic_datas, topic_subject_visible_length, group_link) {
    var max_row_width = null;
    $.each(json_topic_datas, function (mark_counter, topic_datas) {
        var topics_container = $('#topics-' + mark_counter);
        if (topics_container.length) {
            if (max_row_width === null) {
                max_row_width = topics_container.parents('td').width();
            }
            var bar_width = topics_container.prev('.bar').width();
            var max_topics_container_width = max_row_width - bar_width;

            var topics_container_parent = topics_container.parent();
            var topics_container_clone = topics_container.clone().css('visibility', 'hidden');
            var remove_topics_container_clone = false;

            var extra_topics_count = topic_datas.length - 1;
            if (extra_topics_count > 0) {   // add extra topic links
                topics_container_parent.append(topics_container_clone);

                var suitable_topics_container_content = topics_container_clone.html();
                if (!/\/$/.test(group_link)) {  // add trailing slash to group's link
                    group_link += '/';
                }
                $.each(topic_datas, function (index, data) {
                    var topic_link = $('<a />');
                    topic_link.attr({
                        'title': data['subject'],
                        'href': group_link + data['id'] + '/'
                    });
                    if (data['subject'].length > topic_subject_visible_length) {    // truncate topic subject
                        data['subject'] = data['subject'].substring(0, topic_subject_visible_length) + '...';
                    }
                    topic_link.text(data['subject']);
                    if (index === 0) {
                        topics_container_clone.html(topic_link);
                    } else {
                        $('span', topics_container_clone).remove(); // remove extra topics count info span
                        topics_container_clone.append(', ').append(topic_link);
                    }

                    if (extra_topics_count > 0) {
                        var extra_topics_count_info = ' п╦ п╣я┴п╣ ' + extra_topics_count + ' ';
                        var extra_topics_count_ending = parseInt(('' + extra_topics_count).match(/\d$/)[0]);
                        if (extra_topics_count_ending === 1) {
                            extra_topics_count_info += 'я┌п╣п╪п╟';
                        } else if (extra_topics_count_ending < 5) {
                            extra_topics_count_info += 'я┌п╣п╪я▀';
                        } else {
                            extra_topics_count_info += 'я┌п╣п╪';
                        }
                        topics_container_clone.append('<span>' + extra_topics_count_info + '</span>');
                    }
                    extra_topics_count -= 1;

                    if (topics_container_clone.width() > max_topics_container_width) {
                        topics_container_clone.html(suitable_topics_container_content);
                        return false;
                    } else {
                        suitable_topics_container_content = topics_container_clone.html();
                    }
                });
            } else {    // expand truncated topic subject
                var topic_link = $('a', topics_container_clone);
                topic_link.text(topic_link.attr('title'));
                topics_container_parent.append(topics_container_clone);
                if (topics_container_clone.width() > max_topics_container_width) {
                    remove_topics_container_clone = true;
                }
            }

            if (remove_topics_container_clone) {
                topics_container_clone.remove();
            } else {
                topics_container.remove();
                topics_container_clone.css('visibility', 'visible');
            }
        }
    });
}
