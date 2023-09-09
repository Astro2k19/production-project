import { act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { profileReducer } from '../model/slice/profileSlice'

import { EditableProfileCard } from './EditableProfileCard'

import { profile } from '@/entities/Profile'
import { $api } from '@/shared/api/api'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

jest.spyOn($api, 'put')
describe('features/EditableProfileCard', function () {
  beforeEach(async () => {
    jest.spyOn($api, 'get').mockReturnValue(Promise.resolve({
      data: profile
    }))

    await act(async () => componentRender(
        <EditableProfileCard id={'1'} />, {
          initialState: {
            profile: {
              data: profile,
              readonly: true
            },
            user: {
              authData: {
                id: '1',
                username: 'admin'
              }
            }
          },
          asyncReducers: {
            profile: profileReducer
          }
        }
    ))
  })

  test('Leave the old data after canceling the save', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))
    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'Walter')
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'White')

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Walter')
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('White')

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))

    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('Artem')
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('Katr')
  })

  test('With validation errors', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
  })

  test('Successful data submitting', async () => {
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))

    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'First')
    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'Second')

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))

    expect($api.put).toHaveBeenCalled()
  })
})
