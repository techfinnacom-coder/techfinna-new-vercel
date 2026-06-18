/*! For license information please see taskpane.js.LICENSE.txt */
!(function () {
  var e = {
      14385: function (e) {
        "use strict";
        e.exports = function (e, t) {
          return (
            t || (t = {}),
            e
              ? ((e = String(
                  e.__esModule ? e.default : e
                )),
                t.hash && (e += t.hash),
                t.maybeNeedQuotes &&
                /[\t\n\f\r "'=<>`]/.test(e)
                  ? '"'.concat(e, '"')
                  : e)
              : e
          );
        };
      },
      58394: function (e, t, n) {
        "use strict";
        e.exports =
          n.p + "0dc0f3d1b386e650446f.css";
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.m = e),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, { a: t }), t;
    }),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r],
          });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis)
        return globalThis;
      try {
        return (
          this || new Function("return this")()
        );
      } catch (e) {
        if ("object" == typeof window)
          return window;
      }
    })()),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(
        e,
        t
      );
    }),
    (function () {
      var e;
      n.g.importScripts &&
        (e = n.g.location + "");
      var t = n.g.document;
      if (
        !e &&
        t &&
        (t.currentScript &&
          (e = t.currentScript.src),
        !e)
      ) {
        var r = t.getElementsByTagName("script");
        if (r.length)
          for (
            var o = r.length - 1;
            o > -1 &&
            (!e || !/^http(s?):/.test(e));

          )
            e = r[o--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (n.p = e);
    })(),
    (n.b =
      document.baseURI || self.location.href),
    (function () {
      function e(e, t) {
        var r =
          ("undefined" != typeof Symbol &&
            e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = n(e)) ||
            (t &&
              e &&
              "number" == typeof e.length)
          ) {
            r && (e = r);
            var o = 0,
              a = function () {};
            return {
              s: a,
              n: function () {
                return o >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[o++] };
              },
              e: function (e) {
                throw e;
              },
              f: a,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var c,
          u = !0,
          s = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return (u = e.done), e;
          },
          e: function (e) {
            (s = !0), (c = e);
          },
          f: function () {
            try {
              u || null == r.return || r.return();
            } finally {
              if (s) throw c;
            }
          },
        };
      }
      function t(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol &&
                    e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a,
                c,
                u = [],
                s = !0,
                i = !1;
              try {
                if (
                  ((a = (n = n.call(e)).next),
                  0 === t)
                ) {
                  if (Object(n) !== n) return;
                  s = !1;
                } else
                  for (
                    ;
                    !(s = (r = a.call(n)).done) &&
                    (u.push(r.value),
                    u.length !== t);
                    s = !0
                  );
              } catch (e) {
                (i = !0), (o = e);
              } finally {
                try {
                  if (
                    !s &&
                    null != n.return &&
                    ((c = n.return()),
                    Object(c) !== c)
                  )
                    return;
                } finally {
                  if (i) throw o;
                }
              }
              return u;
            }
          })(e, t) ||
          n(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function n(e, t) {
        if (e) {
          if ("string" == typeof e)
            return r(e, t);
          var n = {}.toString
            .call(e)
            .slice(8, -1);
          return (
            "Object" === n &&
              e.constructor &&
              (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                  n
                )
              ? r(e, t)
              : void 0
          );
        }
      }
      function r(e, t) {
        (null == t || t > e.length) &&
          (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++)
          r[n] = e[n];
        return r;
      }
      function o() {
        "use strict";
        o = function () {
          return t;
        };
        var e,
          t = {},
          n = Object.prototype,
          r = n.hasOwnProperty,
          a =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          c =
            "function" == typeof Symbol
              ? Symbol
              : {},
          s = c.iterator || "@@iterator",
          i =
            c.asyncIterator || "@@asyncIterator",
          l = c.toStringTag || "@@toStringTag";
        function f(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          f({}, "");
        } catch (e) {
          f = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function p(e, t, n, r) {
          var o =
              t && t.prototype instanceof x
                ? t
                : x,
            c = Object.create(o.prototype),
            u = new T(r || []);
          return (
            a(c, "_invoke", {
              value: O(e, n, u),
            }),
            c
          );
        }
        function h(e, t, n) {
          try {
            return {
              type: "normal",
              arg: e.call(t, n),
            };
          } catch (e) {
            return { type: "throw", arg: e };
          }
        }
        t.wrap = p;
        var d = "suspendedStart",
          y = "suspendedYield",
          v = "executing",
          m = "completed",
          g = {};
        function x() {}
        function b() {}
        function w() {}
        var k = {};
        f(k, s, function () {
          return this;
        });
        var E = Object.getPrototypeOf,
          L = E && E(E(N([])));
        L && L !== n && r.call(L, s) && (k = L);
        var I =
          (w.prototype =
          x.prototype =
            Object.create(k));
        function j(e) {
          ["next", "throw", "return"].forEach(
            function (t) {
              f(e, t, function (e) {
                return this._invoke(t, e);
              });
            }
          );
        }
        function S(e, t) {
          function n(o, a, c, s) {
            var i = h(e[o], e, a);
            if ("throw" !== i.type) {
              var l = i.arg,
                f = l.value;
              return f &&
                "object" == u(f) &&
                r.call(f, "__await")
                ? t.resolve(f.__await).then(
                    function (e) {
                      n("next", e, c, s);
                    },
                    function (e) {
                      n("throw", e, c, s);
                    }
                  )
                : t.resolve(f).then(
                    function (e) {
                      (l.value = e), c(l);
                    },
                    function (e) {
                      return n("throw", e, c, s);
                    }
                  );
            }
            s(i.arg);
          }
          var o;
          a(this, "_invoke", {
            value: function (e, r) {
              function a() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (o = o ? o.then(a, a) : a());
            },
          });
        }
        function O(t, n, r) {
          var o = d;
          return function (a, c) {
            if (o === v)
              throw Error(
                "Generator is already running"
              );
            if (o === m) {
              if ("throw" === a) throw c;
              return { value: e, done: !0 };
            }
            for (r.method = a, r.arg = c; ; ) {
              var u = r.delegate;
              if (u) {
                var s = B(u, r);
                if (s) {
                  if (s === g) continue;
                  return s;
                }
              }
              if ("next" === r.method)
                r.sent = r._sent = r.arg;
              else if ("throw" === r.method) {
                if (o === d)
                  throw ((o = m), r.arg);
                r.dispatchException(r.arg);
              } else
                "return" === r.method &&
                  r.abrupt("return", r.arg);
              o = v;
              var i = h(t, n, r);
              if ("normal" === i.type) {
                if (
                  ((o = r.done ? m : y),
                  i.arg === g)
                )
                  continue;
                return {
                  value: i.arg,
                  done: r.done,
                };
              }
              "throw" === i.type &&
                ((o = m),
                (r.method = "throw"),
                (r.arg = i.arg));
            }
          };
        }
        function B(t, n) {
          var r = n.method,
            o = t.iterator[r];
          if (o === e)
            return (
              (n.delegate = null),
              ("throw" === r &&
                t.iterator.return &&
                ((n.method = "return"),
                (n.arg = e),
                B(t, n),
                "throw" === n.method)) ||
                ("return" !== r &&
                  ((n.method = "throw"),
                  (n.arg = new TypeError(
                    "The iterator does not provide a '" +
                      r +
                      "' method"
                  )))),
              g
            );
          var a = h(o, t.iterator, n.arg);
          if ("throw" === a.type)
            return (
              (n.method = "throw"),
              (n.arg = a.arg),
              (n.delegate = null),
              g
            );
          var c = a.arg;
          return c
            ? c.done
              ? ((n[t.resultName] = c.value),
                (n.next = t.nextLoc),
                "return" !== n.method &&
                  ((n.method = "next"),
                  (n.arg = e)),
                (n.delegate = null),
                g)
              : c
            : ((n.method = "throw"),
              (n.arg = new TypeError(
                "iterator result is not an object"
              )),
              (n.delegate = null),
              g);
        }
        function R(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e &&
              ((t.finallyLoc = e[2]),
              (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function A(e) {
          var t = e.completion || {};
          (t.type = "normal"),
            delete t.arg,
            (e.completion = t);
        }
        function T(e) {
          (this.tryEntries = [
            { tryLoc: "root" },
          ]),
            e.forEach(R, this),
            this.reset(!0);
        }
        function N(t) {
          if (t || "" === t) {
            var n = t[s];
            if (n) return n.call(t);
            if ("function" == typeof t.next)
              return t;
            if (!isNaN(t.length)) {
              var o = -1,
                a = function n() {
                  for (; ++o < t.length; )
                    if (r.call(t, o))
                      return (
                        (n.value = t[o]),
                        (n.done = !1),
                        n
                      );
                  return (
                    (n.value = e),
                    (n.done = !0),
                    n
                  );
                };
              return (a.next = a);
            }
          }
          throw new TypeError(
            u(t) + " is not iterable"
          );
        }
        return (
          (b.prototype = w),
          a(I, "constructor", {
            value: w,
            configurable: !0,
          }),
          a(w, "constructor", {
            value: b,
            configurable: !0,
          }),
          (b.displayName = f(
            w,
            l,
            "GeneratorFunction"
          )),
          (t.isGeneratorFunction = function (e) {
            var t =
              "function" == typeof e &&
              e.constructor;
            return (
              !!t &&
              (t === b ||
                "GeneratorFunction" ===
                  (t.displayName || t.name))
            );
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, w)
                : ((e.__proto__ = w),
                  f(e, l, "GeneratorFunction")),
              (e.prototype = Object.create(I)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          j(S.prototype),
          f(S.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = S),
          (t.async = function (e, n, r, o, a) {
            void 0 === a && (a = Promise);
            var c = new S(p(e, n, r, o), a);
            return t.isGeneratorFunction(n)
              ? c
              : c.next().then(function (e) {
                  return e.done
                    ? e.value
                    : c.next();
                });
          }),
          j(I),
          f(I, l, "Generator"),
          f(I, s, function () {
            return this;
          }),
          f(I, "toString", function () {
            return "[object Generator]";
          }),
          (t.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t)
                    return (
                      (e.value = r),
                      (e.done = !1),
                      e
                    );
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = N),
          (T.prototype = {
            constructor: T,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = e),
                this.tryEntries.forEach(A),
                !t)
              )
                for (var n in this)
                  "t" === n.charAt(0) &&
                    r.call(this, n) &&
                    !isNaN(+n.slice(1)) &&
                    (this[n] = e);
            },
            stop: function () {
              this.done = !0;
              var e =
                this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var n = this;
              function o(r, o) {
                return (
                  (u.type = "throw"),
                  (u.arg = t),
                  (n.next = r),
                  o &&
                    ((n.method = "next"),
                    (n.arg = e)),
                  !!o
                );
              }
              for (
                var a =
                  this.tryEntries.length - 1;
                a >= 0;
                --a
              ) {
                var c = this.tryEntries[a],
                  u = c.completion;
                if ("root" === c.tryLoc)
                  return o("end");
                if (c.tryLoc <= this.prev) {
                  var s = r.call(c, "catchLoc"),
                    i = r.call(c, "finallyLoc");
                  if (s && i) {
                    if (this.prev < c.catchLoc)
                      return o(c.catchLoc, !0);
                    if (this.prev < c.finallyLoc)
                      return o(c.finallyLoc);
                  } else if (s) {
                    if (this.prev < c.catchLoc)
                      return o(c.catchLoc, !0);
                  } else {
                    if (!i)
                      throw Error(
                        "try statement without catch or finally"
                      );
                    if (this.prev < c.finallyLoc)
                      return o(c.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (
                var n =
                  this.tryEntries.length - 1;
                n >= 0;
                --n
              ) {
                var o = this.tryEntries[n];
                if (
                  o.tryLoc <= this.prev &&
                  r.call(o, "finallyLoc") &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ("break" === e ||
                  "continue" === e) &&
                a.tryLoc <= t &&
                t <= a.finallyLoc &&
                (a = null);
              var c = a ? a.completion : {};
              return (
                (c.type = e),
                (c.arg = t),
                a
                  ? ((this.method = "next"),
                    (this.next = a.finallyLoc),
                    g)
                  : this.complete(c)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type ||
                "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg =
                      e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type &&
                    t &&
                    (this.next = t),
                g
              );
            },
            finish: function (e) {
              for (
                var t =
                  this.tryEntries.length - 1;
                t >= 0;
                --t
              ) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return (
                    this.complete(
                      n.completion,
                      n.afterLoc
                    ),
                    A(n),
                    g
                  );
              }
            },
            catch: function (e) {
              for (
                var t =
                  this.tryEntries.length - 1;
                t >= 0;
                --t
              ) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var o = r.arg;
                    A(n);
                  }
                  return o;
                }
              }
              throw Error(
                "illegal catch attempt"
              );
            },
            delegateYield: function (t, n, r) {
              return (
                (this.delegate = {
                  iterator: N(t),
                  resultName: n,
                  nextLoc: r,
                }),
                "next" === this.method &&
                  (this.arg = e),
                g
              );
            },
          }),
          t
        );
      }
      function a(e, t, n, r, o, a, c) {
        try {
          var u = e[a](c),
            s = u.value;
        } catch (e) {
          return void n(e);
        }
        u.done
          ? t(s)
          : Promise.resolve(s).then(r, o);
      }
      function c(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (r, o) {
            var c = e.apply(t, n);
            function u(e) {
              a(c, r, o, u, s, "next", e);
            }
            function s(e) {
              a(c, r, o, u, s, "throw", e);
            }
            u(void 0);
          });
        };
      }
      function u(e) {
        return (
          (u =
            "function" == typeof Symbol &&
            "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          u(e)
        );
      }
      function s() {
        var e =
            document.getElementById(
              "baseUrl"
            ).value,
          t = document.getElementById(
            "accessToken"
          ).value;
        e &&
          t &&
          (document.getElementById(
            "dataOptions"
          ).style.display = "block");
      }
      Office.onReady(function (e) {
        e.host === Office.HostType.Excel &&
          ((document.getElementById(
            "connectButton"
          ).onclick = s),
          (document.getElementById(
            "fetchTablesButton"
          ).onclick = p),
          (document.getElementById(
            "fetchSqlButton"
          ).onclick = h),
          (document.getElementById(
            "fetchTableDataButton"
          ).onclick = g),
          (document.getElementById(
            "fetchSqlDataButton"
          ).onclick = b),
          (document.getElementById(
            "refreshData"
          ).onclick = B));
      });
      var i = [],
        l = [];
      function f(e) {
        var t =
          document.getElementById("tableList");
        (t.innerHTML = ""),
          e.forEach(function (e) {
            var n =
              document.createElement("input");
            (n.type = "checkbox"),
              (n.id = e),
              (n.value = e),
              (n.name = "tables"),
              n.addEventListener(
                "change",
                function () {
                  !(function (e) {
                    if (e.checked)
                      l.push(e.value);
                    else {
                      var t = l.indexOf(e.value);
                      t > -1 && l.splice(t, 1);
                    }
                    console.log(
                      "Selected Options:",
                      l
                    );
                  })(this);
                }
              ),
              (n.checked = l.includes(e));
            var r =
              document.createElement("label");
            (r.htmlhtmlFor = e),
              r.appendChild(
                document.createTextNode(e)
              );
            var o = document.createElement("div");
            o.classList.add("checkbox-container"),
              o.appendChild(n),
              o.appendChild(r),
              t.appendChild(o);
          });
      }
      function p() {
        var e =
            document.getElementById(
              "baseUrl"
            ).value,
          t = document.getElementById(
            "accessToken"
          ).value;
        (document.getElementById(
          "topinfo"
        ).style.display = "none"),
          console.log("Base URL:", e),
          console.log("Access Token:", t),
          (document.getElementById(
            "tableSelection"
          ).style.display = "flex"),
          (document.getElementById(
            "sqlQueryInput"
          ).style.display = "none");
        var n =
          document.getElementById("tableList");
        fetch(e + "/excel/tablenames/", {
          headers: {
            authorization: t,
            "Content-Type": "application/json",
          },
        })
          .then(function (e) {
            if (
              (console.log("Response status:", e),
              !e.ok)
            )
              throw new Error(
                "Network response was not ok " +
                  e.statusText
              );
            return e.json();
          })
          .then(function (e) {
            if (
              (console.log("Data received:", e),
              !Array.isArray(e))
            )
              throw new Error(
                "Expected an array but got " +
                  u(e)
              );
            (i = e), f(e);
          })
          .catch(function (e) {
            console.error(
              "Error fetching table names:",
              e
            ),
              (n.innerHTML =
                '<option value="error">Error: '.concat(
                  e.message,
                  "</option>"
                ));
          });
      }
      function h() {
        (document.getElementById(
          "tableSelection"
        ).style.display = "none"),
          (document.getElementById(
            "sqlQueryInput"
          ).style.display = "block");
      }
      function d(e, t) {
        return y.apply(this, arguments);
      }
      function y() {
        return (
          (y = c(
            o().mark(function e(t, n) {
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Excel.run(
                          (function () {
                            var e = c(
                              o().mark(function e(
                                r
                              ) {
                                var a, c;
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch (
                                        (e.prev =
                                          e.next)
                                      ) {
                                        case 0:
                                          return (
                                            (e.prev = 0),
                                            (a =
                                              r.workbook.worksheets.getItem(
                                                "Creds"
                                              )).load(
                                              "name"
                                            ),
                                            (e.next = 5),
                                            r.sync()
                                          );
                                        case 5:
                                          e.next = 15;
                                          break;
                                        case 7:
                                          if (
                                            ((e.prev = 7),
                                            (e.t0 =
                                              e.catch(
                                                0
                                              )),
                                            e.t0
                                              .code !==
                                              Excel
                                                .ErrorCodes
                                                .itemNotFound)
                                          ) {
                                            e.next = 13;
                                            break;
                                          }
                                          (a =
                                            r.workbook.worksheets.add(
                                              "Creds"
                                            )),
                                            (e.next = 15);
                                          break;
                                        case 13:
                                          return (
                                            console.error(
                                              "Error accessing the Creds sheet:",
                                              e.t0
                                            ),
                                            e.abrupt(
                                              "return"
                                            )
                                          );
                                        case 15:
                                          return (
                                            (c = [
                                              [
                                                "Key",
                                                "Value",
                                              ],
                                              [
                                                "baseUrl",
                                                t,
                                              ],
                                              [
                                                "accessToken",
                                                n,
                                              ],
                                            ]),
                                            (a.getRange(
                                              "A1:B3"
                                            ).values =
                                              c),
                                            (e.next = 19),
                                            r.sync()
                                          );
                                        case 19:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [[0, 7]]
                                );
                              })
                            );
                            return function (t) {
                              return e.apply(
                                this,
                                arguments
                              );
                            };
                          })()
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          y.apply(this, arguments)
        );
      }
      function v(e, t) {
        return m.apply(this, arguments);
      }
      function m() {
        return (
          (m = c(
            o().mark(function e(t, n) {
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Excel.run(
                          (function () {
                            var e = c(
                              o().mark(function e(
                                r
                              ) {
                                var a,
                                  c,
                                  u,
                                  s,
                                  i,
                                  l,
                                  f;
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch (
                                        (e.prev =
                                          e.next)
                                      ) {
                                        case 0:
                                          return (
                                            (e.prev = 0),
                                            (a =
                                              r.workbook.worksheets.getItem(
                                                "SQL Queries"
                                              )),
                                            (e.next = 4),
                                            r.sync()
                                          );
                                        case 4:
                                          e.next = 18;
                                          break;
                                        case 6:
                                          if (
                                            ((e.prev = 6),
                                            (e.t0 =
                                              e.catch(
                                                0
                                              )),
                                            e.t0
                                              .code !==
                                              Excel
                                                .ErrorCodes
                                                .itemNotFound)
                                          ) {
                                            e.next = 16;
                                            break;
                                          }
                                          return (
                                            console.log(
                                              "Creating 'SQL Queries' sheet"
                                            ),
                                            ((a =
                                              r.workbook.worksheets.add(
                                                "SQL Queries"
                                              )).getRange(
                                              "A1:B1"
                                            ).values =
                                              [
                                                [
                                                  "Sheet Name",
                                                  "SQL Query",
                                                ],
                                              ]),
                                            (e.next = 14),
                                            r.sync()
                                          );
                                        case 14:
                                          e.next = 18;
                                          break;
                                        case 16:
                                          return (
                                            console.error(
                                              "Error accessing or creating 'SQL Queries' sheet:",
                                              e.t0
                                            ),
                                            e.abrupt(
                                              "return"
                                            )
                                          );
                                        case 18:
                                          return (
                                            (c = a
                                              .getRange(
                                                "A2:B500"
                                              )
                                              .load(
                                                "values"
                                              )),
                                            (e.next = 21),
                                            r.sync()
                                          );
                                        case 21:
                                          if (
                                            ((u =
                                              c.values),
                                            (s =
                                              u.map(
                                                function (
                                                  e
                                                ) {
                                                  return e[0];
                                                }
                                              )),
                                            console.log(
                                              "Existing sheet names: ",
                                              s
                                            ),
                                            console.log(
                                              "Existing data: ",
                                              u
                                            ),
                                            -1 !==
                                              (i =
                                                s.indexOf(
                                                  t
                                                )))
                                          ) {
                                            e.next = 35;
                                            break;
                                          }
                                          return (
                                            (l =
                                              u.filter(
                                                function (
                                                  e
                                                ) {
                                                  return (
                                                    "" !==
                                                    e[0]
                                                  );
                                                }
                                              )
                                                .length +
                                              2),
                                            console.log(
                                              "Adding new entry at row: ".concat(
                                                l
                                              )
                                            ),
                                            (a.getRange(
                                              "A"
                                                .concat(
                                                  l,
                                                  ":B"
                                                )
                                                .concat(
                                                  l
                                                )
                                            ).values =
                                              [
                                                [
                                                  t,
                                                  n,
                                                ],
                                              ]),
                                            (e.next = 32),
                                            r.sync()
                                          );
                                        case 32:
                                          console.log(
                                            "Added entry: "
                                              .concat(
                                                t,
                                                " - "
                                              )
                                              .concat(
                                                n
                                              )
                                          ),
                                            (e.next = 41);
                                          break;
                                        case 35:
                                          return (
                                            (f =
                                              i +
                                              2),
                                            console.log(
                                              "Updating existing entry at row: ".concat(
                                                f
                                              )
                                            ),
                                            (a.getRange(
                                              "B".concat(
                                                f
                                              )
                                            ).values =
                                              [
                                                [
                                                  n,
                                                ],
                                              ]),
                                            (e.next = 40),
                                            r.sync()
                                          );
                                        case 40:
                                          console.log(
                                            "Updated entry: "
                                              .concat(
                                                t,
                                                " - "
                                              )
                                              .concat(
                                                n
                                              )
                                          );
                                        case 41:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [[0, 6]]
                                );
                              })
                            );
                            return function (t) {
                              return e.apply(
                                this,
                                arguments
                              );
                            };
                          })()
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          m.apply(this, arguments)
        );
      }
      function g() {
        return x.apply(this, arguments);
      }
      function x() {
        return (
          (x = c(
            o().mark(function e() {
              var n, r, a;
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n =
                          document.getElementById(
                            "baseUrl"
                          ).value),
                        (r =
                          document.getElementById(
                            "accessToken"
                          ).value),
                        (a =
                          l &&
                          l.map(function (e) {
                            return e;
                          })),
                        (e.next = 5),
                        d(n, r)
                      );
                    case 5:
                      console.log(a),
                        console.log(u(a)),
                        a.forEach(
                          (function () {
                            var e = c(
                              o().mark(function e(
                                a
                              ) {
                                var s, i, l;
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch (
                                        (e.prev =
                                          e.next)
                                      ) {
                                        case 0:
                                          return (
                                            (e.prev = 0),
                                            (s =
                                              (function () {
                                                var e =
                                                  c(
                                                    o().mark(
                                                      function e(
                                                        t
                                                      ) {
                                                        var n,
                                                          a;
                                                        return o().wrap(
                                                          function (
                                                            e
                                                          ) {
                                                            for (;;)
                                                              switch (
                                                                (e.prev =
                                                                  e.next)
                                                              ) {
                                                                case 0:
                                                                  return (
                                                                    (e.next = 2),
                                                                    fetch(
                                                                      t,
                                                                      {
                                                                        headers:
                                                                          {
                                                                            authorization:
                                                                              r,
                                                                          },
                                                                      }
                                                                    )
                                                                  );
                                                                case 2:
                                                                  if (
                                                                    (n =
                                                                      e.sent)
                                                                      .ok
                                                                  ) {
                                                                    e.next = 5;
                                                                    break;
                                                                  }
                                                                  throw new Error(
                                                                    "Network response was not ok " +
                                                                      n.statusText
                                                                  );
                                                                case 5:
                                                                  return (
                                                                    (e.next = 7),
                                                                    n.json()
                                                                  );
                                                                case 7:
                                                                  if (
                                                                    ((a =
                                                                      e.sent),
                                                                    (i =
                                                                      i.concat(
                                                                        a.data
                                                                      )),
                                                                    !a.next)
                                                                  ) {
                                                                    e.next = 12;
                                                                    break;
                                                                  }
                                                                  return (
                                                                    (e.next = 12),
                                                                    s(
                                                                      a.next
                                                                    )
                                                                  );
                                                                case 12:
                                                                case "end":
                                                                  return e.stop();
                                                              }
                                                          },
                                                          e
                                                        );
                                                      }
                                                    )
                                                  );
                                                return function (
                                                  t
                                                ) {
                                                  return e.apply(
                                                    this,
                                                    arguments
                                                  );
                                                };
                                              })()),
                                            console.log(
                                              "table",
                                              a,
                                              u(a)
                                            ),
                                            (i =
                                              []),
                                            (l =
                                              ""
                                                .concat(
                                                  n,
                                                  "/excel/connector/"
                                                )
                                                .concat(
                                                  a
                                                )),
                                            (e.next = 7),
                                            s(l)
                                          );
                                        case 7:
                                          return (
                                            (i =
                                              i.map(
                                                function (
                                                  e
                                                ) {
                                                  return Object.fromEntries(
                                                    Object.entries(
                                                      e
                                                    ).map(
                                                      function (
                                                        e
                                                      ) {
                                                        var n =
                                                            t(
                                                              e,
                                                              2
                                                            ),
                                                          r =
                                                            n[0],
                                                          o =
                                                            n[1];
                                                        return (
                                                          "object" ===
                                                            u(
                                                              o
                                                            ) &&
                                                            null !==
                                                              o &&
                                                            (o =
                                                              JSON.stringify(
                                                                o
                                                              )),
                                                          [
                                                            r,
                                                            o,
                                                          ]
                                                        );
                                                      }
                                                    )
                                                  );
                                                }
                                              )),
                                            (e.next = 10),
                                            Excel.run(
                                              (function () {
                                                var e =
                                                  c(
                                                    o().mark(
                                                      function e(
                                                        t
                                                      ) {
                                                        var n,
                                                          r,
                                                          c,
                                                          u,
                                                          s,
                                                          l;
                                                        return o().wrap(
                                                          function (
                                                            e
                                                          ) {
                                                            for (;;)
                                                              switch (
                                                                (e.prev =
                                                                  e.next)
                                                              ) {
                                                                case 0:
                                                                  return (
                                                                    (n =
                                                                      a),
                                                                    (r =
                                                                      t
                                                                        .workbook
                                                                        .worksheets).load(
                                                                      "items/name"
                                                                    ),
                                                                    (e.next = 5),
                                                                    t.sync()
                                                                  );
                                                                case 5:
                                                                  if (
                                                                    ((c =
                                                                      r.items.map(
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return e.name;
                                                                        }
                                                                      )),
                                                                    !c.includes(
                                                                      n
                                                                    ))
                                                                  ) {
                                                                    e.next = 11;
                                                                    break;
                                                                  }
                                                                  return (
                                                                    t.workbook.worksheets
                                                                      .getItem(
                                                                        n
                                                                      )
                                                                      .delete(),
                                                                    (e.next = 11),
                                                                    t.sync()
                                                                  );
                                                                case 11:
                                                                  return (
                                                                    (u =
                                                                      t.workbook.worksheets.add(
                                                                        n
                                                                      )),
                                                                    (s =
                                                                      Object.keys(
                                                                        i[0]
                                                                      )),
                                                                    (u
                                                                      .getRange(
                                                                        "A1"
                                                                      )
                                                                      .getResizedRange(
                                                                        0,
                                                                        s.length -
                                                                          1
                                                                      ).values =
                                                                      [
                                                                        s,
                                                                      ]),
                                                                    (l =
                                                                      i.map(
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          return Object.values(
                                                                            e
                                                                          );
                                                                        }
                                                                      )),
                                                                    (u
                                                                      .getRange(
                                                                        "A2"
                                                                      )
                                                                      .getResizedRange(
                                                                        l.length -
                                                                          1,
                                                                        s.length -
                                                                          1
                                                                      ).values =
                                                                      l),
                                                                    u.activate(),
                                                                    (e.next = 19),
                                                                    t.sync()
                                                                  );
                                                                case 19:
                                                                case "end":
                                                                  return e.stop();
                                                              }
                                                          },
                                                          e
                                                        );
                                                      }
                                                    )
                                                  );
                                                return function (
                                                  t
                                                ) {
                                                  return e.apply(
                                                    this,
                                                    arguments
                                                  );
                                                };
                                              })()
                                            )
                                          );
                                        case 10:
                                          e.next = 15;
                                          break;
                                        case 12:
                                          (e.prev = 12),
                                            (e.t0 =
                                              e.catch(
                                                0
                                              )),
                                            console.error(
                                              "Error fetching table data:",
                                              e.t0
                                            );
                                        case 15:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e,
                                  null,
                                  [[0, 12]]
                                );
                              })
                            );
                            return function (t) {
                              return e.apply(
                                this,
                                arguments
                              );
                            };
                          })()
                        );
                    case 8:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          x.apply(this, arguments)
        );
      }
      function b() {
        return w.apply(this, arguments);
      }
      function w() {
        return (
          (w = c(
            o().mark(function e() {
              var n, r, a, s, i, l, f;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n =
                            document.getElementById(
                              "baseUrl"
                            ).value),
                          (r =
                            document.getElementById(
                              "sqlQuery"
                            ).value),
                          (a =
                            document.getElementById(
                              "sqlName"
                            ).value),
                          (s =
                            document.getElementById(
                              "accessToken"
                            ).value),
                          (e.next = 6),
                          d(n, s)
                        );
                      case 6:
                        return (
                          console.log(
                            "sql -" + r + a
                          ),
                          (e.prev = 7),
                          (i = (function () {
                            var e = c(
                              o().mark(function e(
                                t
                              ) {
                                var n, r;
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch (
                                        (e.prev =
                                          e.next)
                                      ) {
                                        case 0:
                                          return (
                                            (e.next = 2),
                                            fetch(
                                              t,
                                              {
                                                headers:
                                                  {
                                                    authorization:
                                                      "".concat(
                                                        s
                                                      ),
                                                  },
                                              }
                                            )
                                          );
                                        case 2:
                                          if (
                                            (n =
                                              e.sent)
                                              .ok
                                          ) {
                                            e.next = 5;
                                            break;
                                          }
                                          throw new Error(
                                            "Network response was not ok " +
                                              n.statusText
                                          );
                                        case 5:
                                          return (
                                            (e.next = 7),
                                            n.json()
                                          );
                                        case 7:
                                          if (
                                            ((r =
                                              e.sent),
                                            (l =
                                              l.concat(
                                                r.data
                                              )),
                                            !r.next)
                                          ) {
                                            e.next = 12;
                                            break;
                                          }
                                          return (
                                            (e.next = 12),
                                            i(
                                              r.next
                                            )
                                          );
                                        case 12:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e
                                );
                              })
                            );
                            return function (t) {
                              return e.apply(
                                this,
                                arguments
                              );
                            };
                          })()),
                          (l = []),
                          (f = ""
                            .concat(
                              n,
                              "/excel/query/data?query="
                            )
                            .concat(
                              encodeURIComponent(
                                r
                              )
                            )),
                          (e.next = 13),
                          i(f)
                        );
                      case 13:
                        if (0 !== l.length) {
                          e.next = 15;
                          break;
                        }
                        throw new Error(
                          "No data returned from the API.Please Check the Query."
                        );
                      case 15:
                        return (
                          (l = l.map(function (
                            e
                          ) {
                            return Object.fromEntries(
                              Object.entries(
                                e
                              ).map(function (e) {
                                var n = t(e, 2),
                                  r = n[0],
                                  o = n[1];
                                return (
                                  "object" ===
                                    u(o) &&
                                    null !== o &&
                                    (o =
                                      JSON.stringify(
                                        o
                                      )),
                                  [r, o]
                                );
                              })
                            );
                          })),
                          (e.next = 18),
                          Excel.run(
                            (function () {
                              var e = c(
                                o().mark(
                                  function e(t) {
                                    var n,
                                      c,
                                      u,
                                      s,
                                      i,
                                      f;
                                    return o().wrap(
                                      function (
                                        e
                                      ) {
                                        for (;;)
                                          switch (
                                            (e.prev =
                                              e.next)
                                          ) {
                                            case 0:
                                              return (
                                                (n =
                                                  a),
                                                (c =
                                                  t
                                                    .workbook
                                                    .worksheets).load(
                                                  "items/name"
                                                ),
                                                (e.next = 5),
                                                t.sync()
                                              );
                                            case 5:
                                              if (
                                                ((u =
                                                  c.items.map(
                                                    function (
                                                      e
                                                    ) {
                                                      return e.name;
                                                    }
                                                  )),
                                                !u.includes(
                                                  n
                                                ))
                                              ) {
                                                e.next = 9;
                                                break;
                                              }
                                              return (
                                                k(
                                                  'A sheet with the name "'.concat(
                                                    n,
                                                    '" already exists. Please choose a different name.'
                                                  )
                                                ),
                                                e.abrupt(
                                                  "return"
                                                )
                                              );
                                            case 9:
                                              return (
                                                (s =
                                                  t.workbook.worksheets.add(
                                                    n
                                                  )),
                                                (i =
                                                  Object.keys(
                                                    l[0]
                                                  )),
                                                (s
                                                  .getRange(
                                                    "A1"
                                                  )
                                                  .getResizedRange(
                                                    0,
                                                    i.length -
                                                      1
                                                  ).values =
                                                  [
                                                    i,
                                                  ]),
                                                (f =
                                                  l.map(
                                                    function (
                                                      e
                                                    ) {
                                                      return Object.values(
                                                        e
                                                      );
                                                    }
                                                  )),
                                                (s
                                                  .getRange(
                                                    "A2"
                                                  )
                                                  .getResizedRange(
                                                    f.length -
                                                      1,
                                                    i.length -
                                                      1
                                                  ).values =
                                                  f),
                                                s.activate(),
                                                (e.next = 17),
                                                v(
                                                  a,
                                                  r
                                                )
                                              );
                                            case 17:
                                              return e.abrupt(
                                                "return",
                                                t.sync()
                                              );
                                            case 18:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e
                                    );
                                  }
                                )
                              );
                              return function (
                                t
                              ) {
                                return e.apply(
                                  this,
                                  arguments
                                );
                              };
                            })()
                          )
                        );
                      case 18:
                        e.next = 24;
                        break;
                      case 20:
                        (e.prev = 20),
                          (e.t0 = e.catch(7)),
                          console.error(
                            "Error fetching SQL data:",
                            e.t0
                          ),
                          k(
                            "Error fetching SQL data: ".concat(
                              e.t0.message
                            )
                          );
                      case 24:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[7, 20]]
              );
            })
          )),
          w.apply(this, arguments)
        );
      }
      function k(e) {
        var t = document.getElementById(
          "notification"
        );
        (t.innerText = e),
          (t.style.display = "block"),
          setTimeout(function () {
            t.style.display = "none";
          }, 5e3);
      }
      function E() {
        return L.apply(this, arguments);
      }
      function L() {
        return (
          (L = c(
            o().mark(function n() {
              return o().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (
                        (n.next = 2),
                        Excel.run(
                          (function () {
                            var n = c(
                              o().mark(function n(
                                r
                              ) {
                                var a,
                                  s,
                                  i,
                                  l,
                                  f,
                                  p,
                                  h,
                                  d;
                                return o().wrap(
                                  function (n) {
                                    for (;;)
                                      switch (
                                        (n.prev =
                                          n.next)
                                      ) {
                                        case 0:
                                          return (
                                            (n.prev = 0),
                                            (a =
                                              r.workbook.worksheets.getItem(
                                                "Creds"
                                              )),
                                            (l = a
                                              .getRange(
                                                "A2:B3"
                                              )
                                              .load(
                                                "values"
                                              )),
                                            (n.next = 5),
                                            r.sync()
                                          );
                                        case 5:
                                          if (
                                            (l.values.forEach(
                                              function (
                                                e
                                              ) {
                                                "baseUrl" ===
                                                e[0]
                                                  ? (s =
                                                      e[1])
                                                  : "accessToken" ===
                                                      e[0] &&
                                                    (i =
                                                      e[1]);
                                              }
                                            ),
                                            s &&
                                              i)
                                          ) {
                                            n.next = 9;
                                            break;
                                          }
                                          return (
                                            console.error(
                                              "Base URL or Access Token is missing from the 'Creds' sheet."
                                            ),
                                            n.abrupt(
                                              "return"
                                            )
                                          );
                                        case 9:
                                          n.next = 15;
                                          break;
                                        case 11:
                                          return (
                                            (n.prev = 11),
                                            (n.t0 =
                                              n.catch(
                                                0
                                              )),
                                            console.error(
                                              "Error accessing the 'Creds' sheet:",
                                              n.t0
                                            ),
                                            n.abrupt(
                                              "return"
                                            )
                                          );
                                        case 15:
                                          return (
                                            (f =
                                              r
                                                .workbook
                                                .worksheets).load(
                                              "items/name"
                                            ),
                                            (n.next = 19),
                                            r.sync()
                                          );
                                        case 19:
                                          (p = e(
                                            f.items
                                          )),
                                            (n.prev = 20),
                                            (d =
                                              o().mark(
                                                function e() {
                                                  var n,
                                                    r,
                                                    a,
                                                    l,
                                                    f;
                                                  return o().wrap(
                                                    function (
                                                      e
                                                    ) {
                                                      for (;;)
                                                        switch (
                                                          (e.prev =
                                                            e.next)
                                                        ) {
                                                          case 0:
                                                            if (
                                                              "Creds" ===
                                                              (n =
                                                                h.value)
                                                                .name
                                                            ) {
                                                              e.next = 20;
                                                              break;
                                                            }
                                                            return (
                                                              (e.prev = 2),
                                                              (r =
                                                                (function () {
                                                                  var e =
                                                                    c(
                                                                      o().mark(
                                                                        function e(
                                                                          t
                                                                        ) {
                                                                          var n,
                                                                            a;
                                                                          return o().wrap(
                                                                            function (
                                                                              e
                                                                            ) {
                                                                              for (;;)
                                                                                switch (
                                                                                  (e.prev =
                                                                                    e.next)
                                                                                ) {
                                                                                  case 0:
                                                                                    return (
                                                                                      (e.next = 2),
                                                                                      fetch(
                                                                                        t,
                                                                                        {
                                                                                          headers:
                                                                                            {
                                                                                              authorization:
                                                                                                i,
                                                                                            },
                                                                                        }
                                                                                      )
                                                                                    );
                                                                                  case 2:
                                                                                    if (
                                                                                      (n =
                                                                                        e.sent)
                                                                                        .ok
                                                                                    ) {
                                                                                      e.next = 5;
                                                                                      break;
                                                                                    }
                                                                                    throw new Error(
                                                                                      "Network response was not ok " +
                                                                                        n.statusText
                                                                                    );
                                                                                  case 5:
                                                                                    return (
                                                                                      (e.next = 7),
                                                                                      n.json()
                                                                                    );
                                                                                  case 7:
                                                                                    if (
                                                                                      ((a =
                                                                                        e.sent),
                                                                                      (l =
                                                                                        l.concat(
                                                                                          a.data
                                                                                        )),
                                                                                      !a.next)
                                                                                    ) {
                                                                                      e.next = 12;
                                                                                      break;
                                                                                    }
                                                                                    return (
                                                                                      (e.next = 12),
                                                                                      r(
                                                                                        a.next
                                                                                      )
                                                                                    );
                                                                                  case 12:
                                                                                  case "end":
                                                                                    return e.stop();
                                                                                }
                                                                            },
                                                                            e
                                                                          );
                                                                        }
                                                                      )
                                                                    );
                                                                  return function (
                                                                    t
                                                                  ) {
                                                                    return e.apply(
                                                                      this,
                                                                      arguments
                                                                    );
                                                                  };
                                                                })()),
                                                              (a =
                                                                n.name),
                                                              (l =
                                                                []),
                                                              (f =
                                                                ""
                                                                  .concat(
                                                                    s,
                                                                    "/excel/connector/"
                                                                  )
                                                                  .concat(
                                                                    a
                                                                  )),
                                                              console.log(
                                                                "refreshing data for " +
                                                                  a
                                                              ),
                                                              (e.next = 10),
                                                              r(
                                                                f
                                                              )
                                                            );
                                                          case 10:
                                                            return (
                                                              (l =
                                                                l.map(
                                                                  function (
                                                                    e
                                                                  ) {
                                                                    return Object.fromEntries(
                                                                      Object.entries(
                                                                        e
                                                                      ).map(
                                                                        function (
                                                                          e
                                                                        ) {
                                                                          var n =
                                                                              t(
                                                                                e,
                                                                                2
                                                                              ),
                                                                            r =
                                                                              n[0],
                                                                            o =
                                                                              n[1];
                                                                          return (
                                                                            "object" ===
                                                                              u(
                                                                                o
                                                                              ) &&
                                                                              null !==
                                                                                o &&
                                                                              (o =
                                                                                JSON.stringify(
                                                                                  o
                                                                                )),
                                                                            [
                                                                              r,
                                                                              o,
                                                                            ]
                                                                          );
                                                                        }
                                                                      )
                                                                    );
                                                                  }
                                                                )),
                                                              (e.next = 13),
                                                              Excel.run(
                                                                (function () {
                                                                  var e =
                                                                    c(
                                                                      o().mark(
                                                                        function e(
                                                                          t
                                                                        ) {
                                                                          var n,
                                                                            r,
                                                                            c;
                                                                          return o().wrap(
                                                                            function (
                                                                              e
                                                                            ) {
                                                                              for (;;)
                                                                                switch (
                                                                                  (e.prev =
                                                                                    e.next)
                                                                                ) {
                                                                                  case 0:
                                                                                    return (
                                                                                      (n =
                                                                                        t.workbook.worksheets.getItem(
                                                                                          a
                                                                                        ))
                                                                                        .getUsedRange()
                                                                                        .clear(),
                                                                                      (r =
                                                                                        Object.keys(
                                                                                          l[0]
                                                                                        )),
                                                                                      (n
                                                                                        .getRange(
                                                                                          "A1"
                                                                                        )
                                                                                        .getResizedRange(
                                                                                          0,
                                                                                          r.length -
                                                                                            1
                                                                                        ).values =
                                                                                        [
                                                                                          r,
                                                                                        ]),
                                                                                      (c =
                                                                                        l.map(
                                                                                          function (
                                                                                            e
                                                                                          ) {
                                                                                            return Object.values(
                                                                                              e
                                                                                            );
                                                                                          }
                                                                                        )),
                                                                                      (n
                                                                                        .getRange(
                                                                                          "A2"
                                                                                        )
                                                                                        .getResizedRange(
                                                                                          c.length -
                                                                                            1,
                                                                                          r.length -
                                                                                            1
                                                                                        ).values =
                                                                                        c),
                                                                                      (e.next = 8),
                                                                                      t.sync()
                                                                                    );
                                                                                  case 8:
                                                                                  case "end":
                                                                                    return e.stop();
                                                                                }
                                                                            },
                                                                            e
                                                                          );
                                                                        }
                                                                      )
                                                                    );
                                                                  return function (
                                                                    t
                                                                  ) {
                                                                    return e.apply(
                                                                      this,
                                                                      arguments
                                                                    );
                                                                  };
                                                                })()
                                                              )
                                                            );
                                                          case 13:
                                                            console.log(
                                                              "Data refreshed for sheet: ".concat(
                                                                a
                                                              )
                                                            ),
                                                              (e.next = 20);
                                                            break;
                                                          case 16:
                                                            return (
                                                              (e.prev = 16),
                                                              (e.t0 =
                                                                e.catch(
                                                                  2
                                                                )),
                                                              console.error(
                                                                "Error refreshing data for sheet '".concat(
                                                                  n.name,
                                                                  "':"
                                                                ),
                                                                e.t0
                                                              ),
                                                              e.abrupt(
                                                                "return",
                                                                1
                                                              )
                                                            );
                                                          case 20:
                                                          case "end":
                                                            return e.stop();
                                                        }
                                                    },
                                                    e,
                                                    null,
                                                    [
                                                      [
                                                        2,
                                                        16,
                                                      ],
                                                    ]
                                                  );
                                                }
                                              )),
                                            p.s();
                                        case 23:
                                          if (
                                            (h =
                                              p.n())
                                              .done
                                          ) {
                                            n.next = 29;
                                            break;
                                          }
                                          return n.delegateYield(
                                            d(),
                                            "t1",
                                            25
                                          );
                                        case 25:
                                          if (
                                            !n.t1
                                          ) {
                                            n.next = 27;
                                            break;
                                          }
                                          return n.abrupt(
                                            "continue",
                                            27
                                          );
                                        case 27:
                                          n.next = 23;
                                          break;
                                        case 29:
                                          n.next = 34;
                                          break;
                                        case 31:
                                          (n.prev = 31),
                                            (n.t2 =
                                              n.catch(
                                                20
                                              )),
                                            p.e(
                                              n.t2
                                            );
                                        case 34:
                                          return (
                                            (n.prev = 34),
                                            p.f(),
                                            n.finish(
                                              34
                                            )
                                          );
                                        case 37:
                                        case "end":
                                          return n.stop();
                                      }
                                  },
                                  n,
                                  null,
                                  [
                                    [0, 11],
                                    [
                                      20, 31, 34,
                                      37,
                                    ],
                                  ]
                                );
                              })
                            );
                            return function (e) {
                              return n.apply(
                                this,
                                arguments
                              );
                            };
                          })()
                        )
                      );
                    case 2:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          )),
          L.apply(this, arguments)
        );
      }
      function I() {
        return j.apply(this, arguments);
      }
      function j() {
        return (
          (j = c(
            o().mark(function e() {
              return o().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        Excel.run(
                          (function () {
                            var e = c(
                              o().mark(function e(
                                t
                              ) {
                                var n,
                                  r,
                                  a,
                                  c,
                                  u,
                                  s,
                                  i,
                                  l,
                                  f;
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch (
                                        (e.prev =
                                          e.next)
                                      ) {
                                        case 0:
                                          return (
                                            (n =
                                              t.workbook.worksheets.getItem(
                                                "Creds"
                                              )),
                                            (r = n
                                              .getRange(
                                                "A2:B3"
                                              )
                                              .load(
                                                "values"
                                              )),
                                            (e.next = 4),
                                            t.sync()
                                          );
                                        case 4:
                                          if (
                                            ((a =
                                              ""),
                                            (c =
                                              ""),
                                            r.values.forEach(
                                              function (
                                                e
                                              ) {
                                                "baseUrl" ===
                                                e[0]
                                                  ? (a =
                                                      e[1])
                                                  : "accessToken" ===
                                                      e[0] &&
                                                    (c =
                                                      e[1]);
                                              }
                                            ),
                                            a &&
                                              c)
                                          ) {
                                            e.next = 10;
                                            break;
                                          }
                                          return (
                                            k(
                                              "Base URL or Access Token not found in Creds sheet."
                                            ),
                                            e.abrupt(
                                              "return"
                                            )
                                          );
                                        case 10:
                                          return (
                                            (u =
                                              t.workbook.worksheets.getItem(
                                                "SQL Queries"
                                              )),
                                            (s = u
                                              .getRange(
                                                "A2:B100"
                                              )
                                              .load(
                                                "values"
                                              )),
                                            (e.next = 14),
                                            t.sync()
                                          );
                                        case 14:
                                          i = 0;
                                        case 15:
                                          if (
                                            !(
                                              i <
                                              s
                                                .values
                                                .length
                                            )
                                          ) {
                                            e.next = 28;
                                            break;
                                          }
                                          if (
                                            ((l =
                                              s
                                                .values[
                                                i
                                              ][0]),
                                            (f =
                                              s
                                                .values[
                                                i
                                              ][1]),
                                            !l ||
                                              !f)
                                          ) {
                                            e.next = 24;
                                            break;
                                          }
                                          return (
                                            console.log(
                                              "SQL Query: "
                                                .concat(
                                                  f,
                                                  ", Query Name: "
                                                )
                                                .concat(
                                                  l
                                                )
                                            ),
                                            (e.next = 22),
                                            S(
                                              a,
                                              f,
                                              l,
                                              c
                                            )
                                          );
                                        case 22:
                                          e.next = 25;
                                          break;
                                        case 24:
                                          console.log(
                                            "Skipping empty row in SQL Queries sheet."
                                          );
                                        case 25:
                                          i++,
                                            (e.next = 15);
                                          break;
                                        case 28:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e
                                );
                              })
                            );
                            return function (t) {
                              return e.apply(
                                this,
                                arguments
                              );
                            };
                          })()
                        )
                      );
                    case 2:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          )),
          j.apply(this, arguments)
        );
      }
      function S(e, t, n, r) {
        return O.apply(this, arguments);
      }
      function O() {
        return (
          (O = c(
            o().mark(function e(n, r, a, s) {
              var i, l, f;
              return o().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0),
                          (i = (function () {
                            var e = c(
                              o().mark(function e(
                                t
                              ) {
                                var n, r;
                                return o().wrap(
                                  function (e) {
                                    for (;;)
                                      switch (
                                        (e.prev =
                                          e.next)
                                      ) {
                                        case 0:
                                          return (
                                            (e.next = 2),
                                            fetch(
                                              t,
                                              {
                                                headers:
                                                  {
                                                    authorization:
                                                      "".concat(
                                                        s
                                                      ),
                                                  },
                                              }
                                            )
                                          );
                                        case 2:
                                          if (
                                            (n =
                                              e.sent)
                                              .ok
                                          ) {
                                            e.next = 5;
                                            break;
                                          }
                                          throw new Error(
                                            "Network response was not ok " +
                                              n.statusText
                                          );
                                        case 5:
                                          return (
                                            (e.next = 7),
                                            n.json()
                                          );
                                        case 7:
                                          if (
                                            ((r =
                                              e.sent),
                                            (l =
                                              l.concat(
                                                r.data
                                              )),
                                            !r.next)
                                          ) {
                                            e.next = 12;
                                            break;
                                          }
                                          return (
                                            (e.next = 12),
                                            i(
                                              r.next
                                            )
                                          );
                                        case 12:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e
                                );
                              })
                            );
                            return function (t) {
                              return e.apply(
                                this,
                                arguments
                              );
                            };
                          })()),
                          (l = []),
                          (f = ""
                            .concat(
                              n,
                              "/excel/query/data?query="
                            )
                            .concat(
                              encodeURIComponent(
                                r
                              )
                            )),
                          (e.next = 6),
                          i(f)
                        );
                      case 6:
                        return (
                          (l = l.map(function (
                            e
                          ) {
                            return Object.fromEntries(
                              Object.entries(
                                e
                              ).map(function (e) {
                                var n = t(e, 2),
                                  r = n[0],
                                  o = n[1];
                                return (
                                  "object" ===
                                    u(o) &&
                                    null !== o &&
                                    (o =
                                      JSON.stringify(
                                        o
                                      )),
                                  [r, o]
                                );
                              })
                            );
                          })),
                          (e.next = 9),
                          Excel.run(
                            (function () {
                              var e = c(
                                o().mark(
                                  function e(t) {
                                    var n,
                                      r,
                                      c,
                                      u,
                                      s,
                                      i;
                                    return o().wrap(
                                      function (
                                        e
                                      ) {
                                        for (;;)
                                          switch (
                                            (e.prev =
                                              e.next)
                                          ) {
                                            case 0:
                                              return (
                                                (n =
                                                  a),
                                                (r =
                                                  t
                                                    .workbook
                                                    .worksheets).load(
                                                  "items/name"
                                                ),
                                                (e.next = 5),
                                                t.sync()
                                              );
                                            case 5:
                                              return (
                                                (c =
                                                  r.items.map(
                                                    function (
                                                      e
                                                    ) {
                                                      return e.name;
                                                    }
                                                  )),
                                                c.includes(
                                                  n
                                                )
                                                  ? (u =
                                                      t.workbook.worksheets.getItem(
                                                        n
                                                      ))
                                                      .getRange(
                                                        "A1:Z1000"
                                                      )
                                                      .clear()
                                                  : (u =
                                                      t.workbook.worksheets.add(
                                                        n
                                                      )),
                                                (s =
                                                  Object.keys(
                                                    l[0]
                                                  )),
                                                (u
                                                  .getRange(
                                                    "A1"
                                                  )
                                                  .getResizedRange(
                                                    0,
                                                    s.length -
                                                      1
                                                  ).values =
                                                  [
                                                    s,
                                                  ]),
                                                (i =
                                                  l.map(
                                                    function (
                                                      e
                                                    ) {
                                                      return Object.values(
                                                        e
                                                      );
                                                    }
                                                  )),
                                                (u
                                                  .getRange(
                                                    "A2"
                                                  )
                                                  .getResizedRange(
                                                    i.length -
                                                      1,
                                                    s.length -
                                                      1
                                                  ).values =
                                                  i),
                                                u.activate(),
                                                (e.next = 14),
                                                t.sync()
                                              );
                                            case 14:
                                            case "end":
                                              return e.stop();
                                          }
                                      },
                                      e
                                    );
                                  }
                                )
                              );
                              return function (
                                t
                              ) {
                                return e.apply(
                                  this,
                                  arguments
                                );
                              };
                            })()
                          )
                        );
                      case 9:
                        e.next = 15;
                        break;
                      case 11:
                        (e.prev = 11),
                          (e.t0 = e.catch(0)),
                          console.error(
                            "Error refreshing SQL data:",
                            e.t0
                          ),
                          k(
                            "Error refreshing SQL data: ".concat(
                              e.t0.message
                            )
                          );
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 11]]
              );
            })
          )),
          O.apply(this, arguments)
        );
      }
      function B() {
        return R.apply(this, arguments);
      }
      function R() {
        return (R = c(
          o().mark(function e() {
            return o().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), E();
                  case 2:
                    return (e.next = 4), I();
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )).apply(this, arguments);
      }
      document
        .getElementById("tableSearch")
        .addEventListener("input", function () {
          var e;
          (e = document
            .getElementById("tableSearch")
            .value.toLowerCase()),
            f(
              i.filter(function (t) {
                return t
                  .toLowerCase()
                  .includes(e);
              })
            );
        });
    })(),
    (function () {
      "use strict";
      var e = n(14385),
        t = n.n(e),
        r = new URL(n(58394), n.b);
      t()(r);
    })();
})();
//# sourceMappingURL=taskpane.js.map
