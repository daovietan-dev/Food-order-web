import { createContext } from 'react'

// tên của context bắt đầu bằng viết hoa
// static context
const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
})

export default CartContext
