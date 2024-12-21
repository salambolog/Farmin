import React from 'react';
import Image from 'react-bootstrap/Image';
import field from '../Images/field.webp';

function About() {
  return (
    <div className='sector'>
      <div className='container'>
          <hr />
          <h1 className='section-title'>How 'Bout It?</h1>
          <p>Processed foods, dishonest practices, and ignored regulations shouldn't determine your health and serenity. </p>
      </div>
      <Image className='section-image'
          src={field}
          alt='field image'
          fluid
      />
    </div>
  )
}

export default About