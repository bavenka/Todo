import React from 'react'
import Counter from '../containers/counter'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <div>
        <Counter/>
        <p>
            Show:
            {" "}
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
    </div>
);

export default Footer
