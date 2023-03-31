import { memo } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { EditableProfileCard, fetchProfileData } from 'features/editableProfileCard'
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice'
import { useFetchData } from 'shared/lib/hooks/useFetchData'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch()

  useFetchData(() => {
    dispatch(fetchProfileData())
  })

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <EditableProfileCard />
      </DynamicModuleLoader>
  )
})

export default ProfilePage
