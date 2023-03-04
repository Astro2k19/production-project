import React, { memo, Suspense } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage = memo(() => {
  const { t } = useTranslation('about')
  return (
      <Suspense fallback={'Loading'}>
          <div>
              <h1>{t('About page', { ns: 'about' })}</h1>
          </div>
      </Suspense>
  )
})
export default AboutPage
