import * as actionTypes from './action-types';

export const selectDate = targetDate => ({
  type: actionTypes.selectDate,
  targetDate
});

export const filterSize = targetSizes => ({
  type: actionTypes.filterSize,
  targetSizes
});

export const searchItem = targetItem => ({
  type: actionTypes.searchItem,
  targetItem
});

export const openDropdown = () => ({
  type: actionTypes.openDropdown,
});

export const closeDropdown = () => ({
  type: actionTypes.closeDropdown,
})
