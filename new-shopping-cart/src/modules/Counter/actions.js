import * as actionTypes from './action-types';

export const increment = (num = 1) => ({
  type: actionTypes.increment,
  num
});
