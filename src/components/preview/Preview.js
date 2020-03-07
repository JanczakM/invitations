import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import Invitation from '../invitation/Invitation.js';
import Grid from '@material-ui/core/Grid';
import Next from '../next/Next.js';
import Subheading from '../subheading/Subheading.js';
import Description from '../description/Description.js';


export const Preview = (props) => (
  <div>
    <Subheading text='Podgląd zaproszeń' />
    <Description>
      <p>Poniżej możesz zobaczyć podgląd zaproszeń ślubnych. Jeśli chcesz coś poprawić lub zmienić, możesz cofnąć się do kolejnych kroków</p>
      <p>Aplikacja pamięta wpisane przez Ciebie informacje, więc możesz przemieszczać się między jej krokami bez obaw, że dane znikną.</p>
      <p>Jeżeli organizujesz wesele, poniżej zobaczysz zaproszenie w dwóch formach: dla osób, które chcesz zaprosić na wesele i ślub oraz dla tych, które chcesz zaprosić tylko na ślub</p>
    </Description>
    <div>
      <PDFViewer height='500px'>
        <Invitation {...props}/>
      </PDFViewer>
    </div>
    <Grid container spacing={3} justify='center'>
      <Grid item >
        <Next text='Wstecz' path='/info' type='prev'/>
      </Grid>
      <Grid item >
        <Next text='Dalej' path='/drukuj'/>
      </Grid>
    </Grid>
  </div>
);
