import { type AsyncThunkConfig, type StoreSchema } from 'app/providers/storeProvider/config/StoreSchema'
import { type AsyncThunkAction } from '@reduxjs/toolkit/src/createAsyncThunk'

type AsyncActionCreator<
  Returned,
  ThunkArg,
  ThunkApiConfig extends AsyncThunkConfig<string>>
  = (arg: ThunkArg) => AsyncThunkAction<Returned, ThunkArg, ThunkApiConfig>

export class TestAsyncThunk<Returned, ThunkArg, ThunkApiConfig extends { rejectValue: string }> {
  dispatch: jest.MockedFn<any>
  getState: () => StoreSchema
  actionCreator: AsyncActionCreator<Returned, ThunkArg, ThunkApiConfig>

  constructor (asyncActionCreator: AsyncActionCreator<Returned, ThunkArg, ThunkApiConfig>) {
    this.actionCreator = asyncActionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  async callAction (args: ThunkArg) {
    const action = this.actionCreator(args)
    // @ts-expect-error
    const result = await action(this.dispatch, this.getState, undefined)
    return result
  }
}
