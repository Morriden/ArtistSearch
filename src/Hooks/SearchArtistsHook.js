import { useState, useEffect } from 'react';
import { getArtistsList } from '../Services/getArtistsList';

export const useSearchArtistsHook = () => {
  const [artists, setArtists] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [count, setCount] = useState();

  const handleClick = ({ target }) => {
    if(target.name === 'previous') setOffSet(offset => offset - 20);
    if(target.name === 'next') setOffSet(offset => offset + 20);
  };

  useEffect(() => {
    getArtistsList(offset)
      .then(({ count, offset, artists }) => {
        setArtists(artists);
        setCount(count);
        setOffSet(offset);
      });
  }, [offset]);

  return {
    artists,
    count,
    handleClick
  };
};
