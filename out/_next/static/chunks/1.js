(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./writings/associative-array.md":
/*!***************************************!*\
  !*** ./writings/associative-array.md ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("---\ntitle: \"Associative array\"\ndate: \"2020-09-21\"\nog:\n  description: \"Use associative array to clean up your code.\"\n  image: \"https://telmo.im/og/too-many-states.png\"\nauthor:\n  twitter: \"telmo\"\n  name: \"Telmo Goncalves\"\n---\n\nAs the months pass by the more I know about React, in this article I just want to go through a *trick* I use when a component starts to get a little confusing with conditionals. Let us take a look at a simple dummy few functions to run a `console.log`:\n\n```javascript\nfunction start() {\n  console.log(\"Starting...\");\n}\n\nfunction pause() {\n  console.log(\"Pausing...\");\n}\n\nfunction stop() {\n  console.log(\"Stopping!\");\n}\n```\n\nAlright, if we call each function we should get a console log with the respective content:\n\n```js\nstart(); // Starting...\npause(); // Pausing...\nstop(); // Stopping!\n```\n\nLooking good!\n\n> These are simple functions, if you're writing complex functions I don't advice using what we're about to use in this article.\n\n---\n\n# Array array array\n\nSince these are simple functions we can use an array to use the functions instead of having individual functions, such as:\n\n```js\nconst actions = {\n  start: () => console.log(\"Starting...\"),\n  pause: () => console.log(\"Pausing...\"),\n  stop: () => console.log(\"Stopping!\")\n}\n```\n\nNow we can call it by using:\n\n```js\nactions[\"pause\"](); // Pausing...\n```\n\nWe still go a little further and make sure our action names are always the same by creating an object with it:\n\n```js\nconst actionNames = {\n  START: \"start\",\n  PAUSE: \"pause\",\n  STOP: \"stop\"\n}\n```\n\nLet us change our `actions` array to make sure it reflects with our brand new `actionNames`:\n\n```js\nconst actions = {\n  [actionNames.START]: () => console.log(\"Starting...\"),\n  [actionNames.PAUSE]: () => console.log(\"Pausing...\"),\n  [actionNames.STOP]: () => console.log(\"Stopping!\")\n}\n```\n\nNow instead of calling `actions[\"stop\"]();` we can use our `actionNames`:\n\n```js\nactions[actionNames.STOP](); // Stopping!\n```\n\n---\n\n# Without functions\n\nLet me give you one more examples, say we want to display an online presence, it can either be **online**, **offline** or away, both content and background should change, we can also use an associative array to accomplish that, take a look:\n\n```js\nconst status = {\n  ONLINE: {\n    background: \"#09ded8\",\n    title: \"User is online 🎉\"\n  },\n  OFFLINE: {\n    background: \"#fe564c\",\n    title: \"Oh bummer, user is offline 😔\"\n  },\n  AWAY: {\n    background: \"#fac82b\",\n    title: \"User is away, should be right back 👀\"\n  }\n}\n```\n\nAs an example if you call `status[\"ONLINE\"]` you'll get the following in return:\n\n```js\n{\n  background: \"#09ded8\",\n  title: \"User is online 🎉\"\n}\n```\n\nThat's it! You can play around with the code [here](https://codesandbox.io/s/silly-dhawan-c5qpz?file=/src/index.js)\n");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vd3JpdGluZ3MvYXNzb2NpYXRpdmUtYXJyYXkubWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQWUseWxCQUEwaEIsaUNBQWlDLEdBQUcsc0JBQXNCLGdDQUFnQyxHQUFHLHFCQUFxQiwrQkFBK0IsR0FBRyxzSEFBc0gseUJBQXlCLHVCQUF1Qiw4VkFBOFYsd0lBQXdJLHFFQUFxRSxxS0FBcUssK0RBQStELGlJQUFpSSxrTEFBa0wscURBQXFELHNFQUFzRSwrVEFBK1QsYUFBYSxxRUFBcUUsZUFBZSxpRkFBaUYsWUFBWSx5RkFBeUYsR0FBRyx1R0FBdUcsK0RBQStELCtIQUErSCxFIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiLS0tXFxudGl0bGU6IFxcXCJBc3NvY2lhdGl2ZSBhcnJheVxcXCJcXG5kYXRlOiBcXFwiMjAyMC0wOS0yMVxcXCJcXG5vZzpcXG4gIGRlc2NyaXB0aW9uOiBcXFwiVXNlIGFzc29jaWF0aXZlIGFycmF5IHRvIGNsZWFuIHVwIHlvdXIgY29kZS5cXFwiXFxuICBpbWFnZTogXFxcImh0dHBzOi8vdGVsbW8uaW0vb2cvdG9vLW1hbnktc3RhdGVzLnBuZ1xcXCJcXG5hdXRob3I6XFxuICB0d2l0dGVyOiBcXFwidGVsbW9cXFwiXFxuICBuYW1lOiBcXFwiVGVsbW8gR29uY2FsdmVzXFxcIlxcbi0tLVxcblxcbkFzIHRoZSBtb250aHMgcGFzcyBieSB0aGUgbW9yZSBJIGtub3cgYWJvdXQgUmVhY3QsIGluIHRoaXMgYXJ0aWNsZSBJIGp1c3Qgd2FudCB0byBnbyB0aHJvdWdoIGEgKnRyaWNrKiBJIHVzZSB3aGVuIGEgY29tcG9uZW50IHN0YXJ0cyB0byBnZXQgYSBsaXR0bGUgY29uZnVzaW5nIHdpdGggY29uZGl0aW9uYWxzLiBMZXQgdXMgdGFrZSBhIGxvb2sgYXQgYSBzaW1wbGUgZHVtbXkgZmV3IGZ1bmN0aW9ucyB0byBydW4gYSBgY29uc29sZS5sb2dgOlxcblxcbmBgYGphdmFzY3JpcHRcXG5mdW5jdGlvbiBzdGFydCgpIHtcXG4gIGNvbnNvbGUubG9nKFxcXCJTdGFydGluZy4uLlxcXCIpO1xcbn1cXG5cXG5mdW5jdGlvbiBwYXVzZSgpIHtcXG4gIGNvbnNvbGUubG9nKFxcXCJQYXVzaW5nLi4uXFxcIik7XFxufVxcblxcbmZ1bmN0aW9uIHN0b3AoKSB7XFxuICBjb25zb2xlLmxvZyhcXFwiU3RvcHBpbmchXFxcIik7XFxufVxcbmBgYFxcblxcbkFscmlnaHQsIGlmIHdlIGNhbGwgZWFjaCBmdW5jdGlvbiB3ZSBzaG91bGQgZ2V0IGEgY29uc29sZSBsb2cgd2l0aCB0aGUgcmVzcGVjdGl2ZSBjb250ZW50OlxcblxcbmBgYGpzXFxuc3RhcnQoKTsgLy8gU3RhcnRpbmcuLi5cXG5wYXVzZSgpOyAvLyBQYXVzaW5nLi4uXFxuc3RvcCgpOyAvLyBTdG9wcGluZyFcXG5gYGBcXG5cXG5Mb29raW5nIGdvb2QhXFxuXFxuPiBUaGVzZSBhcmUgc2ltcGxlIGZ1bmN0aW9ucywgaWYgeW91J3JlIHdyaXRpbmcgY29tcGxleCBmdW5jdGlvbnMgSSBkb24ndCBhZHZpY2UgdXNpbmcgd2hhdCB3ZSdyZSBhYm91dCB0byB1c2UgaW4gdGhpcyBhcnRpY2xlLlxcblxcbi0tLVxcblxcbiMgQXJyYXkgYXJyYXkgYXJyYXlcXG5cXG5TaW5jZSB0aGVzZSBhcmUgc2ltcGxlIGZ1bmN0aW9ucyB3ZSBjYW4gdXNlIGFuIGFycmF5IHRvIHVzZSB0aGUgZnVuY3Rpb25zIGluc3RlYWQgb2YgaGF2aW5nIGluZGl2aWR1YWwgZnVuY3Rpb25zLCBzdWNoIGFzOlxcblxcbmBgYGpzXFxuY29uc3QgYWN0aW9ucyA9IHtcXG4gIHN0YXJ0OiAoKSA9PiBjb25zb2xlLmxvZyhcXFwiU3RhcnRpbmcuLi5cXFwiKSxcXG4gIHBhdXNlOiAoKSA9PiBjb25zb2xlLmxvZyhcXFwiUGF1c2luZy4uLlxcXCIpLFxcbiAgc3RvcDogKCkgPT4gY29uc29sZS5sb2coXFxcIlN0b3BwaW5nIVxcXCIpXFxufVxcbmBgYFxcblxcbk5vdyB3ZSBjYW4gY2FsbCBpdCBieSB1c2luZzpcXG5cXG5gYGBqc1xcbmFjdGlvbnNbXFxcInBhdXNlXFxcIl0oKTsgLy8gUGF1c2luZy4uLlxcbmBgYFxcblxcbldlIHN0aWxsIGdvIGEgbGl0dGxlIGZ1cnRoZXIgYW5kIG1ha2Ugc3VyZSBvdXIgYWN0aW9uIG5hbWVzIGFyZSBhbHdheXMgdGhlIHNhbWUgYnkgY3JlYXRpbmcgYW4gb2JqZWN0IHdpdGggaXQ6XFxuXFxuYGBganNcXG5jb25zdCBhY3Rpb25OYW1lcyA9IHtcXG4gIFNUQVJUOiBcXFwic3RhcnRcXFwiLFxcbiAgUEFVU0U6IFxcXCJwYXVzZVxcXCIsXFxuICBTVE9QOiBcXFwic3RvcFxcXCJcXG59XFxuYGBgXFxuXFxuTGV0IHVzIGNoYW5nZSBvdXIgYGFjdGlvbnNgIGFycmF5IHRvIG1ha2Ugc3VyZSBpdCByZWZsZWN0cyB3aXRoIG91ciBicmFuZCBuZXcgYGFjdGlvbk5hbWVzYDpcXG5cXG5gYGBqc1xcbmNvbnN0IGFjdGlvbnMgPSB7XFxuICBbYWN0aW9uTmFtZXMuU1RBUlRdOiAoKSA9PiBjb25zb2xlLmxvZyhcXFwiU3RhcnRpbmcuLi5cXFwiKSxcXG4gIFthY3Rpb25OYW1lcy5QQVVTRV06ICgpID0+IGNvbnNvbGUubG9nKFxcXCJQYXVzaW5nLi4uXFxcIiksXFxuICBbYWN0aW9uTmFtZXMuU1RPUF06ICgpID0+IGNvbnNvbGUubG9nKFxcXCJTdG9wcGluZyFcXFwiKVxcbn1cXG5gYGBcXG5cXG5Ob3cgaW5zdGVhZCBvZiBjYWxsaW5nIGBhY3Rpb25zW1xcXCJzdG9wXFxcIl0oKTtgIHdlIGNhbiB1c2Ugb3VyIGBhY3Rpb25OYW1lc2A6XFxuXFxuYGBganNcXG5hY3Rpb25zW2FjdGlvbk5hbWVzLlNUT1BdKCk7IC8vIFN0b3BwaW5nIVxcbmBgYFxcblxcbi0tLVxcblxcbiMgV2l0aG91dCBmdW5jdGlvbnNcXG5cXG5MZXQgbWUgZ2l2ZSB5b3Ugb25lIG1vcmUgZXhhbXBsZXMsIHNheSB3ZSB3YW50IHRvIGRpc3BsYXkgYW4gb25saW5lIHByZXNlbmNlLCBpdCBjYW4gZWl0aGVyIGJlICoqb25saW5lKiosICoqb2ZmbGluZSoqIG9yIGF3YXksIGJvdGggY29udGVudCBhbmQgYmFja2dyb3VuZCBzaG91bGQgY2hhbmdlLCB3ZSBjYW4gYWxzbyB1c2UgYW4gYXNzb2NpYXRpdmUgYXJyYXkgdG8gYWNjb21wbGlzaCB0aGF0LCB0YWtlIGEgbG9vazpcXG5cXG5gYGBqc1xcbmNvbnN0IHN0YXR1cyA9IHtcXG4gIE9OTElORToge1xcbiAgICBiYWNrZ3JvdW5kOiBcXFwiIzA5ZGVkOFxcXCIsXFxuICAgIHRpdGxlOiBcXFwiVXNlciBpcyBvbmxpbmUg8J+OiVxcXCJcXG4gIH0sXFxuICBPRkZMSU5FOiB7XFxuICAgIGJhY2tncm91bmQ6IFxcXCIjZmU1NjRjXFxcIixcXG4gICAgdGl0bGU6IFxcXCJPaCBidW1tZXIsIHVzZXIgaXMgb2ZmbGluZSDwn5iUXFxcIlxcbiAgfSxcXG4gIEFXQVk6IHtcXG4gICAgYmFja2dyb3VuZDogXFxcIiNmYWM4MmJcXFwiLFxcbiAgICB0aXRsZTogXFxcIlVzZXIgaXMgYXdheSwgc2hvdWxkIGJlIHJpZ2h0IGJhY2sg8J+RgFxcXCJcXG4gIH1cXG59XFxuYGBgXFxuXFxuQXMgYW4gZXhhbXBsZSBpZiB5b3UgY2FsbCBgc3RhdHVzW1xcXCJPTkxJTkVcXFwiXWAgeW91J2xsIGdldCB0aGUgZm9sbG93aW5nIGluIHJldHVybjpcXG5cXG5gYGBqc1xcbntcXG4gIGJhY2tncm91bmQ6IFxcXCIjMDlkZWQ4XFxcIixcXG4gIHRpdGxlOiBcXFwiVXNlciBpcyBvbmxpbmUg8J+OiVxcXCJcXG59XFxuYGBgXFxuXFxuVGhhdCdzIGl0ISBZb3UgY2FuIHBsYXkgYXJvdW5kIHdpdGggdGhlIGNvZGUgW2hlcmVdKGh0dHBzOi8vY29kZXNhbmRib3guaW8vcy9zaWxseS1kaGF3YW4tYzVxcHo/ZmlsZT0vc3JjL2luZGV4LmpzKVxcblwiOyJdLCJzb3VyY2VSb290IjoiIn0=