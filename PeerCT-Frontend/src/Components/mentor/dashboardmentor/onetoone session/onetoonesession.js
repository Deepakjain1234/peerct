import React,{useEffect, useState} from 'react'
import './booking.css'
import { Sessionhosting } from './sessionhosting'
import { SessionCompleted } from './sessioncomplete'
import { faHourglass1 } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'


export const OneToOneSession=()=>
{
    const [upcoming, setUpData] = useState([])
    const [completed, setCompletedData] = useState([])
    let token = localStorage.getItem('token');
    useEffect(async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/mentor/serviceDetailByMentor/upcoming`,
                { headers: { Authorization: `Bearer ${token}` } })
            const data = await response.data
            setUpData(data)
            const response2 = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/mentor/serviceDetailByMentor/old`,
                { headers: { Authorization: `Bearer ${token}` } })
            const data2 = await response2.data
            setCompletedData(data2)
            console.log("use effect rendered")

        } catch (error) {

        }






    },[])
    const [active,setactive]=React.useState("upcoming")
    return(
        <>
        <section className='main-booking-dash'>
            <div className='booking-main-head'>
                <h2>Personal Session</h2>
            </div>
            <div className='booking-main1-head'>
                <h3 id='active-head' onClick={()=>{setactive("upcoming")}}>Session I'am hosting</h3>
                <h3  onClick={()=>setactive("completed")}>Session I've hosted</h3>
            </div>
            {
                active=="upcoming" && <div className='booking-main-content'>
                
                { upcoming.length==0 ? 
                <dir className="empty-data-box">
                    <p>No upcoming session</p>

                </dir>:
                    upcoming.map((element) => {
                        return (<Sessionhosting id={element.id} topic={element.peerCTMentorService.peerCTService.name} date={element.date} time={element.peerCTMentorService.start_time} attendee={element.attendee} medium={element.medium}  />)
                    })
                }
    
                </div>
            }
             {
                active=="completed" && <div className='booking-main-content'>
                
                {
                    completed.map((element) => {
                        return (<SessionCompleted  id={element.id} topic={element.peerCTMentorService.peerCTService.name} date={element.start_time} time={element.start_time} attendee={element.attendee} medium={element.medium}  />)
                    })
                }
    
                </div>
            }
        </section>
        </>
    )
}