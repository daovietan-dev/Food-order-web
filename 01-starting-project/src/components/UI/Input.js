import React, { useContext, useState } from 'react'
import classes from './Input.module.css'
import CartContext from '../../store/cart-context'

const Input = props => {
  // const { amount } = useContext(CartContext)
  const [mealAmount, setMealAmount] = useState(null)

  const setMealAmountHandler = event => {
    setMealAmount(event.target.value)
    console.log(`change`)
  }

  return (
    <div className={`${props.className} ${classes.input}`}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* sử dụng ... syntax khi cần cấu hình động, vì chúng ta không biết trong props truyền vào sẽ có những thuộc tính gì */}
      <input
        {...props.input}
        onChange={setMealAmountHandler}
        // value={mealAmount}
      />
    </div>
  )
}

export default Input
