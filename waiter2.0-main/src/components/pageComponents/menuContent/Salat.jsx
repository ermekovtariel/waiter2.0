import React from 'react'

import './salat.scss'
import classNames from 'classnames'

import { BookButton } from './index'

function Salat(props) {

    var a = 'https://www.djurenko.com/wp-content/uploads/2011/06/domashnyaya-pitstsa_10.jpg'

    return (
        <span
            className={classNames(
                {
                    'book': props.onClick
                },
                {
                    'card': props
                },
            )}>
            <img src={a} alt="" srcset="" />
            <span>Пица</span>
            <div>
                <div>Цена:123 сом</div>
                <BookButton />
            </div>
        </span>
    )
}

export default Salat
