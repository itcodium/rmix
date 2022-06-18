import { takeLatest } from 'redux-saga/effects'
import ProductsCall from './products.call';
import { fetch, success, error } from '../../states/products/detail'

const collection = `products`;
const saga = 'products';

function* fetchProductById(params) {
    yield ProductsCall({ saga, success: success.type, error }, collection, { id: params.payload.id}) ;
}

export function* productsDetail() {
     yield takeLatest(fetch.type,  fetchProductById);
}