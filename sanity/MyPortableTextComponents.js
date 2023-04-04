import clientConfig from "@/sanity/clientConfig";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
// import getYouTubeId from "get-youtube-id";
// import LiteYouTubeEmbed from "./ToUseClient/ToUseClient";
// import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
// import ToUseClient from "./ToUseClient/ToUseClient";

const builder = imageUrlBuilder(clientConfig);

function urlFor(source) {
  return builder.image(source);
}

export function getDimensions(data) {
  const splitArray = data.split("-");
  const dimensions = splitArray[splitArray.length - 2];
  return dimensions.split("x");
}

export default {
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value.asset._ref).url()}
        width={getDimensions(value.asset._ref)[0]}
        height={getDimensions(value.asset._ref)[1]}
      />
    ),
    // youtube: ({ value }) => {
    //   const { url } = value;
    //   const id = getYouTubeId(url);
    //   return <LiteYouTubeEmbed id={id} />;
    // },
  },
};
