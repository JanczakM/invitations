import React from 'react';
import PropTypes from 'prop-types';
import './description.scss';

const Description = ({children}) => (
  <div className='description'>{children}</div>
)

Description.propTypes = {
  text: PropTypes.string,
};

export default Description;
