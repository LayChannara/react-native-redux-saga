import c from "../constants";
import { combineReducers } from "redux";

const userState = {
	list: [],
	fetching: false,
	fetchError: false
};

export const users = (state = userState, action) => {
	switch (action.type) {
		case c.FETCH_USER_START:
			return { ...state, fetching: true };
		case c.FETCH_USER_SUCCESS:
			return {
				...state,
				list: action.payload,
				fetching: false,
				fetchError: false
			};
		case c.FETCH_USER_FAILED:
			return { ...state, fetchError: true, fetching: false };
		default:
			return state;
	}
};

export const rootReducer = combineReducers({ users });
