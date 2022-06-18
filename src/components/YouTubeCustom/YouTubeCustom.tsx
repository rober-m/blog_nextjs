import React from 'react';
import styles from './YouTubeCustom.module.css';

interface YouTubeCustomProps {
  source: string;
}

export const YouTubeCustom: React.FC<YouTubeCustomProps> = ({ source }) => {
  return (
    <div className={styles.videoWrapper}>
      <iframe
        src={source}
        title='YouTube video player'
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
        allowFullScreen
      ></iframe>
    </div>
  );
};
