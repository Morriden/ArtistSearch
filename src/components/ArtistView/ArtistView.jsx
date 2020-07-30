import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArtistView = ({ releases }) => {
  const artistReleases = releases.map(release => (
    <li key={release.id}>
      <Link to={`/album/${release.id}`}>
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

ArtistView.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ArtistView;
