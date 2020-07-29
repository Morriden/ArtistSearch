import React from 'react';
import { useParams } from 'react-router-dom';
import ArtistView from '../components/ArtistView/ArtistView';
import { useArtistReleaseHook } from '../Hooks/ArtistViewHook';

const ArtistViewContainer = () => {
  
  const { id } = useParams();
  
  const { releases } = useArtistReleaseHook(id);

  return (
    <section>
      <ArtistView releases={releases}/>
    </section>
  );
};

export default ArtistViewContainer;
