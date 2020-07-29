import { useState, useEffect } from 'react';
import { getArtistReleases } from '../Services/getArtistReleases';

export const useArtistReleaseHook = (releasesId) => {
  const [releases, setReleases] = useState([]);
  
  useEffect(() => {
    getArtistReleases(releasesId)
      .then(({ releases }) => setReleases(releases));
  }, []);

  return {
    releases
  };
};
