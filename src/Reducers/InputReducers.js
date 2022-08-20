const initialState = {
  fields: [],
};

const inputReducers = (state = initialState, action) => {
  switch (action.type) {
    case "SUBMIT":
      return {
        ...state,
        fields: [...state.fields, action.payload],
      };
    default:
      return state;
  }
};

export default inputReducers;
