import React, {ReactNode} from 'react'
import {NextPage} from "next";

import classes from '../../styles/modules/blockquote.module.scss';

interface Props {
    attribution?: string;
    children: ReactNode;
}
const Blockquote: NextPage<Props> = ({attribution, children}) => {
  return (
    <article className={classes.BlockquoteContainer}>
      <blockquote className={classes.Blockquote}>
        <p>{children}</p>
        {attribution ? <p className={classes.Caption}>&mdash; {attribution}</p> : null}
      </blockquote>
    </article>
  )
}

export default Blockquote;