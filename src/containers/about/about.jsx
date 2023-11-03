import React from 'react'
import Feature  from '../../components/feature/feature'
import './about.css'

const About = () => {
   return (
      <div className="transformer__whattransformer section__margin" id="transformer">
      <div className="transformer__whattransformer-feature">
        <Feature title="Who Are We?" text="We have catered to over 100+ happy clients across the globe, and have always delivered clear results with measurable outcomes. Our wide variety of expertise with certified experts in all fields makes us eligible to handle complex digital projects with ease.

We have technical expertise in DevOps, IoT, UI & UX Designing, CDN, Web and App Development, AI-ML, and more! Our motto is to understand your problem first, then analyze the relevant data, and finally curate the most appropriate digital solution. We deliver exactly what you need, always!"/></div>
      <div className="transformer__whattransformer-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
   
      </div>
      <div className="transformer__whattransformer-container">
        <Feature title="Successfull Projects" text="DigiTech delivered the Thousands of Successful projects around the world." />
        <Feature title="Global Ventures" text="Clients across the globe witness our quality, processes and work." />
        <Feature title="Knowledgebase" text="Our team consists of highly qualified, experienced and knowledgeable." />
      </div>
    </div>
   )
}

export default About
