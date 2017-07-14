import React, {PropTypes} from 'react'
import Counter from '../containers/counter'
import FilterLink from '../containers/FilterLink'
import ClearCompleted from  '../containers/clearCompleted'
import {ALL, ACTIVE, COMPLETED} from '../constants/filterTypes'

class Footer extends React.Component {

    render() {
        if (this.props.display) {
            return (
                <div>
                    <Counter/>
                    <p>
                        {"Show: "}
                        <FilterLink filter={ALL}>
                            All
                        </FilterLink>
                        {", "}
                        <FilterLink filter={ACTIVE}>
                            Active
                        </FilterLink>
                        {", "}
                        <FilterLink filter={COMPLETED}>
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