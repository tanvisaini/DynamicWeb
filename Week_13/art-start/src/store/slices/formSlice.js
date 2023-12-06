import {createSlice} from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    price: 0,
  },
  reducers: {
    // we can make the assumption here that the name we want to change is coming in as our action.payload
    changeName(state, action) {
      state.name = action.payload
    },
    changePrice(state, action) {
      state.price = action.payload
    },
  },
})

export const {changeName, changePrice} = formSlice.actions
export const formReducer = formSlice.reducer
