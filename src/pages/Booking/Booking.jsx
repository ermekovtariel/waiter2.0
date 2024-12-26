import React from "react";
import { useSelector } from "react-redux";
import classNames from 'classnames'
import DeleteButton from '../../components/pageComponents/menuContent/DeleteButton'
import {delFromBusket} from '../../redux/pizzasBox/delAction'
import { useDispatch} from "react-redux";
import './booking.scss';

const Booking = () => {
  const state = useSelector((state) => state);
  // console.log("stateawdwadawdawd", state.busket.box.item);
  const dispatch = useDispatch();

  const removeFromBusketList = (item) => {
    dispatch(delFromBusket(item));
  };
  return <div
  className="Booking">
        {state.busket.box.map((item,idx) => (
          <span
          onClick={()=>removeFromBusketList(item)}
          key={item.id}>
          <span 
            className={classNames('card')}>
            <img src={item.imageUrl} alt="" />
            <div>{item.name}</div>
            <div>
              <div>{item.price}</div>
              <DeleteButton />
            </div>
          </span>
          <div>      
          </div>
        </span>
        ))}
  </div>;
};

export default Booking;