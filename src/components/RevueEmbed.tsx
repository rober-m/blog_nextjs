import React from 'react';

export const RevueEmbed = () => {
  return (
    <div id='revue-embed'>
      <hr className=' mt-4' />
      <form
        action='https://www.getrevue.co/profile/roberm/add_subscriber'
        method='post'
        id='revue-form'
        name='revue-form'
        target='_blank'
      >
        <div className='flex flex-col items-center justify-center py-2'>
          <div className='font-bold my-2 text-violet-600 text-justify'>
            Subscribe to receive updates when I release new lessons and create
            more free courses! 😃
          </div>
          <div className='flex flex-row w-full justify-center mb-2'>
            <input
              className=' rounded-tl-lg rounded-bl-lg border-2 peer outline-none shadow focus:shadow-none border-violet-600 w-full max-w-xs px-4 py-1'
              placeholder='Your email address...'
              type='email'
              name='member[email]'
              id='member_email'
            />
            <div className=' bg-violet-600 text-white p-2 rounded-tr-lg rounded-br-lg shadow peer-focus:shadow-none'>
              <input
                type='submit'
                value='Subscribe'
                name='member[subscribe]'
                id='member_submit'
              />
            </div>
          </div>
          <div className='text-gray-400 text-sm'>
            By subscribing, you agree with Revue’s{' '}
            <a
              className='underline'
              target='_blank'
              href='https://www.getrevue.co/terms'
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              className='underline'
              target='_blank'
              href='https://www.getrevue.co/privacy'
            >
              Privacy Policy
            </a>
            .
          </div>
        </div>
        <hr className='my-4' />
      </form>
    </div>
  );
};
