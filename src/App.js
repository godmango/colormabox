import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Box from "./component/box/index";
import { useDispatch, useSelector } from "react-redux";

function App() {
	const dispatch = useDispatch();
	const boxList = useSelector((state) => state.boxList);
	const count = useSelector((state) => state.count);
	const [keyword, setKeyWord] = useState();

	const increase = () => {
		dispatch({ type: "INCREMENT" });
		// const typeIt = boxList.push("aloalo");
		// setBoxList(typeIt);
	};
	const decrease = () => {
		dispatch({ type: "DECREMENT" });
	};
	const reset = () => {
		dispatch({ type: "RESET" });
	};
	const letterChange = (event) => {
		setKeyWord(event.target.value);
		console.log("typedword", event.target.value);
	};
	const colorSubmit = (event) => {
		event.preventDefault();
		dispatch({ type: "CHANGEBACKGROUNDCOLOR", payload: keyword });
	};
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => increase()}>Increase</button>
			<button onClick={() => decrease()}>Decrease</button>
			<button onClick={() => reset()}>Reset</button>
			<form onSubmit={(event) => colorSubmit(event)}>
				<input type="text" onChange={(event) => letterChange(event)} />
				<input type="submit" value="colorize" />
			</form>

			{boxList.map((item, index) => (
				<Box index={index + 1} />
			))}
		</div>
	);
}

export default App;
