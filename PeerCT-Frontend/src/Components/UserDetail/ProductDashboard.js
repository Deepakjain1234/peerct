import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBiking, faBasketShopping, faBookAtlas, faDesktop, faCouch, faBoxArchive } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios';


const categories = {
    'Vehicle': { icon: <FontAwesomeIcon color='#fff' icon={faPersonBiking} className='icon-cat' />, id: 2 },
    'Groceries': { icon: <FontAwesomeIcon color='#fff' icon={faBasketShopping} className='icon-cat' />, id: 3 },
    'Books': { icon: <FontAwesomeIcon color='#fff' icon={faBookAtlas} className='icon-cat' />, id: 4 },
    'Electronics': { icon: <FontAwesomeIcon color='#fff' icon={faDesktop} className='icon-cat' />, id: 5 },
    'Furniture': { icon: <FontAwesomeIcon color='#fff' icon={faCouch} className='icon-cat' />, id: 6 },
    'Miscellaneous': { icon: <FontAwesomeIcon color='#fff' icon={faBoxArchive} className='icon-cat' />, id: 7 },
}
let usefuldata1=[]

export const ProductDashboard = () => {

    let token=localStorage.getItem('token')
    

    const fetchapi=()=>
    {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/cart/show`,  { headers: { "Authorization": `Bearer ${token}` } })
        .then((response) => {
            usefuldata1 = response.data;
            setcartproduct(usefuldata1);
            console.log(usefuldata1)
            
        })
        .catch((error) => {
    
            console.log(error);
    })
    }

    const[catproduct,setcartproduct]=React.useState([])

    React.useEffect(()=>{
        fetchapi()
        
    })



    return (
        <div className="personal-info">
            <form>
                <div className="tittle">
                    <span>Product Dashboard</span>
                </div>
                <div className="listed-product">
                    <div className="heading-product">
                        <span>Listed Products</span>
                    </div>
                    <div className="product-section">
                        <div className="horizontal">
                            <div className="img-user">
                                <Link to={`/product/`} className="user-cat-tag">
                                    {categories.Vehicle.icon}
                                </Link>
                            </div>
                            <div className="details-cat">
                                <span>Category : Vehice</span>
                                <span>Tittle - {catproduct.name}</span>
                            </div>
                        </div>
                        <div className="price-tag">
                            <span>Price - </span>
                            <span className='price'>{catproduct.price}</span>
                        </div>
                        <div className="see-more">
                            <span>see more</span>
                        </div>
                    </div>
                </div>
                <div className="spacer-class">

                </div>
                <div className="listed-product">
                    <div className="heading-product">
                        <span>Sold Products</span>
                    </div>
                    <div className="product-section">
                        <div className="horizontal">
                            <div className="img-user">
                                <Link to={`/product/`} className="user-cat-tag">
                                    {categories.Vehicle.icon}
                                </Link>
                            </div>
                            <div className="details-cat">
                                <span>Category : Vehice</span>
                                <span>Tittle - Pulser</span>
                            </div>
                        </div>
                        <div className="price-tag">
                            <span>Price - </span>
                            <span className='price'>$200</span>
                        </div>
                        <div className="see-more">
                            <span>see more</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
