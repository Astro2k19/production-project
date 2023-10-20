import { createSelector } from '@reduxjs/toolkit'

import { Article } from '@/entities/Article'
import { getUserAuthDate } from '@/entities/User'

export const getCanEditArticle = (article?: Article) =>
	createSelector(getUserAuthDate, user => {
		if (!article || !user) return false

		return article.userId === user.id
	})
