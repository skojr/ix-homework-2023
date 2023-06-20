import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";

export default function Navbar(props) {
  async function onLogoutClicked() {
    await signOut(auth);
  }

  return (
    <div>
      
      <div className="top-bar">
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-dark">Register</button>
          <button className="btn btn-dark">Signup</button>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">Navbar</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              {props.user ? (
                <>
                  <li className="nav-item">
                    <div className="btn btn-primary" onClick={onLogoutClicked}>
                      Logout
                    </div>
                  </li>
                  <li className="nav-item mt-2 ms-5">
                    Welcome {props.user.email}!
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
