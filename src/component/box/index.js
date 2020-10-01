import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
let textColor = "";
// let backColor = "none";
const Box = ({ index }) => {
	const dispatch = useDispatch();
	const [thisKeyword, setThisKeyWord] = useState();
	const colorTyped = useSelector((state) => state.backgroundColor);
	const thisColorTyped = useSelector((state) => state.boxList[index - 1]);
	console.log("wat", colorTyped);
	console.log(index);
	if (index + 1 >= 10) {
		textColor = "red";
	}
	// else {
	// 	textColor = "black";
	// }
	// if (index + 1 <= 10) {
	// 	textColor = "yellow";
	// }

	const count = useSelector((state) => state.count);
	const thisLEtterChange = (event) => {
		setThisKeyWord(event.target.value);
	};
	const thisColorSubmit = (event) => {
		event.preventDefault();
		dispatch({
			type: "CHANGETHISBACKGROUNDCOLOR",
			payload: { color: thisKeyword, index: index - 1 },
		});
	};
	return (
		<div
			style={{
				width: "200px",
				height: "100px",
				border: "2px solid black",
				color: textColor,
				backgroundColor: thisColorTyped ? thisColorTyped : colorTyped,
			}}
		>
			{/* <h3>coun from box:{count}</h3> */}
			<p>Box Number:{index}</p>
			{console.log(thisColorTyped, colorTyped)}
			<form onSubmit={(event) => thisColorSubmit(event)}>
				<input type="text" onChange={(event) => thisLEtterChange(event)} />
				<input type="submit" value="Color This" />
			</form>
		</div>
	);
};

export default Box;
