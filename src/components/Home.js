import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <span className='white-cover'></span>
            <Link className='item-link-shop' to={`/shop`}>
                <button className='btn enter'>Step Inside The Greenhouse</button>
            </Link>
            
            <img className='image' src='https://yardyum.com/storage/app/media/Greenhouse%20with%20Vegetables.jpg' alt='greenhouse-background' />
        </div>
    )
}

export default Home    