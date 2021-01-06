import React, {useState} from 'react';
import z from './Tasks.module.css'
const Tasks = (props) => {
    console.log(props.salaty);
    return (
        <div className={z.tasks}>
            <button >Салаты</button>
        </div>
    )
}


export default Tasks


