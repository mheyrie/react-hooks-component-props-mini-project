import React from 'react'
import Article from './Article'
import blogData from '../data/blog'

function ArticleList({posts}){
    console.log(posts)
  return (
    <div>
        <main>
            {posts.map(detail=>(
              <Article 
              key={detail.id}
              title={detail.title}
              date={detail.date}
              preview={detail.preview}
              />  
            ))}
            
        </main>
    </div>
  )
}

export default ArticleList