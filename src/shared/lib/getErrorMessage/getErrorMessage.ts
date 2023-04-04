import { type ApiError } from 'shared/api/api'
import i18n from 'shared/config/i18n/i18n'

export const getErrorMessage = (
  error: ApiError,
  errorCodeMappings: Record<string, string>,
  namespace: string = 'translation.fetch_error'
) => {
  const defaultErrorCode = 'UNKNOW_ERROR'
  const errorMessage = errorCodeMappings[error.code] || defaultErrorCode
  return i18n.t(errorMessage, { ns: namespace })
}
