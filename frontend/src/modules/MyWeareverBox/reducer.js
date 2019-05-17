import * as actionTypes from './action-types';

export const initialState = {
  targetItem: null,
  targetRentalPeriod: null,
  targetSize: null,
  dropdownOpen: false,
  isBoxEmpty: true
};

export default (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.removeFromBox:
      return Object.assign({}, state, { targetItem: action.targetItem });
    case actionTypes.openDropdown:
      return Object.assign({}, state, { dropdownOpen: true });
    case actionTypes.closeDropdown:
      return Object.assign({}, state, { dropdownOpen: false });
    case actionTypes.editSize:
      return Object.assign({}, state, { targetSize: action.targetSize });
    case actionTypes.editRentalPeriod:
      return Object.assign({}, state, { targetRentalPeriod: action.targetRentalPeriod })
    default:
      return Object.assign({}, state);
  }
};
