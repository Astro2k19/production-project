import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

const HomePage = memo(() => {
  const { t } = useTranslation('home')

  return (
      <div>
          <h1>{t('Home page', { ns: 'home' })}</h1>
      </div>
  )
})
export default HomePage
