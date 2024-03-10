import React, { Component } from 'react'
import { Link } from "react-router-dom";

const Navbar = ()=>{
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Taza Khabar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="/">Home</a>
              </li>
              <div className="dropdown">
                <button className="nav-link active  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )

}

export default Navbar

