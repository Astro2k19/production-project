export {
  userSlice,
  userActions,
  userReducer
} from './model/slice/userSlice'

export type {
  User,
  UserSchema
} from './model/types/userTypes'

export { getUserAuthDate } from './model/selectors/getUserAuthDate/getUserAuthDate'
export { authMiddleware } from './model/middlewares/authMiddleware/authMiddleware'
