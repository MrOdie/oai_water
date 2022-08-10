import * as React from "react";
import Image, {StaticImageData} from "next/image";
import classes from "../styles/modules/banner.module.scss";

interface Props {
    sectionId: string;
    image: StaticImageData;
    headline?: string;
    subHeadline?: string;
}

const Banner: React.FC<Props> = ({sectionId, image, headline, subHeadline}) => {


    return (
        <section className={classes[sectionId]}>
            {headline && headline !== "" ?
                <article className={classes.headline}>
                    <h6 className="headline">{headline}</h6>
                    {subHeadline && subHeadline !== "" ?
                        <p className="subHeadline">{subHeadline}</p> : ""}
                </article> : ""}
            <article className={classes.image}>
                <Image src={image}></Image>
            </article>
        </section>
    )
}

export default Banner;