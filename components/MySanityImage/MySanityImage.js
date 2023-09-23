import Image from "next/image";
import clientConfig from "@/sanity/clientConfig";
import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";

import styles from "./MySanityImage.module.css";

const builder = imageUrlBuilder(clientConfig);

function urlFor(source) {
  return builder.image(source);
}

const MySanityImage = ({ image, position, alt = "", projectImage = false, className = undefined }) => {
  const { width, height } = image !== undefined ? getImageDimensions(image) : undefined;
  const landscape = width > height;

  return (
    <>
      {image && (
        <Image
          className={`
          ${position === "cover" ? styles.cover : undefined}
          ${projectImage && landscape ? styles.landscape : undefined}
          ${projectImage && !landscape ? styles.portrait : undefined}
          ${className}
          `}
          src={urlFor(image.asset._ref).url()}
          width={width}
          height={height}
          alt={alt}
        />
      )}
    </>
  );
};

export default MySanityImage;
