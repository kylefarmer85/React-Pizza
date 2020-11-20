import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {
  constructor(){
    super()
    this.state = {
      pizzas: []
    }
  }

  componentDidMount() {
    this.fetchPizzas()
  }
  fetchPizzas() {
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => {
      this.setState({
        pizzas: pizzas
      })
    })
  }


  renderPizza() {
    this.props.didRender
    return this.state.pizzas.map(pizza => {
      return <Pizza info={pizza} key={pizza.id} passPizzaToEdit={this.props.passPizzaToEdit}/>
    })
  } 



  render() {
    if (this.props.reRender){
      this.fetchPizzas()
    }
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.pizzas.length > 0 ? this.renderPizza() : null
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
