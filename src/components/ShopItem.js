import React from 'react'

function ShopItem(props) {
    const { items, addToCart, shopItemId } = props
    console.log(props)

    const shopItem = items.find(item => item.id === shopItemId)
    console.log(shopItem)

    return (
        <section className='page-container item'>
        <div className='shop-item-page'>
            <div className='img-container-shop-item'>
                <img className='image item' src={shopItem.imgSource} alt={shopItem.name} />
            </div>
            <div className='shop-item-info item'>
                <div className='name-price-wrapper'>
                    <p className='shop-item-name'>{shopItem.name}</p>
                    <p className='shop-item-price'>${shopItem.price}</p>
                </div>
                <button className='btn add-to-cart' onClick={() => addToCart(shopItem)}>Add To Cart</button>
            </div>
        </div>
        </section>
    )
}

export default ShopItem
