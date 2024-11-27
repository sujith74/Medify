import React from 'react'
import './Footer.css'

function Footer(){
    return (

<>
<footer className='footer'>
    <div className='in-footer'>
    <div className='section-1'> 
        <h2 className='Medify'>Medify</h2>
        <div className='column-1'>
            <div className="links">About Us</div>
            <div className="links">Our Pricing</div>
            <div className="links">Our Gallery</div>
            <div className="links">Appointemnt</div>
            <div className="links">Privacy Policy</div>

        </div>
        <div className='column-2'>
        <div className="links">Orthology</div>
        <div className="links">Neurology</div>
        <div className="links">Dental Care</div>
        <div className="links">Opthalmology</div>
        <div className="links">Cardiology</div>

        </div>
        <div className='column-3'>
        <div className="links">About Us</div>
        <div className="links">Our Pricing</div>
        <div className="links">Our Gallery</div>
        <div className="links">Appointment</div>
        <div className="links">Privacy Policy</div>

        </div>

    </div>
    <div className='section-2'> 

        <div className='footer-line'>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</div>
    </div>
    </div>

    </footer></>
    )
}
export default Footer