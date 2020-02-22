import {connect} from 'react-redux';
import Names from './Names';
import {createAction_addGroomNames} from '../../redux/GroomNamesReducer';
import {getGroomNames} from '../../redux/GroomNamesReducer';

const mapStateToProps = (state, props) => ({
  groomNames: getGroomNames(state.groomNames)
});

const mapDispatchToProps = (dispatch, props) => ({
  addGroomNames: groomNames => dispatch(createAction_addGroomNames(groomNames))
});

export default connect(mapStateToProps, mapDispatchToProps)(Names);
