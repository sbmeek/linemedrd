/// <reference types="vite/client" />
import { ThemeType } from './styles/theme-types'

declare module '*.ttf';
declare module '*.otf';

declare module '@emotion/react' {
	declare interface Theme extends ThemeType {}

	declare type Props = {} & {
		theme: Theme;
		as?: React.ElementType<any> | undefined;
	} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>,HTMLElement>;
}
