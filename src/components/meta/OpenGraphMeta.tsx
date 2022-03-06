import Head from "next/head";
import config from "../../lib/config";

type Props = {
  url: string;
  title?: string;
  description?: string;
  thumbnail?: string;
};
export default function OpenGraphMeta({
  url,
  title,
  description,
  thumbnail,
}: Props) {
  return (
    <Head>
      <meta property="og:site_name" content={config.site_title} />
      <meta property="og:url" content={config.base_url + url} />
      <meta
        property="og:title"
        content={title ? [title, config.site_title].join(" | ") : ""}
      />
      <meta
        property="og:description"
        content={description ? description : config.site_description}
      />
      <meta
        property="og:image"
        content={thumbnail ? config.base_url + thumbnail : config.base_url + "/og_image.png"}
      />
      <meta property="og:type" content="article" />
    </Head>
  );
}
