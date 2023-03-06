import cls from './Profile.module.scss'
import { classNames } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { memo, useEffect } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = memo(() => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [])

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames([cls.profilePage])}>
              <ProfileCard />
          </div>
      </DynamicModuleLoader>
  )
})

export default ProfilePage
