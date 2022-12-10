import React from 'react'
import { Link } from 'react-router-dom'
import fb from '../../../../assets/img/social/fb.png'
import gg from '../../../../assets/img/social/gg.png'
import axios from 'axios';
import { registerwithgoogle } from '../../../firebase/firebase';
// axios.defaults.withCredentials = true;

export const Register2 = (props) => {
    const [open, setOpen] = React.useState(false);
    const [mobile, setmobile] = React.useState('')
    const [otp, setotp] = React.useState('')
    const [password, setpassword] = React.useState('')

    console.log(mobile);
    console.log(otp);
    console.log(password);

    const handleregister=()=>{
        // alert("adsf")
      let  email=localStorage.getItem('email');
      let username=localStorage.getItem('tempname')
      let collegeid=localStorage.getItem('collegeid')
        localStorage.clear();

        localStorage.setItem('name',email)
                
        localStorage.setItem('id',password)

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/register`, {
            email: email,
            contact: mobile,
            password:password,
            name:username,
            college_id:parseInt(collegeid)
          })
          .then(function (response) {
            console.log(response.data);
            window.location.reload();
          })
          .catch(function (error) {
            console.log(error);
          });
          setOpen(false)
       
        
    }

    const verifyotp=()=>
    {
      let  email=localStorage.getItem('email');


        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/OTP/verify`, {
            email:email,
            otp: otp
          })
          .then(function (response) {
            alert(response.data);
            
          })
          .catch(function (error) {
            alert(error);
          });

    }

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
                        <label htmlFor="">Mobile Number</label>
                        <input required  type="number" onChange={ (event) => setmobile(event.target.value) } />
                    </div>
                    <div className="input-modal">
                        <label htmlFor="">OTP sent to mobile</label>
                        <input required type="text" onChange={ (event) => setotp(event.target.value) } />
                        <button onClick={()=>verifyotp()}>verify otp</button>
                    </div>
                    
                    <div className="input-modal">
                        <label htmlFor="">Set Password</label>
                        <input required type="password" onChange={ (event) => setpassword(event.target.value) } />
                    </div>
                    <label htmlFor="" className='forgot'>By Continuing , you agree Terms of Use</label>
                    <div className="submit-btn">
                        <button className='modal-submit-btn' onClick={handleregister}>Register</button>
                    </div>
                    <div className="submit-btn">
                        <button className='modal-submit-btn' onClick={() => {
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
        </div>
    )
}
