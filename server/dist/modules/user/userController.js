"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _userModel = require("./userModel");

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserController = function UserController() {
    //this.userModel = new UserModel();

    _classCallCheck(this, UserController);

    this.MainPage = function (req, res) {
        res.status(200).send({ Success: true, Error: false, Data: { message: "Welcome" } });
    };
};

exports.default = new UserController();
//# sourceMappingURL=userController.js.map