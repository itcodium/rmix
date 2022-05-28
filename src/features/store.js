import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counter';
import productsReducer from './products/products';
import createSagaMiddleware from 'redux-saga';
import saga from '../sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(saga);
export { store }
