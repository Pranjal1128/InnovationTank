import React from 'react';
import './BuyPage.css';
import Carousel from './Carousel';

const handleSubmit = () => {};

const comp1 = () =>
{
  return (
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas amet eligendi quo nisi adipisci,
       inventore id tempore vero porro et eius earum. Consequuntur ullam quos quibusdam eius, 
      nobis est officiis vero molestias reprehenderit deleniti velit non asperiores veniam atque aspernatur.</p>
  )
}


const comp2 = () =>
{
  return (
    <p>hi there.</p>
  )
}

const BuyPage = () => {

  const carouselItems = [
    comp1(),
    comp2()
  ];
 

  return (
    <div className='buy-page'>
      <div className='buy-page-details'>
        <h2>Company</h2>
    
        <Carousel items={carouselItems} />
        
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
