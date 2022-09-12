import React from 'react'
import "../css/Recruitment.css";
 
export default function Recruitment() {
  return (
    <div className="recruitment-container" id="recruitment">
        <div className="title">Recruitment</div>
        <div className="description">
            Talents are hand picked by our experts based on multiple variables
        </div>
        <div className='card-container'>
          <div className="info-container">
            <div className="circle-container">
              <div className='circle'>
                <i className='fa-solid fa-store'></i>
              </div>
            </div>
            <div className='c-title'>Jobshop</div>
            <div className='c-description'>All candidates should register with the Jobshop beforehand.</div>
          </div>
 
          <div className="info-container">
            <div className="circle-container">
              <div className='circle'>
                <i className='fa-solid fa-plus'></i>
              </div>
            </div>
            <div className='c-title'>Brunel Plus</div>
            <div className='c-description'>Actively participating in Brunel+ activities.</div>
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
            <div className='c-title'>Proffesionalism</div>
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
         
        </div>
        {/* <div className=''>If you have an invitation code from a lecturer, click here: Otherwise, Email us at: btm@brunel.ac.uk or ask your tutor for an invitation code if you think you have all these characteristics.</div> */}
      </div>
  )
}
