import { all } from 'redux-saga/effects'
import { products } from './products/products'
export default function* rootSaga() {
    yield all([
        products(),
    ])
}