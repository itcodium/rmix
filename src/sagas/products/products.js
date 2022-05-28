import { takeLatest } from 'redux-saga/effects'
import SagaCall from '../saga.call';
import { PRODUCTS } from '../../features/actionTypes'

const API_URL = `/api/products`;

function* fetchProduct() {
    yield SagaCall(PRODUCTS, API_URL);
}

export function* products() {
    yield takeLatest(PRODUCTS.FETCH, fetchProduct);
}