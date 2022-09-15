import React from 'react'
import "../css/Recruitment.css";
 
export default function Recruitment() {
  return (
    <div className="recruitment-container" id="recruitment">
        <div className="title">Recruitment</div>
        <div className="description">
        Our candidates are selected throughout the academic year based on their performance using the following criteria:
        </div>
        <div className='card-container'>
          <div className="info-container">
            <div className="circle-container">
              <div className='circle'>
                <i className='fa-solid fa-store'></i>
              </div>
            </div>
            <div className='c-title'>Jobshop</div>
            <div className='c-description'>All candidates should be already registered with the </div>
            <a href="https://jobshopcareers.brunel.ac.uk/">
              <h2>Jobshop</h2>
            </a>
          </div>
 
          <div className="info-container">
            <div className="circle-container">
              <div className='circle'>
                <i className='fa-solid fa-plus'></i>
              </div>
            </div>
            <div className='c-title'>Brunel Plus</div>
            <div className='c-description'>Continuous participation in <a href="https://plus.brunel.ac.uk/"><h2>Brunel+</h2></a>activities.</div>
          </div>
 
          <div className="info-container">
            <div className="circle-container">
              <div className='circle'>
                <i className='fa-solid fa-handshake'></i>
              </div>
            </div>
            <div className='c-title'>Collegiality</div>
            <div className='c-description'>You actively help your peers to develop further.</div>
          </div>
 
          <div className="info-container">
            <div className="circle-container">
              <div className='circle'>
                <i className='fa-solid fa-people-group'></i>
              </div>
            </div>
            <div className='c-title'>Teamwork</div>
            <div className='c-description'>Your lecturers recognise you for actively participating and contributing to team efforts.</div>
          </div>
 
          <div className="info-container">
            <div className="circle-container">
              <div className='circle'>
                <i className='fa-solid fa-user-tie'></i>
              </div>
            </div>
            <div className='c-title'>Professionalism</div>
            {/* <div className='c-description'>Your lecturers recognise your punctuality to meetings, and your communication with your lecturers is professional.</div> */}
            <div className='c-description'>Punctuality to your meetings and professional communications will be recognised by your lecturers.</div>
          </div>
 
          <div className="info-container">
            <div className="circle-container">
              <div className='circle'>
                <i className='fa-solid fa-a'></i>
              </div>
            </div>
            <div className='c-title'>Grades</div>
            <div className='c-description'>Your grades are B or above in those modules where you develop the necessary skills for the jobs at hand. </div>
          </div>

          <div className="info-container">
            <div className="circle-container">
              <div className='circle'>
                <i className='fa-solid fa-diagram-project'></i>
              </div>
            </div>
            <div className='c-title'>BTM Challenge Projects</div>
            <div className='c-description'>Completed one or more of our challenge projects in our portfolio. <a href="mailto:btm@brunel.ac.uk?subject=Talent Recruitment Query"><h2>Contact</h2></a> us for more details.</div>
          </div>
          
        </div>
        {/* <div className=''>If you have an invitation code from a lecturer, click here: Otherwise, Email us at: btm@brunel.ac.uk or ask your tutor for an invitation code if you think you have all these characteristics.</div> */}
      </div>
  )
}
