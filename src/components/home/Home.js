import React from 'react';
import Subheading from '../subheading/Subheading.js';
import Description from '../description/Description.js';
import Next from '../next/Next.js';
import Grid from '@material-ui/core/Grid';

const Home = () => (
  <div>
    <Subheading text='Stwórz zaproszenia ślubne całkowicie za darmo' />
    <Description>
      <p>Przygotowania do ślubu wymagają dużo czasu, poświęcenia i wydatków. W końcu każda para młoda chce, by ten dzień był wyjątkowy. Ponieważ z pewnością przed Wami dużo przygotowań, warto ułatwić sobie zadanie i zaoszczędzić czas i pieniądze tam, gdzie to możliwe</p>
      <p>Kreator zaproszeń ślubnych pomoże Wam przygotować zaproszenia na ślub za darmo i w stosunkowo krótkim czasie.</p>
      <p>Wystarczy, że wypełnicie kolejne pola a na koniec pobierzecie pdf z gotowymi zaproszeniami.</p>
      <p>Zaproszenia możecie następnie wydrukować i dostarczyć pocztą, osobiście albo przesłać mailem - wybór należy do Was!</p>
    </Description>
    <Grid container spacing={3} justify='center'>
      <Grid item >
        <Next text='Rozpocznij' path='/tlo'/>
      </Grid>
    </Grid>
  </div>
)

export default Home;
