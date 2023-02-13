import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'

const Home: FC = () => {
  const { t } = useTranslation('home')

  return (
      <div>
          <h1>{t('Home page', { ns: 'home' })}</h1>
          asdasdasdasd
      </div>
  )
}
export default Home
