import * as actionTypes from './action-types';

export const initialState = {
  destination: 'Orlando',
  dropdownOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.changeDestination:
      return Object.assign({}, state, { destination: action.targetDestination, dropdownOpen: false });
    case actionTypes.openDropdown:
      return Object.assign({}, state, { dropdownOpen: true });
    case actionTypes.closeDropdown:
      return Object.assign({}, state, { dropdownOpen: false });
    default:
      return Object.assign({}, state);
  }
};
