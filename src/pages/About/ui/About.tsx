import React, { type FC, Suspense } from 'react'
import { useTranslation } from 'react-i18next'

const About: FC = () => {
  const { t } = useTranslation('about')
  return (
      <Suspense fallback={'test...'}>
          <div>
              <h1>{t('About page')}</h1>
          </div>
      </Suspense>
  )
}
export default About
