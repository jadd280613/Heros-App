import React from 'react';
import PropTypes from "prop-types";
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({
    isAutheticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={ (props) =>(
                (!isAutheticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/dashboard" />)
            )}
        />
    )
}

PublicRoute.propTypes = {
    isAutheticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}