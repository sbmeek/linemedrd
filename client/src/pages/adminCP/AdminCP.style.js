import styled, { css } from 'styled-components';
import lupa from 'assets/icons/lupa-en-ingle.svg';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Title = styled.h2`
	text-transform: uppercase;
	color: var(--lmed-green-02);
	font-family: 'NunitoExtraBold' !important;
	font-size: 30px;
	text-align: center;
`;

export const SearchField = styled.textarea`
	border-radius: 12px;
	background-color: var(--lmed-green-00);
	width: 55%;
	max-width: 220px;
	height: 30px;
	margin-top: 17px;
	background-image: ${(props) =>
		props.isSearchFieldOnInputMode ? '' : `url(${lupa})`};
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 24px;
	cursor: ${(props) => (props.isSearchFieldOnInputMode ? 'text' : 'pointer')};
	padding: 5.3px;
	resize: none;
	color: #fff;
	overflow: hidden;
	white-space: nowrap;
`;

export const ErrUsersNotFound = styled.h4`
	text-align: left;
	margin-top: 20px;
	width: 60%;
	max-width: 250px;
`;

export const TableWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 95%;
	height: 70%;
	margin-top: 21px;
`;

export const TableHead = styled.div`
	display: flex;
	height: 15%;
	width: 100%;
	background-color: var(--lmed-green-02);
	border-radius: 12px 12px 0 0;

	& > span {
		display: grid;
		place-content: center;
		min-width: 25%;
		height: 100%;
		color: var(--lmed-green-03);
		font-family: 'NunitoExtraBold' !important;
	}
`;

export const Table = styled.table`
	height: 85%;
	width: 100%;
	table-layout: fixed;

	& tr {
		display: flex;
		height: 50px;
		align-items: center;
		border-bottom: 2px solid var(--lmed-green-02);
	}

	& tr div {
		max-height: 20px;
	}
`;

export const Td = styled.td`
	display: block;
	min-width: 25%;
	max-height: 20px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	text-align: center;
	color: var(--lmed-green-03);
	${(props) =>
		props.isRoleTd
			? css`
					& {
						display: flex;
						justify-content: center;
						padding-left: 15px;
					}
			  `
			: ''}
`;
