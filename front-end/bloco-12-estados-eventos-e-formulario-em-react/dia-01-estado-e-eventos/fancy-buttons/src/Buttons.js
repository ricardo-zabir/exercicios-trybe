import React from "react";


class Buttons extends React.Component {
  constructor(props) {
    super();
    this.state = {
      numero1: 0,
      numero2: 0,
      numero3: 0,
    }
    //this.handleClick = this.handleClick.bind(this);
    //this.colorOfButton = this.colorOfButton.bind(this);
  }
  handleClick = (number) => {
    if(number === 1) {
      this.setState((priorState, _props) => ({
        numero1: priorState.numero1 + 1,
      }))
    }
    else if(number === 2) {
      this.setState((priorState, _props) => ({
        numero2: priorState.numero2 +1,
      }))
    }
    else {
      this.setState((priorState, _props) => ({
        numero3: priorState.numero3 +1,
      }))
    }
  }
  colorOfButton = (number) => {
    if(number % 2 === 0) {
      return 'green'
    }
    return 'white'
  }
  render() {
    return(
      <div className='buttons-container'>
        <button style={{backgroundColor: this.colorOfButton(this.state.numero1) }} onClick={() => this.handleClick(1)} >{this.state.numero1}</button>
        <button style={{backgroundColor: this.colorOfButton(this.state.numero2) }} onClick={() => this.handleClick(2)}>{this.state.numero2}</button>
        <button style={{backgroundColor: this.colorOfButton(this.state.numero3) }} onClick={() => this.handleClick(3)}>{this.state.numero3}</button>
      </div>
    )
  }
}

export default Buttons