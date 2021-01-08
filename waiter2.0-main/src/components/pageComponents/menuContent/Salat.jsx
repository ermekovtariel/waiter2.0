import React, { Component } from 'react'
import './salat.scss'
import classNames from 'classnames'
import  Button  from './BookButton'

function Salat(props) {



    return (
        <span className={classNames(
            {
                'book': props.book
            },
            {
                'card': props
            },
            )}>
            /*IMG*/
            <span>Салат</span>
            <div>
                <div>Цена:123</div>
                <Button />
            </div>
        </span>
    )
}

export default Salat
