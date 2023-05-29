import React from 'react'
import Rocket from './Rocket.gif'


const Spinner = () => {
  return (
    <div div className='d-flex justify-content-center' >
      <img src={Rocket} alt="loading" style={{backgroundColor:"grey"}}/>
    </div >
  )
}


export default Spinner
