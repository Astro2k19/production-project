import React, { type FC, Suspense } from 'react'
import { useTranslation } from 'react-i18next'

const AboutPage: FC = () => {
  const { t } = useTranslation('about')
  return (
      <Suspense fallback={'Loading'}>
          <div>
              <h1>{t('About page', { ns: 'about' })}</h1>
          </div>
      </Suspense>
  )
}
export default AboutPage
