webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-flexbox-grid */ "./node_modules/react-flexbox-grid/lib/index.js");
/* harmony import */ var react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_dateUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/dateUtils */ "./utils/dateUtils.js");
/* harmony import */ var _BlackLivesMatter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BlackLivesMatter */ "./components/BlackLivesMatter.js");



var _jsxFileName = "C:\\Users\\user\\Downloads\\telmo-master\\telmo-master\\components\\Layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var menu = [{
  path: '/',
  name: 'Home'
}, {
  path: '/about',
  name: 'About'
}, {
  path: '/uses',
  name: 'More'
}];
var SHORTCUTS = ['Digit0', 'Digit1', 'Digit2'];
var avtar = "\"...publicogplaceholder.jpg\"";
var SALUTS = ['Hey you.', 'Welcome.', "What's up?", "How's life?", '👋', 'Long time no see.', 'Yo!'];

function Layout(_ref) {
  _s();

  var _this = this;

  var children = _ref.children,
      isHomepage = _ref.isHomepage,
      secondaryPage = _ref.secondaryPage;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  var onLoadTheme = typeof localStorage !== 'undefined' && localStorage.getItem('BLOG_THEME');

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(onLoadTheme),
      theme = _useState[0],
      setTheme = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      mounted = _useState2[0],
      setMounted = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(SALUTS[Math.floor(Math.random() * SALUTS.length)]),
      salut = _useState3[0];

  var switchTheme = function switchTheme() {
    var setTo = theme === 'dark' ? 'light' : 'dark';
    setTheme(setTo);
  };

  function triggerShortcut(e) {
    if (SHORTCUTS.includes(e.code)) {
      // Split code to get only the number
      var code = e.code.split('t')[1]; // Get route from menu

      var path = menu[code].path;
      router.push(path);
    }
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    document.addEventListener('keypress', triggerShortcut);
    if (onLoadTheme) return;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme('dark');
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('BLOG_THEME', theme);
    setMounted(true);
  }, [theme]);

  var containerProps = _objectSpread(_objectSpread({}, isHomepage && {
    md: 12
  }), !isHomepage && {
    md: 5,
    mdOffset: 2
  });

  if (!mounted) return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 24
    }
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_BlackLivesMatter__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "top-menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    as: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: avtar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  })))), menu.map(function (_ref2) {
    var path = _ref2.path,
        name = _ref2.name;
    return __jsx("li", {
      key: name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: path,
      as: path,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    }, name)));
  }))), __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 2,
    style: {
      textAlign: 'right'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("button", {
    className: "theme-switch-button",
    onClick: function onClick() {
      return switchTheme();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, theme === 'dark' ? __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Sun"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 35
    }
  }) : __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Moon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 45
    }
  }))))), __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, containerProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 11
    }
  }), !secondaryPage && __jsx("div", {
    style: {
      textAlign: 'center'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, __jsx("h1", {
    className: "blog-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, salut), __jsx("p", {
    className: "entry-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, "Welcome to Once. 2.0 Enjoy it\uFF01 \u2014 Timmy")), children, secondaryPage && __jsx("div", {
    className: "bottom-mobile-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 15
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 19
    }
  }), __jsx(react_flexbox_grid__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 19
    }
  }, __jsx("button", {
    className: "theme-switch-button-mobile",
    onClick: function onClick() {
      return switchTheme();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 21
    }
  }, theme === 'dark' ? __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Sun"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 27
    }
  }), " Light") : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_4__["Moon"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 27
    }
  }), " Dark")))))))), __jsx("footer", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, "No tracking. No ads. Happy ", Object(_utils_dateUtils__WEBPACK_IMPORTED_MODULE_7__["currentDayName"])(), "!"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, "IG@once"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, "\xA9 ", new Date().getFullYear())));
}

_s(Layout, "rLcjC0FttT01+Ri66r01MbIe0go=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQuanMiXSwibmFtZXMiOlsibWVudSIsInBhdGgiLCJuYW1lIiwiU0hPUlRDVVRTIiwiYXZ0YXIiLCJTQUxVVFMiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImlzSG9tZXBhZ2UiLCJzZWNvbmRhcnlQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwib25Mb2FkVGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlU3RhdGUiLCJ0aGVtZSIsInNldFRoZW1lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzYWx1dCIsInN3aXRjaFRoZW1lIiwic2V0VG8iLCJ0cmlnZ2VyU2hvcnRjdXQiLCJlIiwiaW5jbHVkZXMiLCJjb2RlIiwic3BsaXQiLCJwdXNoIiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJkb2N1bWVudEVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzZXRJdGVtIiwiY29udGFpbmVyUHJvcHMiLCJtZCIsIm1kT2Zmc2V0IiwibWFwIiwidGV4dEFsaWduIiwiY3VycmVudERheU5hbWUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUEsSUFBTUEsSUFBSSxHQUFHLENBQ1g7QUFDRUMsTUFBSSxFQUFFLEdBRFI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FEVyxFQUtYO0FBQ0VELE1BQUksRUFBRSxRQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBTFcsRUFTWDtBQUNFRCxNQUFJLEVBQUUsT0FEUjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQVRXLENBQWI7QUFlQSxJQUFNQyxTQUFTLEdBQUcsQ0FB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QUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUdFLE1BQUMsc0RBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsNEJBQWxCO0FBQStDLFdBQU8sRUFBRTtBQUFBLGFBQU1nQixXQUFXLEVBQWpCO0FBQUEsS0FBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHVCxLQUFLLEtBQUssTUFBVixHQUNDLG1FQUNFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLFdBREQsR0FLQyxtRUFDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixVQU5KLENBREYsQ0FIRixDQURGLENBaEJKLENBREYsQ0FERixDQWpDRixFQTJFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FBaUMrQix1RUFBYyxFQUEvQyxNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFhLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFiLENBSEYsQ0EzRUYsQ0FERjtBQW1GRDs7R0FwSVEzQyxNO1VBQ1FLLHFEOzs7S0FEUkwsTTtBQXNJTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDdiOTc1OGZmYzI2MWFiYjMyYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBHcmlkLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWZsZXhib3gtZ3JpZCdcbmltcG9ydCB7IFN1biwgTW9vbiB9IGZyb20gJ3JlYWN0LWZlYXRoZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgY3VycmVudERheU5hbWUgfSBmcm9tICcuLi91dGlscy9kYXRlVXRpbHMnXG5cbmltcG9ydCBCbGFja0xpdmVzTWF0dGVyIGZyb20gJy4vQmxhY2tMaXZlc01hdHRlcidcblxuY29uc3QgbWVudSA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBuYW1lOiAnSG9tZScsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2Fib3V0JyxcbiAgICBuYW1lOiAnQWJvdXQnLFxuICB9LFxuICB7XG4gICAgcGF0aDogJy91c2VzJyxcbiAgICBuYW1lOiAnTW9yZScsXG4gIH0sXG5dXG5cbmNvbnN0IFNIT1JUQ1VUUyA9IFsnRGlnaXQwJywgJ0RpZ2l0MScsICdEaWdpdDInXVxuY29uc3QgYXZ0YXI9YFwiLi4uXFxwdWJsaWNcXG9nXFxwbGFjZWhvbGRlci5qcGdcImBcbmNvbnN0IFNBTFVUUyA9IFtcbiAgJ0hleSB5b3UuJyxcbiAgJ1dlbGNvbWUuJyxcbiAgYFdoYXQncyB1cD9gLFxuICBgSG93J3MgbGlmZT9gLFxuICAn8J+RiycsXG4gICdMb25nIHRpbWUgbm8gc2VlLicsXG4gICdZbyEnLFxuXVxuXG5mdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiwgaXNIb21lcGFnZSwgc2Vjb25kYXJ5UGFnZSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IG9uTG9hZFRoZW1lID0gdHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0JMT0dfVEhFTUUnKVxuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKG9uTG9hZFRoZW1lKVxuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3NhbHV0XSA9IHVzZVN0YXRlKFNBTFVUU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBTQUxVVFMubGVuZ3RoKV0pXG4gIGNvbnN0IHN3aXRjaFRoZW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHNldFRvID0gdGhlbWUgPT09ICdkYXJrJyA/ICdsaWdodCcgOiAnZGFyaydcblxuICAgIHNldFRoZW1lKHNldFRvKVxuICB9XG5cbiAgZnVuY3Rpb24gdHJpZ2dlclNob3J0Y3V0KGUpIHtcbiAgICBpZiAoU0hPUlRDVVRTLmluY2x1ZGVzKGUuY29kZSkpIHtcbiAgICAgIC8vIFNwbGl0IGNvZGUgdG8gZ2V0IG9ubHkgdGhlIG51bWJlclxuICAgICAgY29uc3QgY29kZSA9IGUuY29kZS5zcGxpdCgndCcpWzFdXG5cbiAgICAgIC8vIEdldCByb3V0ZSBmcm9tIG1lbnVcbiAgICAgIGNvbnN0IHsgcGF0aCB9ID0gbWVudVtjb2RlXVxuXG4gICAgICByb3V0ZXIucHVzaChwYXRoKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0cmlnZ2VyU2hvcnRjdXQpXG5cbiAgICBpZiAob25Mb2FkVGhlbWUpIHJldHVyblxuXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiKS5tYXRjaGVzKSB7XG4gICAgICBzZXRUaGVtZSgnZGFyaycpXG4gICAgfVxuICB9LCBbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUnLCB0aGVtZSlcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdCTE9HX1RIRU1FJywgdGhlbWUpXG5cbiAgICBzZXRNb3VudGVkKHRydWUpXG4gIH0sIFt0aGVtZV0pXG5cbiAgY29uc3QgY29udGFpbmVyUHJvcHMgPSB7XG4gICAgLi4uaXNIb21lcGFnZSAmJiB7IG1kOiAxMiB9LFxuICAgIC4uLiFpc0hvbWVwYWdlICYmIHsgbWQ6IDUsIG1kT2Zmc2V0OiAyIH0sXG4gIH1cblxuICBpZiAoIW1vdW50ZWQpIHJldHVybiA8ZGl2IC8+XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJsYWNrTGl2ZXNNYXR0ZXIgLz5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbWVudVwiPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgeHM9ezEwfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGFzPVwiL1wiPlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXthdnRhcn0vPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgICB7bWVudS5tYXAoKHsgcGF0aCwgbmFtZSB9KSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17bmFtZX0+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwYXRofSBhcz17cGF0aH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPntuYW1lfTwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgICA8Q29sIHhzPXsyfSBzdHlsZT17eyB0ZXh0QWxpZ246ICdyaWdodCcgfX0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRoZW1lLXN3aXRjaC1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hUaGVtZSgpfT5cbiAgICAgICAgICAgICAge3RoZW1lID09PSAnZGFyaycgPyA8U3VuIC8+IDogPE1vb24gLz59XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEdyaWQ+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCB7Li4uY29udGFpbmVyUHJvcHN9PlxuICAgICAgICAgICAgeyFzZWNvbmRhcnlQYWdlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInIH19PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJibG9nLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICB7c2FsdXR9XG4gICAgICAgICAgICAgICAgPC9oMT5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVudHJ5LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICBXZWxjb21lIHRvIE9uY2UuIDIuMCBFbmpveSBpdO+8gSDigJQgVGltbXlcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgICAgICB7c2Vjb25kYXJ5UGFnZSAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLW1vYmlsZS1uYXZcIj5cbiAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gLz5cblxuICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGhlbWUtc3dpdGNoLWJ1dHRvbi1tb2JpbGVcIiBvbkNsaWNrPXsoKSA9PiBzd2l0Y2hUaGVtZSgpfT5cbiAgICAgICAgICAgICAgICAgICAgICB7dGhlbWUgPT09ICdkYXJrJyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxTdW4gLz4gTGlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9vbiAvPiBEYXJrXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9HcmlkPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8ZGl2Pk5vIHRyYWNraW5nLiBObyBhZHMuIEhhcHB5IHtjdXJyZW50RGF5TmFtZSgpfSE8L2Rpdj5cbiAgICAgICAgPGRpdj5JR0BvbmNlPC9kaXY+XG4gICAgICAgIDxkaXY+JmNvcHk7IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdLCJzb3VyY2VSb290IjoiIn0=