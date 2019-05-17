import * as actionTypes from './action-types';

export const removeFromBox = targetItem => ({
  targetItem,
  type: actionTypes.removeFromBox
});

export const openDropdown = () => ({
  type: actionTypes.openDropdown
});

export const closeDropdown = () => ({
  type: actionTypes.closeDropdown
});

export const editSize = targetSize => ({
  targetSize,
  type: actionTypes.editSize
});

export const editRentalPeriod = targetRentalPeriod => ({
  targetRentalPeriod,
  type: actionTypes.editRentalPeriod
});

export const showFinalPrice = () => ({
  type: actionTypes.showFinalPrice
});

export const sumValues = () => ({
  type: actionTypes.sumValues
});
