import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const FilterLink = ({filter, active, children, onClick}) => {
    if (active) {
        return <span>{children}</span>
    }

    return (

        <Link to={filter === 'ALL' ? '' : filter.toLowerCase()} onClick={onClick}>
            {children}
        </Link>
    )
};

FilterLink.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default FilterLink
