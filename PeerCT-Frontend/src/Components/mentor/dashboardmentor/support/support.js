import React,{useEffect,useState} from 'react'
import './support.css'
// import { Upcoming } from './upcoming'
// import { Completed } from './networkmentor'
import { Mentorcard1 } from '../../Cards/Mentorcard1'
import logo1 from '../../../../assets/img/mentor/New folder/Frame 445.png'
import logo2 from '../../../../assets/img/mentor/New folder/Vector 1.png'
import axios from 'axios';


export const Support=()=>
{
    const [name,setname]=useState();
    const [messege,setmessege]=useState();
    
    const handlesendmess=()=>
    {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/support/add`, {
            name: name,
            messege: messege
          })
          .then(function (response) {
            alert("messege send sucessfully")
            
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    

    const [active,setactive]=React.useState("upcoming")
    return(
        <>
        <section className='main-booking-dash'>
            <div className='booking-main-head' id='my-network-head'>
                <h2>Support</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, architecto </p>
            </div>
            <div className='support-main-content'>
                <input type="text" placeholder='Name' onChange={(event) => setname(event.target.value)}/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Messege' onChange={(event) => setmessege(event.target.value)}></textarea>
                <button onClick={()=>handlesendmess()}>Send messege</button>
            </div>
            
           
            
        </section>
        </>
    )
}