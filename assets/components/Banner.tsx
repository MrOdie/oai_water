import * as React from "react";
import classes from "../styles/modules/banner.module.scss";

interface Props {
    sectionId: string;
    headline?: string;
    subHeadline?: string;
}

const Banner: React.FC<Props> = ({sectionId, headline, subHeadline}) => {

    return (
        <section className={classes[sectionId]}>
            {headline && headline !== "" ?
                <article className={classes.headlineParent}>
                    <h6 className={classes.headline}>{headline}</h6>
                    {subHeadline && subHeadline !== "" ?
                        <p className={classes.subHeadline}>{subHeadline}</p> : ""}
                </article> : ""}
        </section>
    )
}

export default Banner;