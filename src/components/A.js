import React, { Component } from 'react'

export default class A extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        name : "Raj"
    }
  }
  
    render() {
    return (
      <div>
        <h1>hi my name is:{this.state.name}</h1>
      </div>
    )
  }
}
