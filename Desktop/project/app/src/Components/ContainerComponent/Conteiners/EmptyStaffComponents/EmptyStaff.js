import React from 'react'
import Calendar from './Calendar'
import EmptyWithProblems from './EmptyWithProblems';
import WhoAre from './WhoAre';

function EmptyStaff() {
    return (
        <div className='alert alert-secondary'>
            <div className='font-weight-bolder'>ОТСУДСТВУЮЩИЕ СОТРУДНИКИ</div>
            <Calendar />
            <EmptyWithProblems />
            
        </div>
    )
}

export default EmptyStaff
