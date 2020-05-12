import React from 'react';

import classes from '../assets/scss/modules/accordion.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const accordion = (props) => {
  return (
    <div className="accordion__container">
    <input type="checkbox" id={'accordion__' + props.title} className={'accordion__' + props.title} />
    <label htmlFor={'accordion__' + props.title} className={classes.accordion__label}>{props.label} <FontAwesomeIcon className={classes.accordion__plus} icon={faPlus} /></label>
    <div className={classes.accordion__content}>
      {props.children}
    </div>
  </div>
  )
}

export default accordion