import React from 'react';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import createCache from '@emotion/cache';

const cache = createCache({
	key: 'cache-linemerd',
	...(process.env.NODE_ENV === 'development' && { stylisPlugins: [] })
});

const Main = ({ children, theme: { light } }) => {
	return (
		<CacheProvider value={cache}>
			<ThemeProvider theme={light}>{children}</ThemeProvider>
		</CacheProvider>
	);
};

export default Main;
