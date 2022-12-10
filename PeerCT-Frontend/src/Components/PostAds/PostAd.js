import React from 'react'
import { Navbar } from '../Common/Navbar/Navbar'
import { Footer } from '../Common/Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBiking, faBasketShopping, faBookAtlas, faDesktop, faCouch, faBoxArchive } from '@fortawesome/free-solid-svg-icons'
import './style.css'
import { Link } from 'react-router-dom'

const categories = {
    'Vehicle' : { icon :  <FontAwesomeIcon icon={faPersonBiking} className='icon-cat' />,id:2},
    'Groceries': {icon:<FontAwesomeIcon icon={faBasketShopping} className='icon-cat' />,id:3},
    'Books': {icon:<FontAwesomeIcon icon={faBookAtlas} className='icon-cat' />,id:4},
    'Electronics': {icon:<FontAwesomeIcon icon={faDesktop} className='icon-cat' />,id:5},
    'Furniture': {icon :<FontAwesomeIcon icon={faCouch} className='icon-cat' />,id:6},
    'Miscellaneous': {icon : <FontAwesomeIcon icon={faBoxArchive} className='icon-cat' />,id:7},
}

export const PostAd = () => {
    return (
        <>
            <Navbar />
            <div style={{
                paddingTop: 0
            }} className='bg-dark'>
                <div className='category-bar'>
                    <div className="category-heading center">
                        <h3 className='heading'>Post Your AD</h3>
                    </div>
                    <div className="choose-cat">
                        <span>Choose Category</span>
                    </div>
                    <div className="category-outer-cont post-ad-cat">
                        <div className="category-inner">
                            {
                                Object.keys(categories).map((cat) => {
                                    return (
                                        <div className="single-category">
                                            <Link to={`/post-ads/${cat}`} onClick={() => { localStorage.setItem("Postadd_category_id", categories[cat]["id"]) }} className="bg-categ">
                                                {categories[cat]["icon"]}
                                            </Link>
                                            <h3 className='sub-head'>{cat}</h3>
                                        </div>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
