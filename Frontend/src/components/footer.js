import React from 'react'
import Counter from '../containers/counter'
import FilterLink from '../containers/FilterLink'
import ClearCompleted from  '../containers/clearCompleted'

const Footer = () => (
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

export default Footer
