import React from 'react'
import randomKey from 'random-key'


 const Card=(props)=> {
    const {article}=props
    
    switch (article.type){
        case 'wide':
        return (
            <div className='grid-item wide'>
                {article.label?<div className='head-label'><h3>{article.label}<div className='icon'><i className="fas fa-angle-right"></i></div> </h3></div>:null}
              {!article.label?<h1>{article.title}</h1>:null}
              {article.imgPATH?<div className='img'><img alt='new' src={article.imgPATH} /> <h2>{article.title}</h2>  </div> :null}
              {article.label?<h1>{article.title}</h1>:null}
              
              {article.related?article.related.map((element)=>{
                      return(
                          <div key={randomKey.generate()}>
                               <hr/>
                          <div className='related-item'>
                             {element.imgPATH?<img alt='sda' src={element.imgPATH}/>:null}
                          <p>{element.title}</p>
                          </div>    
                         
                          </div>
                      )
                  }):null}
            </div>
          )
        default:
    
            return(
                <div className={article.related?'grid-item related':'grid-item'}>
                    <h3>{article.label}</h3>
                    {article.imgPATH?<div className='img'><img alt='new' src={article.imgPATH} /> <h2>{article.title}</h2>  </div> :null}
                    
                    {   
                        article.related?article.related.map((element)=>{
                            return(
                                <div key={randomKey.generate()}>
                                     <hr/>
                          <div className='related-item'>
                             {element.imgPATH?<img alt='sda' src={element.imgPATH}/>:null}
                          <p>{element.title}</p>
                          </div>    
                         
                          </div>
                            )
                        }):null
                  
                  }
                </div>
            )
        

        }
    }
    



export default Card