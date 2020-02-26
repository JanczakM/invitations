import React from 'react';
import PropTypes from 'prop-types';
import Subheading from '../subheading/Subheading.js';
import Next from '../next/Next.js';
import Description from '../description/Description.js';
import TextField from '@material-ui/core/TextField';

class Names extends React.Component {

  static propTypes = {
    groomNames: PropTypes.string
  }

  render() {
    const {groomNames, addGroomNames} = this.props;

    return(
      <div>
        <Subheading text="Imię i nazwisko pana młodego i panny młodej" />
        <Description>
          <p>Poniżej podaj imię i nazwisko pana młodego oraz imię i nazwisko panny młodej. Możesz też podać same imiona. Wybór formy zaproszenia należy do Ciebie. </p><p>Przykładowo: Jan Kowalski i Anna Kowalska</p><p>Dane będą użyte tylko do wygenerowania zaproszeń. Nie są przechowywane przez aplikację po jej zamknięciu</p>
        </Description>
        <TextField id="outlined-basic" label="Imię i nazwisko pana młodego i panny młodej" variant="outlined" value={groomNames} fullWidth onChange={event => addGroomNames(event.target.value)} />
        <Next text='Dalej' path='/termin-slubu'/>
      </div>
    )
  }
}

export default Names;
