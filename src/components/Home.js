import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <Link className='item-link-shop' to={`/shop`}>
                <button className='btn enter'>Step Inside The Greenhouse</button>
                
            </Link>
            {/* <img className='home-image' src='https://www.gardeningknowhow.com/wp-content/uploads/2013/10/greenhouse.jpg'/> */}
            
            <img className='image' src='https://yardyum.com/storage/app/media/Greenhouse%20with%20Vegetables.jpg'/>
        </div>
    )
}

export default Home