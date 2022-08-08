import React, { Component } from 'react'

export default class   extends Component {
    state = {
 name: "sandeep",
 loc:"hyd",
 mobile:"7383783838"
  };
  render() {
    return (
      <div>
          <h1>{this.state.name}</h1> </div>

    )
  }
}
