import styled from 'styled-components';
import homeBg from 'assets/imgs/home-bg.jpg';
import homeBgVertical from 'assets/imgs/home-bg-vertical.jpg';
import { Link } from 'react-router-dom'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: -28px;
	width: 100%;
	overflow-y: auto;

	&::-webkit-scrollbar {
		width: 6px;
		height: 6px;
	}
	&::-webkit-scrollbar-thumb {
		background: var(--lmed-green-00);
		border-radius: 10px;
	}
	scrollbar-width: thin;
	scrollbar-color: var(--lmed-green-00) transparent;
`;

export const CoverWrapper = styled.div`
	height: 274.54px;
	position: relative;

	@media (min-width: 415px), (max-width: 356px) {
		height: 422px !important;
	}

	@media (max-width: 389px) {
		height: 274.54px;
	}
`;

export const BgContainer = styled.div`
	height: 100%;
	position: relative;
	background-image: url(${homeBg});
	background-size: cover;

	&::after {
		content: '';
		background: radial-gradient(circle, rgb(0, 0, 0), rgba(0, 0, 0, 0.5)) 0% 0% /
			cover;
		min-height: 100%;
		min-width: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}

	@media (min-width: 415px), (max-width: 356px) {
		background-image: url(${homeBgVertical});
	}
`;

export const CoverContent = styled.div`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;

	@media (min-width: 415px), (max-width: 356px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`;

export const CompanyTitle = styled.h2`
	color: #fff;
	text-align: center;
	font-family: 'NunitoExtraBold' !important;
	font-size: 2em;
	margin-top: 10px;

	@media (max-width: 333px) {
		font-size: 1.7em;
	}
`;

export const CompanyDescription = styled.p`
	color: #fff;
	padding: 0 20px;
	margin-top: 10px;
	line-height: 1.1;
	font-size: 15px;
	text-align: center;
`;

export const SpecialtiesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 15px;
	padding: 0 20px;

	@media (max-width: 389px) {
		padding: 0;
	}

	@media (max-width: 356px) {
		padding: 0 20px;
	}

	@media (max-width: 274px) {
		padding: 0 !important;
	}
`;

export const BtnSpecialty = styled(Link)`
	cursor: pointer;
	background-color: transparent;
	border-radius: 20px;
	border: 2px solid #fff;
	padding: 13px 10px;
	margin: 8px;
	color: #fff;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px;
	transition: all 100ms linear 0s;
	text-decoration: none;

	&:hover {
		background-color: rgba(255, 255, 255, 0.7);
		color: rgb(0, 0, 0);
		box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 20px;
	}
`;

export const CardsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(165px, 1fr));
	grid-gap: 24px 9px;
	place-items: center;
	place-content: center;
	padding: 0 6px;
	margin: 20px 0;
`;

export const CardContainer = styled(Link)`
	text-decoration: none;
	display: grid;
	place-items: center;
	place-content: center;
	background-color: ${(props) => props.bgColor};
	width: 165px;
	height: 108px;
	border-radius: 17px;
	color: #fff;

	@media (max-width: 368px) {
		width: 90%;
		height: 128px;

		& > span {
			font-size: 20px;
		}
	}
`;

export const SpecialtyIcon = styled.img`
	width: ${(props) => (props.isTeethIcon ? '40px' : '50px')};
`;
