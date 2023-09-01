import { type AsyncThunkAction } from '@reduxjs/toolkit/src/createAsyncThunk'
import axios, { type AxiosStatic } from 'axios'

import { type AsyncThunkConfig, type StoreSchema } from '@/app/providers/storeProvider'

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)

type AsyncActionCreator<
    Returned,
    ThunkArg,
    Error,
    ThunkApiConfig extends AsyncThunkConfig<Error>
>
    = (arg: ThunkArg) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig>

export class TestAsyncThunk<Returned, ThunkArg, Error, ThunkApiConfig extends AsyncThunkConfig<Error>> {
  dispatch: jest.MockedFn<any>
  getState: () => StoreSchema
  actionCreator: AsyncActionCreator<Returned, ThunkArg, Error, ThunkApiConfig>
  api: jest.MockedFunctionDeep<AxiosStatic>

  constructor (
    asyncActionCreator: AsyncActionCreator<Returned, ThunkArg, Error, ThunkApiConfig>,
    state?: DeepPartial<StoreSchema>
  ) {
    this.actionCreator = asyncActionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn(() => state as StoreSchema)
    this.api = mockedAxios
  }

  async callAction (args?: ThunkArg) {
    const action = this.actionCreator(args as ThunkArg)
    // @ts-expect-error: have to add type as for dispatch function
    const result = await action(this.dispatch, this.getState, {
      api: this.api
    })

    return result
  }
}
