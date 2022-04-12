import React from "react";
import "./Product.css";
function Product() {
    return (
        <div className="product">
            <div className="product_info">
                <p>The lean startup</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product_rating">
                    <p>⭐</p>
                </div>
            </div>
            <img src="https://cdn01.sapnaonline.com/product_media/9780670921607/md_9780670921607.jpg" alt="" />
            <button>Add to basket</button>
        </div>
    )
}

export default Product