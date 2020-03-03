import {connect} from 'react-redux';
import WeddingParty from './WeddingParty';
import {getWeddingPartyPlace, getWeddingPartyStreet, getWeddingPartyCity} from '../../redux/WeddingPartyReducer';
import {createAction_addWPPlace, createAction_addWPStreet, createAction_addWPCity} from '../../redux/WeddingPartyReducer';

const mapStateToProps = (state, props) => ({
  place: getWeddingPartyPlace(state.weddingParty),
  street: getWeddingPartyStreet(state.weddingParty),
  city: getWeddingPartyCity(state.weddingParty),
});

const mapDispatchToProps = (dispatch, props) => ({
  addPlace: wPlace => dispatch(createAction_addWPPlace({place: wPlace})),
  addStreet: wStreet => dispatch(createAction_addWPStreet({street: wStreet})),
  addCity: wCity => dispatch(createAction_addWPCity({city: wCity})),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeddingParty);
