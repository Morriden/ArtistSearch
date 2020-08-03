import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecordingsView = ({ recordings, bandName }) => {

  const recordingsArray = recordings.map(song => (
    <li key={song.id}>
      <Link to={`/lyrics/${bandName}/${song.title}`}>
        <div>
          {song.title}
        </div>
      </Link>
    </li>
  ));

  return (
    <ul>
      {recordingsArray}
    </ul>
  );
};
  
RecordingsView.propTypes = {
  recordings: PropTypes.arrayOf(PropTypes.object).isRequired,
  bandName: PropTypes.string.isRequired
};

export default RecordingsView;
