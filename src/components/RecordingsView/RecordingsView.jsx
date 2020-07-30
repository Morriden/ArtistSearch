import React from 'react';
import PropTypes from 'prop-types';

const RecordingsView = ({ recordings }) => {

  const recordingsArray = recordings.map(song => (
    <li key={song.id}>
      <div>
        {song.title}
      </div>
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

};

export default RecordingsView;
