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
    date: PropTypes.string,
    time: PropTypes.string
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
              />
              </Grid>
              <Grid item >
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Godzina ślubu"
                  ampm={false}
                  value={time}
                  onChange={addTime}
                  KeyboardButtonProps={{
                    'aria-label': 'change time',
                  }}
                />
              </Grid>
          </Grid>
        </MuiPickersUtilsProvider>
        <Grid container spacing={3} justify='center'>
          <Grid item >
            <Next text='Wstecz' path='/imiona' type='prev'/>
          </Grid>
          <Grid item >
            <Next text='Dalej' path='/miejsce-slubu'/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default WeddingDate;
