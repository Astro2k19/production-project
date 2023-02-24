import { type CounterShema } from 'enteties/Counter'
import { type UserSchema } from 'entities/User'

export interface StoreShema {
  counter: CounterShema
  user: UserSchema
}
