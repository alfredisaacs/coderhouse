import ItemsInCartComponent from '../components/ItemsInCartComponent'

const CartContainer = () => {
    return (
        <div className="cartSection">
            <h1 className="title mb-10">Cart</h1>
            <ItemsInCartComponent />
        </div>
    )
}

export default CartContainer