import React from 'react'
import './Section.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons'

export const SingleProduct = (props) => {


    const handleClick = event => {
        console.log(event.currentTarget.id);
        localStorage.setItem('productid1',event.currentTarget.id)
      };
    return (
        <div className='single-product' id={[props.product_id]} onClick={handleClick}>
            <div className="img-section">
                <img src={props.product_img} alt="" />
            </div>
            <div className="description">
                <div className="product-name">
                    <span style={{color:"black"}}>{props.product_name}</span>
                </div>
                <div className="product-price">
                    <span>{props.product_price}$</span>
                </div>
                <div className="horizontal-line"></div>
                <div className="more-options" style={{color:"black"}}>
                    <div className="shop-icon">
                        <FontAwesomeIcon style={{color:"black"}} className='icon-product' icon={faCartPlus} />
                    </div>
                    <div className="vertical-line"></div>
                    <div className="favourite-icon">
                        <FontAwesomeIcon  style={{color:"black"}}className='icon-product' icon={faHeart} />
                    </div>
                </div>
            </div>
        </div>
    )
}