import { type ArticleSingleCommentsSchema } from './articleSingleComments'
// import { type ArticleSingleRecommendationsSchema } from './articleSingleRecommendations'

export interface ArticleSinglePageSchema {
  comments: ArticleSingleCommentsSchema
  // recommendations: ArticleSingleRecommendationsSchema
}
