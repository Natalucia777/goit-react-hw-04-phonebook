import React from 'react';
import PropTypes from 'prop-types';
import { FilterWindow } from './Filter.styled';
import { FilterLabel } from './Filter.styled';
import { FilterInput } from './Filter.styled';

const Filter = ({ value, onFilterChange }) => (
  <FilterWindow>
    <FilterLabel>
      Filter: Find contacts by name
      <FilterInput
        type="text"
        value={value}
        onChange={onFilterChange}
      />
    </FilterLabel>
  </FilterWindow>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;