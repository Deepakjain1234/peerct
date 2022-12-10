import React,{useEffect} from 'react'
import './booking.css'
import { Notificationbox } from './notificationbox'



export const Notification=()=>
{
    let usefuldata = [
        {
            "id": 1,
            "topic": 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae praesentium nulla reiciendis.',
            
       
        },
        {
            "id": 1,
            "topic": 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae praesentium nulla reiciendis.',
            
       
        },
        {
            "id": 1,
            "topic": 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae praesentium nulla reiciendis.',
            
       
        }


    ]
  
    
    return(
        <>
        <section className='main-booking-dash'>
            <div className='booking-main-head'>
                <h2>Notifications</h2>
            </div>
            <div className='notification-content'>
               {
                 usefuldata.map((element) => {
                    return (<Notificationbox id={element.id} topic={element.topic}/>)
                })
               }
            
            </div>
           
           
        </section>
        </>
    )
}