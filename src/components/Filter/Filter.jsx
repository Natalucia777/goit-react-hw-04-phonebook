//import React from 'react';
import PropTypes from 'prop-types';
import { FilterWindow } from './Filter.styled';
import { FilterLabel } from './Filter.styled';
import { FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterWindow>
      <FilterLabel>
        Filter: Find contacts by name
        <FilterInput
          type="text"
          value={value}
          onChange={onChange}
        />
      </FilterLabel>
    </FilterWindow>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;