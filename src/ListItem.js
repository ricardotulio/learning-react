import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.name}</td>
      </tr>
    )
  }
}

export default ListItem
