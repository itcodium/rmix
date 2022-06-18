import { call, put } from 'redux-saga/effects'
import { db } from '../../services/firebase'
import { collection, getDoc, getDocs, doc, query, where, deleteDoc } from 'firebase/firestore/lite';

async function apiCall(collectionName, params = {}, body) {
    if (params && params.id) {
        return getDocumentById(collectionName, params.id)
    } else {
        return getCollection(collectionName, params.categoryId)
    }
}

const getCollection = async (collectionName, categoryId) => {
    const collectionRef = query(collection(db, collectionName), where("category", "==", parseInt(categoryId) || 3 ));
    const data = [];
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id })
    });
    return data;
}
const getDocumentById = async (collectionName, id = "") => {
    const byId = await doc(db, collectionName, id);
    const docSnap = await getDoc(byId);
    if (docSnap.exists()) {
        return { ...docSnap.data(), id: docSnap.id };
    }
    return null;
}

function* ProductsCall(saga, collectionName, params, AFTER_TYPE, onSuccess) {
    try {
        yield put({ type: saga.saga + '/loading' });
        const response = yield call(apiCall, collectionName, params ? params : null);
        yield put({ type: onSuccess ? onSuccess : saga.success, payload: response });
    } catch (e) {
        console.log("error", e)
        yield put({ type: saga.saga + '/error', payload: { status: "error", message: e.message } });
    }
}

export default ProductsCall;