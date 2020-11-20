import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  constructor(){
    super()
    this.state = {
      pizzaInEdit: {
        topping: "none",
        vegetarian: "true",
        size: 0,
        id: null
      },
      reRender: false
    }
  }
  sendUpdate = () => {
    console.log('update sent')
    this.setState({ 
      reRender: true
    })
  }
  didRender = () =>{
    console.log("It Worked tho")
    this.setState({
      reRender: false
    })
  }
  passPizzaToEdit = (pizza) => {
    this.setState({
      pizzaInEdit: pizza
    })
  }


    
  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizza={this.state.pizzaInEdit} sendUpdate={this.sendUpdate}/>
        <PizzaList passPizzaToEdit={this.passPizzaToEdit} reRender={this.state.reRender} didRender={this.didRender}/>
      </Fragment>
    );
  }
}

export default App;
