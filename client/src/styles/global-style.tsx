import { Global, css } from '@emotion/react';

import NeufreitExtraBold from 'assets/fonts/NeufreitExtraBold.otf';
import SegoeUI from 'assets/fonts/SegoeUI.ttf';
import SegoeUIBold from 'assets/fonts/SegoeUIBold.ttf';
import SegoeUIBoldItalic from 'assets/fonts/SegoeUIBoldItalic.ttf';
import SegoeUIItalic from 'assets/fonts/SegoeUIItalic.ttf';

function GlobalStyle() {
	return (
		<Global
			styles={css`
				@font-face {
					font-family: 'neufreit';
					src: url(${NeufreitExtraBold});
				}

				@font-face {
					font-family: 'segoeNormal';
					src: url(${SegoeUI});
				}

				@font-face {
					font-family: 'segoeBold';
					src: url(${SegoeUIBold});
				}

				@font-face {
					font-family: 'segoeBoldItalic';
					src: url(${SegoeUIBoldItalic});
				}

				@font-face {
					font-family: 'segoeItalic';
					src: url(${SegoeUIItalic});
				}

				body {
					font-family: segoeNormal;
				}
			`}
		/>
	);
}

export default GlobalStyle;
