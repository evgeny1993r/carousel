import React from 'react';

import './character.scss';

interface ICharacter {
  appearance: [];
  betterCallSaulAppearance: [];
  birthday: string;
  category: string;
  charId: number;
  img: string;
  name: string;
  nickname: string;
  occupation: [];
  portrayed: string;
}

const Character = ({ character }: { character: ICharacter }) => {
  const {
    img, name, birthday,
  } = character;
  return (
    <li className="character">
      <div
        className="character__img"
        style={{
          backgroundImage: `url(${img})`,
        }}
      />
      <div className="character__data">
        <h1 className="character__name">{name}</h1>
        <h2 className="character__birthday">
          Birthday:
          {' '}
          {birthday}
        </h2>
      </div>
    </li>
  );
};

export default Character;
export type {
  ICharacter,
};
