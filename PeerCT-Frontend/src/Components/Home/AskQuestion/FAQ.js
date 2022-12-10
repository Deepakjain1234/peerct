import React, { useState, useEffect } from 'react'

export const FAQ = () => {
    const [faq_content, setfaq_content] = useState([])
    useEffect(() => {
        setfaq_content([
            {
                question: 'What is the difference between a "free" and a "paid" account?',
                answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum sequi quidem, cumque dolor accusantium itaque tempora vel doloribus cum architect'
            },
            {
                question: 'What is the difference between a "free" and a "paid" account?',
                answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum sequi quidem, cumque dolor accusantium itaque tempora vel doloribus cum architect'
            },
            {
                question: 'What is the difference between a "free" and a "paid" account?',
                answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum sequi quidem, cumque dolor accusantium itaque tempora vel doloribus cum architect'
            },
        ])
    }, [])
    return (
        <div className='faq-section'>
            <div className="faq-tittle">
                <h2>Frequently Asked Questions</h2>
            </div>
            <div className="faq-cont">
                {
                    faq_content.map((faq) => {
                        return (<div className="faq-cont-item">
                            <div className="faq-cont-item-tittle">
                                <h3>{faq.question}</h3>
                            </div>
                            <div className="faq-cont-item-text">
                                <p>{faq.answer}</p>
                            </div>
                        </div>)
                    })
                }

            </div>
        </div>
    )
}