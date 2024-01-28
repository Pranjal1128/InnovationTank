import React from 'react';
import './BuyPage.css';
import Carousel from './Carousel';

const handleSubmit = () => {};

const BuyPage = () => {
 

  return (
    <div className='buy-page'>
      <div className='buy-page-details'>
        <h2>Company</h2>
        <div className='buy-page-carousel'>
        {/* <Carousel/> */}
        </div>
      </div>
      <div className='buy-page-input'>
        <p>
          <input type='text' placeholder='Code' />
        </p>
        <button onClick={handleSubmit}>Buy</button>
      </div>
    </div>
  );
};

export default BuyPage;
