import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
  const {user: { name }, dispatch} = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    history.replace('/login');  
    dispatch({
          type: types.logout
      });
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Asociaciones
        </Link>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/marvel"
            >
              Marvel
            </NavLink>

            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/dc"
            >
              DC
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/search"
            >
              Search
            </NavLink>
          </ul>
          <span className="nav-item nav-link text-info">{name}</span>
          <button
            className="nav-item nav-link text-light btn btn-primary"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
