import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invitation from '../invitation/Invitation.js';
import Grid from '@material-ui/core/Grid';
import Next from '../next/Next.js';
import Subheading from '../subheading/Subheading.js';
import Description from '../description/Description.js';


export const Print = (props) => (

  <div>
    <Subheading text='Pobierz zaproszenia' />
    <Description>
      <p>Gotowe! Możesz teraz pobrać i wydrukować zaproszenia.</p>
    </Description>
    <PDFDownloadLink document={<Invitation {...props}/>} fileName='zaproszenia.pdf' className='next'>
      {({ blob, url, loading, error }) => (loading ? 'Pobieranie...' : 'Pobierz')}
    </PDFDownloadLink>
    <Grid container spacing={3} justify='center'>
      <Grid item >
        <Next text='Wstecz' path={window.innerWidth <= 760 ? '/info' : '/podglad'} type='prev'/>
      </Grid>
    </Grid>
  </div>
);
