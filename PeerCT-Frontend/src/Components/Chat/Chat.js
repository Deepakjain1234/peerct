import React from 'react'
import { Navbar } from '../Common/Navbar/Navbar'
import { Footer } from '../Common/Footer/Footer'
import { ChatUtil } from './ChatUtil'
import './style.css'

export const Chat = () => {
    return (
        <>
            <Navbar />
            <div style={{
                marginTop: 10,
                paddingTop: 10
            }} className='bg-dark'>
                <ChatUtil />
            </div>
            <Footer />
        </>
    )
}
