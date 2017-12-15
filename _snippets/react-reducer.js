export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return {
        ...state,
        data: action.data
      };
    default: return state;
  }
};
