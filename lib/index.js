'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by JSon on 2017/6/22.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _mime = require('mime');

var _mime2 = _interopRequireDefault(_mime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
  function _class() {
    var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _class);

    this.setting = Object.assign({}, {
      css: true,
      html: false
    }, c);
  }

  _createClass(_class, [{
    key: 'apply',
    value: function apply(op) {
      var code = op.code;

      if (code) {
        var reg = /(\/\w+)+\w+\.(png|jpg|gif|jpeg)/gi;
        var imgPaths = code.match(reg) || [];
        imgPaths.map(function (imgPath) {
          var pathFile = _path2.default.join(process.cwd(), imgPath);
          try {
            var bData = _fs2.default.readFileSync(pathFile);
            var base64Str = bData.toString('base64');
            var mimeType = _mime2.default.lookup(pathFile);
            var dataUri = 'data:' + mimeType + ';base64,' + base64Str;
            op.code = op.code.replace(imgPath, '' + dataUri);
          } catch (e) {
            console.error('读取图片失败:', pathFile);
          }
        });
      }
      op.next();
    }
  }]);

  return _class;
}();

exports.default = _class;