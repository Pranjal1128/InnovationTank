import React, { useEffect, useState } from 'react';
import './BuyPage.css';
import Carousel from './Carousel';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getPortfolio } from '../../actions/portfolio';
import Navbar from '../Navbar/Navbar';

const comp2 = () => {
  return <p>hi there.</p>;
};

const BuyPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.portfolio);
  const [currProject, setCurrProject] = useState();
  const [bio, setBio] = useState();
  const [name, setName] = useState();
  const [leader, setLeader] = useState();
  const [stocks,setStocks] = useState();

  const comp1 = () => {
    return <p style={{ textAlign: "center" }}>{bio}</p>;
  };

  useEffect(() => {
    dispatch(getPortfolio());
  }, [dispatch]);

  useEffect(() => {
    // Check if projects is not empty and has at least one element
    if (projects && projects.length > 0) {
      var project = projects[0];

      for (var i = 0; i < project.length; i++) {
        if (project[i]._id === id) {
          setCurrProject(project[i]);
          setName(project[i].name);
          setBio(project[i].about);
          setLeader(project[i].leader);
          setStocks(project[i].stock);
          break; // Once the project is found, exit the loop
        }
      }
    }
  }, [id, projects]);

  const carouselItems = [comp1(), comp2()];

  const handleSubmit = () => {
    // Your buy logic here
    // You can access the project details using name, bio, leader
  };

  return (
    <div className='buy-page'>
      <Navbar/>
      <div className='buy-page-details'>
        <h2>{name}</h2>
        {/* <p>{bio}</p>
        <p>{leader}</p> */}
        <Carousel items={carouselItems} />
      </div>
      <div className='buy-page-input'>
        <p>
        <input
  type='text'
  placeholder={`Enter Amount/${stocks}`}
  className='buy-amount'
/>
        </p>
        <button onClick={handleSubmit}>Buy</button>
      </div>
    </div>
  );
};

export default BuyPage;
