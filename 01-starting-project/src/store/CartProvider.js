import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0,
}

const cartReducer = (cartState, action) => {
  switch (action.type) {
    case `ADD_ITEM`: {
      return {
        ...cartState,
        items: cartState.items.concat(action.item),
        totalAmount:
          cartState.totalAmount + action.item.amount * action.item.price,
      }
    }
    case `REMOVE_ITEM`: {
      return {
        ...cartState,
        items: cartState.items.filter(item => item.id !== action.id),
      }
    }
    default:
      throw new Error(`No action found`)
  }
}

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemHandler = item => {
    dispatchCartAction({
      type: `ADD_ITEM`,
      item: item,
    })
  }

  const removeItemHandler = id => {
    dispatchCartAction({
      type: `REMOVE_ITEM`,
      id: id,
    })
  }

  // dynamic context
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
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
