import React from 'react';
import { useParams } from 'react-router-dom';
import LyricsView from '../components/Lyrics/LyricsView';
import { useLyricsViewHook } from '../Hooks/LyricsViewHook';

const LyricsViewContainer = () => {
  const { bandName, songName } = useParams();

  const { lyrics } = useLyricsViewHook(bandName, songName);

  return (
    <section>
      <LyricsView lyrics={lyrics}/>
    </section>
  );
};

export default LyricsViewContainer;
