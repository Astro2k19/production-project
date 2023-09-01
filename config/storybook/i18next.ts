import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

const ns = [
  'translation',
  'home',
  'about',
  'article',
  'profile'
]
const supportedLngs = ['en', 'ua']

type ResourcesType = Record<string, Record<string, string>>

const resources = ns.reduce((acc: ResourcesType, n) => {
  supportedLngs.forEach((lng) => {
    if (acc[lng] === undefined) {
      acc[lng] = {}
    }
    acc[lng] = {
      ...acc[lng],
      [n]: require(`../../public/locales/${lng}/${n}.json`)
    }
  })
  return acc
}, {})

i18n.use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'translation',
    ns,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs,
    resources
  })

export default i18n
