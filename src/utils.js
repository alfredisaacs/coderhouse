import { collection, getDocs, getFirestore, query, where, doc, getDoc, addDoc } from 'firebase/firestore'
import { app } from './firebase'

export const getProducts = async () => {
    const db = getFirestore(app)
    const productsCollection = collection(db, 'productos')
    const query = getDocs(productsCollection)

    return query
    .then((result) => {
        const productos = result.docs.map(doc => {
            const producto = doc.data()
            return { ...producto, id: doc.id }
        })
        return productos
    })
    .catch((error) => {
        console.log(error)
    })
}

export const getFromCategories = async (category) => {
    const db = getFirestore(app)
    const productsCollection = collection(db, 'productos')
    const filter = query(productsCollection, where('category', '==', category))
    const consulta = getDocs(filter)

    return consulta
    .then((result) => {
        const productos = result.docs.map(doc => {
            const producto = doc.data()
            return { ...producto, id: doc.id }
        })
        return productos
    })
    .catch((error) => {
        console.log(error)
    })
}

export const getDetail = async (id) => {
    const db = getFirestore(app)
    const productsCollection = collection(db, 'productos')
    const filter = doc(productsCollection, id)
    const consulta = getDoc(filter)

    return consulta
    .then((result) => {
        const producto = result.data()
        producto.id = result.id
        return producto
    })
    .catch((error) => {
        console.log(error)
    })
}

export const setPurchase = async (userData, products, total) => {
    const db = getFirestore(app)
    const saleCollection = collection(db, 'sales')

    const purchase = {
        items: products,
        user: userData,
        total: total
    }

    return addDoc(saleCollection, purchase)
    .then((result) => {
        const data = result
        return data
    })
    .catch((error) => {
        console.log(error)
    })
}