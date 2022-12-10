import React,{useEffect} from 'react'
import './booking.css'
import { Upcoming } from './upcoming'
import { Completed } from './completed'


export const Booking=()=>
{
    let usefuldata = [
        {
            "id": 1,
            "topic": 'Mentorship',
            "date": " 6 june",
            "time": "4:00PM",
            "price":"200",
            "medium":"Video ",
       
        },
        {
            "id": 1,
            "topic": 'Mentorship',
            "date": " 6 june",
            "time": "4:00PM",
            "price":"200",
            "medium":"Video ",
       
        }
        

    
    ]
    let usefuldata2 = [
        {
            "id": 1,
            "topic": 'CV review',
            "date": " 6 june",
            "time": "4:00PM",
            "price":"200",
            "medium":"Video ",
       
        }
     
        

    
    ]
    const [active,setactive]=React.useState("upcoming")
    return(
        <>
        <section className='main-booking-dash'>
            <div className='booking-main-head'>
                <h2>Booking</h2>
            </div>
            <div className='booking-main1-head'>
                <h3 id='active-head' onClick={()=>setactive("upcoming")}>upcoming</h3>
                <h3  onClick={()=>setactive("completed")}>Completed</h3>
            </div>
            {
                active=="upcoming" && <div className='booking-main-content'>
                
                {
                    usefuldata.length==0 ? 
                    <dir className="empty-data-box">
                        <p>You have no upcoming booking</p>
                        <button>Create new booking</button>
    
                    </dir>:
                    usefuldata.map((element) => {
                        return (<Upcoming id={element.id} topic={element.topic} date={element.date} time={element.time} price={element.price} medium={element.medium}  />)
                    })
                }
    
                </div>
            }
             {
                active=="completed" && <div className='booking-main-content'>
                
                {
                    usefuldata2.map((element) => {
                        return (<Completed  id={element.id} topic={element.topic} date={element.date} time={element.time} price={element.price} medium={element.medium}  />)
                    })
                }
    
                </div>
            }
        </section>
        </>
    )
}