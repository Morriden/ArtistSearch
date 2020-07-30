import React from 'react';
import PropTypes from 'prop-types';
import ReactImageFallback from 'react-image-fallback';
import { Link } from 'react-router-dom';

const AlbumView = ({ releases, bandName }) => {
  const artistReleases = releases.map(release => (
    <li key={release.id}>
      <Link to={`/album/${bandName}/${release.id}`}>
        <div>
          {release.title}, {release.date}

          <ReactImageFallback
            src={`http://coverartarchive.org/release/${release.id}/front`}
            fallbackImage={'https://dalelyles.com/musicmp3s/no_cover.jpg'}
            style={{ width: '300px', height: '300px' }}
          />

          {/* <img 
            src={`http://coverartarchive.org/release/${release.id}/front`}
            alt='Image Not Found' 
            style={{ width: '300px', height: '300px' }}
          /> */}
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
