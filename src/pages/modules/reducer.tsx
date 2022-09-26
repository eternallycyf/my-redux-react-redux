const themeReducer = (state, action) => {
  if (!state)
    return {
      themeColor: 'blue',
    };
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor };
    default:
      return state;
  }
};

export { themeReducer };
