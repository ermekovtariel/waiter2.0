import React, { Component } from 'react'
import './salat.scss'
import classNames from 'classnames'



export default class Salata extends Component {
    render() {
        return (
            <span className={classNames(
            {
                'book': this.props.book
            },
            {
                'card': this.props
            },
            )}>
            /*IMG*/
            <span>Салат</span>
            <button>Заказать</button>
        </span>
        )
    }
}
