import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import StarsComponent from '../components/StarsComponent'
import AddToCartComponent from '../components/ItemCount'
import useCart from '../hooks/useCart'
import { getDetail } from '../utils'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [productPrice, setProductPrice] = useState(0)
    const contextValue = useCart()

    useEffect(() => {
        getDetail(id)
         .then((result) => {
            setProduct(result)
            setProductPrice(result.price.toLocaleString())
        })
      }, [id])

      const addItemToCart = (quantity) => {
        const prodToSend = { ...product, quantity: quantity }
        contextValue.addToCart(prodToSend)
    }

    return (
        <div className="itemContainer product grid grid-cols-2 gap-4">
            <div className="product__image"><img className="h-100 w-auto max-h-96" src={product.image} alt={product.title} /></div>
            <div className="product__info text-left">
                <h1>{product.title}</h1>
                <p className="product__price font-bold text-2xl my-10">${productPrice}</p>
                {product.rating && <div className="flex mx-auto"><StarsComponent rating={product.rating} /> ({product.count})</div>}
                <p className="product__description">{product.description}</p>

                <AddToCartComponent addItemToCart={addItemToCart} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;