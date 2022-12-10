import React from 'react'
import './Home.css'
import { Category } from './Category/Category'
import { Section } from './FeatureProduct/Section'
import { Navbar } from '../Common/Navbar/Navbar'
import { Footer } from '../Common/Footer/Footer'
import { Slider } from './Slider/Slider'
import { Container } from './AskQuestion/Container'
import { College } from '../Common/Navbar/college'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';





export const Home = () => {
    return (
        <>
            <Navbar/>
            <Slider/>
            
            <div className='bg-dark'>
                <Category />
                <Section />
            </div>
            <Container/>
            <Footer/>
  
            




        </>
    )
}
