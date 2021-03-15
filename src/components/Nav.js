import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    const { cartQuantity } = props
    
    //console.log(props)
    return (
        
        <nav className='nav'>
            <Link to="/">
                <h3 className='logo'>Leafybois</h3>
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
