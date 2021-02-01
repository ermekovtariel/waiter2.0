import axios from "axios";

export const getPizzas = () => async (dispatch) => {
  return await axios.get("http://localhost:3000/db.json")
  .then((res) => {console.log("actio", res.data.pizzas);
    dispatch({ 
        type: "GET_PIZZAS",
        payload: res.data.pizzas,
    })
  });
};
