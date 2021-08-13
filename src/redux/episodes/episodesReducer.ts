import ActionTypes from './episodesActionTypes';

import { IEpisode } from '../../components/episode/episode';

interface IAction {
  type: ActionTypes;
  episodes: IEpisode[];
}

interface IStateDefault {
  episodes: IEpisode[]
}

const stateDefault: IStateDefault = {
  episodes: [],
};

const episodesReducer = (state = stateDefault, action: IAction) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_EPISODES_SUCCESS:
      return { ...state, episodes: action.episodes };
    default:
      return state;
  }
};

export default episodesReducer;
