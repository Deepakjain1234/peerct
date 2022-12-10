import React, { useEffect } from 'react'
import logo1 from '../../../assets/img/mentor/New folder/Untitled.png'
import './Mentorcard.css'



export const Mentorcard1=(props)=>{

    return(
        <div className='mentorcard-div' id='modify-network-card'>
        <img src={props.image} alt="" />
        <h2 className='mentorcad-div-head1'>{props.name}</h2>
        <h3> {props.position}</h3>
        <button className='network-mentor-card-btn'>Visit profile</button>


    </div>
    )
}
