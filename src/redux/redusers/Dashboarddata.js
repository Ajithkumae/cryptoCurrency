import { Data_Failuer,Data_Request,Data_Success } from '../actions/actiontypes';

const initialState = {
    isFetching: false,
    errorMsg: '',
    data: [],
    
}

const DataDashboard = (state = initialState, action) => {
    switch (action.type) {
        case Data_Request:
            return { ...state, isFetching: true };
        case Data_Success:
            return { ...state, isFetching: false, data: action.payload };
        case Data_Failuer:
            return { ...state, isFetching: false, errorMsg: action.payload };
        
        default:
            return state;
    }
}

export default DataDashboard;