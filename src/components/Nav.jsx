import React from "react";
import { Link } from "react-router-dom";
import paths from "../Router/Paths";

export default function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target"
      id="ftco-navbar"
    >
      <div className="container">
        <Link className="navbar-brand" to='/home'>
          Z3BY
        </Link>
        <button
          className="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu" /> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav nav ml-auto">
            {paths.map((path, i) => (
              <li className="nav-item">
                <Link to={path.path} className="nav-link">
                  <span>{path.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
