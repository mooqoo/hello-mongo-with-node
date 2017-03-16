'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// 因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 5000, function () {
  var port = server.address().port;
  console.log('App now running on port', port);
});