import React, {Suspense} from 'react';
import {ThemeSwitcher} from "features/themeSwitcher/ui";
import {Button} from "shared/ui";
import {useTranslation} from "react-i18next";


const Home = () => {
    const {t } = useTranslation('home');

    return (
        <Suspense fallback={'test...'}>
            <div>
                <h1>{t('Home page')}</h1>
                <h2>hello 8989898</h2>
            </div>
        </Suspense>
    )
}
export default Home;