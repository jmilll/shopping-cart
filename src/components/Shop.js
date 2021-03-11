import React from 'react'


const Shop = (props) => {
    
    //const {items, testItems} = props
    console.log(props.items)
    console.log(props)
   //console.log('props = ' + props)
   // console.log('items = ' + items)
   // console.log('test = ' + testItems)
   const {items} = props

    return (
        <section className='shop'>

            <h1>Shop Page</h1>
            <p>shopee pagee</p>

            {/* {items.map((item) => <ShopItem key={item.id} {...item} />)} */}

            {items.map(item => {
                return(
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
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
