import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import {routerConfig} from "../config/config";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>LOADING...</div>}>
            <Routes>
                {routerConfig.map(({element, path}) => (
                    <Route path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    )
}