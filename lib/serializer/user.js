"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonapiSerializer = _interopRequireDefault(require("jsonapi-serializer"));

var _default = new _jsonapiSerializer.default.Serializer('users', {
  attributes: ['firstName', 'lastName', 'email', 'location', 'course', 'education_level']
});

exports.default = _default;