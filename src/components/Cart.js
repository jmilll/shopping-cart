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
        <section className='page-container cart'>

            <div className='cart'>
            <h1>MY SHOPPING CART</h1>
            <span className='header'>
                {/* <p>Item</p>
                <p>Quantity</p>
                <p>Subtotal</p> */}
            </span>

            {cart.map(item => {
                return(
                    <div className='cart-item' key={item.id}>
                        {/* <div className='cart-item-info'> */}
                            <div className='img-container-cart'>
                                <img className='image cart' src={item.imgSource} alt={item.id} />
                            </div>


                            <Link className='item-link cart' to={`/shop/${item.id}`}>
                                <p>{item.name}</p>
                                
                            </Link>
                        {/* </div> */}
                        {/* <div>
                            <Link className='item-link' to={`/shop/${item.id}`}>
                                <p>{item.name}</p>
                            </Link>
                            <p className='cart-item-price'>${item.price}</p>
                        </div> */}
                        

                        <div className='quantity-wrapper'>
                            <button className='btn qty' onClick={() => changeQuantity(item.id, -1)} disabled={item.quantity <2}>-</button>
                            <p className='quantity'>{item.quantity}</p>
                            <button className='btn qty' onClick={() => changeQuantity(item.id, 1)}>+</button>
                        </div>

                        {/* <p className='sub-total'>Subtotal ${itemTotal(item.price, item.quantity)}</p> */}

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

export default Cart
