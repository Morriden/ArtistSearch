import { useState } from 'react';

export const useSearchBar = () => {
  const [search, setSearch] = useState('imagine dragons');

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return {
    search,
    handleChange
  };
};
