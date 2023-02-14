import React, { type FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ErrorBoundary } from 'react-error-boundary'
import { PageError } from 'widgets/PageError'

const Home: FC = () => {
  const { t } = useTranslation('home')

  useEffect(() => {
    throw new Error('for test')
  })

  return (
      <div>
          <h1>{t('Home page', { ns: 'home' })}</h1>
      </div>
  )
}
export default Home
