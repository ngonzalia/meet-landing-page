import Button from '../pure/Button';
import Line from '../pure/Line';
import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <Line number='02' />

      <div className='footer-content'>
        <h2 className='footer-title w900 center start-desktop'>
          Experience more together
        </h2>
        <p className='footer-text text w500 center start-desktop'>
          Stay connected with reliable HD
          meetings and unlimited one-on-one
          and group video sessions.
        </p>

        <Button
          size='lg'
          color='violet'
          text='Download'
          version='v1.3'
        />
      </div>
      <div className='footer-bg-color'></div>
      <div className='footer-bg-img'></div>
    </footer>
  );
}

export default Footer;
