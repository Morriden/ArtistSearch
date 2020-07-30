import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ offset, handleClick }) => {

  return (
    <div>
      <h3>{offset}</h3>
      <button name='previous' onClick={handleClick} value='previous'>Previous</button>
      <button name='next' onClick={handleClick} value='next'>Next</button>
    </div>
  );

};


Pagination.propTypes = {
  offset: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Pagination;

