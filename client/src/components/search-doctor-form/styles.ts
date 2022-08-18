import { SharedContainer } from 'shared/shared-container';
import styled from '@emotion/styled';

export const Container = styled(SharedContainer)`
	h2 {
		text-align: center;
	}
`;

export const FilterButton = styled.button`
	border: none;
	border-radius: 0.3rem;
	width: 100%;
	padding: 0.6rem 0.8rem;
	margin: 2rem 0rem 1.5rem 0rem; 
	background-color: ${(props) => props.theme.colors.green4};

	.dark {
		background-color: ${props => props.theme.colors.green5};
	}
`;

export const FilterButtonTitle = styled.div`
	letter-spacing: 0.1rem;
	font-weight: 600;
	text-decoration: none;
	cursor: pointer;
	text-align: center;
	display: flex;
	align-items: center;
	font-family: ${props => props.theme.fonts.segoeui};
	color: ${props => props.theme.colors.white};

	svg {
		width: 1.2em;
    margin-right: 10px;
		fill: ${props => props.theme.colors.white};
	}
`;
