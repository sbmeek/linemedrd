import AddIcon from 'assets/icon/add_icon/AddIcon';
import useAlerta from 'context/alerta/alertaState';
import ModalBackground, { ModalClose } from './ModalFullScreen.styles';

const ModalFullScreen = ({ children }) => {
	const { alerta, hideModal } = useAlerta();
	const open = !!alerta;

	return (
		<ModalBackground className={open ? 'open' : 'close'}>
			<ModalClose onClick={hideModal}>
				<div>
					<AddIcon />
				</div>
				<div>Cerrar</div>
			</ModalClose>
			{children}
		</ModalBackground>
	);
};

export default ModalFullScreen;
