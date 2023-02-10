import React, { type FC, Suspense } from 'react'
import { Translation, useTranslation } from 'react-i18next'

const Home: FC = () => {
  const { t } = useTranslation('home')

  return (
      <Suspense fallback={'test...'}>
          <div><h1>{t('Home page')}</h1>
          </div><h2>
              {t('Hello artem')}
          </h2>
          <Translation ns={'home'}>
              {(t, { i18n }) => <h2>{t('Home page')}</h2> }
          </Translation>
      </Suspense>
  )
}
export default Home
