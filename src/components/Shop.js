import React from 'react'
import { Link } from 'react-router-dom'

const Shop = (props) => {
    
    //const {items, testItems} = props
   // console.log(props.items)
   // console.log(props)
   //console.log('props = ' + props)
   // console.log('items = ' + items)
   // console.log('test = ' + testItems)
   const {items, addToCart, testId} = props

   const test = (id) => {
       console.log('test click')
       console.log(id)
   }



    return (
        <section className='shop'>

            <h1>Shop Page</h1>

            {/* {items.map((item) => <ShopItem key={item.id} {...item} />)} */}

            {items.map(item => {
                return(
                    <div className='shop-item' key={item.id}>
                        <div className='img-container-shop'>
                            <img className='image shop' src={item.imgSource} alt={item.id} />
                        </div>

                        <Link className='item-link' to={`/shop/${item.id}`} >
                            <p>{item.name}</p>
                        </Link>

                        <p className='shop-price'>${item.price}</p>
                        {/* <button onClick={() => addToCart({name:item.name, id:item.id, price:item.price})}>Add To Cart</button> */}

                        <button className='btn add-to-cart' onClick={() => addToCart({...item})}>Add To Cart</button>
                    </div>
                )
            })}

            {/* {cards.map(img => {
                return (
                    <div className={'card' + difficulty} key={img.title} id={img.title}  onClick={checkMemory.bind(this, img.title)}>
                        <h2>{img.title}</h2>
                        <img src={img.src} alt={img.title} />
                        <p className='artist'>Artist: {img.artist}</p>
                    </div>
                )
            })} */}
        </section>
    )
}

export default Shop
