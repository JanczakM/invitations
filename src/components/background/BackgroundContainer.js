import {connect} from 'react-redux';
import Background from './Background';
import {getBcg, createAction_addBcg} from '../../redux/VisualReducer';

const mapStateToProps = (state, props) => ({
  bcg: getBcg(state.visual)
});

const mapDispatchToProps = (dispatch, props) => ({
  addBcg: wBcg => dispatch(createAction_addBcg({template: wBcg})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Background);
