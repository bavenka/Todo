import React from 'react'
import Counter from '../containers/counter'
import FilterLink from '../containers/FilterLink'

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
    </div>
);

export default Footer
