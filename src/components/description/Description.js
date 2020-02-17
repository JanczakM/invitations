import React from 'react';
import PropTypes from 'prop-types';
import './description.scss';

const Description = ({children}) => (
  <div>{children}</div>
)

Description.propTypes = {
  text: PropTypes.string,
};

export default Description;
