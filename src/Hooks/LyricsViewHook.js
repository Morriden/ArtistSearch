import { useState, useEffect } from 'react';
import { getLyrics } from '../Services/getLyrics';

export const useLyricsViewHook = (band, song) => {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    getLyrics(band, song)
      .then(({ lyrics }) => {
        setLyrics(lyrics);
      }); 
  }, []);

  return {
    lyrics
  };
};
