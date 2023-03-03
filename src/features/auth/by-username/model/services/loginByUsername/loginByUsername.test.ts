import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { type Dispatch } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/testAsyncThunk/TestAsyncThunk'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername', () => {
  // let dispatch: Dispatch
  // let getState: () => StoreSchema
  //
  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })

  test('succesfull request', async () => {
    const userData = { id: 1, username: 'User' }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))
    // const action = loginByUsername({ username: 'User', password: '123456789' })
    // const result = await action(dispatch, getState, undefined)
    const asyncThunk = new TestAsyncThunk(loginByUsername)
    const result = await asyncThunk.callAction({ username: 'User', password: '123456789' })

    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(userData)
    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3)
    expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthDate(userData))
  })

  test('rejected request', async () => {
    const userData = { id: 1, username: 'User' }
    mockedAxios.post.mockReturnValue(Promise.resolve({}))
    // const action = loginByUsername({ username: 'Astro', password: '123456789' })
    // const result = await action(dispatch, getState, undefined)
    const asyncThunk = new TestAsyncThunk(loginByUsername)
    const result = await asyncThunk.callAction({ username: 'User', password: '123456789' })

    expect(result.meta.requestStatus).toBe('rejected')
    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2)
    expect(asyncThunk.dispatch).not.toHaveBeenCalledWith(userActions.setAuthDate(userData))
  })
})
