import { OPEN_MODAL, CLOSE_MODAL } from '@/type/types';
import { useContext, useMemo, useReducer } from 'react';
import AlertaContext from './alertaContext';
import AlertaReducer from './alertaReducer';

const initialState = {
	alerta: null
};

export const AlertaState = ({ children }) => {
	const [state, dispatch] = useReducer(AlertaReducer, initialState);
	const { alerta } = state;

	const showModal = () => {
		const setDispatch = {
			types: OPEN_MODAL,
			payload: {
				open: true
			}
		};
		dispatch(setDispatch);
	};

	const hideModal = () => {
		dispatch({
			types: CLOSE_MODAL
		});
	};

	const memoValue = useMemo(
		() => ({
			alerta,
			showModal,
			hideModal
		}),
		[alerta, showModal, hideModal]
	);

	return (
		<AlertaContext.Provider value={memoValue}>
			{children}
		</AlertaContext.Provider>
	);
};

export default function useAlerta() {
	return useContext(AlertaContext);
}
