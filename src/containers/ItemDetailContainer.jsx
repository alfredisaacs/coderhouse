import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import StarsComponent from '../components/StarsComponent'
import AddToCartComponent from '../components/AddToCartComponent'
import useCart from '../hooks/useCart'
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const params = useParams();
    const contextValue = useCart()

    useEffect(() => {
        const fetchProduct = async () => {    
          const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
          const data = await response.json();
          setProduct(data);
        };
        fetchProduct();
      }, [params.id]);

      const addItemToCart = (quantity) => {
        const prodToSend = { ...product, quantity: quantity }
        contextValue.addToCart(prodToSend)
    }

    return (
        <div className="itemContainer product grid grid-cols-2 gap-4">
            <div className="product__image"><img className="h-100 w-auto max-h-96" src={product.image} alt={product.title} /></div>
            <div className="product__info text-left">
                <h1>{product.title}</h1>
                <p className="product__price">${product.price}</p>
                {product.rating && <div className="flex mx-auto"><StarsComponent rating={product.rating.rate} /> ({product.rating.count})</div>}
                <p className="product__description">{product.description}</p>

                <AddToCartComponent addItemToCart={addItemToCart} />
            </div>
        </div>
    )
}

export default ItemDetailContainer;