import * as React from "react";
import Image, {StaticImageData} from "next/image";

interface Props {
    image: StaticImageData;
}

const Banner: React.FC<Props> = ({image}) => {
    return (
        <>
            <Image src={image} />
        </>
    )
}

export default Banner;