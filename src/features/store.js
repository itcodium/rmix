import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counter'


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
})



/*
import { createStore, compose, applyMiddleware } from 'redux';
import saga from '../../sagas/index';
import reducers from '../reducers';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = (state, action) => {
    if (action.type === 'LOG_OUT') {
        state = undefined
    }
    return reducers(state, action)
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = composeEnhancer(applyMiddleware(sagaMiddleware));
const store = createStore(persistedReducer, middlewareEnhancer);  
const persistor = persistStore(store);

sagaMiddleware.run(saga);
export { store, persistor }
*/