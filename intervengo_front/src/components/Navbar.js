import React from 'react';
import "./NavbarStyles.css";


const Navbar = ({title}) => {
  return (
    <div className="header">
        <h1>{title}</h1>
        <ul className="navbar-menu">
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href='/liste'>Liste</a>
          </li>
          <li>
            <a href='/form'>Form</a>
          </li>
          <li>
            <a href='/create-intervention'>Create-Intervention</a>
          </li>
        </ul>
    </div>
  )
}

export default Navbar