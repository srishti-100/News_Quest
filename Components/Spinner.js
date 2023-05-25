import React, { Component } from 'react'
import Rocket from './Rocket.gif'

export class Loading extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center'>
        <img src={Rocket} alt="loading" />
      </div>
    )
  }
}

export default Loading
