import React, { Suspense, memo, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'

import { getUserInited, initAuthDate } from '@/entities/User'

import { AppLayoutLoader } from '@/shared/layouts/AppLayoutLoader/AppLayoutLoader'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { classNames } from '@/shared/lib'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

import { useAppToolbar } from './lib/useAppToolbar'
import { AppRouter } from './providers/router/ui/AppRouter'
import { WithTheme } from './providers/themeProvider/ui/WIthTheme'
import './styles/index.scss'

const App = memo(() => {
    const dispatch = useAppDispatch()
    const isInited = useSelector(getUserInited)
    const toolbar = useAppToolbar()

    useEffect(() => {
        if (!isInited) {
            dispatch(initAuthDate())
        }
    }, [dispatch, isInited])

    if (!isInited) {
        return (
            <div
                id={'app'}
                className={classNames(['app'])}
            >
                <AppLayoutLoader />
            </div>
        )
    }

    return (
        <Suspense
            fallback={
                <div
                    id={'app'}
                    className={classNames(['app'])}
                >
                    <AppLayoutLoader />
                </div>
            }
        >
            <div
                id={'app'}
                className={classNames(['app'])}
            >
                <MainLayout
                    navbar={<Navbar />}
                    sidebar={<Sidebar />}
                    content={<AppRouter />}
                    toolbar={toolbar}
                />
            </div>
        </Suspense>
    )
})
export default WithTheme(App)
