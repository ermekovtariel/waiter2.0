import React, {useState} from 'react';
import z from './Tasks.module.css'
const Tasks = () => {
    const [groupIsOpen, setgroupIsOpen] = useState(false)
    return (
        <div className='tasks'>
            <button>Салаты</button>
            <div 
                onClick={groupIsOpen}
                className={z.eda}>
                eda
            </div>
        </div>
    )
}


export default Tasks


