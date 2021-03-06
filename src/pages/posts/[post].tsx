import { GetStaticProps, GetStaticPaths } from 'next';
import renderToString from 'next-mdx-remote/render-to-string';
import { MdxRemote } from 'next-mdx-remote/types';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import { fetchPostContent } from '../../lib/posts';
import fs from 'fs';
import yaml from 'js-yaml';
import { parseISO } from 'date-fns';
import PostLayout from '../../components/PostLayout';

import { Accordion } from '../../components/Accordion';
import { PaizaEmbed } from '../../components/PaizaEmbed';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/shades-of-purple.css';
import hljs from 'highlight.js';
import { TabbedContent } from '../../components/TabbedContent';
import { SideNote } from '../../components/SideNote';
import { Giff } from '../../components/Giff';
import { RevueEmbed } from '../../components/RevueEmbed';
import { ShareOnSocialMedia } from '../../components/ShareOnSocialMedia';
import { LessonNavigationButtons } from '../../components/LessonNavigationButtons';
import { BlockNote } from '../../components/BlockNote';
import { YouTubeCustom } from '../../components/YouTubeCustom/YouTubeCustom';

hljs.registerLanguage('hs', require('highlight.js/lib/languages/haskell'));
hljs.registerLanguage('Haskell', require('highlight.js/lib/languages/haskell'));
hljs.registerLanguage('haskell', require('highlight.js/lib/languages/haskell'));
hljs.registerLanguage('latex', require('highlight.js/lib/languages/latex'));

export type Props = {
  title: string;
  dateString: string;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  source: MdxRemote.Source;
  thumbnail: string;
};

const components = {
  YouTubeCustom,
  Accordion,
  PaizaEmbed,
  TabbedContent,
  SideNote,
  Giff,
  RevueEmbed,
  ShareOnSocialMedia,
  LessonNavigationButtons,
  BlockNote,
};
const slugToPostContent = ((postContents) => {
  let hash = {};
  postContents.forEach((it) => (hash[it.slug] = it));
  return hash;
})(fetchPostContent());

export default function Post({
  title,
  dateString,
  slug,
  tags,
  author,
  description = '',
  source,
  thumbnail,
}: Props) {
  const content = hydrate(source, { components });
  content;
  return (
    <PostLayout
      title={title}
      date={parseISO(dateString)}
      slug={slug}
      tags={tags}
      author={author}
      description={description}
      thumbnail={thumbnail}
    >
      {content}
    </PostLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = fetchPostContent().map((it) => '/posts/' + it.slug);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params.post as string;
  const source = fs.readFileSync(slugToPostContent[slug].fullPath, 'utf8');
  const { content, data } = matter(source, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
    },
  });
  const mdxSource = await renderToString(content, {
    components,
    scope: data,
    mdxOptions: {
      rehypePlugins: [
        //@ts-ignore
        rehypeHighlight,
        //@ts-ignore
        rehypeSlug,
        //@ts-ignore
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ],
    },
  });
  return {
    props: {
      title: data.title,
      dateString: data.date,
      slug: data.slug,
      description: data?.description ?? '',
      tags: data.tags,
      author: data.author,
      source: mdxSource,
      thumbnail: data?.thumbnail ?? '',
    },
  };
};
