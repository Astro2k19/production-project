import React, { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { PageLoader } from '@/widgets/pageLoader'

import { getUserInited, initAuthDate } from '@/entities/User'

import { MainLayout } from '@/shared/layouts/MainLayout'
import { classNames } from '@/shared/lib'
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

import { AppRouter } from './providers/router/ui/AppRouter'
import './styles/index.scss'

export const App: React.FC = () => {
    const dispatch = useAppDispatch()
    const isInited = useSelector(getUserInited)

    useEffect(() => {
        dispatch(initAuthDate())
    }, [dispatch])

    if (!isInited) {
        return <PageLoader />
    }

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <Suspense fallback={<PageLoader />}>
                    <div className={classNames(['app_redesigned'])}>
                        <MainLayout
                            navbar={<Navbar />}
                            sidebar={<Sidebar />}
                            content={<AppRouter />}
                            toolbar={<div>test content</div>}
                        />
                    </div>
                </Suspense>
            }
            off={
                <Suspense fallback={<PageLoader />}>
                    <div className={classNames(['app'])}>
                        <Navbar />
                        <div className="page-content">
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </div>
                </Suspense>
            }
        />
    )
}
