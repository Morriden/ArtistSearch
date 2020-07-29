import { useState } from 'react';

export const useSearchBar = () => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return {
    search,
    handleChange
  };
};
