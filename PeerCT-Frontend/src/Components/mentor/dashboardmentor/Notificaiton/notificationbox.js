import React,{useEffect} from 'react'
import './booking.css'
import img1 from '../../../../assets/img/social/alarm.png'



export const Notificationbox=(props)=>
{
    
    
    return(
        <> 
        <div className='notification-box'>
            <div className='notification-bell'> <img src={img1} alt="" /></div>
            <div> <p> <span>Notice:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.<span>Read more</span> </p></div>
        </div>
  
        </>
    )
}