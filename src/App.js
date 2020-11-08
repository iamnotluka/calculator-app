import React, { useState } from "react";
import Calculator from "./components/Calculator.js";
import { evaluate } from "mathjs";

function App() {
	const [expression, setExpression] = useState("-");
	const [result, setResult] = useState("-");
	const [resultShown, setResultShown] = useState(false);

	function expressionHandler(char) {
		let c = char.target.text;
		if (c === "x") c = "*";

		// clear
		if (c === "C") {
			setExpression("-");
			setResult("-");

			// calculate
		} else if (c === "=") {
			if (expression == "-") return;
			try {
				let res = evaluate(expression);
				setResult("-");
				setExpression(res);
				setResultShown(true);
			} catch (err) {
				setResult("Invalid syntax.");
				console.log(err);
			}

			// if the expression is '-' just add the number to the empty string
		} else if (expression === "-" || resultShown) {
			setExpression("" + c);
			setResult(c);
			setResultShown(false);
		} else {
			if (expression.length > 54) return;
			try {
				let res = evaluate(expression + c);
				console.log(res);
				setResult(res);
			} catch (err) {}
			setExpression(expression + c);
		}
	}

	return (
		<div className="main">
			<div className="record-label">calculator.</div>
			<Calculator
				expression={expression}
				expressionHandler={expressionHandler}
				result={result}
				setResult={setResult}
			/>
		</div>
	);
}

export default App;
