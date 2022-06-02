import { createSlice } from '@reduxjs/toolkit'

const counter = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment(state, action) {
      state.value += 1
    },
    decrement(state, action) {
      if(state.value>0){
        state.value -= 1
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    initCounter: (state, action) => {
      state.value = action.payload
    },
  }
})

export const { increment, decrement, 
  initCounter, 
  incrementByAmount} = counter.actions

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}

export const selectCount = (state) => state.counter.value

export default counter.reducer