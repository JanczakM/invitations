import React from 'react';
import PropTypes from 'prop-types';
import Subheading from '../subheading/Subheading.js';
import Next from '../next/Next.js';
import Description from '../description/Description.js';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class Names extends React.Component {

  static propTypes = {
    groomNames: PropTypes.string
  }

  render() {
    const {groomNames, addGroomNames} = this.props;

    return(
      <div>
        <Subheading text="Imię i nazwisko pana młodego i panny młodej" />
        <Description>
          <p>Poniżej podaj imię i nazwisko pana młodego oraz imię i nazwisko panny młodej. Możesz też podać same imiona. Wybór formy zaproszenia należy do Ciebie. </p><p>Dane będą użyte tylko do wygenerowania zaproszeń. Nie są przechowywane przez aplikację po jej zamknięciu</p>
        </Description>
        <TextField id="outlined-basic" label="Imię i nazwisko panny młodej" variant="outlined" value={groomNames.she} style={{ width: 500, marginBottom: '20px' }} onChange={event => addGroomNames.she(event.target.value)} />
        <TextField id="outlined-basic" label="Imię i nazwisko pana młodego" variant="outlined" value={groomNames.he} style={{ width: 500 }} onChange={event => addGroomNames.he(event.target.value)} />
        <Grid container spacing={3} justify='center'>
          <Grid item >
            <Next text='Wstecz' path='/czcionka' type='prev'/>
          </Grid>
          <Grid item >
            <Next text='Dalej' path='/termin-slubu'/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Names;
