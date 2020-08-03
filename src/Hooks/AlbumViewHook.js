import { useState, useEffect } from 'react';
import { getArtistReleases } from '../Services/getArtistReleases';

export const useAlbumReleaseHook = (releasesId, offset) => {
  const [releases, setReleases] = useState([]);
  const [releaseCount, setReleaseCount] = useState(0);

  useEffect(() => {
    getArtistReleases(releasesId, offset)
      .then(({ releases, 'release-count': count }) => {
        setReleases(releases);
        setReleaseCount(count);
      });
  }, [offset]);

  return {
    releases,
    releaseCount
  };
};
