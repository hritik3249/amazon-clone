import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://m.media-amazon.com/images/I/51m54DCon8L._SX1200_.jpg" alt=""
                />
            </div>
            <div className="home_row">
                <Product />
                
            </div>
            <div className="home_row">

            </div>
            <div className="home_row">

            </div>
        </div>
    )
}

export default Home