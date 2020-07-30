import React from 'react';
import { useParams } from 'react-router-dom';
import Pagination from '../components/Pagination/Pagination';
import { useAlbumReleaseHook } from '../Hooks/AlbumViewHook';
import { usePagination } from '../Hooks/PaginationHook';
import AlbumView from '../components/AlbumView/AlbumView';

const AlbumViewContainer = () => {
  
  const { bandName, id } = useParams();

  const { offset, handleClick } = usePagination();
  
  const { releases, releaseCount } = useAlbumReleaseHook(id, offset);

  return (
    <section>
      <Pagination offset={offset} handleClick={handleClick} count={releaseCount} />
      <AlbumView releases={releases} bandName={bandName}/>
      <Pagination offset={offset} handleClick={handleClick} count={releaseCount} />
    </section>
    
  );
};

export default AlbumViewContainer;
