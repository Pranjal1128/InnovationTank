import React from 'react'
import "./Portfolio.css"
import NavBar from "../Navbar/Navbar"

const stocksLeft = 15;
const projectName = 'Stocks Up';
const teamLeader = 'Lakshman Mulchandani';

function Portfolio() {
  return (
    <div>
        <NavBar/> 
        <div className='portfolio-section'>
            {/* <div className='portfolio-card'>
              <div><h4 className='card-heading'>Project Name</h4> : {projectName}</div>
              <div><h4 className='card-heading'>Team Leader</h4> : {teamLeader}</div>
              <div><h4 className='card-heading'>Stocks Left</h4> : {stocksLeft}</div>
            </div>
            <div className='portfolio-card'>
              <div><h4 className='card-heading'>Project Name</h4> : {projectName}</div>
              <div><h4 className='card-heading'>Team Leader</h4> : {teamLeader}</div>
              <div><h4 className='card-heading'>Stocks Left</h4> : {stocksLeft}</div>
            </div>
            <div className='portfolio-card'>
              <div><h4 className='card-heading'>Project Name</h4> : {projectName}</div>
              <div><h4 className='card-heading'>Team Leader</h4> : {teamLeader}</div>
              <div><h4 className='card-heading'>Stocks Left</h4> : {stocksLeft}</div>
            </div>
            <div className='portfolio-card'>
              <div><h4 className='card-heading'>Project Name</h4> : {projectName}</div>
              <div><h4 className='card-heading'>Team Leader</h4> : {teamLeader}</div>
              <div><h4 className='card-heading'>Stocks Left</h4> : {stocksLeft}</div>
            </div>
            <div className='portfolio-card'>
              <div><h4 className='card-heading'>Project Name</h4> : {projectName}</div>
              <div><h4 className='card-heading'>Team Leader</h4> : {teamLeader}</div>
              <div><h4 className='card-heading'>Stocks Left</h4> : {stocksLeft}</div>
            </div>
            <div className='portfolio-card'>
              <div><h4 className='card-heading'>Project Name</h4> : {projectName}</div>
              <div><h4 className='card-heading'>Team Leader</h4> : {teamLeader}</div>
              <div><h4 className='card-heading'>Stocks Left</h4> : {stocksLeft}</div>
            </div>
            <div className='portfolio-card'>
              <div><h4 className='card-heading'>Project Name</h4> : {projectName}</div>
              <div><h4 className='card-heading'>Team Leader</h4> : {teamLeader}</div>
              <div><h4 className='card-heading'>Stocks Left</h4> : {stocksLeft}</div>
            </div>
            <div className='portfolio-card'>
              <div><h4 className='card-heading'>Project Name</h4> : {projectName}</div>
              <div><h4 className='card-heading'>Team Leader</h4> : {teamLeader}</div>
              <div><h4 className='card-heading'>Stocks Left</h4> : {stocksLeft}</div>
            </div>
            <div className='portfolio-card'>
              <div><h4 className='card-heading'>Project Name</h4> : {projectName}</div>
              <div><h4 className='card-heading'>Team Leader</h4> : {teamLeader}</div>
              <div><h4 className='card-heading'>Stocks Left</h4> : {stocksLeft}</div>
            </div> */}
        </div>
    </div>
  )
}

export default Portfolio