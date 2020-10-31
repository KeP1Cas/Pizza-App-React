import React from "react";
import PizzaBlock from "../components/Block/PizzaBlock";
import Categorys from "../components/Category/Categorys";
import SortPopup from "../components/Category/SortPopup";

const Home = ({ items }) => {
  

  return (
    <div className="container">
      <div className="content__top">
        <Categorys
          onClickItem={(name) => console.log(name)}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          items.map(obj => (
            <PizzaBlock key={obj.id} {...obj}/>
          ))
        }
        
      </div>
    </div>
  );
};

export default Home;
