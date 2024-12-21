import React from 'react';
import Image from 'react-bootstrap/Image';
import greens from '../Images/market-greens.webp';

function Events() {
  return (
    <div className='sector'>
        <div className='container'>
            <hr />
            <h1 className='section-title'>Happenin's</h1>
            <p>
            Humo quae secundum ne sociis hos. Ad iusto nullus abigo humo litora varius. Dui tempus augue penatibus facilisi sem obruo sapien. Natoque esca ingenium vitae abluo. Platea lacus ipsum dapibus ridiculus proin ratis. Ridiculus fringilla usitas exputo conventio cogo. Dictumst nisi ullamcorper abigo iriure.
            </p>
        </div>
        <Image className="section-image" 
            src={greens} 
            fluid
        />
    </div>
  )
}

export default Events