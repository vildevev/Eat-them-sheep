import { combineReducers } from 'redux';
import SheepReducer from './reducer_sheep';
import ActiveSheepReducer from './reducer_active_sheep';

const rootReducer = combineReducers({
  sheep: SheepReducer,
  activeSheep: ActiveSheepReducer
});

export default rootReducer;
