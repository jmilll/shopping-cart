//import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart';
import Nav from './components/Nav';
import Shop from './components/Shop';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom'


const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <h1>Home</h1> */}
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
        {/* <Cart />
        <Shop /> */}
      </div>
    </Router>
  );
}

export default App;
