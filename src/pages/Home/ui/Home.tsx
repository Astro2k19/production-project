import React, { type FC, Suspense } from 'react'
import { Translation, useTranslation } from 'react-i18next'

const Home: FC = () => {
  const { t, i18n } = useTranslation()

  return (
      <div>
          <h1>{t('Home page', { ns: 'home' })}</h1>
      </div>
  )
}
export default Home
