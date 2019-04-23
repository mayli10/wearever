import * as actionTypes from './action-types';

export const initialState = {
  dropdownOpen: false,
  targetSize: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.selectDate:
    //   return Object.assign({}, state, { targetSize: action.targetDestination, dropdownOpen: false });
    case actionTypes.filterSize:
      return Object.assign({}, state, { targetSize: action.targetSize});
    // case actionTypes.searchItem:
    //   return Object.assign({}, state, { destination: action.targetDestination, dropdownOpen: false });
    case actionTypes.openDropdown:
      return Object.assign({}, state, { dropdownOpen: true });
    case actionTypes.closeDropdown:
      return Object.assign({}, state, { dropdownOpen: false });
    default:
      return Object.assign({}, state);
  }
};
