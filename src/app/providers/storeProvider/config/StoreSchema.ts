import { type CounterSchema } from 'entities/Counter'
import { type UserSchema } from 'entities/User'
import { type LoginFormSchema } from 'features/auth/by-username'

export interface StoreSchema {
  counter: CounterSchema
  user: UserSchema
  loginForm?: LoginFormSchema
}
