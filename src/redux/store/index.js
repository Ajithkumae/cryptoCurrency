import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducer from '../redusers'


export default store = createStore(Reducer, {}, applyMiddleware(ReduxThunk))