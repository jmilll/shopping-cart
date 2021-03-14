import React from 'react'

function ShopItem(props) {
    const { items, addToCart, shopItemId } = props
    console.log(props)

    const shopItem = items.find(item => item.id === shopItemId)
    console.log(shopItem)

    return (
        <div className='shop-item'>
            SHOP ITEM
            {shopItemId}
            <img src={shopItem.imgSource} alt={shopItem.name} />
            <p>{shopItem.name}</p>
            <p>{shopItem.price}</p>
            <button onClick={() => addToCart(shopItem)}>Add To Cart</button>
        </div>
    )
}

export default ShopItem
