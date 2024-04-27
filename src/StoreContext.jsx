import { useState } from 'react'
import PropTypes from 'prop-types';
import { storeContext } from './CartProvider'

const StoreProvider = storeContext.Provider

const CartProvider = (props) => {
const [showCart, setShowCart] = useState(false)
const [amountItems, setAmountItems] = useState(0)
const [addedItems, setAddedItems] = useState([])
const [totalPrice, setTotalPrice] = useState(0)

    const openCart = () => {
        setShowCart(!showCart)
    }
  const addToCart = (item) => {
    const tempAddedItems = [...addedItems]

    const itemExist = tempAddedItems.findIndex((el) => {
        return el.id === item.id
    })

    if (itemExist !== -1) {
        tempAddedItems.splice(itemExist, 1)
    }

    const newAddedItems = [...tempAddedItems, item]
    setAddedItems(newAddedItems)
    setAmountItems(totalQuant(newAddedItems))
    setTotalPrice(totalAmount(newAddedItems))
  }

  const removeItem = (id) => {
    const tempAddedItems = [...addedItems]

    const itemExist = tempAddedItems.findIndex((el) => {
        return el.id === id
    })

    if (itemExist !== -1) {
        tempAddedItems.splice(itemExist, 1)
    }

    setAddedItems(tempAddedItems)
    setTotalPrice(totalAmount(tempAddedItems))
    setAmountItems(totalQuant(tempAddedItems))
  }

  const emptyCart = () => {
    setAddedItems([])
    setAmountItems(0)
    setTotalPrice(0)
  }

  const totalAmount = (arr) => {
    return arr.reduce((acc, obj) => {
        return acc + (obj.price * obj.quantity);
    }, 0)
}
const totalQuant =(arr) => {
    return arr.reduce((acc, obj) => {
        return acc + obj.quantity
    }, 0)
}

  const newValue = {
    showCart: showCart,
    amountItems: amountItems,
    addedItems: addedItems,
    totalPrice: totalPrice,
    addToCart: addToCart,
    removeItem: removeItem,
    emptyCart: emptyCart,
    openCart: openCart
  }

  return (
    <StoreProvider value={newValue}>
      {props.children}
    </StoreProvider>
  )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default CartProvider

