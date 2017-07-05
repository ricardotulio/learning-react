import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <form>
        <label for="name">Name: </label>
        <input value={this.props.value} onChange={this.props.onChange} type="text" />
        <button type="button" onClick={this.props.addItem}>add</button>
      </form>
    )
  }
}

export default Form
