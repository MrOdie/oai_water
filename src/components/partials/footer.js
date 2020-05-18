import React from 'react';
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInbox } from "@fortawesome/free-solid-svg-icons";

const today = new Date();

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h4 className="h1">O'Donnell &amp; Associates, Inc</h4>
          <p><small>EST. 1999 &mdash; <span>{today.getFullYear()}</span></small></p>
          <div className="address">
            <p>600 Bel Air Boulevard Suite 130</p>
            <p>Mobile AL 36606</p>
            <p><a href="tel:2512855945">(251) 285-5945</a></p>
          </div>
          <div className="info">
            <Link to=""><FontAwesomeIcon className="fa-2x" icon={faFacebook} /></Link>
            <Link to="https://www.linkedin.com/in/daniel-j-o-donnell-pg-440a1133/"><FontAwesomeIcon className="fa-2x" icon={faLinkedin} /></Link>
            <Link to="/contact"><FontAwesomeIcon className="fa-2x" icon={faInbox} /></Link>

          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer