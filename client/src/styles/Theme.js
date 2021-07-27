import NeufreitExtraBold from '../assets/fonts/NeufreitExtraBold.otf';
import SegoeUI from '../assets/fonts/SegoeUI.ttf';
import SegoeUIBold from '../assets/fonts/SegoeUIBold.ttf';
import SegoeUIBoldItalic from '../assets/fonts/SegoeUIBoldItalic.ttf';
import SegoeUIItalic from '../assets/fonts/SegoeUIItalic.ttf';

export const data = {
	light: {
		colors: {
			white: 'var(--white)',
			black: 'var(--black)',
			green1: 'var(--green-num1)',
			green2: 'var(--green-num2)',
			green3: 'var(--green-num3)',
			green4: 'var(--green-num4)',
			green5: 'var(--green-num5)',
			green6: 'var(--green-num6)'
		},
		letter: {
			gray1: 'var(--gray-num1)',
			gray2: 'var(--gray-num2)'
		},
		iconPlaceholder: {
			grayTraps1: 'var(--grayTraps-num1)',
			grayTraps2: 'var(--grayTraps-num2)'
		},
		calendarNotify: {
			orange1: 'var(--orange-num1)',
			orange2: 'var(--orange-num2)',
			blue1: 'var(--blue-num1)',
			blue2: 'var(--blue-num2)'
		},
		fonts: {
			neufreit: NeufreitExtraBold,
			segoeui: SegoeUIItalic,
			segoeuiBold: SegoeUIBold,
			segoeuiItalic: SegoeUIItalic,
			segoeuiBoldItalic: SegoeUIBoldItalic
		}
	},
	dark: {
		colors: {
			white: 'blue',
			black: 'orange',
			green1: 'black',
			green2: 'black',
			green3: 'red',
			green4: 'yellow',
			green5: 'green',
			green6: 'blue'
		},
		fonts: {
			neufreit: NeufreitExtraBold,
			segoeui: SegoeUIItalic,
			segoeuiBold: SegoeUIBold,
			segoeuiItalic: SegoeUIItalic,
			segoeuiBoldItalic: SegoeUIBoldItalic
		}
	}
};
