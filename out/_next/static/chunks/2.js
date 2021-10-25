(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./writings/dark-light-mode-css-javascript.md":
/*!****************************************************!*\
  !*** ./writings/dark-light-mode-css-javascript.md ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"Dark and light mode with CSS and JavaScript\"\ndate: \"2020-04-22\"\nog:\n  description: \"Implement dark mode with only CSS and JavaScript\"\n  image: \"https://telmo.im/og/darkmodecssjs.png\"\nauthor:\n  twitter: \"telmo\"\n  name: \"Telmo Goncalves\"\n---\n\nI've implemented dark/light mode before using `styled-components`\nas well as `SCSS`, but this time I wanted to do it just using `CSS`,\nso gave it a go, and it's so simple.\n\n## The CSS\n\nFirst of all lets create a `style.css` file, it can be in the root\nof our project, we'll keep this simple and straight to the point.\n\nOpen your command line, navigate to whatever folder you keep your projects\nand run the following:\n\n```bash\ntake dark-light-mode && touch style.css\n```\n\n> If you're wondering what `take` does, it'll create a new directory for you and auto navigate to it.\n\nNow, in our `style.css` file lets put the following code, this will be the variables for the default (light) theme:\n\n```css\n:root {\n  --bg-color: #fff;\n  --text-color: #000;\n}\n```\n\nIn order to see this working, we need to create a `HTML` file, so lets do\nthat, in your command line run:\n\n```bash\ntouch index.html\n```\n\nAnd put the following code, you can notice we're already importing our\n`style.css` file:\n\n```html:5\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Light and Dark Mode</title>\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\n</head>\n<body>\n  <h1>Our own dark / light app!</h1>\n</body>\n</html>\n```\n\nIf you go ahead and open `index.html` in your browser you should see\na title **\"Our own dark / light app!\"**.\n\n<br />\n\nNow let us start adding some styling. We'll be using `var(--variable-name)`, that's\nthe way you can re-use and call variables in css:\n\n```css:6-9\n:root {\n  --bg-color: #fff;\n  --text-color: #000;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--text-color);\n}\n```\n\nIf you go ahead and refresh your page it should look exactly the same, and that's alright.\n\n<br />\n\nBefore jumping into the **JavaScript** part, we can add our variables for the dark\ntheme already:\n\n```css:6-9\n:root {\n  --bg-color: #fff;\n  --text-color: #000;\n}\n\n[data-theme=\"dark\"] {\n  --bg-color: #000;\n  --text-color: #fff;\n}\n\nbody {\n  background-color: var(--bg-color);\n  color: var(--text-color);\n}\n```\n\nWhat are we doing here?\n\n- Using `[data-theme=\"dark\"]` that we'll cover in the JavaScript section;\n- Swaping the background and the text colors from white to black and vice-versa;\n\n---\n\n## The JavaScript\n\nAlright, now we just need a small JavaScript code to get this working, in\nyour `index.html` file add the following code:\n\n```html:7-12\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Light and Dark Mode</title>\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\n\n  <script type=\"text/javascript\">\n    // Wait for document to load\n    document.addEventListener(\"DOMContentLoaded\", function(event) {\n      document.documentElement.setAttribute(\"data-theme\", \"dark\");\n    });\n  </script>\n</head>\n<body>\n  <h1>Our own dark / light app!</h1>\n</body>\n</html>\n```\n\nNow, if you refresh the page you'll see that it switched to a `#000` background\nand `#fff` text. Cool beans right?\n\nLets break this down, what `document.documentElement` gets is the `html` tag from\nour `index.html`, so even without the JavaScript code we could do:\n\n```html:!2\n<!DOCTYPE html>\n<html data-theme=\"dark\">\n\n<!-- Rest of the code -->\n```\n\nThis would have exactly the same effect, but we want to use JavaScript so we\ncan change it dynamically.\n\n<br />\n\n## The Switch\n\nLets make some changes to our JavaScript and also add a button to our `index.html` that will trigger the theme change:\n\n> Check the comments in the code, it might be easier to keep track of what's happening\n\n```html:31,!-12-26\n<!DOCTYPE html>\n<html>\n<head>\n  <title>Light and Dark Mode</title>\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">\n\n  <script type=\"text/javascript\">\n    // Wait for document to load\n    document.addEventListener(\"DOMContentLoaded\", function(event) {\n      document.documentElement.setAttribute(\"data-theme\", \"light\");\n\n      // Get our button switcher\n      var themeSwitcher = document.getElementById(\"theme-switcher\");\n\n      // When our button gets clicked\n      themeSwitcher.onclick = function() {\n        // Get the current selected theme, on the first run\n        // it should be `light`\n        var currentTheme = document.documentElement.getAttribute(\"data-theme\");\n\n        // Switch between `dark` and `light`\n        var switchToTheme = currentTheme === \"dark\" ? \"light\" : \"dark\"\n\n        // Set our currenet theme to the new one\n        document.documentElement.setAttribute(\"data-theme\", switchToTheme);\n      }\n    });\n  </script>\n</head>\n<body>\n  <button id=\"theme-switcher\">Switch themes!</button>\n  <h1>Our own dark / light app!</h1>\n</body>\n</html>\n```\n\n<br />\n\nAnd that's it! Try it out, it should go from `light` to `dark` and vice-versa.\n\n<hr />\n\nIf you have any questions you can always drop me a message on Twitter 👇\n");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3JpdGluZ3MvZGFyay1saWdodC1tb2RlLWNzcy1qYXZhc2NyaXB0Lm1kIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFlLDBpQ0FBMitCLHFCQUFxQix1QkFBdUIsR0FBRyxxdkJBQXF2QixxQkFBcUIsdUJBQXVCLEdBQUcsVUFBVSxzQ0FBc0MsNkJBQTZCLEdBQUcsME9BQTBPLHFCQUFxQix1QkFBdUIsR0FBRywyQkFBMkIscUJBQXFCLHVCQUF1QixHQUFHLFVBQVUsc0NBQXNDLDZCQUE2QixHQUFHLCtHQUErRyxrRkFBa0Ysa2NBQWtjLHdFQUF3RSxPQUFPLEVBQUUsa2xDQUFrbEMseUVBQXlFLDRHQUE0RyxxRkFBcUYsaUxBQWlMLGlRQUFpUSxTQUFTLE9BQU8sRUFBRSx5VUFBeVUsRSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIi0tLVxcbnRpdGxlOiBcXFwiRGFyayBhbmQgbGlnaHQgbW9kZSB3aXRoIENTUyBhbmQgSmF2YVNjcmlwdFxcXCJcXG5kYXRlOiBcXFwiMjAyMC0wNC0yMlxcXCJcXG5vZzpcXG4gIGRlc2NyaXB0aW9uOiBcXFwiSW1wbGVtZW50IGRhcmsgbW9kZSB3aXRoIG9ubHkgQ1NTIGFuZCBKYXZhU2NyaXB0XFxcIlxcbiAgaW1hZ2U6IFxcXCJodHRwczovL3RlbG1vLmltL29nL2Rhcmttb2RlY3NzanMucG5nXFxcIlxcbmF1dGhvcjpcXG4gIHR3aXR0ZXI6IFxcXCJ0ZWxtb1xcXCJcXG4gIG5hbWU6IFxcXCJUZWxtbyBHb25jYWx2ZXNcXFwiXFxuLS0tXFxuXFxuSSd2ZSBpbXBsZW1lbnRlZCBkYXJrL2xpZ2h0IG1vZGUgYmVmb3JlIHVzaW5nIGBzdHlsZWQtY29tcG9uZW50c2BcXG5hcyB3ZWxsIGFzIGBTQ1NTYCwgYnV0IHRoaXMgdGltZSBJIHdhbnRlZCB0byBkbyBpdCBqdXN0IHVzaW5nIGBDU1NgLFxcbnNvIGdhdmUgaXQgYSBnbywgYW5kIGl0J3Mgc28gc2ltcGxlLlxcblxcbiMjIFRoZSBDU1NcXG5cXG5GaXJzdCBvZiBhbGwgbGV0cyBjcmVhdGUgYSBgc3R5bGUuY3NzYCBmaWxlLCBpdCBjYW4gYmUgaW4gdGhlIHJvb3RcXG5vZiBvdXIgcHJvamVjdCwgd2UnbGwga2VlcCB0aGlzIHNpbXBsZSBhbmQgc3RyYWlnaHQgdG8gdGhlIHBvaW50Llxcblxcbk9wZW4geW91ciBjb21tYW5kIGxpbmUsIG5hdmlnYXRlIHRvIHdoYXRldmVyIGZvbGRlciB5b3Uga2VlcCB5b3VyIHByb2plY3RzXFxuYW5kIHJ1biB0aGUgZm9sbG93aW5nOlxcblxcbmBgYGJhc2hcXG50YWtlIGRhcmstbGlnaHQtbW9kZSAmJiB0b3VjaCBzdHlsZS5jc3NcXG5gYGBcXG5cXG4+IElmIHlvdSdyZSB3b25kZXJpbmcgd2hhdCBgdGFrZWAgZG9lcywgaXQnbGwgY3JlYXRlIGEgbmV3IGRpcmVjdG9yeSBmb3IgeW91IGFuZCBhdXRvIG5hdmlnYXRlIHRvIGl0Llxcblxcbk5vdywgaW4gb3VyIGBzdHlsZS5jc3NgIGZpbGUgbGV0cyBwdXQgdGhlIGZvbGxvd2luZyBjb2RlLCB0aGlzIHdpbGwgYmUgdGhlIHZhcmlhYmxlcyBmb3IgdGhlIGRlZmF1bHQgKGxpZ2h0KSB0aGVtZTpcXG5cXG5gYGBjc3NcXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjZmZmO1xcbiAgLS10ZXh0LWNvbG9yOiAjMDAwO1xcbn1cXG5gYGBcXG5cXG5JbiBvcmRlciB0byBzZWUgdGhpcyB3b3JraW5nLCB3ZSBuZWVkIHRvIGNyZWF0ZSBhIGBIVE1MYCBmaWxlLCBzbyBsZXRzIGRvXFxudGhhdCwgaW4geW91ciBjb21tYW5kIGxpbmUgcnVuOlxcblxcbmBgYGJhc2hcXG50b3VjaCBpbmRleC5odG1sXFxuYGBgXFxuXFxuQW5kIHB1dCB0aGUgZm9sbG93aW5nIGNvZGUsIHlvdSBjYW4gbm90aWNlIHdlJ3JlIGFscmVhZHkgaW1wb3J0aW5nIG91clxcbmBzdHlsZS5jc3NgIGZpbGU6XFxuXFxuYGBgaHRtbDo1XFxuPCFET0NUWVBFIGh0bWw+XFxuPGh0bWw+XFxuPGhlYWQ+XFxuICA8dGl0bGU+TGlnaHQgYW5kIERhcmsgTW9kZTwvdGl0bGU+XFxuICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIHR5cGU9XFxcInRleHQvY3NzXFxcIiBocmVmPVxcXCJzdHlsZS5jc3NcXFwiPlxcbjwvaGVhZD5cXG48Ym9keT5cXG4gIDxoMT5PdXIgb3duIGRhcmsgLyBsaWdodCBhcHAhPC9oMT5cXG48L2JvZHk+XFxuPC9odG1sPlxcbmBgYFxcblxcbklmIHlvdSBnbyBhaGVhZCBhbmQgb3BlbiBgaW5kZXguaHRtbGAgaW4geW91ciBicm93c2VyIHlvdSBzaG91bGQgc2VlXFxuYSB0aXRsZSAqKlxcXCJPdXIgb3duIGRhcmsgLyBsaWdodCBhcHAhXFxcIioqLlxcblxcbjxiciAvPlxcblxcbk5vdyBsZXQgdXMgc3RhcnQgYWRkaW5nIHNvbWUgc3R5bGluZy4gV2UnbGwgYmUgdXNpbmcgYHZhcigtLXZhcmlhYmxlLW5hbWUpYCwgdGhhdCdzXFxudGhlIHdheSB5b3UgY2FuIHJlLXVzZSBhbmQgY2FsbCB2YXJpYWJsZXMgaW4gY3NzOlxcblxcbmBgYGNzczo2LTlcXG46cm9vdCB7XFxuICAtLWJnLWNvbG9yOiAjZmZmO1xcbiAgLS10ZXh0LWNvbG9yOiAjMDAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuYGBgXFxuXFxuSWYgeW91IGdvIGFoZWFkIGFuZCByZWZyZXNoIHlvdXIgcGFnZSBpdCBzaG91bGQgbG9vayBleGFjdGx5IHRoZSBzYW1lLCBhbmQgdGhhdCdzIGFscmlnaHQuXFxuXFxuPGJyIC8+XFxuXFxuQmVmb3JlIGp1bXBpbmcgaW50byB0aGUgKipKYXZhU2NyaXB0KiogcGFydCwgd2UgY2FuIGFkZCBvdXIgdmFyaWFibGVzIGZvciB0aGUgZGFya1xcbnRoZW1lIGFscmVhZHk6XFxuXFxuYGBgY3NzOjYtOVxcbjpyb290IHtcXG4gIC0tYmctY29sb3I6ICNmZmY7XFxuICAtLXRleHQtY29sb3I6ICMwMDA7XFxufVxcblxcbltkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0ge1xcbiAgLS1iZy1jb2xvcjogIzAwMDtcXG4gIC0tdGV4dC1jb2xvcjogI2ZmZjtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxufVxcbmBgYFxcblxcbldoYXQgYXJlIHdlIGRvaW5nIGhlcmU/XFxuXFxuLSBVc2luZyBgW2RhdGEtdGhlbWU9XFxcImRhcmtcXFwiXWAgdGhhdCB3ZSdsbCBjb3ZlciBpbiB0aGUgSmF2YVNjcmlwdCBzZWN0aW9uO1xcbi0gU3dhcGluZyB0aGUgYmFja2dyb3VuZCBhbmQgdGhlIHRleHQgY29sb3JzIGZyb20gd2hpdGUgdG8gYmxhY2sgYW5kIHZpY2UtdmVyc2E7XFxuXFxuLS0tXFxuXFxuIyMgVGhlIEphdmFTY3JpcHRcXG5cXG5BbHJpZ2h0LCBub3cgd2UganVzdCBuZWVkIGEgc21hbGwgSmF2YVNjcmlwdCBjb2RlIHRvIGdldCB0aGlzIHdvcmtpbmcsIGluXFxueW91ciBgaW5kZXguaHRtbGAgZmlsZSBhZGQgdGhlIGZvbGxvd2luZyBjb2RlOlxcblxcbmBgYGh0bWw6Ny0xMlxcbjwhRE9DVFlQRSBodG1sPlxcbjxodG1sPlxcbjxoZWFkPlxcbiAgPHRpdGxlPkxpZ2h0IGFuZCBEYXJrIE1vZGU8L3RpdGxlPlxcbiAgPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCIgaHJlZj1cXFwic3R5bGUuY3NzXFxcIj5cXG5cXG4gIDxzY3JpcHQgdHlwZT1cXFwidGV4dC9qYXZhc2NyaXB0XFxcIj5cXG4gICAgLy8gV2FpdCBmb3IgZG9jdW1lbnQgdG8gbG9hZFxcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxcXCJET01Db250ZW50TG9hZGVkXFxcIiwgZnVuY3Rpb24oZXZlbnQpIHtcXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFxcXCJkYXRhLXRoZW1lXFxcIiwgXFxcImRhcmtcXFwiKTtcXG4gICAgfSk7XFxuICA8L3NjcmlwdD5cXG48L2hlYWQ+XFxuPGJvZHk+XFxuICA8aDE+T3VyIG93biBkYXJrIC8gbGlnaHQgYXBwITwvaDE+XFxuPC9ib2R5PlxcbjwvaHRtbD5cXG5gYGBcXG5cXG5Ob3csIGlmIHlvdSByZWZyZXNoIHRoZSBwYWdlIHlvdSdsbCBzZWUgdGhhdCBpdCBzd2l0Y2hlZCB0byBhIGAjMDAwYCBiYWNrZ3JvdW5kXFxuYW5kIGAjZmZmYCB0ZXh0LiBDb29sIGJlYW5zIHJpZ2h0P1xcblxcbkxldHMgYnJlYWsgdGhpcyBkb3duLCB3aGF0IGBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRgIGdldHMgaXMgdGhlIGBodG1sYCB0YWcgZnJvbVxcbm91ciBgaW5kZXguaHRtbGAsIHNvIGV2ZW4gd2l0aG91dCB0aGUgSmF2YVNjcmlwdCBjb2RlIHdlIGNvdWxkIGRvOlxcblxcbmBgYGh0bWw6ITJcXG48IURPQ1RZUEUgaHRtbD5cXG48aHRtbCBkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIj5cXG5cXG48IS0tIFJlc3Qgb2YgdGhlIGNvZGUgLS0+XFxuYGBgXFxuXFxuVGhpcyB3b3VsZCBoYXZlIGV4YWN0bHkgdGhlIHNhbWUgZWZmZWN0LCBidXQgd2Ugd2FudCB0byB1c2UgSmF2YVNjcmlwdCBzbyB3ZVxcbmNhbiBjaGFuZ2UgaXQgZHluYW1pY2FsbHkuXFxuXFxuPGJyIC8+XFxuXFxuIyMgVGhlIFN3aXRjaFxcblxcbkxldHMgbWFrZSBzb21lIGNoYW5nZXMgdG8gb3VyIEphdmFTY3JpcHQgYW5kIGFsc28gYWRkIGEgYnV0dG9uIHRvIG91ciBgaW5kZXguaHRtbGAgdGhhdCB3aWxsIHRyaWdnZXIgdGhlIHRoZW1lIGNoYW5nZTpcXG5cXG4+IENoZWNrIHRoZSBjb21tZW50cyBpbiB0aGUgY29kZSwgaXQgbWlnaHQgYmUgZWFzaWVyIHRvIGtlZXAgdHJhY2sgb2Ygd2hhdCdzIGhhcHBlbmluZ1xcblxcbmBgYGh0bWw6MzEsIS0xMi0yNlxcbjwhRE9DVFlQRSBodG1sPlxcbjxodG1sPlxcbjxoZWFkPlxcbiAgPHRpdGxlPkxpZ2h0IGFuZCBEYXJrIE1vZGU8L3RpdGxlPlxcbiAgPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCIgaHJlZj1cXFwic3R5bGUuY3NzXFxcIj5cXG5cXG4gIDxzY3JpcHQgdHlwZT1cXFwidGV4dC9qYXZhc2NyaXB0XFxcIj5cXG4gICAgLy8gV2FpdCBmb3IgZG9jdW1lbnQgdG8gbG9hZFxcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxcXCJET01Db250ZW50TG9hZGVkXFxcIiwgZnVuY3Rpb24oZXZlbnQpIHtcXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFxcXCJkYXRhLXRoZW1lXFxcIiwgXFxcImxpZ2h0XFxcIik7XFxuXFxuICAgICAgLy8gR2V0IG91ciBidXR0b24gc3dpdGNoZXJcXG4gICAgICB2YXIgdGhlbWVTd2l0Y2hlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJ0aGVtZS1zd2l0Y2hlclxcXCIpO1xcblxcbiAgICAgIC8vIFdoZW4gb3VyIGJ1dHRvbiBnZXRzIGNsaWNrZWRcXG4gICAgICB0aGVtZVN3aXRjaGVyLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcXG4gICAgICAgIC8vIEdldCB0aGUgY3VycmVudCBzZWxlY3RlZCB0aGVtZSwgb24gdGhlIGZpcnN0IHJ1blxcbiAgICAgICAgLy8gaXQgc2hvdWxkIGJlIGBsaWdodGBcXG4gICAgICAgIHZhciBjdXJyZW50VGhlbWUgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFxcXCJkYXRhLXRoZW1lXFxcIik7XFxuXFxuICAgICAgICAvLyBTd2l0Y2ggYmV0d2VlbiBgZGFya2AgYW5kIGBsaWdodGBcXG4gICAgICAgIHZhciBzd2l0Y2hUb1RoZW1lID0gY3VycmVudFRoZW1lID09PSBcXFwiZGFya1xcXCIgPyBcXFwibGlnaHRcXFwiIDogXFxcImRhcmtcXFwiXFxuXFxuICAgICAgICAvLyBTZXQgb3VyIGN1cnJlbmV0IHRoZW1lIHRvIHRoZSBuZXcgb25lXFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFxcXCJkYXRhLXRoZW1lXFxcIiwgc3dpdGNoVG9UaGVtZSk7XFxuICAgICAgfVxcbiAgICB9KTtcXG4gIDwvc2NyaXB0PlxcbjwvaGVhZD5cXG48Ym9keT5cXG4gIDxidXR0b24gaWQ9XFxcInRoZW1lLXN3aXRjaGVyXFxcIj5Td2l0Y2ggdGhlbWVzITwvYnV0dG9uPlxcbiAgPGgxPk91ciBvd24gZGFyayAvIGxpZ2h0IGFwcCE8L2gxPlxcbjwvYm9keT5cXG48L2h0bWw+XFxuYGBgXFxuXFxuPGJyIC8+XFxuXFxuQW5kIHRoYXQncyBpdCEgVHJ5IGl0IG91dCwgaXQgc2hvdWxkIGdvIGZyb20gYGxpZ2h0YCB0byBgZGFya2AgYW5kIHZpY2UtdmVyc2EuXFxuXFxuPGhyIC8+XFxuXFxuSWYgeW91IGhhdmUgYW55IHF1ZXN0aW9ucyB5b3UgY2FuIGFsd2F5cyBkcm9wIG1lIGEgbWVzc2FnZSBvbiBUd2l0dGVyIPCfkYdcXG5cIjsiXSwic291cmNlUm9vdCI6IiJ9