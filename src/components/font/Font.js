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
    font: PropTypes.object
  }

  render() {
    const {font, addFont} = this.props;
    const size = {fontSize: '25px'};

    return(
      <div>
        <Subheading text="Wybór czcionki" />
        <Description>
          <p>Wybierz czcionkę, którą napisane będą zaproszenia</p>
        </Description>

        <FormControl component="fieldset">
          <RadioGroup aria-label="czionka" name="font" value={font} onChange={event => addFont(event.target.value)}>
            <FormControlLabel value="lobster" control={<Radio color='primary'/>} label={<span style={{ fontFamily: 'Lobster', ...size }}>Zaproszenie na ślub</span>} />
            <FormControlLabel value="caveat" control={<Radio color='primary'/>} label={<span style={{ fontFamily: 'Caveat', ...size }}>Zaproszenie na ślub</span>} />
            <FormControlLabel value="courgette" control={<Radio color='primary'/>} label={<span style={{ fontFamily: 'Courgette', ...size }}>Zaproszenie na ślub</span>} />
          </RadioGroup>
        </FormControl>

        <Grid container spacing={3} justify='center'>
          <Grid item >
            <Next text='Wstecz' path='/tlo' type='prev'/>
          </Grid>
          <Grid item >
            <Next text='Dalej' path='/imiona'/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Font;
