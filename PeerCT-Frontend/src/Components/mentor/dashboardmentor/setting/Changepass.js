import React, { useEffect } from 'react'
import './setting.css'


export const Changepass=()=>
{
    return(
        <>
        <section className='updatepass-section'>
            <div className='inner-update-pass'>
                <div className='cross-button-box'><h4>X</h4></div>
                <div className='change-pass-head'><h3>Change password</h3>
                <h5>Update your password</h5>
                </div>
                <div className='change-password-box'> 
                    <p>Old password</p>
                    <input type="text" />
                </div>
                <div className='change-password-box'> 
                    <p>New password</p>
                    <input type="text" />
                </div>
                <div className='change-password-box'> 
                    <p>Request new password</p>
                    <input type="text" />
                </div>
                <div className='save-changes-button'>
                    <button>Save changes</button>
                </div>

            </div>

        </section>
        
        </>
    )
}