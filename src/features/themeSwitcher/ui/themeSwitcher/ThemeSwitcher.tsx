import cls from './ThemeSwitcher.module.scss';
import {classNames, Theme, useTheme} from "shared/lib";
import {Button, ButtonVariants} from "shared/ui";
import LightTheme from 'shared/assets/icons/theme-light.svg';
import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import img from 'shared/assets/images/person.png';


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button
            className={classNames([cls.themeSwitcher, className])}
            onClick={toggleTheme}
            variant={ButtonVariants.CLEAR}>
            {theme === Theme.DARK ? <LightTheme fill={'red'} /> : <DarkTheme />}
        </Button>
    )
}