import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from '../../firebase-config';

// export const saveTransactionName = (name) => {
//     addDoc(collection(db, transactions), {name});

// }


export const saveTransactionName = async(obj) => {
   
    const colRef = collection(db, 'transactions');
    const data = await addDoc(colRef, {obj}); 
    return data.id;
    
}

