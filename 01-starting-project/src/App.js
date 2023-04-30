import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import { useState } from 'react'

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <>
      <Header onShowCart={showCartHandler} />
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <main>
        <Meals />
      </main>
    </>
  )
}

export default App
