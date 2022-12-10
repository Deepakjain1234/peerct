import React, { useEffect, useState } from "react";
import "./mentorreg.css";
import axios from "axios";
import Select from "react-select";
import { Link } from 'react-router-dom';
import { Navbar } from "../Common/Navbar/Navbar";


export const Registermentor4=()=>
{
    const [language,setlanguage]=useState();
    const [intro,setintro]=useState();
    const handlenext=()=>
    {
        localStorage.setItem('mentorlanguage',language);
        localStorage.setItem('mentoreintro',intro);
        
    }
    return(
       
        <>
        <Navbar/>
        <section className='register-mentor-main'>
            <div className='inner-reister-mentor'>
                <div className='upper-mentor-reg'>
                    <div>
                    <h4>Step 4 of 5</h4>
                    <h2>Heading</h2>
                    </div>
                    
                </div>
                <div className='midle-mentor-reg'>
                    <div><p>Select you prefered Language</p>
                    <select name="" id="" onChange={(event) => setlanguage(event.target.value)}>
                               
                    <option disabled selected hidden>select your Language</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                        
                               
                               
                           </select></div>
                    <div><p>how would you like to interduced</p>
                    <textarea name="" id="" cols="30" rows="20" onChange={(event)=>setintro(event.target.value)}></textarea></div>
                    
                   
                </div>
                <div className='lower-mentor-reg'>
                <Link to='/mentor/registermentor3'><h2>Back</h2></Link>
                <Link to='/mentor/registermentor5'><button onClick={() => handlenext()}>Next</button></Link>
                </div>

            </div>
        </section>
        </>
    )
}