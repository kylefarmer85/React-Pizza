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
    fetch('http://localhost:3000/pizzas')
    .then(resp => resp.json())
    .then(pizzas => { console.log(pizzas)
      this.setState({
        pizzas: pizzas
      })
    })
  }

  renderPizza() {
    return this.state.pizzas.map(pizza => {
      return <Pizza info={pizza} key={pizza.id} />
    })
  } 



  render() {
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
