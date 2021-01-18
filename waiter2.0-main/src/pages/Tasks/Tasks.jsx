import React from 'react';
import { Categories, Salat, PopapSort } from '../../components/pageComponents/menuContent/index';

import './tasks.scss'

const Tasks = () => {

    return (
        <div className='menu'>
            <div>
                <PopapSort />
                <Categories
                    onClick={(name) => console.log(name)}
                    items={[
                        'Пицца',
                        'Бургер',
                        'Напитки'
                    ]} />
                <div>
                    <Salat />


                </div>

            </div>
        </div>
    )
}


export default Tasks