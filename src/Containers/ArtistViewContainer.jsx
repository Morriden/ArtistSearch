import React from 'react';
import { useParams } from 'react-router-dom';
import ArtistView from '../components/ArtistView/ArtistView';
import Pagination from '../components/Pagination/Pagination';
import { useArtistReleaseHook } from '../Hooks/ArtistViewHook';
import { usePagination } from '../Hooks/PaginationHook';

const ArtistViewContainer = () => {
  
  const { id } = useParams();

  const { offset, handleClick } = usePagination();
  
  const { releases, releaseCount } = useArtistReleaseHook(id, offset);

  return (
    <section>
      <Pagination offset={offset} handleClick={handleClick} count={releaseCount} />
      <ArtistView releases={releases}/>
    </section>
  );
};

export default ArtistViewContainer;
