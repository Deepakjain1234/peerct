import React, { useEffect } from 'react'
import logo from '../../../assets/img/horizontal-logo.png'
import './dashboard.css'
import img1 from '../../../assets/img/social/alarm.png'
import img2 from '../../../assets/img/social/setting.png'
import img3 from '../../../assets/img/social/messege.png'
import img4 from '../../../assets/img/social/Rectangle 27.png'
import { ChatUtil } from '../../Chat/ChatUtil'
import { Booking } from './booking/booking'
import { GroupSession } from './group session/groupsession'
import { Notification } from './Notificaiton/Notification'
import { OneToOneSession } from './onetoone session/onetoonesession'


export const Dashboard = () => {
    const [activenav, setactive] = React.useState("home");
    return (
        <>
            <section className='main-dashborad'>
                <div className='dashboard-left'>
                    <img src={logo} alt="" />

                    <div className='side-bar-option'>
                        <div className='option-side-bar'><h3>Home</h3></div>
                        <div className='option-side-bar' onClick={() => setactive("messege")}><h3>Messege</h3></div>
                        <div className='option-side-bar' onClick={() => setactive("booking")}><h3>Booking</h3></div>
                        <div className='option-side-bar' onClick={() => setactive("groupsession")}><h3>Group Session</h3></div>
                        <div className='option-side-bar' onClick={() => setactive("personal")}><h3> Personal Session</h3></div>
                        <div className='option-side-bar'><h3>My network</h3></div>
                        <div className='option-side-bar'><h3>profile</h3></div>
                        <div className='option-side-bar'><h3>calender</h3></div>
                        <div className='option-side-bar' onClick={() => setactive("notification")}><h3>Notification</h3></div>
                        <div className='option-side-bar'><h3>Settings</h3></div>
                        <div className='option-side-bar'><h3>support</h3></div>

                    </div>

                </div>
                <div className='dasboard-right'>
                    <div className='dashboard-navbar'>
                        <input type="text" placeholder='Search' />
                        <div className='right-navbar'>
                            <div className='navbar-icon-white'><img src={img1} alt="" /></div>
                            <div className='navbar-icon-white'><img src={img2} alt="" /></div>
                            <div className='navbar-icon-white'><img src={img3} alt="" /></div>
                            <div className='avtar-icon'><img src={img4} alt="" /></div>
                            <button>Create session</button>
                        </div>

                    </div>
                    {activenav == "messege" && <div className='chat-box'><ChatUtil /></div>}
                    {activenav == "booking" && <div className='chat-box'><Booking /> </div>}
                    {activenav == "groupsession" && <div className='chat-box'><GroupSession /> </div>}
                    {activenav == "notification" && <div className='chat-box'><Notification /> </div>}
                    {activenav=="personal" && <div className='chat-box'><OneToOneSession /> </div>}

                </div>
            </section>
        </>
    )
}