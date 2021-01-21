import React from 'react'
import './salat.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { BookButton } from './index'

 

function Salat({ name, imageUrl, id, price }) {
  return (<span>
    <span key={id}
      className={classNames('card')}>
      <img src={imageUrl} alt="" />
      <div>{name}</div>
      <div>
        <div>{price}</div>
        <BookButton />
      </div>
    </span>
  </span>)
}

Salat.propTypes={
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.number,
  types: PropTypes.arrayOf(PropTypes.number),
}
Salat.defaultProps={
  name: 'Product',
  price: '0',
  types: [],
}


export default Salat
