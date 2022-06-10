import { combineReducers } from 'redux'
import counterReducer from './counter/counter';
import productsReducer from './products/products';
import productsDetailReducer from './products/detail';
import cartReducer from './products/cart';

const appReducer = combineReducers({
    counter: counterReducer,
    products: productsReducer,
    productsDetail: productsDetailReducer,
    cart: cartReducer
});

const reducerRoot = (state, action) => {
    let new_state = (action.type === 'LOGIN_SUCCESS') ? undefined : state;
    return appReducer(new_state, action)
}

export default reducerRoot;