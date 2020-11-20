import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
	color: var(--lmed-link-color);
	text-decoration: none;
	width: fit-content;
	margin: 8px;

	&:hover {
		text-decoration: underline;
		color: var(--lmed-link-hover-color);
	}
`;
