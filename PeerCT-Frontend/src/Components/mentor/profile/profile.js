import React, { useEffect } from 'react'
import './profile.css'
import img12 from '../../../assets/img/mentor/New folder/Rectangle 20.png'
import social from '../../../assets/img/social/Vector.png'
import social2 from '../../../assets/img/social/Vector1.png'
import social3 from '../../../assets/img/social/Vector2.png'
import social5 from '../../../assets/img/social/Vector6.png'
import arrow from '../../../assets/img/mentor/New folder/arrow.png'
import img4 from '../../../assets/img/mentor/New folder/pen.png'
import img5 from '../../../assets/img/mentor/New folder/Rectangle 21.png'
import Rating from '@mui/material/Rating';
import { Footer } from '../Common/Footer/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Navbar } from '../Common/Navbar/Navbar'

const colorExp = ['blue-light', 'red-light', 'green-light']

export const Mentorprofile = () => {
    const { id } = useParams()
    const [data, setData] = React.useState({})
    const loadData = async () => {
        if (Object.keys(data).length == 0) {
            let info = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/mentor/single?id=` + id);
            info = info.data
            console.log(info)
            setData(info);
        }
    }
    useEffect(() => {
        loadData()
    }, [data])
    return (
        <>
          <Navbar />
            <section className='main-profile-section'>
                <div className='inner-profile-section'>
                    <div className='inner-upper-profile'>
                        <div className='upper-profile'>
                            <div className='left-upper-profile'>
                                <img style={{
                                    borderRadius: '5px',
                                }} width={150} src={data.image_url === null ? 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg': data.image_url} alt="" />
                                <div className='profile-into'>
                                    <h2>{data.name}</h2>
                                    <h3>{data.role}<span className='white'> at </span> {data.peerCTCompany === undefined ? "" : data.peerCTCompany.name}</h3>
                                    <div className='social-media-icon'>
                                        <div className='upper-socil-icon'>
                                            <div className='black-background'><img src={social} alt="" /></div>
                                            <div className='black-background'><img src={social2} alt="" /></div>
                                            <div className='black-background'><img src={social3} alt="" /></div>

                                        </div>
                                        <div className='upper-socil-icon'>
                                            <div className='black-background'><img src={social} alt="" /></div>
                                            <div className='black-background'><img src={social2} alt="" /></div>
                                            <div className='black-background'><img src={social3} alt="" /></div>

                                        </div>




                                    </div>
                                </div>

                            </div>

                            <div className='right-profile-upper'>
                                <div className='black-background'><img src={social5} alt="" /></div>
                                <div className='black-background'><img src={social5} alt="" /></div>

                            </div>
                        </div>
                    </div>

                    <div className='main-profile-section'>
                        <div className='inner-main-profile'>
                            <div className='left-main-profile'>
                                <div className='about-us-main'>
                                    <h3>About Me</h3>

                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet repellendus saepe, fugit facilis animi rem nihil assumenda culpa exercitationem officia, aliquam inventore possimus?</p>
                                    <h6>Read more</h6>
                                </div>

                                <div className='main-experties'>
                                    <h3>Experties</h3>
                                    <div className='column magintop-12px' key={data}>
                                        {
                                            data.peerCTExpertises === undefined ? "" :data.peerCTExpertises.map((item, index) => {
                                                return (
                                                    <div className={`expertise-box ${colorExp[index%3]}`}><h4>{item.expertise}</h4></div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <div className='main-education'>
                                    <h3>Eduction</h3>
                                    <div className='education-box'>
                                        <div className='black-background1' ><img src={img4} alt="" /></div>
                                        <div><h2>Manit Bhopal</h2>
                                            <h3>Btech in mechanical engineering 2020-2024</h3>
                                        </div>

                                    </div>
                                    <div className='education-box'>
                                        <div className='black-background1' ><img src={img4} alt="" /></div>
                                        <div><h2>Manit Bhopal</h2>
                                            <h3>Btech in mechanical engineering 2020-2024</h3>
                                        </div>

                                    </div>

                                </div>

                                <div className='main-job'>
                                    <h3>Job Experience</h3>
                                    {
                                            data.peerCTExperiences === undefined ? "" :data.peerCTExperiences.map((item, index) => {
                                                return (
                                                    <div className='job-box'>
                                        <img src={img5} alt="" />
                                        <div className='inner-main-job'>
                                            <h4>{item.descriptin}</h4>
                                            <h3>{item.peerCTCompany.name}</h3>
                                        </div>
                                        <div className='job-duration'><pre>{item.start_date}    -    {item.end_date}</pre></div>
                                    </div>
                                                )
                                            })
                                        }
                                    {/* <h2 className='white viewmore'>View more</h2> */}
                                </div>
                                <div className='main-job'>
                                    <h3>Review</h3>

                                    <div className='job-box'>
                                        <img src={img5} alt="" />
                                        <div className='inner-main-review'>
                                            <h4>Review</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestias inventore ni</p>
                                        </div>
                                        {/* <div className='job-duration'><p>Present</p></div> */}
                                        <Rating name="read-only" value={3} readOnly />

                                    </div>



                                    {/* <h2 className='white viewmore'>View more</h2> */}
                                </div>

                            </div>

                            <div className='right-main-profile'>
                                <div className='main-mentor-plans'>
                                    <h3>Choose what is best for you</h3>
                                    <div className='mantor-plan-box'>
                                        <div className='black-background1' ><img src={img4} alt="" /></div>
                                        <div className='mentor-plan-info'><h4>1:1 Mentoring Session</h4>
                                            <p>Video meeting</p>
                                            <p>$20</p>
                                        </div>
                                        <div className='arrow-div'><img src={arrow} alt="" /></div>
                                    </div>
                                    <div className='mantor-plan-box'>
                                        <div className='black-background1' ><img src={img4} alt="" /></div>
                                        <div className='mentor-plan-info'><h4>Mock interview</h4>
                                            <p>Video meeting</p>
                                            <p>$20</p>
                                        </div>
                                        <div className='arrow-div'><img src={arrow} alt="" /></div>
                                    </div>
                                    <div className='mantor-plan-box'>
                                        <div className='black-background1' ><img src={img4} alt="" /></div>
                                        <div className='mentor-plan-info'><h4>CV review</h4>
                                            <p>Video meeting</p>
                                            <p>$20</p>
                                        </div>
                                        <div className='arrow-div'><img src={arrow} alt="" /></div>
                                    </div>
                                    <div className='mantor-plan-box'>
                                        <div className='black-background1' ><img src={img4} alt="" /></div>
                                        <div className='mentor-plan-info'><h4>Carrier Guidence</h4>
                                            <p>Video meeting</p>
                                            <p>$20</p>
                                        </div>
                                        <div className='arrow-div'><img src={arrow} alt="" /></div>
                                    </div>





                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>
    )
}