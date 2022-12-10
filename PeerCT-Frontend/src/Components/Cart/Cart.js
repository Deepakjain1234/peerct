import React, { useState } from 'react'
import { Navbar } from '../Common/Navbar/Navbar'
import { Footer } from '../Common/Footer/Footer'
import { Category } from '../Home/Category/Category'
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { SingleProduct } from '../Home/FeatureProduct/SingleProduct'
import axios from 'axios';
import  {  useEffect } from 'react'
import { Link } from 'react-router-dom'



let usefuldata = [
    {
        "id": 2,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "product_name": "Lorem Ipsum",
        "product_price": 35,
        "category": 'new',
        "brand": "lorem"
    },
    {
        "id": 3,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "product_name": "Lorem Ipsum",
        "product_price": 65,
        "category": 'old',
        "brand": "lorem"
    },
    {
        "id": 4,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "product_name": "Lorem Ipsum",
        "product_price": 25,
        "category": 'new',
        "brand": "ipsum"
    }
]



// let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyMCwibmFtZSI6IjEyIiwiZW1haWwiOiIxMiIsImNvbnRhY3QiOiIxMiIsImNpdHkiOm51bGwsInN0YXRlIjpudWxsLCJhZGRyZXNzIjpudWxsLCJ1c2VyX2lkIjpudWxsLCJjb2xsZWdlX2lkIjpudWxsLCJ0eXBlIjpudWxsLCJncmFkX3llYXIiOm51bGwsInBhc3N3b3JkIjoiJDJiJDEyJC9mZUdadEd1TmZoMUVSUWFZL2ZJVHVUcEFVMkMxOWZRQjdOSHpGTmlvcGxaMGt5TVN0VHVpIiwiY3JlYXRlZEF0IjoiMjAyMi0wNS0xOFQwNDo1NDo0My4xNDVaIiwidXBkYXRlZEF0IjoiMjAyMi0wNS0xOFQwNDo1NDo0My4xNDVaIn0sImlhdCI6MTY1MzAzNzMxNn0.7Z5xe1_sfqn-qWg1bfi264z04b3SQoR72Jcj3pRwuJk"





export const Cart = () => {
    let token=localStorage.getItem('token')
    

    let usefuldata1=[]
    const fetchapi=()=>
    {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/cart/show`,  { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
            console.log(response.data)
            usefuldata1 = response.data;
            setcartproduct(usefuldata1)
            
        })
        .catch((error) => {
    
            console.log(error);
    })
    }

    const[catproduct,setcartproduct]=useState([])
    const [product_data, updateProductData] = useState([]);


    useEffect(()=>{
        fetchapi()
        
    },[ ])

    let price=0;
    catproduct.map((item, index) => {
        price=item.price+price
    })
    

    const handleClick = event => {
        // console.log(event.currentTarget.id);
        // alert(event.currentTarget.id)

        let token=localStorage.getItem('token')
        
        
        const bodyParameters = {
           product_id:parseInt(event.currentTarget.id)
        };
        const config = {
            headers: { Authorization: `Bearer ${token}` },
            data:bodyParameters
        };
        axios.delete( 
          `${process.env.REACT_APP_BACKEND_URL}/api/cart/remove`,
          config,          
        ).then((data)=>{console.log(data)
            fetchapi()
        
        
        }).catch((err)=>{console.log(err)});
        // handleremove(event.currentTarget.id)

        fetchapi()

      
      };
    


    console.log(usefuldata1)



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
        <>
            <Navbar />
            <div style={{
                paddingTop: 0
            }} className='bg-dark'>
                <Category />
            </div>
            <div className="heading-CART">
                <h2 className='head'>Cart</h2>
            </div>
            <div className="main-cart-section">
                <div className="cart">
                    <div className="tags-cart">
                        <span>Image</span>
                        <span>Product</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span>Total</span>
                    </div>
                    <div className="products-cart">
                        
                        {
                        catproduct.map((item, index) => {
                     
                                return (
                                    <div key={index} className="single-product-cart" >
                                        <div className="img-sectoion">
                                            <img src={item.peerCTProduct.image_1} width={200} alt="" />
                                        </div>
                                        <div className="product-name">
                                            <span>{item.peerCTProduct.name}</span>
                                        </div>
                                        <div className="product-price-cart">
                                            
                                            <span>{item.price}</span>
                                        </div>
                                        <div className="product-quantity">
                                            <span>1</span>
                                        </div>
                                        <div className="product-total">
                                            <span>{item.price}</span>
                                        </div>
                                        <div className="delete">
                                            <FontAwesomeIcon icon={faTrashCan} id={item.product_id} onClick={handleClick} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="total-section">
                            <span>Total : </span>
                            <span>{price}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-2-cart">
                <div className="grand-total">
                    <div className="sub-grand">
                        <span>Subtotal</span>
                        <span>{price}</span>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="sub-grand">
                        <span>Shipping</span>
                        <span>250</span>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="sub-grand total-cart">
                        <span>Total</span>
                        <span>{price + 250}</span>
                    </div>
                    <div className="button-checkout">
                        <button className='btn btn-checkout'>checkout</button>
                    </div>
                </div>
            </div>
            <div className='feature-bar bg-dark' style={{
                margin: 0,
            }}>
                <div style={{
                        textAlign: 'center',
                        margin: '12px auto'
                    }} className="feature-heading">
                    <h3  className='heading'>Related Products</h3>
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
            </div>
            <Footer />
        </>
    )
}
