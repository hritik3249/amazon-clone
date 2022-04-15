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

                <div className="home_row">
                    <Product
                        title="The lean startup"
                        price={420}
                        image="https://cdn01.sapnaonline.com/product_media/9780670921607/md_9780670921607.jpg" alt=""
                        rating={5} />
                    <Product
                        title="Apple iphone 12(256 gb)"
                        price={86999}
                        image="https://images-eu.ssl-images-amazon.com/images/I/71ZOtNdaZCL._AC_UL150_SR150,120_.jpg" alt=""
                        rating={4} />
                </div>
                <div className="home_row">
                    <Product
                        title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers"
                        price={36999}
                        image="https://images-eu.ssl-images-amazon.com/images/I/81vDZyJQ-4L._AC_UL150_SR150,120_.jpg" alt=""
                        rating={5} />
                    <Product
                        title="Axor Apex Venomous Black Grey Helmet-XL"
                        price={3, 699}
                        image="https://images-eu.ssl-images-amazon.com/images/I/61dtvRaha-L._AC_UL150_SR150,120_.jpg" alt=""
                        rating={3} />
                    <Product
                        title="2021 Apple iPad Pro with Apple M1 chip (11-inch/27.96 cm, Wi-Fi, 128GB) - Space Grey (3rd Generation)"
                        price={100000}
                        image="https://m.media-amazon.com/images/I/81Y5WuARqpS._AC_UY327_FMwebp_QL65_.jpg" alt=""
                        rating={4} />
                </div>
                <div className="home_row">
                    <Product
                        title="BMW s1000 rr Grey Matte edition with racer pro pack"
                        price={2200000}
                        image="https://cdp.azureedge.net/products/USA/BM/2022/MC/BMWS/S_1000_RR/50/STYLE_-_MINERAL_GRAY_METALLIC/2000000001.jpg"
                        rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home