import { useNavigate } from 'react-router-dom'
import useCart from '../hooks/useCart'

const ItemsInCartComponent = () => {
    const contextValue = useCart()
    const navigate = useNavigate()

    const goToCheckout = () => {
        navigate('/cart')
        contextValue.openCart()
    }

    return (
        <div className="cartModal w-80 absolute right-5 bg-slate-200 top[-30px] shadow-md block min-h-32">
            { 
                contextValue.addedItems.length === 0 ?  
                (
                    <p className="mt-14">The cart is empty</p>
                 ) :
                 (
                <>
                {contextValue.addedItems.map((product) => (
                        <div key={product.id} className="flex text-left gap-5 p-5">
                            <div className="cartImageContainer">
                            <div className="cartModal__image w-20 h-20 overflow-hidden bg-white">
                                <img className="w-auto h-full mx-auto" src={product.image} alt={product.title} />
                            </div>
                            </div>
                            <div className="product__data">
                                <h3 className="w-[200px] whitespace-nowrap overflow-hidden overflow-ellipsis font-bold">{product.title}</h3>
                                <p className="product__price">${product.price}</p>
                                <p className="product__quantity">Quantity: {product.quantity}</p>
                                <button
                                    className="text-blue-500 hover:underline focus:outline-none bg-transparent w-fit p-0 font-normal hover:border-none"
                                    onClick={() => contextValue.removeItem(product.id)}>
                                        Remove item
                                </button>
                            </div>
                        </div>
                        ))}
                <p className="my-10 font-bold text-xl">Total: ${contextValue.totalPrice.toLocaleString()}</p>
                <button className="btn btn-primary bg-slate-600 text-white w-fit" onClick={goToCheckout}>Checkout</button>
                <button className="btn btn-primary bg-slate-600 text-white w-fit ml-5 mb-5" onClick={() => contextValue.emptyCart()}>Empty cart</button>
                </>
            ) }
                
        </div>
    )
}

export default ItemsInCartComponent