import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'

import { type Profile } from '../model/types/profile'

export const profile: Profile = {
    id: '1',
    first: 'Artem',
    lastname: 'Katr',
    age: '21',
    currency: Currency.EUR,
    country: Country.USA,
    city: 'Kyiv',
    username: 'Astro2k23',
    avatar: 'assets/avatar.jpg',
}
