import { takeLatest } from 'redux-saga/effects'
import SagaCall from '../../../sagas/saga.call';
import { fetch, success, error } from '../reducers/detail'

const API_URL = `/api/products`;
const saga = 'products';

function* fetchProductById(params) {
    const URL = API_URL + "/"+ params.payload.id ;
    yield SagaCall({ saga, success: success.type, error }, URL) ;
}

export function* productsDetail() {
     yield takeLatest(fetch.type,  fetchProductById);
}