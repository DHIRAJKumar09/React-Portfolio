import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
import './experience.css';
const Experience=()=>{

   const [loading, setLoading] = useState(true);
   useEffect(()=>{
    setLoading(false);
   })

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  // const { company, dates, duties, title } = jobs[value]
  return (
    <section className="section" id='research'>
      <div className="title">
        <h2> Reserch experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
        
              <button
                className="job-btn active-btn"
              >
                Research Paper
              </button>
          
        </div>
        {/* job info */}
        <article style={{textAlign:"left"}} className="job-info">
          <h3>Performance Evaluation of Recurrent Neural Networks-LSTM and GRU for Automatic
           Speech Recognition</h3>
          <h4> IEEE</h4>
          <p className="job-date">Date Added to IEEE Xplore: 29 September 2023</p>
              <div className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>Authors: Dhiraj Kumar, Mr. Shahid Aziz</p>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>Conference: IEEE</p>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>Date of Conference: 08-09 June 2023</p>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>Paper ID/DOI: 10.1109/IC2E357697.2023.1026256</p>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>Conference Location: Srinagar Garhwal, India</p>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>Published in: 2023 International Conference on Computer, Electronics & Electrical Engineering & their Applications (IC2E3)</p>
               
              </div>
        </article>
      </div>
 
       <a href='https://ieeexplore.ieee.org/document/10262561'>
        <button type='btn' className='btn'> View More</button>
       </a>
      
    </section>

    )
}
export default Experience;