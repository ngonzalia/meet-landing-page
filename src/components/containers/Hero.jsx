import Button from '../pure/Button';
import Logo from '../../assets/logo.svg';
import React from 'react';

const Hero = () => {
  return (
    <main className='hero'>
      <div className='hero-logo'>
        <img
          src={Logo}
          alt='Logo'
        />
      </div>
      <div className='hero-image'></div>
      <div className='hero-image-right'></div>

      <div className='hero-content'>
        <h1 className='hero-title main-title w900 center'>
          Group Chat for Everyone
        </h1>
        <p className='hero-text text w500 center'>
          Meet makes it easy to connect with others
          face-to-face virtually and collaborate across
          any device.
        </p>
      </div>

      <div className='hero-buttons'>
        <Button
          size='lg'
          color='cyan'
          text='Download'
          version='v1.3'
        />
        <Button
          size='md'
          color='violet'
          text='What is it?'
        />
      </div>
    </main>
  );
}

export default Hero;
