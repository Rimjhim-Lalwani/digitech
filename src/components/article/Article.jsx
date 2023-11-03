import React from 'react';
import './article.css'

const Article = ({imgUrl,title,text}) => {
   return (
      <div className="transformer__blog-container_article">
         <div className="transformer__blog-container_article-image">
            <img src={imgUrl} alt="blog"/>
         </div>

         <div className="transformer__blog-container_article-content">
            <div>
               
               <h1>{title}</h1>
               <p>{text}</p>
            </div>
            <p>Read More</p>
         </div>
      </div>
   )
}

export default Article
