import { memo, useEffect } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { profileReducer, fetchProfileData, EditableProfileCard } from 'features/editableProfileCard'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log(__PROJECT__)
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData())
    }
  }, [dispatch])

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <EditableProfileCard />
      </DynamicModuleLoader>
  )
})

export default ProfilePage
