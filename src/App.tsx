import React, {Suspense, useContext} from 'react';
import './styles/index.scss';
import {Routes, Route, Link} from 'react-router-dom';
import HomeAsync from './pages/Home/Home';
import AboutAsync from './pages/About/About';
import {useTheme} from "./theme/useTheme";
import Test from "./Test";
import {classNames} from "./helpers/classNames/classNames";


export const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {test: true, lol: true}, [theme])} >
            <button onClick={toggleTheme}>Toggle theme</button>
            <Link to={'/'} >Home</Link>
            <Link to={'/about'} >About</Link>
            <Test />
            <Suspense fallback={<div>LOADING...</div>}>
                <Routes>
                    <Route path={'/'} element={<HomeAsync />} />
                    <Route path={'/about'} element={<AboutAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}