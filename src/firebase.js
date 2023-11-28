import {initializeApp} from 'firebase/app'
import {getFirestore, collection, getDocs} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.ECOMM_APP_Apikey,
    authDomain: process.env.ECOMM_APP_authDomain,
    projectId: process.env.ECOMM_APP_projectId,
    storageBucket:process.env.ECOMM_APP_storageBucket,
    messagingSenderId: process.env.ECOMM_APP_messagingSenderId,
    appId: process.env.ECOMM_APP_appId
};

initializeApp(firebaseConfig)

const db=getFirestore();

// const colRef=collection(db, 'products');

// getDocs(colRef)
//     .then((snapshot)=>{a
//         console.log(snapshot.docs)
//     })



