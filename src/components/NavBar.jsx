import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import useCart from '../hooks/useCart'
import StoreIcon from "../assets/store-icon.svg"
import CartWidget from "./CartWidget"
import './NavBar.css'
const NavBar = (props) => {
    const contextValue = useCart()

    return (
        <nav className="flex items-center justify-between flex-wrap p-6 bg-slate-600">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link to="/">
                    <img className="fill-white invert" src={StoreIcon} height="50" width="50" />
                </Link>
                <span className="font-semibold text-xl tracking-tight oswald-700 ml-4">OnlineStore</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded  hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow mainNav">
                    <NavLink to="/" className="block mt-4 lg:inline-block lg:mt-0 text-cyan-50 hover:text-neutral-300 mr-4">Home</NavLink>
                    {props.categories.map((category, index) => (
                        <NavLink key={index} to={`/category/${category}`} className="block mt-4 lg:inline-block lg:mt-0 text-cyan-50 hover:text-neutral-300 mr-4 capitalize  ">{category}</NavLink>
                    ))}
                </div>
                <div className="cart">
                    <CartWidget items={contextValue.amountItems} />
                </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    categories: PropTypes.array.isRequired
}

export default NavBar;