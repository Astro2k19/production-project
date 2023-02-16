import React, { type FC, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const Home: FC = () => {
  const { t } = useTranslation('home')

  return (
      <div>
          <h1>{t('Home page', { ns: 'home' })}</h1>
      </div>
  )
}
export default Home
