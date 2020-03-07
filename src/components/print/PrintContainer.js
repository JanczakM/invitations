import {Print} from './Print';
import {connect} from 'react-redux';
import {getFont, getBcg} from '../../redux/VisualReducer';
import {getInfo} from '../../redux/InfoReducer';
import {getIsWedding, getWeddingPartyPlace, getWeddingPartyStreet, getWeddingPartyCity} from '../../redux/WeddingPartyReducer';
import {getGroomNames} from '../../redux/GroomNamesReducer';
import {getWeddingDate, getWeddingTime, getWeddingPlace, getWeddingStreet, getWeddingCity} from '../../redux/WeddingReducer';

const mapStateToProps = (state, props) => ({
  font: getFont(state.visual),
  background: getBcg(state.visual),
  info: getInfo(state.info),
  isWedding: getIsWedding(state.weddingParty),
  she: getGroomNames(state.groomNames.she),
  he: getGroomNames(state.groomNames.he),
  weddingDate: getWeddingDate(state.wedding),
  weddingTime: getWeddingTime(state.wedding),
  weddingPlace: getWeddingPlace(state.wedding),
  weddingStreet: getWeddingStreet(state.wedding),
  weddingCity: getWeddingCity(state.wedding),
  weddingPartyPlace: getWeddingPartyPlace(state.weddingParty),
  weddingPartyStreet: getWeddingPartyStreet(state.weddingParty),
  weddingPartyCity: getWeddingPartyCity(state.weddingParty),
});


export default connect(mapStateToProps)(Print);
