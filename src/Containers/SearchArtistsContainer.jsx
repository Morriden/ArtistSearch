import React from 'react';
import { useSearchArtistsHook } from '../Hooks/SearchArtistsHook';
import SearchArtists from '../components/SearchArtists/SearchArtists';
import { useSearchBar } from '../Hooks/SearchBarHook';

const SearchArtistsContainer = () => {

  const { search, handleChange } = useSearchBar();

  const { artists, handleClick, handleSubmit } = useSearchArtistsHook(search);

  return (
    <>
      <SearchArtists 
        artists={artists}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </>
  );
};

export default SearchArtistsContainer;
