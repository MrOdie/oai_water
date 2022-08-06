import * as React from 'react';
import classes from '../styles/modules/offsetColumns.module.scss';
import {NextPage} from "next";
import {ReactNode} from "react";

interface Props {
  sectionId: string;
  children: ReactNode;
}

const OffsetColumns: NextPage<Props> = ({ sectionId, children }) => {
  return (
    <section id={classes[sectionId]} className={classes.offset}>
      {children}
    </section>
  )
}

export default OffsetColumns;