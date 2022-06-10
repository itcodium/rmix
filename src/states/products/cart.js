import { createSlice } from '@reduxjs/toolkit'

const cart = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    add(state, action) {
      return Object.assign({}, state, {
        data: addTocart(state, action)
      });
    },
    remove(state, action) {
      return Object.assign({}, state, {
        data: state.data.filter(m => m.id !== action.payload.id)
      });
    },
    clear(state) {
      return Object.assign({}, state, {
        data: []
      });
    },
    
  }
})

export const isInCart = (cart, id) => {
  return  cart.find(item => item.id === id);
}
export const { add, remove } = cart.actions
export default cart.reducer


const addTocart= (state, action) => {
  const ix = state.data.findIndex(item => {
    return action.payload.id === item.id ;
  });
  const item = {
    id: action.payload.id,
    units: action.payload.units
  };
  
  let data = [];
  if(ix ===-1)  {
    data = [...state.data, item]
  }else{
   data = [
      ...state.data.slice(0, ix),
      item,
      ...state.data.slice(ix + 1, state.data.length)
    ]
  }
  return data;
}