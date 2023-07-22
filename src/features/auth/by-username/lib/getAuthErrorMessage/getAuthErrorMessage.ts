import { type ApiError } from 'shared/api/api'
import { getErrorMessage } from 'shared/lib/getErrorMessage/getErrorMessage'
import { AuthFormError } from '../../model/const/authConst'

const profileErrorCodeMappings = {
  403: `${AuthFormError.BAD_REQUEST_ERROR}`,
  500: `${AuthFormError.SERVER_ERROR}`
}

export const getAuthErrorMessage = (error: ApiError) => {
  if (!error) return
  return getErrorMessage(error, profileErrorCodeMappings, 'translation', ['fetch_error'])
}
