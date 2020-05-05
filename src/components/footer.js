import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInbox } from "@fortawesome/free-solid-svg-icons"


const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <h4 className="h1">O'Donnell &amp; Associates, Inc</h4>
          <p><small>est. 1999</small></p>
          <div className="info">
          <FontAwesomeIcon className="fa-2x" icon={faFacebook} ></FontAwesomeIcon>
          <FontAwesomeIcon className="fa-2x" icon={faLinkedin} ></FontAwesomeIcon>
          <FontAwesomeIcon className="fa-2x" icon={faInbox} ></FontAwesomeIcon>

          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer