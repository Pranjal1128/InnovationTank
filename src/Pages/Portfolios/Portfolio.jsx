import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import NavBar from '../Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { getPortfolio } from '../../actions/portfolio';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Portfolio() {
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
            </div>
            <div>
              <h4 className='card-heading'>Team Leader</h4> : {project.leader}
            </div>
            <div>
              <h4 className='card-heading'>Stocks Left</h4> : {project.stock}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
