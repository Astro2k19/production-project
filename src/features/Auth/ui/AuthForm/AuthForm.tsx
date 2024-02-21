import { type FC, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from '@/shared/lib'
import {
    DynamicModuleLoader,
    type ReducersList,
} from '@/shared/lib/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { TextVariants } from '@/shared/ui/deprecated/Text'
import { Button } from '@/shared/ui/redesigned/Button'
import { Input } from '@/shared/ui/redesigned/Input'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'

import { getAuthErrorMessage } from '../../lib/getAuthErrorMessage/getAuthErrorMessage'
import {
    useGetAuthError,
    useGetAuthLoading,
    useGetAuthPassword,
    useGetAuthUsername,
} from '../../model/selectors/authSelectors'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import {
    authReducer,
    useAuthActions,
} from '../../model/slice/loginByUsernameSlice'

export interface AuthFormProps {
    className?: string
    onSuccess: () => void
}

const initialReducers: ReducersList = {
    loginForm: authReducer,
}

const AuthForm: FC<AuthFormProps> = ({ className, onSuccess }) => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const username = useGetAuthUsername()
    const password = useGetAuthPassword()
    const isLoading = useGetAuthLoading()
    const error = useGetAuthError()
    const { setPassword, setUsername } = useAuthActions()

    const onSubmit = async (e: FormEvent): Promise<void> => {
        e.preventDefault()
        const action = await dispatch(loginByUsername({ username, password }))
        if (action.meta.requestStatus === 'fulfilled') {
            onSuccess()
        }
    }

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <form
                className={classNames([className])}
                onSubmit={onSubmit}
            >
                <VStack gap={'16'}>
                    <Text title="Authorization form" />
                    {error && (
                        <Text
                            text={getAuthErrorMessage(error)}
                            variant={TextVariants.ERROR}
                        />
                    )}
                    <Input
                        type="text"
                        onChange={setUsername}
                        value={username}
                        placeholder={'Username'}
                        autoFocus
                    />
                    <Input
                        type="password"
                        onChange={setPassword}
                        value={password}
                        placeholder={'Password'}
                    />
                    <Button
                        type="submit"
                        variant={'outline'}
                        fullWidth
                        align={'center'}
                        onClick={onSubmit}
                        disabled={isLoading}
                    >
                        {t('Log In')}
                    </Button>
                </VStack>
            </form>
        </DynamicModuleLoader>
    )
}

export default AuthForm
