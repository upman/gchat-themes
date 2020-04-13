/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ops_1 = __webpack_require__(1);
var opsMem = [];
for (var i = 0; i < ops_1.allOps.length; i += 1) {
    opsMem.push({
        applied: false,
        op: ops_1.allOps[i]
    });
}
function main() {
    for (var i = 0; i < ops_1.allOps.length; i += 1) {
        if (!opsMem[i].applied) {
            opsMem[i].op();
        }
    }
}
window.onload = main;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var dom_1 = __webpack_require__(2);
function switchLogoColor() {
    var logoContainer = dom_1.getLogoContainer();
    if (!logoContainer) {
        return false;
    }
    // @ts-ignore
    logoContainer.style = 'fill: white;';
    return false;
}
function switchIconsColor() {
    var iconSvgs = dom_1.getIconSvgs();
    for (var idx = 0; idx < iconSvgs.length; idx += 1) {
        //@ts-ignore
        iconSvgs[idx].style = 'fill: rgb(216, 227, 235)';
    }
}
function carpetBombStyle() {
    dom_1.replaceStyles({
        backgroundColor: [
            {
                // Thread Background
                from: 'rgb(255, 255, 255)',
                to: 'rgb(25, 39, 52)'
            },
            {
                // Extraneous background style on chat search
                from: 'rgba(255, 255, 255, 0.7)',
                to: 'rgb(25, 39, 52)'
            },
            {
                // Threads container background
                from: 'rgb(242, 242, 242)',
                to: 'rgb(21, 32, 43)',
            },
            {
                // Active chat title in sidebar
                from: 'rgb(228, 247, 251)',
                to: 'rgb(0, 0, 0)'
            },
            {
                // Hover Background
                from: 'rgb(248, 249, 250)',
                to: 'rgb(32, 48, 61)'
            },
            {
                // User's Mention
                from: 'rgb(0, 121, 107)',
                to: 'rgb(65, 173, 240)',
            },
            {
                // inline markdown
                from: 'rgb(250, 250, 250)',
                to: 'rgb(55, 86, 115)'
            },
            {
                // Add people + jump to bottom buttons
                from: 'rgb(26, 115, 232)',
                to: 'rgb(29, 161, 242)'
            },
            {
                // Number of members pill background
                from: 'rgb(241, 243, 244)',
                to: 'rgb(55, 86, 115)'
            },
            {
                // icons hover
                from: 'rgba(95, 99, 104, 0.08)',
                to: 'rgba(226, 230, 234, 0.14)'
            }
        ],
        background: {
            // Unnecessary gradient on Follow Button
            from: 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(255, 255, 255) 50%)',
            to: ''
        },
        backgroundImage: {
            // Unnecessary gradient on Follow Button
            from: 'linear-gradient(90deg, rgba(255, 255, 255, 0), rgb(255, 255, 255) 50%)',
            to: ''
        },
        color: [
            {
                // Primary text
                from: 'rgb(32, 33, 36)',
                to: 'rgb(231, 232, 235)'
            },
            {
                // Secondary text
                from: 'rgb(95, 99, 104)',
                to: 'rgb(136, 153, 166)'
            },
            {
                // Alt Primary text Ex: Settings menu
                from: 'rgb(34, 34, 34)',
                to: 'rgb(231, 232, 235)'
            },
            {
                // dark icons
                from: 'rgba(0, 0, 0, 0.54)',
                to: [{
                        prop: 'color',
                        value: 'rgba(255, 255, 255, 0.54)'
                    }, {
                        prop: 'fill',
                        value: 'rgba(255, 255, 255, 0.54)'
                    }]
            },
            {
                // mentions
                from: 'rgb(0, 121, 107)',
                to: 'rgb(65, 173, 240)'
            },
            {
                // links
                from: 'rgb(26, 115, 232)',
                to: 'rgb(65, 173, 240)'
            },
            {
                // multiline markdown text
                from: 'rgb(66, 66, 66)',
                to: 'rgb(239, 239, 239)'
            },
            {
                // inline markdown text
                from: 'rgb(231, 232, 235)',
                to: 'rgb(245, 245, 245)'
            }
        ],
        borderColor: [
            {
                // Thread border
                from: 'rgb(218, 220, 224)',
                to: 'rgb(83, 102, 115)'
            },
            {
                // multiline markdown box border
                from: 'rgb(224, 224, 224)',
                to: 'rgb(71, 110, 146)'
            },
        ],
        borderBottom: [
            {
                // header bottom border
                from: '1px solid rgb(218, 220, 224)',
                to: '1px solid rgb(135, 143, 156)'
            }
        ],
        borderRight: [
            {
                // side bar right border
                from: '1px solid rgb(218, 220, 224)',
                to: '1px solid rgb(135, 143, 156)'
            }
        ],
        border: [
            {
                // inline markdown box
                from: '1px solid rgb(201, 201, 201)',
                to: '1px solid rgb(62, 97, 130)'
            }
        ],
        boxShadow: [
            {
                // Thread container on hover
                from: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                to: 'rgba(154, 190, 214, 0.5) 0px 1px 2px 0px, rgba(154, 190, 214, 0.25) 0px 1px 3px 1px'
            },
            {
                // TODO
                // Thread menu
                from: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
                to: 'rgba(171, 185, 196, 0.3) 0px 1px 2px 0px, rgba(171, 185, 196, 0.15) 0px 2px 6px 2px'
            }
        ],
        fill: [
            {
                // logo
                from: 'rgb(0, 0, 0)',
                to: 'rgb(255, 255, 255)'
            },
            {
                // Dark logos
                from: 'rgb(32, 33, 36)',
                to: 'rgb(231, 232, 235)'
            }
        ]
    }, 1);
    dom_1.replaceStyles({
        color: [{
                // mute notifications menu
                from: 'rgb(95, 99, 104)',
                to: 'rgb(172, 181, 191)'
            },
            {
                // Primary text
                from: 'rgb(32, 33, 36)',
                to: 'rgb(231, 232, 235)'
            },
            {
                // Secondary text
                from: 'rgb(95, 99, 104)',
                to: 'rgb(136, 153, 166)'
            },
            {
                // Alt Primary text Ex: Settings menu
                from: 'rgb(34, 34, 34)',
                to: 'rgb(231, 232, 235)'
            }
        ]
    }, 7);
    dom_1.replaceStyles({
        background: [
            {
                // search bar active background
                from: 'rgb(255, 255, 255)',
                to: 'rgb(25, 39, 52)'
            },
            {
                // account dialog managed by
                from: 'rgb(232, 240, 254)',
                to: 'rgb(43, 65, 86)'
            }
        ],
        backgroundColor: [
            {
                // account dialog hover
                from: 'rgb(247, 248, 248)',
                to: 'rgb(32, 48, 61)'
            },
            {
                // search bar active background
                from: 'rgb(255, 255, 255)',
                to: 'rgb(25, 39, 52)'
            },
        ],
        color: [
            {
                // Primary text
                from: 'rgb(32, 33, 36)',
                to: 'rgb(231, 232, 235)'
            },
            {
                // Primary text
                from: 'rgb(60, 64, 67)',
                to: 'rgb(231, 232, 235)'
            },
            {
                // Secondary text
                from: 'rgb(95, 99, 104)',
                to: 'rgb(136, 153, 166)'
            },
        ],
        borderColor: [
            {
                // borders on account drop down menu
                from: 'rgb(218, 220, 224) rgb(218, 220, 224) rgb(135, 143, 156)',
                to: 'rgb(135, 143, 156) rgb(135, 143, 156) rgb(135, 143, 156)'
            }
        ],
        borderBottom: [
            {
                from: '1px solid rgb(218, 220, 224)',
                to: '1px solid rgb(135, 143, 156)'
            }
        ]
    }, 9);
}
exports.allOps = [
    switchLogoColor,
    switchIconsColor,
    carpetBombStyle
];


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.logoContainerSelector = 'svg > g:nth-child(2) > g > g > g > g > g > g > g > g';
exports.iconSvgSelector = 'body > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > span svg,' +
    'c-wiz[data-node-index] > div:nth-child(1) > span:nth-child(2) > span > svg, ' +
    'c-wiz > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) svg, ' +
    'c-wiz > div:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(1) > span:nth-of-type(1) svg';
function getSelectorStyle(selector, extractClassname, partialSelectorText, jsSelector) {
    var el;
    if (jsSelector) {
        el = jsSelector(document.querySelectorAll(selector));
    }
    else {
        el = document.querySelector(selector);
    }
    if (!el) {
        return null;
    }
    var contentContainerClass = extractClassname ? extractClassname(el) : "." + el.className;
    return findStyle(contentContainerClass, partialSelectorText);
}
exports.getSelectorStyle = getSelectorStyle;
function findStyle(selectorText, partial) {
    var styleSheet = document.styleSheets[1];
    for (var i = 0; i < styleSheet.rules.length; i += 1) {
        if (partial ?
            (styleSheet.rules[i].selectorText &&
                styleSheet.rules[i].selectorText.match(selectorText)) :
            styleSheet.rules[i].selectorText === selectorText) {
            return styleSheet.rules[i];
        }
    }
    return null;
}
exports.findStyle = findStyle;
function replaceRule(rule, prop, config) {
    if (rule.style && rule.style[prop] === config.from) {
        if (Array.isArray(config.to)) {
            for (var toidx = 0; toidx < config.to.length; toidx += 1) {
                var configTo = config.to[toidx];
                rule.style[configTo.prop] = configTo.value;
            }
        }
        else {
            rule.style[prop] = config.to;
        }
    }
}
function replaceStyles(replaceConfig, styleSheetIndex) {
    var replaceProps = Object.keys(replaceConfig);
    var styleSheet = document.styleSheets[styleSheetIndex];
    for (var ruleidx = 0; ruleidx < styleSheet.rules.length; ruleidx += 1) {
        var rule = styleSheet.rules[ruleidx];
        for (var keyidx = 0; keyidx < replaceProps.length; keyidx += 1) {
            var prop = replaceProps[keyidx];
            var config = replaceConfig[prop];
            if (Array.isArray(config)) {
                for (var configidx = 0; configidx < config.length; configidx += 1) {
                    replaceRule(rule, prop, config[configidx]);
                }
            }
            else {
                replaceRule(rule, prop, config);
            }
        }
    }
}
exports.replaceStyles = replaceStyles;
function getLogoContainer() {
    return document.querySelector(exports.logoContainerSelector);
}
exports.getLogoContainer = getLogoContainer;
function getIconSvgs() {
    return document.querySelectorAll(exports.iconSvgSelector);
}
exports.getIconSvgs = getIconSvgs;


/***/ })
/******/ ]);