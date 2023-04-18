import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'shared/ui/page/Page'

const AboutPage = memo(() => {
  const { t } = useTranslation('about')
  return (
      <Page>
          <h1>{t('About page', { ns: 'about' })}</h1>
      </Page>
  )
})
export default AboutPage
