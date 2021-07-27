import { useState } from 'react';
import ThemeContext from '../../context/theme/themeContext';

const ThemeState = ({ children }) => {
	const [theme, setTheme] = useState(false);
	const value = { theme, setTheme };

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
};

export default ThemeState;
