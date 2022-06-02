import { takeLatest } from 'redux-saga/effects'
import SagaCall from '../saga.call';
import { fetch, success, error } from '../../states/products/products'

const API_URL = `/api/products`;
const saga = 'products';

function* fetchProduct() {
    yield SagaCall({ saga, success: success.type, error }, API_URL) ;
}

export function* products() {
     yield takeLatest(fetch.type, fetchProduct);
}