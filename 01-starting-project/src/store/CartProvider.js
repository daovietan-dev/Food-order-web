import React, { useReducer } from 'react'
import CartContext from './cart-context'

const CartProvider = props => {
  const addItemHandler = item => {}

  const removeItemHandler = id => {}

  // dynamic context
  const cartContext = {
    items: [
      { id: `m1`, name: `Sushi`, price: 23, amount: 1 },
      { id: `m2`, name: `Green Bowl`, price: 13, amount: 1 },
    ],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
