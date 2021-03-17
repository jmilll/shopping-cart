import React from 'react'
import { Link } from 'react-router-dom'

function Checkout() {
    return (
        <section className='page-container checkout'>
            <div className='checkout'>
                <div className='empty-cart'>
                    <p>Well, thanks for trying!</p>
                    <p>This is just a demo</p>
                    <Link className='empty-link' to='/shop'>
                        <button className='btn empty'>Back To Shopping</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Checkout
