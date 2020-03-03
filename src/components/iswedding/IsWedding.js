import React from 'react';
import Subheading from '../subheading/Subheading.js';
import Description from '../description/Description.js';
import Next from '../next/Next.js';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

class Font extends React.Component {

  static propTypes = {
    isWedding: PropTypes.bool
  }

  render() {
    const {isWedding, addIsWedding} = this.props;

    return(
      <div>
        <Subheading text="Czy planujecie zorganizowanie wesela?" />
        <Description>
          <p>Czy planujecie wesele i chcecie zaprosić na nie gości?</p>
        </Description>

        <FormControl component="fieldset">
          <RadioGroup aria-label="wesele" name="isWedding" value={isWedding} onChange={event => addIsWedding(event.target.value)}>
            <FormControlLabel value="true" control={<Radio color='primary'/>} label='tak' />
            <FormControlLabel value="false" control={<Radio color='primary'/>} label='nie' />
          </RadioGroup>
        </FormControl>

        <Grid container spacing={3} justify='center'>
          <Grid item >
            <Next text='Wstecz' path='/miejsce-slubu' type='prev'/>
          </Grid>
          <Grid item >
            <Next text='Dalej' path='/wesele'/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Font;
