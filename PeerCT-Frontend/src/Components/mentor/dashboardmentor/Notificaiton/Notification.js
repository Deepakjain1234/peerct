import React,{useEffect,useState} from 'react'
import './booking.css'
import { Notificationbox } from './notificationbox'
import axios from 'axios';




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
    const [userDetails, setuserDetails] = useState([]);
 

    const fetchapi = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/notification/all`)
            .then(res => {
                console.log(res.data)
                setuserDetails(res.data)
            })
            .catch((error) => {
                console.log(error)
                // alert(error)
                    });
            ;
    }

    React.useEffect(() => {
        fetchapi()

    },[ ])
  
    
    return(

        

        <>
        <section className='main-booking-dash'>
            <div className='booking-main-head'>
                <h2>Notifications</h2>
            </div>
            <div className='notification-content'>
               {
                 userDetails.map((element) => {
                    return (<Notificationbox id={element.id} topic={element.topic}/>)
                })
               }
            
            </div>
           
           
        </section>
        </>
    )
}