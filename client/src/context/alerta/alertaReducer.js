import { OPEN_MODAL, CLOSE_MODAL } from '@/type/types';

const AlertaReducer = (state, action) => {
	switch (action.types) {
		case OPEN_MODAL:
			return {
				alerta: action.payload
			};

		case CLOSE_MODAL:
			return {
				alerta: null
			};

		default:
			return state;
	}
};

export default AlertaReducer;
