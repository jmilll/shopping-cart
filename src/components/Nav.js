import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    const { cartQuantity } = props
    
    return (
        
        <nav className='nav'>
            <Link to="/">
                <h3 className='logo'>Leafybois</h3>
            </Link>
            <ul className='nav-links'>
                <Link className='shop-link' to="/shop">
                    <li>Shop</li>
                </Link>
                <Link to="/cart">
                    <svg className='cart-icon' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z" clipRule="evenodd"></path><path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"></path></svg>
                    <li className='cart-qty'>{cartQuantity}</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
