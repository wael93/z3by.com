import React from "react";
import { Link } from "react-router-dom";
import paths from "../Router/Paths";

export default function Nav() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target"
      id="ftco-navbar"
    >
      <div class="container">
        <Link class="navbar-brand" to="/">
          Z3BY
        </Link>
        <button
          class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="oi oi-menu" /> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
          <ul class="navbar-nav nav ml-auto">
            {paths.map((path, i) => (
              <li class="nav-item">
                <Link to={path.path} class="nav-link">
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
