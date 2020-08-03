export const getLyrics = (band, song) => {
  return fetch(`https://api.lyrics.ovh/v1/${band}/${song}
  `)
    .then(res => res.json());
};
