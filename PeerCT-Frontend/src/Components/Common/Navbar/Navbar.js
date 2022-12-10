import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faCartShopping, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../assets/img/horizontal-logo.png'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Login.css'
import { Login } from './Login'
import { College } from './college'

import axios from 'axios';
import { AlertTitle } from '@mui/material'


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


export const Navbar = () => {
    const [searchword, setsearch] = useState();
    const getuser = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user/`, { headers: { "Authorization": `Bearer ${localStorage.getItem('token')}` } })
        .then(res => {

            localStorage.setItem('name1', res.data.user.name);
            localStorage.setItem('college_id', res.data.user.college_id)
            setusername(res.data.user.name)
            localStorage.setItem('userData', JSON.stringify(res.data))
        }).catch((error) => {
            console.log(error)
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
    const handleLogout = () => {
        localStorage.clear();
        <Link to="/" />

    }

    const handlecart = () => {
        if (!localStorage.getItem('name')) {
            handleOpen()
        }
    }

    const [login, setlogin] = React.useState(login_name);
    const handlesearch = (event) => {
        localStorage.setItem('searchkey', searchword);
        flg = true;
        localStorage.setItem('searchbutton', flg);


    }
    return (


        <div className='navbar'>

            <div className='logo-space'>
                <img src={logo} alt="" />
            </div>
            <div className="search-tab">
                <input type="text" name="search" placeholder='Search' id="" onChange={(event) => setsearch(event.target.value)} />

                <Link to={'/product/'}>
                    <button type='submit' onClick={() => handlesearch()}> submit</button>
                </Link>
            </div>
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
            <div className="button-section">
                <div className="login-btn btn">




                    {/* <button onClick={handleOpen}>{login}</button> */}
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


                {!localStorage.getItem('name1') ?
                    <div className="sell-btn btn">	 <button onClick={handlecart}>Sell</button> </div> :
                    <div className="sell-btn btn">
                        <button> <Link to="/post-ads" style={{ color: "white" }}>Sell</Link></button>

                    </div>}
                <div class="dropdown">
                    <button class="dropbtn">More
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Customer Support</a>
                        <a href="#">Feedback</a>
                        <a href="#" >Become a seller</a>
                    </div>
                </div>
                {/* <div className="more-btn btn">
                    <button>More</button>
                </div> */}
            </div>
            <div className="cart-location">
                <div className="location space-nav">
                    <FontAwesomeIcon className='icon' icon={faLocationDot} />
                    <div className="txt" onClick={() => handlelocationClose()}>location</div>

                    <Modal
                        open={collegeopen}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <College close={handleClose} />
                        </Box>
                    </Modal>



                </div>
                <div className="shop-cart space-nav">
                    <FontAwesomeIcon className='icon' icon={faCartShopping} />

                    {!username ?
                        <button className="txt" style={{ backgroundColor: "black" }} onClick={handlecart}>cart</button> :
                        <Link to="/cart" className="txt" >cart</Link>}


                </div>
            </div>
        </div>
    )
}
