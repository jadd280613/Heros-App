import React from 'react';
import PropTypes from "prop-types";
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({
    isAutheticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route {...rest}
            component={ (props) =>(
                (isAutheticated)
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />)
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAutheticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}