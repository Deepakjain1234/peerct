import React from 'react'

export const AskQuestion = () => {
    return (
        <div className='main-ask-cont'>
            <div className="ask-tittle">
                <span>Ask a Question</span>
            </div>
            <form className='ask-question'>
                <input required type="text" name='name' placeholder='Your Name' />
                <input required type="number" name="mobileno" placeholder='Mobile No' />
                <textarea required style={{
                    resize: 'none'
                }} name="message" placeholder='Message'></textarea>
                <div className="btn-submit-question btn">
                    <button type="submit" className='btn'>Send Mail</button>
                </div>
            </form>
        </div>
    )
}