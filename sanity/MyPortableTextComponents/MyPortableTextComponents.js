import clientConfig from "@/sanity/clientConfig";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { getImageDimensions } from "@sanity/asset-utils";
import { getImageColor } from "../queries";
// import getYouTubeId from "get-youtube-id";
// import LiteYouTubeEmbed from "./ToUseClient/ToUseClient";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
// import ToUseClient from "./ToUseClient/ToUseClient";

import styles from "./MyPortableTextComponents.module.css";

const builder = imageUrlBuilder(clientConfig);

function urlFor(source) {
  return builder.image(source);
}

export default {
  types: {
    image: async ({ value }) => {
      const { width, height } = getImageDimensions(value);

      const imageColor = await getImageColor(value.asset._ref);

      const svg = `
      <svg width="1" height="1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="1" height="1" fill="${imageColor}" />
      </svg>`;

      const toBase64 = (str) =>
        typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

      return (
        <div className={styles.imageWrapper}>
          <Image
            src={urlFor(value.asset._ref).url()}
            width={width}
            height={height}
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(svg)}`}
            alt={imageColor}
          />
        </div>
      );
    },
    // youtube: ({ value }) => {
    //   const { url } = value;
    //   const id = getYouTubeId(url);
    //   return <LiteYouTubeEmbed id={id} />;
    // },
  },
};
