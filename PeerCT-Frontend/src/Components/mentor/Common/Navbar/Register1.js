import React from 'react'
import { Link } from 'react-router-dom'
import fb from '../../../../assets/img/social/fb.png'
import gg from '../../../../assets/img/social/gg.png'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Register2 } from './Register2';
import { registerwithgoogle } from '../../../firebase/firebase';


import axios from 'axios';
// axios.defaults.withCredentials = true;


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

axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/college/all/`)
    .then((response) => {
        usefuldata = response.data;

        // console.log(usefuldata)

    })
    .catch((error) => {

        console.log(error);
})



export const Register1 = (props) => {
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')
    const [college, setCollege] = React.useState([])
    console.log(college)



    // React.useEffect(() => {
    //     Collegefun();
    // }, []);

    let name1=''



    console.log(usefuldata)
    const handleregister = () => {
        // alert("adsf")
        localStorage.setItem('email', email);
        localStorage.setItem('tempname', name);
        localStorage.setItem('collegeid',college)

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/OTP/request`, {
            email: email
          })
          .then(function (response) {
            alert(response.data);
            
          })
          .catch(function (error) {
            console.log(error);
          });



        setOpen(true)

    }
     console.log(name1)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="container-modal">
            <div className="modal-info ">
                <div className="head-info">
                    <span>Register</span>
                </div>
                <div className="para-info">
                    Sign up with mobile
                    number to get started.
                </div>
            </div>
            <div className="modal-main">
                <form className='modal-form'>
                    <div className="input-modal">
                        <label htmlFor="">Enter Email/Mobile number</label>
                        <input required onChange={(event) => setEmail(event.target.value)} type="email" />
                        {/* <label htmlFor="" className='forgot'>By Continuing , you agree Terms of Use</label> */}
                    </div>

                    <div className="input-modal">
                        <label htmlFor="">Enter Name</label>
                        <input  required onChange={(event) => setName(event.target.value)} type="text" />

                    </div>

                    <div className="input-modal">
                        <label htmlFor="">select your college</label>
                        <select name="days" id="" onChange={(event) => setCollege(event.target.value)}>
                        <option   disabled selected hidden>Please select your college</option>
                            
                            {usefuldata.map(day => (
                                <option key={day.key} value={day.id}>
                                    {day.name}
                                </option>
                            ))}

                           
                        </select>

                    </div>
                    <div className="submit-btn">
                        <button type='reset' className='modal-submit-btn' onClick={handleregister}>Register</button>
                    </div>
                    <div className="submit-btn">
                        <button type='reset' className='modal-submit-btn' onClick={() => {
                            props.close()
                        }}>Existing User Login</button>
                    </div>
                </form>
                <div className="or-login-with">
                    <div className="text-this">
                        <span>Or continue with</span>
                    </div>
                    <div className="login-section">
                        <a href="#0"><img src={fb} alt="" /></a>
                        <img src={gg} alt="" onClick={()=>registerwithgoogle()} />
                    </div>
                </div>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Register2 close={handleClose} />
                </Box>
            </Modal>
        </div>
    )
}
