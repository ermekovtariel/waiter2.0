const initialState = {
    item: [
        'Кисло-сладкий цыпленок', 
        'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/af553bf5-3887-4501-b88e-8f0f55229429.jpg',
        3,
        275
],
    isLoaded: false,
  };
  console.log('reducer of booking busket')
  export const bookedPizzas = (state = initialState, action) => {
    switch (action.type) {
      case "BOOKED_PIZZAS":
        return {
          ...state,
          box: action.item
          
        };
      default:
        return state;
    }
  };
  