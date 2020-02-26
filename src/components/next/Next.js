import React from 'react';
import PropTypes from 'prop-types';
import './next.scss';
import {Link} from 'react-router-dom';


const Next = ({text, path, type}) => (
  <Link to={path} className={type === 'prev' ? 'prev' : 'next'}>{text}</Link>
)

Next.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
  type: PropTypes.string
};

export default Next;
