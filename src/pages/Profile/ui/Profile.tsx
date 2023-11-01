import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import { Page } from '@/widgets/Page'

import { EditableProfileCard } from '@/features/EditableProfileCard'
import { ProfileRating } from '@/features/ProfileRating'

import { Text } from '@/shared/ui/Text'

const ProfilePage = memo(() => {
    const { t } = useTranslation()
    const { id } = useParams<string>()

    if (!id) {
        return <Text title={t('Something went wrong!')} />
    }

    return (
        <Page dataTestId={'ProfilePage'}>
            <EditableProfileCard id={id} />
            <ProfileRating profileId={id} />
        </Page>
    )
})

export default ProfilePage
