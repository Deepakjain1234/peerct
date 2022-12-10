import React, { useState } from 'react'
import { Navbar } from '../Common/Navbar/Navbar'
import { Footer } from '../Common/Footer/Footer'
import { Category } from '../Home/Category/Category'
import './style.css'
import addCart from '../../assets/img/cart-add.png'
import { SingleProduct } from '../Home/FeatureProduct/SingleProduct'
import Avatar from '@mui/material/Avatar';
import star_1 from '../../assets/img/stars/1.png'
import star_2 from '../../assets/img/stars/2.png'
import star_3 from '../../assets/img/stars/3.png'
import star_4 from '../../assets/img/stars/4.png'
import star_5 from '../../assets/img/stars/5.png'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Link } from 'react-router-dom'
import  {  useEffect } from 'react'




let stars = [
    star_1,
    star_2,
    star_3,
    star_4,
    star_5,
]

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

const data = {
    'alt_img': [
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    ],
    'main_img': 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    'prod_name': 'Sample Product',
    'small_desc': 'Lorem ipsum dolor sit amet,consectetur adipiscing elit.Pellentesque vel neque tincidunt venenatis, pretium, risus sed. Elit et sit egestas aliquet in et mi.Ante lacus purus ac sit vivamus in quis fringilla.',
    'large_desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, elementum proin tellus aliquet enim tempus non. Sit vulputate dolor, molestie ipsum. Nibh condimentum augue aliquam convallis habitant ac nisi, sollicitudin. Eleifend ac scelerisque at tempor arcu. Venenatis, odio aenean dui id augue. Et elit purus tortor velit lectus dictum. Rutrum condimentum facilisi dui mauris, risus. Purus, urna bibendum arcu quisque ornare. Congue ornare elementum tortor, auctor libero facilisis tincidunt. Nunc id gravida risus feugiat vulputate.',
    'price': 250,
    'review': [
        {
            'avatar': 'https://mui.com/static/images/avatar/1.jpg',
            'name': 'Mihir Waykole',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, elementum proin tellus aliquet enim tempus non. Sit vulputate dolor, molestie ipsum. Nibh condimentum augue aliquam convallis habitant ac nisi, sollicitudin. Eleifend ac scelerisque at tempor arcu. Venenatis, odio aenean dui id augue',
            'star': 3
        },
        {
            'avatar': 'https://mui.com/static/images/avatar/3.jpg',
            'name': 'Vivo T1 5G',
            'desc': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo, elementum proin tellus aliquet enim tempus non. Sit vulputate dolor, molestie ipsum. Nibh condimentum augue aliquam convallis habitant ac nisi, sollicitudin. Eleifend ac scelerisque at tempor arcu. Venenatis, odio aenean dui id augue',
            'star': 4
        }
    ]
}

let usefuldata1 = []





export const ProductDetail = (product_id) => {
    const [count, setcount] = useState(0)
    const [product_data, updateProductData] = useState([]);
    let proid = localStorage.getItem('productid1')
    const [productID ,setpro]=useState(proid)

    // const [productid,setproductid]=useState(proid)

    function increaseCount(e) {
        setcount((count + 1))
    }
    function decreaseCount(e) {
        if (count == 0) return
        setcount(count - 1)
    }
    const getproductdetails = ()=>{axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/product/product/${proid}`, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
        .then(res => {

            // alert("meesags")

            usefuldata1 = res.data
            console.log(usefuldata1)
            setproductdata(res.data)

        }).catch((error) => {

            console.log(error)
            // alert(error)
        });}

    // getproductdetails();


    const addtocart = () => {
        let token = localStorage.getItem('token')

        const bodyParameters = {
            product_id: productdata.id,
            sold: false,
            price: productdata.price
        };

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/api/cart/add`,
            bodyParameters,
            config
        ).then(()=>{alert("success")

    
    }).catch(()=>{alert("failure")

}).then(()=>{
    <Link to='/cart' />
});
    }

let coll_id=3

let usefuldata4=[]

const runapi = () => {
    
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/product/all/`,{ params: { college_id: coll_id } })
        .then((response) => {

            usefuldata4 = response.data;
            // updateProductData(usefuldata);
            updateProductData(usefuldata4.slice(0, Math.min(usefuldata4.length, 4)));
     
 
        })
        .catch((error) => {

            console.log(error);
        })

}


useEffect(()=>{
    getproductdetails()
    runapi()
    
    
},[ ])


useEffect(() => {
    getproductdetails()
  
}, [productID])

    

    // localStorage.removeItem('product_id')

    const [productdata, setproductdata] = useState([])

    const handleproductclick =()=>
    {
    let proid = localStorage.getItem('productid1')
    
    // alert(productid);

    
        
    }

    return (
        <>
            <Navbar />
            <div style={{
                paddingTop: 0
            }} className='bg-dark'>
                <Category />
            </div>
            <div className="cover">
                <div className="product-section-1">
                    <div className="image-product">
                        <div className="main-img">
                            <img src={productdata.image_1} width={450} height={450} alt="" />
                        </div>
                        <div className="alt-img">
                            {/* {
                                data.alt_img.map(el => {
                                    return (
                                        <img src={el} width={125} height={125} alt="" />
                                    )
                                })
                            } */}
                            <img src={productdata.image_2} width={125} height={125} alt="" />
                            <img src={productdata.image_3} width={125} height={125} alt="" />
                            <img src={productdata.image_4} width={125} height={125} alt="" />
                            {/* <img src={productdata.image_1} width={125} height={125} alt="" /> */}
                        </div>
                    </div>
                    <div className="info-product">
                        <div className="product-name space">
                            <span>{productdata.name}</span>
                        </div>
                        <div className="product-small-desc space">
                            <span>{productdata.description}</span>
                        </div>
                        <div className="product-price space">
                            <span>$ {usefuldata1.price}</span>
                        </div>
                        <div className="space" style={{
                            margin: '12px'
                        }}>
                            <div class="counter space">
                                <span class="down" onClick={decreaseCount}>-</span>
                                <input type="text" value={count} onChange={(e) => {
                                    setcount(e.target.value)
                                }} />
                                <span class="up" onClick={increaseCount}>+</span>
                            </div>
                        </div>
                        <div className="add-to-cart">
                            <button className="btn btn-add-cart" onClick={addtocart}><img src={addCart} height='20px' alt="" /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cover" style={{
                marginTop: 0
            }}>
                <div className="large-description">
                    <div className="heading-desc">
                        <span>Description</span>
                    </div>
                    <div className="desc">
                        <span>{productdata.description}</span>
                    </div>
                </div>
            </div>
            <div className="cover" style={{
                marginTop: 0
            }}>
                <div className="large-description">
                    <div className="heading-rev">
                        <span>Reviews</span>
                    </div>
                    <div className="review">
                        {
                            data.review.map(el => {
                                return (
                                    <div className="review-box">
                                        <div className="avtar-rev">
                                            <Avatar alt="Remy Sharp" src={el.avatar} />
                                        </div>
                                        <div className="content-rev">
                                            <div className="name-user space-rev">
                                                <span>{el.name}</span>
                                            </div>
                                            <div className="desc-rev space-rev">
                                                <span>{el.desc}</span>
                                            </div>
                                        </div>
                                        <div className="star-rev space-rev">
                                            <img src={stars[el.star - 1]} alt="" />
                                        </div>
                                    </div>
                                )
                            })
                        }
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
                    <h3 className='heading'>Related Products</h3>
                </div>
                <div className="feature-outer-cont">
                    <div className="feature-inner">
                        {
                        product_data.map((element) => {
                            return    <SingleProduct key={element.id} product_id={element.id} product_img="https://i.kinja-img.com/gawker-media/image/upload/s---Jp3oE95--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/199zpfi8dig2njpg.jpg" product_name={element.name} product_price={element.price} onClick={handleproductclick()}  />
                             
                            
                        })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </ >
    )
}
