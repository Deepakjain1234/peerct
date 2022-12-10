import React, { useEffect, useState } from 'react'
import img1 from '../../../../assets/img/social/alarm.png'
import img2 from '../../../../assets/img/social/setting.png'
import img3 from '../../../../assets/img/social/messege.png'
import img4 from '../../../../assets/img/social/Rectangle 27.png'
import logo from '../../../../assets/img/horizontal-logo.png'
import axios from "axios";
import './createsession.css'
import { Link } from 'react-router-dom'




export const Createsession2 = () => {
  const [sessiondate,setdate]=useState();
  const [sessiontime,settime]=useState();
  const [sessionduration,setduration]=useState();
  const [sessionmeet,setmeet]=useState();
  const [sessiontopic,settopic]=useState();
  const [sessionattendence,setattendence]=useState();


  const handlesubmit=()=>{
    alert("af")
    let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJuYW1lIjoiZGVlcGFrIiwiZW1haWwiOiIxNSIsImNvbnRhY3QiOm51bGwsImNpdHkiOm51bGwsInN0YXRlIjpudWxsLCJhZGRyZXNzIjpudWxsLCJ1c2VyX2lkIjpudWxsLCJjb2xsZWdlX2lkIjpudWxsLCJ0eXBlIjpudWxsLCJncmFkX3llYXIiOm51bGwsInBhc3N3b3JkIjoiJDJiJDA1JDJiM2I1eWJZMlg5V3hRNWEuYVMvOWVLcTFwWkFETDRNbDNKcjhyWGQ4anJWODZJekZvVzUyIiwiY3JlYXRlZEF0IjoiMjAyMi0wNi0yMFQxODo0NzoxMS41MzBaIiwidXBkYXRlZEF0IjoiMjAyMi0wNi0yMFQxODo0NzoxMS41MzBaIn0sImlhdCI6MTY1NTc1MTUzM30.JdhbPUMRHeCtBpwnIXGMYSNX_jOuhqtn7OsPE2wSXzE'
    const config = {
      headers: { Authorization: `Bearer ${token}` }
  };
  let title=localStorage.getItem('sessionname');
  let intro=localStorage.getItem('sessionintro');
  

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/groupSession/create`, {
      topic: title,
      duration:parseInt(sessionduration),
      start_time:sessiontime,
      price:234,
      date:sessiondate,
      description:intro,
      currently_registered:0,
      attendance_limit:parseInt(sessionattendence),
      mentor_id:1
  
    },config)
    .then(function (response) {
      alert("Apply sucessfully ! Wait for approve")
      
    })
    .catch(function (error) {
      console.log(error);
    });
  
  }

  return (
    <>
      <section>
        <div className='dashboard-navbar'>
          <img className='logo-img-size' src={logo} alt="" />
          <input type="text" placeholder='Search' />
          <div className='right-navbar'>

            <div className='navbar-icon-white'><img src={img1} alt="" /></div>
            <div className='navbar-icon-white'><img src={img2} alt="" /></div>
            <div className='navbar-icon-white'><img src={img3} alt="" /></div>
            <div className='avtar-icon'><img src={img4} alt="" /></div>
            <button>Create session</button>
          </div>

        </div>

        <div className='create-session-main'>
          <div className='create-session-inner'>
            <div className='back-box-upper'><h3>Back to Group Session</h3></div>
            <div className='create-session-head'><h2>Hey, Lets get started mentoring in groups</h2>

              <h5>What is this group session about?</h5></div>
            <div className='create-session-form'>
              <div className='create-session-form-upper'>
                <div className='create-session-left'>
                  <div className='create-session-input'>
                    <p>Date</p>
                    <input type="date" placeholder='Eg: Design review' onChange={(event)=>setdate(event.target.value)}/>
                  </div>
                  <div className='create-session-input'>
                    <p>Time</p>
                    <input type="time" placeholder='Eg: Design review' onChange={(event)=>settime(event.target.value)}/>
                  </div>
                  <div className='create-session-input'>
                    <p>Meet link</p>
                    <input type="text" placeholder='google-meet,zoom-meet' onChange={(event)=>setmeet(event.target.value)} />
                  </div>

                </div>
                <div className='create-session-right'>
                  <div className='create-session-input'>
                    <p>Select a topic of experties</p>
                    <input type="text" placeholder='Eg: Design review' onChange={(event)=>settopic(event.target.value)}/>
                  </div>
                  <div className='create-session-input'>
                    <p>Max attendees</p>
                    <input type="text" placeholder='Eg: 100,200' onChange={(event)=>setattendence(event.target.value)}/>
                  </div>
                  <div className='create-session-input'>
                        <p>Session Duration</p>
                        <input type="text" placeholder='Eg: 60min'onChange={(event)=>setduration(event.target.value)}/>
                    </div>

                </div>
              </div>
              <div className='create-session-lower'>
                <div>
                  <button className='back-button-create'> Back</button>
                  <button className='next-button-create' onClick={()=>handlesubmit()}>Next</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}