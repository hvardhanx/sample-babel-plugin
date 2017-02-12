"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (_ref) {
	var t = _ref.types;

	return {
		visitor: {
			BinaryExpression: function BinaryExpression(path) {
				if (path.node.operator !== "===") {
					return;
				}
				path.node.left = t.identifier("sembva");
			}
		}
	};
};

var _babylon = require("babylon");

var babylon = _interopRequireWildcard(_babylon);

var _babelTraverse = require("babel-traverse");

var _babelTraverse2 = _interopRequireDefault(_babelTraverse);

var _babelTypes = require("babel-types");

var t = _interopRequireWildcard(_babelTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

;

/*const ast = t.binaryExpression("*", t.identifier("a"), t.identifier("b"));
console.log(ast);*/
