export default (state = {}, action = {}) => {
  switch (action.type) {
    case 'LOAD_START':
      return {
        ...state,
        [action.id]: {
          loading: true,
          loaded: false,
          failed: false,
          data: null
        }
      };
    case 'LOAD_END':
      return {
        ...state,
        [action.id]: {
          loading: false,
          loaded: true,
          failed: false,
          data: action.data
        }
      };
    case 'LOAD_FAILED':
      return {
        ...state,
        [action.id]: {
          loading: false,
          loaded: false,
          failed: true,
          data: null
        }
      };
    case 'LOAD_RESET':
      return {
        ...state,
        [action.id]: {
          loading: false,
          loaded: false,
          failed: false,
          data: null
        }
      };
    default:
      return state;
  }
};
