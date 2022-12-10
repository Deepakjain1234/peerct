import React, { useEffect } from 'react'
import './sessionbook.css'
import axios from 'axios'
import img5 from '../../../assets/img/mentor/New folder/Rectangle 21.png'
import icon1 from '../../../assets/img/social/watch.png'
import icon2 from '../../../assets/img/social/rupee.png'
import icon3 from '../../../assets/img/social/camera.png'
import Calendar from 'react-calendar'
// import { Booking2 } from './conformbooking'
import { Link, useParams } from 'react-router-dom'

export const Booking = () => {
    const { id, serviceID } = useParams()
    const [dateState, setDateState] = React.useState(new Date())
    const [mentorData, setMentorData] = React.useState([])
    const [bookingData, setBookingData] = React.useState([])
    const [currSelectDate, setCurrSelectDate] = React.useState([])
    const changeDate = (e) => {
        setDateState(e)
        updateTime(e)
    }

    const updateTime = (e) => {
        const offset = e.getTimezoneOffset()
        e = new Date(e.getTime() - (offset * 60 * 1000))
        e = e.toISOString().split('T')[0]
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/mentor/availableSession?mentor_id=${id}&session_date=${e}&duration=${mentorData.duration}`).then(res => {
            setBookingData(res.data)
        })
    }
    const loadData = async () => {
        let info = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/mentor/single?id=${id}` );
        if (mentorData.length == 0) {
            info = info.data
            let data = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/mentor/serviceData?mentor_id=${id}&service_id=${serviceID}`)
            info.duration = data.data.duration;
            info.price = data.data.price;
            info.serviceDetails = data.data.id;
            info.serviceName = data.data.peerCTService.name;
            setMentorData(info);
        }
    }
    useEffect(() => {
        if (mentorData.length == 0) {
            loadData()
            updateTime(dateState)
        }
    }, [mentorData, dateState, bookingData])
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
                                    <h3>Session With</h3>
                                    <h4>{mentorData.name}</h4>
                                </div>
                            </div>
                            <div className='price-and-time'> <img src={icon1} alt="" /><p>{mentorData.duration} minutes</p></div>
                            <div className='price-and-time'><img src={icon3} alt="" /><p>Video call</p></div>
                            <div className='price-and-time'><img src={icon2} alt="" /><p>{mentorData.price}</p></div>
                        </div>
                        <div className='right-upper-booking'>
                            <h3>Mock interview</h3>
                            <div className='scroll-content'> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam magni dolore totam temporibus dolor ad commodi dolorem, quod voluptatibus modi, corporis accusantium. Sequi provident tempora pariatur accusantium error soluta aut?
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam magni dolore totam temporibus dolor ad commodi dolorem, quod voluptatibus modi, corporis accusantium. Sequi provident tempora pariatur accusantium error soluta aut?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam magni dolore totam temporibus dolor ad commodi dolorem, quod voluptatibus modi, corporis accusantium. Sequi provident tempora pariatur accusantium error soluta aut?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam magni dolore totam temporibus dolor ad commodi dolorem, quod voluptatibus modi, corporis accusantium. Sequi provident tempora pariatur accusantium error soluta aut?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam magni dolore totam temporibus dolor ad commodi dolorem, quod voluptatibus modi, corporis accusantium. Sequi provident tempora pariatur accusantium error soluta aut?
                            </p></div>
                        </div>
                    </div>

                    <div className='lower-booking-session'>
                        <div className='left-side-calender'>
                            <Calendar
                                value={dateState}
                                onChange={changeDate}
                            />
                        </div>
                        <div className='right-side-calender'>
                            <h3>Available slots</h3>
                            <div className='main-slot-select'>
                                {bookingData.map((item, index) => {
                                    return (
                                        <div onClick={(e) => {
                                            e.preventDefault()
                                            let allTarget = document.getElementsByClassName('indi-slot')
                                            for (let i = 0; i < allTarget.length; i++) {
                                                allTarget[i].classList.remove('active-slot')
                                            }
                                            e.currentTarget.classList.toggle('active-slot')
                                            const offset = dateState.getTimezoneOffset()
                                            let dates = new Date(dateState.getTime() - (offset * 60 * 1000))
                                            dates = dateState.toISOString().split('T')[0]
                                            setCurrSelectDate({
                                                date: dates,
                                                time: item
                                            })
                                        }} className='indi-slot'><h4>{item}</h4></div>
                                    )
                                })}
                            </div>
                            <button onClick={
                                () => {
                                    mentorData.startTime = currSelectDate.time
                                    mentorData.date = currSelectDate.date
                                    localStorage.setItem('bookingData', JSON.stringify({
                                        mentor_id: id,
                                        service_id: serviceID,
                                        session_date: currSelectDate.date,
                                        session_time: currSelectDate.time,
                                        allData: mentorData
                                    }))
                                }
                            }><Link style={{
                                textDecoration: 'none',
                                color: 'white'
                            }} to={`/mentor/booking2`} >Book session for {currSelectDate.date} on {currSelectDate.time} </Link></button>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}