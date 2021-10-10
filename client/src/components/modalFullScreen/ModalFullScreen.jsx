import ModalBackground from './ModalFullScreen.styles';

const ModalFullScreen = ({ children }) => {
	return (
		<ModalBackground className={open ? 'open' : 'close'}>
			{/* <ModalClose onClick={hideModal}>
				<div>
					<Add />
				</div>
				<div>Cerrar</div>
			</ModalClose> */}
			{children}
		</ModalBackground>
	);
};

export default ModalFullScreen;
