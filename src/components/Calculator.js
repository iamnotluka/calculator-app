import React from "react";
import Screen from "./Screen";
import Board from "./Board";

const Calculator = ({ expression, expressionHandler, result, setResult }) => {
	return (
		<div className="calculator">
			<Screen expression={expression} result={result} />
			<Board expressionHandler={expressionHandler} />
		</div>
	);
};

export default Calculator;
