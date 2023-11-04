import React, { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { PageLoader } from '@/widgets/pageLoader'

import { getUserInited, initAuthDate } from '@/entities/User'

import { classNames } from '@/shared/lib'
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
        <Suspense fallback={<PageLoader />}>
            <div className={classNames(['app'])}>
                <Navbar />
                <div className="page-content">
                    <Sidebar />

                    {isInited && <AppRouter />}
                </div>
            </div>
        </Suspense>
    )
}
