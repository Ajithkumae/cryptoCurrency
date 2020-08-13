



import { SaveData_Success } from '../actions/actiontypes'

const savedata = json => ({
    type: SaveData_Success,
    payload: json
});





const fetchsavedata = (data) => {
    debugger
    console.log(data, 'SavedData');

    if (data == '') {

        return async dispatch => {


            dispatch(failtosavedata(error = 'failed'))
        }
    } else {
        return async dispatch => {


            dispatch(savedata(data))
        }
    }
}

export { fetchsavedata }