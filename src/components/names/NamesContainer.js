import {connect} from 'react-redux';
import Names from './Names';
import {createAction_addGroomNamesShe, createAction_addGroomNamesHe} from '../../redux/GroomNamesReducer';
import {getGroomNames} from '../../redux/GroomNamesReducer';

const mapStateToProps = (state, props) => ({
  groomNames: {
    she: getGroomNames(state.groomNames.she),
    he: getGroomNames(state.groomNames.he)
  }
});

const mapDispatchToProps = (dispatch, props) => ({
  addGroomNames: {
    she: name => dispatch(createAction_addGroomNamesShe({she: name})),
    he: name => dispatch(createAction_addGroomNamesHe({he: name})),
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Names);
