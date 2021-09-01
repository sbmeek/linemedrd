import styled from '@emotion/styled';

export default styled.div`
	width: 75%;
	margin: auto;
	text-align: left;

	ul {
		list-style: none;

		li {
			margin-bottom: 0.4rem;
			letter-spacing: 0.04rem;
		}
	}
`;

export const Category = styled.h3`
	font-size: 1rem;
	font-family: ${({ theme }) => theme.fonts.segoeuiBold};
	margin-bottom: 0.7rem;
	letter-spacing: 0.06rem;
`;
