import React from 'react'
import './Home.css'

import { Footer } from '../Common/Footer/Footer'
import { Ourmentor } from './Ourmentor/Ourmentor'
import { Mentorship } from './Mentorship/Mentorship'
import { Booksession } from './Booksession/Booksession'
import { Howitswork } from './Howitswork/Howitswork'
import { Knowyourmentor } from './Knowyourmentor/Knowyourmentor'
import { Headsession } from './headingsession/Headsession'
import { Blogsession } from './blogsession/Blogsession'
import { Homesection } from './homesection/Homesection'
import { Nav } from '../Common/Navbar/nav'







export const Mentor = () => {
    return (
        <>
            <Nav />
            <Homesection/>
            <Ourmentor/>
            <Mentorship />
            <Howitswork />
             <Booksession />
            {/* <Knowyourmentor /> */}
            <Headsession />
            <Blogsession /> 

            <Footer/>

        </>
    )
}
