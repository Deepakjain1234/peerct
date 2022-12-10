import React, { useEffect, useState } from 'react'
import { SingleProduct } from './SingleProduct'
import { Link } from 'react-router-dom'
import axios from 'axios';



export const Section = () => {
    const [product_data, updateProductData] = useState([]);
    // let coll_id=localStorage.getItem('college_id');
    let coll_id=3

    let usefuldata=[]

    const runapi = () => {
        
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/product/all/`,{ params: { college_id: coll_id } })
            .then((response) => {

                usefuldata = response.data;
                // updateProductData(usefuldata);
                updateProductData(usefuldata.slice(0, Math.min(usefuldata.length, 4)));
            })
            .catch((error) => {

                console.log(error);
            })

    }


    useEffect(() => {
        runapi()
      
    }, [])
    return (
        <div className='feature-bar'>
            <div className="feature-heading">
                <h3 className='heading'>Featured Products</h3>
            </div>
            <div className="feature-outer-cont">
                <div className="feature-inner">
                    {  
                        product_data.map((element) => {
                            return   <Link  to="/product/detail">
                            <SingleProduct key={element.id} product_id={element.id} product_img="https://i.kinja-img.com/gawker-media/image/upload/s---Jp3oE95--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/199zpfi8dig2njpg.jpg" product_name={element.name} product_price={element.price}  />
                             </Link>
                            
                        })
                    }
                </div>
            </div>
            <div className="see-more">
                <button className='more-like-btn btn'>See More</button>
            </div>
        </div>
    )
}