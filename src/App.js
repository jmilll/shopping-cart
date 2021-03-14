//import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Cart from './components/Cart';
import Nav from './components/Nav';
import Shop from './components/Shop';
import ShopItem from './components/ShopItem'
import Home from './components/Home';
import items from './components/shoppingItems'
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'



const App = () => {


  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [totalCost, setTotalCost] = useState(0)

  
  function incCost() {
    setTotalCost(prevTotalCost => prevTotalCost + 1)
    //setScore((prevScore) => prevScore + 1)
    console.log(totalCost)
    //console.log(items)
  }
  


  function changeQuantity (itemId, num) {
    setCart(
      cart.map((cartItem) => cartItem.id === itemId ? {...cartItem, quantity: cartItem.quantity + num } : cartItem)
    )

  }

  // function addQuantity(newItemId) {
  //   console.log(newItemId)
    
  //   cart.map(cartItem => cartItem.id === newItemId ? cartItem.quantity++ : console.log(cartItem.id) )
    
  // }

  function addToCart(shoppingItem) {
    //check if item already in cart
    if (
      cart
      .map(cartItem => cartItem.id)
      .includes(shoppingItem.id)) 
      {
      console.log('already there')
      changeQuantity(shoppingItem.id, 1)
      } else {
      console.log('new add')
      setCart(prevCart => [...prevCart, shoppingItem])
    }

    //setCart(prevCart => [...prevCart, shoppingItem])
    
    console.log(cart)
  }

  function removeFromCart(itemId) {
    console.log('remove below id')
    console.log(itemId)
    setCart(
      cart.filter(cartItem => cartItem.id !== itemId)
    )
  }

  // deleteCard = (uid) => {
  //   console.log('delete-card')
  //   const remainingCards = this.state.cards.filter(card => {
  //       return card.id !== uid
  //   })
  //   this.setState({
  //       cards: remainingCards
  //   })
  // }


  //const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
  const cartQuantity = cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)


  

  useEffect(() => {
    console.log('start useEffect...')
    
    // console.log(items)
    
    // console.log('preload shoppingitems =')
    // console.log(shoppingItems)

    // console.log('setting items...')
    // setShoppingItems(items)

    // console.log('new set items =')
    // console.log(shoppingItems)

    console.log('end useEffect...')
  }, []);

  //for rendering shopItemId
  function findShopItem(id) {
    items.filter(item => item.id === id)
  }
  
  return (
    <Router>
      <div className="App">


        <button onClick={incCost}>+ Cost</button>
        <button onClick={() => addToCart('test item')}>+ Cart</button>

        <Nav
          cart={cart}
          totalCost={totalCost}
          cartQuantity={cartQuantity}
        />

        <Switch>
          <Route 
            exact path="/" 
            component={Home} 
          />

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
            />}
          />

          <Route path="/cart" >
            <Cart cart={cart} changeQuantity={changeQuantity} removeFromCart={removeFromCart} />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
