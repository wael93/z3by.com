import React from "react";
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target"
      id="ftco-navbar"
    >
      <div class="container">
        <Link class="navbar-brand" to='/'>
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
            <li class="nav-item">
              <Link to='/' class="nav-link">
                <span>Home</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to='/about/' class="nav-link">
                <span>About</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to='/skills/' class="nav-link">
                <span>Skills</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to='/projects/' class="nav-link">
                <span>Projects</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to='/blog' class="nav-link">
                <span>My Blog</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to='/contact' class="nav-link">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
