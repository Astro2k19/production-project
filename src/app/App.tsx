import React from 'react';
import { Link} from 'react-router-dom';
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib";
import 'app/styles/index.scss';
import {AppRouter} from "app/providers/router";


export const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {test: false, lol: true}, [theme])} >
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'} >Home</Link>
            <Link to={'/about'} >About</Link>
            <h1>HELLO WORLD</h1>
            <AppRouter />
        </div>
    )
}