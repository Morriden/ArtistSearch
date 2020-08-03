import { useState, useEffect } from 'react';
import { getArtistsList } from '../Services/getArtistsList';

export const useSearchArtistsHook = (search, offset) => {
  const [artists, setArtists] = useState([]);
  const [count, setCount] = useState(0);
  
  const handleSubmit = event => {
    event.preventDefault();

    getArtistsList(search, offset)
      .then(({ count, artists }) => {
        setArtists(artists);
        setCount(count);
      });
  };

  useEffect(() => {
    if(search) {
      getArtistsList(search, offset)
        .then(({ count, artists }) => {
          setArtists(artists);
          setCount(count);
        });
    }
  }, [offset]);

  return {
    artists,
    count,
    handleSubmit
  };
};
