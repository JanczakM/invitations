import React from 'react';
import PropTypes from 'prop-types';
import Subheading from '../subheading/Subheading.js';
import Next from '../next/Next.js';
import Description from '../description/Description.js';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class Names extends React.Component {

  static propTypes = {
    groomNames: PropTypes.object
  }

  errors = {
    she: {
      error: false
    },
    he: {
      error: false
    }
  }

  setErrors(he, she){
    he ? this.errors.he.error = false : this.errors.he.error = true
    she ? this.errors.she.error = false : this.errors.she.error = true
  }

  render() {
    const {groomNames, addGroomNames} = this.props;

    return(
      <div>
        <Subheading text='Imię i nazwisko pana młodego i panny młodej' />
        <Description>
          <p>Poniżej podaj imię i nazwisko pana młodego oraz imię i nazwisko panny młodej. Możesz też podać same imiona. Wybór formy zaproszenia należy do Ciebie. </p><p>Dane będą użyte tylko do wygenerowania zaproszeń. Nie są przechowywane przez aplikację po jej zamknięciu</p>
        </Description>
        <TextField
          {...this.errors.she}
          id='she'
          label='Imię i nazwisko panny młodej'
          variant='outlined'
          value={groomNames.she}
          style={{ width: 500, marginBottom: '20px' }}
          onChange={event => {addGroomNames.she(event.target.value); this.errors.she.error = false}}
          helperText='Pole wymagane'
          required
        />
        <TextField
          {...this.errors.he}
          id='he'
          label='Imię i nazwisko pana młodego'
          variant='outlined'
          value={groomNames.he}
          style={{ width: 500 }}
          onChange={event => {addGroomNames.he(event.target.value); this.errors.he.error = false}}
          helperText='Pole wymagane'
          required
        />
        <Grid container spacing={3} justify='center'>
          <Grid item >
            <div>
               <Next text='Wstecz' path='/czcionka' type='prev'/>
            </div>
          </Grid>
          <Grid item onClick={() => this.setErrors(groomNames.he, groomNames.she)}>
            {groomNames.he && groomNames.she ? <Next text='Dalej' path='/termin-slubu'/> : <Next text='Dalej' path='/imiona' />}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Names;
