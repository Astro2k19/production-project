import { type User } from '@/entities/User'

export interface Comment {
	id: string | number
	text: string
	user: User
}
