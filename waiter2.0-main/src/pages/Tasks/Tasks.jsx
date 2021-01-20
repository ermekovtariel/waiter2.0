import React from 'react';
import { Categories, Salat, PopapSort } from '../../components/pageComponents/menuContent/index';

import './tasks.scss'

const Tasks = ({items}) => {
    return (
        <div className='menu'>
            <div>
                <PopapSort items={[
                    'популярности',
                    'цене',
                    'алфавиту'
                ]}/>
                <Categories
                    onClick={(name) => console.log(name)}
                    items={[
                        'Пицца',
                        'Бургер',
                        'Напитки'
                    ]} />
                <div>
                    {items.map((obj,idx)=>(
                    <Salat key={idx} {...obj} />))}
                </div>
            </div>
        </div>
    )
}


export default Tasks