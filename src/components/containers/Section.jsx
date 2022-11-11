import React from 'react';

// components
import Line from '../pure/Line';

// images
import Image1 from '../../assets/desktop/image-woman-in-videocall.jpg';
import Image2 from '../../assets/desktop/image-women-videochatting.jpg';
import Image3 from '../../assets/desktop/image-men-in-meeting.jpg';
import Image4 from '../../assets/desktop/image-man-texting.jpg';


const Section = () => {
  return (
    <div className='section'>
      <Line number='01' />

      <div className='section-images'>
        <img
          src={ Image1 }
          alt='Woman in videocall' 
          className='section-images-image'
        />
        <img
          src={ Image2 }
          alt='Women videochating'
          className='section-images-image'
        />
        <img
          src={ Image3 }
          alt='Men in meeting'
          className='section-images-image'
        />
        <img
          src={ Image4 }
          alt='Man texting'
          className='section-images-image'
        />
      </div>

      <h3 className='section-underline underline w900 center'>
        Built for modern use
      </h3>
      <h2 className='section-info-title info-title w900 center'>
        Smarter meetings, all in one place
      </h2>
      <p className='section-text text w500 center'>
        Send messages, share files, show your
        screen, and record your meetings — all in one
        workspace. Control who can join with
        invite-only team access, data encryption, and
        data export.
      </p>
    </div>
  );
}

export default Section;
