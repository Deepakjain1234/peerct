import React,{useEffect} from 'react'
import './booking.css'
// import { Upcoming } from './upcoming'
// import { Completed } from './networkmentor'
import { Mentorcard1 } from '../../Cards/Mentorcard1'
import logo1 from '../../../../assets/img/mentor/New folder/Frame 445.png'
import logo2 from '../../../../assets/img/mentor/New folder/Vector 1.png'

let usefuldata = [
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Pratham patidar",
        "postion": "growth manager",
        "category": 'new',
        "brand": "lorem"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Pratham patidar",
        "postion": "growth manager",

        "category": 'new',
        "brand": "lorem"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Pratham patidar",
        "postion": "growth manager",

        "category": 'new',
        "brand": "lorem"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Pratham patidar",
        "postion": "growth manager",

        "category": 'new',
        "brand": "lorem"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Pratham patidar",
        "postion": "growth manager",
        "category": 'new',
        "brand": "lorem"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Pratham patidar",
        "postion": "growth manager",

        "category": 'new',
        "brand": "lorem"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Pratham patidar",
        "postion": "growth manager",

        "category": 'new',
        "brand": "lorem"
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Pratham patidar",
        "postion": "growth manager",

        "category": 'new',
        "brand": "lorem"
    },
    



]
export const Network=()=>
{
    
   
     
        

    
    
    const [active,setactive]=React.useState("upcoming")
    return(
        <>
        <section className='main-booking-dash'>
            <div className='booking-main-head' id='my-network-head'>
                <h2>My Network</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, architecto explicabo facilis autem veniam quia minima cupiditate, corporis maiores nisi temporibus consequatur, </p>
            </div>
            <div className='booking-main1-head'>
                <h3 id='active-head' onClick={()=>setactive("upcoming")}>Mentors</h3>
                <h3  onClick={()=>setactive("completed")}>Community member</h3>
            </div>
            {
                active=="upcoming" && <div className='booking-main-content'>
                
                {
               
                    <div>
                        <dir className="empty-data-box">
                        <input type="text" placeholder='Search for mentor' />
                    </dir>
                    <div className='network-card-box'>
                    {
                        usefuldata.map((element) => {
                            return (<Mentorcard1 name={element.name} position={element.postion} image1={logo1} image={logo2} />)
                        })
                    }
                    </div>
                    </div>
                    
                }
    
                </div>
            }
             {/* {
                active=="completed" && <div className='booking-main-content'>
                
                {
                    usefuldata.map((element) => {
                        return (<Completed  id={element.id} topic={element.topic} date={element.date} time={element.time} price={element.price} medium={element.medium}  />)
                    })
                }
    
                </div>
            } */}
        </section>
        </>
    )
}