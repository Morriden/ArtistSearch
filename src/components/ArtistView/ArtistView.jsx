import React from 'react';
import PropTypes from 'prop-types';

const ArtistView = ({ releases }) => {
  const artistReleases = releases.map(release => (
    <li key={release.id}>
      <div>
        {release.title}, {release.date}
        <img src={`http://coverartarchive.org/release/${release.id}/front`}/>
      </div>
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
