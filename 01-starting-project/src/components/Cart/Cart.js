import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'

const Cart = props => {
  const { items, totalAmount } = useContext(CartContext)

  const cartItems = items.map(item => <li key={item.id}>{item.name}</li>)

  return (
    <Modal onHideCart={props.onHideCart}>
      <ul className={classes[`cart-items`]}>{cartItems}</ul>

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{`${totalAmount} $`}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes[`button--alt`]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
