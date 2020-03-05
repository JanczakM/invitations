import React from 'react';
import PropTypes from 'prop-types';
import Subheading from '../subheading/Subheading.js';
import Next from '../next/Next.js';
import Description from '../description/Description.js';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class WeddingDate extends React.Component {

  static propTypes = {
    date: PropTypes.instanceOf(Date),
    time: PropTypes.instanceOf(Date)
  }

  errors = {
    date: {
      error: false
    },
    time: {
      error: false
    }
  }

  setErrors(date, time){
    date ? this.errors.date.error = false : this.errors.date.error = true
    time ? this.errors.time.error = false : this.errors.time.error = true
  }

  render() {
    const {date, time, addDate, addTime} = this.props;

    return(
      <div>
        <Subheading text="Data i godzina ślubu" />
        <Description>
          <p>Poniżej podaj datę i godzinę ślubu</p>
        </Description>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="center" spacing={3}>
            <Grid item >
              <KeyboardDatePicker
                {...this.errors.date}
                disableToolbar
                format="dd/MM/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Data ślubu"
                value={date}
                onChange={addDate}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                helperText='Pole wymagane'
                required
              />
              </Grid>
              <Grid item >
                <KeyboardTimePicker
                  {...this.errors.time}
                  margin="normal"
                  id="time-picker"
                  label="Godzina ślubu"
                  ampm={false}
                  value={time}
                  onChange={addTime}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                  helperText='Pole wymagane'
                  required
                />
              </Grid>
          </Grid>
        </MuiPickersUtilsProvider>
        <Grid container spacing={3} justify='center'>
          <Grid item >
            <Next text='Wstecz' path='/imiona' type='prev'/>
          </Grid>
          <Grid item onClick={this.setErrors(date, time)}>
            {date && time ? <Next text='Dalej' path='/miejsce-slubu'/> : <Next text='Dalej' path='/termin-slubu' />}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default WeddingDate;
