import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		[key: string]: any;
	}
}

declare global {
	declare module '*.ttf';
	declare module '*.otf';
}
