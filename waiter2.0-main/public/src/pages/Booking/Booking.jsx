import React, { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { addToBusket } from "../../redux/pizzasBox/action";
const Booking = () => {
  const store = useStore();
  const dispatch = useDispatch();
  const productInBusket = useSelector((state) => state.item);
  const getPizzasList = () => {
    dispatch(addToBusket());
  };
  useEffect(() => getPizzasList(), []);
console.log(productInBusket)
  return <div className="Booking">
      {productInBusket}
  </div>;
};

export default Booking;
