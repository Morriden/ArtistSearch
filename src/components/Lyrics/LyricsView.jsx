import React from 'react';
import PropTypes from 'prop-types';

const LyricsView = ({ lyrics }) => {
  return (
    <div>
      {lyrics}
    </div>
  );
};

LyricsView.propTypes = {
  lyrics: PropTypes.string.isRequired
};

export default LyricsView;
