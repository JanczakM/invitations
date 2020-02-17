import React from 'react';
import PropTypes from 'prop-types';
import './next.scss';

const Next = ({text, path}) => (
  <a href={path}>{text}</a>
)

Next.propTypes = {
  text: PropTypes.string,
  path: PropTypes.string,
};

export default Next;
