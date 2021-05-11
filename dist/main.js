/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nvar data; //search-nav button\n\ndocument.getElementById(\"search-nav\").addEventListener(\"click\", () => {\n  document.getElementById(\"search-nav-menu\").classList.add(\"block\");\n}); //locations now\n\nnavigator.geolocation.getCurrentPosition(function (position) {\n  console.log(position.coords.latitude);\n  console.log(position.coords.longitude); //Api weather location\n\n  const fetchDataMain = async () => {\n    try {\n      const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=7daaca17f73b8537056bf2d813d49c18`);\n      const data = await res.json();\n      console.log(data); //tranform Kelvin to centigrade\n\n      let tranformationKelvin = data.current.temp - 273.15; // Date\n\n      var month = new Array(\"Enero\", \"Febrero\", \"Marzo\", \"Abril\", \"Mayo\", \"Junio\", \"Julio\", \"Agosto\", \"Septiembre\", \"Octubre\", \"Noviembre\", \"Diciembre\");\n      var days = new Array(\"Domingo\", \"Lunes\", \"Martes\", \"Miércoles\", \"Jueves\", \"Viernes\", \"Sábado\");\n      var f = new Date(); //clouds or sunny\n\n      function cloudsOrSunny() {\n        if (data.current.clouds > 50) {\n          return \"Clouds\";\n        } else {\n          return \"Sunny\";\n        }\n      } //Print in the Dom\n\n\n      document.getElementById(\"mainWeather\").innerHTML = `\n      <h1>${data.timezone}</h1>\n      <p>${days[f.getDay()] + \", \" + f.getDate() + \" de \" + month[f.getMonth()] + \" de \" + f.getFullYear()}</p>\n      <p class=\"weather-Value\">${Math.floor(tranformationKelvin)}<span>ºC</span></p>\n      <p class=\"tyte-weather\">${cloudsOrSunny()}</p>\n      `;\n      console.log(data.current.clouds);\n      console.log(data.timezone);\n      console.log(data.current.temp); // Date and Hours\n\n      var date = new Date();\n      console.log(f.getDate() + \"/\" + (f.getMonth() + 1) + \"/\" + f.getFullYear());\n    } catch (error) {\n      console.log(error);\n    }\n  };\n\n  fetchDataMain();\n}); //search-nav-menu button close\n\ndocument.getElementById(\"faTimesCircle\").addEventListener(\"click\", () => {\n  document.getElementById(\"search-nav-menu\").classList.remove(\"block\");\n}); //Api weather search\n\nconst fetchData = async () => {\n  try {\n    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + document.getElementById(\"searchNavInput\").value + '&appid=7daaca17f73b8537056bf2d813d49c18');\n    const data = await res.json();\n    console.log(data);\n    console.log(data.name);\n  } catch (error) {\n    console.log(error);\n  }\n}; //search country\n\n\ndocument.getElementById(\"search-nav-button\").addEventListener(\"click\", () => {\n  fetchData();\n});\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://weather/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;