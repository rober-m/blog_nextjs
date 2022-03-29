import config from "../../lib/config";
import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  thumbnail?: string;
};
export default function TwitterCardMeta({ title, description, thumbnail }: Props) {
  return (
    <Head>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={config.twitter_account} />
      <meta
        name="twitter:image"
        content={thumbnail ? config.base_url + thumbnail : config.base_url + "/og_image.png"}
      />
      <meta
        name="twitter:title"
        content={title ? [title, config.site_title].join(" | ") : ""}
      />
      <meta
        name="twitter:description"
        content={description ? description : config.site_description}
      />
    </Head>
  );
}
