import ActionTypes from './charactersActionTypes';

import { ICharacter } from '../../components/character/character';

interface IAction {
  type: ActionTypes;
  characters: ICharacter[];
}

interface IStateDefault {
  characters: ICharacter[]
}

const stateDefault: IStateDefault = {
  characters: [],
};

const charactersReducer = (state = stateDefault, action: IAction) => {
  switch (action.type) {
    case ActionTypes.GET_ALL_CHARACTERS_SUCCESS:
      return { ...state, characters: action.characters };
    default:
      return state;
  }
};

export default charactersReducer;
