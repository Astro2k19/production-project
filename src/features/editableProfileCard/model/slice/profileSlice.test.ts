import { profileReducer, profileActions } from './profileSlice'
import { type ProfileSchema } from 'entities/Profile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { fetchProfileData } from '../services/fetchProfileData/fetctProfileData'

describe('profileSlice', () => {
  const data = {
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

    expect(profileReducer(
      profileState as ProfileSchema,
      fetchProfileData.pending
    )).toEqual({ isLoading: true })
  })

  test('extraReducers fetchProfileData.fulfilled', () => {
    const profileState: DeepPartial<ProfileSchema> = { isLoading: true }

    expect(profileReducer(
      profileState as ProfileSchema,
      fetchProfileData.fulfilled(data, '', undefined)
    )).toEqual({ isLoading: false, data, formData: data })
  })
})