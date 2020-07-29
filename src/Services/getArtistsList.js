export const getArtistsList = (search, offset) => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&offset=${offset}&fmt=json&limit=20
    `)
    .then(res => res.json());
};
