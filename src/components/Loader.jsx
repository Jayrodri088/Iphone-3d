import React from 'react'
import AnimatedLogo from "../assets/images/logo-animated.gif" 

function Loader() {
  return (
    <div className='loader'>
        <img src={AnimatedLogo} className='logo' alt="apple loader" />
    </div>
  )
}

export default Loader