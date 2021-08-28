import { ContentNav } from './SideBar.styles';
import styled from '@emotion/styled';
import SideTopDr from '../sideTopDr/SideTopDr';

const Title = styled.h3`
	font-size: 1rem;
	font-family: ${({ theme }) => theme.fonts.segoeuiBold};
	margin-bottom: 0.7rem;
`;

const SideMain = styled.div`
	width: inherit;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-family: ${({ theme }) => theme.fonts.segoui};
	color: white;
	padding: 2rem 3rem;

	& div {
		margin: 0.4rem 0 0.3rem 0;
		text-align: left;

		& ul {
			list-style: none;

			& li {
				margin-bottom: 0.7rem;
				letter-spacing: 0.02rem;
				font-weight: 600;
			}
		}
	}
`;

const Sidebar = ({ show, setShow }) => {
	const hideMenu = () => {
		setShow(!show);
	};

	return (
		<ContentNav {...{ show }}>
			{/* <SideContentUser hideMenu={hideMenu} /> */}
			<SideTopDr hideMenu={hideMenu} />
			<SideMain className="sideMain">
				<div className="lista">
					<Title>Concitmed</Title>
					<ul>
						<li>Nosotros</li>
						<li>Ayuda</li>
						<li>Preguntas frecuentes</li>
					</ul>
				</div>
				<div className="lista">
					<Title>Especialidades</Title>
					<ul>
						<li>Dermatología</li>
						<li>Urología</li>
						<li>Dentista</li>
					</ul>
				</div>
				<div className="lista">
					<Title>@ conciment 2021. inc.</Title>
					<ul>
						<li>Términos y condiciones</li>
					</ul>
				</div>
			</SideMain>
		</ContentNav>
	);
};

export default Sidebar;
