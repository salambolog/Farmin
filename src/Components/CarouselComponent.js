import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cherries from '../Images/cherries.webp'
import chickens from '../Images/chickens.webp';
import market from '../Images/market-cucumbers.webp';
import tractor from '../Images/tractor.webp';

function CarouselComponent() {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className='d-block w-100'
              src={tractor}
              alt='Tractor Slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100'
              src={market}
              alt='Market Slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100'
              src={chickens}
              alt='Chickens Slide' />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;