import React from "react"

const Pizza = (props) => {

  function handleClick() {
    props.passPizzaToEdit({
      topping: props.info.topping,
      size: props.info.size,
      vegetarian: props.info.vegetarian,
      id: props.info.id
    })

  }

  return(
    <tr>
      <td>{props.info.topping}</td>
      <td>{props.info.size}</td>
      <td>{props.info.vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary" onClick={() => handleClick()}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
