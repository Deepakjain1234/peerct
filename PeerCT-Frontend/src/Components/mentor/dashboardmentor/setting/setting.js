import React, { useEffect } from 'react'
import './setting.css'
import img1 from '../../../../assets/img/social/Ellipse 6.png'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Changepass } from './Changepass';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40vw',
    height: '80vh',
    bgcolor: '#232323',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
    overflow: 'hidden',
    padding:'0px'

};

export const Setting = () => {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);
    




    const [active, setactive] = React.useState("personal")
    return (
        <>
            <section className='main-booking-dash'>
                <div className='booking-main-head' id='my-network-head'>
                    <h2>Settings</h2>

                </div>
                <div className='booking-main1-head'>
                    <h3 id='active-head' onClick={() => setactive("personal")}>Personal profile</h3>
                    <h3 onClick={() => setactive("mentor")}>Mentor profile </h3>
                    <h3 onClick={() => setactive("login")}>Login and security </h3>
                </div>
                {
                    active == "mentor" && <div className='booking-main-content'>
                        <div className='setting-field'>
                            <div className='setting-field-box'>
                                <div className='headingedit-button'><p>What do you like to mentor?</p>
                                    <h5>Edit</h5>
                                </div>
                                <input type="text" />
                            </div>
                            <div className='setting-field-box'>
                                <div className='headingedit-button'><p>What is your experties?</p>
                                    <h5>Edit</h5>
                                </div>
                                <input type="text" />
                            </div>
                            <div className='setting-field-box'>
                                <div className='headingedit-button'><p>Company</p>
                                    <h5>Edit</h5>
                                </div>
                                <input type="text" />
                            </div>
                            <div className='setting-field-box'>
                                <div className='headingedit-button'><p>Role</p>
                                    <h5>Edit</h5>
                                </div>
                                <input type="text" />
                            </div>
                            <div className='setting-field-box'>
                                <div className='headingedit-button'><p>What is your experience</p>
                                    <h5>Edit</h5>
                                </div>
                                <input type="text" />
                            </div>
                            <div className='setting-field-box'>
                                <div className='headingedit-button'><p>Linkedin profile</p>
                                    <h5>Edit</h5>
                                </div>
                                <input type="text" />
                            </div>
                            <div className='setting-field-box'>
                                <div className='headingedit-button'><p>Twitter profile</p>
                                    <h5>Edit</h5>
                                </div>
                                <input type="text" />
                            </div>
                            <div className='setting-field-box'>
                                <div className='headingedit-button'><p>Personal website/portfolio profile</p>
                                    <h5>Edit</h5>
                                </div>
                                <input type="text" />
                            </div>

                        </div>

                    </div>
                }
                {
                    active == "personal" && <div className='booking-main-content'>

                        <div className='setting-field'>
                            <div className='update-profile-box'>
                                <img src={img1} alt="" />
                                <button >Change photo</button>
                                <button>Remove photo</button>
                            </div>
                            <div className='setting-field-box'>
                                <div className='headingedit-button'><p>First name</p>
                                    <h5>Edit</h5>
                                </div>
                                <input type="text" />
                            </div>
                            <div className='setting-field-box'>
                                <div className='headingedit-button'><p>about</p>
                                    <h5>Edit</h5>
                                </div>
                                <input type="text" />
                            </div>
                            <div className='setting-field-box'>
                                <div className='headingedit-button'><p>Contact number</p>
                                    <h5>Edit</h5>
                                </div>
                                <input type="text" />
                            </div>
                            <div className='setting-field-box'>
                                <div className='headingedit-button'><p>Language</p>
                                    <h5>Edit</h5>
                                </div>
                                <input type="text" />
                            </div>
                            <div className='setting-field-box'>
                                <div className='headingedit-button'><p>Time zone</p>
                                    <h5>Edit</h5>
                                </div>
                                <input type="text" />
                            </div>



                        </div>

                    </div>
                }
                {
                    active == "login" && <div className='booking-main-content'>

                        <div className='setting-field'>
                            <div className='setting-field-box'>
                                <div className='headingedit-button'><p>Email</p>
                                    <h5>Request email change</h5>
                                </div>
                                <input type="email" />
                            </div>
                            <div className='setting-field-box'>
                                <div className='headingedit-button'><p>Password</p>
                                    <h5 onClick={handleOpen}>Update</h5>
                                </div>
                                <input type="password" />
                            </div>

                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Changepass close={handleClose} />
                                </Box>
                            </Modal>




                        </div>

                    </div>
                }

            </section>
        </>
    )
}