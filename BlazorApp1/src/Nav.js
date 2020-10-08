import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Nav() {
  return (
      <nav>
          <ul>
              <Link to={"/"}>
                  <li>Home</li>
              </Link>
              <Link to={"/login"}>
                  <li>Login</li>
              </Link>
              <Link to={"/items"}>
                  <li>Items</li>
              </Link>
          </ul>
      </nav>
  );
}

export default Nav;
