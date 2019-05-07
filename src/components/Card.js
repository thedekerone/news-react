import React from 'react'

 const Card=(props)=> {
    const {article}=props
    
    switch (article.type){
        case 'wide':
        return (
            <div className='grid-item wide'>
                {article.label?<div className='head-label'><h3>{article.label}<div className='icon'><i class="fas fa-angle-right"></i></div> </h3></div>:null}
              <h1>{article.title}</h1>
              <img alt='new' src={article.imgPATH} />
              {article.related?article.related.map((element)=>{
                      return(
                          <div>
                          <div className='related-item'>
                             {element.imgPATH?<img alt='sda' src={element.imgPATH}/>:null}
                          <p>{element.title}</p>
                          </div>    
                          <hr/>
                          </div>
                      )
                  }):null}
            </div>
          )
        default:
    
            return(
                <div className={article.related?'grid-item related':'grid-item'}>
                    <h3>{article.label}</h3>
                    <img alt='new' src={article.imgPATH} />
                    <h2>{article.title}</h2>
                    {   
                        article.related?article.related.map((element)=>{
                            return(
                                <div>
                          <div className='related-item'>
                             {element.imgPATH?<img alt='sda' src={element.imgPATH}/>:null}
                          <p>{element.title}</p>
                          </div>    
                          <hr/>
                          </div>
                            )
                        }):null
                  
                  }
                </div>
            )
        

        }
    }
    



export default Card