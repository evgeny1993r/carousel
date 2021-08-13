import { call, put, takeEvery } from 'redux-saga/effects';
import ActionTypes from './episodesActionTypes';
import BreakingBadApi from '../../services/BreakingBadApi';

function* getAllEpisodes(): Generator<any, void, any> {
  try {
    const episodes = yield call(new BreakingBadApi().getAllEpisodes);
    yield put({ type: ActionTypes.GET_ALL_EPISODES_SUCCESS, episodes });
  } catch {
    yield put({ type: ActionTypes.GET_ALL_EPISODES_FAILED });
  }
}

function* episodesSaga() {
  yield takeEvery(ActionTypes.GET_ALL_EPISODES, getAllEpisodes);
}

export default episodesSaga;
