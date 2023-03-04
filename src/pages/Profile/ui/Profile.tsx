import cls from './Profile.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from 'entities/Profile'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = memo(() => {
  const { t } = useTranslation()

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames([cls.profilePage])}>
              {t('Profile page', { ns: 'profile' })}
          </div>
      </DynamicModuleLoader>
  )
})

export default ProfilePage
