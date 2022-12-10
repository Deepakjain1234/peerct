import React,{useEffect} from 'react'
import './booking.css'
import icon1 from '../../../../assets/img/social/white-calender.png'
import icon2 from '../../../../assets/img/social/white-clock.png'
import icon3 from '../../../../assets/img/social/rup-white.png'
import icon4 from '../../../../assets/img/social/video-white.png'
import img4 from '../../../../assets/img/social/Rectangle 27.png'
import img5 from '../../../../assets/img/mentor/New folder/Rectangle 1535.png'




export const SessionCompleted=(props)=>
{
    return(
        <div className='main-upcoming-box1'>

                <div className='group-session-left'>
                    <img src={img5} alt="" />
                </div>
                <div className='session-host-right'>
                    <div className='upper-group-session'>
                        <p>{new Date(props.date).toLocaleDateString("en-GB")},{new Date(props.time).toLocaleTimeString()}</p>
                        <h3>Topic: {props.topic}</h3>
                    </div>
                
                    <div className='group-session-button'>
                              <div>
                                <p>{props.attendee}+ Attendees</p>
                                <div><img src={img4} alt="" /></div>
                              </div>
                        <div >
                        
                        <button className='button2'>Edit</button>
                        </div>

                    </div>

                </div>
            
        </div>
    )
}