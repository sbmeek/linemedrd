import styled from '@emotion/styled';
import { ContentInput, Input, Wrapper } from 'shared/input';
import { Icon } from 'shared/input-icon';

export const ContentDatalist = styled(ContentInput)``;

export const WrapperDatalist = styled(Wrapper)`
	::after {
		left: 2.2rem;
	}
`;

export const InputDataList = styled(Input)`
	padding-left: 2.19rem;
	padding-right: 2rem;

	@keyframes moveInput {
		from {
			padding-left: 3.5rem;
		}
		to {
			padding-left: 2.19rem;
		}
	}
`;

export const Dropdown = styled.datalist`
	position: absolute;
	background-color: white;
	border: 1px solid blue;
	border-radius: 0 0 5px 5px;
	border-top: none;
	font-family: sans-serif;
	width: 350px;
	padding: 5px;
	max-height: 10rem;
	overflow-y: auto;

	option {
		background-color: white;
		padding: 4px;
		color: blue;
		margin-bottom: 1px;
		font-size: 18px;
		cursor: pointer;

		&:hover,
		.active {
			background-color: lightblue;
		}
	}
`;

export const IconListData = styled(Icon)``;
export const IconIdentify = styled(Icon)`
	left: 0.6rem;
	right: unset;
`;
