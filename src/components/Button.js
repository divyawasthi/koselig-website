
import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';



const Button = ({
  children,
  type,
  onClick
}) => {
  const checkButtonStyle = 'btn--primary';
  const checkButtonSize = 'btn--medium';

  return (
    <Link to='/Login' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button ;