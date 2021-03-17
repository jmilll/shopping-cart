import React from 'react'
import { Link } from 'react-router-dom'

const Cart = (props) => {
    const { cart, changeQuantity, removeFromCart } = props
    // console.log('cart deconstructed props below')
    // console.log(cart)

    let cartTotal = 
        cart.map(item => item.price * item.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)

    const itemTotal = (cost, quantity) => cost * quantity

  //const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
  //const cartQuantity = cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)

    if (!cart.length) {
        return (
            <section className='page-container cart'>
                <div className='cart'>
                    <h1>MY SHOPPING CART</h1>
                    <span className='header'/>
                    <div className='empty-cart'>
                        <p>It's Empty...</p>
                        <p>You dont like plants?</p>
                        <Link className='empty-link' to='/shop'>
                            <button className='btn empty'>Get Yourself Some Plant Friends</button>
                        </Link>
                    </div>
                </div>
            </section>
        )
    } else {
    
    return (
        <section className='page-container cart'>

            <div className='cart'>
                <h1>MY SHOPPING CART</h1>

                <span className='header'/>

                {cart.map(item => {
                    return(
                        <div className='cart-item' key={item.id}>
                            <div className='img-container-cart'>
                                <img className='image cart' src={item.imgSource} alt={item.id} />
                            </div>

                            <Link className='item-link cart' to={`/shop/${item.id}`}>
                                <p>{item.name}</p>
                            </Link>

                            <div className='quantity-wrapper'>
                                <button className='btn qty' onClick={() => changeQuantity(item.id, -1)} disabled={item.quantity <2}>-</button>
                                <p className='quantity'>{item.quantity}</p>
                                <button className='btn qty' onClick={() => changeQuantity(item.id, 1)}>+</button>
                            </div>

                            <div>
                                <p className='sub-total'>Subtotal ${itemTotal(item.price, item.quantity)}</p>
                                <p className='sub-price'>(${item.price} / each)</p>
                            </div>

                            <button className='btn remove' onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    )
                })}

                <div className='cart-total'>
                    <Link className='back-link' to='/shop'>
                        <button className='btn back'>Add More Plants?</button>
                    </Link>

                    <h2>TOTAL ${cartTotal}</h2>

                    <Link className='checkout-link' to='/checkout'>
                        <button className='btn checkout'>Checkout</button>
                    </Link>
                </div>
            </div>
        </section>
    )
    }
}

export default Cart
