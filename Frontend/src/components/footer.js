import React from 'react'
import Counter from '../containers/counter'
import FilterLink from '../containers/FilterLink'
import ClearCompleted from  '../containers/clearCompleted'

const Footer = () => (
    <div>
        <Counter/>
        <p>
            {"Show: "}
            <FilterLink filter="ALL">
                All
            </FilterLink>
            {", "}
            <FilterLink filter="ACTIVE">
                Active
            </FilterLink>
            {", "}
            <FilterLink filter="COMPLETED">
                Completed
            </FilterLink>
        </p>
        <ClearCompleted/>
    </div>
);

export default Footer
