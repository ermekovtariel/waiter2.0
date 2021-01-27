import React, {useEffect, useState} from 'react'
import './salat.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { BookButton } from './index'
import { addToBusket } from "../../../redux/pizzasBox/action";
import { useDispatch, useSelector } from "react-redux";
 

function Salat(props) {
  const [busket, setBusket] = useState([]);
  const dispatch = useDispatch();
  

  function addItemToBusket(item){
    console.log(item)
  }
  const addBusketList = (item) => {
    dispatch(addToBusket(item));
  };
  // useEffect(() => addBusketList(), []);
  return (
  <span 
    onClick={()=>addBusketList(props)}>
    <span key={props.id}
      className={classNames('card')}>
      <img src={props.imageUrl} alt="" />
      <div>{props.name}</div>
      <div>
        <div>{props.price}</div>
        <BookButton />
      </div>
    </span>
    <div>      
    </div>
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
