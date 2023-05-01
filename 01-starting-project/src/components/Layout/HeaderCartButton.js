import React, { useContext } from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
  // use totalAmount prop from Cart context
  const { items } = useContext(CartContext)

  const numberOfCartItems = items.reduce(
    (culNumber, item) => culNumber + item.amount,
    0
  )

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
