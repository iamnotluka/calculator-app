import React from "react";

const Screen = ({ expression, result }) => {
	return (
		<div className="screen">
			<div
				className={`expression 
					${
						expression.length > 22 && expression.length <= 28
							? "smaller-expression"
							: ""
					} 
					${expression.length > 28 ? "smallest-expression" : ""}`}>
				{expression}
			</div>
			<div className="result">{result}</div>
		</div>
	);
};

export default Screen;
