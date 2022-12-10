import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBiking, faBasketShopping, faBookAtlas, faDesktop, faCouch, faBoxArchive } from '@fortawesome/free-solid-svg-icons'
import './Category.css'
import { Link } from 'react-router-dom'

const categories = {
    'Vehicle' : { icon :  <FontAwesomeIcon icon={faPersonBiking} className='icon-cat' onClick={()=>{localStorage.setItem("zaqwsx",2)}} />,id:2},
    'Groceries': {icon:<FontAwesomeIcon icon={faBasketShopping} className='icon-cat' />,id:3},
    'Books': {icon:<FontAwesomeIcon icon={faBookAtlas} className='icon-cat' />,id:4},
    'Electronics': {icon:<FontAwesomeIcon icon={faDesktop} className='icon-cat' />,id:5},
    'Furniture': {icon :<FontAwesomeIcon icon={faCouch} className='icon-cat' />,id:6},
    'Miscellaneous': {icon : <FontAwesomeIcon icon={faBoxArchive} className='icon-cat' />,id:7},
}

export const Category = () => {
    return (
        <div className='category-bar'>
            <div className="category-heading">
                <h3 className='heading'>Browse Categories</h3>
            </div>
            <div className="category-outer-cont">
                <div className="category-inner">
                    {
                        Object.keys(categories).map((cat) => {
                            return (
                                <div className="single-category">
                                    <Link to={`/product/`} onClick={()=>{localStorage.setItem("category_id",categories[cat]["id"])}} className="bg-categ">
                                        {categories[cat]["icon"]}
                                    </Link>
                                    <h3 className='sub-head'>{cat}</h3>
                                </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}