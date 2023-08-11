import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AvatarDropdownSchema } from '../types/AvatarDropdownSchema'

const initialState: AvatarDropdownSchema = {

}

export const AvatarDropdownSlice = createSlice({
  name: 'AvatarDropdown',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction) => { 

    }
  },
  // extraReducers: (builder) => {
  //   builder
  //   .addCase( , (state, action) => {
  //  
  //   })
  //   .addCase( , (state, action) => {
  //     
  //     })
  //   .addCase(, (state, action) => {
  //  
  //     })
  // }
})

export const { actions: AvatarDropdownActions } = AvatarDropdownSlice

export const { reducer: AvatarDropdownReducer } = AvatarDropdownSlice