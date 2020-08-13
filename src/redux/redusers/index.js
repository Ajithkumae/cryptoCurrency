import { combineReducers } from 'redux'

import Datadashboard from './Dashboarddata'
import Savecryptocurrency from './SavecriptocurrencyData'

const rootReducer = combineReducers({
  Datadash:Datadashboard,
  SaveData:Savecryptocurrency
})

export default (state, action) => (
    action.type === 'USER_LOGOUT'
        ? rootReducer(undefined, action)
        : rootReducer(state, action)
)