import { useState, useEffect } from 'react';
import { getRecordings } from '../Services/getRecordings';

export const useRecordingsHook = (id) => {
  const [recordings, setRecordings] = useState([]);

  useEffect(() => {
    getRecordings(id)
      .then(({ recordings }) => {
        setRecordings(recordings);
      });
  }, []);

  return {
    recordings
  };
};
