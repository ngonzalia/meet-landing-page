import React from 'react';

const Line = props => {
  return (
    <div className='line'>
      <div className='line-line'></div>
      <div className='line-number'>
        <p className='text w900 center'>
          { props.number }
        </p>
      </div>
    </div>
  );
}

export default Line;
