import {connect} from 'react-redux';
import Font from './Font';
import {getFont, createAction_addFont} from '../../redux/VisualReducer';

const mapStateToProps = (state, props) => ({
  font: getFont(state.visual)
});

const mapDispatchToProps = (dispatch, props) => ({
  addFont: wFont => dispatch(createAction_addFont({font: wFont})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Font);
