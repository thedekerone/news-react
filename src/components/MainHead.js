import React from 'react'
import Navbar from './Navbar'
import Menu from './Menu'
import './MainHead.css'


const MainHead=(props)=> {

    if(props.show===true){
      return (
      
    <div>
      <Navbar show={props.show} showNav={props.showNav}></Navbar>
      
       <Menu item={props.item} show={props.show} showNav={props.showNav}></Menu>
  
    </div>
  )
      }
      else{
          return(
            <div>
      <Navbar show={props.show} showNav={props.showNav}></Navbar>
      <Menu item={props.item} show={props.show} showNav={props.showNav} ></Menu>
     
      
    </div>  
          )
      }
}

export default MainHead