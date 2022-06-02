import { takeLatest } from 'redux-saga/effects'
import SagaCall from '../saga.call';
import { PRODUCTS } from '../../states/actionTypes'
import { fetch, success, error } from '../../states/products/detail'

const API_URL = `/api/products`;
const saga = 'products';

function* fetchProductById(params) {
    const URL = API_URL + "/"+ params.payload.id ;
    yield SagaCall({ saga, success: success.type }, URL) ;
}

export function* productsDetail() {
     yield takeLatest(fetch.type,  fetchProductById);
}