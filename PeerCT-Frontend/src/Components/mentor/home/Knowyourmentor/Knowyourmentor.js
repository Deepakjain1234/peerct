import React,{useEffect} from 'react'
import './Knowyourmentor.css'
import logo1 from '../../../../assets/img/mentor/New folder/Frame 445.png'
import logo2 from '../../../../assets/img/mentor/New folder/Vector 1.png'
import logo3 from '../../../../assets/img/mentor/New folder/Untitled3.png'
import { Mentorcard } from '../../Cards/Mentorcard'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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


]




export const Knowyourmentor = () => {
    let navigate = useNavigate()
    const [data, setData] = React.useState([]);
    const loadData = async () => {
        let info = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/mentor/all`);
        if (data.length == 0) {
            info = info.data.slice(0, 4);
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
    useEffect(() => {
        loadData();
    }, [data])


    return (
        <>

            <div className='knowyourmentor-section'>
                <div className='inner-knowyourmentor'>

                    <h2 className='knowmentor-heading'>KNOW YOUR MENTOR</h2>

                    <div className='knowyour-main'>
                        {
                            data.map((element) => {
                                return (<Mentorcard name={element.name} postion={element.postion} image1={logo1} image={logo2} />)
                            })
                        }
                    </div>

                    <button className='knowmentor-button' onClick={
                        () => {
                            navigate('/mentor/mentors')
                        }
                    }>Explore more</button>

                </div>
            </div>




        </>
    )
}