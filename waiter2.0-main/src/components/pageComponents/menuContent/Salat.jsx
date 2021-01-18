import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import './salat.scss'
import classNames from 'classnames'

import { BookButton } from './index'

function Salat(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


  var a = 'https://www.djurenko.com/wp-content/uploads/2011/06/domashnyaya-pitstsa_10.jpg';

  return (<span>
    {items.map(item => (<span key={item.id}
      className={classNames(
        {
          'book': props.onClick
        },
        {
          'card': props
        },
      )}>
      <img src={a} alt="" />
      <div>{item.title}</div>
      <div>
        <div>{item.userId}</div>
        <BookButton />
      </div>


    </span>))}
  </span>)
}

export default Salat
