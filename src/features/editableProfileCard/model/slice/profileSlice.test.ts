import { profileActions, profileReducer } from './profileSlice'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { fetchProfileData } from '../services/fetchProfileData/fetctProfileData'
import { type ProfileSchema } from '../types/editableProfileCard'

describe('profileSlice', () => {
  const data = {
    id: 1,
    first: 'Артем',
    lastname: 'Катрущенко',
    age: '22',
    currency: Currency.EUR,
    country: Country.USA,
    city: 'Poltava',
    username: 'ASTRO',
    avatar: ''
  }

  test('setReadonly', () => {
    const profileState: DeepPartial<ProfileSchema> = { readonly: false }

    expect(profileReducer(
      profileState as ProfileSchema,
      profileActions.setReadonly(true)
    )).toEqual({ readonly: true })
  })

  test('cancelUpdate', () => {
    const profileState: DeepPartial<ProfileSchema> = {
      readonly: false,
      data,
      formData: {
        ...data,
        first: 'John',
        age: 50
      }
    }

    expect(profileReducer(
      profileState as ProfileSchema,
      profileActions.cancelUpdate()
    )).toEqual({ data, formData: data, readonly: true })
  })

  test('setProfileData', () => {
    const profileState: DeepPartial<ProfileSchema> = { formData: data }

    expect(profileReducer(
      profileState as ProfileSchema,
      profileActions.setProfileData({
        first: 'John',
        username: 'Bernecker'
      })
    )).toEqual({
      formData: {
        ...data,
        first: 'John',
        username: 'Bernecker'
      }
    })
  })

  test('extraReducers fetchProfileData.pending', () => {
    const profileState: DeepPartial<ProfileSchema> = { isLoading: false }

    const action = {
      type: fetchProfileData.pending.type
    }

    expect(profileReducer(
      profileState as ProfileSchema,
      action
    )).toEqual({ isLoading: true })
  })

  test('extraReducers fetchProfileData.fulfilled', () => {
    const profileState: DeepPartial<ProfileSchema> = { isLoading: true }

    const action = {
      type: fetchProfileData.fulfilled.type,
      payload: data
    }

    expect(profileReducer(
      profileState as ProfileSchema,
      action
    )).toEqual({ isLoading: false, data, formData: data })
  })
})
