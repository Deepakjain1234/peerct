import React from 'react'
import './Homesection.css'
import img3 from '../../../../assets/img/mentor/New folder/Ellipse 2.png'



export const Homesection=()=>
{
    return(
        <div className='homesection-section'>
            <div className='mentor-circle ' id='photo1'>
                 <img src={img3} alt="" />
            </div>

            <div className='mentor-circle' id='photo2'>
                 <img src={img3} alt="" />
            </div>
            <div className='mentor-circle' id='photo3'>
                 <img src={img3} alt="" />
            </div>
            <div className='mentor-circle' id='photo4'>
                 <img src={img3} alt="" />
            </div>
            <div className='mentor-circle' id='photo5'>
                 <img src={img3} alt="" />
            </div>
            
        <div className='inner-homesection'>
            <h1>Heading</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis fugit molestiae mai</p>

            <button className='homesection-button'>Find a mentor</button>

        </div>
        </div>
    )
}