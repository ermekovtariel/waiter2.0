import React from 'react'
import QRCode from './QR-Code/QRCode'
import Booking from './Booking/Booking'
import Tasks from './Tasks/Tasks'
import Teacher from './Teacher/Teacher'

function Pages() {
    
    return (
        <div>
            <QRCode />
            <Booking />
            <Tasks />
            <Teacher result/>
        </div>
    )
}

export default Pages
