import {connect} from 'react-redux';
import WeddingDate from './WeddingDate';
import {getWeddingDate, getWeddingTime, createAction_addDate, createAction_addTime} from '../../redux/WeddingReducer';

const mapStateToProps = (state, props) => ({
  date: getWeddingDate(state.wedding),
  time: getWeddingTime(state.wedding)
});

const mapDispatchToProps = (dispatch, props) => ({
  addDate: wDate => dispatch(createAction_addDate({date: wDate})),
  addTime: wTime => dispatch(createAction_addTime({time: wTime}))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeddingDate);
