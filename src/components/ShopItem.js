import React from 'react'

function ShopItem(props) {
    const { items, addToCart, shopItemId } = props
    console.log(props)

    const shopItem = items.find(item => item.id === shopItemId)
    console.log(shopItem)

    return (
        <section className='page-container item'>
        <div className='shop-item-page'>
            SHOP ITEM
            {/* {shopItemId} */}
            <div className='img-container-shop-item'>
                <img className='image item' src={shopItem.imgSource} alt={shopItem.name} />
            </div>
            <p className='shop-item-name'>{shopItem.name}</p>
            <p className='shop-item-price'>${shopItem.price}</p>
            <button className='btn add-to-cart' onClick={() => addToCart(shopItem)}>Add To Cart</button>
        </div>
        </section>
    )
}

export default ShopItem
