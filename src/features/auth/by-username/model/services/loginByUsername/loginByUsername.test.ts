import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { type Dispatch } from '@reduxjs/toolkit'
import { type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

describe('loginByUsername', () => {
  let dispatch: Dispatch
  let getState: () => StoreSchema

  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
  })

  test('succesfull request', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: { id: 1, username: 'User' } }))
    const action = loginByUsername({ username: 'Astro', password: '123456789' })
    const result = await action(dispatch, getState, undefined)

    console.log(result)
  })
})
