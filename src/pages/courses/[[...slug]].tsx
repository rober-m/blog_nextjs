import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import BasicMeta from '../../components/meta/BasicMeta';
import OpenGraphMeta from '../../components/meta/OpenGraphMeta';
import TwitterCardMeta from '../../components/meta/TwitterCardMeta';
import { listPostContent, PostContent } from '../../lib/posts';
import { getTag, listTags, TagContent } from '../../lib/tags';
import CoursesLessonsList from '../../components/CoursesLessons';

type Props = {
  posts: PostContent[];
  tag: TagContent;
};
export default function Index({ posts, tag }: Props) {
  const url = `/courses/${tag.name}`;
  const title = tag.name;
  return (
    <div>
      <Layout>
        <BasicMeta url={url} title={title} />
        <OpenGraphMeta url={url} title={title} />
        <TwitterCardMeta />
        <CoursesLessonsList posts={posts} tag={tag} />
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const queries = params.slug as string[];
  const [slug, page] = [queries[0], queries[1]];
  const posts = listPostContent(
    page ? parseInt(page as string) : 1,
    undefined,
    slug
  );
  const tag = getTag(slug);
  const props: {
    posts: PostContent[];
    tag: TagContent;
    page?: string;
  } = { posts, tag };
  if (page) {
    props.page = page;
  }
  return {
    props,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = listTags()
    // I don't know why I had to filter the tag. Else, it would serve in dev but not built in prod.
    .filter((tag) => tag.slug === 'haskell-course')
    .flatMap((tag) => {
      return { params: { slug: [tag.slug] } };
    });
  return {
    paths: paths,
    fallback: false,
  };
};
