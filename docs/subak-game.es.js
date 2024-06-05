function D_(Z) {
  return Z && Z.__esModule && Object.prototype.hasOwnProperty.call(Z, "default") ? Z.default : Z;
}
var $S = { exports: {} }, Ap = {}, YS = { exports: {} }, St = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var z1;
function O_() {
  if (z1)
    return St;
  z1 = 1;
  var Z = Symbol.for("react.element"), ee = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), qt = Symbol.for("react.strict_mode"), nn = Symbol.for("react.profiler"), tt = Symbol.for("react.provider"), E = Symbol.for("react.context"), Yt = Symbol.for("react.forward_ref"), me = Symbol.for("react.suspense"), ve = Symbol.for("react.memo"), nt = Symbol.for("react.lazy"), re = Symbol.iterator;
  function he(T) {
    return T === null || typeof T != "object" ? null : (T = re && T[re] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var ie = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Ve = Object.assign, Et = {};
  function ot(T, V, le) {
    this.props = T, this.context = V, this.refs = Et, this.updater = le || ie;
  }
  ot.prototype.isReactComponent = {}, ot.prototype.setState = function(T, V) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, V, "setState");
  }, ot.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function un() {
  }
  un.prototype = ot.prototype;
  function rt(T, V, le) {
    this.props = T, this.context = V, this.refs = Et, this.updater = le || ie;
  }
  var We = rt.prototype = new un();
  We.constructor = rt, Ve(We, ot.prototype), We.isPureReactComponent = !0;
  var lt = Array.isArray, Re = Object.prototype.hasOwnProperty, at = { current: null }, je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function en(T, V, le) {
    var Pe, Ae = {}, ht = null, Je = null;
    if (V != null)
      for (Pe in V.ref !== void 0 && (Je = V.ref), V.key !== void 0 && (ht = "" + V.key), V)
        Re.call(V, Pe) && !je.hasOwnProperty(Pe) && (Ae[Pe] = V[Pe]);
    var st = arguments.length - 2;
    if (st === 1)
      Ae.children = le;
    else if (1 < st) {
      for (var Ze = Array(st), Mt = 0; Mt < st; Mt++)
        Ze[Mt] = arguments[Mt + 2];
      Ae.children = Ze;
    }
    if (T && T.defaultProps)
      for (Pe in st = T.defaultProps, st)
        Ae[Pe] === void 0 && (Ae[Pe] = st[Pe]);
    return { $$typeof: Z, type: T, key: ht, ref: Je, props: Ae, _owner: at.current };
  }
  function Sn(T, V) {
    return { $$typeof: Z, type: T.type, key: V, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function Ht(T) {
    return typeof T == "object" && T !== null && T.$$typeof === Z;
  }
  function xt(T) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(le) {
      return V[le];
    });
  }
  var En = /\/+/g;
  function Ue(T, V) {
    return typeof T == "object" && T !== null && T.key != null ? xt("" + T.key) : V.toString(36);
  }
  function Qe(T, V, le, Pe, Ae) {
    var ht = typeof T;
    (ht === "undefined" || ht === "boolean") && (T = null);
    var Je = !1;
    if (T === null)
      Je = !0;
    else
      switch (ht) {
        case "string":
        case "number":
          Je = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case Z:
            case ee:
              Je = !0;
          }
      }
    if (Je)
      return Je = T, Ae = Ae(Je), T = Pe === "" ? "." + Ue(Je, 0) : Pe, lt(Ae) ? (le = "", T != null && (le = T.replace(En, "$&/") + "/"), Qe(Ae, V, le, "", function(Mt) {
        return Mt;
      })) : Ae != null && (Ht(Ae) && (Ae = Sn(Ae, le + (!Ae.key || Je && Je.key === Ae.key ? "" : ("" + Ae.key).replace(En, "$&/") + "/") + T)), V.push(Ae)), 1;
    if (Je = 0, Pe = Pe === "" ? "." : Pe + ":", lt(T))
      for (var st = 0; st < T.length; st++) {
        ht = T[st];
        var Ze = Pe + Ue(ht, st);
        Je += Qe(ht, V, le, Ze, Ae);
      }
    else if (Ze = he(T), typeof Ze == "function")
      for (T = Ze.call(T), st = 0; !(ht = T.next()).done; )
        ht = ht.value, Ze = Pe + Ue(ht, st++), Je += Qe(ht, V, le, Ze, Ae);
    else if (ht === "object")
      throw V = String(T), Error("Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead.");
    return Je;
  }
  function Ot(T, V, le) {
    if (T == null)
      return T;
    var Pe = [], Ae = 0;
    return Qe(T, Pe, "", "", function(ht) {
      return V.call(le, ht, Ae++);
    }), Pe;
  }
  function wt(T) {
    if (T._status === -1) {
      var V = T._result;
      V = V(), V.then(function(le) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = le);
      }, function(le) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = le);
      }), T._status === -1 && (T._status = 0, T._result = V);
    }
    if (T._status === 1)
      return T._result.default;
    throw T._result;
  }
  var ye = { current: null }, K = { transition: null }, Te = { ReactCurrentDispatcher: ye, ReactCurrentBatchConfig: K, ReactCurrentOwner: at };
  return St.Children = { map: Ot, forEach: function(T, V, le) {
    Ot(T, function() {
      V.apply(this, arguments);
    }, le);
  }, count: function(T) {
    var V = 0;
    return Ot(T, function() {
      V++;
    }), V;
  }, toArray: function(T) {
    return Ot(T, function(V) {
      return V;
    }) || [];
  }, only: function(T) {
    if (!Ht(T))
      throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, St.Component = ot, St.Fragment = A, St.Profiler = nn, St.PureComponent = rt, St.StrictMode = qt, St.Suspense = me, St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Te, St.cloneElement = function(T, V, le) {
    if (T == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var Pe = Ve({}, T.props), Ae = T.key, ht = T.ref, Je = T._owner;
    if (V != null) {
      if (V.ref !== void 0 && (ht = V.ref, Je = at.current), V.key !== void 0 && (Ae = "" + V.key), T.type && T.type.defaultProps)
        var st = T.type.defaultProps;
      for (Ze in V)
        Re.call(V, Ze) && !je.hasOwnProperty(Ze) && (Pe[Ze] = V[Ze] === void 0 && st !== void 0 ? st[Ze] : V[Ze]);
    }
    var Ze = arguments.length - 2;
    if (Ze === 1)
      Pe.children = le;
    else if (1 < Ze) {
      st = Array(Ze);
      for (var Mt = 0; Mt < Ze; Mt++)
        st[Mt] = arguments[Mt + 2];
      Pe.children = st;
    }
    return { $$typeof: Z, type: T.type, key: Ae, ref: ht, props: Pe, _owner: Je };
  }, St.createContext = function(T) {
    return T = { $$typeof: E, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: tt, _context: T }, T.Consumer = T;
  }, St.createElement = en, St.createFactory = function(T) {
    var V = en.bind(null, T);
    return V.type = T, V;
  }, St.createRef = function() {
    return { current: null };
  }, St.forwardRef = function(T) {
    return { $$typeof: Yt, render: T };
  }, St.isValidElement = Ht, St.lazy = function(T) {
    return { $$typeof: nt, _payload: { _status: -1, _result: T }, _init: wt };
  }, St.memo = function(T, V) {
    return { $$typeof: ve, type: T, compare: V === void 0 ? null : V };
  }, St.startTransition = function(T) {
    var V = K.transition;
    K.transition = {};
    try {
      T();
    } finally {
      K.transition = V;
    }
  }, St.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, St.useCallback = function(T, V) {
    return ye.current.useCallback(T, V);
  }, St.useContext = function(T) {
    return ye.current.useContext(T);
  }, St.useDebugValue = function() {
  }, St.useDeferredValue = function(T) {
    return ye.current.useDeferredValue(T);
  }, St.useEffect = function(T, V) {
    return ye.current.useEffect(T, V);
  }, St.useId = function() {
    return ye.current.useId();
  }, St.useImperativeHandle = function(T, V, le) {
    return ye.current.useImperativeHandle(T, V, le);
  }, St.useInsertionEffect = function(T, V) {
    return ye.current.useInsertionEffect(T, V);
  }, St.useLayoutEffect = function(T, V) {
    return ye.current.useLayoutEffect(T, V);
  }, St.useMemo = function(T, V) {
    return ye.current.useMemo(T, V);
  }, St.useReducer = function(T, V, le) {
    return ye.current.useReducer(T, V, le);
  }, St.useRef = function(T) {
    return ye.current.useRef(T);
  }, St.useState = function(T) {
    return ye.current.useState(T);
  }, St.useSyncExternalStore = function(T, V, le) {
    return ye.current.useSyncExternalStore(T, V, le);
  }, St.useTransition = function() {
    return ye.current.useTransition();
  }, St.version = "18.0.0-fc46dba67-20220329", St;
}
var Hp = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Hp.exports;
var U1;
function M_() {
  return U1 || (U1 = 1, function(Z, ee) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = "18.0.0-fc46dba67-20220329", qt = Symbol.for("react.element"), nn = Symbol.for("react.portal"), tt = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), Yt = Symbol.for("react.profiler"), me = Symbol.for("react.provider"), ve = Symbol.for("react.context"), nt = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), ie = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), Et = Symbol.for("react.offscreen"), ot = Symbol.iterator, un = "@@iterator";
      function rt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = ot && h[ot] || h[un];
        return typeof C == "function" ? C : null;
      }
      var We = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, lt = {
        transition: null
      }, Re = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, at = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, je = {}, en = null;
      function Sn(h) {
        en = h;
      }
      je.setExtraStackFrame = function(h) {
        en = h;
      }, je.getCurrentStack = null, je.getStackAddendum = function() {
        var h = "";
        en && (h += en);
        var C = je.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Ht = !1, xt = !1, En = !1, Ue = !1, Qe = !1, Ot = {
        ReactCurrentDispatcher: We,
        ReactCurrentBatchConfig: lt,
        ReactCurrentOwner: at
      };
      Ot.ReactDebugCurrentFrame = je, Ot.ReactCurrentActQueue = Re;
      function wt(h) {
        {
          for (var C = arguments.length, L = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            L[F - 1] = arguments[F];
          K("warn", h, L);
        }
      }
      function ye(h) {
        {
          for (var C = arguments.length, L = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            L[F - 1] = arguments[F];
          K("error", h, L);
        }
      }
      function K(h, C, L) {
        {
          var F = Ot.ReactDebugCurrentFrame, I = F.getStackAddendum();
          I !== "" && (C += "%s", L = L.concat([I]));
          var _e = L.map(function(fe) {
            return String(fe);
          });
          _e.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, _e);
        }
      }
      var Te = {};
      function T(h, C) {
        {
          var L = h.constructor, F = L && (L.displayName || L.name) || "ReactClass", I = F + "." + C;
          if (Te[I])
            return;
          ye("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), Te[I] = !0;
        }
      }
      var V = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
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
        enqueueForceUpdate: function(h, C, L) {
          T(h, "forceUpdate");
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
        enqueueReplaceState: function(h, C, L, F) {
          T(h, "replaceState");
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
        enqueueSetState: function(h, C, L, F) {
          T(h, "setState");
        }
      }, le = Object.assign, Pe = {};
      Object.freeze(Pe);
      function Ae(h, C, L) {
        this.props = h, this.context = C, this.refs = Pe, this.updater = L || V;
      }
      Ae.prototype.isReactComponent = {}, Ae.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ae.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ht = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Je = function(h, C) {
          Object.defineProperty(Ae.prototype, h, {
            get: function() {
              wt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var st in ht)
          ht.hasOwnProperty(st) && Je(st, ht[st]);
      }
      function Ze() {
      }
      Ze.prototype = Ae.prototype;
      function Mt(h, C, L) {
        this.props = h, this.context = C, this.refs = Pe, this.updater = L || V;
      }
      var _r = Mt.prototype = new Ze();
      _r.constructor = Mt, le(_r, Ae.prototype), _r.isPureReactComponent = !0;
      function ir() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var kr = Array.isArray;
      function on(h) {
        return kr(h);
      }
      function Vn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, L = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return L;
        }
      }
      function zn(h) {
        try {
          return Un(h), !1;
        } catch {
          return !0;
        }
      }
      function Un(h) {
        return "" + h;
      }
      function Cn(h) {
        if (zn(h))
          return ye("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Vn(h)), Un(h);
      }
      function Dr(h, C, L) {
        var F = h.displayName;
        if (F)
          return F;
        var I = C.displayName || C.name || "";
        return I !== "" ? L + "(" + I + ")" : L;
      }
      function Or(h) {
        return h.displayName || "Context";
      }
      function Pn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && ye("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case tt:
            return "Fragment";
          case nn:
            return "Portal";
          case Yt:
            return "Profiler";
          case E:
            return "StrictMode";
          case re:
            return "Suspense";
          case he:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ve:
              var C = h;
              return Or(C) + ".Consumer";
            case me:
              var L = h;
              return Or(L._context) + ".Provider";
            case nt:
              return Dr(h, h.render, "ForwardRef");
            case ie:
              var F = h.displayName || null;
              return F !== null ? F : Pn(h.type) || "Memo";
            case Ve: {
              var I = h, _e = I._payload, fe = I._init;
              try {
                return Pn(fe(_e));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var lr = Object.prototype.hasOwnProperty, Mr = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ur, Zr, qn;
      qn = {};
      function Lr(h) {
        if (lr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function sn(h) {
        if (lr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function fr(h, C) {
        var L = function() {
          ur || (ur = !0, ye("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        L.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: L,
          configurable: !0
        });
      }
      function Ga(h, C) {
        var L = function() {
          Zr || (Zr = !0, ye("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        L.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: L,
          configurable: !0
        });
      }
      function ea(h) {
        if (typeof h.ref == "string" && at.current && h.__self && at.current.stateNode !== h.__self) {
          var C = Pn(at.current.type);
          qn[C] || (ye('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), qn[C] = !0);
        }
      }
      var J = function(h, C, L, F, I, _e, fe) {
        var Ne = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: qt,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: L,
          props: fe,
          // Record the component responsible for creating this element.
          _owner: _e
        };
        return Ne._store = {}, Object.defineProperty(Ne._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ne, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Ne, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: I
        }), Object.freeze && (Object.freeze(Ne.props), Object.freeze(Ne)), Ne;
      };
      function xe(h, C, L) {
        var F, I = {}, _e = null, fe = null, Ne = null, ct = null;
        if (C != null) {
          Lr(C) && (fe = C.ref, ea(C)), sn(C) && (Cn(C.key), _e = "" + C.key), Ne = C.__self === void 0 ? null : C.__self, ct = C.__source === void 0 ? null : C.__source;
          for (F in C)
            lr.call(C, F) && !Mr.hasOwnProperty(F) && (I[F] = C[F]);
        }
        var bt = arguments.length - 2;
        if (bt === 1)
          I.children = L;
        else if (bt > 1) {
          for (var Vt = Array(bt), Ut = 0; Ut < bt; Ut++)
            Vt[Ut] = arguments[Ut + 2];
          Object.freeze && Object.freeze(Vt), I.children = Vt;
        }
        if (h && h.defaultProps) {
          var It = h.defaultProps;
          for (F in It)
            I[F] === void 0 && (I[F] = It[F]);
        }
        if (_e || fe) {
          var ft = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          _e && fr(I, ft), fe && Ga(I, ft);
        }
        return J(h, _e, fe, Ne, ct, at.current, I);
      }
      function et(h, C) {
        var L = J(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return L;
      }
      function kt(h, C, L) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, I = le({}, h.props), _e = h.key, fe = h.ref, Ne = h._self, ct = h._source, bt = h._owner;
        if (C != null) {
          Lr(C) && (fe = C.ref, bt = at.current), sn(C) && (Cn(C.key), _e = "" + C.key);
          var Vt;
          h.type && h.type.defaultProps && (Vt = h.type.defaultProps);
          for (F in C)
            lr.call(C, F) && !Mr.hasOwnProperty(F) && (C[F] === void 0 && Vt !== void 0 ? I[F] = Vt[F] : I[F] = C[F]);
        }
        var Ut = arguments.length - 2;
        if (Ut === 1)
          I.children = L;
        else if (Ut > 1) {
          for (var It = Array(Ut), ft = 0; ft < Ut; ft++)
            It[ft] = arguments[ft + 2];
          I.children = It;
        }
        return J(h.type, _e, fe, Ne, ct, bt, I);
      }
      function Lt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === qt;
      }
      var Rn = ".", cn = ":";
      function or(h) {
        var C = /[=:]/g, L = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(I) {
          return L[I];
        });
        return "$" + F;
      }
      var jt = !1, dr = /\/+/g;
      function Nt(h) {
        return h.replace(dr, "$&/");
      }
      function zt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (Cn(h.key), or("" + h.key)) : C.toString(36);
      }
      function La(h, C, L, F, I) {
        var _e = typeof h;
        (_e === "undefined" || _e === "boolean") && (h = null);
        var fe = !1;
        if (h === null)
          fe = !0;
        else
          switch (_e) {
            case "string":
            case "number":
              fe = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case qt:
                case nn:
                  fe = !0;
              }
          }
        if (fe) {
          var Ne = h, ct = I(Ne), bt = F === "" ? Rn + zt(Ne, 0) : F;
          if (on(ct)) {
            var Vt = "";
            bt != null && (Vt = Nt(bt) + "/"), La(ct, C, Vt, "", function(zf) {
              return zf;
            });
          } else
            ct != null && (Lt(ct) && (ct.key && (!Ne || Ne.key !== ct.key) && Cn(ct.key), ct = et(
              ct,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              L + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (ct.key && (!Ne || Ne.key !== ct.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Nt("" + ct.key) + "/"
              ) : "") + bt
            )), C.push(ct));
          return 1;
        }
        var Ut, It, ft = 0, Tn = F === "" ? Rn : F + cn;
        if (on(h))
          for (var ql = 0; ql < h.length; ql++)
            Ut = h[ql], It = Tn + zt(Ut, ql), ft += La(Ut, C, L, It, I);
        else {
          var ju = rt(h);
          if (typeof ju == "function") {
            var Vu = h;
            ju === Vu.entries && (jt || wt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), jt = !0);
            for (var hl = ju.call(Vu), Pu, rc = 0; !(Pu = hl.next()).done; )
              Ut = Pu.value, It = Tn + zt(Ut, rc++), ft += La(Ut, C, L, It, I);
          } else if (_e === "object") {
            var ac = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (ac === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : ac) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ft;
      }
      function va(h, C, L) {
        if (h == null)
          return h;
        var F = [], I = 0;
        return La(h, F, "", "", function(_e) {
          return C.call(L, _e, I++);
        }), F;
      }
      function tl(h) {
        var C = 0;
        return va(h, function() {
          C++;
        }), C;
      }
      function Pl(h, C, L) {
        va(h, function() {
          C.apply(this, arguments);
        }, L);
      }
      function Ou(h) {
        return va(h, function(C) {
          return C;
        }) || [];
      }
      function Ci(h) {
        if (!Lt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function nl(h) {
        var C = {
          $$typeof: ve,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
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
        C.Provider = {
          $$typeof: me,
          _context: C
        };
        var L = !1, F = !1, I = !1;
        {
          var _e = {
            $$typeof: ve,
            _context: C
          };
          Object.defineProperties(_e, {
            Provider: {
              get: function() {
                return F || (F = !0, ye("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(fe) {
                C.Provider = fe;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(fe) {
                C._currentValue = fe;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(fe) {
                C._currentValue2 = fe;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(fe) {
                C._threadCount = fe;
              }
            },
            Consumer: {
              get: function() {
                return L || (L = !0, ye("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(fe) {
                I || (wt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", fe), I = !0);
              }
            }
          }), C.Consumer = _e;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var ta = -1, Xa = 0, na = 1, Ka = 2;
      function pr(h) {
        if (h._status === ta) {
          var C = h._result, L = C();
          if (L.then(function(_e) {
            if (h._status === Xa || h._status === ta) {
              var fe = h;
              fe._status = na, fe._result = _e;
            }
          }, function(_e) {
            if (h._status === Xa || h._status === ta) {
              var fe = h;
              fe._status = Ka, fe._result = _e;
            }
          }), h._status === ta) {
            var F = h;
            F._status = Xa, F._result = L;
          }
        }
        if (h._status === na) {
          var I = h._result;
          return I === void 0 && ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, I), "default" in I || ye(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, I), I.default;
        } else
          throw h._result;
      }
      function ra(h) {
        var C = {
          // We use these fields to store the result.
          _status: ta,
          _result: h
        }, L = {
          $$typeof: Ve,
          _payload: C,
          _init: pr
        };
        {
          var F, I;
          Object.defineProperties(L, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(_e) {
                ye("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = _e, Object.defineProperty(L, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return I;
              },
              set: function(_e) {
                ye("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), I = _e, Object.defineProperty(L, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return L;
      }
      function Ja(h) {
        h != null && h.$$typeof === ie ? ye("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? ye("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && ye("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && ye("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: nt,
          render: h
        };
        {
          var L;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return L;
            },
            set: function(F) {
              L = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var R = Symbol.for("react.module.reference");
      function B(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === tt || h === Yt || Qe || h === E || h === re || h === he || Ue || h === Et || Ht || xt || En || typeof h == "object" && h !== null && (h.$$typeof === Ve || h.$$typeof === ie || h.$$typeof === me || h.$$typeof === ve || h.$$typeof === nt || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ne(h, C) {
        B(h) || ye("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var L = {
          $$typeof: ie,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(L, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(I) {
              F = I, !h.name && !h.displayName && (h.displayName = I);
            }
          });
        }
        return L;
      }
      function ce() {
        var h = We.current;
        return h === null && ye(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Ge(h) {
        var C = ce();
        if (h._context !== void 0) {
          var L = h._context;
          L.Consumer === h ? ye("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : L.Provider === h && ye("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function mt(h) {
        var C = ce();
        return C.useState(h);
      }
      function Xe(h, C, L) {
        var F = ce();
        return F.useReducer(h, C, L);
      }
      function De(h) {
        var C = ce();
        return C.useRef(h);
      }
      function On(h, C) {
        var L = ce();
        return L.useEffect(h, C);
      }
      function Qt(h, C) {
        var L = ce();
        return L.useInsertionEffect(h, C);
      }
      function Gt(h, C) {
        var L = ce();
        return L.useLayoutEffect(h, C);
      }
      function Qn(h, C) {
        var L = ce();
        return L.useCallback(h, C);
      }
      function Za(h, C) {
        var L = ce();
        return L.useMemo(h, C);
      }
      function Mu(h, C, L) {
        var F = ce();
        return F.useImperativeHandle(h, C, L);
      }
      function Ct(h, C) {
        {
          var L = ce();
          return L.useDebugValue(h, C);
        }
      }
      function Nf() {
        var h = ce();
        return h.useTransition();
      }
      function Na(h) {
        var C = ce();
        return C.useDeferredValue(h);
      }
      function it() {
        var h = ce();
        return h.useId();
      }
      function ei(h, C, L) {
        var F = ce();
        return F.useSyncExternalStore(h, C, L);
      }
      var rl = 0, Lu, al, Nr, Io, vr, Wo, qo;
      function tc() {
      }
      tc.__reactDisabledLog = !0;
      function Nu() {
        {
          if (rl === 0) {
            Lu = console.log, al = console.info, Nr = console.warn, Io = console.error, vr = console.group, Wo = console.groupCollapsed, qo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: tc,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          rl++;
        }
      }
      function il() {
        {
          if (rl--, rl === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: le({}, h, {
                value: Lu
              }),
              info: le({}, h, {
                value: al
              }),
              warn: le({}, h, {
                value: Nr
              }),
              error: le({}, h, {
                value: Io
              }),
              group: le({}, h, {
                value: vr
              }),
              groupCollapsed: le({}, h, {
                value: Wo
              }),
              groupEnd: le({}, h, {
                value: qo
              })
            });
          }
          rl < 0 && ye("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var za = Ot.ReactCurrentDispatcher, hr;
      function ll(h, C, L) {
        {
          if (hr === void 0)
            try {
              throw Error();
            } catch (I) {
              var F = I.stack.trim().match(/\n( *(at )?)/);
              hr = F && F[1] || "";
            }
          return `
` + hr + h;
        }
      }
      var ul = !1, ol;
      {
        var Bl = typeof WeakMap == "function" ? WeakMap : Map;
        ol = new Bl();
      }
      function sl(h, C) {
        if (!h || ul)
          return "";
        {
          var L = ol.get(h);
          if (L !== void 0)
            return L;
        }
        var F;
        ul = !0;
        var I = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var _e;
        _e = za.current, za.current = null, Nu();
        try {
          if (C) {
            var fe = function() {
              throw Error();
            };
            if (Object.defineProperty(fe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(fe, []);
              } catch (Tn) {
                F = Tn;
              }
              Reflect.construct(h, [], fe);
            } else {
              try {
                fe.call();
              } catch (Tn) {
                F = Tn;
              }
              h.call(fe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (Tn) {
              F = Tn;
            }
            h();
          }
        } catch (Tn) {
          if (Tn && F && typeof Tn.stack == "string") {
            for (var Ne = Tn.stack.split(`
`), ct = F.stack.split(`
`), bt = Ne.length - 1, Vt = ct.length - 1; bt >= 1 && Vt >= 0 && Ne[bt] !== ct[Vt]; )
              Vt--;
            for (; bt >= 1 && Vt >= 0; bt--, Vt--)
              if (Ne[bt] !== ct[Vt]) {
                if (bt !== 1 || Vt !== 1)
                  do
                    if (bt--, Vt--, Vt < 0 || Ne[bt] !== ct[Vt]) {
                      var Ut = `
` + Ne[bt].replace(" at new ", " at ");
                      return h.displayName && Ut.includes("<anonymous>") && (Ut = Ut.replace("<anonymous>", h.displayName)), typeof h == "function" && ol.set(h, Ut), Ut;
                    }
                  while (bt >= 1 && Vt >= 0);
                break;
              }
          }
        } finally {
          ul = !1, za.current = _e, il(), Error.prepareStackTrace = I;
        }
        var It = h ? h.displayName || h.name : "", ft = It ? ll(It) : "";
        return typeof h == "function" && ol.set(h, ft), ft;
      }
      function Qo(h, C, L) {
        return sl(h, !1);
      }
      function Go(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function vt(h, C, L) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return sl(h, Go(h));
        if (typeof h == "string")
          return ll(h);
        switch (h) {
          case re:
            return ll("Suspense");
          case he:
            return ll("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case nt:
              return Qo(h.render);
            case ie:
              return vt(h.type, C, L);
            case Ve: {
              var F = h, I = F._payload, _e = F._init;
              try {
                return vt(_e(I), C, L);
              } catch {
              }
            }
          }
        return "";
      }
      var Xo = {}, zu = Ot.ReactDebugCurrentFrame;
      function cl(h) {
        if (h) {
          var C = h._owner, L = vt(h.type, h._source, C ? C.type : null);
          zu.setExtraStackFrame(L);
        } else
          zu.setExtraStackFrame(null);
      }
      function Ko(h, C, L, F, I) {
        {
          var _e = Function.call.bind(lr);
          for (var fe in h)
            if (_e(h, fe)) {
              var Ne = void 0;
              try {
                if (typeof h[fe] != "function") {
                  var ct = Error((F || "React class") + ": " + L + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ct.name = "Invariant Violation", ct;
                }
                Ne = h[fe](C, fe, F, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (bt) {
                Ne = bt;
              }
              Ne && !(Ne instanceof Error) && (cl(I), ye("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", L, fe, typeof Ne), cl(null)), Ne instanceof Error && !(Ne.message in Xo) && (Xo[Ne.message] = !0, cl(I), ye("Failed %s type: %s", L, Ne.message), cl(null));
            }
        }
      }
      function Rt(h) {
        if (h) {
          var C = h._owner, L = vt(h.type, h._source, C ? C.type : null);
          Sn(L);
        } else
          Sn(null);
      }
      var Uu;
      Uu = !1;
      function $l() {
        if (at.current) {
          var h = Pn(at.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Be(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), L = h.lineNumber;
          return `

Check your code at ` + C + ":" + L + ".";
        }
        return "";
      }
      function Ua(h) {
        return h != null ? Be(h.__source) : "";
      }
      var vn = {};
      function zr(h) {
        var C = $l();
        if (!C) {
          var L = typeof h == "string" ? h : h.displayName || h.name;
          L && (C = `

Check the top-level render call using <` + L + ">.");
        }
        return C;
      }
      function ha(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var L = zr(C);
          if (!vn[L]) {
            vn[L] = !0;
            var F = "";
            h && h._owner && h._owner !== at.current && (F = " It was passed a child from " + Pn(h._owner.type) + "."), Rt(h), ye('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, F), Rt(null);
          }
        }
      }
      function fl(h, C) {
        if (typeof h == "object") {
          if (on(h))
            for (var L = 0; L < h.length; L++) {
              var F = h[L];
              Lt(F) && ha(F, C);
            }
          else if (Lt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var I = rt(h);
            if (typeof I == "function" && I !== h.entries)
              for (var _e = I.call(h), fe; !(fe = _e.next()).done; )
                Lt(fe.value) && ha(fe.value, C);
          }
        }
      }
      function Xt(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var L;
          if (typeof C == "function")
            L = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === nt || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ie))
            L = C.propTypes;
          else
            return;
          if (L) {
            var F = Pn(C);
            Ko(L, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Uu) {
            Uu = !0;
            var I = Pn(C);
            ye("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && ye("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Mn(h) {
        {
          for (var C = Object.keys(h.props), L = 0; L < C.length; L++) {
            var F = C[L];
            if (F !== "children" && F !== "key") {
              Rt(h), ye("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), Rt(null);
              break;
            }
          }
          h.ref !== null && (Rt(h), ye("Invalid attribute `ref` supplied to `React.Fragment`."), Rt(null));
        }
      }
      function Ur(h, C, L) {
        var F = B(h);
        if (!F) {
          var I = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _e = Ua(C);
          _e ? I += _e : I += $l();
          var fe;
          h === null ? fe = "null" : on(h) ? fe = "array" : h !== void 0 && h.$$typeof === qt ? (fe = "<" + (Pn(h.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : fe = typeof h, ye("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fe, I);
        }
        var Ne = xe.apply(this, arguments);
        if (Ne == null)
          return Ne;
        if (F)
          for (var ct = 2; ct < arguments.length; ct++)
            fl(arguments[ct], h);
        return h === tt ? Mn(Ne) : Xt(Ne), Ne;
      }
      var An = !1;
      function ti(h) {
        var C = Ur.bind(null, h);
        return C.type = h, An || (An = !0, wt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return wt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function nc(h, C, L) {
        for (var F = kt.apply(this, arguments), I = 2; I < arguments.length; I++)
          fl(arguments[I], F.type);
        return Xt(F), F;
      }
      function dl(h, C) {
        var L = lt.transition;
        lt.transition = {};
        var F = lt.transition;
        lt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (lt.transition = L, L === null && F._updatedFibers) {
            var I = F._updatedFibers.size;
            I > 10 && wt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var Au = !1, Yl = null;
      function Il(h) {
        if (Yl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), L = Z && Z[C];
            Yl = L.call(Z, "timers").setImmediate;
          } catch {
            Yl = function(I) {
              Au === !1 && (Au = !0, typeof MessageChannel > "u" && ye("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var _e = new MessageChannel();
              _e.port1.onmessage = I, _e.port2.postMessage(void 0);
            };
          }
        return Yl(h);
      }
      var ma = 0, Ri = !1;
      function Fu(h) {
        {
          var C = ma;
          ma++, Re.current === null && (Re.current = []);
          var L = Re.isBatchingLegacy, F;
          try {
            if (Re.isBatchingLegacy = !0, F = h(), !L && Re.didScheduleLegacyUpdate) {
              var I = Re.current;
              I !== null && (Re.didScheduleLegacyUpdate = !1, pl(I));
            }
          } catch (It) {
            throw Wl(C), It;
          } finally {
            Re.isBatchingLegacy = L;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var _e = F, fe = !1, Ne = {
              then: function(It, ft) {
                fe = !0, _e.then(function(Tn) {
                  Wl(C), ma === 0 ? ni(Tn, It, ft) : It(Tn);
                }, function(Tn) {
                  Wl(C), ft(Tn);
                });
              }
            };
            return !Ri && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              fe || (Ri = !0, ye("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ne;
          } else {
            var ct = F;
            if (Wl(C), ma === 0) {
              var bt = Re.current;
              bt !== null && (pl(bt), Re.current = null);
              var Vt = {
                then: function(It, ft) {
                  Re.current === null ? (Re.current = [], ni(ct, It, ft)) : It(ct);
                }
              };
              return Vt;
            } else {
              var Ut = {
                then: function(It, ft) {
                  It(ct);
                }
              };
              return Ut;
            }
          }
        }
      }
      function Wl(h) {
        h !== ma - 1 && ye("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ma = h;
      }
      function ni(h, C, L) {
        {
          var F = Re.current;
          if (F !== null)
            try {
              pl(F), Il(function() {
                F.length === 0 ? (Re.current = null, C(h)) : ni(h, C, L);
              });
            } catch (I) {
              L(I);
            }
          else
            C(h);
        }
      }
      var Ti = !1;
      function pl(h) {
        if (!Ti) {
          Ti = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var L = h[C];
              do
                L = L(!0);
              while (L !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            Ti = !1;
          }
        }
      }
      var Jo = Ur, Aa = nc, Hu = ti, vl = {
        map: va,
        forEach: Pl,
        count: tl,
        toArray: Ou,
        only: Ci
      };
      ee.Children = vl, ee.Component = Ae, ee.Fragment = tt, ee.Profiler = Yt, ee.PureComponent = Mt, ee.StrictMode = E, ee.Suspense = re, ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ot, ee.cloneElement = Aa, ee.createContext = nl, ee.createElement = Jo, ee.createFactory = Hu, ee.createRef = ir, ee.forwardRef = Ja, ee.isValidElement = Lt, ee.lazy = ra, ee.memo = ne, ee.startTransition = dl, ee.unstable_act = Fu, ee.useCallback = Qn, ee.useContext = Ge, ee.useDebugValue = Ct, ee.useDeferredValue = Na, ee.useEffect = On, ee.useId = it, ee.useImperativeHandle = Mu, ee.useInsertionEffect = Qt, ee.useLayoutEffect = Gt, ee.useMemo = Za, ee.useReducer = Xe, ee.useRef = De, ee.useState = mt, ee.useSyncExternalStore = ei, ee.useTransition = Nf, ee.version = A, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Hp, Hp.exports)), Hp.exports;
}
process.env.NODE_ENV === "production" ? YS.exports = O_() : YS.exports = M_();
var jp = YS.exports;
const Dm = /* @__PURE__ */ D_(jp);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var A1;
function L_() {
  if (A1)
    return Ap;
  A1 = 1;
  var Z = jp, ee = Symbol.for("react.element"), A = Symbol.for("react.fragment"), qt = Object.prototype.hasOwnProperty, nn = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, tt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(Yt, me, ve) {
    var nt, re = {}, he = null, ie = null;
    ve !== void 0 && (he = "" + ve), me.key !== void 0 && (he = "" + me.key), me.ref !== void 0 && (ie = me.ref);
    for (nt in me)
      qt.call(me, nt) && !tt.hasOwnProperty(nt) && (re[nt] = me[nt]);
    if (Yt && Yt.defaultProps)
      for (nt in me = Yt.defaultProps, me)
        re[nt] === void 0 && (re[nt] = me[nt]);
    return { $$typeof: ee, type: Yt, key: he, ref: ie, props: re, _owner: nn.current };
  }
  return Ap.Fragment = A, Ap.jsx = E, Ap.jsxs = E, Ap;
}
var Fp = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F1;
function N_() {
  return F1 || (F1 = 1, process.env.NODE_ENV !== "production" && function() {
    var Z = jp, ee = Symbol.for("react.element"), A = Symbol.for("react.portal"), qt = Symbol.for("react.fragment"), nn = Symbol.for("react.strict_mode"), tt = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), Yt = Symbol.for("react.context"), me = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), nt = Symbol.for("react.suspense_list"), re = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), Ve = Symbol.iterator, Et = "@@iterator";
    function ot(R) {
      if (R === null || typeof R != "object")
        return null;
      var B = Ve && R[Ve] || R[Et];
      return typeof B == "function" ? B : null;
    }
    var un = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function rt(R) {
      {
        for (var B = arguments.length, ne = new Array(B > 1 ? B - 1 : 0), ce = 1; ce < B; ce++)
          ne[ce - 1] = arguments[ce];
        We("error", R, ne);
      }
    }
    function We(R, B, ne) {
      {
        var ce = un.ReactDebugCurrentFrame, Ge = ce.getStackAddendum();
        Ge !== "" && (B += "%s", ne = ne.concat([Ge]));
        var mt = ne.map(function(Xe) {
          return String(Xe);
        });
        mt.unshift("Warning: " + B), Function.prototype.apply.call(console[R], console, mt);
      }
    }
    var lt = !1, Re = !1, at = !1, je = !1, en = !1, Sn = Symbol.for("react.module.reference");
    function Ht(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === qt || R === tt || en || R === nn || R === ve || R === nt || je || R === ie || lt || Re || at || typeof R == "object" && R !== null && (R.$$typeof === he || R.$$typeof === re || R.$$typeof === E || R.$$typeof === Yt || R.$$typeof === me || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === Sn || R.getModuleId !== void 0));
    }
    function xt(R, B, ne) {
      var ce = R.displayName;
      if (ce)
        return ce;
      var Ge = B.displayName || B.name || "";
      return Ge !== "" ? ne + "(" + Ge + ")" : ne;
    }
    function En(R) {
      return R.displayName || "Context";
    }
    function Ue(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && rt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case qt:
          return "Fragment";
        case A:
          return "Portal";
        case tt:
          return "Profiler";
        case nn:
          return "StrictMode";
        case ve:
          return "Suspense";
        case nt:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case Yt:
            var B = R;
            return En(B) + ".Consumer";
          case E:
            var ne = R;
            return En(ne._context) + ".Provider";
          case me:
            return xt(R, R.render, "ForwardRef");
          case re:
            var ce = R.displayName || null;
            return ce !== null ? ce : Ue(R.type) || "Memo";
          case he: {
            var Ge = R, mt = Ge._payload, Xe = Ge._init;
            try {
              return Ue(Xe(mt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Qe = Object.assign, Ot = 0, wt, ye, K, Te, T, V, le;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function Ae() {
      {
        if (Ot === 0) {
          wt = console.log, ye = console.info, K = console.warn, Te = console.error, T = console.group, V = console.groupCollapsed, le = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        Ot++;
      }
    }
    function ht() {
      {
        if (Ot--, Ot === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Qe({}, R, {
              value: wt
            }),
            info: Qe({}, R, {
              value: ye
            }),
            warn: Qe({}, R, {
              value: K
            }),
            error: Qe({}, R, {
              value: Te
            }),
            group: Qe({}, R, {
              value: T
            }),
            groupCollapsed: Qe({}, R, {
              value: V
            }),
            groupEnd: Qe({}, R, {
              value: le
            })
          });
        }
        Ot < 0 && rt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Je = un.ReactCurrentDispatcher, st;
    function Ze(R, B, ne) {
      {
        if (st === void 0)
          try {
            throw Error();
          } catch (Ge) {
            var ce = Ge.stack.trim().match(/\n( *(at )?)/);
            st = ce && ce[1] || "";
          }
        return `
` + st + R;
      }
    }
    var Mt = !1, _r;
    {
      var ir = typeof WeakMap == "function" ? WeakMap : Map;
      _r = new ir();
    }
    function kr(R, B) {
      if (!R || Mt)
        return "";
      {
        var ne = _r.get(R);
        if (ne !== void 0)
          return ne;
      }
      var ce;
      Mt = !0;
      var Ge = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var mt;
      mt = Je.current, Je.current = null, Ae();
      try {
        if (B) {
          var Xe = function() {
            throw Error();
          };
          if (Object.defineProperty(Xe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Xe, []);
            } catch (Ct) {
              ce = Ct;
            }
            Reflect.construct(R, [], Xe);
          } else {
            try {
              Xe.call();
            } catch (Ct) {
              ce = Ct;
            }
            R.call(Xe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ct) {
            ce = Ct;
          }
          R();
        }
      } catch (Ct) {
        if (Ct && ce && typeof Ct.stack == "string") {
          for (var De = Ct.stack.split(`
`), On = ce.stack.split(`
`), Qt = De.length - 1, Gt = On.length - 1; Qt >= 1 && Gt >= 0 && De[Qt] !== On[Gt]; )
            Gt--;
          for (; Qt >= 1 && Gt >= 0; Qt--, Gt--)
            if (De[Qt] !== On[Gt]) {
              if (Qt !== 1 || Gt !== 1)
                do
                  if (Qt--, Gt--, Gt < 0 || De[Qt] !== On[Gt]) {
                    var Qn = `
` + De[Qt].replace(" at new ", " at ");
                    return R.displayName && Qn.includes("<anonymous>") && (Qn = Qn.replace("<anonymous>", R.displayName)), typeof R == "function" && _r.set(R, Qn), Qn;
                  }
                while (Qt >= 1 && Gt >= 0);
              break;
            }
        }
      } finally {
        Mt = !1, Je.current = mt, ht(), Error.prepareStackTrace = Ge;
      }
      var Za = R ? R.displayName || R.name : "", Mu = Za ? Ze(Za) : "";
      return typeof R == "function" && _r.set(R, Mu), Mu;
    }
    function on(R, B, ne) {
      return kr(R, !1);
    }
    function Vn(R) {
      var B = R.prototype;
      return !!(B && B.isReactComponent);
    }
    function zn(R, B, ne) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return kr(R, Vn(R));
      if (typeof R == "string")
        return Ze(R);
      switch (R) {
        case ve:
          return Ze("Suspense");
        case nt:
          return Ze("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case me:
            return on(R.render);
          case re:
            return zn(R.type, B, ne);
          case he: {
            var ce = R, Ge = ce._payload, mt = ce._init;
            try {
              return zn(mt(Ge), B, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var Un = Object.prototype.hasOwnProperty, Cn = {}, Dr = un.ReactDebugCurrentFrame;
    function Or(R) {
      if (R) {
        var B = R._owner, ne = zn(R.type, R._source, B ? B.type : null);
        Dr.setExtraStackFrame(ne);
      } else
        Dr.setExtraStackFrame(null);
    }
    function Pn(R, B, ne, ce, Ge) {
      {
        var mt = Function.call.bind(Un);
        for (var Xe in R)
          if (mt(R, Xe)) {
            var De = void 0;
            try {
              if (typeof R[Xe] != "function") {
                var On = Error((ce || "React class") + ": " + ne + " type `" + Xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw On.name = "Invariant Violation", On;
              }
              De = R[Xe](B, Xe, ce, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Qt) {
              De = Qt;
            }
            De && !(De instanceof Error) && (Or(Ge), rt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", ne, Xe, typeof De), Or(null)), De instanceof Error && !(De.message in Cn) && (Cn[De.message] = !0, Or(Ge), rt("Failed %s type: %s", ne, De.message), Or(null));
          }
      }
    }
    var lr = Array.isArray;
    function Mr(R) {
      return lr(R);
    }
    function ur(R) {
      {
        var B = typeof Symbol == "function" && Symbol.toStringTag, ne = B && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ne;
      }
    }
    function Zr(R) {
      try {
        return qn(R), !1;
      } catch {
        return !0;
      }
    }
    function qn(R) {
      return "" + R;
    }
    function Lr(R) {
      if (Zr(R))
        return rt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ur(R)), qn(R);
    }
    var sn = un.ReactCurrentOwner, fr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ga, ea, J;
    J = {};
    function xe(R) {
      if (Un.call(R, "ref")) {
        var B = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function et(R) {
      if (Un.call(R, "key")) {
        var B = Object.getOwnPropertyDescriptor(R, "key").get;
        if (B && B.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function kt(R, B) {
      if (typeof R.ref == "string" && sn.current && B && sn.current.stateNode !== B) {
        var ne = Ue(sn.current.type);
        J[ne] || (rt('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ue(sn.current.type), R.ref), J[ne] = !0);
      }
    }
    function Lt(R, B) {
      {
        var ne = function() {
          Ga || (Ga = !0, rt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ne.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function Rn(R, B) {
      {
        var ne = function() {
          ea || (ea = !0, rt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", B));
        };
        ne.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var cn = function(R, B, ne, ce, Ge, mt, Xe) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: ee,
        // Built-in properties that belong on the element
        type: R,
        key: B,
        ref: ne,
        props: Xe,
        // Record the component responsible for creating this element.
        _owner: mt
      };
      return De._store = {}, Object.defineProperty(De._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(De, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ce
      }), Object.defineProperty(De, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ge
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function or(R, B, ne, ce, Ge) {
      {
        var mt, Xe = {}, De = null, On = null;
        ne !== void 0 && (Lr(ne), De = "" + ne), et(B) && (Lr(B.key), De = "" + B.key), xe(B) && (On = B.ref, kt(B, Ge));
        for (mt in B)
          Un.call(B, mt) && !fr.hasOwnProperty(mt) && (Xe[mt] = B[mt]);
        if (R && R.defaultProps) {
          var Qt = R.defaultProps;
          for (mt in Qt)
            Xe[mt] === void 0 && (Xe[mt] = Qt[mt]);
        }
        if (De || On) {
          var Gt = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          De && Lt(Xe, Gt), On && Rn(Xe, Gt);
        }
        return cn(R, De, On, Ge, ce, sn.current, Xe);
      }
    }
    var jt = un.ReactCurrentOwner, dr = un.ReactDebugCurrentFrame;
    function Nt(R) {
      if (R) {
        var B = R._owner, ne = zn(R.type, R._source, B ? B.type : null);
        dr.setExtraStackFrame(ne);
      } else
        dr.setExtraStackFrame(null);
    }
    var zt;
    zt = !1;
    function La(R) {
      return typeof R == "object" && R !== null && R.$$typeof === ee;
    }
    function va() {
      {
        if (jt.current) {
          var R = Ue(jt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function tl(R) {
      return "";
    }
    var Pl = {};
    function Ou(R) {
      {
        var B = va();
        if (!B) {
          var ne = typeof R == "string" ? R : R.displayName || R.name;
          ne && (B = `

Check the top-level render call using <` + ne + ">.");
        }
        return B;
      }
    }
    function Ci(R, B) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ne = Ou(B);
        if (Pl[ne])
          return;
        Pl[ne] = !0;
        var ce = "";
        R && R._owner && R._owner !== jt.current && (ce = " It was passed a child from " + Ue(R._owner.type) + "."), Nt(R), rt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, ce), Nt(null);
      }
    }
    function nl(R, B) {
      {
        if (typeof R != "object")
          return;
        if (Mr(R))
          for (var ne = 0; ne < R.length; ne++) {
            var ce = R[ne];
            La(ce) && Ci(ce, B);
          }
        else if (La(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ge = ot(R);
          if (typeof Ge == "function" && Ge !== R.entries)
            for (var mt = Ge.call(R), Xe; !(Xe = mt.next()).done; )
              La(Xe.value) && Ci(Xe.value, B);
        }
      }
    }
    function ta(R) {
      {
        var B = R.type;
        if (B == null || typeof B == "string")
          return;
        var ne;
        if (typeof B == "function")
          ne = B.propTypes;
        else if (typeof B == "object" && (B.$$typeof === me || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        B.$$typeof === re))
          ne = B.propTypes;
        else
          return;
        if (ne) {
          var ce = Ue(B);
          Pn(ne, R.props, "prop", ce, R);
        } else if (B.PropTypes !== void 0 && !zt) {
          zt = !0;
          var Ge = Ue(B);
          rt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ge || "Unknown");
        }
        typeof B.getDefaultProps == "function" && !B.getDefaultProps.isReactClassApproved && rt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xa(R) {
      {
        for (var B = Object.keys(R.props), ne = 0; ne < B.length; ne++) {
          var ce = B[ne];
          if (ce !== "children" && ce !== "key") {
            Nt(R), rt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ce), Nt(null);
            break;
          }
        }
        R.ref !== null && (Nt(R), rt("Invalid attribute `ref` supplied to `React.Fragment`."), Nt(null));
      }
    }
    function na(R, B, ne, ce, Ge, mt) {
      {
        var Xe = Ht(R);
        if (!Xe) {
          var De = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var On = tl();
          On ? De += On : De += va();
          var Qt;
          R === null ? Qt = "null" : Mr(R) ? Qt = "array" : R !== void 0 && R.$$typeof === ee ? (Qt = "<" + (Ue(R.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : Qt = typeof R, rt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Qt, De);
        }
        var Gt = or(R, B, ne, Ge, mt);
        if (Gt == null)
          return Gt;
        if (Xe) {
          var Qn = B.children;
          if (Qn !== void 0)
            if (ce)
              if (Mr(Qn)) {
                for (var Za = 0; Za < Qn.length; Za++)
                  nl(Qn[Za], R);
                Object.freeze && Object.freeze(Qn);
              } else
                rt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              nl(Qn, R);
        }
        return R === qt ? Xa(Gt) : ta(Gt), Gt;
      }
    }
    function Ka(R, B, ne) {
      return na(R, B, ne, !0);
    }
    function pr(R, B, ne) {
      return na(R, B, ne, !1);
    }
    var ra = pr, Ja = Ka;
    Fp.Fragment = qt, Fp.jsx = ra, Fp.jsxs = Ja;
  }()), Fp;
}
process.env.NODE_ENV === "production" ? $S.exports = L_() : $S.exports = N_();
var z_ = $S.exports, IS = { exports: {} }, Oa = {}, km = { exports: {} }, PS = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var H1;
function U_() {
  return H1 || (H1 = 1, function(Z) {
    function ee(K, Te) {
      var T = K.length;
      K.push(Te);
      e:
        for (; 0 < T; ) {
          var V = T - 1 >>> 1, le = K[V];
          if (0 < nn(le, Te))
            K[V] = Te, K[T] = le, T = V;
          else
            break e;
        }
    }
    function A(K) {
      return K.length === 0 ? null : K[0];
    }
    function qt(K) {
      if (K.length === 0)
        return null;
      var Te = K[0], T = K.pop();
      if (T !== Te) {
        K[0] = T;
        e:
          for (var V = 0, le = K.length, Pe = le >>> 1; V < Pe; ) {
            var Ae = 2 * (V + 1) - 1, ht = K[Ae], Je = Ae + 1, st = K[Je];
            if (0 > nn(ht, T))
              Je < le && 0 > nn(st, ht) ? (K[V] = st, K[Je] = T, V = Je) : (K[V] = ht, K[Ae] = T, V = Ae);
            else if (Je < le && 0 > nn(st, T))
              K[V] = st, K[Je] = T, V = Je;
            else
              break e;
          }
      }
      return Te;
    }
    function nn(K, Te) {
      var T = K.sortIndex - Te.sortIndex;
      return T !== 0 ? T : K.id - Te.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var tt = performance;
      Z.unstable_now = function() {
        return tt.now();
      };
    } else {
      var E = Date, Yt = E.now();
      Z.unstable_now = function() {
        return E.now() - Yt;
      };
    }
    var me = [], ve = [], nt = 1, re = null, he = 3, ie = !1, Ve = !1, Et = !1, ot = typeof setTimeout == "function" ? setTimeout : null, un = typeof clearTimeout == "function" ? clearTimeout : null, rt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function We(K) {
      for (var Te = A(ve); Te !== null; ) {
        if (Te.callback === null)
          qt(ve);
        else if (Te.startTime <= K)
          qt(ve), Te.sortIndex = Te.expirationTime, ee(me, Te);
        else
          break;
        Te = A(ve);
      }
    }
    function lt(K) {
      if (Et = !1, We(K), !Ve)
        if (A(me) !== null)
          Ve = !0, wt(Re);
        else {
          var Te = A(ve);
          Te !== null && ye(lt, Te.startTime - K);
        }
    }
    function Re(K, Te) {
      Ve = !1, Et && (Et = !1, un(en), en = -1), ie = !0;
      var T = he;
      try {
        for (We(Te), re = A(me); re !== null && (!(re.expirationTime > Te) || K && !xt()); ) {
          var V = re.callback;
          if (typeof V == "function") {
            re.callback = null, he = re.priorityLevel;
            var le = V(re.expirationTime <= Te);
            Te = Z.unstable_now(), typeof le == "function" ? re.callback = le : re === A(me) && qt(me), We(Te);
          } else
            qt(me);
          re = A(me);
        }
        if (re !== null)
          var Pe = !0;
        else {
          var Ae = A(ve);
          Ae !== null && ye(lt, Ae.startTime - Te), Pe = !1;
        }
        return Pe;
      } finally {
        re = null, he = T, ie = !1;
      }
    }
    var at = !1, je = null, en = -1, Sn = 5, Ht = -1;
    function xt() {
      return !(Z.unstable_now() - Ht < Sn);
    }
    function En() {
      if (je !== null) {
        var K = Z.unstable_now();
        Ht = K;
        var Te = !0;
        try {
          Te = je(!0, K);
        } finally {
          Te ? Ue() : (at = !1, je = null);
        }
      } else
        at = !1;
    }
    var Ue;
    if (typeof rt == "function")
      Ue = function() {
        rt(En);
      };
    else if (typeof MessageChannel < "u") {
      var Qe = new MessageChannel(), Ot = Qe.port2;
      Qe.port1.onmessage = En, Ue = function() {
        Ot.postMessage(null);
      };
    } else
      Ue = function() {
        ot(En, 0);
      };
    function wt(K) {
      je = K, at || (at = !0, Ue());
    }
    function ye(K, Te) {
      en = ot(function() {
        K(Z.unstable_now());
      }, Te);
    }
    Z.unstable_IdlePriority = 5, Z.unstable_ImmediatePriority = 1, Z.unstable_LowPriority = 4, Z.unstable_NormalPriority = 3, Z.unstable_Profiling = null, Z.unstable_UserBlockingPriority = 2, Z.unstable_cancelCallback = function(K) {
      K.callback = null;
    }, Z.unstable_continueExecution = function() {
      Ve || ie || (Ve = !0, wt(Re));
    }, Z.unstable_forceFrameRate = function(K) {
      0 > K || 125 < K ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Sn = 0 < K ? Math.floor(1e3 / K) : 5;
    }, Z.unstable_getCurrentPriorityLevel = function() {
      return he;
    }, Z.unstable_getFirstCallbackNode = function() {
      return A(me);
    }, Z.unstable_next = function(K) {
      switch (he) {
        case 1:
        case 2:
        case 3:
          var Te = 3;
          break;
        default:
          Te = he;
      }
      var T = he;
      he = Te;
      try {
        return K();
      } finally {
        he = T;
      }
    }, Z.unstable_pauseExecution = function() {
    }, Z.unstable_requestPaint = function() {
    }, Z.unstable_runWithPriority = function(K, Te) {
      switch (K) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          K = 3;
      }
      var T = he;
      he = K;
      try {
        return Te();
      } finally {
        he = T;
      }
    }, Z.unstable_scheduleCallback = function(K, Te, T) {
      var V = Z.unstable_now();
      switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? V + T : V) : T = V, K) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return le = T + le, K = { id: nt++, callback: Te, priorityLevel: K, startTime: T, expirationTime: le, sortIndex: -1 }, T > V ? (K.sortIndex = T, ee(ve, K), A(me) === null && K === A(ve) && (Et ? (un(en), en = -1) : Et = !0, ye(lt, T - V))) : (K.sortIndex = le, ee(me, K), Ve || ie || (Ve = !0, wt(Re))), K;
    }, Z.unstable_shouldYield = xt, Z.unstable_wrapCallback = function(K) {
      var Te = he;
      return function() {
        var T = he;
        he = Te;
        try {
          return K.apply(this, arguments);
        } finally {
          he = T;
        }
      };
    };
  }(PS)), PS;
}
var BS = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var j1;
function A_() {
  return j1 || (j1 = 1, function(Z) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var ee = !1, A = !1, qt = 5;
      function nn(J, xe) {
        var et = J.length;
        J.push(xe), Yt(J, xe, et);
      }
      function tt(J) {
        return J.length === 0 ? null : J[0];
      }
      function E(J) {
        if (J.length === 0)
          return null;
        var xe = J[0], et = J.pop();
        return et !== xe && (J[0] = et, me(J, et, 0)), xe;
      }
      function Yt(J, xe, et) {
        for (var kt = et; kt > 0; ) {
          var Lt = kt - 1 >>> 1, Rn = J[Lt];
          if (ve(Rn, xe) > 0)
            J[Lt] = xe, J[kt] = Rn, kt = Lt;
          else
            return;
        }
      }
      function me(J, xe, et) {
        for (var kt = et, Lt = J.length, Rn = Lt >>> 1; kt < Rn; ) {
          var cn = (kt + 1) * 2 - 1, or = J[cn], jt = cn + 1, dr = J[jt];
          if (ve(or, xe) < 0)
            jt < Lt && ve(dr, or) < 0 ? (J[kt] = dr, J[jt] = xe, kt = jt) : (J[kt] = or, J[cn] = xe, kt = cn);
          else if (jt < Lt && ve(dr, xe) < 0)
            J[kt] = dr, J[jt] = xe, kt = jt;
          else
            return;
        }
      }
      function ve(J, xe) {
        var et = J.sortIndex - xe.sortIndex;
        return et !== 0 ? et : J.id - xe.id;
      }
      var nt = 1, re = 2, he = 3, ie = 4, Ve = 5;
      function Et(J, xe) {
      }
      var ot = typeof performance == "object" && typeof performance.now == "function";
      if (ot) {
        var un = performance;
        Z.unstable_now = function() {
          return un.now();
        };
      } else {
        var rt = Date, We = rt.now();
        Z.unstable_now = function() {
          return rt.now() - We;
        };
      }
      var lt = 1073741823, Re = -1, at = 250, je = 5e3, en = 1e4, Sn = lt, Ht = [], xt = [], En = 1, Ue = null, Qe = he, Ot = !1, wt = !1, ye = !1, K = typeof setTimeout == "function" ? setTimeout : null, Te = typeof clearTimeout == "function" ? clearTimeout : null, T = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function V(J) {
        for (var xe = tt(xt); xe !== null; ) {
          if (xe.callback === null)
            E(xt);
          else if (xe.startTime <= J)
            E(xt), xe.sortIndex = xe.expirationTime, nn(Ht, xe);
          else
            return;
          xe = tt(xt);
        }
      }
      function le(J) {
        if (ye = !1, V(J), !wt)
          if (tt(Ht) !== null)
            wt = !0, Lr(Pe);
          else {
            var xe = tt(xt);
            xe !== null && sn(le, xe.startTime - J);
          }
      }
      function Pe(J, xe) {
        wt = !1, ye && (ye = !1, fr()), Ot = !0;
        var et = Qe;
        try {
          var kt;
          if (!A)
            return Ae(J, xe);
        } finally {
          Ue = null, Qe = et, Ot = !1;
        }
      }
      function Ae(J, xe) {
        var et = xe;
        for (V(et), Ue = tt(Ht); Ue !== null && !ee && !(Ue.expirationTime > et && (!J || Or())); ) {
          var kt = Ue.callback;
          if (typeof kt == "function") {
            Ue.callback = null, Qe = Ue.priorityLevel;
            var Lt = Ue.expirationTime <= et, Rn = kt(Lt);
            et = Z.unstable_now(), typeof Rn == "function" ? Ue.callback = Rn : Ue === tt(Ht) && E(Ht), V(et);
          } else
            E(Ht);
          Ue = tt(Ht);
        }
        if (Ue !== null)
          return !0;
        var cn = tt(xt);
        return cn !== null && sn(le, cn.startTime - et), !1;
      }
      function ht(J, xe) {
        switch (J) {
          case nt:
          case re:
          case he:
          case ie:
          case Ve:
            break;
          default:
            J = he;
        }
        var et = Qe;
        Qe = J;
        try {
          return xe();
        } finally {
          Qe = et;
        }
      }
      function Je(J) {
        var xe;
        switch (Qe) {
          case nt:
          case re:
          case he:
            xe = he;
            break;
          default:
            xe = Qe;
            break;
        }
        var et = Qe;
        Qe = xe;
        try {
          return J();
        } finally {
          Qe = et;
        }
      }
      function st(J) {
        var xe = Qe;
        return function() {
          var et = Qe;
          Qe = xe;
          try {
            return J.apply(this, arguments);
          } finally {
            Qe = et;
          }
        };
      }
      function Ze(J, xe, et) {
        var kt = Z.unstable_now(), Lt;
        if (typeof et == "object" && et !== null) {
          var Rn = et.delay;
          typeof Rn == "number" && Rn > 0 ? Lt = kt + Rn : Lt = kt;
        } else
          Lt = kt;
        var cn;
        switch (J) {
          case nt:
            cn = Re;
            break;
          case re:
            cn = at;
            break;
          case Ve:
            cn = Sn;
            break;
          case ie:
            cn = en;
            break;
          case he:
          default:
            cn = je;
            break;
        }
        var or = Lt + cn, jt = {
          id: En++,
          callback: xe,
          priorityLevel: J,
          startTime: Lt,
          expirationTime: or,
          sortIndex: -1
        };
        return Lt > kt ? (jt.sortIndex = Lt, nn(xt, jt), tt(Ht) === null && jt === tt(xt) && (ye ? fr() : ye = !0, sn(le, Lt - kt))) : (jt.sortIndex = or, nn(Ht, jt), !wt && !Ot && (wt = !0, Lr(Pe))), jt;
      }
      function Mt() {
      }
      function _r() {
        !wt && !Ot && (wt = !0, Lr(Pe));
      }
      function ir() {
        return tt(Ht);
      }
      function kr(J) {
        J.callback = null;
      }
      function on() {
        return Qe;
      }
      var Vn = !1, zn = null, Un = -1, Cn = qt, Dr = -1;
      function Or() {
        var J = Z.unstable_now() - Dr;
        return !(J < Cn);
      }
      function Pn() {
      }
      function lr(J) {
        if (J < 0 || J > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        J > 0 ? Cn = Math.floor(1e3 / J) : Cn = qt;
      }
      var Mr = function() {
        if (zn !== null) {
          var J = Z.unstable_now();
          Dr = J;
          var xe = !0, et = !0;
          try {
            et = zn(xe, J);
          } finally {
            et ? ur() : (Vn = !1, zn = null);
          }
        } else
          Vn = !1;
      }, ur;
      if (typeof T == "function")
        ur = function() {
          T(Mr);
        };
      else if (typeof MessageChannel < "u") {
        var Zr = new MessageChannel(), qn = Zr.port2;
        Zr.port1.onmessage = Mr, ur = function() {
          qn.postMessage(null);
        };
      } else
        ur = function() {
          K(Mr, 0);
        };
      function Lr(J) {
        zn = J, Vn || (Vn = !0, ur());
      }
      function sn(J, xe) {
        Un = K(function() {
          J(Z.unstable_now());
        }, xe);
      }
      function fr() {
        Te(Un), Un = -1;
      }
      var Ga = Pn, ea = null;
      Z.unstable_IdlePriority = Ve, Z.unstable_ImmediatePriority = nt, Z.unstable_LowPriority = ie, Z.unstable_NormalPriority = he, Z.unstable_Profiling = ea, Z.unstable_UserBlockingPriority = re, Z.unstable_cancelCallback = kr, Z.unstable_continueExecution = _r, Z.unstable_forceFrameRate = lr, Z.unstable_getCurrentPriorityLevel = on, Z.unstable_getFirstCallbackNode = ir, Z.unstable_next = Je, Z.unstable_pauseExecution = Mt, Z.unstable_requestPaint = Ga, Z.unstable_runWithPriority = ht, Z.unstable_scheduleCallback = Ze, Z.unstable_shouldYield = Or, Z.unstable_wrapCallback = st, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(BS)), BS;
}
var V1;
function $1() {
  return V1 || (V1 = 1, process.env.NODE_ENV === "production" ? km.exports = U_() : km.exports = A_()), km.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var P1;
function F_() {
  if (P1)
    return Oa;
  P1 = 1;
  var Z = jp, ee = $1();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var qt = /* @__PURE__ */ new Set(), nn = {};
  function tt(n, r) {
    E(n, r), E(n + "Capture", r);
  }
  function E(n, r) {
    for (nn[n] = r, n = 0; n < r.length; n++)
      qt.add(r[n]);
  }
  var Yt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), me = Object.prototype.hasOwnProperty, ve = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, nt = {}, re = {};
  function he(n) {
    return me.call(re, n) ? !0 : me.call(nt, n) ? !1 : ve.test(n) ? re[n] = !0 : (nt[n] = !0, !1);
  }
  function ie(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Ve(n, r, l, o) {
    if (r === null || typeof r > "u" || ie(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function Et(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var ot = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    ot[n] = new Et(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    ot[r] = new Et(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    ot[n] = new Et(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    ot[n] = new Et(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    ot[n] = new Et(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    ot[n] = new Et(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    ot[n] = new Et(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    ot[n] = new Et(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    ot[n] = new Et(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var un = /[\-:]([a-z])/g;
  function rt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      un,
      rt
    );
    ot[r] = new Et(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(un, rt);
    ot[r] = new Et(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(un, rt);
    ot[r] = new Et(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    ot[n] = new Et(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), ot.xlinkHref = new Et("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    ot[n] = new Et(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function We(n, r, l, o) {
    var c = ot.hasOwnProperty(r) ? ot[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Ve(r, l, c, o) && (l = null), o || c === null ? he(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var lt = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Re = Symbol.for("react.element"), at = Symbol.for("react.portal"), je = Symbol.for("react.fragment"), en = Symbol.for("react.strict_mode"), Sn = Symbol.for("react.profiler"), Ht = Symbol.for("react.provider"), xt = Symbol.for("react.context"), En = Symbol.for("react.forward_ref"), Ue = Symbol.for("react.suspense"), Qe = Symbol.for("react.suspense_list"), Ot = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), ye = Symbol.for("react.offscreen"), K = Symbol.iterator;
  function Te(n) {
    return n === null || typeof n != "object" ? null : (n = K && n[K] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var T = Object.assign, V;
  function le(n) {
    if (V === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        V = r && r[1] || "";
      }
    return `
` + V + n;
  }
  var Pe = !1;
  function Ae(n, r) {
    if (!n || Pe)
      return "";
    Pe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (z) {
            var o = z;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (z) {
            o = z;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, S = d.length - 1; 1 <= m && 0 <= S && c[m] !== d[S]; )
          S--;
        for (; 1 <= m && 0 <= S; m--, S--)
          if (c[m] !== d[S]) {
            if (m !== 1 || S !== 1)
              do
                if (m--, S--, 0 > S || c[m] !== d[S]) {
                  var w = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", n.displayName)), w;
                }
              while (1 <= m && 0 <= S);
            break;
          }
      }
    } finally {
      Pe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? le(n) : "";
  }
  function ht(n) {
    switch (n.tag) {
      case 5:
        return le(n.type);
      case 16:
        return le("Lazy");
      case 13:
        return le("Suspense");
      case 19:
        return le("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ae(n.type, !1), n;
      case 11:
        return n = Ae(n.type.render, !1), n;
      case 1:
        return n = Ae(n.type, !0), n;
      default:
        return "";
    }
  }
  function Je(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case je:
        return "Fragment";
      case at:
        return "Portal";
      case Sn:
        return "Profiler";
      case en:
        return "StrictMode";
      case Ue:
        return "Suspense";
      case Qe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case xt:
          return (n.displayName || "Context") + ".Consumer";
        case Ht:
          return (n._context.displayName || "Context") + ".Provider";
        case En:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Ot:
          return r = n.displayName || null, r !== null ? r : Je(n.type) || "Memo";
        case wt:
          r = n._payload, n = n._init;
          try {
            return Je(n(r));
          } catch {
          }
      }
    return null;
  }
  function st(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Je(r);
      case 8:
        return r === en ? "StrictMode" : "Mode";
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
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Ze(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Mt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function _r(n) {
    var r = Mt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function ir(n) {
    n._valueTracker || (n._valueTracker = _r(n));
  }
  function kr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = Mt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function on(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Vn(n, r) {
    var l = r.checked;
    return T({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function zn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = Ze(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Un(n, r) {
    r = r.checked, r != null && We(n, "checked", r, !1);
  }
  function Cn(n, r) {
    Un(n, r);
    var l = Ze(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Or(n, r.type, l) : r.hasOwnProperty("defaultValue") && Or(n, r.type, Ze(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Dr(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Or(n, r, l) {
    (r !== "number" || on(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Pn = Array.isArray;
  function lr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + Ze(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Mr(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(A(91));
    return T({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function ur(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(A(92));
        if (Pn(l)) {
          if (1 < l.length)
            throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: Ze(l) };
  }
  function Zr(n, r) {
    var l = Ze(r.value), o = Ze(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function qn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Lr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function sn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Lr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var fr, Ga = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (fr = fr || document.createElement("div"), fr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = fr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ea(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var J = {
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
    strokeWidth: !0
  }, xe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(J).forEach(function(n) {
    xe.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), J[r] = J[n];
    });
  });
  function et(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || J.hasOwnProperty(n) && J[n] ? ("" + r).trim() : r + "px";
  }
  function kt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = et(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Lt = T({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Rn(n, r) {
    if (r) {
      if (Lt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(A(62));
    }
  }
  function cn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
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
  var or = null;
  function jt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var dr = null, Nt = null, zt = null;
  function La(n) {
    if (n = tu(n)) {
      if (typeof dr != "function")
        throw Error(A(280));
      var r = n.stateNode;
      r && (r = hc(r), dr(n.stateNode, n.type, r));
    }
  }
  function va(n) {
    Nt ? zt ? zt.push(n) : zt = [n] : Nt = n;
  }
  function tl() {
    if (Nt) {
      var n = Nt, r = zt;
      if (zt = Nt = null, La(n), r)
        for (n = 0; n < r.length; n++)
          La(r[n]);
    }
  }
  function Pl(n, r) {
    return n(r);
  }
  function Ou() {
  }
  var Ci = !1;
  function nl(n, r, l) {
    if (Ci)
      return n(r, l);
    Ci = !0;
    try {
      return Pl(n, r, l);
    } finally {
      Ci = !1, (Nt !== null || zt !== null) && (Ou(), tl());
    }
  }
  function ta(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = hc(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
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
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(A(231, r, typeof l));
    return l;
  }
  var Xa = !1;
  if (Yt)
    try {
      var na = {};
      Object.defineProperty(na, "passive", { get: function() {
        Xa = !0;
      } }), window.addEventListener("test", na, na), window.removeEventListener("test", na, na);
    } catch {
      Xa = !1;
    }
  function Ka(n, r, l, o, c, d, m, S, w) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch ($) {
      this.onError($);
    }
  }
  var pr = !1, ra = null, Ja = !1, R = null, B = { onError: function(n) {
    pr = !0, ra = n;
  } };
  function ne(n, r, l, o, c, d, m, S, w) {
    pr = !1, ra = null, Ka.apply(B, arguments);
  }
  function ce(n, r, l, o, c, d, m, S, w) {
    if (ne.apply(this, arguments), pr) {
      if (pr) {
        var z = ra;
        pr = !1, ra = null;
      } else
        throw Error(A(198));
      Ja || (Ja = !0, R = z);
    }
  }
  function Ge(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function mt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Xe(n) {
    if (Ge(n) !== n)
      throw Error(A(188));
  }
  function De(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Ge(n), r === null)
        throw Error(A(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return Xe(c), n;
          if (d === o)
            return Xe(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, S = c.child; S; ) {
          if (S === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (S === o) {
            m = !0, o = c, l = d;
            break;
          }
          S = S.sibling;
        }
        if (!m) {
          for (S = d.child; S; ) {
            if (S === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (S === o) {
              m = !0, o = d, l = c;
              break;
            }
            S = S.sibling;
          }
          if (!m)
            throw Error(A(189));
        }
      }
      if (l.alternate !== o)
        throw Error(A(190));
    }
    if (l.tag !== 3)
      throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function On(n) {
    return n = De(n), n !== null ? Qt(n) : null;
  }
  function Qt(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Qt(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Gt = ee.unstable_scheduleCallback, Qn = ee.unstable_cancelCallback, Za = ee.unstable_shouldYield, Mu = ee.unstable_requestPaint, Ct = ee.unstable_now, Nf = ee.unstable_getCurrentPriorityLevel, Na = ee.unstable_ImmediatePriority, it = ee.unstable_UserBlockingPriority, ei = ee.unstable_NormalPriority, rl = ee.unstable_LowPriority, Lu = ee.unstable_IdlePriority, al = null, Nr = null;
  function Io(n) {
    if (Nr && typeof Nr.onCommitFiberRoot == "function")
      try {
        Nr.onCommitFiberRoot(al, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var vr = Math.clz32 ? Math.clz32 : tc, Wo = Math.log, qo = Math.LN2;
  function tc(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Wo(n) / qo | 0) | 0;
  }
  var Nu = 64, il = 4194304;
  function za(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function hr(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var S = m & ~c;
      S !== 0 ? o = za(S) : (d &= m, d !== 0 && (o = za(d)));
    } else
      m = l & ~c, m !== 0 ? o = za(m) : d !== 0 && (o = za(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - vr(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function ll(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function ul(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - vr(d), S = 1 << m, w = c[m];
      w === -1 ? (!(S & l) || S & o) && (c[m] = ll(S, r)) : w <= r && (n.expiredLanes |= S), d &= ~S;
    }
  }
  function ol(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Bl(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function sl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - vr(r), n[r] = l;
  }
  function Qo(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - vr(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Go(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - vr(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var vt = 0;
  function Xo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var zu, cl, Ko, Rt, Uu, $l = !1, Be = [], Ua = null, vn = null, zr = null, ha = /* @__PURE__ */ new Map(), fl = /* @__PURE__ */ new Map(), Xt = [], Mn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ur(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Ua = null;
        break;
      case "dragenter":
      case "dragleave":
        vn = null;
        break;
      case "mouseover":
      case "mouseout":
        zr = null;
        break;
      case "pointerover":
      case "pointerout":
        ha.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fl.delete(r.pointerId);
    }
  }
  function An(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = tu(r), r !== null && cl(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function ti(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Ua = An(Ua, n, r, l, o, c), !0;
      case "dragenter":
        return vn = An(vn, n, r, l, o, c), !0;
      case "mouseover":
        return zr = An(zr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return ha.set(d, An(ha.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, fl.set(d, An(fl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function nc(n) {
    var r = eu(n.target);
    if (r !== null) {
      var l = Ge(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = mt(l), r !== null) {
            n.blockedOn = r, Uu(n.priority, function() {
              Ko(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function dl(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = pl(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        or = o, l.target.dispatchEvent(o), or = null;
      } else
        return r = tu(l), r !== null && cl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function Au(n, r, l) {
    dl(n) && l.delete(r);
  }
  function Yl() {
    $l = !1, Ua !== null && dl(Ua) && (Ua = null), vn !== null && dl(vn) && (vn = null), zr !== null && dl(zr) && (zr = null), ha.forEach(Au), fl.forEach(Au);
  }
  function Il(n, r) {
    n.blockedOn === r && (n.blockedOn = null, $l || ($l = !0, ee.unstable_scheduleCallback(ee.unstable_NormalPriority, Yl)));
  }
  function ma(n) {
    function r(c) {
      return Il(c, n);
    }
    if (0 < Be.length) {
      Il(Be[0], n);
      for (var l = 1; l < Be.length; l++) {
        var o = Be[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Ua !== null && Il(Ua, n), vn !== null && Il(vn, n), zr !== null && Il(zr, n), ha.forEach(r), fl.forEach(r), l = 0; l < Xt.length; l++)
      o = Xt[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Xt.length && (l = Xt[0], l.blockedOn === null); )
      nc(l), l.blockedOn === null && Xt.shift();
  }
  var Ri = lt.ReactCurrentBatchConfig;
  function Fu(n, r, l, o) {
    var c = vt, d = Ri.transition;
    Ri.transition = null;
    try {
      vt = 1, ni(n, r, l, o);
    } finally {
      vt = c, Ri.transition = d;
    }
  }
  function Wl(n, r, l, o) {
    var c = vt, d = Ri.transition;
    Ri.transition = null;
    try {
      vt = 4, ni(n, r, l, o);
    } finally {
      vt = c, Ri.transition = d;
    }
  }
  function ni(n, r, l, o) {
    var c = pl(n, r, l, o);
    if (c === null)
      Wf(n, r, o, Ti, l), Ur(n, o);
    else if (ti(c, n, r, l, o))
      o.stopPropagation();
    else if (Ur(n, o), r & 4 && -1 < Mn.indexOf(n)) {
      for (; c !== null; ) {
        var d = tu(c);
        if (d !== null && zu(d), d = pl(n, r, l, o), d === null && Wf(n, r, o, Ti, l), d === c)
          break;
        c = d;
      }
      c !== null && o.stopPropagation();
    } else
      Wf(n, r, o, null, l);
  }
  var Ti = null;
  function pl(n, r, l, o) {
    if (Ti = null, n = jt(o), n = eu(n), n !== null)
      if (r = Ge(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = mt(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Ti = n, null;
  }
  function Jo(n) {
    switch (n) {
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
        switch (Nf()) {
          case Na:
            return 1;
          case it:
            return 4;
          case ei:
          case rl:
            return 16;
          case Lu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Aa = null, Hu = null, vl = null;
  function h() {
    if (vl)
      return vl;
    var n, r = Hu, l = r.length, o, c = "value" in Aa ? Aa.value : Aa.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return vl = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function C(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function L() {
    return !0;
  }
  function F() {
    return !1;
  }
  function I(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var S in n)
        n.hasOwnProperty(S) && (l = n[S], this[S] = l ? l(d) : d[S]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? L : F, this.isPropagationStopped = F, this;
    }
    return T(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = L);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = L);
    }, persist: function() {
    }, isPersistent: L }), r;
  }
  var _e = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, fe = I(_e), Ne = T({}, _e, { view: 0, detail: 0 }), ct = I(Ne), bt, Vt, Ut, It = T({}, Ne, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ic, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Ut && (Ut && n.type === "mousemove" ? (bt = n.screenX - Ut.screenX, Vt = n.screenY - Ut.screenY) : Vt = bt = 0, Ut = n), bt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Vt;
  } }), ft = I(It), Tn = T({}, It, { dataTransfer: 0 }), ql = I(Tn), ju = T({}, Ne, { relatedTarget: 0 }), Vu = I(ju), hl = T({}, _e, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Pu = I(hl), rc = T({}, _e, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), ac = I(rc), zf = T({}, _e, { data: 0 }), Vp = I(zf), Pp = {
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
    MozPrintableKey: "Unidentified"
  }, Uf = {
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
    224: "Meta"
  }, Bp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $p(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Bp[n]) ? !!r[n] : !1;
  }
  function ic() {
    return $p;
  }
  var Om = T({}, Ne, { key: function(n) {
    if (n.key) {
      var r = Pp[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = C(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Uf[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ic, charCode: function(n) {
    return n.type === "keypress" ? C(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? C(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), wi = I(Om), Mm = T({}, It, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), lc = I(Mm), Af = T({}, Ne, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ic }), Ff = I(Af), Lm = T({}, _e, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), uc = I(Lm), Yp = T({}, It, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ar = I(Yp), xi = [9, 13, 27, 32], hn = Yt && "CompositionEvent" in window, aa = null;
  Yt && "documentMode" in document && (aa = document.documentMode);
  var Hf = Yt && "TextEvent" in window && !aa, Zo = Yt && (!hn || aa && 8 < aa && 11 >= aa), Ip = " ", Bu = !1;
  function Wp(n, r) {
    switch (n) {
      case "keyup":
        return xi.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function qp(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ml = !1;
  function Nm(n, r) {
    switch (n) {
      case "compositionend":
        return qp(r);
      case "keypress":
        return r.which !== 32 ? null : (Bu = !0, Ip);
      case "textInput":
        return n = r.data, n === Ip && Bu ? null : n;
      default:
        return null;
    }
  }
  function zm(n, r) {
    if (ml)
      return n === "compositionend" || !hn && Wp(n, r) ? (n = h(), vl = Hu = Aa = null, ml = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return Zo && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Um = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function jf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Um[n.type] : r === "textarea";
  }
  function Qp(n, r, l, o) {
    va(o), r = pc(r, "onChange"), 0 < r.length && (l = new fe("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var es = null, ts = null;
  function Gp(n) {
    fv(n, 0);
  }
  function bi(n) {
    var r = Fa(n);
    if (kr(r))
      return n;
  }
  function Vf(n, r) {
    if (n === "change")
      return r;
  }
  var Pf = !1;
  if (Yt) {
    var oc;
    if (Yt) {
      var Bf = "oninput" in document;
      if (!Bf) {
        var Xp = document.createElement("div");
        Xp.setAttribute("oninput", "return;"), Bf = typeof Xp.oninput == "function";
      }
      oc = Bf;
    } else
      oc = !1;
    Pf = oc && (!document.documentMode || 9 < document.documentMode);
  }
  function Kp() {
    es && (es.detachEvent("onpropertychange", Jp), ts = es = null);
  }
  function Jp(n) {
    if (n.propertyName === "value" && bi(ts)) {
      var r = [];
      Qp(r, ts, n, jt(n)), nl(Gp, r);
    }
  }
  function Am(n, r, l) {
    n === "focusin" ? (Kp(), es = r, ts = l, es.attachEvent("onpropertychange", Jp)) : n === "focusout" && Kp();
  }
  function Fm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return bi(ts);
  }
  function Hm(n, r) {
    if (n === "click")
      return bi(r);
  }
  function jm(n, r) {
    if (n === "input" || n === "change")
      return bi(r);
  }
  function Zp(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ri = typeof Object.is == "function" ? Object.is : Zp;
  function $u(n, r) {
    if (ri(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!me.call(r, c) || !ri(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function ev(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function tv(n, r) {
    var l = ev(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ev(l);
    }
  }
  function nv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? nv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function rv() {
    for (var n = window, r = on(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = on(n.document);
    }
    return r;
  }
  function ns(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Ql(n) {
    var r = rv(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && nv(l.ownerDocument.documentElement, l)) {
      if (o !== null && ns(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = tv(l, d);
          var m = tv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var sc = Yt && "documentMode" in document && 11 >= document.documentMode, Gl = null, yl = null, rs = null, $f = !1;
  function av(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    $f || Gl == null || Gl !== on(o) || (o = Gl, "selectionStart" in o && ns(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), rs && $u(rs, o) || (rs = o, o = pc(yl, "onSelect"), 0 < o.length && (r = new fe("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Gl)));
  }
  function cc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var Yu = { animationend: cc("Animation", "AnimationEnd"), animationiteration: cc("Animation", "AnimationIteration"), animationstart: cc("Animation", "AnimationStart"), transitionend: cc("Transition", "TransitionEnd") }, fc = {}, iv = {};
  Yt && (iv = document.createElement("div").style, "AnimationEvent" in window || (delete Yu.animationend.animation, delete Yu.animationiteration.animation, delete Yu.animationstart.animation), "TransitionEvent" in window || delete Yu.transitionend.transition);
  function as(n) {
    if (fc[n])
      return fc[n];
    if (!Yu[n])
      return n;
    var r = Yu[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in iv)
        return fc[n] = r[l];
    return n;
  }
  var sr = as("animationend"), Yf = as("animationiteration"), lv = as("animationstart"), uv = as("transitionend"), ov = /* @__PURE__ */ new Map(), sv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function gl(n, r) {
    ov.set(n, r), tt(r, [n]);
  }
  for (var dc = 0; dc < sv.length; dc++) {
    var is = sv[dc], ls = is.toLowerCase(), Vm = is[0].toUpperCase() + is.slice(1);
    gl(ls, "on" + Vm);
  }
  gl(sr, "onAnimationEnd"), gl(Yf, "onAnimationIteration"), gl(lv, "onAnimationStart"), gl("dblclick", "onDoubleClick"), gl("focusin", "onFocus"), gl("focusout", "onBlur"), gl(uv, "onTransitionEnd"), E("onMouseEnter", ["mouseout", "mouseover"]), E("onMouseLeave", ["mouseout", "mouseover"]), E("onPointerEnter", ["pointerout", "pointerover"]), E("onPointerLeave", ["pointerout", "pointerover"]), tt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), tt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), tt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), tt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), tt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var _i = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Pm = new Set("cancel close invalid load scroll toggle".split(" ").concat(_i));
  function cv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ce(o, r, void 0, n), n.currentTarget = null;
  }
  function fv(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var S = o[m], w = S.instance, z = S.currentTarget;
            if (S = S.listener, w !== d && c.isPropagationStopped())
              break e;
            cv(c, S, z), d = w;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (S = o[m], w = S.instance, z = S.currentTarget, S = S.listener, w !== d && c.isPropagationStopped())
              break e;
            cv(c, S, z), d = w;
          }
      }
    }
    if (Ja)
      throw n = R, Ja = !1, R = null, n;
  }
  function Wt(n, r) {
    var l = r[cs];
    l === void 0 && (l = r[cs] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (If(r, n, 2, !1), l.add(o));
  }
  function us(n, r, l) {
    var o = 0;
    r && (o |= 4), If(l, n, o, r);
  }
  var ki = "_reactListening" + Math.random().toString(36).slice(2);
  function ai(n) {
    if (!n[ki]) {
      n[ki] = !0, qt.forEach(function(l) {
        l !== "selectionchange" && (Pm.has(l) || us(l, !1, n), us(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[ki] || (r[ki] = !0, us("selectionchange", !1, r));
    }
  }
  function If(n, r, l, o) {
    switch (Jo(r)) {
      case 1:
        var c = Fu;
        break;
      case 4:
        c = Wl;
        break;
      default:
        c = ni;
    }
    l = c.bind(null, r, l, n), c = void 0, !Xa || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Wf(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var S = o.stateNode.containerInfo;
            if (S === c || S.nodeType === 8 && S.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var w = m.tag;
                if ((w === 3 || w === 4) && (w = m.stateNode.containerInfo, w === c || w.nodeType === 8 && w.parentNode === c))
                  return;
                m = m.return;
              }
            for (; S !== null; ) {
              if (m = eu(S), m === null)
                return;
              if (w = m.tag, w === 5 || w === 6) {
                o = d = m;
                continue e;
              }
              S = S.parentNode;
            }
          }
          o = o.return;
        }
    nl(function() {
      var z = d, $ = jt(l), Ee = [];
      e: {
        var Q = ov.get(n);
        if (Q !== void 0) {
          var oe = fe, X = n;
          switch (n) {
            case "keypress":
              if (C(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              oe = wi;
              break;
            case "focusin":
              X = "focus", oe = Vu;
              break;
            case "focusout":
              X = "blur", oe = Vu;
              break;
            case "beforeblur":
            case "afterblur":
              oe = Vu;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              oe = ft;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              oe = ql;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              oe = Ff;
              break;
            case sr:
            case Yf:
            case lv:
              oe = Pu;
              break;
            case uv:
              oe = uc;
              break;
            case "scroll":
              oe = ct;
              break;
            case "wheel":
              oe = Ar;
              break;
            case "copy":
            case "cut":
            case "paste":
              oe = ac;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              oe = lc;
          }
          var Ye = (r & 4) !== 0, Jt = !Ye && n === "scroll", k = Ye ? Q !== null ? Q + "Capture" : null : Q;
          Ye = [];
          for (var x = z, M; x !== null; ) {
            M = x;
            var W = M.stateNode;
            if (M.tag === 5 && W !== null && (M = W, k !== null && (W = ta(x, k), W != null && Ye.push(Iu(x, W, M)))), Jt)
              break;
            x = x.return;
          }
          0 < Ye.length && (Q = new oe(Q, X, null, l, $), Ee.push({ event: Q, listeners: Ye }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Q = n === "mouseover" || n === "pointerover", oe = n === "mouseout" || n === "pointerout", Q && l !== or && (X = l.relatedTarget || l.fromElement) && (eu(X) || X[Mi]))
            break e;
          if ((oe || Q) && (Q = $.window === $ ? $ : (Q = $.ownerDocument) ? Q.defaultView || Q.parentWindow : window, oe ? (X = l.relatedTarget || l.toElement, oe = z, X = X ? eu(X) : null, X !== null && (Jt = Ge(X), X !== Jt || X.tag !== 5 && X.tag !== 6) && (X = null)) : (oe = null, X = z), oe !== X)) {
            if (Ye = ft, W = "onMouseLeave", k = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Ye = lc, W = "onPointerLeave", k = "onPointerEnter", x = "pointer"), Jt = oe == null ? Q : Fa(oe), M = X == null ? Q : Fa(X), Q = new Ye(W, x + "leave", oe, l, $), Q.target = Jt, Q.relatedTarget = M, W = null, eu($) === z && (Ye = new Ye(k, x + "enter", X, l, $), Ye.target = M, Ye.relatedTarget = Jt, W = Ye), Jt = W, oe && X)
              t: {
                for (Ye = oe, k = X, x = 0, M = Ye; M; M = Xl(M))
                  x++;
                for (M = 0, W = k; W; W = Xl(W))
                  M++;
                for (; 0 < x - M; )
                  Ye = Xl(Ye), x--;
                for (; 0 < M - x; )
                  k = Xl(k), M--;
                for (; x--; ) {
                  if (Ye === k || k !== null && Ye === k.alternate)
                    break t;
                  Ye = Xl(Ye), k = Xl(k);
                }
                Ye = null;
              }
            else
              Ye = null;
            oe !== null && qf(Ee, Q, oe, Ye, !1), X !== null && Jt !== null && qf(Ee, Jt, X, Ye, !0);
          }
        }
        e: {
          if (Q = z ? Fa(z) : window, oe = Q.nodeName && Q.nodeName.toLowerCase(), oe === "select" || oe === "input" && Q.type === "file")
            var pe = Vf;
          else if (jf(Q))
            if (Pf)
              pe = jm;
            else {
              pe = Fm;
              var be = Am;
            }
          else
            (oe = Q.nodeName) && oe.toLowerCase() === "input" && (Q.type === "checkbox" || Q.type === "radio") && (pe = Hm);
          if (pe && (pe = pe(n, z))) {
            Qp(Ee, pe, l, $);
            break e;
          }
          be && be(n, Q, z), n === "focusout" && (be = Q._wrapperState) && be.controlled && Q.type === "number" && Or(Q, "number", Q.value);
        }
        switch (be = z ? Fa(z) : window, n) {
          case "focusin":
            (jf(be) || be.contentEditable === "true") && (Gl = be, yl = z, rs = null);
            break;
          case "focusout":
            rs = yl = Gl = null;
            break;
          case "mousedown":
            $f = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            $f = !1, av(Ee, l, $);
            break;
          case "selectionchange":
            if (sc)
              break;
          case "keydown":
          case "keyup":
            av(Ee, l, $);
        }
        var Oe;
        if (hn)
          e: {
            switch (n) {
              case "compositionstart":
                var Le = "onCompositionStart";
                break e;
              case "compositionend":
                Le = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Le = "onCompositionUpdate";
                break e;
            }
            Le = void 0;
          }
        else
          ml ? Wp(n, l) && (Le = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (Le = "onCompositionStart");
        Le && (Zo && l.locale !== "ko" && (ml || Le !== "onCompositionStart" ? Le === "onCompositionEnd" && ml && (Oe = h()) : (Aa = $, Hu = "value" in Aa ? Aa.value : Aa.textContent, ml = !0)), be = pc(z, Le), 0 < be.length && (Le = new Vp(Le, n, null, l, $), Ee.push({ event: Le, listeners: be }), Oe ? Le.data = Oe : (Oe = qp(l), Oe !== null && (Le.data = Oe)))), (Oe = Hf ? Nm(n, l) : zm(n, l)) && (z = pc(z, "onBeforeInput"), 0 < z.length && ($ = new Vp(
          "onBeforeInput",
          "beforeinput",
          null,
          l,
          $
        ), Ee.push({ event: $, listeners: z }), $.data = Oe));
      }
      fv(Ee, r);
    });
  }
  function Iu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function pc(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = ta(n, l), d != null && o.unshift(Iu(n, d, c)), d = ta(n, r), d != null && o.push(Iu(n, d, c))), n = n.return;
    }
    return o;
  }
  function Xl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function qf(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var S = l, w = S.alternate, z = S.stateNode;
      if (w !== null && w === o)
        break;
      S.tag === 5 && z !== null && (S = z, c ? (w = ta(l, d), w != null && m.unshift(Iu(l, w, S))) : c || (w = ta(l, d), w != null && m.push(Iu(l, w, S)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var dv = /\r\n?/g, Qf = /\u0000|\uFFFD/g;
  function pv(n) {
    return (typeof n == "string" ? n : "" + n).replace(dv, `
`).replace(Qf, "");
  }
  function os(n, r, l) {
    if (r = pv(r), pv(n) !== r && l)
      throw Error(A(425));
  }
  function vc() {
  }
  var Gf = null;
  function Xf(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Kl = typeof setTimeout == "function" ? setTimeout : void 0, Kf = typeof clearTimeout == "function" ? clearTimeout : void 0, Wu = typeof Promise == "function" ? Promise : void 0, vv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Wu < "u" ? function(n) {
    return Wu.resolve(null).then(n).catch(hv);
  } : Kl;
  function hv(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ss(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), ma(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    ma(r);
  }
  function Di(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Jl(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Oi = Math.random().toString(36).slice(2), ia = "__reactFiber$" + Oi, Zl = "__reactProps$" + Oi, Mi = "__reactContainer$" + Oi, cs = "__reactEvents$" + Oi, Bm = "__reactListeners$" + Oi, $m = "__reactHandles$" + Oi;
  function eu(n) {
    var r = n[ia];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Mi] || l[ia]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = Jl(n); n !== null; ) {
            if (l = n[ia])
              return l;
            n = Jl(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function tu(n) {
    return n = n[ia] || n[Mi], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Fa(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(A(33));
  }
  function hc(n) {
    return n[Zl] || null;
  }
  var Jf = [], we = -1;
  function la(n) {
    return { current: n };
  }
  function Fe(n) {
    0 > we || (n.current = Jf[we], Jf[we] = null, we--);
  }
  function Ce(n, r) {
    we++, Jf[we] = n.current, n.current = r;
  }
  var Sl = {}, mn = la(Sl), Bn = la(!1), Li = Sl;
  function ut(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Sl;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function yn(n) {
    return n = n.childContextTypes, n != null;
  }
  function ii() {
    Fe(Bn), Fe(mn);
  }
  function El(n, r, l) {
    if (mn.current !== Sl)
      throw Error(A(168));
    Ce(mn, r), Ce(Bn, l);
  }
  function ya(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(A(108, st(n) || "Unknown", c));
    return T({}, l, o);
  }
  function mr(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Sl, Li = mn.current, Ce(mn, n), Ce(Bn, Bn.current), !0;
  }
  function mv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(A(169));
    l ? (n = ya(n, r, Li), o.__reactInternalMemoizedMergedChildContext = n, Fe(Bn), Fe(mn), Ce(mn, n)) : Fe(Bn), Ce(Bn, l);
  }
  var Fr = null, nu = !1, Zf = !1;
  function yv(n) {
    Fr === null ? Fr = [n] : Fr.push(n);
  }
  function fs(n) {
    nu = !0, yv(n);
  }
  function wn() {
    if (!Zf && Fr !== null) {
      Zf = !0;
      var n = 0, r = vt;
      try {
        var l = Fr;
        for (vt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Fr = null, nu = !1;
      } catch (c) {
        throw Fr !== null && (Fr = Fr.slice(n + 1)), Gt(Na, wn), c;
      } finally {
        vt = r, Zf = !1;
      }
    }
    return null;
  }
  var ed = lt.ReactCurrentBatchConfig;
  function ga(n, r) {
    if (n && n.defaultProps) {
      r = T({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var qu = la(null), li = null, Cl = null, Ha = null;
  function Qu() {
    Ha = Cl = li = null;
  }
  function ds(n) {
    var r = qu.current;
    Fe(qu), n._currentValue = r;
  }
  function ps(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function ui(n, r) {
    li = n, Ha = Cl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (sa = !0), n.firstContext = null);
  }
  function Gn(n) {
    var r = n._currentValue;
    if (Ha !== n)
      if (n = { context: n, memoizedValue: r, next: null }, Cl === null) {
        if (li === null)
          throw Error(A(308));
        Cl = n, li.dependencies = { lanes: 0, firstContext: n };
      } else
        Cl = Cl.next = n;
    return r;
  }
  var $n = null, Rl = !1;
  function Ni(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function td(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function oi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Tl(n, r) {
    var l = n.updateQueue;
    l !== null && (l = l.shared, bn !== null && n.mode & 1 && !(Tt & 2) ? (n = l.interleaved, n === null ? (r.next = r, $n === null ? $n = [l] : $n.push(l)) : (r.next = n.next, n.next = r), l.interleaved = r) : (n = l.pending, n === null ? r.next = r : (r.next = n.next, n.next = r), l.pending = r));
  }
  function mc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Go(n, l);
    }
  }
  function nd(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function vs(n, r, l, o) {
    var c = n.updateQueue;
    Rl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, S = c.shared.pending;
    if (S !== null) {
      c.shared.pending = null;
      var w = S, z = w.next;
      w.next = null, m === null ? d = z : m.next = z, m = w;
      var $ = n.alternate;
      $ !== null && ($ = $.updateQueue, S = $.lastBaseUpdate, S !== m && (S === null ? $.firstBaseUpdate = z : S.next = z, $.lastBaseUpdate = w));
    }
    if (d !== null) {
      var Ee = c.baseState;
      m = 0, $ = z = w = null, S = d;
      do {
        var Q = S.lane, oe = S.eventTime;
        if ((o & Q) === Q) {
          $ !== null && ($ = $.next = {
            eventTime: oe,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var X = n, Ye = S;
            switch (Q = r, oe = l, Ye.tag) {
              case 1:
                if (X = Ye.payload, typeof X == "function") {
                  Ee = X.call(oe, Ee, Q);
                  break e;
                }
                Ee = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = Ye.payload, Q = typeof X == "function" ? X.call(oe, Ee, Q) : X, Q == null)
                  break e;
                Ee = T({}, Ee, Q);
                break e;
              case 2:
                Rl = !0;
            }
          }
          S.callback !== null && S.lane !== 0 && (n.flags |= 64, Q = c.effects, Q === null ? c.effects = [S] : Q.push(S));
        } else
          oe = { eventTime: oe, lane: Q, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, $ === null ? (z = $ = oe, w = Ee) : $ = $.next = oe, m |= Q;
        if (S = S.next, S === null) {
          if (S = c.shared.pending, S === null)
            break;
          Q = S, S = Q.next, Q.next = null, c.lastBaseUpdate = Q, c.shared.pending = null;
        }
      } while (!0);
      if ($ === null && (w = Ee), c.baseState = w, c.firstBaseUpdate = z, c.lastBaseUpdate = $, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      So |= m, n.lanes = m, n.memoizedState = Ee;
    }
  }
  function rd(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(A(191, c));
          c.call(o);
        }
      }
  }
  var ad = new Z.Component().refs;
  function id(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : T({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var hs = { isMounted: function(n) {
    return (n = n._reactInternals) ? Ge(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Ol(n), d = oi(o, c);
    d.payload = r, l != null && (d.callback = l), Tl(n, d), r = wa(n, c, o), r !== null && mc(r, n, c);
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Hn(), c = Ol(n), d = oi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), Tl(n, d), r = wa(n, c, o), r !== null && mc(r, n, c);
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Hn(), o = Ol(n), c = oi(
      l,
      o
    );
    c.tag = 2, r != null && (c.callback = r), Tl(n, c), r = wa(n, o, l), r !== null && mc(r, n, o);
  } };
  function ld(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !$u(l, o) || !$u(c, d) : !0;
  }
  function gv(n, r, l) {
    var o = !1, c = Sl, d = r.contextType;
    return typeof d == "object" && d !== null ? d = Gn(d) : (c = yn(r) ? Li : mn.current, o = r.contextTypes, d = (o = o != null) ? ut(n, c) : Sl), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = hs, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Sv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && hs.enqueueReplaceState(r, r.state, null);
  }
  function ud(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = ad, Ni(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = Gn(d) : (d = yn(r) ? Li : mn.current, c.context = ut(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (id(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && hs.enqueueReplaceState(c, c.state, null), vs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  var fn = [], Gu = 0, ru = null, Xu = 0, Yn = [], Sa = 0, zi = null, Ui = 1, Ai = "";
  function Ea(n, r) {
    fn[Gu++] = Xu, fn[Gu++] = ru, ru = n, Xu = r;
  }
  function Xn(n, r, l) {
    Yn[Sa++] = Ui, Yn[Sa++] = Ai, Yn[Sa++] = zi, zi = n;
    var o = Ui;
    n = Ai;
    var c = 32 - vr(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - vr(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Ui = 1 << 32 - vr(r) + c | l << c | o, Ai = d + n;
    } else
      Ui = 1 << d | l << c | o, Ai = n;
  }
  function ae(n) {
    n.return !== null && (Ea(n, 1), Xn(n, 1, 0));
  }
  function Ca(n) {
    for (; n === ru; )
      ru = fn[--Gu], fn[Gu] = null, Xu = fn[--Gu], fn[Gu] = null;
    for (; n === zi; )
      zi = Yn[--Sa], Yn[Sa] = null, Ai = Yn[--Sa], Yn[Sa] = null, Ui = Yn[--Sa], Yn[Sa] = null;
  }
  var dn = null, Hr = null, rn = !1, ja = null;
  function Ev(n, r) {
    var l = Ir(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function Cv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, dn = n, Hr = Di(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, dn = n, Hr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = zi !== null ? { id: Ui, overflow: Ai } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ir(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, dn = n, Hr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ln(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function od(n) {
    if (rn) {
      var r = Hr;
      if (r) {
        var l = r;
        if (!Cv(n, r)) {
          if (Ln(n))
            throw Error(A(418));
          r = Di(l.nextSibling);
          var o = dn;
          r && Cv(n, r) ? Ev(o, l) : (n.flags = n.flags & -4097 | 2, rn = !1, dn = n);
        }
      } else {
        if (Ln(n))
          throw Error(A(418));
        n.flags = n.flags & -4097 | 2, rn = !1, dn = n;
      }
    }
  }
  function Rv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    dn = n;
  }
  function ms(n) {
    if (n !== dn)
      return !1;
    if (!rn)
      return Rv(n), rn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !Xf(n.type, n.memoizedProps)), r && (r = Hr)) {
      if (Ln(n)) {
        for (n = Hr; n; )
          n = Di(n.nextSibling);
        throw Error(A(418));
      }
      for (; r; )
        Ev(n, r), r = Di(r.nextSibling);
    }
    if (Rv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Hr = Di(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Hr = null;
      }
    } else
      Hr = dn ? Di(n.stateNode.nextSibling) : null;
    return !0;
  }
  function au() {
    Hr = dn = null, rn = !1;
  }
  function iu(n) {
    ja === null ? ja = [n] : ja.push(n);
  }
  function si(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var S = c.refs;
          S === ad && (S = c.refs = {}), m === null ? delete S[d] : S[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(A(284));
      if (!l._owner)
        throw Error(A(290, n));
    }
    return n;
  }
  function yc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Tv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function wv(n) {
    function r(k, x) {
      if (n) {
        var M = k.deletions;
        M === null ? (k.deletions = [x], k.flags |= 16) : M.push(x);
      }
    }
    function l(k, x) {
      if (!n)
        return null;
      for (; x !== null; )
        r(k, x), x = x.sibling;
      return null;
    }
    function o(k, x) {
      for (k = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? k.set(x.key, x) : k.set(x.index, x), x = x.sibling;
      return k;
    }
    function c(k, x) {
      return k = Ml(k, x), k.index = 0, k.sibling = null, k;
    }
    function d(k, x, M) {
      return k.index = M, n ? (M = k.alternate, M !== null ? (M = M.index, M < x ? (k.flags |= 2, x) : M) : (k.flags |= 2, x)) : (k.flags |= 1048576, x);
    }
    function m(k) {
      return n && k.alternate === null && (k.flags |= 2), k;
    }
    function S(k, x, M, W) {
      return x === null || x.tag !== 6 ? (x = Ld(M, k.mode, W), x.return = k, x) : (x = c(x, M), x.return = k, x);
    }
    function w(k, x, M, W) {
      var pe = M.type;
      return pe === je ? $(k, x, M.props.children, W, M.key) : x !== null && (x.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === wt && Tv(pe) === x.type) ? (W = c(x, M.props), W.ref = si(k, x, M), W.return = k, W) : (W = Us(M.type, M.key, M.props, null, k.mode, W), W.ref = si(k, x, M), W.return = k, W);
    }
    function z(k, x, M, W) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== M.containerInfo || x.stateNode.implementation !== M.implementation ? (x = Nd(M, k.mode, W), x.return = k, x) : (x = c(x, M.children || []), x.return = k, x);
    }
    function $(k, x, M, W, pe) {
      return x === null || x.tag !== 7 ? (x = yu(M, k.mode, W, pe), x.return = k, x) : (x = c(x, M), x.return = k, x);
    }
    function Ee(k, x, M) {
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return x = Ld("" + x, k.mode, M), x.return = k, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Re:
            return M = Us(x.type, x.key, x.props, null, k.mode, M), M.ref = si(k, null, x), M.return = k, M;
          case at:
            return x = Nd(x, k.mode, M), x.return = k, x;
          case wt:
            var W = x._init;
            return Ee(k, W(x._payload), M);
        }
        if (Pn(x) || Te(x))
          return x = yu(x, k.mode, M, null), x.return = k, x;
        yc(k, x);
      }
      return null;
    }
    function Q(k, x, M, W) {
      var pe = x !== null ? x.key : null;
      if (typeof M == "string" && M !== "" || typeof M == "number")
        return pe !== null ? null : S(k, x, "" + M, W);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Re:
            return M.key === pe ? w(k, x, M, W) : null;
          case at:
            return M.key === pe ? z(k, x, M, W) : null;
          case wt:
            return pe = M._init, Q(
              k,
              x,
              pe(M._payload),
              W
            );
        }
        if (Pn(M) || Te(M))
          return pe !== null ? null : $(k, x, M, W, null);
        yc(k, M);
      }
      return null;
    }
    function oe(k, x, M, W, pe) {
      if (typeof W == "string" && W !== "" || typeof W == "number")
        return k = k.get(M) || null, S(x, k, "" + W, pe);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case Re:
            return k = k.get(W.key === null ? M : W.key) || null, w(x, k, W, pe);
          case at:
            return k = k.get(W.key === null ? M : W.key) || null, z(x, k, W, pe);
          case wt:
            var be = W._init;
            return oe(k, x, M, be(W._payload), pe);
        }
        if (Pn(W) || Te(W))
          return k = k.get(M) || null, $(x, k, W, pe, null);
        yc(x, W);
      }
      return null;
    }
    function X(k, x, M, W) {
      for (var pe = null, be = null, Oe = x, Le = x = 0, In = null; Oe !== null && Le < M.length; Le++) {
        Oe.index > Le ? (In = Oe, Oe = null) : In = Oe.sibling;
        var _t = Q(k, Oe, M[Le], W);
        if (_t === null) {
          Oe === null && (Oe = In);
          break;
        }
        n && Oe && _t.alternate === null && r(k, Oe), x = d(_t, x, Le), be === null ? pe = _t : be.sibling = _t, be = _t, Oe = In;
      }
      if (Le === M.length)
        return l(k, Oe), rn && Ea(k, Le), pe;
      if (Oe === null) {
        for (; Le < M.length; Le++)
          Oe = Ee(k, M[Le], W), Oe !== null && (x = d(Oe, x, Le), be === null ? pe = Oe : be.sibling = Oe, be = Oe);
        return rn && Ea(k, Le), pe;
      }
      for (Oe = o(k, Oe); Le < M.length; Le++)
        In = oe(Oe, k, Le, M[Le], W), In !== null && (n && In.alternate !== null && Oe.delete(In.key === null ? Le : In.key), x = d(In, x, Le), be === null ? pe = In : be.sibling = In, be = In);
      return n && Oe.forEach(function(Nl) {
        return r(k, Nl);
      }), rn && Ea(k, Le), pe;
    }
    function Ye(k, x, M, W) {
      var pe = Te(M);
      if (typeof pe != "function")
        throw Error(A(150));
      if (M = pe.call(M), M == null)
        throw Error(A(151));
      for (var be = pe = null, Oe = x, Le = x = 0, In = null, _t = M.next(); Oe !== null && !_t.done; Le++, _t = M.next()) {
        Oe.index > Le ? (In = Oe, Oe = null) : In = Oe.sibling;
        var Nl = Q(k, Oe, _t.value, W);
        if (Nl === null) {
          Oe === null && (Oe = In);
          break;
        }
        n && Oe && Nl.alternate === null && r(k, Oe), x = d(Nl, x, Le), be === null ? pe = Nl : be.sibling = Nl, be = Nl, Oe = In;
      }
      if (_t.done)
        return l(
          k,
          Oe
        ), rn && Ea(k, Le), pe;
      if (Oe === null) {
        for (; !_t.done; Le++, _t = M.next())
          _t = Ee(k, _t.value, W), _t !== null && (x = d(_t, x, Le), be === null ? pe = _t : be.sibling = _t, be = _t);
        return rn && Ea(k, Le), pe;
      }
      for (Oe = o(k, Oe); !_t.done; Le++, _t = M.next())
        _t = oe(Oe, k, Le, _t.value, W), _t !== null && (n && _t.alternate !== null && Oe.delete(_t.key === null ? Le : _t.key), x = d(_t, x, Le), be === null ? pe = _t : be.sibling = _t, be = _t);
      return n && Oe.forEach(function(xa) {
        return r(k, xa);
      }), rn && Ea(k, Le), pe;
    }
    function Jt(k, x, M, W) {
      if (typeof M == "object" && M !== null && M.type === je && M.key === null && (M = M.props.children), typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case Re:
            e: {
              for (var pe = M.key, be = x; be !== null; ) {
                if (be.key === pe) {
                  if (pe = M.type, pe === je) {
                    if (be.tag === 7) {
                      l(k, be.sibling), x = c(be, M.props.children), x.return = k, k = x;
                      break e;
                    }
                  } else if (be.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === wt && Tv(pe) === be.type) {
                    l(k, be.sibling), x = c(be, M.props), x.ref = si(k, be, M), x.return = k, k = x;
                    break e;
                  }
                  l(k, be);
                  break;
                } else
                  r(k, be);
                be = be.sibling;
              }
              M.type === je ? (x = yu(M.props.children, k.mode, W, M.key), x.return = k, k = x) : (W = Us(M.type, M.key, M.props, null, k.mode, W), W.ref = si(k, x, M), W.return = k, k = W);
            }
            return m(k);
          case at:
            e: {
              for (be = M.key; x !== null; ) {
                if (x.key === be)
                  if (x.tag === 4 && x.stateNode.containerInfo === M.containerInfo && x.stateNode.implementation === M.implementation) {
                    l(k, x.sibling), x = c(x, M.children || []), x.return = k, k = x;
                    break e;
                  } else {
                    l(k, x);
                    break;
                  }
                else
                  r(k, x);
                x = x.sibling;
              }
              x = Nd(M, k.mode, W), x.return = k, k = x;
            }
            return m(k);
          case wt:
            return be = M._init, Jt(k, x, be(M._payload), W);
        }
        if (Pn(M))
          return X(k, x, M, W);
        if (Te(M))
          return Ye(k, x, M, W);
        yc(k, M);
      }
      return typeof M == "string" && M !== "" || typeof M == "number" ? (M = "" + M, x !== null && x.tag === 6 ? (l(k, x.sibling), x = c(x, M), x.return = k, k = x) : (l(k, x), x = Ld(M, k.mode, W), x.return = k, k = x), m(k)) : l(k, x);
    }
    return Jt;
  }
  var Ku = wv(!0), xv = wv(!1), ys = {}, Va = la(ys), Ju = la(ys), gs = la(ys);
  function lu(n) {
    if (n === ys)
      throw Error(A(174));
    return n;
  }
  function sd(n, r) {
    switch (Ce(gs, r), Ce(Ju, n), Ce(Va, ys), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : sn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = sn(r, n);
    }
    Fe(Va), Ce(Va, r);
  }
  function Zu() {
    Fe(Va), Fe(Ju), Fe(gs);
  }
  function bv(n) {
    lu(gs.current);
    var r = lu(Va.current), l = sn(r, n.type);
    r !== l && (Ce(Ju, n), Ce(Va, l));
  }
  function cd(n) {
    Ju.current === n && (Fe(Va), Fe(Ju));
  }
  var an = la(0);
  function gc(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Sc = [];
  function fd() {
    for (var n = 0; n < Sc.length; n++)
      Sc[n]._workInProgressVersionPrimary = null;
    Sc.length = 0;
  }
  var Ec = lt.ReactCurrentDispatcher, jr = lt.ReactCurrentBatchConfig, Me = 0, ze = null, $e = null, dt = null, ua = !1, eo = !1, Ss = 0, Ym = 0;
  function cr() {
    throw Error(A(321));
  }
  function Es(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ri(n[l], r[l]))
        return !1;
    return !0;
  }
  function Y(n, r, l, o, c, d) {
    if (Me = d, ze = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ec.current = n === null || n.memoizedState === null ? oa : Im, n = l(o, c), eo) {
      d = 0;
      do {
        if (eo = !1, Ss = 0, 25 <= d)
          throw Error(A(301));
        d += 1, dt = $e = null, r.updateQueue = null, Ec.current = Kt, n = l(o, c);
      } while (eo);
    }
    if (Ec.current = fi, r = $e !== null && $e.next !== null, Me = 0, dt = $e = ze = null, ua = !1, r)
      throw Error(A(300));
    return n;
  }
  function Nn() {
    var n = Ss !== 0;
    return Ss = 0, n;
  }
  function qe() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return dt === null ? ze.memoizedState = dt = n : dt = dt.next = n, dt;
  }
  function yr() {
    if ($e === null) {
      var n = ze.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = $e.next;
    var r = dt === null ? ze.memoizedState : dt.next;
    if (r !== null)
      dt = r, $e = n;
    else {
      if (n === null)
        throw Error(A(310));
      $e = n, n = { memoizedState: $e.memoizedState, baseState: $e.baseState, baseQueue: $e.baseQueue, queue: $e.queue, next: null }, dt === null ? ze.memoizedState = dt = n : dt = dt.next = n;
    }
    return dt;
  }
  function Vr(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ci(n) {
    var r = yr(), l = r.queue;
    if (l === null)
      throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = $e, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var S = m = null, w = null, z = d;
      do {
        var $ = z.lane;
        if ((Me & $) === $)
          w !== null && (w = w.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var Ee = {
            lane: $,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          w === null ? (S = w = Ee, m = o) : w = w.next = Ee, ze.lanes |= $, So |= $;
        }
        z = z.next;
      } while (z !== null && z !== d);
      w === null ? m = o : w.next = S, ri(o, r.memoizedState) || (sa = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = w, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, ze.lanes |= d, So |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ra(n) {
    var r = yr(), l = r.queue;
    if (l === null)
      throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ri(d, r.memoizedState) || (sa = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function to() {
  }
  function uu(n, r) {
    var l = ze, o = yr(), c = r(), d = !ri(o.memoizedState, c);
    if (d && (o.memoizedState = c, sa = !0), o = o.queue, su(Rc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || dt !== null && dt.memoizedState.tag & 1) {
      if (l.flags |= 2048, ou(9, Cc.bind(null, l, o, c, r), void 0, null), bn === null)
        throw Error(A(349));
      Me & 30 || no(l, r, c);
    }
    return c;
  }
  function no(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = ze.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ze.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Cc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Tc(r) && wa(n, 1, -1);
  }
  function Rc(n, r, l) {
    return l(function() {
      Tc(r) && wa(n, 1, -1);
    });
  }
  function Tc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ri(n, l);
    } catch {
      return !0;
    }
  }
  function Cs(n) {
    var r = qe();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vr, lastRenderedState: n }, r.queue = n, n = n.dispatch = vd.bind(null, ze, n), [r.memoizedState, n];
  }
  function ou(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = ze.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, ze.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function wc() {
    return yr().memoizedState;
  }
  function ro(n, r, l, o) {
    var c = qe();
    ze.flags |= n, c.memoizedState = ou(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function ao(n, r, l, o) {
    var c = yr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if ($e !== null) {
      var m = $e.memoizedState;
      if (d = m.destroy, o !== null && Es(o, m.deps)) {
        c.memoizedState = ou(r, l, d, o);
        return;
      }
    }
    ze.flags |= n, c.memoizedState = ou(1 | r, l, d, o);
  }
  function Rs(n, r) {
    return ro(8390656, 8, n, r);
  }
  function su(n, r) {
    return ao(2048, 8, n, r);
  }
  function xc(n, r) {
    return ao(4, 2, n, r);
  }
  function bc(n, r) {
    return ao(4, 4, n, r);
  }
  function _c(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function kc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, ao(4, 4, _c.bind(null, r, n), l);
  }
  function Ts() {
  }
  function ws(n, r) {
    var l = yr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Es(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function cu(n, r) {
    var l = yr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Es(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function dd(n, r) {
    var l = vt;
    vt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = jr.transition;
    jr.transition = {};
    try {
      n(!1), r();
    } finally {
      vt = l, jr.transition = o;
    }
  }
  function Dc() {
    return yr().memoizedState;
  }
  function pd(n, r, l) {
    var o = Ol(n);
    l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, hd(n) ? io(r, l) : (md(n, r, l), l = Hn(), n = wa(n, o, l), n !== null && lo(n, r, o));
  }
  function vd(n, r, l) {
    var o = Ol(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (hd(n))
      io(r, c);
    else {
      md(n, r, c);
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, S = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = S, ri(S, m))
            return;
        } catch {
        } finally {
        }
      l = Hn(), n = wa(n, o, l), n !== null && lo(n, r, o);
    }
  }
  function hd(n) {
    var r = n.alternate;
    return n === ze || r !== null && r === ze;
  }
  function io(n, r) {
    eo = ua = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function md(n, r, l) {
    bn !== null && n.mode & 1 && !(Tt & 2) ? (n = r.interleaved, n === null ? (l.next = l, $n === null ? $n = [r] : $n.push(r)) : (l.next = n.next, n.next = l), r.interleaved = l) : (n = r.pending, n === null ? l.next = l : (l.next = n.next, n.next = l), r.pending = l);
  }
  function lo(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Go(n, l);
    }
  }
  var fi = { readContext: Gn, useCallback: cr, useContext: cr, useEffect: cr, useImperativeHandle: cr, useInsertionEffect: cr, useLayoutEffect: cr, useMemo: cr, useReducer: cr, useRef: cr, useState: cr, useDebugValue: cr, useDeferredValue: cr, useTransition: cr, useMutableSource: cr, useSyncExternalStore: cr, useId: cr, unstable_isNewReconciler: !1 }, oa = { readContext: Gn, useCallback: function(n, r) {
    return qe().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Gn, useEffect: Rs, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, ro(
      4194308,
      4,
      _c.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return ro(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return ro(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = qe();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = qe();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = pd.bind(null, ze, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = qe();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Cs, useDebugValue: Ts, useDeferredValue: function(n) {
    var r = Cs(n), l = r[0], o = r[1];
    return Rs(function() {
      var c = jr.transition;
      jr.transition = {};
      try {
        o(n);
      } finally {
        jr.transition = c;
      }
    }, [n]), l;
  }, useTransition: function() {
    var n = Cs(!1), r = n[0];
    return n = dd.bind(null, n[1]), qe().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = ze, c = qe();
    if (rn) {
      if (l === void 0)
        throw Error(A(407));
      l = l();
    } else {
      if (l = r(), bn === null)
        throw Error(A(349));
      Me & 30 || no(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Rs(Rc.bind(null, o, d, n), [n]), o.flags |= 2048, ou(9, Cc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = qe(), r = bn.identifierPrefix;
    if (rn) {
      var l = Ai, o = Ui;
      l = (o & ~(1 << 32 - vr(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Ss++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Ym++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, Im = {
    readContext: Gn,
    useCallback: ws,
    useContext: Gn,
    useEffect: su,
    useImperativeHandle: kc,
    useInsertionEffect: xc,
    useLayoutEffect: bc,
    useMemo: cu,
    useReducer: ci,
    useRef: wc,
    useState: function() {
      return ci(Vr);
    },
    useDebugValue: Ts,
    useDeferredValue: function(n) {
      var r = ci(Vr), l = r[0], o = r[1];
      return su(function() {
        var c = jr.transition;
        jr.transition = {};
        try {
          o(n);
        } finally {
          jr.transition = c;
        }
      }, [n]), l;
    },
    useTransition: function() {
      var n = ci(Vr)[0], r = yr().memoizedState;
      return [n, r];
    },
    useMutableSource: to,
    useSyncExternalStore: uu,
    useId: Dc,
    unstable_isNewReconciler: !1
  }, Kt = {
    readContext: Gn,
    useCallback: ws,
    useContext: Gn,
    useEffect: su,
    useImperativeHandle: kc,
    useInsertionEffect: xc,
    useLayoutEffect: bc,
    useMemo: cu,
    useReducer: Ra,
    useRef: wc,
    useState: function() {
      return Ra(Vr);
    },
    useDebugValue: Ts,
    useDeferredValue: function(n) {
      var r = Ra(Vr), l = r[0], o = r[1];
      return su(function() {
        var c = jr.transition;
        jr.transition = {};
        try {
          o(n);
        } finally {
          jr.transition = c;
        }
      }, [n]), l;
    },
    useTransition: function() {
      var n = Ra(Vr)[0], r = yr().memoizedState;
      return [n, r];
    },
    useMutableSource: to,
    useSyncExternalStore: uu,
    useId: Dc,
    unstable_isNewReconciler: !1
  };
  function uo(n, r) {
    try {
      var l = "", o = r;
      do
        l += ht(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c };
  }
  function oo(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var xs = typeof WeakMap == "function" ? WeakMap : Map;
  function bs(n, r, l) {
    l = oi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Co || (Co = !0, Ro = o), oo(n, r);
    }, l;
  }
  function _v(n, r, l) {
    l = oi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        oo(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      oo(n, r), typeof o != "function" && (pi === null ? pi = /* @__PURE__ */ new Set([this]) : pi.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function kv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new xs();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = $v.bind(null, n, r, l), r.then(n, n));
  }
  function Dv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Ov(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = oi(-1, 1), r.tag = 2, Tl(l, r))), l.lanes |= 1), n);
  }
  var Oc, yd, Mc, gd;
  Oc = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, yd = function() {
  }, Mc = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, lu(Va.current);
      var d = null;
      switch (l) {
        case "input":
          c = Vn(n, c), o = Vn(n, o), d = [];
          break;
        case "select":
          c = T({}, c, { value: void 0 }), o = T({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Mr(n, c), o = Mr(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = vc);
      }
      Rn(l, o);
      var m;
      l = null;
      for (z in c)
        if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null)
          if (z === "style") {
            var S = c[z];
            for (m in S)
              S.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (nn.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var w = o[z];
        if (S = c != null ? c[z] : void 0, o.hasOwnProperty(z) && w !== S && (w != null || S != null))
          if (z === "style")
            if (S) {
              for (m in S)
                !S.hasOwnProperty(m) || w && w.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in w)
                w.hasOwnProperty(m) && S[m] !== w[m] && (l || (l = {}), l[m] = w[m]);
            } else
              l || (d || (d = []), d.push(
                z,
                l
              )), l = w;
          else
            z === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, S = S ? S.__html : void 0, w != null && S !== w && (d = d || []).push(z, w)) : z === "children" ? typeof w != "string" && typeof w != "number" || (d = d || []).push(z, "" + w) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (nn.hasOwnProperty(z) ? (w != null && z === "onScroll" && Wt("scroll", n), d || S === w || (d = [])) : (d = d || []).push(z, w));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, gd = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function _s(n, r) {
    if (!rn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Fn(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function Wm(n, r, l) {
    var o = r.pendingProps;
    switch (Ca(r), r.tag) {
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
        return Fn(r), null;
      case 1:
        return yn(r.type) && ii(), Fn(r), null;
      case 3:
        return o = r.stateNode, Zu(), Fe(Bn), Fe(mn), fd(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (ms(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, ja !== null && (Bc(ja), ja = null))), yd(n, r), Fn(r), null;
      case 5:
        cd(r);
        var c = lu(gs.current);
        if (l = r.type, n !== null && r.stateNode != null)
          Mc(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(A(166));
            return Fn(r), null;
          }
          if (n = lu(Va.current), ms(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[ia] = r, o[Zl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Wt("cancel", o), Wt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Wt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < _i.length; c++)
                  Wt(_i[c], o);
                break;
              case "source":
                Wt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Wt(
                  "error",
                  o
                ), Wt("load", o);
                break;
              case "details":
                Wt("toggle", o);
                break;
              case "input":
                zn(o, d), Wt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Wt("invalid", o);
                break;
              case "textarea":
                ur(o, d), Wt("invalid", o);
            }
            Rn(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var S = d[m];
                m === "children" ? typeof S == "string" ? o.textContent !== S && (os(o.textContent, S, n), c = ["children", S]) : typeof S == "number" && o.textContent !== "" + S && (os(o.textContent, S, n), c = ["children", "" + S]) : nn.hasOwnProperty(m) && S != null && m === "onScroll" && Wt("scroll", o);
              }
            switch (l) {
              case "input":
                ir(o), Dr(o, d, !0);
                break;
              case "textarea":
                ir(o), qn(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = vc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Lr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[ia] = r, n[Zl] = o, Oc(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = cn(l, o), l) {
                case "dialog":
                  Wt("cancel", n), Wt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Wt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < _i.length; c++)
                    Wt(_i[c], n);
                  c = o;
                  break;
                case "source":
                  Wt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Wt("error", n), Wt("load", n), c = o;
                  break;
                case "details":
                  Wt(
                    "toggle",
                    n
                  ), c = o;
                  break;
                case "input":
                  zn(n, o), c = Vn(n, o), Wt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = T({}, o, { value: void 0 }), Wt("invalid", n);
                  break;
                case "textarea":
                  ur(n, o), c = Mr(n, o), Wt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Rn(l, c), S = c;
              for (d in S)
                if (S.hasOwnProperty(d)) {
                  var w = S[d];
                  d === "style" ? kt(n, w) : d === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && Ga(n, w)) : d === "children" ? typeof w == "string" ? (l !== "textarea" || w !== "") && ea(n, w) : typeof w == "number" && ea(
                    n,
                    "" + w
                  ) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (nn.hasOwnProperty(d) ? w != null && d === "onScroll" && Wt("scroll", n) : w != null && We(n, d, w, m));
                }
              switch (l) {
                case "input":
                  ir(n), Dr(n, o, !1);
                  break;
                case "textarea":
                  ir(n), qn(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + Ze(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? lr(n, !!o.multiple, d, !1) : o.defaultValue != null && lr(n, !!o.multiple, o.defaultValue, !0);
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = vc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Fn(r), null;
      case 6:
        if (n && r.stateNode != null)
          gd(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(A(166));
          if (l = lu(gs.current), lu(Va.current), ms(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[ia] = r, (d = o.nodeValue !== l) && (n = dn, n !== null))
              switch (m = (n.mode & 1) !== 0, n.tag) {
                case 3:
                  os(
                    o.nodeValue,
                    l,
                    m
                  );
                  break;
                case 5:
                  n.memoizedProps[void 0] !== !0 && os(o.nodeValue, l, m);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[ia] = r, r.stateNode = o;
        }
        return Fn(r), null;
      case 13:
        if (Fe(an), o = r.memoizedState, rn && Hr !== null && r.mode & 1 && !(r.flags & 128)) {
          for (o = Hr; o; )
            o = Di(o.nextSibling);
          return au(), r.flags |= 98560, r;
        }
        if (o !== null && o.dehydrated !== null) {
          if (o = ms(r), n === null) {
            if (!o)
              throw Error(A(318));
            if (o = r.memoizedState, o = o !== null ? o.dehydrated : null, !o)
              throw Error(A(317));
            o[ia] = r;
          } else
            au(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
          return Fn(r), null;
        }
        return ja !== null && (Bc(ja), ja = null), r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, l = !1, n === null ? ms(r) : l = n.memoizedState !== null, o && !l && (r.child.flags |= 8192, r.mode & 1 && (n === null || an.current & 1 ? gn === 0 && (gn = 3) : bo())), r.updateQueue !== null && (r.flags |= 4), Fn(r), null);
      case 4:
        return Zu(), yd(n, r), n === null && ai(r.stateNode.containerInfo), Fn(r), null;
      case 10:
        return ds(r.type._context), Fn(r), null;
      case 17:
        return yn(r.type) && ii(), Fn(r), null;
      case 19:
        if (Fe(an), d = r.memoizedState, d === null)
          return Fn(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            _s(d, !1);
          else {
            if (gn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = gc(n), m !== null) {
                  for (r.flags |= 128, _s(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Ce(an, an.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && Ct() > Eo && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = gc(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), _s(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !rn)
                return Fn(r), null;
            } else
              2 * Ct() - d.renderingStartTime > Eo && l !== 1073741824 && (r.flags |= 128, o = !0, _s(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ct(), r.sibling = null, l = an.current, Ce(an, o ? l & 1 | 2 : l & 1), r) : (Fn(r), null);
      case 22:
      case 23:
        return Ns(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? Br & 1073741824 && (Fn(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Fn(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  var Mv = lt.ReactCurrentOwner, sa = !1;
  function gr(n, r, l, o) {
    r.child = n === null ? xv(r, null, l, o) : Ku(r, n.child, l, o);
  }
  function wl(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return ui(r, c), o = Y(n, r, l, o, d, c), l = Nn(), n !== null && !sa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, xn(n, r, c)) : (rn && l && ae(r), r.flags |= 1, gr(n, r, o, c), r.child);
  }
  function so(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Md(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, xl(n, r, d, o, c)) : (n = Us(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : $u, l(m, o) && n.ref === r.ref)
        return xn(n, r, c);
    }
    return r.flags |= 1, n = Ml(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function xl(n, r, l, o, c) {
    if (n !== null && $u(n.memoizedProps, o) && n.ref === r.ref)
      if (sa = !1, (n.lanes & c) !== 0)
        n.flags & 131072 && (sa = !0);
      else
        return r.lanes = n.lanes, xn(n, r, c);
    return bl(n, r, l, o, c);
  }
  function Lc(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null }, Ce(yo, Br), Br |= l;
      else if (l & 1073741824)
        r.memoizedState = { baseLanes: 0, cachePool: null }, o = d !== null ? d.baseLanes : l, Ce(yo, Br), Br |= o;
      else
        return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null }, r.updateQueue = null, Ce(yo, Br), Br |= n, null;
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Ce(yo, Br), Br |= o;
    return gr(n, r, c, l), r.child;
  }
  function Pr(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function bl(n, r, l, o, c) {
    var d = yn(l) ? Li : mn.current;
    return d = ut(r, d), ui(r, c), l = Y(n, r, l, o, d, c), o = Nn(), n !== null && !sa ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, xn(n, r, c)) : (rn && o && ae(r), r.flags |= 1, gr(n, r, l, c), r.child);
  }
  function Ke(n, r, l, o, c) {
    if (yn(l)) {
      var d = !0;
      mr(r);
    } else
      d = !1;
    if (ui(r, c), r.stateNode === null)
      n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2), gv(r, l, o), ud(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, S = r.memoizedProps;
      m.props = S;
      var w = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = Gn(z) : (z = yn(l) ? Li : mn.current, z = ut(r, z));
      var $ = l.getDerivedStateFromProps, Ee = typeof $ == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      Ee || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (S !== o || w !== z) && Sv(r, m, o, z), Rl = !1;
      var Q = r.memoizedState;
      m.state = Q, vs(r, o, m, c), w = r.memoizedState, S !== o || Q !== w || Bn.current || Rl ? (typeof $ == "function" && (id(r, l, $, o), w = r.memoizedState), (S = Rl || ld(r, l, S, o, Q, w, z)) ? (Ee || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = w), m.props = o, m.state = w, m.context = z, o = S) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, td(n, r), S = r.memoizedProps, z = r.type === r.elementType ? S : ga(r.type, S), m.props = z, Ee = r.pendingProps, Q = m.context, w = l.contextType, typeof w == "object" && w !== null ? w = Gn(w) : (w = yn(l) ? Li : mn.current, w = ut(r, w));
      var oe = l.getDerivedStateFromProps;
      ($ = typeof oe == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (S !== Ee || Q !== w) && Sv(r, m, o, w), Rl = !1, Q = r.memoizedState, m.state = Q, vs(r, o, m, c);
      var X = r.memoizedState;
      S !== Ee || Q !== X || Bn.current || Rl ? (typeof oe == "function" && (id(r, l, oe, o), X = r.memoizedState), (z = Rl || ld(r, l, z, o, Q, X, w) || !1) ? ($ || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, X, w), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, X, w)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || S === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = X), m.props = o, m.state = X, m.context = w, o = z) : (typeof m.componentDidUpdate != "function" || S === n.memoizedProps && Q === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || S === n.memoizedProps && Q === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return co(n, r, l, o, d, c);
  }
  function co(n, r, l, o, c, d) {
    Pr(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && mv(r, l, !1), xn(n, r, d);
    o = r.stateNode, Mv.current = r;
    var S = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Ku(r, n.child, null, d), r.child = Ku(r, null, S, d)) : gr(n, r, S, d), r.memoizedState = o.state, c && mv(r, l, !0), r.child;
  }
  function Sd(n) {
    var r = n.stateNode;
    r.pendingContext ? El(n, r.pendingContext, r.pendingContext !== r.context) : r.context && El(n, r.context, !1), sd(n, r.containerInfo);
  }
  function qm(n, r, l, o, c) {
    return au(), iu(c), r.flags |= 256, gr(n, r, l, o), r.child;
  }
  var Nc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function fo(n) {
    return { baseLanes: n, cachePool: null };
  }
  function po(n, r, l) {
    var o = r.pendingProps, c = an.current, d = !1, m = (r.flags & 128) !== 0, S;
    if ((S = m) || (S = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), S ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Ce(an, c & 1), n === null)
      return od(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (c = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, c = { mode: "hidden", children: c }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = c) : d = Ic(c, o, 0, null), n = yu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = fo(l), r.memoizedState = Nc, n) : Ed(r, c));
    if (c = n.memoizedState, c !== null) {
      if (S = c.dehydrated, S !== null) {
        if (m)
          return r.flags & 256 ? (r.flags &= -257, vo(n, r, l, Error(A(422)))) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Ic({ mode: "visible", children: o.children }, c, 0, null), d = yu(d, c, l, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Ku(
            r,
            n.child,
            null,
            l
          ), r.child.memoizedState = fo(l), r.memoizedState = Nc, d);
        if (!(r.mode & 1))
          r = vo(n, r, l, null);
        else if (S.data === "$!")
          r = vo(n, r, l, Error(A(419)));
        else if (o = (l & n.childLanes) !== 0, sa || o) {
          if (o = bn, o !== null) {
            switch (l & -l) {
              case 4:
                d = 2;
                break;
              case 16:
                d = 8;
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
                d = 32;
                break;
              case 536870912:
                d = 268435456;
                break;
              default:
                d = 0;
            }
            o = d & (o.suspendedLanes | l) ? 0 : d, o !== 0 && o !== c.retryLane && (c.retryLane = o, wa(n, o, -1));
          }
          bo(), r = vo(n, r, l, Error(A(421)));
        } else
          S.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Km.bind(null, n), S._reactRetry = r, r = null) : (l = c.treeContext, Hr = Di(S.nextSibling), dn = r, rn = !0, ja = null, l !== null && (Yn[Sa++] = Ui, Yn[Sa++] = Ai, Yn[Sa++] = zi, Ui = l.id, Ai = l.overflow, zi = r), r = Ed(r, r.pendingProps.children), r.flags |= 4096);
        return r;
      }
      return d ? (o = Lv(n, r, o.children, o.fallback, l), d = r.child, c = n.child.memoizedState, d.memoizedState = c === null ? fo(l) : { baseLanes: c.baseLanes | l, cachePool: null }, d.childLanes = n.childLanes & ~l, r.memoizedState = Nc, o) : (l = Cd(n, r, o.children, l), r.memoizedState = null, l);
    }
    return d ? (o = Lv(n, r, o.children, o.fallback, l), d = r.child, c = n.child.memoizedState, d.memoizedState = c === null ? fo(l) : { baseLanes: c.baseLanes | l, cachePool: null }, d.childLanes = n.childLanes & ~l, r.memoizedState = Nc, o) : (l = Cd(n, r, o.children, l), r.memoizedState = null, l);
  }
  function Ed(n, r) {
    return r = Ic({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Cd(n, r, l, o) {
    var c = n.child;
    return n = c.sibling, l = Ml(c, { mode: "visible", children: l }), !(r.mode & 1) && (l.lanes = o), l.return = r, l.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = l;
  }
  function Lv(n, r, l, o, c) {
    var d = r.mode;
    n = n.child;
    var m = n.sibling, S = { mode: "hidden", children: l };
    return !(d & 1) && r.child !== n ? (l = r.child, l.childLanes = 0, l.pendingProps = S, r.deletions = null) : (l = Ml(n, S), l.subtreeFlags = n.subtreeFlags & 14680064), m !== null ? o = Ml(m, o) : (o = yu(o, d, c, null), o.flags |= 2), o.return = r, l.return = r, l.sibling = o, r.child = l, o;
  }
  function vo(n, r, l, o) {
    return o !== null && iu(o), Ku(r, n.child, null, l), n = Ed(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Nv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), ps(n.return, r, l);
  }
  function zc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Rd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (gr(n, r, o.children, l), o = an.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Nv(n, l, r);
            else if (n.tag === 19)
              Nv(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (Ce(an, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && gc(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), zc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && gc(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          zc(r, !0, l, null, d);
          break;
        case "together":
          zc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function xn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), So |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = Ml(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Ml(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function Fi(n, r, l) {
    switch (r.tag) {
      case 3:
        Sd(r), au();
        break;
      case 5:
        bv(r);
        break;
      case 1:
        yn(r.type) && mr(r);
        break;
      case 4:
        sd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Ce(qu, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Ce(an, an.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? po(n, r, l) : (Ce(an, an.current & 1), n = xn(n, r, l), n !== null ? n.sibling : null);
        Ce(an, an.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Rd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Ce(an, an.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Lc(n, r, l);
    }
    return xn(n, r, l);
  }
  function Hi(n, r) {
    switch (Ca(r), r.tag) {
      case 1:
        return yn(r.type) && ii(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Zu(), Fe(Bn), Fe(mn), fd(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return cd(r), null;
      case 13:
        if (Fe(an), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(A(340));
          au();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Fe(an), null;
      case 4:
        return Zu(), null;
      case 10:
        return ds(r.type._context), null;
      case 22:
      case 23:
        return Ns(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fu = !1, Pa = !1, Ba = typeof WeakSet == "function" ? WeakSet : Set, G = null;
  function Uc(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Yr(n, r, o);
        }
      else
        l.current = null;
  }
  function Td(n, r, l) {
    try {
      l();
    } catch (o) {
      Yr(n, r, o);
    }
  }
  var zv = !1;
  function wd(n, r) {
    if (n = rv(), ns(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, S = -1, w = -1, z = 0, $ = 0, Ee = n, Q = null;
            t:
              for (; ; ) {
                for (var oe; Ee !== l || c !== 0 && Ee.nodeType !== 3 || (S = m + c), Ee !== d || o !== 0 && Ee.nodeType !== 3 || (w = m + o), Ee.nodeType === 3 && (m += Ee.nodeValue.length), (oe = Ee.firstChild) !== null; )
                  Q = Ee, Ee = oe;
                for (; ; ) {
                  if (Ee === n)
                    break t;
                  if (Q === l && ++z === c && (S = m), Q === d && ++$ === o && (w = m), (oe = Ee.nextSibling) !== null)
                    break;
                  Ee = Q, Q = Ee.parentNode;
                }
                Ee = oe;
              }
            l = S === -1 || w === -1 ? null : { start: S, end: w };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (Gf = { focusedElem: n, selectionRange: l }, G = r; G !== null; )
      if (r = G, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, G = n;
      else
        for (; G !== null; ) {
          r = G;
          try {
            var X = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (X !== null) {
                    var Ye = X.memoizedProps, Jt = X.memoizedState, k = r.stateNode, x = k.getSnapshotBeforeUpdate(r.elementType === r.type ? Ye : ga(r.type, Ye), Jt);
                    k.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var M = r.stateNode.containerInfo;
                  if (M.nodeType === 1)
                    M.textContent = "";
                  else if (M.nodeType === 9) {
                    var W = M.body;
                    W != null && (W.textContent = "");
                  }
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(A(163));
              }
          } catch (pe) {
            Yr(r, r.return, pe);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, G = n;
            break;
          }
          G = r.return;
        }
    return X = zv, zv = !1, X;
  }
  function ho(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Td(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function du(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ac(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Uv(n, r, l) {
    if (Nr && typeof Nr.onCommitFiberUnmount == "function")
      try {
        Nr.onCommitFiberUnmount(al, r);
      } catch {
      }
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (n = r.updateQueue, n !== null && (n = n.lastEffect, n !== null)) {
          var o = n = n.next;
          do {
            var c = o, d = c.destroy;
            c = c.tag, d !== void 0 && (c & 2 || c & 4) && Td(r, l, d), o = o.next;
          } while (o !== n);
        }
        break;
      case 1:
        if (Uc(r, l), n = r.stateNode, typeof n.componentWillUnmount == "function")
          try {
            n.props = r.memoizedProps, n.state = r.memoizedState, n.componentWillUnmount();
          } catch (m) {
            Yr(
              r,
              l,
              m
            );
          }
        break;
      case 5:
        Uc(r, l);
        break;
      case 4:
        Hv(n, r, l);
    }
  }
  function Av(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Av(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[ia], delete r[Zl], delete r[cs], delete r[Bm], delete r[$m])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Fc(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Fv(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Fc(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function xd(n) {
    e: {
      for (var r = n.return; r !== null; ) {
        if (Fc(r))
          break e;
        r = r.return;
      }
      throw Error(A(160));
    }
    var l = r;
    switch (l.tag) {
      case 5:
        r = l.stateNode, l.flags & 32 && (ea(r, ""), l.flags &= -33), l = Fv(n), Hc(n, l, r);
        break;
      case 3:
      case 4:
        r = l.stateNode.containerInfo, l = Fv(n), bd(n, l, r);
        break;
      default:
        throw Error(A(161));
    }
  }
  function bd(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = vc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (bd(n, r, l), n = n.sibling; n !== null; )
        bd(n, r, l), n = n.sibling;
  }
  function Hc(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (Hc(n, r, l), n = n.sibling; n !== null; )
        Hc(n, r, l), n = n.sibling;
  }
  function Hv(n, r, l) {
    for (var o = r, c = !1, d, m; ; ) {
      if (!c) {
        c = o.return;
        e:
          for (; ; ) {
            if (c === null)
              throw Error(A(160));
            switch (d = c.stateNode, c.tag) {
              case 5:
                m = !1;
                break e;
              case 3:
                d = d.containerInfo, m = !0;
                break e;
              case 4:
                d = d.containerInfo, m = !0;
                break e;
            }
            c = c.return;
          }
        c = !0;
      }
      if (o.tag === 5 || o.tag === 6) {
        e:
          for (var S = n, w = o, z = l, $ = w; ; )
            if (Uv(S, $, z), $.child !== null && $.tag !== 4)
              $.child.return = $, $ = $.child;
            else {
              if ($ === w)
                break e;
              for (; $.sibling === null; ) {
                if ($.return === null || $.return === w)
                  break e;
                $ = $.return;
              }
              $.sibling.return = $.return, $ = $.sibling;
            }
        m ? (S = d, w = o.stateNode, S.nodeType === 8 ? S.parentNode.removeChild(w) : S.removeChild(w)) : d.removeChild(o.stateNode);
      } else if (o.tag === 18)
        m ? (S = d, w = o.stateNode, S.nodeType === 8 ? ss(S.parentNode, w) : S.nodeType === 1 && ss(S, w), ma(S)) : ss(d, o.stateNode);
      else if (o.tag === 4) {
        if (o.child !== null) {
          d = o.stateNode.containerInfo, m = !0, o.child.return = o, o = o.child;
          continue;
        }
      } else if (Uv(n, o, l), o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return, o.tag === 4 && (c = !1);
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }
  function jc(n, r) {
    switch (r.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ho(3, r, r.return), du(3, r), ho(5, r, r.return);
        return;
      case 1:
        return;
      case 5:
        var l = r.stateNode;
        if (l != null) {
          var o = r.memoizedProps, c = n !== null ? n.memoizedProps : o;
          n = r.type;
          var d = r.updateQueue;
          if (r.updateQueue = null, d !== null) {
            for (n === "input" && o.type === "radio" && o.name != null && Un(l, o), cn(n, c), r = cn(n, o), c = 0; c < d.length; c += 2) {
              var m = d[c], S = d[c + 1];
              m === "style" ? kt(l, S) : m === "dangerouslySetInnerHTML" ? Ga(l, S) : m === "children" ? ea(l, S) : We(l, m, S, r);
            }
            switch (n) {
              case "input":
                Cn(
                  l,
                  o
                );
                break;
              case "textarea":
                Zr(l, o);
                break;
              case "select":
                n = l._wrapperState.wasMultiple, l._wrapperState.wasMultiple = !!o.multiple, d = o.value, d != null ? lr(l, !!o.multiple, d, !1) : n !== !!o.multiple && (o.defaultValue != null ? lr(l, !!o.multiple, o.defaultValue, !0) : lr(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Zl] = o;
          }
        }
        return;
      case 6:
        if (r.stateNode === null)
          throw Error(A(162));
        r.stateNode.nodeValue = r.memoizedProps;
        return;
      case 3:
        n !== null && n.memoizedState.isDehydrated && ma(r.stateNode.containerInfo);
        return;
      case 12:
        return;
      case 13:
        jv(r);
        return;
      case 19:
        jv(r);
        return;
      case 17:
        return;
    }
    throw Error(A(163));
  }
  function jv(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Ba()), r.forEach(function(o) {
        var c = Jm.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function _d(n, r) {
    for (G = r; G !== null; ) {
      r = G;
      var l = r.deletions;
      if (l !== null)
        for (var o = 0; o < l.length; o++) {
          var c = l[o];
          try {
            Hv(n, c, r);
            var d = c.alternate;
            d !== null && (d.return = null), c.return = null;
          } catch (Le) {
            Yr(c, r, Le);
          }
        }
      if (l = r.child, r.subtreeFlags & 12854 && l !== null)
        l.return = r, G = l;
      else
        for (; G !== null; ) {
          r = G;
          try {
            var m = r.flags;
            if (m & 32 && ea(r.stateNode, ""), m & 512) {
              var S = r.alternate;
              if (S !== null) {
                var w = S.ref;
                w !== null && (typeof w == "function" ? w(null) : w.current = null);
              }
            }
            if (m & 8192)
              switch (r.tag) {
                case 13:
                  if (r.memoizedState !== null) {
                    var z = r.alternate;
                    (z === null || z.memoizedState === null) && (Dd = Ct());
                  }
                  break;
                case 22:
                  var $ = r.memoizedState !== null, Ee = r.alternate, Q = Ee !== null && Ee.memoizedState !== null;
                  l = r;
                  e: {
                    o = l, c = $;
                    for (var oe = null, X = o; ; ) {
                      if (X.tag === 5) {
                        if (oe === null) {
                          oe = X;
                          var Ye = X.stateNode;
                          if (c) {
                            var Jt = Ye.style;
                            typeof Jt.setProperty == "function" ? Jt.setProperty("display", "none", "important") : Jt.display = "none";
                          } else {
                            var k = X.stateNode, x = X.memoizedProps.style, M = x != null && x.hasOwnProperty("display") ? x.display : null;
                            k.style.display = et("display", M);
                          }
                        }
                      } else if (X.tag === 6)
                        oe === null && (X.stateNode.nodeValue = c ? "" : X.memoizedProps);
                      else if ((X.tag !== 22 && X.tag !== 23 || X.memoizedState === null || X === o) && X.child !== null) {
                        X.child.return = X, X = X.child;
                        continue;
                      }
                      if (X === o)
                        break;
                      for (; X.sibling === null; ) {
                        if (X.return === null || X.return === o)
                          break e;
                        oe === X && (oe = null), X = X.return;
                      }
                      oe === X && (oe = null), X.sibling.return = X.return, X = X.sibling;
                    }
                  }
                  if ($ && !Q && l.mode & 1) {
                    G = l;
                    for (var W = l.child; W !== null; ) {
                      for (l = G = W; G !== null; ) {
                        o = G;
                        var pe = o.child;
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 14:
                          case 15:
                            ho(4, o, o.return);
                            break;
                          case 1:
                            Uc(o, o.return);
                            var be = o.stateNode;
                            if (typeof be.componentWillUnmount == "function") {
                              var Oe = o.return;
                              try {
                                be.props = o.memoizedProps, be.state = o.memoizedState, be.componentWillUnmount();
                              } catch (Le) {
                                Yr(o, Oe, Le);
                              }
                            }
                            break;
                          case 5:
                            Uc(o, o.return);
                            break;
                          case 22:
                            if (o.memoizedState !== null) {
                              Pi(l);
                              continue;
                            }
                        }
                        pe !== null ? (pe.return = o, G = pe) : Pi(l);
                      }
                      W = W.sibling;
                    }
                  }
              }
            switch (m & 4102) {
              case 2:
                xd(r), r.flags &= -3;
                break;
              case 6:
                xd(r), r.flags &= -3, jc(r.alternate, r);
                break;
              case 4096:
                r.flags &= -4097;
                break;
              case 4100:
                r.flags &= -4097, jc(r.alternate, r);
                break;
              case 4:
                jc(r.alternate, r);
            }
          } catch (Le) {
            Yr(r, r.return, Le);
          }
          if (l = r.sibling, l !== null) {
            l.return = r.return, G = l;
            break;
          }
          G = r.return;
        }
    }
  }
  function Vc(n, r, l) {
    G = n, ji(n);
  }
  function ji(n, r, l) {
    for (var o = (n.mode & 1) !== 0; G !== null; ) {
      var c = G, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || fu;
        if (!m) {
          var S = c.alternate, w = S !== null && S.memoizedState !== null || Pa;
          S = fu;
          var z = Pa;
          if (fu = m, (Pa = w) && !z)
            for (G = c; G !== null; )
              m = G, w = m.child, m.tag === 22 && m.memoizedState !== null ? mo(c) : w !== null ? (w.return = m, G = w) : mo(c);
          for (; d !== null; )
            G = d, ji(d), d = d.sibling;
          G = c, fu = S, Pa = z;
        }
        Vi(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, G = d) : Vi(n);
    }
  }
  function Vi(n) {
    for (; G !== null; ) {
      var r = G;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Pa || du(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !Pa)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : ga(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && rd(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  rd(r, m, l);
                }
                break;
              case 5:
                var S = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = S;
                  var w = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && l.focus();
                      break;
                    case "img":
                      w.src && (l.src = w.src);
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
                if (r.memoizedState === null) {
                  var z = r.alternate;
                  if (z !== null) {
                    var $ = z.memoizedState;
                    if ($ !== null) {
                      var Ee = $.dehydrated;
                      Ee !== null && ma(Ee);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
                break;
              default:
                throw Error(A(163));
            }
          Pa || r.flags & 512 && Ac(r);
        } catch (Q) {
          Yr(r, r.return, Q);
        }
      }
      if (r === n) {
        G = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, G = l;
        break;
      }
      G = r.return;
    }
  }
  function Pi(n) {
    for (; G !== null; ) {
      var r = G;
      if (r === n) {
        G = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, G = l;
        break;
      }
      G = r.return;
    }
  }
  function mo(n) {
    for (; G !== null; ) {
      var r = G;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              du(4, r);
            } catch (w) {
              Yr(r, l, w);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (w) {
                Yr(r, c, w);
              }
            }
            var d = r.return;
            try {
              Ac(r);
            } catch (w) {
              Yr(r, d, w);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Ac(r);
            } catch (w) {
              Yr(r, m, w);
            }
        }
      } catch (w) {
        Yr(r, r.return, w);
      }
      if (r === n) {
        G = null;
        break;
      }
      var S = r.sibling;
      if (S !== null) {
        S.return = r.return, G = S;
        break;
      }
      G = r.return;
    }
  }
  var ks = Math.ceil, $a = lt.ReactCurrentDispatcher, kd = lt.ReactCurrentOwner, Ta = lt.ReactCurrentBatchConfig, Tt = 0, bn = null, ln = null, Kn = 0, Br = 0, yo = la(0), gn = 0, go = null, So = 0, _l = 0, pu = 0, di = null, $r = null, Dd = 0, Eo = 1 / 0, Co = !1, Ro = null, pi = null, Ds = !1, kl = null, Pc = 0, Os = 0, Od = null, Dl = -1, To = 0;
  function Hn() {
    return Tt & 6 ? Ct() : Dl !== -1 ? Dl : Dl = Ct();
  }
  function Ol(n) {
    return n.mode & 1 ? Tt & 2 && Kn !== 0 ? Kn & -Kn : ed.transition !== null ? (To === 0 && (n = Nu, Nu <<= 1, !(Nu & 4194240) && (Nu = 64), To = n), To) : (n = vt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Jo(n.type)), n) : 1;
  }
  function wa(n, r, l) {
    if (50 < Os)
      throw Os = 0, Od = null, Error(A(185));
    var o = Ms(n, r);
    return o === null ? null : (sl(o, r, l), (!(Tt & 2) || o !== bn) && (o === bn && (!(Tt & 2) && (_l |= r), gn === 4 && fa(o, Kn)), Sr(o, l), r === 1 && Tt === 0 && !(n.mode & 1) && (Eo = Ct() + 500, nu && wn())), o);
  }
  function Ms(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  function Sr(n, r) {
    var l = n.callbackNode;
    ul(n, r);
    var o = hr(n, n === bn ? Kn : 0);
    if (o === 0)
      l !== null && Qn(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Qn(l), r === 1)
        n.tag === 0 ? fs($c.bind(null, n)) : yv($c.bind(null, n)), vv(function() {
          Tt === 0 && wn();
        }), l = null;
      else {
        switch (Xo(o)) {
          case 1:
            l = Na;
            break;
          case 4:
            l = it;
            break;
          case 16:
            l = ei;
            break;
          case 536870912:
            l = Lu;
            break;
          default:
            l = ei;
        }
        l = Wv(l, Ls.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function Ls(n, r) {
    if (Dl = -1, To = 0, Tt & 6)
      throw Error(A(327));
    var l = n.callbackNode;
    if (_o() && n.callbackNode !== l)
      return null;
    var o = hr(n, n === bn ? Kn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = zs(n, o);
    else {
      r = o;
      var c = Tt;
      Tt |= 2;
      var d = Vv();
      (bn !== n || Kn !== r) && (Eo = Ct() + 500, Bi(n, r));
      do
        try {
          Gm();
          break;
        } catch (S) {
          xo(n, S);
        }
      while (!0);
      Qu(), $a.current = d, Tt = c, ln !== null ? r = 0 : (bn = null, Kn = 0, r = gn);
    }
    if (r !== 0) {
      if (r === 2 && (c = ol(n), c !== 0 && (o = c, r = wo(n, c))), r === 1)
        throw l = go, Bi(n, 0), fa(n, o), Sr(n, Ct()), l;
      if (r === 6)
        fa(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !ca(c) && (r = zs(n, o), r === 2 && (d = ol(n), d !== 0 && (o = d, r = wo(n, d))), r === 1))
          throw l = go, Bi(n, 0), fa(n, o), Sr(n, Ct()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            mu(n, $r);
            break;
          case 3:
            if (fa(n, o), (o & 130023424) === o && (r = Dd + 500 - Ct(), 10 < r)) {
              if (hr(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Hn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Kl(mu.bind(null, n, $r), r);
              break;
            }
            mu(n, $r);
            break;
          case 4:
            if (fa(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - vr(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ct() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * ks(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Kl(mu.bind(null, n, $r), o);
              break;
            }
            mu(n, $r);
            break;
          case 5:
            mu(n, $r);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return Sr(n, Ct()), n.callbackNode === l ? Ls.bind(null, n) : null;
  }
  function wo(n, r) {
    var l = di;
    return n.current.memoizedState.isDehydrated && (Bi(n, r).flags |= 256), n = zs(n, r), n !== 2 && (r = $r, $r = l, r !== null && Bc(r)), n;
  }
  function Bc(n) {
    $r === null ? $r = n : $r.push.apply($r, n);
  }
  function ca(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!ri(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function fa(n, r) {
    for (r &= ~pu, r &= ~_l, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - vr(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function $c(n) {
    if (Tt & 6)
      throw Error(A(327));
    _o();
    var r = hr(n, 0);
    if (!(r & 1))
      return Sr(n, Ct()), null;
    var l = zs(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = ol(n);
      o !== 0 && (r = o, l = wo(n, o));
    }
    if (l === 1)
      throw l = go, Bi(n, 0), fa(n, r), Sr(n, Ct()), l;
    if (l === 6)
      throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, mu(n, $r), Sr(n, Ct()), null;
  }
  function vu(n, r) {
    var l = Tt;
    Tt |= 1;
    try {
      return n(r);
    } finally {
      Tt = l, Tt === 0 && (Eo = Ct() + 500, nu && wn());
    }
  }
  function hu(n) {
    kl !== null && kl.tag === 0 && !(Tt & 6) && _o();
    var r = Tt;
    Tt |= 1;
    var l = Ta.transition, o = vt;
    try {
      if (Ta.transition = null, vt = 1, n)
        return n();
    } finally {
      vt = o, Ta.transition = l, Tt = r, !(Tt & 6) && wn();
    }
  }
  function Ns() {
    Br = yo.current, Fe(yo);
  }
  function Bi(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Kf(l)), ln !== null)
      for (l = ln.return; l !== null; ) {
        var o = l;
        switch (Ca(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && ii();
            break;
          case 3:
            Zu(), Fe(Bn), Fe(mn), fd();
            break;
          case 5:
            cd(o);
            break;
          case 4:
            Zu();
            break;
          case 13:
            Fe(an);
            break;
          case 19:
            Fe(an);
            break;
          case 10:
            ds(o.type._context);
            break;
          case 22:
          case 23:
            Ns();
        }
        l = l.return;
      }
    if (bn = n, ln = n = Ml(n.current, null), Kn = Br = r, gn = 0, go = null, pu = _l = So = 0, $r = di = null, $n !== null) {
      for (r = 0; r < $n.length; r++)
        if (l = $n[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      $n = null;
    }
    return n;
  }
  function xo(n, r) {
    do {
      var l = ln;
      try {
        if (Qu(), Ec.current = fi, ua) {
          for (var o = ze.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          ua = !1;
        }
        if (Me = 0, dt = $e = ze = null, eo = !1, Ss = 0, kd.current = null, l === null || l.return === null) {
          gn = 1, go = r, ln = null;
          break;
        }
        e: {
          var d = n, m = l.return, S = l, w = r;
          if (r = Kn, S.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var z = w, $ = S, Ee = $.tag;
            if (!($.mode & 1) && (Ee === 0 || Ee === 11 || Ee === 15)) {
              var Q = $.alternate;
              Q ? ($.updateQueue = Q.updateQueue, $.memoizedState = Q.memoizedState, $.lanes = Q.lanes) : ($.updateQueue = null, $.memoizedState = null);
            }
            var oe = Dv(m);
            if (oe !== null) {
              oe.flags &= -257, Ov(oe, m, S, d, r), oe.mode & 1 && kv(d, z, r), r = oe, w = z;
              var X = r.updateQueue;
              if (X === null) {
                var Ye = /* @__PURE__ */ new Set();
                Ye.add(w), r.updateQueue = Ye;
              } else
                X.add(w);
              break e;
            } else {
              if (!(r & 1)) {
                kv(d, z, r), bo();
                break e;
              }
              w = Error(A(426));
            }
          } else if (rn && S.mode & 1) {
            var Jt = Dv(m);
            if (Jt !== null) {
              !(Jt.flags & 65536) && (Jt.flags |= 256), Ov(Jt, m, S, d, r), iu(w);
              break e;
            }
          }
          d = w, gn !== 4 && (gn = 2), di === null ? di = [d] : di.push(d), w = uo(w, S), S = m;
          do {
            switch (S.tag) {
              case 3:
                S.flags |= 65536, r &= -r, S.lanes |= r;
                var k = bs(S, w, r);
                nd(S, k);
                break e;
              case 1:
                d = w;
                var x = S.type, M = S.stateNode;
                if (!(S.flags & 128) && (typeof x.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && (pi === null || !pi.has(M)))) {
                  S.flags |= 65536, r &= -r, S.lanes |= r;
                  var W = _v(S, d, r);
                  nd(S, W);
                  break e;
                }
            }
            S = S.return;
          } while (S !== null);
        }
        Yc(l);
      } catch (pe) {
        r = pe, ln === l && l !== null && (ln = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Vv() {
    var n = $a.current;
    return $a.current = fi, n === null ? fi : n;
  }
  function bo() {
    (gn === 0 || gn === 3 || gn === 2) && (gn = 4), bn === null || !(So & 268435455) && !(_l & 268435455) || fa(bn, Kn);
  }
  function zs(n, r) {
    var l = Tt;
    Tt |= 2;
    var o = Vv();
    bn === n && Kn === r || Bi(n, r);
    do
      try {
        Qm();
        break;
      } catch (c) {
        xo(n, c);
      }
    while (!0);
    if (Qu(), Tt = l, $a.current = o, ln !== null)
      throw Error(A(261));
    return bn = null, Kn = 0, gn;
  }
  function Qm() {
    for (; ln !== null; )
      Pv(ln);
  }
  function Gm() {
    for (; ln !== null && !Za(); )
      Pv(ln);
  }
  function Pv(n) {
    var r = Iv(n.alternate, n, Br);
    n.memoizedProps = n.pendingProps, r === null ? Yc(n) : ln = r, kd.current = null;
  }
  function Yc(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = Hi(l, r), l !== null) {
          l.flags &= 32767, ln = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          gn = 6, ln = null;
          return;
        }
      } else if (l = Wm(l, r, Br), l !== null) {
        ln = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        ln = r;
        return;
      }
      ln = r = n;
    } while (r !== null);
    gn === 0 && (gn = 5);
  }
  function mu(n, r) {
    var l = vt, o = Ta.transition;
    try {
      Ta.transition = null, vt = 1, Xm(n, r, l);
    } finally {
      Ta.transition = o, vt = l;
    }
    return null;
  }
  function Xm(n, r, l) {
    do
      _o();
    while (kl !== null);
    if (Tt & 6)
      throw Error(A(327));
    var o = n.finishedWork, c = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = o.lanes | o.childLanes;
    if (Qo(n, d), n === bn && (ln = bn = null, Kn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Ds || (Ds = !0, Wv(ei, function() {
      return _o(), null;
    })), d = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || d) {
      d = Ta.transition, Ta.transition = null;
      var m = vt;
      vt = 1;
      var S = Tt;
      Tt |= 4, kd.current = null, wd(n, o), _d(n, o), Ql(Gf), Gf = null, n.current = o, Vc(o), Mu(), Tt = S, vt = m, Ta.transition = d;
    } else
      n.current = o;
    if (Ds && (Ds = !1, kl = n, Pc = c), d = n.pendingLanes, d === 0 && (pi = null), Io(o.stateNode), Sr(n, Ct()), r !== null)
      for (l = n.onRecoverableError, o = 0; o < r.length; o++)
        l(r[o]);
    if (Co)
      throw Co = !1, n = Ro, Ro = null, n;
    return Pc & 1 && n.tag !== 0 && _o(), d = n.pendingLanes, d & 1 ? n === Od ? Os++ : (Os = 0, Od = n) : Os = 0, wn(), null;
  }
  function _o() {
    if (kl !== null) {
      var n = Xo(Pc), r = Ta.transition, l = vt;
      try {
        if (Ta.transition = null, vt = 16 > n ? 16 : n, kl === null)
          var o = !1;
        else {
          if (n = kl, kl = null, Pc = 0, Tt & 6)
            throw Error(A(331));
          var c = Tt;
          for (Tt |= 4, G = n.current; G !== null; ) {
            var d = G, m = d.child;
            if (G.flags & 16) {
              var S = d.deletions;
              if (S !== null) {
                for (var w = 0; w < S.length; w++) {
                  var z = S[w];
                  for (G = z; G !== null; ) {
                    var $ = G;
                    switch ($.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ho(8, $, d);
                    }
                    var Ee = $.child;
                    if (Ee !== null)
                      Ee.return = $, G = Ee;
                    else
                      for (; G !== null; ) {
                        $ = G;
                        var Q = $.sibling, oe = $.return;
                        if (Av($), $ === z) {
                          G = null;
                          break;
                        }
                        if (Q !== null) {
                          Q.return = oe, G = Q;
                          break;
                        }
                        G = oe;
                      }
                  }
                }
                var X = d.alternate;
                if (X !== null) {
                  var Ye = X.child;
                  if (Ye !== null) {
                    X.child = null;
                    do {
                      var Jt = Ye.sibling;
                      Ye.sibling = null, Ye = Jt;
                    } while (Ye !== null);
                  }
                }
                G = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, G = m;
            else
              e:
                for (; G !== null; ) {
                  if (d = G, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ho(9, d, d.return);
                    }
                  var k = d.sibling;
                  if (k !== null) {
                    k.return = d.return, G = k;
                    break e;
                  }
                  G = d.return;
                }
          }
          var x = n.current;
          for (G = x; G !== null; ) {
            m = G;
            var M = m.child;
            if (m.subtreeFlags & 2064 && M !== null)
              M.return = m, G = M;
            else
              e:
                for (m = x; G !== null; ) {
                  if (S = G, S.flags & 2048)
                    try {
                      switch (S.tag) {
                        case 0:
                        case 11:
                        case 15:
                          du(9, S);
                      }
                    } catch (pe) {
                      Yr(S, S.return, pe);
                    }
                  if (S === m) {
                    G = null;
                    break e;
                  }
                  var W = S.sibling;
                  if (W !== null) {
                    W.return = S.return, G = W;
                    break e;
                  }
                  G = S.return;
                }
          }
          if (Tt = c, wn(), Nr && typeof Nr.onPostCommitFiberRoot == "function")
            try {
              Nr.onPostCommitFiberRoot(al, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        vt = l, Ta.transition = r;
      }
    }
    return !1;
  }
  function Bv(n, r, l) {
    r = uo(l, r), r = bs(n, r, 1), Tl(n, r), r = Hn(), n = Ms(n, 1), n !== null && (sl(n, 1, r), Sr(n, r));
  }
  function Yr(n, r, l) {
    if (n.tag === 3)
      Bv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Bv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (pi === null || !pi.has(o))) {
            n = uo(l, n), n = _v(r, n, 1), Tl(r, n), n = Hn(), r = Ms(r, 1), r !== null && (sl(r, 1, n), Sr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function $v(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Hn(), n.pingedLanes |= n.suspendedLanes & l, bn === n && (Kn & l) === l && (gn === 4 || gn === 3 && (Kn & 130023424) === Kn && 500 > Ct() - Dd ? Bi(n, 0) : pu |= l), Sr(n, r);
  }
  function Yv(n, r) {
    r === 0 && (n.mode & 1 ? (r = il, il <<= 1, !(il & 130023424) && (il = 4194304)) : r = 1);
    var l = Hn();
    n = Ms(n, r), n !== null && (sl(n, r, l), Sr(n, l));
  }
  function Km(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Yv(n, l);
  }
  function Jm(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    o !== null && o.delete(r), Yv(n, l);
  }
  var Iv;
  Iv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Bn.current)
        sa = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return sa = !1, Fi(n, r, l);
        sa = !!(n.flags & 131072);
      }
    else
      sa = !1, rn && r.flags & 1048576 && Xn(r, Xu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2), n = r.pendingProps;
        var c = ut(r, mn.current);
        ui(r, l), c = Y(null, r, o, n, c, l);
        var d = Nn();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, yn(o) ? (d = !0, mr(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Ni(r), c.updater = hs, r.stateNode = c, c._reactInternals = r, ud(r, o, n, l), r = co(null, r, o, !0, d, l)) : (r.tag = 0, rn && d && ae(r), gr(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = ey(o), n = ga(o, n), c) {
            case 0:
              r = bl(null, r, o, n, l);
              break e;
            case 1:
              r = Ke(
                null,
                r,
                o,
                n,
                l
              );
              break e;
            case 11:
              r = wl(null, r, o, n, l);
              break e;
            case 14:
              r = so(null, r, o, ga(o.type, n), l);
              break e;
          }
          throw Error(A(306, o, ""));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ga(o, c), bl(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ga(o, c), Ke(n, r, o, c, l);
      case 3:
        e: {
          if (Sd(r), n === null)
            throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, td(n, r), vs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = {
              element: o,
              isDehydrated: !1,
              cache: m.cache,
              transitions: m.transitions
            }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Error(A(423)), r = qm(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = Error(A(424)), r = qm(n, r, o, l, c);
              break e;
            } else
              for (Hr = Di(r.stateNode.containerInfo.firstChild), dn = r, rn = !0, ja = null, l = xv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (au(), o === c) {
              r = xn(n, r, l);
              break e;
            }
            gr(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return bv(r), n === null && od(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, Xf(o, c) ? m = null : d !== null && Xf(o, d) && (r.flags |= 32), Pr(n, r), gr(n, r, m, l), r.child;
      case 6:
        return n === null && od(r), null;
      case 13:
        return po(n, r, l);
      case 4:
        return sd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Ku(r, null, o, l) : gr(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ga(o, c), wl(n, r, o, c, l);
      case 7:
        return gr(n, r, r.pendingProps, l), r.child;
      case 8:
        return gr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return gr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Ce(qu, o._currentValue), o._currentValue = m, d !== null)
            if (ri(d.value, m)) {
              if (d.children === c.children && !Bn.current) {
                r = xn(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var S = d.dependencies;
                if (S !== null) {
                  m = d.child;
                  for (var w = S.firstContext; w !== null; ) {
                    if (w.context === o) {
                      if (d.tag === 1) {
                        w = oi(-1, l & -l), w.tag = 2;
                        var z = d.updateQueue;
                        if (z !== null) {
                          z = z.shared;
                          var $ = z.pending;
                          $ === null ? w.next = w : (w.next = $.next, $.next = w), z.pending = w;
                        }
                      }
                      d.lanes |= l, w = d.alternate, w !== null && (w.lanes |= l), ps(d.return, l, r), S.lanes |= l;
                      break;
                    }
                    w = w.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(A(341));
                  m.lanes |= l, S = m.alternate, S !== null && (S.lanes |= l), ps(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          gr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, ui(r, l), c = Gn(c), o = o(c), r.flags |= 1, gr(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = ga(o, r.pendingProps), c = ga(o.type, c), so(n, r, o, c, l);
      case 15:
        return xl(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : ga(o, c), n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2), r.tag = 1, yn(o) ? (n = !0, mr(r)) : n = !1, ui(r, l), gv(r, o, c), ud(r, o, c, l), co(null, r, o, !0, n, l);
      case 19:
        return Rd(n, r, l);
      case 22:
        return Lc(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function Wv(n, r) {
    return Gt(n, r);
  }
  function Zm(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ir(n, r, l, o) {
    return new Zm(n, r, l, o);
  }
  function Md(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function ey(n) {
    if (typeof n == "function")
      return Md(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === En)
        return 11;
      if (n === Ot)
        return 14;
    }
    return 2;
  }
  function Ml(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ir(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Us(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      Md(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case je:
            return yu(l.children, c, d, r);
          case en:
            m = 8, c |= 8;
            break;
          case Sn:
            return n = Ir(12, l, r, c | 2), n.elementType = Sn, n.lanes = d, n;
          case Ue:
            return n = Ir(13, l, r, c), n.elementType = Ue, n.lanes = d, n;
          case Qe:
            return n = Ir(19, l, r, c), n.elementType = Qe, n.lanes = d, n;
          case ye:
            return Ic(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ht:
                  m = 10;
                  break e;
                case xt:
                  m = 9;
                  break e;
                case En:
                  m = 11;
                  break e;
                case Ot:
                  m = 14;
                  break e;
                case wt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(A(130, n == null ? n : typeof n, ""));
        }
    return r = Ir(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function yu(n, r, l, o) {
    return n = Ir(7, n, o, r), n.lanes = l, n;
  }
  function Ic(n, r, l, o) {
    return n = Ir(22, n, o, r), n.elementType = ye, n.lanes = l, n.stateNode = {}, n;
  }
  function Ld(n, r, l) {
    return n = Ir(6, n, null, r), n.lanes = l, n;
  }
  function Nd(n, r, l) {
    return r = Ir(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function ty(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bl(0), this.expirationTimes = Bl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function zd(n, r, l, o, c, d, m, S, w) {
    return n = new ty(n, r, l, S, w), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ir(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null }, Ni(d), n;
  }
  function ny(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: at, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Ud(n) {
    if (!n)
      return Sl;
    n = n._reactInternals;
    e: {
      if (Ge(n) !== n || n.tag !== 1)
        throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (yn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (yn(l))
        return ya(n, l, r);
    }
    return r;
  }
  function Wc(n, r, l, o, c, d, m, S, w) {
    return n = zd(l, o, !0, n, c, d, m, S, w), n.context = Ud(null), l = n.current, o = Hn(), c = Ol(l), d = oi(o, c), d.callback = r ?? null, Tl(l, d), n.current.lanes = c, sl(n, c, o), Sr(n, o), n;
  }
  function Ll(n, r, l, o) {
    var c = r.current, d = Hn(), m = Ol(c);
    return l = Ud(l), r.context === null ? r.context = l : r.pendingContext = l, r = oi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), Tl(c, r), n = wa(c, m, d), n !== null && mc(n, c, m), m;
  }
  function qc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Ad(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Qc(n, r) {
    Ad(n, r), (n = n.alternate) && Ad(n, r);
  }
  function qv() {
    return null;
  }
  var Qv = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Gc(n) {
    this._internalRoot = n;
  }
  Xc.prototype.render = Gc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(A(409));
    Ll(n, r, null, null);
  }, Xc.prototype.unmount = Gc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      hu(function() {
        Ll(null, n, null, null);
      }), r[Mi] = null;
    }
  };
  function Xc(n) {
    this._internalRoot = n;
  }
  Xc.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Rt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Xt.length && r !== 0 && r < Xt[l].priority; l++)
        ;
      Xt.splice(l, 0, n), l === 0 && nc(n);
    }
  };
  function Fd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Kc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Hd() {
  }
  function Gv(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = qc(m);
          d.call(z);
        };
      }
      var m = Wc(r, o, n, 0, null, !1, !1, "", Hd);
      return n._reactRootContainer = m, n[Mi] = m.current, ai(n.nodeType === 8 ? n.parentNode : n), hu(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var S = o;
      o = function() {
        var z = qc(w);
        S.call(z);
      };
    }
    var w = zd(n, 0, !1, null, null, !1, !1, "", Hd);
    return n._reactRootContainer = w, n[Mi] = w.current, ai(n.nodeType === 8 ? n.parentNode : n), hu(function() {
      Ll(r, w, l, o);
    }), w;
  }
  function As(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var S = c;
        c = function() {
          var w = qc(m);
          S.call(w);
        };
      }
      Ll(r, m, n, c);
    } else
      m = Gv(l, r, n, c, o);
    return qc(m);
  }
  zu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = za(r.pendingLanes);
          l !== 0 && (Go(r, l | 1), Sr(r, Ct()), !(Tt & 6) && (Eo = Ct() + 500, wn()));
        }
        break;
      case 13:
        var o = Hn();
        hu(function() {
          return wa(n, 1, o);
        }), Qc(n, 1);
    }
  }, cl = function(n) {
    if (n.tag === 13) {
      var r = Hn();
      wa(n, 134217728, r), Qc(n, 134217728);
    }
  }, Ko = function(n) {
    if (n.tag === 13) {
      var r = Hn(), l = Ol(n);
      wa(n, l, r), Qc(n, l);
    }
  }, Rt = function() {
    return vt;
  }, Uu = function(n, r) {
    var l = vt;
    try {
      return vt = n, r();
    } finally {
      vt = l;
    }
  }, dr = function(n, r, l) {
    switch (r) {
      case "input":
        if (Cn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = hc(o);
              if (!c)
                throw Error(A(90));
              kr(o), Cn(o, c);
            }
          }
        }
        break;
      case "textarea":
        Zr(n, l);
        break;
      case "select":
        r = l.value, r != null && lr(n, !!l.multiple, r, !1);
    }
  }, Pl = vu, Ou = hu;
  var ko = { usingClientEntryPoint: !1, Events: [tu, Fa, hc, va, tl, vu] }, Fs = { findFiberByHostInstance: eu, bundleType: 0, version: "18.0.0-fc46dba67-20220329", rendererPackageName: "react-dom" }, ry = { bundleType: Fs.bundleType, version: Fs.version, rendererPackageName: Fs.rendererPackageName, rendererConfig: Fs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: lt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = On(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Fs.findFiberByHostInstance || qv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.0.0-fc46dba67-20220329" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Jc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jc.isDisabled && Jc.supportsFiber)
      try {
        al = Jc.inject(ry), Nr = Jc;
      } catch {
      }
  }
  return Oa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ko, Oa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fd(r))
      throw Error(A(200));
    return ny(n, r, null, l);
  }, Oa.createRoot = function(n, r) {
    if (!Fd(n))
      throw Error(A(299));
    var l = !1, o = "", c = Qv;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = zd(n, 1, !1, null, null, l, !1, o, c), n[Mi] = r.current, ai(n.nodeType === 8 ? n.parentNode : n), new Gc(r);
  }, Oa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = On(r), n = n === null ? null : n.stateNode, n;
  }, Oa.flushSync = function(n) {
    return hu(n);
  }, Oa.hydrate = function(n, r, l) {
    if (!Kc(r))
      throw Error(A(200));
    return As(null, n, r, !0, l);
  }, Oa.hydrateRoot = function(n, r, l) {
    if (!Fd(n))
      throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Qv;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Wc(r, null, n, 1, l ?? null, c, !1, d, m), n[Mi] = r.current, ai(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Xc(r);
  }, Oa.render = function(n, r, l) {
    if (!Kc(r))
      throw Error(A(200));
    return As(null, n, r, !1, l);
  }, Oa.unmountComponentAtNode = function(n) {
    if (!Kc(n))
      throw Error(A(40));
    return n._reactRootContainer ? (hu(function() {
      As(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Mi] = null;
      });
    }), !0) : !1;
  }, Oa.unstable_batchedUpdates = vu, Oa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!Kc(l))
      throw Error(A(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(A(38));
    return As(n, r, l, !1, o);
  }, Oa.version = "18.0.0-fc46dba67-20220329", Oa;
}
var Ma = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B1;
function H_() {
  return B1 || (B1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var Z = jp, ee = $1(), A = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, qt = !1;
    function nn(e) {
      qt = e;
    }
    function tt(e) {
      if (!qt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Yt("warn", e, a);
      }
    }
    function E(e) {
      if (!qt) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        Yt("error", e, a);
      }
    }
    function Yt(e, t, a) {
      {
        var i = A.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var me = 0, ve = 1, nt = 2, re = 3, he = 4, ie = 5, Ve = 6, Et = 7, ot = 8, un = 9, rt = 10, We = 11, lt = 12, Re = 13, at = 14, je = 15, en = 16, Sn = 17, Ht = 18, xt = 19, En = 21, Ue = 22, Qe = 23, Ot = 24, wt = 25, ye = !0, K = !1, Te = !1, T = !1, V = !1, le = !0, Pe = !1, Ae = !1, ht = !0, Je = !0, st = !0, Ze = /* @__PURE__ */ new Set(), Mt = {}, _r = {};
    function ir(e, t) {
      kr(e, t), kr(e + "Capture", t);
    }
    function kr(e, t) {
      Mt[e] && E("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Mt[e] = t;
      {
        var a = e.toLowerCase();
        _r[a] = e, e === "onDoubleClick" && (_r.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ze.add(t[i]);
    }
    var on = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Vn = Object.prototype.hasOwnProperty;
    function zn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Un(e) {
      try {
        return Cn(e), !1;
      } catch {
        return !0;
      }
    }
    function Cn(e) {
      return "" + e;
    }
    function Dr(e, t) {
      if (Un(e))
        return E("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, zn(e)), Cn(e);
    }
    function Or(e) {
      if (Un(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", zn(e)), Cn(e);
    }
    function Pn(e, t) {
      if (Un(e))
        return E("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, zn(e)), Cn(e);
    }
    function lr(e, t) {
      if (Un(e))
        return E("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, zn(e)), Cn(e);
    }
    function Mr(e) {
      if (Un(e))
        return E("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", zn(e)), Cn(e);
    }
    function ur(e) {
      if (Un(e))
        return E("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", zn(e)), Cn(e);
    }
    var Zr = 0, qn = 1, Lr = 2, sn = 3, fr = 4, Ga = 5, ea = 6, J = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", xe = J + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", et = new RegExp("^[" + J + "][" + xe + "]*$"), kt = {}, Lt = {};
    function Rn(e) {
      return Vn.call(Lt, e) ? !0 : Vn.call(kt, e) ? !1 : et.test(e) ? (Lt[e] = !0, !0) : (kt[e] = !0, E("Invalid attribute name: `%s`", e), !1);
    }
    function cn(e, t, a) {
      return t !== null ? t.type === Zr : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function or(e, t, a, i) {
      if (a !== null && a.type === Zr)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function jt(e, t, a, i) {
      if (t === null || typeof t > "u" || or(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case sn:
            return !t;
          case fr:
            return t === !1;
          case Ga:
            return isNaN(t);
          case ea:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function dr(e) {
      return zt.hasOwnProperty(e) ? zt[e] : null;
    }
    function Nt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Lr || t === sn || t === fr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var zt = {}, La = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    La.forEach(function(e) {
      zt[e] = new Nt(
        e,
        Zr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      zt[t] = new Nt(
        t,
        qn,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      zt[e] = new Nt(
        e,
        Lr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      zt[e] = new Nt(
        e,
        Lr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      zt[e] = new Nt(
        e,
        sn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      zt[e] = new Nt(
        e,
        sn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      zt[e] = new Nt(
        e,
        fr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      zt[e] = new Nt(
        e,
        ea,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      zt[e] = new Nt(
        e,
        Ga,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var va = /[\-\:]([a-z])/g, tl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(va, tl);
      zt[t] = new Nt(
        t,
        qn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(va, tl);
      zt[t] = new Nt(
        t,
        qn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(va, tl);
      zt[t] = new Nt(
        t,
        qn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      zt[e] = new Nt(
        e,
        qn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Pl = "xlinkHref";
    zt[Pl] = new Nt(
      "xlinkHref",
      qn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      zt[e] = new Nt(
        e,
        qn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Ou = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ci = !1;
    function nl(e) {
      !Ci && Ou.test(e) && (Ci = !0, E("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ta(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Dr(a, t), i.sanitizeURL && nl("" + a);
        var s = i.attributeName, f = null;
        if (i.type === fr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : jt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (jt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === sn)
            return a;
          f = e.getAttribute(s);
        }
        return jt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function Xa(e, t, a) {
      {
        if (!Rn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var i = e.getAttribute(t);
        return Dr(a, t), i === "" + a ? a : i;
      }
    }
    function na(e, t, a, i) {
      var u = dr(t);
      if (!cn(t, u, i)) {
        if (jt(t, a, u, i) && (a = null), i || u === null) {
          if (Rn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Dr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === sn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, _;
          b === sn || b === fr && a === !0 ? _ = "" : (Dr(a, y), _ = "" + a, u.sanitizeURL && nl(_.toString())), g ? e.setAttributeNS(g, y, _) : e.setAttribute(y, _);
        }
      }
    }
    var Ka = Symbol.for("react.element"), pr = Symbol.for("react.portal"), ra = Symbol.for("react.fragment"), Ja = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), ne = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), Ge = Symbol.for("react.suspense"), mt = Symbol.for("react.suspense_list"), Xe = Symbol.for("react.memo"), De = Symbol.for("react.lazy"), On = Symbol.for("react.scope"), Qt = Symbol.for("react.debug_trace_mode"), Gt = Symbol.for("react.offscreen"), Qn = Symbol.for("react.legacy_hidden"), Za = Symbol.for("react.cache"), Mu = Symbol.for("react.tracing_marker"), Ct = Symbol.iterator, Nf = "@@iterator";
    function Na(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ct && e[Ct] || e[Nf];
      return typeof t == "function" ? t : null;
    }
    var it = Object.assign, ei = 0, rl, Lu, al, Nr, Io, vr, Wo;
    function qo() {
    }
    qo.__reactDisabledLog = !0;
    function tc() {
      {
        if (ei === 0) {
          rl = console.log, Lu = console.info, al = console.warn, Nr = console.error, Io = console.group, vr = console.groupCollapsed, Wo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: qo,
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
        ei++;
      }
    }
    function Nu() {
      {
        if (ei--, ei === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: it({}, e, {
              value: rl
            }),
            info: it({}, e, {
              value: Lu
            }),
            warn: it({}, e, {
              value: al
            }),
            error: it({}, e, {
              value: Nr
            }),
            group: it({}, e, {
              value: Io
            }),
            groupCollapsed: it({}, e, {
              value: vr
            }),
            groupEnd: it({}, e, {
              value: Wo
            })
          });
        }
        ei < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var il = A.ReactCurrentDispatcher, za;
    function hr(e, t, a) {
      {
        if (za === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            za = i && i[1] || "";
          }
        return `
` + za + e;
      }
    }
    var ll = !1, ul;
    {
      var ol = typeof WeakMap == "function" ? WeakMap : Map;
      ul = new ol();
    }
    function Bl(e, t) {
      if (!e || ll)
        return "";
      {
        var a = ul.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      ll = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = il.current, il.current = null, tc();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && ul.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        ll = !1, il.current = s, Nu(), Error.prepareStackTrace = u;
      }
      var _ = e ? e.displayName || e.name : "", N = _ ? hr(_) : "";
      return typeof e == "function" && ul.set(e, N), N;
    }
    function sl(e, t, a) {
      return Bl(e, !0);
    }
    function Qo(e, t, a) {
      return Bl(e, !1);
    }
    function Go(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function vt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Bl(e, Go(e));
      if (typeof e == "string")
        return hr(e);
      switch (e) {
        case Ge:
          return hr("Suspense");
        case mt:
          return hr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ce:
            return Qo(e.render);
          case Xe:
            return vt(e.type, t, a);
          case De: {
            var i = e, u = i._payload, s = i._init;
            try {
              return vt(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Xo(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ie:
          return hr(e.type);
        case en:
          return hr("Lazy");
        case Re:
          return hr("Suspense");
        case xt:
          return hr("SuspenseList");
        case me:
        case nt:
        case je:
          return Qo(e.type);
        case We:
          return Qo(e.type.render);
        case ve:
          return sl(e.type);
        default:
          return "";
      }
    }
    function zu(e) {
      try {
        var t = "", a = e;
        do
          t += Xo(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function cl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Ko(e) {
      return e.displayName || "Context";
    }
    function Rt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ra:
          return "Fragment";
        case pr:
          return "Portal";
        case R:
          return "Profiler";
        case Ja:
          return "StrictMode";
        case Ge:
          return "Suspense";
        case mt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ne:
            var t = e;
            return Ko(t) + ".Consumer";
          case B:
            var a = e;
            return Ko(a._context) + ".Provider";
          case ce:
            return cl(e, e.render, "ForwardRef");
          case Xe:
            var i = e.displayName || null;
            return i !== null ? i : Rt(e.type) || "Memo";
          case De: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Rt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Uu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function $l(e) {
      return e.displayName || "Context";
    }
    function Be(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ot:
          return "Cache";
        case un:
          var i = a;
          return $l(i) + ".Consumer";
        case rt:
          var u = a;
          return $l(u._context) + ".Provider";
        case Ht:
          return "DehydratedFragment";
        case We:
          return Uu(a, a.render, "ForwardRef");
        case Et:
          return "Fragment";
        case ie:
          return a;
        case he:
          return "Portal";
        case re:
          return "Root";
        case Ve:
          return "Text";
        case en:
          return Rt(a);
        case ot:
          return a === Ja ? "StrictMode" : "Mode";
        case Ue:
          return "Offscreen";
        case lt:
          return "Profiler";
        case En:
          return "Scope";
        case Re:
          return "Suspense";
        case xt:
          return "SuspenseList";
        case wt:
          return "TracingMarker";
        case ve:
        case me:
        case Sn:
        case nt:
        case at:
        case je:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Ua = A.ReactDebugCurrentFrame, vn = null, zr = !1;
    function ha() {
      {
        if (vn === null)
          return null;
        var e = vn._debugOwner;
        if (e !== null && typeof e < "u")
          return Be(e);
      }
      return null;
    }
    function fl() {
      return vn === null ? "" : zu(vn);
    }
    function Xt() {
      Ua.getCurrentStack = null, vn = null, zr = !1;
    }
    function Mn(e) {
      Ua.getCurrentStack = fl, vn = e, zr = !1;
    }
    function Ur(e) {
      zr = e;
    }
    function An(e) {
      return "" + e;
    }
    function ti(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return ur(e), e;
        default:
          return "";
      }
    }
    var nc = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function dl(e, t) {
      nc[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || E("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || E("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Au(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Yl(e) {
      return e._valueTracker;
    }
    function Il(e) {
      e._valueTracker = null;
    }
    function ma(e) {
      var t = "";
      return e && (Au(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ri(e) {
      var t = Au(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      ur(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            ur(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            ur(p), i = "" + p;
          },
          stopTracking: function() {
            Il(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Fu(e) {
      Yl(e) || (e._valueTracker = Ri(e));
    }
    function Wl(e) {
      if (!e)
        return !1;
      var t = Yl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = ma(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function ni(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ti = !1, pl = !1, Jo = !1, Aa = !1;
    function Hu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function vl(e, t) {
      var a = e, i = t.checked, u = it({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function h(e, t) {
      dl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !pl && (E("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ha() || "A component", t.type), pl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ti && (E("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ha() || "A component", t.type), Ti = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ti(t.value != null ? t.value : i),
        controlled: Hu(t)
      };
    }
    function C(e, t) {
      var a = e, i = t.checked;
      i != null && na(a, "checked", i, !1);
    }
    function L(e, t) {
      var a = e;
      {
        var i = Hu(t);
        !a._wrapperState.controlled && i && !Aa && (E("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Aa = !0), a._wrapperState.controlled && !i && !Jo && (E("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Jo = !0);
      }
      C(e, t);
      var u = ti(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = An(u)) : a.value !== An(u) && (a.value = An(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? fe(a, t.type, u) : t.hasOwnProperty("defaultValue") && fe(a, t.type, ti(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function F(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = An(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function I(e, t) {
      var a = e;
      L(a, t), _e(a, t);
    }
    function _e(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Dr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = fh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Wl(f), L(f, p);
          }
        }
      }
    }
    function fe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || ni(e.ownerDocument) !== e) && (a == null ? e.defaultValue = An(e._wrapperState.initialValue) : e.defaultValue !== An(a) && (e.defaultValue = An(a)));
    }
    var Ne = !1, ct = !1, bt = !1;
    function Vt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Z.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ct || (ct = !0, E("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (bt || (bt = !0, E("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ne && (E("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ne = !0);
    }
    function Ut(e, t) {
      t.value != null && e.setAttribute("value", An(ti(t.value)));
    }
    var It = Array.isArray;
    function ft(e) {
      return It(e);
    }
    var Tn;
    Tn = !1;
    function ql() {
      var e = ha();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ju = ["value", "defaultValue"];
    function Vu(e) {
      {
        dl("select", e);
        for (var t = 0; t < ju.length; t++) {
          var a = ju[t];
          if (e[a] != null) {
            var i = ft(e[a]);
            e.multiple && !i ? E("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, ql()) : !e.multiple && i && E("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, ql());
          }
        }
      }
    }
    function hl(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = An(ti(a)), b = null, _ = 0; _ < u.length; _++) {
          if (u[_].value === g) {
            u[_].selected = !0, i && (u[_].defaultSelected = !0);
            return;
          }
          b === null && !u[_].disabled && (b = u[_]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function Pu(e, t) {
      return it({}, t, {
        value: void 0
      });
    }
    function rc(e, t) {
      var a = e;
      Vu(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Tn && (E("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Tn = !0);
    }
    function ac(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? hl(a, !!t.multiple, i, !1) : t.defaultValue != null && hl(a, !!t.multiple, t.defaultValue, !0);
    }
    function zf(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? hl(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? hl(a, !!t.multiple, t.defaultValue, !0) : hl(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Vp(e, t) {
      var a = e, i = t.value;
      i != null && hl(a, !!t.multiple, i, !1);
    }
    var Pp = !1;
    function Uf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = it({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: An(a._wrapperState.initialValue)
      });
      return i;
    }
    function Bp(e, t) {
      var a = e;
      dl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Pp && (E("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ha() || "A component"), Pp = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          E("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ft(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: ti(i)
      };
    }
    function $p(e, t) {
      var a = e, i = ti(t.value), u = ti(t.defaultValue);
      if (i != null) {
        var s = An(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = An(u));
    }
    function ic(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Om(e, t) {
      $p(e, t);
    }
    var wi = "http://www.w3.org/1999/xhtml", Mm = "http://www.w3.org/1998/Math/MathML", lc = "http://www.w3.org/2000/svg";
    function Af(e) {
      switch (e) {
        case "svg":
          return lc;
        case "math":
          return Mm;
        default:
          return wi;
      }
    }
    function Ff(e, t) {
      return e == null || e === wi ? Af(t) : e === lc && t === "foreignObject" ? wi : e;
    }
    var Lm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, uc, Yp = Lm(function(e, t) {
      if (e.namespaceURI === lc && !("innerHTML" in e)) {
        uc = uc || document.createElement("div"), uc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = uc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Ar = 1, xi = 3, hn = 8, aa = 9, Hf = 11, Zo = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === xi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Ip = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Bu = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Wp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var qp = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Bu).forEach(function(e) {
      qp.forEach(function(t) {
        Bu[Wp(t, e)] = Bu[e];
      });
    });
    function ml(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Bu.hasOwnProperty(e) && Bu[e]) ? t + "px" : (lr(t, e), ("" + t).trim());
    }
    var Nm = /([A-Z])/g, zm = /^ms-/;
    function Um(e) {
      return e.replace(Nm, "-$1").toLowerCase().replace(zm, "-ms-");
    }
    var jf = function() {
    };
    {
      var Qp = /^(?:webkit|moz|o)[A-Z]/, es = /^-ms-/, ts = /-(.)/g, Gp = /;\s*$/, bi = {}, Vf = {}, Pf = !1, oc = !1, Bf = function(e) {
        return e.replace(ts, function(t, a) {
          return a.toUpperCase();
        });
      }, Xp = function(e) {
        bi.hasOwnProperty(e) && bi[e] || (bi[e] = !0, E(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Bf(e.replace(es, "ms-"))
        ));
      }, Kp = function(e) {
        bi.hasOwnProperty(e) && bi[e] || (bi[e] = !0, E("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Jp = function(e, t) {
        Vf.hasOwnProperty(t) && Vf[t] || (Vf[t] = !0, E(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Gp, "")));
      }, Am = function(e, t) {
        Pf || (Pf = !0, E("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Fm = function(e, t) {
        oc || (oc = !0, E("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      jf = function(e, t) {
        e.indexOf("-") > -1 ? Xp(e) : Qp.test(e) ? Kp(e) : Gp.test(t) && Jp(e, t), typeof t == "number" && (isNaN(t) ? Am(e, t) : isFinite(t) || Fm(e, t));
      };
    }
    var Hm = jf;
    function jm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Um(i)) + ":", t += ml(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function Zp(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Hm(i, t[i]);
          var s = ml(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ri(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function $u(e) {
      var t = {};
      for (var a in e)
        for (var i = Ip[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ev(e, t) {
      {
        if (!t)
          return;
        var a = $u(e), i = $u(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, E("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ri(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var tv = {
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
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, nv = it({
      menuitem: !0
    }, tv), rv = "__html";
    function ns(e, t) {
      if (t) {
        if (nv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(rv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && E("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ql(e, t) {
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
    var sc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Gl = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, yl = {}, rs = new RegExp("^(aria)-[" + xe + "]*$"), $f = new RegExp("^(aria)[A-Z][" + xe + "]*$");
    function av(e, t) {
      {
        if (Vn.call(yl, t) && yl[t])
          return !0;
        if ($f.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Gl.hasOwnProperty(a) ? a : null;
          if (i == null)
            return E("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), yl[t] = !0, !0;
          if (t !== i)
            return E("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), yl[t] = !0, !0;
        }
        if (rs.test(t)) {
          var u = t.toLowerCase(), s = Gl.hasOwnProperty(u) ? u : null;
          if (s == null)
            return yl[t] = !0, !1;
          if (t !== s)
            return E("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), yl[t] = !0, !0;
        }
      }
      return !0;
    }
    function cc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = av(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? E("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && E("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Yu(e, t) {
      Ql(e, t) || cc(e, t);
    }
    var fc = !1;
    function iv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !fc && (fc = !0, e === "select" && t.multiple ? E("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : E("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var as = function() {
    };
    {
      var sr = {}, Yf = /^on./, lv = /^on[^A-Z]/, uv = new RegExp("^(aria)-[" + xe + "]*$"), ov = new RegExp("^(aria)[A-Z][" + xe + "]*$");
      as = function(e, t, a, i) {
        if (Vn.call(sr, t) && sr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return E("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), sr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return E("Invalid event handler property `%s`. Did you mean `%s`?", t, p), sr[t] = !0, !0;
          if (Yf.test(t))
            return E("Unknown event handler property `%s`. It will be ignored.", t), sr[t] = !0, !0;
        } else if (Yf.test(t))
          return lv.test(t) && E("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), sr[t] = !0, !0;
        if (uv.test(t) || ov.test(t))
          return !0;
        if (u === "innerhtml")
          return E("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), sr[t] = !0, !0;
        if (u === "aria")
          return E("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), sr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return E("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), sr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return E("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), sr[t] = !0, !0;
        var v = dr(t), y = v !== null && v.type === Zr;
        if (sc.hasOwnProperty(u)) {
          var g = sc[u];
          if (g !== t)
            return E("Invalid DOM property `%s`. Did you mean `%s`?", t, g), sr[t] = !0, !0;
        } else if (!y && t !== u)
          return E("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), sr[t] = !0, !0;
        return typeof a == "boolean" && or(t, a, v, !1) ? (a ? E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : E('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), sr[t] = !0, !0) : y ? !0 : or(t, a, v, !1) ? (sr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === sn && (E("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), sr[t] = !0), !0);
      };
    }
    var sv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = as(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? E("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && E("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function gl(e, t, a) {
      Ql(e, t) || sv(e, t, a);
    }
    var dc = 1, is = 2, ls = 4, Vm = dc | is | ls, _i = null;
    function Pm(e) {
      _i !== null && E("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), _i = e;
    }
    function cv() {
      _i === null && E("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), _i = null;
    }
    function fv(e) {
      return e === _i;
    }
    function Wt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === xi ? t.parentNode : t;
    }
    var us = null, ki = null, ai = null;
    function If(e) {
      var t = Oo(e);
      if (t) {
        if (typeof us != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = fh(a);
          us(t.stateNode, t.type, i);
        }
      }
    }
    function Wf(e) {
      us = e;
    }
    function Iu(e) {
      ki ? ai ? ai.push(e) : ai = [e] : ki = e;
    }
    function pc() {
      return ki !== null || ai !== null;
    }
    function Xl() {
      if (ki) {
        var e = ki, t = ai;
        if (ki = null, ai = null, If(e), t)
          for (var a = 0; a < t.length; a++)
            If(t[a]);
      }
    }
    var qf = function(e, t) {
      return e(t);
    }, dv = function() {
    }, Qf = !1;
    function pv() {
      var e = pc();
      e && (dv(), Xl());
    }
    function os(e, t, a) {
      if (Qf)
        return e(t, a);
      Qf = !0;
      try {
        return qf(e, t, a);
      } finally {
        Qf = !1, pv();
      }
    }
    function vc(e, t, a) {
      qf = e, dv = a;
    }
    function Gf(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Xf(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && Gf(t));
        default:
          return !1;
      }
    }
    function Kl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = fh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Xf(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Kf = !1;
    if (on)
      try {
        var Wu = {};
        Object.defineProperty(Wu, "passive", {
          get: function() {
            Kf = !0;
          }
        }), window.addEventListener("test", Wu, Wu), window.removeEventListener("test", Wu, Wu);
      } catch {
        Kf = !1;
      }
    function vv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var hv = vv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ss = document.createElement("react");
      hv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, _ = !0, N = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function P() {
          ss.removeEventListener(H, He, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var Se = Array.prototype.slice.call(arguments, 3);
        function He() {
          b = !0, P(), a.apply(i, Se), _ = !1;
        }
        var ke, Ft = !1, Pt = !1;
        function O(D) {
          if (ke = D.error, Ft = !0, ke === null && D.colno === 0 && D.lineno === 0 && (Pt = !0), D.defaultPrevented && ke != null && typeof ke == "object")
            try {
              ke._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", O), ss.addEventListener(H, He, !1), g.initEvent(H, !1, !1), ss.dispatchEvent(g), U && Object.defineProperty(window, "event", U), b && _ && (Ft ? Pt && (ke = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ke = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ke)), window.removeEventListener("error", O), !b)
          return P(), vv.apply(this, arguments);
      };
    }
    var Di = hv, Jl = !1, Oi = null, ia = !1, Zl = null, Mi = {
      onError: function(e) {
        Jl = !0, Oi = e;
      }
    };
    function cs(e, t, a, i, u, s, f, p, v) {
      Jl = !1, Oi = null, Di.apply(Mi, arguments);
    }
    function Bm(e, t, a, i, u, s, f, p, v) {
      if (cs.apply(this, arguments), Jl) {
        var y = tu();
        ia || (ia = !0, Zl = y);
      }
    }
    function $m() {
      if (ia) {
        var e = Zl;
        throw ia = !1, Zl = null, e;
      }
    }
    function eu() {
      return Jl;
    }
    function tu() {
      if (Jl) {
        var e = Oi;
        return Jl = !1, Oi = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Fa(e) {
      return e._reactInternals;
    }
    function hc(e) {
      return e._reactInternals !== void 0;
    }
    function Jf(e, t) {
      e._reactInternals = t;
    }
    var we = (
      /*                      */
      0
    ), la = (
      /*                */
      1
    ), Fe = (
      /*                    */
      2
    ), Ce = (
      /*                       */
      4
    ), Sl = (
      /*           */
      Fe | Ce
    ), mn = (
      /*                */
      16
    ), Bn = (
      /*                 */
      32
    ), Li = (
      /*                     */
      64
    ), ut = (
      /*                   */
      128
    ), yn = (
      /*            */
      256
    ), ii = (
      /*                          */
      512
    ), El = (
      /*                     */
      1024
    ), ya = (
      /*                      */
      2048
    ), mr = (
      /*                    */
      4096
    ), mv = (
      /*           */
      mr | Ce
    ), Fr = (
      /*                   */
      8192
    ), nu = (
      /*             */
      16384
    ), Zf = ya | Ce | Li | ii | El | nu, yv = (
      /*               */
      32767
    ), fs = (
      /*                   */
      32768
    ), wn = (
      /*                */
      65536
    ), ed = (
      /* */
      131072
    ), ga = (
      /*                       */
      1048576
    ), qu = (
      /*                    */
      2097152
    ), li = (
      /*                 */
      4194304
    ), Cl = (
      /*                */
      8388608
    ), Ha = (
      /*               */
      16777216
    ), Qu = (
      /*              */
      33554432
    ), ds = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Ce | El | 0
    ), ps = Fe | Ce | mn | Bn | ii | mr | Fr, ui = Ce | Li | ii | Fr, Gn = ya | mn, $n = li | Cl | qu, Rl = A.ReactCurrentOwner;
    function Ni(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Fe | mr)) !== we && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === re ? a : null;
    }
    function td(e) {
      if (e.tag === Re) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function oi(e) {
      return e.tag === re ? e.stateNode.containerInfo : null;
    }
    function Tl(e) {
      return Ni(e) === e;
    }
    function mc(e) {
      {
        var t = Rl.current;
        if (t !== null && t.tag === ve) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || E("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Be(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Fa(e);
      return u ? Ni(u) === u : !1;
    }
    function nd(e) {
      if (Ni(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function vs(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ni(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return nd(s), e;
            if (v === u)
              return nd(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== re)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function rd(e) {
      var t = vs(e);
      return t !== null ? ad(t) : null;
    }
    function ad(e) {
      if (e.tag === ie || e.tag === Ve)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = ad(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function id(e) {
      var t = vs(e);
      return t !== null ? hs(t) : null;
    }
    function hs(e) {
      if (e.tag === ie || e.tag === Ve)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== he) {
          var a = hs(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var ld = ee.unstable_scheduleCallback, gv = ee.unstable_cancelCallback, Sv = ee.unstable_shouldYield, ud = ee.unstable_requestPaint, fn = ee.unstable_now, Gu = ee.unstable_getCurrentPriorityLevel, ru = ee.unstable_ImmediatePriority, Xu = ee.unstable_UserBlockingPriority, Yn = ee.unstable_NormalPriority, Sa = ee.unstable_LowPriority, zi = ee.unstable_IdlePriority, Ui = ee.unstable_yieldValue, Ai = ee.unstable_setDisableYieldValue, Ea = null, Xn = null, ae = null, Ca = !1, dn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Hr(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return E("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ht && (e = it({}, e, {
          getLaneLabelMap: Rv,
          injectProfilingHooks: od
        })), Ea = t.inject(e), Xn = t;
      } catch (a) {
        E("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function rn(e, t) {
      if (Xn && typeof Xn.onScheduleFiberRoot == "function")
        try {
          Xn.onScheduleFiberRoot(Ea, e, t);
        } catch (a) {
          Ca || (Ca = !0, E("React instrumentation encountered an error: %s", a));
        }
    }
    function ja(e, t) {
      if (Xn && typeof Xn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & ut) === ut;
          if (Je) {
            var i;
            switch (t) {
              case xn:
                i = ru;
                break;
              case Fi:
                i = Xu;
                break;
              case Hi:
                i = Yn;
                break;
              case fu:
                i = zi;
                break;
              default:
                i = Yn;
                break;
            }
            Xn.onCommitFiberRoot(Ea, e, i, a);
          }
        } catch (u) {
          Ca || (Ca = !0, E("React instrumentation encountered an error: %s", u));
        }
    }
    function Ev(e) {
      if (Xn && typeof Xn.onPostCommitFiberRoot == "function")
        try {
          Xn.onPostCommitFiberRoot(Ea, e);
        } catch (t) {
          Ca || (Ca = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function Cv(e) {
      if (Xn && typeof Xn.onCommitFiberUnmount == "function")
        try {
          Xn.onCommitFiberUnmount(Ea, e);
        } catch (t) {
          Ca || (Ca = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function Ln(e) {
      if (typeof Ui == "function" && (Ai(e), nn(e)), Xn && typeof Xn.setStrictMode == "function")
        try {
          Xn.setStrictMode(Ea, e);
        } catch (t) {
          Ca || (Ca = !0, E("React instrumentation encountered an error: %s", t));
        }
    }
    function od(e) {
      ae = e;
    }
    function Rv() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Es; a++) {
          var i = Im(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function ms(e) {
      ae !== null && typeof ae.markCommitStarted == "function" && ae.markCommitStarted(e);
    }
    function au() {
      ae !== null && typeof ae.markCommitStopped == "function" && ae.markCommitStopped();
    }
    function iu(e) {
      ae !== null && typeof ae.markComponentRenderStarted == "function" && ae.markComponentRenderStarted(e);
    }
    function si() {
      ae !== null && typeof ae.markComponentRenderStopped == "function" && ae.markComponentRenderStopped();
    }
    function yc(e) {
      ae !== null && typeof ae.markComponentPassiveEffectMountStarted == "function" && ae.markComponentPassiveEffectMountStarted(e);
    }
    function Tv() {
      ae !== null && typeof ae.markComponentPassiveEffectMountStopped == "function" && ae.markComponentPassiveEffectMountStopped();
    }
    function wv(e) {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStarted == "function" && ae.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ku() {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStopped == "function" && ae.markComponentPassiveEffectUnmountStopped();
    }
    function xv(e) {
      ae !== null && typeof ae.markComponentLayoutEffectMountStarted == "function" && ae.markComponentLayoutEffectMountStarted(e);
    }
    function ys() {
      ae !== null && typeof ae.markComponentLayoutEffectMountStopped == "function" && ae.markComponentLayoutEffectMountStopped();
    }
    function Va(e) {
      ae !== null && typeof ae.markComponentLayoutEffectUnmountStarted == "function" && ae.markComponentLayoutEffectUnmountStarted(e);
    }
    function Ju() {
      ae !== null && typeof ae.markComponentLayoutEffectUnmountStopped == "function" && ae.markComponentLayoutEffectUnmountStopped();
    }
    function gs(e, t, a) {
      ae !== null && typeof ae.markComponentErrored == "function" && ae.markComponentErrored(e, t, a);
    }
    function lu(e, t, a) {
      ae !== null && typeof ae.markComponentSuspended == "function" && ae.markComponentSuspended(e, t, a);
    }
    function sd(e) {
      ae !== null && typeof ae.markLayoutEffectsStarted == "function" && ae.markLayoutEffectsStarted(e);
    }
    function Zu() {
      ae !== null && typeof ae.markLayoutEffectsStopped == "function" && ae.markLayoutEffectsStopped();
    }
    function bv(e) {
      ae !== null && typeof ae.markPassiveEffectsStarted == "function" && ae.markPassiveEffectsStarted(e);
    }
    function cd() {
      ae !== null && typeof ae.markPassiveEffectsStopped == "function" && ae.markPassiveEffectsStopped();
    }
    function an(e) {
      ae !== null && typeof ae.markRenderStarted == "function" && ae.markRenderStarted(e);
    }
    function gc() {
      ae !== null && typeof ae.markRenderYielded == "function" && ae.markRenderYielded();
    }
    function Sc() {
      ae !== null && typeof ae.markRenderStopped == "function" && ae.markRenderStopped();
    }
    function fd(e) {
      ae !== null && typeof ae.markRenderScheduled == "function" && ae.markRenderScheduled(e);
    }
    function Ec(e, t) {
      ae !== null && typeof ae.markForceUpdateScheduled == "function" && ae.markForceUpdateScheduled(e, t);
    }
    function jr(e, t) {
      ae !== null && typeof ae.markStateUpdateScheduled == "function" && ae.markStateUpdateScheduled(e, t);
    }
    var Me = (
      /*                         */
      0
    ), ze = (
      /*                 */
      1
    ), $e = (
      /*                    */
      2
    ), dt = (
      /*               */
      8
    ), ua = (
      /*              */
      16
    ), eo = Math.clz32 ? Math.clz32 : cr, Ss = Math.log, Ym = Math.LN2;
    function cr(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Ss(t) / Ym | 0) | 0;
    }
    var Es = 31, Y = (
      /*                        */
      0
    ), Nn = (
      /*                          */
      0
    ), qe = (
      /*                        */
      1
    ), yr = (
      /*    */
      2
    ), Vr = (
      /*            */
      4
    ), ci = (
      /*            */
      8
    ), Ra = (
      /*                    */
      16
    ), to = (
      /*                */
      32
    ), uu = (
      /*                       */
      4194240
    ), no = (
      /*                        */
      64
    ), Cc = (
      /*                        */
      128
    ), Rc = (
      /*                        */
      256
    ), Tc = (
      /*                        */
      512
    ), Cs = (
      /*                        */
      1024
    ), ou = (
      /*                        */
      2048
    ), wc = (
      /*                        */
      4096
    ), ro = (
      /*                        */
      8192
    ), ao = (
      /*                        */
      16384
    ), Rs = (
      /*                       */
      32768
    ), su = (
      /*                       */
      65536
    ), xc = (
      /*                       */
      131072
    ), bc = (
      /*                       */
      262144
    ), _c = (
      /*                       */
      524288
    ), kc = (
      /*                       */
      1048576
    ), Ts = (
      /*                       */
      2097152
    ), ws = (
      /*                            */
      130023424
    ), cu = (
      /*                             */
      4194304
    ), dd = (
      /*                             */
      8388608
    ), Dc = (
      /*                             */
      16777216
    ), pd = (
      /*                             */
      33554432
    ), vd = (
      /*                             */
      67108864
    ), hd = cu, io = (
      /*          */
      134217728
    ), md = (
      /*                                 */
      268435455
    ), lo = (
      /*               */
      268435456
    ), fi = (
      /*                       */
      536870912
    ), oa = (
      /*                   */
      1073741824
    );
    function Im(e) {
      {
        if (e & qe)
          return "Sync";
        if (e & yr)
          return "InputContinuousHydration";
        if (e & Vr)
          return "InputContinuous";
        if (e & ci)
          return "DefaultHydration";
        if (e & Ra)
          return "Default";
        if (e & to)
          return "TransitionHydration";
        if (e & uu)
          return "Transition";
        if (e & ws)
          return "Retry";
        if (e & io)
          return "SelectiveHydration";
        if (e & lo)
          return "IdleHydration";
        if (e & fi)
          return "Idle";
        if (e & oa)
          return "Offscreen";
      }
    }
    var Kt = -1, uo = no, oo = cu;
    function xs(e) {
      switch (wl(e)) {
        case qe:
          return qe;
        case yr:
          return yr;
        case Vr:
          return Vr;
        case ci:
          return ci;
        case Ra:
          return Ra;
        case to:
          return to;
        case no:
        case Cc:
        case Rc:
        case Tc:
        case Cs:
        case ou:
        case wc:
        case ro:
        case ao:
        case Rs:
        case su:
        case xc:
        case bc:
        case _c:
        case kc:
        case Ts:
          return e & uu;
        case cu:
        case dd:
        case Dc:
        case pd:
        case vd:
          return e & ws;
        case io:
          return io;
        case lo:
          return lo;
        case fi:
          return fi;
        case oa:
          return oa;
        default:
          return E("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function bs(e, t) {
      var a = e.pendingLanes;
      if (a === Y)
        return Y;
      var i = Y, u = e.suspendedLanes, s = e.pingedLanes, f = a & md;
      if (f !== Y) {
        var p = f & ~u;
        if (p !== Y)
          i = xs(p);
        else {
          var v = f & s;
          v !== Y && (i = xs(v));
        }
      } else {
        var y = a & ~u;
        y !== Y ? i = xs(y) : s !== Y && (i = xs(s));
      }
      if (i === Y)
        return Y;
      if (t !== Y && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === Y) {
        var g = wl(i), b = wl(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= b || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === Ra && (b & uu) !== Y
        )
          return t;
      }
      (i & Vr) !== Y && (i |= a & Ra);
      var _ = e.entangledLanes;
      if (_ !== Y)
        for (var N = e.entanglements, U = i & _; U > 0; ) {
          var P = xl(U), Se = 1 << P;
          i |= N[P], U &= ~Se;
        }
      return i;
    }
    function _v(e, t) {
      for (var a = e.eventTimes, i = Kt; t > 0; ) {
        var u = xl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function kv(e, t) {
      switch (e) {
        case qe:
        case yr:
        case Vr:
          return t + 250;
        case ci:
        case Ra:
        case to:
        case no:
        case Cc:
        case Rc:
        case Tc:
        case Cs:
        case ou:
        case wc:
        case ro:
        case ao:
        case Rs:
        case su:
        case xc:
        case bc:
        case _c:
        case kc:
        case Ts:
          return t + 5e3;
        case cu:
        case dd:
        case Dc:
        case pd:
        case vd:
          return Kt;
        case io:
        case lo:
        case fi:
        case oa:
          return Kt;
        default:
          return E("Should have found matching lanes. This is a bug in React."), Kt;
      }
    }
    function Dv(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = xl(f), v = 1 << p, y = s[p];
        y === Kt ? ((v & i) === Y || (v & u) !== Y) && (s[p] = kv(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function Ov(e) {
      return xs(e.pendingLanes);
    }
    function Oc(e) {
      var t = e.pendingLanes & ~oa;
      return t !== Y ? t : t & oa ? oa : Y;
    }
    function yd(e) {
      return (e & qe) !== Y;
    }
    function Mc(e) {
      return (e & md) !== Y;
    }
    function gd(e) {
      return (e & ws) === e;
    }
    function _s(e) {
      return (e & uu) === e;
    }
    function Fn(e, t) {
      var a = yr | Vr | ci | Ra;
      return (t & a) !== Y;
    }
    function Wm(e, t) {
      return (t & e.expiredLanes) !== Y;
    }
    function Mv(e) {
      return (e & uu) !== 0;
    }
    function sa() {
      var e = uo;
      return uo <<= 1, uo & uu || (uo = no), e;
    }
    function gr() {
      var e = oo;
      return oo <<= 1, oo & ws || (oo = cu), e;
    }
    function wl(e) {
      return e & -e;
    }
    function so(e) {
      return wl(e);
    }
    function xl(e) {
      return 31 - eo(e);
    }
    function Lc(e) {
      return xl(e);
    }
    function Pr(e, t) {
      return (e & t) !== Y;
    }
    function bl(e, t) {
      return (e & t) === t;
    }
    function Ke(e, t) {
      return e | t;
    }
    function co(e, t) {
      return e & ~t;
    }
    function Sd(e, t) {
      return e & t;
    }
    function qm(e) {
      return e;
    }
    function Nc(e, t) {
      return e !== Nn && e < t ? e : t;
    }
    function fo(e) {
      for (var t = [], a = 0; a < Es; a++)
        t.push(e);
      return t;
    }
    function po(e, t, a) {
      e.pendingLanes |= t, t !== fi && (e.suspendedLanes = Y, e.pingedLanes = Y);
      var i = e.eventTimes, u = Lc(t);
      i[u] = a;
    }
    function Ed(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = xl(i), s = 1 << u;
        a[u] = Kt, i &= ~s;
      }
    }
    function Cd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Lv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = xl(f), v = 1 << p;
        i[p] = Y, u[p] = Kt, s[p] = Kt, f &= ~v;
      }
    }
    function vo(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = xl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Nv(e, t) {
      var a = wl(t), i;
      switch (a) {
        case Vr:
          i = yr;
          break;
        case Ra:
          i = ci;
          break;
        case no:
        case Cc:
        case Rc:
        case Tc:
        case Cs:
        case ou:
        case wc:
        case ro:
        case ao:
        case Rs:
        case su:
        case xc:
        case bc:
        case _c:
        case kc:
        case Ts:
        case cu:
        case dd:
        case Dc:
        case pd:
        case vd:
          i = to;
          break;
        case fi:
          i = lo;
          break;
        default:
          i = Nn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Nn ? Nn : i;
    }
    function zc(e, t, a) {
      if (dn)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Lc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Rd(e, t) {
      if (dn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Lc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    var xn = qe, Fi = Vr, Hi = Ra, fu = fi, Pa = Nn;
    function Ba() {
      return Pa;
    }
    function G(e) {
      Pa = e;
    }
    function Uc(e, t) {
      var a = Pa;
      try {
        return Pa = e, t();
      } finally {
        Pa = a;
      }
    }
    function Td(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function zv(e, t) {
      return e > t ? e : t;
    }
    function wd(e, t) {
      return e !== 0 && e < t;
    }
    function ho(e) {
      var t = wl(e);
      return wd(xn, t) ? wd(Fi, t) ? Mc(t) ? Hi : fu : Fi : xn;
    }
    function du(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ac;
    function Uv(e) {
      Ac = e;
    }
    function Av(e) {
      Ac(e);
    }
    var Fc;
    function Fv(e) {
      Fc = e;
    }
    var xd;
    function bd(e) {
      xd = e;
    }
    var Hc;
    function Hv(e) {
      Hc = e;
    }
    var jc;
    function jv(e) {
      jc = e;
    }
    var _d = !1, Vc = [], ji = null, Vi = null, Pi = null, mo = /* @__PURE__ */ new Map(), ks = /* @__PURE__ */ new Map(), $a = [], kd = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ta(e) {
      return kd.indexOf(e) > -1;
    }
    function Tt(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function bn(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ji = null;
          break;
        case "dragenter":
        case "dragleave":
          Vi = null;
          break;
        case "mouseover":
        case "mouseout":
          Pi = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          mo.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          ks.delete(i);
          break;
        }
      }
    }
    function ln(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Tt(t, a, i, u, s);
        if (t !== null) {
          var p = Oo(t);
          p !== null && Fc(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Kn(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return ji = ln(ji, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Vi = ln(Vi, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Pi = ln(Pi, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return mo.set(y, ln(mo.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return ks.set(b, ln(ks.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Br(e) {
      var t = Vs(e.target);
      if (t !== null) {
        var a = Ni(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Re) {
            var u = td(a);
            if (u !== null) {
              e.blockedOn = u, jc(e.priority, function() {
                xd(a);
              });
              return;
            }
          } else if (i === re) {
            var s = a.stateNode;
            if (du(s)) {
              e.blockedOn = oi(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function yo(e) {
      {
        for (var t = Hc(), a = {
          blockedOn: null,
          target: e,
          priority: t
        }, i = 0; i < $a.length && wd(t, $a[i].priority); i++)
          ;
        $a.splice(i, 0, a), i === 0 && Br(a);
      }
    }
    function gn(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = pi(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Pm(s), u.target.dispatchEvent(s), cv();
        } else {
          var f = Oo(i);
          return f !== null && Fc(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function go(e, t, a) {
      gn(e) && a.delete(t);
    }
    function So() {
      _d = !1, ji !== null && gn(ji) && (ji = null), Vi !== null && gn(Vi) && (Vi = null), Pi !== null && gn(Pi) && (Pi = null), mo.forEach(go), ks.forEach(go);
    }
    function _l(e, t) {
      e.blockedOn === t && (e.blockedOn = null, _d || (_d = !0, ee.unstable_scheduleCallback(ee.unstable_NormalPriority, So)));
    }
    function pu(e) {
      if (Vc.length > 0) {
        _l(Vc[0], e);
        for (var t = 1; t < Vc.length; t++) {
          var a = Vc[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ji !== null && _l(ji, e), Vi !== null && _l(Vi, e), Pi !== null && _l(Pi, e);
      var i = function(p) {
        return _l(p, e);
      };
      mo.forEach(i), ks.forEach(i);
      for (var u = 0; u < $a.length; u++) {
        var s = $a[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; $a.length > 0; ) {
        var f = $a[0];
        if (f.blockedOn !== null)
          break;
        Br(f), f.blockedOn === null && $a.shift();
      }
    }
    var di = A.ReactCurrentBatchConfig;
    function $r(e, t, a) {
      var i = Ds(t), u;
      switch (i) {
        case xn:
          u = Dd;
          break;
        case Fi:
          u = Eo;
          break;
        case Hi:
        default:
          u = Co;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Dd(e, t, a, i) {
      var u = Ba(), s = di.transition;
      di.transition = null;
      try {
        G(xn), Co(e, t, a, i);
      } finally {
        G(u), di.transition = s;
      }
    }
    function Eo(e, t, a, i) {
      var u = Ba(), s = di.transition;
      di.transition = null;
      try {
        G(Fi), Co(e, t, a, i);
      } finally {
        G(u), di.transition = s;
      }
    }
    function Co(e, t, a, i) {
      var u = pi(e, t, a, i);
      if (u === null) {
        cy(e, t, i, Ro, a), bn(e, i);
        return;
      }
      if (Kn(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (bn(e, i), t & ls && Ta(e)) {
        for (; u !== null; ) {
          var s = Oo(u);
          s !== null && Av(s);
          var f = pi(e, t, a, i);
          if (f === null && cy(e, t, i, Ro, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      cy(e, t, i, null, a);
    }
    var Ro = null;
    function pi(e, t, a, i) {
      Ro = null;
      var u = Wt(i), s = Vs(u);
      if (s !== null) {
        var f = Ni(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Re) {
            var v = td(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === re) {
            var y = f.stateNode;
            if (du(y))
              return oi(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return Ro = s, null;
    }
    function Ds(e) {
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
          return xn;
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
          return Fi;
        case "message": {
          var t = Gu();
          switch (t) {
            case ru:
              return xn;
            case Xu:
              return Fi;
            case Yn:
            case Sa:
              return Hi;
            case zi:
              return fu;
            default:
              return Hi;
          }
        }
        default:
          return Hi;
      }
    }
    function kl(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Pc(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Os(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Od(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Dl = null, To = null, Hn = null;
    function Ol(e) {
      return Dl = e, To = Sr(), !0;
    }
    function wa() {
      Dl = null, To = null, Hn = null;
    }
    function Ms() {
      if (Hn)
        return Hn;
      var e, t = To, a = t.length, i, u = Sr(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Hn = u.slice(e, p), Hn;
    }
    function Sr() {
      return "value" in Dl ? Dl.value : Dl.textContent;
    }
    function Ls(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function wo() {
      return !0;
    }
    function Bc() {
      return !1;
    }
    function ca(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = wo : this.isDefaultPrevented = Bc, this.isPropagationStopped = Bc, this;
      }
      return it(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = wo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = wo);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: wo
      }), t;
    }
    var fa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, $c = ca(fa), vu = it({}, fa, {
      view: 0,
      detail: 0
    }), hu = ca(vu), Ns, Bi, xo;
    function Vv(e) {
      e !== xo && (xo && e.type === "mousemove" ? (Ns = e.screenX - xo.screenX, Bi = e.screenY - xo.screenY) : (Ns = 0, Bi = 0), xo = e);
    }
    var bo = it({}, vu, {
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
      getModifierState: Ir,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Vv(e), Ns);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Bi;
      }
    }), zs = ca(bo), Qm = it({}, bo, {
      dataTransfer: 0
    }), Gm = ca(Qm), Pv = it({}, vu, {
      relatedTarget: 0
    }), Yc = ca(Pv), mu = it({}, fa, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Xm = ca(mu), _o = it({}, fa, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Bv = ca(_o), Yr = it({}, fa, {
      data: 0
    }), $v = ca(Yr), Yv = $v, Km = {
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
      MozPrintableKey: "Unidentified"
    }, Jm = {
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
      224: "Meta"
    };
    function Iv(e) {
      if (e.key) {
        var t = Km[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Ls(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Jm[e.keyCode] || "Unidentified" : "";
    }
    var Wv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Zm(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = Wv[e];
      return i ? !!a[i] : !1;
    }
    function Ir(e) {
      return Zm;
    }
    var Md = it({}, vu, {
      key: Iv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ir,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Ls(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ls(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ey = ca(Md), Ml = it({}, bo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Us = ca(Ml), yu = it({}, vu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ir
    }), Ic = ca(yu), Ld = it({}, fa, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Nd = ca(Ld), ty = it({}, bo, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), zd = ca(ty), ny = [9, 13, 27, 32], Ud = 229, Wc = on && "CompositionEvent" in window, Ll = null;
    on && "documentMode" in document && (Ll = document.documentMode);
    var qc = on && "TextEvent" in window && !Ll, Ad = on && (!Wc || Ll && Ll > 8 && Ll <= 11), Qc = 32, qv = String.fromCharCode(Qc);
    function Qv() {
      ir("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ir("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ir("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ir("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Gc = !1;
    function Xc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Fd(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Kc(e, t) {
      return e === "keydown" && t.keyCode === Ud;
    }
    function Hd(e, t) {
      switch (e) {
        case "keyup":
          return ny.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ud;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Gv(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function As(e) {
      return e.locale === "ko";
    }
    var ko = !1;
    function Fs(e, t, a, i, u) {
      var s, f;
      if (Wc ? s = Fd(t) : ko ? Hd(t, i) && (s = "onCompositionEnd") : Kc(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Ad && !As(i) && (!ko && s === "onCompositionStart" ? ko = Ol(u) : s === "onCompositionEnd" && ko && (f = Ms()));
      var p = Zv(a, s);
      if (p.length > 0) {
        var v = new $v(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Gv(i);
          y !== null && (v.data = y);
        }
      }
    }
    function ry(e, t) {
      switch (e) {
        case "compositionend":
          return Gv(t);
        case "keypress":
          var a = t.which;
          return a !== Qc ? null : (Gc = !0, qv);
        case "textInput":
          var i = t.data;
          return i === qv && Gc ? null : i;
        default:
          return null;
      }
    }
    function Jc(e, t) {
      if (ko) {
        if (e === "compositionend" || !Wc && Hd(e, t)) {
          var a = Ms();
          return wa(), ko = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Xc(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Ad && !As(t) ? null : t.data;
        default:
          return null;
      }
    }
    function n(e, t, a, i, u) {
      var s;
      if (qc ? s = ry(t, i) : s = Jc(t, i), !s)
        return null;
      var f = Zv(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new Yv("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function r(e, t, a, i, u, s, f) {
      Fs(e, t, a, i, u), n(e, t, a, i, u);
    }
    var l = {
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
      week: !0
    };
    function o(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!l[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function c(e) {
      if (!on)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function d() {
      ir("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function m(e, t, a, i) {
      Iu(i);
      var u = Zv(t, "onChange");
      if (u.length > 0) {
        var s = new $c("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var S = null, w = null;
    function z(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function $(e) {
      var t = [];
      m(t, w, e, Wt(e)), os(Ee, t);
    }
    function Ee(e) {
      l0(e, 0);
    }
    function Q(e) {
      var t = lf(e);
      if (Wl(t))
        return e;
    }
    function oe(e, t) {
      if (e === "change")
        return t;
    }
    var X = !1;
    on && (X = c("input") && (!document.documentMode || document.documentMode > 9));
    function Ye(e, t) {
      S = e, w = t, S.attachEvent("onpropertychange", k);
    }
    function Jt() {
      S && (S.detachEvent("onpropertychange", k), S = null, w = null);
    }
    function k(e) {
      e.propertyName === "value" && Q(w) && $(e);
    }
    function x(e, t, a) {
      e === "focusin" ? (Jt(), Ye(t, a)) : e === "focusout" && Jt();
    }
    function M(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Q(w);
    }
    function W(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function pe(e, t) {
      if (e === "click")
        return Q(t);
    }
    function be(e, t) {
      if (e === "input" || e === "change")
        return Q(t);
    }
    function Oe(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || fe(e, "number", e.value);
    }
    function Le(e, t, a, i, u, s, f) {
      var p = a ? lf(a) : window, v, y;
      if (z(p) ? v = oe : o(p) ? X ? v = be : (v = M, y = x) : W(p) && (v = pe), v) {
        var g = v(t, a);
        if (g) {
          m(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && Oe(p);
    }
    function In() {
      kr("onMouseEnter", ["mouseout", "mouseover"]), kr("onMouseLeave", ["mouseout", "mouseover"]), kr("onPointerEnter", ["pointerout", "pointerover"]), kr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function _t(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !fv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Vs(y) || tp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var _, N;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (_ = a, N = U ? Vs(U) : null, N !== null) {
            var P = Ni(N);
            (N !== P || N.tag !== ie && N.tag !== Ve) && (N = null);
          }
        } else
          _ = null, N = a;
        if (_ !== N) {
          var Se = zs, He = "onMouseLeave", ke = "onMouseEnter", Ft = "mouse";
          (t === "pointerout" || t === "pointerover") && (Se = Us, He = "onPointerLeave", ke = "onPointerEnter", Ft = "pointer");
          var Pt = _ == null ? g : lf(_), O = N == null ? g : lf(N), H = new Se(He, Ft + "leave", _, i, u);
          H.target = Pt, H.relatedTarget = O;
          var D = null, q = Vs(u);
          if (q === a) {
            var ge = new Se(ke, Ft + "enter", N, i, u);
            ge.target = O, ge.relatedTarget = Pt, D = ge;
          }
          pR(e, H, D, _, N);
        }
      }
    }
    function Nl(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var xa = typeof Object.is == "function" ? Object.is : Nl;
    function jd(e, t) {
      if (xa(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Vn.call(t, s) || !xa(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function WS(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function I1(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function qS(e, t) {
      for (var a = WS(e), i = 0, u = 0; a; ) {
        if (a.nodeType === xi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = WS(I1(a));
      }
    }
    function W1(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return q1(e, u, s, f, p);
    }
    function q1(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e:
        for (; ; ) {
          for (var _ = null; g === t && (a === 0 || g.nodeType === xi) && (f = s + a), g === i && (u === 0 || g.nodeType === xi) && (p = s + u), g.nodeType === xi && (s += g.nodeValue.length), (_ = g.firstChild) !== null; )
            b = g, g = _;
          for (; ; ) {
            if (g === e)
              break e;
            if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (_ = g.nextSibling) !== null)
              break;
            g = b, b = g.parentNode;
          }
          g = _;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function Q1(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = qS(e, f), g = qS(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function QS(e) {
      return e && e.nodeType === xi;
    }
    function GS(e, t) {
      return !e || !t ? !1 : e === t ? !0 : QS(e) ? !1 : QS(t) ? GS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function G1(e) {
      return e && e.ownerDocument && GS(e.ownerDocument.documentElement, e);
    }
    function X1(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function XS() {
      for (var e = window, t = ni(); t instanceof e.HTMLIFrameElement; ) {
        if (X1(t))
          e = t.contentWindow;
        else
          return t;
        t = ni(e.document);
      }
      return t;
    }
    function ay(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function K1() {
      var e = XS();
      return {
        focusedElem: e,
        selectionRange: ay(e) ? Z1(e) : null
      };
    }
    function J1(e) {
      var t = XS(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && G1(a)) {
        i !== null && ay(a) && eR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Ar && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function Z1(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = W1(e), t || {
        start: 0,
        end: 0
      };
    }
    function eR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : Q1(e, t);
    }
    var tR = on && "documentMode" in document && document.documentMode <= 11;
    function nR() {
      ir("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Zc = null, iy = null, Vd = null, ly = !1;
    function rR(e) {
      if ("selectionStart" in e && ay(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function aR(e) {
      return e.window === e ? e.document : e.nodeType === aa ? e : e.ownerDocument;
    }
    function KS(e, t, a) {
      var i = aR(a);
      if (!(ly || Zc == null || Zc !== ni(i))) {
        var u = rR(Zc);
        if (!Vd || !jd(Vd, u)) {
          Vd = u;
          var s = Zv(iy, "onSelect");
          if (s.length > 0) {
            var f = new $c("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = Zc;
          }
        }
      }
    }
    function iR(e, t, a, i, u, s, f) {
      var p = a ? lf(a) : window;
      switch (t) {
        case "focusin":
          (o(p) || p.contentEditable === "true") && (Zc = p, iy = a, Vd = null);
          break;
        case "focusout":
          Zc = null, iy = null, Vd = null;
          break;
        case "mousedown":
          ly = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ly = !1, KS(e, i, u);
          break;
        case "selectionchange":
          if (tR)
            break;
        case "keydown":
        case "keyup":
          KS(e, i, u);
      }
    }
    function Xv(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var ef = {
      animationend: Xv("Animation", "AnimationEnd"),
      animationiteration: Xv("Animation", "AnimationIteration"),
      animationstart: Xv("Animation", "AnimationStart"),
      transitionend: Xv("Transition", "TransitionEnd")
    }, uy = {}, JS = {};
    on && (JS = document.createElement("div").style, "AnimationEvent" in window || (delete ef.animationend.animation, delete ef.animationiteration.animation, delete ef.animationstart.animation), "TransitionEvent" in window || delete ef.transitionend.transition);
    function Kv(e) {
      if (uy[e])
        return uy[e];
      if (!ef[e])
        return e;
      var t = ef[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in JS)
          return uy[e] = t[a];
      return e;
    }
    var ZS = Kv("animationend"), e0 = Kv("animationiteration"), t0 = Kv("animationstart"), n0 = Kv("transitionend"), r0 = /* @__PURE__ */ new Map(), a0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Do(e, t) {
      r0.set(e, t), ir(t, [e]);
    }
    function lR() {
      for (var e = 0; e < a0.length; e++) {
        var t = a0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Do(a, "on" + i);
      }
      Do(ZS, "onAnimationEnd"), Do(e0, "onAnimationIteration"), Do(t0, "onAnimationStart"), Do("dblclick", "onDoubleClick"), Do("focusin", "onFocus"), Do("focusout", "onBlur"), Do(n0, "onTransitionEnd");
    }
    function uR(e, t, a, i, u, s, f) {
      var p = r0.get(t);
      if (p !== void 0) {
        var v = $c, y = t;
        switch (t) {
          case "keypress":
            if (Ls(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = ey;
            break;
          case "focusin":
            y = "focus", v = Yc;
            break;
          case "focusout":
            y = "blur", v = Yc;
            break;
          case "beforeblur":
          case "afterblur":
            v = Yc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = zs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Gm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Ic;
            break;
          case ZS:
          case e0:
          case t0:
            v = Xm;
            break;
          case n0:
            v = Nd;
            break;
          case "scroll":
            v = hu;
            break;
          case "wheel":
            v = zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Bv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Us;
            break;
        }
        var g = (s & ls) !== 0;
        {
          var b = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", _ = fR(a, p, i.type, g, b);
          if (_.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: _
            });
          }
        }
      }
    }
    lR(), In(), d(), nR(), Qv();
    function oR(e, t, a, i, u, s, f) {
      uR(e, t, a, i, u, s);
      var p = (s & Vm) === 0;
      p && (_t(e, t, a, i, u), Le(e, t, a, i, u), iR(e, t, a, i, u), r(e, t, a, i, u));
    }
    var Pd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], oy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Pd));
    function i0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Bm(i, t, void 0, e), e.currentTarget = null;
    }
    function sR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          i0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, _ = g.currentTarget, N = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          i0(e, N, _), i = b;
        }
    }
    function l0(e, t) {
      for (var a = (t & ls) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        sR(s, f, a);
      }
      $m();
    }
    function cR(e, t, a, i, u) {
      var s = Wt(a), f = [];
      oR(f, e, i, a, s, t), l0(f, t);
    }
    function pn(e, t) {
      oy.has(e) || E('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = VT(t), u = vR(e);
      i.has(u) || (u0(t, e, is, a), i.add(u));
    }
    function sy(e, t, a) {
      oy.has(e) && !t && E('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ls), u0(a, e, i, t);
    }
    var Jv = "_reactListening" + Math.random().toString(36).slice(2);
    function Bd(e) {
      if (!e[Jv]) {
        e[Jv] = !0, Ze.forEach(function(a) {
          a !== "selectionchange" && (oy.has(a) || sy(a, !1, e), sy(a, !0, e));
        });
        var t = e.nodeType === aa ? e : e.ownerDocument;
        t !== null && (t[Jv] || (t[Jv] = !0, sy("selectionchange", !1, t)));
      }
    }
    function u0(e, t, a, i, u) {
      var s = $r(e, t, a), f = void 0;
      Kf && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Os(e, t, s, f) : Pc(e, t, s) : f !== void 0 ? Od(e, t, s, f) : kl(e, t, s);
    }
    function o0(e, t) {
      return e === t || e.nodeType === hn && e.parentNode === t;
    }
    function cy(e, t, a, i, u) {
      var s = i;
      if (!(t & dc) && !(t & is)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === re || v === he) {
                var y = p.stateNode.containerInfo;
                if (o0(y, f))
                  break;
                if (v === he)
                  for (var g = p.return; g !== null; ) {
                    var b = g.tag;
                    if (b === re || b === he) {
                      var _ = g.stateNode.containerInfo;
                      if (o0(_, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var N = Vs(y);
                  if (N === null)
                    return;
                  var U = N.tag;
                  if (U === ie || U === Ve) {
                    p = s = N;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      os(function() {
        return cR(e, t, a, s);
      });
    }
    function $d(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function fR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, _ = b.stateNode, N = b.tag;
        if (N === ie && _ !== null && (g = _, p !== null)) {
          var U = Kl(y, p);
          U != null && v.push($d(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function Zv(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ie && f !== null) {
          var v = f, y = Kl(u, a);
          y != null && i.unshift($d(u, y, v));
          var g = Kl(u, t);
          g != null && i.push($d(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function tf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ie);
      return e || null;
    }
    function dR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = tf(s))
        u++;
      for (var f = 0, p = i; p; p = tf(p))
        f++;
      for (; u - f > 0; )
        a = tf(a), u--;
      for (; f - u > 0; )
        i = tf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = tf(a), i = tf(i);
      }
      return null;
    }
    function s0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ie && g !== null) {
          var _ = g;
          if (u) {
            var N = Kl(p, s);
            N != null && f.unshift($d(p, N, _));
          } else if (!u) {
            var U = Kl(p, s);
            U != null && f.push($d(p, U, _));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function pR(e, t, a, i, u) {
      var s = i && u ? dR(i, u) : null;
      i !== null && s0(e, t, i, s, !1), u !== null && a !== null && s0(e, a, u, s, !0);
    }
    function vR(e, t) {
      return e + "__bubble";
    }
    var ba = !1, Yd = "dangerouslySetInnerHTML", eh = "suppressContentEditableWarning", Id = "suppressHydrationWarning", c0 = "autoFocus", Hs = "children", js = "style", th = "__html", fy, Wd, nh, qd, f0, rh, d0, p0;
    fy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, nh = function(e, t) {
      Yu(e, t), iv(e, t), gl(e, t, {
        registrationNameDependencies: Mt,
        possibleRegistrationNames: _r
      });
    }, d0 = on && !document.documentMode, qd = function(e, t, a) {
      if (!ba) {
        var i = ah(a), u = ah(t);
        u !== i && (ba = !0, E("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, f0 = function(e) {
      if (!ba) {
        ba = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), E("Extra attributes from the server: %s", t);
      }
    }, rh = function(e, t) {
      t === !1 ? E("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : E("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, p0 = function(e, t) {
      var a = e.namespaceURI === wi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var hR = /\r\n?/g, mR = /\u0000|\uFFFD/g;
    function ah(e) {
      Mr(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(hR, `
`).replace(mR, "");
    }
    function ih(e, t, a, i) {
      var u = ah(t), s = ah(e);
      if (s !== u && (i && (ba || (ba = !0, E('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && ye))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function v0(e) {
      return e.nodeType === aa ? e : e.ownerDocument;
    }
    function yR() {
    }
    function lh(e) {
      e.onclick = yR;
    }
    function gR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === js)
            f && Object.freeze(f), Zp(t, f);
          else if (s === Yd) {
            var p = f ? f[th] : void 0;
            p != null && Yp(t, p);
          } else if (s === Hs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && Zo(t, f);
            } else
              typeof f == "number" && Zo(t, "" + f);
          else
            s === eh || s === Id || s === c0 || (Mt.hasOwnProperty(s) ? f != null && (typeof f != "function" && rh(s, f), s === "onScroll" && pn("scroll", t)) : f != null && na(t, s, f, u));
        }
    }
    function SR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === js ? Zp(e, f) : s === Yd ? Yp(e, f) : s === Hs ? Zo(e, f) : na(e, s, f, i);
      }
    }
    function ER(e, t, a, i) {
      var u, s = v0(a), f, p = i;
      if (p === wi && (p = Af(e)), p === wi) {
        if (u = Ql(e, t), !u && e !== e.toLowerCase() && E("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === wi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Vn.call(fy, e) && (fy[e] = !0, E("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function CR(e, t) {
      return v0(t).createTextNode(e);
    }
    function RR(e, t, a, i) {
      var u = Ql(t, a);
      nh(t, a);
      var s;
      switch (t) {
        case "dialog":
          pn("cancel", e), pn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          pn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Pd.length; f++)
            pn(Pd[f], e);
          s = a;
          break;
        case "source":
          pn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          pn("error", e), pn("load", e), s = a;
          break;
        case "details":
          pn("toggle", e), s = a;
          break;
        case "input":
          h(e, a), s = vl(e, a), pn("invalid", e);
          break;
        case "option":
          Vt(e, a), s = a;
          break;
        case "select":
          rc(e, a), s = Pu(e, a), pn("invalid", e);
          break;
        case "textarea":
          Bp(e, a), s = Uf(e, a), pn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ns(t, s), gR(t, e, i, s, u), t) {
        case "input":
          Fu(e), F(e, a, !1);
          break;
        case "textarea":
          Fu(e), ic(e);
          break;
        case "option":
          Ut(e, a);
          break;
        case "select":
          ac(e, a);
          break;
        default:
          typeof s.onClick == "function" && lh(e);
          break;
      }
    }
    function TR(e, t, a, i, u) {
      nh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = vl(e, a), p = vl(e, i), s = [];
          break;
        case "select":
          f = Pu(e, a), p = Pu(e, i), s = [];
          break;
        case "textarea":
          f = Uf(e, a), p = Uf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && lh(e);
          break;
      }
      ns(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === js) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === Yd || v === Hs || v === eh || v === Id || v === c0 || (Mt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var _ = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || _ === N || _ == null && N == null))
          if (v === js)
            if (_ && Object.freeze(_), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!_ || !_.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in _)
                _.hasOwnProperty(y) && N[y] !== _[y] && (g || (g = {}), g[y] = _[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = _;
          else if (v === Yd) {
            var U = _ ? _[th] : void 0, P = N ? N[th] : void 0;
            U != null && P !== U && (s = s || []).push(v, U);
          } else
            v === Hs ? (typeof _ == "string" || typeof _ == "number") && (s = s || []).push(v, "" + _) : v === eh || v === Id || (Mt.hasOwnProperty(v) ? (_ != null && (typeof _ != "function" && rh(v, _), v === "onScroll" && pn("scroll", e)), !s && N !== _ && (s = [])) : (s = s || []).push(v, _));
      }
      return g && (ev(g, p[js]), (s = s || []).push(js, g)), s;
    }
    function wR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && C(e, u);
      var s = Ql(a, i), f = Ql(a, u);
      switch (SR(e, t, s, f), a) {
        case "input":
          L(e, u);
          break;
        case "textarea":
          $p(e, u);
          break;
        case "select":
          zf(e, u);
          break;
      }
    }
    function xR(e) {
      {
        var t = e.toLowerCase();
        return sc.hasOwnProperty(t) && sc[t] || null;
      }
    }
    function bR(e, t, a, i, u, s, f) {
      var p, v;
      switch (Wd = a[Id] === !0, p = Ql(t, a), nh(t, a), t) {
        case "dialog":
          pn("cancel", e), pn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          pn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Pd.length; y++)
            pn(Pd[y], e);
          break;
        case "source":
          pn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          pn("error", e), pn("load", e);
          break;
        case "details":
          pn("toggle", e);
          break;
        case "input":
          h(e, a), pn("invalid", e);
          break;
        case "option":
          Vt(e, a);
          break;
        case "select":
          rc(e, a), pn("invalid", e);
          break;
        case "textarea":
          Bp(e, a), pn("invalid", e);
          break;
      }
      ns(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var _ = g[b].name.toLowerCase();
          switch (_) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var N = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var P = a[U];
          if (U === Hs)
            typeof P == "string" ? e.textContent !== P && (Wd || ih(e.textContent, P, s, f), N = [Hs, P]) : typeof P == "number" && e.textContent !== "" + P && (Wd || ih(e.textContent, P, s, f), N = [Hs, "" + P]);
          else if (Mt.hasOwnProperty(U))
            P != null && (typeof P != "function" && rh(U, P), U === "onScroll" && pn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var Se = void 0, He = p && Pe ? null : dr(U);
            if (!Wd) {
              if (!(U === eh || U === Id || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === Yd) {
                  var ke = e.innerHTML, Ft = P ? P[th] : void 0;
                  if (Ft != null) {
                    var Pt = p0(e, Ft);
                    Pt !== ke && qd(U, ke, Pt);
                  }
                } else if (U === js) {
                  if (v.delete(U), d0) {
                    var O = jm(P);
                    Se = e.getAttribute("style"), O !== Se && qd(U, Se, O);
                  }
                } else if (p && !Pe)
                  v.delete(U.toLowerCase()), Se = Xa(e, U, P), P !== Se && qd(U, Se, P);
                else if (!cn(U, He, p) && !jt(U, P, He, p)) {
                  var H = !1;
                  if (He !== null)
                    v.delete(He.attributeName), Se = ta(e, U, P, He);
                  else {
                    var D = i;
                    if (D === wi && (D = Af(t)), D === wi)
                      v.delete(U.toLowerCase());
                    else {
                      var q = xR(U);
                      q !== null && q !== U && (H = !0, v.delete(q)), v.delete(U);
                    }
                    Se = Xa(e, U, P);
                  }
                  var ge = Pe;
                  !ge && P !== Se && !H && qd(U, Se, P);
                }
              }
            }
          }
        }
      switch (f && v.size > 0 && !Wd && f0(v), t) {
        case "input":
          Fu(e), F(e, a, !0);
          break;
        case "textarea":
          Fu(e), ic(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && lh(e);
          break;
      }
      return N;
    }
    function _R(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function dy(e, t) {
      {
        if (ba)
          return;
        ba = !0, E("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function py(e, t) {
      {
        if (ba)
          return;
        ba = !0, E('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function vy(e, t, a) {
      {
        if (ba)
          return;
        ba = !0, E("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function hy(e, t) {
      {
        if (t === "" || ba)
          return;
        ba = !0, E('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function kR(e, t, a) {
      switch (t) {
        case "input":
          I(e, a);
          return;
        case "textarea":
          Om(e, a);
          return;
        case "select":
          Vp(e, a);
          return;
      }
    }
    var Qd = function() {
    }, Gd = function() {
    };
    {
      var DR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], h0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], OR = h0.concat(["button"]), MR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], m0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Gd = function(e, t) {
        var a = it({}, e || m0), i = {
          tag: t
        };
        return h0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), OR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), DR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var LR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return MR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, NR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, y0 = {};
      Qd = function(e, t, a) {
        a = a || m0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && E("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = LR(e, u) ? null : i, f = s ? null : NR(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!y0[y]) {
            y0[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var _ = "";
              v === "table" && e === "tr" && (_ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), E("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, _);
            } else
              E("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var nf;
    nf = "suppressHydrationWarning";
    var uh = "$", oh = "/$", Xd = "$?", Kd = "$!", zR = "style", my = null;
    function UR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case aa:
        case Hf: {
          t = i === aa ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Ff(null, "");
          break;
        }
        default: {
          var s = i === hn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Ff(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Gd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function AR(e, t, a) {
      {
        var i = e, u = Ff(i.namespace, t), s = Gd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function V_(e) {
      return e;
    }
    function FR(e) {
      my = K1();
      var t = null;
      return t;
    }
    function HR(e) {
      J1(my), my = null;
    }
    function jR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Qd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Gd(f.ancestorInfo, e);
          Qd(null, p, v);
        }
        s = f.namespace;
      }
      var y = ER(e, t, a, s);
      return ep(u, y), wy(y, t), y;
    }
    function VR(e, t) {
      e.appendChild(t);
    }
    function PR(e, t, a, i, u) {
      switch (RR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function BR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Gd(f.ancestorInfo, t);
          Qd(null, p, v);
        }
      }
      return TR(e, t, a, i);
    }
    function yy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function $R(e, t, a, i) {
      {
        var u = a;
        Qd(null, e, u.ancestorInfo);
      }
      var s = CR(e, t);
      return ep(i, s), s;
    }
    function YR() {
      var e = window.event;
      return e === void 0 ? Hi : Ds(e.type);
    }
    var gy = typeof setTimeout == "function" ? setTimeout : void 0, IR = typeof clearTimeout == "function" ? clearTimeout : void 0, Sy = -1, g0 = typeof Promise == "function" ? Promise : void 0, WR = typeof queueMicrotask == "function" ? queueMicrotask : typeof g0 < "u" ? function(e) {
      return g0.resolve(null).then(e).catch(qR);
    } : gy;
    function qR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function QR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function GR(e, t, a, i, u, s) {
      wR(e, t, a, i, u), wy(e, u);
    }
    function S0(e) {
      Zo(e, "");
    }
    function XR(e, t, a) {
      e.nodeValue = a;
    }
    function KR(e, t) {
      e.appendChild(t);
    }
    function JR(e, t) {
      var a;
      e.nodeType === hn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && lh(a);
    }
    function ZR(e, t, a) {
      e.insertBefore(t, a);
    }
    function eT(e, t, a) {
      e.nodeType === hn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function tT(e, t) {
      e.removeChild(t);
    }
    function nT(e, t) {
      e.nodeType === hn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Ey(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === hn) {
          var s = u.data;
          if (s === oh)
            if (i === 0) {
              e.removeChild(u), pu(t);
              return;
            } else
              i--;
          else
            (s === uh || s === Xd || s === Kd) && i++;
        }
        a = u;
      } while (a);
      pu(t);
    }
    function rT(e, t) {
      e.nodeType === hn ? Ey(e.parentNode, t) : e.nodeType === Ar && Ey(e, t), pu(e);
    }
    function aT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function iT(e) {
      e.nodeValue = "";
    }
    function lT(e, t) {
      e = e;
      var a = t[zR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = ml("display", i);
    }
    function uT(e, t) {
      e.nodeValue = t;
    }
    function oT(e) {
      if (e.nodeType === Ar)
        e.textContent = "";
      else if (e.nodeType === aa) {
        var t = e.body;
        t != null && (t.textContent = "");
      }
    }
    function sT(e, t, a) {
      return e.nodeType !== Ar || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function cT(e, t) {
      return t === "" || e.nodeType !== xi ? null : e;
    }
    function fT(e) {
      return e.nodeType !== hn ? null : e;
    }
    function E0(e) {
      return e.data === Xd;
    }
    function Cy(e) {
      return e.data === Kd;
    }
    function dT(e, t) {
      e._reactRetry = t;
    }
    function sh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Ar || t === xi)
          break;
        if (t === hn) {
          var a = e.data;
          if (a === uh || a === Kd || a === Xd)
            break;
          if (a === oh)
            return null;
        }
      }
      return e;
    }
    function Jd(e) {
      return sh(e.nextSibling);
    }
    function pT(e) {
      return sh(e.firstChild);
    }
    function vT(e) {
      return sh(e.firstChild);
    }
    function hT(e) {
      return sh(e.nextSibling);
    }
    function mT(e, t, a, i, u, s, f) {
      ep(s, e), wy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & ze) !== Me;
      return bR(e, t, a, p, i, y, f);
    }
    function yT(e, t, a, i) {
      return ep(a, e), a.mode & ze, _R(e, t);
    }
    function gT(e, t) {
      ep(t, e);
    }
    function ST(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === hn) {
          var i = t.data;
          if (i === oh) {
            if (a === 0)
              return Jd(t);
            a--;
          } else
            (i === uh || i === Kd || i === Xd) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function C0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === hn) {
          var i = t.data;
          if (i === uh || i === Kd || i === Xd) {
            if (a === 0)
              return t;
            a--;
          } else
            i === oh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function ET(e) {
      pu(e);
    }
    function CT(e) {
      pu(e);
    }
    function RT(e) {
      return e !== "head" && e !== "body";
    }
    function TT(e, t, a, i) {
      var u = !0;
      ih(t.nodeValue, a, i, u);
    }
    function wT(e, t, a, i, u, s) {
      if (t[nf] !== !0) {
        var f = !0;
        ih(i.nodeValue, u, s, f);
      }
    }
    function xT(e, t) {
      t.nodeType === Ar ? dy(e, t) : t.nodeType === hn || py(e, t);
    }
    function bT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Ar ? dy(a, t) : t.nodeType === hn || py(a, t));
      }
    }
    function _T(e, t, a, i) {
      t[nf] !== !0 && (i.nodeType === Ar ? dy(a, i) : i.nodeType === hn || py(a, i));
    }
    function kT(e, t, a) {
      vy(e, t);
    }
    function DT(e, t) {
      hy(e, t);
    }
    function OT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && vy(i, t);
      }
    }
    function MT(e, t) {
      {
        var a = e.parentNode;
        a !== null && hy(a, t);
      }
    }
    function LT(e, t, a, i, u) {
      t[nf] !== !0 && vy(a, i);
    }
    function NT(e, t, a, i) {
      t[nf] !== !0 && hy(a, i);
    }
    function zT(e, t, a) {
      t[nf];
    }
    function UT(e) {
      E("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function AT(e) {
      Bd(e);
    }
    var rf = Math.random().toString(36).slice(2), af = "__reactFiber$" + rf, Ry = "__reactProps$" + rf, Zd = "__reactContainer$" + rf, Ty = "__reactEvents$" + rf, FT = "__reactListeners$" + rf, HT = "__reactHandles$" + rf;
    function jT(e) {
      delete e[af], delete e[Ry], delete e[Ty], delete e[FT], delete e[HT];
    }
    function ep(e, t) {
      t[af] = e;
    }
    function ch(e, t) {
      t[Zd] = e;
    }
    function R0(e) {
      e[Zd] = null;
    }
    function tp(e) {
      return !!e[Zd];
    }
    function Vs(e) {
      var t = e[af];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Zd] || a[af], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = C0(e); u !== null; ) {
              var s = u[af];
              if (s)
                return s;
              u = C0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Oo(e) {
      var t = e[af] || e[Zd];
      return t && (t.tag === ie || t.tag === Ve || t.tag === Re || t.tag === re) ? t : null;
    }
    function lf(e) {
      if (e.tag === ie || e.tag === Ve)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function fh(e) {
      return e[Ry] || null;
    }
    function wy(e, t) {
      e[Ry] = t;
    }
    function VT(e) {
      var t = e[Ty];
      return t === void 0 && (t = e[Ty] = /* @__PURE__ */ new Set()), t;
    }
    var T0 = {}, w0 = A.ReactDebugCurrentFrame;
    function dh(e) {
      if (e) {
        var t = e._owner, a = vt(e.type, e._source, t ? t.type : null);
        w0.setExtraStackFrame(a);
      } else
        w0.setExtraStackFrame(null);
    }
    function $i(e, t, a, i, u) {
      {
        var s = Function.call.bind(Vn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (dh(u), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), dh(null)), p instanceof Error && !(p.message in T0) && (T0[p.message] = !0, dh(u), E("Failed %s type: %s", a, p.message), dh(null));
          }
      }
    }
    var xy = [], ph;
    ph = [];
    var gu = -1;
    function Mo(e) {
      return {
        current: e
      };
    }
    function Wr(e, t) {
      if (gu < 0) {
        E("Unexpected pop.");
        return;
      }
      t !== ph[gu] && E("Unexpected Fiber popped."), e.current = xy[gu], xy[gu] = null, ph[gu] = null, gu--;
    }
    function qr(e, t, a) {
      gu++, xy[gu] = e.current, ph[gu] = a, e.current = t;
    }
    var by;
    by = {};
    var Ya = {};
    Object.freeze(Ya);
    var Su = Mo(Ya), zl = Mo(!1), _y = Ya;
    function uf(e, t, a) {
      return a && Ul(t) ? _y : Su.current;
    }
    function x0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function of(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Ya;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Be(e) || "Unknown";
          $i(i, s, "context", p);
        }
        return u && x0(e, t, s), s;
      }
    }
    function vh() {
      return zl.current;
    }
    function Ul(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function hh(e) {
      Wr(zl, e), Wr(Su, e);
    }
    function ky(e) {
      Wr(zl, e), Wr(Su, e);
    }
    function b0(e, t, a) {
      {
        if (Su.current !== Ya)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        qr(Su, t, e), qr(zl, a, e);
      }
    }
    function _0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Be(e) || "Unknown";
            by[s] || (by[s] = !0, E("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Be(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Be(e) || "Unknown";
          $i(u, f, "child context", v);
        }
        return it({}, a, f);
      }
    }
    function mh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ya;
        return _y = Su.current, qr(Su, a, e), qr(zl, zl.current, e), !0;
      }
    }
    function k0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = _0(e, t, _y);
          i.__reactInternalMemoizedMergedChildContext = u, Wr(zl, e), Wr(Su, e), qr(Su, u, e), qr(zl, a, e);
        } else
          Wr(zl, e), qr(zl, a, e);
      }
    }
    function PT(e) {
      {
        if (!Tl(e) || e.tag !== ve)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case re:
              return t.stateNode.context;
            case ve: {
              var a = t.type;
              if (Ul(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Lo = 0, yh = 1, Eu = null, Dy = !1, Oy = !1;
    function D0(e) {
      Eu === null ? Eu = [e] : Eu.push(e);
    }
    function BT(e) {
      Dy = !0, D0(e);
    }
    function O0() {
      Dy && No();
    }
    function No() {
      if (!Oy && Eu !== null) {
        Oy = !0;
        var e = 0, t = Ba();
        try {
          var a = !0, i = Eu;
          for (G(xn); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Eu = null, Dy = !1;
        } catch (s) {
          throw Eu !== null && (Eu = Eu.slice(e + 1)), ld(ru, No), s;
        } finally {
          G(t), Oy = !1;
        }
      }
      return null;
    }
    var $T = A.ReactCurrentBatchConfig, YT = null;
    function IT() {
      return $T.transition;
    }
    var Yi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var WT = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & dt && (t = a), a = a.return;
        return t;
      }, Ps = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, np = [], rp = [], ap = [], ip = [], lp = [], up = [], Bs = /* @__PURE__ */ new Set();
      Yi.recordUnsafeLifecycleWarnings = function(e, t) {
        Bs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && np.push(e), e.mode & dt && typeof t.UNSAFE_componentWillMount == "function" && rp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && ap.push(e), e.mode & dt && typeof t.UNSAFE_componentWillReceiveProps == "function" && ip.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && lp.push(e), e.mode & dt && typeof t.UNSAFE_componentWillUpdate == "function" && up.push(e));
      }, Yi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        np.length > 0 && (np.forEach(function(_) {
          e.add(Be(_) || "Component"), Bs.add(_.type);
        }), np = []);
        var t = /* @__PURE__ */ new Set();
        rp.length > 0 && (rp.forEach(function(_) {
          t.add(Be(_) || "Component"), Bs.add(_.type);
        }), rp = []);
        var a = /* @__PURE__ */ new Set();
        ap.length > 0 && (ap.forEach(function(_) {
          a.add(Be(_) || "Component"), Bs.add(_.type);
        }), ap = []);
        var i = /* @__PURE__ */ new Set();
        ip.length > 0 && (ip.forEach(function(_) {
          i.add(Be(_) || "Component"), Bs.add(_.type);
        }), ip = []);
        var u = /* @__PURE__ */ new Set();
        lp.length > 0 && (lp.forEach(function(_) {
          u.add(Be(_) || "Component"), Bs.add(_.type);
        }), lp = []);
        var s = /* @__PURE__ */ new Set();
        if (up.length > 0 && (up.forEach(function(_) {
          s.add(Be(_) || "Component"), Bs.add(_.type);
        }), up = []), t.size > 0) {
          var f = Ps(t);
          E(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ps(i);
          E(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ps(s);
          E(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Ps(e);
          tt(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ps(a);
          tt(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Ps(u);
          tt(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var gh = /* @__PURE__ */ new Map(), M0 = /* @__PURE__ */ new Set();
      Yi.recordLegacyContextWarning = function(e, t) {
        var a = WT(e);
        if (a === null) {
          E("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!M0.has(e.type)) {
          var i = gh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], gh.set(a, i)), i.push(e));
        }
      }, Yi.flushLegacyContextWarning = function() {
        gh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Be(s) || "Component"), M0.add(s.type);
            });
            var u = Ps(i);
            try {
              Mn(a), E(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Xt();
            }
          }
        });
      }, Yi.discardPendingWarnings = function() {
        np = [], rp = [], ap = [], ip = [], lp = [], up = [], gh = /* @__PURE__ */ new Map();
      };
    }
    function Ii(e, t) {
      if (e && e.defaultProps) {
        var a = it({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var My = Mo(null), Ly;
    Ly = {};
    var Sh = null, sf = null, Ny = null, Eh = !1;
    function Ch() {
      Sh = null, sf = null, Ny = null, Eh = !1;
    }
    function L0() {
      Eh = !0;
    }
    function N0() {
      Eh = !1;
    }
    function z0(e, t, a) {
      qr(My, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Ly && E("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Ly;
    }
    function zy(e, t) {
      var a = My.current;
      Wr(My, t), e._currentValue = a;
    }
    function Uy(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (bl(i.childLanes, t) ? u !== null && !bl(u.childLanes, t) && (u.childLanes = Ke(u.childLanes, t)) : (i.childLanes = Ke(i.childLanes, t), u !== null && (u.childLanes = Ke(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && E("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function qT(e, t, a) {
      QT(e, t, a);
    }
    function QT(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ve) {
                var p = so(a), v = Cu(Kt, p);
                v.tag = Rh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = Ke(i.lanes, a);
              var _ = i.alternate;
              _ !== null && (_.lanes = Ke(_.lanes, a)), Uy(i.return, a, e), s.lanes = Ke(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === rt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Ht) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = Ke(N.lanes, a);
          var U = N.alternate;
          U !== null && (U.lanes = Ke(U.lanes, a)), Uy(N, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var P = u.sibling;
            if (P !== null) {
              P.return = u.return, u = P;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function cf(e, t) {
      Sh = e, sf = null, Ny = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Pr(a.lanes, t) && um(), a.firstContext = null);
      }
    }
    function Wn(e) {
      Eh && E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Ny !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (sf === null) {
          if (Sh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          sf = a, Sh.dependencies = {
            lanes: Y,
            firstContext: a
          };
        } else
          sf = sf.next = a;
      }
      return t;
    }
    var $s = null;
    function U0(e) {
      $s === null ? $s = [e] : $s.push(e);
    }
    function GT() {
      if ($s !== null) {
        for (var e = 0; e < $s.length; e++) {
          var t = $s[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        $s = null;
      }
    }
    var A0 = 0, F0 = 1, Rh = 2, Ay = 3, Th = !1, Fy, wh;
    Fy = !1, wh = null;
    function Hy(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: Y
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function H0(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Cu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: A0,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function zo(e, t, a) {
      var i = e.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (AC(e)) {
          var s = u.interleaved;
          s === null ? (t.next = t, U0(u)) : (t.next = s.next, s.next = t), u.interleaved = t;
        } else {
          var f = u.pending;
          f === null ? t.next = t : (t.next = f.next, f.next = t), u.pending = t;
        }
        wh === u && !Fy && (E("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Fy = !0);
      }
    }
    function xh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Mv(a)) {
          var s = u.lanes;
          s = Sd(s, e.pendingLanes);
          var f = Ke(s, a);
          u.lanes = f, vo(e, f);
        }
      }
    }
    function jy(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function XT(e, t, a, i, u, s) {
      switch (a.tag) {
        case F0: {
          var f = a.payload;
          if (typeof f == "function") {
            L0();
            var p = f.call(s, i, u);
            {
              if (e.mode & dt) {
                Ln(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Ln(!1);
                }
              }
              N0();
            }
            return p;
          }
          return f;
        }
        case Ay:
          e.flags = e.flags & ~wn | ut;
        case A0: {
          var v = a.payload, y;
          if (typeof v == "function") {
            L0(), y = v.call(s, i, u);
            {
              if (e.mode & dt) {
                Ln(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Ln(!1);
                }
              }
              N0();
            }
          } else
            y = v;
          return y == null ? i : it({}, i, y);
        }
        case Rh:
          return Th = !0, i;
      }
      return i;
    }
    function bh(e, t, a, i) {
      var u = e.updateQueue;
      Th = !1, wh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, _ = b.lastBaseUpdate;
          _ !== f && (_ === null ? b.firstBaseUpdate = y : _.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var N = u.baseState, U = Y, P = null, Se = null, He = null, ke = s;
        do {
          var Ft = ke.lane, Pt = ke.eventTime;
          if (bl(i, Ft)) {
            if (He !== null) {
              var H = {
                eventTime: Pt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Nn,
                tag: ke.tag,
                payload: ke.payload,
                callback: ke.callback,
                next: null
              };
              He = He.next = H;
            }
            N = XT(e, u, ke, N, t, a);
            var D = ke.callback;
            if (D !== null && // If the update was already committed, we should not queue its
            // callback again.
            ke.lane !== Nn) {
              e.flags |= Li;
              var q = u.effects;
              q === null ? u.effects = [ke] : q.push(ke);
            }
          } else {
            var O = {
              eventTime: Pt,
              lane: Ft,
              tag: ke.tag,
              payload: ke.payload,
              callback: ke.callback,
              next: null
            };
            He === null ? (Se = He = O, P = N) : He = He.next = O, U = Ke(U, Ft);
          }
          if (ke = ke.next, ke === null) {
            if (p = u.shared.pending, p === null)
              break;
            var ge = p, de = ge.next;
            ge.next = null, ke = de, u.lastBaseUpdate = ge, u.shared.pending = null;
          }
        } while (!0);
        He === null && (P = N), u.baseState = P, u.firstBaseUpdate = Se, u.lastBaseUpdate = He;
        var gt = u.shared.interleaved;
        if (gt !== null) {
          var Bt = gt;
          do
            U = Ke(U, Bt.lane), Bt = Bt.next;
          while (Bt !== gt);
        } else
          s === null && (u.shared.lanes = Y);
        Em(U), e.lanes = U, e.memoizedState = N;
      }
      wh = null;
    }
    function KT(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function j0() {
      Th = !1;
    }
    function _h() {
      return Th;
    }
    function V0(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, KT(f, a));
        }
    }
    var Vy = {}, P0 = new Z.Component().refs, Py, By, $y, Yy, Iy, B0, kh, Wy, qy, Qy;
    {
      Py = /* @__PURE__ */ new Set(), By = /* @__PURE__ */ new Set(), $y = /* @__PURE__ */ new Set(), Yy = /* @__PURE__ */ new Set(), Wy = /* @__PURE__ */ new Set(), Iy = /* @__PURE__ */ new Set(), qy = /* @__PURE__ */ new Set(), Qy = /* @__PURE__ */ new Set();
      var $0 = /* @__PURE__ */ new Set();
      kh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          $0.has(a) || ($0.add(a), E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, B0 = function(e, t) {
        if (t === void 0) {
          var a = Rt(e) || "Component";
          Iy.has(a) || (Iy.add(a), E("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Vy, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Vy);
    }
    function Gy(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & dt) {
          Ln(!0);
          try {
            s = a(i, u);
          } finally {
            Ln(!1);
          }
        }
        B0(t, s);
      }
      var f = s == null ? u : it({}, u, s);
      if (e.memoizedState = f, e.lanes === Y) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Xy = {
      isMounted: mc,
      enqueueSetState: function(e, t, a) {
        var i = Fa(e), u = pa(), s = Bo(i), f = Cu(u, s);
        f.payload = t, a != null && (kh(a, "setState"), f.callback = a), zo(i, f);
        var p = ar(i, s, u);
        p !== null && xh(p, i, s), jr(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Fa(e), u = pa(), s = Bo(i), f = Cu(u, s);
        f.tag = F0, f.payload = t, a != null && (kh(a, "replaceState"), f.callback = a), zo(i, f);
        var p = ar(i, s, u);
        p !== null && xh(p, i, s), jr(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Fa(e), i = pa(), u = Bo(a), s = Cu(i, u);
        s.tag = Rh, t != null && (kh(t, "forceUpdate"), s.callback = t), zo(a, s);
        var f = ar(a, u, i);
        f !== null && xh(f, a, u), Ec(a, u);
      }
    };
    function Y0(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & dt) {
            Ln(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Ln(!1);
            }
          }
          v === void 0 && E("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Rt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !jd(a, i) || !jd(u, s) : !0;
    }
    function JT(e, t, a) {
      var i = e.stateNode;
      {
        var u = Rt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? E("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : E("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && E("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && E("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && E("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && E("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !qy.has(t) && (qy.add(t), E("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && E("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && E("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Rt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && E("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && E("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && E("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && E("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && E("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && E("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !$y.has(t) && ($y.add(t), E("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Rt(t))), typeof i.getDerivedStateFromProps == "function" && E("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && E("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && E("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || ft(p)) && E("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && E("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function I0(e, t) {
      t.updater = Xy, e.stateNode = t, Jf(t, e), t._reactInternalInstance = Vy;
    }
    function W0(e, t, a) {
      var i = !1, u = Ya, s = Ya, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === ne && f._context === void 0
        );
        if (!p && !Qy.has(t)) {
          Qy.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === B ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", E("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Rt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Wn(f);
      else {
        u = uf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? of(e, u) : Ya;
      }
      var g = new t(a, s);
      if (e.mode & dt) {
        Ln(!0);
        try {
          g = new t(a, s);
        } finally {
          Ln(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      I0(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var _ = Rt(t) || "Component";
          By.has(_) || (By.add(_), E("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", _, g.state === null ? "null" : "undefined", _));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, U = null, P = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? P = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (P = "UNSAFE_componentWillUpdate"), N !== null || U !== null || P !== null) {
            var Se = Rt(t) || "Component", He = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Yy.has(Se) || (Yy.add(Se), E(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Se, He, N !== null ? `
  ` + N : "", U !== null ? `
  ` + U : "", P !== null ? `
  ` + P : ""));
          }
        }
      }
      return i && x0(e, u, s), g;
    }
    function ZT(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (E("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Be(e) || "Component"), Xy.enqueueReplaceState(t, t.state, null));
    }
    function q0(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Be(e) || "Component";
          Py.has(s) || (Py.add(s), E("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Xy.enqueueReplaceState(t, t.state, null);
      }
    }
    function Ky(e, t, a, i) {
      JT(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = P0, Hy(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Wn(s);
      else {
        var f = uf(e, t, !0);
        u.context = of(e, f);
      }
      {
        if (u.state === a) {
          var p = Rt(t) || "Component";
          Wy.has(p) || (Wy.add(p), E("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & dt && Yi.recordLegacyContextWarning(e, u), Yi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Gy(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (ZT(e, u), bh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Ce;
        y |= li, (e.mode & ua) !== Me && (y |= Ha), e.flags |= y;
      }
    }
    function ew(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = Ya;
      if (typeof p == "object" && p !== null)
        v = Wn(p);
      else {
        var y = uf(e, t, !0);
        v = of(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && q0(e, u, a, v), j0();
      var _ = e.memoizedState, N = u.state = _;
      if (bh(e, a, u, i), N = e.memoizedState, s === a && _ === N && !vh() && !_h()) {
        if (typeof u.componentDidMount == "function") {
          var U = Ce;
          U |= li, (e.mode & ua) !== Me && (U |= Ha), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (Gy(e, t, g, a), N = e.memoizedState);
      var P = _h() || Y0(e, t, s, a, _, N, v);
      if (P) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Se = Ce;
          Se |= li, (e.mode & ua) !== Me && (Se |= Ha), e.flags |= Se;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var He = Ce;
          He |= li, (e.mode & ua) !== Me && (He |= Ha), e.flags |= He;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, P;
    }
    function tw(e, t, a, i, u) {
      var s = t.stateNode;
      H0(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Ii(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = Ya;
      if (typeof g == "object" && g !== null)
        b = Wn(g);
      else {
        var _ = uf(t, a, !0);
        b = of(t, _);
      }
      var N = a.getDerivedStateFromProps, U = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && q0(t, s, i, b), j0();
      var P = t.memoizedState, Se = s.state = P;
      if (bh(t, i, s, u), Se = t.memoizedState, f === v && P === Se && !vh() && !_h() && !Te)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ce), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= El), !1;
      typeof N == "function" && (Gy(t, a, N, i), Se = t.memoizedState);
      var He = _h() || Y0(t, a, p, i, P, Se, b) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Te;
      return He ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, Se, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, Se, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Ce), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= El)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= Ce), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || P !== e.memoizedState) && (t.flags |= El), t.memoizedProps = i, t.memoizedState = Se), s.props = i, s.state = Se, s.context = b, He;
    }
    var ff = [], df = 0, Dh = null, Oh = 0, vi = [], hi = 0, Ys = null, Ru = 1, Tu = "";
    function nw(e) {
      return Ws(), (e.flags & ga) !== we;
    }
    function rw(e) {
      return Ws(), Oh;
    }
    function aw() {
      var e = Tu, t = Ru, a = t & ~iw(t);
      return a.toString(32) + e;
    }
    function Is(e, t) {
      Ws(), ff[df++] = Oh, ff[df++] = Dh, Dh = e, Oh = t;
    }
    function Q0(e, t, a) {
      Ws(), vi[hi++] = Ru, vi[hi++] = Tu, vi[hi++] = Ys, Ys = e;
      var i = Ru, u = Tu, s = Mh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Mh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), _ = f >> y, N = s - y, U = Mh(t) + N, P = p << N, Se = P | _, He = b + u;
        Ru = 1 << U | Se, Tu = He;
      } else {
        var ke = p << s, Ft = ke | f, Pt = u;
        Ru = 1 << v | Ft, Tu = Pt;
      }
    }
    function Jy(e) {
      Ws();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Is(e, a), Q0(e, a, i);
      }
    }
    function Mh(e) {
      return 32 - eo(e);
    }
    function iw(e) {
      return 1 << Mh(e) - 1;
    }
    function Zy(e) {
      for (; e === Dh; )
        Dh = ff[--df], ff[df] = null, Oh = ff[--df], ff[df] = null;
      for (; e === Ys; )
        Ys = vi[--hi], vi[hi] = null, Tu = vi[--hi], vi[hi] = null, Ru = vi[--hi], vi[hi] = null;
    }
    function lw() {
      return Ws(), Ys !== null ? {
        id: Ru,
        overflow: Tu
      } : null;
    }
    function uw(e, t) {
      Ws(), vi[hi++] = Ru, vi[hi++] = Tu, vi[hi++] = Ys, Ru = t.id, Tu = t.overflow, Ys = e;
    }
    function Ws() {
      Qr() || E("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Er = null, mi = null, Wi = !1, pf = !1, Uo = null;
    function ow() {
      Wi && E("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function sw() {
      pf = !0;
    }
    function cw(e) {
      var t = e.stateNode.containerInfo;
      return mi = vT(t), Er = e, Wi = !0, Uo = null, pf = !1, !0;
    }
    function fw(e, t, a) {
      return mi = hT(t), Er = e, Wi = !0, Uo = null, pf = !1, a !== null && uw(e, a), !0;
    }
    function G0(e, t) {
      switch (e.tag) {
        case re:
          xT(e.stateNode.containerInfo, t);
          break;
        case ie:
          _T(e.type, e.memoizedProps, e.stateNode, t);
          break;
        case Re:
          var a = e.memoizedState;
          a.dehydrated !== null && bT(a.dehydrated, t);
          break;
      }
    }
    function X0(e, t) {
      G0(e, t);
      var a = Xb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= mn) : i.push(a);
    }
    function eg(e, t) {
      {
        if (pf)
          return;
        switch (e.tag) {
          case re: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ie:
                var i = t.type;
                t.pendingProps, kT(a, i);
                break;
              case Ve:
                var u = t.pendingProps;
                DT(a, u);
                break;
            }
            break;
          }
          case ie: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ie:
                var v = t.type;
                t.pendingProps, LT(s, f, p, v);
                break;
              case Ve:
                var y = t.pendingProps;
                NT(s, f, p, y);
                break;
              case Re:
                zT(s, f);
                break;
            }
            break;
          }
          case Re: {
            var g = e.memoizedState, b = g.dehydrated;
            if (b !== null)
              switch (t.tag) {
                case ie:
                  var _ = t.type;
                  t.pendingProps, OT(b, _);
                  break;
                case Ve:
                  var N = t.pendingProps;
                  MT(b, N);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function K0(e, t) {
      t.flags = t.flags & ~mr | Fe, eg(e, t);
    }
    function J0(e, t) {
      switch (e.tag) {
        case ie: {
          var a = e.type;
          e.pendingProps;
          var i = sT(t, a);
          return i !== null ? (e.stateNode = i, Er = e, mi = pT(i), !0) : !1;
        }
        case Ve: {
          var u = e.pendingProps, s = cT(t, u);
          return s !== null ? (e.stateNode = s, Er = e, mi = null, !0) : !1;
        }
        case Re: {
          {
            var f = fT(t);
            if (f !== null) {
              var p = {
                dehydrated: f,
                treeContext: lw(),
                retryLane: oa
              };
              e.memoizedState = p;
              var v = Kb(f);
              return v.return = e, e.child = v, Er = e, mi = null, !0;
            }
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function tg(e) {
      return (e.mode & ze) !== Me && (e.flags & ut) === we;
    }
    function ng(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function rg(e) {
      if (Wi) {
        var t = mi;
        if (!t) {
          tg(e) && (eg(Er, e), ng()), K0(Er, e), Wi = !1, Er = e;
          return;
        }
        var a = t;
        if (!J0(e, t)) {
          tg(e) && (eg(Er, e), ng()), t = Jd(a);
          var i = Er;
          if (!t || !J0(e, t)) {
            K0(Er, e), Wi = !1, Er = e;
            return;
          }
          X0(i, a);
        }
      }
    }
    function dw(e, t, a) {
      var i = e.stateNode, u = !pf, s = mT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function pw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = yT(t, a, e);
      if (i) {
        var u = Er;
        if (u !== null) {
          var s = (u.mode & ze) !== Me;
          switch (u.tag) {
            case re: {
              var f = u.stateNode.containerInfo;
              TT(
                f,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                s
              );
              break;
            }
            case ie: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode;
              wT(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                s
              );
              break;
            }
          }
        }
      }
      return i;
    }
    function vw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      gT(a, e);
    }
    function hw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ST(a);
    }
    function Z0(e) {
      for (var t = e.return; t !== null && t.tag !== ie && t.tag !== re && t.tag !== Re; )
        t = t.return;
      Er = t;
    }
    function op(e) {
      if (e !== Er)
        return !1;
      if (!Wi)
        return Z0(e), Wi = !0, !1;
      if (e.tag !== re && (e.tag !== ie || RT(e.type) && !yy(e.type, e.memoizedProps))) {
        var t = mi;
        if (t)
          if (tg(e))
            eE(e), ng();
          else
            for (; t; )
              X0(e, t), t = Jd(t);
      }
      return Z0(e), e.tag === Re ? mi = hw(e) : mi = Er ? Jd(e.stateNode) : null, !0;
    }
    function mw() {
      return Wi && mi !== null;
    }
    function eE(e) {
      for (var t = mi; t; )
        G0(e, t), t = Jd(t);
    }
    function vf() {
      Er = null, mi = null, Wi = !1, pf = !1;
    }
    function tE() {
      Uo !== null && (HC(Uo), Uo = null);
    }
    function Qr() {
      return Wi;
    }
    function ag(e) {
      Uo === null ? Uo = [e] : Uo.push(e);
    }
    var ig, lg, ug, og, sg, nE = function(e, t) {
    };
    ig = !1, lg = !1, ug = {}, og = {}, sg = {}, nE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Be(t) || "Component";
        og[a] || (og[a] = !0, E('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function sp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & dt || Ae) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Be(e) || "Component";
          ug[u] || (E('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), ug[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ve)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Pn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var _ = v.refs;
            _ === P0 && (_ = v.refs = {}), b === null ? delete _[y] : _[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Lh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Nh(e) {
      {
        var t = Be(e) || "Component";
        if (sg[t])
          return;
        sg[t] = !0, E("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function rE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function aE(e) {
      function t(O, H) {
        if (e) {
          var D = O.deletions;
          D === null ? (O.deletions = [H], O.flags |= mn) : D.push(H);
        }
      }
      function a(O, H) {
        if (!e)
          return null;
        for (var D = H; D !== null; )
          t(O, D), D = D.sibling;
        return null;
      }
      function i(O, H) {
        for (var D = /* @__PURE__ */ new Map(), q = H; q !== null; )
          q.key !== null ? D.set(q.key, q) : D.set(q.index, q), q = q.sibling;
        return D;
      }
      function u(O, H) {
        var D = Zs(O, H);
        return D.index = 0, D.sibling = null, D;
      }
      function s(O, H, D) {
        if (O.index = D, !e)
          return O.flags |= ga, H;
        var q = O.alternate;
        if (q !== null) {
          var ge = q.index;
          return ge < H ? (O.flags |= Fe, H) : ge;
        } else
          return O.flags |= Fe, H;
      }
      function f(O) {
        return e && O.alternate === null && (O.flags |= Fe), O;
      }
      function p(O, H, D, q) {
        if (H === null || H.tag !== Ve) {
          var ge = OS(D, O.mode, q);
          return ge.return = O, ge;
        } else {
          var de = u(H, D);
          return de.return = O, de;
        }
      }
      function v(O, H, D, q) {
        var ge = D.type;
        if (ge === ra)
          return g(O, H, D.props.children, q, D.key);
        if (H !== null && (H.elementType === ge || // Keep this check inline so it only runs on the false path:
        e1(H, D) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ge == "object" && ge !== null && ge.$$typeof === De && rE(ge) === H.type)) {
          var de = u(H, D.props);
          return de.ref = sp(O, H, D), de.return = O, de._debugSource = D._source, de._debugOwner = D._owner, de;
        }
        var gt = DS(D, O.mode, q);
        return gt.ref = sp(O, H, D), gt.return = O, gt;
      }
      function y(O, H, D, q) {
        if (H === null || H.tag !== he || H.stateNode.containerInfo !== D.containerInfo || H.stateNode.implementation !== D.implementation) {
          var ge = MS(D, O.mode, q);
          return ge.return = O, ge;
        } else {
          var de = u(H, D.children || []);
          return de.return = O, de;
        }
      }
      function g(O, H, D, q, ge) {
        if (H === null || H.tag !== Et) {
          var de = Yo(D, O.mode, q, ge);
          return de.return = O, de;
        } else {
          var gt = u(H, D);
          return gt.return = O, gt;
        }
      }
      function b(O, H, D) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var q = OS("" + H, O.mode, D);
          return q.return = O, q;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case Ka: {
              var ge = DS(H, O.mode, D);
              return ge.ref = sp(O, null, H), ge.return = O, ge;
            }
            case pr: {
              var de = MS(H, O.mode, D);
              return de.return = O, de;
            }
            case De: {
              var gt = H._payload, Bt = H._init;
              return b(O, Bt(gt), D);
            }
          }
          if (ft(H) || Na(H)) {
            var tn = Yo(H, O.mode, D, null);
            return tn.return = O, tn;
          }
          Lh(O, H);
        }
        return typeof H == "function" && Nh(O), null;
      }
      function _(O, H, D, q) {
        var ge = H !== null ? H.key : null;
        if (typeof D == "string" && D !== "" || typeof D == "number")
          return ge !== null ? null : p(O, H, "" + D, q);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Ka:
              return D.key === ge ? v(O, H, D, q) : null;
            case pr:
              return D.key === ge ? y(O, H, D, q) : null;
            case De: {
              var de = D._payload, gt = D._init;
              return _(O, H, gt(de), q);
            }
          }
          if (ft(D) || Na(D))
            return ge !== null ? null : g(O, H, D, q, null);
          Lh(O, D);
        }
        return typeof D == "function" && Nh(O), null;
      }
      function N(O, H, D, q, ge) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var de = O.get(D) || null;
          return p(H, de, "" + q, ge);
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Ka: {
              var gt = O.get(q.key === null ? D : q.key) || null;
              return v(H, gt, q, ge);
            }
            case pr: {
              var Bt = O.get(q.key === null ? D : q.key) || null;
              return y(H, Bt, q, ge);
            }
            case De: {
              var tn = q._payload, $t = q._init;
              return N(O, H, D, $t(tn), ge);
            }
          }
          if (ft(q) || Na(q)) {
            var kn = O.get(D) || null;
            return g(H, kn, q, ge, null);
          }
          Lh(H, q);
        }
        return typeof q == "function" && Nh(H), null;
      }
      function U(O, H, D) {
        {
          if (typeof O != "object" || O === null)
            return H;
          switch (O.$$typeof) {
            case Ka:
            case pr:
              nE(O, D);
              var q = O.key;
              if (typeof q != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(q);
                break;
              }
              if (!H.has(q)) {
                H.add(q);
                break;
              }
              E("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", q);
              break;
            case De: {
              var ge = O._payload, de = O._init;
              U(de(ge), H, D);
              break;
            }
          }
        }
        return H;
      }
      function P(O, H, D, q) {
        for (var ge = null, de = 0; de < D.length; de++) {
          var gt = D[de];
          ge = U(gt, ge, O);
        }
        for (var Bt = null, tn = null, $t = H, kn = 0, Dt = 0, pt = null; $t !== null && Dt < D.length; Dt++) {
          $t.index > Dt ? (pt = $t, $t = null) : pt = $t.sibling;
          var jn = _(O, $t, D[Dt], q);
          if (jn === null) {
            $t === null && ($t = pt);
            break;
          }
          e && $t && jn.alternate === null && t(O, $t), kn = s(jn, kn, Dt), tn === null ? Bt = jn : tn.sibling = jn, tn = jn, $t = pt;
        }
        if (Dt === D.length) {
          if (a(O, $t), Qr()) {
            var Dn = Dt;
            Is(O, Dn);
          }
          return Bt;
        }
        if ($t === null) {
          for (; Dt < D.length; Dt++) {
            var Ei = b(O, D[Dt], q);
            Ei !== null && (kn = s(Ei, kn, Dt), tn === null ? Bt = Ei : tn.sibling = Ei, tn = Ei);
          }
          if (Qr()) {
            var br = Dt;
            Is(O, br);
          }
          return Bt;
        }
        for (var Wa = i(O, $t); Dt < D.length; Dt++) {
          var qa = N(Wa, O, Dt, D[Dt], q);
          qa !== null && (e && qa.alternate !== null && Wa.delete(qa.key === null ? Dt : qa.key), kn = s(qa, kn, Dt), tn === null ? Bt = qa : tn.sibling = qa, tn = qa);
        }
        if (e && Wa.forEach(function(Mf) {
          return t(O, Mf);
        }), Qr()) {
          var Vl = Dt;
          Is(O, Vl);
        }
        return Bt;
      }
      function Se(O, H, D, q) {
        var ge = Na(D);
        if (typeof ge != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          D[Symbol.toStringTag] === "Generator" && (lg || E("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), lg = !0), D.entries === ge && (ig || E("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ig = !0);
          var de = ge.call(D);
          if (de)
            for (var gt = null, Bt = de.next(); !Bt.done; Bt = de.next()) {
              var tn = Bt.value;
              gt = U(tn, gt, O);
            }
        }
        var $t = ge.call(D);
        if ($t == null)
          throw new Error("An iterable object provided no iterator.");
        for (var kn = null, Dt = null, pt = H, jn = 0, Dn = 0, Ei = null, br = $t.next(); pt !== null && !br.done; Dn++, br = $t.next()) {
          pt.index > Dn ? (Ei = pt, pt = null) : Ei = pt.sibling;
          var Wa = _(O, pt, br.value, q);
          if (Wa === null) {
            pt === null && (pt = Ei);
            break;
          }
          e && pt && Wa.alternate === null && t(O, pt), jn = s(Wa, jn, Dn), Dt === null ? kn = Wa : Dt.sibling = Wa, Dt = Wa, pt = Ei;
        }
        if (br.done) {
          if (a(O, pt), Qr()) {
            var qa = Dn;
            Is(O, qa);
          }
          return kn;
        }
        if (pt === null) {
          for (; !br.done; Dn++, br = $t.next()) {
            var Vl = b(O, br.value, q);
            Vl !== null && (jn = s(Vl, jn, Dn), Dt === null ? kn = Vl : Dt.sibling = Vl, Dt = Vl);
          }
          if (Qr()) {
            var Mf = Dn;
            Is(O, Mf);
          }
          return kn;
        }
        for (var Lf = i(O, pt); !br.done; Dn++, br = $t.next()) {
          var Qa = N(Lf, O, Dn, br.value, q);
          Qa !== null && (e && Qa.alternate !== null && Lf.delete(Qa.key === null ? Dn : Qa.key), jn = s(Qa, jn, Dn), Dt === null ? kn = Qa : Dt.sibling = Qa, Dt = Qa);
        }
        if (e && Lf.forEach(function(VS) {
          return t(O, VS);
        }), Qr()) {
          var ec = Dn;
          Is(O, ec);
        }
        return kn;
      }
      function He(O, H, D, q) {
        if (H !== null && H.tag === Ve) {
          a(O, H.sibling);
          var ge = u(H, D);
          return ge.return = O, ge;
        }
        a(O, H);
        var de = OS(D, O.mode, q);
        return de.return = O, de;
      }
      function ke(O, H, D, q) {
        for (var ge = D.key, de = H; de !== null; ) {
          if (de.key === ge) {
            var gt = D.type;
            if (gt === ra) {
              if (de.tag === Et) {
                a(O, de.sibling);
                var Bt = u(de, D.props.children);
                return Bt.return = O, Bt._debugSource = D._source, Bt._debugOwner = D._owner, Bt;
              }
            } else if (de.elementType === gt || // Keep this check inline so it only runs on the false path:
            e1(de, D) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof gt == "object" && gt !== null && gt.$$typeof === De && rE(gt) === de.type) {
              a(O, de.sibling);
              var tn = u(de, D.props);
              return tn.ref = sp(O, de, D), tn.return = O, tn._debugSource = D._source, tn._debugOwner = D._owner, tn;
            }
            a(O, de);
            break;
          } else
            t(O, de);
          de = de.sibling;
        }
        if (D.type === ra) {
          var $t = Yo(D.props.children, O.mode, q, D.key);
          return $t.return = O, $t;
        } else {
          var kn = DS(D, O.mode, q);
          return kn.ref = sp(O, H, D), kn.return = O, kn;
        }
      }
      function Ft(O, H, D, q) {
        for (var ge = D.key, de = H; de !== null; ) {
          if (de.key === ge)
            if (de.tag === he && de.stateNode.containerInfo === D.containerInfo && de.stateNode.implementation === D.implementation) {
              a(O, de.sibling);
              var gt = u(de, D.children || []);
              return gt.return = O, gt;
            } else {
              a(O, de);
              break;
            }
          else
            t(O, de);
          de = de.sibling;
        }
        var Bt = MS(D, O.mode, q);
        return Bt.return = O, Bt;
      }
      function Pt(O, H, D, q) {
        var ge = typeof D == "object" && D !== null && D.type === ra && D.key === null;
        if (ge && (D = D.props.children), typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case Ka:
              return f(ke(O, H, D, q));
            case pr:
              return f(Ft(O, H, D, q));
            case De: {
              var de = D._payload, gt = D._init;
              return Pt(O, H, gt(de), q);
            }
          }
          if (ft(D))
            return P(O, H, D, q);
          if (Na(D))
            return Se(O, H, D, q);
          Lh(O, D);
        }
        return typeof D == "string" && D !== "" || typeof D == "number" ? f(He(O, H, "" + D, q)) : (typeof D == "function" && Nh(O), a(O, H));
      }
      return Pt;
    }
    var hf = aE(!0), iE = aE(!1);
    function yw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Zs(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Zs(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function gw(e, t) {
      for (var a = e.child; a !== null; )
        Ib(a, t), a = a.sibling;
    }
    var cp = {}, Ao = Mo(cp), fp = Mo(cp), zh = Mo(cp);
    function Uh(e) {
      if (e === cp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function lE() {
      var e = Uh(zh.current);
      return e;
    }
    function cg(e, t) {
      qr(zh, t, e), qr(fp, e, e), qr(Ao, cp, e);
      var a = UR(t);
      Wr(Ao, e), qr(Ao, a, e);
    }
    function mf(e) {
      Wr(Ao, e), Wr(fp, e), Wr(zh, e);
    }
    function fg() {
      var e = Uh(Ao.current);
      return e;
    }
    function uE(e) {
      Uh(zh.current);
      var t = Uh(Ao.current), a = AR(t, e.type);
      t !== a && (qr(fp, e, e), qr(Ao, a, e));
    }
    function dg(e) {
      fp.current === e && (Wr(Ao, e), Wr(fp, e));
    }
    var Sw = 0, oE = 1, sE = 1, dp = 2, qi = Mo(Sw);
    function pg(e, t) {
      return (e & t) !== 0;
    }
    function yf(e) {
      return e & oE;
    }
    function vg(e, t) {
      return e & oE | t;
    }
    function Ew(e, t) {
      return e | t;
    }
    function Fo(e, t) {
      qr(qi, t, e);
    }
    function gf(e) {
      Wr(qi, e);
    }
    function Cw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Ah(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Re) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || E0(i) || Cy(i))
              return t;
          }
        } else if (t.tag === xt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & ut) !== we;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Al = (
      /*   */
      0
    ), Jn = (
      /* */
      1
    ), Sf = (
      /*  */
      2
    ), Zn = (
      /*    */
      4
    ), Cr = (
      /*   */
      8
    ), hg = [];
    function mg() {
      for (var e = 0; e < hg.length; e++) {
        var t = hg[e];
        t._workInProgressVersionPrimary = null;
      }
      hg.length = 0;
    }
    function Rw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var se = A.ReactCurrentDispatcher, _a = A.ReactCurrentBatchConfig, yg, Ef;
    yg = /* @__PURE__ */ new Set();
    var Cf = Y, Zt = null, Gr = null, er = null, Fh = !1, pp = !1, vp = 0, Tw = 0, ww = 25, j = null, yi = null, Ho = -1, gg = !1;
    function At() {
      {
        var e = j;
        yi === null ? yi = [e] : yi.push(e);
      }
    }
    function te() {
      {
        var e = j;
        yi !== null && (Ho++, yi[Ho] !== e && xw(e));
      }
    }
    function Rf(e) {
      e != null && !ft(e) && E("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", j, typeof e);
    }
    function xw(e) {
      {
        var t = Be(Zt);
        if (!yg.has(t) && (yg.add(t), yi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ho; u++) {
            for (var s = yi[u], f = u === Ho ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          E(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Xr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Sg(e, t) {
      if (gg)
        return !1;
      if (t === null)
        return E("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", j), !1;
      e.length !== t.length && E(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, j, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!xa(e[a], t[a]))
          return !1;
      return !0;
    }
    function Tf(e, t, a, i, u, s) {
      Cf = s, Zt = t, yi = e !== null ? e._debugHookTypes : null, Ho = -1, gg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = Y, e !== null && e.memoizedState !== null ? se.current = ME : yi !== null ? se.current = OE : se.current = DE;
      var f = a(i, u);
      if (pp) {
        var p = 0;
        do {
          if (pp = !1, vp = 0, p >= ww)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, gg = !1, Gr = null, er = null, t.updateQueue = null, Ho = -1, se.current = LE, f = a(i, u);
        } while (pp);
      }
      se.current = Xh, t._debugHookTypes = yi;
      var v = Gr !== null && Gr.next !== null;
      if (Cf = Y, Zt = null, Gr = null, er = null, j = null, yi = null, Ho = -1, e !== null && (e.flags & $n) !== (t.flags & $n) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & ze) !== Me && E("Internal React error: Expected static flag was missing. Please notify the React team."), Fh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function wf() {
      var e = vp !== 0;
      return vp = 0, e;
    }
    function cE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ua) !== Me ? t.flags &= ~(Qu | Ha | ya | Ce) : t.flags &= ~(ya | Ce), e.lanes = co(e.lanes, a);
    }
    function fE() {
      if (se.current = Xh, Fh) {
        for (var e = Zt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Fh = !1;
      }
      Cf = Y, Zt = null, Gr = null, er = null, yi = null, Ho = -1, j = null, TE = !1, pp = !1, vp = 0;
    }
    function wu() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return er === null ? Zt.memoizedState = er = e : er = er.next = e, er;
    }
    function Fl() {
      var e;
      if (Gr === null) {
        var t = Zt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Gr.next;
      var a;
      if (er === null ? a = Zt.memoizedState : a = er.next, a !== null)
        er = a, a = er.next, Gr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Gr = e;
        var i = {
          memoizedState: Gr.memoizedState,
          baseState: Gr.baseState,
          baseQueue: Gr.baseQueue,
          queue: Gr.queue,
          next: null
        };
        er === null ? Zt.memoizedState = er = i : er = er.next = i;
      }
      return er;
    }
    function dE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Eg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Cg(e, t, a) {
      var i = wu(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Dw.bind(null, Zt, s);
      return [i.memoizedState, f];
    }
    function Rg(e, t, a) {
      var i = Fl(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = Gr, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && E("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, _ = null, N = null, U = null, P = g;
        do {
          var Se = P.lane;
          if (bl(Cf, Se)) {
            if (U !== null) {
              var ke = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Nn,
                action: P.action,
                hasEagerState: P.hasEagerState,
                eagerState: P.eagerState,
                next: null
              };
              U = U.next = ke;
            }
            if (P.hasEagerState)
              b = P.eagerState;
            else {
              var Ft = P.action;
              b = e(b, Ft);
            }
          } else {
            var He = {
              lane: Se,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            };
            U === null ? (N = U = He, _ = b) : U = U.next = He, Zt.lanes = Ke(Zt.lanes, Se), Em(Se);
          }
          P = P.next;
        } while (P !== null && P !== g);
        U === null ? _ = b : U.next = N, xa(b, i.memoizedState) || um(), i.memoizedState = b, i.baseState = _, i.baseQueue = U, u.lastRenderedState = b;
      }
      var Pt = u.interleaved;
      if (Pt !== null) {
        var O = Pt;
        do {
          var H = O.lane;
          Zt.lanes = Ke(Zt.lanes, H), Em(H), O = O.next;
        } while (O !== Pt);
      } else
        f === null && (u.lanes = Y);
      var D = u.dispatch;
      return [i.memoizedState, D];
    }
    function Tg(e, t, a) {
      var i = Fl(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        xa(p, i.memoizedState) || um(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function P_(e, t, a) {
    }
    function B_(e, t, a) {
    }
    function wg(e, t, a) {
      var i = Zt, u = wu(), s, f = Qr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Ef || s !== a() && (E("The result of getServerSnapshot should be cached to avoid an infinite loop"), Ef = !0);
      } else {
        if (s = t(), !Ef) {
          var p = t();
          xa(s, p) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Ef = !0);
        }
        var v = ym();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Fn(v, Cf) || pE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, gp(hE.bind(null, i, y, e), [e]), i.flags |= ya, mp(Jn | Cr, vE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Hh(e, t, a) {
      var i = Zt, u = Fl(), s = t();
      if (!Ef) {
        var f = t();
        xa(s, f) || (E("The result of getSnapshot should be cached to avoid an infinite loop"), Ef = !0);
      }
      var p = u.memoizedState, v = !xa(p, s);
      v && (u.memoizedState = s, um());
      var y = u.queue;
      if (qs(hE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      er !== null && er.memoizedState.tag & Jn) {
        i.flags |= ya, mp(Jn | Cr, vE.bind(null, i, y, s, t), void 0, null);
        var g = ym();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Fn(g, Cf) || pE(i, t, s);
      }
      return s;
    }
    function pE(e, t, a) {
      e.flags |= nu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Zt.updateQueue;
      if (u === null)
        u = dE(), Zt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function vE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, mE(t) && yE(e);
    }
    function hE(e, t, a) {
      var i = function() {
        mE(t) && yE(e);
      };
      return a(i);
    }
    function mE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !xa(a, i);
      } catch {
        return !0;
      }
    }
    function yE(e) {
      ar(e, qe, Kt);
    }
    function hp(e) {
      var t = wu();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: Y,
        dispatch: null,
        lastRenderedReducer: Eg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Ow.bind(null, Zt, a);
      return [t.memoizedState, i];
    }
    function jh(e) {
      return Rg(Eg);
    }
    function Vh(e) {
      return Tg(Eg);
    }
    function mp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Zt.updateQueue;
      if (s === null)
        s = dE(), Zt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function xg(e) {
      var t = wu();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Ph(e) {
      var t = Fl();
      return t.memoizedState;
    }
    function yp(e, t, a, i) {
      var u = wu(), s = i === void 0 ? null : i;
      Zt.flags |= e, u.memoizedState = mp(Jn | t, a, void 0, s);
    }
    function Bh(e, t, a, i) {
      var u = Fl(), s = i === void 0 ? null : i, f = void 0;
      if (Gr !== null) {
        var p = Gr.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Sg(s, v)) {
            u.memoizedState = mp(t, a, f, s);
            return;
          }
        }
      }
      Zt.flags |= e, u.memoizedState = mp(Jn | t, a, f, s);
    }
    function gp(e, t) {
      return (Zt.mode & ua) !== Me ? yp(Qu | ya | Cl, Cr, e, t) : yp(ya | Cl, Cr, e, t);
    }
    function qs(e, t) {
      return Bh(ya, Cr, e, t);
    }
    function bg(e, t) {
      return yp(Ce, Sf, e, t);
    }
    function $h(e, t) {
      return Bh(Ce, Sf, e, t);
    }
    function _g(e, t) {
      var a = Ce;
      return a |= li, (Zt.mode & ua) !== Me && (a |= Ha), yp(a, Zn, e, t);
    }
    function Yh(e, t) {
      return Bh(Ce, Zn, e, t);
    }
    function gE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || E("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function kg(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Ce;
      return u |= li, (Zt.mode & ua) !== Me && (u |= Ha), yp(u, Zn, gE.bind(null, t, e), i);
    }
    function Ih(e, t, a) {
      typeof t != "function" && E("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Bh(Ce, Zn, gE.bind(null, t, e), i);
    }
    function bw(e, t) {
    }
    var Wh = bw;
    function Dg(e, t) {
      var a = wu(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function qh(e, t) {
      var a = Fl(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Sg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Og(e, t) {
      var a = wu(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Qh(e, t) {
      var a = Fl(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Sg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Mg(e) {
      var t = hp(e), a = t[0], i = t[1];
      return gp(function() {
        var u = _a.transition;
        _a.transition = {};
        try {
          i(e);
        } finally {
          _a.transition = u;
        }
      }, [e]), a;
    }
    function SE(e) {
      var t = jh(), a = t[0], i = t[1];
      return qs(function() {
        var u = _a.transition;
        _a.transition = {};
        try {
          i(e);
        } finally {
          _a.transition = u;
        }
      }, [e]), a;
    }
    function EE(e) {
      var t = Vh(), a = t[0], i = t[1];
      return qs(function() {
        var u = _a.transition;
        _a.transition = {};
        try {
          i(e);
        } finally {
          _a.transition = u;
        }
      }, [e]), a;
    }
    function _w(e, t, a) {
      var i = Ba();
      G(Td(i, Fi)), e(!0);
      var u = _a.transition;
      _a.transition = {};
      var s = _a.transition;
      _a.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (G(i), _a.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && tt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Lg() {
      var e = hp(!1), t = e[0], a = e[1], i = _w.bind(null, a), u = wu();
      return u.memoizedState = i, [t, i];
    }
    function CE() {
      var e = jh(), t = e[0], a = Fl(), i = a.memoizedState;
      return [t, i];
    }
    function RE() {
      var e = Vh(), t = e[0], a = Fl(), i = a.memoizedState;
      return [t, i];
    }
    var TE = !1;
    function kw() {
      return TE;
    }
    function Ng() {
      var e = wu(), t = ym(), a = t.identifierPrefix, i;
      if (Qr()) {
        var u = aw();
        i = ":" + a + "R" + u;
        var s = vp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Tw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Gh() {
      var e = Fl(), t = e.memoizedState;
      return t;
    }
    function Dw(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (wE(e))
        xE(t, u);
      else {
        bE(e, t, u);
        var s = pa(), f = ar(e, i, s);
        f !== null && _E(f, t, i);
      }
      kE(e, i);
    }
    function Ow(e, t, a) {
      typeof arguments[3] == "function" && E("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bo(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (wE(e))
        xE(t, u);
      else {
        bE(e, t, u);
        var s = e.alternate;
        if (e.lanes === Y && (s === null || s.lanes === Y)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = se.current, se.current = Qi;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, xa(y, v))
                return;
            } catch {
            } finally {
              se.current = p;
            }
          }
        }
        var g = pa(), b = ar(e, i, g);
        b !== null && _E(b, t, i);
      }
      kE(e, i);
    }
    function wE(e) {
      var t = e.alternate;
      return e === Zt || t !== null && t === Zt;
    }
    function xE(e, t) {
      pp = Fh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function bE(e, t, a, i) {
      if (AC(e)) {
        var u = t.interleaved;
        u === null ? (a.next = a, U0(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
      } else {
        var s = t.pending;
        s === null ? a.next = a : (a.next = s.next, s.next = a), t.pending = a;
      }
    }
    function _E(e, t, a) {
      if (Mv(a)) {
        var i = t.lanes;
        i = Sd(i, e.pendingLanes);
        var u = Ke(i, a);
        t.lanes = u, vo(e, u);
      }
    }
    function kE(e, t, a) {
      jr(e, t);
    }
    var Xh = {
      readContext: Wn,
      useCallback: Xr,
      useContext: Xr,
      useEffect: Xr,
      useImperativeHandle: Xr,
      useInsertionEffect: Xr,
      useLayoutEffect: Xr,
      useMemo: Xr,
      useReducer: Xr,
      useRef: Xr,
      useState: Xr,
      useDebugValue: Xr,
      useDeferredValue: Xr,
      useTransition: Xr,
      useMutableSource: Xr,
      useSyncExternalStore: Xr,
      useId: Xr,
      unstable_isNewReconciler: K
    }, DE = null, OE = null, ME = null, LE = null, Hl = null, Qi = null, Kh = null;
    {
      var zg = function() {
        E("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ie = function() {
        E("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      DE = {
        readContext: function(e) {
          return Wn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", At(), Rf(t), Dg(e, t);
        },
        useContext: function(e) {
          return j = "useContext", At(), Wn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", At(), Rf(t), gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", At(), Rf(a), kg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", At(), Rf(t), bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", At(), Rf(t), _g(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", At(), Rf(t);
          var a = se.current;
          se.current = Hl;
          try {
            return Og(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", At();
          var i = se.current;
          se.current = Hl;
          try {
            return Cg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", At(), xg(e);
        },
        useState: function(e) {
          j = "useState", At();
          var t = se.current;
          se.current = Hl;
          try {
            return hp(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", At(), void 0;
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", At(), Mg(e);
        },
        useTransition: function() {
          return j = "useTransition", At(), Lg();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", At(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", At(), wg(e, t, a);
        },
        useId: function() {
          return j = "useId", At(), Ng();
        },
        unstable_isNewReconciler: K
      }, OE = {
        readContext: function(e) {
          return Wn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", te(), Dg(e, t);
        },
        useContext: function(e) {
          return j = "useContext", te(), Wn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", te(), gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", te(), kg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", te(), bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", te(), _g(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", te();
          var a = se.current;
          se.current = Hl;
          try {
            return Og(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", te();
          var i = se.current;
          se.current = Hl;
          try {
            return Cg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", te(), xg(e);
        },
        useState: function(e) {
          j = "useState", te();
          var t = se.current;
          se.current = Hl;
          try {
            return hp(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", te(), void 0;
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", te(), Mg(e);
        },
        useTransition: function() {
          return j = "useTransition", te(), Lg();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", te(), wg(e, t, a);
        },
        useId: function() {
          return j = "useId", te(), Ng();
        },
        unstable_isNewReconciler: K
      }, ME = {
        readContext: function(e) {
          return Wn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", te(), qh(e, t);
        },
        useContext: function(e) {
          return j = "useContext", te(), Wn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", te(), qs(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", te(), Ih(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", te(), $h(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", te(), Yh(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", te();
          var a = se.current;
          se.current = Qi;
          try {
            return Qh(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", te();
          var i = se.current;
          se.current = Qi;
          try {
            return Rg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", te(), Ph();
        },
        useState: function(e) {
          j = "useState", te();
          var t = se.current;
          se.current = Qi;
          try {
            return jh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", te(), Wh();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", te(), SE(e);
        },
        useTransition: function() {
          return j = "useTransition", te(), CE();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", te(), Hh(e, t);
        },
        useId: function() {
          return j = "useId", te(), Gh();
        },
        unstable_isNewReconciler: K
      }, LE = {
        readContext: function(e) {
          return Wn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", te(), qh(e, t);
        },
        useContext: function(e) {
          return j = "useContext", te(), Wn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", te(), qs(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", te(), Ih(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", te(), $h(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", te(), Yh(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", te();
          var a = se.current;
          se.current = Kh;
          try {
            return Qh(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", te();
          var i = se.current;
          se.current = Kh;
          try {
            return Tg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", te(), Ph();
        },
        useState: function(e) {
          j = "useState", te();
          var t = se.current;
          se.current = Kh;
          try {
            return Vh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", te(), Wh();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", te(), EE(e);
        },
        useTransition: function() {
          return j = "useTransition", te(), RE();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", te(), Hh(e, t);
        },
        useId: function() {
          return j = "useId", te(), Gh();
        },
        unstable_isNewReconciler: K
      }, Hl = {
        readContext: function(e) {
          return zg(), Wn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", Ie(), At(), Dg(e, t);
        },
        useContext: function(e) {
          return j = "useContext", Ie(), At(), Wn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", Ie(), At(), gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", Ie(), At(), kg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", Ie(), At(), bg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", Ie(), At(), _g(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", Ie(), At();
          var a = se.current;
          se.current = Hl;
          try {
            return Og(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", Ie(), At();
          var i = se.current;
          se.current = Hl;
          try {
            return Cg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", Ie(), At(), xg(e);
        },
        useState: function(e) {
          j = "useState", Ie(), At();
          var t = se.current;
          se.current = Hl;
          try {
            return hp(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", Ie(), At(), void 0;
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", Ie(), At(), Mg(e);
        },
        useTransition: function() {
          return j = "useTransition", Ie(), At(), Lg();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", Ie(), At(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", Ie(), At(), wg(e, t, a);
        },
        useId: function() {
          return j = "useId", Ie(), At(), Ng();
        },
        unstable_isNewReconciler: K
      }, Qi = {
        readContext: function(e) {
          return zg(), Wn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", Ie(), te(), qh(e, t);
        },
        useContext: function(e) {
          return j = "useContext", Ie(), te(), Wn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", Ie(), te(), qs(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", Ie(), te(), Ih(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", Ie(), te(), $h(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", Ie(), te(), Yh(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", Ie(), te();
          var a = se.current;
          se.current = Qi;
          try {
            return Qh(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", Ie(), te();
          var i = se.current;
          se.current = Qi;
          try {
            return Rg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", Ie(), te(), Ph();
        },
        useState: function(e) {
          j = "useState", Ie(), te();
          var t = se.current;
          se.current = Qi;
          try {
            return jh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", Ie(), te(), Wh();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", Ie(), te(), SE(e);
        },
        useTransition: function() {
          return j = "useTransition", Ie(), te(), CE();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", Ie(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", Ie(), te(), Hh(e, t);
        },
        useId: function() {
          return j = "useId", Ie(), te(), Gh();
        },
        unstable_isNewReconciler: K
      }, Kh = {
        readContext: function(e) {
          return zg(), Wn(e);
        },
        useCallback: function(e, t) {
          return j = "useCallback", Ie(), te(), qh(e, t);
        },
        useContext: function(e) {
          return j = "useContext", Ie(), te(), Wn(e);
        },
        useEffect: function(e, t) {
          return j = "useEffect", Ie(), te(), qs(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return j = "useImperativeHandle", Ie(), te(), Ih(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return j = "useInsertionEffect", Ie(), te(), $h(e, t);
        },
        useLayoutEffect: function(e, t) {
          return j = "useLayoutEffect", Ie(), te(), Yh(e, t);
        },
        useMemo: function(e, t) {
          j = "useMemo", Ie(), te();
          var a = se.current;
          se.current = Qi;
          try {
            return Qh(e, t);
          } finally {
            se.current = a;
          }
        },
        useReducer: function(e, t, a) {
          j = "useReducer", Ie(), te();
          var i = se.current;
          se.current = Qi;
          try {
            return Tg(e, t, a);
          } finally {
            se.current = i;
          }
        },
        useRef: function(e) {
          return j = "useRef", Ie(), te(), Ph();
        },
        useState: function(e) {
          j = "useState", Ie(), te();
          var t = se.current;
          se.current = Qi;
          try {
            return Vh(e);
          } finally {
            se.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return j = "useDebugValue", Ie(), te(), Wh();
        },
        useDeferredValue: function(e) {
          return j = "useDeferredValue", Ie(), te(), EE(e);
        },
        useTransition: function() {
          return j = "useTransition", Ie(), te(), RE();
        },
        useMutableSource: function(e, t, a) {
          return j = "useMutableSource", Ie(), te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return j = "useSyncExternalStore", Ie(), te(), Hh(e, t);
        },
        useId: function() {
          return j = "useId", Ie(), te(), Gh();
        },
        unstable_isNewReconciler: K
      };
    }
    var jo = ee.unstable_now, NE = 0, Jh = -1, Sp = -1, Zh = -1, Ug = !1, em = !1;
    function zE() {
      return Ug;
    }
    function Mw() {
      em = !0;
    }
    function Lw() {
      Ug = !1, em = !1;
    }
    function Nw() {
      Ug = em, em = !1;
    }
    function UE() {
      return NE;
    }
    function AE() {
      NE = jo();
    }
    function Ag(e) {
      Sp = jo(), e.actualStartTime < 0 && (e.actualStartTime = jo());
    }
    function FE(e) {
      Sp = -1;
    }
    function tm(e, t) {
      if (Sp >= 0) {
        var a = jo() - Sp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Sp = -1;
      }
    }
    function Gi(e) {
      if (Jh >= 0) {
        var t = jo() - Jh;
        Jh = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case re:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case lt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function Fg(e) {
      if (Zh >= 0) {
        var t = jo() - Zh;
        Zh = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case re:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case lt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Xi() {
      Jh = jo();
    }
    function Hg() {
      Zh = jo();
    }
    function jg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function nm(e, t) {
      return {
        value: e,
        source: t,
        stack: zu(t)
      };
    }
    function zw(e, t) {
      return !0;
    }
    function Vg(e, t) {
      try {
        var a = zw(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ve)
            return;
          console.error(i);
        }
        var p = u ? Be(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === re)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Be(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (_) {
        setTimeout(function() {
          throw _;
        });
      }
    }
    var Uw = typeof WeakMap == "function" ? WeakMap : Map;
    function HE(e, t, a) {
      var i = Cu(Kt, a);
      i.tag = Ay, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        xb(u), Vg(e, t);
      }, i;
    }
    function Pg(e, t, a) {
      var i = Cu(Kt, a);
      i.tag = Ay;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          t1(e), Vg(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        t1(e), Vg(e, t), typeof u != "function" && Tb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Pr(e.lanes, qe) || E("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Be(e) || "Unknown"));
      }), i;
    }
    function jE(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Uw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = bb.bind(null, e, t, a);
        dn && Np(e, a), t.then(s, s);
      }
    }
    function Aw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Fw(e, t) {
      var a = e.tag;
      if ((e.mode & ze) === Me && (a === me || a === We || a === je)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function VE(e) {
      var t = e;
      do {
        if (t.tag === Re && Cw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function PE(e, t, a, i, u) {
      if ((e.mode & ze) === Me) {
        if (e === t)
          e.flags |= wn;
        else {
          if (e.flags |= ut, a.flags |= ed, a.flags &= ~(Zf | fs), a.tag === ve) {
            var s = a.alternate;
            if (s === null)
              a.tag = Sn;
            else {
              var f = Cu(Kt, qe);
              f.tag = Rh, zo(a, f);
            }
          }
          a.lanes = Ke(a.lanes, qe);
        }
        return e;
      }
      return e.flags |= wn, e.lanes = u, e;
    }
    function Hw(e, t, a, i, u) {
      if (a.flags |= fs, dn && Np(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Fw(a);
        var f = VE(t);
        if (f !== null) {
          f.flags &= ~yn, PE(f, t, a, e, u), f.mode & ze && jE(e, s, u), Aw(f, e, s);
          return;
        } else {
          if (!yd(u)) {
            jE(e, s, u), yS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (Qr() && a.mode & ze) {
        sw();
        var v = VE(t);
        if (v !== null) {
          (v.flags & wn) === we && (v.flags |= yn), PE(v, t, a, e, u), ag(i);
          return;
        }
      }
      hb(i), i = nm(i, a);
      var y = t;
      do {
        switch (y.tag) {
          case re: {
            var g = i;
            y.flags |= wn;
            var b = so(u);
            y.lanes = Ke(y.lanes, b);
            var _ = HE(y, g, b);
            jy(y, _);
            return;
          }
          case ve:
            var N = i, U = y.type, P = y.stateNode;
            if ((y.flags & ut) === we && (typeof U.getDerivedStateFromError == "function" || P !== null && typeof P.componentDidCatch == "function" && !WC(P))) {
              y.flags |= wn;
              var Se = so(u);
              y.lanes = Ke(y.lanes, Se);
              var He = Pg(y, N, Se);
              jy(y, He);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function jw() {
      return null;
    }
    function xf(e) {
      e.flags |= Ce;
    }
    function BE(e) {
      e.flags |= ii, e.flags |= qu;
    }
    var $E, Bg, YE, IE;
    $E = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ie || u.tag === Ve)
          VR(e, u.stateNode);
        else if (u.tag !== he) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, Bg = function(e, t) {
    }, YE = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = fg(), v = BR(f, a, s, i, u, p);
        t.updateQueue = v, v && xf(t);
      }
    }, IE = function(e, t, a, i) {
      a !== i && xf(t);
    };
    function Ep(e, t) {
      if (!Qr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Rr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = Y, i = we;
      if (t) {
        if ((e.mode & $e) !== Me) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Ke(a, Ke(y.lanes, y.childLanes)), i |= y.subtreeFlags & $n, i |= y.flags & $n, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Ke(a, Ke(g.lanes, g.childLanes)), i |= g.subtreeFlags & $n, i |= g.flags & $n, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & $e) !== Me) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ke(a, Ke(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ke(a, Ke(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function WE(e, t, a) {
      var i = t.pendingProps;
      switch (Zy(t), t.tag) {
        case nt:
        case en:
        case je:
        case me:
        case We:
        case Et:
        case ot:
        case lt:
        case un:
        case at:
          return Rr(t), null;
        case ve: {
          var u = t.type;
          return Ul(u) && hh(t), Rr(t), null;
        }
        case re: {
          var s = t.stateNode;
          if (mf(t), ky(t), mg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = op(t);
            if (f)
              xf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & yn) !== we) && (t.flags |= El, tE());
            }
          }
          return Bg(e, t), Rr(t), null;
        }
        case ie: {
          dg(t);
          var v = lE(), y = t.type;
          if (e !== null && t.stateNode != null)
            YE(e, t, y, i, v), e.ref !== t.ref && BE(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Rr(t), null;
            }
            var g = fg(), b = op(t);
            if (b)
              dw(t, v, g) && xf(t);
            else {
              var _ = jR(y, i, v, g, t);
              $E(_, t, !1, !1), t.stateNode = _, PR(_, y, i, v) && xf(t);
            }
            t.ref !== null && BE(t);
          }
          return Rr(t), null;
        }
        case Ve: {
          var N = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            IE(e, t, U, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var P = lE(), Se = fg(), He = op(t);
            He ? pw(t) && xf(t) : t.stateNode = $R(N, P, Se, t);
          }
          return Rr(t), null;
        }
        case Re: {
          gf(t);
          var ke = t.memoizedState;
          {
            if (mw() && (t.mode & ze) !== Me && (t.flags & ut) === we)
              return eE(t), vf(), t.flags |= yn | fs | wn, t;
            if (ke !== null && ke.dehydrated !== null) {
              var Ft = op(t);
              if (e === null) {
                if (!Ft)
                  throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
                if (vw(t), Rr(t), (t.mode & $e) !== Me) {
                  var Pt = ke !== null;
                  if (Pt) {
                    var O = t.child;
                    O !== null && (t.treeBaseDuration -= O.treeBaseDuration);
                  }
                }
                return null;
              } else {
                if (vf(), (t.flags & ut) === we && (t.memoizedState = null), t.flags |= Ce, Rr(t), (t.mode & $e) !== Me) {
                  var H = ke !== null;
                  if (H) {
                    var D = t.child;
                    D !== null && (t.treeBaseDuration -= D.treeBaseDuration);
                  }
                }
                return null;
              }
            }
            tE();
          }
          if ((t.flags & ut) !== we)
            return t.lanes = a, (t.mode & $e) !== Me && jg(t), t;
          var q = ke !== null, ge = !1;
          if (e === null)
            op(t);
          else {
            var de = e.memoizedState;
            ge = de !== null;
          }
          if (q && !ge) {
            var gt = t.child;
            if (gt.flags |= Fr, (t.mode & ze) !== Me) {
              var Bt = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !V);
              Bt || pg(qi.current, sE) ? vb() : yS();
            }
          }
          var tn = t.updateQueue;
          if (tn !== null && (t.flags |= Ce), Rr(t), (t.mode & $e) !== Me && q) {
            var $t = t.child;
            $t !== null && (t.treeBaseDuration -= $t.treeBaseDuration);
          }
          return null;
        }
        case he:
          return mf(t), Bg(e, t), e === null && AT(t.stateNode.containerInfo), Rr(t), null;
        case rt:
          var kn = t.type._context;
          return zy(kn, t), Rr(t), null;
        case Sn: {
          var Dt = t.type;
          return Ul(Dt) && hh(t), Rr(t), null;
        }
        case xt: {
          gf(t);
          var pt = t.memoizedState;
          if (pt === null)
            return Rr(t), null;
          var jn = (t.flags & ut) !== we, Dn = pt.rendering;
          if (Dn === null)
            if (jn)
              Ep(pt, !1);
            else {
              var Ei = mb() && (e === null || (e.flags & ut) === we);
              if (!Ei)
                for (var br = t.child; br !== null; ) {
                  var Wa = Ah(br);
                  if (Wa !== null) {
                    jn = !0, t.flags |= ut, Ep(pt, !1);
                    var qa = Wa.updateQueue;
                    return qa !== null && (t.updateQueue = qa, t.flags |= Ce), t.subtreeFlags = we, gw(t, a), Fo(t, vg(qi.current, dp)), t.child;
                  }
                  br = br.sibling;
                }
              pt.tail !== null && fn() > UC() && (t.flags |= ut, jn = !0, Ep(pt, !1), t.lanes = hd);
            }
          else {
            if (!jn) {
              var Vl = Ah(Dn);
              if (Vl !== null) {
                t.flags |= ut, jn = !0;
                var Mf = Vl.updateQueue;
                if (Mf !== null && (t.updateQueue = Mf, t.flags |= Ce), Ep(pt, !0), pt.tail === null && pt.tailMode === "hidden" && !Dn.alternate && !Qr())
                  return Rr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                fn() * 2 - pt.renderingStartTime > UC() && a !== oa && (t.flags |= ut, jn = !0, Ep(pt, !1), t.lanes = hd);
            }
            if (pt.isBackwards)
              Dn.sibling = t.child, t.child = Dn;
            else {
              var Lf = pt.last;
              Lf !== null ? Lf.sibling = Dn : t.child = Dn, pt.last = Dn;
            }
          }
          if (pt.tail !== null) {
            var Qa = pt.tail;
            pt.rendering = Qa, pt.tail = Qa.sibling, pt.renderingStartTime = fn(), Qa.sibling = null;
            var ec = qi.current;
            return jn ? ec = vg(ec, dp) : ec = yf(ec), Fo(t, ec), Qa;
          }
          return Rr(t), null;
        }
        case En:
          break;
        case Ue:
        case Qe: {
          mS(t);
          var VS = t.memoizedState, N1 = VS !== null;
          if (e !== null) {
            var __ = e.memoizedState, k_ = __ !== null;
            k_ !== N1 && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !T && (t.flags |= Fr);
          }
          return !N1 || (t.mode & ze) === Me ? Rr(t) : Pr(jl, oa) && (Rr(t), t.subtreeFlags & (Fe | Ce) && (t.flags |= Fr)), null;
        }
        case Ot:
          return null;
        case wt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    var Cp = A.ReactCurrentOwner, Ki = !1, $g, Rp, Yg, Ig, Wg, Qs, qg, rm;
    $g = {}, Rp = {}, Yg = {}, Ig = {}, Wg = {}, Qs = !1, qg = {}, rm = {};
    function da(e, t, a, i) {
      e === null ? t.child = iE(t, null, a, i) : t.child = hf(t, e.child, a, i);
    }
    function Vw(e, t, a, i) {
      t.child = hf(t, e.child, null, i), t.child = hf(t, null, a, i);
    }
    function qE(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && $i(
          s,
          i,
          // Resolved props
          "prop",
          Rt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      cf(t, u), iu(t);
      {
        if (Cp.current = t, Ur(!0), v = Tf(e, t, f, i, p, u), y = wf(), t.mode & dt) {
          Ln(!0);
          try {
            v = Tf(e, t, f, i, p, u), y = wf();
          } finally {
            Ln(!1);
          }
        }
        Ur(!1);
      }
      return si(), e !== null && !Ki ? (cE(e, t, u), xu(e, t, u)) : (Qr() && y && Jy(t), t.flags |= la, da(e, t, v, u), t.child);
    }
    function QE(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if ($b(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Of(s), t.tag = je, t.type = f, Xg(t, s), GE(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && $i(
            p,
            i,
            // Resolved props
            "prop",
            Rt(s)
          );
        }
        var v = kS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, g = y.propTypes;
        g && $i(
          g,
          i,
          // Resolved props
          "prop",
          Rt(y)
        );
      }
      var b = e.child, _ = eS(e, u);
      if (!_) {
        var N = b.memoizedProps, U = a.compare;
        if (U = U !== null ? U : jd, U(N, i) && e.ref === t.ref)
          return xu(e, t, u);
      }
      t.flags |= la;
      var P = Zs(b, i);
      return P.ref = t.ref, P.return = t, t.child = P, P;
    }
    function GE(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === De) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && $i(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Rt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (jd(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ki = !1, eS(e, u))
            (e.flags & ed) !== we && (Ki = !0);
          else
            return t.lanes = e.lanes, xu(e, t, u);
      }
      return Qg(e, t, a, i, u);
    }
    function XE(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || T)
        if ((t.mode & ze) === Me) {
          var f = {
            baseLanes: Y,
            cachePool: null
          };
          t.memoizedState = f, Sm(t, a);
        } else if (Pr(a, oa)) {
          var b = {
            baseLanes: Y,
            cachePool: null
          };
          t.memoizedState = b;
          var _ = s !== null ? s.baseLanes : a;
          Sm(t, _);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Ke(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = oa;
          var g = {
            baseLanes: v,
            cachePool: p
          };
          return t.memoizedState = g, t.updateQueue = null, Sm(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = Ke(s.baseLanes, a), t.memoizedState = null) : N = a, Sm(t, N);
      }
      return da(e, t, u, a), t.child;
    }
    function Pw(e, t, a) {
      var i = t.pendingProps;
      return da(e, t, i, a), t.child;
    }
    function Bw(e, t, a) {
      var i = t.pendingProps.children;
      return da(e, t, i, a), t.child;
    }
    function $w(e, t, a) {
      {
        t.flags |= Ce;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return da(e, t, s, a), t.child;
    }
    function KE(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ii, t.flags |= qu);
    }
    function Qg(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && $i(
          s,
          i,
          // Resolved props
          "prop",
          Rt(a)
        );
      }
      var f;
      {
        var p = uf(t, a, !0);
        f = of(t, p);
      }
      var v, y;
      cf(t, u), iu(t);
      {
        if (Cp.current = t, Ur(!0), v = Tf(e, t, a, i, f, u), y = wf(), t.mode & dt) {
          Ln(!0);
          try {
            v = Tf(e, t, a, i, f, u), y = wf();
          } finally {
            Ln(!1);
          }
        }
        Ur(!1);
      }
      return si(), e !== null && !Ki ? (cE(e, t, u), xu(e, t, u)) : (Qr() && y && Jy(t), t.flags |= la, da(e, t, v, u), t.child);
    }
    function JE(e, t, a, i, u) {
      {
        switch (a_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= ut, t.flags |= wn;
            var y = new Error("Simulated error coming from DevTools"), g = so(u);
            t.lanes = Ke(t.lanes, g);
            var b = Pg(t, nm(y, t), g);
            jy(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var _ = a.propTypes;
          _ && $i(
            _,
            i,
            // Resolved props
            "prop",
            Rt(a)
          );
        }
      }
      var N;
      Ul(a) ? (N = !0, mh(t)) : N = !1, cf(t, u);
      var U = t.stateNode, P;
      U === null ? (e !== null && (e.alternate = null, t.alternate = null, t.flags |= Fe), W0(t, a, i), Ky(t, a, i, u), P = !0) : e === null ? P = ew(t, a, i, u) : P = tw(e, t, a, i, u);
      var Se = Gg(e, t, a, P, N, u);
      {
        var He = t.stateNode;
        P && He.props !== i && (Qs || E("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Be(t) || "a component"), Qs = !0);
      }
      return Se;
    }
    function Gg(e, t, a, i, u, s) {
      KE(e, t);
      var f = (t.flags & ut) !== we;
      if (!i && !f)
        return u && k0(t, a, !1), xu(e, t, s);
      var p = t.stateNode;
      Cp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, FE();
      else {
        iu(t);
        {
          if (Ur(!0), v = p.render(), t.mode & dt) {
            Ln(!0);
            try {
              p.render();
            } finally {
              Ln(!1);
            }
          }
          Ur(!1);
        }
        si();
      }
      return t.flags |= la, e !== null && f ? Vw(e, t, v, s) : da(e, t, v, s), t.memoizedState = p.state, u && k0(t, a, !0), t.child;
    }
    function ZE(e) {
      var t = e.stateNode;
      t.pendingContext ? b0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && b0(e, t.context, !1), cg(e, t.containerInfo);
    }
    function Yw(e, t, a) {
      if (ZE(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      H0(e, t), bh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & yn) {
          var g = new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering.");
          return eC(e, t, p, a, g);
        } else if (p !== s) {
          var b = new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering.");
          return eC(e, t, p, a, b);
        } else {
          cw(t);
          var _ = iE(t, null, p, a);
          t.child = _;
          for (var N = _; N; )
            N.flags = N.flags & ~Fe | mr, N = N.sibling;
        }
      } else {
        if (vf(), p === s)
          return xu(e, t, a);
        da(e, t, p, a);
      }
      return t.child;
    }
    function eC(e, t, a, i, u) {
      return vf(), ag(u), t.flags |= yn, da(e, t, a, i), t.child;
    }
    function Iw(e, t, a) {
      uE(t), e === null && rg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = yy(i, u);
      return p ? f = null : s !== null && yy(i, s) && (t.flags |= Bn), KE(e, t), da(e, t, f, a), t.child;
    }
    function Ww(e, t) {
      return e === null && rg(t), null;
    }
    function qw(e, t, a, i) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= Fe);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = Yb(v), g = Ii(v, u), b;
      switch (y) {
        case me:
          return Xg(t, v), t.type = v = Of(v), b = Qg(null, t, v, g, i), b;
        case ve:
          return t.type = v = RS(v), b = JE(null, t, v, g, i), b;
        case We:
          return t.type = v = TS(v), b = qE(null, t, v, g, i), b;
        case at: {
          if (t.type !== t.elementType) {
            var _ = v.propTypes;
            _ && $i(
              _,
              g,
              // Resolved for outer only
              "prop",
              Rt(v)
            );
          }
          return b = QE(
            null,
            t,
            v,
            Ii(v.type, g),
            // The inner type can have defaults too
            i
          ), b;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === De && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function Qw(e, t, a, i, u) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= Fe), t.tag = ve;
      var s;
      return Ul(a) ? (s = !0, mh(t)) : s = !1, cf(t, u), W0(t, a, i), Ky(t, a, i, u), Gg(null, t, a, !0, s, u);
    }
    function Gw(e, t, a, i) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= Fe);
      var u = t.pendingProps, s;
      {
        var f = uf(t, a, !1);
        s = of(t, f);
      }
      cf(t, i);
      var p, v;
      iu(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Rt(a) || "Unknown";
          $g[y] || (E("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), $g[y] = !0);
        }
        t.mode & dt && Yi.recordLegacyContextWarning(t, null), Ur(!0), Cp.current = t, p = Tf(null, t, a, u, s, i), v = wf(), Ur(!1);
      }
      if (si(), t.flags |= la, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Rt(a) || "Unknown";
        Rp[g] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Rp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var b = Rt(a) || "Unknown";
          Rp[b] || (E("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), Rp[b] = !0);
        }
        t.tag = ve, t.memoizedState = null, t.updateQueue = null;
        var _ = !1;
        return Ul(a) ? (_ = !0, mh(t)) : _ = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, Hy(t), I0(t, p), Ky(t, a, u, i), Gg(null, t, a, !0, _, i);
      } else {
        if (t.tag = me, t.mode & dt) {
          Ln(!0);
          try {
            p = Tf(null, t, a, u, s, i), v = wf();
          } finally {
            Ln(!1);
          }
        }
        return Qr() && v && Jy(t), da(null, t, p, i), Xg(t, a), t.child;
      }
    }
    function Xg(e, t) {
      {
        if (t && t.childContextTypes && E("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = ha();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), Wg[u] || (Wg[u] = !0, E("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Rt(t) || "Unknown";
          Ig[f] || (E("%s: Function components do not support getDerivedStateFromProps.", f), Ig[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = Rt(t) || "Unknown";
          Yg[p] || (E("%s: Function components do not support contextType.", p), Yg[p] = !0);
        }
      }
    }
    var am = {
      dehydrated: null,
      treeContext: null,
      retryLane: Nn
    };
    function im(e) {
      return {
        baseLanes: e,
        cachePool: jw()
      };
    }
    function tC(e, t) {
      var a = null;
      return {
        baseLanes: Ke(e.baseLanes, t),
        cachePool: a
      };
    }
    function Xw(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return pg(e, dp);
    }
    function nC(e, t) {
      return co(e.childLanes, t);
    }
    function rC(e, t, a) {
      var i = t.pendingProps;
      i_(t) && (t.flags |= ut);
      var u = qi.current, s = !1, f = (t.flags & ut) !== we;
      if (f || Xw(u, e) ? (s = !0, t.flags &= ~ut) : (e === null || e.memoizedState !== null) && (u = Ew(u, sE)), u = yf(u), Fo(t, u), e === null) {
        rg(t);
        {
          var p = t.memoizedState;
          if (p !== null) {
            var v = p.dehydrated;
            if (v !== null)
              return Zw(t, v);
          }
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = Kw(t, y, g, a), _ = t.child;
          return _.memoizedState = im(a), t.memoizedState = am, b;
        } else
          return Kg(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          {
            var U = N.dehydrated;
            if (U !== null)
              if (f) {
                if (t.flags & yn)
                  return t.flags &= ~yn, lm(e, t, a, new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
                if (t.memoizedState !== null)
                  return t.child = e.child, t.flags |= ut, null;
                var P = i.children, Se = i.fallback, He = Jw(e, t, P, Se, a), ke = t.child;
                return ke.memoizedState = im(a), t.memoizedState = am, He;
              } else
                return ex(e, t, U, N, a);
          }
          if (s) {
            var Ft = i.fallback, Pt = i.children, O = lC(e, t, Pt, Ft, a), H = t.child, D = e.child.memoizedState;
            return H.memoizedState = D === null ? im(a) : tC(D, a), H.childLanes = nC(e, a), t.memoizedState = am, O;
          } else {
            var q = i.children, ge = iC(e, t, q, a);
            return t.memoizedState = null, ge;
          }
        } else if (s) {
          var de = i.fallback, gt = i.children, Bt = lC(e, t, gt, de, a), tn = t.child, $t = e.child.memoizedState;
          return tn.memoizedState = $t === null ? im(a) : tC($t, a), tn.childLanes = nC(e, a), t.memoizedState = am, Bt;
        } else {
          var kn = i.children, Dt = iC(e, t, kn, a);
          return t.memoizedState = null, Dt;
        }
      }
    }
    function Kg(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = Jg(u, i);
      return s.return = e, e.child = s, s;
    }
    function Kw(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & ze) === Me && s !== null ? (p = s, p.childLanes = Y, p.pendingProps = f, e.mode & $e && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Yo(a, u, i, null)) : (p = Jg(f, u), v = Yo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function Jg(e, t, a) {
      return r1(e, t, Y, null);
    }
    function aC(e, t) {
      return Zs(e, t);
    }
    function iC(e, t, a, i) {
      var u = e.child, s = u.sibling, f = aC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & ze) === Me && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= mn) : p.push(s);
      }
      return t.child = f, f;
    }
    function lC(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & ze) === Me && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = Y, y.pendingProps = v, t.mode & $e && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = aC(f, v), y.subtreeFlags = f.subtreeFlags & $n;
      var b;
      return p !== null ? b = Zs(p, i) : (b = Yo(i, s, u, null), b.flags |= Fe), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function lm(e, t, a, i) {
      i !== null && ag(i), hf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = Kg(t, s);
      return f.flags |= Fe, t.memoizedState = null, f;
    }
    function Jw(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = Jg(f, s), v = Yo(i, s, u, null);
      return v.flags |= Fe, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & ze) !== Me && hf(t, e.child, null, u), v;
    }
    function Zw(e, t, a) {
      return (e.mode & ze) === Me ? (E("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = qe) : Cy(t) ? e.lanes = ci : e.lanes = oa, null;
    }
    function ex(e, t, a, i, u) {
      if (ow(), (t.mode & ze) === Me)
        return lm(
          e,
          t,
          u,
          // TODO: When we delete legacy mode, we should make this error argument
          // required — every concurrent mode path that causes hydration to
          // de-opt to client rendering should have an error message.
          null
        );
      if (Cy(a))
        return lm(
          e,
          t,
          u,
          // TODO: The server should serialize the error message so we can log it
          // here on the client. Or, in production, a hash/id that corresponds to
          // the error.
          new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.")
        );
      var s = Pr(u, e.childLanes);
      if (Ki || s) {
        var f = ym();
        if (f !== null) {
          var p = Nv(f, u);
          if (p !== Nn && p !== i.retryLane) {
            i.retryLane = p;
            var v = Kt;
            ar(e, p, v);
          }
        }
        return yS(), lm(e, t, u, new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
      } else if (E0(a)) {
        t.flags |= ut, t.child = e.child;
        var y = _b.bind(null, e);
        return dT(a, y), null;
      } else {
        fw(t, a, i.treeContext);
        var g = t.pendingProps, b = g.children, _ = Kg(t, b);
        return _.flags |= mr, _;
      }
    }
    function uC(e, t, a) {
      e.lanes = Ke(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ke(i.lanes, t)), Uy(e.return, t, a);
    }
    function tx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Re) {
          var u = i.memoizedState;
          u !== null && uC(i, a, e);
        } else if (i.tag === xt)
          uC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function nx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Ah(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function rx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !qg[e])
        if (qg[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              E('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              E('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          E('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function ax(e, t) {
      e !== void 0 && !rm[e] && (e !== "collapsed" && e !== "hidden" ? (rm[e] = !0, E('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (rm[e] = !0, E('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function oC(e, t) {
      {
        var a = ft(e), i = !a && typeof Na(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return E("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function ix(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (ft(e)) {
          for (var a = 0; a < e.length; a++)
            if (!oC(e[a], a))
              return;
        } else {
          var i = Na(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!oC(s.value, f))
                  return;
                f++;
              }
          } else
            E('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function Zg(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function sC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      rx(u), ax(s, u), ix(f, u), da(e, t, f, a);
      var p = qi.current, v = pg(p, dp);
      if (v)
        p = vg(p, dp), t.flags |= ut;
      else {
        var y = e !== null && (e.flags & ut) !== we;
        y && tx(t, t.child, a), p = yf(p);
      }
      if (Fo(t, p), (t.mode & ze) === Me)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = nx(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), Zg(
              t,
              !1,
              // isBackwards
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var _ = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var U = N.alternate;
              if (U !== null && Ah(U) === null) {
                t.child = N;
                break;
              }
              var P = N.sibling;
              N.sibling = _, _ = N, N = P;
            }
            Zg(
              t,
              !0,
              // isBackwards
              _,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            Zg(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function lx(e, t, a) {
      cg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = hf(t, null, i, a) : da(e, t, i, a), t.child;
    }
    var cC = !1;
    function ux(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || cC || (cC = !0, E("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && $i(v, s, "prop", "Context.Provider");
      }
      if (z0(t, u, p), f !== null) {
        var y = f.value;
        if (xa(y, p)) {
          if (f.children === s.children && !vh())
            return xu(e, t, a);
        } else
          qT(t, u, a);
      }
      var g = s.children;
      return da(e, t, g, a), t.child;
    }
    var fC = !1;
    function ox(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (fC || (fC = !0, E("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && E("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), cf(t, a);
      var f = Wn(i);
      iu(t);
      var p;
      return Cp.current = t, Ur(!0), p = s(f), Ur(!1), si(), t.flags |= la, da(e, t, p, a), t.child;
    }
    function um() {
      Ki = !0;
    }
    function xu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), FE(), Em(t.lanes), Pr(a, t.childLanes) ? (yw(e, t), t.child) : null;
    }
    function sx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= mn) : s.push(e), a.flags |= Fe, a;
      }
    }
    function eS(e, t) {
      var a = e.lanes;
      return !!Pr(a, t);
    }
    function cx(e, t, a) {
      switch (t.tag) {
        case re:
          ZE(t), t.stateNode, vf();
          break;
        case ie:
          uE(t);
          break;
        case ve: {
          var i = t.type;
          Ul(i) && mh(t);
          break;
        }
        case he:
          cg(t, t.stateNode.containerInfo);
          break;
        case rt: {
          var u = t.memoizedProps.value, s = t.type._context;
          z0(t, s, u);
          break;
        }
        case lt:
          {
            var f = Pr(a, t.childLanes);
            f && (t.flags |= Ce);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Re: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Fo(t, yf(qi.current)), t.flags |= ut, null;
            var y = t.child, g = y.childLanes;
            if (Pr(a, g))
              return rC(e, t, a);
            Fo(t, yf(qi.current));
            var b = xu(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            Fo(t, yf(qi.current));
          break;
        }
        case xt: {
          var _ = (e.flags & ut) !== we, N = Pr(a, t.childLanes);
          if (_) {
            if (N)
              return sC(e, t, a);
            t.flags |= ut;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Fo(t, qi.current), N)
            break;
          return null;
        }
        case Ue:
        case Qe:
          return t.lanes = Y, XE(e, t, a);
      }
      return xu(e, t, a);
    }
    function dC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return sx(e, t, kS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || vh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ki = !0;
        else {
          var s = eS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & ut) === we)
            return Ki = !1, cx(e, t, a);
          (e.flags & ed) !== we ? Ki = !0 : Ki = !1;
        }
      } else if (Ki = !1, Qr() && nw(t)) {
        var f = t.index, p = rw();
        Q0(t, p, f);
      }
      switch (t.lanes = Y, t.tag) {
        case nt:
          return Gw(e, t, t.type, a);
        case en: {
          var v = t.elementType;
          return qw(e, t, v, a);
        }
        case me: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : Ii(y, g);
          return Qg(e, t, y, b, a);
        }
        case ve: {
          var _ = t.type, N = t.pendingProps, U = t.elementType === _ ? N : Ii(_, N);
          return JE(e, t, _, U, a);
        }
        case re:
          return Yw(e, t, a);
        case ie:
          return Iw(e, t, a);
        case Ve:
          return Ww(e, t);
        case Re:
          return rC(e, t, a);
        case he:
          return lx(e, t, a);
        case We: {
          var P = t.type, Se = t.pendingProps, He = t.elementType === P ? Se : Ii(P, Se);
          return qE(e, t, P, He, a);
        }
        case Et:
          return Pw(e, t, a);
        case ot:
          return Bw(e, t, a);
        case lt:
          return $w(e, t, a);
        case rt:
          return ux(e, t, a);
        case un:
          return ox(e, t, a);
        case at: {
          var ke = t.type, Ft = t.pendingProps, Pt = Ii(ke, Ft);
          if (t.type !== t.elementType) {
            var O = ke.propTypes;
            O && $i(
              O,
              Pt,
              // Resolved for outer only
              "prop",
              Rt(ke)
            );
          }
          return Pt = Ii(ke.type, Pt), QE(e, t, ke, Pt, a);
        }
        case je:
          return GE(e, t, t.type, t.pendingProps, a);
        case Sn: {
          var H = t.type, D = t.pendingProps, q = t.elementType === H ? D : Ii(H, D);
          return Qw(e, t, H, q, a);
        }
        case xt:
          return sC(e, t, a);
        case En:
          break;
        case Ue:
          return XE(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function fx(e, t, a) {
      switch (Zy(t), t.tag) {
        case ve: {
          var i = t.type;
          Ul(i) && hh(t);
          var u = t.flags;
          return u & wn ? (t.flags = u & ~wn | ut, (t.mode & $e) !== Me && jg(t), t) : null;
        }
        case re: {
          mf(t), ky(t), mg();
          var s = t.flags;
          return (s & wn) !== we && (s & ut) === we ? (t.flags = s & ~wn | ut, t) : null;
        }
        case ie:
          return dg(t), null;
        case Re: {
          gf(t);
          {
            var f = t.memoizedState;
            if (f !== null && f.dehydrated !== null) {
              if (t.alternate === null)
                throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
              vf();
            }
          }
          var p = t.flags;
          return p & wn ? (t.flags = p & ~wn | ut, (t.mode & $e) !== Me && jg(t), t) : null;
        }
        case xt:
          return gf(t), null;
        case he:
          return mf(t), null;
        case rt:
          var v = t.type._context;
          return zy(v, t), null;
        case Ue:
        case Qe:
          return mS(t), null;
        case Ot:
          return null;
        default:
          return null;
      }
    }
    function pC(e, t, a) {
      switch (Zy(t), t.tag) {
        case ve: {
          var i = t.type.childContextTypes;
          i != null && hh(t);
          break;
        }
        case re: {
          mf(t), ky(t), mg();
          break;
        }
        case ie: {
          dg(t);
          break;
        }
        case he:
          mf(t);
          break;
        case Re:
          gf(t);
          break;
        case xt:
          gf(t);
          break;
        case rt:
          var u = t.type._context;
          zy(u, t);
          break;
        case Ue:
        case Qe:
          mS(t);
          break;
      }
    }
    var vC = null;
    vC = /* @__PURE__ */ new Set();
    var om = !1, Vo = !1, dx = typeof WeakSet == "function" ? WeakSet : Set, ue = null, bf = null, _f = null;
    function Tr(e) {
      cs(null, function() {
        throw e;
      }), tu();
    }
    var px = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & $e)
        try {
          Xi(), t.componentWillUnmount();
        } finally {
          Gi(e);
        }
      else
        t.componentWillUnmount();
    };
    function hC(e, t) {
      try {
        Po(Zn, e);
      } catch (a) {
        Tr(a), xr(e, t, a);
      }
    }
    function tS(e, t, a) {
      try {
        px(e, a);
      } catch (i) {
        Tr(i), xr(e, t, i);
      }
    }
    function vx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Tr(i), xr(e, t, i);
      }
    }
    function mC(e, t) {
      try {
        gC(e);
      } catch (a) {
        Tr(a), xr(e, t, a);
      }
    }
    function sm(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Je && st && e.mode & $e)
              try {
                Xi(), i = a(null);
              } finally {
                Gi(e);
              }
            else
              i = a(null);
          } catch (u) {
            Tr(u), xr(e, t, u);
          }
          typeof i == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Be(e));
        } else
          a.current = null;
    }
    function cm(e, t, a) {
      try {
        a();
      } catch (i) {
        Tr(i), xr(e, t, i);
      }
    }
    var yC = !1;
    function hx(e, t) {
      FR(e.containerInfo), ue = t, mx();
      var a = yC;
      return yC = !1, a;
    }
    function mx() {
      for (; ue !== null; ) {
        var e = ue, t = e.child;
        (e.subtreeFlags & ds) !== we && t !== null ? (gi(t, e), ue = t) : yx();
      }
    }
    function yx() {
      for (; ue !== null; ) {
        var e = ue;
        Mn(e);
        try {
          gx(e);
        } catch (a) {
          Tr(a), xr(e, e.return, a);
        }
        Xt();
        var t = e.sibling;
        if (t !== null) {
          gi(t, e.return), ue = t;
          return;
        }
        ue = e.return;
      }
    }
    function gx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & El) !== we) {
        switch (Mn(e), e.tag) {
          case me:
          case We:
          case je:
            break;
          case ve: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Qs && (s.props !== e.memoizedProps && E("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(e) || "instance"), s.state !== e.memoizedState && E("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ii(e.type, i), u);
              {
                var p = vC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), E("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Be(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case re: {
            {
              var v = e.stateNode;
              oT(v.containerInfo);
            }
            break;
          }
          case ie:
          case Ve:
          case he:
          case Sn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Xt();
      }
    }
    function Ji(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Cr) !== Al ? wv(t) : (e & Zn) !== Al && Va(t), cm(t, a, p), (e & Cr) !== Al ? Ku() : (e & Zn) !== Al && Ju());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Po(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Cr) !== Al ? yc(t) : (e & Zn) !== Al && xv(t);
            var f = s.create;
            s.destroy = f(), (e & Cr) !== Al ? Tv() : (e & Zn) !== Al && ys();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Zn) !== we ? v = "useLayoutEffect" : (s.tag & Sf) !== we ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, E("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Sx(e, t) {
      if ((t.flags & Ce) !== we)
        switch (t.tag) {
          case lt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = UE(), p = t.alternate === null ? "mount" : "update";
            zE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case re:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case lt:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Ex(e, t, a, i) {
      if ((a.flags & ui) !== we)
        switch (a.tag) {
          case me:
          case We:
          case je: {
            if (!Vo)
              if (a.mode & $e)
                try {
                  Xi(), Po(Zn | Jn, a);
                } finally {
                  Gi(a);
                }
              else
                Po(Zn | Jn, a);
            break;
          }
          case ve: {
            var u = a.stateNode;
            if (a.flags & Ce && !Vo)
              if (t === null)
                if (a.type === a.elementType && !Qs && (u.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), a.mode & $e)
                  try {
                    Xi(), u.componentDidMount();
                  } finally {
                    Gi(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ii(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Qs && (u.props !== a.memoizedProps && E("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && E("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), a.mode & $e)
                  try {
                    Xi(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Gi(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Qs && (u.props !== a.memoizedProps && E("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Be(a) || "instance"), u.state !== a.memoizedState && E("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Be(a) || "instance")), V0(a, p, u));
            break;
          }
          case re: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ie:
                    y = a.child.stateNode;
                    break;
                  case ve:
                    y = a.child.stateNode;
                    break;
                }
              V0(a, v, y);
            }
            break;
          }
          case ie: {
            var g = a.stateNode;
            if (t === null && a.flags & Ce) {
              var b = a.type, _ = a.memoizedProps;
              QR(g, b, _);
            }
            break;
          }
          case Ve:
            break;
          case he:
            break;
          case lt: {
            {
              var N = a.memoizedProps, U = N.onCommit, P = N.onRender, Se = a.stateNode.effectDuration, He = UE(), ke = t === null ? "mount" : "update";
              zE() && (ke = "nested-update"), typeof P == "function" && P(a.memoizedProps.id, ke, a.actualDuration, a.treeBaseDuration, a.actualStartTime, He);
              {
                typeof U == "function" && U(a.memoizedProps.id, ke, Se, He), Cb(a);
                var Ft = a.return;
                e:
                  for (; Ft !== null; ) {
                    switch (Ft.tag) {
                      case re:
                        var Pt = Ft.stateNode;
                        Pt.effectDuration += Se;
                        break e;
                      case lt:
                        var O = Ft.stateNode;
                        O.effectDuration += Se;
                        break e;
                    }
                    Ft = Ft.return;
                  }
              }
            }
            break;
          }
          case Re: {
            Dx(e, a);
            break;
          }
          case xt:
          case Sn:
          case En:
          case Ue:
          case Qe:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Vo || a.flags & ii && gC(a);
    }
    function Cx(e) {
      switch (e.tag) {
        case me:
        case We:
        case je: {
          if (e.mode & $e)
            try {
              Xi(), hC(e, e.return);
            } finally {
              Gi(e);
            }
          else
            hC(e, e.return);
          break;
        }
        case ve: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && vx(e, e.return, t), mC(e, e.return);
          break;
        }
        case ie: {
          mC(e, e.return);
          break;
        }
      }
    }
    function Rx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ie) {
          if (a === null) {
            a = i;
            var u = i.stateNode;
            t ? aT(u) : lT(i.stateNode, i.memoizedProps);
          }
        } else if (i.tag === Ve) {
          if (a === null) {
            var s = i.stateNode;
            t ? iT(s) : uT(s, i.memoizedProps);
          }
        } else if (!((i.tag === Ue || i.tag === Qe) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function gC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ie:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & $e)
            try {
              Xi(), u = t(i);
            } finally {
              Gi(e);
            }
          else
            u = t(i);
          typeof u == "function" && E("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Be(e));
        } else
          t.hasOwnProperty("current") || E("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Be(e)), t.current = i;
      }
    }
    function Tx(e) {
      var t = e.ref;
      if (t !== null)
        if (typeof t == "function")
          if (e.mode & $e)
            try {
              Xi(), t(null);
            } finally {
              Gi(e);
            }
          else
            t(null);
        else
          t.current = null;
    }
    function SC(e, t, a) {
      switch (Cv(t), t.tag) {
        case me:
        case We:
        case at:
        case je: {
          var i = t.updateQueue;
          if (i !== null) {
            var u = i.lastEffect;
            if (u !== null) {
              var s = u.next, f = s;
              do {
                var p = f, v = p.destroy, y = p.tag;
                v !== void 0 && ((y & Sf) !== Al ? cm(t, a, v) : (y & Zn) !== Al && (Va(t), t.mode & $e ? (Xi(), cm(t, a, v), Gi(t)) : cm(t, a, v), Ju())), f = f.next;
              } while (f !== s);
            }
          }
          return;
        }
        case ve: {
          sm(t, a);
          var g = t.stateNode;
          typeof g.componentWillUnmount == "function" && tS(t, a, g);
          return;
        }
        case ie: {
          sm(t, a);
          return;
        }
        case he: {
          wC(e, t, a);
          return;
        }
        case Ht:
          return;
        case En:
          return;
      }
    }
    function wx(e, t, a) {
      for (var i = t; ; ) {
        if (SC(e, i, a), i.child !== null && // If we use mutation we drill down into portals using commitUnmount above.
        // If we don't use mutation we drill down into portals here instead.
        i.tag !== he) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === t)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === t)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function xx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function EC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, EC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ie) {
          var a = e.stateNode;
          a !== null && jT(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function bx(e) {
      for (var t = e.return; t !== null; ) {
        if (CC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function CC(e) {
      return e.tag === ie || e.tag === re || e.tag === he;
    }
    function RC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || CC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ie && t.tag !== Ve && t.tag !== Ht; ) {
            if (t.flags & Fe || t.child === null || t.tag === he)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Fe))
            return t.stateNode;
        }
    }
    function TC(e) {
      var t = bx(e);
      switch (t.tag) {
        case ie: {
          var a = t.stateNode;
          t.flags & Bn && (S0(a), t.flags &= ~Bn);
          var i = RC(e);
          rS(e, i, a);
          break;
        }
        case re:
        case he: {
          var u = t.stateNode.containerInfo, s = RC(e);
          nS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function nS(e, t, a) {
      var i = e.tag, u = i === ie || i === Ve;
      if (u) {
        var s = e.stateNode;
        t ? eT(a, s, t) : JR(a, s);
      } else if (i !== he) {
        var f = e.child;
        if (f !== null) {
          nS(f, t, a);
          for (var p = f.sibling; p !== null; )
            nS(p, t, a), p = p.sibling;
        }
      }
    }
    function rS(e, t, a) {
      var i = e.tag, u = i === ie || i === Ve;
      if (u) {
        var s = e.stateNode;
        t ? ZR(a, s, t) : KR(a, s);
      } else if (i !== he) {
        var f = e.child;
        if (f !== null) {
          rS(f, t, a);
          for (var p = f.sibling; p !== null; )
            rS(p, t, a), p = p.sibling;
        }
      }
    }
    function wC(e, t, a) {
      for (var i = t, u = !1, s, f; ; ) {
        if (!u) {
          var p = i.return;
          e:
            for (; ; ) {
              if (p === null)
                throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
              var v = p.stateNode;
              switch (p.tag) {
                case ie:
                  s = v, f = !1;
                  break e;
                case re:
                  s = v.containerInfo, f = !0;
                  break e;
                case he:
                  s = v.containerInfo, f = !0;
                  break e;
              }
              p = p.return;
            }
          u = !0;
        }
        if (i.tag === ie || i.tag === Ve)
          wx(e, i, a), f ? nT(s, i.stateNode) : tT(s, i.stateNode);
        else if (i.tag === Ht)
          f ? rT(s, i.stateNode) : Ey(s, i.stateNode);
        else if (i.tag === he) {
          if (i.child !== null) {
            s = i.stateNode.containerInfo, f = !0, i.child.return = i, i = i.child;
            continue;
          }
        } else if (SC(e, i, a), i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === t)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === t)
            return;
          i = i.return, i.tag === he && (u = !1);
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function _x(e, t, a) {
      wC(e, t, a), xx(t);
    }
    function aS(e, t) {
      switch (t.tag) {
        case me:
        case We:
        case at:
        case je: {
          if (Ji(Sf | Jn, t, t.return), Po(Sf | Jn, t), t.mode & $e)
            try {
              Xi(), Ji(Zn | Jn, t, t.return);
            } finally {
              Gi(t);
            }
          else
            Ji(Zn | Jn, t, t.return);
          return;
        }
        case ve:
          return;
        case ie: {
          var a = t.stateNode;
          if (a != null) {
            var i = t.memoizedProps, u = e !== null ? e.memoizedProps : i, s = t.type, f = t.updateQueue;
            t.updateQueue = null, f !== null && GR(a, f, s, u, i);
          }
          return;
        }
        case Ve: {
          if (t.stateNode === null)
            throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var p = t.stateNode, v = t.memoizedProps, y = e !== null ? e.memoizedProps : v;
          XR(p, y, v);
          return;
        }
        case re: {
          if (e !== null) {
            var g = e.memoizedState;
            if (g.isDehydrated) {
              var b = t.stateNode;
              ET(b.containerInfo);
            }
          }
          return;
        }
        case lt:
          return;
        case Re: {
          kx(t), xC(t);
          return;
        }
        case xt: {
          xC(t);
          return;
        }
        case Sn:
          return;
      }
      throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function kx(e) {
      e.memoizedState;
    }
    function Dx(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && CT(s);
          }
        }
      }
    }
    function xC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new dx()), t.forEach(function(i) {
          var u = kb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), dn)
              if (bf !== null && _f !== null)
                Np(_f, bf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Ox(e) {
      S0(e.stateNode);
    }
    function Mx(e, t, a) {
      bf = a, _f = e, ue = t, Lx(e, a), bf = null, _f = null;
    }
    function Lx(e, t) {
      for (; ue !== null; ) {
        var a = ue, i = a.deletions;
        if (i !== null)
          for (var u = 0; u < i.length; u++) {
            var s = i[u];
            try {
              _x(e, s, a);
            } catch (p) {
              Tr(p), xr(s, a, p);
            }
          }
        var f = a.child;
        (a.subtreeFlags & ps) !== we && f !== null ? (gi(f, a), ue = f) : Nx(e, t);
      }
    }
    function Nx(e, t) {
      for (; ue !== null; ) {
        var a = ue;
        Mn(a);
        try {
          zx(a, e, t);
        } catch (u) {
          Tr(u), xr(a, a.return, u);
        }
        Xt();
        var i = a.sibling;
        if (i !== null) {
          gi(i, a.return), ue = i;
          return;
        }
        ue = a.return;
      }
    }
    function zx(e, t, a) {
      var i = e.flags;
      if (i & Bn && Ox(e), i & ii) {
        var u = e.alternate;
        u !== null && Tx(u);
      }
      if (i & Fr)
        switch (e.tag) {
          case Re: {
            var s = e.memoizedState, f = s !== null;
            if (f) {
              var p = e.alternate, v = p !== null && p.memoizedState !== null;
              v || pb();
            }
            break;
          }
          case Ue: {
            var y = e.memoizedState, g = y !== null, b = e.alternate, _ = b !== null && b.memoizedState !== null, N = e;
            Rx(N, g);
            {
              if (g && !_ && (N.mode & ze) !== Me) {
                ue = N;
                for (var U = N.child; U !== null; )
                  ue = U, Ax(U), U = U.sibling;
              }
              break;
            }
          }
        }
      var P = i & (Fe | Ce | mr);
      switch (P) {
        case Fe: {
          TC(e), e.flags &= ~Fe;
          break;
        }
        case Sl: {
          TC(e), e.flags &= ~Fe;
          var Se = e.alternate;
          aS(Se, e);
          break;
        }
        case mr: {
          e.flags &= ~mr;
          break;
        }
        case mv: {
          e.flags &= ~mr;
          var He = e.alternate;
          aS(He, e);
          break;
        }
        case Ce: {
          var ke = e.alternate;
          aS(ke, e);
          break;
        }
      }
    }
    function Ux(e, t, a) {
      bf = a, _f = t, ue = e, bC(e, t, a), bf = null, _f = null;
    }
    function bC(e, t, a) {
      for (var i = (e.mode & ze) !== Me; ue !== null; ) {
        var u = ue, s = u.child;
        if (u.tag === Ue && i) {
          var f = u.memoizedState !== null, p = f || om;
          if (p) {
            iS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Vo, b = om, _ = Vo;
            om = p, Vo = g, Vo && !_ && (ue = u, Fx(u));
            for (var N = s; N !== null; )
              ue = N, bC(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            ue = u, om = b, Vo = _, iS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ui) !== we && s !== null ? (gi(s, u), ue = s) : iS(e, t, a);
      }
    }
    function iS(e, t, a) {
      for (; ue !== null; ) {
        var i = ue;
        if ((i.flags & ui) !== we) {
          var u = i.alternate;
          Mn(i);
          try {
            Ex(t, u, i, a);
          } catch (f) {
            Tr(f), xr(i, i.return, f);
          }
          Xt();
        }
        if (i === e) {
          ue = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          gi(s, i.return), ue = s;
          return;
        }
        ue = i.return;
      }
    }
    function Ax(e) {
      for (; ue !== null; ) {
        var t = ue, a = t.child;
        switch (t.tag) {
          case me:
          case We:
          case at:
          case je: {
            if (t.mode & $e)
              try {
                Xi(), Ji(Zn, t, t.return);
              } finally {
                Gi(t);
              }
            else
              Ji(Zn, t, t.return);
            break;
          }
          case ve: {
            sm(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && tS(t, t.return, i);
            break;
          }
          case ie: {
            sm(t, t.return);
            break;
          }
          case Ue: {
            var u = t.memoizedState !== null;
            if (u) {
              _C(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ue = a) : _C(e);
      }
    }
    function _C(e) {
      for (; ue !== null; ) {
        var t = ue;
        if (t === e) {
          ue = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ue = a;
          return;
        }
        ue = t.return;
      }
    }
    function Fx(e) {
      for (; ue !== null; ) {
        var t = ue, a = t.child;
        if (t.tag === Ue) {
          var i = t.memoizedState !== null;
          if (i) {
            kC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ue = a) : kC(e);
      }
    }
    function kC(e) {
      for (; ue !== null; ) {
        var t = ue;
        Mn(t);
        try {
          Cx(t);
        } catch (i) {
          Tr(i), xr(t, t.return, i);
        }
        if (Xt(), t === e) {
          ue = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ue = a;
          return;
        }
        ue = t.return;
      }
    }
    function Hx(e, t) {
      ue = t, jx(t, e);
    }
    function jx(e, t) {
      for (; ue !== null; ) {
        var a = ue, i = a.child;
        (a.subtreeFlags & Gn) !== we && i !== null ? (gi(i, a), ue = i) : Vx(e, t);
      }
    }
    function Vx(e, t) {
      for (; ue !== null; ) {
        var a = ue;
        if ((a.flags & ya) !== we) {
          Mn(a);
          try {
            Px(t, a);
          } catch (u) {
            Tr(u), xr(a, a.return, u);
          }
          Xt();
        }
        if (a === e) {
          ue = null;
          return;
        }
        var i = a.sibling;
        if (i !== null) {
          gi(i, a.return), ue = i;
          return;
        }
        ue = a.return;
      }
    }
    function Px(e, t) {
      switch (t.tag) {
        case me:
        case We:
        case je: {
          if (t.mode & $e) {
            Hg();
            try {
              Po(Cr | Jn, t);
            } finally {
              Fg(t);
            }
          } else
            Po(Cr | Jn, t);
          break;
        }
      }
    }
    function Bx(e) {
      ue = e, $x();
    }
    function $x() {
      for (; ue !== null; ) {
        var e = ue, t = e.child;
        if ((ue.flags & mn) !== we) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ue = u, Wx(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ue = e;
          }
        }
        (e.subtreeFlags & Gn) !== we && t !== null ? (gi(t, e), ue = t) : Yx();
      }
    }
    function Yx() {
      for (; ue !== null; ) {
        var e = ue;
        (e.flags & ya) !== we && (Mn(e), Ix(e), Xt());
        var t = e.sibling;
        if (t !== null) {
          gi(t, e.return), ue = t;
          return;
        }
        ue = e.return;
      }
    }
    function Ix(e) {
      switch (e.tag) {
        case me:
        case We:
        case je: {
          e.mode & $e ? (Hg(), Ji(Cr | Jn, e, e.return), Fg(e)) : Ji(Cr | Jn, e, e.return);
          break;
        }
      }
    }
    function Wx(e, t) {
      for (; ue !== null; ) {
        var a = ue;
        Mn(a), Qx(a, t), Xt();
        var i = a.child;
        i !== null ? (gi(i, a), ue = i) : qx(e);
      }
    }
    function qx(e) {
      for (; ue !== null; ) {
        var t = ue, a = t.sibling, i = t.return;
        if (EC(t), t === e) {
          ue = null;
          return;
        }
        if (a !== null) {
          gi(a, i), ue = a;
          return;
        }
        ue = i;
      }
    }
    function Qx(e, t) {
      switch (e.tag) {
        case me:
        case We:
        case je: {
          e.mode & $e ? (Hg(), Ji(Cr, e, t), Fg(e)) : Ji(Cr, e, t);
          break;
        }
      }
    }
    var DC = !1;
    function gi(e, t) {
      !DC && e.return !== t && (DC = !0, E("Internal React error: Return pointer is inconsistent with parent.")), e.return = t;
    }
    function Gx(e) {
      switch (e.tag) {
        case me:
        case We:
        case je: {
          try {
            Po(Zn | Jn, e);
          } catch (a) {
            Tr(a), xr(e, e.return, a);
          }
          break;
        }
        case ve: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Tr(a), xr(e, e.return, a);
          }
          break;
        }
      }
    }
    function Xx(e) {
      switch (e.tag) {
        case me:
        case We:
        case je: {
          try {
            Po(Cr | Jn, e);
          } catch (t) {
            Tr(t), xr(e, e.return, t);
          }
          break;
        }
      }
    }
    function Kx(e) {
      switch (e.tag) {
        case me:
        case We:
        case je: {
          try {
            Ji(Zn | Jn, e, e.return);
          } catch (a) {
            Tr(a), xr(e, e.return, a);
          }
          break;
        }
        case ve: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && tS(e, e.return, t);
          break;
        }
      }
    }
    function Jx(e) {
      switch (e.tag) {
        case me:
        case We:
        case je:
          try {
            Ji(Cr | Jn, e, e.return);
          } catch (t) {
            Tr(t), xr(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Tp = Symbol.for;
      Tp("selector.component"), Tp("selector.has_pseudo_class"), Tp("selector.role"), Tp("selector.test_id"), Tp("selector.text");
    }
    var Zx = [];
    function eb() {
      Zx.forEach(function(e) {
        return e();
      });
    }
    var tb = A.ReactCurrentActQueue;
    function nb(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function OC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && tb.current !== null && E("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var rb = Math.ceil, lS = A.ReactCurrentDispatcher, uS = A.ReactCurrentOwner, wr = A.ReactCurrentBatchConfig, Zi = A.ReactCurrentActQueue, tr = (
      /*             */
      0
    ), MC = (
      /*               */
      1
    ), Kr = (
      /*                */
      2
    ), el = (
      /*                */
      4
    ), bu = 0, wp = 1, Gs = 2, fm = 3, xp = 4, LC = 5, oS = 6, yt = tr, Jr = null, _n = null, nr = Y, jl = Y, sS = Mo(Y), rr = bu, bp = null, dm = Y, _p = Y, pm = Y, kp = null, ka = null, cS = 0, NC = 500, zC = 1 / 0, ab = 500;
    function Dp() {
      zC = fn() + ab;
    }
    function UC() {
      return zC;
    }
    var vm = !1, fS = null, kf = null, Xs = !1, _u = null, Op = Y, dS = [], ib = 50, Mp = 0, pS = null, lb = 50, hm = 0, Lp = Kt, mm = Y;
    function ym() {
      return Jr;
    }
    function pa() {
      return (yt & (Kr | el)) !== tr ? fn() : (Lp !== Kt || (Lp = fn()), Lp);
    }
    function Bo(e) {
      var t = e.mode;
      if ((t & ze) === Me)
        return qe;
      if ((yt & Kr) !== tr && nr !== Y)
        return so(nr);
      var a = IT() !== YT;
      if (a) {
        if (wr.transition !== null) {
          var i = wr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return mm === Nn && (mm = sa()), mm;
      }
      var u = Ba();
      if (u !== Nn)
        return u;
      var s = YR();
      return s;
    }
    function ub(e) {
      var t = e.mode;
      return (t & ze) === Me ? qe : gr();
    }
    function ar(e, t, a) {
      Ob();
      var i = gm(e, t);
      return i === null ? null : (po(i, t, a), (yt & Kr) !== Y && i === Jr ? Nb(e) : (dn && zc(i, e, t), zb(e), i === Jr && ((yt & Kr) === tr && (_p = Ke(_p, t)), rr === xp && $o(i, nr)), Da(i, a), t === qe && yt === tr && (e.mode & ze) === Me && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Zi.isBatchingLegacy && (Dp(), O0())), i);
    }
    function ob(e, t, a) {
      var i = e.current;
      i.lanes = t, po(e, t, a), Da(e, a);
    }
    function gm(e, t) {
      e.lanes = Ke(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ke(a.lanes, t)), a === null && (e.flags & (Fe | mr)) !== we && XC(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ke(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ke(a.childLanes, t) : (u.flags & (Fe | mr)) !== we && XC(e), i = u, u = u.return;
      if (i.tag === re) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    function AC(e, t) {
      return (
        // TODO: Optimize slightly by comparing to root that fiber belongs to.
        // Requires some refactoring. Not a big deal though since it's rare for
        // concurrent apps to have more than a single root.
        Jr !== null && (e.mode & ze) !== Me && // If this is a render phase update (i.e. UNSAFE_componentWillReceiveProps),
        // then don't treat this as an interleaved update. This pattern is
        // accompanied by a warning but we haven't fully deprecated it yet. We can
        // remove once the deferRenderPhaseUpdateToNextBatch flag is enabled.
        (yt & Kr) === tr
      );
    }
    function Da(e, t) {
      var a = e.callbackNode;
      Dv(e, t);
      var i = bs(e, e === Jr ? nr : Y);
      if (i === Y) {
        a !== null && JC(a), e.callbackNode = null, e.callbackPriority = Nn;
        return;
      }
      var u = wl(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Zi.current !== null && a !== ES)) {
        a == null && s !== qe && E("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && JC(a);
      var f;
      if (u === qe)
        e.tag === Lo ? (Zi.isBatchingLegacy !== null && (Zi.didScheduleLegacyUpdate = !0), BT(jC.bind(null, e))) : D0(jC.bind(null, e)), Zi.current !== null ? Zi.current.push(No) : WR(function() {
          yt === tr && No();
        }), f = null;
      else {
        var p;
        switch (ho(i)) {
          case xn:
            p = ru;
            break;
          case Fi:
            p = Xu;
            break;
          case Hi:
            p = Yn;
            break;
          case fu:
            p = zi;
            break;
          default:
            p = Yn;
            break;
        }
        f = CS(p, FC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function FC(e, t) {
      if (Lw(), Lp = Kt, mm = Y, (yt & (Kr | el)) !== tr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Du();
      if (i && e.callbackNode !== a)
        return null;
      var u = bs(e, e === Jr ? nr : Y);
      if (u === Y)
        return null;
      var s = !Fn(e, u) && !Wm(e, u) && !t, f = s ? gb(e, u) : Cm(e, u);
      if (f !== bu) {
        if (f === Gs) {
          var p = Oc(e);
          p !== Y && (u = p, f = vS(e, p));
        }
        if (f === wp) {
          var v = bp;
          throw Ks(e, Y), $o(e, u), Da(e, fn()), v;
        }
        if (f === oS)
          $o(e, u);
        else {
          var y = !Fn(e, u), g = e.current.alternate;
          if (y && !cb(g)) {
            if (f = Cm(e, u), f === Gs) {
              var b = Oc(e);
              b !== Y && (u = b, f = vS(e, b));
            }
            if (f === wp) {
              var _ = bp;
              throw Ks(e, Y), $o(e, u), Da(e, fn()), _;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, sb(e, f, u);
        }
      }
      return Da(e, fn()), e.callbackNode === a ? FC.bind(null, e) : null;
    }
    function vS(e, t) {
      var a = kp;
      if (du(e)) {
        var i = Ks(e, t);
        i.flags |= yn, UT(e.containerInfo);
      }
      var u = Cm(e, t);
      if (u !== Gs) {
        var s = ka;
        ka = a, s !== null && HC(s);
      }
      return u;
    }
    function HC(e) {
      ka === null ? ka = e : ka.push.apply(ka, e);
    }
    function sb(e, t, a) {
      switch (t) {
        case bu:
        case wp:
          throw new Error("Root did not complete. This is a bug in React.");
        case Gs: {
          Js(e, ka);
          break;
        }
        case fm: {
          if ($o(e, a), gd(a) && // do not delay if we're inside an act() scope
          !ZC()) {
            var i = cS + NC - fn();
            if (i > 10) {
              var u = bs(e, Y);
              if (u !== Y)
                break;
              var s = e.suspendedLanes;
              if (!bl(s, a)) {
                pa(), Cd(e, s);
                break;
              }
              e.timeoutHandle = gy(Js.bind(null, e, ka), i);
              break;
            }
          }
          Js(e, ka);
          break;
        }
        case xp: {
          if ($o(e, a), _s(a))
            break;
          if (!ZC()) {
            var f = _v(e, a), p = f, v = fn() - p, y = Db(v) - v;
            if (y > 10) {
              e.timeoutHandle = gy(Js.bind(null, e, ka), y);
              break;
            }
          }
          Js(e, ka);
          break;
        }
        case LC: {
          Js(e, ka);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function cb(e) {
      for (var t = e; ; ) {
        if (t.flags & nu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!xa(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & nu && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function $o(e, t) {
      t = co(t, pm), t = co(t, _p), Ed(e, t);
    }
    function jC(e) {
      if (Nw(), (yt & (Kr | el)) !== tr)
        throw new Error("Should not already be working.");
      Du();
      var t = bs(e, Y);
      if (!Pr(t, qe))
        return Da(e, fn()), null;
      var a = Cm(e, t);
      if (e.tag !== Lo && a === Gs) {
        var i = Oc(e);
        i !== Y && (t = i, a = vS(e, i));
      }
      if (a === wp) {
        var u = bp;
        throw Ks(e, Y), $o(e, t), Da(e, fn()), u;
      }
      if (a === oS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Js(e, ka), Da(e, fn()), null;
    }
    function fb(e, t) {
      t !== Y && (vo(e, Ke(t, qe)), Da(e, fn()), (yt & (Kr | el)) === tr && (Dp(), No()));
    }
    function hS(e, t) {
      var a = yt;
      yt |= MC;
      try {
        return e(t);
      } finally {
        yt = a, yt === tr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Zi.isBatchingLegacy && (Dp(), O0());
      }
    }
    function db(e, t, a, i, u) {
      var s = Ba(), f = wr.transition;
      try {
        return wr.transition = null, G(xn), e(t, a, i, u);
      } finally {
        G(s), wr.transition = f, yt === tr && Dp();
      }
    }
    function ku(e) {
      _u !== null && _u.tag === Lo && (yt & (Kr | el)) === tr && Du();
      var t = yt;
      yt |= MC;
      var a = wr.transition, i = Ba();
      try {
        return wr.transition = null, G(xn), e ? e() : void 0;
      } finally {
        G(i), wr.transition = a, yt = t, (yt & (Kr | el)) === tr && No();
      }
    }
    function VC() {
      return (yt & (Kr | el)) !== tr;
    }
    function Sm(e, t) {
      qr(sS, jl, e), jl = Ke(jl, t);
    }
    function mS(e) {
      jl = sS.current, Wr(sS, e);
    }
    function Ks(e, t) {
      e.finishedWork = null, e.finishedLanes = Y;
      var a = e.timeoutHandle;
      if (a !== Sy && (e.timeoutHandle = Sy, IR(a)), _n !== null)
        for (var i = _n.return; i !== null; ) {
          var u = i.alternate;
          pC(u, i), i = i.return;
        }
      Jr = e;
      var s = Zs(e.current, null);
      return _n = s, nr = jl = t, rr = bu, bp = null, dm = Y, _p = Y, pm = Y, kp = null, ka = null, GT(), Yi.discardPendingWarnings(), s;
    }
    function PC(e, t) {
      do {
        var a = _n;
        try {
          if (Ch(), fE(), Xt(), uS.current = null, a === null || a.return === null) {
            rr = wp, bp = t, _n = null;
            return;
          }
          if (Je && a.mode & $e && tm(a, !0), ht)
            if (si(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              lu(a, i, nr);
            } else
              gs(a, t, nr);
          Hw(e, a.return, a, t, nr), IC(a);
        } catch (u) {
          t = u, _n === a && a !== null ? (a = a.return, _n = a) : a = _n;
          continue;
        }
        return;
      } while (!0);
    }
    function BC() {
      var e = lS.current;
      return lS.current = Xh, e === null ? Xh : e;
    }
    function $C(e) {
      lS.current = e;
    }
    function pb() {
      cS = fn();
    }
    function Em(e) {
      dm = Ke(e, dm);
    }
    function vb() {
      rr === bu && (rr = fm);
    }
    function yS() {
      (rr === bu || rr === fm || rr === Gs) && (rr = xp), Jr !== null && (Mc(dm) || Mc(_p)) && $o(Jr, nr);
    }
    function hb(e) {
      rr !== xp && (rr = Gs), kp === null ? kp = [e] : kp.push(e);
    }
    function mb() {
      return rr === bu;
    }
    function Cm(e, t) {
      var a = yt;
      yt |= Kr;
      var i = BC();
      if (Jr !== e || nr !== t) {
        if (dn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Np(e, nr), u.clear()), Rd(e, t);
        }
        Ks(e, t);
      }
      an(t);
      do
        try {
          yb();
          break;
        } catch (s) {
          PC(e, s);
        }
      while (!0);
      if (Ch(), yt = a, $C(i), _n !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Sc(), Jr = null, nr = Y, rr;
    }
    function yb() {
      for (; _n !== null; )
        YC(_n);
    }
    function gb(e, t) {
      var a = yt;
      yt |= Kr;
      var i = BC();
      if (Jr !== e || nr !== t) {
        if (dn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Np(e, nr), u.clear()), Rd(e, t);
        }
        Dp(), Ks(e, t);
      }
      an(t);
      do
        try {
          Sb();
          break;
        } catch (s) {
          PC(e, s);
        }
      while (!0);
      return Ch(), $C(i), yt = a, _n !== null ? (gc(), bu) : (Sc(), Jr = null, nr = Y, rr);
    }
    function Sb() {
      for (; _n !== null && !Sv(); )
        YC(_n);
    }
    function YC(e) {
      var t = e.alternate;
      Mn(e);
      var a;
      (e.mode & $e) !== Me ? (Ag(e), a = gS(t, e, jl), tm(e, !0)) : a = gS(t, e, jl), Xt(), e.memoizedProps = e.pendingProps, a === null ? IC(e) : _n = a, uS.current = null;
    }
    function IC(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & fs) === we) {
          Mn(t);
          var u = void 0;
          if ((t.mode & $e) === Me ? u = WE(a, t, jl) : (Ag(t), u = WE(a, t, jl), tm(t, !1)), Xt(), u !== null) {
            _n = u;
            return;
          }
        } else {
          var s = fx(a, t);
          if (s !== null) {
            s.flags &= yv, _n = s;
            return;
          }
          if ((t.mode & $e) !== Me) {
            tm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= fs, i.subtreeFlags = we, i.deletions = null;
          else {
            rr = oS, _n = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          _n = v;
          return;
        }
        t = i, _n = t;
      } while (t !== null);
      rr === bu && (rr = LC);
    }
    function Js(e, t) {
      var a = Ba(), i = wr.transition;
      try {
        wr.transition = null, G(xn), Eb(e, t, a);
      } finally {
        wr.transition = i, G(a);
      }
      return null;
    }
    function Eb(e, t, a) {
      do
        Du();
      while (_u !== null);
      if (Mb(), (yt & (Kr | el)) !== tr)
        throw new Error("Should not already be working.");
      var i = e.finishedWork, u = e.finishedLanes;
      if (ms(u), i === null)
        return au(), null;
      if (u === Y && E("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = Y, i === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Nn;
      var s = Ke(i.lanes, i.childLanes);
      Lv(e, s), e === Jr && (Jr = null, _n = null, nr = Y), ((i.subtreeFlags & Gn) !== we || (i.flags & Gn) !== we) && (Xs || (Xs = !0, CS(Yn, function() {
        return Du(), null;
      })));
      var f = (i.subtreeFlags & (ds | ps | ui | Gn)) !== we, p = (i.flags & (ds | ps | ui | Gn)) !== we;
      if (f || p) {
        var v = wr.transition;
        wr.transition = null;
        var y = Ba();
        G(xn);
        var g = yt;
        yt |= el, uS.current = null, hx(e, i), AE(), Mx(e, i, u), HR(e.containerInfo), e.current = i, sd(u), Ux(i, e, u), Zu(), ud(), yt = g, G(y), wr.transition = v;
      } else
        e.current = i, AE();
      var b = Xs;
      if (Xs && (Xs = !1, _u = e, Op = u), s = e.pendingLanes, s === Y && (kf = null), b || GC(e.current, !1), ja(i.stateNode, a), dn && e.memoizedUpdaters.clear(), eb(), Da(e, fn()), t !== null)
        for (var _ = e.onRecoverableError, N = 0; N < t.length; N++) {
          var U = t[N];
          _(U);
        }
      if (vm) {
        vm = !1;
        var P = fS;
        throw fS = null, P;
      }
      return Pr(Op, qe) && e.tag !== Lo && Du(), s = e.pendingLanes, Pr(s, qe) ? (Mw(), e === pS ? Mp++ : (Mp = 0, pS = e)) : Mp = 0, No(), au(), null;
    }
    function Du() {
      if (_u !== null) {
        var e = ho(Op), t = zv(Hi, e), a = wr.transition, i = Ba();
        try {
          return wr.transition = null, G(t), Rb();
        } finally {
          G(i), wr.transition = a;
        }
      }
      return !1;
    }
    function Cb(e) {
      dS.push(e), Xs || (Xs = !0, CS(Yn, function() {
        return Du(), null;
      }));
    }
    function Rb() {
      if (_u === null)
        return !1;
      var e = _u, t = Op;
      if (_u = null, Op = Y, (yt & (Kr | el)) !== tr)
        throw new Error("Cannot flush passive effects while already rendering.");
      bv(t);
      var a = yt;
      yt |= el, Bx(e.current), Hx(e, e.current);
      {
        var i = dS;
        dS = [];
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          Sx(e, s);
        }
      }
      cd(), GC(e.current, !0), yt = a, No(), hm = _u === null ? 0 : hm + 1, Ev(e);
      {
        var f = e.current.stateNode;
        f.effectDuration = 0, f.passiveEffectDuration = 0;
      }
      return !0;
    }
    function WC(e) {
      return kf !== null && kf.has(e);
    }
    function Tb(e) {
      kf === null ? kf = /* @__PURE__ */ new Set([e]) : kf.add(e);
    }
    function wb(e) {
      vm || (vm = !0, fS = e);
    }
    var xb = wb;
    function qC(e, t, a) {
      var i = nm(a, t), u = HE(e, i, qe);
      zo(e, u);
      var s = pa(), f = gm(e, qe);
      f !== null && (po(f, qe, s), Da(f, s));
    }
    function xr(e, t, a) {
      if (e.tag === re) {
        qC(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === re) {
          qC(i, e, a);
          return;
        } else if (i.tag === ve) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !WC(s)) {
            var f = nm(a, e), p = Pg(i, f, qe);
            zo(i, p);
            var v = pa(), y = gm(i, qe);
            y !== null && (po(y, qe, v), Da(y, v));
            return;
          }
        }
        i = i.return;
      }
      E(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function bb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = pa();
      Cd(e, a), Ub(e), Jr === e && bl(nr, a) && (rr === xp || rr === fm && gd(nr) && fn() - cS < NC ? Ks(e, Y) : pm = Ke(pm, a)), Da(e, u);
    }
    function QC(e, t) {
      t === Nn && (t = ub(e));
      var a = pa(), i = gm(e, t);
      i !== null && (po(i, t, a), Da(i, a));
    }
    function _b(e) {
      var t = e.memoizedState, a = Nn;
      t !== null && (a = t.retryLane), QC(e, a);
    }
    function kb(e, t) {
      var a = Nn, i;
      switch (e.tag) {
        case Re:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case xt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), QC(e, a);
    }
    function Db(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : rb(e / 1960) * 1960;
    }
    function Ob() {
      if (Mp > ib)
        throw Mp = 0, pS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      hm > lb && (hm = 0, E("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Mb() {
      Yi.flushLegacyContextWarning(), Yi.flushPendingUnsafeLifecycleWarnings();
    }
    function GC(e, t) {
      Mn(e), Rm(e, Ha, Kx), t && Rm(e, Qu, Jx), Rm(e, Ha, Gx), t && Rm(e, Qu, Xx), Xt();
    }
    function Rm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== we ? i = i.child : ((i.flags & t) !== we && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Tm = null;
    function XC(e) {
      {
        if ((yt & Kr) !== tr || !(e.mode & ze))
          return;
        var t = e.tag;
        if (t !== nt && t !== re && t !== ve && t !== me && t !== We && t !== at && t !== je)
          return;
        var a = Be(e) || "ReactComponent";
        if (Tm !== null) {
          if (Tm.has(a))
            return;
          Tm.add(a);
        } else
          Tm = /* @__PURE__ */ new Set([a]);
        var i = vn;
        try {
          Mn(e), E("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Mn(e) : Xt();
        }
      }
    }
    var gS;
    {
      var Lb = null;
      gS = function(e, t, a) {
        var i = a1(Lb, t);
        try {
          return dC(e, t, a);
        } catch (s) {
          if (s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Ch(), fE(), pC(e, t), a1(t, i), t.mode & $e && Ag(t), cs(null, dC, null, e, t, a), eu()) {
            var u = tu();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var KC = !1, SS;
    SS = /* @__PURE__ */ new Set();
    function Nb(e) {
      if (zr && !kw())
        switch (e.tag) {
          case me:
          case We:
          case je: {
            var t = _n && Be(_n) || "Unknown", a = t;
            if (!SS.has(a)) {
              SS.add(a);
              var i = Be(e) || "Unknown";
              E("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ve: {
            KC || (E("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), KC = !0);
            break;
          }
        }
    }
    function Np(e, t) {
      if (dn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          zc(e, i, t);
        });
      }
    }
    var ES = {};
    function CS(e, t) {
      {
        var a = Zi.current;
        return a !== null ? (a.push(t), ES) : ld(e, t);
      }
    }
    function JC(e) {
      if (e !== ES)
        return gv(e);
    }
    function ZC() {
      return Zi.current !== null;
    }
    function zb(e) {
      {
        if (e.mode & ze) {
          if (!OC())
            return;
        } else if (!nb() || yt !== tr || e.tag !== me && e.tag !== We && e.tag !== je)
          return;
        if (Zi.current === null) {
          var t = vn;
          try {
            Mn(e), E(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Be(e));
          } finally {
            t ? Mn(e) : Xt();
          }
        }
      }
    }
    function Ub(e) {
      e.tag !== Lo && OC() && Zi.current === null && E(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    var Si = null, Df = null, Ab = function(e) {
      Si = e;
    };
    function Of(e) {
      {
        if (Si === null)
          return e;
        var t = Si(e);
        return t === void 0 ? e : t.current;
      }
    }
    function RS(e) {
      return Of(e);
    }
    function TS(e) {
      {
        if (Si === null)
          return e;
        var t = Si(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Of(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ce,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function e1(e, t) {
      {
        if (Si === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ve: {
            typeof i == "function" && (u = !0);
            break;
          }
          case me: {
            (typeof i == "function" || s === De) && (u = !0);
            break;
          }
          case We: {
            (s === ce || s === De) && (u = !0);
            break;
          }
          case at:
          case je: {
            (s === Xe || s === De) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Si(a);
          if (f !== void 0 && f === Si(i))
            return !0;
        }
        return !1;
      }
    }
    function t1(e) {
      {
        if (Si === null || typeof WeakSet != "function")
          return;
        Df === null && (Df = /* @__PURE__ */ new WeakSet()), Df.add(e);
      }
    }
    var Fb = function(e, t) {
      {
        if (Si === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Du(), ku(function() {
          wS(e.current, i, a);
        });
      }
    }, Hb = function(e, t) {
      {
        if (e.context !== Ya)
          return;
        Du(), ku(function() {
          zp(t, e, null, null);
        });
      }
    };
    function wS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case me:
          case je:
          case ve:
            v = p;
            break;
          case We:
            v = p.render;
            break;
        }
        if (Si === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = Si(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === ve ? g = !0 : y = !0));
        }
        Df !== null && (Df.has(e) || i !== null && Df.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), (g || y) && ar(e, qe, Kt), u !== null && !g && wS(u, t, a), s !== null && wS(s, t, a);
      }
    }
    var jb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return xS(e.current, i, a), a;
      }
    };
    function xS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case me:
          case je:
          case ve:
            p = f;
            break;
          case We:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? Vb(e, a) : i !== null && xS(i, t, a), u !== null && xS(u, t, a);
      }
    }
    function Vb(e, t) {
      {
        var a = Pb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ie:
              t.add(i.stateNode);
              return;
            case he:
              t.add(i.stateNode.containerInfo);
              return;
            case re:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Pb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ie)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var bS;
    {
      bS = !1;
      try {
        var n1 = Object.preventExtensions({});
      } catch {
        bS = !0;
      }
    }
    function Bb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = we, this.subtreeFlags = we, this.deletions = null, this.lanes = Y, this.childLanes = Y, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !bS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ia = function(e, t, a, i) {
      return new Bb(e, t, a, i);
    };
    function _S(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function $b(e) {
      return typeof e == "function" && !_S(e) && e.defaultProps === void 0;
    }
    function Yb(e) {
      if (typeof e == "function")
        return _S(e) ? ve : me;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ce)
          return We;
        if (t === Xe)
          return at;
      }
      return nt;
    }
    function Zs(e, t) {
      var a = e.alternate;
      a === null ? (a = Ia(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = we, a.subtreeFlags = we, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & $n, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case nt:
        case me:
        case je:
          a.type = Of(e.type);
          break;
        case ve:
          a.type = RS(e.type);
          break;
        case We:
          a.type = TS(e.type);
          break;
      }
      return a;
    }
    function Ib(e, t) {
      e.flags &= $n | Fe;
      var a = e.alternate;
      if (a === null)
        e.childLanes = Y, e.lanes = t, e.child = null, e.subtreeFlags = we, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = we, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Wb(e, t, a) {
      var i;
      return e === yh ? (i = ze, t === !0 && (i |= dt, i |= ua)) : i = Me, dn && (i |= $e), Ia(re, null, null, i);
    }
    function kS(e, t, a, i, u, s) {
      var f = nt, p = e;
      if (typeof e == "function")
        _S(e) ? (f = ve, p = RS(p)) : p = Of(p);
      else if (typeof e == "string")
        f = ie;
      else
        e:
          switch (e) {
            case ra:
              return Yo(a.children, u, s, t);
            case Ja:
              f = ot, u |= dt, (u & ze) !== Me && (u |= ua);
              break;
            case R:
              return qb(a, u, s, t);
            case Ge:
              return Qb(a, u, s, t);
            case mt:
              return Gb(a, u, s, t);
            case Gt:
              return r1(a, u, s, t);
            case Qn:
            case On:
            case Za:
            case Mu:
            case Qt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case B:
                    f = rt;
                    break e;
                  case ne:
                    f = un;
                    break e;
                  case ce:
                    f = We, p = TS(p);
                    break e;
                  case Xe:
                    f = at;
                    break e;
                  case De:
                    f = en, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Be(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var g = Ia(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function DS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = kS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Yo(e, t, a, i) {
      var u = Ia(Et, e, i, t);
      return u.lanes = a, u;
    }
    function qb(e, t, a, i) {
      typeof e.id != "string" && E('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = Ia(lt, e, i, t | $e);
      return u.elementType = R, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Qb(e, t, a, i) {
      var u = Ia(Re, e, i, t);
      return u.elementType = Ge, u.lanes = a, u;
    }
    function Gb(e, t, a, i) {
      var u = Ia(xt, e, i, t);
      return u.elementType = mt, u.lanes = a, u;
    }
    function r1(e, t, a, i) {
      var u = Ia(Ue, e, i, t);
      u.elementType = Gt, u.lanes = a;
      var s = {};
      return u.stateNode = s, u;
    }
    function OS(e, t, a) {
      var i = Ia(Ve, e, null, t);
      return i.lanes = a, i;
    }
    function Xb() {
      var e = Ia(ie, null, null, Me);
      return e.elementType = "DELETED", e;
    }
    function Kb(e) {
      var t = Ia(Ht, null, null, Me);
      return t.stateNode = e, t;
    }
    function MS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = Ia(he, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function a1(e, t) {
      return e === null && (e = Ia(nt, null, null, Me)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Jb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Sy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Nn, this.eventTimes = fo(Y), this.expirationTimes = fo(Kt), this.pendingLanes = Y, this.suspendedLanes = Y, this.pingedLanes = Y, this.expiredLanes = Y, this.mutableReadLanes = Y, this.finishedLanes = Y, this.entangledLanes = Y, this.entanglements = fo(Y), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Es; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case yh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Lo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function i1(e, t, a, i, u, s, f, p, v, y) {
      var g = new Jb(e, t, a, p, v), b = Wb(t, s);
      g.current = b, b.stateNode = g;
      {
        var _ = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null
        };
        b.memoizedState = _;
      }
      return Hy(b), g;
    }
    var LS = "18.0.0-fc46dba67-20220329";
    function Zb(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Or(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: pr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var NS, zS;
    NS = !1, zS = {};
    function l1(e) {
      if (!e)
        return Ya;
      var t = Fa(e), a = PT(t);
      if (t.tag === ve) {
        var i = t.type;
        if (Ul(i))
          return _0(t, i, a);
      }
      return a;
    }
    function e_(e, t) {
      {
        var a = Fa(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = rd(a);
        if (u === null)
          return null;
        if (u.mode & dt) {
          var s = Be(a) || "Component";
          if (!zS[s]) {
            zS[s] = !0;
            var f = vn;
            try {
              Mn(u), a.mode & dt ? E("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : E("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Mn(f) : Xt();
            }
          }
        }
        return u.stateNode;
      }
    }
    function u1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return i1(e, t, v, y, a, i, u, s, f);
    }
    function o1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = i1(a, i, g, e, u, s, f, p, v);
      b.context = l1(null);
      var _ = b.current, N = pa(), U = Bo(_), P = Cu(N, U);
      return P.callback = t ?? null, zo(_, P), ob(b, U, N), b;
    }
    function zp(e, t, a, i) {
      rn(t, e);
      var u = t.current, s = pa(), f = Bo(u);
      fd(f);
      var p = l1(a);
      t.context === null ? t.context = p : t.pendingContext = p, zr && vn !== null && !NS && (NS = !0, E(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Be(vn) || "Unknown"));
      var v = Cu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && E("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i), zo(u, v);
      var y = ar(u, f, s);
      return y !== null && xh(y, u, f), f;
    }
    function wm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ie:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function t_(e) {
      switch (e.tag) {
        case re:
          var t = e.stateNode;
          if (du(t)) {
            var a = Ov(t);
            fb(t, a);
          }
          break;
        case Re:
          var i = pa();
          ku(function() {
            return ar(e, qe, i);
          });
          var u = qe;
          US(e, u);
          break;
      }
    }
    function s1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Nc(a.retryLane, t));
    }
    function US(e, t) {
      s1(e, t);
      var a = e.alternate;
      a && s1(a, t);
    }
    function n_(e) {
      if (e.tag === Re) {
        var t = pa(), a = io;
        ar(e, a, t), US(e, a);
      }
    }
    function r_(e) {
      if (e.tag === Re) {
        var t = pa(), a = Bo(e);
        ar(e, a, t), US(e, a);
      }
    }
    function c1(e) {
      var t = id(e);
      return t === null ? null : t.stateNode;
    }
    var f1 = function(e) {
      return null;
    };
    function a_(e) {
      return f1(e);
    }
    var d1 = function(e) {
      return !1;
    };
    function i_(e) {
      return d1(e);
    }
    var p1 = null, v1 = null, h1 = null, m1 = null, y1 = null, g1 = null, S1 = null, E1 = null, C1 = null;
    {
      var R1 = function(e, t, a) {
        var i = t[a], u = ft(e) ? e.slice() : it({}, e);
        return a + 1 === t.length ? (ft(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = R1(e[i], t, a + 1), u);
      }, T1 = function(e, t) {
        return R1(e, t, 0);
      }, w1 = function(e, t, a, i) {
        var u = t[i], s = ft(e) ? e.slice() : it({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], ft(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = w1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, x1 = function(e, t, a) {
        if (t.length !== a.length) {
          tt("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              tt("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return w1(e, t, a, 0);
      }, b1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = ft(e) ? e.slice() : it({}, e);
        return s[u] = b1(e[u], t, a + 1, i), s;
      }, _1 = function(e, t, a) {
        return b1(e, t, 0, a);
      }, AS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      p1 = function(e, t, a, i) {
        var u = AS(e, t);
        if (u !== null) {
          var s = _1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = it({}, e.memoizedProps), ar(e, qe, Kt);
        }
      }, v1 = function(e, t, a) {
        var i = AS(e, t);
        if (i !== null) {
          var u = T1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = it({}, e.memoizedProps), ar(e, qe, Kt);
        }
      }, h1 = function(e, t, a, i) {
        var u = AS(e, t);
        if (u !== null) {
          var s = x1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = it({}, e.memoizedProps), ar(e, qe, Kt);
        }
      }, m1 = function(e, t, a) {
        e.pendingProps = _1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), ar(e, qe, Kt);
      }, y1 = function(e, t) {
        e.pendingProps = T1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps), ar(e, qe, Kt);
      }, g1 = function(e, t, a) {
        e.pendingProps = x1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), ar(e, qe, Kt);
      }, S1 = function(e) {
        ar(e, qe, Kt);
      }, E1 = function(e) {
        f1 = e;
      }, C1 = function(e) {
        d1 = e;
      };
    }
    function l_(e) {
      var t = rd(e);
      return t === null ? null : t.stateNode;
    }
    function u_(e) {
      return null;
    }
    function o_() {
      return vn;
    }
    function s_(e) {
      var t = e.findFiberByHostInstance, a = A.ReactCurrentDispatcher;
      return Hr({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: p1,
        overrideHookStateDeletePath: v1,
        overrideHookStateRenamePath: h1,
        overrideProps: m1,
        overridePropsDeletePath: y1,
        overridePropsRenamePath: g1,
        setErrorHandler: E1,
        setSuspenseHandler: C1,
        scheduleUpdate: S1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: l_,
        findFiberByHostInstance: t || u_,
        // React Refresh
        findHostInstancesForRefresh: jb,
        scheduleRefresh: Fb,
        scheduleRoot: Hb,
        setRefreshHandler: Ab,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: o_,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: LS
      });
    }
    var k1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function FS(e) {
      this._internalRoot = e;
    }
    xm.prototype.render = FS.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? E("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : bm(arguments[1]) ? E("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && E("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== hn) {
          var i = c1(t.current);
          i && i.parentNode !== a && E("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      zp(e, t, null, null);
    }, xm.prototype.unmount = FS.prototype.unmount = function() {
      typeof arguments[0] == "function" && E("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        VC() && E("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ku(function() {
          zp(null, e, null, null);
        }), R0(t);
      }
    };
    function c_(e, t) {
      if (!bm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      D1(e);
      var a = !1, i = !1, u = "", s = k1;
      t != null && (t.hydrate ? tt("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ka && E(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = u1(e, yh, null, a, i, u, s);
      ch(f.current, e);
      var p = e.nodeType === hn ? e.parentNode : e;
      return Bd(p), new FS(f);
    }
    function xm(e) {
      this._internalRoot = e;
    }
    function f_(e) {
      e && yo(e);
    }
    xm.prototype.unstable_scheduleHydration = f_;
    function d_(e, t, a) {
      if (!bm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      D1(e), t === void 0 && E("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = k1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = o1(t, null, e, yh, i, s, f, p, v);
      if (ch(y.current, e), Bd(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Rw(y, b);
        }
      return new xm(y);
    }
    function bm(e) {
      return !!(e && (e.nodeType === Ar || e.nodeType === aa || e.nodeType === Hf || !le));
    }
    function Up(e) {
      return !!(e && (e.nodeType === Ar || e.nodeType === aa || e.nodeType === Hf || e.nodeType === hn && e.nodeValue === " react-mount-point-unstable "));
    }
    function D1(e) {
      e.nodeType === Ar && e.tagName && e.tagName.toUpperCase() === "BODY" && E("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), tp(e) && (e._reactRootContainer ? E("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : E("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var p_ = A.ReactCurrentOwner, O1;
    O1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== hn) {
        var t = c1(e._reactRootContainer.current);
        t && t.parentNode !== e && E("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = HS(e), u = !!(i && Oo(i));
      u && !a && E("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Ar && e.tagName && e.tagName.toUpperCase() === "BODY" && E("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function HS(e) {
      return e ? e.nodeType === aa ? e.documentElement : e.firstChild : null;
    }
    function M1() {
    }
    function v_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var _ = wm(f);
            s.call(_);
          };
        }
        var f = o1(
          t,
          i,
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          M1
        );
        e._reactRootContainer = f, ch(f.current, e);
        var p = e.nodeType === hn ? e.parentNode : e;
        return Bd(p), ku(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var _ = wm(g);
            y.call(_);
          };
        }
        var g = u1(
          e,
          Lo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          M1
        );
        e._reactRootContainer = g, ch(g.current, e);
        var b = e.nodeType === hn ? e.parentNode : e;
        return Bd(b), ku(function() {
          zp(t, g, a, i);
        }), g;
      }
    }
    function h_(e, t) {
      e !== null && typeof e != "function" && E("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function _m(e, t, a, i, u) {
      O1(a), h_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = v_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = wm(f);
            p.call(v);
          };
        }
        zp(t, f, e, u);
      }
      return wm(f);
    }
    function m_(e) {
      {
        var t = p_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || E("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Rt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Ar ? e : e_(e, "findDOMNode");
    }
    function y_(e, t, a) {
      if (E("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Up(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = tp(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return _m(null, e, t, !0, a);
    }
    function g_(e, t, a) {
      if (E("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Up(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = tp(t) && t._reactRootContainer === void 0;
        i && E("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return _m(null, e, t, !1, a);
    }
    function S_(e, t, a, i) {
      if (E("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Up(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !hc(e))
        throw new Error("parentComponent must be a valid React Component");
      return _m(e, t, a, !1, i);
    }
    function E_(e) {
      if (!Up(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = tp(e) && e._reactRootContainer === void 0;
        t && E("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = HS(e), i = a && !Oo(a);
          i && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return ku(function() {
          _m(null, null, e, !1, function() {
            e._reactRootContainer = null, R0(e);
          });
        }), !0;
      } else {
        {
          var u = HS(e), s = !!(u && Oo(u)), f = e.nodeType === Ar && Up(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && E("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Uv(t_), Fv(n_), bd(r_), Hv(Ba), jv(Uc), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && E("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Wf(kR), vc(hS, db, ku);
    function C_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!bm(t))
        throw new Error("Target container is not a DOM element.");
      return Zb(e, t, null, a);
    }
    function R_(e, t, a, i) {
      return S_(e, t, a, i);
    }
    var jS = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Oo, lf, fh, Iu, Xl, hS]
    };
    function T_(e, t) {
      return jS.usingClientEntryPoint || E('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), c_(e, t);
    }
    function w_(e, t, a) {
      return jS.usingClientEntryPoint || E('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), d_(e, t, a);
    }
    function x_(e) {
      return VC() && E("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ku(e);
    }
    var b_ = s_({
      findFiberByHostInstance: Vs,
      bundleType: 1,
      version: LS,
      rendererPackageName: "react-dom"
    });
    if (!b_ && on && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var L1 = window.location.protocol;
      /^(https?|file):$/.test(L1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (L1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ma.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = jS, Ma.createPortal = C_, Ma.createRoot = T_, Ma.findDOMNode = m_, Ma.flushSync = x_, Ma.hydrate = y_, Ma.hydrateRoot = w_, Ma.render = g_, Ma.unmountComponentAtNode = E_, Ma.unstable_batchedUpdates = hS, Ma.unstable_renderSubtreeIntoContainer = R_, Ma.version = LS, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ma;
}
function Y1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y1);
    } catch (Z) {
      console.error(Z);
    }
  }
}
process.env.NODE_ENV === "production" ? (Y1(), IS.exports = F_()) : IS.exports = H_();
var j_ = IS.exports;
console.log(window.react1, Dm, window.react1 === Dm);
console.log("XXX");
console.log("React.version", Dm.version, j_.version);
function $_() {
  const Z = Dm.useRef(null);
  return /* @__PURE__ */ z_.jsx("div", { ref: Z });
}
export {
  $_ as SubakGame
};
