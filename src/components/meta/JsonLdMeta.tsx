import { BlogPosting } from "schema-dts";
import { jsonLdScriptProps } from "react-schemaorg";
import config from "../../lib/config";
import { formatISO } from "date-fns";
import Head from "next/head";

type Props = {
  url: string;
  title: string;
  keywords?: string[];
  date: Date;
  author?: string;
  thumbnail?: string;
  description?: string;
};
export default function JsonLdMeta({
  url,
  title,
  keywords,
  date,
  author,
  thumbnail,
  description,
}: Props) {
  return (
    <Head>
      <script
        {...jsonLdScriptProps<BlogPosting>({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          mainEntityOfPage: config.base_url + url,
          headline: title,
          keywords: keywords ? undefined : keywords.join(","),
          datePublished: formatISO(date),
          author: author,
          image: thumbnail,
          description: description,
        })}
      />
    </Head>
  );
}
