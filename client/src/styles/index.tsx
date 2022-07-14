import createCache from '@emotion/cache';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { PropsWithChildren, useContext, useEffect, useState } from 'react';
import ThemeContext from '../context/theme';
import { ThemeDataType } from './theme-types';

const cache = createCache({
	key: 'lmed-ch',
	...(process.env.NODE_ENV === 'development' && { stylisPlugins: [] })
});

type PropsType = PropsWithChildren<{ 
	theme: { light: ThemeDataType['dark'], dark: ThemeDataType['dark'] }
}>;

const Main = ({ children, theme: { light, dark } }: PropsType) => {
	const themeContext = useContext(ThemeContext);
	const { theme } = themeContext;

	const [colorsTheme, setColorsTheme] = useState(light);

	useEffect(() => {
		theme ? setColorsTheme(dark) : setColorsTheme(light);
	}, [theme]);

	return (
		<CacheProvider value={cache}>
			<ThemeProvider theme={colorsTheme}>{children}</ThemeProvider>
		</CacheProvider>
	);
};

export default Main;
