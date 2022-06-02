import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counter';
import productsReducer from './products/products';
import productsDetailReducer from './products/detail';
import createSagaMiddleware from 'redux-saga';
import saga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
    productsDetail: productsDetailReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(saga);
export { store }
