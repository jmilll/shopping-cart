import React from 'react'
import { Link } from 'react-router-dom'

const Shop = (props) => {
    
   const {items, addToCart} = props

    return (
        <section className='page-container shop'>

            <div className='shop'>
                {items.map(item => {
                    return(
                        <div className='shop-item' key={item.id}>
                            <div className='img-container-shop'>
                                <Link to={`/shop/${item.id}`} >
                                <img className='image shop' src={item.imgSource} alt={item.id} />
                                </Link>
                            </div>
                            <div className='shop-item-info'>
                                <div className='name-price-wrapper'>
                                    <Link className='item-link' to={`/shop/${item.id}`} >
                                        <p>{item.name}</p>
                                    </Link>

                                    <p className='shop-price'>${item.price}</p>
                                </div>
                                <button className='btn add-to-cart' onClick={() => addToCart({...item})}>Add To Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
        
    )
}

export default Shop
