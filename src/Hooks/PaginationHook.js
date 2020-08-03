import { useState } from 'react';

export const usePagination = () => {
  const [offset, setOffSet] = useState(0);
  

  const handleClick = ({ target }) => {
    if(target.name === 'previous') setOffSet(offset => offset - 20);
    if(target.name === 'next') setOffSet(offset => offset + 20);
  };
 
  return {
    offset,
    handleClick
  };
};
