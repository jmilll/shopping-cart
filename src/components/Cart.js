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

    const itemTotal = (cost, quantity) => cost * quantity

  //const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
  //const cartQuantity = cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)

    return (
        <section className='cart'>
            <h1>Cart Page</h1>

            {cart.map(item => {
                return(
                    <div className='cart-item' key={item.id}>

                        <div className='img-container-cart'>
                            <img className='image cart' src={item.imgSource} alt={item.id} />
                        </div>

                        <Link className='item-link' to={`/shop/${item.id}`}>
                            <p>{item.name}</p>
                        </Link>
                        
                        <p>${item.price}</p>

                        <div className='quantity-wrapper'>
                            <button className='btn qty' onClick={() => changeQuantity(item.id, -1)} disabled={item.quantity <2}>-</button>
                            <p>{item.quantity}</p>
                            <button className='btn qty' onClick={() => changeQuantity(item.id, 1)}>+</button>
                        </div>

                        <p className='sub-total'>Subtotal ${itemTotal(item.price, item.quantity)}</p>

                        <button className='btn remove' onClick={() => removeFromCart(item.id)}>Remove From Cart</button>
                    </div>
                )
            })}

            <div className='cart-total'>
                <h2>TOTAL</h2>
                <h3>{cartTotal}</h3>
                <Link className='item-link' to='/checkout'>
                            <button className='btn checkout'>Checkout</button>
                </Link>
            </div>

        </section>
    )
}

export default Cart
