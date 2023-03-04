import { useDispatch } from 'react-redux'
import { type AppDispatch } from 'app/providers/storeProvider'
import { type AnyAction, type Dispatch } from '@reduxjs/toolkit'

export const useAppDispatch = (): Dispatch<AnyAction> => useDispatch<AppDispatch>()
