import React from 'react';
import image from './slub.jpg';
import './template.scss';
import Heading from '../heading/Heading.js';
import Container from '@material-ui/core/Container';

const Template = ({children}) => (
  <React.Fragment>
      <Container maxWidth='md'>
        <div className='rel'>
          <img src={image} alt='ślubny tort' className='image-top'/>
          <Heading text='kreator zaproszeń ślubnych online' />
        </div>
        {children}
      </Container>
  </React.Fragment>
);

export default Template;
