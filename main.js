/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const carousel = document.getElementById(\"carousel\");\n\nconst leftButtons = document.querySelectorAll(\".left\");\nconst rightButtons = document.querySelectorAll(\".right\");\n\nconst trigger1 = document.querySelector(\".trigger-1\");\nconst trigger2 = document.querySelector(\".trigger-2\");\nconst trigger3 = document.querySelector(\".trigger-3\");\nconst trigger4 = document.querySelector(\".trigger-4\");\nconst trigger5 = document.querySelector(\".trigger-5\");\n\nconst next = (el) => {\n  let number = getNumber(el);\n  clearClasses(el);\n  let newNumber;\n  \n  number >= 5 ? newNumber = 1 : newNumber = number + 1;\n  el.classList.add(`pic${newNumber}`);\n  \n  clearCircle(number);\n  fillCircle(newNumber);\n}\n\nconst prev = (el) => {\n  let number = getNumber(el);\n  clearClasses(el);\n  let newNumber;\n\n  number == 1 ? newNumber = 5 : newNumber = number - 1;\n  el.classList.add(`pic${newNumber}`);\n\n  clearCircle(number);\n  fillCircle(newNumber);\n}\n\nconst getNumber = (el) => {\n  return parseInt(el.classList[0].slice(-1));\n}\n\nconst clearCircle = (number) => {\n  const circleToClear = document.querySelector(`.trigger-${number}`);\n  circleToClear.classList.remove(\"filled\");\n}\n\nconst fillCircle = (newNumber) => {\n  const circleToFill = document.querySelector(`.trigger-${newNumber}`);\n  circleToFill.classList.add(\"filled\");\n}\n\nrightButtons.forEach((button) => {\n  button.addEventListener(\"click\", () => {\n    next(carousel);\n  })\n});\n\nleftButtons.forEach((button) => {\n  button.addEventListener(\"click\", () => {\n    prev(carousel);\n  })\n});\n\ntrigger1.addEventListener(\"click\", () => {\n  let number = getNumber(carousel);\n  clearCircle(number);\n  \n  clearClasses(carousel);\n  carousel.classList.add('pic1');\n  fillCircle(1);\n})\n\ntrigger2.addEventListener(\"click\", () => {\n  let number = getNumber(carousel);\n  clearCircle(number);\n  \n  clearClasses(carousel);\n  carousel.classList.add('pic2');\n  fillCircle(2);\n})\n\ntrigger3.addEventListener(\"click\", () => {\n  let number = getNumber(carousel);\n  clearCircle(number);\n  \n  clearClasses(carousel);\n  carousel.classList.add('pic3');\n  fillCircle(3);\n})\n\ntrigger4.addEventListener(\"click\", () => {\n  let number = getNumber(carousel);\n  clearCircle(number);\n  \n  clearClasses(carousel);\n  carousel.classList.add('pic4');\n  fillCircle(4);\n})\n\ntrigger5.addEventListener(\"click\", () => {\n  let number = getNumber(carousel);\n  clearCircle(number);\n  \n  clearClasses(carousel);\n  carousel.classList.add('pic5');\n  fillCircle(5);\n})\n\nconst clearClasses = (el) => {\n  el.classList.remove('pic1');\n  el.classList.remove('pic2');\n  el.classList.remove('pic3');\n  el.classList.remove('pic4');\n  el.classList.remove('pic5');\n}\n\nconst autoAdvance = () => {\n  setInterval(next, 5000, carousel);\n}\n\nwindow.onload = () => {\n  autoAdvance();\n};\n\n//# sourceURL=webpack://image-slider/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;