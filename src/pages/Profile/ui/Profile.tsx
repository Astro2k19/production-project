import { memo } from 'react'
import { EditableProfileCard } from '@/features/editableProfileCard'
import { useParams } from 'react-router-dom'
import { Page } from '@/widgets/Page'
import { Text } from '@/shared/ui/Text'
import { useTranslation } from 'react-i18next'
import { ProfileRating } from '@/features/ProfileRating'

const ProfilePage = memo(() => {
  const { t } = useTranslation()
  const { id } = useParams<string>()

  if (!id) {
    return (
        <Text title={t('Something went wrong!')} />
    )
  }

  return (
      <Page>
          <EditableProfileCard id={id} />
          <ProfileRating profileId={id} />
      </Page>
  )
})

export default ProfilePage
