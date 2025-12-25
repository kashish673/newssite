
import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react'
import {Link} from "react-router-dom";

const Navbar =()=> {

  
    return (
      <div>
        <nav className=" navabar fixed-top navbar-expand-lg bg-info">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" ></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/" style={{margin:'20px',fontWeight:'bolder'}}>Home</Link>
        </li>
        <li className="nav-item"><Link className="nav-link" to="/Business" style={{margin:'20px',fontWeight:'bolder'}}> Business </Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Entertainment" style={{margin:'20px',fontWeight:'bolder'}}> Entertainment </Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Health" style={{margin:'20px',fontWeight:'bolder'}}>Health</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Sports" style={{margin:'20px',fontWeight:'bolder'}}>Sports</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/General" style={{margin:'20px',fontWeight:'bolder'}}>General</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/Technology" style={{margin:'20px',fontWeight:'bolder'}}>Technology</Link></li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  
}
export default Navbar