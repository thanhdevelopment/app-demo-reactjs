import { combineReducers } from 'redux';
import status from './status/StatusReducers';

const initReducers = combineReducers({
    status: status
});

export default initReducers;