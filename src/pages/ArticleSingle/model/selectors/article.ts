import { createSelector } from '@reduxjs/toolkit'
import { getArticleDetailsData } from 'entities/Article'
import { getUserAuthDate } from 'entities/User'

export const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthDate,
  (article, user) => {
    if (!article || !user) return false

    console.log(article, user)

    return article.userId === user.id
  }
)
