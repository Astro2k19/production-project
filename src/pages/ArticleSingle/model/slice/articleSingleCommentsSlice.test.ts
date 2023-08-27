
import {
  fetchArticleCommentsById
} from '../services/fetchArticleCommentsById/fetchArticleCommentsById'
import { articleSingleCommentsReducer } from './articleSingleCommentsSlice'
import { type Comment } from '@/entities/Comment'
import { type ArticleSingleCommentsSchema } from '../types/articleSingleComments'

const comments: Comment[] = [
  {
    id: 1,
    text: 'comment 1',
    user: {
      id: '1',
      avatar: '',
      username: 'Artem'
    }
  },
  {
    id: 2,
    text: 'comment 2',
    user: {
      id: '1',
      avatar: '',
      username: 'Artem'
    }
  }
]
const normalizdComments = {
  ids: [1, 2],
  entities: {
    1: {
      id: 1,
      text: 'comment 1',
      user: {
        id: 1,
        avatar: '',
        username: 'Artem'
      }
    },
    2: {
      id: 2,
      text: 'comment 2',
      user: {
        id: 1,
        avatar: '',
        username: 'Artem'
      }
    }
  }
}

describe('articleSingleCommentsSlice', () => {
  test('extraReducers articleSingleCommentsSlice.pending', () => {
    const state: DeepPartial<ArticleSingleCommentsSchema> = {
      isLoading: false
    }

    const action = {
      type: fetchArticleCommentsById.pending.type
    }

    expect(articleSingleCommentsReducer(state as ArticleSingleCommentsSchema, action)).toEqual({
      isLoading: true
    })
  })

  test('extraReducers articleSingleCommentsSlice.fulfilled', () => {
    const state: DeepPartial<ArticleSingleCommentsSchema> = {
      isLoading: true
    }

    const action = {
      type: fetchArticleCommentsById.fulfilled.type,
      payload: comments
    }

    expect(articleSingleCommentsReducer(state as ArticleSingleCommentsSchema, action)).toEqual({
      isLoading: false,
      ...normalizdComments
    })
  })

  test('extraReducers articleSingleCommentsSlice.rejected', () => {
    const state: DeepPartial<ArticleSingleCommentsSchema> = {
      isLoading: true
    }

    const action = {
      type: fetchArticleCommentsById.rejected.type,
      payload: 'Ops, something went wrong!'
    }

    expect(articleSingleCommentsReducer(state as ArticleSingleCommentsSchema, action)).toEqual({
      isLoading: false,
      error: 'Ops, something went wrong!'
    })
  })
})
