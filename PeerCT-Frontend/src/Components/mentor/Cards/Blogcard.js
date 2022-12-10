import React, { useEffect } from 'react'
import logo1 from '../../../assets/img/mentor/New folder/Untitled.png'
import './Mentorcard.css'
import { Link } from 'react-router-dom'


export const Blogcard = (props) => {

    return (
        <Link to={`/mentor/singleblog/${props.id}`}>
            <div className='blogcard-div'>
                <img src={props.image} alt="" />
                <h2 className='blogcard-div-head1'>{props.name}</h2>

                <h3 className='blogcard-div-head2'>Date - {props.date}</h3>
                <div className='inner-blogcard'><p>Read more</p>
                    <img src={props.image1} alt="" />
                </div>


            </div>
        </Link>
    )
}
