import React from 'react';
import Image from 'react-bootstrap/Image';
import grapes from '../Images/grapes.webp';
import { Button } from 'react-bootstrap';

function CallToAction() {
  return (
    <div className='sector'>
        <div className='container'>
            <div className='background'>
                <hr />
                <h1 className='section-title'>Fruits of Fellowship</h1>
                <p>Jugis quae jugis tempor est. Suscipere sed antehabeo suspendisse cogo quisque lenis ille. Sapien pulvinar egestas tation magnis dolor erat at. Feugait egestas paulatim enim ymo. Mattis plaga gravis utrum comis esse eum.</p>
                <Button variant='warning'>Join Up!</Button>
            </div>
        </div>
        <Image className='section-image'
            src={grapes}
            alt='grapes image'
            fluid
        />
    </div>
  )
}

export default CallToAction