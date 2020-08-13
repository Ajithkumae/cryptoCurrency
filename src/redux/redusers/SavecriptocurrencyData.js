import { SaveData_Failuer,SaveData_Request,SaveData_Success } from '../actions/actiontypes';

const initialState = {
    isFetching: false,
    errorMsg: '',
    data: [],
    
}

const Savecryptocurrency = (state = initialState, action) => {
    debugger
    switch (action.type) {
        
        case SaveData_Request:
            return { ...state, isFetching: true };
        case SaveData_Success:
            return { ...state, isFetching: false, data: [...state.data, action.payload] };
        case SaveData_Failuer:
            return { ...state, isFetching: false, errorMsg: action.payload };
        
        default:
            return state;
    }
}

export default Savecryptocurrency;