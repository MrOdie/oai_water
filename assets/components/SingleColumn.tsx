import React, {ReactNode} from "react";

import classes from '../styles/modules/singleColumn.module.scss';

interface Props {
    sectionId: string;
    children: ReactNode;
}
const SingleColumn: React.FC<Props> = ({sectionId, children}) => {
  return (
    <section id={sectionId} className={(sectionId ? classes[sectionId] : '') + " " + classes.section}>
      <div className={classes.Container}>
        <div className={classes.Row}>
          <div className={classes.Col}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleColumn;