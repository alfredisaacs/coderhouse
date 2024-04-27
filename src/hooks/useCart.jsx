import { useContext } from "react"
import { storeContext } from "../CartProvider"

const useCart = () => {
    const newValue = useContext(storeContext)
    return newValue
}

export default useCart