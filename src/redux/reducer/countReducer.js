let initialState = {
	count: 0,
	boxList: [],
	backgroundColor: "",
	thisBackgroundColor: "",
};
const countReducer = (state = initialState, action) => {
	let { type, payload } = action;
	switch (type) {
		case "CHANGETHISBACKGROUNDCOLOR":
			// state.thisBackgroundColor = payload;
			state.boxList[payload.index] = payload.color;
			state.boxList = [...state.boxList];
			return { ...state };

		case "CHANGEBACKGROUNDCOLOR":
			state.backgroundColor = payload;
			console.log("thisispayload", state.backgroundColor);
			return { ...state };

		case "INCREMENT":
			state.count++;
			state.boxList.push("");
			console.log(state.boxList);
			// if (state.count > 10) {
			// 	state.boxList.style.color = "red";
			// }
			return { ...state };
		case "DECREMENT":
			if (state.count > 0) {
				state.boxList.pop();
				state.count--;
			}
			return { ...state };
		case "RESET":
			state.count = 0;
			state.boxList = [];
		default:
			return { ...state };
	}

	// if (type === "INCREMENT") {
	// 	state.count++;
	// 	console.log(state.count);
	// }
	// return { ...state };
};
export default countReducer;
