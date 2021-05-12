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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n // Date\n\nvar month = new Array(\"Enero\", \"Febrero\", \"Marzo\", \"Abril\", \"Mayo\", \"Junio\", \"Julio\", \"Agosto\", \"Septiembre\", \"Octubre\", \"Noviembre\", \"Diciembre\");\nvar days = new Array(\"Domingo\", \"Lunes\", \"Martes\", \"Miércoles\", \"Jueves\", \"Viernes\", \"Sábado\");\nvar f = new Date(); //search-nav button\n\ndocument.getElementById(\"search-nav\").addEventListener(\"click\", () => {\n  document.getElementById(\"search-nav-menu\").classList.add(\"block\");\n}); //back country \n\ndocument.getElementById(\"faStreetView\").addEventListener(\"click\", () => {\n  navigator.geolocation.getCurrentPosition();\n}); //locations now\n\nnavigator.geolocation.getCurrentPosition(function (position) {\n  console.log(position.coords.latitude);\n  console.log(position.coords.longitude); //Api weather location\n\n  const fetchDataMain = async () => {\n    try {\n      const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=7daaca17f73b8537056bf2d813d49c18`);\n      const data = await res.json();\n      console.log(data); //tranform Kelvin to centigrade\n\n      let tranformationKelvin = data.current.temp - 273.15; //Print in the Dom\n\n      document.getElementById(\"mainWeather\").innerHTML = `\n      <h1>${data.timezone}</h1>\n      <p>${days[f.getDay()] + \", \" + f.getDate() + \" de \" + month[f.getMonth()] + \" de \" + f.getFullYear()}</p>\n      <p class=\"weather-Value\">${Math.floor(tranformationKelvin)}<span>ºC</span></p>\n      <p class=\"tyte-weather\">${data.current.weather[0].main}</p>\n      `; //modules weather\n\n      SpeedWidt(data.current.wind_speed);\n      Humidity(data.current.humidity);\n      Visibility(data.current.visibility); //Main Day\n\n      for (let i = 0; i < 8; i++) {\n        let grades = Math.floor(data.daily[i].temp.day - 273.15);\n        let type = data.daily[i].weather[0].main;\n        let min = Math.floor(data.daily[i].temp.min - 273.15);\n        let max = Math.floor(data.daily[i].temp.max - 273.15);\n\n        function dayReal() {\n          if (days[i] !== days[f.getDay()]) {\n            return days[i];\n          } else {\n            return \"Today\";\n          }\n\n          ;\n        }\n\n        let day = dayReal();\n        document.getElementById(`mainDay${i}`).innerHTML = `\n      <div>\n        <h2>${day}</h2>\n        <p class=\"weather-Value-day\">${grades}<span>ºC</span></p>\n        <p class=\"weather-type-day\">${type}</p>\n        <p class=\"weather-Value\">Min-temp: ${min}<span>ºC</span></p>\n        <p class=\"weather-Value\">Max-temp: ${max}<span>ºC</span></p>\n      </div>\n      `;\n      }\n\n      ; //catch\n    } catch (error) {\n      console.log(error);\n    }\n  };\n\n  fetchDataMain();\n}); //function of modules of weather\n//SpeedWidt\n\nfunction SpeedWidt(a) {\n  document.getElementById(\"SpeedWidt\").innerHTML = `\n  <h3>Wind status</h3>\n  <p>${a}<span>mph</span></p>\n  <p><i class=\"fas fa-location-arrow\"></i> WSW</p>\n  `;\n} //humidity\n\n\nfunction Humidity(b) {\n  document.getElementById(\"Humidity\").innerHTML = `\n  <h3>Humidity</h3>\n  <p>${b}<span>%</span></p>\n  <input type=\"range\" min=\"0\" max=\"100\" step=\"${b}\" readonly=\"readonly\">\n  `;\n} //Visibility\n\n\nfunction Visibility(c) {\n  document.getElementById(\"Visibility\").innerHTML = `\n  <h3>Visibility</h3>\n  <p>${c}<span>miles</span></p>\n  `;\n} //search-nav-menu button close\n\n\ndocument.getElementById(\"faTimesCircle\").addEventListener(\"click\", () => {\n  document.getElementById(\"search-nav-menu\").classList.remove(\"block\");\n}); //Api weather search\n\nconst fetchData = async () => {\n  try {\n    const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + document.getElementById(\"searchNavInput\").value + '&appid=7daaca17f73b8537056bf2d813d49c18');\n    const data = await res.json();\n    console.log(data);\n    console.log(data.name);\n    console.log(data.weather.main); //tranform Kelvin to centigrade\n\n    let tranformationKelvin = data.main.temp - 273.15; //background gradient\n\n    function backgroundGradient(a) {\n      if (a < 0) {\n        document.getElementById(\"header\").style.background = \"linear-gradient(to right, #4286f4, #373B44)\";\n      } else if (a < 10) {\n        document.getElementById(\"header\").style.background = \"linear-gradient(to right, #6dd5ed, #2193b0)\";\n      } else if (a < 20) {\n        document.getElementById(\"header\").style.background = \"linear-gradient(to right, #6dd5ed, #2193b0)\";\n      } else if (a < 30) {\n        document.getElementById(\"header\").style.background = \"linear-gradient(to right, #ffd194, #70e1f5)\";\n      } else if (a < 40) {\n        document.getElementById(\"header\").style.background = \"linear-gradient(to right, #EDDE5D, #F09819)\";\n      } else if (a < 50) {\n        document.getElementById(\"header\").style.background = \"linear-gradient(to right, #F9D423, #FF4E50)\";\n      } else if (a < 60) {\n        document.getElementById(\"header\").style.background = \"linear-gradient(to right, #F09819, #FF512F)\";\n      }\n    }\n\n    console.log(backgroundGradient(Math.floor(tranformationKelvin))); //Print in the Dom\n\n    document.getElementById(\"mainWeather\").innerHTML = `\n      <h1>${data.name}</h1>\n      <p>${days[f.getDay()] + \", \" + f.getDate() + \" de \" + month[f.getMonth()] + \" de \" + f.getFullYear()}</p>\n      <p class=\"weather-Value\">${Math.floor(tranformationKelvin)}<span>ºC</span></p>\n      <p class=\"tyte-weather\">${data.weather[0].main}</p>\n      <p>Min-Temp: ${Math.floor(data.main.temp_min - 273.15)}<span>ºC</span></p>\n      <p>Max-Temp: ${Math.floor(data.main.temp_max - 273.15)}<span>ºC</span></p>\n      `; // Date and Hours\n\n    var date = new Date();\n    onsole.log(f.getDate() + \"/\" + (f.getMonth() + 1) + \"/\" + f.getFullYear());\n  } catch (error) {\n    console.log(error);\n  }\n}; //search country\n\n\ndocument.getElementById(\"search-nav-button\").addEventListener(\"click\", () => {\n  fetchData();\n  document.getElementById(\"search-nav-menu\").classList.remove(\"block\");\n});\n\n//# sourceURL=webpack://weather/./src/index.js?");

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