import React from 'react';
import image from './slub.jpg';
import './template.scss';
import Container from '@material-ui/core/Container';

const Template = ({children}) => (
  <React.Fragment>
      <Container maxWidth="md">
        <img src={image} alt="ślubny tort" className="image-top"/>
        {children}
      </Container>
  </React.Fragment>
);

export default Template;
