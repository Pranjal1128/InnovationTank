import React,{ useState } from 'react'
import "./Portfolio.css"
import NavBar from "../Navbar/Navbar"

const stocksLeft = 15;
const projectName = 'Stocks Up';
const teamLeader = 'Lakshman Mulchandani';

function Portfolio() {
  const [navChange, setNavChange] = useState(true);

  const handleNavChange = (data) => {
    setNavChange(data);
    // navChange = true;
    console.log(navChange);
    console.log(data);
  };

  return (
    <div style={{ position: "relative", height: "100%", backdropFilter: navChange ? "blur(0)" : "blur(6px)" }}>
      <div style={{position:"relative", zIndex:"2"}}>
        <NavBar onDataChange={handleNavChange}/>
      </div>
        

        <div className='portfolio-section' style={{filter: navChange ? "blur(0)" : "blur(6px)" }}>
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
            </div>
            <div className='portfolio-card'>
              <div><h4 className='card-heading'>Project Name</h4> : {projectName}</div>
              <div><h4 className='card-heading'>Team Leader</h4> : {teamLeader}</div>
              <div><h4 className='card-heading'>Stocks Left</h4> : {stocksLeft}</div>
            </div>
        </div>
    </div>
  )
}



export default Portfolio