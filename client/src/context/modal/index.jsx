import {
	createContext, useContext, useMemo, useState
} from 'react';

const ModalContext = createContext({});

const InitialState = {
	open: false
};

export const ModalProvider = ({ children }) => {
	const [openModal, setOpenModal] = useState(InitialState);

	const actionModal = () => {
		setOpenModal({ ...InitialState, open: InitialState.open });
	};

	const value = useMemo({ openModal, actionModal });

	return (
		<ModalContext.Provider value={value}>
			{children}
		</ModalContext.Provider>
	);
};

export default function useModal() {
	return useContext(ModalContext);
}
