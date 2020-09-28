import React from 'react'
import EmptyStaff from './Conteiners/EmptyStaffComponents/EmptyStaff'
import KnowledgeBase from './Conteiners/KnowledgeBaseComponents/KnowledgeBase'
import UpcomingEvents from './Conteiners/UpcomingEventsComponents/UpcomingEvents'
import Requests from './Conteiners/RequestsComponents/Requests';

function content() {
    return (
        <div className=''>
            <EmptyStaff />
            <div className='row'>
                <div className='col'><Requests /></div>
                <div className='col'><UpcomingEvents /></div>
                <div className='col'><KnowledgeBase /></div>
            </div>    
        </div>
    )
}

export default content
