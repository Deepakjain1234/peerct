import React, { useState, useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { io } from "socket.io-client";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2'
const socket = io(`${process.env.REACT_APP_BACKEND_URL}/ws/`, {
    query: { token: localStorage.getItem('token') }
});

let actChat = null;
let chatdetails = []

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

export const ChatUtil = () => {
    const [chatDetails, setchatDetails] = useState([]);
    const [activeChat, setactiveChat] = useState(null);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let fetchData = async () => {
        let token = localStorage.getItem('token')
        let data = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/chat/`, [], { headers: { "Authorization": `Bearer ${token}` } })
        chatdetails = data.data;
        console.log(chatdetails);
        return data.data;
    }
    useEffect(() => {
        (async function playWithData() {
            if (chatDetails.length === 0) {
                let update = await fetchData();
                setchatDetails(update);
                chatdetails = update;
            }
        })();
    }, [])
    socket.on('error', (data) => {
        Swal.fire(
            'Error!',
            data,
            'error'
        )
        document.getElementById('chatBoxes').innerHTML = "";
    })
    window.onload = function () {
        socket.on('recieve', (message, userID) => {
            document.getElementById(`chat-${userID}`).style.display = 'block';
            if (actChat === userID) {
                let newMessages = document.createElement('div')
                newMessages.classList.add('message')
                newMessages.classList.add('fr_msg')
                newMessages.innerHTML = `<p>${message}</p>`
                document.getElementById('chatBoxes').prepend(newMessages);
            }
        })
    }
    const getChats = (el, appr) => {
        if (el !== activeChat) {
            chatdetails.forEach(element => {
                if (element.id === el)
                    document.getElementById('userName').innerHTML = element.name;
            })
            console.log(el, !appr);
            if (!appr) {
                document.getElementById(`accept-btn`).setAttribute('data-accept', el)
                document.getElementById(`accept-btn`).style.display = 'block';
                document.getElementById(`reject-btn`).setAttribute('data-reject', el)
                document.getElementById(`reject-btn`).style.display = 'block';
                document.getElementsByClassName('block-chat')[0].style.display = 'none';
                document.getElementsByClassName('block-chat')[1].style.display = 'none';

            } else {
                document.getElementById(`accept-btn`).style.display = 'none';
                document.getElementById(`reject-btn`).style.display = 'none';
            }
            document.getElementById('chatBoxes').innerHTML = '';
            socket.emit('join', el)
            setactiveChat(el)
            document.getElementById(`chat-${el}`).style.display = 'none';
            socket.on('last Chats', (recieverID, messages) => {
                messages.map(l => {
                    let newMessages = document.createElement('div')
                    newMessages.classList.add('message')
                    if (l.user === el) {
                        newMessages.classList.add('fr_msg')
                    } else {
                        newMessages.classList.add('my_msg')
                    }
                    newMessages.innerHTML = `<p>${l.message}</p>`
                    document.getElementById('chatBoxes').prepend(newMessages);
                })
                actChat = el;
            })
        }
    }
    return (
        <div className='chat-sec'>
            <div className="container-chat">
                <div className="leftSide">
                    <div className="header">
                        <div className="user-img">
                            <Avatar alt="Remy Sharp" src={""} />
                        </div>
                        <Button sx={{
                            color: 'white',
                        }} onClick={handleOpen}>New Chat</Button>
                    </div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Enter User ID.
                            </Typography>
                            <TextField
                                label="User ID"
                                id="outlined-size-small"
                                size="small"
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                }}
                                type="number"
                            />
                            <br />
                            <Button variant='contained' onClick={() => {
                                socket.emit('join', value)
                                setactiveChat(value)
                                window.location.reload(false)
                            }}>Start</Button>
                        </Box>
                    </Modal>
                    <div className="search-chat">
                        <div className="search-box-cha">
                            <input type="text" placeholder='Search ' />
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                    <div className="chat-list">
                        {
                            chatDetails.map((item, index) => {
                                socket.emit('join', item.id)
                                return (
                                    <div key={item.id} className="block" onClick={() => { getChats(item.id, item.approved) }}>
                                        <Avatar alt="Remy Sharp" src={""} />
                                        <div className="details-chat">
                                            <div className="listHead">
                                                <h4>{item.name}</h4>
                                            </div>
                                            <div id={`chat-${item.id}`} className='newMsg'>
                                                <p>new message</p>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                        {/* <ChatList chatDetails={chatDetails} getChats={getChats} /> */}
                    </div>
                </div>
                <div className="rightSide">
                    <div className="header" style={{
                        display: activeChat ? 'flex' : 'none',
                    }}>

                        <div className="imgText">
                            <div className="user-img">
                                <Avatar alt="Remy Sharp" src={""} />
                            </div>
                            {/* <br /> <span>online</span>  */}
                            <h4 id="userName">Mihir Waykole</h4>
                        </div>
                        <div style={{
                            display: 'flex'
                        }}>
                            <Button variant="contained" id="accept-btn" data-accept="" onClick={(e) => {
                                e.preventDefault();
                                let ids = e.target.getAttribute('data-accept');
                                console.log(ids);
                                socket.emit('accept', Number(ids))
                                document.getElementById(`accept-btn`).disabled = true;
                                window.location.reload(false)
                            }} >Accept</Button>

                            <Button sx={{
                                marginLeft: '20px',
                                color: 'white',
                                backgroundColor: 'red',
                                '&:hover': {
                                    background: "#f05",
                                },
                            }} id="reject-btn" data-reject="" onClick={(e) => {
                                e.preventDefault();
                                let ids = e.target.getAttribute('data-reject');
                                console.log(ids);
                                socket.emit('reject', Number(ids))
                                document.getElementById(`reject-btn`).disabled = true;
                                window.location.reload(false)
                            }} >Reject</Button>
                        </div>
                    </div>
                    <div className="chatBox" id='chatBoxes' style={{
                        display: activeChat ? 'flex' : 'none',
                        flexDirection: 'column-reverse',
                    }}>
                    </div>
                    <form className="chatbox_input" id='chat-inputs' style={{
                        display: activeChat ? 'flex' : 'none',
                    }} onSubmit={(e) => {

                        e.preventDefault();
                        let data = new FormData(e.currentTarget)
                        let message = data.get('message')
                        if (message.length !== 0) {
                            socket.emit('send_message', activeChat, message)
                            let newMessages = document.createElement('div')
                            newMessages.classList.add('message')
                            newMessages.classList.add('my_msg')
                            newMessages.innerHTML = `<p>${message}</p>`
                            document.getElementById('chatBoxes').prepend(newMessages);
                            document.getElementById('message').value = ''
                        }
                        console.log(message)
                    }}>
                        <input id="message" className='block-chat' type="text" name="message" placeholder='Type a message' />
                        <button type="submit"  className='send-msg block-chat'>
                            <FontAwesomeIcon icon={faPaperPlane} />
                            <i class="fa-solid fa-paper-plane-top"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
