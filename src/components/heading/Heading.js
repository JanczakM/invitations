import React from 'react';
import PropTypes from 'prop-types';
import './heading.scss';

const Heading = ({text}) => (
  <h1>{text}</h1>
)

Heading.propTypes = {
  text: PropTypes.string,
};

export default Heading;
