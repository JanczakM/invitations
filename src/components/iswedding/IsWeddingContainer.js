import {connect} from 'react-redux';
import IsWedding from './IsWedding';
import {getIsWedding, createAction_addIsWedding} from '../../redux/WeddingPartyReducer';

const mapStateToProps = (state, props) => ({
  isWedding: getIsWedding(state.weddingParty)
});

const mapDispatchToProps = (dispatch, props) => ({
  addIsWedding: wIsWedding => dispatch(createAction_addIsWedding({is: wIsWedding})),
});

export default connect(mapStateToProps, mapDispatchToProps)(IsWedding);
