import { useEffect, useContext, useState } from 'react';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import ThemeContext from '../context/theme/themeContext';

const cache = createCache({
	key: 'cache-linemerd',
	...(process.env.NODE_ENV === 'development' && { stylisPlugins: [] })
});

const Main = ({ children, theme: { light, dark } }) => {
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
