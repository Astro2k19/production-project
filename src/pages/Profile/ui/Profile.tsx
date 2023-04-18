import { memo } from 'react'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/dynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch'
import { EditableProfileCard, fetchProfileData } from 'features/editableProfileCard'
import { profileReducer } from 'features/editableProfileCard/model/slice/profileSlice'
import { useFetchData } from 'shared/lib/hooks/useFetchData'
import { useParams } from 'react-router-dom'
import { Page } from 'shared/ui/page/Page'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage = memo(() => {
  const dispatch = useAppDispatch()
  const { id } = useParams<string>()

  useFetchData(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <Page>
              <EditableProfileCard />
          </Page>
      </DynamicModuleLoader>
  )
})

export default ProfilePage
