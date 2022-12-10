import React from 'react'
import { Navbar } from '../Common/Navbar/Navbar'
import { Footer } from '../Common/Footer/Footer'
import { Category } from '../Home/Category/Category'

export const Page = () => {
    return (
        <>
            <Navbar />
            <div style={{
                paddingTop: 0
            }} className='bg-dark'>
                <Category />
            </div>
            <Footer />
        </>
    )
}
