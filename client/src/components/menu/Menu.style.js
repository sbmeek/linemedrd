import styled from 'styled-components';
import Link from 'shared/link/Link.styled';

export const Container = styled.div`
	display: flex;
	justify-content: flex-end;
	position: absolute;
	left: 0;
	transition: opacity 2s linear;
	z-index: 16;
	width: 100%;
	height: 0.1px;
`;

export const Overlay = styled.div`
	position: absolute;
	top: ${(props) => `calc(${props.appContainerHeight}px * 0.1)`};
	left: 0;
	min-height: ${(props) =>
		props.showOverlay ? `calc(${props.appContainerHeight}px * 0.903)` : '0'};
	z-index: ${(props) => (props.showOverlay ? '15' : '-90')};
	opacity: ${(props) => (props.showOverlay ? '1' : '0')};
	min-width: 100%;
	background: rgba(0, 0, 0, 0.5);
	transform: translateZ(0);
	transition: height 200ms, opacity 200ms;
`;

export const Wrapper = styled.div`
	z-index: 16;
	margin-top: 20px;
`;

export const Sidebar = styled.div`
	position: absolute;
	top: ${(props) => `calc(${props.appContainerHeight}px * 0.1)`};
	background: white;
	flex-direction: column;
	height: 100%;
	max-height: 100%;
	min-height: ${(props) => `calc(${props.appContainerHeight}px * 0.903)`};
	width: 255px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-radius: 12px 0 0 12px;
	opacity: ${(props) => (props.showMenu ? 1 : 0)};
	transform: ${(props) =>
		props.showMenu ? 'translateX(-254px)' : 'translateX(255px)'};
	transition: opacity 250ms, transform 250ms;
	z-index: -1;
	padding: 20px 0;
`;

export const Header = styled.div`
	display: flex;
	justify-content: center;
	height: 30%;
	width: 100%;
	position: relative;

	& > img {
		width: 130px;
	}
`;

export const Content = styled.div`
	margin-top: 20px;
	width: 100%;
`;

export const LinkStyled = styled(Link)`
	margin: 0;
	color: var(--lmed-link-color);
	width: 100%;
	height: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
		border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	font-size: 20px;
	text-decoration: none !important;

	&:hover {
		background-color: rgba(0, 0, 0, 0.04);
	}
`;


export const MediaContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	& > h2 {
		font-size: 20px;
	}
`;

export const SocialMedia = styled.a`
	color: var(--lmed-link-color);
	display: flex;
	align-items: center;
	justify-content: center;
	height: 45px;
	position: relative;
	text-decoration: none;
	width: 100%;

	&:hover {
		background-color: rgba(0, 0, 0, 0.04);
	}
`;

export const ImgStyle = styled.img`
	width: 26px;
	margin-right: 6px;
`;

export const Spacer = styled.div`
	flex: 1;
`;
