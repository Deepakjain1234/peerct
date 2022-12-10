import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Footer } from '../Common/Footer/Footer'
import { Category } from '../Home/Category/Category'
import { Navbar } from '../Common/Navbar/Navbar'
import './Product.css'
import { SingleProduct } from '../Home/FeatureProduct/SingleProduct'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { grey } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Pagination from '@mui/material/Pagination'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import star_1 from '../../assets/img/stars/1.png'
import star_2 from '../../assets/img/stars/2.png'
import star_3 from '../../assets/img/stars/3.png'
import star_4 from '../../assets/img/stars/4.png'
import star_5 from '../../assets/img/stars/5.png'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonBiking, faBasketShopping, faBookAtlas, faDesktop, faCouch, faBoxArchive } from '@fortawesome/free-solid-svg-icons'


let stars = [
    star_1,
    star_2,
    star_3,
    star_4,
    star_5,
]
let company = [
    "Lorem",
]
let usefuldata = []






const categories = {
    'Vehicle': { icon: <FontAwesomeIcon icon={faPersonBiking} className='icon-cat' />, id: 2 },
    'Groceries': { icon: <FontAwesomeIcon icon={faBasketShopping} className='icon-cat' />, id: 3 },
    'Books': { icon: <FontAwesomeIcon icon={faBookAtlas} className='icon-cat' />, id: 4 },
    'Electronics': { icon: <FontAwesomeIcon icon={faDesktop} className='icon-cat' />, id: 5 },
    'Furniture': { icon: <FontAwesomeIcon icon={faCouch} className='icon-cat' />, id: 6 },
    'Miscellaneous': { icon: <FontAwesomeIcon icon={faBoxArchive} className='icon-cat' />, id: 7 },
}



export const Product = () => {
    
    const cat_id = localStorage.getItem('category_id');
    let coll_id = localStorage.getItem('college_id');
    // localStorage.removeItem('category_id')
    if (cat_id == null) {
        cat_id = "5"
    }

    let id = useParams();
    const [product_data, updateProductData] = useState([]);

    const [cat_id1, updatecategory] = useState(cat_id);
    const [cat_name, updatecategoryname] = useState();

    const [state, setstate] = useState(true)
    const [page, setpage] = useState(1)
    const [value, setValue] = React.useState([1000, 25000]);
    function valuetext(value) {
        return `${value}`;
    }
  

    const runapi = () => {
        console.log("funcal")
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/product/all/+${cat_id1}`,{ params: { college_id: coll_id } })
            .then((response) => {

                // alert("api call in")

                usefuldata = response.data;
                updateProductData(usefuldata);
            })
            .catch((error) => {

                console.log(error);
            })

    }


    const searchapi = () => {
        console.log("funcal")
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/product/search/`,{ params: { college_id: coll_id, search:localStorage.getItem('searchkey') } })
            .then((response) => {

                // alert("api call in")

                usefuldata = response.data;
                updateProductData(usefuldata);
                localStorage.removeItem('searchbutton');
                localStorage.removeItem('searchkey')
            })
            .catch((error) => {

                console.log(error);
            })

    }



 

   



   

    useEffect(() => {
        runapi()

    }, [cat_id1])
    // useEffect(()=>{
    //     searchapi()
    //     if(localStorage.getItem('searchkey')==true)
    //     {searchapi()}
    //     else
    //     {runapi()
    //     }
    // },[localStorage.getItem('searchkey')])
    if(localStorage.getItem('searchkey'))
    {
        searchapi()
    }
    



    useEffect(() => {

        updateProductData(usefuldata);
    }, [])
    const low_high = async () => {
        let dataSort = product_data;
        dataSort.sort((a, b) => a.price - b.price)
        updateProductData(dataSort)
        setstate(!state)
    };
    const high_low = async () => {
        let dataSort = product_data;
        dataSort.sort((a, b) => b.price - a.price)
        updateProductData(dataSort)
        setstate(!state)
    };
    const handleChange = (event, value) => {
        setpage(value);
    };
    const handleChange2 = (event, value) => {
        setValue(value);
    };
    const handleChange3 = (event) => {
        console.log(event.target.value)
        setValue([event.target.value, value[1]]);
    };
    const handleChange4 = (event) => {
        console.log(event.target.value)
        setValue([value[0], event.target.value]);
    };
    console.log(cat_id1)
    console.log(product_data)
    // localStorage.removeItem('category_id')

    return (
        <>
            <Navbar />
            <div style={{
                paddingTop: 0
            }} className='bg-dark'>
                {/* <Category /> */}

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
                                            <Link to={`/product/`} onClick={() => { updatecategory(categories[cat]["id"]) }} className="bg-categ">
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
            <div className="heading-single-cat bg-dark">
                <span>{id.id}</span>
            </div>
            <div className="partition-product bg-dark">
                <div className="product-divider">
                    <div className="sort-by-section bg-dark">
                        <div className="tittle-sort-by">
                            <span>Sort By : </span>
                        </div>
                        <button className='sort-by-btn spacer' onClick={high_low}>Price : High to Low</button>
                        <button className='sort-by-btn spacer' onClick={low_high}>Price : Low to High</button>
                    </div>
                    <div className='feature-bar bg-dark center-all' key={product_data} style={{
                        margin: 0,
                        padding: "2px 50px",
                    }}>
                        <div className="feature-outer-cont">
                            <div className="feature-inner" key={state}>
                                {
                                    product_data.slice((page - 1) * 9, Math.min(product_data.length, page * 9)).map((element) => {
                                        return   <Link  to="/product/detail">
                                       <SingleProduct key={element.id} product_id={element.id} product_img={element.image_1} product_name={element.name} product_price={element.price}  />
                                        </Link>
                                    })

                                }
                            </div>
                        </div>
                        <Pagination className='spacer-page' page={page} onChange={handleChange} count={Math.ceil(product_data.length / 9)} color="primary" />
                    </div>
                </div>
                <form className="filters-product bg-dark">
                    <div className="filter-info">
                        <div className="tittle-filter">
                            <span>Filters</span>
                        </div>
                        <div className="all-filters">
                            <div className="box-filter-typ">
                                <a href="#0">All</a>
                                <p>{product_data.length}</p>
                            </div>
                            <div className="box-filter-typ">
                                <a href="#0">New</a>
                                <p>230</p>
                            </div>
                            <div className="box-filter-typ">
                                <a href="#0">Old</a>
                                <p>230</p>
                            </div>
                        </div>
                    </div>
                    <div className="filter-info">
                        <div className="tittle-filter">
                            <span>Brands</span>
                        </div>
                        <div className="all-filters">
                            {
                                company.map((element, index) => {
                                    return (<div className="box-filter-typ2">
                                        <FormGroup>
                                            <FormControlLabel key={index} control={<Checkbox sx={{
                                                color: grey[200],
                                                '&.Mui-checked': {
                                                    color: grey[300],
                                                },
                                            }} defaultChecked />} label={element} />
                                        </FormGroup>
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                    <div className="filter-info">
                        <div className="tittle-filter">
                            <span>Ratings</span>
                        </div>
                        <div className="all-filters">
                            {
                                stars.map((element, index) => {
                                    return (<div className="box-filter-typ2">
                                        <FormGroup>
                                            <FormControlLabel key={index} control={<Checkbox sx={{
                                                color: grey[200],
                                                '&.Mui-checked': {
                                                    color: grey[300],
                                                },
                                            }} />} label={
                                                <React.Fragment>
                                                    <img src={element} key={index} className="profile-img" width="80px" height="auto" style={{ marginRight: "5px" }} />
                                                </React.Fragment>
                                            } />
                                        </FormGroup>
                                    </div>)
                                })
                            }
                        </div>
                    </div>
                    <div className="filter-info">
                        <div className="tittle-filter">
                            <span>Price</span>
                        </div>
                        <div className="all-filters">
                            <Box sx={{ width: 300 }}>
                                <Slider
                                    getAriaLabel={() => 'Temperature range'}
                                    value={value}
                                    onChange={handleChange2}
                                    valueLabelDisplay="auto"
                                    max={25000}
                                    getAriaValueText={valuetext}
                                />
                                <div className="input-filters">
                                    <div className="min column">
                                        <span>Min</span>
                                    </div>
                                    <div className="max column">
                                        <span>Max</span>
                                    </div>
                                </div>
                                <div className="input-filters">
                                    <input type="number" className='inp' onChange={handleChange3} value={value[0]} placeholder='Min' />
                                    <input type="number" onChange={handleChange4} value={value[1]} className='inp' placeholder='Max' />
                                </div>
                            </Box>
                        </div>
                    </div>
                    <div className="btn-apply-reset">
                        <button className='btn btn-filter default-bg'>Apply</button>
                        <button type='reset' className='btn btn-filter white-bg'>Reset</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}
