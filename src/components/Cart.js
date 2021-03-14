import React from 'react'
import { Link } from 'react-router-dom'

const Cart = (props) => {
    //console.log('cart props below')
    //console.log(props)
    const { cart, changeQuantity } = props
    console.log('cart deconstructed props below')
    console.log(cart)
    return (
        <section className='cart'>
            <h1>Cart Page</h1>

            {cart.map(item => {
                return(
                    <div className={item.name} key={item.id}>
                        <Link to={`/shop/${item.id}`}>
                            <p>{item.name}</p>
                        </Link>
                        
                        <p>{item.quantity}</p>
                        <button onClick={() => changeQuantity(item.id, -1)} disabled={item.quantity <2}>-</button>
                        <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                    </div>
                )
            })}

        </section>
    )
}

export default Cart
