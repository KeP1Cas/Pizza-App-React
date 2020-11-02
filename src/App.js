import React, { Component } from "react";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";
import axios from 'axios';
import { connect } from 'react-redux';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

class App extends Component {
  componentDidMount() {
      axios.get('http://localhost:3000/bd.json')
        .then(({ data }) => {
          this.props.setPizzas(data.pizzas)
        })
  }
  
  render() {

    return(
      <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={this.props.items}/>} exact/>
        <Route path="/cart" component={Cart} exact/>
      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items)),
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);