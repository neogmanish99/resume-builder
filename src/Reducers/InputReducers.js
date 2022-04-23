

const inputs = {
    fields: [],
    };

const InputReducers = (state=inputs,action) => {
    switch (action.type) {
        case 'SUBMIT':
            return {
                ...state,
                fields: [...state.fields,action.payload]
            }
            default:
                return state

    }
}

export default InputReducers;