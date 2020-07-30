import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AlbumView = ({ releases, bandName }) => {
  const artistReleases = releases.map(release => (
    <li key={release.id}>
      <Link to={`/album/${bandName}/${release.id}`}>
        <div>
          {release.title}, {release.date}
          <img src={`http://coverartarchive.org/release/${release.id}/front`} alt='Image Not Found'/>
        </div>
      </Link>
    </li>
  ));

  return (
    <section>
      {artistReleases}
    </section>   
  );
};

AlbumView.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.object).isRequired,
  bandName: PropTypes.string.isRequired
};

export default AlbumView;
