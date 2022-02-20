import React from 'react';

//TODO: Doesn't work because I don't have window when generating posts.
//TODO: See if I can use just the slug with domain hardcoded or if I can use window generating posts.
export const ShareOnSocialMedia = () => {
	return (
		<a
			href={`https://twitter.com/share?url=${window.location.href}`}
			target='_blank'
		>
			share it
		</a>
	);
};
