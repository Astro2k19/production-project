import { ProfileError } from '../../types/profile'
import { type ApiError } from 'shared/api/api'

export const getProfileErrorMessage = (error: ApiError) => {
  switch (error.code) {
    case '404':
      return `fetch_error.${ProfileError.NOT_FOUND}`
    case '500':
      return `fetch_error.${ProfileError.SERVER_ERROR}`
    default:
      return `fetch_error.${ProfileError.SERVER_ERROR}`
  }
}
