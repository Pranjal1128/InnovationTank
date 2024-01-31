import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import NavBar from '../Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { getPortfolio } from '../../actions/portfolio';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Portfolio() {
<<<<<<< HEAD
  const [allProjects, setAllProjects] = useState([{name : "name",leader:"leader",about:"about"}]);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.portfolio);

  // Corrected function to handle the click event with the project ID
  const handleSubmit = (id) => {
    console.log(id)
    navigate(`/Buy/${id}`);
  };

  useEffect(() => {
    dispatch(getPortfolio());
  }, [dispatch]);

  useEffect(() => {
    // Updated to set allProjects to the entire posts array
    if(posts.length > 0) {
    setAllProjects(posts[0]);
    }
  }, [posts]);

  return (
    <div>
      <NavBar />
      <div className='portfolio-section'>
        {allProjects.map((project) => (
          <div key={project.id} onClick={() => handleSubmit(project._id)} className='portfolio-card'>
            <div>
              <h4 className='card-heading'>Project Name</h4> : {project.name}
=======
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
>>>>>>> ca3e206dfefa1c857e99047fb546041c125c5a52
            </div>
            <div>
              <h4 className='card-heading'>Team Leader</h4> : {project.leader}
            </div>
            <div>
              <h4 className='card-heading'>Stocks Left</h4> : {project.stock}
            </div>
<<<<<<< HEAD
          </div>
        ))}
      </div>
=======
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
>>>>>>> ca3e206dfefa1c857e99047fb546041c125c5a52
    </div>
  );
}

<<<<<<< HEAD
export default Portfolio;
=======


export default Portfolio
>>>>>>> ca3e206dfefa1c857e99047fb546041c125c5a52
