import { createContext, useContext, useState } from 'react';

const ModalContext = createContext({});

const InitialState = {
	open: false
};

export const ModalProvider = props => {
	const [openModal, setOpenModal] = useState(InitialState);

	const actionModal = () => {
		setOpenModal({ ...InitialState, open: InitialState.open });
	};

	return (
		<ModalContext.Provider value={{ openModal, actionModal }}>
			{props.children}
		</ModalContext.Provider>
	);
};

export default function useModal() {
	return useContext(ModalContext);
}
