import { dividerClasses } from '@mui/material'
import React,{useEffect} from 'react'
import './blog.css'
import { Footer } from '../Common/Footer/Footer'
import { Link } from 'react-router-dom'
import { Blogcard } from '../Cards/Blogcard'
import { Groupdiscuss } from '../Cards/groupdiscuss'
import logo1 from '../../../assets/img/mentor/New folder/Rectangle 8.png'
import logo2 from '../../../assets/img/mentor/New folder/Rectangle 9.png'
// import { Blogcard } from '../../Cards/Blogcard'
import axios from 'axios'
import { Nav } from '../Common/Navbar/nav'

let usefuldata = [
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aut,",
        "date": "10/02/2021",

    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aut, minus",
        "date": "10/02/2021",

    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aut, minus, ",
        "date": "10/02/2021",

    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aut,",
        "date": "10/02/2021",

    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aut, minus",
        "date": "10/02/2021",

    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aut, minus, ",
        "date": "10/02/2021",

    }


]


export const Blog = () => {
    const [data, setData] = React.useState([]);
    const loadData = async () => {
        let info = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/blog/all`);
        if (data.length == 0) {
            info = info.data
            for (let i = 0; i < info.length; i++) {
                info[i] = {
                    "id": info[i].id,
                    "product_img": "https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg",
                    "name": info[i].topic,
                    "date": new Date(info[i].updatedAt).toLocaleDateString(),
                }
            }
            console.log(info)
            setData(info);
        }
    }
    useEffect(() => {
        loadData();
    }, [data])

    const handleSearch = async (e) => {
        let data = new FormData(e.currentTarget);
        let info = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/blog/all`);
        if (data.length == 0) {
            info = info.data
            for (let i = 0; i < info.length; i++) {
                info[i] = {
                    "id": info[i].id,
                    "product_img": "https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg",
                    "name": info[i].topic,
                    "date": new Date(info[i].updatedAt).toLocaleDateString(),
                }
            }
            console.log(info)
            setData(info);
        }
    }
    
    const [active, setactive] = React.useState('mentor');
    const [style1, setstyle] = React.useState('mentor1')
    return (
        <>
          <Nav />
            <section className='main-mentors-section'>

                <div className='inner-mentors-section'>
                    <div className='top-section-mentors modify-blog-top'>
                        <div className='upper-part-mentors'>
                            <h2 className='no-underline'  >Blogs</h2>

                        </div>
                        <div className='lower-part-mentors' >

                            <p className='white'>Lorem ipsum dolor sit amet copossimus velit dicta.</p>
                        </div>
                    </div>

                    <div className='blog-main-section'>
                        <div className='main-mentor-cont'>
                            {
                                usefuldata.map((element) => {
                                    return (<Blogcard id={element.id} name={element.name} date={element.date} image1={logo2} image={logo1} />)
                                })
                            }
                            <div className='load-more-btn'><button className='knowmentor-button'>LOAD MORE MENTORS</button></div>
                        </div>
                        
                        <form onSubmit={handleSearch} className='side-blog-search'>
                            <h2>Topics</h2>
                            <input name="search" type="text" placeholder='Search topic' />
                            <button type="submit" className='submit-btn-search modify-search'>Search</button>
                        </form>
                    </div>








                </div>
            </section>

            <Footer />
        </>
    )
}
