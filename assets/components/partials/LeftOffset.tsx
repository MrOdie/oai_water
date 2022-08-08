import * as React from 'react';
import classes from '../../styles/modules/leftOffset.module.scss';
import {ReactNode} from "react";

interface Props {
    parent: string;
    children: ReactNode;
}

const LeftOffset: React.FC<Props> = ({ parent, children }) => {
  return (
    <>
      <article className={classes[parent]}>{ children } </article>
    </>
  )
};

export default LeftOffset;
