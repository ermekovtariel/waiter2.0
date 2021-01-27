import React from "react";
import { useSelector } from "react-redux";

function FinishPrice() {
  const state = useSelector((state) => state);
  return (
    <button>
    <>
      <p>{state.busket.totalPrice}</p>
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
