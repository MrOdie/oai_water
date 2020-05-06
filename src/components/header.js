import { Link } from "gatsby"
import { header } from '../assets/js/header'
import logo from "../assets/images/logo.png"
import React from "react"

class Header extends React.PureComponent {
  componentDidMount() {
    header()
  }

  render() {
    return (
      <header className="main-header">
        <div className="logo">
          <Link to="/"><img className="logo-img" src={logo} alt="O'Donnell &amp; Associates, Inc." /></Link>
        </div>

        <input type="checkbox" id="menu-btn" className="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="menu-icon__line"></span>
        </label>
        <nav className="nav-links">
          <ul>
            <li className="nav-link">
              <Link activeClassName="active" to="/about">
                About
             </Link>
            </li>
            <li className="nav-link">
              <Link activeClassName="active" to="/research">
                Research
            </Link>
            </li>
            <li className="nav-link">
              <Link activeClassName="active" to="/development">
                Development
            </Link>
            </li>
            <li className="nav-link">
              <Link activeClassName="active" to="/management">
                Management
            </Link>
            </li>
            <li className="nav-link">
              <Link activeClassName="active" to="/contact">
                Contact
            </Link>
            </li>
          </ul>
        </nav>

      </header>
    )
  }
}

export default Header
