import { useDispatch } from 'react-redux'
import { type AppDispatch } from 'app/providers/storeProvider'

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
