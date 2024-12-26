export const addToBusket = () => async (dispatch) => {

    return (res)=>{
        console.log(res.data.pizzas)
    dispatch({ 
        type: "BOOKED_PIZZAS",
        payload: res.data.pizzas
    })
  }  };

