import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
import { skills_data } from './skill_data';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = './src/skill_data.js';
const Quality=()=>{

  return (
    <>
        <section className='section'>
        {
            skills_data.map((item)=>{
                return(
                
                        <li key={item.id}>{item.title}</li>
                 
                )
            })
        }

        </section>
    </>
    // <section className="section">
    //   <div className="title">
    //     <h2>experience</h2>
    //     <div className="underline"></div>
    //   </div>
    //   <div className="jobs-center">
    //     {/* btn container */}
    //     <div className="btn-container">
    //       {skills_data.map((item, index) => {
    //         return (
    //           <button
    //             key={item.id}
    //             onClick={() => setValue(index)}
    //             className={`job-btn ${index === value && 'active-btn'}`}
    //           >
    //             {item.company}
    //           </button>
    //         )
    //       })}
    //     </div>
    //     {/* job info */}
    //     <article className="job-info">
    //       <h3>{title}</h3>
    //       <h4>{company}</h4>
    //       <p className="job-date">{dates}</p>
    //       {duties.map((duty, index) => {
    //         return (
    //           <div key={index} className="job-desc">
    //             <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
    //             <p>{duty}</p>
    //           </div>
    //         )
    //       })}
    //     </article>
    //   </div>
    //   <button type="button" className="btn">
    //     more info
    //   </button>
    // </section>

    )
}
export default Quality;