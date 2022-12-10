import React from 'react'
import { Link } from 'react-router-dom'
import fb from '../../../../assets/img/social/fb.png'
import gg from '../../../../assets/img/social/gg.png'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router-dom";
import { Register1 } from './Register1';
// import { GoogleLogin } from 'react-google-login';
// import { googleSignIn } from '../../firebase/auth/auth'
import { loginwithgoogle } from '../../../firebase/firebase'

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
export const Login = (props) => {
    let nav = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    const [password, setpassword] = React.useState('')
    const [email, setName] = React.useState('')
    let responsedata = []


    const handlelogin = (event) => {

        event.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, {
            email: email,
            password: password

        }).then(response => {
            console.log(response)
            responsedata = response.data.token;
            checkuser()
        })
            .catch(function (error) {
                alert(error.response.data.message);
            });
        nav('/mentor')
    }

    const checkuser = () => {

        if (responsedata.length > 100) {
            alert("login sucessful")

            localStorage.setItem('token', responsedata);
            window.location.reload();
        }
        else {
            alert("Invalid ")
            // alert(responsedata.length)
        }
    }






    return (
        <div className="container-modal">
            <div className="modal-info ">
                <div className="head-info">
                    <span>Login</span>
                </div>
                <div className="para-info">
                    Get access to your
                    Order, Wishlist
                    and Recommendation.
                </div>
            </div>
            <div className="modal-main">
                <form className='modal-form'>
                    <div className="input-modal">
                        <label htmlFor="">Enter Email</label>
                        <input required type="email" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="input-modal">
                        <label htmlFor="">Enter Your Password</label>
                        <input required type="password" onChange={(event) => setpassword(event.target.value)} />
                        <label htmlFor="" className='forgot'>Forgot your password?</label>
                    </div>
                    <div className="submit-btn">
                        <button className='modal-submit-btn' onClick={handlelogin}>Login</button>
                    </div>
                </form>
                <div className="or-login-with">
                    <div className="text-this">
                        <span>Or Login with</span>
                    </div>
                    <div className="login-section">
                        <a href="#0"><img src={fb} alt="" /></a>

                        <img src={gg} alt="" onClick={() => loginwithgoogle()} />
                    </div>
                </div>
                <div className="new-here">
                    <a href="#0" onClick={() => {
                        handleOpen()
                    }}>New here? Create Account</a>
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Register1 close={handleClose} />
                    </Box>
                </Modal>
            </div>
        </div>
    )
}
