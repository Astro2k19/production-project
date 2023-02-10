import React, { type FC, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { PageLoader } from 'widgets/pageLoader'

const About: FC = () => {
  const { t } = useTranslation()
  return (
      <div>
          <h1>{t('About page', { ns: 'about' })}</h1>
      </div>
  )
}
export default About
