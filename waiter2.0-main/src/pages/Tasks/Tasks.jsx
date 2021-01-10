import React from 'react';

import { Categories, Salat } from '../../components/pageComponents/menuContent/index';

import './tasks.scss'

const Tasks = () => {
    return (
        <div className='menu'>
            <div>
                <Categories
                    onClick={(name) => console.log(name)}
                    items={[
                        'Пицца',
                        'Бургер',
                        'Напитки'
                    ]} />
                <div>
                    <Salat book />
                    <Salat onClick={'book'} />
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