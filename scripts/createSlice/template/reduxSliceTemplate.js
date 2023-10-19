const firstLetterUppercase = require("../firstLetterUppercase");

module.exports = (sliceName) => {
  const typedSliceName = firstLetterUppercase(sliceName);

  return `import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ${typedSliceName}Schema } from '../types/${typedSliceName}Schema'

const initialState: ${typedSliceName}Schema = {

}

export const ${sliceName}Slice = createSlice({
  name: '${sliceName}',
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

export const { actions: ${sliceName}Actions } = ${sliceName}Slice

export const { reducer: ${sliceName}Reducer } = ${sliceName}Slice`;
};
