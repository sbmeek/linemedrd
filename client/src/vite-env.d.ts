/// <reference types="vite/client" />
import { data } from './styles/theme';

declare module '*.ttf';
declare module '*.otf';

declare module '@emotion/react' {
	type ThemeDataType = typeof data;
	type ThemeType = ThemeDataType['dark'] & ThemeDataType['light'];
	declare interface Theme extends ThemeType {}

	declare type Props = {
		theme: Theme;
		as?: React.ElementType<any> | undefined;
	} & React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLElement>,
		HTMLElement
	> & {};
}
