import React from 'react';

import './episode.scss';

interface IEpisode {
  airDate: string;
  characters: [];
  fragment: string;
  episodeId: number;
  season: string;
  series: string;
  title: string;
}

const Episode = ({ episode }: { episode: IEpisode }) => {
  const {
    title, season, series, fragment,
  } = episode;
  return (
    <li className="episode">
      <div className="episode__data">
        <h1 className="episode__title">
          Title:
          {' '}
          {title}
        </h1>
        <h2 className="episode__subtitle">
          Season:
          {' '}
          {season}
        </h2>
        <h2 className="episode__subtitle">
          Series:
          {' '}
          {series}
        </h2>
        <h2 className="episode__subtitle">
          Episode:
          {' '}
          {fragment}
        </h2>
      </div>
    </li>
  );
};

export default Episode;
export type {
  IEpisode,
};
