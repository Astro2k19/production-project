import { type Profile } from '../types/profile'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'

export const profile: Profile = {
  id: 1,
  first: 'Artem',
  lastname: 'Katr',
  age: '21',
  currency: Currency.EUR,
  country: Country.USA,
  city: 'Kyiv',
  username: 'Astro2k23',
  avatar: ''
}
