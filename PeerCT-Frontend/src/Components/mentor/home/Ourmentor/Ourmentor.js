import React from 'react'
import './Ourmentor.css'
import logo1 from '../../../../assets/img/mentor/Vector1.png'
import logo2 from '../../../../assets/img/mentor/Vector2.png'
import logo3 from '../../../../assets/img/mentor/Vector3.png'
import logo4 from '../../../../assets/img/mentor/Vector4.png'
import logo5 from '../../../../assets/img/mentor/Vector5.png'
import logo6 from '../../../../assets/img/mentor/Vector6.png'
import logo7 from '../../../../assets/img/mentor/Vector7.png'
import logo8 from '../../../../assets/img/mentor/Vector8.png'
import logo9 from '../../../../assets/img/mentor/Vector9.png'
import logo10 from '../../../../assets/img/mentor/Vector10.png'
import logo11 from '../../../../assets/img/mentor/Vector11.png'



export const Ourmentor = () => {
    return (
        <>

        <div className='ourmentor-section'>
            <div className='inner-ourmentor'>
                <h1 className='upper-heading'>Our Mentor form</h1>
                <div className='logo-div'>
                   <div className='inner-logo-div'>
                   <img src={logo10} alt="" />

                   <img src={logo9} alt="" />

                    <img src={logo3} alt="" />
                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                    <img src={logo7} alt="" />
                   </div>
                    <div className='inner-logo-div'>
                    <img src={logo10} alt="" />

                    <img src={logo9} alt="" />
                    <img src={logo3} alt="" />

                    <img src={logo4} alt="" />
                    <img src={logo5} alt="" />
                    <img src={logo6} alt="" />
                    <img src={logo7} alt="" />
                    </div>
           
                </div>

                <h2 className='lower-heading'>+Many More</h2>
            </div>
        </div>


        

        </>
    )
}