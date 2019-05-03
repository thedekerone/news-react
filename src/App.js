import './App.css';
import MainHead from'./components/MainHead'
import React, { Component } from 'react'

class App extends Component {
  constructor(){
    super()
    this.state={
      show:false,
      navigationItems:[
        {id:1, link:'http://www.facebook.com',name:'Home',icon:'fas fa-home'},
        {id:2, link:'http://www.facebook.com',name:'Docs',icon:'fas fa-book-open'},
        {id:3, link:'http://www.facebook.com',name:'About',icon:'fas fa-glasses'},
        {id:4, link:'http://www.facebook.com',name:'Contact',icon:'fas fa-phone-square'}
      
     ]}
    this.showNav=this.showNav.bind(this)
  }
  componentWillMount(){
    this.showNav()
  }
showNav=()=>{
  this.setState({
    ...this.state,
    show:!this.state.show
    
    
  })

}
  render() {
    return (
      < div>
        <MainHead item={this.state.navigationItems} show={this.state.show} showNav={this.showNav}></MainHead>

      </div>
    )
  }
}


export default App;
