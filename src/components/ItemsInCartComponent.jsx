import { useNavigate } from 'react-router-dom'
import useCart from '../hooks/useCart'
import './ItemsInCartComponent.css'

const ItemsInCartComponent = () => {
    const contextValue = useCart()
    const navigate = useNavigate()

    const goToCheckout = () => {
        navigate('/purchase')
        contextValue.openCart()
    }

    return (
        <div className="cart">
            { 
                contextValue.addedItems.length === 0 ?  
                (
                    <p className="mt-14">The cart is empty</p>
                 ) :
                 (
                <>
                {contextValue.addedItems.map((product) => (
                        <div key={product.id} className="cart__container">
                            <div className="cartImageContainer">
                            <div className="cart__image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            </div>
                            <div className="product__data">
                                <h3 className="cart__title">{product.title}</h3>
                                <p className="product__price">${product.price}</p>
                                <p className="product__quantity">Quantity: {product.quantity}</p>
                                <button
                                    className="remove__item"
                                    onClick={() => contextValue.removeItem(product.id)}>
                                        Remove item
                                </button>
                            </div>
                        </div>
                        ))}
                <p className="cart__total">Total: ${contextValue.totalPrice.toLocaleString()}</p>
                <button className="btn btn-primary bg-slate-600 text-white w-fit" onClick={goToCheckout}>Checkout</button>
                <button className="btn btn-primary bg-slate-600 text-white w-fit ml-5 mb-5" onClick={() => contextValue.emptyCart()}>Empty cart</button>
                </>
            ) }
                
        </div>
    )
}

export default ItemsInCartComponent