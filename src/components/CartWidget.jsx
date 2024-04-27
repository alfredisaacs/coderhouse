import PropTypes from 'prop-types'
import CartIcon from "../assets/cart.svg"
import useCart from "../hooks/useCart"

const CartWidget = (props) => {
    const contextValue = useCart()
    return (
        <div>
            <span className="material-symbols-outlined">
                <a href="#" className="shopping-cart relative">
                    <button className="m-0 bg-transparent" onClick={contextValue.openCart}>
                        <img className="fill-white invert" src={CartIcon} height="36" width="36" />
                    </button>
                    <p className="text-white bold absolute top-[-30px] text-sm right-[15px] bg-sky-700 p-[3px] rounded-full">{props.items}</p>
                </a>
            </span>
        </div>
    )
};

CartWidget.propTypes = {
    items: PropTypes.number.isRequired,
}

export default CartWidget;