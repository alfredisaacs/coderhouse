import PropTypes from 'prop-types';
import { useState } from 'react';

const AddToCartComponent = ({ onAddToCart }) => {
    const [counter, setCounter] = useState(0);
    const change = (val) => {
        if (counter + val < 0) return;
        setCounter(counter + val);
    }
    return (
        <div className="flex mx-auto mt-10">
            <button className="less" onClick={() => change(-1)}>-</button>
            <p className="counter w-10 text-center mt-3">{counter}</p>
            <button className="more" onClick={() => change(+1)}>+</button>
            <button className="btn btn-primary ml-5 bg-slate-600 text-white" onClick={() => onAddToCart(1)}>Add to cart</button>
        </div>
    )
}
AddToCartComponent.propTypes = {
    onAddToCart: PropTypes.func.isRequired,
};

export default AddToCartComponent;