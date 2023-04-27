import { DECREMENT, INCREMENT } from '../Action/Action';

const defaultState = {
	type: String,
	value: 0,
};
export const reducer = (state = defaultState, action: any) => {
	switch (action.type) {
		case DECREMENT:
			return { ...state, value: state.value - 1 };
		case INCREMENT:
			return { ...state, value: state.value + 1 };
		default:
			return defaultState;
	}
};
