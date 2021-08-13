import { call, put, takeEvery } from 'redux-saga/effects';
import ActionTypes from './charactersActionTypes';
import BreakingBadApi from '../../services/BreakingBadApi';

function* getAllCharacters(): Generator<any, void, any> {
  try {
    const characters = yield call(new BreakingBadApi().getAllCharacters);
    yield put({ type: ActionTypes.GET_ALL_CHARACTERS_SUCCESS, characters });
  } catch {
    yield put({ type: ActionTypes.GET_ALL_CHARACTERS_FAILED });
  }
}

function* charactersSaga() {
  yield takeEvery(ActionTypes.GET_ALL_CHARACTERS, getAllCharacters);
}

export default charactersSaga;
