export const getArtistReleases = (releasesId, offset = 0) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${releasesId}&offset=${offset}&fmt=json&limit=20`)
    .then(res => res.json());
};
