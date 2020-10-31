import React, { useEffect, useState } from "react";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";
import axios from 'axios';

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect (() => {
    axios.get('http://localhost:3000/bd.json')
      .then(({ data }) => {
        setPizzas(data.pizzas)
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={pizzas}/>} exact/>
        <Route path="/cart" component={Cart} exact/>
      </div>
    </div>
  );
}

export default App;