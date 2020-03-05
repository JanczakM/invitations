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
import bcg1 from './bcg1.jpg';
import bcg2 from './bcg2.png';
import bcg3 from './bcg3.png';
import './background.scss';

class Font extends React.Component {

  static propTypes = {
    bcg: PropTypes.string
  }

  render() {
    const {bcg, addBcg} = this.props;

    return(
      <div>
        <Subheading text="Wybór tła zaproszeń" />
        <Description>
          <p>Wybierz tło dla zaproszeń. Jeśli nie wybierzesz żadnego z poniższych wzorów, zaproszenia będą na jednolitym, białym tle.</p><p>Możesz w tej sytuacji również użyć papieru z nadrukiem i na nim wydrukować zaproszenia, by nadać im unikalny charakter.</p>
          <p className="p-small">Źródło grafik: <a href="https://www.vecteezy.com/free-vector/watercolor">Watercolor Vectors by Vecteezy</a>, <a href="https://www.vecteezy.com/free-vector/wedding-invite">Wedding Invite Vectors by Vecteezy</a></p>
        </Description>

        <FormControl component="fieldset" fullWidth>
          <RadioGroup aria-label="tło" name="bcg" value={bcg} row style={{justifyContent: 'space-around'}} onChange={event => addBcg(event.target.value)}>
            <FormControlLabel value="https://i.postimg.cc/CxWPscr5/bcg1.jpg" control={<Radio style={{display: 'none'}}/>} label={<img src={bcg1} alt='invitation background' className='bcg-img'/>} />
            <FormControlLabel value="https://i.postimg.cc/ZYvH7XC4/bcg2.png" control={<Radio style={{display: 'none'}}/>} label={<img src={bcg2} alt='invitation background' className='bcg-img'/>} />
            <FormControlLabel value="https://i.postimg.cc/9MRdkqXJ/bcg3.png" control={<Radio style={{display: 'none'}}/>} label={<img src={bcg3} alt='invitation background' className='bcg-img'/>}  />
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
