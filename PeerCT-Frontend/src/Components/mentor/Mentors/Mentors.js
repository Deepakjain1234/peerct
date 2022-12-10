import { dividerClasses } from '@mui/material'
import React, { useEffect } from 'react'
import './Mentors.css'
import { Footer } from '../Common/Footer/Footer'
import logo1 from '../../../assets/img/mentor/New folder/Frame 445.png'
import logo2 from '../../../assets/img/mentor/New folder/Vector 1.png'
import logo3 from '../../../assets/img/mentor/New folder/Rectangle 17.png'
import logo4 from '../../../assets/img/mentor/New folder/Rectangle 9.png'
import { Mentorcard } from '../Cards/Mentorcard'
import axios from 'axios'
import { Groupdiscuss } from '../Cards/groupdiscuss'
import { Nav } from '../Common/Navbar/nav'

let usefuldata = [
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Pratham patidar",
        "postion": "growth manager",
        "category": 'new',
        "brand": "lorem"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Pratham patidar",
        "postion": "growth manager",

        "category": 'new',
        "brand": "lorem"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Pratham patidar",
        "postion": "growth manager",

        "category": 'new',
        "brand": "lorem"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Pratham patidar",
        "postion": "growth manager",

        "category": 'new',
        "brand": "lorem"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Pratham patidar",
        "postion": "growth manager",
        "category": 'new',
        "brand": "lorem"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Pratham patidar",
        "postion": "growth manager",

        "category": 'new',
        "brand": "lorem"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Pratham patidar",
        "postion": "growth manager",

        "category": 'new',
        "brand": "lorem"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Pratham patidar",
        "postion": "growth manager",

        "category": 'new',
        "brand": "lorem"
    }



]

let usefuldata2 = [
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "topic": "topic",
        "date": "May 05 ,2022-06:30PM",
        "name": 'Pratham Patidar',
        "postion": "growth manager"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "topic": "topic",
        "date": "May 05 ,2022-06:30PM",
        "name": 'Pratham Patidar',
        "postion": "growth manager"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "topic": "topic",
        "date": "May 05 ,2022-06:30PM",
        "name": 'Pratham Patidar',
        "postion": "growth manager"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "topic": "topic",
        "date": "May 05 ,2022-06:30PM",
        "name": 'Pratham Patidar',
        "postion": "growth manager"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "topic": "topic",
        "date": "May 05 ,2022-06:30PM",
        "name": 'Pratham Patidar',
        "postion": "growth manager"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "topic": "topic",
        "date": "May 05 ,2022-06:30PM",
        "name": 'Pratham Patidar',
        "postion": "growth manager"
    },






]



export const Mentors = () => {
    const [data, setData] = React.useState([]);
    const [data2, setData2] = React.useState([]);
    const [search, setSearch] = React.useState(0);
    const [search2, setSearch2] = React.useState(0);
    const loadData = async () => {
        let info = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/mentor/all`);
        if (data.length == 0) {
            info = info.data
            for (let i = 0; i < info.length; i++) {
                info[i] = {
                    "id": info[i].id,
                    "product_img": info[i].product_img,
                    "name": info[i].name,
                    "postion": info[i].role,
                }
            }
            console.log(info)
            setData(info);
        }
    }
    const loadData2 = async () => {
        let info = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/groupSession/all`);
        if (data2.length == 0) {
            info = info.data
            for (let i = 0; i < info.length; i++) {
                info[i] = {
                    "topic": info[i].topic,
                    "postion": info[i].peerCTMentor.role,
                    "name": info[i].peerCTMentor.name,
                    "date": info[i].date,
                }
            }
            console.log(info)
            setData2(info);
        }
    }
    useEffect(() => {
        if (search == 0) {
            loadData();
        }
        if (search2 == 0) {
            loadData2();
        }
    }, [data, search])
    
    const handleSearch = async (e) => {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        let info = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/mentor/search?name=` + data.get('name') + '&role=' + data.get('role') + '&company=' + data.get('company'));
        info = info.data
        for (let i = 0; i < info.length; i++) {
            info[i] = {
                "id": info[i].id,
                "product_img": info[i].product_img,
                "name": info[i].name,
                "postion": info[i].role,
            }
        }
        setSearch(1);
        setData(info);
    }
    const handleSearch2 = async (e) => {
        e.preventDefault();
        let data = new FormData(e.currentTarget);
        let url = `${process.env.REACT_APP_BACKEND_URL}/api/groupSession/search?name=` + data.get('name') + '&topic=' + data.get('topic');
        let info = await axios.get(url);
        info = info.data
        for (let i = 0; i < info.length; i++) {
            info[i] = {
                "topic": info[i].topic,
                "postion": info[i].peerCTMentor.role,
                "name": info[i].peerCTMentor.name,
                    "date": info[i].date,
            }
        }
        setSearch2(1);
        setData2(info);
    }

    const [active, setactive] = React.useState('mentor');
    const [style1, setstyle] = React.useState('mentor1')

    return (
        <>
           <Nav />
            <section className='main-mentors-section'>

                <div className='inner-mentors-section'>
                    <div className='top-section-mentors'>
                        <div className='upper-part-mentors'>
                            <h2 onClick={() => setactive('mentor')}>Mentors</h2>
                            <h3 onClick={() => setactive('group')}>Group sessions</h3>
                        </div>

                        {active === 'mentor' && <div className='lower-part-mentors' >
                            <form onSubmit={handleSearch}>
                                <input name="name" type="text" placeholder='Search by name' />
                                <input name="role" type="text" placeholder='Search by role' />
                                <input name="company" type="text" placeholder='Search by company' />
                                <button type="submit" className='submit-btn-search'>Search</button>
                            </form>
                            <select name=" What we offer" id="">
                                <option value="" disabled selected hidden>What we offer</option>
                            </select>
                            <select name=" What we offer" id="">
                                <option value="" disabled selected hidden>domain</option>
                            </select>
                            <select name=" What we offer" id="">
                                <option value="" disabled selected hidden>exprience</option>
                            </select>
                        </div>}

                        {active === 'group' && <div className='lower-part-mentors' >
                            <form onSubmit={handleSearch2}>
                            <input name="name" type="text" placeholder='Search by host' />
                            <input name="topic" type="text" placeholder='Search by topic' />
                            <button type="submit" className='submit-btn-search'>Search</button>
                            </form>
                            <select name=" What we offer" id="">
                                <option value="" disabled selected hidden>topic</option>
                            </select>

                        </div>}


                    </div>


                    {active === 'mentor' && <div className='main-mentor-cont'>
                        {
                            data.map((element) => {
                                return (<Mentorcard name={element.name} position={element.postion} image1={logo1} image={logo2} />)
                            })
                        }
                        <div className='load-more-btn'><button className='knowmentor-button'>LOAD MORE MENTORS</button></div>
                    </div>
                    }
                    {active === 'group' && <div className='main-mentor-cont'>
                        {
                            data2.map((element) => {

                                return (<Groupdiscuss topic={element.topic} position={element.postion} name={element.name} date={element.date} image1={logo4} image={logo3} />)

                            })
                        }
                        <button className='knowmentor-button'>LOAD MORE SESSION</button>
                    </div>
                    }












                </div>
            </section>

            <Footer />
        </>
    )
}
