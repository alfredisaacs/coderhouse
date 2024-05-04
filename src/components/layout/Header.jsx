import PropTypes from 'prop-types'
import useCart from '../../hooks/useCart'
import NavBar from "./NavBar"
import ItemsInCartComponent from '../ItemsInCartComponent'

const Header = (props) => {
    const contextValue = useCart()
    return (
        <header className="header">
            <NavBar categories={props.categories} />
            { contextValue.showCart ? <ItemsInCartComponent /> : null }
        </header>
    )
}

Header.propTypes = {
    categories: PropTypes.array.isRequired
};

export default Header;