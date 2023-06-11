export const filterInitialState = {
  filter: '',
};

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'changeFilter':
      return {
        filter: action.payload,
      };
    default:
      return state;
  }
};
