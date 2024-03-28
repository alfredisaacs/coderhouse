import CartIcon from "../assets/cart.svg";

const CartWidget = (props) => {
    return (
        <div>
            <span className="material-symbols-outlined">
                <a href="#" className="shopping-cart relative">
                    <img className="fill-white invert" src={CartIcon} height="36" width="36" />
                    <p className="text-white bold absolute top-[-15px] text-sm right-[-5px] bg-sky-700 p-[3px] rounded-full">{props.items}</p>
                </a>
            </span>
        </div>
    )
};

export default CartWidget;