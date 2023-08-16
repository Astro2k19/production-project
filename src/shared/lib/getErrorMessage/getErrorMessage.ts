import { type ApiError } from '@/shared/api/api'
import i18n from '@/shared/config/i18n/i18n'

export const getErrorMessage = (
  error: ApiError,
  errorCodeMappings: Record<string, string>,
  namespace: string = 'translation',
  nested: string[] = []
) => {
  const defaultErrorCode = 'UNKNOWN_ERROR'
  const errorMessage = errorCodeMappings[error.code] || defaultErrorCode
  nested.push(errorMessage)

  return i18n.t(`${nested.join('.')}`, { ns: namespace }) /* i18next-extract-disable-line */
}
