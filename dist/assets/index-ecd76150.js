function _0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (
      typeof r != "string" &&
      !Array.isArray(r)
    ) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const s =
            Object.getOwnPropertyDescriptor(r, i);
          s &&
            Object.defineProperty(
              e,
              i,
              s.get
                ? s
                : {
                    enumerable: !0,
                    get: () => r[i],
                  }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module",
    })
  );
}
(function () {
  const t =
    document.createElement("link").relList;
  if (
    t &&
    t.supports &&
    t.supports("modulepreload")
  )
    return;
  for (const i of document.querySelectorAll(
    'link[rel="modulepreload"]'
  ))
    r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" &&
            o.rel === "modulepreload" &&
            r(o);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy &&
        (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var bn =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function si(e) {
  return e &&
    e.__esModule &&
    Object.prototype.hasOwnProperty.call(
      e,
      "default"
    )
    ? e.default
    : e;
}
var Ef = { exports: {} },
  Wo = {},
  Tf = { exports: {} },
  se = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ws = Symbol.for("react.element"),
  z0 = Symbol.for("react.portal"),
  R0 = Symbol.for("react.fragment"),
  F0 = Symbol.for("react.strict_mode"),
  B0 = Symbol.for("react.profiler"),
  $0 = Symbol.for("react.provider"),
  H0 = Symbol.for("react.context"),
  U0 = Symbol.for("react.forward_ref"),
  V0 = Symbol.for("react.suspense"),
  W0 = Symbol.for("react.memo"),
  G0 = Symbol.for("react.lazy"),
  _u = Symbol.iterator;
function q0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (_u && e[_u]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var kf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Nf = Object.assign,
  Pf = {};
function oi(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pf),
    (this.updater = n || kf);
}
oi.prototype.isReactComponent = {};
oi.prototype.setState = function (e, t) {
  if (
    typeof e != "object" &&
    typeof e != "function" &&
    e != null
  )
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(
    this,
    e,
    t,
    "setState"
  );
};
oi.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(
    this,
    e,
    "forceUpdate"
  );
};
function Mf() {}
Mf.prototype = oi.prototype;
function lc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Pf),
    (this.updater = n || kf);
}
var ac = (lc.prototype = new Mf());
ac.constructor = lc;
Nf(ac, oi.prototype);
ac.isPureReactComponent = !0;
var zu = Array.isArray,
  Lf = Object.prototype.hasOwnProperty,
  cc = { current: null },
  Of = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function Af(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Lf.call(t, r) &&
        !Of.hasOwnProperty(r) &&
        (i[r] = t[r]);
  var c = arguments.length - 2;
  if (c === 1) i.children = n;
  else if (1 < c) {
    for (var a = Array(c), f = 0; f < c; f++)
      a[f] = arguments[f + 2];
    i.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((c = e.defaultProps), c))
      i[r] === void 0 && (i[r] = c[r]);
  return {
    $$typeof: ws,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: cc.current,
  };
}
function Y0(e, t) {
  return {
    $$typeof: ws,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function uc(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.$$typeof === ws
  );
}
function Q0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ru = /\/+/g;
function Sl(e, t) {
  return typeof e == "object" &&
    e !== null &&
    e.key != null
    ? Q0("" + e.key)
    : t.toString(36);
}
function to(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") &&
    (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ws:
          case z0:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + Sl(o, 0) : r),
      zu(i)
        ? ((n = ""),
          e != null &&
            (n = e.replace(Ru, "$&/") + "/"),
          to(i, t, n, "", function (f) {
            return f;
          }))
        : i != null &&
          (uc(i) &&
            (i = Y0(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(
                      Ru,
                      "$&/"
                    ) + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (
    ((o = 0),
    (r = r === "" ? "." : r + ":"),
    zu(e))
  )
    for (var c = 0; c < e.length; c++) {
      s = e[c];
      var a = r + Sl(s, c);
      o += to(s, t, n, a, i);
    }
  else if (((a = q0(e)), typeof a == "function"))
    for (
      e = a.call(e), c = 0;
      !(s = e.next()).done;

    )
      (s = s.value),
        (a = r + Sl(s, c++)),
        (o += to(s, t, n, a, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" +
              Object.keys(e).join(", ") +
              "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Is(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    to(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function K0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 &&
        ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var rt = { current: null },
  no = { transition: null },
  X0 = {
    ReactCurrentDispatcher: rt,
    ReactCurrentBatchConfig: no,
    ReactCurrentOwner: cc,
  };
se.Children = {
  map: Is,
  forEach: function (e, t, n) {
    Is(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Is(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Is(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!uc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
se.Component = oi;
se.Fragment = R0;
se.Profiler = B0;
se.PureComponent = lc;
se.StrictMode = F0;
se.Suspense = V0;
se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
  X0;
se.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Nf({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 &&
        ((s = t.ref), (o = cc.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var c = e.type.defaultProps;
    for (a in t)
      Lf.call(t, a) &&
        !Of.hasOwnProperty(a) &&
        (r[a] =
          t[a] === void 0 && c !== void 0
            ? c[a]
            : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    c = Array(a);
    for (var f = 0; f < a; f++)
      c[f] = arguments[f + 2];
    r.children = c;
  }
  return {
    $$typeof: ws,
    type: e.type,
    key: i,
    ref: s,
    props: r,
    _owner: o,
  };
};
se.createContext = function (e) {
  return (
    (e = {
      $$typeof: H0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: $0, _context: e }),
    (e.Consumer = e)
  );
};
se.createElement = Af;
se.createFactory = function (e) {
  var t = Af.bind(null, e);
  return (t.type = e), t;
};
se.createRef = function () {
  return { current: null };
};
se.forwardRef = function (e) {
  return { $$typeof: U0, render: e };
};
se.isValidElement = uc;
se.lazy = function (e) {
  return {
    $$typeof: G0,
    _payload: { _status: -1, _result: e },
    _init: K0,
  };
};
se.memo = function (e, t) {
  return {
    $$typeof: W0,
    type: e,
    compare: t === void 0 ? null : t,
  };
};
se.startTransition = function (e) {
  var t = no.transition;
  no.transition = {};
  try {
    e();
  } finally {
    no.transition = t;
  }
};
se.unstable_act = function () {
  throw Error(
    "act(...) is not supported in production builds of React."
  );
};
se.useCallback = function (e, t) {
  return rt.current.useCallback(e, t);
};
se.useContext = function (e) {
  return rt.current.useContext(e);
};
se.useDebugValue = function () {};
se.useDeferredValue = function (e) {
  return rt.current.useDeferredValue(e);
};
se.useEffect = function (e, t) {
  return rt.current.useEffect(e, t);
};
se.useId = function () {
  return rt.current.useId();
};
se.useImperativeHandle = function (e, t, n) {
  return rt.current.useImperativeHandle(e, t, n);
};
se.useInsertionEffect = function (e, t) {
  return rt.current.useInsertionEffect(e, t);
};
se.useLayoutEffect = function (e, t) {
  return rt.current.useLayoutEffect(e, t);
};
se.useMemo = function (e, t) {
  return rt.current.useMemo(e, t);
};
se.useReducer = function (e, t, n) {
  return rt.current.useReducer(e, t, n);
};
se.useRef = function (e) {
  return rt.current.useRef(e);
};
se.useState = function (e) {
  return rt.current.useState(e);
};
se.useSyncExternalStore = function (e, t, n) {
  return rt.current.useSyncExternalStore(e, t, n);
};
se.useTransition = function () {
  return rt.current.useTransition();
};
se.version = "18.2.0";
Tf.exports = se;
var D = Tf.exports;
const ae = si(D),
  Z0 = _0({ __proto__: null, default: ae }, [D]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var J0 = D,
  e1 = Symbol.for("react.element"),
  t1 = Symbol.for("react.fragment"),
  n1 = Object.prototype.hasOwnProperty,
  r1 =
    J0
      .__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      .ReactCurrentOwner,
  i1 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function Df(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t)
    n1.call(t, r) &&
      !i1.hasOwnProperty(r) &&
      (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t))
      i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: e1,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: r1.current,
  };
}
Wo.Fragment = t1;
Wo.jsx = Df;
Wo.jsxs = Df;
Ef.exports = Wo;
var l = Ef.exports,
  If = { exports: {} },
  St = {},
  _f = { exports: {} },
  zf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(z, B) {
    var G = z.length;
    z.push(B);
    e: for (; 0 < G; ) {
      var oe = (G - 1) >>> 1,
        he = z[oe];
      if (0 < i(he, B))
        (z[oe] = B), (z[G] = he), (G = oe);
      else break e;
    }
  }
  function n(z) {
    return z.length === 0 ? null : z[0];
  }
  function r(z) {
    if (z.length === 0) return null;
    var B = z[0],
      G = z.pop();
    if (G !== B) {
      z[0] = G;
      e: for (
        var oe = 0, he = z.length, Vt = he >>> 1;
        oe < Vt;

      ) {
        var fe = 2 * (oe + 1) - 1,
          ht = z[fe],
          Qe = fe + 1,
          vn = z[Qe];
        if (0 > i(ht, G))
          Qe < he && 0 > i(vn, ht)
            ? ((z[oe] = vn),
              (z[Qe] = G),
              (oe = Qe))
            : ((z[oe] = ht),
              (z[fe] = G),
              (oe = fe));
        else if (Qe < he && 0 > i(vn, G))
          (z[oe] = vn), (z[Qe] = G), (oe = Qe);
        else break e;
      }
    }
    return B;
  }
  function i(z, B) {
    var G = z.sortIndex - B.sortIndex;
    return G !== 0 ? G : z.id - B.id;
  }
  if (
    typeof performance == "object" &&
    typeof performance.now == "function"
  ) {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      c = o.now();
    e.unstable_now = function () {
      return o.now() - c;
    };
  }
  var a = [],
    f = [],
    p = 1,
    v = null,
    w = 3,
    b = !1,
    j = !1,
    S = !1,
    T =
      typeof setTimeout == "function"
        ? setTimeout
        : null,
    y =
      typeof clearTimeout == "function"
        ? clearTimeout
        : null,
    h =
      typeof setImmediate < "u"
        ? setImmediate
        : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !==
      void 0 &&
    navigator.scheduling.isInputPending.bind(
      navigator.scheduling
    );
  function g(z) {
    for (var B = n(f); B !== null; ) {
      if (B.callback === null) r(f);
      else if (B.startTime <= z)
        r(f),
          (B.sortIndex = B.expirationTime),
          t(a, B);
      else break;
      B = n(f);
    }
  }
  function x(z) {
    if (((S = !1), g(z), !j))
      if (n(a) !== null) (j = !0), pe(E);
      else {
        var B = n(f);
        B !== null && K(x, B.startTime - z);
      }
  }
  function E(z, B) {
    (j = !1),
      S && ((S = !1), y(A), (A = -1)),
      (b = !0);
    var G = w;
    try {
      for (
        g(B), v = n(a);
        v !== null &&
        (!(v.expirationTime > B) || (z && !I()));

      ) {
        var oe = v.callback;
        if (typeof oe == "function") {
          (v.callback = null),
            (w = v.priorityLevel);
          var he = oe(v.expirationTime <= B);
          (B = e.unstable_now()),
            typeof he == "function"
              ? (v.callback = he)
              : v === n(a) && r(a),
            g(B);
        } else r(a);
        v = n(a);
      }
      if (v !== null) var Vt = !0;
      else {
        var fe = n(f);
        fe !== null && K(x, fe.startTime - B),
          (Vt = !1);
      }
      return Vt;
    } finally {
      (v = null), (w = G), (b = !1);
    }
  }
  var k = !1,
    N = null,
    A = -1,
    P = 5,
    $ = -1;
  function I() {
    return !(e.unstable_now() - $ < P);
  }
  function F() {
    if (N !== null) {
      var z = e.unstable_now();
      $ = z;
      var B = !0;
      try {
        B = N(!0, z);
      } finally {
        B ? U() : ((k = !1), (N = null));
      }
    } else k = !1;
  }
  var U;
  if (typeof h == "function")
    U = function () {
      h(F);
    };
  else if (typeof MessageChannel < "u") {
    var Q = new MessageChannel(),
      te = Q.port2;
    (Q.port1.onmessage = F),
      (U = function () {
        te.postMessage(null);
      });
  } else
    U = function () {
      T(F, 0);
    };
  function pe(z) {
    (N = z), k || ((k = !0), U());
  }
  function K(z, B) {
    A = T(function () {
      z(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (z) {
      z.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      j || b || ((j = !0), pe(E));
    }),
    (e.unstable_forceFrameRate = function (z) {
      0 > z || 125 < z
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (P = 0 < z ? Math.floor(1e3 / z) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel =
      function () {
        return w;
      }),
    (e.unstable_getFirstCallbackNode =
      function () {
        return n(a);
      }),
    (e.unstable_next = function (z) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = w;
      }
      var G = w;
      w = B;
      try {
        return z();
      } finally {
        w = G;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (
      z,
      B
    ) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var G = w;
      w = z;
      try {
        return B();
      } finally {
        w = G;
      }
    }),
    (e.unstable_scheduleCallback = function (
      z,
      B,
      G
    ) {
      var oe = e.unstable_now();
      switch (
        (typeof G == "object" && G !== null
          ? ((G = G.delay),
            (G =
              typeof G == "number" && 0 < G
                ? oe + G
                : oe))
          : (G = oe),
        z)
      ) {
        case 1:
          var he = -1;
          break;
        case 2:
          he = 250;
          break;
        case 5:
          he = 1073741823;
          break;
        case 4:
          he = 1e4;
          break;
        default:
          he = 5e3;
      }
      return (
        (he = G + he),
        (z = {
          id: p++,
          callback: B,
          priorityLevel: z,
          startTime: G,
          expirationTime: he,
          sortIndex: -1,
        }),
        G > oe
          ? ((z.sortIndex = G),
            t(f, z),
            n(a) === null &&
              z === n(f) &&
              (S ? (y(A), (A = -1)) : (S = !0),
              K(x, G - oe)))
          : ((z.sortIndex = he),
            t(a, z),
            j || b || ((j = !0), pe(E))),
        z
      );
    }),
    (e.unstable_shouldYield = I),
    (e.unstable_wrapCallback = function (z) {
      var B = w;
      return function () {
        var G = w;
        w = B;
        try {
          return z.apply(this, arguments);
        } finally {
          w = G;
        }
      };
    });
})(zf);
_f.exports = zf;
var s1 = _f.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rf = D,
  bt = s1;
function R(e) {
  for (
    var t =
        "https://reactjs.org/docs/error-decoder.html?invariant=" +
        e,
      n = 1;
    n < arguments.length;
    n++
  )
    t +=
      "&args[]=" +
      encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Ff = new Set(),
  Xi = {};
function vr(e, t) {
  Xr(e, t), Xr(e + "Capture", t);
}
function Xr(e, t) {
  for (Xi[e] = t, e = 0; e < t.length; e++)
    Ff.add(t[e]);
}
var un = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ia = Object.prototype.hasOwnProperty,
  o1 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Fu = {},
  Bu = {};
function l1(e) {
  return ia.call(Bu, e)
    ? !0
    : ia.call(Fu, e)
    ? !1
    : o1.test(e)
    ? (Bu[e] = !0)
    : ((Fu[e] = !0), !1);
}
function a1(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)),
          e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function c1(e, t, n, r) {
  if (
    t === null ||
    typeof t > "u" ||
    a1(e, t, n, r)
  )
    return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function it(e, t, n, r, i, s, o) {
  (this.acceptsBooleans =
    t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new it(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ue[t] = new it(t, 1, !1, e[1], null, !1, !1);
});
[
  "contentEditable",
  "draggable",
  "spellCheck",
  "value",
].forEach(function (e) {
  Ue[e] = new it(
    e,
    2,
    !1,
    e.toLowerCase(),
    null,
    !1,
    !1
  );
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ue[e] = new it(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ue[e] = new it(
      e,
      3,
      !1,
      e.toLowerCase(),
      null,
      !1,
      !1
    );
  });
[
  "checked",
  "multiple",
  "muted",
  "selected",
].forEach(function (e) {
  Ue[e] = new it(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ue[e] = new it(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(
  function (e) {
    Ue[e] = new it(e, 6, !1, e, null, !1, !1);
  }
);
["rowSpan", "start"].forEach(function (e) {
  Ue[e] = new it(
    e,
    5,
    !1,
    e.toLowerCase(),
    null,
    !1,
    !1
  );
});
var dc = /[\-:]([a-z])/g;
function fc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fillRule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset strokeLinecap strokeLinejoin stroke-miterlimit stroke-opacity strokeWidth text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(dc, fc);
    Ue[t] = new it(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(dc, fc);
    Ue[t] = new it(
      t,
      1,
      !1,
      e,
      "http://www.w3.org/1999/xlink",
      !1,
      !1
    );
  });
["xml:base", "xml:lang", "xml:space"].forEach(
  function (e) {
    var t = e.replace(dc, fc);
    Ue[t] = new it(
      t,
      1,
      !1,
      e,
      "http://www.w3.org/XML/1998/namespace",
      !1,
      !1
    );
  }
);
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ue[e] = new it(
    e,
    1,
    !1,
    e.toLowerCase(),
    null,
    !1,
    !1
  );
});
Ue.xlinkHref = new it(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(
  function (e) {
    Ue[e] = new it(
      e,
      1,
      !1,
      e.toLowerCase(),
      null,
      !0,
      !0
    );
  }
);
function pc(e, t, n, r) {
  var i = Ue.hasOwnProperty(t) ? Ue[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (c1(t, n, i, r) && (n = null),
    r || i === null
      ? l1(t) &&
        (n === null
          ? e.removeAttribute(t)
          : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] =
          n === null
            ? i.type === 3
              ? !1
              : ""
            : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n =
              i === 3 || (i === 4 && n === !0)
                ? ""
                : "" + n),
            r
              ? e.setAttributeNS(r, t, n)
              : e.setAttribute(t, n))));
}
var mn =
    Rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  _s = Symbol.for("react.element"),
  Pr = Symbol.for("react.portal"),
  Mr = Symbol.for("react.fragment"),
  mc = Symbol.for("react.strict_mode"),
  sa = Symbol.for("react.profiler"),
  Bf = Symbol.for("react.provider"),
  $f = Symbol.for("react.context"),
  hc = Symbol.for("react.forward_ref"),
  oa = Symbol.for("react.suspense"),
  la = Symbol.for("react.suspense_list"),
  gc = Symbol.for("react.memo"),
  Cn = Symbol.for("react.lazy"),
  Hf = Symbol.for("react.offscreen"),
  $u = Symbol.iterator;
function wi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($u && e[$u]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ne = Object.assign,
  Cl;
function Ii(e) {
  if (Cl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack
        .trim()
        .match(/\n( *(at )?)/);
      Cl = (t && t[1]) || "";
    }
  return (
    `
` +
    Cl +
    e
  );
}
var jl = !1;
function El(e, t) {
  if (!e || jl) return "";
  jl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(
          t.prototype,
          "props",
          {
            set: function () {
              throw Error();
            },
          }
        ),
        typeof Reflect == "object" &&
          Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (f) {
          r = f;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var i = f.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          c = s.length - 1;
        1 <= o && 0 <= c && i[o] !== s[c];

      )
        c--;
      for (; 1 <= o && 0 <= c; o--, c--)
        if (i[o] !== s[c]) {
          if (o !== 1 || c !== 1)
            do
              if (
                (o--, c--, 0 > c || i[o] !== s[c])
              ) {
                var a =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace(
                      "<anonymous>",
                      e.displayName
                    )),
                  a
                );
              }
            while (1 <= o && 0 <= c);
          break;
        }
    }
  } finally {
    (jl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "")
    ? Ii(e)
    : "";
}
function u1(e) {
  switch (e.tag) {
    case 5:
      return Ii(e.type);
    case 16:
      return Ii("Lazy");
    case 13:
      return Ii("Suspense");
    case 19:
      return Ii("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = El(e.type, !1)), e;
    case 11:
      return (e = El(e.type.render, !1)), e;
    case 1:
      return (e = El(e.type, !0)), e;
    default:
      return "";
  }
}
function aa(e) {
  if (e == null) return null;
  if (typeof e == "function")
    return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mr:
      return "Fragment";
    case Pr:
      return "Portal";
    case sa:
      return "Profiler";
    case mc:
      return "StrictMode";
    case oa:
      return "Suspense";
    case la:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case $f:
        return (
          (e.displayName || "Context") +
          ".Consumer"
        );
      case Bf:
        return (
          (e._context.displayName || "Context") +
          ".Provider"
        );
      case hc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e =
              e !== ""
                ? "ForwardRef(" + e + ")"
                : "ForwardRef")),
          e
        );
      case gc:
        return (
          (t = e.displayName || null),
          t !== null ? t : aa(e.type) || "Memo"
        );
      case Cn:
        (t = e._payload), (e = e._init);
        try {
          return aa(e(t));
        } catch {}
    }
  return null;
}
function d1(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (
        (t.displayName || "Context") + ".Consumer"
      );
    case 10:
      return (
        (t._context.displayName || "Context") +
        ".Provider"
      );
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName ||
          (e !== ""
            ? "ForwardRef(" + e + ")"
            : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return aa(t);
    case 8:
      return t === mc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Bn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Uf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function f1(e) {
  var t = Uf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, {
        enumerable: n.enumerable,
      }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function zs(e) {
  e._valueTracker || (e._valueTracker = f1(e));
}
function Vf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e &&
      (r = Uf(e)
        ? e.checked
          ? "true"
          : "false"
        : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function vo(e) {
  if (
    ((e =
      e ||
      (typeof document < "u"
        ? document
        : void 0)),
    typeof e > "u")
  )
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ca(e, t) {
  var n = t.checked;
  return Ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Hu(e, t) {
  var n =
      t.defaultValue == null
        ? ""
        : t.defaultValue,
    r =
      t.checked != null
        ? t.checked
        : t.defaultChecked;
  (n = Bn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" ||
        t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Wf(e, t) {
  (t = t.checked),
    t != null && pc(e, "checked", t, !1);
}
function ua(e, t) {
  Wf(e, t);
  var n = Bn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") ||
          e.value != n) &&
        (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? da(e, t.type, n)
    : t.hasOwnProperty("defaultValue") &&
      da(e, t.type, Bn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Uu(e, t, n) {
  if (
    t.hasOwnProperty("value") ||
    t.hasOwnProperty("defaultValue")
  ) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked =
      !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function da(e, t, n) {
  (t !== "number" || vo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue =
          "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n &&
        (e.defaultValue = "" + n));
}
var _i = Array.isArray;
function Ur(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++)
      t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i &&
          (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (
      n = "" + Bn(n), t = null, i = 0;
      i < e.length;
      i++
    ) {
      if (e[i].value === n) {
        (e[i].selected = !0),
          r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function fa(e, t) {
  if (t.dangerouslySetInnerHTML != null)
    throw Error(R(91));
  return Ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Vu(e, t) {
  var n = t.value;
  if (n == null) {
    if (
      ((n = t.children),
      (t = t.defaultValue),
      n != null)
    ) {
      if (t != null) throw Error(R(92));
      if (_i(n)) {
        if (1 < n.length) throw Error(R(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Bn(n) };
}
function Gf(e, t) {
  var n = Bn(t.value),
    r = Bn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null &&
      e.defaultValue !== n &&
      (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Wu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue &&
    t !== "" &&
    t !== null &&
    (e.value = t);
}
function qf(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pa(e, t) {
  return e == null ||
    e === "http://www.w3.org/1999/xhtml"
    ? qf(t)
    : e === "http://www.w3.org/2000/svg" &&
      t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Rs,
  Yf = (function (e) {
    return typeof MSApp < "u" &&
      MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(
            function () {
              return e(t, n, r, i);
            }
          );
        }
      : e;
  })(function (e, t) {
    if (
      e.namespaceURI !==
        "http://www.w3.org/2000/svg" ||
      "innerHTML" in e
    )
      e.innerHTML = t;
    else {
      for (
        Rs = Rs || document.createElement("div"),
          Rs.innerHTML =
            "<svg>" +
            t.valueOf().toString() +
            "</svg>",
          t = Rs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; )
        e.appendChild(t.firstChild);
    }
  });
function Zi(e, t) {
  if (t) {
    var n = e.firstChild;
    if (
      n &&
      n === e.lastChild &&
      n.nodeType === 3
    ) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Bi = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  p1 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Bi).forEach(function (e) {
  p1.forEach(function (t) {
    (t =
      t +
      e.charAt(0).toUpperCase() +
      e.substring(1)),
      (Bi[t] = Bi[e]);
  });
});
function Qf(e, t, n) {
  return t == null ||
    typeof t == "boolean" ||
    t === ""
    ? ""
    : n ||
      typeof t != "number" ||
      t === 0 ||
      (Bi.hasOwnProperty(e) && Bi[e])
    ? ("" + t).trim()
    : t + "px";
}
function Kf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Qf(n, t[n], r);
      n === "float" && (n = "cssFloat"),
        r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var m1 = Ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ma(e, t) {
  if (t) {
    if (
      m1[e] &&
      (t.children != null ||
        t.dangerouslySetInnerHTML != null)
    )
      throw Error(R(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(R(60));
      if (
        typeof t.dangerouslySetInnerHTML !=
          "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(R(61));
    }
    if (
      t.style != null &&
      typeof t.style != "object"
    )
      throw Error(R(62));
  }
}
function ha(e, t) {
  if (e.indexOf("-") === -1)
    return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ga = null;
function vc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement &&
      (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var va = null,
  Vr = null,
  Wr = null;
function Gu(e) {
  if ((e = Cs(e))) {
    if (typeof va != "function")
      throw Error(R(280));
    var t = e.stateNode;
    t &&
      ((t = Ko(t)), va(e.stateNode, e.type, t));
  }
}
function Xf(e) {
  Vr ? (Wr ? Wr.push(e) : (Wr = [e])) : (Vr = e);
}
function Zf() {
  if (Vr) {
    var e = Vr,
      t = Wr;
    if (((Wr = Vr = null), Gu(e), t))
      for (e = 0; e < t.length; e++) Gu(t[e]);
  }
}
function Jf(e, t) {
  return e(t);
}
function ep() {}
var Tl = !1;
function tp(e, t, n) {
  if (Tl) return e(t, n);
  Tl = !0;
  try {
    return Jf(e, t, n);
  } finally {
    (Tl = !1),
      (Vr !== null || Wr !== null) &&
        (ep(), Zf());
  }
}
function Ji(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ko(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function")
    throw Error(R(231, t, typeof n));
  return n;
}
var ya = !1;
if (un)
  try {
    var bi = {};
    Object.defineProperty(bi, "passive", {
      get: function () {
        ya = !0;
      },
    }),
      window.addEventListener("test", bi, bi),
      window.removeEventListener("test", bi, bi);
  } catch {
    ya = !1;
  }
function h1(e, t, n, r, i, s, o, c, a) {
  var f = Array.prototype.slice.call(
    arguments,
    3
  );
  try {
    t.apply(n, f);
  } catch (p) {
    this.onError(p);
  }
}
var $i = !1,
  yo = null,
  xo = !1,
  xa = null,
  g1 = {
    onError: function (e) {
      ($i = !0), (yo = e);
    },
  };
function v1(e, t, n, r, i, s, o, c, a) {
  ($i = !1), (yo = null), h1.apply(g1, arguments);
}
function y1(e, t, n, r, i, s, o, c, a) {
  if ((v1.apply(this, arguments), $i)) {
    if ($i) {
      var f = yo;
      ($i = !1), (yo = null);
    } else throw Error(R(198));
    xo || ((xo = !0), (xa = f));
  }
}
function yr(e) {
  var t = e,
    n = e;
  if (e.alternate)
    for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      (t = e),
        t.flags & 4098 && (n = t.return),
        (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function np(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null &&
        ((e = e.alternate),
        e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function qu(e) {
  if (yr(e) !== e) throw Error(R(188));
}
function x1(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = yr(e)), t === null))
      throw Error(R(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return qu(i), e;
        if (s === r) return qu(i), t;
        s = s.sibling;
      }
      throw Error(R(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, c = i.child; c; ) {
        if (c === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (c === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        c = c.sibling;
      }
      if (!o) {
        for (c = s.child; c; ) {
          if (c === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (c === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          c = c.sibling;
        }
        if (!o) throw Error(R(189));
      }
    }
    if (n.alternate !== r) throw Error(R(190));
  }
  if (n.tag !== 3) throw Error(R(188));
  return n.stateNode.current === n ? e : t;
}
function rp(e) {
  return (e = x1(e)), e !== null ? ip(e) : null;
}
function ip(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ip(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var sp = bt.unstable_scheduleCallback,
  Yu = bt.unstable_cancelCallback,
  w1 = bt.unstable_shouldYield,
  b1 = bt.unstable_requestPaint,
  Le = bt.unstable_now,
  S1 = bt.unstable_getCurrentPriorityLevel,
  yc = bt.unstable_ImmediatePriority,
  op = bt.unstable_UserBlockingPriority,
  wo = bt.unstable_NormalPriority,
  C1 = bt.unstable_LowPriority,
  lp = bt.unstable_IdlePriority,
  Go = null,
  Zt = null;
function j1(e) {
  if (
    Zt &&
    typeof Zt.onCommitFiberRoot == "function"
  )
    try {
      Zt.onCommitFiberRoot(
        Go,
        e,
        void 0,
        (e.current.flags & 128) === 128
      );
    } catch {}
}
var $t = Math.clz32 ? Math.clz32 : k1,
  E1 = Math.log,
  T1 = Math.LN2;
function k1(e) {
  return (
    (e >>>= 0),
    e === 0 ? 32 : (31 - ((E1(e) / T1) | 0)) | 0
  );
}
var Fs = 64,
  Bs = 4194304;
function zi(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function bo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var c = o & ~i;
    c !== 0
      ? (r = zi(c))
      : ((s &= o), s !== 0 && (r = zi(s)));
  } else
    (o = n & ~i),
      o !== 0
        ? (r = zi(o))
        : s !== 0 && (r = zi(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r),
    (s = t & -t),
    i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if (
    (r & 4 && (r |= n & 16),
    (t = e.entangledLanes),
    t !== 0)
  )
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - $t(t)),
        (i = 1 << n),
        (r |= e[n]),
        (t &= ~i);
  return r;
}
function N1(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function P1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - $t(s),
      c = 1 << o,
      a = i[o];
    a === -1
      ? (!(c & n) || c & r) && (i[o] = N1(c, t))
      : a <= t && (e.expiredLanes |= c),
      (s &= ~c);
  }
}
function wa(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function ap() {
  var e = Fs;
  return (
    (Fs <<= 1), !(Fs & 4194240) && (Fs = 64), e
  );
}
function kl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function bs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 &&
      ((e.suspendedLanes = 0),
      (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $t(t)),
    (e[t] = n);
}
function M1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - $t(n),
      s = 1 << i;
    (t[i] = 0),
      (r[i] = -1),
      (e[i] = -1),
      (n &= ~s);
  }
}
function xc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $t(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t),
      (n &= ~i);
  }
}
var de = 0;
function cp(e) {
  return (
    (e &= -e),
    1 < e
      ? 4 < e
        ? e & 268435455
          ? 16
          : 536870912
        : 4
      : 1
  );
}
var up,
  wc,
  dp,
  fp,
  pp,
  ba = !1,
  $s = [],
  Ln = null,
  On = null,
  An = null,
  es = new Map(),
  ts = new Map(),
  En = [],
  L1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Qu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Ln = null;
      break;
    case "dragenter":
    case "dragleave":
      On = null;
      break;
    case "mouseover":
    case "mouseout":
      An = null;
      break;
    case "pointerover":
    case "pointerout":
      es.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ts.delete(t.pointerId);
  }
}
function Si(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null &&
        ((t = Cs(t)), t !== null && wc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null &&
        t.indexOf(i) === -1 &&
        t.push(i),
      e);
}
function O1(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Ln = Si(Ln, e, t, n, r, i)), !0;
    case "dragenter":
      return (On = Si(On, e, t, n, r, i)), !0;
    case "mouseover":
      return (An = Si(An, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return (
        es.set(
          s,
          Si(es.get(s) || null, e, t, n, r, i)
        ),
        !0
      );
    case "gotpointercapture":
      return (
        (s = i.pointerId),
        ts.set(
          s,
          Si(ts.get(s) || null, e, t, n, r, i)
        ),
        !0
      );
  }
  return !1;
}
function mp(e) {
  var t = nr(e.target);
  if (t !== null) {
    var n = yr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = np(n)), t !== null)) {
          (e.blockedOn = t),
            pp(e.priority, function () {
              dp(n);
            });
          return;
        }
      } else if (
        t === 3 &&
        n.stateNode.current.memoizedState
          .isDehydrated
      ) {
        e.blockedOn =
          n.tag === 3
            ? n.stateNode.containerInfo
            : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ro(e) {
  if (e.blockedOn !== null) return !1;
  for (
    var t = e.targetContainers;
    0 < t.length;

  ) {
    var n = Sa(
      e.domEventName,
      e.eventSystemFlags,
      t[0],
      e.nativeEvent
    );
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ga = r),
        n.target.dispatchEvent(r),
        (ga = null);
    } else
      return (
        (t = Cs(n)),
        t !== null && wc(t),
        (e.blockedOn = n),
        !1
      );
    t.shift();
  }
  return !0;
}
function Ku(e, t, n) {
  ro(e) && n.delete(t);
}
function A1() {
  (ba = !1),
    Ln !== null && ro(Ln) && (Ln = null),
    On !== null && ro(On) && (On = null),
    An !== null && ro(An) && (An = null),
    es.forEach(Ku),
    ts.forEach(Ku);
}
function Ci(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ba ||
      ((ba = !0),
      bt.unstable_scheduleCallback(
        bt.unstable_NormalPriority,
        A1
      )));
}
function ns(e) {
  function t(i) {
    return Ci(i, e);
  }
  if (0 < $s.length) {
    Ci($s[0], e);
    for (var n = 1; n < $s.length; n++) {
      var r = $s[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Ln !== null && Ci(Ln, e),
      On !== null && Ci(On, e),
      An !== null && Ci(An, e),
      es.forEach(t),
      ts.forEach(t),
      n = 0;
    n < En.length;
    n++
  )
    (r = En[n]),
      r.blockedOn === e && (r.blockedOn = null);
  for (
    ;
    0 < En.length &&
    ((n = En[0]), n.blockedOn === null);

  )
    mp(n), n.blockedOn === null && En.shift();
}
var Gr = mn.ReactCurrentBatchConfig,
  So = !0;
function D1(e, t, n, r) {
  var i = de,
    s = Gr.transition;
  Gr.transition = null;
  try {
    (de = 1), bc(e, t, n, r);
  } finally {
    (de = i), (Gr.transition = s);
  }
}
function I1(e, t, n, r) {
  var i = de,
    s = Gr.transition;
  Gr.transition = null;
  try {
    (de = 4), bc(e, t, n, r);
  } finally {
    (de = i), (Gr.transition = s);
  }
}
function bc(e, t, n, r) {
  if (So) {
    var i = Sa(e, t, n, r);
    if (i === null) zl(e, t, r, Co, n), Qu(e, r);
    else if (O1(i, e, t, n, r))
      r.stopPropagation();
    else if (
      (Qu(e, r), t & 4 && -1 < L1.indexOf(e))
    ) {
      for (; i !== null; ) {
        var s = Cs(i);
        if (
          (s !== null && up(s),
          (s = Sa(e, t, n, r)),
          s === null && zl(e, t, r, Co, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else zl(e, t, r, null, n);
  }
}
var Co = null;
function Sa(e, t, n, r) {
  if (
    ((Co = null),
    (e = vc(r)),
    (e = nr(e)),
    e !== null)
  )
    if (((t = yr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = np(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (
        t.stateNode.current.memoizedState
          .isDehydrated
      )
        return t.tag === 3
          ? t.stateNode.containerInfo
          : null;
      e = null;
    } else t !== e && (e = null);
  return (Co = e), null;
}
function hp(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (S1()) {
        case yc:
          return 1;
        case op:
          return 4;
        case wo:
        case C1:
          return 16;
        case lp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kn = null,
  Sc = null,
  io = null;
function gp() {
  if (io) return io;
  var e,
    t = Sc,
    n = t.length,
    r,
    i = "value" in kn ? kn.value : kn.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (
    r = 1;
    r <= o && t[n - r] === i[s - r];
    r++
  );
  return (io = i.slice(
    e,
    1 < r ? 1 - r : void 0
  ));
}
function so(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode),
        e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Hs() {
  return !0;
}
function Xu() {
  return !1;
}
function Ct(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var c in e)
      e.hasOwnProperty(c) &&
        ((n = e[c]), (this[c] = n ? n(s) : s[c]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null
          ? s.defaultPrevented
          : s.returnValue === !1
      )
        ? Hs
        : Xu),
      (this.isPropagationStopped = Xu),
      this
    );
  }
  return (
    Ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" &&
              (n.returnValue = !1),
          (this.isDefaultPrevented = Hs));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble !=
                "unknown" &&
              (n.cancelBubble = !0),
          (this.isPropagationStopped = Hs));
      },
      persist: function () {},
      isPersistent: Hs,
    }),
    t
  );
}
var li = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Cc = Ct(li),
  Ss = Ne({}, li, { view: 0, detail: 0 }),
  _1 = Ct(Ss),
  Nl,
  Pl,
  ji,
  qo = Ne({}, Ss, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: jc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ji &&
            (ji && e.type === "mousemove"
              ? ((Nl = e.screenX - ji.screenX),
                (Pl = e.screenY - ji.screenY))
              : (Pl = Nl = 0),
            (ji = e)),
          Nl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Pl;
    },
  }),
  Zu = Ct(qo),
  z1 = Ne({}, qo, { dataTransfer: 0 }),
  R1 = Ct(z1),
  F1 = Ne({}, Ss, { relatedTarget: 0 }),
  Ml = Ct(F1),
  B1 = Ne({}, li, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  $1 = Ct(B1),
  H1 = Ne({}, li, {
    clipboardData: function (e) {
      return "clipboardData" in e
        ? e.clipboardData
        : window.clipboardData;
    },
  }),
  U1 = Ct(H1),
  V1 = Ne({}, li, { data: 0 }),
  Ju = Ct(V1),
  W1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  G1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  q1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Y1(e) {
  var t = this.nativeEvent;
  return t.getModifierState
    ? t.getModifierState(e)
    : (e = q1[e])
    ? !!t[e]
    : !1;
}
function jc() {
  return Y1;
}
var Q1 = Ne({}, Ss, {
    key: function (e) {
      if (e.key) {
        var t = W1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = so(e)),
          e === 13
            ? "Enter"
            : String.fromCharCode(e))
        : e.type === "keydown" ||
          e.type === "keyup"
        ? G1[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: jc,
    charCode: function (e) {
      return e.type === "keypress" ? so(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" ||
        e.type === "keyup"
        ? e.keyCode
        : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? so(e)
        : e.type === "keydown" ||
          e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  K1 = Ct(Q1),
  X1 = Ne({}, qo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ed = Ct(X1),
  Z1 = Ne({}, Ss, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: jc,
  }),
  J1 = Ct(Z1),
  ev = Ne({}, li, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  tv = Ct(ev),
  nv = Ne({}, qo, {
    deltaX: function (e) {
      return "deltaX" in e
        ? e.deltaX
        : "wheelDeltaX" in e
        ? -e.wheelDeltaX
        : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  rv = Ct(nv),
  iv = [9, 13, 27, 32],
  Ec = un && "CompositionEvent" in window,
  Hi = null;
un &&
  "documentMode" in document &&
  (Hi = document.documentMode);
var sv = un && "TextEvent" in window && !Hi,
  vp = un && (!Ec || (Hi && 8 < Hi && 11 >= Hi)),
  td = String.fromCharCode(32),
  nd = !1;
function yp(e, t) {
  switch (e) {
    case "keyup":
      return iv.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function xp(e) {
  return (
    (e = e.detail),
    typeof e == "object" && "data" in e
      ? e.data
      : null
  );
}
var Lr = !1;
function ov(e, t) {
  switch (e) {
    case "compositionend":
      return xp(t);
    case "keypress":
      return t.which !== 32
        ? null
        : ((nd = !0), td);
    case "textInput":
      return (
        (e = t.data), e === td && nd ? null : e
      );
    default:
      return null;
  }
}
function lv(e, t) {
  if (Lr)
    return e === "compositionend" ||
      (!Ec && yp(e, t))
      ? ((e = gp()),
        (io = Sc = kn = null),
        (Lr = !1),
        e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (
        !(t.ctrlKey || t.altKey || t.metaKey) ||
        (t.ctrlKey && t.altKey)
      ) {
        if (t.char && 1 < t.char.length)
          return t.char;
        if (t.which)
          return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return vp && t.locale !== "ko"
        ? null
        : t.data;
    default:
      return null;
  }
}
var av = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function rd(e) {
  var t =
    e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input"
    ? !!av[e.type]
    : t === "textarea";
}
function wp(e, t, n, r) {
  Xf(r),
    (t = jo(t, "onChange")),
    0 < t.length &&
      ((n = new Cc(
        "onChange",
        "change",
        null,
        n,
        r
      )),
      e.push({ event: n, listeners: t }));
}
var Ui = null,
  rs = null;
function cv(e) {
  Lp(e, 0);
}
function Yo(e) {
  var t = Dr(e);
  if (Vf(t)) return e;
}
function uv(e, t) {
  if (e === "change") return t;
}
var bp = !1;
if (un) {
  var Ll;
  if (un) {
    var Ol = "oninput" in document;
    if (!Ol) {
      var id = document.createElement("div");
      id.setAttribute("oninput", "return;"),
        (Ol = typeof id.oninput == "function");
    }
    Ll = Ol;
  } else Ll = !1;
  bp =
    Ll &&
    (!document.documentMode ||
      9 < document.documentMode);
}
function sd() {
  Ui &&
    (Ui.detachEvent("onpropertychange", Sp),
    (rs = Ui = null));
}
function Sp(e) {
  if (e.propertyName === "value" && Yo(rs)) {
    var t = [];
    wp(t, rs, e, vc(e)), tp(cv, t);
  }
}
function dv(e, t, n) {
  e === "focusin"
    ? (sd(),
      (Ui = t),
      (rs = n),
      Ui.attachEvent("onpropertychange", Sp))
    : e === "focusout" && sd();
}
function fv(e) {
  if (
    e === "selectionchange" ||
    e === "keyup" ||
    e === "keydown"
  )
    return Yo(rs);
}
function pv(e, t) {
  if (e === "click") return Yo(t);
}
function mv(e, t) {
  if (e === "input" || e === "change")
    return Yo(t);
}
function hv(e, t) {
  return (
    (e === t && (e !== 0 || 1 / e === 1 / t)) ||
    (e !== e && t !== t)
  );
}
var Ut =
  typeof Object.is == "function" ? Object.is : hv;
function is(e, t) {
  if (Ut(e, t)) return !0;
  if (
    typeof e != "object" ||
    e === null ||
    typeof t != "object" ||
    t === null
  )
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ia.call(t, i) || !Ut(e[i], t[i]))
      return !1;
  }
  return !0;
}
function od(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ld(e, t) {
  var n = od(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (
        ((r = e + n.textContent.length),
        e <= t && r >= t)
      )
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = od(n);
  }
}
function Cp(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Cp(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function jp() {
  for (
    var e = window, t = vo();
    t instanceof e.HTMLIFrameElement;

  ) {
    try {
      var n =
        typeof t.contentWindow.location.href ==
        "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = vo(e.document);
  }
  return t;
}
function Tc(e) {
  var t =
    e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function gv(e) {
  var t = jp(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Cp(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Tc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t),
          (n.selectionEnd = Math.min(
            e,
            n.value.length
          ));
      else if (
        ((e =
          ((t = n.ownerDocument || document) &&
            t.defaultView) ||
          window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r =
          r.end === void 0
            ? s
            : Math.min(r.end, i)),
          !e.extend &&
            s > r &&
            ((i = r), (r = s), (s = i)),
          (i = ld(n, s));
        var o = ld(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t),
              e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset),
              e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop,
        });
    for (
      typeof n.focus == "function" && n.focus(),
        n = 0;
      n < t.length;
      n++
    )
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var vv =
    un &&
    "documentMode" in document &&
    11 >= document.documentMode,
  Or = null,
  Ca = null,
  Vi = null,
  ja = !1;
function ad(e, t, n) {
  var r =
    n.window === n
      ? n.document
      : n.nodeType === 9
      ? n
      : n.ownerDocument;
  ja ||
    Or == null ||
    Or !== vo(r) ||
    ((r = Or),
    "selectionStart" in r && Tc(r)
      ? (r = {
          start: r.selectionStart,
          end: r.selectionEnd,
        })
      : ((r = (
          (r.ownerDocument &&
            r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Vi && is(Vi, r)) ||
      ((Vi = r),
      (r = jo(Ca, "onSelect")),
      0 < r.length &&
        ((t = new Cc(
          "onSelect",
          "select",
          null,
          t,
          n
        )),
        e.push({ event: t, listeners: r }),
        (t.target = Or))));
}
function Us(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ar = {
    animationend: Us("Animation", "AnimationEnd"),
    animationiteration: Us(
      "Animation",
      "AnimationIteration"
    ),
    animationstart: Us(
      "Animation",
      "AnimationStart"
    ),
    transitionend: Us(
      "Transition",
      "TransitionEnd"
    ),
  },
  Al = {},
  Ep = {};
un &&
  ((Ep = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ar.animationend.animation,
    delete Ar.animationiteration.animation,
    delete Ar.animationstart.animation),
  "TransitionEvent" in window ||
    delete Ar.transitionend.transition);
function Qo(e) {
  if (Al[e]) return Al[e];
  if (!Ar[e]) return e;
  var t = Ar[e],
    n;
  for (n in t)
    if (t.hasOwnProperty(n) && n in Ep)
      return (Al[e] = t[n]);
  return e;
}
var Tp = Qo("animationend"),
  kp = Qo("animationiteration"),
  Np = Qo("animationstart"),
  Pp = Qo("transitionend"),
  Mp = new Map(),
  cd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Un(e, t) {
  Mp.set(e, t), vr(t, [e]);
}
for (var Dl = 0; Dl < cd.length; Dl++) {
  var Il = cd[Dl],
    yv = Il.toLowerCase(),
    xv = Il[0].toUpperCase() + Il.slice(1);
  Un(yv, "on" + xv);
}
Un(Tp, "onAnimationEnd");
Un(kp, "onAnimationIteration");
Un(Np, "onAnimationStart");
Un("dblclick", "onDoubleClick");
Un("focusin", "onFocus");
Un("focusout", "onBlur");
Un(Pp, "onTransitionEnd");
Xr("onMouseEnter", ["mouseout", "mouseover"]);
Xr("onMouseLeave", ["mouseout", "mouseover"]);
Xr("onPointerEnter", [
  "pointerout",
  "pointerover",
]);
Xr("onPointerLeave", [
  "pointerout",
  "pointerover",
]);
vr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " "
  )
);
vr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
vr("onBeforeInput", [
  "compositionend",
  "keypress",
  "textInput",
  "paste",
]);
vr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(
    " "
  )
);
vr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(
    " "
  )
);
vr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(
    " "
  )
);
var Ri =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  wv = new Set(
    "cancel close invalid load scroll toggle"
      .split(" ")
      .concat(Ri)
  );
function ud(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n),
    y1(r, t, void 0, e),
    (e.currentTarget = null);
}
function Lp(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var c = r[o],
            a = c.instance,
            f = c.currentTarget;
          if (
            ((c = c.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          ud(i, c, f), (s = a);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((c = r[o]),
            (a = c.instance),
            (f = c.currentTarget),
            (c = c.listener),
            a !== s && i.isPropagationStopped())
          )
            break e;
          ud(i, c, f), (s = a);
        }
    }
  }
  if (xo)
    throw ((e = xa), (xo = !1), (xa = null), e);
}
function xe(e, t) {
  var n = t[Pa];
  n === void 0 && (n = t[Pa] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Op(t, e, 2, !1), n.add(r));
}
function _l(e, t, n) {
  var r = 0;
  t && (r |= 4), Op(n, e, r, t);
}
var Vs =
  "_reactListening" +
  Math.random().toString(36).slice(2);
function ss(e) {
  if (!e[Vs]) {
    (e[Vs] = !0),
      Ff.forEach(function (n) {
        n !== "selectionchange" &&
          (wv.has(n) || _l(n, !1, e),
          _l(n, !0, e));
      });
    var t =
      e.nodeType === 9 ? e : e.ownerDocument;
    t === null ||
      t[Vs] ||
      ((t[Vs] = !0),
      _l("selectionchange", !1, t));
  }
}
function Op(e, t, n, r) {
  switch (hp(t)) {
    case 1:
      var i = D1;
      break;
    case 4:
      i = I1;
      break;
    default:
      i = bc;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ya ||
      (t !== "touchstart" &&
        t !== "touchmove" &&
        t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, {
            capture: !0,
            passive: i,
          })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function zl(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var c = r.stateNode.containerInfo;
        if (
          c === i ||
          (c.nodeType === 8 && c.parentNode === i)
        )
          break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var a = o.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = o.stateNode.containerInfo),
              a === i ||
                (a.nodeType === 8 &&
                  a.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; c !== null; ) {
          if (((o = nr(c)), o === null)) return;
          if (((a = o.tag), a === 5 || a === 6)) {
            r = s = o;
            continue e;
          }
          c = c.parentNode;
        }
      }
      r = r.return;
    }
  tp(function () {
    var f = s,
      p = vc(n),
      v = [];
    e: {
      var w = Mp.get(e);
      if (w !== void 0) {
        var b = Cc,
          j = e;
        switch (e) {
          case "keypress":
            if (so(n) === 0) break e;
          case "keydown":
          case "keyup":
            b = K1;
            break;
          case "focusin":
            (j = "focus"), (b = Ml);
            break;
          case "focusout":
            (j = "blur"), (b = Ml);
            break;
          case "beforeblur":
          case "afterblur":
            b = Ml;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            b = Zu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = R1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = J1;
            break;
          case Tp:
          case kp:
          case Np:
            b = $1;
            break;
          case Pp:
            b = tv;
            break;
          case "scroll":
            b = _1;
            break;
          case "wheel":
            b = rv;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = U1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = ed;
        }
        var S = (t & 4) !== 0,
          T = !S && e === "scroll",
          y = S
            ? w !== null
              ? w + "Capture"
              : null
            : w;
        S = [];
        for (var h = f, g; h !== null; ) {
          g = h;
          var x = g.stateNode;
          if (
            (g.tag === 5 &&
              x !== null &&
              ((g = x),
              y !== null &&
                ((x = Ji(h, y)),
                x != null &&
                  S.push(os(h, x, g)))),
            T)
          )
            break;
          h = h.return;
        }
        0 < S.length &&
          ((w = new b(w, j, null, n, p)),
          v.push({ event: w, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((w =
            e === "mouseover" ||
            e === "pointerover"),
          (b =
            e === "mouseout" ||
            e === "pointerout"),
          w &&
            n !== ga &&
            (j =
              n.relatedTarget || n.fromElement) &&
            (nr(j) || j[dn]))
        )
          break e;
        if (
          (b || w) &&
          ((w =
            p.window === p
              ? p
              : (w = p.ownerDocument)
              ? w.defaultView || w.parentWindow
              : window),
          b
            ? ((j =
                n.relatedTarget || n.toElement),
              (b = f),
              (j = j ? nr(j) : null),
              j !== null &&
                ((T = yr(j)),
                j !== T ||
                  (j.tag !== 5 && j.tag !== 6)) &&
                (j = null))
            : ((b = null), (j = f)),
          b !== j)
        ) {
          if (
            ((S = Zu),
            (x = "onMouseLeave"),
            (y = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" ||
              e === "pointerover") &&
              ((S = ed),
              (x = "onPointerLeave"),
              (y = "onPointerEnter"),
              (h = "pointer")),
            (T = b == null ? w : Dr(b)),
            (g = j == null ? w : Dr(j)),
            (w = new S(x, h + "leave", b, n, p)),
            (w.target = T),
            (w.relatedTarget = g),
            (x = null),
            nr(p) === f &&
              ((S = new S(
                y,
                h + "enter",
                j,
                n,
                p
              )),
              (S.target = g),
              (S.relatedTarget = T),
              (x = S)),
            (T = x),
            b && j)
          )
            t: {
              for (
                S = b, y = j, h = 0, g = S;
                g;
                g = kr(g)
              )
                h++;
              for (g = 0, x = y; x; x = kr(x))
                g++;
              for (; 0 < h - g; )
                (S = kr(S)), h--;
              for (; 0 < g - h; )
                (y = kr(y)), g--;
              for (; h--; ) {
                if (
                  S === y ||
                  (y !== null &&
                    S === y.alternate)
                )
                  break t;
                (S = kr(S)), (y = kr(y));
              }
              S = null;
            }
          else S = null;
          b !== null && dd(v, w, b, S, !1),
            j !== null &&
              T !== null &&
              dd(v, T, j, S, !0);
        }
      }
      e: {
        if (
          ((w = f ? Dr(f) : window),
          (b =
            w.nodeName &&
            w.nodeName.toLowerCase()),
          b === "select" ||
            (b === "input" && w.type === "file"))
        )
          var E = uv;
        else if (rd(w))
          if (bp) E = mv;
          else {
            E = fv;
            var k = dv;
          }
        else
          (b = w.nodeName) &&
            b.toLowerCase() === "input" &&
            (w.type === "checkbox" ||
              w.type === "radio") &&
            (E = pv);
        if (E && (E = E(e, f))) {
          wp(v, E, n, p);
          break e;
        }
        k && k(e, w, f),
          e === "focusout" &&
            (k = w._wrapperState) &&
            k.controlled &&
            w.type === "number" &&
            da(w, "number", w.value);
      }
      switch (((k = f ? Dr(f) : window), e)) {
        case "focusin":
          (rd(k) ||
            k.contentEditable === "true") &&
            ((Or = k), (Ca = f), (Vi = null));
          break;
        case "focusout":
          Vi = Ca = Or = null;
          break;
        case "mousedown":
          ja = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ja = !1), ad(v, n, p);
          break;
        case "selectionchange":
          if (vv) break;
        case "keydown":
        case "keyup":
          ad(v, n, p);
      }
      var N;
      if (Ec)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        Lr
          ? yp(e, n) && (A = "onCompositionEnd")
          : e === "keydown" &&
            n.keyCode === 229 &&
            (A = "onCompositionStart");
      A &&
        (vp &&
          n.locale !== "ko" &&
          (Lr || A !== "onCompositionStart"
            ? A === "onCompositionEnd" &&
              Lr &&
              (N = gp())
            : ((kn = p),
              (Sc =
                "value" in kn
                  ? kn.value
                  : kn.textContent),
              (Lr = !0))),
        (k = jo(f, A)),
        0 < k.length &&
          ((A = new Ju(A, e, null, n, p)),
          v.push({ event: A, listeners: k }),
          N
            ? (A.data = N)
            : ((N = xp(n)),
              N !== null && (A.data = N)))),
        (N = sv ? ov(e, n) : lv(e, n)) &&
          ((f = jo(f, "onBeforeInput")),
          0 < f.length &&
            ((p = new Ju(
              "onBeforeInput",
              "beforeinput",
              null,
              n,
              p
            )),
            v.push({ event: p, listeners: f }),
            (p.data = N)));
    }
    Lp(v, t);
  });
}
function os(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n,
  };
}
function jo(e, t) {
  for (
    var n = t + "Capture", r = [];
    e !== null;

  ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Ji(e, n)),
      s != null && r.unshift(os(e, s, i)),
      (s = Ji(e, t)),
      s != null && r.push(os(e, s, i))),
      (e = e.return);
  }
  return r;
}
function kr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function dd(e, t, n, r, i) {
  for (
    var s = t._reactName, o = [];
    n !== null && n !== r;

  ) {
    var c = n,
      a = c.alternate,
      f = c.stateNode;
    if (a !== null && a === r) break;
    c.tag === 5 &&
      f !== null &&
      ((c = f),
      i
        ? ((a = Ji(n, s)),
          a != null && o.unshift(os(n, a, c)))
        : i ||
          ((a = Ji(n, s)),
          a != null && o.push(os(n, a, c)))),
      (n = n.return);
  }
  o.length !== 0 &&
    e.push({ event: t, listeners: o });
}
var bv = /\r\n?/g,
  Sv = /\u0000|\uFFFD/g;
function fd(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      bv,
      `
`
    )
    .replace(Sv, "");
}
function Ws(e, t, n) {
  if (((t = fd(t)), fd(e) !== t && n))
    throw Error(R(425));
}
function Eo() {}
var Ea = null,
  Ta = null;
function ka(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML ==
      "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Na =
    typeof setTimeout == "function"
      ? setTimeout
      : void 0,
  Cv =
    typeof clearTimeout == "function"
      ? clearTimeout
      : void 0,
  pd =
    typeof Promise == "function"
      ? Promise
      : void 0,
  jv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof pd < "u"
      ? function (e) {
          return pd
            .resolve(null)
            .then(e)
            .catch(Ev);
        }
      : Na;
function Ev(e) {
  setTimeout(function () {
    throw e;
  });
}
function Rl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), ns(t);
          return;
        }
        r--;
      } else
        (n !== "$" && n !== "$?" && n !== "$!") ||
          r++;
    n = i;
  } while (n);
  ns(t);
}
function Dn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (
        ((t = e.data),
        t === "$" || t === "$!" || t === "$?")
      )
        break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function md(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ai = Math.random().toString(36).slice(2),
  Kt = "__reactFiber$" + ai,
  ls = "__reactProps$" + ai,
  dn = "__reactContainer$" + ai,
  Pa = "__reactEvents$" + ai,
  Tv = "__reactListeners$" + ai,
  kv = "__reactHandles$" + ai;
function nr(e) {
  var t = e[Kt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[dn] || n[Kt])) {
      if (
        ((n = t.alternate),
        t.child !== null ||
          (n !== null && n.child !== null))
      )
        for (e = md(e); e !== null; ) {
          if ((n = e[Kt])) return n;
          e = md(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Cs(e) {
  return (
    (e = e[Kt] || e[dn]),
    !e ||
    (e.tag !== 5 &&
      e.tag !== 6 &&
      e.tag !== 13 &&
      e.tag !== 3)
      ? null
      : e
  );
}
function Dr(e) {
  if (e.tag === 5 || e.tag === 6)
    return e.stateNode;
  throw Error(R(33));
}
function Ko(e) {
  return e[ls] || null;
}
var Ma = [],
  Ir = -1;
function Vn(e) {
  return { current: e };
}
function we(e) {
  0 > Ir ||
    ((e.current = Ma[Ir]), (Ma[Ir] = null), Ir--);
}
function ye(e, t) {
  Ir++, (Ma[Ir] = e.current), (e.current = t);
}
var $n = {},
  Ye = Vn($n),
  ft = Vn(!1),
  ur = $n;
function Zr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return $n;
  var r = e.stateNode;
  if (
    r &&
    r.__reactInternalMemoizedUnmaskedChildContext ===
      t
  )
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext =
        t),
      (e.__reactInternalMemoizedMaskedChildContext =
        i)),
    i
  );
}
function pt(e) {
  return (e = e.childContextTypes), e != null;
}
function To() {
  we(ft), we(Ye);
}
function hd(e, t, n) {
  if (Ye.current !== $n) throw Error(R(168));
  ye(Ye, t), ye(ft, n);
}
function Ap(e, t, n) {
  var r = e.stateNode;
  if (
    ((t = t.childContextTypes),
    typeof r.getChildContext != "function")
  )
    return n;
  r = r.getChildContext();
  for (var i in r)
    if (!(i in t))
      throw Error(R(108, d1(e) || "Unknown", i));
  return Ne({}, n, r);
}
function ko(e) {
  return (
    (e =
      ((e = e.stateNode) &&
        e.__reactInternalMemoizedMergedChildContext) ||
      $n),
    (ur = Ye.current),
    ye(Ye, e),
    ye(ft, ft.current),
    !0
  );
}
function gd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(R(169));
  n
    ? ((e = Ap(e, t, ur)),
      (r.__reactInternalMemoizedMergedChildContext =
        e),
      we(ft),
      we(Ye),
      ye(Ye, e))
    : we(ft),
    ye(ft, n);
}
var sn = null,
  Xo = !1,
  Fl = !1;
function Dp(e) {
  sn === null ? (sn = [e]) : sn.push(e);
}
function Nv(e) {
  (Xo = !0), Dp(e);
}
function Wn() {
  if (!Fl && sn !== null) {
    Fl = !0;
    var e = 0,
      t = de;
    try {
      var n = sn;
      for (de = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (sn = null), (Xo = !1);
    } catch (i) {
      throw (
        (sn !== null && (sn = sn.slice(e + 1)),
        sp(yc, Wn),
        i)
      );
    } finally {
      (de = t), (Fl = !1);
    }
  }
  return null;
}
var _r = [],
  zr = 0,
  No = null,
  Po = 0,
  kt = [],
  Nt = 0,
  dr = null,
  on = 1,
  ln = "";
function er(e, t) {
  (_r[zr++] = Po),
    (_r[zr++] = No),
    (No = e),
    (Po = t);
}
function Ip(e, t, n) {
  (kt[Nt++] = on),
    (kt[Nt++] = ln),
    (kt[Nt++] = dr),
    (dr = e);
  var r = on;
  e = ln;
  var i = 32 - $t(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - $t(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (on =
        (1 << (32 - $t(t) + i)) | (n << i) | r),
      (ln = s + e);
  } else (on = (1 << s) | (n << i) | r), (ln = e);
}
function kc(e) {
  e.return !== null && (er(e, 1), Ip(e, 1, 0));
}
function Nc(e) {
  for (; e === No; )
    (No = _r[--zr]),
      (_r[zr] = null),
      (Po = _r[--zr]),
      (_r[zr] = null);
  for (; e === dr; )
    (dr = kt[--Nt]),
      (kt[Nt] = null),
      (ln = kt[--Nt]),
      (kt[Nt] = null),
      (on = kt[--Nt]),
      (kt[Nt] = null);
}
var wt = null,
  xt = null,
  Ee = !1,
  Ft = null;
function _p(e, t) {
  var n = Pt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null
      ? ((e.deletions = [n]), (e.flags |= 16))
      : t.push(n);
}
function vd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 ||
          n.toLowerCase() !==
            t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t),
            (wt = e),
            (xt = Dn(t.firstChild)),
            !0)
          : !1
      );
    case 6:
      return (
        (t =
          e.pendingProps === "" ||
          t.nodeType !== 3
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t),
            (wt = e),
            (xt = null),
            !0)
          : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n =
              dr !== null
                ? { id: on, overflow: ln }
                : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Pt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (wt = e),
            (xt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function La(e) {
  return (
    (e.mode & 1) !== 0 && (e.flags & 128) === 0
  );
}
function Oa(e) {
  if (Ee) {
    var t = xt;
    if (t) {
      var n = t;
      if (!vd(e, t)) {
        if (La(e)) throw Error(R(418));
        t = Dn(n.nextSibling);
        var r = wt;
        t && vd(e, t)
          ? _p(r, n)
          : ((e.flags = (e.flags & -4097) | 2),
            (Ee = !1),
            (wt = e));
      }
    } else {
      if (La(e)) throw Error(R(418));
      (e.flags = (e.flags & -4097) | 2),
        (Ee = !1),
        (wt = e);
    }
  }
}
function yd(e) {
  for (
    e = e.return;
    e !== null &&
    e.tag !== 5 &&
    e.tag !== 3 &&
    e.tag !== 13;

  )
    e = e.return;
  wt = e;
}
function Gs(e) {
  if (e !== wt) return !1;
  if (!Ee) return yd(e), (Ee = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t =
        t !== "head" &&
        t !== "body" &&
        !ka(e.type, e.memoizedProps))),
    t && (t = xt))
  ) {
    if (La(e)) throw (zp(), Error(R(418)));
    for (; t; ) _p(e, t), (t = Dn(t.nextSibling));
  }
  if ((yd(e), e.tag === 13)) {
    if (
      ((e = e.memoizedState),
      (e = e !== null ? e.dehydrated : null),
      !e)
    )
      throw Error(R(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xt = Dn(e.nextSibling);
              break e;
            }
            t--;
          } else
            (n !== "$" &&
              n !== "$!" &&
              n !== "$?") ||
              t++;
        }
        e = e.nextSibling;
      }
      xt = null;
    }
  } else
    xt = wt ? Dn(e.stateNode.nextSibling) : null;
  return !0;
}
function zp() {
  for (var e = xt; e; ) e = Dn(e.nextSibling);
}
function Jr() {
  (xt = wt = null), (Ee = !1);
}
function Pc(e) {
  Ft === null ? (Ft = [e]) : Ft.push(e);
}
var Pv = mn.ReactCurrentBatchConfig;
function _t(e, t) {
  if (e && e.defaultProps) {
    (t = Ne({}, t)), (e = e.defaultProps);
    for (var n in e)
      t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Mo = Vn(null),
  Lo = null,
  Rr = null,
  Mc = null;
function Lc() {
  Mc = Rr = Lo = null;
}
function Oc(e) {
  var t = Mo.current;
  we(Mo), (e._currentValue = t);
}
function Aa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t),
          r !== null && (r.childLanes |= t))
        : r !== null &&
          (r.childLanes & t) !== t &&
          (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function qr(e, t) {
  (Lo = e),
    (Mc = Rr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (dt = !0),
      (e.firstContext = null));
}
function Lt(e) {
  var t = e._currentValue;
  if (Mc !== e)
    if (
      ((e = {
        context: e,
        memoizedValue: t,
        next: null,
      }),
      Rr === null)
    ) {
      if (Lo === null) throw Error(R(308));
      (Rr = e),
        (Lo.dependencies = {
          lanes: 0,
          firstContext: e,
        });
    } else Rr = Rr.next = e;
  return t;
}
var rr = null;
function Ac(e) {
  rr === null ? (rr = [e]) : rr.push(e);
}
function Rp(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null
      ? ((n.next = n), Ac(t))
      : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    fn(e, r)
  );
}
function fn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (
    n !== null && (n.lanes |= t),
      n = e,
      e = e.return;
    e !== null;

  )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var jn = !1;
function Dc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0,
    },
    effects: null,
  };
}
function Fp(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function an(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function In(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ce & 2)) {
    var i = r.pending;
    return (
      i === null
        ? (t.next = t)
        : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      fn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null
      ? ((t.next = t), Ac(r))
      : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    fn(e, n)
  );
}
function oo(e, t, n) {
  if (
    ((t = t.updateQueue),
    t !== null &&
      ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes),
      (n |= r),
      (t.lanes = n),
      xc(e, n);
  }
}
function xd(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (
    r !== null &&
    ((r = r.updateQueue), n === r)
  ) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null
          ? (i = s = o)
          : (s = s.next = o),
          (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null
      ? (n.firstBaseUpdate = t)
      : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Oo(e, t, n, r) {
  var i = e.updateQueue;
  jn = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    c = i.shared.pending;
  if (c !== null) {
    i.shared.pending = null;
    var a = c,
      f = a.next;
    (a.next = null),
      o === null ? (s = f) : (o.next = f),
      (o = a);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (c = p.lastBaseUpdate),
      c !== o &&
        (c === null
          ? (p.firstBaseUpdate = f)
          : (c.next = f),
        (p.lastBaseUpdate = a)));
  }
  if (s !== null) {
    var v = i.baseState;
    (o = 0), (p = f = a = null), (c = s);
    do {
      var w = c.lane,
        b = c.eventTime;
      if ((r & w) === w) {
        p !== null &&
          (p = p.next =
            {
              eventTime: b,
              lane: 0,
              tag: c.tag,
              payload: c.payload,
              callback: c.callback,
              next: null,
            });
        e: {
          var j = e,
            S = c;
          switch (((w = t), (b = n), S.tag)) {
            case 1:
              if (
                ((j = S.payload),
                typeof j == "function")
              ) {
                v = j.call(b, v, w);
                break e;
              }
              v = j;
              break e;
            case 3:
              j.flags = (j.flags & -65537) | 128;
            case 0:
              if (
                ((j = S.payload),
                (w =
                  typeof j == "function"
                    ? j.call(b, v, w)
                    : j),
                w == null)
              )
                break e;
              v = Ne({}, v, w);
              break e;
            case 2:
              jn = !0;
          }
        }
        c.callback !== null &&
          c.lane !== 0 &&
          ((e.flags |= 64),
          (w = i.effects),
          w === null
            ? (i.effects = [c])
            : w.push(c));
      } else
        (b = {
          eventTime: b,
          lane: w,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null,
        }),
          p === null
            ? ((f = p = b), (a = v))
            : (p = p.next = b),
          (o |= w);
      if (((c = c.next), c === null)) {
        if (((c = i.shared.pending), c === null))
          break;
        (w = c),
          (c = w.next),
          (w.next = null),
          (i.lastBaseUpdate = w),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (a = v),
      (i.baseState = a),
      (i.firstBaseUpdate = f),
      (i.lastBaseUpdate = p),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (pr |= o),
      (e.lanes = o),
      (e.memoizedState = v);
  }
}
function wd(e, t, n) {
  if (
    ((e = t.effects),
    (t.effects = null),
    e !== null)
  )
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (
          ((r.callback = null),
          (r = n),
          typeof i != "function")
        )
          throw Error(R(191, i));
        i.call(r);
      }
    }
}
var Bp = new Rf.Component().refs;
function Da(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 &&
      (e.updateQueue.baseState = n);
}
var Zo = {
  isMounted: function (e) {
    return (e = e._reactInternals)
      ? yr(e) === e
      : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = nt(),
      i = zn(e),
      s = an(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = In(e, s, i)),
      t !== null && (Ht(t, e, i, r), oo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = nt(),
      i = zn(e),
      s = an(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = In(e, s, i)),
      t !== null && (Ht(t, e, i, r), oo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = nt(),
      r = zn(e),
      i = an(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = In(e, i, r)),
      t !== null && (Ht(t, e, r, n), oo(t, e, r));
  },
};
function bd(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype &&
        t.prototype.isPureReactComponent
      ? !is(n, r) || !is(i, s)
      : !0
  );
}
function $p(e, t, n) {
  var r = !1,
    i = $n,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = Lt(s))
      : ((i = pt(t) ? ur : Ye.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Zr(e, i) : $n)),
    (t = new t(n, s)),
    (e.memoizedState =
      t.state !== null && t.state !== void 0
        ? t.state
        : null),
    (t.updater = Zo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext =
        i),
      (e.__reactInternalMemoizedMaskedChildContext =
        s)),
    t
  );
}
function Sd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps ==
      "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps ==
      "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e &&
      Zo.enqueueReplaceState(t, t.state, null);
}
function Ia(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n),
    (i.state = e.memoizedState),
    (i.refs = Bp),
    Dc(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = Lt(s))
    : ((s = pt(t) ? ur : Ye.current),
      (i.context = Zr(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" &&
      (Da(e, t, s, n),
      (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps ==
      "function" ||
      typeof i.getSnapshotBeforeUpdate ==
        "function" ||
      (typeof i.UNSAFE_componentWillMount !=
        "function" &&
        typeof i.componentWillMount !=
          "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" &&
        i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount ==
        "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state &&
        Zo.enqueueReplaceState(i, i.state, null),
      Oo(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" &&
      (e.flags |= 4194308);
}
function Ei(e, t, n) {
  if (
    ((e = n.ref),
    e !== null &&
      typeof e != "function" &&
      typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(R(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(R(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var c = i.refs;
            c === Bp && (c = i.refs = {}),
              o === null
                ? delete c[s]
                : (c[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(R(284));
    if (!n._owner) throw Error(R(290, e));
  }
  return e;
}
function qs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      R(
        31,
        e === "[object Object]"
          ? "object with keys {" +
              Object.keys(t).join(", ") +
              "}"
          : e
      )
    ))
  );
}
function Cd(e) {
  var t = e._init;
  return t(e._payload);
}
function Hp(e) {
  function t(y, h) {
    if (e) {
      var g = y.deletions;
      g === null
        ? ((y.deletions = [h]), (y.flags |= 16))
        : g.push(h);
    }
  }
  function n(y, h) {
    if (!e) return null;
    for (; h !== null; ) t(y, h), (h = h.sibling);
    return null;
  }
  function r(y, h) {
    for (y = new Map(); h !== null; )
      h.key !== null
        ? y.set(h.key, h)
        : y.set(h.index, h),
        (h = h.sibling);
    return y;
  }
  function i(y, h) {
    return (
      (y = Rn(y, h)),
      (y.index = 0),
      (y.sibling = null),
      y
    );
  }
  function s(y, h, g) {
    return (
      (y.index = g),
      e
        ? ((g = y.alternate),
          g !== null
            ? ((g = g.index),
              g < h ? ((y.flags |= 2), h) : g)
            : ((y.flags |= 2), h))
        : ((y.flags |= 1048576), h)
    );
  }
  function o(y) {
    return (
      e && y.alternate === null && (y.flags |= 2),
      y
    );
  }
  function c(y, h, g, x) {
    return h === null || h.tag !== 6
      ? ((h = Gl(g, y.mode, x)),
        (h.return = y),
        h)
      : ((h = i(h, g)), (h.return = y), h);
  }
  function a(y, h, g, x) {
    var E = g.type;
    return E === Mr
      ? p(y, h, g.props.children, x, g.key)
      : h !== null &&
        (h.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Cn &&
            Cd(E) === h.type))
      ? ((x = i(h, g.props)),
        (x.ref = Ei(y, h, g)),
        (x.return = y),
        x)
      : ((x = po(
          g.type,
          g.key,
          g.props,
          null,
          y.mode,
          x
        )),
        (x.ref = Ei(y, h, g)),
        (x.return = y),
        x);
  }
  function f(y, h, g, x) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !==
        g.containerInfo ||
      h.stateNode.implementation !==
        g.implementation
      ? ((h = ql(g, y.mode, x)),
        (h.return = y),
        h)
      : ((h = i(h, g.children || [])),
        (h.return = y),
        h);
  }
  function p(y, h, g, x, E) {
    return h === null || h.tag !== 7
      ? ((h = lr(g, y.mode, x, E)),
        (h.return = y),
        h)
      : ((h = i(h, g)), (h.return = y), h);
  }
  function v(y, h, g) {
    if (
      (typeof h == "string" && h !== "") ||
      typeof h == "number"
    )
      return (
        (h = Gl("" + h, y.mode, g)),
        (h.return = y),
        h
      );
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case _s:
          return (
            (g = po(
              h.type,
              h.key,
              h.props,
              null,
              y.mode,
              g
            )),
            (g.ref = Ei(y, null, h)),
            (g.return = y),
            g
          );
        case Pr:
          return (
            (h = ql(h, y.mode, g)),
            (h.return = y),
            h
          );
        case Cn:
          var x = h._init;
          return v(y, x(h._payload), g);
      }
      if (_i(h) || wi(h))
        return (
          (h = lr(h, y.mode, g, null)),
          (h.return = y),
          h
        );
      qs(y, h);
    }
    return null;
  }
  function w(y, h, g, x) {
    var E = h !== null ? h.key : null;
    if (
      (typeof g == "string" && g !== "") ||
      typeof g == "number"
    )
      return E !== null
        ? null
        : c(y, h, "" + g, x);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case _s:
          return g.key === E
            ? a(y, h, g, x)
            : null;
        case Pr:
          return g.key === E
            ? f(y, h, g, x)
            : null;
        case Cn:
          return (
            (E = g._init),
            w(y, h, E(g._payload), x)
          );
      }
      if (_i(g) || wi(g))
        return E !== null
          ? null
          : p(y, h, g, x, null);
      qs(y, g);
    }
    return null;
  }
  function b(y, h, g, x, E) {
    if (
      (typeof x == "string" && x !== "") ||
      typeof x == "number"
    )
      return (
        (y = y.get(g) || null), c(h, y, "" + x, E)
      );
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case _s:
          return (
            (y =
              y.get(x.key === null ? g : x.key) ||
              null),
            a(h, y, x, E)
          );
        case Pr:
          return (
            (y =
              y.get(x.key === null ? g : x.key) ||
              null),
            f(h, y, x, E)
          );
        case Cn:
          var k = x._init;
          return b(y, h, g, k(x._payload), E);
      }
      if (_i(x) || wi(x))
        return (
          (y = y.get(g) || null),
          p(h, y, x, E, null)
        );
      qs(h, x);
    }
    return null;
  }
  function j(y, h, g, x) {
    for (
      var E = null,
        k = null,
        N = h,
        A = (h = 0),
        P = null;
      N !== null && A < g.length;
      A++
    ) {
      N.index > A
        ? ((P = N), (N = null))
        : (P = N.sibling);
      var $ = w(y, N, g[A], x);
      if ($ === null) {
        N === null && (N = P);
        break;
      }
      e && N && $.alternate === null && t(y, N),
        (h = s($, h, A)),
        k === null ? (E = $) : (k.sibling = $),
        (k = $),
        (N = P);
    }
    if (A === g.length)
      return n(y, N), Ee && er(y, A), E;
    if (N === null) {
      for (; A < g.length; A++)
        (N = v(y, g[A], x)),
          N !== null &&
            ((h = s(N, h, A)),
            k === null
              ? (E = N)
              : (k.sibling = N),
            (k = N));
      return Ee && er(y, A), E;
    }
    for (N = r(y, N); A < g.length; A++)
      (P = b(N, y, A, g[A], x)),
        P !== null &&
          (e &&
            P.alternate !== null &&
            N.delete(P.key === null ? A : P.key),
          (h = s(P, h, A)),
          k === null ? (E = P) : (k.sibling = P),
          (k = P));
    return (
      e &&
        N.forEach(function (I) {
          return t(y, I);
        }),
      Ee && er(y, A),
      E
    );
  }
  function S(y, h, g, x) {
    var E = wi(g);
    if (typeof E != "function")
      throw Error(R(150));
    if (((g = E.call(g)), g == null))
      throw Error(R(151));
    for (
      var k = (E = null),
        N = h,
        A = (h = 0),
        P = null,
        $ = g.next();
      N !== null && !$.done;
      A++, $ = g.next()
    ) {
      N.index > A
        ? ((P = N), (N = null))
        : (P = N.sibling);
      var I = w(y, N, $.value, x);
      if (I === null) {
        N === null && (N = P);
        break;
      }
      e && N && I.alternate === null && t(y, N),
        (h = s(I, h, A)),
        k === null ? (E = I) : (k.sibling = I),
        (k = I),
        (N = P);
    }
    if ($.done) return n(y, N), Ee && er(y, A), E;
    if (N === null) {
      for (; !$.done; A++, $ = g.next())
        ($ = v(y, $.value, x)),
          $ !== null &&
            ((h = s($, h, A)),
            k === null
              ? (E = $)
              : (k.sibling = $),
            (k = $));
      return Ee && er(y, A), E;
    }
    for (N = r(y, N); !$.done; A++, $ = g.next())
      ($ = b(N, y, A, $.value, x)),
        $ !== null &&
          (e &&
            $.alternate !== null &&
            N.delete($.key === null ? A : $.key),
          (h = s($, h, A)),
          k === null ? (E = $) : (k.sibling = $),
          (k = $));
    return (
      e &&
        N.forEach(function (F) {
          return t(y, F);
        }),
      Ee && er(y, A),
      E
    );
  }
  function T(y, h, g, x) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === Mr &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case _s:
          e: {
            for (
              var E = g.key, k = h;
              k !== null;

            ) {
              if (k.key === E) {
                if (((E = g.type), E === Mr)) {
                  if (k.tag === 7) {
                    n(y, k.sibling),
                      (h = i(
                        k,
                        g.props.children
                      )),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                } else if (
                  k.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Cn &&
                    Cd(E) === k.type)
                ) {
                  n(y, k.sibling),
                    (h = i(k, g.props)),
                    (h.ref = Ei(y, k, g)),
                    (h.return = y),
                    (y = h);
                  break e;
                }
                n(y, k);
                break;
              } else t(y, k);
              k = k.sibling;
            }
            g.type === Mr
              ? ((h = lr(
                  g.props.children,
                  y.mode,
                  x,
                  g.key
                )),
                (h.return = y),
                (y = h))
              : ((x = po(
                  g.type,
                  g.key,
                  g.props,
                  null,
                  y.mode,
                  x
                )),
                (x.ref = Ei(y, h, g)),
                (x.return = y),
                (y = x));
          }
          return o(y);
        case Pr:
          e: {
            for (k = g.key; h !== null; ) {
              if (h.key === k)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo ===
                    g.containerInfo &&
                  h.stateNode.implementation ===
                    g.implementation
                ) {
                  n(y, h.sibling),
                    (h = i(h, g.children || [])),
                    (h.return = y),
                    (y = h);
                  break e;
                } else {
                  n(y, h);
                  break;
                }
              else t(y, h);
              h = h.sibling;
            }
            (h = ql(g, y.mode, x)),
              (h.return = y),
              (y = h);
          }
          return o(y);
        case Cn:
          return (
            (k = g._init),
            T(y, h, k(g._payload), x)
          );
      }
      if (_i(g)) return j(y, h, g, x);
      if (wi(g)) return S(y, h, g, x);
      qs(y, g);
    }
    return (typeof g == "string" && g !== "") ||
      typeof g == "number"
      ? ((g = "" + g),
        h !== null && h.tag === 6
          ? (n(y, h.sibling),
            (h = i(h, g)),
            (h.return = y),
            (y = h))
          : (n(y, h),
            (h = Gl(g, y.mode, x)),
            (h.return = y),
            (y = h)),
        o(y))
      : n(y, h);
  }
  return T;
}
var ei = Hp(!0),
  Up = Hp(!1),
  js = {},
  Jt = Vn(js),
  as = Vn(js),
  cs = Vn(js);
function ir(e) {
  if (e === js) throw Error(R(174));
  return e;
}
function Ic(e, t) {
  switch (
    (ye(cs, t),
    ye(as, e),
    ye(Jt, js),
    (e = t.nodeType),
    e)
  ) {
    case 9:
    case 11:
      t = (t = t.documentElement)
        ? t.namespaceURI
        : pa(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = pa(t, e));
  }
  we(Jt), ye(Jt, t);
}
function ti() {
  we(Jt), we(as), we(cs);
}
function Vp(e) {
  ir(cs.current);
  var t = ir(Jt.current),
    n = pa(t, e.type);
  t !== n && (ye(as, e), ye(Jt, n));
}
function _c(e) {
  as.current === e && (we(Jt), we(as));
}
var Te = Vn(0);
function Ao(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated),
        n === null ||
          n.data === "$?" ||
          n.data === "$!")
      )
        return t;
    } else if (
      t.tag === 19 &&
      t.memoizedProps.revealOrder !== void 0
    ) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e)
        return null;
      t = t.return;
    }
    (t.sibling.return = t.return),
      (t = t.sibling);
  }
  return null;
}
var Bl = [];
function zc() {
  for (var e = 0; e < Bl.length; e++)
    Bl[e]._workInProgressVersionPrimary = null;
  Bl.length = 0;
}
var lo = mn.ReactCurrentDispatcher,
  $l = mn.ReactCurrentBatchConfig,
  fr = 0,
  ke = null,
  ze = null,
  Fe = null,
  Do = !1,
  Wi = !1,
  us = 0,
  Mv = 0;
function We() {
  throw Error(R(321));
}
function Rc(e, t) {
  if (t === null) return !1;
  for (
    var n = 0;
    n < t.length && n < e.length;
    n++
  )
    if (!Ut(e[n], t[n])) return !1;
  return !0;
}
function Fc(e, t, n, r, i, s) {
  if (
    ((fr = s),
    (ke = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (lo.current =
      e === null || e.memoizedState === null
        ? Dv
        : Iv),
    (e = n(r, i)),
    Wi)
  ) {
    s = 0;
    do {
      if (((Wi = !1), (us = 0), 25 <= s))
        throw Error(R(301));
      (s += 1),
        (Fe = ze = null),
        (t.updateQueue = null),
        (lo.current = _v),
        (e = n(r, i));
    } while (Wi);
  }
  if (
    ((lo.current = Io),
    (t = ze !== null && ze.next !== null),
    (fr = 0),
    (Fe = ze = ke = null),
    (Do = !1),
    t)
  )
    throw Error(R(300));
  return e;
}
function Bc() {
  var e = us !== 0;
  return (us = 0), e;
}
function Qt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (
    Fe === null
      ? (ke.memoizedState = Fe = e)
      : (Fe = Fe.next = e),
    Fe
  );
}
function Ot() {
  if (ze === null) {
    var e = ke.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ze.next;
  var t =
    Fe === null ? ke.memoizedState : Fe.next;
  if (t !== null) (Fe = t), (ze = e);
  else {
    if (e === null) throw Error(R(310));
    (ze = e),
      (e = {
        memoizedState: ze.memoizedState,
        baseState: ze.baseState,
        baseQueue: ze.baseQueue,
        queue: ze.queue,
        next: null,
      }),
      Fe === null
        ? (ke.memoizedState = Fe = e)
        : (Fe = Fe.next = e);
  }
  return Fe;
}
function ds(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Hl(e) {
  var t = Ot(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = ze,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var c = (o = null),
      a = null,
      f = s;
    do {
      var p = f.lane;
      if ((fr & p) === p)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState
            ? f.eagerState
            : e(r, f.action));
      else {
        var v = {
          lane: p,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        a === null
          ? ((c = a = v), (o = r))
          : (a = a.next = v),
          (ke.lanes |= p),
          (pr |= p);
      }
      f = f.next;
    } while (f !== null && f !== s);
    a === null ? (o = r) : (a.next = c),
      Ut(r, t.memoizedState) || (dt = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do
      (s = i.lane),
        (ke.lanes |= s),
        (pr |= s),
        (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ul(e) {
  var t = Ot(),
    n = t.queue;
  if (n === null) throw Error(R(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Ut(s, t.memoizedState) || (dt = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Wp() {}
function Gp(e, t) {
  var n = ke,
    r = Ot(),
    i = t(),
    s = !Ut(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (dt = !0)),
    (r = r.queue),
    $c(Qp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t ||
      s ||
      (Fe !== null && Fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      fs(
        9,
        Yp.bind(null, n, r, i, t),
        void 0,
        null
      ),
      Be === null)
    )
      throw Error(R(349));
    fr & 30 || qp(n, t, i);
  }
  return i;
}
function qp(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ke.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ke.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores),
        n === null
          ? (t.stores = [e])
          : n.push(e));
}
function Yp(e, t, n, r) {
  (t.value = n),
    (t.getSnapshot = r),
    Kp(t) && Xp(e);
}
function Qp(e, t, n) {
  return n(function () {
    Kp(t) && Xp(e);
  });
}
function Kp(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ut(e, n);
  } catch {
    return !0;
  }
}
function Xp(e) {
  var t = fn(e, 1);
  t !== null && Ht(t, e, 1, -1);
}
function jd(e) {
  var t = Qt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ds,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Av.bind(null, ke, e)),
    [t.memoizedState, e]
  );
}
function fs(e, t, n, r) {
  return (
    (e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null,
    }),
    (t = ke.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ke.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next),
            (n.next = e),
            (e.next = r),
            (t.lastEffect = e))),
    e
  );
}
function Zp() {
  return Ot().memoizedState;
}
function ao(e, t, n, r) {
  var i = Qt();
  (ke.flags |= e),
    (i.memoizedState = fs(
      1 | t,
      n,
      void 0,
      r === void 0 ? null : r
    ));
}
function Jo(e, t, n, r) {
  var i = Ot();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ze !== null) {
    var o = ze.memoizedState;
    if (
      ((s = o.destroy),
      r !== null && Rc(r, o.deps))
    ) {
      i.memoizedState = fs(t, n, s, r);
      return;
    }
  }
  (ke.flags |= e),
    (i.memoizedState = fs(1 | t, n, s, r));
}
function Ed(e, t) {
  return ao(8390656, 8, e, t);
}
function $c(e, t) {
  return Jo(2048, 8, e, t);
}
function Jp(e, t) {
  return Jo(4, 2, e, t);
}
function em(e, t) {
  return Jo(4, 4, e, t);
}
function tm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function nm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    Jo(4, 4, tm.bind(null, t, e), n)
  );
}
function Hc() {}
function rm(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Rc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function im(e, t) {
  var n = Ot();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Rc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function sm(e, t, n) {
  return fr & 21
    ? (Ut(n, t) ||
        ((n = ap()),
        (ke.lanes |= n),
        (pr |= n),
        (e.baseState = !0)),
      t)
    : (e.baseState &&
        ((e.baseState = !1), (dt = !0)),
      (e.memoizedState = n));
}
function Lv(e, t) {
  var n = de;
  (de = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = $l.transition;
  $l.transition = {};
  try {
    e(!1), t();
  } finally {
    (de = n), ($l.transition = r);
  }
}
function om() {
  return Ot().memoizedState;
}
function Ov(e, t, n) {
  var r = zn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    lm(e))
  )
    am(t, n);
  else if (((n = Rp(e, t, n, r)), n !== null)) {
    var i = nt();
    Ht(n, e, r, i), cm(n, t, r);
  }
}
function Av(e, t, n) {
  var r = zn(e),
    i = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
  if (lm(e)) am(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          c = s(o, n);
        if (
          ((i.hasEagerState = !0),
          (i.eagerState = c),
          Ut(c, o))
        ) {
          var a = t.interleaved;
          a === null
            ? ((i.next = i), Ac(t))
            : ((i.next = a.next), (a.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Rp(e, t, i, r)),
      n !== null &&
        ((i = nt()), Ht(n, e, r, i), cm(n, t, r));
  }
}
function lm(e) {
  var t = e.alternate;
  return e === ke || (t !== null && t === ke);
}
function am(e, t) {
  Wi = Do = !0;
  var n = e.pending;
  n === null
    ? (t.next = t)
    : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function cm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes),
      (n |= r),
      (t.lanes = n),
      xc(e, n);
  }
}
var Io = {
    readContext: Lt,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useInsertionEffect: We,
    useLayoutEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useMutableSource: We,
    useSyncExternalStore: We,
    useId: We,
    unstable_isNewReconciler: !1,
  },
  Dv = {
    readContext: Lt,
    useCallback: function (e, t) {
      return (
        (Qt().memoizedState = [
          e,
          t === void 0 ? null : t,
        ]),
        e
      );
    },
    useContext: Lt,
    useEffect: Ed,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ao(4194308, 4, tm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ao(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ao(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Qt();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Qt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Ov.bind(null, ke, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Qt();
      return (
        (e = { current: e }),
        (t.memoizedState = e)
      );
    },
    useState: jd,
    useDebugValue: Hc,
    useDeferredValue: function (e) {
      return (Qt().memoizedState = e);
    },
    useTransition: function () {
      var e = jd(!1),
        t = e[0];
      return (
        (e = Lv.bind(null, e[1])),
        (Qt().memoizedState = e),
        [t, e]
      );
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ke,
        i = Qt();
      if (Ee) {
        if (n === void 0) throw Error(R(407));
        n = n();
      } else {
        if (((n = t()), Be === null))
          throw Error(R(349));
        fr & 30 || qp(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Ed(Qp.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        fs(
          9,
          Yp.bind(null, r, s, n, t),
          void 0,
          null
        ),
        n
      );
    },
    useId: function () {
      var e = Qt(),
        t = Be.identifierPrefix;
      if (Ee) {
        var n = ln,
          r = on;
        (n =
          (r & ~(1 << (32 - $t(r) - 1))).toString(
            32
          ) + n),
          (t = ":" + t + "R" + n),
          (n = us++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else
        (n = Mv++),
          (t =
            ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Iv = {
    readContext: Lt,
    useCallback: rm,
    useContext: Lt,
    useEffect: $c,
    useImperativeHandle: nm,
    useInsertionEffect: Jp,
    useLayoutEffect: em,
    useMemo: im,
    useReducer: Hl,
    useRef: Zp,
    useState: function () {
      return Hl(ds);
    },
    useDebugValue: Hc,
    useDeferredValue: function (e) {
      var t = Ot();
      return sm(t, ze.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl(ds)[0],
        t = Ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Wp,
    useSyncExternalStore: Gp,
    useId: om,
    unstable_isNewReconciler: !1,
  },
  _v = {
    readContext: Lt,
    useCallback: rm,
    useContext: Lt,
    useEffect: $c,
    useImperativeHandle: nm,
    useInsertionEffect: Jp,
    useLayoutEffect: em,
    useMemo: im,
    useReducer: Ul,
    useRef: Zp,
    useState: function () {
      return Ul(ds);
    },
    useDebugValue: Hc,
    useDeferredValue: function (e) {
      var t = Ot();
      return ze === null
        ? (t.memoizedState = e)
        : sm(t, ze.memoizedState, e);
    },
    useTransition: function () {
      var e = Ul(ds)[0],
        t = Ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Wp,
    useSyncExternalStore: Gp,
    useId: om,
    unstable_isNewReconciler: !1,
  };
function ni(e, t) {
  try {
    var n = "",
      r = t;
    do (n += u1(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return {
    value: e,
    source: t,
    stack: i,
    digest: null,
  };
}
function Vl(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null,
  };
}
function _a(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var zv =
  typeof WeakMap == "function" ? WeakMap : Map;
function um(e, t, n) {
  (n = an(-1, n)),
    (n.tag = 3),
    (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      zo || ((zo = !0), (Ga = r)), _a(e, t);
    }),
    n
  );
}
function dm(e, t, n) {
  (n = an(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        _a(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        _a(e, t),
          typeof r != "function" &&
            (_n === null
              ? (_n = new Set([this]))
              : _n.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Td(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new zv();
    var i = new Set();
    r.set(t, i);
  } else
    (i = r.get(t)),
      i === void 0 &&
        ((i = new Set()), r.set(t, i));
  i.has(n) ||
    (i.add(n),
    (e = Xv.bind(null, e, t, n)),
    t.then(e, e));
}
function kd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState),
        (t =
          t !== null
            ? t.dehydrated !== null
            : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Nd(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = an(-1, 1)),
                (t.tag = 2),
                In(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Rv = mn.ReactCurrentOwner,
  dt = !1;
function tt(e, t, n, r) {
  t.child =
    e === null
      ? Up(t, null, n, r)
      : ei(t, e.child, n, r);
}
function Pd(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    qr(t, i),
    (r = Fc(e, t, n, r, s, i)),
    (n = Bc()),
    e !== null && !dt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        pn(e, t, i))
      : (Ee && n && kc(t),
        (t.flags |= 1),
        tt(e, t, r, i),
        t.child)
  );
}
function Md(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Kc(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15),
        (t.type = s),
        fm(e, t, s, r, i))
      : ((e = po(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare),
      (n = n !== null ? n : is),
      n(o, r) && e.ref === t.ref)
    )
      return pn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Rn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function fm(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (is(s, r) && e.ref === t.ref)
      if (
        ((dt = !1),
        (t.pendingProps = r = s),
        (e.lanes & i) !== 0)
      )
        e.flags & 131072 && (dt = !0);
      else
        return (t.lanes = e.lanes), pn(e, t, i);
  }
  return za(e, t, n, r, i);
}
function pm(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        ye(Br, vt),
        (vt |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ye(Br, vt),
          (vt |= e),
          null
        );
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        (r = s !== null ? s.baseLanes : n),
        ye(Br, vt),
        (vt |= r);
    }
  else
    s !== null
      ? ((r = s.baseLanes | n),
        (t.memoizedState = null))
      : (r = n),
      ye(Br, vt),
      (vt |= r);
  return tt(e, t, i, n), t.child;
}
function mm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) ||
    (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function za(e, t, n, r, i) {
  var s = pt(n) ? ur : Ye.current;
  return (
    (s = Zr(t, s)),
    qr(t, i),
    (n = Fc(e, t, n, r, s, i)),
    (r = Bc()),
    e !== null && !dt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        pn(e, t, i))
      : (Ee && r && kc(t),
        (t.flags |= 1),
        tt(e, t, n, i),
        t.child)
  );
}
function Ld(e, t, n, r, i) {
  if (pt(n)) {
    var s = !0;
    ko(t);
  } else s = !1;
  if ((qr(t, i), t.stateNode === null))
    co(e, t),
      $p(t, n, r),
      Ia(t, n, r, i),
      (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      c = t.memoizedProps;
    o.props = c;
    var a = o.context,
      f = n.contextType;
    typeof f == "object" && f !== null
      ? (f = Lt(f))
      : ((f = pt(n) ? ur : Ye.current),
        (f = Zr(t, f)));
    var p = n.getDerivedStateFromProps,
      v =
        typeof p == "function" ||
        typeof o.getSnapshotBeforeUpdate ==
          "function";
    v ||
      (typeof o.UNSAFE_componentWillReceiveProps !=
        "function" &&
        typeof o.componentWillReceiveProps !=
          "function") ||
      ((c !== r || a !== f) && Sd(t, o, r, f)),
      (jn = !1);
    var w = t.memoizedState;
    (o.state = w),
      Oo(t, r, o, i),
      (a = t.memoizedState),
      c !== r || w !== a || ft.current || jn
        ? (typeof p == "function" &&
            (Da(t, n, p, r),
            (a = t.memoizedState)),
          (c = jn || bd(t, n, c, r, w, a, f))
            ? (v ||
                (typeof o.UNSAFE_componentWillMount !=
                  "function" &&
                  typeof o.componentWillMount !=
                    "function") ||
                (typeof o.componentWillMount ==
                  "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount ==
                  "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount ==
                "function" &&
                (t.flags |= 4194308))
            : (typeof o.componentDidMount ==
                "function" &&
                (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (o.props = r),
          (o.state = a),
          (o.context = f),
          (r = c))
        : (typeof o.componentDidMount ==
            "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Fp(e, t),
      (c = t.memoizedProps),
      (f =
        t.type === t.elementType
          ? c
          : _t(t.type, c)),
      (o.props = f),
      (v = t.pendingProps),
      (w = o.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Lt(a))
        : ((a = pt(n) ? ur : Ye.current),
          (a = Zr(t, a)));
    var b = n.getDerivedStateFromProps;
    (p =
      typeof b == "function" ||
      typeof o.getSnapshotBeforeUpdate ==
        "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps !=
        "function" &&
        typeof o.componentWillReceiveProps !=
          "function") ||
      ((c !== v || w !== a) && Sd(t, o, r, a)),
      (jn = !1),
      (w = t.memoizedState),
      (o.state = w),
      Oo(t, r, o, i);
    var j = t.memoizedState;
    c !== v || w !== j || ft.current || jn
      ? (typeof b == "function" &&
          (Da(t, n, b, r), (j = t.memoizedState)),
        (f = jn || bd(t, n, f, r, w, j, a) || !1)
          ? (p ||
              (typeof o.UNSAFE_componentWillUpdate !=
                "function" &&
                typeof o.componentWillUpdate !=
                  "function") ||
              (typeof o.componentWillUpdate ==
                "function" &&
                o.componentWillUpdate(r, j, a),
              typeof o.UNSAFE_componentWillUpdate ==
                "function" &&
                o.UNSAFE_componentWillUpdate(
                  r,
                  j,
                  a
                )),
            typeof o.componentDidUpdate ==
              "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate ==
              "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate !=
              "function" ||
              (c === e.memoizedProps &&
                w === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate !=
              "function" ||
              (c === e.memoizedProps &&
                w === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = j)),
        (o.props = r),
        (o.state = j),
        (o.context = a),
        (r = f))
      : (typeof o.componentDidUpdate !=
          "function" ||
          (c === e.memoizedProps &&
            w === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate !=
          "function" ||
          (c === e.memoizedProps &&
            w === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ra(e, t, n, r, s, i);
}
function Ra(e, t, n, r, i, s) {
  mm(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o)
    return i && gd(t, n, !1), pn(e, t, s);
  (r = t.stateNode), (Rv.current = t);
  var c =
    o &&
    typeof n.getDerivedStateFromError !=
      "function"
      ? null
      : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = ei(t, e.child, null, s)),
        (t.child = ei(t, null, c, s)))
      : tt(e, t, c, s),
    (t.memoizedState = r.state),
    i && gd(t, n, !0),
    t.child
  );
}
function hm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? hd(
        e,
        t.pendingContext,
        t.pendingContext !== t.context
      )
    : t.context && hd(e, t.context, !1),
    Ic(e, t.containerInfo);
}
function Od(e, t, n, r, i) {
  return (
    Jr(),
    Pc(i),
    (t.flags |= 256),
    tt(e, t, n, r),
    t.child
  );
}
var Fa = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
};
function Ba(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null,
  };
}
function gm(e, t, n) {
  var r = t.pendingProps,
    i = Te.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    c;
  if (
    ((c = o) ||
      (c =
        e !== null && e.memoizedState === null
          ? !1
          : (i & 2) !== 0),
    c
      ? ((s = !0), (t.flags &= -129))
      : (e === null ||
          e.memoizedState !== null) &&
        (i |= 1),
    ye(Te, i & 1),
    e === null)
  )
    return (
      Oa(t),
      (e = t.memoizedState),
      e !== null &&
      ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = {
                mode: "hidden",
                children: o,
              }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0),
                  (s.pendingProps = o))
                : (s = nl(o, r, 0, null)),
              (e = lr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Ba(n)),
              (t.memoizedState = Fa),
              e)
            : Uc(t, o))
    );
  if (
    ((i = e.memoizedState),
    i !== null &&
      ((c = i.dehydrated), c !== null))
  )
    return Fv(e, t, o, r, c, i, n);
  if (s) {
    (s = r.fallback),
      (o = t.mode),
      (i = e.child),
      (c = i.sibling);
    var a = {
      mode: "hidden",
      children: r.children,
    };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Rn(i, a)),
          (r.subtreeFlags =
            i.subtreeFlags & 14680064)),
      c !== null
        ? (s = Rn(c, s))
        : ((s = lr(s, o, n, null)),
          (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Ba(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fa),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Rn(s, {
      mode: "visible",
      children: r.children,
    })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null
        ? ((t.deletions = [e]), (t.flags |= 16))
        : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Uc(e, t) {
  return (
    (t = nl(
      { mode: "visible", children: t },
      e.mode,
      0,
      null
    )),
    (t.return = e),
    (e.child = t)
  );
}
function Ys(e, t, n, r) {
  return (
    r !== null && Pc(r),
    ei(t, e.child, null, n),
    (e = Uc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Fv(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257),
        (r = Vl(Error(R(422)))),
        Ys(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child),
        (t.flags |= 128),
        null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = nl(
          {
            mode: "visible",
            children: r.children,
          },
          i,
          0,
          null
        )),
        (s = lr(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && ei(t, e.child, null, o),
        (t.child.memoizedState = Ba(o)),
        (t.memoizedState = Fa),
        s);
  if (!(t.mode & 1)) return Ys(e, t, o, null);
  if (i.data === "$!") {
    if (
      ((r =
        i.nextSibling && i.nextSibling.dataset),
      r)
    )
      var c = r.dgst;
    return (
      (r = c),
      (s = Error(R(419))),
      (r = Vl(s, r, void 0)),
      Ys(e, t, o, r)
    );
  }
  if (((c = (o & e.childLanes) !== 0), dt || c)) {
    if (((r = Be), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i),
          fn(e, i),
          Ht(r, e, i, -1));
    }
    return (
      Qc(),
      (r = Vl(Error(R(421)))),
      Ys(e, t, o, r)
    );
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Zv.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (xt = Dn(i.nextSibling)),
      (wt = t),
      (Ee = !0),
      (Ft = null),
      e !== null &&
        ((kt[Nt++] = on),
        (kt[Nt++] = ln),
        (kt[Nt++] = dr),
        (on = e.id),
        (ln = e.overflow),
        (dr = t)),
      (t = Uc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ad(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t),
    Aa(e.return, t, n);
}
function Wl(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function vm(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if (
    (tt(e, t, r.children, n),
    (r = Te.current),
    r & 2)
  )
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Ad(e, n, t);
        else if (e.tag === 19) Ad(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        (e.sibling.return = e.return),
          (e = e.sibling);
      }
    r &= 1;
  }
  if ((ye(Te, r), !(t.mode & 1)))
    t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null &&
              Ao(e) === null &&
              (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling),
              (n.sibling = null)),
          Wl(t, !1, i, n, s);
        break;
      case "backwards":
        for (
          n = null, i = t.child, t.child = null;
          i !== null;

        ) {
          if (
            ((e = i.alternate),
            e !== null && Ao(e) === null)
          ) {
            t.child = i;
            break;
          }
          (e = i.sibling),
            (i.sibling = n),
            (n = i),
            (i = e);
        }
        Wl(t, !0, n, null, s);
        break;
      case "together":
        Wl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function co(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null),
    (t.alternate = null),
    (t.flags |= 2));
}
function pn(e, t, n) {
  if (
    (e !== null &&
      (t.dependencies = e.dependencies),
    (pr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child)
    throw Error(R(153));
  if (t.child !== null) {
    for (
      e = t.child,
        n = Rn(e, e.pendingProps),
        t.child = n,
        n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling),
        (n = n.sibling = Rn(e, e.pendingProps)),
        (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Bv(e, t, n) {
  switch (t.tag) {
    case 3:
      hm(t), Jr();
      break;
    case 5:
      Vp(t);
      break;
    case 1:
      pt(t.type) && ko(t);
      break;
    case 4:
      Ic(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      ye(Mo, r._currentValue),
        (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ye(Te, Te.current & 1),
            (t.flags |= 128),
            null)
          : n & t.child.childLanes
          ? gm(e, t, n)
          : (ye(Te, Te.current & 1),
            (e = pn(e, t, n)),
            e !== null ? e.sibling : null);
      ye(Te, Te.current & 1);
      break;
    case 19:
      if (
        ((r = (n & t.childLanes) !== 0),
        e.flags & 128)
      ) {
        if (r) return vm(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null),
          (i.tail = null),
          (i.lastEffect = null)),
        ye(Te, Te.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), pm(e, t, n);
  }
  return pn(e, t, n);
}
var ym, $a, xm, wm;
ym = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6)
      e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t)
        return;
      n = n.return;
    }
    (n.sibling.return = n.return),
      (n = n.sibling);
  }
};
$a = function () {};
xm = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), ir(Jt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = ca(e, i)), (r = ca(e, r)), (s = []);
        break;
      case "select":
        (i = Ne({}, i, { value: void 0 })),
          (r = Ne({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = fa(e, i)), (r = fa(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Eo);
    }
    ma(n, r);
    var o;
    n = null;
    for (f in i)
      if (
        !r.hasOwnProperty(f) &&
        i.hasOwnProperty(f) &&
        i[f] != null
      )
        if (f === "style") {
          var c = i[f];
          for (o in c)
            c.hasOwnProperty(o) &&
              (n || (n = {}), (n[o] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !==
              "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (Xi.hasOwnProperty(f)
              ? s || (s = [])
              : (s = s || []).push(f, null));
    for (f in r) {
      var a = r[f];
      if (
        ((c = i != null ? i[f] : void 0),
        r.hasOwnProperty(f) &&
          a !== c &&
          (a != null || c != null))
      )
        if (f === "style")
          if (c) {
            for (o in c)
              !c.hasOwnProperty(o) ||
                (a && a.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in a)
              a.hasOwnProperty(o) &&
                c[o] !== a[o] &&
                (n || (n = {}), (n[o] = a[o]));
          } else
            n || (s || (s = []), s.push(f, n)),
              (n = a);
        else
          f === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (c = c ? c.__html : void 0),
              a != null &&
                c !== a &&
                (s = s || []).push(f, a))
            : f === "children"
            ? (typeof a != "string" &&
                typeof a != "number") ||
              (s = s || []).push(f, "" + a)
            : f !==
                "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (Xi.hasOwnProperty(f)
                ? (a != null &&
                    f === "onScroll" &&
                    xe("scroll", e),
                  s || c === a || (s = []))
                : (s = s || []).push(f, a));
    }
    n && (s = s || []).push("style", n);
    var f = s;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
wm = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ti(e, t) {
  if (!Ee)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t),
            (t = t.sibling);
        n === null
          ? (e.tail = null)
          : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n),
            (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Ge(e) {
  var t =
      e.alternate !== null &&
      e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (
    (e.subtreeFlags |= r), (e.childLanes = n), t
  );
}
function $v(e, t, n) {
  var r = t.pendingProps;
  switch ((Nc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ge(t), null;
    case 1:
      return pt(t.type) && To(), Ge(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ti(),
        we(ft),
        we(Ye),
        zc(),
        r.pendingContext &&
          ((r.context = r.pendingContext),
          (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Gs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated &&
                !(t.flags & 256)) ||
              ((t.flags |= 1024),
              Ft !== null &&
                (Qa(Ft), (Ft = null)))),
        $a(e, t),
        Ge(t),
        null
      );
    case 5:
      _c(t);
      var i = ir(cs.current);
      if (
        ((n = t.type),
        e !== null && t.stateNode != null)
      )
        xm(e, t, n, r, i),
          e.ref !== t.ref &&
            ((t.flags |= 512),
            (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null)
            throw Error(R(166));
          return Ge(t), null;
        }
        if (((e = ir(Jt.current)), Gs(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (
            ((r[Kt] = t),
            (r[ls] = s),
            (e = (t.mode & 1) !== 0),
            n)
          ) {
            case "dialog":
              xe("cancel", r), xe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              xe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ri.length; i++)
                xe(Ri[i], r);
              break;
            case "source":
              xe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              xe("error", r), xe("load", r);
              break;
            case "details":
              xe("toggle", r);
              break;
            case "input":
              Hu(r, s), xe("invalid", r);
              break;
            case "select":
              (r._wrapperState = {
                wasMultiple: !!s.multiple,
              }),
                xe("invalid", r);
              break;
            case "textarea":
              Vu(r, s), xe("invalid", r);
          }
          ma(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var c = s[o];
              o === "children"
                ? typeof c == "string"
                  ? r.textContent !== c &&
                    (s.suppressHydrationWarning !==
                      !0 &&
                      Ws(r.textContent, c, e),
                    (i = ["children", c]))
                  : typeof c == "number" &&
                    r.textContent !== "" + c &&
                    (s.suppressHydrationWarning !==
                      !0 &&
                      Ws(r.textContent, c, e),
                    (i = ["children", "" + c]))
                : Xi.hasOwnProperty(o) &&
                  c != null &&
                  o === "onScroll" &&
                  xe("scroll", r);
            }
          switch (n) {
            case "input":
              zs(r), Uu(r, s, !0);
              break;
            case "textarea":
              zs(r), Wu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" &&
                (r.onclick = Eo);
          }
          (r = i),
            (t.updateQueue = r),
            r !== null && (t.flags |= 4);
        } else {
          (o =
            i.nodeType === 9
              ? i
              : i.ownerDocument),
            e ===
              "http://www.w3.org/1999/xhtml" &&
              (e = qf(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML =
                    "<script></script>"),
                  (e = e.removeChild(
                    e.firstChild
                  )))
                : typeof r.is == "string"
                ? (e = o.createElement(n, {
                    is: r.is,
                  }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size &&
                        (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Kt] = t),
            (e[ls] = r),
            ym(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = ha(n, r)), n)) {
              case "dialog":
                xe("cancel", e),
                  xe("close", e),
                  (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                xe("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ri.length; i++)
                  xe(Ri[i], e);
                i = r;
                break;
              case "source":
                xe("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                xe("error", e),
                  xe("load", e),
                  (i = r);
                break;
              case "details":
                xe("toggle", e), (i = r);
                break;
              case "input":
                Hu(e, r),
                  (i = ca(e, r)),
                  xe("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = {
                  wasMultiple: !!r.multiple,
                }),
                  (i = Ne({}, r, {
                    value: void 0,
                  })),
                  xe("invalid", e);
                break;
              case "textarea":
                Vu(e, r),
                  (i = fa(e, r)),
                  xe("invalid", e);
                break;
              default:
                i = r;
            }
            ma(n, i), (c = i);
            for (s in c)
              if (c.hasOwnProperty(s)) {
                var a = c[s];
                s === "style"
                  ? Kf(e, a)
                  : s ===
                    "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0),
                    a != null && Yf(e, a))
                  : s === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" ||
                        a !== "") &&
                      Zi(e, a)
                    : typeof a == "number" &&
                      Zi(e, "" + a)
                  : s !==
                      "suppressContentEditableWarning" &&
                    s !==
                      "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Xi.hasOwnProperty(s)
                      ? a != null &&
                        s === "onScroll" &&
                        xe("scroll", e)
                      : a != null &&
                        pc(e, s, a, o));
              }
            switch (n) {
              case "input":
                zs(e), Uu(e, r, !1);
                break;
              case "textarea":
                zs(e), Wu(e);
                break;
              case "option":
                r.value != null &&
                  e.setAttribute(
                    "value",
                    "" + Bn(r.value)
                  );
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Ur(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Ur(
                        e,
                        !!r.multiple,
                        r.defaultValue,
                        !0
                      );
                break;
              default:
                typeof i.onClick == "function" &&
                  (e.onclick = Eo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null &&
          ((t.flags |= 512),
          (t.flags |= 2097152));
      }
      return Ge(t), null;
    case 6:
      if (e && t.stateNode != null)
        wm(e, t, e.memoizedProps, r);
      else {
        if (
          typeof r != "string" &&
          t.stateNode === null
        )
          throw Error(R(166));
        if (
          ((n = ir(cs.current)),
          ir(Jt.current),
          Gs(t))
        ) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Kt] = t),
            (s = r.nodeValue !== n) &&
              ((e = wt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ws(
                  r.nodeValue,
                  n,
                  (e.mode & 1) !== 0
                );
                break;
              case 5:
                e.memoizedProps
                  .suppressHydrationWarning !==
                  !0 &&
                  Ws(
                    r.nodeValue,
                    n,
                    (e.mode & 1) !== 0
                  );
            }
          s && (t.flags |= 4);
        } else
          (r = (
            n.nodeType === 9 ? n : n.ownerDocument
          ).createTextNode(r)),
            (r[Kt] = t),
            (t.stateNode = r);
      }
      return Ge(t), null;
    case 13:
      if (
        (we(Te),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null &&
            e.memoizedState.dehydrated !== null))
      ) {
        if (
          Ee &&
          xt !== null &&
          t.mode & 1 &&
          !(t.flags & 128)
        )
          zp(),
            Jr(),
            (t.flags |= 98560),
            (s = !1);
        else if (
          ((s = Gs(t)),
          r !== null && r.dehydrated !== null)
        ) {
          if (e === null) {
            if (!s) throw Error(R(318));
            if (
              ((s = t.memoizedState),
              (s =
                s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(R(317));
            s[Kt] = t;
          } else
            Jr(),
              !(t.flags & 128) &&
                (t.memoizedState = null),
              (t.flags |= 4);
          Ge(t), (s = !1);
        } else
          Ft !== null && (Qa(Ft), (Ft = null)),
            (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !==
            (e !== null &&
              e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Te.current & 1
                ? Re === 0 && (Re = 3)
                : Qc())),
          t.updateQueue !== null &&
            (t.flags |= 4),
          Ge(t),
          null);
    case 4:
      return (
        ti(),
        $a(e, t),
        e === null &&
          ss(t.stateNode.containerInfo),
        Ge(t),
        null
      );
    case 10:
      return Oc(t.type._context), Ge(t), null;
    case 17:
      return pt(t.type) && To(), Ge(t), null;
    case 19:
      if (
        (we(Te),
        (s = t.memoizedState),
        s === null)
      )
        return Ge(t), null;
      if (
        ((r = (t.flags & 128) !== 0),
        (o = s.rendering),
        o === null)
      )
        if (r) Ti(s, !1);
        else {
          if (
            Re !== 0 ||
            (e !== null && e.flags & 128)
          )
            for (e = t.child; e !== null; ) {
              if (((o = Ao(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Ti(s, !1),
                    r = o.updateQueue,
                    r !== null &&
                      ((t.updateQueue = r),
                      (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes =
                          o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps =
                          o.memoizedProps),
                        (s.memoizedState =
                          o.memoizedState),
                        (s.updateQueue =
                          o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext:
                                  e.firstContext,
                              })),
                    (n = n.sibling);
                return (
                  ye(Te, (Te.current & 1) | 2),
                  t.child
                );
              }
              e = e.sibling;
            }
          s.tail !== null &&
            Le() > ri &&
            ((t.flags |= 128),
            (r = !0),
            Ti(s, !1),
            (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ao(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null &&
                ((t.updateQueue = n),
                (t.flags |= 4)),
              Ti(s, !0),
              s.tail === null &&
                s.tailMode === "hidden" &&
                !o.alternate &&
                !Ee)
            )
              return Ge(t), null;
          } else
            2 * Le() - s.renderingStartTime >
              ri &&
              n !== 1073741824 &&
              ((t.flags |= 128),
              (r = !0),
              Ti(s, !1),
              (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null
              ? (n.sibling = o)
              : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = Le()),
          (t.sibling = null),
          (n = Te.current),
          ye(Te, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ge(t), null);
    case 22:
    case 23:
      return (
        Yc(),
        (r = t.memoizedState !== null),
        e !== null &&
          (e.memoizedState !== null) !== r &&
          (t.flags |= 8192),
        r && t.mode & 1
          ? vt & 1073741824 &&
            (Ge(t),
            t.subtreeFlags & 6 &&
              (t.flags |= 8192))
          : Ge(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(R(156, t.tag));
}
function Hv(e, t) {
  switch ((Nc(t), t.tag)) {
    case 1:
      return (
        pt(t.type) && To(),
        (e = t.flags),
        e & 65536
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 3:
      return (
        ti(),
        we(ft),
        we(Ye),
        zc(),
        (e = t.flags),
        e & 65536 && !(e & 128)
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 5:
      return _c(t), null;
    case 13:
      if (
        (we(Te),
        (e = t.memoizedState),
        e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null)
          throw Error(R(340));
        Jr();
      }
      return (
        (e = t.flags),
        e & 65536
          ? ((t.flags = (e & -65537) | 128), t)
          : null
      );
    case 19:
      return we(Te), null;
    case 4:
      return ti(), null;
    case 10:
      return Oc(t.type._context), null;
    case 22:
    case 23:
      return Yc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Qs = !1,
  qe = !1,
  Uv =
    typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function Fr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Pe(e, t, r);
      }
    else n.current = null;
}
function Ha(e, t, n) {
  try {
    n();
  } catch (r) {
    Pe(e, t, r);
  }
}
var Dd = !1;
function Vv(e, t) {
  if (((Ea = So), (e = jp()), Tc(e))) {
    if ("selectionStart" in e)
      var n = {
        start: e.selectionStart,
        end: e.selectionEnd,
      };
    else
      e: {
        n =
          ((n = e.ownerDocument) &&
            n.defaultView) ||
          window;
        var r =
          n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            c = -1,
            a = -1,
            f = 0,
            p = 0,
            v = e,
            w = null;
          t: for (;;) {
            for (
              var b;
              v !== n ||
                (i !== 0 && v.nodeType !== 3) ||
                (c = o + i),
                v !== s ||
                  (r !== 0 && v.nodeType !== 3) ||
                  (a = o + r),
                v.nodeType === 3 &&
                  (o += v.nodeValue.length),
                (b = v.firstChild) !== null;

            )
              (w = v), (v = b);
            for (;;) {
              if (v === e) break t;
              if (
                (w === n && ++f === i && (c = o),
                w === s && ++p === r && (a = o),
                (b = v.nextSibling) !== null)
              )
                break;
              (v = w), (w = v.parentNode);
            }
            v = b;
          }
          n =
            c === -1 || a === -1
              ? null
              : { start: c, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Ta = { focusedElem: e, selectionRange: n },
      So = !1,
      V = t;
    V !== null;

  )
    if (
      ((t = V),
      (e = t.child),
      (t.subtreeFlags & 1028) !== 0 && e !== null)
    )
      (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var j = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (j !== null) {
                  var S = j.memoizedProps,
                    T = j.memoizedState,
                    y = t.stateNode,
                    h = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type
                        ? S
                        : _t(t.type, S),
                      T
                    );
                  y.__reactInternalSnapshotBeforeUpdate =
                    h;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(
                      g.documentElement
                    );
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(R(163));
            }
        } catch (x) {
          Pe(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (j = Dd), (Dd = !1), j;
}
function Gi(e, t, n) {
  var r = t.updateQueue;
  if (
    ((r = r !== null ? r.lastEffect : null),
    r !== null)
  ) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0),
          s !== void 0 && Ha(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function el(e, t) {
  if (
    ((t = t.updateQueue),
    (t = t !== null ? t.lastEffect : null),
    t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ua(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function"
      ? t(e)
      : (t.current = e);
  }
}
function bm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Kt],
        delete t[ls],
        delete t[Pa],
        delete t[Tv],
        delete t[kv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Sm(e) {
  return (
    e.tag === 5 || e.tag === 3 || e.tag === 4
  );
}
function Id(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Sm(e.return))
        return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (
        e.flags & 2 ||
        e.child === null ||
        e.tag === 4
      )
        continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Va(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode),
              t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null ||
            t.onclick !== null ||
            (t.onclick = Eo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Va(e, t, n), e = e.sibling; e !== null; )
      Va(e, t, n), (e = e.sibling);
}
function Wa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wa(e, t, n), e = e.sibling; e !== null; )
      Wa(e, t, n), (e = e.sibling);
}
var $e = null,
  zt = !1;
function Sn(e, t, n) {
  for (n = n.child; n !== null; )
    Cm(e, t, n), (n = n.sibling);
}
function Cm(e, t, n) {
  if (
    Zt &&
    typeof Zt.onCommitFiberUnmount == "function"
  )
    try {
      Zt.onCommitFiberUnmount(Go, n);
    } catch {}
  switch (n.tag) {
    case 5:
      qe || Fr(n, t);
    case 6:
      var r = $e,
        i = zt;
      ($e = null),
        Sn(e, t, n),
        ($e = r),
        (zt = i),
        $e !== null &&
          (zt
            ? ((e = $e),
              (n = n.stateNode),
              e.nodeType === 8
                ? e.parentNode.removeChild(n)
                : e.removeChild(n))
            : $e.removeChild(n.stateNode));
      break;
    case 18:
      $e !== null &&
        (zt
          ? ((e = $e),
            (n = n.stateNode),
            e.nodeType === 8
              ? Rl(e.parentNode, n)
              : e.nodeType === 1 && Rl(e, n),
            ns(e))
          : Rl($e, n.stateNode));
      break;
    case 4:
      (r = $e),
        (i = zt),
        ($e = n.stateNode.containerInfo),
        (zt = !0),
        Sn(e, t, n),
        ($e = r),
        (zt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !qe &&
        ((r = n.updateQueue),
        r !== null &&
          ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 &&
              (s & 2 || s & 4) &&
              Ha(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      Sn(e, t, n);
      break;
    case 1:
      if (
        !qe &&
        (Fr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount ==
          "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (c) {
          Pe(n, t, c);
        }
      Sn(e, t, n);
      break;
    case 21:
      Sn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((qe =
            (r = qe) || n.memoizedState !== null),
          Sn(e, t, n),
          (qe = r))
        : Sn(e, t, n);
      break;
    default:
      Sn(e, t, n);
  }
}
function _d(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Uv()),
      t.forEach(function (r) {
        var i = Jv.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function It(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          c = o;
        e: for (; c !== null; ) {
          switch (c.tag) {
            case 5:
              ($e = c.stateNode), (zt = !1);
              break e;
            case 3:
              ($e = c.stateNode.containerInfo),
                (zt = !0);
              break e;
            case 4:
              ($e = c.stateNode.containerInfo),
                (zt = !0);
              break e;
          }
          c = c.return;
        }
        if ($e === null) throw Error(R(160));
        Cm(s, o, i), ($e = null), (zt = !1);
        var a = i.alternate;
        a !== null && (a.return = null),
          (i.return = null);
      } catch (f) {
        Pe(i, t, f);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; )
      jm(t, e), (t = t.sibling);
}
function jm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((It(t, e), Yt(e), r & 4)) {
        try {
          Gi(3, e, e.return), el(3, e);
        } catch (S) {
          Pe(e, e.return, S);
        }
        try {
          Gi(5, e, e.return);
        } catch (S) {
          Pe(e, e.return, S);
        }
      }
      break;
    case 1:
      It(t, e),
        Yt(e),
        r & 512 && n !== null && Fr(n, n.return);
      break;
    case 5:
      if (
        (It(t, e),
        Yt(e),
        r & 512 && n !== null && Fr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          Zi(i, "");
        } catch (S) {
          Pe(e, e.return, S);
        }
      }
      if (
        r & 4 &&
        ((i = e.stateNode), i != null)
      ) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          c = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            c === "input" &&
              s.type === "radio" &&
              s.name != null &&
              Wf(i, s),
              ha(c, o);
            var f = ha(c, s);
            for (o = 0; o < a.length; o += 2) {
              var p = a[o],
                v = a[o + 1];
              p === "style"
                ? Kf(i, v)
                : p === "dangerouslySetInnerHTML"
                ? Yf(i, v)
                : p === "children"
                ? Zi(i, v)
                : pc(i, p, v, f);
            }
            switch (c) {
              case "input":
                ua(i, s);
                break;
              case "textarea":
                Gf(i, s);
                break;
              case "select":
                var w =
                  i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple =
                  !!s.multiple;
                var b = s.value;
                b != null
                  ? Ur(i, !!s.multiple, b, !1)
                  : w !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Ur(
                          i,
                          !!s.multiple,
                          s.defaultValue,
                          !0
                        )
                      : Ur(
                          i,
                          !!s.multiple,
                          s.multiple ? [] : "",
                          !1
                        ));
            }
            i[ls] = s;
          } catch (S) {
            Pe(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((It(t, e), Yt(e), r & 4)) {
        if (e.stateNode === null)
          throw Error(R(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (S) {
          Pe(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (It(t, e),
        Yt(e),
        r & 4 &&
          n !== null &&
          n.memoizedState.isDehydrated)
      )
        try {
          ns(t.containerInfo);
        } catch (S) {
          Pe(e, e.return, S);
        }
      break;
    case 4:
      It(t, e), Yt(e);
      break;
    case 13:
      It(t, e),
        Yt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null &&
              i.alternate.memoizedState !==
                null) ||
            (Gc = Le())),
        r & 4 && _d(e);
      break;
    case 22:
      if (
        ((p =
          n !== null && n.memoizedState !== null),
        e.mode & 1
          ? ((qe = (f = qe) || p),
            It(t, e),
            (qe = f))
          : It(t, e),
        Yt(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) &&
            !p &&
            e.mode & 1)
        )
          for (V = e, p = e.child; p !== null; ) {
            for (v = V = p; V !== null; ) {
              switch (
                ((w = V), (b = w.child), w.tag)
              ) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Gi(4, w, w.return);
                  break;
                case 1:
                  Fr(w, w.return);
                  var j = w.stateNode;
                  if (
                    typeof j.componentWillUnmount ==
                    "function"
                  ) {
                    (r = w), (n = w.return);
                    try {
                      (t = r),
                        (j.props =
                          t.memoizedProps),
                        (j.state =
                          t.memoizedState),
                        j.componentWillUnmount();
                    } catch (S) {
                      Pe(r, n, S);
                    }
                  }
                  break;
                case 5:
                  Fr(w, w.return);
                  break;
                case 22:
                  if (w.memoizedState !== null) {
                    Rd(v);
                    continue;
                  }
              }
              b !== null
                ? ((b.return = w), (V = b))
                : Rd(v);
            }
            p = p.sibling;
          }
        e: for (p = null, v = e; ; ) {
          if (v.tag === 5) {
            if (p === null) {
              p = v;
              try {
                (i = v.stateNode),
                  f
                    ? ((s = i.style),
                      typeof s.setProperty ==
                      "function"
                        ? s.setProperty(
                            "display",
                            "none",
                            "important"
                          )
                        : (s.display = "none"))
                    : ((c = v.stateNode),
                      (a = v.memoizedProps.style),
                      (o =
                        a != null &&
                        a.hasOwnProperty(
                          "display"
                        )
                          ? a.display
                          : null),
                      (c.style.display = Qf(
                        "display",
                        o
                      )));
              } catch (S) {
                Pe(e, e.return, S);
              }
            }
          } else if (v.tag === 6) {
            if (p === null)
              try {
                v.stateNode.nodeValue = f
                  ? ""
                  : v.memoizedProps;
              } catch (S) {
                Pe(e, e.return, S);
              }
          } else if (
            ((v.tag !== 22 && v.tag !== 23) ||
              v.memoizedState === null ||
              v === e) &&
            v.child !== null
          ) {
            (v.child.return = v), (v = v.child);
            continue;
          }
          if (v === e) break e;
          for (; v.sibling === null; ) {
            if (
              v.return === null ||
              v.return === e
            )
              break e;
            p === v && (p = null), (v = v.return);
          }
          p === v && (p = null),
            (v.sibling.return = v.return),
            (v = v.sibling);
        }
      }
      break;
    case 19:
      It(t, e), Yt(e), r & 4 && _d(e);
      break;
    case 21:
      break;
    default:
      It(t, e), Yt(e);
  }
}
function Yt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Sm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(R(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 &&
            (Zi(i, ""), (r.flags &= -33));
          var s = Id(e);
          Wa(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            c = Id(e);
          Va(e, c, o);
          break;
        default:
          throw Error(R(161));
      }
    } catch (a) {
      Pe(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Wv(e, t, n) {
  (V = e), Em(e);
}
function Em(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var i = V,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || Qs;
      if (!o) {
        var c = i.alternate,
          a =
            (c !== null &&
              c.memoizedState !== null) ||
            qe;
        c = Qs;
        var f = qe;
        if (((Qs = o), (qe = a) && !f))
          for (V = i; V !== null; )
            (o = V),
              (a = o.child),
              o.tag === 22 &&
              o.memoizedState !== null
                ? Fd(i)
                : a !== null
                ? ((a.return = o), (V = a))
                : Fd(i);
        for (; s !== null; )
          (V = s), Em(s), (s = s.sibling);
        (V = i), (Qs = c), (qe = f);
      }
      zd(e);
    } else
      i.subtreeFlags & 8772 && s !== null
        ? ((s.return = i), (V = s))
        : zd(e);
  }
}
function zd(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              qe || el(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !qe)
                if (n === null)
                  r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : _t(
                          t.type,
                          n.memoizedProps
                        );
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && wd(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (
                  ((n = null), t.child !== null)
                )
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                wd(t, o, n);
              }
              break;
            case 5:
              var c = t.stateNode;
              if (n === null && t.flags & 4) {
                n = c;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var f = t.alternate;
                if (f !== null) {
                  var p = f.memoizedState;
                  if (p !== null) {
                    var v = p.dehydrated;
                    v !== null && ns(v);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(R(163));
          }
        qe || (t.flags & 512 && Ua(t));
      } catch (w) {
        Pe(t, t.return, w);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function Rd(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function Fd(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            el(4, t);
          } catch (a) {
            Pe(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (
            typeof r.componentDidMount ==
            "function"
          ) {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Pe(t, i, a);
            }
          }
          var s = t.return;
          try {
            Ua(t);
          } catch (a) {
            Pe(t, s, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Ua(t);
          } catch (a) {
            Pe(t, o, a);
          }
      }
    } catch (a) {
      Pe(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var c = t.sibling;
    if (c !== null) {
      (c.return = t.return), (V = c);
      break;
    }
    V = t.return;
  }
}
var Gv = Math.ceil,
  _o = mn.ReactCurrentDispatcher,
  Vc = mn.ReactCurrentOwner,
  Mt = mn.ReactCurrentBatchConfig,
  ce = 0,
  Be = null,
  Ae = null,
  He = 0,
  vt = 0,
  Br = Vn(0),
  Re = 0,
  ps = null,
  pr = 0,
  tl = 0,
  Wc = 0,
  qi = null,
  ut = null,
  Gc = 0,
  ri = 1 / 0,
  rn = null,
  zo = !1,
  Ga = null,
  _n = null,
  Ks = !1,
  Nn = null,
  Ro = 0,
  Yi = 0,
  qa = null,
  uo = -1,
  fo = 0;
function nt() {
  return ce & 6
    ? Le()
    : uo !== -1
    ? uo
    : (uo = Le());
}
function zn(e) {
  return e.mode & 1
    ? ce & 2 && He !== 0
      ? He & -He
      : Pv.transition !== null
      ? (fo === 0 && (fo = ap()), fo)
      : ((e = de),
        e !== 0 ||
          ((e = window.event),
          (e = e === void 0 ? 16 : hp(e.type))),
        e)
    : 1;
}
function Ht(e, t, n, r) {
  if (50 < Yi)
    throw ((Yi = 0), (qa = null), Error(R(185)));
  bs(e, n, r),
    (!(ce & 2) || e !== Be) &&
      (e === Be &&
        (!(ce & 2) && (tl |= n),
        Re === 4 && Tn(e, He)),
      mt(e, r),
      n === 1 &&
        ce === 0 &&
        !(t.mode & 1) &&
        ((ri = Le() + 500), Xo && Wn()));
}
function mt(e, t) {
  var n = e.callbackNode;
  P1(e, t);
  var r = bo(e, e === Be ? He : 0);
  if (r === 0)
    n !== null && Yu(n),
      (e.callbackNode = null),
      (e.callbackPriority = 0);
  else if (
    ((t = r & -r), e.callbackPriority !== t)
  ) {
    if ((n != null && Yu(n), t === 1))
      e.tag === 0
        ? Nv(Bd.bind(null, e))
        : Dp(Bd.bind(null, e)),
        jv(function () {
          !(ce & 6) && Wn();
        }),
        (n = null);
    else {
      switch (cp(r)) {
        case 1:
          n = yc;
          break;
        case 4:
          n = op;
          break;
        case 16:
          n = wo;
          break;
        case 536870912:
          n = lp;
          break;
        default:
          n = wo;
      }
      n = Am(n, Tm.bind(null, e));
    }
    (e.callbackPriority = t),
      (e.callbackNode = n);
  }
}
function Tm(e, t) {
  if (((uo = -1), (fo = 0), ce & 6))
    throw Error(R(327));
  var n = e.callbackNode;
  if (Yr() && e.callbackNode !== n) return null;
  var r = bo(e, e === Be ? He : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t)
    t = Fo(e, r);
  else {
    t = r;
    var i = ce;
    ce |= 2;
    var s = Nm();
    (Be !== e || He !== t) &&
      ((rn = null), (ri = Le() + 500), or(e, t));
    do
      try {
        Qv();
        break;
      } catch (c) {
        km(e, c);
      }
    while (1);
    Lc(),
      (_o.current = s),
      (ce = i),
      Ae !== null
        ? (t = 0)
        : ((Be = null), (He = 0), (t = Re));
  }
  if (t !== 0) {
    if (
      (t === 2 &&
        ((i = wa(e)),
        i !== 0 && ((r = i), (t = Ya(e, i)))),
      t === 1)
    )
      throw (
        ((n = ps),
        or(e, 0),
        Tn(e, r),
        mt(e, Le()),
        n)
      );
    if (t === 6) Tn(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !qv(i) &&
          ((t = Fo(e, r)),
          t === 2 &&
            ((s = wa(e)),
            s !== 0 && ((r = s), (t = Ya(e, s)))),
          t === 1))
      )
        throw (
          ((n = ps),
          or(e, 0),
          Tn(e, r),
          mt(e, Le()),
          n)
        );
      switch (
        ((e.finishedWork = i),
        (e.finishedLanes = r),
        t)
      ) {
        case 0:
        case 1:
          throw Error(R(345));
        case 2:
          tr(e, ut, rn);
          break;
        case 3:
          if (
            (Tn(e, r),
            (r & 130023424) === r &&
              ((t = Gc + 500 - Le()), 10 < t))
          ) {
            if (bo(e, 0) !== 0) break;
            if (
              ((i = e.suspendedLanes),
              (i & r) !== r)
            ) {
              nt(),
                (e.pingedLanes |=
                  e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Na(
              tr.bind(null, e, ut, rn),
              t
            );
            break;
          }
          tr(e, ut, rn);
          break;
        case 4:
          if ((Tn(e, r), (r & 4194240) === r))
            break;
          for (
            t = e.eventTimes, i = -1;
            0 < r;

          ) {
            var o = 31 - $t(r);
            (s = 1 << o),
              (o = t[o]),
              o > i && (i = o),
              (r &= ~s);
          }
          if (
            ((r = i),
            (r = Le() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Gv(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Na(
              tr.bind(null, e, ut, rn),
              r
            );
            break;
          }
          tr(e, ut, rn);
          break;
        case 5:
          tr(e, ut, rn);
          break;
        default:
          throw Error(R(329));
      }
    }
  }
  return (
    mt(e, Le()),
    e.callbackNode === n ? Tm.bind(null, e) : null
  );
}
function Ya(e, t) {
  var n = qi;
  return (
    e.current.memoizedState.isDehydrated &&
      (or(e, t).flags |= 256),
    (e = Fo(e, t)),
    e !== 2 &&
      ((t = ut), (ut = n), t !== null && Qa(t)),
    e
  );
}
function Qa(e) {
  ut === null ? (ut = e) : ut.push.apply(ut, e);
}
function qv(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (
        n !== null &&
        ((n = n.stores), n !== null)
      )
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Ut(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (
      ((n = t.child),
      t.subtreeFlags & 16384 && n !== null)
    )
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return !0;
        t = t.return;
      }
      (t.sibling.return = t.return),
        (t = t.sibling);
    }
  }
  return !0;
}
function Tn(e, t) {
  for (
    t &= ~Wc,
      t &= ~tl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - $t(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Bd(e) {
  if (ce & 6) throw Error(R(327));
  Yr();
  var t = bo(e, 0);
  if (!(t & 1)) return mt(e, Le()), null;
  var n = Fo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = wa(e);
    r !== 0 && ((t = r), (n = Ya(e, r)));
  }
  if (n === 1)
    throw (
      ((n = ps),
      or(e, 0),
      Tn(e, t),
      mt(e, Le()),
      n)
    );
  if (n === 6) throw Error(R(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    tr(e, ut, rn),
    mt(e, Le()),
    null
  );
}
function qc(e, t) {
  var n = ce;
  ce |= 1;
  try {
    return e(t);
  } finally {
    (ce = n),
      ce === 0 && ((ri = Le() + 500), Xo && Wn());
  }
}
function mr(e) {
  Nn !== null &&
    Nn.tag === 0 &&
    !(ce & 6) &&
    Yr();
  var t = ce;
  ce |= 1;
  var n = Mt.transition,
    r = de;
  try {
    if (((Mt.transition = null), (de = 1), e))
      return e();
  } finally {
    (de = r),
      (Mt.transition = n),
      (ce = t),
      !(ce & 6) && Wn();
  }
}
function Yc() {
  (vt = Br.current), we(Br);
}
function or(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if (
    (n !== -1 && ((e.timeoutHandle = -1), Cv(n)),
    Ae !== null)
  )
    for (n = Ae.return; n !== null; ) {
      var r = n;
      switch ((Nc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes),
            r != null && To();
          break;
        case 3:
          ti(), we(ft), we(Ye), zc();
          break;
        case 5:
          _c(r);
          break;
        case 4:
          ti();
          break;
        case 13:
          we(Te);
          break;
        case 19:
          we(Te);
          break;
        case 10:
          Oc(r.type._context);
          break;
        case 22:
        case 23:
          Yc();
      }
      n = n.return;
    }
  if (
    ((Be = e),
    (Ae = e = Rn(e.current, null)),
    (He = vt = t),
    (Re = 0),
    (ps = null),
    (Wc = tl = pr = 0),
    (ut = qi = null),
    rr !== null)
  ) {
    for (t = 0; t < rr.length; t++)
      if (
        ((n = rr[t]),
        (r = n.interleaved),
        r !== null)
      ) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    rr = null;
  }
  return e;
}
function km(e, t) {
  do {
    var n = Ae;
    try {
      if ((Lc(), (lo.current = Io), Do)) {
        for (
          var r = ke.memoizedState;
          r !== null;

        ) {
          var i = r.queue;
          i !== null && (i.pending = null),
            (r = r.next);
        }
        Do = !1;
      }
      if (
        ((fr = 0),
        (Fe = ze = ke = null),
        (Wi = !1),
        (us = 0),
        (Vc.current = null),
        n === null || n.return === null)
      ) {
        (Re = 1), (ps = t), (Ae = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          c = n,
          a = t;
        if (
          ((t = He),
          (c.flags |= 32768),
          a !== null &&
            typeof a == "object" &&
            typeof a.then == "function")
        ) {
          var f = a,
            p = c,
            v = p.tag;
          if (
            !(p.mode & 1) &&
            (v === 0 || v === 11 || v === 15)
          ) {
            var w = p.alternate;
            w
              ? ((p.updateQueue = w.updateQueue),
                (p.memoizedState =
                  w.memoizedState),
                (p.lanes = w.lanes))
              : ((p.updateQueue = null),
                (p.memoizedState = null));
          }
          var b = kd(o);
          if (b !== null) {
            (b.flags &= -257),
              Nd(b, o, c, s, t),
              b.mode & 1 && Td(s, f, t),
              (t = b),
              (a = f);
            var j = t.updateQueue;
            if (j === null) {
              var S = new Set();
              S.add(a), (t.updateQueue = S);
            } else j.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Td(s, f, t), Qc();
              break e;
            }
            a = Error(R(426));
          }
        } else if (Ee && c.mode & 1) {
          var T = kd(o);
          if (T !== null) {
            !(T.flags & 65536) &&
              (T.flags |= 256),
              Nd(T, o, c, s, t),
              Pc(ni(a, c));
            break e;
          }
        }
        (s = a = ni(a, c)),
          Re !== 4 && (Re = 2),
          qi === null ? (qi = [s]) : qi.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536),
                (t &= -t),
                (s.lanes |= t);
              var y = um(s, a, t);
              xd(s, y);
              break e;
            case 1:
              c = a;
              var h = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof h.getDerivedStateFromError ==
                  "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch ==
                      "function" &&
                    (_n === null || !_n.has(g))))
              ) {
                (s.flags |= 65536),
                  (t &= -t),
                  (s.lanes |= t);
                var x = dm(s, c, t);
                xd(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Mm(n);
    } catch (E) {
      (t = E),
        Ae === n &&
          n !== null &&
          (Ae = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Nm() {
  var e = _o.current;
  return (_o.current = Io), e === null ? Io : e;
}
function Qc() {
  (Re === 0 || Re === 3 || Re === 2) && (Re = 4),
    Be === null ||
      (!(pr & 268435455) && !(tl & 268435455)) ||
      Tn(Be, He);
}
function Fo(e, t) {
  var n = ce;
  ce |= 2;
  var r = Nm();
  (Be !== e || He !== t) &&
    ((rn = null), or(e, t));
  do
    try {
      Yv();
      break;
    } catch (i) {
      km(e, i);
    }
  while (1);
  if (
    (Lc(),
    (ce = n),
    (_o.current = r),
    Ae !== null)
  )
    throw Error(R(261));
  return (Be = null), (He = 0), Re;
}
function Yv() {
  for (; Ae !== null; ) Pm(Ae);
}
function Qv() {
  for (; Ae !== null && !w1(); ) Pm(Ae);
}
function Pm(e) {
  var t = Om(e.alternate, e, vt);
  (e.memoizedProps = e.pendingProps),
    t === null ? Mm(e) : (Ae = t),
    (Vc.current = null);
}
function Mm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Hv(n, t)), n !== null)) {
        (n.flags &= 32767), (Ae = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768),
          (e.subtreeFlags = 0),
          (e.deletions = null);
      else {
        (Re = 6), (Ae = null);
        return;
      }
    } else if (((n = $v(n, t, vt)), n !== null)) {
      Ae = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ae = t;
      return;
    }
    Ae = t = e;
  } while (t !== null);
  Re === 0 && (Re = 5);
}
function tr(e, t, n) {
  var r = de,
    i = Mt.transition;
  try {
    (Mt.transition = null),
      (de = 1),
      Kv(e, t, n, r);
  } finally {
    (Mt.transition = i), (de = r);
  }
  return null;
}
function Kv(e, t, n, r) {
  do Yr();
  while (Nn !== null);
  if (ce & 6) throw Error(R(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (
    ((e.finishedWork = null),
    (e.finishedLanes = 0),
    n === e.current)
  )
    throw Error(R(177));
  (e.callbackNode = null),
    (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (M1(e, s),
    e === Be && ((Ae = Be = null), (He = 0)),
    (!(n.subtreeFlags & 2064) &&
      !(n.flags & 2064)) ||
      Ks ||
      ((Ks = !0),
      Am(wo, function () {
        return Yr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Mt.transition), (Mt.transition = null);
    var o = de;
    de = 1;
    var c = ce;
    (ce |= 4),
      (Vc.current = null),
      Vv(e, n),
      jm(n, e),
      gv(Ta),
      (So = !!Ea),
      (Ta = Ea = null),
      (e.current = n),
      Wv(n),
      b1(),
      (ce = c),
      (de = o),
      (Mt.transition = s);
  } else e.current = n;
  if (
    (Ks && ((Ks = !1), (Nn = e), (Ro = i)),
    (s = e.pendingLanes),
    s === 0 && (_n = null),
    j1(n.stateNode),
    mt(e, Le()),
    t !== null)
  )
    for (
      r = e.onRecoverableError, n = 0;
      n < t.length;
      n++
    )
      (i = t[n]),
        r(i.value, {
          componentStack: i.stack,
          digest: i.digest,
        });
  if (zo)
    throw ((zo = !1), (e = Ga), (Ga = null), e);
  return (
    Ro & 1 && e.tag !== 0 && Yr(),
    (s = e.pendingLanes),
    s & 1
      ? e === qa
        ? Yi++
        : ((Yi = 0), (qa = e))
      : (Yi = 0),
    Wn(),
    null
  );
}
function Yr() {
  if (Nn !== null) {
    var e = cp(Ro),
      t = Mt.transition,
      n = de;
    try {
      if (
        ((Mt.transition = null),
        (de = 16 > e ? 16 : e),
        Nn === null)
      )
        var r = !1;
      else {
        if (
          ((e = Nn),
          (Nn = null),
          (Ro = 0),
          ce & 6)
        )
          throw Error(R(331));
        var i = ce;
        for (
          ce |= 4, V = e.current;
          V !== null;

        ) {
          var s = V,
            o = s.child;
          if (V.flags & 16) {
            var c = s.deletions;
            if (c !== null) {
              for (var a = 0; a < c.length; a++) {
                var f = c[a];
                for (V = f; V !== null; ) {
                  var p = V;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gi(8, p, s);
                  }
                  var v = p.child;
                  if (v !== null)
                    (v.return = p), (V = v);
                  else
                    for (; V !== null; ) {
                      p = V;
                      var w = p.sibling,
                        b = p.return;
                      if ((bm(p), p === f)) {
                        V = null;
                        break;
                      }
                      if (w !== null) {
                        (w.return = b), (V = w);
                        break;
                      }
                      V = b;
                    }
                }
              }
              var j = s.alternate;
              if (j !== null) {
                var S = j.child;
                if (S !== null) {
                  j.child = null;
                  do {
                    var T = S.sibling;
                    (S.sibling = null), (S = T);
                  } while (S !== null);
                }
              }
              V = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null)
            (o.return = s), (V = o);
          else
            e: for (; V !== null; ) {
              if (((s = V), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Gi(9, s, s.return);
                }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (V = y);
                break e;
              }
              V = s.return;
            }
        }
        var h = e.current;
        for (V = h; V !== null; ) {
          o = V;
          var g = o.child;
          if (o.subtreeFlags & 2064 && g !== null)
            (g.return = o), (V = g);
          else
            e: for (o = h; V !== null; ) {
              if (((c = V), c.flags & 2048))
                try {
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      el(9, c);
                  }
                } catch (E) {
                  Pe(c, c.return, E);
                }
              if (c === o) {
                V = null;
                break e;
              }
              var x = c.sibling;
              if (x !== null) {
                (x.return = c.return), (V = x);
                break e;
              }
              V = c.return;
            }
        }
        if (
          ((ce = i),
          Wn(),
          Zt &&
            typeof Zt.onPostCommitFiberRoot ==
              "function")
        )
          try {
            Zt.onPostCommitFiberRoot(Go, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (de = n), (Mt.transition = t);
    }
  }
  return !1;
}
function $d(e, t, n) {
  (t = ni(n, t)),
    (t = um(e, t, 1)),
    (e = In(e, t, 1)),
    (t = nt()),
    e !== null && (bs(e, 1, t), mt(e, t));
}
function Pe(e, t, n) {
  if (e.tag === 3) $d(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $d(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type
            .getDerivedStateFromError ==
            "function" ||
          (typeof r.componentDidCatch ==
            "function" &&
            (_n === null || !_n.has(r)))
        ) {
          (e = ni(n, e)),
            (e = dm(t, e, 1)),
            (t = In(t, e, 1)),
            (e = nt()),
            t !== null && (bs(t, 1, e), mt(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Xv(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = nt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Be === e &&
      (He & n) === n &&
      (Re === 4 ||
      (Re === 3 &&
        (He & 130023424) === He &&
        500 > Le() - Gc)
        ? or(e, 0)
        : (Wc |= n)),
    mt(e, t);
}
function Lm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Bs),
        (Bs <<= 1),
        !(Bs & 130023424) && (Bs = 4194304))
      : (t = 1));
  var n = nt();
  (e = fn(e, t)),
    e !== null && (bs(e, t, n), mt(e, n));
}
function Zv(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Lm(e, n);
}
function Jv(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(R(314));
  }
  r !== null && r.delete(t), Lm(e, n);
}
var Om;
Om = function (e, t, n) {
  if (e !== null)
    if (
      e.memoizedProps !== t.pendingProps ||
      ft.current
    )
      dt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128))
        return (dt = !1), Bv(e, t, n);
      dt = !!(e.flags & 131072);
    }
  else
    (dt = !1),
      Ee &&
        t.flags & 1048576 &&
        Ip(t, Po, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      co(e, t), (e = t.pendingProps);
      var i = Zr(t, Ye.current);
      qr(t, n), (i = Fc(null, t, r, e, i, n));
      var s = Bc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pt(r) ? ((s = !0), ko(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null &&
              i.state !== void 0
                ? i.state
                : null),
            Dc(t),
            (i.updater = Zo),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ia(t, r, e, n),
            (t = Ra(null, t, r, !0, s, n)))
          : ((t.tag = 0),
            Ee && s && kc(t),
            tt(null, t, i, n),
            (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (co(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = ty(r)),
          (e = _t(r, e)),
          i)
        ) {
          case 0:
            t = za(null, t, r, e, n);
            break e;
          case 1:
            t = Ld(null, t, r, e, n);
            break e;
          case 11:
            t = Pd(null, t, r, e, n);
            break e;
          case 14:
            t = Md(null, t, r, _t(r.type, e), n);
            break e;
        }
        throw Error(R(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _t(r, i)),
        za(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _t(r, i)),
        Ld(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((hm(t), e === null))
          throw Error(R(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Fp(e, t),
          Oo(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries:
                o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = ni(Error(R(423)), t)),
              (t = Od(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = ni(Error(R(424)), t)),
              (t = Od(e, t, r, n, i));
            break e;
          } else
            for (
              xt = Dn(
                t.stateNode.containerInfo
                  .firstChild
              ),
                wt = t,
                Ee = !0,
                Ft = null,
                n = Up(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096),
                (n = n.sibling);
        else {
          if ((Jr(), r === i)) {
            t = pn(e, t, n);
            break e;
          }
          tt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Vp(t),
        e === null && Oa(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        ka(r, i)
          ? (o = null)
          : s !== null &&
            ka(r, s) &&
            (t.flags |= 32),
        mm(e, t),
        tt(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Oa(t), null;
    case 13:
      return gm(e, t, n);
    case 4:
      return (
        Ic(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null
          ? (t.child = ei(t, null, r, n))
          : tt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _t(r, i)),
        Pd(e, t, r, i, n)
      );
    case 7:
      return tt(e, t, t.pendingProps, n), t.child;
    case 8:
      return (
        tt(e, t, t.pendingProps.children, n),
        t.child
      );
    case 12:
      return (
        tt(e, t, t.pendingProps.children, n),
        t.child
      );
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          ye(Mo, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Ut(s.value, o)) {
            if (
              s.children === i.children &&
              !ft.current
            ) {
              t = pn(e, t, n);
              break e;
            }
          } else
            for (
              s = t.child,
                s !== null && (s.return = t);
              s !== null;

            ) {
              var c = s.dependencies;
              if (c !== null) {
                o = s.child;
                for (
                  var a = c.firstContext;
                  a !== null;

                ) {
                  if (a.context === r) {
                    if (s.tag === 1) {
                      (a = an(-1, n & -n)),
                        (a.tag = 2);
                      var f = s.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var p = f.pending;
                        p === null
                          ? (a.next = a)
                          : ((a.next = p.next),
                            (p.next = a)),
                          (f.pending = a);
                      }
                    }
                    (s.lanes |= n),
                      (a = s.alternate),
                      a !== null &&
                        (a.lanes |= n),
                      Aa(s.return, n, t),
                      (c.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (s.tag === 10)
                o =
                  s.type === t.type
                    ? null
                    : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null))
                  throw Error(R(341));
                (o.lanes |= n),
                  (c = o.alternate),
                  c !== null && (c.lanes |= n),
                  Aa(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (
                    ((s = o.sibling), s !== null)
                  ) {
                    (s.return = o.return),
                      (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        tt(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        qr(t, n),
        (i = Lt(i)),
        (r = r(i)),
        (t.flags |= 1),
        tt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = _t(r, t.pendingProps)),
        (i = _t(r.type, i)),
        Md(e, t, r, i, n)
      );
    case 15:
      return fm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : _t(r, i)),
        co(e, t),
        (t.tag = 1),
        pt(r) ? ((e = !0), ko(t)) : (e = !1),
        qr(t, n),
        $p(t, r, i),
        Ia(t, r, i, n),
        Ra(null, t, r, !0, e, n)
      );
    case 19:
      return vm(e, t, n);
    case 22:
      return pm(e, t, n);
  }
  throw Error(R(156, t.tag));
};
function Am(e, t) {
  return sp(e, t);
}
function ey(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Pt(e, t, n, r) {
  return new ey(e, t, n, r);
}
function Kc(e) {
  return (
    (e = e.prototype),
    !(!e || !e.isReactComponent)
  );
}
function ty(e) {
  if (typeof e == "function")
    return Kc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === hc)) return 11;
    if (e === gc) return 14;
  }
  return 2;
}
function Rn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Pt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null
        ? null
        : {
            lanes: t.lanes,
            firstContext: t.firstContext,
          }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function po(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function"))
    Kc(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Mr:
        return lr(n.children, i, s, t);
      case mc:
        (o = 8), (i |= 8);
        break;
      case sa:
        return (
          (e = Pt(12, n, t, i | 2)),
          (e.elementType = sa),
          (e.lanes = s),
          e
        );
      case oa:
        return (
          (e = Pt(13, n, t, i)),
          (e.elementType = oa),
          (e.lanes = s),
          e
        );
      case la:
        return (
          (e = Pt(19, n, t, i)),
          (e.elementType = la),
          (e.lanes = s),
          e
        );
      case Hf:
        return nl(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Bf:
              o = 10;
              break e;
            case $f:
              o = 9;
              break e;
            case hc:
              o = 11;
              break e;
            case gc:
              o = 14;
              break e;
            case Cn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(
          R(130, e == null ? e : typeof e, "")
        );
    }
  return (
    (t = Pt(o, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = s),
    t
  );
}
function lr(e, t, n, r) {
  return (e = Pt(7, e, r, t)), (e.lanes = n), e;
}
function nl(e, t, n, r) {
  return (
    (e = Pt(22, e, r, t)),
    (e.elementType = Hf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Gl(e, t, n) {
  return (
    (e = Pt(6, e, null, t)), (e.lanes = n), e
  );
}
function ql(e, t, n) {
  return (
    (t = Pt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    )),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function ny(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode =
      this.pendingContext =
      this.context =
        null),
    (this.callbackPriority = 0),
    (this.eventTimes = kl(0)),
    (this.expirationTimes = kl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = kl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Xc(e, t, n, r, i, s, o, c, a) {
  return (
    (e = new ny(e, t, n, c, a)),
    t === 1
      ? ((t = 1), s === !0 && (t |= 8))
      : (t = 0),
    (s = Pt(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Dc(s),
    e
  );
}
function ry(e, t, n) {
  var r =
    3 < arguments.length &&
    arguments[3] !== void 0
      ? arguments[3]
      : null;
  return {
    $$typeof: Pr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Dm(e) {
  if (!e) return $n;
  e = e._reactInternals;
  e: {
    if (yr(e) !== e || e.tag !== 1)
      throw Error(R(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pt(t.type)) {
            t =
              t.stateNode
                .__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(R(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pt(n)) return Ap(e, n, t);
  }
  return t;
}
function Im(e, t, n, r, i, s, o, c, a) {
  return (
    (e = Xc(n, r, !0, e, i, s, o, c, a)),
    (e.context = Dm(null)),
    (n = e.current),
    (r = nt()),
    (i = zn(n)),
    (s = an(r, i)),
    (s.callback = t ?? null),
    In(n, s, i),
    (e.current.lanes = i),
    bs(e, i, r),
    mt(e, r),
    e
  );
}
function rl(e, t, n, r) {
  var i = t.current,
    s = nt(),
    o = zn(i);
  return (
    (n = Dm(n)),
    t.context === null
      ? (t.context = n)
      : (t.pendingContext = n),
    (t = an(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = In(i, t, o)),
    e !== null && (Ht(e, i, o, s), oo(e, i, o)),
    o
  );
}
function Bo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Hd(e, t) {
  if (
    ((e = e.memoizedState),
    e !== null && e.dehydrated !== null)
  ) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Zc(e, t) {
  Hd(e, t), (e = e.alternate) && Hd(e, t);
}
function iy() {
  return null;
}
var _m =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Jc(e) {
  this._internalRoot = e;
}
il.prototype.render = Jc.prototype.render =
  function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(R(409));
    rl(e, t, null, null);
  };
il.prototype.unmount = Jc.prototype.unmount =
  function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      mr(function () {
        rl(null, e, null, null);
      }),
        (t[dn] = null);
    }
  };
function il(e) {
  this._internalRoot = e;
}
il.prototype.unstable_scheduleHydration =
  function (e) {
    if (e) {
      var t = fp();
      e = {
        blockedOn: null,
        target: e,
        priority: t,
      };
      for (
        var n = 0;
        n < En.length &&
        t !== 0 &&
        t < En[n].priority;
        n++
      );
      En.splice(n, 0, e), n === 0 && mp(e);
    }
  };
function eu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11)
  );
}
function sl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 ||
        e.nodeValue !==
          " react-mount-point-unstable "))
  );
}
function Ud() {}
function sy(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var f = Bo(o);
        s.call(f);
      };
    }
    var o = Im(t, r, e, 0, null, !1, !1, "", Ud);
    return (
      (e._reactRootContainer = o),
      (e[dn] = o.current),
      ss(e.nodeType === 8 ? e.parentNode : e),
      mr(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var c = r;
    r = function () {
      var f = Bo(a);
      c.call(f);
    };
  }
  var a = Xc(
    e,
    0,
    !1,
    null,
    null,
    !1,
    !1,
    "",
    Ud
  );
  return (
    (e._reactRootContainer = a),
    (e[dn] = a.current),
    ss(e.nodeType === 8 ? e.parentNode : e),
    mr(function () {
      rl(t, a, n, r);
    }),
    a
  );
}
function ol(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var c = i;
      i = function () {
        var a = Bo(o);
        c.call(a);
      };
    }
    rl(t, o, e, i);
  } else o = sy(n, t, e, i, r);
  return Bo(o);
}
up = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = zi(t.pendingLanes);
        n !== 0 &&
          (xc(t, n | 1),
          mt(t, Le()),
          !(ce & 6) && ((ri = Le() + 500), Wn()));
      }
      break;
    case 13:
      mr(function () {
        var r = fn(e, 1);
        if (r !== null) {
          var i = nt();
          Ht(r, e, 1, i);
        }
      }),
        Zc(e, 1);
  }
};
wc = function (e) {
  if (e.tag === 13) {
    var t = fn(e, 134217728);
    if (t !== null) {
      var n = nt();
      Ht(t, e, 134217728, n);
    }
    Zc(e, 134217728);
  }
};
dp = function (e) {
  if (e.tag === 13) {
    var t = zn(e),
      n = fn(e, t);
    if (n !== null) {
      var r = nt();
      Ht(n, e, t, r);
    }
    Zc(e, t);
  }
};
fp = function () {
  return de;
};
pp = function (e, t) {
  var n = de;
  try {
    return (de = e), t();
  } finally {
    de = n;
  }
};
va = function (e, t, n) {
  switch (t) {
    case "input":
      if (
        (ua(e, n),
        (t = n.name),
        n.type === "radio" && t != null)
      ) {
        for (n = e; n.parentNode; )
          n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" +
              JSON.stringify("" + t) +
              '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ko(r);
            if (!i) throw Error(R(90));
            Vf(r), ua(r, i);
          }
        }
      }
      break;
    case "textarea":
      Gf(e, n);
      break;
    case "select":
      (t = n.value),
        t != null && Ur(e, !!n.multiple, t, !1);
  }
};
Jf = qc;
ep = mr;
var oy = {
    usingClientEntryPoint: !1,
    Events: [Cs, Dr, Ko, Xf, Zf, qc],
  },
  ki = {
    findFiberByHostInstance: nr,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  ly = {
    bundleType: ki.bundleType,
    version: ki.version,
    rendererPackageName: ki.rendererPackageName,
    rendererConfig: ki.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef:
      mn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (
        (e = rp(e)),
        e === null ? null : e.stateNode
      );
    },
    findFiberByHostInstance:
      ki.findFiberByHostInstance || iy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion:
      "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Xs.isDisabled && Xs.supportsFiber)
    try {
      (Go = Xs.inject(ly)), (Zt = Xs);
    } catch {}
}
St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
  oy;
St.createPortal = function (e, t) {
  var n =
    2 < arguments.length &&
    arguments[2] !== void 0
      ? arguments[2]
      : null;
  if (!eu(t)) throw Error(R(200));
  return ry(e, t, null, n);
};
St.createRoot = function (e, t) {
  if (!eu(e)) throw Error(R(299));
  var n = !1,
    r = "",
    i = _m;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 &&
        (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 &&
        (i = t.onRecoverableError)),
    (t = Xc(e, 1, !1, null, null, n, !1, r, i)),
    (e[dn] = t.current),
    ss(e.nodeType === 8 ? e.parentNode : e),
    new Jc(t)
  );
};
St.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(R(188))
      : ((e = Object.keys(e).join(",")),
        Error(R(268, e)));
  return (
    (e = rp(t)),
    (e = e === null ? null : e.stateNode),
    e
  );
};
St.flushSync = function (e) {
  return mr(e);
};
St.hydrate = function (e, t, n) {
  if (!sl(t)) throw Error(R(200));
  return ol(null, e, t, !0, n);
};
St.hydrateRoot = function (e, t, n) {
  if (!eu(e)) throw Error(R(405));
  var r =
      (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = _m;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 &&
        (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 &&
        (o = n.onRecoverableError)),
    (t = Im(
      t,
      null,
      e,
      1,
      n ?? null,
      i,
      !1,
      s,
      o
    )),
    (e[dn] = t.current),
    ss(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [
              n,
              i,
            ])
          : t.mutableSourceEagerHydrationData.push(
              n,
              i
            );
  return new il(t);
};
St.render = function (e, t, n) {
  if (!sl(t)) throw Error(R(200));
  return ol(null, e, t, !1, n);
};
St.unmountComponentAtNode = function (e) {
  if (!sl(e)) throw Error(R(40));
  return e._reactRootContainer
    ? (mr(function () {
        ol(null, null, e, !1, function () {
          (e._reactRootContainer = null),
            (e[dn] = null);
        });
      }),
      !0)
    : !1;
};
St.unstable_batchedUpdates = qc;
St.unstable_renderSubtreeIntoContainer =
  function (e, t, n, r) {
    if (!sl(n)) throw Error(R(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(R(38));
    return ol(e, t, n, !1, r);
  };
St.version = "18.2.0-next-9e3b772b8-20220608";
function zm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ >
        "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !=
        "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zm);
    } catch (e) {
      console.error(e);
    }
}
zm(), (If.exports = St);
var ay = If.exports,
  Rm,
  Fm,
  Vd = ay;
(Fm = Vd.createRoot), (Rm = Vd.hydrateRoot);
/**
 * @remix-run/router v1.7.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function je() {
  return (
    (je = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (
            var t = 1;
            t < arguments.length;
            t++
          ) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(
                n,
                r
              ) && (e[r] = n[r]);
          }
          return e;
        }),
    je.apply(this, arguments)
  );
}
var Oe;
(function (e) {
  (e.Pop = "POP"),
    (e.Push = "PUSH"),
    (e.Replace = "REPLACE");
})(Oe || (Oe = {}));
const Wd = "popstate";
function cy(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let {
      pathname: s,
      search: o,
      hash: c,
    } = r.location;
    return ms(
      "",
      { pathname: s, search: o, hash: c },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : hr(i);
  }
  return dy(t, n, null, e);
}
function ie(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function ii(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function uy() {
  return Math.random().toString(36).substr(2, 8);
}
function Gd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ms(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    je(
      {
        pathname:
          typeof e == "string" ? e : e.pathname,
        search: "",
        hash: "",
      },
      typeof t == "string" ? hn(t) : t,
      { state: n, key: (t && t.key) || r || uy() }
    )
  );
}
function hr(e) {
  let {
    pathname: t = "/",
    search: n = "",
    hash: r = "",
  } = e;
  return (
    n &&
      n !== "?" &&
      (t += n.charAt(0) === "?" ? n : "?" + n),
    r &&
      r !== "#" &&
      (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function hn(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 &&
      ((t.hash = e.substr(n)),
      (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 &&
      ((t.search = e.substr(r)),
      (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function dy(e, t, n, r) {
  r === void 0 && (r = {});
  let {
      window: i = document.defaultView,
      v5Compat: s = !1,
    } = r,
    o = i.history,
    c = Oe.Pop,
    a = null,
    f = p();
  f == null &&
    ((f = 0),
    o.replaceState(
      je({}, o.state, { idx: f }),
      ""
    ));
  function p() {
    return (o.state || { idx: null }).idx;
  }
  function v() {
    c = Oe.Pop;
    let T = p(),
      y = T == null ? null : T - f;
    (f = T),
      a &&
        a({
          action: c,
          location: S.location,
          delta: y,
        });
  }
  function w(T, y) {
    c = Oe.Push;
    let h = ms(S.location, T, y);
    n && n(h, T), (f = p() + 1);
    let g = Gd(h, f),
      x = S.createHref(h);
    try {
      o.pushState(g, "", x);
    } catch (E) {
      if (
        E instanceof DOMException &&
        E.name === "DataCloneError"
      )
        throw E;
      i.location.assign(x);
    }
    s &&
      a &&
      a({
        action: c,
        location: S.location,
        delta: 1,
      });
  }
  function b(T, y) {
    c = Oe.Replace;
    let h = ms(S.location, T, y);
    n && n(h, T), (f = p());
    let g = Gd(h, f),
      x = S.createHref(h);
    o.replaceState(g, "", x),
      s &&
        a &&
        a({
          action: c,
          location: S.location,
          delta: 0,
        });
  }
  function j(T) {
    let y =
        i.location.origin !== "null"
          ? i.location.origin
          : i.location.href,
      h = typeof T == "string" ? T : hr(T);
    return (
      ie(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, y)
    );
  }
  let S = {
    get action() {
      return c;
    },
    get location() {
      return e(i, o);
    },
    listen(T) {
      if (a)
        throw new Error(
          "A history only accepts one active listener"
        );
      return (
        i.addEventListener(Wd, v),
        (a = T),
        () => {
          i.removeEventListener(Wd, v),
            (a = null);
        }
      );
    },
    createHref(T) {
      return t(i, T);
    },
    createURL: j,
    encodeLocation(T) {
      let y = j(T);
      return {
        pathname: y.pathname,
        search: y.search,
        hash: y.hash,
      };
    },
    push: w,
    replace: b,
    go(T) {
      return o.go(T);
    },
  };
  return S;
}
var _e;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(_e || (_e = {}));
const fy = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function py(e) {
  return e.index === !0;
}
function Ka(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((i, s) => {
      let o = [...n, s],
        c =
          typeof i.id == "string"
            ? i.id
            : o.join("-");
      if (
        (ie(
          i.index !== !0 || !i.children,
          "Cannot specify children on an index route"
        ),
        ie(
          !r[c],
          'Found a route id collision on id "' +
            c +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        py(i))
      ) {
        let a = je({}, i, t(i), { id: c });
        return (r[c] = a), a;
      } else {
        let a = je({}, i, t(i), {
          id: c,
          children: void 0,
        });
        return (
          (r[c] = a),
          i.children &&
            (a.children = Ka(
              i.children,
              t,
              o,
              r
            )),
          a
        );
      }
    })
  );
}
function $r(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? hn(t) : t,
    i = ci(r.pathname || "/", n);
  if (i == null) return null;
  let s = Bm(e);
  my(s);
  let o = null;
  for (let c = 0; o == null && c < s.length; ++c)
    o = Cy(s[c], Ty(i));
  return o;
}
function Bm(e, t, n, r) {
  t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = "");
  let i = (s, o, c) => {
    let a = {
      relativePath:
        c === void 0 ? s.path || "" : c,
      caseSensitive: s.caseSensitive === !0,
      childrenIndex: o,
      route: s,
    };
    a.relativePath.startsWith("/") &&
      (ie(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' +
            r +
            '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(
        r.length
      )));
    let f = cn([r, a.relativePath]),
      p = n.concat(a);
    s.children &&
      s.children.length > 0 &&
      (ie(
        s.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' +
            f +
            '".')
      ),
      Bm(s.children, t, p, f)),
      !(s.path == null && !s.index) &&
        t.push({
          path: f,
          score: by(f, s.index),
          routesMeta: p,
        });
  };
  return (
    e.forEach((s, o) => {
      var c;
      if (
        s.path === "" ||
        !((c = s.path) != null && c.includes("?"))
      )
        i(s, o);
      else for (let a of $m(s.path)) i(s, o, a);
    }),
    t
  );
}
function $m(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    s = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [s, ""] : [s];
  let o = $m(r.join("/")),
    c = [];
  return (
    c.push(
      ...o.map((a) =>
        a === "" ? s : [s, a].join("/")
      )
    ),
    i && c.push(...o),
    c.map((a) =>
      e.startsWith("/") && a === "" ? "/" : a
    )
  );
}
function my(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Sy(
          t.routesMeta.map(
            (r) => r.childrenIndex
          ),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const hy = /^:\w+$/,
  gy = 3,
  vy = 2,
  yy = 1,
  xy = 10,
  wy = -2,
  qd = (e) => e === "*";
function by(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(qd) && (r += wy),
    t && (r += vy),
    n
      .filter((i) => !qd(i))
      .reduce(
        (i, s) =>
          i +
          (hy.test(s) ? gy : s === "" ? yy : xy),
        r
      )
  );
}
function Sy(e, t) {
  return e.length === t.length &&
    e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Cy(e, t) {
  let { routesMeta: n } = e,
    r = {},
    i = "/",
    s = [];
  for (let o = 0; o < n.length; ++o) {
    let c = n[o],
      a = o === n.length - 1,
      f =
        i === "/" ? t : t.slice(i.length) || "/",
      p = jy(
        {
          path: c.relativePath,
          caseSensitive: c.caseSensitive,
          end: a,
        },
        f
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let v = c.route;
    s.push({
      params: r,
      pathname: cn([i, p.pathname]),
      pathnameBase: My(cn([i, p.pathnameBase])),
      route: v,
    }),
      p.pathnameBase !== "/" &&
        (i = cn([i, p.pathnameBase]));
  }
  return s;
}
function jy(e, t) {
  typeof e == "string" &&
    (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Ey(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let s = i[0],
    o = s.replace(/(.)\/+$/, "$1"),
    c = i.slice(1);
  return {
    params: r.reduce((f, p, v) => {
      if (p === "*") {
        let w = c[v] || "";
        o = s
          .slice(0, s.length - w.length)
          .replace(/(.)\/+$/, "$1");
      }
      return (f[p] = ky(c[v] || "", p)), f;
    }, {}),
    pathname: s,
    pathnameBase: o,
    pattern: e,
  };
}
function Ey(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ii(
      e === "*" ||
        !e.endsWith("*") ||
        e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' +
          e.replace(/\*$/, "/*") +
          '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' +
          e.replace(/\*$/, "/*") +
          '".')
    );
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(
          /\/:(\w+)/g,
          (o, c) => (r.push(c), "/([^\\/]+)")
        );
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (i +=
          e === "*" || e === "/*"
            ? "(.*)$"
            : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (i += "\\/*$")
      : e !== "" &&
        e !== "/" &&
        (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Ty(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      ii(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function ky(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      ii(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" +
            n +
            ").")
      ),
      e
    );
  }
}
function ci(e, t) {
  if (t === "/") return e;
  if (
    !e.toLowerCase().startsWith(t.toLowerCase())
  )
    return null;
  let n = t.endsWith("/")
      ? t.length - 1
      : t.length,
    r = e.charAt(n);
  return r && r !== "/"
    ? null
    : e.slice(n) || "/";
}
function Ny(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: i = "",
  } = typeof e == "string" ? hn(e) : e;
  return {
    pathname: n
      ? n.startsWith("/")
        ? n
        : Py(n, t)
      : t,
    search: Ly(r),
    hash: Oy(i),
  };
}
function Py(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((i) => {
      i === ".."
        ? n.length > 1 && n.pop()
        : i !== "." && n.push(i);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Yl(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." +
      n +
      "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function ll(e) {
  return e.filter(
    (t, n) =>
      n === 0 ||
      (t.route.path && t.route.path.length > 0)
  );
}
function tu(e, t, n, r) {
  r === void 0 && (r = !1);
  let i;
  typeof e == "string"
    ? (i = hn(e))
    : ((i = je({}, e)),
      ie(
        !i.pathname || !i.pathname.includes("?"),
        Yl("?", "pathname", "search", i)
      ),
      ie(
        !i.pathname || !i.pathname.includes("#"),
        Yl("#", "pathname", "hash", i)
      ),
      ie(
        !i.search || !i.search.includes("#"),
        Yl("#", "search", "hash", i)
      ));
  let s = e === "" || i.pathname === "",
    o = s ? "/" : i.pathname,
    c;
  if (r || o == null) c = n;
  else {
    let v = t.length - 1;
    if (o.startsWith("..")) {
      let w = o.split("/");
      for (; w[0] === ".."; ) w.shift(), (v -= 1);
      i.pathname = w.join("/");
    }
    c = v >= 0 ? t[v] : "/";
  }
  let a = Ny(i, c),
    f = o && o !== "/" && o.endsWith("/"),
    p = (s || o === ".") && n.endsWith("/");
  return (
    !a.pathname.endsWith("/") &&
      (f || p) &&
      (a.pathname += "/"),
    a
  );
}
const cn = (e) =>
    e.join("/").replace(/\/\/+/g, "/"),
  My = (e) =>
    e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ly = (e) =>
    !e || e === "?"
      ? ""
      : e.startsWith("?")
      ? e
      : "?" + e,
  Oy = (e) =>
    !e || e === "#"
      ? ""
      : e.startsWith("#")
      ? e
      : "#" + e;
class nu {
  constructor(t, n, r, i) {
    i === void 0 && (i = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = i),
      r instanceof Error
        ? ((this.data = r.toString()),
          (this.error = r))
        : (this.data = r);
  }
}
function Hm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Um = ["post", "put", "patch", "delete"],
  Ay = new Set(Um),
  Dy = ["get", ...Um],
  Iy = new Set(Dy),
  _y = new Set([301, 302, 303, 307, 308]),
  zy = new Set([307, 308]),
  Ql = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ry = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ni = {
    state: "unblocked",
    proceed: void 0,
    reset: void 0,
    location: void 0,
  },
  Vm = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Fy = (e) => ({
    hasErrorBoundary: !!e.hasErrorBoundary,
  });
function By(e) {
  const t = e.window
      ? e.window
      : typeof window < "u"
      ? window
      : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  ie(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let i;
  if (e.mapRouteProperties)
    i = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let M = e.detectErrorBoundary;
    i = (L) => ({ hasErrorBoundary: M(L) });
  } else i = Fy;
  let s = {},
    o = Ka(e.routes, i, void 0, s),
    c,
    a = e.basename || "/",
    f = je(
      {
        v7_normalizeFormMethod: !1,
        v7_prependBasename: !1,
      },
      e.future
    ),
    p = null,
    v = new Set(),
    w = null,
    b = null,
    j = null,
    S = e.hydrationData != null,
    T = $r(o, e.history.location, a),
    y = null;
  if (T == null) {
    let M = Tt(404, {
        pathname: e.history.location.pathname,
      }),
      { matches: L, route: _ } = tf(o);
    (T = L), (y = { [_.id]: M });
  }
  let h =
      !T.some((M) => M.route.lazy) &&
      (!T.some((M) => M.route.loader) ||
        e.hydrationData != null),
    g,
    x = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: T,
      initialized: h,
      navigation: Ql,
      restoreScrollPosition:
        e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData:
        (e.hydrationData &&
          e.hydrationData.loaderData) ||
        {},
      actionData:
        (e.hydrationData &&
          e.hydrationData.actionData) ||
        null,
      errors:
        (e.hydrationData &&
          e.hydrationData.errors) ||
        y,
      fetchers: new Map(),
      blockers: new Map(),
    },
    E = Oe.Pop,
    k = !1,
    N,
    A = !1,
    P = !1,
    $ = [],
    I = [],
    F = new Map(),
    U = 0,
    Q = -1,
    te = new Map(),
    pe = new Set(),
    K = new Map(),
    z = new Map(),
    B = new Map(),
    G = !1;
  function oe() {
    return (
      (p = e.history.listen((M) => {
        let {
          action: L,
          location: _,
          delta: H,
        } = M;
        if (G) {
          G = !1;
          return;
        }
        ii(
          B.size === 0 || H != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let J = pi({
          currentLocation: x.location,
          nextLocation: _,
          historyAction: L,
        });
        if (J && H != null) {
          (G = !0),
            e.history.go(H * -1),
            Yn(J, {
              state: "blocked",
              location: _,
              proceed() {
                Yn(J, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: _,
                }),
                  e.history.go(H);
              },
              reset() {
                let X = new Map(x.blockers);
                X.set(J, Ni), fe({ blockers: X });
              },
            });
          return;
        }
        return Ke(L, _);
      })),
      x.initialized || Ke(Oe.Pop, x.location),
      g
    );
  }
  function he() {
    p && p(),
      v.clear(),
      N && N.abort(),
      x.fetchers.forEach((M, L) => Wt(L)),
      x.blockers.forEach((M, L) => Ns(L));
  }
  function Vt(M) {
    return v.add(M), () => v.delete(M);
  }
  function fe(M) {
    (x = je({}, x, M)), v.forEach((L) => L(x));
  }
  function ht(M, L) {
    var _, H;
    let J =
        x.actionData != null &&
        x.navigation.formMethod != null &&
        Rt(x.navigation.formMethod) &&
        x.navigation.state === "loading" &&
        ((_ = M.state) == null
          ? void 0
          : _._isRedirect) !== !0,
      X;
    L.actionData
      ? Object.keys(L.actionData).length > 0
        ? (X = L.actionData)
        : (X = null)
      : J
      ? (X = x.actionData)
      : (X = null);
    let Z = L.loaderData
        ? ef(
            x.loaderData,
            L.loaderData,
            L.matches || [],
            L.errors
          )
        : x.loaderData,
      Y = x.blockers;
    Y.size > 0 &&
      ((Y = new Map(Y)),
      Y.forEach((ue, le) => Y.set(le, Ni)));
    let q =
      k === !0 ||
      (x.navigation.formMethod != null &&
        Rt(x.navigation.formMethod) &&
        ((H = M.state) == null
          ? void 0
          : H._isRedirect) !== !0);
    c && ((o = c), (c = void 0)),
      A ||
        E === Oe.Pop ||
        (E === Oe.Push
          ? e.history.push(M, M.state)
          : E === Oe.Replace &&
            e.history.replace(M, M.state)),
      fe(
        je({}, L, {
          actionData: X,
          loaderData: Z,
          historyAction: E,
          location: M,
          initialized: !0,
          navigation: Ql,
          revalidation: "idle",
          restoreScrollPosition: Ms(
            M,
            L.matches || x.matches
          ),
          preventScrollReset: q,
          blockers: Y,
        })
      ),
      (E = Oe.Pop),
      (k = !1),
      (A = !1),
      (P = !1),
      ($ = []),
      (I = []);
  }
  async function Qe(M, L) {
    if (typeof M == "number") {
      e.history.go(M);
      return;
    }
    let _ = Xa(
        x.location,
        x.matches,
        a,
        f.v7_prependBasename,
        M,
        L == null ? void 0 : L.fromRouteId,
        L == null ? void 0 : L.relative
      ),
      {
        path: H,
        submission: J,
        error: X,
      } = Yd(f.v7_normalizeFormMethod, !1, _, L),
      Z = x.location,
      Y = ms(x.location, H, L && L.state);
    Y = je({}, Y, e.history.encodeLocation(Y));
    let q =
        L && L.replace != null
          ? L.replace
          : void 0,
      ue = Oe.Push;
    q === !0
      ? (ue = Oe.Replace)
      : q === !1 ||
        (J != null &&
          Rt(J.formMethod) &&
          J.formAction ===
            x.location.pathname +
              x.location.search &&
          (ue = Oe.Replace));
    let le =
        L && "preventScrollReset" in L
          ? L.preventScrollReset === !0
          : void 0,
      Je = pi({
        currentLocation: Z,
        nextLocation: Y,
        historyAction: ue,
      });
    if (Je) {
      Yn(Je, {
        state: "blocked",
        location: Y,
        proceed() {
          Yn(Je, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: Y,
          }),
            Qe(M, L);
        },
        reset() {
          let be = new Map(x.blockers);
          be.set(Je, Ni), fe({ blockers: be });
        },
      });
      return;
    }
    return await Ke(ue, Y, {
      submission: J,
      pendingError: X,
      preventScrollReset: le,
      replace: L && L.replace,
    });
  }
  function vn() {
    if (
      (ot(),
      fe({ revalidation: "loading" }),
      x.navigation.state !== "submitting")
    ) {
      if (x.navigation.state === "idle") {
        Ke(x.historyAction, x.location, {
          startUninterruptedRevalidation: !0,
        });
        return;
      }
      Ke(
        E || x.historyAction,
        x.navigation.location,
        {
          overrideNavigation: x.navigation,
        }
      );
    }
  }
  async function Ke(M, L, _) {
    N && N.abort(),
      (N = null),
      (E = M),
      (A =
        (_ &&
          _.startUninterruptedRevalidation) ===
        !0),
      ne(x.location, x.matches),
      (k = (_ && _.preventScrollReset) === !0);
    let H = c || o,
      J = _ && _.overrideNavigation,
      X = $r(H, L, a);
    if (!X) {
      let be = Tt(404, { pathname: L.pathname }),
        { matches: Ve, route: Et } = tf(H);
      Qn(),
        ht(L, {
          matches: Ve,
          loaderData: {},
          errors: { [Et.id]: be },
        });
      return;
    }
    if (
      x.initialized &&
      !P &&
      Wy(x.location, L) &&
      !(
        _ &&
        _.submission &&
        Rt(_.submission.formMethod)
      )
    ) {
      ht(L, { matches: X });
      return;
    }
    N = new AbortController();
    let Z = Mi(
        e.history,
        L,
        N.signal,
        _ && _.submission
      ),
      Y,
      q;
    if (_ && _.pendingError)
      q = { [Hr(X).route.id]: _.pendingError };
    else if (
      _ &&
      _.submission &&
      Rt(_.submission.formMethod)
    ) {
      let be = await Xe(Z, L, _.submission, X, {
        replace: _.replace,
      });
      if (be.shortCircuited) return;
      (Y = be.pendingActionData),
        (q = be.pendingActionError),
        (J = Zs(L, _.submission)),
        (Z = new Request(Z.url, {
          signal: Z.signal,
        }));
    }
    let {
      shortCircuited: ue,
      loaderData: le,
      errors: Je,
    } = await At(
      Z,
      L,
      X,
      J,
      _ && _.submission,
      _ && _.fetcherSubmission,
      _ && _.replace,
      Y,
      q
    );
    ue ||
      ((N = null),
      ht(
        L,
        je(
          { matches: X },
          Y ? { actionData: Y } : {},
          {
            loaderData: le,
            errors: Je,
          }
        )
      ));
  }
  async function Xe(M, L, _, H, J) {
    J === void 0 && (J = {}), ot();
    let X = Ky(L, _);
    fe({ navigation: X });
    let Z,
      Y = Ja(H, L);
    if (!Y.route.action && !Y.route.lazy)
      Z = {
        type: _e.error,
        error: Tt(405, {
          method: M.method,
          pathname: L.pathname,
          routeId: Y.route.id,
        }),
      };
    else if (
      ((Z = await Pi("action", M, Y, H, s, i, a)),
      M.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (Qr(Z)) {
      let q;
      return (
        J && J.replace != null
          ? (q = J.replace)
          : (q =
              Z.location ===
              x.location.pathname +
                x.location.search),
        await yn(x, Z, {
          submission: _,
          replace: q,
        }),
        { shortCircuited: !0 }
      );
    }
    if (Qi(Z)) {
      let q = Hr(H, Y.route.id);
      return (
        (J && J.replace) !== !0 && (E = Oe.Push),
        {
          pendingActionData: {},
          pendingActionError: {
            [q.route.id]: Z.error,
          },
        }
      );
    }
    if (sr(Z))
      throw Tt(400, { type: "defer-action" });
    return {
      pendingActionData: { [Y.route.id]: Z.data },
    };
  }
  async function At(M, L, _, H, J, X, Z, Y, q) {
    let ue = H || Zs(L, J),
      le = J || X || sf(ue),
      Je = c || o,
      [be, Ve] = Qd(
        e.history,
        x,
        _,
        le,
        L,
        P,
        $,
        I,
        K,
        pe,
        Je,
        a,
        Y,
        q
      );
    if (
      (Qn(
        (ve) =>
          !(
            _ &&
            _.some((lt) => lt.route.id === ve)
          ) ||
          (be &&
            be.some((lt) => lt.route.id === ve))
      ),
      be.length === 0 && Ve.length === 0)
    ) {
      let ve = fi();
      return (
        ht(
          L,
          je(
            {
              matches: _,
              loaderData: {},
              errors: q || null,
            },
            Y ? { actionData: Y } : {},
            ve
              ? { fetchers: new Map(x.fetchers) }
              : {}
          )
        ),
        { shortCircuited: !0 }
      );
    }
    if (!A) {
      Ve.forEach((lt) => {
        let wn = x.fetchers.get(lt.key),
          Ie = Li(void 0, wn ? wn.data : void 0);
        x.fetchers.set(lt.key, Ie);
      });
      let ve = Y || x.actionData;
      fe(
        je(
          { navigation: ue },
          ve
            ? Object.keys(ve).length === 0
              ? { actionData: null }
              : { actionData: ve }
            : {},
          Ve.length > 0
            ? { fetchers: new Map(x.fetchers) }
            : {}
        )
      );
    }
    (Q = ++U),
      Ve.forEach((ve) => {
        F.has(ve.key) && ge(ve.key),
          ve.controller &&
            F.set(ve.key, ve.controller);
      });
    let Et = () => Ve.forEach((ve) => ge(ve.key));
    N && N.signal.addEventListener("abort", Et);
    let {
      results: Kn,
      loaderResults: mi,
      fetcherResults: xn,
    } = await re(x.matches, _, be, Ve, M);
    if (M.signal.aborted)
      return { shortCircuited: !0 };
    N &&
      N.signal.removeEventListener("abort", Et),
      Ve.forEach((ve) => F.delete(ve.key));
    let Dt = nf(Kn);
    if (Dt)
      return (
        await yn(x, Dt, { replace: Z }),
        { shortCircuited: !0 }
      );
    let { loaderData: xr, errors: hi } = Jd(
      x,
      _,
      be,
      mi,
      q,
      Ve,
      xn,
      z
    );
    z.forEach((ve, lt) => {
      ve.subscribe((wn) => {
        (wn || ve.done) && z.delete(lt);
      });
    });
    let gi = fi(),
      vi = qn(Q),
      wr = gi || vi || Ve.length > 0;
    return je(
      { loaderData: xr, errors: hi },
      wr ? { fetchers: new Map(x.fetchers) } : {}
    );
  }
  function Ts(M) {
    return x.fetchers.get(M) || Ry;
  }
  function st(M, L, _, H) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    F.has(M) && ge(M);
    let J = c || o,
      X = Xa(
        x.location,
        x.matches,
        a,
        f.v7_prependBasename,
        _,
        L,
        H == null ? void 0 : H.relative
      ),
      Z = $r(J, X, a);
    if (!Z) {
      gt(M, L, Tt(404, { pathname: X }));
      return;
    }
    let {
      path: Y,
      submission: q,
      error: ue,
    } = Yd(f.v7_normalizeFormMethod, !0, X, H);
    if (ue) {
      gt(M, L, ue);
      return;
    }
    let le = Ja(Z, Y);
    if (
      ((k = (H && H.preventScrollReset) === !0),
      q && Rt(q.formMethod))
    ) {
      di(M, L, Y, le, Z, q);
      return;
    }
    K.set(M, { routeId: L, path: Y }),
      ks(M, L, Y, le, Z, q);
  }
  async function di(M, L, _, H, J, X) {
    if (
      (ot(),
      K.delete(M),
      !H.route.action && !H.route.lazy)
    ) {
      let Ie = Tt(405, {
        method: X.formMethod,
        pathname: _,
        routeId: L,
      });
      gt(M, L, Ie);
      return;
    }
    let Z = x.fetchers.get(M),
      Y = Xy(X, Z);
    x.fetchers.set(M, Y),
      fe({ fetchers: new Map(x.fetchers) });
    let q = new AbortController(),
      ue = Mi(e.history, _, q.signal, X);
    F.set(M, q);
    let le = await Pi(
      "action",
      ue,
      H,
      J,
      s,
      i,
      a
    );
    if (ue.signal.aborted) {
      F.get(M) === q && F.delete(M);
      return;
    }
    if (Qr(le)) {
      F.delete(M), pe.add(M);
      let Ie = Li(X);
      return (
        x.fetchers.set(M, Ie),
        fe({ fetchers: new Map(x.fetchers) }),
        yn(x, le, {
          submission: X,
          isFetchActionRedirect: !0,
        })
      );
    }
    if (Qi(le)) {
      gt(M, L, le.error);
      return;
    }
    if (sr(le))
      throw Tt(400, { type: "defer-action" });
    let Je = x.navigation.location || x.location,
      be = Mi(e.history, Je, q.signal),
      Ve = c || o,
      Et =
        x.navigation.state !== "idle"
          ? $r(Ve, x.navigation.location, a)
          : x.matches;
    ie(
      Et,
      "Didn't find any matches after fetcher action"
    );
    let Kn = ++U;
    te.set(M, Kn);
    let mi = Li(X, le.data);
    x.fetchers.set(M, mi);
    let [xn, Dt] = Qd(
      e.history,
      x,
      Et,
      X,
      Je,
      P,
      $,
      I,
      K,
      pe,
      Ve,
      a,
      { [H.route.id]: le.data },
      void 0
    );
    Dt.filter((Ie) => Ie.key !== M).forEach(
      (Ie) => {
        let Xn = Ie.key,
          br = x.fetchers.get(Xn),
          Zn = Li(void 0, br ? br.data : void 0);
        x.fetchers.set(Xn, Zn),
          F.has(Xn) && ge(Xn),
          Ie.controller &&
            F.set(Xn, Ie.controller);
      }
    ),
      fe({ fetchers: new Map(x.fetchers) });
    let xr = () => Dt.forEach((Ie) => ge(Ie.key));
    q.signal.addEventListener("abort", xr);
    let {
      results: hi,
      loaderResults: gi,
      fetcherResults: vi,
    } = await re(x.matches, Et, xn, Dt, be);
    if (q.signal.aborted) return;
    q.signal.removeEventListener("abort", xr),
      te.delete(M),
      F.delete(M),
      Dt.forEach((Ie) => F.delete(Ie.key));
    let wr = nf(hi);
    if (wr) return yn(x, wr);
    let { loaderData: ve, errors: lt } = Jd(
      x,
      x.matches,
      xn,
      gi,
      void 0,
      Dt,
      vi,
      z
    );
    if (x.fetchers.has(M)) {
      let Ie = mo(le.data);
      x.fetchers.set(M, Ie);
    }
    let wn = qn(Kn);
    x.navigation.state === "loading" && Kn > Q
      ? (ie(E, "Expected pending action"),
        N && N.abort(),
        ht(x.navigation.location, {
          matches: Et,
          loaderData: ve,
          errors: lt,
          fetchers: new Map(x.fetchers),
        }))
      : (fe(
          je(
            {
              errors: lt,
              loaderData: ef(
                x.loaderData,
                ve,
                Et,
                lt
              ),
            },
            wn || Dt.length > 0
              ? { fetchers: new Map(x.fetchers) }
              : {}
          )
        ),
        (P = !1));
  }
  async function ks(M, L, _, H, J, X) {
    let Z = x.fetchers.get(M),
      Y = Li(X, Z ? Z.data : void 0);
    x.fetchers.set(M, Y),
      fe({ fetchers: new Map(x.fetchers) });
    let q = new AbortController(),
      ue = Mi(e.history, _, q.signal);
    F.set(M, q);
    let le = await Pi(
      "loader",
      ue,
      H,
      J,
      s,
      i,
      a
    );
    if (
      (sr(le) &&
        (le =
          (await qm(le, ue.signal, !0)) || le),
      F.get(M) === q && F.delete(M),
      ue.signal.aborted)
    )
      return;
    if (Qr(le)) {
      pe.add(M), await yn(x, le);
      return;
    }
    if (Qi(le)) {
      let be = Hr(x.matches, L);
      x.fetchers.delete(M),
        fe({
          fetchers: new Map(x.fetchers),
          errors: { [be.route.id]: le.error },
        });
      return;
    }
    ie(
      !sr(le),
      "Unhandled fetcher deferred data"
    );
    let Je = mo(le.data);
    x.fetchers.set(M, Je),
      fe({ fetchers: new Map(x.fetchers) });
  }
  async function yn(M, L, _) {
    let {
      submission: H,
      replace: J,
      isFetchActionRedirect: X,
    } = _ === void 0 ? {} : _;
    L.revalidate && (P = !0);
    let Z = ms(
      M.location,
      L.location,
      je(
        { _isRedirect: !0 },
        X ? { _isFetchActionRedirect: !0 } : {}
      )
    );
    if (
      (ie(
        Z,
        "Expected a location on the redirect navigation"
      ),
      Vm.test(L.location) && n)
    ) {
      let ue = e.history.createURL(L.location),
        le = ci(ue.pathname, a) == null;
      if (t.location.origin !== ue.origin || le) {
        J
          ? t.location.replace(L.location)
          : t.location.assign(L.location);
        return;
      }
    }
    N = null;
    let Y = J === !0 ? Oe.Replace : Oe.Push,
      q = H || sf(M.navigation);
    if (zy.has(L.status) && q && Rt(q.formMethod))
      await Ke(Y, Z, {
        submission: je({}, q, {
          formAction: L.location,
        }),
        preventScrollReset: k,
      });
    else if (X)
      await Ke(Y, Z, {
        overrideNavigation: Zs(Z),
        fetcherSubmission: q,
        preventScrollReset: k,
      });
    else {
      let ue = Zs(Z, q);
      await Ke(Y, Z, {
        overrideNavigation: ue,
        preventScrollReset: k,
      });
    }
  }
  async function re(M, L, _, H, J) {
    let X = await Promise.all([
        ..._.map((q) =>
          Pi("loader", J, q, L, s, i, a)
        ),
        ...H.map((q) =>
          q.matches && q.match && q.controller
            ? Pi(
                "loader",
                Mi(
                  e.history,
                  q.path,
                  q.controller.signal
                ),
                q.match,
                q.matches,
                s,
                i,
                a
              )
            : {
                type: _e.error,
                error: Tt(404, {
                  pathname: q.path,
                }),
              }
        ),
      ]),
      Z = X.slice(0, _.length),
      Y = X.slice(_.length);
    return (
      await Promise.all([
        rf(
          M,
          _,
          Z,
          Z.map(() => J.signal),
          !1,
          x.loaderData
        ),
        rf(
          M,
          H.map((q) => q.match),
          Y,
          H.map((q) =>
            q.controller
              ? q.controller.signal
              : null
          ),
          !0
        ),
      ]),
      {
        results: X,
        loaderResults: Z,
        fetcherResults: Y,
      }
    );
  }
  function ot() {
    (P = !0),
      $.push(...Qn()),
      K.forEach((M, L) => {
        F.has(L) && (I.push(L), ge(L));
      });
  }
  function gt(M, L, _) {
    let H = Hr(x.matches, L);
    Wt(M),
      fe({
        errors: { [H.route.id]: _ },
        fetchers: new Map(x.fetchers),
      });
  }
  function Wt(M) {
    let L = x.fetchers.get(M);
    F.has(M) &&
      !(
        L &&
        L.state === "loading" &&
        te.has(M)
      ) &&
      ge(M),
      K.delete(M),
      te.delete(M),
      pe.delete(M),
      x.fetchers.delete(M);
  }
  function ge(M) {
    let L = F.get(M);
    ie(L, "Expected fetch controller: " + M),
      L.abort(),
      F.delete(M);
  }
  function De(M) {
    for (let L of M) {
      let _ = Ts(L),
        H = mo(_.data);
      x.fetchers.set(L, H);
    }
  }
  function fi() {
    let M = [],
      L = !1;
    for (let _ of pe) {
      let H = x.fetchers.get(_);
      ie(H, "Expected fetcher: " + _),
        H.state === "loading" &&
          (pe.delete(_), M.push(_), (L = !0));
    }
    return De(M), L;
  }
  function qn(M) {
    let L = [];
    for (let [_, H] of te)
      if (H < M) {
        let J = x.fetchers.get(_);
        ie(J, "Expected fetcher: " + _),
          J.state === "loading" &&
            (ge(_), te.delete(_), L.push(_));
      }
    return De(L), L.length > 0;
  }
  function Ze(M, L) {
    let _ = x.blockers.get(M) || Ni;
    return B.get(M) !== L && B.set(M, L), _;
  }
  function Ns(M) {
    x.blockers.delete(M), B.delete(M);
  }
  function Yn(M, L) {
    let _ = x.blockers.get(M) || Ni;
    ie(
      (_.state === "unblocked" &&
        L.state === "blocked") ||
        (_.state === "blocked" &&
          L.state === "blocked") ||
        (_.state === "blocked" &&
          L.state === "proceeding") ||
        (_.state === "blocked" &&
          L.state === "unblocked") ||
        (_.state === "proceeding" &&
          L.state === "unblocked"),
      "Invalid blocker state transition: " +
        _.state +
        " -> " +
        L.state
    );
    let H = new Map(x.blockers);
    H.set(M, L), fe({ blockers: H });
  }
  function pi(M) {
    let {
      currentLocation: L,
      nextLocation: _,
      historyAction: H,
    } = M;
    if (B.size === 0) return;
    B.size > 1 &&
      ii(
        !1,
        "A router only supports one blocker at a time"
      );
    let J = Array.from(B.entries()),
      [X, Z] = J[J.length - 1],
      Y = x.blockers.get(X);
    if (
      !(Y && Y.state === "proceeding") &&
      Z({
        currentLocation: L,
        nextLocation: _,
        historyAction: H,
      })
    )
      return X;
  }
  function Qn(M) {
    let L = [];
    return (
      z.forEach((_, H) => {
        (!M || M(H)) &&
          (_.cancel(), L.push(H), z.delete(H));
      }),
      L
    );
  }
  function fl(M, L, _) {
    if (
      ((w = M),
      (j = L),
      (b = _ || null),
      !S && x.navigation === Ql)
    ) {
      S = !0;
      let H = Ms(x.location, x.matches);
      H != null &&
        fe({ restoreScrollPosition: H });
    }
    return () => {
      (w = null), (j = null), (b = null);
    };
  }
  function Ps(M, L) {
    return (
      (b &&
        b(
          M,
          L.map((H) => Qy(H, x.loaderData))
        )) ||
      M.key
    );
  }
  function ne(M, L) {
    if (w && j) {
      let _ = Ps(M, L);
      w[_] = j();
    }
  }
  function Ms(M, L) {
    if (w) {
      let _ = Ps(M, L),
        H = w[_];
      if (typeof H == "number") return H;
    }
    return null;
  }
  function pl(M) {
    (s = {}), (c = Ka(M, i, void 0, s));
  }
  return (
    (g = {
      get basename() {
        return a;
      },
      get state() {
        return x;
      },
      get routes() {
        return o;
      },
      initialize: oe,
      subscribe: Vt,
      enableScrollRestoration: fl,
      navigate: Qe,
      fetch: st,
      revalidate: vn,
      createHref: (M) => e.history.createHref(M),
      encodeLocation: (M) =>
        e.history.encodeLocation(M),
      getFetcher: Ts,
      deleteFetcher: Wt,
      dispose: he,
      getBlocker: Ze,
      deleteBlocker: Ns,
      _internalFetchControllers: F,
      _internalActiveDeferreds: z,
      _internalSetRoutes: pl,
    }),
    g
  );
}
function $y(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function Xa(e, t, n, r, i, s, o) {
  let c, a;
  if (s != null && o !== "path") {
    c = [];
    for (let p of t)
      if ((c.push(p), p.route.id === s)) {
        a = p;
        break;
      }
  } else (c = t), (a = t[t.length - 1]);
  let f = tu(
    i || ".",
    ll(c).map((p) => p.pathnameBase),
    ci(e.pathname, n) || e.pathname,
    o === "path"
  );
  return (
    i == null &&
      ((f.search = e.search), (f.hash = e.hash)),
    (i == null || i === "" || i === ".") &&
      a &&
      a.route.index &&
      !ru(f.search) &&
      (f.search = f.search
        ? f.search.replace(/^\?/, "?index&")
        : "?index"),
    r &&
      n !== "/" &&
      (f.pathname =
        f.pathname === "/"
          ? n
          : cn([n, f.pathname])),
    hr(f)
  );
}
function Yd(e, t, n, r) {
  if (!r || !$y(r)) return { path: n };
  if (r.formMethod && !Yy(r.formMethod))
    return {
      path: n,
      error: Tt(405, { method: r.formMethod }),
    };
  let i = () => ({
      path: n,
      error: Tt(400, { type: "invalid-body" }),
    }),
    s = r.formMethod || "get",
    o = e ? s.toUpperCase() : s.toLowerCase(),
    c = Gm(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!Rt(o)) return i();
      let w =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData ||
            r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce(
              (b, j) => {
                let [S, T] = j;
                return (
                  "" +
                  b +
                  S +
                  "=" +
                  T +
                  `
`
                );
              },
              ""
            )
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: o,
          formAction: c,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: w,
        },
      };
    } else if (
      r.formEncType === "application/json"
    ) {
      if (!Rt(o)) return i();
      try {
        let w =
          typeof r.body == "string"
            ? JSON.parse(r.body)
            : r.body;
        return {
          path: n,
          submission: {
            formMethod: o,
            formAction: c,
            formEncType: r.formEncType,
            formData: void 0,
            json: w,
            text: void 0,
          },
        };
      } catch {
        return i();
      }
    }
  }
  ie(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let a, f;
  if (r.formData)
    (a = Za(r.formData)), (f = r.formData);
  else if (r.body instanceof FormData)
    (a = Za(r.body)), (f = r.body);
  else if (r.body instanceof URLSearchParams)
    (a = r.body), (f = Zd(a));
  else if (r.body == null)
    (a = new URLSearchParams()),
      (f = new FormData());
  else
    try {
      (a = new URLSearchParams(r.body)),
        (f = Zd(a));
    } catch {
      return i();
    }
  let p = {
    formMethod: o,
    formAction: c,
    formEncType:
      (r && r.formEncType) ||
      "application/x-www-form-urlencoded",
    formData: f,
    json: void 0,
    text: void 0,
  };
  if (Rt(p.formMethod))
    return { path: n, submission: p };
  let v = hn(n);
  return (
    t &&
      v.search &&
      ru(v.search) &&
      a.append("index", ""),
    (v.search = "?" + a),
    { path: hr(v), submission: p }
  );
}
function Hy(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((i) => i.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Qd(
  e,
  t,
  n,
  r,
  i,
  s,
  o,
  c,
  a,
  f,
  p,
  v,
  w,
  b
) {
  let j = b
      ? Object.values(b)[0]
      : w
      ? Object.values(w)[0]
      : void 0,
    S = e.createURL(t.location),
    T = e.createURL(i),
    y = b ? Object.keys(b)[0] : void 0,
    g = Hy(n, y).filter((E, k) => {
      if (E.route.lazy) return !0;
      if (E.route.loader == null) return !1;
      if (
        Uy(t.loaderData, t.matches[k], E) ||
        o.some((P) => P === E.route.id)
      )
        return !0;
      let N = t.matches[k],
        A = E;
      return Kd(
        E,
        je(
          {
            currentUrl: S,
            currentParams: N.params,
            nextUrl: T,
            nextParams: A.params,
          },
          r,
          {
            actionResult: j,
            defaultShouldRevalidate:
              s ||
              S.pathname + S.search ===
                T.pathname + T.search ||
              S.search !== T.search ||
              Wm(N, A),
          }
        )
      );
    }),
    x = [];
  return (
    a.forEach((E, k) => {
      if (
        !n.some((F) => F.route.id === E.routeId)
      )
        return;
      let N = $r(p, E.path, v);
      if (!N) {
        x.push({
          key: k,
          routeId: E.routeId,
          path: E.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let A = t.fetchers.get(k),
        P =
          A &&
          A.state !== "idle" &&
          A.data === void 0 &&
          !f.has(k),
        $ = Ja(N, E.path);
      (c.includes(k) ||
        P ||
        Kd(
          $,
          je(
            {
              currentUrl: S,
              currentParams:
                t.matches[t.matches.length - 1]
                  .params,
              nextUrl: T,
              nextParams: n[n.length - 1].params,
            },
            r,
            {
              actionResult: j,
              defaultShouldRevalidate: s,
            }
          )
        )) &&
        x.push({
          key: k,
          routeId: E.routeId,
          path: E.path,
          matches: N,
          match: $,
          controller: new AbortController(),
        });
    }),
    [g, x]
  );
}
function Uy(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    i = e[n.route.id] === void 0;
  return r || i;
}
function Wm(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null &&
      n.endsWith("*") &&
      e.params["*"] !== t.params["*"])
  );
}
function Kd(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Xd(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let i = n[e.id];
  ie(i, "No route found in manifest");
  let s = {};
  for (let o in r) {
    let a =
      i[o] !== void 0 && o !== "hasErrorBoundary";
    ii(
      !a,
      'Route "' +
        i.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' +
          o +
          '" will be ignored.')
    ),
      !a && !fy.has(o) && (s[o] = r[o]);
  }
  Object.assign(i, s),
    Object.assign(
      i,
      je({}, t(i), { lazy: void 0 })
    );
}
async function Pi(e, t, n, r, i, s, o, c) {
  c === void 0 && (c = {});
  let a,
    f,
    p,
    v = (j) => {
      let S,
        T = new Promise((y, h) => (S = h));
      return (
        (p = () => S()),
        t.signal.addEventListener("abort", p),
        Promise.race([
          j({
            request: t,
            params: n.params,
            context: c.requestContext,
          }),
          T,
        ])
      );
    };
  try {
    let j = n.route[e];
    if (n.route.lazy)
      if (j)
        f = (
          await Promise.all([
            v(j),
            Xd(n.route, s, i),
          ])
        )[0];
      else if (
        (await Xd(n.route, s, i),
        (j = n.route[e]),
        j)
      )
        f = await v(j);
      else if (e === "action") {
        let S = new URL(t.url),
          T = S.pathname + S.search;
        throw Tt(405, {
          method: t.method,
          pathname: T,
          routeId: n.route.id,
        });
      } else
        return { type: _e.data, data: void 0 };
    else if (j) f = await v(j);
    else {
      let S = new URL(t.url),
        T = S.pathname + S.search;
      throw Tt(404, { pathname: T });
    }
    ie(
      f !== void 0,
      "You defined " +
        (e === "action"
          ? "an action"
          : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (j) {
    (a = _e.error), (f = j);
  } finally {
    p && t.signal.removeEventListener("abort", p);
  }
  if (qy(f)) {
    let j = f.status;
    if (_y.has(j)) {
      let y = f.headers.get("Location");
      if (
        (ie(
          y,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !Vm.test(y))
      )
        y = Xa(
          new URL(t.url),
          r.slice(0, r.indexOf(n) + 1),
          o,
          !0,
          y
        );
      else if (!c.isStaticRequest) {
        let h = new URL(t.url),
          g = y.startsWith("//")
            ? new URL(h.protocol + y)
            : new URL(y),
          x = ci(g.pathname, o) != null;
        g.origin === h.origin &&
          x &&
          (y = g.pathname + g.search + g.hash);
      }
      if (c.isStaticRequest)
        throw (f.headers.set("Location", y), f);
      return {
        type: _e.redirect,
        status: j,
        location: y,
        revalidate:
          f.headers.get("X-Remix-Revalidate") !==
          null,
      };
    }
    if (c.isRouteRequest)
      throw { type: a || _e.data, response: f };
    let S,
      T = f.headers.get("Content-Type");
    return (
      T && /\bapplication\/json\b/.test(T)
        ? (S = await f.json())
        : (S = await f.text()),
      a === _e.error
        ? {
            type: a,
            error: new nu(j, f.statusText, S),
            headers: f.headers,
          }
        : {
            type: _e.data,
            data: S,
            statusCode: f.status,
            headers: f.headers,
          }
    );
  }
  if (a === _e.error)
    return { type: a, error: f };
  if (Gy(f)) {
    var w, b;
    return {
      type: _e.deferred,
      deferredData: f,
      statusCode:
        (w = f.init) == null ? void 0 : w.status,
      headers:
        ((b = f.init) == null
          ? void 0
          : b.headers) &&
        new Headers(f.init.headers),
    };
  }
  return { type: _e.data, data: f };
}
function Mi(e, t, n, r) {
  let i = e.createURL(Gm(t)).toString(),
    s = { signal: n };
  if (r && Rt(r.formMethod)) {
    let { formMethod: o, formEncType: c } = r;
    (s.method = o.toUpperCase()),
      c === "application/json"
        ? ((s.headers = new Headers({
            "Content-Type": c,
          })),
          (s.body = JSON.stringify(r.json)))
        : c === "text/plain"
        ? (s.body = r.text)
        : c ===
            "application/x-www-form-urlencoded" &&
          r.formData
        ? (s.body = Za(r.formData))
        : (s.body = r.formData);
  }
  return new Request(i, s);
}
function Za(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(
      n,
      typeof r == "string" ? r : r.name
    );
  return t;
}
function Zd(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Vy(e, t, n, r, i) {
  let s = {},
    o = null,
    c,
    a = !1,
    f = {};
  return (
    n.forEach((p, v) => {
      let w = t[v].route.id;
      if (
        (ie(
          !Qr(p),
          "Cannot handle redirect results in processLoaderData"
        ),
        Qi(p))
      ) {
        let b = Hr(e, w),
          j = p.error;
        r &&
          ((j = Object.values(r)[0]),
          (r = void 0)),
          (o = o || {}),
          o[b.route.id] == null &&
            (o[b.route.id] = j),
          (s[w] = void 0),
          a ||
            ((a = !0),
            (c = Hm(p.error)
              ? p.error.status
              : 500)),
          p.headers && (f[w] = p.headers);
      } else
        sr(p)
          ? (i.set(w, p.deferredData),
            (s[w] = p.deferredData.data))
          : (s[w] = p.data),
          p.statusCode != null &&
            p.statusCode !== 200 &&
            !a &&
            (c = p.statusCode),
          p.headers && (f[w] = p.headers);
    }),
    r &&
      ((o = r), (s[Object.keys(r)[0]] = void 0)),
    {
      loaderData: s,
      errors: o,
      statusCode: c || 200,
      loaderHeaders: f,
    }
  );
}
function Jd(e, t, n, r, i, s, o, c) {
  let { loaderData: a, errors: f } = Vy(
    t,
    n,
    r,
    i,
    c
  );
  for (let p = 0; p < s.length; p++) {
    let {
      key: v,
      match: w,
      controller: b,
    } = s[p];
    ie(
      o !== void 0 && o[p] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let j = o[p];
    if (!(b && b.signal.aborted))
      if (Qi(j)) {
        let S = Hr(
          e.matches,
          w == null ? void 0 : w.route.id
        );
        (f && f[S.route.id]) ||
          (f = je({}, f, {
            [S.route.id]: j.error,
          })),
          e.fetchers.delete(v);
      } else if (Qr(j))
        ie(
          !1,
          "Unhandled fetcher revalidation redirect"
        );
      else if (sr(j))
        ie(!1, "Unhandled fetcher deferred data");
      else {
        let S = mo(j.data);
        e.fetchers.set(v, S);
      }
  }
  return { loaderData: a, errors: f };
}
function ef(e, t, n, r) {
  let i = je({}, t);
  for (let s of n) {
    let o = s.route.id;
    if (
      (t.hasOwnProperty(o)
        ? t[o] !== void 0 && (i[o] = t[o])
        : e[o] !== void 0 &&
          s.route.loader &&
          (i[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return i;
}
function Hr(e, t) {
  return (
    (t
      ? e.slice(
          0,
          e.findIndex((r) => r.route.id === t) + 1
        )
      : [...e]
    )
      .reverse()
      .find(
        (r) => r.route.hasErrorBoundary === !0
      ) || e[0]
  );
}
function tf(e) {
  let t = e.find(
    (n) => n.index || !n.path || n.path === "/"
  ) || {
    id: "__shim-error-route__",
  };
  return {
    matches: [
      {
        params: {},
        pathname: "",
        pathnameBase: "",
        route: t,
      },
    ],
    route: t,
  };
}
function Tt(e, t) {
  let {
      pathname: n,
      routeId: r,
      method: i,
      type: s,
    } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    c = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        i && n && r
          ? (c =
              "You made a " +
              i +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' +
                r +
                '", ') +
              "so there is no way to handle the request.")
          : s === "defer-action"
          ? (c =
              "defer() is not supported in actions")
          : s === "invalid-body" &&
            (c =
              "Unable to encode submission body"))
      : e === 403
      ? ((o = "Forbidden"),
        (c =
          'Route "' +
          r +
          '" does not match URL "' +
          n +
          '"'))
      : e === 404
      ? ((o = "Not Found"),
        (c = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = "Method Not Allowed"),
        i && n && r
          ? (c =
              "You made a " +
              i.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' +
                r +
                '", ') +
              "so there is no way to handle the request.")
          : i &&
            (c =
              'Invalid request method "' +
              i.toUpperCase() +
              '"')),
    new nu(e || 500, o, new Error(c), !0)
  );
}
function nf(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Qr(n)) return n;
  }
}
function Gm(e) {
  let t = typeof e == "string" ? hn(e) : e;
  return hr(je({}, t, { hash: "" }));
}
function Wy(e, t) {
  return e.pathname !== t.pathname ||
    e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function sr(e) {
  return e.type === _e.deferred;
}
function Qi(e) {
  return e.type === _e.error;
}
function Qr(e) {
  return (e && e.type) === _e.redirect;
}
function Gy(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function qy(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Yy(e) {
  return Iy.has(e.toLowerCase());
}
function Rt(e) {
  return Ay.has(e.toLowerCase());
}
async function rf(e, t, n, r, i, s) {
  for (let o = 0; o < n.length; o++) {
    let c = n[o],
      a = t[o];
    if (!a) continue;
    let f = e.find(
        (v) => v.route.id === a.route.id
      ),
      p =
        f != null &&
        !Wm(f, a) &&
        (s && s[a.route.id]) !== void 0;
    if (sr(c) && (i || p)) {
      let v = r[o];
      ie(
        v,
        "Expected an AbortSignal for revalidating fetcher deferred result"
      ),
        await qm(c, v, i).then((w) => {
          w && (n[o] = w || n[o]);
        });
    }
  }
}
async function qm(e, t, n) {
  if (
    (n === void 0 && (n = !1),
    !(await e.deferredData.resolveData(t)))
  ) {
    if (n)
      try {
        return {
          type: _e.data,
          data: e.deferredData.unwrappedData,
        };
      } catch (i) {
        return { type: _e.error, error: i };
      }
    return {
      type: _e.data,
      data: e.deferredData.data,
    };
  }
}
function ru(e) {
  return new URLSearchParams(e)
    .getAll("index")
    .some((t) => t === "");
}
function Qy(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return {
    id: n.id,
    pathname: r,
    params: i,
    data: t[n.id],
    handle: n.handle,
  };
}
function Ja(e, t) {
  let n =
    typeof t == "string"
      ? hn(t).search
      : t.search;
  if (e[e.length - 1].route.index && ru(n || ""))
    return e[e.length - 1];
  let r = ll(e);
  return r[r.length - 1];
}
function sf(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: i,
    formData: s,
    json: o,
  } = e;
  if (!(!t || !n || !r)) {
    if (i != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: i,
      };
    if (s != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: s,
        json: void 0,
        text: void 0,
      };
    if (o !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: o,
        text: void 0,
      };
  }
}
function Zs(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function Ky(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Li(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
        " _hasFetcherDoneAnything ": !0,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
        " _hasFetcherDoneAnything ": !0,
      };
}
function Xy(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
    " _hasFetcherDoneAnything ": !0,
  };
}
function mo(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
    " _hasFetcherDoneAnything ": !0,
  };
}
/**
 * React Router v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function $o() {
  return (
    ($o = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (
            var t = 1;
            t < arguments.length;
            t++
          ) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(
                n,
                r
              ) && (e[r] = n[r]);
          }
          return e;
        }),
    $o.apply(this, arguments)
  );
}
const al = D.createContext(null),
  Ym = D.createContext(null),
  ui = D.createContext(null),
  cl = D.createContext(null),
  Gn = D.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1,
  }),
  Qm = D.createContext(null);
function Zy(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Es() || ie(!1);
  let { basename: r, navigator: i } =
      D.useContext(ui),
    {
      hash: s,
      pathname: o,
      search: c,
    } = Xm(e, { relative: n }),
    a = o;
  return (
    r !== "/" && (a = o === "/" ? r : cn([r, o])),
    i.createHref({
      pathname: a,
      search: c,
      hash: s,
    })
  );
}
function Es() {
  return D.useContext(cl) != null;
}
function ul() {
  return (
    Es() || ie(!1), D.useContext(cl).location
  );
}
function Km(e) {
  D.useContext(ui).static || D.useLayoutEffect(e);
}
function Jy() {
  let { isDataRoute: e } = D.useContext(Gn);
  return e ? px() : ex();
}
function ex() {
  Es() || ie(!1);
  let e = D.useContext(al),
    { basename: t, navigator: n } =
      D.useContext(ui),
    { matches: r } = D.useContext(Gn),
    { pathname: i } = ul(),
    s = JSON.stringify(
      ll(r).map((a) => a.pathnameBase)
    ),
    o = D.useRef(!1);
  return (
    Km(() => {
      o.current = !0;
    }),
    D.useCallback(
      function (a, f) {
        if (
          (f === void 0 && (f = {}), !o.current)
        )
          return;
        if (typeof a == "number") {
          n.go(a);
          return;
        }
        let p = tu(
          a,
          JSON.parse(s),
          i,
          f.relative === "path"
        );
        e == null &&
          t !== "/" &&
          (p.pathname =
            p.pathname === "/"
              ? t
              : cn([t, p.pathname])),
          (f.replace ? n.replace : n.push)(
            p,
            f.state,
            f
          );
      },
      [t, n, s, i, e]
    )
  );
}
const tx = D.createContext(null);
function nx(e) {
  let t = D.useContext(Gn).outlet;
  return (
    t &&
    D.createElement(tx.Provider, { value: e }, t)
  );
}
function Xm(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = D.useContext(Gn),
    { pathname: i } = ul(),
    s = JSON.stringify(
      ll(r).map((o) => o.pathnameBase)
    );
  return D.useMemo(
    () => tu(e, JSON.parse(s), i, n === "path"),
    [e, s, i, n]
  );
}
function rx(e, t, n) {
  Es() || ie(!1);
  let { navigator: r } = D.useContext(ui),
    { matches: i } = D.useContext(Gn),
    s = i[i.length - 1],
    o = s ? s.params : {};
  s && s.pathname;
  let c = s ? s.pathnameBase : "/";
  s && s.route;
  let a = ul(),
    f;
  if (t) {
    var p;
    let S = typeof t == "string" ? hn(t) : t;
    c === "/" ||
      ((p = S.pathname) != null &&
        p.startsWith(c)) ||
      ie(!1),
      (f = S);
  } else f = a;
  let v = f.pathname || "/",
    w = c === "/" ? v : v.slice(c.length) || "/",
    b = $r(e, { pathname: w }),
    j = ax(
      b &&
        b.map((S) =>
          Object.assign({}, S, {
            params: Object.assign(
              {},
              o,
              S.params
            ),
            pathname: cn([
              c,
              r.encodeLocation
                ? r.encodeLocation(S.pathname)
                    .pathname
                : S.pathname,
            ]),
            pathnameBase:
              S.pathnameBase === "/"
                ? c
                : cn([
                    c,
                    r.encodeLocation
                      ? r.encodeLocation(
                          S.pathnameBase
                        ).pathname
                      : S.pathnameBase,
                  ]),
          })
        ),
      i,
      n
    );
  return t && j
    ? D.createElement(
        cl.Provider,
        {
          value: {
            location: $o(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f
            ),
            navigationType: Oe.Pop,
          },
        },
        j
      )
    : j;
}
function ix() {
  let e = fx(),
    t = Hm(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = {
      padding: "0.5rem",
      backgroundColor: "rgba(200,200,200, 0.5)",
    },
    s = null;
  return D.createElement(
    D.Fragment,
    null,
    D.createElement(
      "h2",
      null,
      "Unexpected Application Error!"
    ),
    D.createElement(
      "h3",
      { style: { fontStyle: "italic" } },
      t
    ),
    n
      ? D.createElement("pre", { style: i }, n)
      : null,
    s
  );
}
const sx = D.createElement(ix, null);
class ox extends D.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" &&
        t.revalidation === "idle")
      ? {
          error: t.error,
          location: t.location,
          revalidation: t.revalidation,
        }
      : {
          error: t.error || n.error,
          location: n.location,
          revalidation:
            t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error
      ? D.createElement(
          Gn.Provider,
          { value: this.props.routeContext },
          D.createElement(Qm.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function lx(e) {
  let {
      routeContext: t,
      match: n,
      children: r,
    } = e,
    i = D.useContext(al);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement ||
        n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId =
        n.route.id),
    D.createElement(Gn.Provider, { value: t }, r)
  );
}
function ax(e, t, n) {
  var r;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    e == null)
  ) {
    var i;
    if ((i = n) != null && i.errors)
      e = n.matches;
    else return null;
  }
  let s = e,
    o = (r = n) == null ? void 0 : r.errors;
  if (o != null) {
    let c = s.findIndex(
      (a) =>
        a.route.id &&
        (o == null ? void 0 : o[a.route.id])
    );
    c >= 0 || ie(!1),
      (s = s.slice(0, Math.min(s.length, c + 1)));
  }
  return s.reduceRight((c, a, f) => {
    let p = a.route.id
        ? o == null
          ? void 0
          : o[a.route.id]
        : null,
      v = null;
    n && (v = a.route.errorElement || sx);
    let w = t.concat(s.slice(0, f + 1)),
      b = () => {
        let j;
        return (
          p
            ? (j = v)
            : a.route.Component
            ? (j = D.createElement(
                a.route.Component,
                null
              ))
            : a.route.element
            ? (j = a.route.element)
            : (j = c),
          D.createElement(lx, {
            match: a,
            routeContext: {
              outlet: c,
              matches: w,
              isDataRoute: n != null,
            },
            children: j,
          })
        );
      };
    return n &&
      (a.route.ErrorBoundary ||
        a.route.errorElement ||
        f === 0)
      ? D.createElement(ox, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: p,
          children: b(),
          routeContext: {
            outlet: null,
            matches: w,
            isDataRoute: !0,
          },
        })
      : b();
  }, null);
}
var ec;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate");
})(ec || (ec = {}));
var hs;
(function (e) {
  (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId");
})(hs || (hs = {}));
function cx(e) {
  let t = D.useContext(al);
  return t || ie(!1), t;
}
function ux(e) {
  let t = D.useContext(Ym);
  return t || ie(!1), t;
}
function dx(e) {
  let t = D.useContext(Gn);
  return t || ie(!1), t;
}
function Zm(e) {
  let t = dx(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || ie(!1), n.route.id;
}
function fx() {
  var e;
  let t = D.useContext(Qm),
    n = ux(hs.UseRouteError),
    r = Zm(hs.UseRouteError);
  return (
    t || ((e = n.errors) == null ? void 0 : e[r])
  );
}
function px() {
  let { router: e } = cx(ec.UseNavigateStable),
    t = Zm(hs.UseNavigateStable),
    n = D.useRef(!1);
  return (
    Km(() => {
      n.current = !0;
    }),
    D.useCallback(
      function (i, s) {
        s === void 0 && (s = {}),
          n.current &&
            (typeof i == "number"
              ? e.navigate(i)
              : e.navigate(
                  i,
                  $o({ fromRouteId: t }, s)
                ));
      },
      [e, t]
    )
  );
}
const mx = "startTransition",
  of = Z0[mx];
function lf(e) {
  let {
      fallbackElement: t,
      router: n,
      future: r,
    } = e,
    [i, s] = D.useState(n.state),
    { v7_startTransition: o } = r || {},
    c = D.useCallback(
      (v) => {
        o && of ? of(() => s(v)) : s(v);
      },
      [s, o]
    );
  D.useLayoutEffect(() => n.subscribe(c), [n, c]);
  let a = D.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (v) => n.navigate(v),
        push: (v, w, b) =>
          n.navigate(v, {
            state: w,
            preventScrollReset:
              b == null
                ? void 0
                : b.preventScrollReset,
          }),
        replace: (v, w, b) =>
          n.navigate(v, {
            replace: !0,
            state: w,
            preventScrollReset:
              b == null
                ? void 0
                : b.preventScrollReset,
          }),
      }),
      [n]
    ),
    f = n.basename || "/",
    p = D.useMemo(
      () => ({
        router: n,
        navigator: a,
        static: !1,
        basename: f,
      }),
      [n, a, f]
    );
  return D.createElement(
    D.Fragment,
    null,
    D.createElement(
      al.Provider,
      { value: p },
      D.createElement(
        Ym.Provider,
        { value: i },
        D.createElement(
          vx,
          {
            basename: f,
            location: i.location,
            navigationType: i.historyAction,
            navigator: a,
          },
          i.initialized
            ? D.createElement(hx, {
                routes: n.routes,
                state: i,
              })
            : t
        )
      )
    ),
    null
  );
}
function hx(e) {
  let { routes: t, state: n } = e;
  return rx(t, void 0, n);
}
function gx(e) {
  return nx(e.context);
}
function vx(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Oe.Pop,
    navigator: s,
    static: o = !1,
  } = e;
  Es() && ie(!1);
  let c = t.replace(/^\/*/, "/"),
    a = D.useMemo(
      () => ({
        basename: c,
        navigator: s,
        static: o,
      }),
      [c, s, o]
    );
  typeof r == "string" && (r = hn(r));
  let {
      pathname: f = "/",
      search: p = "",
      hash: v = "",
      state: w = null,
      key: b = "default",
    } = r,
    j = D.useMemo(() => {
      let S = ci(f, c);
      return S == null
        ? null
        : {
            location: {
              pathname: S,
              search: p,
              hash: v,
              state: w,
              key: b,
            },
            navigationType: i,
          };
    }, [c, f, p, v, w, b, i]);
  return j == null
    ? null
    : D.createElement(
        ui.Provider,
        { value: a },
        D.createElement(cl.Provider, {
          children: n,
          value: j,
        })
      );
}
var af;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(af || (af = {}));
new Promise(() => {});
function yx(e) {
  let t = {
    hasErrorBoundary:
      e.ErrorBoundary != null ||
      e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: D.createElement(e.Component),
        Component: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: D.createElement(
          e.ErrorBoundary
        ),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gs() {
  return (
    (gs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (
            var t = 1;
            t < arguments.length;
            t++
          ) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(
                n,
                r
              ) && (e[r] = n[r]);
          }
          return e;
        }),
    gs.apply(this, arguments)
  );
}
function xx(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]),
      !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function wx(e) {
  return !!(
    e.metaKey ||
    e.altKey ||
    e.ctrlKey ||
    e.shiftKey
  );
}
function bx(e, t) {
  return (
    e.button === 0 &&
    (!t || t === "_self") &&
    !wx(e)
  );
}
const Sx = [
  "onClick",
  "relative",
  "reloadDocument",
  "replace",
  "state",
  "target",
  "to",
  "preventScrollReset",
];
function Cx(e, t) {
  return By({
    basename: t == null ? void 0 : t.basename,
    future: gs(
      {},
      t == null ? void 0 : t.future,
      { v7_prependBasename: !0 }
    ),
    history: cy({
      window: t == null ? void 0 : t.window,
    }),
    hydrationData:
      (t == null ? void 0 : t.hydrationData) ||
      jx(),
    routes: e,
    mapRouteProperties: yx,
  }).initialize();
}
function jx() {
  var e;
  let t =
    (e = window) == null
      ? void 0
      : e.__staticRouterHydrationData;
  return (
    t &&
      t.errors &&
      (t = gs({}, t, { errors: Ex(t.errors) })),
    t
  );
}
function Ex(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, i] of t)
    if (i && i.__type === "RouteErrorResponse")
      n[r] = new nu(
        i.status,
        i.statusText,
        i.data,
        i.internal === !0
      );
    else if (i && i.__type === "Error") {
      let s = new Error(i.message);
      (s.stack = ""), (n[r] = s);
    } else n[r] = i;
  return n;
}
const Tx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  kx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  me = D.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: s,
        replace: o,
        state: c,
        target: a,
        to: f,
        preventScrollReset: p,
      } = t,
      v = xx(t, Sx),
      { basename: w } = D.useContext(ui),
      b,
      j = !1;
    if (
      typeof f == "string" &&
      kx.test(f) &&
      ((b = f), Tx)
    )
      try {
        let h = new URL(window.location.href),
          g = f.startsWith("//")
            ? new URL(h.protocol + f)
            : new URL(f),
          x = ci(g.pathname, w);
        g.origin === h.origin && x != null
          ? (f = x + g.search + g.hash)
          : (j = !0);
      } catch {}
    let S = Zy(f, { relative: i }),
      T = Nx(f, {
        replace: o,
        state: c,
        target: a,
        preventScrollReset: p,
        relative: i,
      });
    function y(h) {
      r && r(h), h.defaultPrevented || T(h);
    }
    return D.createElement(
      "a",
      gs({}, v, {
        href: b || S,
        onClick: j || s ? r : y,
        ref: n,
        target: a,
      })
    );
  });
var cf;
(function (e) {
  (e.UseScrollRestoration =
    "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher");
})(cf || (cf = {}));
var uf;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration =
      "useScrollRestoration");
})(uf || (uf = {}));
function Nx(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: s,
      relative: o,
    } = t === void 0 ? {} : t,
    c = Jy(),
    a = ul(),
    f = Xm(e, { relative: o });
  return D.useCallback(
    (p) => {
      if (bx(p, n)) {
        p.preventDefault();
        let v =
          r !== void 0 ? r : hr(a) === hr(f);
        c(e, {
          replace: v,
          state: i,
          preventScrollReset: s,
          relative: o,
        });
      }
    },
    [a, c, f, r, i, n, e, s, o]
  );
}
const Px = () => {
  const e = D.useRef(null),
    [t, n] = D.useState(!1);
  D.useEffect(() => {
    if (window.innerWidth >= 1024) {
      const s = (o) => {
        var c;
        ((c = e.current) != null &&
          c.contains(o.target)) ||
          n(!1);
      };
      return (
        window.addEventListener("mousedown", s),
        () => {
          window.removeEventListener(
            "mousedown",
            s
          );
        }
      );
    }
  });
  function r() {
    n(!t);
  }
  const i = l.jsxs(l.Fragment, {
    children: [
      l.jsx("li", {
        className: "font-medium",
        children: l.jsx(me, {
          to: "/",
          children: "Home",
        }),
      }),
      l.jsx("li", {
        className: "font-medium",
        children: l.jsx(me, {
          to: "/about",
          children: "About",
        }),
      }),
      l.jsx("li", {
        className: "font-medium",
        children: l.jsx(me, {
          to: "/service",
          children: "Services",
        }),
      }),
      l.jsxs("li", {
        ref: e,
        className: "relative",
        children: [
          l.jsxs("button", {
            onClick: () => r(),
            type: "button",
            className: "inline-flex",
            children: [
              l.jsx("li", {
                className:
                  "font-medium bg-transparent font-[mona-bold]",
                children: "Odoo Connectors",
              }),
              l.jsx("svg", {
                xmlns:
                  "http://www.w3.org/2000/svg",
                className:
                  "w-4 bg-transparent h-4",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: 2,
                children: l.jsx("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M19 9l-7 7-7-7",
                }),
              }),
            ],
          }),
          t
            ? l.jsxs(l.Fragment, {
                children: [
                  l.jsx("div", {
                    className:
                      "absolute lg:hidden right-0 z-10 mt-10 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg",
                    children: l.jsxs("div", {
                      className: "p-2",
                      children: [
                        l.jsx("li", {
                          className:
                            "block px-4 py-2 text-sm font-medium",
                          children: l.jsxs(me, {
                            onClick: () => n(!1),
                            to: "/commercehub-odoo",
                            children: [
                              l.jsxs("svg", {
                                xmlns:
                                  "http://www.w3.org/2000/svg",
                                "xmlns:xlink":
                                  "http://www.w3.org/1999/xlink",
                                version: "1.1",
                                id: "Layer_1",
                                x: "0px",
                                y: "0px",
                                width: "20",
                                height: "20",
                                viewBox:
                                  "0 0 225 225",
                                "enable-background":
                                  "new 0 0 225 225",
                                "xml:space":
                                  "preserve",
                                children: [
                                  l.jsx("path", {
                                    fill: "#FEFFFF",
                                    opacity:
                                      "1.000000",
                                    stroke:
                                      "none",
                                    d: " M110.000000,226.000000   C73.333336,226.000000 37.166672,226.000000 1.000005,226.000000   C1.000003,151.000000 1.000003,76.000015 1.000002,1.000015   C75.999992,1.000010 150.999985,1.000010 225.999969,1.000005   C225.999985,75.999985 225.999985,150.999969 226.000000,225.999969   C187.500000,226.000000 149.000000,226.000000 110.000000,226.000000  M181.845291,161.874466   C181.960114,148.158417 182.082031,134.442398 182.138382,120.726112   C182.139496,120.455780 181.372406,120.182281 180.312561,120.121880   C165.063354,131.600677 149.826538,143.096024 134.544281,154.530640   C133.138748,155.582291 131.443359,156.246490 130.229355,156.196167   C130.263031,135.052872 130.222290,113.908928 130.406311,92.766945   C130.435715,89.389137 129.356415,87.347397 126.619255,85.393913   C107.663383,71.865265 88.830063,58.164902 69.956039,44.521553   C61.529980,38.430664 53.100777,32.344128 44.000381,25.769690   C44.000381,48.848953 43.956154,70.944229 44.114674,93.038048   C44.123798,94.309494 45.539360,95.894745 46.716778,96.780296   C53.363903,101.779694 60.126099,106.626778 66.871666,111.494453   C87.902679,126.670662 108.943810,141.832840 130.342651,157.876862   C130.342651,171.900131 130.342651,185.923401 130.342651,201.184616   C147.969498,187.735886 164.543488,175.090454 181.845291,161.874466  z",
                                  }),
                                  l.jsx("path", {
                                    fill: "#0175FF",
                                    opacity:
                                      "1.000000",
                                    stroke:
                                      "none",
                                    d: " M129.981018,157.000443   C108.943810,141.832840 87.902679,126.670662 66.871666,111.494453   C60.126099,106.626778 53.363903,101.779694 46.716778,96.780296   C45.539360,95.894745 44.123798,94.309494 44.114674,93.038048   C43.956154,70.944229 44.000381,48.848953 44.000381,25.769690   C53.100777,32.344128 61.529980,38.430664 69.956039,44.521553   C88.830063,58.164902 107.663383,71.865265 126.619255,85.393913   C129.356415,87.347397 130.435715,89.389137 130.406311,92.766945   C130.222290,113.908928 130.263031,135.052872 130.070206,156.608536   C129.911057,157.020905 129.981018,157.000443 129.981018,157.000443  z",
                                  }),
                                  l.jsx("path", {
                                    fill: "#044790",
                                    opacity:
                                      "1.000000",
                                    stroke:
                                      "none",
                                    d: " M181.117462,162.445007   C164.543488,175.090454 147.969498,187.735886 130.342651,201.184616   C130.342651,185.923401 130.342651,171.900131 130.161835,157.438660   C129.981018,157.000443 129.911057,157.020905 129.896805,157.055756   C131.443359,156.246490 133.138748,155.582291 134.544281,154.530640   C149.826538,143.096024 165.063354,131.600677 180.649139,120.490295   C181.029617,134.720810 181.073547,148.582916 181.117462,162.445007  z",
                                  }),
                                  l.jsx("path", {
                                    fill: "#013689",
                                    opacity:
                                      "1.000000",
                                    stroke:
                                      "none",
                                    d: " M181.481384,162.159729   C181.073547,148.582916 181.029617,134.720810 180.974701,120.384491   C181.372406,120.182281 182.139496,120.455780 182.138382,120.726112   C182.082031,134.442398 181.960114,148.158417 181.481384,162.159729  z",
                                  }),
                                ],
                              }),
                              "CommerceHub",
                            ],
                          }),
                        }),
                        l.jsx("li", {
                          className:
                            "block px-4 py-2 text-sm font-medium",
                          children: l.jsxs(me, {
                            onClick: () => n(!1),
                            to: "/guides/how-to-connect-google-bigquery-with-odoo",
                            children: [
                              l.jsxs("svg", {
                                xmlns:
                                  "http://www.w3.org/2000/svg",
                                height: "20",
                                width: "20",
                                viewBox:
                                  "-1.633235433328256 7.0326093303156565 131.26574682416876 114.63439066968435",
                                children: [
                                  l.jsxs(
                                    "linearGradient",
                                    {
                                      id: "a",
                                      gradientUnits:
                                        "userSpaceOnUse",
                                      x1: "64",
                                      x2: "64",
                                      y1: "7.034",
                                      y2: "120.789",
                                      children: [
                                        l.jsx(
                                          "stop",
                                          {
                                            offset:
                                              "0",
                                            "stop-color":
                                              "#4387fd",
                                          }
                                        ),
                                        l.jsx(
                                          "stop",
                                          {
                                            offset:
                                              "1",
                                            "stop-color":
                                              "#4683ea",
                                          }
                                        ),
                                      ],
                                    }
                                  ),
                                  l.jsx("path", {
                                    d: "M27.79 115.217L1.54 69.749a11.499 11.499 0 0 1 0-11.499l26.25-45.467a11.5 11.5 0 0 1 9.96-5.75h52.5a11.5 11.5 0 0 1 9.959 5.75l26.25 45.467a11.499 11.499 0 0 1 0 11.5l-26.25 45.467a11.5 11.5 0 0 1-9.959 5.749h-52.5a11.499 11.499 0 0 1-9.96-5.75z",
                                    fill: "url(#a)",
                                  }),
                                  l.jsx("path", {
                                    "clip-path":
                                      "url(#a)",
                                    d: "M119.229 86.48L80.625 47.874 64 43.425l-14.933 5.55L43.3 64l4.637 16.729 40.938 40.938 8.687-.386z",
                                    opacity:
                                      ".07",
                                  }),
                                  l.jsxs("g", {
                                    fill: "#fff",
                                    children: [
                                      l.jsx(
                                        "path",
                                        {
                                          d: "M64 40.804c-12.81 0-23.195 10.385-23.195 23.196 0 12.81 10.385 23.195 23.195 23.195S87.194 76.81 87.194 64c0-12.811-10.385-23.196-23.194-23.196m0 40.795c-9.72 0-17.6-7.88-17.6-17.6S54.28 46.4 64 46.4 81.6 54.28 81.6 64 73.72 81.6 64 81.6",
                                        }
                                      ),
                                      l.jsx(
                                        "path",
                                        {
                                          d: "M52.99 63.104v7.21a12.794 12.794 0 0 0 4.38 4.475V63.104zM61.675 57.026v19.411c.745.137 1.507.22 2.29.22.714 0 1.41-.075 2.093-.189V57.026zM70.766 66.1v8.562a12.786 12.786 0 0 0 4.382-4.7v-3.861zM80.691 78.287l-2.403 2.405a1.088 1.088 0 0 0 0 1.537l9.115 9.112a1.088 1.088 0 0 0 1.537 0l2.403-2.402a1.092 1.092 0 0 0 0-1.536l-9.116-9.116a1.09 1.09 0 0 0-1.536 0",
                                        }
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                              "Google BigQuery",
                            ],
                          }),
                        }),
                        l.jsx("li", {
                          className:
                            "block px-4 py-2 text-sm font-medium",
                          children: l.jsxs(me, {
                            onClick: () => n(!1),
                            to: "/discodoo",
                            children: [
                              l.jsx("svg", {
                                xmlns:
                                  "http://www.w3.org/2000/svg",
                                "xmlns:xlink":
                                  "http://www.w3.org/1999/xlink",
                                width: "20px",
                                height: "20px",
                                viewBox:
                                  "0 -28.5 256 256",
                                version: "1.1",
                                preserveAspectRatio:
                                  "xMidYMid",
                                children: l.jsx(
                                  "g",
                                  {
                                    children:
                                      l.jsx(
                                        "path",
                                        {
                                          d: "M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z",
                                          fill: "#5865F2",
                                          fillRule:
                                            "nonzero",
                                        }
                                      ),
                                  }
                                ),
                              }),
                              "Discodoo",
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  l.jsx("div", {
                    className:
                      "absolute hidden lg:flex right-0 z-10 mt-10 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg",
                    children: l.jsxs("div", {
                      className: "p-2",
                      children: [
                        l.jsx("li", {
                          className:
                            "block px-4 py-2 text-sm font-medium",
                          children: l.jsxs(me, {
                            onClick: () => n(!1),
                            to: "/commercehub-odoo",
                            children: [
                              l.jsxs("svg", {
                                xmlns:
                                  "http://www.w3.org/2000/svg",
                                "xmlns:xlink":
                                  "http://www.w3.org/1999/xlink",
                                version: "1.1",
                                id: "Layer_1",
                                x: "0px",
                                y: "0px",
                                width: "20",
                                height: "20",
                                viewBox:
                                  "0 0 225 225",
                                "enable-background":
                                  "new 0 0 225 225",
                                "xml:space":
                                  "preserve",
                                children: [
                                  l.jsx("path", {
                                    fill: "#FEFFFF",
                                    opacity:
                                      "1.000000",
                                    stroke:
                                      "none",
                                    d: " M110.000000,226.000000   C73.333336,226.000000 37.166672,226.000000 1.000005,226.000000   C1.000003,151.000000 1.000003,76.000015 1.000002,1.000015   C75.999992,1.000010 150.999985,1.000010 225.999969,1.000005   C225.999985,75.999985 225.999985,150.999969 226.000000,225.999969   C187.500000,226.000000 149.000000,226.000000 110.000000,226.000000  M181.845291,161.874466   C181.960114,148.158417 182.082031,134.442398 182.138382,120.726112   C182.139496,120.455780 181.372406,120.182281 180.312561,120.121880   C165.063354,131.600677 149.826538,143.096024 134.544281,154.530640   C133.138748,155.582291 131.443359,156.246490 130.229355,156.196167   C130.263031,135.052872 130.222290,113.908928 130.406311,92.766945   C130.435715,89.389137 129.356415,87.347397 126.619255,85.393913   C107.663383,71.865265 88.830063,58.164902 69.956039,44.521553   C61.529980,38.430664 53.100777,32.344128 44.000381,25.769690   C44.000381,48.848953 43.956154,70.944229 44.114674,93.038048   C44.123798,94.309494 45.539360,95.894745 46.716778,96.780296   C53.363903,101.779694 60.126099,106.626778 66.871666,111.494453   C87.902679,126.670662 108.943810,141.832840 130.342651,157.876862   C130.342651,171.900131 130.342651,185.923401 130.342651,201.184616   C147.969498,187.735886 164.543488,175.090454 181.845291,161.874466  z",
                                  }),
                                  l.jsx("path", {
                                    fill: "#0175FF",
                                    opacity:
                                      "1.000000",
                                    stroke:
                                      "none",
                                    d: " M129.981018,157.000443   C108.943810,141.832840 87.902679,126.670662 66.871666,111.494453   C60.126099,106.626778 53.363903,101.779694 46.716778,96.780296   C45.539360,95.894745 44.123798,94.309494 44.114674,93.038048   C43.956154,70.944229 44.000381,48.848953 44.000381,25.769690   C53.100777,32.344128 61.529980,38.430664 69.956039,44.521553   C88.830063,58.164902 107.663383,71.865265 126.619255,85.393913   C129.356415,87.347397 130.435715,89.389137 130.406311,92.766945   C130.222290,113.908928 130.263031,135.052872 130.070206,156.608536   C129.911057,157.020905 129.981018,157.000443 129.981018,157.000443  z",
                                  }),
                                  l.jsx("path", {
                                    fill: "#044790",
                                    opacity:
                                      "1.000000",
                                    stroke:
                                      "none",
                                    d: " M181.117462,162.445007   C164.543488,175.090454 147.969498,187.735886 130.342651,201.184616   C130.342651,185.923401 130.342651,171.900131 130.161835,157.438660   C129.981018,157.000443 129.911057,157.020905 129.896805,157.055756   C131.443359,156.246490 133.138748,155.582291 134.544281,154.530640   C149.826538,143.096024 165.063354,131.600677 180.649139,120.490295   C181.029617,134.720810 181.073547,148.582916 181.117462,162.445007  z",
                                  }),
                                  l.jsx("path", {
                                    fill: "#013689",
                                    opacity:
                                      "1.000000",
                                    stroke:
                                      "none",
                                    d: " M181.481384,162.159729   C181.073547,148.582916 181.029617,134.720810 180.974701,120.384491   C181.372406,120.182281 182.139496,120.455780 182.138382,120.726112   C182.082031,134.442398 181.960114,148.158417 181.481384,162.159729  z",
                                  }),
                                ],
                              }),
                              "CommerceHub",
                            ],
                          }),
                        }),
                        l.jsx("li", {
                          className:
                            "block px-4 py-2 text-sm font-medium",
                          children: l.jsxs(me, {
                            onClick: () => n(!1),
                            to: "/guides/how-to-connect-google-bigquery-with-odoo",
                            children: [
                              l.jsxs("svg", {
                                xmlns:
                                  "http://www.w3.org/2000/svg",
                                height: "20",
                                width: "20",
                                viewBox:
                                  "-1.633235433328256 7.0326093303156565 131.26574682416876 114.63439066968435",
                                children: [
                                  l.jsxs(
                                    "linearGradient",
                                    {
                                      id: "b",
                                      gradientUnits:
                                        "userSpaceOnUse",
                                      x1: "64",
                                      x2: "64",
                                      y1: "7.034",
                                      y2: "120.789",
                                      children: [
                                        l.jsx(
                                          "stop",
                                          {
                                            offset:
                                              "0",
                                            "stop-color":
                                              "#4387fd",
                                          }
                                        ),
                                        l.jsx(
                                          "stop",
                                          {
                                            offset:
                                              "1",
                                            "stop-color":
                                              "#4683ea",
                                          }
                                        ),
                                      ],
                                    }
                                  ),
                                  l.jsx("path", {
                                    d: "M27.79 115.217L1.54 69.749a11.499 11.499 0 0 1 0-11.499l26.25-45.467a11.5 11.5 0 0 1 9.96-5.75h52.5a11.5 11.5 0 0 1 9.959 5.75l26.25 45.467a11.499 11.499 0 0 1 0 11.5l-26.25 45.467a11.5 11.5 0 0 1-9.959 5.749h-52.5a11.499 11.499 0 0 1-9.96-5.75z",
                                    fill: "url(#b)",
                                  }),
                                  l.jsx("path", {
                                    "clip-path":
                                      "url(#b)",
                                    d: "M119.229 86.48L80.625 47.874 64 43.425l-14.933 5.55L43.3 64l4.637 16.729 40.938 40.938 8.687-.386z",
                                    opacity:
                                      ".07",
                                  }),
                                  l.jsxs("g", {
                                    fill: "#fff",
                                    children: [
                                      l.jsx(
                                        "path",
                                        {
                                          d: "M64 40.804c-12.81 0-23.195 10.385-23.195 23.196 0 12.81 10.385 23.195 23.195 23.195S87.194 76.81 87.194 64c0-12.811-10.385-23.196-23.194-23.196m0 40.795c-9.72 0-17.6-7.88-17.6-17.6S54.28 46.4 64 46.4 81.6 54.28 81.6 64 73.72 81.6 64 81.6",
                                        }
                                      ),
                                      l.jsx(
                                        "path",
                                        {
                                          d: "M52.99 63.104v7.21a12.794 12.794 0 0 0 4.38 4.475V63.104zM61.675 57.026v19.411c.745.137 1.507.22 2.29.22.714 0 1.41-.075 2.093-.189V57.026zM70.766 66.1v8.562a12.786 12.786 0 0 0 4.382-4.7v-3.861zM80.691 78.287l-2.403 2.405a1.088 1.088 0 0 0 0 1.537l9.115 9.112a1.088 1.088 0 0 0 1.537 0l2.403-2.402a1.092 1.092 0 0 0 0-1.536l-9.116-9.116a1.09 1.09 0 0 0-1.536 0",
                                        }
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                              "Google BigQuery",
                            ],
                          }),
                        }),
                        l.jsx("li", {
                          className:
                            "block px-4 py-2 text-sm font-medium",
                          children: l.jsxs(me, {
                            onClick: () => n(!1),
                            to: "/discodoo",
                            children: [
                              l.jsx("svg", {
                                xmlns:
                                  "http://www.w3.org/2000/svg",
                                "xmlns:xlink":
                                  "http://www.w3.org/1999/xlink",
                                width: "20px",
                                height: "20px",
                                viewBox:
                                  "0 -28.5 256 256",
                                version: "1.1",
                                preserveAspectRatio:
                                  "xMidYMid",
                                children: l.jsx(
                                  "g",
                                  {
                                    children:
                                      l.jsx(
                                        "path",
                                        {
                                          d: "M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z",
                                          fill: "#5865F2",
                                          fillRule:
                                            "nonzero",
                                        }
                                      ),
                                  }
                                ),
                              }),
                              "Discodoo",
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              })
            : null,
        ],
      }),
      l.jsx("li", {
        className: "font-medium",
        children: l.jsx(me, {
          to: "/contact",
          children: "Contact Us",
        }),
      }),
    ],
  });
  return l.jsx("div", {
    className:
      "border-b-2 fixed top-0 w-full z-[1000]",
    children: l.jsxs("div", {
      className: "navbar bg-white px-5 md:px-20",
      children: [
        l.jsxs("div", {
          className: "navbar-start items-center",
          children: [
            l.jsxs("div", {
              className: "dropdown",
              children: [
                l.jsx("label", {
                  tabIndex: 0,
                  className:
                    "btn btn-ghost hover:bg-white lg:hidden",
                  children: l.jsx("svg", {
                    xmlns:
                      "http://www.w3.org/2000/svg",
                    className: "h-5 w-5",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: l.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M4 6h16M4 12h8m-8 6h16",
                    }),
                  }),
                }),
                l.jsx("ul", {
                  tabIndex: 0,
                  className:
                    "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",
                  children: i,
                }),
              ],
            }),
            l.jsx("img", {
              className: "logo -mt-2",
              src: "/logo.png",
              alt: "Techfinna logo",
            }),
          ],
        }),
        l.jsx("div", {
          className: "navbar-end hidden lg:flex",
          children: l.jsx("ul", {
            className:
              "menu menu-horizontal px-1",
            children: i,
          }),
        }),
      ],
    }),
  });
};
var Jm = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  df = ae.createContext && ae.createContext(Jm),
  Fn =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Fn =
          Object.assign ||
          function (e) {
            for (
              var t, n = 1, r = arguments.length;
              n < r;
              n++
            ) {
              t = arguments[n];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(
                  t,
                  i
                ) && (e[i] = t[i]);
            }
            return e;
          }),
        Fn.apply(this, arguments)
      );
    },
  Mx =
    (globalThis && globalThis.__rest) ||
    function (e, t) {
      var n = {};
      for (var r in e)
        Object.prototype.hasOwnProperty.call(
          e,
          r
        ) &&
          t.indexOf(r) < 0 &&
          (n[r] = e[r]);
      if (
        e != null &&
        typeof Object.getOwnPropertySymbols ==
          "function"
      )
        for (
          var i = 0,
            r = Object.getOwnPropertySymbols(e);
          i < r.length;
          i++
        )
          t.indexOf(r[i]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(
              e,
              r[i]
            ) &&
            (n[r[i]] = e[r[i]]);
      return n;
    };
function eh(e) {
  return (
    e &&
    e.map(function (t, n) {
      return ae.createElement(
        t.tag,
        Fn({ key: n }, t.attr),
        eh(t.child)
      );
    })
  );
}
function gn(e) {
  return function (t) {
    return ae.createElement(
      Lx,
      Fn({ attr: Fn({}, e.attr) }, t),
      eh(e.child)
    );
  };
}
function Lx(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      s = e.title,
      o = Mx(e, ["attr", "size", "title"]),
      c = i || n.size || "1em",
      a;
    return (
      n.className && (a = n.className),
      e.className &&
        (a = (a ? a + " " : "") + e.className),
      ae.createElement(
        "svg",
        Fn(
          {
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0",
          },
          n.attr,
          r,
          o,
          {
            className: a,
            style: Fn(
              Fn(
                { color: e.color || n.color },
                n.style
              ),
              e.style
            ),
            height: c,
            width: c,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        s && ae.createElement("title", null, s),
        e.children
      )
    );
  };
  return df !== void 0
    ? ae.createElement(
        df.Consumer,
        null,
        function (n) {
          return t(n);
        }
      )
    : t(Jm);
}
function Ox(e) {
  return gn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z",
        },
      },
    ],
  })(e);
}
function Ax(e) {
  return gn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
      },
    ],
  })(e);
}
function Dx(e) {
  return gn({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
        },
      },
    ],
  })(e);
}
function Ix(e) {
  return gn({
    tag: "svg",
    attr: { viewBox: "0 0 576 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z",
        },
      },
    ],
  })(e);
}
function iu(e) {
  return gn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
        },
      },
    ],
  })(e);
}
function _x(e) {
  return gn({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z",
        },
      },
    ],
  })(e);
}
function zx(e) {
  return gn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
        },
      },
    ],
  })(e);
}
function Rx(e) {
  return gn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z",
        },
      },
    ],
  })(e);
}
function Fx(e) {
  return gn({
    tag: "svg",
    attr: { viewBox: "0 0 640 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z",
        },
      },
    ],
  })(e);
}
const Bx = () => {
    const t = new Date().getFullYear();
    return l.jsx("div", {
      className: "px-10 md:px-20 py-10",
      children: l.jsxs("div", {
        className: "px-2",
        children: [
          l.jsx("div", {
            className: "py-5",
            children: l.jsxs("div", {
              className:
                "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 py-10",
              children: [
                l.jsxs("div", {
                  className:
                    "space-y-2 items-center",
                  children: [
                    l.jsx("h6", {
                      className:
                        "text-black text-[15px] font-extrabold py-3",
                      children: "Products",
                    }),
                    l.jsx("p", {
                      className:
                        "text-[#7f798d] text-[12px]",
                      children: l.jsx(me, {
                        to: "/discodoo",
                        children: "Discodoo",
                      }),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className:
                    "space-y-2 items-center",
                  children: [
                    l.jsx("h6", {
                      className:
                        "text-black text-[15px] font-extrabold py-3",
                      children: "Privacy Policy",
                    }),
                    l.jsx("p", {
                      className:
                        "text-[#7f798d] text-[12px]",
                      children: l.jsx(me, {
                        to: "/privacy",
                        children:
                          "Privacy Policy",
                      }),
                    }),
                    l.jsx("p", {
                      className:
                        "text-[#7f798d] text-[12px]",
                      children: l.jsx(me, {
                        to: "/terms",
                        children:
                          "Terms and Conditions",
                      }),
                    }),
                    l.jsx("p", {
                      className:
                        "text-[#7f798d] text-[12px]",
                      children: l.jsx(me, {
                        to: "/refund",
                        children: "Refund Policy",
                      }),
                    }),
                    l.jsx("p", {
                      className:
                        "text-[#7f798d] text-[12px]",
                      children: l.jsx(me, {
                        to: "/shipping",
                        children:
                          "Shipping Policy",
                      }),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className:
                    "space-y-2 items-center",
                  children: [
                    l.jsx("h6", {
                      className:
                        "text-black text-[15px] font-extrabold py-3",
                      children: "Services",
                    }),
                    l.jsx("p", {
                      className:
                        "text-[#7f798d] text-[12px]",
                      children: l.jsx("a", {
                        href: "/service#customBot",
                        children:
                          "Discord Bot Development",
                      }),
                    }),
                    l.jsx("p", {
                      className:
                        "text-[#7f798d] text-[12px]",
                      children: l.jsx("a", {
                        href: "/service#webService",
                        children:
                          "Website Development",
                      }),
                    }),
                    l.jsx("p", {
                      className:
                        "text-[#7f798d] text-[12px]",
                      children: l.jsx("a", {
                        href: "/service#softService",
                        children:
                          "Software Development",
                      }),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className:
                    "space-y-2 items-center",
                  children: [
                    l.jsx("h6", {
                      className:
                        "text-black text-[15px] font-extrabold py-3",
                      children: "Company",
                    }),
                    l.jsx("p", {
                      className:
                        "text-[#7f798d] text-[12px]",
                      children: l.jsx(me, {
                        to: "/about",
                        children: "About us",
                      }),
                    }),
                    l.jsx("p", {
                      className:
                        "text-[#7f798d] text-[12px]",
                      children: l.jsx("a", {
                        href: "/#testimony",
                        children: "Testimonials",
                      }),
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className:
                    "space-y-2 items-center",
                  children: [
                    l.jsx("h6", {
                      className:
                        "text-black text-[15px] font-extrabold py-3",
                      children: "Resources",
                    }),
                    l.jsx("p", {
                      className:
                        "text-[#7f798d] text-[12px]",
                      children: l.jsx(me, {
                        to: "/contact",
                        children: "Help Center",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
          l.jsxs("div", {
            className:
              "md:flex md:justify-between items-center py-5 space-y-2",
            children: [
              l.jsxs("div", {
                className: "space-y-2",
                children: [
                  l.jsx("h4", {
                    className:
                      "font-bold normal-case text-xl",
                    children: "TechFinna",
                  }),
                  l.jsxs("p", {
                    className:
                      "text-[13px] text-[#7f798d]",
                    children: [
                      "© ",
                      t,
                      " TechFinna. All Rights Reserved.",
                    ],
                  }),
                  l.jsxs("p", {
                    className:
                      "text-[13px] text-[#7f798d]",
                    children: [
                      "TechFinna.com Software Services, IN ",
                      l.jsx("span", {
                        className: "font-normal",
                        children: " # info@",
                      }),
                      "techfinna.com",
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                className:
                  "flex space-x-3 md:pe-10",
                children: [
                  l.jsx(me, {
                    to: "https://www.facebook.com/techfinnacompany",
                    children: l.jsx(Ox, {
                      className: "text-[#7f798d]",
                    }),
                  }),
                  l.jsx(me, {
                    to: "https://www.linkedin.com/company/techfinna/",
                    children: l.jsx(Ax, {
                      className: "text-[#7f798d]",
                    }),
                  }),
                  l.jsx(me, {
                    to: "https://www.youtube.com/@TechFinna",
                    children: l.jsx(Dx, {
                      className: "text-[#7f798d]",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    });
  },
  $x = () =>
    l.jsxs("div", {
      className: "flex flex-col min-h-screen",
      children: [
        l.jsx(Px, {}),
        l.jsx(gx, { className: "flex-grow" }),
        l.jsx(Bx, { className: "mt-auto" }),
      ],
    });
var th = { exports: {} },
  Hx =
    "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Ux = Hx,
  Vx = Ux;
function nh() {}
function rh() {}
rh.resetWarningCache = nh;
var Wx = function () {
  function e(r, i, s, o, c, a) {
    if (a !== Vx) {
      var f = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((f.name = "Invariant Violation"), f);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: rh,
    resetWarningCache: nh,
  };
  return (n.PropTypes = n), n;
};
th.exports = Wx();
var Gx = th.exports;
const Se = si(Gx);
function qx(e) {
  return e &&
    typeof e == "object" &&
    "default" in e
    ? e.default
    : e;
}
var ih = D,
  Yx = qx(ih);
function ff(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Qx(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t);
}
var Kx = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
function Xx(e, t, n) {
  if (typeof e != "function")
    throw new Error(
      "Expected reducePropsToState to be a function."
    );
  if (typeof t != "function")
    throw new Error(
      "Expected handleStateChangeOnClient to be a function."
    );
  if (typeof n < "u" && typeof n != "function")
    throw new Error(
      "Expected mapStateOnServer to either be undefined or a function."
    );
  function r(i) {
    return i.displayName || i.name || "Component";
  }
  return function (s) {
    if (typeof s != "function")
      throw new Error(
        "Expected WrappedComponent to be a React component."
      );
    var o = [],
      c;
    function a() {
      (c = e(
        o.map(function (p) {
          return p.props;
        })
      )),
        f.canUseDOM ? t(c) : n && (c = n(c));
    }
    var f = (function (p) {
      Qx(v, p);
      function v() {
        return p.apply(this, arguments) || this;
      }
      (v.peek = function () {
        return c;
      }),
        (v.rewind = function () {
          if (v.canUseDOM)
            throw new Error(
              "You may only call rewind() on the server. Call peek() to read the current state."
            );
          var j = c;
          return (c = void 0), (o = []), j;
        });
      var w = v.prototype;
      return (
        (w.UNSAFE_componentWillMount =
          function () {
            o.push(this), a();
          }),
        (w.componentDidUpdate = function () {
          a();
        }),
        (w.componentWillUnmount = function () {
          var j = o.indexOf(this);
          o.splice(j, 1), a();
        }),
        (w.render = function () {
          return Yx.createElement(s, this.props);
        }),
        v
      );
    })(ih.PureComponent);
    return (
      ff(
        f,
        "displayName",
        "SideEffect(" + r(s) + ")"
      ),
      ff(f, "canUseDOM", Kx),
      f
    );
  };
}
var Zx = Xx;
const Jx = si(Zx);
var ew = typeof Element < "u",
  tw = typeof Map == "function",
  nw = typeof Set == "function",
  rw =
    typeof ArrayBuffer == "function" &&
    !!ArrayBuffer.isView;
function ho(e, t) {
  if (e === t) return !0;
  if (
    e &&
    t &&
    typeof e == "object" &&
    typeof t == "object"
  ) {
    if (e.constructor !== t.constructor)
      return !1;
    var n, r, i;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length))
        return !1;
      for (r = n; r-- !== 0; )
        if (!ho(e[r], t[r])) return !1;
      return !0;
    }
    var s;
    if (
      tw &&
      e instanceof Map &&
      t instanceof Map
    ) {
      if (e.size !== t.size) return !1;
      for (
        s = e.entries();
        !(r = s.next()).done;

      )
        if (!t.has(r.value[0])) return !1;
      for (
        s = e.entries();
        !(r = s.next()).done;

      )
        if (!ho(r.value[1], t.get(r.value[0])))
          return !1;
      return !0;
    }
    if (
      nw &&
      e instanceof Set &&
      t instanceof Set
    ) {
      if (e.size !== t.size) return !1;
      for (
        s = e.entries();
        !(r = s.next()).done;

      )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (
      rw &&
      ArrayBuffer.isView(e) &&
      ArrayBuffer.isView(t)
    ) {
      if (((n = e.length), n != t.length))
        return !1;
      for (r = n; r-- !== 0; )
        if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return (
        e.source === t.source &&
        e.flags === t.flags
      );
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (
      ((i = Object.keys(e)),
      (n = i.length),
      n !== Object.keys(t).length)
    )
      return !1;
    for (r = n; r-- !== 0; )
      if (
        !Object.prototype.hasOwnProperty.call(
          t,
          i[r]
        )
      )
        return !1;
    if (ew && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (i[r] === "_owner" ||
            i[r] === "__v" ||
            i[r] === "__o") &&
          e.$$typeof
        ) &&
        !ho(e[i[r]], t[i[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var iw = function (t, n) {
  try {
    return ho(t, n);
  } catch (r) {
    if (
      (r.message || "").match(/stack|recursion/i)
    )
      return (
        console.warn(
          "react-fast-compare cannot handle circular refs"
        ),
        !1
      );
    throw r;
  }
};
const sw = si(iw);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var pf = Object.getOwnPropertySymbols,
  ow = Object.prototype.hasOwnProperty,
  lw = Object.prototype.propertyIsEnumerable;
function aw(e) {
  if (e == null)
    throw new TypeError(
      "Object.assign cannot be called with null or undefined"
    );
  return Object(e);
}
function cw() {
  try {
    if (!Object.assign) return !1;
    var e = new String("abc");
    if (
      ((e[5] = "de"),
      Object.getOwnPropertyNames(e)[0] === "5")
    )
      return !1;
    for (var t = {}, n = 0; n < 10; n++)
      t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(
      function (s) {
        return t[s];
      }
    );
    if (r.join("") !== "0123456789") return !1;
    var i = {};
    return (
      "abcdefghijklmnopqrst"
        .split("")
        .forEach(function (s) {
          i[s] = s;
        }),
      Object.keys(Object.assign({}, i)).join(
        ""
      ) === "abcdefghijklmnopqrst"
    );
  } catch {
    return !1;
  }
}
var uw = cw()
  ? Object.assign
  : function (e, t) {
      for (
        var n, r = aw(e), i, s = 1;
        s < arguments.length;
        s++
      ) {
        n = Object(arguments[s]);
        for (var o in n)
          ow.call(n, o) && (r[o] = n[o]);
        if (pf) {
          i = pf(n);
          for (var c = 0; c < i.length; c++)
            lw.call(n, i[c]) &&
              (r[i[c]] = n[i[c]]);
        }
      }
      return r;
    };
const dw = si(uw);
var ar = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes",
  },
  ee = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title",
  };
Object.keys(ee).map(function (e) {
  return ee[e];
});
var Ce = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src",
    TARGET: "target",
  },
  Ho = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabIndex: "tabIndex",
  },
  vs = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS:
      "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
  },
  fw = Object.keys(Ho).reduce(function (e, t) {
    return (e[Ho[t]] = t), e;
  }, {}),
  pw = [ee.NOSCRIPT, ee.SCRIPT, ee.STYLE],
  Bt = "data-react-helmet",
  mw =
    typeof Symbol == "function" &&
    typeof Symbol.iterator == "symbol"
      ? function (e) {
          return typeof e;
        }
      : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        },
  hw = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError(
        "Cannot call a class as a function"
      );
  },
  gw = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return (
        n && e(t.prototype, n), r && e(t, r), t
      );
    };
  })(),
  ct =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(
            n,
            r
          ) && (e[r] = n[r]);
      }
      return e;
    },
  vw = function (e, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError(
        "Super expression must either be null or a function, not " +
          typeof t
      );
    (e.prototype = Object.create(
      t && t.prototype,
      {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      }
    )),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t));
  },
  mf = function (e, t) {
    var n = {};
    for (var r in e)
      t.indexOf(r) >= 0 ||
        (Object.prototype.hasOwnProperty.call(
          e,
          r
        ) &&
          (n[r] = e[r]));
    return n;
  },
  yw = function (e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t &&
      (typeof t == "object" ||
        typeof t == "function")
      ? t
      : e;
  },
  tc = function (t) {
    var n =
      arguments.length > 1 &&
      arguments[1] !== void 0
        ? arguments[1]
        : !0;
    return n === !1
      ? String(t)
      : String(t)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;");
  },
  xw = function (t) {
    var n = Kr(t, ee.TITLE),
      r = Kr(t, vs.TITLE_TEMPLATE);
    if (r && n)
      return r.replace(/%s/g, function () {
        return Array.isArray(n) ? n.join("") : n;
      });
    var i = Kr(t, vs.DEFAULT_TITLE);
    return n || i || void 0;
  },
  ww = function (t) {
    return (
      Kr(t, vs.ON_CHANGE_CLIENT_STATE) ||
      function () {}
    );
  },
  Kl = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[t] < "u";
      })
      .map(function (r) {
        return r[t];
      })
      .reduce(function (r, i) {
        return ct({}, r, i);
      }, {});
  },
  bw = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[ee.BASE] < "u";
      })
      .map(function (r) {
        return r[ee.BASE];
      })
      .reverse()
      .reduce(function (r, i) {
        if (!r.length)
          for (
            var s = Object.keys(i), o = 0;
            o < s.length;
            o++
          ) {
            var c = s[o],
              a = c.toLowerCase();
            if (t.indexOf(a) !== -1 && i[a])
              return r.concat(i);
          }
        return r;
      }, []);
  },
  Oi = function (t, n, r) {
    var i = {};
    return r
      .filter(function (s) {
        return Array.isArray(s[t])
          ? !0
          : (typeof s[t] < "u" &&
              Ew(
                "Helmet: " +
                  t +
                  ' should be of type "Array". Instead found type "' +
                  mw(s[t]) +
                  '"'
              ),
            !1);
      })
      .map(function (s) {
        return s[t];
      })
      .reverse()
      .reduce(function (s, o) {
        var c = {};
        o.filter(function (w) {
          for (
            var b = void 0,
              j = Object.keys(w),
              S = 0;
            S < j.length;
            S++
          ) {
            var T = j[S],
              y = T.toLowerCase();
            n.indexOf(y) !== -1 &&
              !(
                b === Ce.REL &&
                w[b].toLowerCase() === "canonical"
              ) &&
              !(
                y === Ce.REL &&
                w[y].toLowerCase() ===
                  "stylesheet"
              ) &&
              (b = y),
              n.indexOf(T) !== -1 &&
                (T === Ce.INNER_HTML ||
                  T === Ce.CSS_TEXT ||
                  T === Ce.ITEM_PROP) &&
                (b = T);
          }
          if (!b || !w[b]) return !1;
          var h = w[b].toLowerCase();
          return (
            i[b] || (i[b] = {}),
            c[b] || (c[b] = {}),
            i[b][h] ? !1 : ((c[b][h] = !0), !0)
          );
        })
          .reverse()
          .forEach(function (w) {
            return s.push(w);
          });
        for (
          var a = Object.keys(c), f = 0;
          f < a.length;
          f++
        ) {
          var p = a[f],
            v = dw({}, i[p], c[p]);
          i[p] = v;
        }
        return s;
      }, [])
      .reverse();
  },
  Kr = function (t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
      var i = t[r];
      if (i.hasOwnProperty(n)) return i[n];
    }
    return null;
  },
  Sw = function (t) {
    return {
      baseTag: bw([Ce.HREF, Ce.TARGET], t),
      bodyAttributes: Kl(ar.BODY, t),
      defer: Kr(t, vs.DEFER),
      encode: Kr(t, vs.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: Kl(ar.HTML, t),
      linkTags: Oi(ee.LINK, [Ce.REL, Ce.HREF], t),
      metaTags: Oi(
        ee.META,
        [
          Ce.NAME,
          Ce.CHARSET,
          Ce.HTTPEQUIV,
          Ce.PROPERTY,
          Ce.ITEM_PROP,
        ],
        t
      ),
      noscriptTags: Oi(
        ee.NOSCRIPT,
        [Ce.INNER_HTML],
        t
      ),
      onChangeClientState: ww(t),
      scriptTags: Oi(
        ee.SCRIPT,
        [Ce.SRC, Ce.INNER_HTML],
        t
      ),
      styleTags: Oi(ee.STYLE, [Ce.CSS_TEXT], t),
      title: xw(t),
      titleAttributes: Kl(ar.TITLE, t),
    };
  },
  nc = (function () {
    var e = Date.now();
    return function (t) {
      var n = Date.now();
      n - e > 16
        ? ((e = n), t(n))
        : setTimeout(function () {
            nc(t);
          }, 0);
    };
  })(),
  hf = function (t) {
    return clearTimeout(t);
  },
  Cw =
    typeof window < "u"
      ? (window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(
            window
          )) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        nc
      : global.requestAnimationFrame || nc,
  jw =
    typeof window < "u"
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        hf
      : global.cancelAnimationFrame || hf,
  Ew = function (t) {
    return (
      console &&
      typeof console.warn == "function" &&
      console.warn(t)
    );
  },
  Ai = null,
  Tw = function (t) {
    Ai && jw(Ai),
      t.defer
        ? (Ai = Cw(function () {
            gf(t, function () {
              Ai = null;
            });
          }))
        : (gf(t), (Ai = null));
  },
  gf = function (t, n) {
    var r = t.baseTag,
      i = t.bodyAttributes,
      s = t.htmlAttributes,
      o = t.linkTags,
      c = t.metaTags,
      a = t.noscriptTags,
      f = t.onChangeClientState,
      p = t.scriptTags,
      v = t.styleTags,
      w = t.title,
      b = t.titleAttributes;
    rc(ee.BODY, i), rc(ee.HTML, s), kw(w, b);
    var j = {
        baseTag: Nr(ee.BASE, r),
        linkTags: Nr(ee.LINK, o),
        metaTags: Nr(ee.META, c),
        noscriptTags: Nr(ee.NOSCRIPT, a),
        scriptTags: Nr(ee.SCRIPT, p),
        styleTags: Nr(ee.STYLE, v),
      },
      S = {},
      T = {};
    Object.keys(j).forEach(function (y) {
      var h = j[y],
        g = h.newTags,
        x = h.oldTags;
      g.length && (S[y] = g),
        x.length && (T[y] = j[y].oldTags);
    }),
      n && n(),
      f(t, S, T);
  },
  sh = function (t) {
    return Array.isArray(t) ? t.join("") : t;
  },
  kw = function (t, n) {
    typeof t < "u" &&
      document.title !== t &&
      (document.title = sh(t)),
      rc(ee.TITLE, n);
  },
  rc = function (t, n) {
    var r = document.getElementsByTagName(t)[0];
    if (r) {
      for (
        var i = r.getAttribute(Bt),
          s = i ? i.split(",") : [],
          o = [].concat(s),
          c = Object.keys(n),
          a = 0;
        a < c.length;
        a++
      ) {
        var f = c[a],
          p = n[f] || "";
        r.getAttribute(f) !== p &&
          r.setAttribute(f, p),
          s.indexOf(f) === -1 && s.push(f);
        var v = o.indexOf(f);
        v !== -1 && o.splice(v, 1);
      }
      for (var w = o.length - 1; w >= 0; w--)
        r.removeAttribute(o[w]);
      s.length === o.length
        ? r.removeAttribute(Bt)
        : r.getAttribute(Bt) !== c.join(",") &&
          r.setAttribute(Bt, c.join(","));
    }
  },
  Nr = function (t, n) {
    var r =
        document.head ||
        document.querySelector(ee.HEAD),
      i = r.querySelectorAll(t + "[" + Bt + "]"),
      s = Array.prototype.slice.call(i),
      o = [],
      c = void 0;
    return (
      n &&
        n.length &&
        n.forEach(function (a) {
          var f = document.createElement(t);
          for (var p in a)
            if (a.hasOwnProperty(p))
              if (p === Ce.INNER_HTML)
                f.innerHTML = a.innerHTML;
              else if (p === Ce.CSS_TEXT)
                f.styleSheet
                  ? (f.styleSheet.cssText =
                      a.cssText)
                  : f.appendChild(
                      document.createTextNode(
                        a.cssText
                      )
                    );
              else {
                var v =
                  typeof a[p] > "u" ? "" : a[p];
                f.setAttribute(p, v);
              }
          f.setAttribute(Bt, "true"),
            s.some(function (w, b) {
              return (c = b), f.isEqualNode(w);
            })
              ? s.splice(c, 1)
              : o.push(f);
        }),
      s.forEach(function (a) {
        return a.parentNode.removeChild(a);
      }),
      o.forEach(function (a) {
        return r.appendChild(a);
      }),
      { oldTags: s, newTags: o }
    );
  },
  oh = function (t) {
    return Object.keys(t).reduce(function (n, r) {
      var i =
        typeof t[r] < "u"
          ? r + '="' + t[r] + '"'
          : "" + r;
      return n ? n + " " + i : i;
    }, "");
  },
  Nw = function (t, n, r, i) {
    var s = oh(r),
      o = sh(n);
    return s
      ? "<" +
          t +
          " " +
          Bt +
          '="true" ' +
          s +
          ">" +
          tc(o, i) +
          "</" +
          t +
          ">"
      : "<" +
          t +
          " " +
          Bt +
          '="true">' +
          tc(o, i) +
          "</" +
          t +
          ">";
  },
  Pw = function (t, n, r) {
    return n.reduce(function (i, s) {
      var o = Object.keys(s)
          .filter(function (f) {
            return !(
              f === Ce.INNER_HTML ||
              f === Ce.CSS_TEXT
            );
          })
          .reduce(function (f, p) {
            var v =
              typeof s[p] > "u"
                ? p
                : p + '="' + tc(s[p], r) + '"';
            return f ? f + " " + v : v;
          }, ""),
        c = s.innerHTML || s.cssText || "",
        a = pw.indexOf(t) === -1;
      return (
        i +
        "<" +
        t +
        " " +
        Bt +
        '="true" ' +
        o +
        (a ? "/>" : ">" + c + "</" + t + ">")
      );
    }, "");
  },
  lh = function (t) {
    var n =
      arguments.length > 1 &&
      arguments[1] !== void 0
        ? arguments[1]
        : {};
    return Object.keys(t).reduce(function (r, i) {
      return (r[Ho[i] || i] = t[i]), r;
    }, n);
  },
  Mw = function (t) {
    var n =
      arguments.length > 1 &&
      arguments[1] !== void 0
        ? arguments[1]
        : {};
    return Object.keys(t).reduce(function (r, i) {
      return (r[fw[i] || i] = t[i]), r;
    }, n);
  },
  Lw = function (t, n, r) {
    var i,
      s = ((i = { key: n }), (i[Bt] = !0), i),
      o = lh(r, s);
    return [ae.createElement(ee.TITLE, o, n)];
  },
  Ow = function (t, n) {
    return n.map(function (r, i) {
      var s,
        o = ((s = { key: i }), (s[Bt] = !0), s);
      return (
        Object.keys(r).forEach(function (c) {
          var a = Ho[c] || c;
          if (
            a === Ce.INNER_HTML ||
            a === Ce.CSS_TEXT
          ) {
            var f = r.innerHTML || r.cssText;
            o.dangerouslySetInnerHTML = {
              __html: f,
            };
          } else o[a] = r[c];
        }),
        ae.createElement(t, o)
      );
    });
  },
  tn = function (t, n, r) {
    switch (t) {
      case ee.TITLE:
        return {
          toComponent: function () {
            return Lw(
              t,
              n.title,
              n.titleAttributes
            );
          },
          toString: function () {
            return Nw(
              t,
              n.title,
              n.titleAttributes,
              r
            );
          },
        };
      case ar.BODY:
      case ar.HTML:
        return {
          toComponent: function () {
            return lh(n);
          },
          toString: function () {
            return oh(n);
          },
        };
      default:
        return {
          toComponent: function () {
            return Ow(t, n);
          },
          toString: function () {
            return Pw(t, n, r);
          },
        };
    }
  },
  ah = function (t) {
    var n = t.baseTag,
      r = t.bodyAttributes,
      i = t.encode,
      s = t.htmlAttributes,
      o = t.linkTags,
      c = t.metaTags,
      a = t.noscriptTags,
      f = t.scriptTags,
      p = t.styleTags,
      v = t.title,
      w = v === void 0 ? "" : v,
      b = t.titleAttributes;
    return {
      base: tn(ee.BASE, n, i),
      bodyAttributes: tn(ar.BODY, r, i),
      htmlAttributes: tn(ar.HTML, s, i),
      link: tn(ee.LINK, o, i),
      meta: tn(ee.META, c, i),
      noscript: tn(ee.NOSCRIPT, a, i),
      script: tn(ee.SCRIPT, f, i),
      style: tn(ee.STYLE, p, i),
      title: tn(
        ee.TITLE,
        { title: w, titleAttributes: b },
        i
      ),
    };
  },
  Aw = function (t) {
    var n, r;
    return (
      (r = n =
        (function (i) {
          vw(s, i);
          function s() {
            return (
              hw(this, s),
              yw(this, i.apply(this, arguments))
            );
          }
          return (
            (s.prototype.shouldComponentUpdate =
              function (c) {
                return !sw(this.props, c);
              }),
            (s.prototype.mapNestedChildrenToProps =
              function (c, a) {
                if (!a) return null;
                switch (c.type) {
                  case ee.SCRIPT:
                  case ee.NOSCRIPT:
                    return { innerHTML: a };
                  case ee.STYLE:
                    return { cssText: a };
                }
                throw new Error(
                  "<" +
                    c.type +
                    " /> elements are self-closing and can not contain children. Refer to our API for more information."
                );
              }),
            (s.prototype.flattenArrayTypeChildren =
              function (c) {
                var a,
                  f = c.child,
                  p = c.arrayTypeChildren,
                  v = c.newChildProps,
                  w = c.nestedChildren;
                return ct(
                  {},
                  p,
                  ((a = {}),
                  (a[f.type] = [].concat(
                    p[f.type] || [],
                    [
                      ct(
                        {},
                        v,
                        this.mapNestedChildrenToProps(
                          f,
                          w
                        )
                      ),
                    ]
                  )),
                  a)
                );
              }),
            (s.prototype.mapObjectTypeChildren =
              function (c) {
                var a,
                  f,
                  p = c.child,
                  v = c.newProps,
                  w = c.newChildProps,
                  b = c.nestedChildren;
                switch (p.type) {
                  case ee.TITLE:
                    return ct(
                      {},
                      v,
                      ((a = {}),
                      (a[p.type] = b),
                      (a.titleAttributes = ct(
                        {},
                        w
                      )),
                      a)
                    );
                  case ee.BODY:
                    return ct({}, v, {
                      bodyAttributes: ct({}, w),
                    });
                  case ee.HTML:
                    return ct({}, v, {
                      htmlAttributes: ct({}, w),
                    });
                }
                return ct(
                  {},
                  v,
                  ((f = {}),
                  (f[p.type] = ct({}, w)),
                  f)
                );
              }),
            (s.prototype.mapArrayTypeChildrenToProps =
              function (c, a) {
                var f = ct({}, a);
                return (
                  Object.keys(c).forEach(
                    function (p) {
                      var v;
                      f = ct(
                        {},
                        f,
                        ((v = {}),
                        (v[p] = c[p]),
                        v)
                      );
                    }
                  ),
                  f
                );
              }),
            (s.prototype.warnOnInvalidChildren =
              function (c, a) {
                return !0;
              }),
            (s.prototype.mapChildrenToProps =
              function (c, a) {
                var f = this,
                  p = {};
                return (
                  ae.Children.forEach(
                    c,
                    function (v) {
                      if (!(!v || !v.props)) {
                        var w = v.props,
                          b = w.children,
                          j = mf(w, ["children"]),
                          S = Mw(j);
                        switch (
                          (f.warnOnInvalidChildren(
                            v,
                            b
                          ),
                          v.type)
                        ) {
                          case ee.LINK:
                          case ee.META:
                          case ee.NOSCRIPT:
                          case ee.SCRIPT:
                          case ee.STYLE:
                            p =
                              f.flattenArrayTypeChildren(
                                {
                                  child: v,
                                  arrayTypeChildren:
                                    p,
                                  newChildProps:
                                    S,
                                  nestedChildren:
                                    b,
                                }
                              );
                            break;
                          default:
                            a =
                              f.mapObjectTypeChildren(
                                {
                                  child: v,
                                  newProps: a,
                                  newChildProps:
                                    S,
                                  nestedChildren:
                                    b,
                                }
                              );
                            break;
                        }
                      }
                    }
                  ),
                  (a =
                    this.mapArrayTypeChildrenToProps(
                      p,
                      a
                    )),
                  a
                );
              }),
            (s.prototype.render = function () {
              var c = this.props,
                a = c.children,
                f = mf(c, ["children"]),
                p = ct({}, f);
              return (
                a &&
                  (p = this.mapChildrenToProps(
                    a,
                    p
                  )),
                ae.createElement(t, p)
              );
            }),
            gw(s, null, [
              {
                key: "canUseDOM",
                set: function (c) {
                  t.canUseDOM = c;
                },
              },
            ]),
            s
          );
        })(ae.Component)),
      (n.propTypes = {
        base: Se.object,
        bodyAttributes: Se.object,
        children: Se.oneOfType([
          Se.arrayOf(Se.node),
          Se.node,
        ]),
        defaultTitle: Se.string,
        defer: Se.bool,
        encodeSpecialCharacters: Se.bool,
        htmlAttributes: Se.object,
        link: Se.arrayOf(Se.object),
        meta: Se.arrayOf(Se.object),
        noscript: Se.arrayOf(Se.object),
        onChangeClientState: Se.func,
        script: Se.arrayOf(Se.object),
        style: Se.arrayOf(Se.object),
        title: Se.string,
        titleAttributes: Se.object,
        titleTemplate: Se.string,
      }),
      (n.defaultProps = {
        defer: !0,
        encodeSpecialCharacters: !0,
      }),
      (n.peek = t.peek),
      (n.rewind = function () {
        var i = t.rewind();
        return (
          i ||
            (i = ah({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: "",
              titleAttributes: {},
            })),
          i
        );
      }),
      r
    );
  },
  Dw = function () {
    return null;
  },
  Iw = Jx(Sw, Tw, ah)(Dw),
  Hn = Aw(Iw);
Hn.renderStatic = Hn.rewind;
const _w = () =>
    l.jsx("div", {
      children: l.jsx("div", {
        className: "px-3 md:px-20 py-10 md:py-20",
        children: l.jsxs("div", {
          className:
            "px-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
          children: [
            l.jsxs("div", {
              className: "order-2 md:order-1",
              children: [
                l.jsx("h6", {
                  className:
                    "text-[13px] text-[#464154] font-extrabold py-6",
                  children:
                    "Connect  Collaborate  Automate",
                }),
                l.jsx("h1", {
                  className:
                    "text-2xl md:text-4xl font-extrabold text-black",
                  children:
                    "Unlock Seamless Integration between Odoo and Discord with Discodoo",
                }),
                l.jsx("p", {
                  className:
                    "py-6 text-[11px] md:text-[15px] font-light text-[#464154]",
                  children:
                    "At TechFinna, we specialize in empowering businesses with seamless integration and collaboration solutions. Our flagship product, Discodoo, revolutionizes the way you connect Odoo with Discord, streamlining workflows, enhancing communication, and automating tasks. Unlock the power of seamless integration with TechFinna.",
                }),
                l.jsxs("button", {
                  className:
                    "btn bg-black text-white rounded-none hover:bg-black",
                  children: [
                    l.jsx(me, {
                      to: "/discodoo",
                      className: "bg-black",
                      children: "See Products ",
                    }),
                    l.jsx(iu, {
                      className:
                        "bg-black text-white",
                    }),
                  ],
                }),
              ],
            }),
            l.jsx("div", {
              className: "order-1 md:order-2 p-3",
              children: l.jsx("img", {
                className: "",
                src: "images/banner.png",
                alt: "discord cusom bots and integration with odoo",
              }),
            }),
          ],
        }),
      }),
    }),
  zw = () => {
    const [e, t] = D.useState([]);
    return (
      D.useEffect(() => {
        fetch("service.json")
          .then((n) => n.json())
          .then((n) => t(n));
      }, []),
      l.jsxs("div", {
        className:
          "px-3 md:px-20 py-10 md:py-20 text-center",
        children: [
          l.jsx("h1", {
            className:
              "text-2xl md:text-4xl font-extrabold text-black",
            children: "Service We Provide",
          }),
          l.jsx("p", {
            className:
              "py-2 font-light text-[#464154]",
            children:
              "Elevate Your Digital Presence with Our Innovative Solutions",
          }),
          l.jsx("div", {
            className:
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-2",
            children: e.map((n) =>
              l.jsx(
                "div",
                {
                  className:
                    "border p-5 shadow-xl",
                  children: l.jsxs("div", {
                    className:
                      "text-left space-y-3 p-5",
                    children: [
                      l.jsx("div", {
                        className:
                          "w-[80px] p-3 rounded ",
                        children: l.jsx("img", {
                          className: "",
                          src: n.icon,
                          alt: "Techfinna service for IT solutions",
                        }),
                      }),
                      l.jsx("h4", {
                        className:
                          "text-2xl font-bold text-black",
                        children: n.title,
                      }),
                      l.jsx("p", {
                        className:
                          "font-light text-black",
                        children: n.description,
                      }),
                      l.jsx("a", {
                        href: n.href,
                        children: l.jsx(iu, {
                          className: "mt-2",
                        }),
                      }),
                    ],
                  }),
                },
                n.id
              )
            ),
          }),
        ],
      })
    );
  },
  Rw = () =>
    l.jsx("div", {
      children: l.jsx("div", {
        className: "px-3 md:px-20 py-10 md:py-20",
        children: l.jsxs("div", {
          className:
            "px-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
          children: [
            l.jsx("div", {
              className: "",
              children: l.jsx("img", {
                className: "rounded",
                src: "images/company.jpg",
                alt: "techFinna company",
              }),
            }),
            l.jsxs("div", {
              className: "",
              children: [
                l.jsx("h6", {
                  className:
                    "text-[13px] text-[#464154] font-extrabold pb-6",
                  children: "Know Us",
                }),
                l.jsx("h1", {
                  className:
                    "text-2xl md:text-4xl font-extrabold text-black",
                  children:
                    "Accelerating Growth through Automated Solutions",
                }),
                l.jsxs("p", {
                  className:
                    "py-6 text-[11px] md:text-[15px] font-light text-[#464154]",
                  children: [
                    "At Techfinna, we bring the power of automation to your doorstep, enabling you to focus on growth and leave the rest to us. With our innovative solutions and expert team, we streamline your operations, boost productivity, and pave the way for success in the digital age. Experience the Techfinna advantage and unlock your business's true potential today. ",
                    l.jsx(me, {
                      to: "/about",
                      children: "See More...",
                    }),
                  ],
                }),
                l.jsxs("div", {
                  className:
                    "md:flex gap-10 md:gap-5 lg:gap-10",
                  children: [
                    l.jsxs("div", {
                      className:
                        "flex items-center",
                      children: [
                        l.jsx(_x, {
                          className:
                            "w-[50px] h-[50px] me-5 text-black",
                        }),
                        l.jsxs("h5", {
                          className:
                            "text-black lg:text-xl  me-5",
                          children: [
                            "Provide Website ",
                            l.jsx("br", {}),
                            " Development",
                          ],
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className:
                        "flex items-center",
                      children: [
                        l.jsx(Fx, {
                          className:
                            "w-[50px] h-[50px] me-5 text-black",
                        }),
                        l.jsxs("h5", {
                          className:
                            "text-black lg:text-xl",
                          children: [
                            "Custom Bots ",
                            l.jsx("br", {}),
                            " for Clients",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    });
function vf(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function su(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : vf(t[n]) &&
          vf(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          su(e[n], t[n]);
    });
}
const ch = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function en() {
  const e = typeof document < "u" ? document : {};
  return su(e, ch), e;
}
const Fw = {
  document: ch,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: {
    replaceState() {},
    pushState() {},
    go() {},
    back() {},
  },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u"
      ? (e(), null)
      : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function jt() {
  const e = typeof window < "u" ? window : {};
  return su(e, Fw), e;
}
function Bw(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function ic(e, t) {
  return (
    t === void 0 && (t = 0), setTimeout(e, t)
  );
}
function cr() {
  return Date.now();
}
function $w(e) {
  const t = jt();
  let n;
  return (
    t.getComputedStyle &&
      (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function Hw(e, t) {
  t === void 0 && (t = "x");
  const n = jt();
  let r, i, s;
  const o = $w(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((c) => c.replace(",", "."))
            .join(", ")),
        (s = new n.WebKitCSSMatrix(
          i === "none" ? "" : i
        )))
      : ((s =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace(
              "translate(",
              "matrix(1, 0, 0, 1,"
            )),
        (r = s.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = s.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = s.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function Js(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString
      .call(e)
      .slice(8, -1) === "Object"
  );
}
function Uw(e) {
  return typeof window < "u" &&
    typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e &&
        (e.nodeType === 1 || e.nodeType === 11);
}
function yt() {
  const e = Object(
      arguments.length <= 0
        ? void 0
        : arguments[0]
    ),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r =
      n < 0 || arguments.length <= n
        ? void 0
        : arguments[n];
    if (r != null && !Uw(r)) {
      const i = Object.keys(Object(r)).filter(
        (s) => t.indexOf(s) < 0
      );
      for (
        let s = 0, o = i.length;
        s < o;
        s += 1
      ) {
        const c = i[s],
          a = Object.getOwnPropertyDescriptor(
            r,
            c
          );
        a !== void 0 &&
          a.enumerable &&
          (Js(e[c]) && Js(r[c])
            ? r[c].__swiper__
              ? (e[c] = r[c])
              : yt(e[c], r[c])
            : !Js(e[c]) && Js(r[c])
            ? ((e[c] = {}),
              r[c].__swiper__
                ? (e[c] = r[c])
                : yt(e[c], r[c]))
            : (e[c] = r[c]));
      }
    }
  }
  return e;
}
function eo(e, t, n) {
  e.style.setProperty(t, n);
}
function uh(e) {
  let {
    swiper: t,
    targetPosition: n,
    side: r,
  } = e;
  const i = jt(),
    s = -t.translate;
  let o = null,
    c;
  const a = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const f = n > s ? "next" : "prev",
    p = (w, b) =>
      (f === "next" && w >= b) ||
      (f === "prev" && w <= b),
    v = () => {
      (c = new Date().getTime()),
        o === null && (o = c);
      const w = Math.max(
          Math.min((c - o) / a, 1),
          0
        ),
        b = 0.5 - Math.cos(w * Math.PI) / 2;
      let j = s + b * (n - s);
      if (
        (p(j, n) && (j = n),
        t.wrapperEl.scrollTo({ [r]: j }),
        p(j, n))
      ) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""),
              t.wrapperEl.scrollTo({ [r]: j });
          }),
          i.cancelAnimationFrame(
            t.cssModeFrameID
          );
        return;
      }
      t.cssModeFrameID =
        i.requestAnimationFrame(v);
    };
  v();
}
function Xt(e, t) {
  return (
    t === void 0 && (t = ""),
    [...e.children].filter((n) => n.matches(t))
  );
}
function dh(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return (
    n.classList.add(
      ...(Array.isArray(t) ? t : [t])
    ),
    n
  );
}
function Vw(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r),
      (e = r);
  }
  return n;
}
function Ww(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r),
      (e = r);
  }
  return n;
}
function Pn(e, t) {
  return jt()
    .getComputedStyle(e, null)
    .getPropertyValue(t);
}
function Uo(e) {
  let t = e,
    n;
  if (t) {
    for (
      n = 0;
      (t = t.previousSibling) !== null;

    )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function fh(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; )
    t ? r.matches(t) && n.push(r) : n.push(r),
      (r = r.parentElement);
  return n;
}
function Xl(e, t) {
  function n(r) {
    r.target === e &&
      (t.call(e, r),
      e.removeEventListener("transitionend", n));
  }
  t && e.addEventListener("transitionend", n);
}
function sc(e, t, n) {
  const r = jt();
  return n
    ? e[
        t === "width"
          ? "offsetWidth"
          : "offsetHeight"
      ] +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(
              t === "width"
                ? "margin-right"
                : "margin-top"
            )
        ) +
        parseFloat(
          r
            .getComputedStyle(e, null)
            .getPropertyValue(
              t === "width"
                ? "margin-left"
                : "margin-bottom"
            )
        )
    : e.offsetWidth;
}
let Zl;
function Gw() {
  const e = jt(),
    t = en();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch &&
        t instanceof e.DocumentTouch)
    ),
  };
}
function ph() {
  return Zl || (Zl = Gw()), Zl;
}
let Jl;
function qw(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = ph(),
    r = jt(),
    i = r.navigator.platform,
    s = t || r.navigator.userAgent,
    o = { ios: !1, android: !1 },
    c = r.screen.width,
    a = r.screen.height,
    f = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let p = s.match(/(iPad).*OS\s([\d_]+)/);
  const v = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    w =
      !p && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    b = i === "Win32";
  let j = i === "MacIntel";
  const S = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !p &&
      j &&
      n.touch &&
      S.indexOf(`${c}x${a}`) >= 0 &&
      ((p = s.match(/(Version)\/([\d.]+)/)),
      p || (p = [0, 1, "13_0_0"]),
      (j = !1)),
    f &&
      !b &&
      ((o.os = "android"), (o.android = !0)),
    (p || w || v) &&
      ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function Yw(e) {
  return (
    e === void 0 && (e = {}),
    Jl || (Jl = qw(e)),
    Jl
  );
}
let ea;
function Qw() {
  const e = jt();
  let t = !1;
  function n() {
    const r = e.navigator.userAgent.toLowerCase();
    return (
      r.indexOf("safari") >= 0 &&
      r.indexOf("chrome") < 0 &&
      r.indexOf("android") < 0
    );
  }
  if (n()) {
    const r = String(e.navigator.userAgent);
    if (r.includes("Version/")) {
      const [i, s] = r
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((o) => Number(o));
      t = i < 16 || (i === 16 && s < 2);
    }
  }
  return {
    isSafari: t || n(),
    needPerspectiveFix: t,
    isWebView:
      /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        e.navigator.userAgent
      ),
  };
}
function Kw() {
  return ea || (ea = Qw()), ea;
}
function Xw(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = jt();
  let s = null,
    o = null;
  const c = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        (r("beforeResize"), r("resize"));
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((s = new ResizeObserver((v) => {
          o = i.requestAnimationFrame(() => {
            const { width: w, height: b } = t;
            let j = w,
              S = b;
            v.forEach((T) => {
              let {
                contentBoxSize: y,
                contentRect: h,
                target: g,
              } = T;
              (g && g !== t.el) ||
                ((j = h
                  ? h.width
                  : (y[0] || y).inlineSize),
                (S = h
                  ? h.height
                  : (y[0] || y).blockSize));
            }),
              (j !== w || S !== b) && c();
          });
        })),
        s.observe(t.el));
    },
    f = () => {
      o && i.cancelAnimationFrame(o),
        s &&
          s.unobserve &&
          t.el &&
          (s.unobserve(t.el), (s = null));
    },
    p = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        r("orientationchange");
    };
  n("init", () => {
    if (
      t.params.resizeObserver &&
      typeof i.ResizeObserver < "u"
    ) {
      a();
      return;
    }
    i.addEventListener("resize", c),
      i.addEventListener("orientationchange", p);
  }),
    n("destroy", () => {
      f(),
        i.removeEventListener("resize", c),
        i.removeEventListener(
          "orientationchange",
          p
        );
    });
}
function Zw(e) {
  let {
    swiper: t,
    extendParams: n,
    on: r,
    emit: i,
  } = e;
  const s = [],
    o = jt(),
    c = function (p, v) {
      v === void 0 && (v = {});
      const w =
          o.MutationObserver ||
          o.WebkitMutationObserver,
        b = new w((j) => {
          if (t.__preventObserver__) return;
          if (j.length === 1) {
            i("observerUpdate", j[0]);
            return;
          }
          const S = function () {
            i("observerUpdate", j[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(S)
            : o.setTimeout(S, 0);
        });
      b.observe(p, {
        attributes:
          typeof v.attributes > "u"
            ? !0
            : v.attributes,
        childList:
          typeof v.childList > "u"
            ? !0
            : v.childList,
        characterData:
          typeof v.characterData > "u"
            ? !0
            : v.characterData,
      }),
        s.push(b);
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const p = fh(t.el);
          for (let v = 0; v < p.length; v += 1)
            c(p[v]);
        }
        c(t.el, {
          childList:
            t.params.observeSlideChildren,
        }),
          c(t.wrapperEl, { attributes: !1 });
      }
    },
    f = () => {
      s.forEach((p) => {
        p.disconnect();
      }),
        s.splice(0, s.length);
    };
  n({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1,
  }),
    r("init", a),
    r("destroy", f);
}
var Jw = {
  on(e, t, n) {
    const r = this;
    if (
      !r.eventsListeners ||
      r.destroyed ||
      typeof t != "function"
    )
      return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((s) => {
        r.eventsListeners[s] ||
          (r.eventsListeners[s] = []),
          r.eventsListeners[s][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (
      !r.eventsListeners ||
      r.destroyed ||
      typeof t != "function"
    )
      return r;
    function i() {
      r.off(e, i),
        i.__emitterProxy &&
          delete i.__emitterProxy;
      for (
        var s = arguments.length,
          o = new Array(s),
          c = 0;
        c < s;
        c++
      )
        o[c] = arguments[c];
      t.apply(r, o);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (
      !n.eventsListeners ||
      n.destroyed ||
      typeof e != "function"
    )
      return n;
    const r = t ? "unshift" : "push";
    return (
      n.eventsAnyListeners.indexOf(e) < 0 &&
        n.eventsAnyListeners[r](e),
      n
    );
  },
  offAny(e) {
    const t = this;
    if (
      !t.eventsListeners ||
      t.destroyed ||
      !t.eventsAnyListeners
    )
      return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return (
      n >= 0 && t.eventsAnyListeners.splice(n, 1),
      t
    );
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach(
                (i, s) => {
                  (i === t ||
                    (i.__emitterProxy &&
                      i.__emitterProxy === t)) &&
                    n.eventsListeners[r].splice(
                      s,
                      1
                    );
                }
              );
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (
      !e.eventsListeners ||
      e.destroyed ||
      !e.eventsListeners
    )
      return e;
    let t, n, r;
    for (
      var i = arguments.length,
        s = new Array(i),
        o = 0;
      o < i;
      o++
    )
      s[o] = arguments[o];
    return (
      typeof s[0] == "string" ||
      Array.isArray(s[0])
        ? ((t = s[0]),
          (n = s.slice(1, s.length)),
          (r = e))
        : ((t = s[0].events),
          (n = s[0].data),
          (r = s[0].context || e)),
      n.unshift(r),
      (Array.isArray(t)
        ? t
        : t.split(" ")
      ).forEach((a) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((f) => {
            f.apply(r, [a, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[a] &&
            e.eventsListeners[a].forEach((f) => {
              f.apply(r, n);
            });
      }),
      e
    );
  },
};
function e2() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" &&
  e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" &&
    e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !(
      (t === 0 && e.isHorizontal()) ||
      (n === 0 && e.isVertical())
    ) &&
      ((t =
        t -
        parseInt(Pn(r, "padding-left") || 0, 10) -
        parseInt(
          Pn(r, "padding-right") || 0,
          10
        )),
      (n =
        n -
        parseInt(Pn(r, "padding-top") || 0, 10) -
        parseInt(
          Pn(r, "padding-bottom") || 0,
          10
        )),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function t2() {
  const e = this;
  function t(I) {
    return e.isHorizontal()
      ? I
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[I];
  }
  function n(I, F) {
    return parseFloat(
      I.getPropertyValue(t(F)) || 0
    );
  }
  const r = e.params,
    {
      wrapperEl: i,
      slidesEl: s,
      size: o,
      rtlTranslate: c,
      wrongRTL: a,
    } = e,
    f = e.virtual && r.virtual.enabled,
    p = f
      ? e.virtual.slides.length
      : e.slides.length,
    v = Xt(
      s,
      `.${e.params.slideClass}, swiper-slide`
    ),
    w = f ? e.virtual.slides.length : v.length;
  let b = [];
  const j = [],
    S = [];
  let T = r.slidesOffsetBefore;
  typeof T == "function" &&
    (T = r.slidesOffsetBefore.call(e));
  let y = r.slidesOffsetAfter;
  typeof y == "function" &&
    (y = r.slidesOffsetAfter.call(e));
  const h = e.snapGrid.length,
    g = e.slidesGrid.length;
  let x = r.spaceBetween,
    E = -T,
    k = 0,
    N = 0;
  if (typeof o > "u") return;
  typeof x == "string" && x.indexOf("%") >= 0
    ? (x =
        (parseFloat(x.replace("%", "")) / 100) *
        o)
    : typeof x == "string" && (x = parseFloat(x)),
    (e.virtualSize = -x),
    v.forEach((I) => {
      c
        ? (I.style.marginLeft = "")
        : (I.style.marginRight = ""),
        (I.style.marginBottom = ""),
        (I.style.marginTop = "");
    }),
    r.centeredSlides &&
      r.cssMode &&
      (eo(
        i,
        "--swiper-centered-offset-before",
        ""
      ),
      eo(
        i,
        "--swiper-centered-offset-after",
        ""
      ));
  const A = r.grid && r.grid.rows > 1 && e.grid;
  A && e.grid.initSlides(w);
  let P;
  const $ =
    r.slidesPerView === "auto" &&
    r.breakpoints &&
    Object.keys(r.breakpoints).filter(
      (I) =>
        typeof r.breakpoints[I].slidesPerView <
        "u"
    ).length > 0;
  for (let I = 0; I < w; I += 1) {
    P = 0;
    let F;
    if (
      (v[I] && (F = v[I]),
      A && e.grid.updateSlide(I, F, w, t),
      !(v[I] && Pn(F, "display") === "none"))
    ) {
      if (r.slidesPerView === "auto") {
        $ && (v[I].style[t("width")] = "");
        const U = getComputedStyle(F),
          Q = F.style.transform,
          te = F.style.webkitTransform;
        if (
          (Q && (F.style.transform = "none"),
          te &&
            (F.style.webkitTransform = "none"),
          r.roundLengths)
        )
          P = e.isHorizontal()
            ? sc(F, "width", !0)
            : sc(F, "height", !0);
        else {
          const pe = n(U, "width"),
            K = n(U, "padding-left"),
            z = n(U, "padding-right"),
            B = n(U, "margin-left"),
            G = n(U, "margin-right"),
            oe = U.getPropertyValue("box-sizing");
          if (oe && oe === "border-box")
            P = pe + B + G;
          else {
            const {
              clientWidth: he,
              offsetWidth: Vt,
            } = F;
            P = pe + K + z + B + G + (Vt - he);
          }
        }
        Q && (F.style.transform = Q),
          te && (F.style.webkitTransform = te),
          r.roundLengths && (P = Math.floor(P));
      } else
        (P =
          (o - (r.slidesPerView - 1) * x) /
          r.slidesPerView),
          r.roundLengths && (P = Math.floor(P)),
          v[I] &&
            (v[I].style[t("width")] = `${P}px`);
      v[I] && (v[I].swiperSlideSize = P),
        S.push(P),
        r.centeredSlides
          ? ((E = E + P / 2 + k / 2 + x),
            k === 0 &&
              I !== 0 &&
              (E = E - o / 2 - x),
            I === 0 && (E = E - o / 2 - x),
            Math.abs(E) < 1 / 1e3 && (E = 0),
            r.roundLengths && (E = Math.floor(E)),
            N % r.slidesPerGroup === 0 &&
              b.push(E),
            j.push(E))
          : (r.roundLengths &&
              (E = Math.floor(E)),
            (N -
              Math.min(
                e.params.slidesPerGroupSkip,
                N
              )) %
              e.params.slidesPerGroup ===
              0 && b.push(E),
            j.push(E),
            (E = E + P + x)),
        (e.virtualSize += P + x),
        (k = P),
        (N += 1);
    }
  }
  if (
    ((e.virtualSize =
      Math.max(e.virtualSize, o) + y),
    c &&
      a &&
      (r.effect === "slide" ||
        r.effect === "coverflow") &&
      (i.style.width = `${e.virtualSize + x}px`),
    r.setWrapperSize &&
      (i.style[t("width")] = `${
        e.virtualSize + x
      }px`),
    A && e.grid.updateWrapperSize(P, b, t),
    !r.centeredSlides)
  ) {
    const I = [];
    for (let F = 0; F < b.length; F += 1) {
      let U = b[F];
      r.roundLengths && (U = Math.floor(U)),
        b[F] <= e.virtualSize - o && I.push(U);
    }
    (b = I),
      Math.floor(e.virtualSize - o) -
        Math.floor(b[b.length - 1]) >
        1 && b.push(e.virtualSize - o);
  }
  if (f && r.loop) {
    const I = S[0] + x;
    if (r.slidesPerGroup > 1) {
      const F = Math.ceil(
          (e.virtual.slidesBefore +
            e.virtual.slidesAfter) /
            r.slidesPerGroup
        ),
        U = I * r.slidesPerGroup;
      for (let Q = 0; Q < F; Q += 1)
        b.push(b[b.length - 1] + U);
    }
    for (
      let F = 0;
      F <
      e.virtual.slidesBefore +
        e.virtual.slidesAfter;
      F += 1
    )
      r.slidesPerGroup === 1 &&
        b.push(b[b.length - 1] + I),
        j.push(j[j.length - 1] + I),
        (e.virtualSize += I);
  }
  if ((b.length === 0 && (b = [0]), x !== 0)) {
    const I =
      e.isHorizontal() && c
        ? "marginLeft"
        : t("marginRight");
    v.filter((F, U) =>
      !r.cssMode || r.loop
        ? !0
        : U !== v.length - 1
    ).forEach((F) => {
      F.style[I] = `${x}px`;
    });
  }
  if (
    r.centeredSlides &&
    r.centeredSlidesBounds
  ) {
    let I = 0;
    S.forEach((U) => {
      I += U + (x || 0);
    }),
      (I -= x);
    const F = I - o;
    b = b.map((U) =>
      U <= 0 ? -T : U > F ? F + y : U
    );
  }
  if (r.centerInsufficientSlides) {
    let I = 0;
    if (
      (S.forEach((F) => {
        I += F + (x || 0);
      }),
      (I -= x),
      I < o)
    ) {
      const F = (o - I) / 2;
      b.forEach((U, Q) => {
        b[Q] = U - F;
      }),
        j.forEach((U, Q) => {
          j[Q] = U + F;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: v,
      snapGrid: b,
      slidesGrid: j,
      slidesSizesGrid: S,
    }),
    r.centeredSlides &&
      r.cssMode &&
      !r.centeredSlidesBounds)
  ) {
    eo(
      i,
      "--swiper-centered-offset-before",
      `${-b[0]}px`
    ),
      eo(
        i,
        "--swiper-centered-offset-after",
        `${e.size / 2 - S[S.length - 1] / 2}px`
      );
    const I = -e.snapGrid[0],
      F = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((U) => U + I)),
      (e.slidesGrid = e.slidesGrid.map(
        (U) => U + F
      ));
  }
  if (
    (w !== p && e.emit("slidesLengthChange"),
    b.length !== h &&
      (e.params.watchOverflow &&
        e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    j.length !== g &&
      e.emit("slidesGridLengthChange"),
    r.watchSlidesProgress &&
      e.updateSlidesOffset(),
    !f &&
      !r.cssMode &&
      (r.effect === "slide" ||
        r.effect === "fade"))
  ) {
    const I = `${r.containerModifierClass}backface-hidden`,
      F = e.el.classList.contains(I);
    w <= r.maxBackfaceHiddenSlides
      ? F || e.el.classList.add(I)
      : F && e.el.classList.remove(I);
  }
}
function n2(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    s;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const o = (c) =>
    r
      ? t.slides[t.getSlideIndexByData(c)]
      : t.slides[c];
  if (
    t.params.slidesPerView !== "auto" &&
    t.params.slidesPerView > 1
  )
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((c) => {
        n.push(c);
      });
    else
      for (
        s = 0;
        s < Math.ceil(t.params.slidesPerView);
        s += 1
      ) {
        const c = t.activeIndex + s;
        if (c > t.slides.length && !r) break;
        n.push(o(c));
      }
  else n.push(o(t.activeIndex));
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < "u") {
      const c = n[s].offsetHeight;
      i = c > i ? c : i;
    }
  (i || i === 0) &&
    (t.wrapperEl.style.height = `${i}px`);
}
function r2() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal()
        ? t[r].offsetLeft
        : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
function i2(e) {
  e === void 0 &&
    (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    {
      slides: r,
      rtlTranslate: i,
      snapGrid: s,
    } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" &&
    t.updateSlidesOffset();
  let o = -e;
  i && (o = e),
    r.forEach((a) => {
      a.classList.remove(n.slideVisibleClass);
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = []);
  let c = n.spaceBetween;
  typeof c == "string" && c.indexOf("%") >= 0
    ? (c =
        (parseFloat(c.replace("%", "")) / 100) *
        t.size)
    : typeof c == "string" && (c = parseFloat(c));
  for (let a = 0; a < r.length; a += 1) {
    const f = r[a];
    let p = f.swiperSlideOffset;
    n.cssMode &&
      n.centeredSlides &&
      (p -= r[0].swiperSlideOffset);
    const v =
        (o +
          (n.centeredSlides
            ? t.minTranslate()
            : 0) -
          p) /
        (f.swiperSlideSize + c),
      w =
        (o -
          s[0] +
          (n.centeredSlides
            ? t.minTranslate()
            : 0) -
          p) /
        (f.swiperSlideSize + c),
      b = -(o - p),
      j = b + t.slidesSizesGrid[a];
    ((b >= 0 && b < t.size - 1) ||
      (j > 1 && j <= t.size) ||
      (b <= 0 && j >= t.size)) &&
      (t.visibleSlides.push(f),
      t.visibleSlidesIndexes.push(a),
      r[a].classList.add(n.slideVisibleClass)),
      (f.progress = i ? -v : v),
      (f.originalProgress = i ? -w : w);
  }
}
function s2(e) {
  const t = this;
  if (typeof e > "u") {
    const p = t.rtlTranslate ? -1 : 1;
    e =
      (t && t.translate && t.translate * p) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let {
    progress: i,
    isBeginning: s,
    isEnd: o,
    progressLoop: c,
  } = t;
  const a = s,
    f = o;
  if (r === 0) (i = 0), (s = !0), (o = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const p = Math.abs(e - t.minTranslate()) < 1,
      v = Math.abs(e - t.maxTranslate()) < 1;
    (s = p || i <= 0),
      (o = v || i >= 1),
      p && (i = 0),
      v && (i = 1);
  }
  if (n.loop) {
    const p = t.getSlideIndexByData(0),
      v = t.getSlideIndexByData(
        t.slides.length - 1
      ),
      w = t.slidesGrid[p],
      b = t.slidesGrid[v],
      j = t.slidesGrid[t.slidesGrid.length - 1],
      S = Math.abs(e);
    S >= w
      ? (c = (S - w) / j)
      : (c = (S + j - b) / j),
      c > 1 && (c -= 1);
  }
  Object.assign(t, {
    progress: i,
    progressLoop: c,
    isBeginning: s,
    isEnd: o,
  }),
    (n.watchSlidesProgress ||
      (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    s && !a && t.emit("reachBeginning toEdge"),
    o && !f && t.emit("reachEnd toEdge"),
    ((a && !s) || (f && !o)) &&
      t.emit("fromEdge"),
    t.emit("progress", i);
}
function o2() {
  const e = this,
    {
      slides: t,
      params: n,
      slidesEl: r,
      activeIndex: i,
    } = e,
    s = e.virtual && n.virtual.enabled,
    o = (a) =>
      Xt(
        r,
        `.${n.slideClass}${a}, swiper-slide${a}`
      )[0];
  t.forEach((a) => {
    a.classList.remove(
      n.slideActiveClass,
      n.slideNextClass,
      n.slidePrevClass
    );
  });
  let c;
  if (s)
    if (n.loop) {
      let a = i - e.virtual.slidesBefore;
      a < 0 && (a = e.virtual.slides.length + a),
        a >= e.virtual.slides.length &&
          (a -= e.virtual.slides.length),
        (c = o(
          `[data-swiper-slide-index="${a}"]`
        ));
    } else
      c = o(`[data-swiper-slide-index="${i}"]`);
  else c = t[i];
  if (c) {
    c.classList.add(n.slideActiveClass);
    let a = Ww(
      c,
      `.${n.slideClass}, swiper-slide`
    )[0];
    n.loop && !a && (a = t[0]),
      a && a.classList.add(n.slideNextClass);
    let f = Vw(
      c,
      `.${n.slideClass}, swiper-slide`
    )[0];
    n.loop && !f === 0 && (f = t[t.length - 1]),
      f && f.classList.add(n.slidePrevClass);
  }
  e.emitSlidesClasses();
}
const go = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () =>
        e.isElement
          ? "swiper-slide"
          : `.${e.params.slideClass}`,
      r = t.closest(n());
    if (r) {
      const i = r.querySelector(
        `.${e.params.lazyPreloaderClass}`
      );
      i && i.remove();
    }
  },
  ta = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector(
      '[loading="lazy"]'
    );
    n && n.removeAttribute("loading");
  },
  oc = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const o = i,
        c = [o - t];
      c.push(
        ...Array.from({ length: t }).map(
          (a, f) => o + r + f
        )
      ),
        e.slides.forEach((a, f) => {
          c.includes(a.column) && ta(e, f);
        });
      return;
    }
    const s = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let o = i - t; o <= s + t; o += 1) {
        const c = ((o % n) + n) % n;
        (c < i || c > s) && ta(e, c);
      }
    else
      for (
        let o = Math.max(i - t, 0);
        o <= Math.min(s + t, n - 1);
        o += 1
      )
        o !== i && (o > s || o < i) && ta(e, o);
  };
function l2(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate
      ? e.translate
      : -e.translate;
  let i;
  for (let s = 0; s < t.length; s += 1)
    typeof t[s + 1] < "u"
      ? r >= t[s] &&
        r < t[s + 1] - (t[s + 1] - t[s]) / 2
        ? (i = s)
        : r >= t[s] && r < t[s + 1] && (i = s + 1)
      : r >= t[s] && (i = s);
  return (
    n.normalizeSlideIndex &&
      (i < 0 || typeof i > "u") &&
      (i = 0),
    i
  );
}
function a2(e) {
  const t = this,
    n = t.rtlTranslate
      ? t.translate
      : -t.translate,
    {
      snapGrid: r,
      params: i,
      activeIndex: s,
      realIndex: o,
      snapIndex: c,
    } = t;
  let a = e,
    f;
  const p = (w) => {
    let b = w - t.virtual.slidesBefore;
    return (
      b < 0 && (b = t.virtual.slides.length + b),
      b >= t.virtual.slides.length &&
        (b -= t.virtual.slides.length),
      b
    );
  };
  if (
    (typeof a > "u" && (a = l2(t)),
    r.indexOf(n) >= 0)
  )
    f = r.indexOf(n);
  else {
    const w = Math.min(i.slidesPerGroupSkip, a);
    f =
      w + Math.floor((a - w) / i.slidesPerGroup);
  }
  if (
    (f >= r.length && (f = r.length - 1), a === s)
  ) {
    f !== c &&
      ((t.snapIndex = f),
      t.emit("snapIndexChange")),
      t.params.loop &&
        t.virtual &&
        t.params.virtual.enabled &&
        (t.realIndex = p(a));
    return;
  }
  let v;
  t.virtual && i.virtual.enabled && i.loop
    ? (v = p(a))
    : t.slides[a]
    ? (v = parseInt(
        t.slides[a].getAttribute(
          "data-swiper-slide-index"
        ) || a,
        10
      ))
    : (v = a),
    Object.assign(t, {
      previousSnapIndex: c,
      snapIndex: f,
      previousRealIndex: o,
      realIndex: v,
      previousIndex: s,
      activeIndex: a,
    }),
    t.initialized && oc(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    o !== v && t.emit("realIndexChange"),
    (t.initialized ||
      t.params.runCallbacksOnInit) &&
      t.emit("slideChange");
}
function c2(e) {
  const t = this,
    n = t.params,
    r = e.closest(
      `.${n.slideClass}, swiper-slide`
    );
  let i = !1,
    s;
  if (r) {
    for (let o = 0; o < t.slides.length; o += 1)
      if (t.slides[o] === r) {
        (i = !0), (s = o);
        break;
      }
  }
  if (r && i)
    (t.clickedSlide = r),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(
            r.getAttribute(
              "data-swiper-slide-index"
            ),
            10
          ))
        : (t.clickedIndex = s);
  else {
    (t.clickedSlide = void 0),
      (t.clickedIndex = void 0);
    return;
  }
  n.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide();
}
var u2 = {
  updateSize: e2,
  updateSlides: t2,
  updateAutoHeight: n2,
  updateSlidesOffset: r2,
  updateSlidesProgress: i2,
  updateProgress: s2,
  updateSlidesClasses: o2,
  updateActiveIndex: a2,
  updateClickedSlide: c2,
};
function d2(e) {
  e === void 0 &&
    (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    {
      params: n,
      rtlTranslate: r,
      translate: i,
      wrapperEl: s,
    } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let o = Hw(s, e);
  return (
    (o += t.cssOverflowAdjustment()),
    r && (o = -o),
    o || 0
  );
}
function f2(e, t) {
  const n = this,
    {
      rtlTranslate: r,
      params: i,
      wrapperEl: s,
      progress: o,
    } = n;
  let c = 0,
    a = 0;
  const f = 0;
  n.isHorizontal() ? (c = r ? -e : e) : (a = e),
    i.roundLengths &&
      ((c = Math.floor(c)), (a = Math.floor(a))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? c : a),
    i.cssMode
      ? (s[
          n.isHorizontal()
            ? "scrollLeft"
            : "scrollTop"
        ] = n.isHorizontal() ? -c : -a)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (c -= n.cssOverflowAdjustment())
          : (a -= n.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${c}px, ${a}px, ${f}px)`));
  let p;
  const v = n.maxTranslate() - n.minTranslate();
  v === 0
    ? (p = 0)
    : (p = (e - n.minTranslate()) / v),
    p !== o && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function p2() {
  return -this.snapGrid[0];
}
function m2() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function h2(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const s = this,
    { params: o, wrapperEl: c } = s;
  if (
    s.animating &&
    o.preventInteractionOnTransition
  )
    return !1;
  const a = s.minTranslate(),
    f = s.maxTranslate();
  let p;
  if (
    (r && e > a
      ? (p = a)
      : r && e < f
      ? (p = f)
      : (p = e),
    s.updateProgress(p),
    o.cssMode)
  ) {
    const v = s.isHorizontal();
    if (t === 0)
      c[v ? "scrollLeft" : "scrollTop"] = -p;
    else {
      if (!s.support.smoothScroll)
        return (
          uh({
            swiper: s,
            targetPosition: -p,
            side: v ? "left" : "top",
          }),
          !0
        );
      c.scrollTo({
        [v ? "left" : "top"]: -p,
        behavior: "smooth",
      });
    }
    return !0;
  }
  return (
    t === 0
      ? (s.setTransition(0),
        s.setTranslate(p),
        n &&
          (s.emit("beforeTransitionStart", t, i),
          s.emit("transitionEnd")))
      : (s.setTransition(t),
        s.setTranslate(p),
        n &&
          (s.emit("beforeTransitionStart", t, i),
          s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd =
              function (w) {
                !s ||
                  s.destroyed ||
                  (w.target === this &&
                    (s.wrapperEl.removeEventListener(
                      "transitionend",
                      s.onTranslateToWrapperTransitionEnd
                    ),
                    (s.onTranslateToWrapperTransitionEnd =
                      null),
                    delete s.onTranslateToWrapperTransitionEnd,
                    n &&
                      s.emit("transitionEnd")));
              }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var g2 = {
  getTranslate: d2,
  setTranslate: f2,
  minTranslate: p2,
  maxTranslate: m2,
  translateTo: h2,
};
function v2(e, t) {
  const n = this;
  n.params.cssMode ||
    (n.wrapperEl.style.transitionDuration = `${e}ms`),
    n.emit("setTransition", e, t);
}
function mh(e) {
  let {
    swiper: t,
    runCallbacks: n,
    direction: r,
    step: i,
  } = e;
  const { activeIndex: s, previousIndex: o } = t;
  let c = r;
  if (
    (c ||
      (s > o
        ? (c = "next")
        : s < o
        ? (c = "prev")
        : (c = "reset")),
    t.emit(`transition${i}`),
    n && s !== o)
  ) {
    if (c === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      c === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function y2(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    mh({
      swiper: n,
      runCallbacks: e,
      direction: t,
      step: "Start",
    }));
}
function x2(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      mh({
        swiper: n,
        runCallbacks: e,
        direction: t,
        step: "End",
      }));
}
var w2 = {
  setTransition: v2,
  transitionStart: y2,
  transitionEnd: x2,
};
function b2(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: c,
    snapGrid: a,
    slidesGrid: f,
    previousIndex: p,
    activeIndex: v,
    rtlTranslate: w,
    wrapperEl: b,
    enabled: j,
  } = s;
  if (
    (s.animating &&
      c.preventInteractionOnTransition) ||
    (!j && !r && !i)
  )
    return !1;
  const S = Math.min(
    s.params.slidesPerGroupSkip,
    o
  );
  let T =
    S +
    Math.floor((o - S) / s.params.slidesPerGroup);
  T >= a.length && (T = a.length - 1);
  const y = -a[T];
  if (c.normalizeSlideIndex)
    for (let g = 0; g < f.length; g += 1) {
      const x = -Math.floor(y * 100),
        E = Math.floor(f[g] * 100),
        k = Math.floor(f[g + 1] * 100);
      typeof f[g + 1] < "u"
        ? x >= E && x < k - (k - E) / 2
          ? (o = g)
          : x >= E && x < k && (o = g + 1)
        : x >= E && (o = g);
    }
  if (
    s.initialized &&
    o !== v &&
    ((!s.allowSlideNext &&
      (w
        ? y > s.translate && y > s.minTranslate()
        : y < s.translate &&
          y < s.minTranslate())) ||
      (!s.allowSlidePrev &&
        y > s.translate &&
        y > s.maxTranslate() &&
        (v || 0) !== o))
  )
    return !1;
  o !== (p || 0) &&
    n &&
    s.emit("beforeSlideChangeStart"),
    s.updateProgress(y);
  let h;
  if (
    (o > v
      ? (h = "next")
      : o < v
      ? (h = "prev")
      : (h = "reset"),
    (w && -y === s.translate) ||
      (!w && y === s.translate))
  )
    return (
      s.updateActiveIndex(o),
      c.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      c.effect !== "slide" && s.setTranslate(y),
      h !== "reset" &&
        (s.transitionStart(n, h),
        s.transitionEnd(n, h)),
      !1
    );
  if (c.cssMode) {
    const g = s.isHorizontal(),
      x = w ? y : -y;
    if (t === 0) {
      const E =
        s.virtual && s.params.virtual.enabled;
      E &&
        ((s.wrapperEl.style.scrollSnapType =
          "none"),
        (s._immediateVirtual = !0)),
        E &&
        !s._cssModeVirtualInitialSet &&
        s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              b[g ? "scrollLeft" : "scrollTop"] =
                x;
            }))
          : (b[g ? "scrollLeft" : "scrollTop"] =
              x),
        E &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType =
              ""),
              (s._immediateVirtual = !1);
          });
    } else {
      if (!s.support.smoothScroll)
        return (
          uh({
            swiper: s,
            targetPosition: x,
            side: g ? "left" : "top",
          }),
          !0
        );
      b.scrollTo({
        [g ? "left" : "top"]: x,
        behavior: "smooth",
      });
    }
    return !0;
  }
  return (
    s.setTransition(t),
    s.setTranslate(y),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", t, r),
    s.transitionStart(n, h),
    t === 0
      ? s.transitionEnd(n, h)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd =
            function (x) {
              !s ||
                s.destroyed ||
                (x.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onSlideToWrapperTransitionEnd
                  ),
                  (s.onSlideToWrapperTransitionEnd =
                    null),
                  delete s.onSlideToWrapperTransitionEnd,
                  s.transitionEnd(n, h)));
            }),
        s.wrapperEl.addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function S2(e, t, n, r) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  let s = e;
  return (
    i.params.loop &&
      (i.virtual && i.params.virtual.enabled
        ? (s = s + i.virtual.slidesBefore)
        : (s = i.getSlideIndexByData(s))),
    i.slideTo(s, t, n, r)
  );
}
function C2(e, t, n) {
  e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: s, animating: o } = r;
  if (!i) return r;
  let c = s.slidesPerGroup;
  s.slidesPerView === "auto" &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (c = Math.max(
      r.slidesPerViewDynamic("current", !0),
      1
    ));
  const a =
      r.activeIndex < s.slidesPerGroupSkip
        ? 1
        : c,
    f = r.virtual && s.virtual.enabled;
  if (s.loop) {
    if (o && !f && s.loopPreventsSliding)
      return !1;
    r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft);
  }
  return s.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + a, e, t, n);
}
function j2(e, t, n) {
  e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: s,
      slidesGrid: o,
      rtlTranslate: c,
      enabled: a,
      animating: f,
    } = r;
  if (!a) return r;
  const p = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (f && !p && i.loopPreventsSliding)
      return !1;
    r.loopFix({ direction: "prev" }),
      (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const v = c ? r.translate : -r.translate;
  function w(y) {
    return y < 0
      ? -Math.floor(Math.abs(y))
      : Math.floor(y);
  }
  const b = w(v),
    j = s.map((y) => w(y));
  let S = s[j.indexOf(b) - 1];
  if (typeof S > "u" && i.cssMode) {
    let y;
    s.forEach((h, g) => {
      b >= h && (y = g);
    }),
      typeof y < "u" &&
        (S = s[y > 0 ? y - 1 : y]);
  }
  let T = 0;
  if (
    (typeof S < "u" &&
      ((T = o.indexOf(S)),
      T < 0 && (T = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((T =
          T -
          r.slidesPerViewDynamic("previous", !0) +
          1),
        (T = Math.max(T, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const y =
      r.params.virtual &&
      r.params.virtual.enabled &&
      r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(y, e, t, n);
  }
  return r.slideTo(T, e, t, n);
}
function E2(e, t, n) {
  e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0);
  const r = this;
  return r.slideTo(r.activeIndex, e, t, n);
}
function T2(e, t, n, r) {
  e === void 0 && (e = this.params.speed),
    t === void 0 && (t = !0),
    r === void 0 && (r = 0.5);
  const i = this;
  let s = i.activeIndex;
  const o = Math.min(
      i.params.slidesPerGroupSkip,
      s
    ),
    c =
      o +
      Math.floor(
        (s - o) / i.params.slidesPerGroup
      ),
    a = i.rtlTranslate
      ? i.translate
      : -i.translate;
  if (a >= i.snapGrid[c]) {
    const f = i.snapGrid[c],
      p = i.snapGrid[c + 1];
    a - f > (p - f) * r &&
      (s += i.params.slidesPerGroup);
  } else {
    const f = i.snapGrid[c - 1],
      p = i.snapGrid[c];
    a - f <= (p - f) * r &&
      (s -= i.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, i.slidesGrid.length - 1)),
    i.slideTo(s, e, t, n)
  );
}
function k2() {
  const e = this,
    { params: t, slidesEl: n } = e,
    r =
      t.slidesPerView === "auto"
        ? e.slidesPerViewDynamic()
        : t.slidesPerView;
  let i = e.clickedIndex,
    s;
  const o = e.isElement
    ? "swiper-slide"
    : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (s = parseInt(
      e.clickedSlide.getAttribute(
        "data-swiper-slide-index"
      ),
      10
    )),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i >
            e.slides.length -
              e.loopedSlides +
              r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              Xt(
                n,
                `${o}[data-swiper-slide-index="${s}"]`
              )[0]
            )),
            ic(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            Xt(
              n,
              `${o}[data-swiper-slide-index="${s}"]`
            )[0]
          )),
          ic(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var N2 = {
  slideTo: b2,
  slideToLoop: S2,
  slideNext: C2,
  slidePrev: j2,
  slideReset: E2,
  slideToClosest: T2,
  slideToClickedSlide: k2,
};
function P2(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (
    !n.loop ||
    (t.virtual && t.params.virtual.enabled)
  )
    return;
  Xt(r, `.${n.slideClass}, swiper-slide`).forEach(
    (s, o) => {
      s.setAttribute(
        "data-swiper-slide-index",
        o
      );
    }
  ),
    t.loopFix({
      slideRealIndex: e,
      direction: n.centeredSlides
        ? void 0
        : "next",
    });
}
function M2(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: s,
    byController: o,
    byMousewheel: c,
  } = e === void 0 ? {} : e;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: f,
    allowSlidePrev: p,
    allowSlideNext: v,
    slidesEl: w,
    params: b,
  } = a;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && b.virtual.enabled)
  ) {
    n &&
      (!b.centeredSlides && a.snapIndex === 0
        ? a.slideTo(
            a.virtual.slides.length,
            0,
            !1,
            !0
          )
        : b.centeredSlides &&
          a.snapIndex < b.slidesPerView
        ? a.slideTo(
            a.virtual.slides.length + a.snapIndex,
            0,
            !1,
            !0
          )
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(
            a.virtual.slidesBefore,
            0,
            !1,
            !0
          )),
      (a.allowSlidePrev = p),
      (a.allowSlideNext = v),
      a.emit("loopFix");
    return;
  }
  const j =
    b.slidesPerView === "auto"
      ? a.slidesPerViewDynamic()
      : Math.ceil(
          parseFloat(b.slidesPerView, 10)
        );
  let S = b.loopedSlides || j;
  S % b.slidesPerGroup !== 0 &&
    (S +=
      b.slidesPerGroup - (S % b.slidesPerGroup)),
    (a.loopedSlides = S);
  const T = [],
    y = [];
  let h = a.activeIndex;
  typeof s > "u"
    ? (s = a.getSlideIndex(
        a.slides.filter((N) =>
          N.classList.contains(b.slideActiveClass)
        )[0]
      ))
    : (h = s);
  const g = r === "next" || !r,
    x = r === "prev" || !r;
  let E = 0,
    k = 0;
  if (s < S) {
    E = Math.max(S - s, b.slidesPerGroup);
    for (let N = 0; N < S - s; N += 1) {
      const A =
        N - Math.floor(N / f.length) * f.length;
      T.push(f.length - A - 1);
    }
  } else if (s > a.slides.length - S * 2) {
    k = Math.max(
      s - (a.slides.length - S * 2),
      b.slidesPerGroup
    );
    for (let N = 0; N < k; N += 1) {
      const A =
        N - Math.floor(N / f.length) * f.length;
      y.push(A);
    }
  }
  if (
    (x &&
      T.forEach((N) => {
        (a.slides[N].swiperLoopMoveDOM = !0),
          w.prepend(a.slides[N]),
          (a.slides[N].swiperLoopMoveDOM = !1);
      }),
    g &&
      y.forEach((N) => {
        (a.slides[N].swiperLoopMoveDOM = !0),
          w.append(a.slides[N]),
          (a.slides[N].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    b.slidesPerView === "auto" &&
      a.updateSlides(),
    b.watchSlidesProgress &&
      a.updateSlidesOffset(),
    n)
  ) {
    if (T.length > 0 && x)
      if (typeof t > "u") {
        const N = a.slidesGrid[h],
          P = a.slidesGrid[h + E] - N;
        c
          ? a.setTranslate(a.translate - P)
          : (a.slideTo(h + E, 0, !1, !0),
            i &&
              (a.touches[
                a.isHorizontal()
                  ? "startX"
                  : "startY"
              ] += P));
      } else i && a.slideToLoop(t, 0, !1, !0);
    else if (y.length > 0 && g)
      if (typeof t > "u") {
        const N = a.slidesGrid[h],
          P = a.slidesGrid[h - k] - N;
        c
          ? a.setTranslate(a.translate - P)
          : (a.slideTo(h - k, 0, !1, !0),
            i &&
              (a.touches[
                a.isHorizontal()
                  ? "startX"
                  : "startY"
              ] += P));
      } else a.slideToLoop(t, 0, !1, !0);
  }
  if (
    ((a.allowSlidePrev = p),
    (a.allowSlideNext = v),
    a.controller && a.controller.control && !o)
  ) {
    const N = {
      slideRealIndex: t,
      slideTo: !1,
      direction: r,
      setTranslate: i,
      activeSlideIndex: s,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((A) => {
          !A.destroyed &&
            A.params.loop &&
            A.loopFix(N);
        })
      : a.controller.control instanceof
          a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix(N);
  }
  a.emit("loopFix");
}
function L2() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (
    !t.loop ||
    (e.virtual && e.params.virtual.enabled)
  )
    return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const s =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute(
            "data-swiper-slide-index"
          ) * 1
        : i.swiperSlideIndex;
    r[s] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute(
        "data-swiper-slide-index"
      );
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var O2 = {
  loopCreate: P2,
  loopFix: M2,
  loopDestroy: L2,
};
function A2(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n =
    t.params.touchEventsTarget === "container"
      ? t.el
      : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function D2() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container"
        ? "el"
        : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var I2 = {
  setGrabCursor: A2,
  unsetGrabCursor: D2,
};
function _2(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === en() || r === jt())
      return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode
      ? null
      : i || n(r.getRootNode().host);
  }
  return n(t);
}
function z2(e) {
  const t = this,
    n = en(),
    r = jt(),
    i = t.touchEventsData;
  i.evCache.push(e);
  const { params: s, touches: o, enabled: c } = t;
  if (
    !c ||
    (!s.simulateTouch &&
      e.pointerType === "mouse") ||
    (t.animating &&
      s.preventInteractionOnTransition)
  )
    return;
  !t.animating &&
    s.cssMode &&
    s.loop &&
    t.loopFix();
  let a = e;
  a.originalEvent && (a = a.originalEvent);
  let f = a.target;
  if (
    (s.touchEventsTarget === "wrapper" &&
      !t.wrapperEl.contains(f)) ||
    ("which" in a && a.which === 3) ||
    ("button" in a && a.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const p =
      !!s.noSwipingClass &&
      s.noSwipingClass !== "",
    v = e.composedPath
      ? e.composedPath()
      : e.path;
  p &&
    a.target &&
    a.target.shadowRoot &&
    v &&
    (f = v[0]);
  const w = s.noSwipingSelector
      ? s.noSwipingSelector
      : `.${s.noSwipingClass}`,
    b = !!(a.target && a.target.shadowRoot);
  if (
    s.noSwiping &&
    (b ? _2(w, f) : f.closest(w))
  ) {
    t.allowClick = !0;
    return;
  }
  if (
    s.swipeHandler &&
    !f.closest(s.swipeHandler)
  )
    return;
  (o.currentX = a.pageX), (o.currentY = a.pageY);
  const j = o.currentX,
    S = o.currentY,
    T =
      s.edgeSwipeDetection ||
      s.iOSEdgeSwipeDetection,
    y =
      s.edgeSwipeThreshold ||
      s.iOSEdgeSwipeThreshold;
  if (T && (j <= y || j >= r.innerWidth - y))
    if (T === "prevent") e.preventDefault();
    else return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = j),
    (o.startY = S),
    (i.touchStartTime = cr()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    s.threshold > 0 &&
      (i.allowThresholdMove = !1);
  let h = !0;
  f.matches(i.focusableElements) &&
    ((h = !1),
    f.nodeName === "SELECT" &&
      (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(
        i.focusableElements
      ) &&
      n.activeElement !== f &&
      n.activeElement.blur();
  const g =
    h &&
    t.allowTouchMove &&
    s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || g) &&
    !f.isContentEditable &&
    a.preventDefault(),
    s.freeMode &&
      s.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !s.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", a);
}
function R2(e) {
  const t = en(),
    n = this,
    r = n.touchEventsData,
    {
      params: i,
      touches: s,
      rtlTranslate: o,
      enabled: c,
    } = n;
  if (
    !c ||
    (!i.simulateTouch &&
      e.pointerType === "mouse")
  )
    return;
  let a = e;
  if (
    (a.originalEvent && (a = a.originalEvent),
    !r.isTouched)
  ) {
    r.startMoving &&
      r.isScrolling &&
      n.emit("touchMoveOpposite", a);
    return;
  }
  const f = r.evCache.findIndex(
    (k) => k.pointerId === a.pointerId
  );
  f >= 0 && (r.evCache[f] = a);
  const p =
      r.evCache.length > 1 ? r.evCache[0] : a,
    v = p.pageX,
    w = p.pageY;
  if (a.preventedByNestedSwiper) {
    (s.startX = v), (s.startY = w);
    return;
  }
  if (!n.allowTouchMove) {
    a.target.matches(r.focusableElements) ||
      (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(s, {
          startX: v,
          startY: w,
          prevX: n.touches.currentX,
          prevY: n.touches.currentY,
          currentX: v,
          currentY: w,
        }),
        (r.touchStartTime = cr()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (w < s.startY &&
          n.translate <= n.maxTranslate()) ||
        (w > s.startY &&
          n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (v < s.startX &&
        n.translate <= n.maxTranslate()) ||
      (v > s.startX &&
        n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    t.activeElement &&
    a.target === t.activeElement &&
    a.target.matches(r.focusableElements)
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  if (
    (r.allowTouchCallbacks &&
      n.emit("touchMove", a),
    a.targetTouches && a.targetTouches.length > 1)
  )
    return;
  (s.currentX = v), (s.currentY = w);
  const b = s.currentX - s.startX,
    j = s.currentY - s.startY;
  if (
    n.params.threshold &&
    Math.sqrt(b ** 2 + j ** 2) <
      n.params.threshold
  )
    return;
  if (typeof r.isScrolling > "u") {
    let k;
    (n.isHorizontal() &&
      s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (r.isScrolling = !1)
      : b * b + j * j >= 25 &&
        ((k =
          (Math.atan2(Math.abs(j), Math.abs(b)) *
            180) /
          Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? k > i.touchAngle
          : 90 - k > i.touchAngle));
  }
  if (
    (r.isScrolling &&
      n.emit("touchMoveOpposite", a),
    typeof r.startMoving > "u" &&
      (s.currentX !== s.startX ||
        s.currentY !== s.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (n.zoom &&
        n.params.zoom &&
        n.params.zoom.enabled &&
        r.evCache.length > 1))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode &&
      a.cancelable &&
      a.preventDefault(),
    i.touchMoveStopPropagation &&
      !i.nested &&
      a.stopPropagation();
  let S = n.isHorizontal() ? b : j,
    T = n.isHorizontal()
      ? s.currentX - s.previousX
      : s.currentY - s.previousY;
  i.oneWayMovement &&
    ((S = Math.abs(S) * (o ? 1 : -1)),
    (T = Math.abs(T) * (o ? 1 : -1))),
    (s.diff = S),
    (S *= i.touchRatio),
    o && ((S = -S), (T = -T));
  const y = n.touchesDirection;
  (n.swipeDirection = S > 0 ? "prev" : "next"),
    (n.touchesDirection =
      T > 0 ? "prev" : "next");
  const h = n.params.loop && !i.cssMode;
  if (!r.isMoved) {
    if (
      (h &&
        n.loopFix({
          direction: n.swipeDirection,
        }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const k = new window.CustomEvent(
        "transitionend",
        {
          bubbles: !0,
          cancelable: !0,
        }
      );
      n.wrapperEl.dispatchEvent(k);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 ||
          n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", a);
  }
  let g;
  r.isMoved &&
    y !== n.touchesDirection &&
    h &&
    Math.abs(S) >= 1 &&
    (n.loopFix({
      direction: n.swipeDirection,
      setTranslate: !0,
    }),
    (g = !0)),
    n.emit("sliderMove", a),
    (r.isMoved = !0),
    (r.currentTranslate = S + r.startTranslate);
  let x = !0,
    E = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (E = 0),
    S > 0
      ? (h &&
          !g &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() - n.size / 2
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((x = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() +
                r.startTranslate +
                S) **
                E)))
      : S < 0 &&
        (h &&
          !g &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() + n.size / 2
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(
                    parseFloat(
                      i.slidesPerView,
                      10
                    )
                  )),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((x = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() -
                r.startTranslate -
                S) **
                E))),
    x && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (
      Math.abs(S) > i.threshold ||
      r.allowThresholdMove
    ) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (r.currentTranslate = r.startTranslate),
          (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode &&
      i.freeMode.enabled &&
      n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(),
      n.updateSlidesClasses()),
    i.freeMode &&
      i.freeMode.enabled &&
      n.freeMode &&
      n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function F2(e) {
  const t = this,
    n = t.touchEventsData,
    r = n.evCache.findIndex(
      (g) => g.pointerId === e.pointerId
    );
  if (
    (r >= 0 && n.evCache.splice(r, 1),
    [
      "pointercancel",
      "pointerout",
      "pointerleave",
    ].includes(e.type) &&
      !(
        e.type === "pointercancel" &&
        (t.browser.isSafari ||
          t.browser.isWebView)
      ))
  )
    return;
  const {
    params: i,
    touches: s,
    rtlTranslate: o,
    slidesGrid: c,
    enabled: a,
  } = t;
  if (
    !a ||
    (!i.simulateTouch &&
      e.pointerType === "mouse")
  )
    return;
  let f = e;
  if (
    (f.originalEvent && (f = f.originalEvent),
    n.allowTouchCallbacks &&
      t.emit("touchEnd", f),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved &&
      i.grabCursor &&
      t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  i.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 ||
      t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const p = cr(),
    v = p - n.touchStartTime;
  if (t.allowClick) {
    const g =
      f.path ||
      (f.composedPath && f.composedPath());
    t.updateClickedSlide((g && g[0]) || f.target),
      t.emit("tap click", f),
      v < 300 &&
        p - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", f);
  }
  if (
    ((n.lastClickTime = cr()),
    ic(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      s.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    (n.isTouched = !1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1),
    (n.isMoved = !1),
    (n.startMoving = !1);
  let w;
  if (
    (i.followFinger
      ? (w = o ? t.translate : -t.translate)
      : (w = -n.currentTranslate),
    i.cssMode)
  )
    return;
  if (i.freeMode && i.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: w });
    return;
  }
  let b = 0,
    j = t.slidesSizesGrid[0];
  for (
    let g = 0;
    g < c.length;
    g +=
      g < i.slidesPerGroupSkip
        ? 1
        : i.slidesPerGroup
  ) {
    const x =
      g < i.slidesPerGroupSkip - 1
        ? 1
        : i.slidesPerGroup;
    typeof c[g + x] < "u"
      ? w >= c[g] &&
        w < c[g + x] &&
        ((b = g), (j = c[g + x] - c[g]))
      : w >= c[g] &&
        ((b = g),
        (j = c[c.length - 1] - c[c.length - 2]));
  }
  let S = null,
    T = null;
  i.rewind &&
    (t.isBeginning
      ? (T =
          i.virtual &&
          i.virtual.enabled &&
          t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (S = 0));
  const y = (w - c[b]) / j,
    h =
      b < i.slidesPerGroupSkip - 1
        ? 1
        : i.slidesPerGroup;
  if (v > i.longSwipesMs) {
    if (!i.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (y >= i.longSwipesRatio
        ? t.slideTo(
            i.rewind && t.isEnd ? S : b + h
          )
        : t.slideTo(b)),
      t.swipeDirection === "prev" &&
        (y > 1 - i.longSwipesRatio
          ? t.slideTo(b + h)
          : T !== null &&
            y < 0 &&
            Math.abs(y) > i.longSwipesRatio
          ? t.slideTo(T)
          : t.slideTo(b));
  } else {
    if (!i.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (f.target === t.navigation.nextEl ||
      f.target === t.navigation.prevEl)
      ? f.target === t.navigation.nextEl
        ? t.slideTo(b + h)
        : t.slideTo(b)
      : (t.swipeDirection === "next" &&
          t.slideTo(S !== null ? S : b + h),
        t.swipeDirection === "prev" &&
          t.slideTo(T !== null ? T : b));
  }
}
function yf() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const {
      allowSlideNext: r,
      allowSlidePrev: i,
      snapGrid: s,
    } = e,
    o = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const c = o && t.loop;
  (t.slidesPerView === "auto" ||
    t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !c
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !o
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(
        () => {
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.resume();
        },
        500
      ))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow &&
      s !== e.snapGrid &&
      e.checkOverflow();
}
function B2(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks &&
        e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(),
        e.stopImmediatePropagation())));
}
function $2() {
  const e = this,
    {
      wrapperEl: t,
      rtlTranslate: n,
      enabled: r,
    } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const s = e.maxTranslate() - e.minTranslate();
  s === 0
    ? (i = 0)
    : (i = (e.translate - e.minTranslate()) / s),
    i !== e.progress &&
      e.updateProgress(
        n ? -e.translate : e.translate
      ),
    e.emit("setTranslate", e.translate, !1);
}
function H2(e) {
  const t = this;
  go(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" &&
        !t.params.autoHeight)
    ) && t.update();
}
let xf = !1;
function U2() {}
const hh = (e, t) => {
  const n = en(),
    {
      params: r,
      el: i,
      wrapperEl: s,
      device: o,
    } = e,
    c = !!r.nested,
    a =
      t === "on"
        ? "addEventListener"
        : "removeEventListener",
    f = t;
  i[a]("pointerdown", e.onTouchStart, {
    passive: !1,
  }),
    n[a]("pointermove", e.onTouchMove, {
      passive: !1,
      capture: c,
    }),
    n[a]("pointerup", e.onTouchEnd, {
      passive: !0,
    }),
    n[a]("pointercancel", e.onTouchEnd, {
      passive: !0,
    }),
    n[a]("pointerout", e.onTouchEnd, {
      passive: !0,
    }),
    n[a]("pointerleave", e.onTouchEnd, {
      passive: !0,
    }),
    (r.preventClicks ||
      r.preventClicksPropagation) &&
      i[a]("click", e.onClick, !0),
    r.cssMode && s[a]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[f](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          yf,
          !0
        )
      : e[f]("observerUpdate", yf, !0),
    i[a]("load", e.onLoad, { capture: !0 });
};
function V2() {
  const e = this,
    t = en(),
    { params: n } = e;
  (e.onTouchStart = z2.bind(e)),
    (e.onTouchMove = R2.bind(e)),
    (e.onTouchEnd = F2.bind(e)),
    n.cssMode && (e.onScroll = $2.bind(e)),
    (e.onClick = B2.bind(e)),
    (e.onLoad = H2.bind(e)),
    xf ||
      (t.addEventListener("touchstart", U2),
      (xf = !0)),
    hh(e, "on");
}
function W2() {
  hh(this, "off");
}
var G2 = { attachEvents: V2, detachEvents: W2 };
const wf = (e, t) =>
  e.grid && t.grid && t.grid.rows > 1;
function q2() {
  const e = this,
    {
      realIndex: t,
      initialized: n,
      params: r,
      el: i,
    } = e,
    s = r.breakpoints;
  if (!s || (s && Object.keys(s).length === 0))
    return;
  const o = e.getBreakpoint(
    s,
    e.params.breakpointsBase,
    e.el
  );
  if (!o || e.currentBreakpoint === o) return;
  const a =
      (o in s ? s[o] : void 0) ||
      e.originalParams,
    f = wf(e, r),
    p = wf(e, a),
    v = r.enabled;
  f && !p
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !f &&
      p &&
      (i.classList.add(
        `${r.containerModifierClass}grid`
      ),
      ((a.grid.fill &&
        a.grid.fill === "column") ||
        (!a.grid.fill &&
          r.grid.fill === "column")) &&
        i.classList.add(
          `${r.containerModifierClass}grid-column`
        ),
      e.emitContainerClasses()),
    [
      "navigation",
      "pagination",
      "scrollbar",
    ].forEach((S) => {
      if (typeof a[S] > "u") return;
      const T = r[S] && r[S].enabled,
        y = a[S] && a[S].enabled;
      T && !y && e[S].disable(),
        !T && y && e[S].enable();
    });
  const w =
      a.direction && a.direction !== r.direction,
    b =
      r.loop &&
      (a.slidesPerView !== r.slidesPerView || w);
  w && n && e.changeDirection(), yt(e.params, a);
  const j = e.params.enabled;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    v && !j ? e.disable() : !v && j && e.enable(),
    (e.currentBreakpoint = o),
    e.emit("_beforeBreakpoint", a),
    b &&
      n &&
      (e.loopDestroy(),
      e.loopCreate(t),
      e.updateSlides()),
    e.emit("breakpoint", a);
}
function Y2(e, t, n) {
  if (
    (t === void 0 && (t = "window"),
    !e || (t === "container" && !n))
  )
    return;
  let r = !1;
  const i = jt(),
    s =
      t === "window"
        ? i.innerHeight
        : n.clientHeight,
    o = Object.keys(e).map((c) => {
      if (
        typeof c == "string" &&
        c.indexOf("@") === 0
      ) {
        const a = parseFloat(c.substr(1));
        return { value: s * a, point: c };
      }
      return { value: c, point: c };
    });
  o.sort(
    (c, a) =>
      parseInt(c.value, 10) -
      parseInt(a.value, 10)
  );
  for (let c = 0; c < o.length; c += 1) {
    const { point: a, value: f } = o[c];
    t === "window"
      ? i.matchMedia(`(min-width: ${f}px)`)
          .matches && (r = a)
      : f <= n.clientWidth && (r = a);
  }
  return r || "max";
}
var Q2 = { setBreakpoint: q2, getBreakpoint: Y2 };
function K2(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function X2() {
  const e = this,
    {
      classNames: t,
      params: n,
      rtl: r,
      el: i,
      device: s,
    } = e,
    o = K2(
      [
        "initialized",
        n.direction,
        {
          "free-mode":
            e.params.freeMode &&
            n.freeMode.enabled,
        },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column":
            n.grid &&
            n.grid.rows > 1 &&
            n.grid.fill === "column",
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": n.cssMode },
        {
          centered: n.cssMode && n.centeredSlides,
        },
        {
          "watch-progress": n.watchSlidesProgress,
        },
      ],
      n.containerModifierClass
    );
  t.push(...o),
    i.classList.add(...t),
    e.emitContainerClasses();
}
function Z2() {
  const e = this,
    { el: t, classNames: n } = e;
  t.classList.remove(...n),
    e.emitContainerClasses();
}
var J2 = { addClasses: X2, removeClasses: Z2 };
function e4() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      s =
        e.slidesGrid[i] +
        e.slidesSizesGrid[i] +
        r * 2;
    e.isLocked = e.size > s;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 &&
    (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 &&
      (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked &&
      e.emit(e.isLocked ? "lock" : "unlock");
}
var t4 = { checkOverflow: e4 },
  bf = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements:
      "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function n4(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      s = r[i];
    if (typeof s != "object" || s === null) {
      yt(t, r);
      return;
    }
    if (
      ([
        "navigation",
        "pagination",
        "scrollbar",
      ].indexOf(i) >= 0 &&
        e[i] === !0 &&
        (e[i] = { auto: !0 }),
      !(i in e && "enabled" in s))
    ) {
      yt(t, r);
      return;
    }
    e[i] === !0 && (e[i] = { enabled: !0 }),
      typeof e[i] == "object" &&
        !("enabled" in e[i]) &&
        (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      yt(t, r);
  };
}
const na = {
    eventsEmitter: Jw,
    update: u2,
    translate: g2,
    transition: w2,
    slide: N2,
    loop: O2,
    grabCursor: I2,
    events: G2,
    breakpoints: Q2,
    checkOverflow: t4,
    classes: J2,
  },
  ra = {};
let ys = class nn {
  constructor() {
    let t, n;
    for (
      var r = arguments.length,
        i = new Array(r),
        s = 0;
      s < r;
      s++
    )
      i[s] = arguments[s];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString
      .call(i[0])
      .slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = yt({}, n)),
      t && !n.el && (n.el = t);
    const o = en();
    if (
      n.el &&
      typeof n.el == "string" &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const p = [];
      return (
        o.querySelectorAll(n.el).forEach((v) => {
          const w = yt({}, n, { el: v });
          p.push(new nn(w));
        }),
        p
      );
    }
    const c = this;
    (c.__swiper__ = !0),
      (c.support = ph()),
      (c.device = Yw({ userAgent: n.userAgent })),
      (c.browser = Kw()),
      (c.eventsListeners = {}),
      (c.eventsAnyListeners = []),
      (c.modules = [...c.__modules__]),
      n.modules &&
        Array.isArray(n.modules) &&
        c.modules.push(...n.modules);
    const a = {};
    c.modules.forEach((p) => {
      p({
        params: n,
        swiper: c,
        extendParams: n4(n, a),
        on: c.on.bind(c),
        once: c.once.bind(c),
        off: c.off.bind(c),
        emit: c.emit.bind(c),
      });
    });
    const f = yt({}, bf, a);
    return (
      (c.params = yt({}, f, ra, n)),
      (c.originalParams = yt({}, c.params)),
      (c.passedParams = yt({}, n)),
      c.params &&
        c.params.on &&
        Object.keys(c.params.on).forEach((p) => {
          c.on(p, c.params.on[p]);
        }),
      c.params &&
        c.params.onAny &&
        c.onAny(c.params.onAny),
      Object.assign(c, {
        enabled: c.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return (
            c.params.direction === "horizontal"
          );
        },
        isVertical() {
          return (
            c.params.direction === "vertical"
          );
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return (
            Math.trunc(this.translate / 2 ** 23) *
            2 ** 23
          );
        },
        allowSlideNext: c.params.allowSlideNext,
        allowSlidePrev: c.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements:
            c.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: c.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      c.emit("_swiper"),
      c.params.init && c.init(),
      c
    );
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = Xt(n, `.${r.slideClass}, swiper-slide`),
      s = Uo(i[0]);
    return Uo(t) - s;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) =>
          n.getAttribute(
            "data-swiper-slide-index"
          ) *
            1 ===
          t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = Xt(
      n,
      `.${r.slideClass}, swiper-slide`
    );
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      o = (r.maxTranslate() - i) * t + i;
    r.translateTo(o, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(
            t.params.containerModifierClass
          ) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }),
        t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"),
      n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: s,
        slidesGrid: o,
        slidesSizesGrid: c,
        size: a,
        activeIndex: f,
      } = r;
    let p = 1;
    if (i.centeredSlides) {
      let v = s[f] ? s[f].swiperSlideSize : 0,
        w;
      for (let b = f + 1; b < s.length; b += 1)
        s[b] &&
          !w &&
          ((v += s[b].swiperSlideSize),
          (p += 1),
          v > a && (w = !0));
      for (let b = f - 1; b >= 0; b -= 1)
        s[b] &&
          !w &&
          ((v += s[b].swiperSlideSize),
          (p += 1),
          v > a && (w = !0));
    } else if (t === "current")
      for (let v = f + 1; v < s.length; v += 1)
        (n
          ? o[v] + c[v] - o[f] < a
          : o[v] - o[f] < a) && (p += 1);
    else
      for (let v = f - 1; v >= 0; v -= 1)
        o[f] - o[v] < a && (p += 1);
    return p;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [
        ...t.el.querySelectorAll(
          '[loading="lazy"]'
        ),
      ].forEach((o) => {
        o.complete && go(t, o);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const o = t.rtlTranslate
          ? t.translate * -1
          : t.translate,
        c = Math.min(
          Math.max(o, t.maxTranslate()),
          t.minTranslate()
        );
      t.setTranslate(c),
        t.updateActiveIndex(),
        t.updateSlidesClasses();
    }
    let s;
    if (
      r.freeMode &&
      r.freeMode.enabled &&
      !r.cssMode
    )
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" ||
          r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const o =
          t.virtual && r.virtual.enabled
            ? t.virtual.slides
            : t.slides;
        s = t.slideTo(o.length - 1, 0, !1, !0);
      } else
        s = t.slideTo(t.activeIndex, 0, !1, !0);
      s || i();
    }
    r.watchOverflow &&
      n !== t.snapGrid &&
      t.checkOverflow(),
      t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t ||
        (t =
          i === "horizontal"
            ? "vertical"
            : "horizontal"),
      t === i ||
        (t !== "horizontal" &&
          t !== "vertical") ||
        (r.el.classList.remove(
          `${r.params.containerModifierClass}${i}`
        ),
        r.el.classList.add(
          `${r.params.containerModifierClass}${t}`
        ),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((s) => {
          t === "vertical"
            ? (s.style.width = "")
            : (s.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate =
        n.params.direction === "horizontal" &&
        n.rtl),
      n.rtl
        ? (n.el.classList.add(
            `${n.params.containerModifierClass}rtl`
          ),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(
            `${n.params.containerModifierClass}rtl`
          ),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if (
      (typeof r == "string" &&
        (r = document.querySelector(r)),
      !r)
    )
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "")
        .trim()
        .split(" ")
        .join(".")}`;
    let o = (() =>
      r &&
      r.shadowRoot &&
      r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : Xt(r, i())[0])();
    return (
      !o &&
        n.params.createElements &&
        ((o = dh("div", n.params.wrapperClass)),
        r.append(o),
        Xt(r, `.${n.params.slideClass}`).forEach(
          (c) => {
            o.append(c);
          }
        )),
      Object.assign(n, {
        el: r,
        wrapperEl: o,
        slidesEl: n.isElement
          ? r.parentNode.host
          : o,
        hostEl: n.isElement
          ? r.parentNode.host
          : r,
        mounted: !0,
        rtl:
          r.dir.toLowerCase() === "rtl" ||
          Pn(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" ||
            Pn(r, "direction") === "rtl"),
        wrongRTL:
          Pn(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    return (
      n.initialized ||
        n.mount(t) === !1 ||
        (n.emit("beforeInit"),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow &&
          n.checkOverflow(),
        n.params.grabCursor &&
          n.enabled &&
          n.setGrabCursor(),
        n.params.loop &&
        n.virtual &&
        n.params.virtual.enabled
          ? n.slideTo(
              n.params.initialSlide +
                n.virtual.slidesBefore,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            )
          : n.slideTo(
              n.params.initialSlide,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0
            ),
        n.params.loop && n.loopCreate(),
        n.attachEvents(),
        [
          ...n.el.querySelectorAll(
            '[loading="lazy"]'
          ),
        ].forEach((i) => {
          i.complete
            ? go(n, i)
            : i.addEventListener("load", (s) => {
                go(n, s.target);
              });
        }),
        oc(n),
        (n.initialized = !0),
        oc(n),
        n.emit("init"),
        n.emit("afterInit")),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0),
      n === void 0 && (n = !0);
    const r = this,
      {
        params: i,
        el: s,
        wrapperEl: o,
        slides: c,
      } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          s.removeAttribute("style"),
          o.removeAttribute("style"),
          c &&
            c.length &&
            c.forEach((a) => {
              a.classList.remove(
                i.slideVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                a.removeAttribute("style"),
                a.removeAttribute(
                  "data-swiper-slide-index"
                );
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach(
          (a) => {
            r.off(a);
          }
        ),
        t !== !1 && ((r.el.swiper = null), Bw(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    yt(ra, t);
  }
  static get extendedDefaults() {
    return ra;
  }
  static get defaults() {
    return bf;
  }
  static installModule(t) {
    nn.prototype.__modules__ ||
      (nn.prototype.__modules__ = []);
    const n = nn.prototype.__modules__;
    typeof t == "function" &&
      n.indexOf(t) < 0 &&
      n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => nn.installModule(n)),
        nn)
      : (nn.installModule(t), nn);
  }
};
Object.keys(na).forEach((e) => {
  Object.keys(na[e]).forEach((t) => {
    ys.prototype[t] = na[e][t];
  });
});
ys.use([Xw, Zw]);
const gh = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopedSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function gr(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString
      .call(e)
      .slice(8, -1) === "Object"
  );
}
function Mn(e, t) {
  const n = [
    "__proto__",
    "constructor",
    "prototype",
  ];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : gr(t[r]) &&
          gr(e[r]) &&
          Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : Mn(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function vh(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function yh(e) {
  return (
    e === void 0 && (e = {}),
    e.pagination && typeof e.pagination.el > "u"
  );
}
function xh(e) {
  return (
    e === void 0 && (e = {}),
    e.scrollbar && typeof e.scrollbar.el > "u"
  );
}
function wh(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function r4(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function i4(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: s,
    prevEl: o,
    scrollbarEl: c,
    paginationEl: a,
  } = e;
  const f = i.filter(
      (P) =>
        P !== "children" &&
        P !== "direction" &&
        P !== "wrapperClass"
    ),
    {
      params: p,
      pagination: v,
      navigation: w,
      scrollbar: b,
      virtual: j,
      thumbs: S,
    } = t;
  let T, y, h, g, x, E, k, N;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    p.thumbs &&
    !p.thumbs.swiper &&
    (T = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      p.controller &&
      !p.controller.control &&
      (y = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || a) &&
      (p.pagination || p.pagination === !1) &&
      v &&
      !v.el &&
      (h = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || c) &&
      (p.scrollbar || p.scrollbar === !1) &&
      b &&
      !b.el &&
      (g = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || o) &&
      (r.navigation.nextEl || s) &&
      (p.navigation || p.navigation === !1) &&
      w &&
      !w.prevEl &&
      !w.nextEl &&
      (x = !0);
  const A = (P) => {
    t[P] &&
      (t[P].destroy(),
      P === "navigation"
        ? (t.isElement &&
            (t[P].prevEl.remove(),
            t[P].nextEl.remove()),
          (p[P].prevEl = void 0),
          (p[P].nextEl = void 0),
          (t[P].prevEl = void 0),
          (t[P].nextEl = void 0))
        : (t.isElement && t[P].el.remove(),
          (p[P].el = void 0),
          (t[P].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (p.loop && !r.loop
      ? (E = !0)
      : !p.loop && r.loop
      ? (k = !0)
      : (N = !0)),
    f.forEach((P) => {
      if (gr(p[P]) && gr(r[P]))
        Mn(p[P], r[P]),
          (P === "navigation" ||
            P === "pagination" ||
            P === "scrollbar") &&
            "enabled" in r[P] &&
            !r[P].enabled &&
            A(P);
      else {
        const $ = r[P];
        ($ === !0 || $ === !1) &&
        (P === "navigation" ||
          P === "pagination" ||
          P === "scrollbar")
          ? $ === !1 && A(P)
          : (p[P] = r[P]);
      }
    }),
    f.includes("controller") &&
      !y &&
      t.controller &&
      t.controller.control &&
      p.controller &&
      p.controller.control &&
      (t.controller.control =
        p.controller.control),
    i.includes("children") &&
      n &&
      j &&
      p.virtual.enabled &&
      ((j.slides = n), j.update(!0)),
    i.includes("children") &&
      n &&
      p.loop &&
      (N = !0),
    T && S.init() && S.update(!0),
    y &&
      (t.controller.control =
        p.controller.control),
    h &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-pagination"),
        t.el.appendChild(a)),
      a && (p.pagination.el = a),
      v.init(),
      v.render(),
      v.update()),
    g &&
      (t.isElement &&
        (!c || typeof c == "string") &&
        ((c = document.createElement("div")),
        c.classList.add("swiper-scrollbar"),
        t.el.appendChild(c)),
      c && (p.scrollbar.el = c),
      b.init(),
      b.updateSize(),
      b.setTranslate()),
    x &&
      (t.isElement &&
        ((!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-next"),
          (s.innerHTML = t.hostEl.nextButtonSvg),
          t.el.appendChild(s)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          (s.innerHTML = t.hostEl.prevButtonSvg),
          t.el.appendChild(o))),
      s && (p.navigation.nextEl = s),
      o && (p.navigation.prevEl = o),
      w.init(),
      w.update()),
    i.includes("allowSlideNext") &&
      (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") &&
      (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") &&
      t.changeDirection(r.direction, !1),
    (E || N) && t.loopDestroy(),
    (k || N) && t.loopCreate(),
    t.update();
}
function s4(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  Mn(n, ys.defaults),
    Mn(n, ys.extendedDefaults),
    (n._emitClasses = !0),
    (n.init = !1);
  const s = {},
    o = gh.map((a) => a.replace(/_/, "")),
    c = Object.assign({}, e);
  return (
    Object.keys(c).forEach((a) => {
      typeof e[a] > "u" ||
        (o.indexOf(a) >= 0
          ? gr(e[a])
            ? ((n[a] = {}),
              (i[a] = {}),
              Mn(n[a], e[a]),
              Mn(i[a], e[a]))
            : ((n[a] = e[a]), (i[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 &&
            typeof e[a] == "function"
          ? t
            ? (r[
                `${a[2].toLowerCase()}${a.substr(
                  3
                )}`
              ] = e[a])
            : (n.on[
                `${a[2].toLowerCase()}${a.substr(
                  3
                )}`
              ] = e[a])
          : (s[a] = e[a]));
    }),
    [
      "navigation",
      "pagination",
      "scrollbar",
    ].forEach((a) => {
      n[a] === !0 && (n[a] = {}),
        n[a] === !1 && delete n[a];
    }),
    {
      params: n,
      passedParams: i,
      rest: s,
      events: r,
    }
  );
}
function o4(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: s,
    scrollbarEl: o,
    swiper: c,
  } = e;
  vh(t) &&
    r &&
    i &&
    ((c.params.navigation.nextEl = r),
    (c.originalParams.navigation.nextEl = r),
    (c.params.navigation.prevEl = i),
    (c.originalParams.navigation.prevEl = i)),
    yh(t) &&
      s &&
      ((c.params.pagination.el = s),
      (c.originalParams.pagination.el = s)),
    xh(t) &&
      o &&
      ((c.params.scrollbar.el = o),
      (c.originalParams.scrollbar.el = o)),
    c.init(n);
}
function l4(e, t, n, r, i) {
  const s = [];
  if (!t) return s;
  const o = (a) => {
    s.indexOf(a) < 0 && s.push(a);
  };
  if (n && r) {
    const a = r.map(i),
      f = n.map(i);
    a.join("") !== f.join("") && o("children"),
      r.length !== n.length && o("children");
  }
  return (
    gh
      .filter((a) => a[0] === "_")
      .map((a) => a.replace(/_/, ""))
      .forEach((a) => {
        if (a in e && a in t)
          if (gr(e[a]) && gr(t[a])) {
            const f = Object.keys(e[a]),
              p = Object.keys(t[a]);
            f.length !== p.length
              ? o(a)
              : (f.forEach((v) => {
                  e[a][v] !== t[a][v] && o(a);
                }),
                p.forEach((v) => {
                  e[a][v] !== t[a][v] && o(a);
                }));
          } else e[a] !== t[a] && o(a);
      }),
    s
  );
}
const a4 = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual &&
      !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Vo() {
  return (
    (Vo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (
            var t = 1;
            t < arguments.length;
            t++
          ) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(
                n,
                r
              ) && (e[r] = n[r]);
          }
          return e;
        }),
    Vo.apply(this, arguments)
  );
}
function bh(e) {
  return (
    e.type &&
    e.type.displayName &&
    e.type.displayName.includes("SwiperSlide")
  );
}
function Sh(e) {
  const t = [];
  return (
    ae.Children.toArray(e).forEach((n) => {
      bh(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          Sh(n.props.children).forEach((r) =>
            t.push(r)
          );
    }),
    t
  );
}
function c4(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    ae.Children.toArray(e).forEach((r) => {
      if (bh(r)) t.push(r);
      else if (
        r.props &&
        r.props.slot &&
        n[r.props.slot]
      )
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = Sh(r.props.children);
        i.length > 0
          ? i.forEach((s) => t.push(s))
          : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function u4(e, t, n) {
  if (!n) return null;
  const r = (p) => {
      let v = p;
      return (
        p < 0
          ? (v = t.length + p)
          : v >= t.length && (v = v - t.length),
        v
      );
    },
    i = e.isHorizontal()
      ? {
          [e.rtlTranslate
            ? "right"
            : "left"]: `${n.offset}px`,
        }
      : { top: `${n.offset}px` },
    { from: s, to: o } = n,
    c = e.params.loop ? -t.length : 0,
    a = e.params.loop ? t.length * 2 : t.length,
    f = [];
  for (let p = c; p < a; p += 1)
    p >= s && p <= o && f.push(t[r(p)]);
  return f.map((p, v) =>
    ae.cloneElement(p, {
      swiper: e,
      style: i,
      key: `slide-${v}`,
    })
  );
}
function Ki(e, t) {
  return typeof window > "u"
    ? D.useEffect(e, t)
    : D.useLayoutEffect(e, t);
}
const Sf = D.createContext(null),
  d4 = D.createContext(null),
  Ch = D.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: s,
        onSwiper: o,
        ...c
      } = e === void 0 ? {} : e,
      a = !1;
    const [f, p] = D.useState("swiper"),
      [v, w] = D.useState(null),
      [b, j] = D.useState(!1),
      S = D.useRef(!1),
      T = D.useRef(null),
      y = D.useRef(null),
      h = D.useRef(null),
      g = D.useRef(null),
      x = D.useRef(null),
      E = D.useRef(null),
      k = D.useRef(null),
      N = D.useRef(null),
      {
        params: A,
        passedParams: P,
        rest: $,
        events: I,
      } = s4(c),
      { slides: F, slots: U } = c4(s),
      Q = () => {
        j(!b);
      };
    Object.assign(A.on, {
      _containerClasses(B, G) {
        p(G);
      },
    });
    const te = () => {
      Object.assign(A.on, I), (a = !0);
      const B = { ...A };
      if (
        (delete B.wrapperClass,
        (y.current = new ys(B)),
        y.current.virtual &&
          y.current.params.virtual.enabled)
      ) {
        y.current.virtual.slides = F;
        const G = {
          cache: !1,
          slides: F,
          renderExternal: w,
          renderExternalUpdate: !1,
        };
        Mn(y.current.params.virtual, G),
          Mn(y.current.originalParams.virtual, G);
      }
    };
    T.current || te(),
      y.current &&
        y.current.on("_beforeBreakpoint", Q);
    const pe = () => {
        a ||
          !I ||
          !y.current ||
          Object.keys(I).forEach((B) => {
            y.current.on(B, I[B]);
          });
      },
      K = () => {
        !I ||
          !y.current ||
          Object.keys(I).forEach((B) => {
            y.current.off(B, I[B]);
          });
      };
    D.useEffect(() => () => {
      y.current &&
        y.current.off("_beforeBreakpoint", Q);
    }),
      D.useEffect(() => {
        !S.current &&
          y.current &&
          (y.current.emitSlidesClasses(),
          (S.current = !0));
      }),
      Ki(() => {
        if (
          (t && (t.current = T.current),
          !!T.current)
        )
          return (
            y.current.destroyed && te(),
            o4(
              {
                el: T.current,
                nextEl: x.current,
                prevEl: E.current,
                paginationEl: k.current,
                scrollbarEl: N.current,
                swiper: y.current,
              },
              A
            ),
            o && o(y.current),
            () => {
              y.current &&
                !y.current.destroyed &&
                y.current.destroy(!0, !1);
            }
          );
      }, []),
      Ki(() => {
        pe();
        const B = l4(
          P,
          h.current,
          F,
          g.current,
          (G) => G.key
        );
        return (
          (h.current = P),
          (g.current = F),
          B.length &&
            y.current &&
            !y.current.destroyed &&
            i4({
              swiper: y.current,
              slides: F,
              passedParams: P,
              changedParams: B,
              nextEl: x.current,
              prevEl: E.current,
              scrollbarEl: N.current,
              paginationEl: k.current,
            }),
          () => {
            K();
          }
        );
      }),
      Ki(() => {
        a4(y.current);
      }, [v]);
    function z() {
      return A.virtual
        ? u4(y.current, F, v)
        : F.map((B, G) =>
            ae.cloneElement(B, {
              swiper: y.current,
              swiperSlideIndex: G,
            })
          );
    }
    return ae.createElement(
      r,
      Vo(
        {
          ref: T,
          className: wh(
            `${f}${n ? ` ${n}` : ""}`
          ),
        },
        $
      ),
      ae.createElement(
        d4.Provider,
        { value: y.current },
        U["container-start"],
        ae.createElement(
          i,
          { className: r4(A.wrapperClass) },
          U["wrapper-start"],
          z(),
          U["wrapper-end"]
        ),
        vh(A) &&
          ae.createElement(
            ae.Fragment,
            null,
            ae.createElement("div", {
              ref: E,
              className: "swiper-button-prev",
            }),
            ae.createElement("div", {
              ref: x,
              className: "swiper-button-next",
            })
          ),
        xh(A) &&
          ae.createElement("div", {
            ref: N,
            className: "swiper-scrollbar",
          }),
        yh(A) &&
          ae.createElement("div", {
            ref: k,
            className: "swiper-pagination",
          }),
        U["container-end"]
      )
    );
  });
Ch.displayName = "Swiper";
const jh = D.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: s,
    zoom: o,
    lazy: c,
    virtualIndex: a,
    swiperSlideIndex: f,
    ...p
  } = e === void 0 ? {} : e;
  const v = D.useRef(null),
    [w, b] = D.useState("swiper-slide"),
    [j, S] = D.useState(!1);
  function T(x, E, k) {
    E === v.current && b(k);
  }
  Ki(() => {
    if (
      (typeof f < "u" &&
        (v.current.swiperSlideIndex = f),
      t && (t.current = v.current),
      !(!v.current || !s))
    ) {
      if (s.destroyed) {
        w !== "swiper-slide" && b("swiper-slide");
        return;
      }
      return (
        s.on("_slideClass", T),
        () => {
          s && s.off("_slideClass", T);
        }
      );
    }
  }),
    Ki(() => {
      s &&
        v.current &&
        !s.destroyed &&
        b(s.getSlideClasses(v.current));
    }, [s]);
  const y = {
      isActive:
        w.indexOf("swiper-slide-active") >= 0,
      isVisible:
        w.indexOf("swiper-slide-visible") >= 0,
      isPrev: w.indexOf("swiper-slide-prev") >= 0,
      isNext: w.indexOf("swiper-slide-next") >= 0,
    },
    h = () => (typeof r == "function" ? r(y) : r),
    g = () => {
      S(!0);
    };
  return ae.createElement(
    n,
    Vo(
      {
        ref: v,
        className: wh(`${w}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": a,
        onLoad: g,
      },
      p
    ),
    o &&
      ae.createElement(
        Sf.Provider,
        { value: y },
        ae.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom":
              typeof o == "number" ? o : void 0,
          },
          h(),
          c &&
            !j &&
            ae.createElement("div", {
              className: "swiper-lazy-preloader",
            })
        )
      ),
    !o &&
      ae.createElement(
        Sf.Provider,
        { value: y },
        h(),
        c &&
          !j &&
          ae.createElement("div", {
            className: "swiper-lazy-preloader",
          })
      )
  );
});
jh.displayName = "SwiperSlide";
function Eh(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let s = Xt(e.el, `.${r[i]}`)[0];
          s ||
            ((s = dh("div", r[i])),
            (s.className = r[i]),
            e.el.append(s)),
            (n[i] = s),
            (t[i] = s);
        }
      }),
    n
  );
}
function f4(e) {
  let {
    swiper: t,
    extendParams: n,
    on: r,
    emit: i,
  } = e;
  n({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass:
        "swiper-navigation-disabled",
    },
  }),
    (t.navigation = {
      nextEl: null,
      prevEl: null,
    });
  const s = (S) => (
    Array.isArray(S) ||
      (S = [S].filter((T) => !!T)),
    S
  );
  function o(S) {
    let T;
    return S &&
      typeof S == "string" &&
      t.isElement &&
      ((T = t.el.querySelector(S)), T)
      ? T
      : (S &&
          (typeof S == "string" &&
            (T = [
              ...document.querySelectorAll(S),
            ]),
          t.params.uniqueNavElements &&
            typeof S == "string" &&
            T.length > 1 &&
            t.el.querySelectorAll(S).length ===
              1 &&
            (T = t.el.querySelector(S))),
        S && !T ? S : T);
  }
  function c(S, T) {
    const y = t.params.navigation;
    (S = s(S)),
      S.forEach((h) => {
        h &&
          (h.classList[T ? "add" : "remove"](
            ...y.disabledClass.split(" ")
          ),
          h.tagName === "BUTTON" &&
            (h.disabled = T),
          t.params.watchOverflow &&
            t.enabled &&
            h.classList[
              t.isLocked ? "add" : "remove"
            ](y.lockClass));
      });
  }
  function a() {
    const { nextEl: S, prevEl: T } = t.navigation;
    if (t.params.loop) {
      c(T, !1), c(S, !1);
      return;
    }
    c(T, t.isBeginning && !t.params.rewind),
      c(S, t.isEnd && !t.params.rewind);
  }
  function f(S) {
    S.preventDefault(),
      !(
        t.isBeginning &&
        !t.params.loop &&
        !t.params.rewind
      ) && (t.slidePrev(), i("navigationPrev"));
  }
  function p(S) {
    S.preventDefault(),
      !(
        t.isEnd &&
        !t.params.loop &&
        !t.params.rewind
      ) && (t.slideNext(), i("navigationNext"));
  }
  function v() {
    const S = t.params.navigation;
    if (
      ((t.params.navigation = Eh(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        {
          nextEl: "swiper-button-next",
          prevEl: "swiper-button-prev",
        }
      )),
      !(S.nextEl || S.prevEl))
    )
      return;
    let T = o(S.nextEl),
      y = o(S.prevEl);
    Object.assign(t.navigation, {
      nextEl: T,
      prevEl: y,
    }),
      (T = s(T)),
      (y = s(y));
    const h = (g, x) => {
      g &&
        g.addEventListener(
          "click",
          x === "next" ? p : f
        ),
        !t.enabled &&
          g &&
          g.classList.add(
            ...S.lockClass.split(" ")
          );
    };
    T.forEach((g) => h(g, "next")),
      y.forEach((g) => h(g, "prev"));
  }
  function w() {
    let { nextEl: S, prevEl: T } = t.navigation;
    (S = s(S)), (T = s(T));
    const y = (h, g) => {
      h.removeEventListener(
        "click",
        g === "next" ? p : f
      ),
        h.classList.remove(
          ...t.params.navigation.disabledClass.split(
            " "
          )
        );
    };
    S.forEach((h) => y(h, "next")),
      T.forEach((h) => y(h, "prev"));
  }
  r("init", () => {
    t.params.navigation.enabled === !1
      ? j()
      : (v(), a());
  }),
    r("toEdge fromEdge lock unlock", () => {
      a();
    }),
    r("destroy", () => {
      w();
    }),
    r("enable disable", () => {
      let { nextEl: S, prevEl: T } = t.navigation;
      (S = s(S)),
        (T = s(T)),
        [...S, ...T]
          .filter((y) => !!y)
          .forEach((y) =>
            y.classList[
              t.enabled ? "remove" : "add"
            ](t.params.navigation.lockClass)
          );
    }),
    r("click", (S, T) => {
      let { nextEl: y, prevEl: h } = t.navigation;
      (y = s(y)), (h = s(h));
      const g = T.target;
      if (
        t.params.navigation.hideOnClick &&
        !h.includes(g) &&
        !y.includes(g)
      ) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === g ||
            t.pagination.el.contains(g))
        )
          return;
        let x;
        y.length
          ? (x = y[0].classList.contains(
              t.params.navigation.hiddenClass
            ))
          : h.length &&
            (x = h[0].classList.contains(
              t.params.navigation.hiddenClass
            )),
          i(
            x === !0
              ? "navigationShow"
              : "navigationHide"
          ),
          [...y, ...h]
            .filter((E) => !!E)
            .forEach((E) =>
              E.classList.toggle(
                t.params.navigation.hiddenClass
              )
            );
      }
    });
  const b = () => {
      t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(
          " "
        )
      ),
        v(),
        a();
    },
    j = () => {
      t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(
          " "
        )
      ),
        w();
    };
  Object.assign(t.navigation, {
    enable: b,
    disable: j,
    update: a,
    init: v,
    destroy: w,
  });
}
function Di(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function p4(e) {
  let {
    swiper: t,
    extendParams: n,
    on: r,
    emit: i,
  } = e;
  const s = "swiper-pagination";
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (h) => h,
      formatFractionTotal: (h) => h,
      bulletClass: `${s}-bullet`,
      bulletActiveClass: `${s}-bullet-active`,
      modifierClass: `${s}-`,
      currentClass: `${s}-current`,
      totalClass: `${s}-total`,
      hiddenClass: `${s}-hidden`,
      progressbarFillClass: `${s}-progressbar-fill`,
      progressbarOppositeClass: `${s}-progressbar-opposite`,
      clickableClass: `${s}-clickable`,
      lockClass: `${s}-lock`,
      horizontalClass: `${s}-horizontal`,
      verticalClass: `${s}-vertical`,
      paginationDisabledClass: `${s}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] });
  let o,
    c = 0;
  const a = (h) => (
    Array.isArray(h) ||
      (h = [h].filter((g) => !!g)),
    h
  );
  function f() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) &&
        t.pagination.el.length === 0)
    );
  }
  function p(h, g) {
    const { bulletActiveClass: x } =
      t.params.pagination;
    h &&
      ((h =
        h[
          `${
            g === "prev" ? "previous" : "next"
          }ElementSibling`
        ]),
      h &&
        (h.classList.add(`${x}-${g}`),
        (h =
          h[
            `${
              g === "prev" ? "previous" : "next"
            }ElementSibling`
          ]),
        h && h.classList.add(`${x}-${g}-${g}`)));
  }
  function v(h) {
    const g = h.target.closest(
      Di(t.params.pagination.bulletClass)
    );
    if (!g) return;
    h.preventDefault();
    const x = Uo(g) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === x) return;
      const E = t.getSlideIndexByData(x),
        k = t.getSlideIndexByData(t.realIndex);
      E > t.slides.length - t.loopedSlides &&
        t.loopFix({
          direction: E > k ? "next" : "prev",
          activeSlideIndex: E,
          slideTo: !1,
        }),
        t.slideToLoop(x);
    } else t.slideTo(x);
  }
  function w() {
    const h = t.rtl,
      g = t.params.pagination;
    if (f()) return;
    let x = t.pagination.el;
    x = a(x);
    let E, k;
    const N =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      A = t.params.loop
        ? Math.ceil(N / t.params.slidesPerGroup)
        : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((k = t.previousRealIndex || 0),
          (E =
            t.params.slidesPerGroup > 1
              ? Math.floor(
                  t.realIndex /
                    t.params.slidesPerGroup
                )
              : t.realIndex))
        : typeof t.snapIndex < "u"
        ? ((E = t.snapIndex),
          (k = t.previousSnapIndex))
        : ((k = t.previousIndex || 0),
          (E = t.activeIndex || 0)),
      g.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const P = t.pagination.bullets;
      let $, I, F;
      if (
        (g.dynamicBullets &&
          ((o = sc(
            P[0],
            t.isHorizontal() ? "width" : "height",
            !0
          )),
          x.forEach((U) => {
            U.style[
              t.isHorizontal()
                ? "width"
                : "height"
            ] = `${
              o * (g.dynamicMainBullets + 4)
            }px`;
          }),
          g.dynamicMainBullets > 1 &&
            k !== void 0 &&
            ((c += E - (k || 0)),
            c > g.dynamicMainBullets - 1
              ? (c = g.dynamicMainBullets - 1)
              : c < 0 && (c = 0)),
          ($ = Math.max(E - c, 0)),
          (I =
            $ +
            (Math.min(
              P.length,
              g.dynamicMainBullets
            ) -
              1)),
          (F = (I + $) / 2)),
        P.forEach((U) => {
          const Q = [
            ...[
              "",
              "-next",
              "-next-next",
              "-prev",
              "-prev-prev",
              "-main",
            ].map(
              (te) =>
                `${g.bulletActiveClass}${te}`
            ),
          ]
            .map((te) =>
              typeof te == "string" &&
              te.includes(" ")
                ? te.split(" ")
                : te
            )
            .flat();
          U.classList.remove(...Q);
        }),
        x.length > 1)
      )
        P.forEach((U) => {
          const Q = Uo(U);
          Q === E
            ? U.classList.add(
                ...g.bulletActiveClass.split(" ")
              )
            : t.isElement &&
              U.setAttribute("part", "bullet"),
            g.dynamicBullets &&
              (Q >= $ &&
                Q <= I &&
                U.classList.add(
                  ...`${g.bulletActiveClass}-main`.split(
                    " "
                  )
                ),
              Q === $ && p(U, "prev"),
              Q === I && p(U, "next"));
        });
      else {
        const U = P[E];
        if (
          (U &&
            U.classList.add(
              ...g.bulletActiveClass.split(" ")
            ),
          t.isElement &&
            P.forEach((Q, te) => {
              Q.setAttribute(
                "part",
                te === E
                  ? "bullet-active"
                  : "bullet"
              );
            }),
          g.dynamicBullets)
        ) {
          const Q = P[$],
            te = P[I];
          for (let pe = $; pe <= I; pe += 1)
            P[pe] &&
              P[pe].classList.add(
                ...`${g.bulletActiveClass}-main`.split(
                  " "
                )
              );
          p(Q, "prev"), p(te, "next");
        }
      }
      if (g.dynamicBullets) {
        const U = Math.min(
            P.length,
            g.dynamicMainBullets + 4
          ),
          Q = (o * U - o) / 2 - F * o,
          te = h ? "right" : "left";
        P.forEach((pe) => {
          pe.style[
            t.isHorizontal() ? te : "top"
          ] = `${Q}px`;
        });
      }
    }
    x.forEach((P, $) => {
      if (
        (g.type === "fraction" &&
          (P.querySelectorAll(
            Di(g.currentClass)
          ).forEach((I) => {
            I.textContent =
              g.formatFractionCurrent(E + 1);
          }),
          P.querySelectorAll(
            Di(g.totalClass)
          ).forEach((I) => {
            I.textContent =
              g.formatFractionTotal(A);
          })),
        g.type === "progressbar")
      ) {
        let I;
        g.progressbarOpposite
          ? (I = t.isHorizontal()
              ? "vertical"
              : "horizontal")
          : (I = t.isHorizontal()
              ? "horizontal"
              : "vertical");
        const F = (E + 1) / A;
        let U = 1,
          Q = 1;
        I === "horizontal" ? (U = F) : (Q = F),
          P.querySelectorAll(
            Di(g.progressbarFillClass)
          ).forEach((te) => {
            (te.style.transform = `translate3d(0,0,0) scaleX(${U}) scaleY(${Q})`),
              (te.style.transitionDuration = `${t.params.speed}ms`);
          });
      }
      g.type === "custom" && g.renderCustom
        ? ((P.innerHTML = g.renderCustom(
            t,
            E + 1,
            A
          )),
          $ === 0 && i("paginationRender", P))
        : ($ === 0 && i("paginationRender", P),
          i("paginationUpdate", P)),
        t.params.watchOverflow &&
          t.enabled &&
          P.classList[
            t.isLocked ? "add" : "remove"
          ](g.lockClass);
    });
  }
  function b() {
    const h = t.params.pagination;
    if (f()) return;
    const g =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.slides.length;
    let x = t.pagination.el;
    x = a(x);
    let E = "";
    if (h.type === "bullets") {
      let k = t.params.loop
        ? Math.ceil(g / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        k > g &&
        (k = g);
      for (let N = 0; N < k; N += 1)
        h.renderBullet
          ? (E += h.renderBullet.call(
              t,
              N,
              h.bulletClass
            ))
          : (E += `<${h.bulletElement} ${
              t.isElement ? 'part="bullet"' : ""
            } className="${h.bulletClass}"></${
              h.bulletElement
            }>`);
    }
    h.type === "fraction" &&
      (h.renderFraction
        ? (E = h.renderFraction.call(
            t,
            h.currentClass,
            h.totalClass
          ))
        : (E = `<span className="${h.currentClass}"></span> / <span className="${h.totalClass}"></span>`)),
      h.type === "progressbar" &&
        (h.renderProgressbar
          ? (E = h.renderProgressbar.call(
              t,
              h.progressbarFillClass
            ))
          : (E = `<span className="${h.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      x.forEach((k) => {
        h.type !== "custom" &&
          (k.innerHTML = E || ""),
          h.type === "bullets" &&
            t.pagination.bullets.push(
              ...k.querySelectorAll(
                Di(h.bulletClass)
              )
            );
      }),
      h.type !== "custom" &&
        i("paginationRender", x[0]);
  }
  function j() {
    t.params.pagination = Eh(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" }
    );
    const h = t.params.pagination;
    if (!h.el) return;
    let g;
    typeof h.el == "string" &&
      t.isElement &&
      (g = t.el.querySelector(h.el)),
      !g &&
        typeof h.el == "string" &&
        (g = [
          ...document.querySelectorAll(h.el),
        ]),
      g || (g = h.el),
      !(!g || g.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof h.el == "string" &&
          Array.isArray(g) &&
          g.length > 1 &&
          ((g = [...t.el.querySelectorAll(h.el)]),
          g.length > 1 &&
            (g = g.filter(
              (x) => fh(x, ".swiper")[0] === t.el
            )[0])),
        Array.isArray(g) &&
          g.length === 1 &&
          (g = g[0]),
        Object.assign(t.pagination, { el: g }),
        (g = a(g)),
        g.forEach((x) => {
          h.type === "bullets" &&
            h.clickable &&
            x.classList.add(h.clickableClass),
            x.classList.add(
              h.modifierClass + h.type
            ),
            x.classList.add(
              t.isHorizontal()
                ? h.horizontalClass
                : h.verticalClass
            ),
            h.type === "bullets" &&
              h.dynamicBullets &&
              (x.classList.add(
                `${h.modifierClass}${h.type}-dynamic`
              ),
              (c = 0),
              h.dynamicMainBullets < 1 &&
                (h.dynamicMainBullets = 1)),
            h.type === "progressbar" &&
              h.progressbarOpposite &&
              x.classList.add(
                h.progressbarOppositeClass
              ),
            h.clickable &&
              x.addEventListener("click", v),
            t.enabled ||
              x.classList.add(h.lockClass);
        }));
  }
  function S() {
    const h = t.params.pagination;
    if (f()) return;
    let g = t.pagination.el;
    g &&
      ((g = a(g)),
      g.forEach((x) => {
        x.classList.remove(h.hiddenClass),
          x.classList.remove(
            h.modifierClass + h.type
          ),
          x.classList.remove(
            t.isHorizontal()
              ? h.horizontalClass
              : h.verticalClass
          ),
          h.clickable &&
            x.removeEventListener("click", v);
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((x) =>
          x.classList.remove(
            ...h.bulletActiveClass.split(" ")
          )
        );
  }
  r("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return;
    const h = t.params.pagination;
    let { el: g } = t.pagination;
    (g = a(g)),
      g.forEach((x) => {
        x.classList.remove(
          h.horizontalClass,
          h.verticalClass
        ),
          x.classList.add(
            t.isHorizontal()
              ? h.horizontalClass
              : h.verticalClass
          );
      });
  }),
    r("init", () => {
      t.params.pagination.enabled === !1
        ? y()
        : (j(), b(), w());
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && w();
    }),
    r("snapIndexChange", () => {
      w();
    }),
    r("snapGridLengthChange", () => {
      b(), w();
    }),
    r("destroy", () => {
      S();
    }),
    r("enable disable", () => {
      let { el: h } = t.pagination;
      h &&
        ((h = a(h)),
        h.forEach((g) =>
          g.classList[
            t.enabled ? "remove" : "add"
          ](t.params.pagination.lockClass)
        ));
    }),
    r("lock unlock", () => {
      w();
    }),
    r("click", (h, g) => {
      const x = g.target,
        E = a(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        E &&
        E.length > 0 &&
        !x.classList.contains(
          t.params.pagination.bulletClass
        )
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl &&
            x === t.navigation.nextEl) ||
            (t.navigation.prevEl &&
              x === t.navigation.prevEl))
        )
          return;
        const k = E[0].classList.contains(
          t.params.pagination.hiddenClass
        );
        i(
          k === !0
            ? "paginationShow"
            : "paginationHide"
        ),
          E.forEach((N) =>
            N.classList.toggle(
              t.params.pagination.hiddenClass
            )
          );
      }
    });
  const T = () => {
      t.el.classList.remove(
        t.params.pagination
          .paginationDisabledClass
      );
      let { el: h } = t.pagination;
      h &&
        ((h = a(h)),
        h.forEach((g) =>
          g.classList.remove(
            t.params.pagination
              .paginationDisabledClass
          )
        )),
        j(),
        b(),
        w();
    },
    y = () => {
      t.el.classList.add(
        t.params.pagination
          .paginationDisabledClass
      );
      let { el: h } = t.pagination;
      h &&
        ((h = a(h)),
        h.forEach((g) =>
          g.classList.add(
            t.params.pagination
              .paginationDisabledClass
          )
        )),
        S();
    };
  Object.assign(t.pagination, {
    enable: T,
    disable: y,
    render: b,
    update: w,
    init: j,
    destroy: S,
  });
}
function m4(e) {
  let {
    swiper: t,
    extendParams: n,
    on: r,
    emit: i,
    params: s,
  } = e;
  (t.autoplay = {
    running: !1,
    paused: !1,
    timeLeft: 0,
  }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let o,
    c,
    a = s && s.autoplay ? s.autoplay.delay : 3e3,
    f = s && s.autoplay ? s.autoplay.delay : 3e3,
    p,
    v = new Date().getTime,
    w,
    b,
    j,
    S,
    T,
    y;
  function h(K) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (K.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener(
          "transitionend",
          h
        ),
        P()));
  }
  const g = () => {
      if (t.destroyed || !t.autoplay.running)
        return;
      t.autoplay.paused
        ? (w = !0)
        : w && ((f = p), (w = !1));
      const K = t.autoplay.paused
        ? p
        : v + f - new Date().getTime();
      (t.autoplay.timeLeft = K),
        i("autoplayTimeLeft", K, K / a),
        (c = requestAnimationFrame(() => {
          g();
        }));
    },
    x = () => {
      let K;
      return (
        t.virtual && t.params.virtual.enabled
          ? (K = t.slides.filter((B) =>
              B.classList.contains(
                "swiper-slide-active"
              )
            )[0])
          : (K = t.slides[t.activeIndex]),
        K
          ? parseInt(
              K.getAttribute(
                "data-swiper-autoplay"
              ),
              10
            )
          : void 0
      );
    },
    E = (K) => {
      if (t.destroyed || !t.autoplay.running)
        return;
      cancelAnimationFrame(c), g();
      let z =
        typeof K > "u"
          ? t.params.autoplay.delay
          : K;
      (a = t.params.autoplay.delay),
        (f = t.params.autoplay.delay);
      const B = x();
      !Number.isNaN(B) &&
        B > 0 &&
        typeof K > "u" &&
        ((z = B), (a = B), (f = B)),
        (p = z);
      const G = t.params.speed,
        oe = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning ||
                t.params.loop ||
                t.params.rewind
                ? (t.slidePrev(G, !0, !0),
                  i("autoplay"))
                : t.params.autoplay
                    .stopOnLastSlide ||
                  (t.slideTo(
                    t.slides.length - 1,
                    G,
                    !0,
                    !0
                  ),
                  i("autoplay"))
              : !t.isEnd ||
                t.params.loop ||
                t.params.rewind
              ? (t.slideNext(G, !0, !0),
                i("autoplay"))
              : t.params.autoplay
                  .stopOnLastSlide ||
                (t.slideTo(0, G, !0, !0),
                i("autoplay")),
            t.params.cssMode &&
              ((v = new Date().getTime()),
              requestAnimationFrame(() => {
                E();
              })));
        };
      return (
        z > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              oe();
            }, z)))
          : requestAnimationFrame(() => {
              oe();
            }),
        z
      );
    },
    k = () => {
      (t.autoplay.running = !0),
        E(),
        i("autoplayStart");
    },
    N = () => {
      (t.autoplay.running = !1),
        clearTimeout(o),
        cancelAnimationFrame(c),
        i("autoplayStop");
    },
    A = (K, z) => {
      if (t.destroyed || !t.autoplay.running)
        return;
      clearTimeout(o), K || (y = !0);
      const B = () => {
        i("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener(
                "transitionend",
                h
              )
            : P();
      };
      if (((t.autoplay.paused = !0), z)) {
        T && (p = t.params.autoplay.delay),
          (T = !1),
          B();
        return;
      }
      (p =
        (p || t.params.autoplay.delay) -
        (new Date().getTime() - v)),
        !(t.isEnd && p < 0 && !t.params.loop) &&
          (p < 0 && (p = 0), B());
    },
    P = () => {
      (t.isEnd && p < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((v = new Date().getTime()),
        y ? ((y = !1), E(p)) : E(),
        (t.autoplay.paused = !1),
        i("autoplayResume"));
    },
    $ = () => {
      if (t.destroyed || !t.autoplay.running)
        return;
      const K = en();
      K.visibilityState === "hidden" &&
        ((y = !0), A(!0)),
        K.visibilityState === "visible" && P();
    },
    I = (K) => {
      K.pointerType === "mouse" &&
        ((y = !0), A(!0));
    },
    F = (K) => {
      K.pointerType === "mouse" &&
        t.autoplay.paused &&
        P();
    },
    U = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", I),
        t.el.addEventListener("pointerleave", F));
    },
    Q = () => {
      t.el.removeEventListener("pointerenter", I),
        t.el.removeEventListener(
          "pointerleave",
          F
        );
    },
    te = () => {
      en().addEventListener(
        "visibilitychange",
        $
      );
    },
    pe = () => {
      en().removeEventListener(
        "visibilitychange",
        $
      );
    };
  r("init", () => {
    t.params.autoplay.enabled &&
      (U(),
      te(),
      (v = new Date().getTime()),
      k());
  }),
    r("destroy", () => {
      Q(), pe(), t.autoplay.running && N();
    }),
    r("beforeTransitionStart", (K, z, B) => {
      t.destroyed ||
        !t.autoplay.running ||
        (B ||
        !t.params.autoplay.disableOnInteraction
          ? A(!0, !0)
          : N());
    }),
    r("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (
          t.params.autoplay.disableOnInteraction
        ) {
          N();
          return;
        }
        (b = !0),
          (j = !1),
          (y = !1),
          (S = setTimeout(() => {
            (y = !0), (j = !0), A(!0);
          }, 200));
      }
    }),
    r("touchEnd", () => {
      if (
        !(
          t.destroyed ||
          !t.autoplay.running ||
          !b
        )
      ) {
        if (
          (clearTimeout(S),
          clearTimeout(o),
          t.params.autoplay.disableOnInteraction)
        ) {
          (j = !1), (b = !1);
          return;
        }
        j && t.params.cssMode && P(),
          (j = !1),
          (b = !1);
      }
    }),
    r("slideChange", () => {
      t.destroyed ||
        !t.autoplay.running ||
        (T = !0);
    }),
    Object.assign(t.autoplay, {
      start: k,
      stop: N,
      pause: A,
      resume: P,
    });
}
function h4(e) {
  let {
    swiper: t,
    extendParams: n,
    emit: r,
    once: i,
  } = e;
  n({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02,
    },
  });
  function s() {
    if (t.params.cssMode) return;
    const a = t.getTranslate();
    t.setTranslate(a),
      t.setTransition(0),
      (t.touchEventsData.velocities.length = 0),
      t.freeMode.onTouchEnd({
        currentPos: t.rtl
          ? t.translate
          : -t.translate,
      });
  }
  function o() {
    if (t.params.cssMode) return;
    const { touchEventsData: a, touches: f } = t;
    a.velocities.length === 0 &&
      a.velocities.push({
        position:
          f[
            t.isHorizontal() ? "startX" : "startY"
          ],
        time: a.touchStartTime,
      }),
      a.velocities.push({
        position:
          f[
            t.isHorizontal()
              ? "currentX"
              : "currentY"
          ],
        time: cr(),
      });
  }
  function c(a) {
    let { currentPos: f } = a;
    if (t.params.cssMode) return;
    const {
        params: p,
        wrapperEl: v,
        rtlTranslate: w,
        snapGrid: b,
        touchEventsData: j,
      } = t,
      T = cr() - j.touchStartTime;
    if (f < -t.minTranslate()) {
      t.slideTo(t.activeIndex);
      return;
    }
    if (f > -t.maxTranslate()) {
      t.slides.length < b.length
        ? t.slideTo(b.length - 1)
        : t.slideTo(t.slides.length - 1);
      return;
    }
    if (p.freeMode.momentum) {
      if (j.velocities.length > 1) {
        const A = j.velocities.pop(),
          P = j.velocities.pop(),
          $ = A.position - P.position,
          I = A.time - P.time;
        (t.velocity = $ / I),
          (t.velocity /= 2),
          Math.abs(t.velocity) <
            p.freeMode.minimumVelocity &&
            (t.velocity = 0),
          (I > 150 || cr() - A.time > 300) &&
            (t.velocity = 0);
      } else t.velocity = 0;
      (t.velocity *=
        p.freeMode.momentumVelocityRatio),
        (j.velocities.length = 0);
      let y = 1e3 * p.freeMode.momentumRatio;
      const h = t.velocity * y;
      let g = t.translate + h;
      w && (g = -g);
      let x = !1,
        E;
      const k =
        Math.abs(t.velocity) *
        20 *
        p.freeMode.momentumBounceRatio;
      let N;
      if (g < t.maxTranslate())
        p.freeMode.momentumBounce
          ? (g + t.maxTranslate() < -k &&
              (g = t.maxTranslate() - k),
            (E = t.maxTranslate()),
            (x = !0),
            (j.allowMomentumBounce = !0))
          : (g = t.maxTranslate()),
          p.loop && p.centeredSlides && (N = !0);
      else if (g > t.minTranslate())
        p.freeMode.momentumBounce
          ? (g - t.minTranslate() > k &&
              (g = t.minTranslate() + k),
            (E = t.minTranslate()),
            (x = !0),
            (j.allowMomentumBounce = !0))
          : (g = t.minTranslate()),
          p.loop && p.centeredSlides && (N = !0);
      else if (p.freeMode.sticky) {
        let A;
        for (let P = 0; P < b.length; P += 1)
          if (b[P] > -g) {
            A = P;
            break;
          }
        Math.abs(b[A] - g) <
          Math.abs(b[A - 1] - g) ||
        t.swipeDirection === "next"
          ? (g = b[A])
          : (g = b[A - 1]),
          (g = -g);
      }
      if (
        (N &&
          i("transitionEnd", () => {
            t.loopFix();
          }),
        t.velocity !== 0)
      ) {
        if (
          (w
            ? (y = Math.abs(
                (-g - t.translate) / t.velocity
              ))
            : (y = Math.abs(
                (g - t.translate) / t.velocity
              )),
          p.freeMode.sticky)
        ) {
          const A = Math.abs(
              (w ? -g : g) - t.translate
            ),
            P = t.slidesSizesGrid[t.activeIndex];
          A < P
            ? (y = p.speed)
            : A < 2 * P
            ? (y = p.speed * 1.5)
            : (y = p.speed * 2.5);
        }
      } else if (p.freeMode.sticky) {
        t.slideToClosest();
        return;
      }
      p.freeMode.momentumBounce && x
        ? (t.updateProgress(E),
          t.setTransition(y),
          t.setTranslate(g),
          t.transitionStart(!0, t.swipeDirection),
          (t.animating = !0),
          Xl(v, () => {
            !t ||
              t.destroyed ||
              !j.allowMomentumBounce ||
              (r("momentumBounce"),
              t.setTransition(p.speed),
              setTimeout(() => {
                t.setTranslate(E),
                  Xl(v, () => {
                    !t ||
                      t.destroyed ||
                      t.transitionEnd();
                  });
              }, 0));
          }))
        : t.velocity
        ? (r("_freeModeNoMomentumRelease"),
          t.updateProgress(g),
          t.setTransition(y),
          t.setTranslate(g),
          t.transitionStart(!0, t.swipeDirection),
          t.animating ||
            ((t.animating = !0),
            Xl(v, () => {
              !t ||
                t.destroyed ||
                t.transitionEnd();
            })))
        : t.updateProgress(g),
        t.updateActiveIndex(),
        t.updateSlidesClasses();
    } else if (p.freeMode.sticky) {
      t.slideToClosest();
      return;
    } else
      p.freeMode &&
        r("_freeModeNoMomentumRelease");
    (!p.freeMode.momentum ||
      T >= p.longSwipesMs) &&
      (t.updateProgress(),
      t.updateActiveIndex(),
      t.updateSlidesClasses());
  }
  Object.assign(t, {
    freeMode: {
      onTouchStart: s,
      onTouchMove: o,
      onTouchEnd: c,
    },
  });
}
const g4 = () => {
    const [e, t] = D.useState([]);
    return (
      D.useEffect(() => {
        fetch("review.json")
          .then((n) => n.json())
          .then((n) => t(n));
      }, []),
      l.jsx("div", {
        className:
          "px-3 md:px-20 py-10 md:py-20 text-center",
        children: l.jsxs("div", {
          id: "testimony",
          className:
            "grid grid-cols-1 lg:grid-cols-2 gap-5 md:py-10 px-5 items-center my-10",
          children: [
            l.jsxs("div", {
              className: "text-left",
              children: [
                l.jsx("h6", {
                  className:
                    "text-[#464154] font-extrabold py-2",
                  children: "Our Reviews",
                }),
                l.jsx("h1", {
                  className:
                    "text-2xl md:text-4xl font-extrabold text-black",
                  children:
                    "Techfinna in the Words of Our Clients",
                }),
                l.jsxs("p", {
                  className:
                    "py-2 font-light text-[#464154]",
                  children: [
                    "Discover Why Our Clients Can",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "'",
                    }),
                    "t Stop Talking About Us",
                  ],
                }),
                l.jsx("div", {
                  children: l.jsx(Ch, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    freeMode: !0,
                    pagination: {
                      clickable: !0,
                      delay: 3e3,
                    },
                    modules: [h4, p4, f4, m4],
                    navigation: !0,
                    autoplay: { delay: 3e3 },
                    className:
                      "mySwiper text-left order-2 md:order-1",
                    children: e.map((n) =>
                      l.jsx(
                        "div",
                        {
                          children: l.jsx(jh, {
                            children: l.jsxs(
                              "div",
                              {
                                className:
                                  "p-10 swiper-text",
                                children: [
                                  l.jsxs("span", {
                                    className:
                                      "py-2 text-left text-[11px] md:text-[16px] text-[#464154]",
                                    children: [
                                      '"',
                                      n.description,
                                      '"',
                                    ],
                                  }),
                                  l.jsxs("div", {
                                    className:
                                      "md:flex md:m-5 shadow md:w-2/3 p-2 py-3 rounded",
                                    children: [
                                      l.jsx(
                                        "div",
                                        {
                                          className:
                                            "w-[25px] h-[25px] md:w-[50px] md:h-[50px] mx-5",
                                          children:
                                            l.jsx(
                                              "img",
                                              {
                                                src: n.image,
                                                alt: "client review for projects",
                                              }
                                            ),
                                        }
                                      ),
                                      l.jsxs(
                                        "div",
                                        {
                                          className:
                                            "text-left",
                                          children:
                                            [
                                              l.jsx(
                                                "span",
                                                {
                                                  className:
                                                    "md:text-xl font-bold",
                                                  children:
                                                    n.name,
                                                }
                                              ),
                                              l.jsx(
                                                "br",
                                                {}
                                              ),
                                              l.jsx(
                                                "span",
                                                {
                                                  className:
                                                    "text-blue-500 text-sm font-medium",
                                                  children:
                                                    n.position,
                                                }
                                              ),
                                            ],
                                        }
                                      ),
                                    ],
                                  }),
                                ],
                              }
                            ),
                          }),
                        },
                        n.id
                      )
                    ),
                  }),
                }),
              ],
            }),
            l.jsx("div", {
              className:
                "order-1 md:order-2 md:p-3",
              children: l.jsx("img", {
                className: "rounded",
                src: "images/de.jpg",
                alt: "happy clients",
              }),
            }),
          ],
        }),
      })
    );
  },
  v4 = () =>
    l.jsx("div", {
      className: " md:px-20  text-center",
      children: l.jsx("div", {
        className: "hero min-h-screen",
        children: l.jsxs("div", {
          className:
            "hero-content p-0 md:p-4 flex-col lg:flex-row",
          children: [
            l.jsxs("div", {
              className:
                "grid gap-5 md:w-[280px] text-center justify-center mx-0",
              children: [
                l.jsx("div", {
                  className: "lg:w-[270px]",
                  children: l.jsx("img", {
                    className: "rounded",
                    src: "images/discord-channel1.png",
                    alt: "discord connect with odoo with custom commands",
                  }),
                }),
                l.jsx("div", {
                  className: "lg:w-[270px]",
                  children: l.jsx("img", {
                    className: "rounded",
                    src: "images/odoo-custom1.png",
                    alt: "odoo to discord for live notifications",
                  }),
                }),
              ],
            }),
            l.jsx("div", {
              className:
                "md:w-2/3 bg-[#F2F2F2] px-8 py-14 rounded-xl",
              children: l.jsxs("div", {
                className:
                  "grid grid-cols-1 bg-[#F2F2F2] md:grid-cols-2 gap-5 items-center",
                children: [
                  l.jsxs("div", {
                    className:
                      "text-left bg-[#F2F2F2]",
                    children: [
                      l.jsxs("h1", {
                        className:
                          "text-3xl bg-[#F2F2F2] font-extrabold text-black",
                        children: [
                          "Discodoo: Power Up Your Discord ",
                          l.jsx("span", {
                            className:
                              "font-normal bg-[#F2F2F2]",
                            children: "+",
                          }),
                          " Odoo",
                        ],
                      }),
                      l.jsxs("p", {
                        className:
                          "py-6 text-[15px] font-thin text-[#464154] bg-[#F2F2F2]",
                        children: [
                          "Discodoo bridges the gap between Discord and Odoo, empowering you to optimize communication, automate tasks, and collaborate seamlessly. Sync your server with Odoo, receive real",
                          l.jsx("span", {
                            className:
                              "font-normal bg-[#F2F2F2]",
                            children: "-",
                          }),
                          "time notifications, and enjoy customizable commands for enhanced productivity.",
                        ],
                      }),
                      l.jsxs("button", {
                        className:
                          "btn bg-black text-white rounded-none hover:bg-black",
                        children: [
                          l.jsx(me, {
                            to: "/discodoo",
                            className: "bg-black",
                            children:
                              "Go Product",
                          }),
                          " ",
                          l.jsx(iu, {
                            className: "bg-black",
                          }),
                        ],
                      }),
                    ],
                  }),
                  l.jsx("div", {
                    className: "bg-[#F2F2F2]",
                    children: l.jsx("img", {
                      className: "bg-[#F2F2F2]",
                      src: "images/custom-bot.png",
                      alt: "odoo discord integration discodoo with many notification and analytics features",
                    }),
                  }),
                ],
              }),
            }),
          ],
        }),
      }),
    }),
  xs = { _origin: "https://api.emailjs.com" },
  y4 = (e, t = "https://api.emailjs.com") => {
    (xs._userID = e), (xs._origin = t);
  },
  Th = (e, t, n) => {
    if (!e)
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t)
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n)
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
    return !0;
  };
class Cf {
  constructor(t) {
    (this.status = t ? t.status : 0),
      (this.text = t
        ? t.responseText
        : "Network Error");
  }
}
const kh = (e, t, n = {}) =>
    new Promise((r, i) => {
      const s = new XMLHttpRequest();
      s.addEventListener(
        "load",
        ({ target: o }) => {
          const c = new Cf(o);
          c.status === 200 || c.text === "OK"
            ? r(c)
            : i(c);
        }
      ),
        s.addEventListener(
          "error",
          ({ target: o }) => {
            i(new Cf(o));
          }
        ),
        s.open("POST", xs._origin + e, !0),
        Object.keys(n).forEach((o) => {
          s.setRequestHeader(o, n[o]);
        }),
        s.send(t);
    }),
  x4 = (e, t, n, r) => {
    const i = r || xs._userID;
    return (
      Th(i, e, t),
      kh(
        "/api/v1.0/email/send",
        JSON.stringify({
          lib_version: "3.11.0",
          user_id: i,
          service_id: e,
          template_id: t,
          template_params: n,
        }),
        { "Content-type": "application/json" }
      )
    );
  },
  w4 = (e) => {
    let t;
    if (
      (typeof e == "string"
        ? (t = document.querySelector(e))
        : (t = e),
      !t || t.nodeName !== "FORM")
    )
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of form";
    return t;
  },
  b4 = (e, t, n, r) => {
    const i = r || xs._userID,
      s = w4(n);
    Th(i, e, t);
    const o = new FormData(s);
    return (
      o.append("lib_version", "3.11.0"),
      o.append("service_id", e),
      o.append("template_id", t),
      o.append("user_id", i),
      kh("/api/v1.0/email/send-form", o)
    );
  },
  S4 = { init: y4, send: x4, sendForm: b4 };
var Nh = { exports: {} };
/*!
 * sweetalert2 v11.6.13
 * Released under the MIT License.
 */ (function (e, t) {
  (function (n, r) {
    e.exports = r();
  })(bn, function () {
    var n = {
      awaitingPromise: new WeakMap(),
      promise: new WeakMap(),
      innerParams: new WeakMap(),
      domCache: new WeakMap(),
    };
    const r = "swal2-",
      i = (u) => {
        const d = {};
        for (const m in u) d[u[m]] = r + u[m];
        return d;
      },
      s = i([
        "container",
        "shown",
        "height-auto",
        "iosfix",
        "popup",
        "modal",
        "no-backdrop",
        "no-transition",
        "toast",
        "toast-shown",
        "show",
        "hide",
        "close",
        "title",
        "html-container",
        "actions",
        "confirm",
        "deny",
        "cancel",
        "default-outline",
        "footer",
        "icon",
        "icon-content",
        "image",
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "label",
        "textarea",
        "inputerror",
        "input-label",
        "validation-message",
        "progress-steps",
        "active-progress-step",
        "progress-step",
        "progress-step-line",
        "loader",
        "loading",
        "styled",
        "top",
        "top-start",
        "top-end",
        "top-left",
        "top-right",
        "center",
        "center-start",
        "center-end",
        "center-left",
        "center-right",
        "bottom",
        "bottom-start",
        "bottom-end",
        "bottom-left",
        "bottom-right",
        "grow-row",
        "grow-column",
        "grow-fullscreen",
        "rtl",
        "timer-progress-bar",
        "timer-progress-bar-container",
        "scrollbar-measure",
        "icon-success",
        "icon-warning",
        "icon-info",
        "icon-question",
        "icon-error",
      ]),
      o = i([
        "success",
        "warning",
        "info",
        "question",
        "error",
      ]),
      c = "SweetAlert2:",
      a = (u) => {
        const d = [];
        for (let m = 0; m < u.length; m++)
          d.indexOf(u[m]) === -1 && d.push(u[m]);
        return d;
      },
      f = (u) =>
        u.charAt(0).toUpperCase() + u.slice(1),
      p = (u) => {
        console.warn(
          `${c} ${
            typeof u == "object" ? u.join(" ") : u
          }`
        );
      },
      v = (u) => {
        console.error(`${c} ${u}`);
      },
      w = [],
      b = (u) => {
        w.includes(u) || (w.push(u), p(u));
      },
      j = (u, d) => {
        b(
          `"${u}" is deprecated and will be removed in the next major release. Please use "${d}" instead.`
        );
      },
      S = (u) =>
        typeof u == "function" ? u() : u,
      T = (u) =>
        u && typeof u.toPromise == "function",
      y = (u) =>
        T(u) ? u.toPromise() : Promise.resolve(u),
      h = (u) => u && Promise.resolve(u) === u,
      g = () =>
        document.body.querySelector(
          `.${s.container}`
        ),
      x = (u) => {
        const d = g();
        return d ? d.querySelector(u) : null;
      },
      E = (u) => x(`.${u}`),
      k = () => E(s.popup),
      N = () => E(s.icon),
      A = () => E(s["icon-content"]),
      P = () => E(s.title),
      $ = () => E(s["html-container"]),
      I = () => E(s.image),
      F = () => E(s["progress-steps"]),
      U = () => E(s["validation-message"]),
      Q = () => x(`.${s.actions} .${s.confirm}`),
      te = () => x(`.${s.actions} .${s.deny}`),
      pe = () => E(s["input-label"]),
      K = () => x(`.${s.loader}`),
      z = () => x(`.${s.actions} .${s.cancel}`),
      B = () => E(s.actions),
      G = () => E(s.footer),
      oe = () => E(s["timer-progress-bar"]),
      he = () => E(s.close),
      Vt = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabIndex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
      fe = () => {
        const u = Array.from(
            k().querySelectorAll(
              '[tabIndex]:not([tabIndex="-1"]):not([tabIndex="0"])'
            )
          ).sort((m, C) => {
            const O = parseInt(
                m.getAttribute("tabIndex")
              ),
              W = parseInt(
                C.getAttribute("tabIndex")
              );
            return O > W ? 1 : O < W ? -1 : 0;
          }),
          d = Array.from(
            k().querySelectorAll(Vt)
          ).filter(
            (m) =>
              m.getAttribute("tabIndex") !== "-1"
          );
        return a(u.concat(d)).filter((m) =>
          Ze(m)
        );
      },
      ht = () =>
        At(document.body, s.shown) &&
        !At(document.body, s["toast-shown"]) &&
        !At(document.body, s["no-backdrop"]),
      Qe = () => k() && At(k(), s.toast),
      vn = () => k().hasAttribute("data-loading"),
      Ke = { previousBodyPadding: null },
      Xe = (u, d) => {
        if (((u.textContent = ""), d)) {
          const C =
            new DOMParser().parseFromString(
              d,
              "text/html"
            );
          Array.from(
            C.querySelector("head").childNodes
          ).forEach((O) => {
            u.appendChild(O);
          }),
            Array.from(
              C.querySelector("body").childNodes
            ).forEach((O) => {
              O instanceof HTMLVideoElement ||
              O instanceof HTMLAudioElement
                ? u.appendChild(O.cloneNode(!0))
                : u.appendChild(O);
            });
        }
      },
      At = (u, d) => {
        if (!d) return !1;
        const m = d.split(/\s+/);
        for (let C = 0; C < m.length; C++)
          if (!u.classList.contains(m[C]))
            return !1;
        return !0;
      },
      Ts = (u, d) => {
        Array.from(u.classList).forEach((m) => {
          !Object.values(s).includes(m) &&
            !Object.values(o).includes(m) &&
            !Object.values(d.showClass).includes(
              m
            ) &&
            u.classList.remove(m);
        });
      },
      st = (u, d, m) => {
        if (
          (Ts(u, d),
          d.customClass && d.customClass[m])
        ) {
          if (
            typeof d.customClass[m] != "string" &&
            !d.customClass[m].forEach
          ) {
            p(
              `Invalid type of customClass.${m}! Expected string or iterable object, got "${typeof d
                .customClass[m]}"`
            );
            return;
          }
          re(u, d.customClass[m]);
        }
      },
      di = (u, d) => {
        if (!d) return null;
        switch (d) {
          case "select":
          case "textarea":
          case "file":
            return u.querySelector(
              `.${s.popup} > .${s[d]}`
            );
          case "checkbox":
            return u.querySelector(
              `.${s.popup} > .${s.checkbox} input`
            );
          case "radio":
            return (
              u.querySelector(
                `.${s.popup} > .${s.radio} input:checked`
              ) ||
              u.querySelector(
                `.${s.popup} > .${s.radio} input:first-child`
              )
            );
          case "range":
            return u.querySelector(
              `.${s.popup} > .${s.range} input`
            );
          default:
            return u.querySelector(
              `.${s.popup} > .${s.input}`
            );
        }
      },
      ks = (u) => {
        if ((u.focus(), u.type !== "file")) {
          const d = u.value;
          (u.value = ""), (u.value = d);
        }
      },
      yn = (u, d, m) => {
        !u ||
          !d ||
          (typeof d == "string" &&
            (d = d.split(/\s+/).filter(Boolean)),
          d.forEach((C) => {
            Array.isArray(u)
              ? u.forEach((O) => {
                  m
                    ? O.classList.add(C)
                    : O.classList.remove(C);
                })
              : m
              ? u.classList.add(C)
              : u.classList.remove(C);
          }));
      },
      re = (u, d) => {
        yn(u, d, !0);
      },
      ot = (u, d) => {
        yn(u, d, !1);
      },
      gt = (u, d) => {
        const m = Array.from(u.children);
        for (let C = 0; C < m.length; C++) {
          const O = m[C];
          if (
            O instanceof HTMLElement &&
            At(O, d)
          )
            return O;
        }
      },
      Wt = (u, d, m) => {
        m === `${parseInt(m)}` &&
          (m = parseInt(m)),
          m || parseInt(m) === 0
            ? (u.style[d] =
                typeof m == "number"
                  ? `${m}px`
                  : m)
            : u.style.removeProperty(d);
      },
      ge = function (u) {
        let d =
          arguments.length > 1 &&
          arguments[1] !== void 0
            ? arguments[1]
            : "flex";
        u.style.display = d;
      },
      De = (u) => {
        u.style.display = "none";
      },
      fi = (u, d, m, C) => {
        const O = u.querySelector(d);
        O && (O.style[m] = C);
      },
      qn = function (u, d) {
        let m =
          arguments.length > 2 &&
          arguments[2] !== void 0
            ? arguments[2]
            : "flex";
        d ? ge(u, m) : De(u);
      },
      Ze = (u) =>
        !!(
          u &&
          (u.offsetWidth ||
            u.offsetHeight ||
            u.getClientRects().length)
        ),
      Ns = () =>
        !Ze(Q()) && !Ze(te()) && !Ze(z()),
      Yn = (u) => u.scrollHeight > u.clientHeight,
      pi = (u) => {
        const d = window.getComputedStyle(u),
          m = parseFloat(
            d.getPropertyValue(
              "animation-duration"
            ) || "0"
          ),
          C = parseFloat(
            d.getPropertyValue(
              "transition-duration"
            ) || "0"
          );
        return m > 0 || C > 0;
      },
      Qn = function (u) {
        let d =
          arguments.length > 1 &&
          arguments[1] !== void 0
            ? arguments[1]
            : !1;
        const m = oe();
        Ze(m) &&
          (d &&
            ((m.style.transition = "none"),
            (m.style.width = "100%")),
          setTimeout(() => {
            (m.style.transition = `width ${
              u / 1e3
            }s linear`),
              (m.style.width = "0%");
          }, 10));
      },
      fl = () => {
        const u = oe(),
          d = parseInt(
            window.getComputedStyle(u).width
          );
        u.style.removeProperty("transition"),
          (u.style.width = "100%");
        const m = parseInt(
            window.getComputedStyle(u).width
          ),
          C = (d / m) * 100;
        u.style.removeProperty("transition"),
          (u.style.width = `${C}%`);
      },
      Ps = 100,
      ne = {},
      Ms = () => {
        ne.previousActiveElement instanceof
        HTMLElement
          ? (ne.previousActiveElement.focus(),
            (ne.previousActiveElement = null))
          : document.body &&
            document.body.focus();
      },
      pl = (u) =>
        new Promise((d) => {
          if (!u) return d();
          const m = window.scrollX,
            C = window.scrollY;
          (ne.restoreFocusTimeout = setTimeout(
            () => {
              Ms(), d();
            },
            Ps
          )),
            window.scrollTo(m, C);
        }),
      M = () =>
        typeof window > "u" ||
        typeof document > "u",
      L = `
 <div aria-labelledby="${s.title}" aria-describedby="${s["html-container"]}" className="${s.popup}" tabIndex="-1">
   <button type="button" className="${s.close}"></button>
   <ul className="${s["progress-steps"]}"></ul>
   <div className="${s.icon}"></div>
   <img className="${s.image}" />
   <h2 className="${s.title}" id="${s.title}"></h2>
   <div className="${s["html-container"]}" id="${s["html-container"]}"></div>
   <input className="${s.input}" />
   <input type="file" className="${s.file}" />
   <div className="${s.range}">
     <input type="range" />
     <output></output>
   </div>
   <select className="${s.select}"></select>
   <div className="${s.radio}"></div>
   <label htmlFor="${s.checkbox}" className="${s.checkbox}">
     <input type="checkbox" />
     <span className="${s.label}"></span>
   </label>
   <textarea className="${s.textarea}"></textarea>
   <div className="${s["validation-message"]}" id="${s["validation-message"]}"></div>
   <div className="${s.actions}">
     <div className="${s.loader}"></div>
     <button type="button" className="${s.confirm}"></button>
     <button type="button" className="${s.deny}"></button>
     <button type="button" className="${s.cancel}"></button>
   </div>
   <div className="${s.footer}"></div>
   <div className="${s["timer-progress-bar-container"]}">
     <div className="${s["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ""),
      _ = () => {
        const u = g();
        return u
          ? (u.remove(),
            ot(
              [
                document.documentElement,
                document.body,
              ],
              [
                s["no-backdrop"],
                s["toast-shown"],
                s["has-column"],
              ]
            ),
            !0)
          : !1;
      },
      H = () => {
        ne.currentInstance.resetValidationMessage();
      },
      J = () => {
        const u = k(),
          d = gt(u, s.input),
          m = gt(u, s.file),
          C = u.querySelector(
            `.${s.range} input`
          ),
          O = u.querySelector(
            `.${s.range} output`
          ),
          W = gt(u, s.select),
          Me = u.querySelector(
            `.${s.checkbox} input`
          ),
          qt = gt(u, s.textarea);
        (d.oninput = H),
          (m.onchange = H),
          (W.onchange = H),
          (Me.onchange = H),
          (qt.oninput = H),
          (C.oninput = () => {
            H(), (O.value = C.value);
          }),
          (C.onchange = () => {
            H(), (O.value = C.value);
          });
      },
      X = (u) =>
        typeof u == "string"
          ? document.querySelector(u)
          : u,
      Z = (u) => {
        const d = k();
        d.setAttribute(
          "role",
          u.toast ? "alert" : "dialog"
        ),
          d.setAttribute(
            "aria-live",
            u.toast ? "polite" : "assertive"
          ),
          u.toast ||
            d.setAttribute("aria-modal", "true");
      },
      Y = (u) => {
        window.getComputedStyle(u).direction ===
          "rtl" && re(g(), s.rtl);
      },
      q = (u) => {
        const d = _();
        if (M()) {
          v(
            "SweetAlert2 requires document to initialize"
          );
          return;
        }
        const m = document.createElement("div");
        (m.className = s.container),
          d && re(m, s["no-transition"]),
          Xe(m, L);
        const C = X(u.target);
        C.appendChild(m), Z(u), Y(C), J();
      },
      ue = (u, d) => {
        u instanceof HTMLElement
          ? d.appendChild(u)
          : typeof u == "object"
          ? le(u, d)
          : u && Xe(d, u);
      },
      le = (u, d) => {
        u.jquery ? Je(d, u) : Xe(d, u.toString());
      },
      Je = (u, d) => {
        if (((u.textContent = ""), 0 in d))
          for (let m = 0; m in d; m++)
            u.appendChild(d[m].cloneNode(!0));
        else u.appendChild(d.cloneNode(!0));
      },
      be = (() => {
        if (M()) return !1;
        const u = document.createElement("div"),
          d = {
            WebkitAnimation: "webkitAnimationEnd",
            animation: "animationend",
          };
        for (const m in d)
          if (
            Object.prototype.hasOwnProperty.call(
              d,
              m
            ) &&
            typeof u.style[m] < "u"
          )
            return d[m];
        return !1;
      })(),
      Ve = () => {
        const u = document.createElement("div");
        (u.className = s["scrollbar-measure"]),
          document.body.appendChild(u);
        const d =
          u.getBoundingClientRect().width -
          u.clientWidth;
        return document.body.removeChild(u), d;
      },
      Et = (u, d) => {
        const m = B(),
          C = K();
        !d.showConfirmButton &&
        !d.showDenyButton &&
        !d.showCancelButton
          ? De(m)
          : ge(m),
          st(m, d, "actions"),
          Kn(m, C, d),
          Xe(C, d.loaderHtml),
          st(C, d, "loader");
      };
    function Kn(u, d, m) {
      const C = Q(),
        O = te(),
        W = z();
      xn(C, "confirm", m),
        xn(O, "deny", m),
        xn(W, "cancel", m),
        mi(C, O, W, m),
        m.reverseButtons &&
          (m.toast
            ? (u.insertBefore(W, C),
              u.insertBefore(O, C))
            : (u.insertBefore(W, d),
              u.insertBefore(O, d),
              u.insertBefore(C, d)));
    }
    function mi(u, d, m, C) {
      if (!C.buttonsStyling) {
        ot([u, d, m], s.styled);
        return;
      }
      re([u, d, m], s.styled),
        C.confirmButtonColor &&
          ((u.style.backgroundColor =
            C.confirmButtonColor),
          re(u, s["default-outline"])),
        C.denyButtonColor &&
          ((d.style.backgroundColor =
            C.denyButtonColor),
          re(d, s["default-outline"])),
        C.cancelButtonColor &&
          ((m.style.backgroundColor =
            C.cancelButtonColor),
          re(m, s["default-outline"]));
    }
    function xn(u, d, m) {
      qn(
        u,
        m[`show${f(d)}Button`],
        "inline-block"
      ),
        Xe(u, m[`${d}ButtonText`]),
        u.setAttribute(
          "aria-label",
          m[`${d}ButtonAriaLabel`]
        ),
        (u.className = s[d]),
        st(u, m, `${d}Button`),
        re(u, m[`${d}ButtonClass`]);
    }
    const Dt = (u, d) => {
        const m = he();
        Xe(m, d.closeButtonHtml),
          st(m, d, "closeButton"),
          qn(m, d.showCloseButton),
          m.setAttribute(
            "aria-label",
            d.closeButtonAriaLabel
          );
      },
      xr = (u, d) => {
        const m = g();
        m &&
          (hi(m, d.backdrop),
          gi(m, d.position),
          vi(m, d.grow),
          st(m, d, "container"));
      };
    function hi(u, d) {
      typeof d == "string"
        ? (u.style.background = d)
        : d ||
          re(
            [
              document.documentElement,
              document.body,
            ],
            s["no-backdrop"]
          );
    }
    function gi(u, d) {
      d in s
        ? re(u, s[d])
        : (p(
            'The "position" parameter is not valid, defaulting to "center"'
          ),
          re(u, s.center));
    }
    function vi(u, d) {
      if (d && typeof d == "string") {
        const m = `grow-${d}`;
        m in s && re(u, s[m]);
      }
    }
    const wr = [
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "textarea",
      ],
      ve = (u, d) => {
        const m = k(),
          C = n.innerParams.get(u),
          O = !C || d.input !== C.input;
        wr.forEach((W) => {
          const Me = gt(m, s[W]);
          Ie(W, d.inputAttributes),
            (Me.className = s[W]),
            O && De(Me);
        }),
          d.input && (O && lt(d), Xn(d));
      },
      lt = (u) => {
        if (!at[u.input]) {
          v(
            `Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${u.input}"`
          );
          return;
        }
        const d = ou(u.input),
          m = at[u.input](d, u);
        ge(d),
          setTimeout(() => {
            ks(m);
          });
      },
      wn = (u) => {
        for (
          let d = 0;
          d < u.attributes.length;
          d++
        ) {
          const m = u.attributes[d].name;
          ["type", "value", "style"].includes(
            m
          ) || u.removeAttribute(m);
        }
      },
      Ie = (u, d) => {
        const m = di(k(), u);
        if (m) {
          wn(m);
          for (const C in d)
            m.setAttribute(C, d[C]);
        }
      },
      Xn = (u) => {
        const d = ou(u.input);
        typeof u.customclassName == "object" &&
          re(d, u.customClass.input);
      },
      br = (u, d) => {
        (!u.placeholder || d.inputPlaceholder) &&
          (u.placeholder = d.inputPlaceholder);
      },
      Zn = (u, d, m) => {
        if (m.inputLabel) {
          u.id = s.input;
          const C =
              document.createElement("label"),
            O = s["input-label"];
          C.setAttribute("for", u.id),
            (C.className = O),
            typeof m.customclassName ==
              "object" &&
              re(C, m.customClass.inputLabel),
            (C.innerText = m.inputLabel),
            d.insertAdjacentElement(
              "beforebegin",
              C
            );
        }
      },
      ou = (u) => gt(k(), s[u] || s.input),
      Ls = (u, d) => {
        ["string", "number"].includes(typeof d)
          ? (u.value = `${d}`)
          : h(d) ||
            p(
              `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof d}"`
            );
      },
      at = {};
    (at.text =
      at.email =
      at.password =
      at.number =
      at.tel =
      at.url =
        (u, d) => (
          Ls(u, d.inputValue),
          Zn(u, u, d),
          br(u, d),
          (u.type = d.input),
          u
        )),
      (at.file = (u, d) => (
        Zn(u, u, d), br(u, d), u
      )),
      (at.range = (u, d) => {
        const m = u.querySelector("input"),
          C = u.querySelector("output");
        return (
          Ls(m, d.inputValue),
          (m.type = d.input),
          Ls(C, d.inputValue),
          Zn(m, u, d),
          u
        );
      }),
      (at.select = (u, d) => {
        if (
          ((u.textContent = ""),
          d.inputPlaceholder)
        ) {
          const m =
            document.createElement("option");
          Xe(m, d.inputPlaceholder),
            (m.value = ""),
            (m.disabled = !0),
            (m.selected = !0),
            u.appendChild(m);
        }
        return Zn(u, u, d), u;
      }),
      (at.radio = (u) => (
        (u.textContent = ""), u
      )),
      (at.checkbox = (u, d) => {
        const m = di(k(), "checkbox");
        (m.value = "1"),
          (m.id = s.checkbox),
          (m.checked = !!d.inputValue);
        const C = u.querySelector("span");
        return Xe(C, d.inputPlaceholder), m;
      }),
      (at.textarea = (u, d) => {
        Ls(u, d.inputValue),
          br(u, d),
          Zn(u, u, d);
        const m = (C) =>
          parseInt(
            window.getComputedStyle(C).marginLeft
          ) +
          parseInt(
            window.getComputedStyle(C).marginRight
          );
        return (
          setTimeout(() => {
            if ("MutationObserver" in window) {
              const C = parseInt(
                  window.getComputedStyle(k())
                    .width
                ),
                O = () => {
                  const W = u.offsetWidth + m(u);
                  W > C
                    ? (k().style.width = `${W}px`)
                    : (k().style.width = null);
                };
              new MutationObserver(O).observe(u, {
                attributes: !0,
                attributeFilter: ["style"],
              });
            }
          }),
          u
        );
      });
    const Mh = (u, d) => {
        const m = $();
        st(m, d, "htmlContainer"),
          d.html
            ? (ue(d.html, m), ge(m, "block"))
            : d.text
            ? ((m.textContent = d.text),
              ge(m, "block"))
            : De(m),
          ve(u, d);
      },
      Lh = (u, d) => {
        const m = G();
        qn(m, d.footer),
          d.footer && ue(d.footer, m),
          st(m, d, "footer");
      },
      Oh = (u, d) => {
        const m = n.innerParams.get(u),
          C = N();
        if (m && d.icon === m.icon) {
          au(C, d), lu(C, d);
          return;
        }
        if (!d.icon && !d.iconHtml) {
          De(C);
          return;
        }
        if (
          d.icon &&
          Object.keys(o).indexOf(d.icon) === -1
        ) {
          v(
            `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${d.icon}"`
          ),
            De(C);
          return;
        }
        ge(C),
          au(C, d),
          lu(C, d),
          re(C, d.showClass.icon);
      },
      lu = (u, d) => {
        for (const m in o)
          d.icon !== m && ot(u, o[m]);
        re(u, o[d.icon]),
          _h(u, d),
          Ah(),
          st(u, d, "icon");
      },
      Ah = () => {
        const u = k(),
          d = window
            .getComputedStyle(u)
            .getPropertyValue("background-color"),
          m = u.querySelectorAll(
            "[class^=swal2-success-circular-line], .swal2-success-fix"
          );
        for (let C = 0; C < m.length; C++)
          m[C].style.backgroundColor = d;
      },
      Dh = `
  <div className="swal2-success-circular-line-left"></div>
  <span className="swal2-success-line-tip"></span> <span className="swal2-success-line-long"></span>
  <div className="swal2-success-ring"></div> <div className="swal2-success-fix"></div>
  <div className="swal2-success-circular-line-right"></div>
`,
      Ih = `
  <span className="swal2-x-mark">
    <span className="swal2-x-mark-line-left"></span>
    <span className="swal2-x-mark-line-right"></span>
  </span>
`,
      au = (u, d) => {
        let m = u.innerHTML,
          C;
        d.iconHtml
          ? (C = cu(d.iconHtml))
          : d.icon === "success"
          ? ((C = Dh),
            (m = m.replace(/ style=".*?"/g, "")))
          : d.icon === "error"
          ? (C = Ih)
          : (C = cu(
              {
                question: "?",
                warning: "!",
                info: "i",
              }[d.icon]
            )),
          m.trim() !== C.trim() && Xe(u, C);
      },
      _h = (u, d) => {
        if (d.iconColor) {
          (u.style.color = d.iconColor),
            (u.style.borderColor = d.iconColor);
          for (const m of [
            ".swal2-success-line-tip",
            ".swal2-success-line-long",
            ".swal2-x-mark-line-left",
            ".swal2-x-mark-line-right",
          ])
            fi(
              u,
              m,
              "backgroundColor",
              d.iconColor
            );
          fi(
            u,
            ".swal2-success-ring",
            "borderColor",
            d.iconColor
          );
        }
      },
      cu = (u) =>
        `<div className="${s["icon-content"]}">${u}</div>`,
      zh = (u, d) => {
        const m = I();
        if (!d.imageUrl) {
          De(m);
          return;
        }
        ge(m, ""),
          m.setAttribute("src", d.imageUrl),
          m.setAttribute("alt", d.imageAlt),
          Wt(m, "width", d.imageWidth),
          Wt(m, "height", d.imageHeight),
          (m.className = s.image),
          st(m, d, "image");
      },
      Rh = (u, d) => {
        const m = g(),
          C = k();
        d.toast
          ? (Wt(m, "width", d.width),
            (C.style.width = "100%"),
            C.insertBefore(K(), N()))
          : Wt(C, "width", d.width),
          Wt(C, "padding", d.padding),
          d.color && (C.style.color = d.color),
          d.background &&
            (C.style.background = d.background),
          De(U()),
          Fh(C, d);
      },
      Fh = (u, d) => {
        (u.className = `${s.popup} ${
          Ze(u) ? d.showClass.popup : ""
        }`),
          d.toast
            ? (re(
                [
                  document.documentElement,
                  document.body,
                ],
                s["toast-shown"]
              ),
              re(u, s.toast))
            : re(u, s.modal),
          st(u, d, "popup"),
          typeof d.customclassName == "string" &&
            re(u, d.customClass),
          d.icon && re(u, s[`icon-${d.icon}`]);
      },
      Bh = (u, d) => {
        const m = F();
        if (
          !d.progressSteps ||
          d.progressSteps.length === 0
        ) {
          De(m);
          return;
        }
        ge(m),
          (m.textContent = ""),
          d.currentProgressStep >=
            d.progressSteps.length &&
            p(
              "Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"
            ),
          d.progressSteps.forEach((C, O) => {
            const W = $h(C);
            if (
              (m.appendChild(W),
              O === d.currentProgressStep &&
                re(W, s["active-progress-step"]),
              O !== d.progressSteps.length - 1)
            ) {
              const Me = Hh(d);
              m.appendChild(Me);
            }
          });
      },
      $h = (u) => {
        const d = document.createElement("li");
        return (
          re(d, s["progress-step"]), Xe(d, u), d
        );
      },
      Hh = (u) => {
        const d = document.createElement("li");
        return (
          re(d, s["progress-step-line"]),
          u.progressStepsDistance &&
            Wt(
              d,
              "width",
              u.progressStepsDistance
            ),
          d
        );
      },
      Uh = (u, d) => {
        const m = P();
        qn(m, d.title || d.titleText, "block"),
          d.title && ue(d.title, m),
          d.titleText &&
            (m.innerText = d.titleText),
          st(m, d, "title");
      },
      uu = (u, d) => {
        Rh(u, d),
          xr(u, d),
          Bh(u, d),
          Oh(u, d),
          zh(u, d),
          Uh(u, d),
          Dt(u, d),
          Mh(u, d),
          Et(u, d),
          Lh(u, d),
          typeof d.didRender == "function" &&
            d.didRender(k());
      };
    function du() {
      const u = n.innerParams.get(this);
      if (!u) return;
      const d = n.domCache.get(this);
      De(d.loader),
        Qe() ? u.icon && ge(N()) : Vh(d),
        ot([d.popup, d.actions], s.loading),
        d.popup.removeAttribute("aria-busy"),
        d.popup.removeAttribute("data-loading"),
        (d.confirmButton.disabled = !1),
        (d.denyButton.disabled = !1),
        (d.cancelButton.disabled = !1);
    }
    const Vh = (u) => {
      const d = u.popup.getElementsByClassName(
        u.loader.getAttribute(
          "data-button-to-replace"
        )
      );
      d.length
        ? ge(d[0], "inline-block")
        : Ns() && De(u.actions);
    };
    function Wh(u) {
      const d = n.innerParams.get(u || this),
        m = n.domCache.get(u || this);
      return m ? di(m.popup, d.input) : null;
    }
    const Gh = () => Ze(k()),
      fu = () => Q() && Q().click(),
      qh = () => te() && te().click(),
      Yh = () => z() && z().click(),
      Sr = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer",
      }),
      pu = (u) => {
        u.keydownTarget &&
          u.keydownHandlerAdded &&
          (u.keydownTarget.removeEventListener(
            "keydown",
            u.keydownHandler,
            {
              capture: u.keydownListenerCapture,
            }
          ),
          (u.keydownHandlerAdded = !1));
      },
      Qh = (u, d, m, C) => {
        pu(d),
          m.toast ||
            ((d.keydownHandler = (O) =>
              Xh(u, O, C)),
            (d.keydownTarget =
              m.keydownListenerCapture
                ? window
                : k()),
            (d.keydownListenerCapture =
              m.keydownListenerCapture),
            d.keydownTarget.addEventListener(
              "keydown",
              d.keydownHandler,
              {
                capture: d.keydownListenerCapture,
              }
            ),
            (d.keydownHandlerAdded = !0));
      },
      ml = (u, d, m) => {
        const C = fe();
        if (C.length)
          return (
            (d = d + m),
            d === C.length
              ? (d = 0)
              : d === -1 && (d = C.length - 1),
            C[d].focus()
          );
        k().focus();
      },
      mu = ["ArrowRight", "ArrowDown"],
      Kh = ["ArrowLeft", "ArrowUp"],
      Xh = (u, d, m) => {
        const C = n.innerParams.get(u);
        C &&
          (d.isComposing ||
            d.keyCode === 229 ||
            (C.stopKeydownPropagation &&
              d.stopPropagation(),
            d.key === "Enter"
              ? Zh(u, d, C)
              : d.key === "Tab"
              ? Jh(d, C)
              : [...mu, ...Kh].includes(d.key)
              ? eg(d.key)
              : d.key === "Escape" &&
                tg(d, C, m)));
      },
      Zh = (u, d, m) => {
        if (
          S(m.allowEnterKey) &&
          d.target &&
          u.getInput() &&
          d.target instanceof HTMLElement &&
          d.target.outerHTML ===
            u.getInput().outerHTML
        ) {
          if (
            ["textarea", "file"].includes(m.input)
          )
            return;
          fu(), d.preventDefault();
        }
      },
      Jh = (u, d) => {
        const m = u.target,
          C = fe();
        let O = -1;
        for (let W = 0; W < C.length; W++)
          if (m === C[W]) {
            O = W;
            break;
          }
        u.shiftKey ? ml(d, O, -1) : ml(d, O, 1),
          u.stopPropagation(),
          u.preventDefault();
      },
      eg = (u) => {
        const d = Q(),
          m = te(),
          C = z();
        if (
          document.activeElement instanceof
            HTMLElement &&
          ![d, m, C].includes(
            document.activeElement
          )
        )
          return;
        const O = mu.includes(u)
          ? "nextElementSibling"
          : "previousElementSibling";
        let W = document.activeElement;
        for (
          let Me = 0;
          Me < B().children.length;
          Me++
        ) {
          if (((W = W[O]), !W)) return;
          if (
            W instanceof HTMLButtonElement &&
            Ze(W)
          )
            break;
        }
        W instanceof HTMLButtonElement &&
          W.focus();
      },
      tg = (u, d, m) => {
        S(d.allowEscapeKey) &&
          (u.preventDefault(), m(Sr.esc));
      };
    var yi = {
      swalPromiseResolve: new WeakMap(),
      swalPromiseReject: new WeakMap(),
    };
    const ng = () => {
        Array.from(
          document.body.children
        ).forEach((d) => {
          d === g() ||
            d.contains(g()) ||
            (d.hasAttribute("aria-hidden") &&
              d.setAttribute(
                "data-previous-aria-hidden",
                d.getAttribute("aria-hidden")
              ),
            d.setAttribute(
              "aria-hidden",
              "true"
            ));
        });
      },
      hu = () => {
        Array.from(
          document.body.children
        ).forEach((d) => {
          d.hasAttribute(
            "data-previous-aria-hidden"
          )
            ? (d.setAttribute(
                "aria-hidden",
                d.getAttribute(
                  "data-previous-aria-hidden"
                )
              ),
              d.removeAttribute(
                "data-previous-aria-hidden"
              ))
            : d.removeAttribute("aria-hidden");
        });
      },
      rg = () => {
        if (
          ((/iPad|iPhone|iPod/.test(
            navigator.userAgent
          ) &&
            !window.MSStream) ||
            (navigator.platform === "MacIntel" &&
              navigator.maxTouchPoints > 1)) &&
          !At(document.body, s.iosfix)
        ) {
          const d = document.body.scrollTop;
          (document.body.style.top = `${
            d * -1
          }px`),
            re(document.body, s.iosfix),
            sg(),
            ig();
        }
      },
      ig = () => {
        const u = navigator.userAgent,
          d =
            !!u.match(/iPad/i) ||
            !!u.match(/iPhone/i),
          m = !!u.match(/WebKit/i);
        d &&
          m &&
          !u.match(/CriOS/i) &&
          k().scrollHeight >
            window.innerHeight - 44 &&
          (g().style.paddingBottom = "44px");
      },
      sg = () => {
        const u = g();
        let d;
        (u.ontouchstart = (m) => {
          d = og(m);
        }),
          (u.ontouchmove = (m) => {
            d &&
              (m.preventDefault(),
              m.stopPropagation());
          });
      },
      og = (u) => {
        const d = u.target,
          m = g();
        return lg(u) || ag(u)
          ? !1
          : d === m ||
              (!Yn(m) &&
                d instanceof HTMLElement &&
                d.tagName !== "INPUT" &&
                d.tagName !== "TEXTAREA" &&
                !(Yn($()) && $().contains(d)));
      },
      lg = (u) =>
        u.touches &&
        u.touches.length &&
        u.touches[0].touchType === "stylus",
      ag = (u) =>
        u.touches && u.touches.length > 1,
      cg = () => {
        if (At(document.body, s.iosfix)) {
          const u = parseInt(
            document.body.style.top,
            10
          );
          ot(document.body, s.iosfix),
            (document.body.style.top = ""),
            (document.body.scrollTop = u * -1);
        }
      },
      ug = () => {
        Ke.previousBodyPadding === null &&
          document.body.scrollHeight >
            window.innerHeight &&
          ((Ke.previousBodyPadding = parseInt(
            window
              .getComputedStyle(document.body)
              .getPropertyValue("padding-right")
          )),
          (document.body.style.paddingRight = `${
            Ke.previousBodyPadding + Ve()
          }px`));
      },
      dg = () => {
        Ke.previousBodyPadding !== null &&
          ((document.body.style.paddingRight = `${Ke.previousBodyPadding}px`),
          (Ke.previousBodyPadding = null));
      };
    function gu(u, d, m, C) {
      Qe()
        ? vu(u, C)
        : (pl(m).then(() => vu(u, C)), pu(ne)),
        /^((?!chrome|android).)*safari/i.test(
          navigator.userAgent
        )
          ? (d.setAttribute(
              "style",
              "display:none !important"
            ),
            d.removeAttribute("class"),
            (d.innerHTML = ""))
          : d.remove(),
        ht() && (dg(), cg(), hu()),
        fg();
    }
    function fg() {
      ot(
        [document.documentElement, document.body],
        [
          s.shown,
          s["height-auto"],
          s["no-backdrop"],
          s["toast-shown"],
        ]
      );
    }
    function Os(u) {
      u = gg(u);
      const d = yi.swalPromiseResolve.get(this),
        m = mg(this);
      this.isAwaitingPromise()
        ? u.isDismissed || (xi(this), d(u))
        : m && d(u);
    }
    function pg() {
      return !!n.awaitingPromise.get(this);
    }
    const mg = (u) => {
      const d = k();
      if (!d) return !1;
      const m = n.innerParams.get(u);
      if (!m || At(d, m.hideClass.popup))
        return !1;
      ot(d, m.showClass.popup),
        re(d, m.hideClass.popup);
      const C = g();
      return (
        ot(C, m.showClass.backdrop),
        re(C, m.hideClass.backdrop),
        vg(u, d, m),
        !0
      );
    };
    function hg(u) {
      const d = yi.swalPromiseReject.get(this);
      xi(this), d && d(u);
    }
    const xi = (u) => {
        u.isAwaitingPromise() &&
          (n.awaitingPromise.delete(u),
          n.innerParams.get(u) || u._destroy());
      },
      gg = (u) =>
        typeof u > "u"
          ? {
              isConfirmed: !1,
              isDenied: !1,
              isDismissed: !0,
            }
          : Object.assign(
              {
                isConfirmed: !1,
                isDenied: !1,
                isDismissed: !1,
              },
              u
            ),
      vg = (u, d, m) => {
        const C = g(),
          O = be && pi(d);
        typeof m.willClose == "function" &&
          m.willClose(d),
          O
            ? yg(
                u,
                d,
                C,
                m.returnFocus,
                m.didClose
              )
            : gu(u, C, m.returnFocus, m.didClose);
      },
      yg = (u, d, m, C, O) => {
        (ne.swalCloseEventFinishedCallback =
          gu.bind(null, u, m, C, O)),
          d.addEventListener(be, function (W) {
            W.target === d &&
              (ne.swalCloseEventFinishedCallback(),
              delete ne.swalCloseEventFinishedCallback);
          });
      },
      vu = (u, d) => {
        setTimeout(() => {
          typeof d == "function" &&
            d.bind(u.params)(),
            u._destroy();
        });
      };
    function yu(u, d, m) {
      const C = n.domCache.get(u);
      d.forEach((O) => {
        C[O].disabled = m;
      });
    }
    function xu(u, d) {
      if (u)
        if (u.type === "radio") {
          const C =
            u.parentNode.parentNode.querySelectorAll(
              "input"
            );
          for (let O = 0; O < C.length; O++)
            C[O].disabled = d;
        } else u.disabled = d;
    }
    function xg() {
      yu(
        this,
        [
          "confirmButton",
          "denyButton",
          "cancelButton",
        ],
        !1
      );
    }
    function wg() {
      yu(
        this,
        [
          "confirmButton",
          "denyButton",
          "cancelButton",
        ],
        !0
      );
    }
    function bg() {
      xu(this.getInput(), !1);
    }
    function Sg() {
      xu(this.getInput(), !0);
    }
    function Cg(u) {
      const d = n.domCache.get(this),
        m = n.innerParams.get(this);
      Xe(d.validationMessage, u),
        (d.validationMessage.className =
          s["validation-message"]),
        m.customClass &&
          m.customClass.validationMessage &&
          re(
            d.validationMessage,
            m.customClass.validationMessage
          ),
        ge(d.validationMessage);
      const C = this.getInput();
      C &&
        (C.setAttribute("aria-invalid", !0),
        C.setAttribute(
          "aria-describedby",
          s["validation-message"]
        ),
        ks(C),
        re(C, s.inputerror));
    }
    function jg() {
      const u = n.domCache.get(this);
      u.validationMessage &&
        De(u.validationMessage);
      const d = this.getInput();
      d &&
        (d.removeAttribute("aria-invalid"),
        d.removeAttribute("aria-describedby"),
        ot(d, s.inputerror));
    }
    const Cr = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: void 0,
        iconColor: void 0,
        iconHtml: void 0,
        template: void 0,
        toast: !1,
        showClass: {
          popup: "swal2-show",
          backdrop: "swal2-backdrop-show",
          icon: "swal2-icon-show",
        },
        hideClass: {
          popup: "swal2-hide",
          backdrop: "swal2-backdrop-hide",
          icon: "swal2-icon-hide",
        },
        customClass: {},
        target: "body",
        color: void 0,
        backdrop: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showDenyButton: !1,
        showCancelButton: !1,
        preConfirm: void 0,
        preDeny: void 0,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: void 0,
        denyButtonText: "No",
        denyButtonAriaLabel: "",
        denyButtonColor: void 0,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: void 0,
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusDeny: !1,
        focusCancel: !1,
        returnFocus: !0,
        showCloseButton: !1,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        loaderHtml: "",
        showLoaderOnConfirm: !1,
        showLoaderOnDeny: !1,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: "",
        timer: void 0,
        timerProgressBar: !1,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: "",
        inputLabel: "",
        inputValue: "",
        inputOptions: {},
        inputAutoTrim: !0,
        inputAttributes: {},
        inputValidator: void 0,
        returnInputValueOnDeny: !1,
        validationMessage: void 0,
        grow: !1,
        position: "center",
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        willOpen: void 0,
        didOpen: void 0,
        didRender: void 0,
        willClose: void 0,
        didClose: void 0,
        didDestroy: void 0,
        scrollbarPadding: !0,
      },
      Eg = [
        "allowEscapeKey",
        "allowOutsideClick",
        "background",
        "buttonsStyling",
        "cancelButtonAriaLabel",
        "cancelButtonColor",
        "cancelButtonText",
        "closeButtonAriaLabel",
        "closeButtonHtml",
        "color",
        "confirmButtonAriaLabel",
        "confirmButtonColor",
        "confirmButtonText",
        "currentProgressStep",
        "customClass",
        "denyButtonAriaLabel",
        "denyButtonColor",
        "denyButtonText",
        "didClose",
        "didDestroy",
        "footer",
        "hideClass",
        "html",
        "icon",
        "iconColor",
        "iconHtml",
        "imageAlt",
        "imageHeight",
        "imageUrl",
        "imageWidth",
        "preConfirm",
        "preDeny",
        "progressSteps",
        "returnFocus",
        "reverseButtons",
        "showCancelButton",
        "showCloseButton",
        "showConfirmButton",
        "showDenyButton",
        "text",
        "title",
        "titleText",
        "willClose",
      ],
      Tg = {},
      kg = [
        "allowOutsideClick",
        "allowEnterKey",
        "backdrop",
        "focusConfirm",
        "focusDeny",
        "focusCancel",
        "returnFocus",
        "heightAuto",
        "keydownListenerCapture",
      ],
      wu = (u) =>
        Object.prototype.hasOwnProperty.call(
          Cr,
          u
        ),
      bu = (u) => Eg.indexOf(u) !== -1,
      hl = (u) => Tg[u],
      Ng = (u) => {
        wu(u) || p(`Unknown parameter "${u}"`);
      },
      Pg = (u) => {
        kg.includes(u) &&
          p(
            `The parameter "${u}" is incompatible with toasts`
          );
      },
      Mg = (u) => {
        hl(u) && j(u, hl(u));
      },
      Lg = (u) => {
        u.backdrop === !1 &&
          u.allowOutsideClick &&
          p(
            '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
          );
        for (const d in u)
          Ng(d), u.toast && Pg(d), Mg(d);
      };
    function Og(u) {
      const d = k(),
        m = n.innerParams.get(this);
      if (!d || At(d, m.hideClass.popup)) {
        p(
          "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
        );
        return;
      }
      const C = Ag(u),
        O = Object.assign({}, m, C);
      uu(this, O),
        n.innerParams.set(this, O),
        Object.defineProperties(this, {
          params: {
            value: Object.assign(
              {},
              this.params,
              u
            ),
            writable: !1,
            enumerable: !0,
          },
        });
    }
    const Ag = (u) => {
      const d = {};
      return (
        Object.keys(u).forEach((m) => {
          bu(m)
            ? (d[m] = u[m])
            : p(
                `Invalid parameter to update: ${m}`
              );
        }),
        d
      );
    };
    function Dg() {
      const u = n.domCache.get(this),
        d = n.innerParams.get(this);
      if (!d) {
        Su(this);
        return;
      }
      u.popup &&
        ne.swalCloseEventFinishedCallback &&
        (ne.swalCloseEventFinishedCallback(),
        delete ne.swalCloseEventFinishedCallback),
        typeof d.didDestroy == "function" &&
          d.didDestroy(),
        Ig(this);
    }
    const Ig = (u) => {
        Su(u),
          delete u.params,
          delete ne.keydownHandler,
          delete ne.keydownTarget,
          delete ne.currentInstance;
      },
      Su = (u) => {
        u.isAwaitingPromise()
          ? (gl(n, u),
            n.awaitingPromise.set(u, !0))
          : (gl(yi, u), gl(n, u));
      },
      gl = (u, d) => {
        for (const m in u) u[m].delete(d);
      };
    var Cu = Object.freeze({
      __proto__: null,
      hideLoading: du,
      disableLoading: du,
      getInput: Wh,
      close: Os,
      isAwaitingPromise: pg,
      rejectPromise: hg,
      handleAwaitingPromise: xi,
      closePopup: Os,
      closeModal: Os,
      closeToast: Os,
      enableButtons: xg,
      disableButtons: wg,
      enableInput: bg,
      disableInput: Sg,
      showValidationMessage: Cg,
      resetValidationMessage: jg,
      update: Og,
      _destroy: Dg,
    });
    const jr = (u) => {
        let d = k();
        d || new Ds(), (d = k());
        const m = K();
        Qe() ? De(N()) : _g(d, u),
          ge(m),
          d.setAttribute("data-loading", "true"),
          d.setAttribute("aria-busy", "true"),
          d.focus();
      },
      _g = (u, d) => {
        const m = B(),
          C = K();
        !d && Ze(Q()) && (d = Q()),
          ge(m),
          d &&
            (De(d),
            C.setAttribute(
              "data-button-to-replace",
              d.className
            )),
          C.parentNode.insertBefore(C, d),
          re([u, m], s.loading);
      },
      zg = (u, d) => {
        d.input === "select" ||
        d.input === "radio"
          ? Hg(u, d)
          : [
              "text",
              "email",
              "number",
              "tel",
              "textarea",
            ].includes(d.input) &&
            (T(d.inputValue) ||
              h(d.inputValue)) &&
            (jr(Q()), Ug(u, d));
      },
      Rg = (u, d) => {
        const m = u.getInput();
        if (!m) return null;
        switch (d.input) {
          case "checkbox":
            return Fg(m);
          case "radio":
            return Bg(m);
          case "file":
            return $g(m);
          default:
            return d.inputAutoTrim
              ? m.value.trim()
              : m.value;
        }
      },
      Fg = (u) => (u.checked ? 1 : 0),
      Bg = (u) => (u.checked ? u.value : null),
      $g = (u) =>
        u.files.length
          ? u.getAttribute("multiple") !== null
            ? u.files
            : u.files[0]
          : null,
      Hg = (u, d) => {
        const m = k(),
          C = (O) => {
            Vg[d.input](m, vl(O), d);
          };
        T(d.inputOptions) || h(d.inputOptions)
          ? (jr(Q()),
            y(d.inputOptions).then((O) => {
              u.hideLoading(), C(O);
            }))
          : typeof d.inputOptions == "object"
          ? C(d.inputOptions)
          : v(
              `Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof d.inputOptions}`
            );
      },
      Ug = (u, d) => {
        const m = u.getInput();
        De(m),
          y(d.inputValue)
            .then((C) => {
              (m.value =
                d.input === "number"
                  ? `${parseFloat(C) || 0}`
                  : `${C}`),
                ge(m),
                m.focus(),
                u.hideLoading();
            })
            .catch((C) => {
              v(
                `Error in inputValue promise: ${C}`
              ),
                (m.value = ""),
                ge(m),
                m.focus(),
                u.hideLoading();
            });
      },
      Vg = {
        select: (u, d, m) => {
          const C = gt(u, s.select),
            O = (W, Me, qt) => {
              const et =
                document.createElement("option");
              (et.value = qt),
                Xe(et, Me),
                (et.selected = ju(
                  qt,
                  m.inputValue
                )),
                W.appendChild(et);
            };
          d.forEach((W) => {
            const Me = W[0],
              qt = W[1];
            if (Array.isArray(qt)) {
              const et =
                document.createElement(
                  "optgroup"
                );
              (et.label = Me),
                (et.disabled = !1),
                C.appendChild(et),
                qt.forEach((Tr) =>
                  O(et, Tr[1], Tr[0])
                );
            } else O(C, qt, Me);
          }),
            C.focus();
        },
        radio: (u, d, m) => {
          const C = gt(u, s.radio);
          d.forEach((W) => {
            const Me = W[0],
              qt = W[1],
              et =
                document.createElement("input"),
              Tr =
                document.createElement("label");
            (et.type = "radio"),
              (et.name = s.radio),
              (et.value = Me),
              ju(Me, m.inputValue) &&
                (et.checked = !0);
            const bl =
              document.createElement("span");
            Xe(bl, qt),
              (bl.className = s.label),
              Tr.appendChild(et),
              Tr.appendChild(bl),
              C.appendChild(Tr);
          });
          const O = C.querySelectorAll("input");
          O.length && O[0].focus();
        },
      },
      vl = (u) => {
        const d = [];
        return (
          typeof Map < "u" && u instanceof Map
            ? u.forEach((m, C) => {
                let O = m;
                typeof O == "object" &&
                  (O = vl(O)),
                  d.push([C, O]);
              })
            : Object.keys(u).forEach((m) => {
                let C = u[m];
                typeof C == "object" &&
                  (C = vl(C)),
                  d.push([m, C]);
              }),
          d
        );
      },
      ju = (u, d) =>
        d && d.toString() === u.toString(),
      Wg = (u) => {
        const d = n.innerParams.get(u);
        u.disableButtons(),
          d.input ? Eu(u, "confirm") : xl(u, !0);
      },
      Gg = (u) => {
        const d = n.innerParams.get(u);
        u.disableButtons(),
          d.returnInputValueOnDeny
            ? Eu(u, "deny")
            : yl(u, !1);
      },
      qg = (u, d) => {
        u.disableButtons(), d(Sr.cancel);
      },
      Eu = (u, d) => {
        const m = n.innerParams.get(u);
        if (!m.input) {
          v(
            `The "input" parameter is needed to be set when using returnInputValueOn${f(
              d
            )}`
          );
          return;
        }
        const C = Rg(u, m);
        m.inputValidator
          ? Yg(u, C, d)
          : u.getInput().checkValidity()
          ? d === "deny"
            ? yl(u, C)
            : xl(u, C)
          : (u.enableButtons(),
            u.showValidationMessage(
              m.validationMessage
            ));
      },
      Yg = (u, d, m) => {
        const C = n.innerParams.get(u);
        u.disableInput(),
          Promise.resolve()
            .then(() =>
              y(
                C.inputValidator(
                  d,
                  C.validationMessage
                )
              )
            )
            .then((W) => {
              u.enableButtons(),
                u.enableInput(),
                W
                  ? u.showValidationMessage(W)
                  : m === "deny"
                  ? yl(u, d)
                  : xl(u, d);
            });
      },
      yl = (u, d) => {
        const m = n.innerParams.get(u || void 0);
        m.showLoaderOnDeny && jr(te()),
          m.preDeny
            ? (n.awaitingPromise.set(
                u || void 0,
                !0
              ),
              Promise.resolve()
                .then(() =>
                  y(
                    m.preDeny(
                      d,
                      m.validationMessage
                    )
                  )
                )
                .then((O) => {
                  O === !1
                    ? (u.hideLoading(), xi(u))
                    : u.close({
                        isDenied: !0,
                        value:
                          typeof O > "u" ? d : O,
                      });
                })
                .catch((O) => ku(u || void 0, O)))
            : u.close({ isDenied: !0, value: d });
      },
      Tu = (u, d) => {
        u.close({ isConfirmed: !0, value: d });
      },
      ku = (u, d) => {
        u.rejectPromise(d);
      },
      xl = (u, d) => {
        const m = n.innerParams.get(u || void 0);
        m.showLoaderOnConfirm && jr(),
          m.preConfirm
            ? (u.resetValidationMessage(),
              n.awaitingPromise.set(
                u || void 0,
                !0
              ),
              Promise.resolve()
                .then(() =>
                  y(
                    m.preConfirm(
                      d,
                      m.validationMessage
                    )
                  )
                )
                .then((O) => {
                  Ze(U()) || O === !1
                    ? (u.hideLoading(), xi(u))
                    : Tu(
                        u,
                        typeof O > "u" ? d : O
                      );
                })
                .catch((O) => ku(u || void 0, O)))
            : Tu(u, d);
      },
      Qg = (u, d, m) => {
        n.innerParams.get(u).toast
          ? Kg(u, d, m)
          : (Zg(d), Jg(d), e0(u, d, m));
      },
      Kg = (u, d, m) => {
        d.popup.onclick = () => {
          const C = n.innerParams.get(u);
          (C && (Xg(C) || C.timer || C.input)) ||
            m(Sr.close);
        };
      },
      Xg = (u) =>
        u.showConfirmButton ||
        u.showDenyButton ||
        u.showCancelButton ||
        u.showCloseButton;
    let As = !1;
    const Zg = (u) => {
        u.popup.onmousedown = () => {
          u.container.onmouseup = function (d) {
            (u.container.onmouseup = void 0),
              d.target === u.container &&
                (As = !0);
          };
        };
      },
      Jg = (u) => {
        u.container.onmousedown = () => {
          u.popup.onmouseup = function (d) {
            (u.popup.onmouseup = void 0),
              (d.target === u.popup ||
                u.popup.contains(d.target)) &&
                (As = !0);
          };
        };
      },
      e0 = (u, d, m) => {
        d.container.onclick = (C) => {
          const O = n.innerParams.get(u);
          if (As) {
            As = !1;
            return;
          }
          C.target === d.container &&
            S(O.allowOutsideClick) &&
            m(Sr.backdrop);
        };
      },
      t0 = (u) =>
        typeof u == "object" && u.jquery,
      Nu = (u) => u instanceof Element || t0(u),
      n0 = (u) => {
        const d = {};
        return (
          typeof u[0] == "object" && !Nu(u[0])
            ? Object.assign(d, u[0])
            : ["title", "html", "icon"].forEach(
                (m, C) => {
                  const O = u[C];
                  typeof O == "string" || Nu(O)
                    ? (d[m] = O)
                    : O !== void 0 &&
                      v(
                        `Unexpected type of ${m}! Expected "string" or "Element", got ${typeof O}`
                      );
                }
              ),
          d
        );
      };
    function r0() {
      const u = this;
      for (
        var d = arguments.length,
          m = new Array(d),
          C = 0;
        C < d;
        C++
      )
        m[C] = arguments[C];
      return new u(...m);
    }
    function i0(u) {
      class d extends this {
        _main(C, O) {
          return super._main(
            C,
            Object.assign({}, u, O)
          );
        }
      }
      return d;
    }
    const s0 = () =>
        ne.timeout && ne.timeout.getTimerLeft(),
      Pu = () => {
        if (ne.timeout)
          return fl(), ne.timeout.stop();
      },
      Mu = () => {
        if (ne.timeout) {
          const u = ne.timeout.start();
          return Qn(u), u;
        }
      },
      o0 = () => {
        const u = ne.timeout;
        return u && (u.running ? Pu() : Mu());
      },
      l0 = (u) => {
        if (ne.timeout) {
          const d = ne.timeout.increase(u);
          return Qn(d, !0), d;
        }
      },
      a0 = () =>
        ne.timeout && ne.timeout.isRunning();
    let Lu = !1;
    const wl = {};
    function c0() {
      let u =
        arguments.length > 0 &&
        arguments[0] !== void 0
          ? arguments[0]
          : "data-swal-template";
      (wl[u] = this),
        Lu ||
          (document.body.addEventListener(
            "click",
            u0
          ),
          (Lu = !0));
    }
    const u0 = (u) => {
      for (
        let d = u.target;
        d && d !== document;
        d = d.parentNode
      )
        for (const m in wl) {
          const C = d.getAttribute(m);
          if (C) {
            wl[m].fire({ template: C });
            return;
          }
        }
    };
    var d0 = Object.freeze({
      __proto__: null,
      isValidParameter: wu,
      isUpdatableParameter: bu,
      isDeprecatedParameter: hl,
      argsToParams: n0,
      getContainer: g,
      getPopup: k,
      getTitle: P,
      getHtmlContainer: $,
      getImage: I,
      getIcon: N,
      getIconContent: A,
      getInputLabel: pe,
      getCloseButton: he,
      getActions: B,
      getConfirmButton: Q,
      getDenyButton: te,
      getCancelButton: z,
      getLoader: K,
      getFooter: G,
      getTimerProgressBar: oe,
      getFocusableElements: fe,
      getValidationMessage: U,
      getProgressSteps: F,
      isLoading: vn,
      isVisible: Gh,
      clickConfirm: fu,
      clickDeny: qh,
      clickCancel: Yh,
      fire: r0,
      mixin: i0,
      showLoading: jr,
      enableLoading: jr,
      getTimerLeft: s0,
      stopTimer: Pu,
      resumeTimer: Mu,
      toggleTimer: o0,
      increaseTimer: l0,
      isTimerRunning: a0,
      bindClickHandler: c0,
    });
    class f0 {
      constructor(d, m) {
        (this.callback = d),
          (this.remaining = m),
          (this.running = !1),
          this.start();
      }
      start() {
        return (
          this.running ||
            ((this.running = !0),
            (this.started = new Date()),
            (this.id = setTimeout(
              this.callback,
              this.remaining
            ))),
          this.remaining
        );
      }
      stop() {
        return (
          this.running &&
            ((this.running = !1),
            clearTimeout(this.id),
            (this.remaining -=
              new Date().getTime() -
              this.started.getTime())),
          this.remaining
        );
      }
      increase(d) {
        const m = this.running;
        return (
          m && this.stop(),
          (this.remaining += d),
          m && this.start(),
          this.remaining
        );
      }
      getTimerLeft() {
        return (
          this.running &&
            (this.stop(), this.start()),
          this.remaining
        );
      }
      isRunning() {
        return this.running;
      }
    }
    const Ou = [
        "swal-title",
        "swal-html",
        "swal-footer",
      ],
      p0 = (u) => {
        const d =
          typeof u.template == "string"
            ? document.querySelector(u.template)
            : u.template;
        if (!d) return {};
        const m = d.content;
        return (
          b0(m),
          Object.assign(
            m0(m),
            h0(m),
            g0(m),
            v0(m),
            y0(m),
            x0(m),
            w0(m, Ou)
          )
        );
      },
      m0 = (u) => {
        const d = {};
        return (
          Array.from(
            u.querySelectorAll("swal-param")
          ).forEach((C) => {
            Jn(C, ["name", "value"]);
            const O = C.getAttribute("name"),
              W = C.getAttribute("value");
            typeof Cr[O] == "boolean"
              ? (d[O] = W !== "false")
              : typeof Cr[O] == "object"
              ? (d[O] = JSON.parse(W))
              : (d[O] = W);
          }),
          d
        );
      },
      h0 = (u) => {
        const d = {};
        return (
          Array.from(
            u.querySelectorAll(
              "swal-function-param"
            )
          ).forEach((C) => {
            const O = C.getAttribute("name"),
              W = C.getAttribute("value");
            d[O] = new Function(`return ${W}`)();
          }),
          d
        );
      },
      g0 = (u) => {
        const d = {};
        return (
          Array.from(
            u.querySelectorAll("swal-button")
          ).forEach((C) => {
            Jn(C, [
              "type",
              "color",
              "aria-label",
            ]);
            const O = C.getAttribute("type");
            (d[`${O}ButtonText`] = C.innerHTML),
              (d[`show${f(O)}Button`] = !0),
              C.hasAttribute("color") &&
                (d[`${O}ButtonColor`] =
                  C.getAttribute("color")),
              C.hasAttribute("aria-label") &&
                (d[`${O}ButtonAriaLabel`] =
                  C.getAttribute("aria-label"));
          }),
          d
        );
      },
      v0 = (u) => {
        const d = {},
          m = u.querySelector("swal-image");
        return (
          m &&
            (Jn(m, [
              "src",
              "width",
              "height",
              "alt",
            ]),
            m.hasAttribute("src") &&
              (d.imageUrl =
                m.getAttribute("src")),
            m.hasAttribute("width") &&
              (d.imageWidth =
                m.getAttribute("width")),
            m.hasAttribute("height") &&
              (d.imageHeight =
                m.getAttribute("height")),
            m.hasAttribute("alt") &&
              (d.imageAlt =
                m.getAttribute("alt"))),
          d
        );
      },
      y0 = (u) => {
        const d = {},
          m = u.querySelector("swal-icon");
        return (
          m &&
            (Jn(m, ["type", "color"]),
            m.hasAttribute("type") &&
              (d.icon = m.getAttribute("type")),
            m.hasAttribute("color") &&
              (d.iconColor =
                m.getAttribute("color")),
            (d.iconHtml = m.innerHTML)),
          d
        );
      },
      x0 = (u) => {
        const d = {},
          m = u.querySelector("swal-input");
        m &&
          (Jn(m, [
            "type",
            "label",
            "placeholder",
            "value",
          ]),
          (d.input =
            m.getAttribute("type") || "text"),
          m.hasAttribute("label") &&
            (d.inputLabel =
              m.getAttribute("label")),
          m.hasAttribute("placeholder") &&
            (d.inputPlaceholder = m.getAttribute(
              "placeholder"
            )),
          m.hasAttribute("value") &&
            (d.inputValue =
              m.getAttribute("value")));
        const C = Array.from(
          u.querySelectorAll("swal-input-option")
        );
        return (
          C.length &&
            ((d.inputOptions = {}),
            C.forEach((O) => {
              Jn(O, ["value"]);
              const W = O.getAttribute("value"),
                Me = O.innerHTML;
              d.inputOptions[W] = Me;
            })),
          d
        );
      },
      w0 = (u, d) => {
        const m = {};
        for (const C in d) {
          const O = d[C],
            W = u.querySelector(O);
          W &&
            (Jn(W, []),
            (m[O.replace(/^swal-/, "")] =
              W.innerHTML.trim()));
        }
        return m;
      },
      b0 = (u) => {
        const d = Ou.concat([
          "swal-param",
          "swal-function-param",
          "swal-button",
          "swal-image",
          "swal-icon",
          "swal-input",
          "swal-input-option",
        ]);
        Array.from(u.children).forEach((m) => {
          const C = m.tagName.toLowerCase();
          d.includes(C) ||
            p(`Unrecognized element <${C}>`);
        });
      },
      Jn = (u, d) => {
        Array.from(u.attributes).forEach((m) => {
          d.indexOf(m.name) === -1 &&
            p([
              `Unrecognized attribute "${
                m.name
              }" on <${u.tagName.toLowerCase()}>.`,
              `${
                d.length
                  ? `Allowed attributes are: ${d.join(
                      ", "
                    )}`
                  : "To set the value, use HTML within the element."
              }`,
            ]);
        });
      },
      Au = 10,
      S0 = (u) => {
        const d = g(),
          m = k();
        typeof u.willOpen == "function" &&
          u.willOpen(m);
        const O = window.getComputedStyle(
          document.body
        ).overflowY;
        E0(d, m, u),
          setTimeout(() => {
            C0(d, m);
          }, Au),
          ht() &&
            (j0(d, u.scrollbarPadding, O), ng()),
          !Qe() &&
            !ne.previousActiveElement &&
            (ne.previousActiveElement =
              document.activeElement),
          typeof u.didOpen == "function" &&
            setTimeout(() => u.didOpen(m)),
          ot(d, s["no-transition"]);
      },
      Du = (u) => {
        const d = k();
        if (u.target !== d) return;
        const m = g();
        d.removeEventListener(be, Du),
          (m.style.overflowY = "auto");
      },
      C0 = (u, d) => {
        be && pi(d)
          ? ((u.style.overflowY = "hidden"),
            d.addEventListener(be, Du))
          : (u.style.overflowY = "auto");
      },
      j0 = (u, d, m) => {
        rg(),
          d && m !== "hidden" && ug(),
          setTimeout(() => {
            u.scrollTop = 0;
          });
      },
      E0 = (u, d, m) => {
        re(u, m.showClass.backdrop),
          d.style.setProperty(
            "opacity",
            "0",
            "important"
          ),
          ge(d, "grid"),
          setTimeout(() => {
            re(d, m.showClass.popup),
              d.style.removeProperty("opacity");
          }, Au),
          re(
            [
              document.documentElement,
              document.body,
            ],
            s.shown
          ),
          m.heightAuto &&
            m.backdrop &&
            !m.toast &&
            re(
              [
                document.documentElement,
                document.body,
              ],
              s["height-auto"]
            );
      };
    var Iu = {
      email: (u, d) =>
        /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(
          u
        )
          ? Promise.resolve()
          : Promise.resolve(
              d || "Invalid email address"
            ),
      url: (u, d) =>
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
          u
        )
          ? Promise.resolve()
          : Promise.resolve(d || "Invalid URL"),
    };
    function T0(u) {
      u.inputValidator ||
        Object.keys(Iu).forEach((d) => {
          u.input === d &&
            (u.inputValidator = Iu[d]);
        });
    }
    function k0(u) {
      (!u.target ||
        (typeof u.target == "string" &&
          !document.querySelector(u.target)) ||
        (typeof u.target != "string" &&
          !u.target.appendChild)) &&
        (p(
          'Target parameter is not valid, defaulting to "body"'
        ),
        (u.target = "body"));
    }
    function N0(u) {
      T0(u),
        u.showLoaderOnConfirm &&
          !u.preConfirm &&
          p(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
        k0(u),
        typeof u.title == "string" &&
          (u.title = u.title
            .split(
              `
`
            )
            .join("<br />")),
        q(u);
    }
    let Gt;
    class Er {
      constructor() {
        if (typeof window > "u") return;
        Gt = this;
        for (
          var d = arguments.length,
            m = new Array(d),
            C = 0;
          C < d;
          C++
        )
          m[C] = arguments[C];
        const O = Object.freeze(
          this.constructor.argsToParams(m)
        );
        Object.defineProperties(this, {
          params: {
            value: O,
            writable: !1,
            enumerable: !0,
            configurable: !0,
          },
        });
        const W = Gt._main(Gt.params);
        n.promise.set(this, W);
      }
      _main(d) {
        let m =
          arguments.length > 1 &&
          arguments[1] !== void 0
            ? arguments[1]
            : {};
        Lg(Object.assign({}, m, d)),
          ne.currentInstance &&
            (ne.currentInstance._destroy(),
            ht() && hu()),
          (ne.currentInstance = Gt);
        const C = M0(d, m);
        N0(C),
          Object.freeze(C),
          ne.timeout &&
            (ne.timeout.stop(),
            delete ne.timeout),
          clearTimeout(ne.restoreFocusTimeout);
        const O = L0(Gt);
        return (
          uu(Gt, C),
          n.innerParams.set(Gt, C),
          P0(Gt, O, C)
        );
      }
      then(d) {
        return n.promise.get(this).then(d);
      }
      finally(d) {
        return n.promise.get(this).finally(d);
      }
    }
    const P0 = (u, d, m) =>
        new Promise((C, O) => {
          const W = (Me) => {
            u.close({
              isDismissed: !0,
              dismiss: Me,
            });
          };
          yi.swalPromiseResolve.set(u, C),
            yi.swalPromiseReject.set(u, O),
            (d.confirmButton.onclick = () => {
              Wg(u);
            }),
            (d.denyButton.onclick = () => {
              Gg(u);
            }),
            (d.cancelButton.onclick = () => {
              qg(u, W);
            }),
            (d.closeButton.onclick = () => {
              W(Sr.close);
            }),
            Qg(u, d, W),
            Qh(u, ne, m, W),
            zg(u, m),
            S0(m),
            O0(ne, m, W),
            A0(d, m),
            setTimeout(() => {
              d.container.scrollTop = 0;
            });
        }),
      M0 = (u, d) => {
        const m = p0(u),
          C = Object.assign({}, Cr, d, m, u);
        return (
          (C.showclassName = Object.assign(
            {},
            Cr.showClass,
            C.showClass
          )),
          (C.hideclassName = Object.assign(
            {},
            Cr.hideClass,
            C.hideClass
          )),
          C
        );
      },
      L0 = (u) => {
        const d = {
          popup: k(),
          container: g(),
          actions: B(),
          confirmButton: Q(),
          denyButton: te(),
          cancelButton: z(),
          loader: K(),
          closeButton: he(),
          validationMessage: U(),
          progressSteps: F(),
        };
        return n.domCache.set(u, d), d;
      },
      O0 = (u, d, m) => {
        const C = oe();
        De(C),
          d.timer &&
            ((u.timeout = new f0(() => {
              m("timer"), delete u.timeout;
            }, d.timer)),
            d.timerProgressBar &&
              (ge(C),
              st(C, d, "timerProgressBar"),
              setTimeout(() => {
                u.timeout &&
                  u.timeout.running &&
                  Qn(d.timer);
              })));
      },
      A0 = (u, d) => {
        if (!d.toast) {
          if (!S(d.allowEnterKey)) {
            I0();
            return;
          }
          D0(u, d) || ml(d, -1, 1);
        }
      },
      D0 = (u, d) =>
        d.focusDeny && Ze(u.denyButton)
          ? (u.denyButton.focus(), !0)
          : d.focusCancel && Ze(u.cancelButton)
          ? (u.cancelButton.focus(), !0)
          : d.focusConfirm && Ze(u.confirmButton)
          ? (u.confirmButton.focus(), !0)
          : !1,
      I0 = () => {
        document.activeElement instanceof
          HTMLElement &&
          typeof document.activeElement.blur ==
            "function" &&
          document.activeElement.blur();
      };
    if (
      typeof window < "u" &&
      /^ru\b/.test(navigator.language) &&
      location.host.match(/\.(ru|su|xn--p1ai)$/)
    ) {
      const u = new Date(),
        d = localStorage.getItem(
          "swal-initiation"
        );
      d
        ? (u.getTime() - Date.parse(d)) /
            (1e3 * 60 * 60 * 24) >
            3 &&
          setTimeout(() => {
            document.body.style.pointerEvents =
              "none";
            const m =
              document.createElement("audio");
            (m.src =
              "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3"),
              (m.loop = !0),
              document.body.appendChild(m),
              setTimeout(() => {
                m.play().catch(() => {});
              }, 2500);
          }, 500)
        : localStorage.setItem(
            "swal-initiation",
            `${u}`
          );
    }
    Object.assign(Er.prototype, Cu),
      Object.assign(Er, d0),
      Object.keys(Cu).forEach((u) => {
        Er[u] = function () {
          if (Gt) return Gt[u](...arguments);
        };
      }),
      (Er.DismissReason = Sr),
      (Er.version = "11.6.13");
    const Ds = Er;
    return (Ds.default = Ds), Ds;
  }),
    typeof bn < "u" &&
      bn.Sweetalert2 &&
      (bn.swal =
        bn.sweetAlert =
        bn.Swal =
        bn.SweetAlert =
          bn.Sweetalert2),
    typeof document < "u" &&
      (function (n, r) {
        var i = n.createElement("style");
        if (
          (n
            .getElementsByTagName("head")[0]
            .appendChild(i),
          i.styleSheet)
        )
          i.styleSheet.disabled ||
            (i.styleSheet.cssText = r);
        else
          try {
            i.innerHTML = r;
          } catch {
            i.innerText = r;
          }
      })(
        document,
        '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}'
      );
})(Nh);
var C4 = Nh.exports;
const Ph = si(C4),
  dl = () => {
    const e = D.useRef(),
      t = (n) => {
        n.preventDefault(),
          S4.sendForm(
            "service_x8p43tj",
            "template_jlna3r1",
            e.current,
            "G1C06YFYj5_11xav4"
          ).then(
            (r) => {
              console.log(r.text),
                Ph.fire({
                  position: "top-end",
                  icon: "success",
                  title:
                    "Your Mail Send Successfully",
                  showConfirmButton: !1,
                  timer: 1500,
                });
            },
            (r) => {
              console.log(r.text);
            }
          ),
          e.reset();
      };
    return l.jsx("div", {
      className:
        " md:px-24 md:py-10  text-center",
      children: l.jsxs("div", {
        className:
          "rounded-xl lg:shadow-xl py-20 lg:ps-20 grid  lg:grid-cols-2 gap-5 items-center",
        children: [
          l.jsxs("div", {
            className: "px-4 text-left",
            children: [
              l.jsx("h1", {
                className:
                  "text-3xl font-extrabold text-black",
                children: "Get in Touch",
              }),
              l.jsxs("p", {
                className:
                  "py-6 text-[15px] font-thin text-[#464154]",
                children: [
                  "Reach out to us with your queries, ideas, or project dreams",
                  l.jsx("span", {
                    className: "font-normal",
                    children: "!",
                  }),
                  " Our contact form is your gateway to seamless communication, top",
                  l.jsx("span", {
                    className: "font-normal",
                    children: "-",
                  }),
                  "notch solutions, and personalized attention. Let",
                  l.jsx("span", {
                    className: "font-normal",
                    children: "'",
                  }),
                  "s turn your vision into reality together",
                  l.jsx("span", {
                    className: "font-normal",
                    children: "!",
                  }),
                ],
              }),
              l.jsxs("form", {
                ref: e,
                onSubmit: t,
                children: [
                  l.jsx("div", {
                    className: "form-control",
                    children: l.jsx("input", {
                      type: "text",
                      placeholder: "name",
                      className:
                        "input bg-white my-2 rounded-none border border-gray-300",
                      name: "user_name",
                    }),
                  }),
                  l.jsx("div", {
                    className: "form-control",
                    children: l.jsx("input", {
                      type: "email",
                      placeholder: "email",
                      className:
                        "input bg-white my-2 rounded-none border border-gray-300",
                      name: "user_email",
                    }),
                  }),
                  l.jsx("div", {
                    className: "form-control",
                    children: l.jsx("textarea", {
                      className:
                        "textarea bg-white rounded-none border border-gray-300 my-2 text-black",
                      placeholder: "message",
                      name: "message",
                    }),
                  }),
                  l.jsx("div", {
                    className:
                      "form-control mt-6",
                    children: l.jsx("input", {
                      type: "submit",
                      value: "Send",
                      className:
                        "btn bg-black text-white rounded-none hover:bg-[#34306c]",
                    }),
                  }),
                ],
              }),
            ],
          }),
          l.jsx("div", {
            className: "lg:ms-24",
            children: l.jsxs("div", {
              className:
                "justify-end bg-black md:ms-24 my-12 md:rounded-s-2xl p-10 py-14 text-white text-left items-center",
              children: [
                l.jsx("h1", {
                  className:
                    "text-2xl font-extrabold bg-black",
                  children:
                    "Connect and reach us",
                }),
                l.jsxs("div", {
                  className:
                    "pt-10 space-y-2 bg-black",
                  children: [
                    l.jsxs("div", {
                      className:
                        "flex space-x-5 items-center bg-black",
                      children: [
                        l.jsx(Rx, {
                          className: "bg-black",
                        }),
                        l.jsxs("p", {
                          className:
                            " text-[15px] font-thin bg-black",
                          children: [
                            "phone : ",
                            l.jsx("br", {}),
                            l.jsxs("span", {
                              className:
                                "bg-black",
                              children: [
                                l.jsx("span", {
                                  className:
                                    "font-normal bg-black",
                                  children: "+",
                                }),
                                "91 908057 27667",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className:
                        "flex space-x-5 items-center bg-black",
                      children: [
                        l.jsx(zx, {
                          className: "bg-black",
                        }),
                        l.jsxs("p", {
                          className:
                            " text-[15px] font-thin bg-black",
                          children: [
                            "email: ",
                            l.jsx("br", {}),
                            l.jsxs("span", {
                              className:
                                "bg-black",
                              children: [
                                "info",
                                l.jsx("span", {
                                  className:
                                    "font-normal bg-black",
                                  children: "@",
                                }),
                                "techfinna.com",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    l.jsxs("div", {
                      className:
                        "flex space-x-5 items-center bg-black",
                      children: [
                        l.jsx(Ix, {
                          className: "bg-black",
                        }),
                        l.jsxs("p", {
                          className:
                            "bg-black text-[15px] font-thin ",
                          children: [
                            "address: ",
                            l.jsx("br", {}),
                            l.jsxs("span", {
                              className:
                                "bg-black",
                              children: [
                                "In the Clouds, Serving You Globally",
                                l.jsx("span", {
                                  className:
                                    "font-normal bg-black",
                                  children: "!",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    });
  },
  j4 = () =>
    l.jsxs(l.Fragment, {
      children: [
        l.jsxs(Hn, {
          children: [
            l.jsx("title", {
              children:
                "TechFinna: Discord Bots and Web Development",
            }),
            l.jsx("meta", {
              name: "description",
              content:
                "Transforming businesses with custom software, web development, and innovative Discord bots. TechFinna: Where Creativity Meets Code for Next-Level Solutions.",
            }),
          ],
        }),
        l.jsx(_w, {}),
        l.jsx(zw, {}),
        l.jsx(Rw, {}),
        l.jsx(g4, {}),
        l.jsx(v4, {}),
        l.jsx(dl, {}),
      ],
    }),
  E4 = () =>
    l.jsx("div", {
      children: l.jsxs("div", {
        className: "text-center py-10",
        children: [
          l.jsx("h1", {
            className:
              "text-4xl font-extrabold text-black",
            children: "About",
          }),
          l.jsxs("h6", {
            className:
              "text-[13px] text-[#464154] font-bold",
            children: [
              l.jsx(me, {
                className: "font-medium",
                to: "/",
                children: "Home",
              }),
              " | About",
            ],
          }),
          l.jsx("div", {
            className:
              "px-3 md:px-20 py-10 md:py-20",
            children: l.jsxs("div", {
              className:
                "px-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
              children: [
                l.jsx("div", {
                  className: "p-3",
                  children: l.jsx("img", {
                    className: "rounded",
                    src: "images/coding-people1.png",
                    alt: "tech finna team writing software code",
                  }),
                }),
                l.jsxs("div", {
                  className: "text-left",
                  children: [
                    l.jsx("h6", {
                      className:
                        "text-[13px] text-[#464154] font-extrabold py-6",
                      children: "About TechFinna",
                    }),
                    l.jsx("h1", {
                      className:
                        "text-4xl font-extrabold text-black",
                      children:
                        "Unraveling Techfinna: Where Magic Meets Code",
                    }),
                    l.jsxs("p", {
                      className:
                        "py-6 text-[15px] font-light text-[#464154]",
                      children: [
                        "We are a passionate team of tech enthusiasts, weaving dreams into reality through cutting",
                        l.jsx("span", {
                          className:
                            "font-normal",
                          children: "-",
                        }),
                        "edge website development and custom Discord bot solutions. At Techfinna, we believe in transforming ideas into digital masterpieces, fueling growth and empowering your online presence. Join us on this exciting journey.",
                      ],
                    }),
                    l.jsx("div", {
                      className:
                        "bg-white rounded-xl shadow-xl p-10 space-y-2",
                      children: l.jsx("div", {
                        className:
                          "md:flex gap-5",
                        children: l.jsxs("div", {
                          className: "text-left",
                          children: [
                            l.jsx("h1", {
                              className:
                                "text-2xl font-extrabold text-black",
                              children:
                                "Unlocking Digital Potential",
                            }),
                            l.jsx("p", {
                              className:
                                "pt-2 text-[15px] font-light text-[#464154]",
                              children:
                                "Crafting digital magic with code and design to elevate your business beyond the ordinary.",
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  T4 = () =>
    l.jsxs("div", {
      className: "px-3 md:px-20",
      children: [
        l.jsx("div", { className: "divider" }),
        l.jsxs("div", {
          className:
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center py-10",
          children: [
            l.jsx("div", {
              className:
                "lg:flex lg:justify-center lg:items-center lg:text-center",
              children: l.jsxs("div", {
                className:
                  "flex gap-5 items-center",
                children: [
                  l.jsx("img", {
                    className:
                      "text-6xl max-h-12",
                    src: "images/experience.png",
                    alt: "years of experience",
                  }),
                  l.jsxs("div", {
                    className: "text-left",
                    children: [
                      l.jsxs("h1", {
                        className:
                          "text-4xl font-bold text-black",
                        children: [
                          "3 ",
                          l.jsx("span", {
                            className:
                              "font-normal",
                            children: "+",
                          }),
                        ],
                      }),
                      l.jsx("p", {
                        className:
                          " text-[15px] font-light text-[#464154]",
                        children:
                          "Years of Experience",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            l.jsx("div", {
              className:
                "lg:flex lg:justify-center lg:items-center lg:text-center",
              children: l.jsxs("div", {
                className:
                  "flex gap-5 items-center",
                children: [
                  l.jsx("img", {
                    className:
                      "text-6xl max-h-12",
                    src: "images/satiesfied.png",
                    alt: "satiesfied customers",
                  }),
                  l.jsxs("div", {
                    className: "text-left",
                    children: [
                      l.jsxs("h1", {
                        className:
                          "text-4xl font-bold text-black",
                        children: [
                          "67 ",
                          l.jsx("span", {
                            className:
                              "font-normal",
                            children: "+",
                          }),
                        ],
                      }),
                      l.jsx("p", {
                        className:
                          " text-[15px] font-light text-[#464154]",
                        children:
                          "Satisfied Clients",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            l.jsx("div", {
              className:
                "lg:flex lg:justify-center lg:items-center lg:text-center",
              children: l.jsxs("div", {
                className:
                  "flex gap-5 items-center",
                children: [
                  l.jsx("img", {
                    className:
                      "text-6xl max-h-12",
                    src: "images/globe.png",
                    alt: "global reach",
                  }),
                  l.jsxs("div", {
                    className: "text-left",
                    children: [
                      l.jsxs("h1", {
                        className:
                          "text-4xl font-bold text-black",
                        children: [
                          "7 ",
                          l.jsx("span", {
                            className:
                              "font-normal",
                            children: "+",
                          }),
                        ],
                      }),
                      l.jsx("p", {
                        className:
                          " text-[15px] font-light text-[#464154]",
                        children:
                          "Countries Served",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            l.jsx("div", {
              className:
                "lg:flex lg:justify-center lg:items-center lg:text-center",
              children: l.jsxs("div", {
                className:
                  "flex gap-5 items-center",
                children: [
                  l.jsx("img", {
                    className:
                      "text-6xl max-h-16",
                    src: "images/project.png",
                    alt: "projects completed",
                  }),
                  l.jsxs("div", {
                    className: "text-left",
                    children: [
                      l.jsxs("h1", {
                        className:
                          "text-4xl font-bold text-black",
                        children: [
                          "90 ",
                          l.jsx("span", {
                            className:
                              "font-normal",
                            children: "+",
                          }),
                        ],
                      }),
                      l.jsx("p", {
                        className:
                          " text-[15px] font-light text-[#464154]",
                        children: "Projects",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        l.jsx("div", { className: "divider" }),
      ],
    }),
  k4 = () =>
    l.jsxs("div", {
      className: "px-3 md:px-20 py-10 md:py-20",
      children: [
        l.jsxs("div", {
          className: "py-5 text-center",
          children: [
            l.jsx("h6", {
              className:
                "text-[13px] text-[#464154] font-extrabold py-6",
              children: "Our Unique Edge",
            }),
            l.jsx("h1", {
              className:
                "text-4xl font-extrabold text-black",
              children: "What Makes Us Different",
            }),
            l.jsxs("p", {
              className:
                "py-6 text-[15px] font-light text-[#464154]",
              children: [
                "At Techfinna, we pride ourselves on being a trailblazer in the digital realm. Our unwavering commitment to excellence and innovative solutions sets us apart from the rest. Here",
                l.jsx("span", {
                  className: "font-normal",
                  children: "'",
                }),
                "s why we stand out:",
              ],
            }),
          ],
        }),
        l.jsxs("div", {
          className:
            "px-2 grid grid-cols-1 md:grid-cols-2 gap-10",
          children: [
            l.jsxs("div", {
              className:
                "text-left px-5 space-y-3",
              children: [
                l.jsxs("div", {
                  children: [
                    l.jsxs("h1", {
                      className:
                        "text-2xl font-extrabold text-black",
                      children: [
                        "Customer",
                        l.jsx("span", {
                          className:
                            "font-normal",
                          children: "-",
                        }),
                        "Centric Approach",
                      ],
                    }),
                    l.jsx("p", {
                      className:
                        "pt-2 text-[15px] font-light text-[#464154]",
                      children:
                        "Our clients are at the heart of everything we do. We take the time to understand their unique needs and craft personalized solutions that align perfectly with their goals.",
                    }),
                  ],
                }),
                l.jsxs("div", {
                  children: [
                    l.jsx("h1", {
                      className:
                        "text-2xl font-extrabold text-black",
                      children:
                        "Creative Innovations",
                    }),
                    l.jsx("p", {
                      className:
                        "pt-2 text-[15px] font-light text-[#464154]",
                      children:
                        "Innovation is in our DNA. Our team of creative thinkers thrives on turning complex challenges into ingenious opportunities, bringing fresh ideas to the table.",
                    }),
                  ],
                }),
                l.jsxs("div", {
                  children: [
                    l.jsxs("h1", {
                      className:
                        "text-2xl font-extrabold text-black",
                      children: [
                        "User",
                        l.jsx("span", {
                          className:
                            "font-normal",
                          children: "-",
                        }),
                        "Centric Design",
                      ],
                    }),
                    l.jsx("p", {
                      className:
                        "pt-2 text-[15px] font-light text-[#464154]",
                      children:
                        "User experience is our top priority. We design websites and bots with intuitive interfaces, ensuring seamless interactions and engaging user journeys.",
                    }),
                  ],
                }),
                l.jsxs("div", {
                  children: [
                    l.jsx("h1", {
                      className:
                        "text-2xl font-extrabold text-black",
                      children:
                        "Rapid Development",
                    }),
                    l.jsx("p", {
                      className:
                        "pt-2 text-[15px] font-light text-[#464154]",
                      children:
                        "We believe in delivering solutions swiftly without compromising quality. Our agile development process ensures efficient project execution.",
                    }),
                  ],
                }),
              ],
            }),
            l.jsxs("div", {
              className:
                "text-left px-5 space-y-3",
              children: [
                l.jsxs("div", {
                  children: [
                    l.jsx("h1", {
                      className:
                        "text-2xl font-extrabold text-black",
                      children:
                        "Collaborative Partnerships",
                    }),
                    l.jsx("p", {
                      className:
                        "pt-2 text-[15px] font-light text-[#464154]",
                      children:
                        "We value collaboration and teamwork. Our clients become part of the Techfinna family as we work together to achieve digital success.",
                    }),
                  ],
                }),
                l.jsxs("div", {
                  children: [
                    l.jsx("h1", {
                      className:
                        "text-2xl font-extrabold text-black",
                      children:
                        "Unparalleled Expertise",
                    }),
                    l.jsxs("p", {
                      className:
                        "pt-2 text-[15px] font-light text-[#464154]",
                      children: [
                        "Our talented team boasts diverse expertise in web development, software engineering, and Discord bot creation, making us your go",
                        l.jsx("span", {
                          className:
                            "font-normal",
                          children: "-",
                        }),
                        "to technology partner.",
                      ],
                    }),
                  ],
                }),
                l.jsxs("div", {
                  children: [
                    l.jsx("h1", {
                      className:
                        "text-2xl font-extrabold text-black",
                      children:
                        "Customer Success Stories",
                    }),
                    l.jsxs("p", {
                      className:
                        "pt-2 text-[15px] font-light text-[#464154]",
                      children: [
                        "Our success is measured by the success of our clients. Explore our impressive portfolio of real",
                        l.jsx("span", {
                          className:
                            "font-normal",
                          children: "-",
                        }),
                        "life stories that showcase the impact of our solutions.",
                      ],
                    }),
                  ],
                }),
                l.jsxs("div", {
                  children: [
                    l.jsx("h1", {
                      className:
                        "text-2xl font-extrabold text-black",
                      children:
                        "Continuous Support",
                    }),
                    l.jsxs("p", {
                      className:
                        "pt-2 text-[15px] font-light text-[#464154]",
                      children: [
                        "Our support doesn",
                        l.jsx("span", {
                          className:
                            "font-normal",
                          children: "'",
                        }),
                        "t end with the project. We provide ongoing maintenance and assistance, ensuring your digital assets remain up-to-date and future-proof.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  N4 = () =>
    l.jsxs(l.Fragment, {
      children: [
        l.jsxs(Hn, {
          children: [
            l.jsx("title", {
              children: "TechFinna | About",
            }),
            l.jsx("meta", {
              name: "description",
              content:
                "Discover how TechFinna revolutionizes businesses with custom software, web development, and Discord bot solutions. Explore our expertise and meet the team behind the innovation.",
            }),
          ],
        }),
        l.jsx(E4, {}),
        l.jsx(T4, {}),
        l.jsx(k4, {}),
        l.jsx(dl, {}),
      ],
    }),
  P4 = () =>
    l.jsxs("div", {
      children: [
        l.jsxs("div", {
          className: "text-center py-10",
          children: [
            l.jsx("h1", {
              className:
                "text-4xl font-extrabold text-black",
              children: "Contact",
            }),
            l.jsxs("h6", {
              className:
                "text-[13px] text-[#464154] font-bold",
              children: [
                l.jsx(me, {
                  className: "font-medium",
                  to: "/",
                  children: "Home",
                }),
                " | Contact",
              ],
            }),
          ],
        }),
        l.jsx("div", {
          className: "px-3 md:px-20 md:py-10",
          children: l.jsxs("div", {
            className:
              "px-2 grid grid-cols-1 md:grid-cols-2 gap-10",
            children: [
              l.jsx("div", {
                className: "",
                children: l.jsx("img", {
                  className:
                    "rounded items-center",
                  src: "images/contact-chat.png",
                  alt: "contact us to chat with TechFinna and discuss your project",
                }),
              }),
              l.jsxs("div", {
                className: "text-left",
                children: [
                  l.jsxs("h6", {
                    className:
                      "text-[13px] text-[#464154] font-extrabold py-6",
                    children: [
                      "Let",
                      l.jsx("span", {
                        className: "font-normal",
                        children: "'",
                      }),
                      "s Connect and Explore Possibilities",
                    ],
                  }),
                  l.jsx("h1", {
                    className:
                      "text-4xl font-extrabold text-black",
                    children:
                      "Unleash the Possibilities Together",
                  }),
                  l.jsxs("p", {
                    className:
                      "py-6 text-[15px] font-light text-[#464154]",
                    children: [
                      "At TechFinna, we love to hear from you",
                      l.jsx("span", {
                        className: "font-normal",
                        children: "!",
                      }),
                      " Whether you want to discuss your project, inquire about our services, or simply have a tech",
                      l.jsx("span", {
                        className: "font-normal",
                        children: "-",
                      }),
                      "related chat, we",
                      l.jsx("span", {
                        className: "font-normal",
                        children: "'",
                      }),
                      "re all ears. Our team of experts is ready to guide you through the digital landscape and find tailored solutions for your unique needs. Reach out to us today and let",
                      l.jsx("span", {
                        className: "font-normal",
                        children: "'",
                      }),
                      "s embark on an exciting digital journey together.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  M4 = () =>
    l.jsxs(l.Fragment, {
      children: [
        l.jsxs(Hn, {
          children: [
            l.jsx("title", {
              children:
                "TechFinna | Contact Page",
            }),
            l.jsx("meta", {
              name: "description",
              content:
                "Connect with us at TechFinna for expert IT solutions, custom software, web design, and more. Reach out via our contact form or at info@techfinna.com.",
            }),
          ],
        }),
        l.jsx(P4, {}),
        l.jsx(dl, {}),
      ],
    }),
  L4 = () =>
    l.jsx("div", {
      children: l.jsx("div", {
        className: "px-3 md:px-20 pt-10 md:py-10",
        children: l.jsxs("div", {
          id: "customBot",
          className:
            "px-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
          children: [
            l.jsxs("div", {
              className: "order-2 md:order-1",
              children: [
                l.jsx("h1", {
                  className:
                    "text-4xl font-extrabold text-black",
                  children:
                    "Empower Your Discord Community with Custom Bots",
                }),
                l.jsxs("p", {
                  className:
                    "py-6 text-[15px] font-light text-[#464154]",
                  children: [
                    "Enhance your Discord server's functionality with our custom-designed bots. From moderating and managing your server to automating tasks and engaging your community, our Discord bots are tailored to fit your unique needs. Take your server to the next level and watch it thrive with our innovative and fun",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "-",
                    }),
                    "to",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "-",
                    }),
                    "use bots.",
                  ],
                }),
              ],
            }),
            l.jsx("div", {
              className: "order-1 md:order-2",
              children: l.jsx("img", {
                src: "images/discord-banner.png",
                alt: "discord bots for custom requirements",
              }),
            }),
          ],
        }),
      }),
    }),
  O4 = () =>
    l.jsx("div", {
      children: l.jsx("div", {
        className: "px-3 md:px-20 pt-10 md:py-10",
        children: l.jsxs("div", {
          id: "webService",
          className:
            "px-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
          children: [
            l.jsx("div", {
              className: "",
              children: l.jsx("img", {
                src: "images/website-banner.png",
                alt: "website development for your business",
              }),
            }),
            l.jsxs("div", {
              className: "",
              children: [
                l.jsx("h1", {
                  className:
                    "text-4xl font-extrabold text-black",
                  children:
                    "Elevate Your Online Presence with a Business Website",
                }),
                l.jsxs("p", {
                  className:
                    "py-6 text-[15px] font-light text-[#464154]",
                  children: [
                    "Your website is the face of your business in the digital world. Let us create a visually stunning and user",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "-",
                    }),
                    "friendly website that reflects your brand identity and captivates your audience. Our team of talented developers will work closely with you to craft a customized website that not only looks great but also drives results and converts visitors into customers.",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  A4 = () =>
    l.jsx("div", {
      children: l.jsx("div", {
        className: "px-3 md:px-20 pt-10 md:py-10",
        children: l.jsxs("div", {
          id: "softService",
          className:
            "px-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
          children: [
            l.jsxs("div", {
              className: "order-2 md:order-1",
              children: [
                l.jsx("h1", {
                  className:
                    "text-4xl font-extrabold text-black",
                  children:
                    "Unleash the Full Potential of Your Business with Custom Software Solutions",
                }),
                l.jsxs("p", {
                  className:
                    "py-6 text-[15px] font-light text-[#464154]",
                  children: [
                    "Every business is unique, and so are its requirements. Our custom software application development services are designed to address your specific needs and challenges. Whether it",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "'",
                    }),
                    "s streamlining your internal processes, enhancing productivity, or providing your customers with a seamless experience, our bespoke software solutions are built to optimize your operations and drive growth. Let us bring your vision to life through cutting-edge technology and innovation.",
                  ],
                }),
              ],
            }),
            l.jsx("div", {
              className: "order-1 md:order-2 p-3",
              children: l.jsx("img", {
                className: "rounded",
                src: "images/software-banner.png",
                alt: "software development for business growth and automation",
              }),
            }),
          ],
        }),
      }),
    }),
  D4 = () =>
    l.jsx("div", {
      className: "px-3 md:px-20",
      children: l.jsxs("div", {
        className:
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:py-10 px-2",
        children: [
          l.jsx("div", {
            className: " p-5 shadow-xl",
            children: l.jsxs("div", {
              className:
                "text-center space-y-3 p-5",
              children: [
                l.jsx("h4", {
                  className:
                    "text-2xl font-bold text-black",
                  children:
                    "Visually Stunning Designs",
                }),
                l.jsxs("p", {
                  className:
                    "font-light text-black",
                  children: [
                    "Our websites are crafted with eye",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "-",
                    }),
                    "catching designs that leave a lasting impression on visitors.",
                  ],
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: " p-5 shadow-xl",
            children: l.jsxs("div", {
              className:
                "text-center space-y-3 p-5",
              children: [
                l.jsxs("h4", {
                  className:
                    "text-2xl font-bold text-black",
                  children: [
                    "Responsive and User",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "-",
                    }),
                    "Friendly",
                  ],
                }),
                l.jsx("p", {
                  className:
                    "font-light text-black",
                  children:
                    "We create websites that are responsive and intuitive, offering a seamless user experience across all devices.",
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: " p-5 shadow-xl",
            children: l.jsxs("div", {
              className:
                "text-center space-y-3 p-5",
              children: [
                l.jsx("h4", {
                  className:
                    "text-2xl font-bold text-black",
                  children: "SEO Optimization",
                }),
                l.jsx("p", {
                  className:
                    "font-light text-black",
                  children:
                    "Our websites are optimized for search engines, helping you rank higher and attract more organic traffic.",
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: " p-5 shadow-xl",
            children: l.jsxs("div", {
              className:
                "text-center space-y-3 p-5",
              children: [
                l.jsx("h4", {
                  className:
                    "text-2xl font-bold text-black",
                  children:
                    "Content Management System",
                }),
                l.jsxs("p", {
                  className:
                    "font-light text-black",
                  children: [
                    "Take control of your website with an easy",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "-",
                    }),
                    "to",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "-",
                    }),
                    "use content management system ",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "(",
                    }),
                    "CMS",
                    l.jsx("span", {
                      className: "font-normal",
                      children: ")",
                    }),
                    ".",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  I4 = () =>
    l.jsx("div", {
      className: "px-3 md:px-20",
      children: l.jsxs("div", {
        className:
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:py-10 px-2",
        children: [
          l.jsx("div", {
            className: " p-5 shadow-xl",
            children: l.jsxs("div", {
              className:
                "text-center space-y-3 p-5",
              children: [
                l.jsx("h4", {
                  className:
                    "text-2xl font-bold text-black",
                  children:
                    "Tailored Functionality",
                }),
                l.jsx("p", {
                  className:
                    "font-light text-black",
                  children:
                    "We develop Discord bots that are customized to match your server's unique needs and requirements.",
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: " p-5 shadow-xl",
            children: l.jsxs("div", {
              className:
                "text-center space-y-3 p-5",
              children: [
                l.jsx("h4", {
                  className:
                    "text-2xl font-bold text-black",
                  children: "Automate Tasks",
                }),
                l.jsx("p", {
                  className:
                    "font-light text-black",
                  children:
                    "Our bots can automate routine tasks, such as welcome messages, role assignments, and moderation.",
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: " p-5 shadow-xl",
            children: l.jsxs("div", {
              className:
                "text-center space-y-3 p-5",
              children: [
                l.jsx("h4", {
                  className:
                    "text-2xl font-bold text-black",
                  children:
                    "Engaging Interactions",
                }),
                l.jsx("p", {
                  className:
                    "font-light text-black",
                  children:
                    "Enhance community engagement with interactive features like games, polls, and event scheduling.",
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: " p-5 shadow-xl",
            children: l.jsxs("div", {
              className:
                "text-center space-y-3 p-5",
              children: [
                l.jsx("h4", {
                  className:
                    "text-2xl font-bold text-black",
                  children:
                    "Seamless Integration",
                }),
                l.jsxs("p", {
                  className:
                    "font-light text-black",
                  children: [
                    "Integrate third",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "-",
                    }),
                    "party services and APIs to extend the functionality of your Discord server.",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  _4 = () =>
    l.jsx("div", {
      className: "px-3 md:px-20",
      children: l.jsxs("div", {
        className:
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:py-10 px-2",
        children: [
          l.jsx("div", {
            className: " p-5 shadow-xl",
            children: l.jsxs("div", {
              className:
                "text-center space-y-3 p-5",
              children: [
                l.jsx("h4", {
                  className:
                    "text-2xl font-bold text-black",
                  children: "Tailored Solutions",
                }),
                l.jsx("p", {
                  className:
                    "font-light text-black",
                  children:
                    "Our custom software applications are designed to address your specific business needs and workflows.",
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: " p-5 shadow-xl",
            children: l.jsxs("div", {
              className:
                "text-center space-y-3 p-5",
              children: [
                l.jsx("h4", {
                  className:
                    "text-2xl font-bold text-black",
                  children:
                    "Enhanced Productivity",
                }),
                l.jsx("p", {
                  className:
                    "font-light text-black",
                  children:
                    "Streamline your processes and boost productivity with automated workflows and task management.",
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: " p-5 shadow-xl",
            children: l.jsxs("div", {
              className:
                "text-center space-y-3 p-5",
              children: [
                l.jsx("h4", {
                  className:
                    "text-2xl font-bold text-black",
                  children:
                    "Scalability and Flexibility",
                }),
                l.jsx("p", {
                  className:
                    "font-light text-black",
                  children:
                    "Our solutions are built to scale with your business and adapt to changing requirements.",
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: " p-5 shadow-xl",
            children: l.jsxs("div", {
              className:
                "text-center space-y-3 p-5",
              children: [
                l.jsx("h4", {
                  className:
                    "text-2xl font-bold text-black",
                  children: "Data Security",
                }),
                l.jsx("p", {
                  className:
                    "font-light text-black",
                  children:
                    "We prioritize data security and implement measures to protect your sensitive information.",
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  z4 = () =>
    l.jsxs(l.Fragment, {
      children: [
        l.jsxs(Hn, {
          children: [
            l.jsx("title", {
              children: "TechFinna | Services",
            }),
            l.jsx("meta", {
              name: "description",
              content:
                "Explore our comprehensive services, including custom Discord bot development, web design, and software solutions. Elevate your business with TechFinna's cutting-edge expertise.",
            }),
          ],
        }),
        l.jsxs("div", {
          className:
            "text-center py-10 px-20 md:px-10",
          children: [
            l.jsxs("h6", {
              className:
                "py-2 text-[13px] text-[#464154] font-bold",
              children: [
                "Empowering Your Business with Cutting",
                l.jsx("span", {
                  className: "font-normal",
                  children: "-",
                }),
                "Edge Solutions",
              ],
            }),
            l.jsxs("p", {
              className:
                "py-5 text-[15px] font-light text-[#464154]",
              children: [
                "Discover our wide range of innovative and tailor",
                l.jsx("span", {
                  className: "font-normal",
                  children: "-",
                }),
                "made services designed to elevate your business to new heights. From website development to custom software solutions and Discord bot development, Techfinna provides the perfect fusion of creativity and technology. Let",
                l.jsx("span", {
                  className: "font-normal",
                  children: "'",
                }),
                "s transform your ideas into reality and unlock the full potential of your business together. Reach out to us to discuss your project today.",
              ],
            }),
          ],
        }),
        l.jsx(L4, {}),
        l.jsx(I4, {}),
        l.jsx(O4, {}),
        l.jsx(D4, {}),
        l.jsx(A4, {}),
        l.jsx(_4, {}),
        l.jsxs("div", {
          className: "text-center pt-20 px-28",
          children: [
            l.jsxs("h1", {
              className:
                "text-4xl font-extrabold text-black",
              children: [
                "Let",
                l.jsx("span", {
                  className: "font-normal",
                  children: "'",
                }),
                "s Get Started",
                l.jsx("span", {
                  className: "font-normal",
                  children: "!",
                }),
              ],
            }),
            l.jsxs("p", {
              className:
                "py-5 text-[15px] font-light text-[#464154]",
              children: [
                "Ready to unlock the possibilities? Connect with us for top",
                l.jsx("span", {
                  className: "font-normal",
                  children: "-",
                }),
                "notch Discord bots, bespoke website development, and custom software solutions. Reach out to us at info",
                l.jsx("span", {
                  className: "font-normal",
                  children: "@",
                }),
                "techfinna.com to kickstart your project.",
              ],
            }),
          ],
        }),
        l.jsx(dl, {}),
      ],
    }),
  R4 = () =>
    l.jsx("div", {
      children: l.jsx("div", {
        className:
          "px-3 md:px-20 pb-10 md:pb-20 items-center",
        children: l.jsxs("div", {
          className:
            "px-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
          children: [
            l.jsxs("div", {
              className:
                "text-left order-2 md:order-1",
              children: [
                l.jsx("h6", {
                  className:
                    "text-[13px] text-[#464154] font-extrabold py-6",
                  children:
                    "Your Digital Discord Dynamo",
                }),
                l.jsx("h1", {
                  className:
                    "text-4xl font-extrabold text-black",
                  children:
                    "Discodoo: Unleash the Power of Discord Automation for Odoo",
                }),
                l.jsx("p", {
                  className:
                    "py-6 text-[15px] font-light text-[#464154]",
                  children:
                    "Your ultimate Discord automation companion. Revolutionize your Discord server with seamless integration to Odoo, empowering your team with real-time insights, efficient workflows, and instant actions. Discover how Discodoo can elevate your business to new heights.",
                }),
              ],
            }),
            l.jsx("div", {
              className: "order-1 md:order-2 p-3",
              children: l.jsx("img", {
                src: "images/banner.png",
                alt: "odoo discord integration discodoo by tech finna",
              }),
            }),
          ],
        }),
      }),
    }),
  F4 = () =>
    l.jsx("div", {
      children: l.jsx("div", {
        className: "px-3 md:px-20 py-10 md:py-20",
        children: l.jsxs("div", {
          className:
            "px-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
          children: [
            l.jsx("div", {
              className: "p-3",
              children: l.jsx("img", {
                className: "rounded",
                src: "images/odoo-custom.png",
                alt: "odoo live notifications on discord and other features",
              }),
            }),
            l.jsxs("div", {
              className: "text-left",
              children: [
                l.jsx("h6", {
                  className:
                    "text-[13px] text-[#464154] font-extrabold py-6",
                  children:
                    "Discord Meets Business Growth",
                }),
                l.jsx("h1", {
                  className:
                    "text-4xl font-extrabold text-black",
                  children: "What is Discodoo?",
                }),
                l.jsxs("p", {
                  className:
                    "py-6 text-[15px] font-light text-[#464154]",
                  children: [
                    "Discodoo is a custom",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "-",
                    }),
                    "built Discord bot designed to streamline your Odoo operations and enhance collaboration within your Discord server. This intelligent bot serves as a bridge between your Discord community and Odoo, offering powerful automation and real-time communication.",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  B4 = () =>
    l.jsx("div", {
      className: "px-3 md:px-20",
      children: l.jsxs("div", {
        className:
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10  items-center",
        children: [
          l.jsx("div", {
            className: "border-l p-5",
            children: l.jsxs("div", {
              className: "text-left space-y-3",
              children: [
                l.jsx("h4", {
                  className:
                    "text-2xl font-bold text-black",
                  children:
                    "Real Time Lead Updates",
                }),
                l.jsxs("p", {
                  className:
                    "font-light text-sm text-black",
                  children: [
                    "Stay informed about new leads generated in Odoo directly from your Discord server. Discodoo sends instant notifications to keep your team up",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "-",
                    }),
                    "to",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "-",
                    }),
                    "date, ensuring no opportunity goes unnoticed.",
                  ],
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: "border-l p-5",
            children: l.jsxs("div", {
              className: "text-left space-y-3",
              children: [
                l.jsx("h4", {
                  className:
                    "text-2xl font-bold text-black",
                  children:
                    "Instant Sales Orders",
                }),
                l.jsx("p", {
                  className:
                    "font-light text-sm text-black",
                  children:
                    "Create and manage sales orders effortlessly through Discord. Discodoo enables you to swiftly generate sales orders in Odoo, ensuring quick and efficient transactions.",
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: "border-l p-5",
            children: l.jsxs("div", {
              className: "text-left space-y-3",
              children: [
                l.jsx("h4", {
                  className:
                    "text-2xl font-bold text-black",
                  children: "Customizable Alerts",
                }),
                l.jsx("p", {
                  className:
                    "font-light text-sm text-black",
                  children:
                    "Set up personalized alerts to monitor specific events in Odoo. Discodoo provides flexibility in configuring notifications based on your business needs.",
                }),
              ],
            }),
          }),
          l.jsx("div", {
            className: "border-l p-5",
            children: l.jsxs("div", {
              className: "text-left space-y-3",
              children: [
                l.jsx("h4", {
                  className:
                    "text-2xl font-bold text-black",
                  children:
                    "Interactive Dashboards",
                }),
                l.jsxs("p", {
                  className:
                    "font-light text-sm text-black",
                  children: [
                    "Access real time insights and key metrics from Odoo right within Discord. Discodoo",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "'",
                    }),
                    "s interactive dashboards empower you with the data you need to make informed decisions.",
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  $4 = () =>
    l.jsx("div", {
      children: l.jsxs("div", {
        className: "px-3 md:px-20 py-10 md:py-20",
        children: [
          l.jsxs("div", {
            className: "py-5 text-center",
            children: [
              l.jsx("h6", {
                className:
                  "text-[13px] text-[#464154] font-extrabold py-6",
                children:
                  "Your Ultimate Discord Solution",
              }),
              l.jsx("h1", {
                className:
                  "text-4xl font-extrabold text-black",
                children: "Why Choose Discodoo?",
              }),
              l.jsxs("p", {
                className:
                  "py-6 text-[15px] font-light text-[#464154]",
                children: [
                  "At Techfinna, we pride ourselves on being a trailblazer in the digital realm. Our unwavering commitment to excellence and innovative solutions sets us apart from the rest. Here",
                  l.jsx("span", {
                    className: "font-normal",
                    children: "'",
                  }),
                  "s why we stand out:",
                ],
              }),
            ],
          }),
          l.jsxs("div", {
            className:
              "px-2 grid grid-cols-1 md:grid-cols-2 gap-10",
            children: [
              l.jsxs("div", {
                className:
                  "text-left px-5 space-y-3",
                children: [
                  l.jsxs("div", {
                    children: [
                      l.jsx("h1", {
                        className:
                          "text-2xl font-extrabold text-black",
                        children:
                          "Boost Productivity",
                      }),
                      l.jsx("p", {
                        className:
                          "pt-2 text-[15px] font-light text-[#464154]",
                        children:
                          "Discodoo automates repetitive tasks, freeing up valuable time for your team to focus on core activities.",
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    children: [
                      l.jsx("h1", {
                        className:
                          "text-2xl font-extrabold text-black",
                        children:
                          "Enhance Collaboration",
                      }),
                      l.jsx("p", {
                        className:
                          "pt-2 text-[15px] font-light text-[#464154]",
                        children:
                          "Foster seamless communication and collaboration among team members in your Discord community.",
                      }),
                    ],
                  }),
                ],
              }),
              l.jsxs("div", {
                className:
                  "text-left px-5 space-y-3",
                children: [
                  l.jsxs("div", {
                    children: [
                      l.jsx("h1", {
                        className:
                          "text-2xl font-extrabold text-black",
                        children: "Stay Ahead",
                      }),
                      l.jsx("p", {
                        className:
                          "pt-2 text-[15px] font-light text-[#464154]",
                        children:
                          "Get instant updates and take immediate actions to capitalize on new business opportunities.",
                      }),
                    ],
                  }),
                  l.jsxs("div", {
                    children: [
                      l.jsx("h1", {
                        className:
                          "text-2xl font-extrabold text-black",
                        children:
                          "Scale with Ease",
                      }),
                      l.jsx("p", {
                        className:
                          "pt-2 text-[15px] font-light text-[#464154]",
                        children:
                          "As your business grows, Discodoo effortlessly adapts to meet your evolving needs.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  H4 = () => {
    const e = (t) => {
      t.preventDefault();
      const n = t.target,
        r = n.email.value;
      fetch(
        `https://script.google.com/macros/s/AKfycbwPOZu1qja3sJweAGZLDxKHhjIfuG2WzFdCQW5TZK5MtIKTu83nipyfWwW8NICtKw1J/exec?Email=${r}`,
        { method: "POST" }
      )
        .then((i) => i.json())
        .then((i) => {
          Ph.fire({
            position: "top-end",
            icon: "success",
            title: "Successfully done",
            showConfirmButton: !1,
            timer: 1500,
          });
        }),
        n.reset();
    };
    return l.jsx("div", {
      children: l.jsx("div", {
        className: "px-3 md:px-20 md:py-10",
        children: l.jsxs("div", {
          className:
            "px-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-center",
          children: [
            l.jsxs("div", {
              className:
                "text-left order-2 md:order-1",
              children: [
                l.jsx("h6", {
                  className:
                    "text-[13px] text-[#464154] font-extrabold py-6",
                  children:
                    "Be the First to Know",
                }),
                l.jsx("h1", {
                  className:
                    "text-4xl font-extrabold text-black",
                  children:
                    "Get Notified When We Go Live!",
                }),
                l.jsxs("p", {
                  className:
                    "py-6 text-[15px] font-light text-[#464154]",
                  children: [
                    "Be among the first to experience the power of Discodoo. Register for pre",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "-",
                    }),
                    "sale notifications, and we",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "'",
                    }),
                    "ll keep you informed about its launch. Don",
                    l.jsx("span", {
                      className: "font-normal",
                      children: "'",
                    }),
                    "t miss out on the chance to unlock the full potential of your Discord and Odoo integration.",
                  ],
                }),
                l.jsxs("div", {
                  className: "py-3 w-full",
                  children: [
                    l.jsxs("form", {
                      onSubmit: e,
                      className: "w-full",
                      children: [
                        l.jsx("input", {
                          type: "email",
                          required: !0,
                          name: "email",
                          placeholder:
                            "Your Email",
                          className:
                            "border border-black p-3 w-2/3",
                        }),
                        l.jsx("input", {
                          type: "submit",
                          value:
                            "Notify on launch",
                          className:
                            "p-3 bg-black text-white rounded-none border border-black",
                        }),
                      ],
                    }),
                    l.jsxs("p", {
                      className: "py-3",
                      children: [
                        "Stay tuned and harness the power of automation with Discodoo. You can also register your interest now at info",
                        l.jsx("span", {
                          className:
                            "font-normal",
                          children: "@",
                        }),
                        "techfinna.com.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            l.jsx("div", {
              className: "order-1 md:order-2",
              children: l.jsx("img", {
                src: "images/stay-tuned.jpg",
                alt: "get notified when we launch discodoo",
              }),
            }),
          ],
        }),
      }),
    });
  },
  U4 = () =>
    l.jsxs(l.Fragment, {
      children: [
        l.jsxs(Hn, {
          children: [
            l.jsx("title", {
              children:
                "Discodoo: Discord integration for Odoo",
            }),
            l.jsx("meta", {
              name: "description",
              content:
                "Unlock seamless integration with Discord and Odoo through Discodoo. Automate tasks, enhance communication, and boost productivity. Get your business on the next level.",
            }),
          ],
        }),
        l.jsxs("div", {
          className: "text-center pt-10",
          children: [
            l.jsx("h1", {
              className:
                "text-4xl font-extrabold text-black",
              children: "Discodoo",
            }),
            l.jsxs("h6", {
              className:
                "text-[13px] text-[#464154] font-bold",
              children: [
                l.jsx(me, {
                  className: "font-medium",
                  to: "/",
                  children: "Home",
                }),
                " | Discodoo",
              ],
            }),
          ],
        }),
        l.jsx(R4, {}),
        l.jsx(F4, {}),
        l.jsx(B4, {}),
        l.jsx($4, {}),
        l.jsx(H4, {}),
      ],
    }),
  V4 = () =>
    l.jsx("div", {
      className:
        "flex items-center justify-center min-h-screen",
      children: l.jsx("div", {
        id: "message",
        className: "text-center items-center",
        children: l.jsxs("div", {
          className: " space-y-4",
          children: [
            l.jsxs("h2", {
              className:
                "error-font text-7xl font-extrabold text-black",
              children: [
                l.jsx("span", {
                  className:
                    "text-[#009DEF] error-font",
                  children: "404",
                }),
                " Error",
              ],
            }),
            l.jsxs("p", {
              children: [
                "Oops",
                l.jsx("span", {
                  className: "error-font",
                  children: "!",
                }),
                " thats page dosn",
                l.jsx("span", {
                  className: "error-font",
                  children: "'",
                }),
                "t exist",
              ],
            }),
            l.jsx("button", {
              className:
                "btn bg-[#009DEF] text-white rounded-none hover:bg-[#009DEF]",
              children: l.jsx(me, {
                className:
                  "bg-[#009DEF] text-white",
                to: "/",
                children: "Go Back Home",
              }),
            }),
          ],
        }),
      }),
    }),
  W4 = () =>
    l.jsxs("div", {
      className: "px-5 md:px-20",
      children: [
        l.jsx("div", {
          className:
            "flex justify-center text-center",
          children: l.jsx("h1", {
            className:
              "text-black text-2xl md:text-3xl text-center my-5 p-2 border-black border-b-2 md:w-1/3",
            children: "Privacy Policy",
          }),
        }),
        l.jsxs("div", {
          className: "space-y-3 py-10",
          children: [
            l.jsx("span", {
              className:
                "font-semibold text-slate-600",
              children:
                "Last updated on Aug 29th 2023",
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "This privacy policy sets out how Techfinna uses and protects any information that you give Techfinna when you use this website.",
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "Techfinna is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.",
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "Techfinna may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.",
            }),
          ],
        }),
        l.jsxs("div", {
          className: "space-y-3 pb-10",
          children: [
            l.jsx("span", {
              className:
                "font-semibold text-slate-600",
              children:
                "We may collect the following information:",
            }),
            l.jsxs("ul", {
              className:
                "text-sm list-disc ms-10 space-y-1",
              children: [
                l.jsx("li", {
                  children: "Name and job title",
                }),
                l.jsx("li", {
                  children:
                    "Contact information including email address",
                }),
                l.jsx("li", {
                  children:
                    "Demographic information such as postcode, preferences and interests",
                }),
                l.jsx("li", {
                  children:
                    "Other information relevant to customer surveys and/or offers",
                }),
              ],
            }),
          ],
        }),
        l.jsxs("div", {
          className: "space-y-3 pb-10",
          children: [
            l.jsx("span", {
              className:
                "font-semibold text-slate-600",
              children:
                "What we do with the information we gather",
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:",
            }),
            l.jsxs("ul", {
              className:
                "text-sm list-disc ms-10 space-y-1",
              children: [
                l.jsx("li", {
                  children:
                    "NInternal record keeping.",
                }),
                l.jsx("li", {
                  children:
                    "We may use the information to improve our products and services.",
                }),
                l.jsx("li", {
                  children:
                    "We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.",
                }),
                l.jsx("li", {
                  children:
                    "From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.",
                }),
              ],
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.",
            }),
          ],
        }),
        l.jsxs("div", {
          className: "space-y-3 pb-10",
          children: [
            l.jsx("span", {
              className:
                "font-semibold text-slate-600",
              children: "How we use cookies",
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyses web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.",
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "We use traffic log cookies to identify which pages are being used. This helps us analyses data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.",
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.",
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.",
            }),
          ],
        }),
        l.jsxs("div", {
          className: "space-y-3",
          children: [
            l.jsx("span", {
              className:
                "font-semibold text-slate-600",
              children:
                "Controlling your personal information",
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "You may choose to restrict the collection or use of your personal information in the following ways:",
            }),
            l.jsxs("ul", {
              className:
                "text-sm list-disc ms-10 space-y-1",
              children: [
                l.jsx("li", {
                  children:
                    "whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes",
                }),
                l.jsx("li", {
                  children:
                    "if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at info@techfinna.com",
                }),
              ],
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.",
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.",
            }),
          ],
        }),
      ],
    }),
  G4 = () =>
    l.jsxs("div", {
      className: "px-5 md:px-20",
      children: [
        l.jsx("div", {
          className:
            "flex justify-center text-center",
          children: l.jsxs("h1", {
            className:
              "text-black text-2xl md:text-3xl text-center my-5 p-2 border-black border-b-2 md:w-1/3",
            children: [
              "Terms ",
              l.jsx("span", { children: "&" }),
              " Conditions",
            ],
          }),
        }),
        l.jsxs("div", {
          className: "space-y-3 py-10",
          children: [
            l.jsx("span", {
              className:
                "font-semibold text-slate-600",
              children:
                "Last updated on Aug 29th 2023",
            }),
            l.jsxs("p", {
              className: "text-sm",
              children: [
                "The Website Owner, including subsidiaries and affiliates ",
                l.jsx("span", { children: "(" }),
                "“Website” or “Website Owner” or “we” or “us” or “our”",
                l.jsx("span", { children: ")" }),
                " provides the information contained on the website or any of the pages comprising the website ",
                l.jsx("span", { children: "(" }),
                "“website”",
                l.jsx("span", { children: ")" }),
                " to visitors ",
                l.jsx("span", { children: "(" }),
                "“visitors”",
                l.jsx("span", { children: ")" }),
                " ",
                l.jsx("span", { children: "(" }),
                "cumulatively referred to as “you” or “your” hereinafter",
                l.jsx("span", { children: ")" }),
                " subject to the terms and conditions set out in these website terms and conditions, the privacy policy and any other relevant terms and conditions, policies and notices which may be applicable to a specific section or module of the website.",
              ],
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Techfinna''s relationship with you in relation to this website.",
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "The term 'Techfinna' or 'us' or 'we' refers to the owner of the website whose registered/operational office is Baduhi Kangra HIMACHAL PRADESH 176201. The term 'you' refers to the user or viewer of our website.",
            }),
          ],
        }),
        l.jsxs("div", {
          className: "space-y-3",
          children: [
            l.jsx("span", {
              className:
                "font-semibold text-slate-600",
              children:
                "The use of this website is subject to the following terms of use:",
            }),
            l.jsxs("ul", {
              className:
                "text-sm list-disc ms-10 space-y-1",
              children: [
                l.jsx("li", {
                  children:
                    "The content of the pages of this website is for your general information and use only. It is subject to change without notice.",
                }),
                l.jsx("li", {
                  children:
                    "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.",
                }),
                l.jsx("li", {
                  children:
                    "Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.",
                }),
                l.jsx("li", {
                  children:
                    "This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.",
                }),
                l.jsx("li", {
                  children:
                    "All trademarks reproduced in this website which are not the property of, or licensed to, the operator are acknowledged on the website.",
                }),
                l.jsx("li", {
                  children:
                    "Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.",
                }),
                l.jsx("li", {
                  children:
                    "From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information.",
                }),
                l.jsx("li", {
                  children:
                    "You may not create a link to this website from another website or document without Techfinna’s prior written consent.",
                }),
                l.jsx("li", {
                  children:
                    "Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority.",
                }),
              ],
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time",
            }),
          ],
        }),
      ],
    }),
  q4 = () =>
    l.jsxs("div", {
      className: "px-5 md:px-20",
      children: [
        l.jsx("div", {
          className:
            "flex justify-center text-center",
          children: l.jsxs("h1", {
            className:
              "text-black text-2xl md:text-3xl text-center my-5 p-2 border-black border-b-2 md:w-1/2",
            children: [
              "Cancellation ",
              l.jsx("span", { children: "&" }),
              " Refund Policy",
            ],
          }),
        }),
        l.jsxs("div", {
          className: "space-y-3 pt-10",
          children: [
            l.jsx("span", {
              className:
                "font-semibold text-slate-600",
              children:
                "Last updated on Aug 29th 2023",
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "Techfinna believes in helping its customers as far as possible, and has therefore a liberal cancellation policy. Under this policy:",
            }),
            l.jsxs("ul", {
              className:
                "text-sm list-disc ms-10 space-y-1",
              children: [
                l.jsx("li", {
                  children:
                    "Cancellations will be considered only if the request is made immediately after placing the order. However, the cancellation request may not be entertained if the orders have been communicated to the vendors/merchants and they have initiated the process of shipping them.",
                }),
                l.jsx("li", {
                  children:
                    "Techfinna does not accept cancellation requests for perishable items like flowers, eatables etc. However, refund/replacement can be made if the customer establishes that the quality of product delivered is not good.",
                }),
                l.jsx("li", {
                  children:
                    "In case of receipt of damaged or defective items please report the same to our Customer Service team. The request will, however, be entertained once the merchant has checked and determined the same at his own end. This should be reported within 7 days of receipt of the products.",
                }),
                l.jsx("li", {
                  children:
                    "In case you feel that the product received is not as shown on the site or as per your expectations, you must bring it to the notice of our customer service within 7 days of receiving the product. The Customer Service Team after looking into your complaint will take an appropriate decision.",
                }),
                l.jsx("li", {
                  children:
                    "In case of complaints regarding products that come with a warranty from manufacturers, please refer the issue to them.",
                }),
                l.jsx("li", {
                  children:
                    "In case of any Refunds approved by the Techfinna, it’ll take 3-5 days for the refund to be processed to the end customer.",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  Y4 = () =>
    l.jsxs("div", {
      className: "px-5 md:px-20",
      children: [
        l.jsx("div", {
          className:
            "flex justify-center text-center",
          children: l.jsxs("h1", {
            className:
              "text-black text-2xl md:text-3xl text-center my-5 p-2 border-black border-b-2 md:w-1/2",
            children: [
              "Shipping ",
              l.jsx("span", { children: "&" }),
              " Delivery Policy",
            ],
          }),
        }),
        l.jsxs("div", {
          className: "space-y-3 pt-10",
          children: [
            l.jsx("span", {
              className:
                "font-semibold text-slate-600",
              children:
                "Last updated on Aug 29th 2023",
            }),
            l.jsx("p", {
              className: "text-sm",
              children:
                "Shipping is not applicable for business.",
            }),
          ],
        }),
      ],
    }),
  Q4 = () =>
    l.jsx("div", {
      className: "px-3 text-black my-20 w-full",
      children: l.jsxs("div", {
        className:
          "w-full md:w-[780px] mx-auto space-y-10",
        children: [
          l.jsx("h2", {
            className:
              "text-xl text-gray-500 font-semibold",
            children:
              "How to connect Odoo with Google Bigquery",
          }),
          l.jsx("h1", {
            className: "text-5xl font-bold",
            children:
              "Google BigQuery Connector for Odoo Installation and Setup Guide",
          }),
          l.jsx("hr", {}),
          l.jsxs("div", {
            className: "space-y-3",
            children: [
              l.jsx("h3", {
                className: " font-bold text-3xl",
                children: " Requirements:",
              }),
              l.jsxs("ul", {
                className:
                  "leading-loose text-xl list-disc ml-[30px]",
                children: [
                  l.jsx("li", {
                    children:
                      " Odoo Versions Supported: 12, 13, 14, 15, 16, 17 (Enterprise or Community)",
                  }),
                  l.jsx("li", {
                    children:
                      " Google Cloud Account with BigQuery enabled",
                  }),
                  l.jsx("li", {
                    children:
                      " Necessary permissions in Odoo and Google Cloud (follow along for more details)",
                  }),
                  l.jsx("li", {
                    children:
                      " The module depends on these python libraries 'google-cloud-bigquery', 'pandas','pyarrow'. ",
                  }),
                  l.jsx("li", {
                    children:
                      " If you are on Odoo Sh, add these in your addons repository level requirements.txt.",
                  }),
                  l.jsx("li", {
                    children:
                      " If you are on on-premises server, install these manually in your Odoo python environment manually and restart the server.",
                  }),
                ],
              }),
            ],
          }),
          l.jsxs("div", {
            className: "space-y-3",
            children: [
              l.jsx("h3", {
                className: " font-bold text-3xl",
                children: " Installation:",
              }),
              l.jsxs("ul", {
                className:
                  "leading-loose text-xl list-disc ml-[30px]",
                children: [
                  l.jsx("li", {
                    children:
                      " Download the BigQuery Connector module from ",
                  }),
                  l.jsx("div", {
                    className:
                      "border rounded-sm my-1 bg-[#F9F9F9] p-[22px]",
                    children: l.jsx("a", {
                      target: "_blank",
                      className:
                        "font-sans break-words hover:text-[#2462D0]",
                      href: "https://apps.odoo.com/apps/modules/17.0/bigquery_techfinna/",
                      children:
                        "https://apps.odoo.com/apps/modules/17.0/bigquery_techfinna/",
                    }),
                  }),
                  l.jsx("img", {
                    className:
                      "img-fluid img my-5",
                    src: "/images/odoo-apps.jpg",
                    alt: "odoo-apps",
                  }),
                  l.jsx("li", {
                    children:
                      "  In your Odoo, navigate to Apps and click on 'Update Apps List' and Update",
                  }),
                  l.jsx("img", {
                    className:
                      "img-fluid img my-5",
                    src: "/images/odoo-update.jpg",
                    alt: "odoo-apps",
                  }),
                  l.jsx("li", {
                    children:
                      " Search for 'BigQuery Connector', then click 'Install'",
                  }),
                  l.jsx("img", {
                    className:
                      "img-fluid img my-5",
                    src: "/images/odoo-activate.jpg",
                    alt: "odoo-apps",
                  }),
                ],
              }),
            ],
          }),
          l.jsxs("div", {
            className: "space-y-3",
            children: [
              l.jsx("h3", {
                className: " font-bold text-3xl",
                children: " Configuration:",
              }),
              l.jsx("h4", {
                className:
                  "font-bold text-xl pt-2",
                children:
                  "3.1. Obtaining BigQuery Project ID and Dataset ID:",
              }),
              l.jsxs("ul", {
                className:
                  "leading-loose text-xl list-disc ml-[30px]",
                children: [
                  l.jsx("li", {
                    children:
                      " Log in to your Google Cloud Console  ",
                  }),
                  l.jsx("div", {
                    className:
                      "border rounded-sm my-1 bg-[#F9F9F9] p-[22px]",
                    children: l.jsx("a", {
                      target: "_blank",
                      className:
                        "font-sans hover:text-[#2462D0]",
                      href: "https://console.cloud.google.com",
                      children:
                        "console.cloud.google.com",
                    }),
                  }),
                  l.jsx("li", {
                    children:
                      " Navigate to the BigQuery section.",
                  }),
                  l.jsx("li", {
                    children:
                      ' Create a new project (if not already done). Note: Ensure the Project ID does not contain dots (".") as this may cause issues with certain integrations.',
                  }),
                  l.jsx("li", {
                    children:
                      " Note down the Project ID. ",
                  }),
                  l.jsx("img", {
                    className:
                      "img-fluid img my-5",
                    src: "/images/odoo-projectid.jpg",
                    alt: "odoo-apps",
                  }),
                  l.jsx("li", {
                    children:
                      ' In the BigQuery dashboard, create a new dataset. Remember: The Dataset ID should not contain dots (".") as well. ',
                  }),
                  l.jsx("img", {
                    className:
                      "img-fluid img my-5",
                    src: "/images/create-dataset.jpg",
                    alt: "odoo-apps",
                  }),
                  l.jsx("li", {
                    children:
                      " Note down the Dataset ID.  ",
                  }),
                  l.jsx("img", {
                    className:
                      "img-fluid img my-5",
                    src: "/images/odoo-datasetid.jpg",
                    alt: "odoo-apps",
                  }),
                ],
              }),
              l.jsx("h4", {
                className:
                  "font-bold text-xl pt-2",
                children:
                  "3.2. Creating a Google Cloud Service Account and Generating Credentials JSON:",
              }),
              l.jsxs("ul", {
                className:
                  "leading-loose text-xl list-disc ml-[30px]",
                children: [
                  l.jsx("li", {
                    children:
                      " Navigate to ‘IAM & Admin’ → ‘Service Accounts’ in the Google Cloud Console.   ",
                  }),
                  l.jsx("img", {
                    className:
                      "img-fluid img my-5",
                    src: "/images/create-account.jpg",
                    alt: "odoo-apps",
                  }),
                  l.jsx("li", {
                    children:
                      " Create a new service account and assign the ‘BigQuery Admin’ role for full BigQuery access. (if you do not want to give admin access provide “BigQueryData Editor” and “BigQuery Job User” role)  ",
                  }),
                  l.jsx("img", {
                    className:
                      "img-fluid img my-5",
                    src: "/images/bigquery-user.jpg",
                    alt: "odoo-apps",
                  }),
                  l.jsx("li", {
                    children:
                      " Generate a new JSON key for this service account and download it. (Select your Service account and in “Keys” tab click “ADD KEY”)",
                  }),
                  l.jsx("img", {
                    className:
                      "img-fluid img my-5",
                    src: "/images/account-details.jpg",
                    alt: "odoo-apps",
                  }),
                ],
              }),
            ],
          }),
          l.jsxs("div", {
            className: "space-y-3",
            children: [
              l.jsx("h3", {
                className: " font-bold text-2xl",
                children:
                  " Connecting to Google BigQuery:",
              }),
              l.jsx("p", {
                className: "text-xl",
                children:
                  "After configuring the BigQuery Connector in your Odoo settings, the next step is to ensure that it is properly connected and can communicate with Google BigQuery. Here’s how you can verify the connection:",
              }),
              l.jsxs("ul", {
                className:
                  "leading-loose text-xl list-disc ml-[30px]",
                children: [
                  l.jsx("li", {
                    className: "font-semibold",
                    children:
                      " Fill in the Required Information: In the Odoo settings menu, input the necessary details: ",
                  }),
                  l.jsxs("ul", {
                    className:
                      "leading-loose text-xl list-[circle] ml-6",
                    children: [
                      l.jsx("li", {
                        children:
                          " In Odoo, enter the BigQuery Project ID and Dataset ID in the connector settings. ",
                      }),
                      l.jsx("img", {
                        className:
                          "img-fluid img my-5",
                        src: "/images/bigquery-connector.jpg",
                        alt: "odoo-apps",
                      }),
                      l.jsx("li", {
                        children:
                          " Paste the contents of the JSON file (download after key creation) into the ‘BigQuery Credentials JSON’ field. Click “SAVE” after filling information. ",
                      }),
                      l.jsx("img", {
                        className:
                          "img-fluid img my-5",
                        src: "/images/bigquery-json.jpg",
                        alt: "odoo-apps",
                      }),
                    ],
                  }),
                  l.jsx("li", {
                    className: "font-semibold",
                    children:
                      " Export Data to Verify Connection:",
                  }),
                  l.jsxs("ul", {
                    className:
                      "leading-loose text-xl list-[circle] ml-6",
                    children: [
                      l.jsx("li", {
                        children:
                          "Navigate to the top menu in the settings and select a table to export from the dropdown list.",
                      }),
                      l.jsx("img", {
                        className:
                          "img-fluid img my-5",
                        src: "/images/top-menu.jpg",
                        alt: "odoo-apps",
                      }),
                      l.jsx("img", {
                        className:
                          "img-fluid img my-5",
                        src: "/images/bigquery-export.jpg",
                        alt: "odoo-apps",
                      }),
                      l.jsx("li", {
                        children:
                          "Click the ‘Export’ button to initiate data export to BigQuery.",
                      }),
                      l.jsx("img", {
                        className:
                          "img-fluid img my-5",
                        src: "/images/click-export.jpg",
                        alt: "odoo-apps",
                      }),
                      l.jsx("li", {
                        children:
                          "This action will attempt to export the selected table's data to your BigQuery dataset.",
                      }),
                    ],
                  }),
                  l.jsx("li", {
                    className: "font-semibold",
                    children:
                      " Check BigQuery for Exported Data:",
                  }),
                  l.jsxs("ul", {
                    className:
                      "leading-loose text-xl list-[circle] ml-6",
                    children: [
                      l.jsx("li", {
                        children:
                          "Log into your Google Cloud Console and go to the BigQuery section.",
                      }),
                      l.jsx("li", {
                        children:
                          "Navigate to the dataset you provided in the settings.",
                      }),
                      l.jsx("li", {
                        children:
                          "Check for the presence of the exported table and its data. (You might need to refresh the content to see the table(s) )",
                      }),
                      l.jsx("img", {
                        className:
                          "img-fluid img my-5",
                        src: "/images/check-data.jpg",
                        alt: "odoo-apps",
                      }),
                      l.jsx("li", {
                        children:
                          "Successful data (schema and records) visibility in the BigQuery dataset confirms that the connection between Odoo and BigQuery is functioning correctly.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          l.jsxs("p", {
            className: "text-xl",
            children: [
              l.jsx("b", { children: "Note:" }),
              " This process not only verifies the connection but also ensures that the BigQuery Connector is set up correctly and has the necessary permissions to perform data operations.",
            ],
          }),
        ],
      }),
    }),
  K4 = () =>
    l.jsxs("div", {
      className: "w-full space-y-5 text-center",
      children: [
        l.jsx("h1", {
          className: "text-5xl md:text-7xl",
          children:
            "Odoo Commerce Hub Connector | Add-on Module",
        }),
        l.jsx("h2", {
          className: "text-xl",
          children:
            "Integrate ◦ Automate ◦ Accelerate",
        }),
        l.jsx("p", {
          className: "text-lg",
          children:
            "Expand your Odoo ecosystem’s horizons with TechFinna’s Commerce Hub Connector, your bridge to multichannel retailing. Seamlessly integrate your online storefronts, marketplaces, and dropshipping platforms directly into Odoo for unmatched synchronization and efficiency.",
        }),
        l.jsxs("div", {
          className: "flex gap-5 pt-5 w-full",
          children: [
            l.jsx("div", {
              className:
                "w-1/2 flex drop-shadow-lg justify-center py-5 rounded-md bg-[#A24689]",
              children: l.jsx("img", {
                width: 200,
                height: "auto",
                src: "\\images\\odoo_logo_1200.webp",
                alt: "odoo",
              }),
            }),
            l.jsx("div", {
              className:
                "w-1/2 drop-shadow-lg flex justify-center rounded-md border",
              children: l.jsx("img", {
                width: 200,
                height: "auto",
                src: "\\images\\commercehub_logo.jpeg",
                alt: "commercehub",
              }),
            }),
          ],
        }),
      ],
    }),
  X4 = () =>
    l.jsxs("div", {
      className:
        "w-full flex flex-col md:flex-row gap-y-10 justify-between items-center",
      children: [
        l.jsxs("div", {
          className:
            "w-full md:w-[500px] space-y-10",
          children: [
            l.jsx("h2", {
              className:
                "text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-10",
              children: "Core Features:",
            }),
            l.jsxs("p", {
              className: "text-xl",
              children: [
                l.jsx("span", {
                  className: "font-bold",
                  children: "Unified Platform:",
                }),
                " Manage all your e-commerce operations from a single Odoo interface.",
              ],
            }),
            l.jsxs("p", {
              className: "text-xl",
              children: [
                l.jsx("span", {
                  className: "font-bold",
                  children:
                    "Real-time Synchronization:",
                }),
                "  Keep inventory, orders, and customer data in sync across all channels.",
              ],
            }),
            l.jsxs("p", {
              className: "text-xl",
              children: [
                l.jsx("span", {
                  className: "font-bold",
                  children:
                    "Streamlined Order Fulfillment:",
                }),
                " Automate order processing for faster, error-free fulfillment.",
              ],
            }),
            l.jsxs("p", {
              className: "text-xl",
              children: [
                l.jsx("span", {
                  className: "font-bold",
                  children:
                    "Analytics and Reporting:",
                }),
                " Gain insights into your sales data to drive informed business decisions.",
              ],
            }),
            l.jsxs("p", {
              className: "text-xl",
              children: [
                l.jsx("span", {
                  className: "font-bold",
                  children: "Scalable Solution:",
                }),
                " Whether you’re growing fast or already at scale, our connector grows with you.",
              ],
            }),
          ],
        }),
        l.jsx("div", {
          children: l.jsx("img", {
            width: 600,
            src: "\\images\\commercesuite.png",
            alt: "commercesuite",
          }),
        }),
      ],
    }),
  Z4 = () =>
    l.jsxs("div", {
      className:
        "bg-[#F0F0F0]  md:h-[450px] drop-shadow-lg p-5 md:p-20 flex flex-col md:flex-row justify-between items-center rounded-md w-full",
      children: [
        l.jsxs("div", {
          className:
            "w-full md:w-[500px] bg-[#F0F0F0]",
          children: [
            l.jsx("h2", {
              className:
                "text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#32C2C8] to-[#2E0965] bg-[#F0F0F0] mb-10",
              children: "Expert Support:",
            }),
            l.jsx("p", {
              className: "text-xl bg-[#F0F0F0]",
              children:
                " Navigating multichannel integration can be complex, but with TechFinna, you’re never alone. Our experts provide dedicated support to ensure a smooth transition and ongoing operation.",
            }),
          ],
        }),
        l.jsx("div", {
          children: l.jsx("img", {
            className:
              " block h-[350px] bg-[#F0F0F0]",
            src: "\\images\\support.png",
            alt: "support",
          }),
        }),
      ],
    }),
  J4 = (e) =>
    l.jsxs("div", {
      className:
        "p-5 md:p-20 md:h-[450px] border drop-shadow-xl flex flex-col md:flex-row justify-between items-center rounded-md w-full",
      children: [
        l.jsxs("div", {
          className: "w-full md:w-[500px] ",
          children: [
            l.jsx("h2", {
              className:
                "text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-[#F3C857] to-[#B51A7B] mb-10",
              children: "Need Customization:",
            }),
            l.jsxs("p", {
              className: "text-xl ",
              children: [
                " ",
                "Your business is unique, and so are your needs. TechFinna’s Commerce Hub Connector is fully customizable, ensuring it fits perfectly into your business model. Need additional features? Our team is on standby to tailor the connector to your specifications.",
              ],
            }),
          ],
        }),
        l.jsx("div", {
          children: l.jsx("img", {
            className: "h-[320px]",
            src: "\\images\\daco.png",
            alt: "support",
          }),
        }),
      ],
    }),
  eb = () => {
    const [e, t] = D.useState(!1),
      [n, r] = D.useState(!1);
    function i(s) {
      s.preventDefault();
      const c = s.target.email.value;
      fetch(
        `https://script.google.com/macros/s/AKfycbwybfyLoavynHbnvpHz6o8jTAKJLpFrkibrgsCBuoTTcaYd0k_EXaClXGrcVDwHhpC4/exec?Email=${c}`,
        { method: "POST" }
      ).then((a) => a.json()),
        r(!0);
    }
    return l.jsxs(l.Fragment, {
      children: [
        l.jsxs(Hn, {
          children: [
            l.jsx("title", {}),
            l.jsx("meta", {
              name: "description",
              content: "",
            }),
          ],
        }),
        l.jsxs("div", {
          className:
            "md:mx-32 mx-5 text-black space-y-48 my-28",
          children: [
            l.jsxs("div", {
              className:
                "flex flex-col md:flex-row h-full gap-32 w-full",
              children: [
                l.jsxs("div", {
                  className: "space-y-48",
                  children: [
                    l.jsx(K4, {}),
                    l.jsx(X4, {}),
                  ],
                }),
                l.jsx("div", {
                  children: e
                    ? l.jsx("div", {
                        className:
                          "border p-10 rounded-md duration-300 drop-shadow-xl sticky top-16 bottom-0 items-center flex-col space-y-5 w-full md:w-[350px]",
                        children: l.jsxs("form", {
                          className: "space-y-5",
                          onSubmit: i,
                          children: [
                            n
                              ? l.jsxs("div", {
                                  className:
                                    "space-y-2",
                                  children: [
                                    l.jsx("p", {
                                      className:
                                        "text-lg",
                                      children:
                                        "We will get back to you with your request",
                                    }),
                                    l.jsx("h4", {
                                      className:
                                        "text-lg",
                                      children:
                                        "Thankyou 🙌",
                                    }),
                                  ],
                                })
                              : l.jsxs("div", {
                                  className:
                                    "space-y-2",
                                  children: [
                                    l.jsx(
                                      "label",
                                      {
                                        className:
                                          "text-lg font-sembild",
                                        htmlFor:
                                          "email",
                                        children:
                                          "Please enter your email",
                                      }
                                    ),
                                    l.jsx(
                                      "input",
                                      {
                                        placeholder:
                                          "luffy@gmail.com",
                                        className:
                                          "border w-full px-3 py-1",
                                        id: "email",
                                        name: "email",
                                        type: "email",
                                      }
                                    ),
                                  ],
                                }),
                            n
                              ? l.jsx("button", {
                                  onClick: () =>
                                    t(!1),
                                  className:
                                    "rounded-md shadow-lg bg-[#285a9b] text-white w-full h-[50px] text-center text-2xl font-bold",
                                  children:
                                    "Done",
                                })
                              : l.jsx("button", {
                                  type: "submit",
                                  className:
                                    "rounded-md shadow-lg bg-[#285a9b] text-white w-full h-[50px] text-center text-2xl font-bold",
                                  children:
                                    "Get Now",
                                }),
                          ],
                        }),
                      })
                    : l.jsxs("div", {
                        className:
                          "border p-10 rounded-md drop-shadow-xl duration-300 sticky top-16 bottom-0 items-center flex flex-col gap-y-10 w-full md:w-[350px]",
                        children: [
                          l.jsxs("div", {
                            className:
                              "bg-transparent",
                            children: [
                              l.jsx("h4", {
                                className:
                                  "text-xl bg-transparent",
                                children: l.jsx(
                                  "strong",
                                  {
                                    children:
                                      "Supported Odoo versions:",
                                  }
                                ),
                              }),
                              l.jsxs("p", {
                                className:
                                  "text-lg mt-1 bg-transparent",
                                children: [
                                  l.jsx("span", {
                                    className:
                                      "border rounded-md px-2 dhadow-md",
                                    children:
                                      "12.0",
                                  }),
                                  " ",
                                  l.jsx("span", {
                                    className:
                                      "border rounded-md px-2 dhadow-md",
                                    children:
                                      "13.0",
                                  }),
                                  " ",
                                  l.jsx("span", {
                                    className:
                                      "border rounded-md px-2 dhadow-md",
                                    children:
                                      "14.0",
                                  }),
                                  " ",
                                  l.jsx("span", {
                                    className:
                                      "border rounded-md px-2 dhadow-md",
                                    children:
                                      "15.0",
                                  }),
                                  " ",
                                  l.jsx("span", {
                                    className:
                                      "border rounded-md px-2 dhadow-md",
                                    children:
                                      "16.0",
                                  }),
                                  " ",
                                  l.jsx("span", {
                                    className:
                                      "border rounded-md px-2 dhadow-md",
                                    children:
                                      "17.0",
                                  }),
                                ],
                              }),
                              l.jsx("p", {
                                className:
                                  "mt-2 bg-transparent mx-2 text-lg",
                                children:
                                  "Works well on Odoo Sh and on-premises server",
                              }),
                              l.jsx("p", {
                                className:
                                  "mt-2 bg-transparent mx-2 font-bold",
                                children:
                                  "Community + Enterprise",
                              }),
                            ],
                          }),
                          l.jsx("button", {
                            onClick: () => t(!0),
                            className:
                              "rounded-md shadow-lg bg-[#285a9b] text-white w-[250px] h-[50px] text-center text-2xl font-bold",
                            children: "Get Now",
                          }),
                        ],
                      }),
                }),
              ],
            }),
            l.jsx(Z4, {}),
            l.jsx(J4, {}),
          ],
        }),
      ],
    });
  },
  jf = Cx([
    {
      path: "/",
      element: l.jsx($x, {}),
      children: [
        { path: "/", element: l.jsx(j4, {}) },
        {
          path: "/about",
          element: l.jsx(N4, {}),
        },
        {
          path: "/service",
          element: l.jsx(z4, {}),
        },
        {
          path: "/discodoo",
          element: l.jsx(U4, {}),
        },
        {
          path: "/contact",
          element: l.jsx(M4, {}),
        },
        {
          path: "/privacy",
          element: l.jsx(W4, {}),
        },
        {
          path: "/terms",
          element: l.jsx(G4, {}),
        },
        {
          path: "/refund",
          element: l.jsx(q4, {}),
        },
        {
          path: "/shipping",
          element: l.jsx(Y4, {}),
        },
        {
          path: "/guides/how-to-connect-google-bigquery-with-odoo",
          element: l.jsx(Q4, {}),
        },
        {
          path: "/commercehub-odoo",
          element: l.jsx(eb, {}),
        },
        { path: "*", element: l.jsx(V4, {}) },
      ],
    },
  ]),
  Fi = document.getElementById("root"),
  tb = Fm(Fi);
Fi != null && Fi.hasChildNodes()
  ? Rm(
      Fi,
      l.jsx(ae.StrictMode, {
        children: l.jsx(lf, { router: jf }),
      })
    )
  : tb.render(
      l.jsx(ae.StrictMode, {
        children: l.jsx(lf, { router: jf }),
      })
    );
