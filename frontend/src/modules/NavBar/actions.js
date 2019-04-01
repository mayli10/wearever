import * as actionTypes from './action-types';

export const changeDestination = targetDestination => ({
  type: actionTypes.changeDestination,
  targetDestination
});

export const openDropdown = () => ({
  type: actionTypes.openDropdown,
});

export const closeDropdown = () => ({
  type: actionTypes.closeDropdown,
})
