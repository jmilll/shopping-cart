import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    const {totalCost, cart, cartQuantity} = props
    
    //console.log(props)
    return (
        
        <nav className='nav'>
            <h1>{totalCost}</h1>
            <Link to="/">
                <h3>Logo/Home</h3>
            </Link>
            <ul className='nav-links'>
                <Link to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <li>Cart {cartQuantity}</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
