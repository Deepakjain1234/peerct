import React from 'react'
import './style.css'
import { FAQ } from './FAQ'
import { AskQuestion } from './AskQuestion'

export const Container = () => {
    return (
        <div className='faq-ask-cont'>
            <FAQ />
            <AskQuestion />
        </div>
    )
}