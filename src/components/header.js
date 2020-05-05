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
              <Link to="/">
                Qualifications
             </Link>
            </li>
            <li className="nav-link">
              <Link to="/">
                Experience
            </Link>
            </li>
            <li className="nav-link">
              <Link to="/">
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
