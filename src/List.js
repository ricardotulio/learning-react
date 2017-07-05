import React, { Component } from 'react'
import { map } from 'ramda'
import ListItem from './ListItem'

class List extends Component {
  render() {
    return (   
      <table>
        {map(item => <ListItem item={item} />, this.props.items)}
      </table>
    )
  }
}

export default List
