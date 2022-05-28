import { call, put } from 'redux-saga/effects'
import apiCall from './api.call';

function* SagaCall(TYPE, URL, method = 'GET', params, AFTER_TYPE, onSuccess) {
    try {
        yield put({ type: TYPE.LOADING });
        const response = yield call(apiCall, URL, { method: method ? method : 'GET' }, params ? params : null);
        yield put({ type: onSuccess ? onSuccess : TYPE.SUCCESS, payload: response });
        if (response.status === "ok") {
            if (AFTER_TYPE) {
                yield put({ type: AFTER_TYPE, payload: params });
            }
        }
    } catch (e) {
        yield put({ type: TYPE.ERROR, payload: { status: "error", message: e.message } });
    }
}

export default SagaCall;