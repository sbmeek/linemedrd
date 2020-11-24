import styled from 'styled-components';

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
	padding: 20px;
`;

export const MediaContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SocialMedia = styled.div`
	display: inline;
	margin: 8px;
	& a {
		position: relative;
		float: left;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: var(--lmed-link-hover-color);
	}
`;

export const ImgStyle = styled.img`
	width: 10%;
	margin: 3px;
	align-self: center;
	position: relative;
	float: left;
`;

export const Spacer = styled.div`
	flex: 1;
`;
