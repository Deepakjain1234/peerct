import React,{useEffect} from 'react'
import './booking.css'
import icon1 from '../../../../assets/img/social/white-calender.png'
import icon2 from '../../../../assets/img/social/white-clock.png'
import icon3 from '../../../../assets/img/social/rup-white.png'
import icon4 from '../../../../assets/img/social/video-white.png'
import img4 from '../../../../assets/img/social/Rectangle 27.png'



export const Upcoming=(props)=>
{
    return(
        <>
        <div className='main-upcoming-box'>
            <div className='upcoming-box-upper'>
                <h2>{props.topic}</h2>
                <p>See mentee profile</p>
            </div>
            <div className='upcoming-box-lower'>
                <div className='lower-upcoming-left'>
                    <div className='left-upcoming-part'>
                        <div className='upcoming-icon-head'><img src={icon1} alt="" /> <p>{props.date}</p></div>
                        <div className='upcoming-icon-head'><img src={icon2} alt="" /> <p>{props.time}</p></div>
                    </div>
                    <div className='left-upcoming-part'>
                        <div className='upcoming-icon-head'><img src={icon3} alt="" /> <p>{props.price}</p></div>
                        <div className='upcoming-icon-head'><img src={icon4} alt="" /> <p>{props.medium}</p></div>
                    </div>
                </div>
                <div className='lower-upcoming-right'>
                    <div className='avtar-box'><img src={img4} alt="" /></div>
                    <div>
                        <button className='button1'>Start </button>
                        <button className='button2'>Reshedule session</button>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}