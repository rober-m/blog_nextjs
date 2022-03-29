import React from 'react';
import styles from '../../public/styles/content.module.css';
import Author from './Author';
import Copyright from './Copyright';
import Date from './Date';
import Layout from './Layout';
import BasicMeta from './meta/BasicMeta';
import JsonLdMeta from './meta/JsonLdMeta';
import OpenGraphMeta from './meta/OpenGraphMeta';
import TwitterCardMeta from './meta/TwitterCardMeta';
import { SocialList } from './SocialList';
import TagButton from './TagButton';
import { getAuthor } from '../lib/authors';
import { getTag } from '../lib/tags';
import { RevueEmbed } from './RevueEmbed';

type Props = {
  title: string;
  date: Date;
  slug: string;
  tags: string[];
  author: string;
  description?: string;
  children: React.ReactNode;
  thumbnail?: string;
};
export default function PostLayout({
  title,
  date,
  slug,
  author,
  tags,
  description = '',
  children,
  thumbnail,
}: Props) {
  const keywords = tags.map((it) => getTag(it).name);
  const authorName = getAuthor(author).name;
  return (
    <Layout>
      <BasicMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        description={description}
      />
      <TwitterCardMeta
        // url={`/posts/${slug}`}
        title={title}
        description={description}
        thumbnail={thumbnail}
      />
      <OpenGraphMeta
        url={`/posts/${slug}`}
        title={title}
        description={description}
        thumbnail={thumbnail}
      />
      <JsonLdMeta
        url={`/posts/${slug}`}
        title={title}
        keywords={keywords}
        date={date}
        author={authorName}
        description={description}
        thumbnail={thumbnail}
      />
      <div className={'container z-0 mx-auto px-6 w-full max-w-xl'}>
        <article>
          <header>
            <h1>{title}</h1>
            <div className={'metadata'}>
              <div>
                <Date date={date} />
              </div>
              <div>
                <Author author={getAuthor(author)} />
              </div>
            </div>
          </header>
          <div className={styles.content}>{children}</div>
          <ul className={'tag-list'}>
            {tags.map((it, i) => (
              <li key={i}>
                <TagButton tag={getTag(it)} />
              </li>
            ))}
          </ul>
        </article>
        <footer>
          <RevueEmbed />
          <div className={'social-list'}>
            <SocialList />
          </div>
          <Copyright />
        </footer>
      </div>
      <style jsx>
        {`
					.metadata div {
						display: inline-block;
						margin-right: 0.5rem;
					}
					article {
						flex: 1 0 auto;
					}
					h1 {
						margin: 0 0 0.5rem;
						font-size: 2.25rem;
					}
					.tag-list {
						list-style: none;
						text-align: right;
						margin: 1.75rem 0 0 0;
						padding: 0;
					}
					.tag-list li {
						display: inline-block;
						margin-left: 0.5rem;
					}
					.social-list {
						margin-top: 3rem;
						text-align: center;
					}

					@media (min-width: 769px) {
						.container {
							display: flex;
							flex-direction: column;
						}
					}
				`}
      </style>
    </Layout>
  );
}
