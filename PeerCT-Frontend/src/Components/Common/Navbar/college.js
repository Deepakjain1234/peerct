import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import fb from '../../../assets/img/social/fb.png'
import gg from '../../../assets/img/social/gg.png'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Register1 } from './Register1';
import { GoogleLogin } from 'react-google-login';
import {googleSignIn} from '../../firebase/auth/auth'
import {loginwithgoogle} from '../../firebase/firebase'


import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    height: '80vh',
    bgcolor: '#232323',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
    overflow: 'hidden',
};

let usefuldata=[]




export const College = (props) => {
    const [open, setOpen] = React.useState(true);
    const [college, setCollege] = React.useState([])
    const [allcollege,setallcollege] =React.useState([])

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);
    console.log(college);

    const handlecollege=()=>
    {
        alert(college)
        localStorage.setItem('college_id', college);
        window.location.reload();

    }

    const collegeapi=()=>
    {
 
     axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/college/all/`)
    .then((response) => {
        usefuldata = response.data;
        setallcollege(response.data)

    })
    .catch((error) => {

        console.log(error);
})
    }

    useEffect(()=>{
    collegeapi()
        
    },[])

    return (

    
        <div className="container-modal">

            <div className="modal-main">
                <div><h1>Where do you want to sell/buy product?</h1></div>
                <div><h2>To enjoy all that we offer,we need to know Where to look for them</h2></div>
                <div>College Name</div>

                <div className="input-modal">
                        <label htmlFor="">select your college</label>
                        <select name="days" id="" onChange={(event) => setCollege(event.target.value)}>
                        <option   disabled selected hidden>Please select your college</option>
                            {allcollege.map(day => (
                                <option key={day.key} value={day.id}>
                                    {day.name}
                                </option>
                            ))}

                           
                        </select>

                </div>
                <button onClick={()=>handlecollege()}>Conform Your college</button>
                


            </div>
        </div>


    )
}
