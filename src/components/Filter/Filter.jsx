import React from 'react';
import { FilterStyle, FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterStyle>
      <FilterLabel>
        Find contact by Name
        <FilterInput
          type="text"
          name="filter"
          onChange={evt => dispatch(setFilter(evt.target.value))}
        ></FilterInput>
      </FilterLabel>
    </FilterStyle>
  );
};
