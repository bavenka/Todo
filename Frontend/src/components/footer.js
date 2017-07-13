import React, {PropTypes} from 'react'
import Counter from '../containers/counter'
import FilterLink from '../containers/FilterLink'
import ClearCompleted from  '../containers/clearCompleted'

class Footer extends React.Component {

    render() {
        if (this.props.display) {
            return (
                <div>
                    <Counter/>
                    <p>
                        {"Show: "}
                        <FilterLink filter="all">
                            All
                        </FilterLink>
                        {", "}
                        <FilterLink filter="active">
                            Active
                        </FilterLink>
                        {", "}
                        <FilterLink filter="completed">
                            Completed
                        </FilterLink>
                    </p>
                    <ClearCompleted/>
                </div>
            );
        } else {
            return null;
        }
    }
}

Footer.propTypes = {
    display: PropTypes.bool,
};

export default Footer