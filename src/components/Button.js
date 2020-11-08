import React from "react";

const Button = ({ clear, eq, operator, children, expressionHandler }) => {
	return (
		<a
			onClick={expressionHandler}
			className={`
            ${clear ? "clear" : ""} 
            ${eq ? "eq" : ""} button"}
			${operator ? "operator" : ""} button`}>
			{children}
		</a>
	);
};

export default Button;
