import {connect} from 'react-redux'
import setVisibilityFilter from '../actions/setVisibilityFilter'
import FilterLink from '../components/FilterLink'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter,
    filter: ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownProps.filter))
    }
});

const FilterLinkContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterLink);

export default FilterLinkContainer;
