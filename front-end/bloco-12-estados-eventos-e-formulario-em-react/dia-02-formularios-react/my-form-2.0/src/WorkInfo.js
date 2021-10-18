import React from "react";

class WorkInfo extends React.Component {
  render() {
    return(
      <fieldset>
        <label>Escreva um resumo do seu currículo
          <textarea maxLength="1000" required value={this.props.resumoValue} onChange={this.props.handleChange} name="resumo"></textarea>
        </label>
        <label>Cargo:
          <textarea maxLength="40" required value={this.props.cargoValue} onChange={this.props.handleChange}
          onMouseEnter={this.props.handleOnMouseEnter} name="cargo"></textarea>
        </label>
        <label>Descrição do cargo
          <input maxLength="500" required></input>
        </label>
      </fieldset>
    )
  }
}

export default WorkInfo;