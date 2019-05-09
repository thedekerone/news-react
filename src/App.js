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
    //   [
    //   {title:'Pompeo abruptly cancels Germany trip', 
    //   urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190507124956-03-arctic-council-0507-large-tease.jpg',
    //   type:'wide',
    //   subtitle:'US accuses China of reneging on trade deal',
    //   related:[{title:"US trade officials say they will act on Trump's tariff threats and slam China for derailing talks",urlToImage:null},
    //           {title:"Markets rebounded. Then the US said the tariff threat was real",urlToImage:null},
    //           {title:"The return of Tariff Man blindsides Wall Street",urlToImage:null},
    //           {title:"Amid tensions, US challenges Chinese claims in South China Sea",urlToImage:null},
    //           {title:"US-China trade war: How did we get here?",urlToImage:null},
    //           {title:"ANALYSIS Trump pours lighter fluid on the world's hot spots",urlToImage:null},
    //         ], 
    //   label:null
    // },
   
    // {
    //   title:'Markets tumble as Trump renews China tariff threats', 
    //   urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/181203191811-cnndinero-xi-trump-newspaper-medium-tease.jpg',
    //   type:'labeled',
    //   related:null,
    //   label:'Top Stories'
    // },
    // {
    //   title:'Why is Xi sending students to the country?', 
    //   urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/180226095540-03-xi-jinping-file-2017-medium-tease.jpg',
    //   type:'labeled',
    //   related:null,
    //   label:'Top Stories'
    // },
    // {
    //   title:null, 
    //   urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190202071613-trump-putin-0716-file-medium-tease.jpg',
    //   type:'labeled',
    //   related:[{title:"Pelosi: Barr lied to Congress. 'That's a crime'",urlToImage:null},
    //           {title:"Trump urges caution as Bolton and Pompeo tease a military intervention in Venezuela",urlToImage:null},
    //           {title:"'Semenya's fate is about human rights'",urlToImage:null},
    //           {title:"One of the world's highest-profile murder mysteries ends with a whimper",urlToImage:null},
    //           {title:"Chinese woman says why she paid $6.5M after her daughter got into Stanford",urlToImage:null},
    //           {title:"20kg of meth accidentally shipped to couple",urlToImage:null}
    //         ],  
    //   label:'In Focus'
    // }

    
    //   ],
    //   // FIRST ROW
    //   [
    //     {title:"Someone left a coffee cup in a 'Game of Thrones' shot", 
    //     urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190506091918-game-of-thrones-coffee-3-tease-medium-tease.jpg',
    //     type:'labeled',
    //     related:[{title:"Pelosi: Barr lied to Congress. 'That's a crime'",urlToImage:null},
    //           {title:"Trump urges caution as Bolton and Pompeo tease a military intervention in Venezuela",urlToImage:null},
    //           {title:"'Semenya's fate is about human rights'",urlToImage:null},
    //           {title:"One of the world's highest-profile murder mysteries ends with a whimper",urlToImage:null},
    //           {title:"Chinese woman says why she paid $6.5M after her daughter got into Stanford",urlToImage:null},
    //           {title:"20kg of meth accidentally shipped to couple",urlToImage:null}
    //         ],  
    //     label:'Around the world'
    //   },
    //   {
    //     title:null, 
    //     urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190506140604-cococay-private-island-thrill-waterpark-large-tease.jpg',
    //     type:'wide',
    //     related:[{title:"European football's most expensive youngster",urlToImage:"https://cdn.cnn.com/cnnnext/dam/assets/190506134811-sancho-small-tease.jpg"},{title:"One million species at threat of extinction",urlToImage:"https://cdn.cnn.com/cnnnext/dam/assets/190419111744-lw-ari-fuji---screenshot-3-small-tease.jpg"}],
    //     label:'Top Stories'
    //   },
    //   {
    //     title:'Tired of war, these women built a female-only village', 
    //     urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190202071613-trump-putin-0716-file-medium-tease.jpg',
    //     type:'labeled',
    //     related:[{title:"River transforms into 'liquid rainbow'",urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190506114107-rainbow-river-tz2-small-11.jpg'},
    //           {title:"Everything we know about Harry and Meghan's baby",urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190402120047-05-harry-meghan-file-small-11.jpg'},
    //           {title:"Vaping is 'the new secondhand smoke', study says",urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190107174458-02-young-people-vapiing-stock-small-11.jpg'}
    //         ],  
    //     label:'Tke a closer look'
    //   }
    //     ],
    //     // SECOND ROW
    //     [
    //       {title:"Is this the world's most expensive resort?", 
    //       urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190506102004-banwa-private-island-3-medium-tease.jpg',
    //       type:'labeled',
    //       related:[{title:"A small space startup that's never launched a rocket keeps landing big contracts",urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190504205557-rocket-startup-launch-contract-relativity-space-small-11.jpg'},
    //             {title:"A Ramadan etiquette guide for non-Muslims",urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/150717090420-12-eid-0717-small-11.jpg'},
    //             {title:"Vaping is 'the new secondhand smoke', study says",urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190107174458-02-young-people-vapiing-stock-small-11.jpg'}
    //           ],  
    //       label:'Opinion'
    //     },
    //     {
    //       title:null, 
    //       urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190307093604-meghan-harry-large-tease.jpg',
    //       type:'wide',
    //       related:[{title:"Meghan and Harry announce their baby boy's arrival",urlToImage:"https://cdn.cnn.com/cnnnext/dam/assets/190402120047-05-harry-meghan-file-small-tease.jpg"},{title:"Watch Prince Harry gleam as he announces birth",urlToImage:"https://cdn.cnn.com/cnnnext/dam/assets/190506150224-04-royal-birth-0506-prince-harry-small-tease.jpg"}],
    //       label:'Top Stories'
    //     },
    //     {
    //       title:'Tired of war, these women built a female-only village', 
    //       urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190202071613-trump-putin-0716-file-medium-tease.jpg',
    //       type:'labeled',
    //       related:[{title:"River transforms into 'liquid rainbow'",urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190506114107-rainbow-river-tz2-small-11.jpg'},
    //             {title:"Everything we know about Harry and Meghan's baby",urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190402120047-05-harry-meghan-file-small-11.jpg'},
    //             {title:"Vaping is 'the new secondhand smoke', study says",urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190107174458-02-young-people-vapiing-stock-small-11.jpg'}
    //           ],  
    //       label:'Tke a closer look'
    //     }
    //       ],
          
    //   // THIRD ROW
    //   [
    //     {title:"'Shale is not superman.' Geopolitical chaos is testing the limits of America's oil boom", 
    //     urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190502175713-shale-oil-rig-large-tease.jpg',
    //     type:'labeled',
    //     related:[{title:"Adidas can't make enough sportswear to meet demand",urlToImage:null},
    //           {title:"Scandinavian air pilot strike is over after thousands of canceled SAS flights",urlToImage:null},
    //           {title:"Want to work for L'Oreal? Get ready to chat with an AI bot",urlToImage:null}
    //         ],  
    //     label:'CNN Business'
    //   },
    //   {
    //     title:'The tunnel that changed Europe forever', 
    //     urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190503163842-tunnel-construction-workers-large-tease.jpg',
    //     type:'labeled',
    //     related:[{title:"The world's most positive countries",urlToImage:null},
    //           {title:"Celebrating the piña colada's birthplace",urlToImage:null},
    //           {title:"Most beautiful places on Earth",urlToImage:null},
    //           {title:"Is it worth it to fly an ultra-low-cost airline?",urlToImage:null}
    //         ], 
    //     label:'Top Stories'
    //   },
    //   {
    //     title:'Ad here!', 
    //     urlToImage:'https://martechtoday.com/wp-content/uploads/2018/08/mobile-ads-phone-ss-1920_xji94m.png',
    //     type:'wide',
    //     related:null,  
    //     label:'Weather'
    //   },
    //   // FASFGFDS
    //     {title:"'Shale is not superman.' Geopolitical chaos is testing the limits of America's oil boom", 
    //     urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190506171347-kaito-toba-spt-intl-large-tease.jpg',
    //     type:'ad',
    //     related:[{title:"Adidas can't make enough sportswear to meet demand",urlToImage:null},
    //           {title:"Scandinavian air pilot strike is over after thousands of canceled SAS flights",urlToImage:null},
    //           {title:"Want to work for L'Oreal? Get ready to chat with an AI bot",urlToImage:null}
    //         ],  
    //     label:'CNN Business'
    //   },
    //   {
    //     title:'The tunnel that changed Europe forever', 
    //     urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/190507110642-ozwald-boateng-tease-large-tease.jpg',
    //     type:'ad',
    //     related:[{title:"The world's most positive countries",urlToImage:null},
    //           {title:"Celebrating the piña colada's birthplace",urlToImage:null},
    //           {title:"Most beautiful places on Earth",urlToImage:null},
    //           {title:"Is it worth it to fly an ultra-low-cost airline?",urlToImage:null}
    //         ], 
    //     label:'Top Stories'
    //   },
    //   {
    //     title:'Ad here!', 
        
    //     type:'ad',
    //     related:null,  
    //     label:'Weather'
    //   }
    //     ]
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
