import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../loader/loader';
import Carousel from '../carousel/carousel';

import './app.scss';
import { RootState } from '../../redux/rootReducer/rootReducer';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: 'GET_ALL_CHARACTERS' });
    dispatch({ type: 'GET_ALL_EPISODES' });
  }, [dispatch]);

  const characters = useSelector((state: RootState) => state.charactersReducer.characters);
  const episodes = useSelector((state: RootState) => state.episodesReducer.episodes);

  const renderElOne = characters.length ? <Carousel itemList={characters} /> : <Loader />;
  const renderElTwo = episodes.length ? <Carousel itemList={episodes} /> : <Loader />;

  return (
    <div className="app">
      {renderElOne}
      {renderElTwo}
    </div>
  );
};

export default App;
