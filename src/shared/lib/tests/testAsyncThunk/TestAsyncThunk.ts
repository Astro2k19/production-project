import { type AsyncThunkConfig, type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { type AsyncThunkAction } from '@reduxjs/toolkit/src/createAsyncThunk'
import axios, { type AxiosStatic } from 'axios'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

type AsyncActionCreator<
  Returned,
  ThunkArg,
  ThunkApiConfig extends AsyncThunkConfig<string>>
  = (arg: ThunkArg) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig>

export class TestAsyncThunk<Returned, ThunkArg, ThunkApiConfig extends AsyncThunkConfig<string>> {
  dispatch: jest.MockedFn<any>
  getState: () => StoreSchema
  actionCreator: AsyncActionCreator<Returned, ThunkArg, ThunkApiConfig>
  api: jest.MockedFunctionDeep<AxiosStatic>

  constructor (asyncActionCreator: AsyncActionCreator<Returned, ThunkArg, ThunkApiConfig>) {
    this.actionCreator = asyncActionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
    this.api = mockedAxios
  }

  async callAction (args: ThunkArg) {
    const action = this.actionCreator(args)
    // @ts-expect-error: have to add type as for dispatch function
    const result = await action(this.dispatch, this.getState, {
      api: this.api
    })

    return result
  }
}
