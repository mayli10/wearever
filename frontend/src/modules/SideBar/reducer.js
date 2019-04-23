import * as actionTypes from './action-types';

export const initialState = {
  dropdownOpen: false,
  tag: null,
};

//the reason we return Object.assign() which copies the state to an
//empty obj and then we add the third param to the obj again is bc the state is
//immutable, so we're not supposed to modify the state,
//instead we return an updated state
export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.openDropdown:
      return Object.assign({}, state, { dropdownOpen: true });
    case actionTypes.closeDropdown:
      return Object.assign({}, state, { dropdownOpen: false });
    case actionTypes.setTag:
      return Object.assign({}, state, { tag: action.tag });
    default:
      return Object.assign({}, state);
  }
};
