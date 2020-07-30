import React from 'react';
import { useSearchArtistsHook } from '../Hooks/SearchArtistsHook';
import SearchArtists from '../components/SearchArtists/SearchArtists';
import { useSearchBar } from '../Hooks/SearchBarHook';
import { usePagination } from '../Hooks/PaginationHook';
import Pagination from '../components/Pagination/Pagination';

const SearchArtistsContainer = () => {

  const { search, handleChange } = useSearchBar();

  const { offset, handleClick } = usePagination();

  const { artists, handleSubmit, count } = useSearchArtistsHook(search, offset);



  return (
    <>
      <Pagination offset={offset} handleClick={handleClick} count={count} />
      <SearchArtists 
        artists={artists}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </>
  );
};

export default SearchArtistsContainer;
