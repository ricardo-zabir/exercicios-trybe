import React from "react";

class Agreed extends React.Component {
  render() {
    return(
      <div>
        <label>Você concorda com os termos
            <input type="checkbox" name="agreed" checked={this.props.checked} onChange={this.props.handleChange}></input>
        </label>
        <p>{
        this.props.checked === false ? 'Caixa obrigatória' : ''
        }</p>
      </div>
    )
  }
}

export default Agreed;