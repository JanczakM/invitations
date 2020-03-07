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
import './background.scss';

class Font extends React.Component {

  static propTypes = {
    bcg: PropTypes.string
  }

  render() {
    const {bcg, addBcg} = this.props;

    return(
      <div>
        <Subheading text='Wybór tła zaproszeń' />
        <Description>
          <p>Wybierz tło dla zaproszeń. Jeśli nie wybierzesz żadnego z poniższych wzorów, zaproszenia będą na jednolitym, białym tle.</p>
          <p>Możesz pominąć wybór tła i wydrukować zaproszenia na papierze z gotowym tłem lub wzorami, by nadać zaproszeniom unikalny charakter.</p>
        </Description>

        <FormControl component='fieldset' fullWidth>
          <RadioGroup aria-label='tło' name='bcg' value={bcg} row style={{justifyContent: 'space-around'}} onChange={event => addBcg(event.target.value)}>
            <FormControlLabel value='https://i.postimg.cc/JtwwwnZk/bcg1.png' control={<Radio style={{display: 'none'}}/>} label={<img src='https://i.postimg.cc/JtwwwnZk/bcg1.png' alt='invitation background' className='bcg-img'/>} />
            <FormControlLabel value='https://i.postimg.cc/rwMVznRt/bcg2.png' control={<Radio style={{display: 'none'}}/>} label={<img src='https://i.postimg.cc/rwMVznRt/bcg2.png' alt='invitation background' className='bcg-img'/>} />
            <FormControlLabel value='https://i.postimg.cc/SN5Lh9n5/bcg3.png' control={<Radio style={{display: 'none'}}/>} label={<img src='https://i.postimg.cc/SN5Lh9n5/bcg3.png' alt='invitation background' className='bcg-img'/>}  />
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
