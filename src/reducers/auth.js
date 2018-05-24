export default (state = {}, {type, payload}) => {
  switch (type) {
    case 'LOGIN':
      return {
        ...state,
        uid: payload,
      };

    case 'LOGOUT':
      return {
        ...state,
        uid: undefined,
      };

    default:
      return state;
  }
};
