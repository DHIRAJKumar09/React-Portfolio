import React from 'react'
import './skills.css'
export const Skills = () => {
  return (
    <section className='section' id='skills'>
        <div className='title'>
        <h2>Skills</h2>
        <div className='underline'></div>
        </div>
        <div  className='container skill-container'>
            <div className='left'>
                <div className='skills-box' >
                <p>HTML 5</p>
                <div className='progress-bar' >
                  <span style={{width:'90%'}}>90%</span>
                </div>
                </div>

                <div className='skills-box' >
                <p>CSS</p>
                <div className='progress-bar'>
                  <span style={{width:'90%'}}>90%</span>
                </div>
                </div>

                <div className='skills-box' >
                <p>JAVASCRIPT</p>
                <div className='progress-bar'>
                  <span style={{width:'80%'}}>80%</span>
                </div>
                </div>

                <div className='skills-box' >
                <p>Reactjs</p>
                <div className='progress-bar'>
                  <span style={{width:'80%'}}>80%</span>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}
