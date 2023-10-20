import { type ApiError } from '@/shared/api/api'

export interface LoginFormSchema {
	username: string
	password: string
	isLoading: boolean
	error?: ApiError
}
