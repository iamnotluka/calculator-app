import React from "react";
import Button from "./Button";

const Board = ({ expressionHandler }) => {
	return (
		<div className="board">
			<div className="row">
				<Button expressionHandler={expressionHandler} operator={true}>
					^
				</Button>
				<Button expressionHandler={expressionHandler} operator={true}>
					()
				</Button>
				<Button expressionHandler={expressionHandler} operator={true}>
					%
				</Button>
				<Button expressionHandler={expressionHandler} operator={true}>
					/
				</Button>
			</div>
			<div className="row">
				<Button expressionHandler={expressionHandler}>7</Button>
				<Button expressionHandler={expressionHandler}>8</Button>
				<Button expressionHandler={expressionHandler}>9</Button>
				<Button expressionHandler={expressionHandler} operator={true}>
					x
				</Button>
			</div>
			<div className="row">
				<Button expressionHandler={expressionHandler}>4</Button>
				<Button expressionHandler={expressionHandler}>5</Button>
				<Button expressionHandler={expressionHandler}>6</Button>
				<Button expressionHandler={expressionHandler} operator={true}>
					-
				</Button>
			</div>
			<div className="row">
				<Button expressionHandler={expressionHandler}>1</Button>
				<Button expressionHandler={expressionHandler}>2</Button>
				<Button expressionHandler={expressionHandler}>3</Button>
				<Button expressionHandler={expressionHandler} operator={true}>
					+
				</Button>
			</div>
			<div className="row">
				<Button expressionHandler={expressionHandler} clear={true}>
					C
				</Button>
				<Button expressionHandler={expressionHandler}>0</Button>
				<Button expressionHandler={expressionHandler}>.</Button>
				<Button expressionHandler={expressionHandler} eq={true}>
					=
				</Button>
			</div>
		</div>
	);
};

export default Board;
