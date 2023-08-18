import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'
import { StartRating } from '@/shared/ui/startRating/StartRating'

const HomePage = memo(() => {
  const { t } = useTranslation('home')

  return (
      <Page>
          <h1>{t('Home page', { ns: 'home' })}</h1>
          {t('asdfasdf', { ns: 'home' })}
          <StartRating onSelect={() => {}} />
      </Page>
  )
})
export default HomePage
