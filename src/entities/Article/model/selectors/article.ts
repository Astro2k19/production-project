import { createSelector } from '@reduxjs/toolkit'

import { getUserAuthDate } from '@/entities/User'

export const getCanEditArticle = (articleUserId?: string | number) =>
    createSelector(getUserAuthDate, user => {
        if (!articleUserId || !user) return false

        return articleUserId === user.id
    })
