import { combineReducers } from 'redux';
import SheepReducer from './reducer_sheep';

const rootReducer = combineReducers({
  sheep: SheepReducer
});

export default rootReducer;
