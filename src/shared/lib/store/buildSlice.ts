import { bindActionCreators, createSlice } from '@reduxjs/toolkit'
import {
    CreateSliceOptions,
    SliceCaseReducers,
} from '@reduxjs/toolkit/src/createSlice'
import { useMemo } from 'react'

import { useAppDispatch } from '../hooks/useAppDispatch/useAppDispatch'

export const buildSlice = <
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string,
>(
    options: CreateSliceOptions<State, CaseReducers, Name>,
) => {
    const slice = createSlice(options)
    const useActions = (): typeof slice.actions => {
        const dispatch = useAppDispatch()
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment

        // @ts-ignore
        return useMemo(
            // @ts-ignore
            () => bindActionCreators(slice.actions, dispatch),
            [dispatch],
        )
    }

    return {
        ...slice,
        useActions,
    }
}
