import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { skills_data } from './skill_data';

const Qualification = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    try {
      // Assuming skills_data is an array of objects, not a URL
      setJobs(skills_data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { title, Board, dates, School } = jobs[value];

  return (
    <section className="section" id='qualification'>
      <div className="title">
        <h2>Qualifications</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setValue(index)}
              className={`job-btn ${index === value && 'active-btn'}`}
            >
              {item.title}
            </button>
          ))}
        </div>
        {/* job info */}
        <article style={{textAlign:"left"}}  className="job-info">
          <h3>{title}</h3>
          <p className="board">{Board}</p>
          <p className="dates">{dates}</p>
          <p className="school">{School}</p>
        </article>
      </div>
    </section>
  );
};

export default Qualification;

