import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import classNames from 'classnames'
import DeleteButton from '../../components/pageComponents/menuContent/DeleteButton'

const Booking = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state", state);
  return <div className="Booking">
        {state.busket.box.map((item,idx) => (
          <span>
          <span key={item.id}
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



{/* <span>
    <span key={item.id}
      className={classNames('card')}>
      <img src={item.imageUrl} alt="" />
      <div>{item.name}</div>
      <div>
        <div>{item.price}</div>
        <BookButton />
      </div>
    </span>
    <div>      
    </div>
  </span>*/}