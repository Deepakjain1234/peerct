import React, { useEffect } from 'react'
import './sessionbook.css'
import { useParams } from 'react-router-dom'
import img5 from '../../../assets/img/mentor/New folder/Rectangle 21.png'
import icon1 from '../../../assets/img/social/watch.png'
import icon2 from '../../../assets/img/social/rupee.png'
import icon3 from '../../../assets/img/social/camera.png'

export const Booking2 = (props) => {
    let userData = JSON.parse(localStorage.getItem('userData'))
    const [data, changeData] = React.useState({});
    const bringData = () => {
        if (localStorage.getItem('bookingData') != null && Object.keys(data) == 0) {
            let d = JSON.parse(localStorage.getItem('bookingData'))['allData'];
            let date = d.date
            date = date.split('-')[2] + '-' + date.split('-')[1] + '-' + date.split('-')[0];
            d.date = date;
            changeData(d);
            console.log(data)
        }
        localStorage.removeItem('bookingData');
    }
    useEffect(() => {
        bringData()
    }, [data])
    return (
        <>
            <section className='session-booking-section'>
                <div className='inner-section-booking'>
                    <div className='back-button'><h3>Back</h3></div>

                    <div className='upper-booking-session'>
                        <div className='left-upper-booking'>
                            <div className='booking-mentor'>
                                <img src={img5} alt="" />
                                <div>
                                    <h3> Session With</h3>
                                    <h4>{data.name}</h4>
                                </div>
                            </div>
                            <div className='price-and-time'> <img src={icon1} alt="" />{}<p>{data.duration} minutes</p></div>
                            <div className='price-and-time'><img src={icon3} alt="" /><p>Video call</p></div>
                            <div className='price-and-time'><img src={icon2} alt="" /><p>{data.price}</p></div>
                        </div>
                        <div className='right-upper-booking'>
                            <h3>{data.serviceName}</h3>
                            <div className='white'> <p>
                                Session is scheduled on {data.date} at {data.startTime} IST.
                            </p></div>
                        </div>
                    </div>

                    <div className='lower-booking-session'>
                        <div className='conform-booking-form'>
                            <h3>Enter your details</h3>
                            <form action="${process.env.REACT_APP_BACKEND_URL}/payment_gateway/payumoney" method="POST">
                                <div className='inner-booking-form'> <input type="text" name='firstname' placeholder='Name' value={userData.user.name} /> <input type="text" name="phone" placeholder='Mobile Number' value={userData.user.contact} /></div>

                                <div className='inner-booking-form'> <input type="text" name="email" placeholder='Email' value={userData.user.email} /> <input type="file" className='custom-file-input upload-form' placeholder='Mobile Number' /></div>
                                <div className='inner-booking-form'> <textarea name="What you expect" id="" cols="30" rows="10"></textarea></div>
                                <button type="submit">Make Payment</button>
                            </form>

                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}