import React from 'react';
import PropTypes from 'prop-types';
import './subheading.scss';

const Subheading = ({text}) => (
  <h2>{text}</h2>
)

Subheading.propTypes = {
  text: PropTypes.string,
};

export default Subheading;
