import './App.css';
import MainHead from'./components/MainHead'
import React, { Component } from 'react'
import News from './components/News'
import Collage from './components/Collage';
import axios from 'axios'




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
      ],
      articles:[
      [
      
        ],[],[],[]
      ], 

      // END OF ARTICLES
    
    }
    this.showNav=this.showNav.bind(this)
  }
  componentWillMount(){
    this.showNav()
  }
  componentDidMount(){
    axios.get('https://newsapi.org/v2/everything?q=technology&pageSize=100&apiKey=2297410c24494e6ca846b19e08376bd3').then(
      res=>{
        console.log(res.data);
        const select=(gaa,a,b,c,d)=>{
          gaa[a+c].type='wide'
          gaa.slice(a,b).map((e)=>{
            e.label=e.author
          })
         
          gaa[a+c].related=gaa.slice(a+10,a+14).map((e)=>{
            return {title:e.title, urlToImage:null}
          })
          gaa[a+d].related=gaa.slice(a+10,a+14).map((e)=>{
            return {title:e.title, urlToImage:null}
          })
          return gaa.slice(a,b)
      }
      const setter=(res,a)=>{
        res[a].label=null;
          return [select(res,a,a+4,0,3),select(res,a+4,a+8,1,0),select(res,a+8,a+12,3,2),select(res,a+12,a+18,2,0)]
      }
      
        const a=setter(res.data.articles,2)
        console.log(a)
        this.setState({...this.state,articles:a})
        console.log(this.state)
      }).catch(err=>console.log(err))
  }

showNav=()=>{
  this.setState({
    ...this.state,
    show:!this.state.show
    
    
  })

}

  render() {
    
    return (
      <div>

        <MainHead item={this.state.navigationItems} show={this.state.show} showNav={this.showNav}></MainHead>
        <News articles={this.state.articles[0]}></News>
        {/* <img alt='das' width='50%' height='150px' className='center' src='https://www.looofa.com/images/ad_web.png'/> */}
        <News articles={this.state.articles[1]}></News>
        <News articles={this.state.articles[2]}></News>
        <Collage articles={this.state.articles[3]}></Collage>
   
      </div>
    )
  }
}


export default App;
