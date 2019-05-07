import React from 'react'
import Card from './Card';
import './News.css'
import './Collage.css'
import randomKey from 'random-key'
 const Collage=(props)=> {
    const {articles}=props
    return (
      <div className='collage'>
          <div className='grid'>
            {articles.map((element)=>{
              return(
                <Card key={randomKey.generate()} article={element}></Card>
              )
            })}
  
          </div>
      </div>
    )
}
export default Collage