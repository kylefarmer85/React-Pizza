import React from "react"

const Pizza = () => {
  return(
    <tr>
      <td>{this.props.info.topping}</td>
      <td>{this.props.info.size}</td>
      <td>{this.props.info.vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
