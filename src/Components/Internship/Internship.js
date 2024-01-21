import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
export const Internship = () => {
  return (
    <section className="section" id='internship'>
      <div className="title">
        <h2> Internship</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
        
              <button
                className="job-btn active-btn"
              >
                Web Develpment
              </button>
          
        </div>
        {/* job info */}
        <article style={{textAlign:"left"}} className="job-info">
          <h3>Web Develpment</h3>
          <h4> Internshala</h4>
          <p className="job-date">112/2022 - 02/2023</p>
              <div className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p> Proficient in HTML, CSS, JavaScript, and ReactJS with a strong understanding of web development principles</p>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p> Experience in building responsive and user-friendly websites using modern techniques.</p>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>Proven ability to work effectively in a team environment, communicate clearly, and meet tight deadlines.</p>
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>Demonstrated passion for learning new technologies and eagerness to contribute to the success of the organization.</p>
               
              </div>
        </article>
      </div>
      
      <a href='https://trainings.internshala.com/s/v/2569509/e3c306af'>
      <button type="button" className="btn">View Certificate</button>
      </a>
      
    </section>

  )
}
