import React from 'react'
import './News.css'
import Card from './Card';

const News=(props)=> {
  const {articles}=props
  let a=1;
  return (
    <div className='news'>
        <div className='grid-container'>
          {articles.map((element)=>{
            return(
              <Card key={a++} article={element}></Card>
            )
          })}

        </div>
    </div>
  )
}
export default News