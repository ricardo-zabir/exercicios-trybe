import React from 'react';
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
  render() {
    const object = this.props.poke;
    return (
      <div className='pokemonCard'>
        <p>Nome : { object.name}</p>
        <p>Tipo : { object.type}</p>
        <p>Peso : { object.averageWeight.value} {object.averageWeight.measurementUnit}</p>
        <img src= {object.image} alt= 'Pokemon'></img>
      </div>
    )
  }
}

Pokemon.propTypes = {
  poke: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    })
  })
}

export default Pokemon