import { classNames } from 'shared/lib'
import { memo, useEffect } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div>
              <ProfileCard />
          </div>
      </DynamicModuleLoader>
  )
})

export default ProfilePage
