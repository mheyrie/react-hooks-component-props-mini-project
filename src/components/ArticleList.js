import React from 'react'
import Article from './Article'


function ArticleList({posts}){
    console.log(posts)
  return (
    <div>
        <main>
            {posts.map((detail, index)=>(
              <Article 
              key={index}
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