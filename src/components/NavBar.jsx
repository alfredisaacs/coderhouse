import { useState } from "react";
import MusicIcon from "../assets/music-icon.svg";
import CartWidget from "./CartWidget";
import './NavBar.css';
const NavBar = () => {
    const [cartItems, setCartItems] = useState(7);
    const addItems = () => {
        setCartItems(cartItems + 1);
    }
    return (
        <nav className="flex items-center justify-between flex-wrap p-6 bg-slate-600">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <a href="#">
                    <img className="fill-white invert" src={MusicIcon} height="54" width="54" />
                </a>
                <span className="font-semibold text-xl tracking-tight oswald-700">OnlineStore</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded  hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-cyan-50 hover:text-neutral-300 mr-4">
                        Strings
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-cyan-50 hover:text-neutral-300 mr-4">
                        Winds
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-cyan-50 hover:text-neutral-300 mr-4">
                        Percusions
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-cyan-50 hover:text-neutral-300 mr-4">
                        Pianos
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-cyan-50 hover:text-neutral-300 mr-4">
                        Accessories
                    </a>
                </div>
                <button onClick={addItems} className="hidden">Agrega items</button>
                <div className="cart">
                    <CartWidget items={cartItems} />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;