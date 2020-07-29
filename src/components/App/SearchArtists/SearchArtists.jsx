import React from 'react';
import PropTypes from 'prop-types';

const SearchArtists = ({ artists }) => {
  const artistsElements = artists.map(artist => (
    <li key={artist.id}>
      <div>
        {artist.name}
      </div>
    </li>
  ));

  return (
    <ul>
      {artistsElements}
    </ul>
  );
};

SearchArtists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SearchArtists;
