import React from 'react';

const Button = props => {
  return (
    <button className={`btn btn-${props.size} btn-${props.color} btn-text white w900`}>
      { props.text } <span className={`btn-text-${props.color}`}>{ props.version }</span>
    </button>
  );
}

export default Button;
