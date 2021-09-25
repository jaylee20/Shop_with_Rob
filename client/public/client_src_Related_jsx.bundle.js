"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkshop_with_rob"] = self["webpackChunkshop_with_rob"] || []).push([["client_src_Related_jsx"],{

/***/ "./client/src/Related.jsx":
/*!********************************!*\
  !*** ./client/src/Related.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _RelatedComponents_ComparisonModal_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RelatedComponents/ComparisonModal.jsx */ \"./client/src/RelatedComponents/ComparisonModal.jsx\");\n/* harmony import */ var _RelatedComponents_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RelatedComponents/RelatedStyles.jsx */ \"./client/src/RelatedComponents/RelatedStyles.jsx\");\n/* harmony import */ var _contexts_ProductContext_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contexts/ProductContext.jsx */ \"./client/src/contexts/ProductContext.jsx\");\n\n\n/* eslint-disable max-len */\n\n\n // import RelatedItems from './RelatedComponents/RelatedItems';\n\n\n\n\n\nvar Related = function Related(props) {\n  // const { items } = RelatedItems;\n  var show = props.show;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      currentIndex = _useState2[0],\n      setCurrentIndex = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState3, 2),\n      showModal = _useState4[0],\n      setShowModal = _useState4[1]; // const [overviewID, setOverviewID] = useState(productID);\n\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState5, 2),\n      relatedItems = _useState6[0],\n      setRelatedItems = _useState6[1];\n\n  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ProductContext_jsx__WEBPACK_IMPORTED_MODULE_5__.ProductContext),\n      productID = _useContext.productID,\n      changeHash = _useContext.changeHash;\n\n  var getRelatedProducts = function getRelatedProducts() {\n    // axios.get(`/api/products/${productID}/related`)\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/products/\".concat(productID, \"/related\")).then(function (response) {\n      var productIDs = response.data;\n      return productIDs.map(function (id) {\n        return [axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/products/\".concat(id)), axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"/api/products/\".concat(id, \"/style\")), axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"api/reviews/meta/?product_id=\".concat(id))];\n      });\n    }).then(function (second) {\n      return (// starting with an array of three nested arrays\n        // end with a singular array\n        Promise.all(second.map(function (promises) {\n          return Promise.all(promises);\n        }))\n      );\n    }).then(function (resolved) {\n      return (// have array of arrays\n        // need data from nested array\n        // eslint-disable-next-line implicit-arrow-linebreak\n        resolved.map(function (array) {\n          return [array[0].data, array[1].data.results, array[2].data.ratings];\n        })\n      );\n    }).then(function (fourth) {\n      return fourth.map(function (array) {\n        return {\n          product: array[0],\n          styles: array[1],\n          reviews: getAverageRating(array[2]).avgRating\n        };\n      });\n    }).then(function (fifth) {\n      // console.log(fifth.length);\n      setRelatedItems(fifth);\n    }) // have array of IDs\n    // create array of promises with style request and product request\n    // resolve promises\n    // manipulate into desired format\n    // want array of item objects and style objects\n    [\"catch\"](function (err) {\n      console.log('error getting related items: ', err);\n    });\n  };\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(relatedItems.length),\n      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState7, 2),\n      length = _useState8[0],\n      setLength = _useState8[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    getRelatedProducts();\n  }, [productID]);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    setLength(relatedItems.length);\n  }, [relatedItems]); // useEffect(getRelatedProducts, []);\n\n  var next = function next() {\n    if (currentIndex < length - show) {\n      setCurrentIndex(function (prevState) {\n        return prevState + 1;\n      });\n    }\n  };\n\n  var prev = function prev() {\n    if (currentIndex > 0) {\n      setCurrentIndex(function (prevState) {\n        return prevState - 1;\n      });\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"carousel-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h1\", {\n    className: \"bigText\"\n  }, \"Related Items\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"carousel-wrapper\"\n  }, currentIndex > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RelatedComponents_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_4__.RoundButton, {\n    type: \"button\",\n    onClick: prev,\n    className: \"left-arrow\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaChevronCircleLeft, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RelatedComponents_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_4__.CardWrapper, {\n    className: \"carousel-content-wrapper\",\n    \"data-testid\": \"carousel-content-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"carousel-content show-\".concat(show),\n    style: {\n      transform: \"translateX(-\".concat(currentIndex * (100 / show), \"%)\")\n    }\n  }, relatedItems.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RelatedComponents_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_4__.Card, {\n      key: item.product.name\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RelatedComponents_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_4__.RoundButton, {\n      onClick: function onClick() {\n        return setShowModal(true);\n      },\n      type: \"button\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaRegStar, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RelatedComponents_ComparisonModal_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onClose: function onClose() {\n        return setShowModal(false);\n      },\n      showModal: showModal\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n      onClick: function onClick() {\n        return changeHash(item.product.id);\n      },\n      src: item.styles[0].photos[0].thumbnail_url,\n      className: \"carouselImage\",\n      alt: \"related-item\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RelatedComponents_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_4__.CardText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"bigText\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"b\", null, item.product.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"bigText\"\n    }, \"Category:\", \" \".concat(item.product.category)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"bigText\"\n    }, \"Price:\", \" $\".concat(item.product.default_price)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"bigText\"\n    }, \"Rating:\", \" \".concat(item.reviews.toPrecision(3))))));\n  }))), currentIndex < length - show && relatedItems.length >= show && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_RelatedComponents_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_4__.RoundButton, {\n    type: \"button\",\n    onClick: next,\n    className: \"right-arrow\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaChevronCircleRight, null)))));\n};\n\nvar getAverageRating = function getAverageRating(ratings) {\n  // We want to get the total reviews and the average of the reviews.\n  var weight = Object.keys(ratings);\n\n  if (weight.length === 0) {\n    return {\n      avgRating: 0,\n      numberOfRatings: 0\n    };\n  }\n\n  var rating = Object.values(ratings);\n  var numberOfRatings = 0;\n  var avgRating = 0;\n  var ratingsPercent = {};\n\n  for (var i = 0; i < weight.length; i++) {\n    var currentRating = Number(rating[i]);\n    var currentWeight = Number(weight[i]);\n\n    if (currentRating !== 0) {\n      numberOfRatings += currentRating;\n      avgRating += currentRating * currentWeight;\n    }\n  }\n\n  for (var j = 0; j < weight.length; j++) {\n    var ratingPercent = Number(rating[j]);\n    var weightPercent = weight[j];\n\n    if (ratingPercent !== 0) {\n      ratingsPercent[weightPercent] = parseFloat(ratingPercent / numberOfRatings).toFixed(2);\n    }\n  }\n\n  avgRating /= numberOfRatings;\n  var ratingsObj = {\n    avgRating: avgRating,\n    numberOfRatings: numberOfRatings,\n    ratingsPercent: ratingsPercent\n  };\n  return ratingsObj;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Related); // // eslint-disable-next-line max-len\n// console.log('object: ', obj);\n// const sum = 1 * obj.reviews[1] + 2 * obj.reviews[2] + 3 * obj.reviews[3] + 4 * obj.reviews[4] + 5 * obj.reviews[5];\n// // eslint-disable-next-line max-len\n// console.log('sum: ', sum);\n// // eslint-disable-next-line max-len\n// const avg = sum / (obj.reviews[1] + obj.reviews[2] + obj.reviews[3] + obj.reviews[4] + obj.reviews[5]);\n// console.log('avg: ', avg);\n// obj.reviews = avg;\n\n//# sourceURL=webpack://shop_with_rob/./client/src/Related.jsx?");

/***/ }),

/***/ "./client/src/RelatedComponents/ComparisonModal.jsx":
/*!**********************************************************!*\
  !*** ./client/src/RelatedComponents/ComparisonModal.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RelatedStyles.jsx */ \"./client/src/RelatedComponents/RelatedStyles.jsx\");\n\n\n\nvar ComparisonModal = function ComparisonModal(props) {\n  var showModal = props.showModal;\n\n  if (!showModal) {\n    return null;\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n    className: \"\".concat(props.showModal ? 'show' : '')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_1__.ModalContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_1__.ModalEdge, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_1__.ModalTitle, null, \"Comparing\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_1__.ModalBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"table\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", null, \"Current\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", null, \"Characteristics\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"th\", null, \"Related Item\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, \"4 stars\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, \"Rating\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, \"4.2 stars\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, \"Yes\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, \"Sale Item\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, \"No\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, \"Cotton\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, \"Fabric\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, \"Canvas\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, \"Brass\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, \"Button\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"td\", null, \"Plastic\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_1__.ModalEdge, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RelatedStyles_jsx__WEBPACK_IMPORTED_MODULE_1__.RoundButton, {\n    onClick: props.onClose,\n    className: \"button\",\n    type: \"button\"\n  }, \"Close\"))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ComparisonModal);\n\n//# sourceURL=webpack://shop_with_rob/./client/src/RelatedComponents/ComparisonModal.jsx?");

/***/ }),

/***/ "./client/src/RelatedComponents/RelatedStyles.jsx":
/*!********************************************************!*\
  !*** ./client/src/RelatedComponents/RelatedStyles.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card),\n/* harmony export */   \"RoundButton\": () => (/* binding */ RoundButton),\n/* harmony export */   \"CardWrapper\": () => (/* binding */ CardWrapper),\n/* harmony export */   \"CardText\": () => (/* binding */ CardText),\n/* harmony export */   \"Modal\": () => (/* binding */ Modal),\n/* harmony export */   \"ModalContent\": () => (/* binding */ ModalContent),\n/* harmony export */   \"ModalEdge\": () => (/* binding */ ModalEdge),\n/* harmony export */   \"ModalTitle\": () => (/* binding */ ModalTitle),\n/* harmony export */   \"ModalBody\": () => (/* binding */ ModalBody)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;\n\n/* eslint-disable import/prefer-default-export */\n\nvar Card = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 20%\\n  // width: calc((100% - (300px)) / 4);\\n  height: 100%\\n  text-align: center;\\n  display: flex;\\n  transition: all 250ms linear;\\n\\n  -ms-overflow-style: none;\\n  scrollbar-width: none;\\n  flex-shrink: 0;\\n  flex-grow: 1;\\n  display: block;\\n  background-color: #fffefa;\\n  padding: 5px;\\n  border-radius: 5px;\\n  border: 1px solid #d3d3d3;\\n  box-shadow: 2px 2px 2px 1px #d3d3d3;\\n  margin: 0px 2px;\\n  text-align: center;\\n\\n  \"])));\nvar RoundButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color:#FBD63F;\\n  float: right;\\n  border: none;\\n  border-radius: 50%;\\n  color:#000000;\\n  text-align: center;\\n  text-decoration: none;\\n  display: inline-block;\\n  font-size: 16px;\\n  cursor: pointer;\\n  padding: 15px 8px 15px;\\n  &:hover {\\n    color: #FBD63F;\\n    border: #black solid 1px;\\n    background:#fcecae;\\n  }\\n  \"]))); // export const RoundButton:hover = styles.button`\n//   `;\n\nvar CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  overflow: hidden;\\n  width: 100%;\\n  height: 100%;\\n  \"])));\nvar CardText = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: block;\\n\\n  position: absolute;\\n  text-align: center;\\n  // left: 50%;\\n  bottom: 0;\\n  \"])));\nvar Modal = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: #ffeca0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  z-index: 9999;\\n  \"])));\nvar ModalContent = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 500px;\\n  background-color: fff;\\n  z-index: 9999;\\n  \"])));\nvar ModalEdge = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 10px;\\n  \"])));\nvar ModalTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h4(_templateObject8 || (_templateObject8 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin: 0;\\n  \"])));\nvar ModalBody = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject9 || (_templateObject9 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 10px;\\n  border-top: 10px solid #eee;\\n  border-bottom: 1px solid #eee;\\n  \"])));\n\n//# sourceURL=webpack://shop_with_rob/./client/src/RelatedComponents/RelatedStyles.jsx?");

/***/ })

}]);