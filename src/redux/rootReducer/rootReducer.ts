import { combineReducers } from 'redux';
import charactersReducer from '../characters/charactersReducer';
import episodesReducer from '../episodes/episodesReducer';

const rootReducer = combineReducers({
  charactersReducer,
  episodesReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
