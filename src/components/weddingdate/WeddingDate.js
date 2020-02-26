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
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
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
        </MuiPickersUtilsProvider>
        <Next text='Dalej'/>
      </div>
    )
  }
}

export default WeddingDate;
