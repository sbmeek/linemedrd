import styled from '@emotion/styled';

export const ContentHeader = styled.header`
	position: fixed;
	display: flex;
	flex-direction: column;
	top: 0;
	left: 0;
	width: 100%;
	height: auto;
	max-height: 100%;
	z-index: 300;
`;

export const Overlay = styled.div<{ visible: boolean }>`
	visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
	z-index: ${({ visible }) => (visible ? 1 : -999999)};
	background-color: ${({ theme }) => theme.colors.white};
	border: solid 1px ${({ theme }) => theme.colors.green4};
	outline: none;
	border-radius: 0 0 0.4rem 0.4rem;
	font-size: 1rem;
	width: 100%;
	position: absolute;
	top: 0;
	margin-top: 50px;
	border-top: none;
	padding: 10px 20px 8px 20px;
	cursor: default;
`;

export const DropdownOption = styled.div``;
