import PropTypes from 'prop-types'
import useCart from '../../hooks/useCart'
import NavBar from "./NavBar"
import { useNavigate } from 'react-router-dom'
import ItemsInCartComponent from '../ItemsInCartComponent'

const Header = (props) => {
    const contextValue = useCart()
    const navigate = useNavigate()

    const goToCart = () => {
        navigate('/cart')
        contextValue.openCart()
    }
    return (
        <header className="header">
            <NavBar categories={props.categories} />
            { contextValue.showCart ? 
                <div className="cartModal">
                    <ItemsInCartComponent />
                    <button className="btn go-to-cart absolute z-30 right-[100px] top-[30px] bg-slate-50 px-5 py-3 rounded-md hover:text-white" onClick={goToCart}>Go to cart</button>
                </div> : null }
        </header>
    )
}

Header.propTypes = {
    categories: PropTypes.array.isRequired
};

export default Header;