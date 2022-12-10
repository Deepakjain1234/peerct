import React, { useEffect, useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import { faCartShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../../assets/img/horizontal-logo.png'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Login.css'
import { Login } from './Login'
import { College } from './college'

import axios from 'axios';
import { AlertTitle } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';


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
let flg = true
let flg2 = false;
if (!localStorage.getItem('college_id')) {
    flg2 = true;
}



export const Nav=()=>
{
    const [searchword, setsearch] = useState();
    console.log(searchword);


    const getuser = () => {axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user/`, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
    .then(res => {
        // console.log(res.data)
        // alert("meesags")
        localStorage.setItem('name1', res.data.user.name);
        localStorage.setItem('college_id', res.data.user.college_id)
        setusername(res.data.user.name)


        // alert(res.data.user.name)


    }).catch((error) => {
        // alert("ewre")
        console.log(error)
        // alert(error)
    });
}
    getuser();
    const [open, setOpen] = React.useState(false);
    const [collegeopen, setcollegeOpen] = React.useState(flg2);
    const [username, setusername] = React.useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handlelocationClose = () => setcollegeOpen(true);
    var login_name = ''
    if (username != null) {
        login_name = username;
    }
    else {

        login_name = 'login'
    }
    // if(!localStorage.getItem('college_id'))
    // {
    //     setcollegeOpen(true);
    // }
    // else
    // {
    //     setcollegeOpen(false);

    // }
    // {!localStorage.getItem('college_id')?setcollegeOpen(true):setcollegeOpen(false)}

    const handleLogout = () => {
        localStorage.clear();
        <Link to="/" />

    }

    const handlecart = () => {
        if (!localStorage.getItem('name')) {
            // alert("kindly login")
            handleOpen()
        }
    }

    const [login, setlogin] = React.useState(login_name);

    console.log(localStorage.getItem('name1'));





    console.log(collegeopen)

  return(
    <>
    <section className="">
      <nav>
        <div className="logo">
        <img src={logo} alt="" />
        </div>
        <input
          className="menu-btn"
          type="checkbox"
         style={{display:"none"}}
          id="menu-btn"
        />

        <ul className="navbar">
          <li><div className="sell-btn btn">	<button>Home</button> </div></li>
          <li><div className="sell-btn btn">	 <button>Find a Mentor</button> </div></li>
         

          <li>       {!localStorage.getItem('name1') ?
                    <div className="sell-btn btn">	 <button onClick={handlecart}>Become a Mentor</button> </div> :
                    <div className="sell-btn btn">
                        <button> <Link to="/mentor/registermentor1" style={{ color: "white" }}>Become a Mentor</Link></button>

                    </div>}</li>
          <li>

          </li>
        </ul>

        <div className="loginanddot">
          <div className="login-panel">
          <div className="login-btn btn">

{<>
    {!username ?
        <button onClick={handleOpen}>Login</button> :
        <div class="dropdown">
            <button class="dropbtn">{username}
                <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
                {/* <a href="/user-detail">My Profile</a>
*/}
                <Link to="/user-detail">MY Profile</Link>
                <a href="#">Order</a>
                <a href="/" onClick={handleLogout}>Logout</a>
            </div>
        </div>}
</>}
</div>
          </div>
          <label className="menu-icon" for="menu-btn">
            <span className="nav-icon"></span>
          </label>
        </div>
      </nav>

      <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Login close={handleClose} />
                </Box>
            </Modal>
    </section>
    </>
  )
}