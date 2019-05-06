import React from 'react'
import {animated} from 'react-spring'

const Navbar=(props)=> {

  return (
    <animated.div >
    <div className='full'>
        <div className='navbar'>
            <div className='nav-icon' onClick={props.showNav}><i className="fas fa-align-justify"></i>

    </div>

            <div className='logo'></div>
        </div>      
    </div>
    </animated.div>
  )
}

export default Navbar