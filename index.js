import * as babylon from "babylon";
import traverse from "babel-traverse";
import * as t from "babel-types";


/*const ast = t.binaryExpression("*", t.identifier("a"), t.identifier("b"));
console.log(ast);*/

export default function({ types: t }) {
	return {
		visitor: {
			BinaryExpression(path) {
				if(path.node.operator !== "===") {
					return;
				}
				path.node.left = t.identifier("sembva");
			}
		}
	}
};