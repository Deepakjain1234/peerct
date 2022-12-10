import React,{useState} from 'react'
import './style.css'
import { Navbar } from '../Common/Navbar/Navbar'
import { Footer } from '../Common/Footer/Footer'
import Avatar from '@mui/material/Avatar';
import acc from '../../assets/img/acc_setting.png'
import { Link } from 'react-router-dom';
import { ProductDashboard } from './ProductDashboard';
import { ManageAddress } from './ManageAddress';
import axios from 'axios';


let token=localStorage.getItem('token')
let useful=[]


axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user/`, { headers: { "Authorization": `Bearer ${token}` } })
.then(res => {
    console.log(res.data)
    useful=res.data.user;
    // setuser(useful)
    

    alert(res.data.user.name)
    
    .catch((error) => {
         
        console.log(error)
        alert(error)
    });
});




export const UserDetails = () => {
    const [userDetails, setuserDetails] = useState({
        'img': 'https://mui.com/static/images/avatar/1.jpg',
        'name': 'Mihir Waykole',
        'email': 'waykole.mihir1703@gmail.com',
        'mobile_no': '9753564260'
    })





    // const fetchapi=()=>
    // {
    //     axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user/`, { headers: { "Authorization": `Bearer ${token}` } })
    //     .then(res => {
    //         console.log(res.data)
    //         useful1=res.data.user;
    //         setuser(useful1)
            

    //         alert(res.data.user.name)
            
    //         .catch((error) => {
                 
    //             console.log(error)
    //             alert(error)
    //         });
    //  });
    // }

    // const[useful,setuser]=React.useState([])

    // React.useEffect(()=>{
    //     fetchapi()
        
    // })


    console.log(useful)

    const handleedit=()=>
    {
        alert("adsf")
        // useful=[]
    }
    return (
        <>
            <Navbar />
            <div className="user-info-section">
                <div className="info-main">
                    <div className="left-user">
                        <div className="img-user">
                            <Avatar alt="Remy Sharp" src={userDetails.img} />
                            <div className="name-img">
                                <h1>Hello,</h1>
                                <span>{useful.name}</span>
                            </div>
                        </div>
                        <div className="account-settings">
                            <img src={acc} alt="" />
                            <Link to={'#0'}>Profile Information</Link>
                            <Link to={'#0'}>Manage Address</Link>
                            <Link to={'#0'}>Product Dashboard</Link>
                        </div>
                    </div>
                    <div className="personal-info">
                        <form className="personal-info">
                            <div className="tittle">
                                <span>Personal Information</span>
                            </div>
                            <div className="name-section inputs-user"><div className='common-labels'>
                                <label htmlFor="">Name</label>
                                <label className='last' htmlFor="" onClick={handleedit}>edit</label></div>
                                <div className="inp-name">
                                    <input type="text" name="" id="" value={useful.name.split(' ')[0]} />
                                    <input type="text" name="" id="" value={useful.name.split(' ')[1]} />
                                </div>
                            </div>
                            <div className="name-section inputs-user"><div className='common-labels'>
                                <label htmlFor="">Email Address</label>
                                <label className='last' htmlFor="" onClick={handleedit}>edit</label></div>
                                <div className="inp-name">
                                    <input type="text" name="" id="" value={useful.email} />
                                </div>
                            </div>
                            <div className="name-section inputs-user"><div className='common-labels'>
                                <label htmlFor="">Mobile Number</label>
                                <label className='last' htmlFor="" onClick={handleedit}>edit</label></div>
                                <div className="inp-name">
                                    <input type="text" name="" id="" value={useful.contact} />
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <ProductDashboard /> */}
                    {/* <ManageAddress /> */}
                </div>
            </div>
            <Footer />
        </>
    )
}