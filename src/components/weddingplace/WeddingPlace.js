import React from 'react';
import PropTypes from 'prop-types';
import Subheading from '../subheading/Subheading.js';
import Next from '../next/Next.js';
import Description from '../description/Description.js';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class WeddingPlace extends React.Component {

  static propTypes = {
    place: PropTypes.string,
    street: PropTypes.string,
    city: PropTypes.string
  };

  state = {
    display: 'none',
    color: 'red'
  }

  setMessage(place, street, city){
    (!place && !street && !city) ? this.setState({display: 'block'}) : this.setState({display: 'none'});
  }

  render() {
    const {place, street, city, addPlace, addStreet, addCity} = this.props;

    return (
      <div>
        <Subheading text='Miejsce ślubu' />
        <Description>
          <p>Poniżej podaj miejsce (czyli konkretny Kościół lub Urząd Stanu Cywilnego), ulicę oraz miejscowość w której odbędzie się ślub</p><p>Conajmniej jedno pole powinno być wypełnione.</p>
        </Description>
        <Grid container spacing={3} justify='center'>
          <Grid item>
            <TextField
              id='outlined-basic'
              label='miejsce ślubu'
              variant='outlined'
              value={place}
              onChange={event => {addPlace(event.target.value); this.setState({display: 'none'})}}
            />
          </Grid>
          <Grid item>
            <TextField
              id='outlined-basic'
              label='ulica'
              variant='outlined'
              value={street}
              onChange={event => {addStreet(event.target.value); this.setState({display: 'none'})}}
            />
          </Grid>
          <Grid item>
            <TextField
              id='outlined-basic'
              label='miejscowość'
              variant='outlined'
              value={city}
              onChange={event => {addCity(event.target.value); this.setState({display: 'none'})}}
            />
          </Grid>
          <p style={this.state}>wypełnij przynajmniej jedno pole</p>
        </Grid>
        <Grid container spacing={3} justify='center'>
          <Grid item >
            <Next text='Wstecz' path='/termin-slubu' type='prev'/>
          </Grid>
          <Grid item onClick={() => this.setMessage(place, street, city)}>
            {(place || street || city) ? <Next text='Dalej' path='/czy-wesele'/> : <Next text='Dalej' path='/miejsce-slubu'/>}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default WeddingPlace;
