import config from "../../lib/config";
import Head from "next/head";

// type Props = {
//   title?: string;
//   description?: string;
//   thumbnail?: string;
// };

export default function TwitterCardMeta() {
  return (
    <Head>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={config.twitter_account} />
      <meta name="twitter:creator" content={config.twitter_account} />
    </Head>
  );
}
