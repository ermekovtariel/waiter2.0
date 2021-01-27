import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrice } from "../../redux/bascket/action";

function FinishPrice() {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.price.totalPrice);

  const addPriceList = () => {
    dispatch(getPrice());
  };
    useEffect(() => addPriceList(), []);
  return (
    <button onClick={addPriceList}>
      <p>{price}</p>
    </button>
  );
}

export default FinishPrice;
