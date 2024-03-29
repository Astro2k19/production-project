import axios from 'axios'

import { USER_AUTH_DATA_KEY } from '@/shared/const/localStorage'

import { type ReduxStore } from '../../app/providers/storeProvider/config/store'

let store: ReduxStore

export const injectStore = (_store: any) => {
    store = _store
}

// need fix for dynamic authorization header
export const $api = axios.create({
    baseURL: __API_URL__,
    headers: {
        authorization: localStorage.getItem(USER_AUTH_DATA_KEY),
    },
})

$api.interceptors.request.use(config => {
    config.headers.authorization = store.getState().user.authData?.id
    return config
})

export interface ApiError {
    code: string
    message?: string
}
