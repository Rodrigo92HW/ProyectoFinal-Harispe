import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, query, where, doc,addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_API_KEY,
    authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_APP_ID
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Obtiene los productos de la base de datos
export async function getProducts() {
    try {
        const querySnapshot = await getDocs(collection(db, "products"));
        if (querySnapshot.size !== 0) {
            const productsList = querySnapshot.docs.map((docu) => {
                return {
                    id: docu.id,
                    ...docu.data(),
                };
            });
            return productsList;
        }
    } catch (error) {
        console.error(error);
    }

};

// Obtiene un producto en particular
export async function getProduct(id) {
    const documentRef = doc(db, 'products', id);

    try {
        const snapshot = await getDoc(documentRef);
        if (snapshot.exists()) {
            return snapshot.data();
        } else {
            console.log('Este producto no existe!');
        }
    } catch (error) {
        console.error(error);
    }
}

// Obtiene los productos de una categoría en particular
export async function getProductByCategory(category) {
    try {
        const filteredQuery = query(
            collection(db, 'products'),
            where('category', '==', category)
        );

        const querySnapshot = await getDocs(filteredQuery);
        if (querySnapshot.size !== 0) {
            const productsList = querySnapshot.docs.map((docu) => {
                return {
                    id: docu.id,
                    ...docu.data(),
                };
            });
            return productsList;
        } else {
            console.log('No existen productos en esta categoria.');
        }
    } catch (error) {
        console.error(error);
    }
}

//Agregar orden a la base de datos
export async function addOrder(order) {
    const ordersCollection = collection(db, 'orders');
    const orderData = {
        items: order,
        createdAt: new Date().toISOString()
    }

    try {
        const docRef = await addDoc(ordersCollection, orderData);
        return docRef.id;
    } catch (error) {
        console.error(error);
    }
}