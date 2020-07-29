import { useState } from 'react';
import { getArtistsList } from '../Services/getArtistsList';

export const useSearchArtistsHook = (search) => {
  const [artists, setArtists] = useState([]);
  const [offset, setOffSet] = useState(0);
  const [count, setCount] = useState();

  const handleClick = ({ target }) => {
    if(target.name === 'previous') setOffSet(offset => offset - 20);
    if(target.name === 'next') setOffSet(offset => offset + 20);
  };

  const handleSubmit = event => {
    event.preventDefault();

    getArtistsList(search, offset)
      .then(({ count, offset, artists }) => {
        setArtists(artists);
        setCount(count);
        setOffSet(offset);
      });
  };

  return {
    artists,
    count,
    handleClick,
    handleSubmit
  };
};
