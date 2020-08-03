import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ offset, handleClick, count }) => {

  return (
    <div>
      <h3>{offset / 20 + 1}</h3>
      <button disabled={ offset === 0 }name='previous' onClick={handleClick} value='previous'>Previous</button>
      <button disabled={ offset >= (count - 20)} name='next' onClick={handleClick} value='next'>Next</button>
    </div>
  );

};


Pagination.propTypes = {
  offset: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

export default Pagination;

