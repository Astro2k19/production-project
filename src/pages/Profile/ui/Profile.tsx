import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { EditableProfileCard } from '@/features/EditableProfileCard'
import { ProfileRating } from '@/features/ProfileRating'
import { Text } from '@/shared/ui/Text'
import { Page } from '@/widgets/Page'

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
