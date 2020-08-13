import { Data_Failuer,Data_Request,Data_Success } from './actiontypes'
// import AsyncStorage from '@react-native-community/async-storage'


const fetchDataSuccess = json => ({
    type: Data_Success,
    payload: json
});

const fetchDataFailure = error => ({
    type: Data_Failuer,
    payload: error
});



const fetchData = ({data})=>{
    console.log(data,'ActionData');
    
    if (data ==''){

        return async dispatch =>{


            dispatch(fetchDataFailure(error='failed'))
        }
    }
        return async dispatch =>{
    
    
            dispatch(fetchDataSuccess(data))
        }
    }

export { fetchData}