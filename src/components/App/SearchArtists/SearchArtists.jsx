import React from 'react';
import PropTypes from 'prop-types';

const SearchArtists = ({ artists, handleSubmit, handleChange }) => {
  const artistsElements = artists.map(artist => (
    <li key={artist.id}>
      <div>
        {artist.name}
      </div>
    </li>
  ));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange}></input>
      </form>
      <ul>
        {artistsElements}
      </ul>
    </>
  );
};

SearchArtists.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchArtists;
