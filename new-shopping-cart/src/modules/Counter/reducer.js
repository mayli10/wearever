import * as actionTypes from './action-types';

export const initialState = {
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.increment: {
      return {
        count: state.count + action.num
      };
    }
    default:
      return {
        count: state.count
      };
  }
};
