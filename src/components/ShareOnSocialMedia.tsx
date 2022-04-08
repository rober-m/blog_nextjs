import React from 'react';

export const ShareOnSocialMedia = () => {
  return (
    <p
      style={{
        backgroundColor: '#dbd6fb',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        color: '#733de4',
      }}
    >
      <i>
        PD: If you find this course valuable, please{' '}
        <a
          href='https://twitter.com/share?url=https://robertinom.com/posts/haskell-course-lesson-0'
          target='_blank'
        >
          share it
        </a>{' '}
        so more people can learn!
      </i>{' '}
      😄
    </p>
  );
};
