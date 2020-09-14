"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _userController = require("../user/userController");

var _userController2 = _interopRequireDefault(_userController);

var _userMiddleware = require("../user/userMiddleware");

var _userMiddleware2 = _interopRequireDefault(_userMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/mainpage', _userMiddleware2.default.ValidateMainPage, _userController2.default.MainPage);

exports.default = router;
//# sourceMappingURL=userRoutes.js.map