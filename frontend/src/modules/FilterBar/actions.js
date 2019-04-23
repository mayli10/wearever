import * as actionTypes from './action-types';

// export const selectDate = targetDate => ({
//   type: actionTypes.selectDate,
//   targetDate
// });

export const filterSize = targetSize => ({
  targetSize,
  type: actionTypes.filterSize,
});

// export const searchItem = targetItem => ({
//   type: actionTypes.searchItem,
//   targetItem
// });
//
export const openDropdown = () => ({
  type: actionTypes.openDropdown,
});

export const closeDropdown = () => ({
  type: actionTypes.closeDropdown,
})
