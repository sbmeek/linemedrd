import { useMemo, useState } from 'react';
import ThemeContext from './index';

const ThemeState = ({ children }) => {
	const [theme, setTheme] = useState(false);
	// const value = useMemo({ theme, setTheme });
	const value = { theme, setTheme };

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export default ThemeState;
