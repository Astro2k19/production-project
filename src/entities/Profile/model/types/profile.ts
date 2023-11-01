import { type Country } from '@/entities/Country'
import { type Currency } from '@/entities/Currency'

export interface Profile {
    id: string | number
    first?: string
    lastname?: string
    age?: number | string
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}
