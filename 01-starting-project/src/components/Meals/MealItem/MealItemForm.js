import React, { useRef, useState } from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = props => {
  const [amountIsValid, setAmountIsValid] = useState(true)

  const amountInputRef = useRef()

  const submitHandler = event => {
    event.preventDefault()
    const enteredAmount = amountInputRef.current.value

    // valid enteredAmount if it omit
    if (enteredAmount.trim().length === 0) {
      setAmountIsValid(false)
      return
    } else setAmountIsValid(true)

    props.onAddToCart(+enteredAmount)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount_${props.id}`,
          type: `number`,
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && (
        <div style={{ fontSize: '0.75rem' }}>
          Please input a valid amount (1-5)
        </div>
      )}
    </form>
  )
}

export default MealItemForm
