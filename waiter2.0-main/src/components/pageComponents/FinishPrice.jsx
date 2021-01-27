import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrice } from "../../redux/bascket/action";

function FinishPrice() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log("state", state);
  return (
    <button>
    <>
      <p>{state.busket.totalPrice} сом</p>
      {/* <p>
        {state.busket.box.map((item,idx) => (
          <p key={idx}>{item.name}</p>
        ))}
      </p> */}
    </>
    </button>
  );
}

export default FinishPrice;
