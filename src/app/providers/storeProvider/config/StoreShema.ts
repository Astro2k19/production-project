import { type CounterShema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'
import { type AuthSchema } from 'features/auth/by-username'

export interface StoreShema {
  counter: CounterShema
  user: UserSchema
  authForm: AuthSchema
}
