import React from 'react';
import Feature from '../../components/feature/feature';
import './features.css';

const featuresData =[
   {
      title:'Case Study: 1',

      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem libero, ullamcorper eget velit sed, convallis ultrices ante. Quisque lobortis turpis in lectus vulputate volutpat. Suspendisse potenti.'
   },

   {
      title:'Case Study: 2',

      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem libero, ullamcorper eget velit sed, convallis ultrices ante. Quisque lobortis turpis in lectus vulputate volutpat. Suspendisse potenti.'
   },

   {
      title:'Case Study: 3',

      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem libero, ullamcorper eget velit sed, convallis ultrices ante. Quisque lobortis turpis in lectus vulputate volutpat. Suspendisse potenti.'
   },

   {
      title:'Case Study: 4',

      text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lorem libero, ullamcorper eget velit sed, convallis ultrices ante. Quisque lobortis turpis in lectus vulputate volutpat. Suspendisse potenti.'
   }
]

const Portfolio = () => {
   return (
   <><div class="r1feature">
    <h1>Portfolio</h1>
  </div>
      <div className="transformer__features section__padding" id="features">
         
         <div className="transformer__features-heading">
            <h1 className="gradient__text">
               Beyond Imagination Case Studies and Thousands of happy clients over the globe.
            </h1>
            <p>Sign In To get Started</p>
         </div>

         <div className="transformer__features-container">
            {featuresData.map((item,index)=>(
               <Feature title={item.title} text={item.text} key={item.title +index}></Feature>
            ))}

         </div>
      </div>
      </>
   )
}

export default Portfolio
