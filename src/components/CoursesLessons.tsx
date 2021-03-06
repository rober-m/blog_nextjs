import React from 'react';
import { PostContent } from '../lib/posts';
import { TagContent } from '../lib/tags';
import PostItem from './PostItem';

type Props = {
  posts: PostContent[];
  tag: TagContent;
};

const coursesAbstract: { [x: string]: any }[] = [
  {
    'Haskell course': (
      <p>
        This is a free course for complete beginners provided by{' '}
        <a
          className='underline text-violet-400'
          href='https://twitter.com/_roberm_'
        >
          Robertino Martinez
        </a>
        .
      </p>
    ),
  },
  {
    'Other Course': (
      <p>
        This course is a free course for complete beginners provided by{' '}
        <a href='https://twitter.com/_roberm_'>Robertino Martinez</a>
      </p>
    ),
  },
];

export default function CoursesLessons({ posts, tag }: Props) {
  return (
    <div className={'container w-full max-w-7xl mx-auto px-6 flex flex-col'}>
      <h1 className='text-4xl lg:text-5xl capitalize text-center text-violet-700'>
        {tag.name} Lessons
      </h1>
      {coursesAbstract.filter((x) => x[tag.name])[0][tag.name] && (
        <div className='mb-8 text-center text-sm text-gray-500'>
          {coursesAbstract.filter((x) => x[tag.name])[0][tag.name]}
        </div>
      )}
      <ul>
        {posts
          .sort((a, b) => a.slug.localeCompare(b.slug))
          .map((it, i) => (
            <li key={i}>
              <PostItem post={it} isLesson />
            </li>
          ))}
      </ul>
      <p className='text-center bor'>
        More lessons will be added <b>every few days!</b> 😁{' '}
        <a
          className=' underline text-violet-600'
          href='https://twitter.com/_roberm_'
        >
          Follow me on Twitter 🐦
        </a>{' '}
        to be the first to know!
      </p>
    </div>
  );
}
