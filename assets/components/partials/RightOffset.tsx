import * as React from 'react';
import classes from '../../styles/modules/rightOffset.module.scss';
import {ReactNode} from "react";

interface Props {
    parent: string;
    children: ReactNode;
}

const RightOffset: React.FC<Props> = ({ parent, children }) => {
  return (
    <>
      <article className={classes[parent]}>{ children } </article>
    </>
  )
};

export default RightOffset;
