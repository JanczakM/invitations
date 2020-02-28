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
import bcg1 from './bcg1.png';
import './background.scss';

class Font extends React.Component {

  static propTypes = {
    bcg: PropTypes.object
  }

  render() {
    const {bcg, addBcg} = this.props;

    return(
      <div>
        <Subheading text="Wybór tła zaproszeń" />
        <Description>
          <p>Wybierz tło dla zaproszeń</p>
        </Description>

        <FormControl component="fieldset" fullWidth>
          <RadioGroup aria-label="tło" name="bcg" value={bcg} row style={{justifyContent: 'space-around'}} onChange={event => addBcg(event.target.value)}>
            <FormControlLabel value="bcg1" control={<Radio style={{display: 'none'}}/>} label={<img src={bcg1} alt='invitation background' className='bcg-img'/>} />
            <FormControlLabel value="bcg2" control={<Radio style={{display: 'none'}}/>} label={<img src={bcg1} alt='invitation background' className='bcg-img'/>} />
            <FormControlLabel value="bcg3" control={<Radio style={{display: 'none'}}/>} label={<img src={bcg1} alt='invitation background' className='bcg-img'/>}  />
          </RadioGroup>
        </FormControl>

        <Grid container spacing={3} justify='center'>
          <Grid item >
            <Next text='Wstecz' path='/' type='prev'/>
          </Grid>
          <Grid item >
            <Next text='Dalej' path='/czcionka'/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Font;
