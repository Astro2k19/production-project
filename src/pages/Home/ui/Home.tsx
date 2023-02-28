import React, { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Loader } from 'shared/ui'
import { PageLoader } from 'widgets/pageLoader'
import { ThemeSwitcher } from 'features/themeSwitcher'

const HomePage: FC = () => {
  const { t } = useTranslation('home')

  return (
      <div>
          <h1>{t('Home page', { ns: 'home' })}</h1>
      </div>
  )
}
export default HomePage
