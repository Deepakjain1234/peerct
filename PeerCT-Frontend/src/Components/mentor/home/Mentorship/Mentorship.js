import React from 'react'
import './Mentorship.css'
import logo1 from '../../../../assets/img/mentor/New folder/Untitled.png'
import logo2 from '../../../../assets/img/mentor/New folder/Untitled1.png'
import logo3 from '../../../../assets/img/mentor/New folder/Untitled3.png'





export const Mentorship = () => {
    return (
        <>

            <div className='mentorship-section'>
                <div className='inner-mentorship'>

                    <div className='mentorship-div'>
                        <img src={logo1} alt="" />
                        <h2 className='mentorship-div-head1'>Mentorship</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Odit
                         quod magnam libero nemo?</p>

                    </div>
                    <div className='mentorship-div'>
                        <img src={logo2} alt="" />
                        <h2 className='mentorship-div-head2'>CV REVIEW</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Odit
                         quod magnam libero nemo?</p>

                    </div>
                    <div className='mentorship-div'>
                        <img src={logo3} alt="" />
                        <h2 className='mentorship-div-head3'>MOCK INTERVIEW</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur 
                        adipisicing elit. Odit
                         quod magnam libero nemo?</p>

                    </div>


                </div>
            </div>




        </>
    )
}