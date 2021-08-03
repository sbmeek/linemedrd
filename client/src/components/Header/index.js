import MenuIcon from '@/assets/icon/MenuIcon';
import styled from '@emotion/styled';

const ContainerTop = styled.nav`
	display: flex;
	width: 100%;
	max-width: 100%;
	padding: 1rem;
	border: none;
	justify-content: space-between;

	${({ theme }) => ({
		backgroundColor: theme.colors.green5,
		color: theme.calendarNotify.blue1,
		fontFamily: theme.fonts.segoeui
	})}

	& h1 {
		font-size: 1rem;
	}
`;

const ContainerLogo = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 80%;
	margin-right: auto;
	max-width: 100%;

	& h1 {
		color: ${({ theme }) => theme['colors'].white};
		font-family: ${({ theme }) => theme['fonts'].neufreit};
		margin-left: 2%;
	}
`;

const Rombo = styled.div`
	width: 1rem;
	height: 1rem;
	background-color: white;
	border-radius: 0.2rem;
	transform: rotate(45deg);
`;

const ContentMenu = styled.div`
	display: flex;
	align-items: center;
`;

const Header = () => {
	return (
		<ContainerTop>
			<ContainerLogo>
				<Rombo></Rombo>
				<h1>Concitmed</h1>
			</ContainerLogo>
			<ContentMenu
				onClick={() => {
					console.log('menu');
				}}
			>
				<MenuIcon size="1.2rem" color="white" />
			</ContentMenu>
		</ContainerTop>
	);
};

export default Header;
