
const initialState = {
    testState : ''
}

export const testReducer = (state = initialState, action ) => {

    switch (action.type) {        
        case 'UPDATE_VALUE' : 
            return {
            ...state,
            testState : action.payload   
            }
        default:
            return state;
    }
}