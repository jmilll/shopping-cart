//import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Cart from './components/Cart';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Home from './components/Home';
import items from './components/shoppingItems'
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'



const App = () => {

  const test = [
      {
        id: 'big-leafy-boi',
        name: 'Big Leafy Boi',
        imgSource: 'big-leafy-boi.jpg',
        quantity: 1,
        price: 20,
    },
    {
        id: 'small-leafy-boi',
        name: 'Small Leafy Boi',
        imgSource: 'small-leafy-boi.jpg',
        quantity: 1,
        price: 10,
    }
  ]
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [totalCost, setTotalCost] = useState(0)

  const [shoppingItems, setShoppingItems] = useState([...test])
  
  function incCost() {
    setTotalCost(prevTotalCost => prevTotalCost + 1)
    //setScore((prevScore) => prevScore + 1)
    console.log(totalCost)
    //console.log(items)
  }

  function incCart() {
    //e.preventDefault()
    setCart(prevCart => [...prevCart,' item'])
    //prevArr => [...prevArr, card]
    console.log(cart)
  }


  //const a = [...items]

  useEffect(() => {
    console.log('start useEffect...')
    
    console.log(items)
    
    console.log('preload shoppingitems =')
    console.log(shoppingItems)

    console.log('setting items...')
    setShoppingItems(items)

    console.log('new set items =')
    console.log(shoppingItems)
    
    console.log('end useEffect...')
  }, []);



  return (
    <Router>
      <div className="App">
      {/* {items.map(item => {
                return(
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </div>
                )
            })} */}

        <button onClick={incCost}>+ Cost</button>
        <button onClick={incCart}>+ Cart</button>

        <Nav
          cart={cart}
          totalCost={totalCost}
        />

        <Switch>
          <Route 
            exact path="/" 
            component={Home} 
          />
          <Route exact path="/shop">
            <Shop items={items} />
          </Route>
          {/* <Route 
            path="/shop" 
            component={Shop}
            items={shoppingItems}
              //items={[{items}]}
              //storeItems={storeItems}
              // render={(props) => (
              //   <Shop {...props} items={items} />
              // )}
          /> */}
          {/* { items.map((item) => { return <ShopItem {... item}/> }) } */}
          <Route 
            path="/cart" 
            component={Cart} 
          />
        </Switch>
      </div>
    </Router>
  );
}


// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/shop" component={Shop} />
//           <Route path="/cart" component={Cart} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }


// const Routes = () => {

//   const goHome = () => {
//       <Link to="/">Home</Link>
//   }

//   return (
//       <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/profile">profile</Link>
//           </li>
//           <li>
//             <Link to="/users">Users</Link>
//           </li>
//         </ul>
//       </nav>
//           <button onClick={() => goHome()}>Home</button>
//           <Switch>
//               <Route exact path='/' component={App} />

//               <Route path='/profile' component={Profile} />
//           </Switch>
//       </Router>
//   )
// }

export default App;
