import React, { useEffect } from 'react'
import logo1 from '../../../assets/img/mentor/New folder/Untitled.png'
import './Mentorcard.css'



export const Groupdiscuss=(props)=>{

    return(
        <div className='groupdis-div'>
        <img src={props.image} alt="" />
        <h2 className='groupdis-div-head1'>{props.topic}</h2>
        
        <h3 className='groupdis-div-head2'>Date - {props.date}</h3>
        <div className='inner-groupdis'>
        <img src={props.image1} alt="" />
        <div>
            <h4>{props.name}</h4>
            <h5>{props.position}</h5>
        </div>
        
        </div>


    </div>
    )
}
