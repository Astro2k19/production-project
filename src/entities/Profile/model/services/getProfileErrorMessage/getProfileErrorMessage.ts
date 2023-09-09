import { ProfileError } from '../../const/editableProfileCardConst'

import { type ApiError } from '@/shared/api/api'
import { getErrorMessage } from '@/shared/lib/getErrorMessage/getErrorMessage'

const profileErrorCodeMappings = {
  404: `${ProfileError.NOT_FOUND}`,
  500: `${ProfileError.SERVER_ERROR}`
}

export const getProfileErrorMessage = (error: ApiError) => {
  if (!error) return
  return getErrorMessage(error, profileErrorCodeMappings, 'profile', ['fetch_error'])
}
