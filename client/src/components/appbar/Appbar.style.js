import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	display: grid;
	grid-template-columns: 90% 10%;
	background-color: var(--lmed-green-02);
	padding: 0 17px;
	position: relative;

	@media (min-width: 415px) {
		border-radius: 12px 12px 0 0;
	}
`;

export const Brand = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;

	& > h2 {
		color: #fff;
		font-family: 'NunitoExtraBold' !important;
		font-size: 28px;
		margin-left: 12px;
	}
`;
