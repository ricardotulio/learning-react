import React, { Component } from 'react'
import { 
  append,
  assoc,
  merge,
} from 'ramda'
import Form from './Form'
import List from './List'

class CustomerList extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      items: [],
      value: '',
    }

    this.onChange = this.onChange.bind(this)
    this.addItem = this.addItem.bind(this)
  }

  onChange(event) {
    const value = event.target.value

    this.setState(prevState =>
      assoc('value', value, prevState)
    )
  }

  addItem() {
    this.setState(prevState =>
      assoc('items', append({ name: this.state.value }, prevState.items), prevState)
    )
  }

  render() {
    return (
      <div>
        <Form value={this.state.value}
          onChange={this.onChange}
          addItem={this.addItem} />
        <List items={this.state.items} />
      </div>
    )
  }
}

export default CustomerList
