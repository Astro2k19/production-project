import { useContext } from 'react';

import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../../context/theme';

interface useThemeResult {
	theme: Theme;
	toggleTheme: (saveAction?: (theme: Theme) => void) => void;
}

export const useTheme = (): useThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = (saveAction?: (theme: Theme) => void): void => {
		let themeName;

		switch (theme) {
			case Theme.LIGHT:
				themeName = Theme.DARK;
				break;
			case Theme.DARK:
				themeName = Theme.DUSK;
				break;
			case Theme.DUSK:
				themeName = Theme.LIGHT;
				break;
			default:
				themeName = Theme.LIGHT;
		}

		console.log(theme, 'toggleTheme');

		console.log(themeName, 'toggleTheme');

		if (setTheme) {
			setTheme(themeName);
			document.body.className = themeName;
		}

		saveAction?.(themeName)
	};

	return <useThemeResult>{ theme, toggleTheme };
};
