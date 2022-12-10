import React, { useEffect, useState } from "react";
import "./mentorreg.css";
import axios from "axios";
import Select from "react-select";
import { Link } from 'react-router-dom'
import { Navbar } from "../Common/Navbar/Navbar";

export const Registermentor2 = () => {
    const [domain, setdomain] = useState();
    const [experience, setexperience] = useState();
    const [skill, setskill] = useState();

    const handlenext=()=>
    {
        localStorage.setItem('mentordomain',domain);
        localStorage.setItem('mentorexperience',experience);
        localStorage.setItem('mentorskill',skill);
    }
    return (
        <>
            <Navbar />
            <section className='register-mentor-main'>
                <div className='inner-reister-mentor'>
                    <div className='upper-mentor-reg'>
                        <div>
                            <h4>Step 2 of 5</h4>
                            <h2>Heading</h2>
                        </div>

                    </div>
                    <div className='midle-mentor-reg'>
                        <div><p>Which domain do you like to mentor</p>

                            <select onChange={(event) => setdomain(event.target.value)}>
                                <option disabled selected hidden>select your domain</option>

                                <option value="">Design</option>
                                <option value="product management">product management</option>
                                <option value="softwere development">softwere development</option>
                                <option value="product research">product research</option>
                                <option value="core">core</option>

                            </select> </div>
                        <div><p>What is level of your experience</p>
                            <select name="" id="" onChange={(event) => setexperience(event.target.value)}>
                                <option disabled selected hidden>select your level</option>
                                <option value="3">junior role(Fresher-3 year of experience)</option>
                                <option value="6">senior role(4-6 year of experience)</option>
                                <option value="10">Lead role(7-10 year of experience)</option>
                                <option value="11">director/management role(10+ year of experience)</option>


                            </select>
                        </div>
                        <div><p> Skills(s) you would like to mentor</p>
                            <select name="" id="" onChange={(event) => setskill(event.target.value)}>
                                <option disabled selected hidden>select your skill</option>

                                <option value="Leadership">Leadership</option>
                                <option value="job search">job search</option>
                                <option value="career advise">career advise</option>
                                <option value="skills">skills</option>

                            </select>
                        </div>


                    </div>
                    <div className='lower-mentor-reg'>
                        <Link to='/mentor/registermentor1'><h2>Back</h2></Link>
                        <Link to='/mentor/registermentor3'><button onClick={() => handlenext()}>Next</button></Link>
                    </div>

                </div>
            </section>
        </>
    )
}