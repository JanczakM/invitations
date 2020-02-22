import React from 'react';
import PropTypes from 'prop-types';
import './next.scss';
import {Link} from 'react-router-dom';

const Next = ({text, path}) => (
  <div className='next-container'>
    <Link to={path} className='next'>{text}</Link>
  </div>
)

Next.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
};

export default Next;
