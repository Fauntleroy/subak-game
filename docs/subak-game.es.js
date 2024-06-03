import './index.css';function Yt(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x.default : x;
}
var qr = { exports: {} }, Xe = {}, Br = { exports: {} }, m = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt;
function qt() {
  if (mt)
    return m;
  mt = 1;
  var x = Symbol.for("react.element"), p = Symbol.for("react.portal"), re = Symbol.for("react.fragment"), B = Symbol.for("react.strict_mode"), Z = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), A = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), oe = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), z = Symbol.iterator;
  function ie(n) {
    return n === null || typeof n != "object" ? null : (n = z && n[z] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var te = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, de = Object.assign, Ne = {};
  function se(n, u, _) {
    this.props = n, this.context = u, this.refs = Ne, this.updater = _ || te;
  }
  se.prototype.isReactComponent = {}, se.prototype.setState = function(n, u) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, u, "setState");
  }, se.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ce() {
  }
  ce.prototype = se.prototype;
  function I(n, u, _) {
    this.props = n, this.context = u, this.refs = Ne, this.updater = _ || te;
  }
  var be = I.prototype = new ce();
  be.constructor = I, de(be, se.prototype), be.isPureReactComponent = !0;
  var le = Array.isArray, V = Object.prototype.hasOwnProperty, ee = { current: null }, pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function he(n, u, _) {
    var E, S = {}, j = null, P = null;
    if (u != null)
      for (E in u.ref !== void 0 && (P = u.ref), u.key !== void 0 && (j = "" + u.key), u)
        V.call(u, E) && !pe.hasOwnProperty(E) && (S[E] = u[E]);
    var T = arguments.length - 2;
    if (T === 1)
      S.children = _;
    else if (1 < T) {
      for (var C = Array(T), Y = 0; Y < T; Y++)
        C[Y] = arguments[Y + 2];
      S.children = C;
    }
    if (n && n.defaultProps)
      for (E in T = n.defaultProps, T)
        S[E] === void 0 && (S[E] = T[E]);
    return { $$typeof: x, type: n, key: j, ref: P, props: S, _owner: ee.current };
  }
  function Oe(n, u) {
    return { $$typeof: x, type: n.type, key: u, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Te(n) {
    return typeof n == "object" && n !== null && n.$$typeof === x;
  }
  function Be(n) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(_) {
      return u[_];
    });
  }
  var Pe = /\/+/g;
  function X(n, u) {
    return typeof n == "object" && n !== null && n.key != null ? Be("" + n.key) : u.toString(36);
  }
  function ne(n, u, _, E, S) {
    var j = typeof n;
    (j === "undefined" || j === "boolean") && (n = null);
    var P = !1;
    if (n === null)
      P = !0;
    else
      switch (j) {
        case "string":
        case "number":
          P = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case x:
            case p:
              P = !0;
          }
      }
    if (P)
      return P = n, S = S(P), n = E === "" ? "." + X(P, 0) : E, le(S) ? (_ = "", n != null && (_ = n.replace(Pe, "$&/") + "/"), ne(S, u, _, "", function(Y) {
        return Y;
      })) : S != null && (Te(S) && (S = Oe(S, _ + (!S.key || P && P.key === S.key ? "" : ("" + S.key).replace(Pe, "$&/") + "/") + n)), u.push(S)), 1;
    if (P = 0, E = E === "" ? "." : E + ":", le(n))
      for (var T = 0; T < n.length; T++) {
        j = n[T];
        var C = E + X(j, T);
        P += ne(j, u, _, C, S);
      }
    else if (C = ie(n), typeof C == "function")
      for (n = C.call(n), T = 0; !(j = n.next()).done; )
        j = j.value, C = E + X(j, T++), P += ne(j, u, _, C, S);
    else if (j === "object")
      throw u = String(n), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return P;
  }
  function G(n, u, _) {
    if (n == null)
      return n;
    var E = [], S = 0;
    return ne(n, E, "", "", function(j) {
      return u.call(_, j, S++);
    }), E;
  }
  function fe(n) {
    if (n._status === -1) {
      var u = n._result;
      u = u(), u.then(function(_) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = _);
      }, function(_) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = _);
      }), n._status === -1 && (n._status = 0, n._result = u);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var f = { current: null }, ve = { transition: null }, ke = { ReactCurrentDispatcher: f, ReactCurrentBatchConfig: ve, ReactCurrentOwner: ee };
  function me() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return m.Children = { map: G, forEach: function(n, u, _) {
    G(n, function() {
      u.apply(this, arguments);
    }, _);
  }, count: function(n) {
    var u = 0;
    return G(n, function() {
      u++;
    }), u;
  }, toArray: function(n) {
    return G(n, function(u) {
      return u;
    }) || [];
  }, only: function(n) {
    if (!Te(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, m.Component = se, m.Fragment = re, m.Profiler = Z, m.PureComponent = I, m.StrictMode = B, m.Suspense = W, m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ke, m.act = me, m.cloneElement = function(n, u, _) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var E = de({}, n.props), S = n.key, j = n.ref, P = n._owner;
    if (u != null) {
      if (u.ref !== void 0 && (j = u.ref, P = ee.current), u.key !== void 0 && (S = "" + u.key), n.type && n.type.defaultProps)
        var T = n.type.defaultProps;
      for (C in u)
        V.call(u, C) && !pe.hasOwnProperty(C) && (E[C] = u[C] === void 0 && T !== void 0 ? T[C] : u[C]);
    }
    var C = arguments.length - 2;
    if (C === 1)
      E.children = _;
    else if (1 < C) {
      T = Array(C);
      for (var Y = 0; Y < C; Y++)
        T[Y] = arguments[Y + 2];
      E.children = T;
    }
    return { $$typeof: x, type: n.type, key: S, ref: j, props: E, _owner: P };
  }, m.createContext = function(n) {
    return n = { $$typeof: A, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: g, _context: n }, n.Consumer = n;
  }, m.createElement = he, m.createFactory = function(n) {
    var u = he.bind(null, n);
    return u.type = n, u;
  }, m.createRef = function() {
    return { current: null };
  }, m.forwardRef = function(n) {
    return { $$typeof: L, render: n };
  }, m.isValidElement = Te, m.lazy = function(n) {
    return { $$typeof: U, _payload: { _status: -1, _result: n }, _init: fe };
  }, m.memo = function(n, u) {
    return { $$typeof: oe, type: n, compare: u === void 0 ? null : u };
  }, m.startTransition = function(n) {
    var u = ve.transition;
    ve.transition = {};
    try {
      n();
    } finally {
      ve.transition = u;
    }
  }, m.unstable_act = me, m.useCallback = function(n, u) {
    return f.current.useCallback(n, u);
  }, m.useContext = function(n) {
    return f.current.useContext(n);
  }, m.useDebugValue = function() {
  }, m.useDeferredValue = function(n) {
    return f.current.useDeferredValue(n);
  }, m.useEffect = function(n, u) {
    return f.current.useEffect(n, u);
  }, m.useId = function() {
    return f.current.useId();
  }, m.useImperativeHandle = function(n, u, _) {
    return f.current.useImperativeHandle(n, u, _);
  }, m.useInsertionEffect = function(n, u) {
    return f.current.useInsertionEffect(n, u);
  }, m.useLayoutEffect = function(n, u) {
    return f.current.useLayoutEffect(n, u);
  }, m.useMemo = function(n, u) {
    return f.current.useMemo(n, u);
  }, m.useReducer = function(n, u, _) {
    return f.current.useReducer(n, u, _);
  }, m.useRef = function(n) {
    return f.current.useRef(n);
  }, m.useState = function(n) {
    return f.current.useState(n);
  }, m.useSyncExternalStore = function(n, u, _) {
    return f.current.useSyncExternalStore(n, u, _);
  }, m.useTransition = function() {
    return f.current.useTransition();
  }, m.version = "18.3.1", m;
}
var er = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
er.exports;
var _t;
function Bt() {
  return _t || (_t = 1, function(x, p) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var re = "18.3.1", B = Symbol.for("react.element"), Z = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), W = Symbol.for("react.provider"), oe = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), Ne = Symbol.for("react.offscreen"), se = Symbol.iterator, ce = "@@iterator";
      function I(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = se && e[se] || e[ce];
        return typeof r == "function" ? r : null;
      }
      var be = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, le = {
        transition: null
      }, V = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ee = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, pe = {}, he = null;
      function Oe(e) {
        he = e;
      }
      pe.setExtraStackFrame = function(e) {
        he = e;
      }, pe.getCurrentStack = null, pe.getStackAddendum = function() {
        var e = "";
        he && (e += he);
        var r = pe.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Te = !1, Be = !1, Pe = !1, X = !1, ne = !1, G = {
        ReactCurrentDispatcher: be,
        ReactCurrentBatchConfig: le,
        ReactCurrentOwner: ee
      };
      G.ReactDebugCurrentFrame = pe, G.ReactCurrentActQueue = V;
      function fe(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ve("warn", e, a);
        }
      }
      function f(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ve("error", e, a);
        }
      }
      function ve(e, r, a) {
        {
          var o = G.ReactDebugCurrentFrame, c = o.getStackAddendum();
          c !== "" && (r += "%s", a = a.concat([c]));
          var d = a.map(function(l) {
            return String(l);
          });
          d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
        }
      }
      var ke = {};
      function me(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", c = o + "." + r;
          if (ke[c])
            return;
          f("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), ke[c] = !0;
        }
      }
      var n = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          me(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          me(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          me(e, "setState");
        }
      }, u = Object.assign, _ = {};
      Object.freeze(_);
      function E(e, r, a) {
        this.props = e, this.context = r, this.refs = _, this.updater = a || n;
      }
      E.prototype.isReactComponent = {}, E.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, E.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var S = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, j = function(e, r) {
          Object.defineProperty(E.prototype, e, {
            get: function() {
              fe("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var P in S)
          S.hasOwnProperty(P) && j(P, S[P]);
      }
      function T() {
      }
      T.prototype = E.prototype;
      function C(e, r, a) {
        this.props = e, this.context = r, this.refs = _, this.updater = a || n;
      }
      var Y = C.prototype = new T();
      Y.constructor = C, u(Y, E.prototype), Y.isPureReactComponent = !0;
      function Er() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var rr = Array.isArray;
      function Le(e) {
        return rr(e);
      }
      function Rr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Me(e) {
        try {
          return Ee(e), !1;
        } catch {
          return !0;
        }
      }
      function Ee(e) {
        return "" + e;
      }
      function je(e) {
        if (Me(e))
          return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(e)), Ee(e);
      }
      function tr(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var c = r.displayName || r.name || "";
        return c !== "" ? a + "(" + c + ")" : a;
      }
      function xe(e) {
        return e.displayName || "Context";
      }
      function ye(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case g:
            return "Fragment";
          case Z:
            return "Portal";
          case L:
            return "Profiler";
          case A:
            return "StrictMode";
          case z:
            return "Suspense";
          case ie:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case oe:
              var r = e;
              return xe(r) + ".Consumer";
            case W:
              var a = e;
              return xe(a._context) + ".Provider";
            case U:
              return tr(e, e.render, "ForwardRef");
            case te:
              var o = e.displayName || null;
              return o !== null ? o : ye(e.type) || "Memo";
            case de: {
              var c = e, d = c._payload, l = c._init;
              try {
                return ye(l(d));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ae = Object.prototype.hasOwnProperty, We = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, nr, ar, Ue;
      Ue = {};
      function ze(e) {
        if (Ae.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Re(e) {
        if (Ae.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Sr(e, r) {
        var a = function() {
          nr || (nr = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function or(e, r) {
        var a = function() {
          ar || (ar = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function ir(e) {
        if (typeof e.ref == "string" && ee.current && e.__self && ee.current.stateNode !== e.__self) {
          var r = ye(ee.current.type);
          Ue[r] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ue[r] = !0);
        }
      }
      var De = function(e, r, a, o, c, d, l) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: B,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: l,
          // Record the component responsible for creating this element.
          _owner: d
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function wr(e, r, a) {
        var o, c = {}, d = null, l = null, y = null, R = null;
        if (r != null) {
          ze(r) && (l = r.ref, ir(r)), Re(r) && (je(r.key), d = "" + r.key), y = r.__self === void 0 ? null : r.__self, R = r.__source === void 0 ? null : r.__source;
          for (o in r)
            Ae.call(r, o) && !We.hasOwnProperty(o) && (c[o] = r[o]);
        }
        var k = arguments.length - 2;
        if (k === 1)
          c.children = a;
        else if (k > 1) {
          for (var D = Array(k), F = 0; F < k; F++)
            D[F] = arguments[F + 2];
          Object.freeze && Object.freeze(D), c.children = D;
        }
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (o in N)
            c[o] === void 0 && (c[o] = N[o]);
        }
        if (d || l) {
          var q = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && Sr(c, q), l && or(c, q);
        }
        return De(e, d, l, y, R, ee.current, c);
      }
      function Cr(e, r) {
        var a = De(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Or(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, c = u({}, e.props), d = e.key, l = e.ref, y = e._self, R = e._source, k = e._owner;
        if (r != null) {
          ze(r) && (l = r.ref, k = ee.current), Re(r) && (je(r.key), d = "" + r.key);
          var D;
          e.type && e.type.defaultProps && (D = e.type.defaultProps);
          for (o in r)
            Ae.call(r, o) && !We.hasOwnProperty(o) && (r[o] === void 0 && D !== void 0 ? c[o] = D[o] : c[o] = r[o]);
        }
        var F = arguments.length - 2;
        if (F === 1)
          c.children = a;
        else if (F > 1) {
          for (var N = Array(F), q = 0; q < F; q++)
            N[q] = arguments[q + 2];
          c.children = N;
        }
        return De(e.type, d, l, y, R, k, c);
      }
      function Se(e) {
        return typeof e == "object" && e !== null && e.$$typeof === B;
      }
      var ur = ".", Tr = ":";
      function Pr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(c) {
          return a[c];
        });
        return "$" + o;
      }
      var Ve = !1, sr = /\/+/g;
      function _e(e) {
        return e.replace(sr, "$&/");
      }
      function Fe(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (je(e.key), Pr("" + e.key)) : r.toString(36);
      }
      function we(e, r, a, o, c) {
        var d = typeof e;
        (d === "undefined" || d === "boolean") && (e = null);
        var l = !1;
        if (e === null)
          l = !0;
        else
          switch (d) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case B:
                case Z:
                  l = !0;
              }
          }
        if (l) {
          var y = e, R = c(y), k = o === "" ? ur + Fe(y, 0) : o;
          if (Le(R)) {
            var D = "";
            k != null && (D = _e(k) + "/"), we(R, r, D, "", function(Vt) {
              return Vt;
            });
          } else
            R != null && (Se(R) && (R.key && (!y || y.key !== R.key) && je(R.key), R = Cr(
              R,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (R.key && (!y || y.key !== R.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                _e("" + R.key) + "/"
              ) : "") + k
            )), r.push(R));
          return 1;
        }
        var F, N, q = 0, H = o === "" ? ur : o + Tr;
        if (Le(e))
          for (var br = 0; br < e.length; br++)
            F = e[br], N = H + Fe(F, br), q += we(F, r, a, N, c);
        else {
          var Yr = I(e);
          if (typeof Yr == "function") {
            var vt = e;
            Yr === vt.entries && (Ve || fe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ve = !0);
            for (var Wt = Yr.call(vt), yt, Ut = 0; !(yt = Wt.next()).done; )
              F = yt.value, N = H + Fe(F, Ut++), q += we(F, r, a, N, c);
          } else if (d === "object") {
            var ht = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (ht === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : ht) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return q;
      }
      function Ie(e, r, a) {
        if (e == null)
          return e;
        var o = [], c = 0;
        return we(e, o, "", "", function(d) {
          return r.call(a, d, c++);
        }), o;
      }
      function kr(e) {
        var r = 0;
        return Ie(e, function() {
          r++;
        }), r;
      }
      function cr(e, r, a) {
        Ie(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function jr(e) {
        return Ie(e, function(r) {
          return r;
        }) || [];
      }
      function lr(e) {
        if (!Se(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function fr(e) {
        var r = {
          $$typeof: oe,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: W,
          _context: r
        };
        var a = !1, o = !1, c = !1;
        {
          var d = {
            $$typeof: oe,
            _context: r
          };
          Object.defineProperties(d, {
            Provider: {
              get: function() {
                return o || (o = !0, f("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(l) {
                r.Provider = l;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(l) {
                r._currentValue = l;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(l) {
                r._currentValue2 = l;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(l) {
                r._threadCount = l;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, f("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(l) {
                c || (fe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), c = !0);
              }
            }
          }), r.Consumer = d;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var $e = -1, Ge = 0, Ke = 1, dr = 2;
      function xr(e) {
        if (e._status === $e) {
          var r = e._result, a = r();
          if (a.then(function(d) {
            if (e._status === Ge || e._status === $e) {
              var l = e;
              l._status = Ke, l._result = d;
            }
          }, function(d) {
            if (e._status === Ge || e._status === $e) {
              var l = e;
              l._status = dr, l._result = d;
            }
          }), e._status === $e) {
            var o = e;
            o._status = Ge, o._result = a;
          }
        }
        if (e._status === Ke) {
          var c = e._result;
          return c === void 0 && f(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, c), "default" in c || f(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, c), c.default;
        } else
          throw e._result;
      }
      function Ar(e) {
        var r = {
          // We use these fields to store the result.
          _status: $e,
          _result: e
        }, a = {
          $$typeof: de,
          _payload: r,
          _init: xr
        };
        {
          var o, c;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(d) {
                f("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = d, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return c;
              },
              set: function(d) {
                f("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), c = d, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function Dr(e) {
        e != null && e.$$typeof === te ? f("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? f("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && f("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && f("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: U,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var pr;
      pr = Symbol.for("react.module.reference");
      function t(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === g || e === L || ne || e === A || e === z || e === ie || X || e === Ne || Te || Be || Pe || typeof e == "object" && e !== null && (e.$$typeof === de || e.$$typeof === te || e.$$typeof === W || e.$$typeof === oe || e.$$typeof === U || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === pr || e.getModuleId !== void 0));
      }
      function i(e, r) {
        t(e) || f("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: te,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(c) {
              o = c, !e.name && !e.displayName && (e.displayName = c);
            }
          });
        }
        return a;
      }
      function s() {
        var e = be.current;
        return e === null && f(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function v(e) {
        var r = s();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? f("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && f("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function w(e) {
        var r = s();
        return r.useState(e);
      }
      function O(e, r, a) {
        var o = s();
        return o.useReducer(e, r, a);
      }
      function b(e) {
        var r = s();
        return r.useRef(e);
      }
      function h(e, r) {
        var a = s();
        return a.useEffect(e, r);
      }
      function K(e, r) {
        var a = s();
        return a.useInsertionEffect(e, r);
      }
      function $(e, r) {
        var a = s();
        return a.useLayoutEffect(e, r);
      }
      function M(e, r) {
        var a = s();
        return a.useCallback(e, r);
      }
      function ae(e, r) {
        var a = s();
        return a.useMemo(e, r);
      }
      function Ce(e, r, a) {
        var o = s();
        return o.useImperativeHandle(e, r, a);
      }
      function ge(e, r) {
        {
          var a = s();
          return a.useDebugValue(e, r);
        }
      }
      function Q() {
        var e = s();
        return e.useTransition();
      }
      function He(e) {
        var r = s();
        return r.useDeferredValue(e);
      }
      function Fr() {
        var e = s();
        return e.useId();
      }
      function Ir(e, r, a) {
        var o = s();
        return o.useSyncExternalStore(e, r, a);
      }
      var Je = 0, Gr, Kr, Hr, Jr, Xr, Qr, Zr;
      function et() {
      }
      et.__reactDisabledLog = !0;
      function Rt() {
        {
          if (Je === 0) {
            Gr = console.log, Kr = console.info, Hr = console.warn, Jr = console.error, Xr = console.group, Qr = console.groupCollapsed, Zr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: et,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Je++;
        }
      }
      function St() {
        {
          if (Je--, Je === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: u({}, e, {
                value: Gr
              }),
              info: u({}, e, {
                value: Kr
              }),
              warn: u({}, e, {
                value: Hr
              }),
              error: u({}, e, {
                value: Jr
              }),
              group: u({}, e, {
                value: Xr
              }),
              groupCollapsed: u({}, e, {
                value: Qr
              }),
              groupEnd: u({}, e, {
                value: Zr
              })
            });
          }
          Je < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var $r = G.ReactCurrentDispatcher, Nr;
      function vr(e, r, a) {
        {
          if (Nr === void 0)
            try {
              throw Error();
            } catch (c) {
              var o = c.stack.trim().match(/\n( *(at )?)/);
              Nr = o && o[1] || "";
            }
          return `
` + Nr + e;
        }
      }
      var Lr = !1, yr;
      {
        var wt = typeof WeakMap == "function" ? WeakMap : Map;
        yr = new wt();
      }
      function rt(e, r) {
        if (!e || Lr)
          return "";
        {
          var a = yr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Lr = !0;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var d;
        d = $r.current, $r.current = null, Rt();
        try {
          if (r) {
            var l = function() {
              throw Error();
            };
            if (Object.defineProperty(l.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(l, []);
              } catch (H) {
                o = H;
              }
              Reflect.construct(e, [], l);
            } else {
              try {
                l.call();
              } catch (H) {
                o = H;
              }
              e.call(l.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (H) {
              o = H;
            }
            e();
          }
        } catch (H) {
          if (H && o && typeof H.stack == "string") {
            for (var y = H.stack.split(`
`), R = o.stack.split(`
`), k = y.length - 1, D = R.length - 1; k >= 1 && D >= 0 && y[k] !== R[D]; )
              D--;
            for (; k >= 1 && D >= 0; k--, D--)
              if (y[k] !== R[D]) {
                if (k !== 1 || D !== 1)
                  do
                    if (k--, D--, D < 0 || y[k] !== R[D]) {
                      var F = `
` + y[k].replace(" at new ", " at ");
                      return e.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", e.displayName)), typeof e == "function" && yr.set(e, F), F;
                    }
                  while (k >= 1 && D >= 0);
                break;
              }
          }
        } finally {
          Lr = !1, $r.current = d, St(), Error.prepareStackTrace = c;
        }
        var N = e ? e.displayName || e.name : "", q = N ? vr(N) : "";
        return typeof e == "function" && yr.set(e, q), q;
      }
      function Ct(e, r, a) {
        return rt(e, !1);
      }
      function Ot(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function hr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return rt(e, Ot(e));
        if (typeof e == "string")
          return vr(e);
        switch (e) {
          case z:
            return vr("Suspense");
          case ie:
            return vr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case U:
              return Ct(e.render);
            case te:
              return hr(e.type, r, a);
            case de: {
              var o = e, c = o._payload, d = o._init;
              try {
                return hr(d(c), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var tt = {}, nt = G.ReactDebugCurrentFrame;
      function mr(e) {
        if (e) {
          var r = e._owner, a = hr(e.type, e._source, r ? r.type : null);
          nt.setExtraStackFrame(a);
        } else
          nt.setExtraStackFrame(null);
      }
      function Tt(e, r, a, o, c) {
        {
          var d = Function.call.bind(Ae);
          for (var l in e)
            if (d(e, l)) {
              var y = void 0;
              try {
                if (typeof e[l] != "function") {
                  var R = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw R.name = "Invariant Violation", R;
                }
                y = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (k) {
                y = k;
              }
              y && !(y instanceof Error) && (mr(c), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof y), mr(null)), y instanceof Error && !(y.message in tt) && (tt[y.message] = !0, mr(c), f("Failed %s type: %s", a, y.message), mr(null));
            }
        }
      }
      function Ye(e) {
        if (e) {
          var r = e._owner, a = hr(e.type, e._source, r ? r.type : null);
          Oe(a);
        } else
          Oe(null);
      }
      var Mr;
      Mr = !1;
      function at() {
        if (ee.current) {
          var e = ye(ee.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Pt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function kt(e) {
        return e != null ? Pt(e.__source) : "";
      }
      var ot = {};
      function jt(e) {
        var r = at();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function it(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = jt(r);
          if (!ot[a]) {
            ot[a] = !0;
            var o = "";
            e && e._owner && e._owner !== ee.current && (o = " It was passed a child from " + ye(e._owner.type) + "."), Ye(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ye(null);
          }
        }
      }
      function ut(e, r) {
        if (typeof e == "object") {
          if (Le(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              Se(o) && it(o, r);
            }
          else if (Se(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = I(e);
            if (typeof c == "function" && c !== e.entries)
              for (var d = c.call(e), l; !(l = d.next()).done; )
                Se(l.value) && it(l.value, r);
          }
        }
      }
      function st(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === U || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === te))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = ye(r);
            Tt(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Mr) {
            Mr = !0;
            var c = ye(r);
            f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function xt(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ye(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ye(null);
              break;
            }
          }
          e.ref !== null && (Ye(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), Ye(null));
        }
      }
      function ct(e, r, a) {
        var o = t(e);
        if (!o) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = kt(r);
          d ? c += d : c += at();
          var l;
          e === null ? l = "null" : Le(e) ? l = "array" : e !== void 0 && e.$$typeof === B ? (l = "<" + (ye(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, f("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, c);
        }
        var y = wr.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var R = 2; R < arguments.length; R++)
            ut(arguments[R], e);
        return e === g ? xt(y) : st(y), y;
      }
      var lt = !1;
      function At(e) {
        var r = ct.bind(null, e);
        return r.type = e, lt || (lt = !0, fe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return fe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function Dt(e, r, a) {
        for (var o = Or.apply(this, arguments), c = 2; c < arguments.length; c++)
          ut(arguments[c], o.type);
        return st(o), o;
      }
      function Ft(e, r) {
        var a = le.transition;
        le.transition = {};
        var o = le.transition;
        le.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (le.transition = a, a === null && o._updatedFibers) {
            var c = o._updatedFibers.size;
            c > 10 && fe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var ft = !1, _r = null;
      function It(e) {
        if (_r === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = x && x[r];
            _r = a.call(x, "timers").setImmediate;
          } catch {
            _r = function(c) {
              ft === !1 && (ft = !0, typeof MessageChannel > "u" && f("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var d = new MessageChannel();
              d.port1.onmessage = c, d.port2.postMessage(void 0);
            };
          }
        return _r(e);
      }
      var qe = 0, dt = !1;
      function pt(e) {
        {
          var r = qe;
          qe++, V.current === null && (V.current = []);
          var a = V.isBatchingLegacy, o;
          try {
            if (V.isBatchingLegacy = !0, o = e(), !a && V.didScheduleLegacyUpdate) {
              var c = V.current;
              c !== null && (V.didScheduleLegacyUpdate = !1, Vr(c));
            }
          } catch (N) {
            throw gr(r), N;
          } finally {
            V.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var d = o, l = !1, y = {
              then: function(N, q) {
                l = !0, d.then(function(H) {
                  gr(r), qe === 0 ? Wr(H, N, q) : N(H);
                }, function(H) {
                  gr(r), q(H);
                });
              }
            };
            return !dt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              l || (dt = !0, f("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var R = o;
            if (gr(r), qe === 0) {
              var k = V.current;
              k !== null && (Vr(k), V.current = null);
              var D = {
                then: function(N, q) {
                  V.current === null ? (V.current = [], Wr(R, N, q)) : N(R);
                }
              };
              return D;
            } else {
              var F = {
                then: function(N, q) {
                  N(R);
                }
              };
              return F;
            }
          }
        }
      }
      function gr(e) {
        e !== qe - 1 && f("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), qe = e;
      }
      function Wr(e, r, a) {
        {
          var o = V.current;
          if (o !== null)
            try {
              Vr(o), It(function() {
                o.length === 0 ? (V.current = null, r(e)) : Wr(e, r, a);
              });
            } catch (c) {
              a(c);
            }
          else
            r(e);
        }
      }
      var Ur = !1;
      function Vr(e) {
        if (!Ur) {
          Ur = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Ur = !1;
          }
        }
      }
      var $t = ct, Nt = Dt, Lt = At, Mt = {
        map: Ie,
        forEach: cr,
        count: kr,
        toArray: jr,
        only: lr
      };
      p.Children = Mt, p.Component = E, p.Fragment = g, p.Profiler = L, p.PureComponent = C, p.StrictMode = A, p.Suspense = z, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G, p.act = pt, p.cloneElement = Nt, p.createContext = fr, p.createElement = $t, p.createFactory = Lt, p.createRef = Er, p.forwardRef = Dr, p.isValidElement = Se, p.lazy = Ar, p.memo = i, p.startTransition = Ft, p.unstable_act = pt, p.useCallback = M, p.useContext = v, p.useDebugValue = ge, p.useDeferredValue = He, p.useEffect = h, p.useId = Fr, p.useImperativeHandle = Ce, p.useInsertionEffect = K, p.useLayoutEffect = $, p.useMemo = ae, p.useReducer = O, p.useRef = b, p.useState = w, p.useSyncExternalStore = Ir, p.useTransition = Q, p.version = re, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(er, er.exports)), er.exports;
}
process.env.NODE_ENV === "production" ? Br.exports = qt() : Br.exports = Bt();
var zr = Br.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function zt() {
  if (gt)
    return Xe;
  gt = 1;
  var x = zr, p = Symbol.for("react.element"), re = Symbol.for("react.fragment"), B = Object.prototype.hasOwnProperty, Z = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(L, W, oe) {
    var U, z = {}, ie = null, te = null;
    oe !== void 0 && (ie = "" + oe), W.key !== void 0 && (ie = "" + W.key), W.ref !== void 0 && (te = W.ref);
    for (U in W)
      B.call(W, U) && !g.hasOwnProperty(U) && (z[U] = W[U]);
    if (L && L.defaultProps)
      for (U in W = L.defaultProps, W)
        z[U] === void 0 && (z[U] = W[U]);
    return { $$typeof: p, type: L, key: ie, ref: te, props: z, _owner: Z.current };
  }
  return Xe.Fragment = re, Xe.jsx = A, Xe.jsxs = A, Xe;
}
var Qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function Gt() {
  return bt || (bt = 1, process.env.NODE_ENV !== "production" && function() {
    var x = zr, p = Symbol.for("react.element"), re = Symbol.for("react.portal"), B = Symbol.for("react.fragment"), Z = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), L = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), z = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), te = Symbol.for("react.offscreen"), de = Symbol.iterator, Ne = "@@iterator";
    function se(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = de && t[de] || t[Ne];
      return typeof i == "function" ? i : null;
    }
    var ce = x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(t) {
      {
        for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), v = 1; v < i; v++)
          s[v - 1] = arguments[v];
        be("error", t, s);
      }
    }
    function be(t, i, s) {
      {
        var v = ce.ReactDebugCurrentFrame, w = v.getStackAddendum();
        w !== "" && (i += "%s", s = s.concat([w]));
        var O = s.map(function(b) {
          return String(b);
        });
        O.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, O);
      }
    }
    var le = !1, V = !1, ee = !1, pe = !1, he = !1, Oe;
    Oe = Symbol.for("react.module.reference");
    function Te(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === B || t === g || he || t === Z || t === oe || t === U || pe || t === te || le || V || ee || typeof t == "object" && t !== null && (t.$$typeof === ie || t.$$typeof === z || t.$$typeof === A || t.$$typeof === L || t.$$typeof === W || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Oe || t.getModuleId !== void 0));
    }
    function Be(t, i, s) {
      var v = t.displayName;
      if (v)
        return v;
      var w = i.displayName || i.name || "";
      return w !== "" ? s + "(" + w + ")" : s;
    }
    function Pe(t) {
      return t.displayName || "Context";
    }
    function X(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case B:
          return "Fragment";
        case re:
          return "Portal";
        case g:
          return "Profiler";
        case Z:
          return "StrictMode";
        case oe:
          return "Suspense";
        case U:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case L:
            var i = t;
            return Pe(i) + ".Consumer";
          case A:
            var s = t;
            return Pe(s._context) + ".Provider";
          case W:
            return Be(t, t.render, "ForwardRef");
          case z:
            var v = t.displayName || null;
            return v !== null ? v : X(t.type) || "Memo";
          case ie: {
            var w = t, O = w._payload, b = w._init;
            try {
              return X(b(O));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ne = Object.assign, G = 0, fe, f, ve, ke, me, n, u;
    function _() {
    }
    _.__reactDisabledLog = !0;
    function E() {
      {
        if (G === 0) {
          fe = console.log, f = console.info, ve = console.warn, ke = console.error, me = console.group, n = console.groupCollapsed, u = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: _,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        G++;
      }
    }
    function S() {
      {
        if (G--, G === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ne({}, t, {
              value: fe
            }),
            info: ne({}, t, {
              value: f
            }),
            warn: ne({}, t, {
              value: ve
            }),
            error: ne({}, t, {
              value: ke
            }),
            group: ne({}, t, {
              value: me
            }),
            groupCollapsed: ne({}, t, {
              value: n
            }),
            groupEnd: ne({}, t, {
              value: u
            })
          });
        }
        G < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var j = ce.ReactCurrentDispatcher, P;
    function T(t, i, s) {
      {
        if (P === void 0)
          try {
            throw Error();
          } catch (w) {
            var v = w.stack.trim().match(/\n( *(at )?)/);
            P = v && v[1] || "";
          }
        return `
` + P + t;
      }
    }
    var C = !1, Y;
    {
      var Er = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Er();
    }
    function rr(t, i) {
      if (!t || C)
        return "";
      {
        var s = Y.get(t);
        if (s !== void 0)
          return s;
      }
      var v;
      C = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var O;
      O = j.current, j.current = null, E();
      try {
        if (i) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (Q) {
              v = Q;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (Q) {
              v = Q;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Q) {
            v = Q;
          }
          t();
        }
      } catch (Q) {
        if (Q && v && typeof Q.stack == "string") {
          for (var h = Q.stack.split(`
`), K = v.stack.split(`
`), $ = h.length - 1, M = K.length - 1; $ >= 1 && M >= 0 && h[$] !== K[M]; )
            M--;
          for (; $ >= 1 && M >= 0; $--, M--)
            if (h[$] !== K[M]) {
              if ($ !== 1 || M !== 1)
                do
                  if ($--, M--, M < 0 || h[$] !== K[M]) {
                    var ae = `
` + h[$].replace(" at new ", " at ");
                    return t.displayName && ae.includes("<anonymous>") && (ae = ae.replace("<anonymous>", t.displayName)), typeof t == "function" && Y.set(t, ae), ae;
                  }
                while ($ >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        C = !1, j.current = O, S(), Error.prepareStackTrace = w;
      }
      var Ce = t ? t.displayName || t.name : "", ge = Ce ? T(Ce) : "";
      return typeof t == "function" && Y.set(t, ge), ge;
    }
    function Le(t, i, s) {
      return rr(t, !1);
    }
    function Rr(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Me(t, i, s) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return rr(t, Rr(t));
      if (typeof t == "string")
        return T(t);
      switch (t) {
        case oe:
          return T("Suspense");
        case U:
          return T("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case W:
            return Le(t.render);
          case z:
            return Me(t.type, i, s);
          case ie: {
            var v = t, w = v._payload, O = v._init;
            try {
              return Me(O(w), i, s);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, je = {}, tr = ce.ReactDebugCurrentFrame;
    function xe(t) {
      if (t) {
        var i = t._owner, s = Me(t.type, t._source, i ? i.type : null);
        tr.setExtraStackFrame(s);
      } else
        tr.setExtraStackFrame(null);
    }
    function ye(t, i, s, v, w) {
      {
        var O = Function.call.bind(Ee);
        for (var b in t)
          if (O(t, b)) {
            var h = void 0;
            try {
              if (typeof t[b] != "function") {
                var K = Error((v || "React class") + ": " + s + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              h = t[b](i, b, v, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch ($) {
              h = $;
            }
            h && !(h instanceof Error) && (xe(w), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", s, b, typeof h), xe(null)), h instanceof Error && !(h.message in je) && (je[h.message] = !0, xe(w), I("Failed %s type: %s", s, h.message), xe(null));
          }
      }
    }
    var Ae = Array.isArray;
    function We(t) {
      return Ae(t);
    }
    function nr(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, s = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s;
      }
    }
    function ar(t) {
      try {
        return Ue(t), !1;
      } catch {
        return !0;
      }
    }
    function Ue(t) {
      return "" + t;
    }
    function ze(t) {
      if (ar(t))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", nr(t)), Ue(t);
    }
    var Re = ce.ReactCurrentOwner, Sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, or, ir, De;
    De = {};
    function wr(t) {
      if (Ee.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Cr(t) {
      if (Ee.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Or(t, i) {
      if (typeof t.ref == "string" && Re.current && i && Re.current.stateNode !== i) {
        var s = X(Re.current.type);
        De[s] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(Re.current.type), t.ref), De[s] = !0);
      }
    }
    function Se(t, i) {
      {
        var s = function() {
          or || (or = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function ur(t, i) {
      {
        var s = function() {
          ir || (ir = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var Tr = function(t, i, s, v, w, O, b) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: s,
        props: b,
        // Record the component responsible for creating this element.
        _owner: O
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Pr(t, i, s, v, w) {
      {
        var O, b = {}, h = null, K = null;
        s !== void 0 && (ze(s), h = "" + s), Cr(i) && (ze(i.key), h = "" + i.key), wr(i) && (K = i.ref, Or(i, w));
        for (O in i)
          Ee.call(i, O) && !Sr.hasOwnProperty(O) && (b[O] = i[O]);
        if (t && t.defaultProps) {
          var $ = t.defaultProps;
          for (O in $)
            b[O] === void 0 && (b[O] = $[O]);
        }
        if (h || K) {
          var M = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          h && Se(b, M), K && ur(b, M);
        }
        return Tr(t, h, K, w, v, Re.current, b);
      }
    }
    var Ve = ce.ReactCurrentOwner, sr = ce.ReactDebugCurrentFrame;
    function _e(t) {
      if (t) {
        var i = t._owner, s = Me(t.type, t._source, i ? i.type : null);
        sr.setExtraStackFrame(s);
      } else
        sr.setExtraStackFrame(null);
    }
    var Fe;
    Fe = !1;
    function we(t) {
      return typeof t == "object" && t !== null && t.$$typeof === p;
    }
    function Ie() {
      {
        if (Ve.current) {
          var t = X(Ve.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function kr(t) {
      return "";
    }
    var cr = {};
    function jr(t) {
      {
        var i = Ie();
        if (!i) {
          var s = typeof t == "string" ? t : t.displayName || t.name;
          s && (i = `

Check the top-level render call using <` + s + ">.");
        }
        return i;
      }
    }
    function lr(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var s = jr(i);
        if (cr[s])
          return;
        cr[s] = !0;
        var v = "";
        t && t._owner && t._owner !== Ve.current && (v = " It was passed a child from " + X(t._owner.type) + "."), _e(t), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, v), _e(null);
      }
    }
    function fr(t, i) {
      {
        if (typeof t != "object")
          return;
        if (We(t))
          for (var s = 0; s < t.length; s++) {
            var v = t[s];
            we(v) && lr(v, i);
          }
        else if (we(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var w = se(t);
          if (typeof w == "function" && w !== t.entries)
            for (var O = w.call(t), b; !(b = O.next()).done; )
              we(b.value) && lr(b.value, i);
        }
      }
    }
    function $e(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var s;
        if (typeof i == "function")
          s = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === W || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === z))
          s = i.propTypes;
        else
          return;
        if (s) {
          var v = X(i);
          ye(s, t.props, "prop", v, t);
        } else if (i.PropTypes !== void 0 && !Fe) {
          Fe = !0;
          var w = X(i);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ge(t) {
      {
        for (var i = Object.keys(t.props), s = 0; s < i.length; s++) {
          var v = i[s];
          if (v !== "children" && v !== "key") {
            _e(t), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), _e(null);
            break;
          }
        }
        t.ref !== null && (_e(t), I("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    var Ke = {};
    function dr(t, i, s, v, w, O) {
      {
        var b = Te(t);
        if (!b) {
          var h = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = kr();
          K ? h += K : h += Ie();
          var $;
          t === null ? $ = "null" : We(t) ? $ = "array" : t !== void 0 && t.$$typeof === p ? ($ = "<" + (X(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : $ = typeof t, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", $, h);
        }
        var M = Pr(t, i, s, w, O);
        if (M == null)
          return M;
        if (b) {
          var ae = i.children;
          if (ae !== void 0)
            if (v)
              if (We(ae)) {
                for (var Ce = 0; Ce < ae.length; Ce++)
                  fr(ae[Ce], t);
                Object.freeze && Object.freeze(ae);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              fr(ae, t);
        }
        if (Ee.call(i, "key")) {
          var ge = X(t), Q = Object.keys(i).filter(function(Ir) {
            return Ir !== "key";
          }), He = Q.length > 0 ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[ge + He]) {
            var Fr = Q.length > 0 ? "{" + Q.join(": ..., ") + ": ...}" : "{}";
            I(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, He, ge, Fr, ge), Ke[ge + He] = !0;
          }
        }
        return t === B ? Ge(M) : $e(M), M;
      }
    }
    function xr(t, i, s) {
      return dr(t, i, s, !0);
    }
    function Ar(t, i, s) {
      return dr(t, i, s, !1);
    }
    var Dr = Ar, pr = xr;
    Qe.Fragment = B, Qe.jsx = Dr, Qe.jsxs = pr;
  }()), Qe;
}
process.env.NODE_ENV === "production" ? qr.exports = zt() : qr.exports = Gt();
var ue = qr.exports;
const Kt = "_subakGame_1q7ag_1", Ht = "_innerFrame_1q7ag_12", Jt = "_label_1q7ag_26", Xt = "_hud_1q7ag_37", Qt = "_hudSection_1q7ag_50", Zt = "_score_1q7ag_59", en = "_nextFruit_1q7ag_63", rn = "_circleOfEvolution_1q7ag_67", tn = "_game_1q7ag_71", nn = "_isDropping_1q7ag_80", an = "_dialogs_1q7ag_94", on = "_scoreNumber_1q7ag_100", un = "_isGameOver_1q7ag_108", sn = "_isNotStarted_1q7ag_109", J = {
  subakGame: Kt,
  innerFrame: Ht,
  label: Jt,
  hud: Xt,
  hudSection: Qt,
  score: Zt,
  nextFruit: en,
  circleOfEvolution: rn,
  game: tn,
  isDropping: nn,
  dialogs: an,
  scoreNumber: on,
  isGameOver: un,
  isNotStarted: sn
};
var Et = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(x) {
  (function() {
    var p = {}.hasOwnProperty;
    function re() {
      for (var g = "", A = 0; A < arguments.length; A++) {
        var L = arguments[A];
        L && (g = Z(g, B(L)));
      }
      return g;
    }
    function B(g) {
      if (typeof g == "string" || typeof g == "number")
        return g;
      if (typeof g != "object")
        return "";
      if (Array.isArray(g))
        return re.apply(null, g);
      if (g.toString !== Object.prototype.toString && !g.toString.toString().includes("[native code]"))
        return g.toString();
      var A = "";
      for (var L in g)
        p.call(g, L) && g[L] && (A = Z(A, L));
      return A;
    }
    function Z(g, A) {
      return A ? g ? g + " " + A : g + A : g;
    }
    x.exports ? (re.default = re, x.exports = re) : window.classNames = re;
  })();
})(Et);
var cn = Et.exports;
const Ze = /* @__PURE__ */ Yt(cn);
function ln() {
  const x = new URLSearchParams(window.location.search);
  x.get("debug") && x.get("debug");
  const [p, re] = zr.useState(!1);
  function B(L) {
  }
  function Z() {
  }
  function g(L) {
  }
  const A = Ze(J.subakGame, {
    [J.isGameOver]: !0,
    [J.isNotStarted]: !0
  });
  return /* @__PURE__ */ ue.jsx(ue.Fragment, { children: /* @__PURE__ */ ue.jsxs(
    "div",
    {
      className: A,
      onMouseDown: B,
      onTouchStart: B,
      onMouseUp: Z,
      onTouchEnd: Z,
      onMouseMove: g,
      onTouchMove: g,
      children: [
        /* @__PURE__ */ ue.jsxs("div", { className: J.innerFrame, children: [
          /* @__PURE__ */ ue.jsxs("section", { className: J.hud, children: [
            /* @__PURE__ */ ue.jsx("div", { className: Ze(J.nextFruit, J.hudSection), children: /* @__PURE__ */ ue.jsx("h6", { className: J.label, children: "Next" }) }),
            /* @__PURE__ */ ue.jsx("div", { className: Ze(J.score, J.hudSection), children: /* @__PURE__ */ ue.jsx("h6", { className: J.label, children: "Score" }) }),
            /* @__PURE__ */ ue.jsx("div", { className: Ze(J.circleOfEvolution, J.hudSection), children: /* @__PURE__ */ ue.jsx("h6", { className: J.label, children: "Cycle" }) })
          ] }),
          /* @__PURE__ */ ue.jsx("section", { className: Ze(J.game, { [J.isDropping]: p }) })
        ] }),
        /* @__PURE__ */ ue.jsx("div", { className: J.dialogs })
      ]
    }
  ) });
}
export {
  ln as SubakGame
};
