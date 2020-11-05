import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	box-shadow: 0 0 10px -4px #000;
	height: 100%;

	@media (min-width: 415px) {
		height: 90%;
		max-width: 350px;
	}
`;
