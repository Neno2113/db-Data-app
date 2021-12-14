import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from '../../actions/auth'

export const NavBar = () => {

  const dispatch = useDispatch();
  const { name } = useSelector(state => state.auth);


  const handleLogout = () => {
    dispatch( logout() );
  }
  
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Tenth navbar example"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample08"
            aria-controls="navbarsExample08"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-md-center"
            id="navbarsExample08"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                 { name }
                </Link>
              </li>
             
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="dropdown08"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mantenimiento
                </Link>
                <ul className="dropdown-menu" aria-labelledby="dropdown08">
                  <li>
                    <Link className="dropdown-item" to="/employee">
                      Employee
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/study">
                      Study
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/department">
                      Department
                    </Link>
                  </li>
              
                </ul>
              </li>
                <div className="d-grid  d-md-flex justify-content-md-end mx-5">
                    <button 
                      className="btn btn-outline-danger me-2" 
                      type="button"
                      onClick={ handleLogout }
                    >
                      <i className="fas fa-sign-out-alt mx-1"></i>
                      Logout
                    </button>
                </div>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
