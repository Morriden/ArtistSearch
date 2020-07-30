import { useState, useEffect } from 'react';
import { getArtistReleases } from '../Services/getArtistReleases';

export const useArtistReleaseHook = (releasesId, offset) => {
  const [releases, setReleases] = useState([]);
  
  useEffect(() => {
    getArtistReleases(releasesId, offset)
      .then(({ releases }) => setReleases(releases));
  }, [offset]);

  return {
    releases
  };
};
