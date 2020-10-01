import countReducer from "../reducer/countReducer";
import { createStore } from "redux";

const store = createStore(countReducer);

export default store;
