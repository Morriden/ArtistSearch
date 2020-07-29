export const getArtistReleases = (releasesId) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${releasesId}&fmt=json`)
    .then(res => res.json());
};
