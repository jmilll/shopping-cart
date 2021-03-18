import { useState, useEffect } from 'react';
import './App.css';
import Checkout from './components/Checkout'
import Cart from './components/Cart';
import Nav from './components/Nav';
import Shop from './components/Shop';
import ShopItem from './components/ShopItem'
import Home from './components/Home';
import items from './components/shoppingItems'
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'



const App = () => {


  const [cart, setCart] = useState([])
  //const [showCart, setShowCart] = useState(false)

  function changeQuantity (itemId, num) {
    setCart(
      cart.map((cartItem) => cartItem.id === itemId ? {...cartItem, quantity: cartItem.quantity + num } : cartItem)
    )
  }

  function addToCart(shoppingItem) {
    //check if item already in cart
    if (
      cart
      .map(cartItem => cartItem.id)
      .includes(shoppingItem.id)
    ) {
      changeQuantity(shoppingItem.id, 1)
    } else {
        setCart(prevCart => [...prevCart, shoppingItem])
      }
    //console.log(cart)
  }

  function removeFromCart(itemId) {
    setCart(
      cart.filter(cartItem => cartItem.id !== itemId)
    )
  }

  //const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
  const cartQuantity = cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)

  useEffect(() => {
    console.log('start useEffect...')

    console.log('end useEffect...')
  }, []);

  return (
    <Router>
      <div className="App">

        <Nav
          cart={cart}
          cartQuantity={cartQuantity}
        />

        <Switch>
          {/* change path from "/" for gh-pages deployment */}
          <Route exact path="/shopping-cart" component={Home} />

          <Route exact path="/shop">
            <Shop items={items} addToCart={addToCart} />
          </Route>

          <Route 
            exact path="/shop/:id"
            render={(routeProps) => 
              <ShopItem 
                items={items} 
                shopItemId={routeProps.match.params.id}
                addToCart={addToCart}
              />
            }
          />

          <Route path="/cart" >
            <Cart cart={cart} changeQuantity={changeQuantity} removeFromCart={removeFromCart} />
          </Route>

          <Route path="/checkout" component={Checkout} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
