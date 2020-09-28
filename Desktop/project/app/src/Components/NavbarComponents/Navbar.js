import React from 'react'
import CompanyName from './CompanyName'
import Admin from './Admins'

function Navbar() {
    return (
        <div className='p-3'>
            <CompanyName />
            <Admin />
        </div>
    )
}

export default Navbar
