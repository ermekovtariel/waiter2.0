import React, {useEffect} from 'react'
import './salat.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { BookButton } from './index'
import { addToBusket } from "../../../redux/pizzasBox/action";
import { useDispatch, useSelector } from "react-redux";
 

function Salat({ name, imageUrl, id, price }) {
  
  const dispatch = useDispatch();
  const box = useSelector((state) => state.price.box);

  const addBusketList = () => {
    dispatch(addToBusket());
  };
  useEffect(() => addBusketList(), []);
  return (
  <span 
    onClick={()=> addBusketList()}>
    <span key={id}
      className={classNames('card')}>
      <img src={imageUrl} alt="" />
      <div>{name}</div>
      <div>
        <div>{price}</div>
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
