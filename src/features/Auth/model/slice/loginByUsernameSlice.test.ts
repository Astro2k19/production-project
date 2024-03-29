import { loginByUsername } from '../services/loginByUsername/loginByUsername'
import { type LoginFormSchema } from '../types/loginSchema'
import { authActions, authReducer } from './loginByUsernameSlice'

describe('loginSlice', () => {
    test('setUsername', () => {
        const authState: DeepPartial<LoginFormSchema> = {
            username: 'Astro',
            password: '123456789',
        }

        expect(
            authReducer(
                authState as LoginFormSchema,
                authActions.setUsername('Yeah, Buddy!'),
            ),
        ).toEqual({ username: 'Yeah, Buddy!', password: '123456789' })
    })

    test('setPassword', () => {
        const authState: DeepPartial<LoginFormSchema> = {
            username: '',
            password: '',
        }

        expect(
            authReducer(
                authState as LoginFormSchema,
                authActions.setPassword('qwerty123456789'),
            ),
        ).toEqual({ username: '', password: 'qwerty123456789' })
    })

    test('isLoading', () => {
        const authState: DeepPartial<LoginFormSchema> = { isLoading: false }
        const action = { type: loginByUsername.pending.type }

        expect(authReducer(authState as LoginFormSchema, action)).toEqual({
            isLoading: true,
        })
    })
})
