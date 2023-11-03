import React from 'react';
import blog01 from '../../assets/blog-01.jpg';
import blog02 from '../../assets/blog02.jpg'
import blog03 from '../../assets/blog03.jpeg'
import blog04 from '../../assets/blog04.jpg'
import blog05 from '../../assets/blog05.jpg'


import Article from '../../components/article/Article';
import './blog.css'

const Blog = () => {
   return (
      <div className="transformer__blog section__padding" id="blog">
         <div className="transformer__blog-heading">
            <h1 className="gradient__text">Our Services</h1>
         </div>

         <div className="transformer__blog-container">
            <div className="transformer__blog-container_groupA">
               <Article imgUrl={blog01} title="SEARCH ENGINE
OPTIMIZATION – SEO" text="Through careful keyword
research and white hat practices, we can help you achieve high rankings in the major search engines."/>
            </div>
            <div className="transformer__blog-container_groupB">
               <Article imgUrl={blog02} title="WEBSITE DESIGN &
DEVELOPMENT" />
               <Article imgUrl={blog03} title="SOCIAL MEDIA
MARKETING"/>
               <Article imgUrl={blog04} title="CONTENT WRITING"/>
               <Article imgUrl={blog05} title="REPUTATION
MANAGEMENT"/>
            </div>
         </div>
      </div>
   )
}

export default Blog
