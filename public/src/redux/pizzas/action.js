import axios from "axios";

export const getPizzas = () => async (dispatch) => {
  return await axios.get("http://localhost:3000/db.json").then((res) => {
    dispatch({ 
        type: "GET_PIZZAS",
        payload: res.data.pizzas,
    })
  });
};
