import './App.css';
import MainHead from'./components/MainHead'
import React, { Component } from 'react'
import News from './components/News'
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
      {title:'US accuses China of reneging on trade deal', 
      imgPATH:'https://cdn.cnn.com/cnnnext/dam/assets/190312142104-201903--trump-us-jinping-china-tarrifs-v2-large-tease.jpg',
      type:'wide',
      related:[{title:"US trade officials say they will act on Trump's tariff threats and slam China for derailing talks",imgPATH:null},
              {title:"Markets rebounded. Then the US said the tariff threat was real",imgPATH:null},
              {title:"The return of Tariff Man blindsides Wall Street",imgPATH:null},
              {title:"Amid tensions, US challenges Chinese claims in South China Sea",imgPATH:null},
              {title:"US-China trade war: How did we get here?",imgPATH:null},
              {title:"ANALYSIS Trump pours lighter fluid on the world's hot spots",imgPATH:null},
            ], 
      label:null
    },
    {
      title:'Markets tumble as Trump renews China tariff threats', 
      imgPATH:'https://cdn.cnn.com/cnnnext/dam/assets/181203191811-cnndinero-xi-trump-newspaper-medium-tease.jpg',
      type:'labeled',
      related:null,
      label:'Top Stories'
    },
    {
      title:'Why is Xi sending students to the country?', 
      imgPATH:'https://cdn.cnn.com/cnnnext/dam/assets/180226095540-03-xi-jinping-file-2017-medium-tease.jpg',
      type:'labeled',
      related:null,
      label:'Top Stories'
    },
    {
      title:null, 
      imgPATH:'https://cdn.cnn.com/cnnnext/dam/assets/190202071613-trump-putin-0716-file-medium-tease.jpg',
      type:'labeled',
      related:[{title:"Pelosi: Barr lied to Congress. 'That's a crime'",imgPATH:null},
              {title:"Trump urges caution as Bolton and Pompeo tease a military intervention in Venezuela",imgPATH:null},
              {title:"'Semenya's fate is about human rights'",imgPATH:null},
              {title:"One of the world's highest-profile murder mysteries ends with a whimper",imgPATH:null},
              {title:"Chinese woman says why she paid $6.5M after her daughter got into Stanford",imgPATH:null},
              {title:"20kg of meth accidentally shipped to couple",imgPATH:null}
            ],  
      label:'In Focus'
    }
      ],
      articles2:[
        {title:"Someone left a coffee cup in a 'Game of Thrones' shot", 
        imgPATH:'https://cdn.cnn.com/cnnnext/dam/assets/190506091918-game-of-thrones-coffee-3-tease-medium-tease.jpg',
        type:'labeled',
        related:[{title:"Pelosi: Barr lied to Congress. 'That's a crime'",imgPATH:null},
              {title:"Trump urges caution as Bolton and Pompeo tease a military intervention in Venezuela",imgPATH:null},
              {title:"'Semenya's fate is about human rights'",imgPATH:null},
              {title:"One of the world's highest-profile murder mysteries ends with a whimper",imgPATH:null},
              {title:"Chinese woman says why she paid $6.5M after her daughter got into Stanford",imgPATH:null},
              {title:"20kg of meth accidentally shipped to couple",imgPATH:null}
            ],  
        label:'Around the world'
      },
      {
        title:null, 
        imgPATH:'https://cdn.cnn.com/cnnnext/dam/assets/190506140604-cococay-private-island-thrill-waterpark-large-tease.jpg',
        type:'wide',
        related:[{title:"European football's most expensive youngster",imgPATH:"https://cdn.cnn.com/cnnnext/dam/assets/190506134811-sancho-small-tease.jpg"},{title:"One million species at threat of extinction",imgPATH:"https://cdn.cnn.com/cnnnext/dam/assets/190419111744-lw-ari-fuji---screenshot-3-small-tease.jpg"}],
        label:'Top Stories'
      },
      {
        title:'Tired of war, these women built a female-only village', 
        imgPATH:'https://cdn.cnn.com/cnnnext/dam/assets/190202071613-trump-putin-0716-file-medium-tease.jpg',
        type:'labeled',
        related:[{title:"River transforms into 'liquid rainbow'",imgPATH:'https://cdn.cnn.com/cnnnext/dam/assets/190506114107-rainbow-river-tz2-small-11.jpg'},
              {title:"Everything we know about Harry and Meghan's baby",imgPATH:'https://cdn.cnn.com/cnnnext/dam/assets/190402120047-05-harry-meghan-file-small-11.jpg'},
              {title:"Vaping is 'the new secondhand smoke', study says",imgPATH:'https://cdn.cnn.com/cnnnext/dam/assets/190107174458-02-young-people-vapiing-stock-small-11.jpg'}
            ],  
        label:'Tke a closer look'
      }
        ]
    
    
    
    }
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
      <div>
        <MainHead item={this.state.navigationItems} show={this.state.show} showNav={this.showNav}></MainHead>
        <News articles={this.state.articles}></News>
        {/* <img alt='das' width='50%' height='150px' className='center' src='https://www.looofa.com/images/ad_web.png'/> */}
        <News articles={this.state.articles2}></News>

      </div>
    )
  }
}


export default App;
