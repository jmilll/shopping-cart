//import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Cart from './components/Cart';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'



const App = () => {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [totalCost, setTotalCost] = useState(0)

  
  function incCost() {
    setTotalCost(prevTotalCost => prevTotalCost + 1)
    //setScore((prevScore) => prevScore + 1)
    console.log(totalCost)
  }

  function incCart() {
    //e.preventDefault()
    setCart(prevCart => [...prevCart,' item'])
    //prevArr => [...prevArr, card]
    console.log(cart)
  }


  return (
    <Router>
      <div className="App">

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
          <Route 
            path="/shop" 
            component={Shop} 
          />
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
