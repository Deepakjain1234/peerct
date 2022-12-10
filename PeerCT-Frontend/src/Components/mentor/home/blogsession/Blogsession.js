import React from 'react'
import './Blogsession.css'
import { Blogcard } from '../../Cards/Blogcard'
import logo1 from '../../../../assets/img/mentor/New folder/Rectangle 8.png'
import logo2 from '../../../../assets/img/mentor/New folder/Rectangle 9.png'
// import { Blogcard } from '../../Cards/Blogcard'

let usefuldata = [
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aut,",
        "date": "10/02/2021",
        
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aut, minus",
        "date": "10/02/2021",
        
    },
    {
        "id": 1,
        "product_img": 'https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg',
        "name": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore aut, minus, ",
        "date": "10/02/2021",
        
    }
 



]




export const Blogsession = () => {
    return (
        <>
       
            <div className='howitswork-section'>
                <div className='inner-howitswork2'>
                    <div className='heading-div'><h1>LEARN FROM BLOGS</h1></div>
                


                  <div className='howitwork-main margin-top'>
                  {  
                        usefuldata.map((element) => {
                            console.log("asdf")
                            return ( <Blogcard name={element.name} date={element.date} image1={logo2} image={logo1}/> )
                            // <Mentorcard key={element.id} product_id={element.id} product_img="https://i.kinja-img.com/gawker-media/image/upload/s---Jp3oE95--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/199zpfi8dig2njpg.jpg" product_name={element.name} product_price={element.price}  />
                            
                            
                        })
                    }
               
                    </div>

            <button className='knowmentor-button'>Learn more from blog</button>




                </div>
            </div>




        </>
    )
}