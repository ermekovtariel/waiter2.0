import React, { useEffect } from "react";
import {
  Categories,
  Salat,
  PopapSort,
} from "../../components/pageComponents/menuContent/index";
import { useSelector, useDispatch, useStore } from "react-redux";
import { getPizzas } from "../../redux/pizzas/action";
import "./tasks.scss";

const Tasks = () => {
  //   const pizzas = useSelector((state) => state.pizzas);
  const store = useStore();
  const state = store.getState();
  const dispatch = useDispatch();

  const getPizzasList = () => {
    dispatch(getPizzas());
  };

  useEffect(() => getPizzasList(), []);

  let itemsList = (state.pizzas.items).map((item, idx) => (
    <Salat key={idx} {...item}/>
  ));

  return (
    <div className="menu">
      <div>
        <PopapSort
          items={[
            { name: "популярности", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "alphabet" },
          ]}
        />
        <Categories
          onClick={(name) => console.log(name)}
          items={["Пицца", "Бургер", "Напитки"]}
        />
        <div>{itemsList}</div>
      </div>
    </div>
  );
};

export default Tasks;
