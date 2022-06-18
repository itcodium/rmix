

import { db } from './firebase'
import { query, collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore/lite';
import { PRODUCTS } from './data'

export const setUp = async () => {
    await deleteProducts();
    PRODUCTS.forEach(async (doc) => {
        await addDoc(collection(db, "products"), doc);
    });
}

const deleteProducts = async () => {
    const q = query(collection(db, "products"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (item) => {
        await deleteDoc(doc(db, "products", item.id));
    });
}