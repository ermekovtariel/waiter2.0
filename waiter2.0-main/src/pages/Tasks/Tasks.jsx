import React from 'react';
import Salat from '../../components/pageComponents/menuContent/Salat'
import './tasks.scss'
const Tasks = () => {
    return (
        <div className='menu'>
            <div>
                <h1>
                    Салат
                </h1>
                <div>
                    <Salat  book/>
                    <Salat />
                    <Salat />
                    <Salat />
                    <Salat />
                    <Salat />
                </div>
                
            </div>
        </div>
    )
}


export default Tasks