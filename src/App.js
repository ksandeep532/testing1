import React, { Component } from 'react'
 import Display from './Display'

export default class App extends Component {
  
  render() {
    return (
      <div>
      <h1 style={{color:"blue",backgroundColor:"green"}}>Header</h1>
      <Display><h1>Name={this.props.state}</h1></Display>
        <h1 style={{color:"blue",backgroundColor:"green",textAlign:"center",padding:"20px",marginTop:"440PX"}}>Header</h1>
      
      </div>
    );
  }
}
