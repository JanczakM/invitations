import {connect} from 'react-redux';
import Info from './Info';
import {createAction_addInfo} from '../../redux/InfoReducer';
import {getInfo} from '../../redux/InfoReducer';
import {getIsWedding} from '../../redux/WeddingPartyReducer';

const mapStateToProps = (state, props) => ({
  info: getInfo(state.info),
  isWedding: getIsWedding(state.weddingParty)
});

const mapDispatchToProps = (dispatch, props) => ({
  addInfo: information => dispatch(createAction_addInfo(information))
});

export default connect(mapStateToProps, mapDispatchToProps)(Info);
