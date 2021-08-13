import React, { useState, useEffect, useRef } from 'react';

import Character, { ICharacter } from '../character/character';
import Episode, { IEpisode } from '../episode/episode';

import './carousel.scss';

const Carousel = ({ itemList }: { itemList: ICharacter[] | IEpisode[] }) => {
  const [value, setValue] = useState(0);
  const [galleryWidth, setGalleryWidth] = useState(0);

  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (galleryRef.current) {
      setGalleryWidth(galleryRef.current.offsetWidth);
    }
  }, []);

  function isCharacter(obj: ICharacter | IEpisode): obj is ICharacter {
    return 'charId' in obj;
  }

  function isEpisode(obj: ICharacter | IEpisode): obj is ICharacter {
    return 'episodeId' in obj;
  }

  const items = itemList.map((el) => {
    if (isCharacter(el)) {
      return <Character character={el} key={el.charId} />;
    }
    if (isEpisode(el)) {
      return <Episode episode={el} key={el.episodeId} />;
    }
    return 0;
  });

  const handleBtnClick = (type: string) => {
    if (type === 'next') {
      if (value <= (itemList.length - 1) * (-165) + galleryWidth) return;
      setValue(value - 165);
    } else if (type === 'prev') {
      if (value === 0) return;
      setValue(value + 165);
    }
  };

  return (
    <div className="carousel">
      <input
        type="button"
        className="carousel__btn-left"
        value="<"
        onClick={() => handleBtnClick('prev')}
      />

      <div
        className="carousel__gallery"
        ref={galleryRef}
      >
        <ul
          className="carousel__item-list"
          style={{
            transition: '1s',
            transform: `translateX(${value}px)`,
          }}
        >
          {items}
        </ul>
      </div>

      <input
        type="button"
        className="carousel__btn-right"
        value=">"
        onClick={() => handleBtnClick('next')}
      />
    </div>
  );
};

export default Carousel;
