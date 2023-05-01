import React, { forwardRef } from 'react'
import classes from './Input.module.css'

const Input = forwardRef((props, ref) => {
  return (
    <div className={`${props.className} ${classes.input}`}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* sử dụng ... syntax khi cần cấu hình động, vì chúng ta không biết trong props truyền vào sẽ có những thuộc tính gì */}
      <input {...props.input} ref={ref} />
    </div>
  )
})

export default Input
