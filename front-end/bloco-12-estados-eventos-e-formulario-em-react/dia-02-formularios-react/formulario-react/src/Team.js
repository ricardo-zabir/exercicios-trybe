import React from "react";

class Team extends React.Component {
  render() {
    return(
      <div>
        <label>
            Qual é seu time do coração?
            <select name="time" onChange={this.props.handleChange} value={this.props.value}>
              <option value=''>Selecione seu time</option>
              <option value="inter">Inter</option>
              <option value="gremio">Grêmio</option>
              <option value="juventude">Juventude</option>
            </select>
          </label>
          <p>{
            this.props.value === '' ? 'Selecione um time válido' : ''
            }</p>
      </div>
    )
  }
}

export default Team;