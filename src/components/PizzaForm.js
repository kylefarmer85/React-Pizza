import React, { Component } from "react"

class PizzaForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      topping: this.props.pizza.topping,
      size: this.props.pizza.size,
      vegetarian: this.props.pizza.vegetarian,
      id: this.props.pizza.id,
      currentProps: this.props.pizza
    }
  }
  handleSubmit = (e) => {
    this.props.sendUpdate()
    if (this.state.id) {
      const reqOBJ = {method: "PATCH",
    body: JSON.stringify({
      topping: this.state.topping,
      size: this.state.size,
      vegetarian: this.state.vegetarian
    }),
    headers: {
      'Content-type': "application/json"
    }}
    fetch(`http://localhost:3000/pizzas/${this.state.id}`,reqOBJ)
    .then(resp => resp.json())
    .then(console.log("Hey it worked"))
    }
  }

  render(){
  if (this.state.currentProps !== this.props.pizza) {
    this.setState({
      topping: this.props.pizza.topping,
      size: this.props.pizza.size,
      vegetarian: this.props.pizza.vegetarian,
      id: this.props.pizza.id,
      currentProps: this.props.pizza
    })
  }
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={this.state.topping} onChange={(e) => {
              this.setState({topping: e.target.value})
            }}/>
        </div>
        <div className="col">
          <select value={this.state.size} className="form-control" onChange={(e) => {
            this.setState({size: e.target.value})
          }}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={this.state.vegetarian} onChange={() => {this.setState({
              vegetarian: !this.state.vegetarian})}}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={!this.state.vegetarian} onChange={() => {this.setState({
              vegetarian: !this.state.vegetarian})}}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={console.log} onClick={(e) => {this.handleSubmit(e)}}>Submit</button>
        </div>
      </div>

  )}
}

export default PizzaForm
