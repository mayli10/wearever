import * as actionTypes from './action-types';

export const initialState = {
  dropdownOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.openDropdown:
      return Object.assign({}, state, { dropdownOpen: true });
    case actionTypes.closeDropdown:
      return Object.assign({}, state, { dropdownOpen: false });
    default:
      return Object.assign({}, state);
  }
};
