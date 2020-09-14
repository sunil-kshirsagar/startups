'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserMiddleware = function UserMiddleware() {
    var _this = this;

    _classCallCheck(this, UserMiddleware);

    this.MainPageValidationSchema = _joi2.default.object().keys({
        entityId: _joi2.default.string().required(),
        entityType: _joi2.default.string().required()
    });

    this.ValidateMainPage = function (req, res, next) {
        _joi2.default.validate(req.query, _this.MainPageValidationSchema, function (err, value) {
            if (err) {
                logger.error('MainPageValidationSchema request ' + JSON.stringify(req.query) + ' - error ' + JSON.stringify(err));
                return res.status(400).send({
                    Error: err.details[0].message
                });
            }

            next();
        });
    };
};

exports.default = new UserMiddleware();
//# sourceMappingURL=userMiddleware.js.map