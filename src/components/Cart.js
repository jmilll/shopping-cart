import React from 'react'
import { Link } from 'react-router-dom'

const Cart = (props) => {
    //console.log('cart props below')
    //console.log(props)
    const { cart, changeQuantity, removeFromCart } = props
    console.log('cart deconstructed props below')
    console.log(cart)

    let cartTotal = 
        cart.map(item => item.price * item.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  //const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
  //const cartQuantity = cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)

    return (
        <section className='cart'>
            <h1>Cart Page</h1>

            {cart.map(item => {
                return(
                    <div className={item.name} key={item.id}>
                        <Link to={`/shop/${item.id}`}>
                            <p>{item.name}</p>
                        </Link>
                        
                        <p>${item.price} X {item.quantity}</p>
                        <button onClick={() => changeQuantity(item.id, -1)} disabled={item.quantity <2}>-</button>
                        <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                        <button onClick={() => removeFromCart(item.id)}>Remove From Cart</button>
                    </div>
                )
            })}

            <h2>TOTAL</h2>
            <h3>{cartTotal}</h3>

        </section>
    )
}

export default Cart
