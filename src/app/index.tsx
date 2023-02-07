import React from 'react';
import {Link} from 'react-router-dom';
import {useTheme} from "shared/lib";
import {classNames} from "shared/lib";
import 'app/styles/index.scss';
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import { Sidebar } from 'widgets/Sidebar';


export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames(['app', theme])} >
            <Navbar />
            <div className="page-content">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}