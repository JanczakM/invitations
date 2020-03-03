import React from 'react';
import PropTypes from 'prop-types';
import Subheading from '../subheading/Subheading.js';
import Next from '../next/Next.js';
import Description from '../description/Description.js';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class Info extends React.Component {

  static propTypes = {
    info: PropTypes.string
  }

  render() {
    const {info, addInfo, isWedding} = this.props;

    return(
      <div>
        <Subheading text="Informacje dodatkowe" />
        <Description>
          <p>Jeśli chcesz podać dodatkowe informacje dla gości, możesz to zrobić poniżej. Jeżeli jakaś cenna informacja nie znajdowała się w poprzednich krokach, to również możesz ją dodać. Jest to ostatni moment. W następnym kroku zobaczysz już podgląd gotowych zaproszeń.</p>
        </Description>
        <TextField id="outlined-basic" label="Informacje dodatkowe" variant="outlined" value={info} style={{ width: 500 }} multiline rows='8' onChange={event => addInfo(event.target.value)} />
        <Grid container spacing={3} justify='center'>
          <Grid item >
            <Next text='Wstecz' path={isWedding === 'true' ? '/wesele' : '/czy-wesele'} type='prev'/>
          </Grid>
          <Grid item >
            <Next text='Dalej' path='/podglad'/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Info;
