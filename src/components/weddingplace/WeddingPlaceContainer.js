import {connect} from 'react-redux';
import WeddingPlace from './WeddingPlace';
import {getWeddingPlace, getWeddingStreet, getWeddingCity} from '../../redux/WeddingReducer';
import {createAction_addPlace, createAction_addStreet, createAction_addCity} from '../../redux/WeddingReducer';

const mapStateToProps = (state, props) => ({
  place: getWeddingPlace(state.wedding),
  street: getWeddingStreet(state.wedding),
  city: getWeddingCity(state.wedding),
});

const mapDispatchToProps = (dispatch, props) => ({
  addPlace: wPlace => dispatch(createAction_addPlace({place: wPlace})),
  addStreet: wStreet => dispatch(createAction_addStreet({street: wStreet})),
  addCity: wCity => dispatch(createAction_addCity({city: wCity})),
});

export default connect(mapStateToProps, mapDispatchToProps)(WeddingPlace);
