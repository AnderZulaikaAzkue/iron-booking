
import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthStore'
import "./Navbar.css";


import logo from '../../assets/img/logoOne.svg'

const renderNavLinkClassName = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    
    <nav className="navbar navbar-expand-lg " data-bs-theme="dark"style={{ color: "inherit", textDecoration: "none" }} >
      <div className="container">
      
      <div className="navContainer"></div>
        <Link className='navbar-brand' to="/">
          <img src={logo} alt="Iron Booking" width="30" height="30" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink to="/" className={renderNavLinkClassName}>Home</NavLink></li>
            <li className="nav-item"><NavLink to="/hotels" className={renderNavLinkClassName}>Hotels</NavLink></li>
            { user?.email && <li className="nav-item"><NavLink to="/create-hotel" className={renderNavLinkClassName}>Book a Hotel</NavLink></li> }
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            {(user?.email) ? (
              <>
                <li className="nav-item"><NavLink to="/clients/me" className={renderNavLinkClassName}>{user.email}</NavLink></li>
                <li className="nav-item"><button className='nav-link' onClick={() => logout()}>Logout</button></li>
              </>
            ) : (
              <>
                <li className = "nav-item"><NavLink to = "/register" className = { renderNavLinkClassName }>Register</NavLink></li>
                <li className="nav-item"><NavLink to="/login" className={renderNavLinkClassName}>Login</NavLink></li>
              </>
            )}
          </ul>
        </div>
      </div>
     
      
    </nav>
  )
}

export default Navbar