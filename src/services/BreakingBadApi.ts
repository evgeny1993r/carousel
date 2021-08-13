interface ICharacter {
  appearance: [];
  better_call_saul_appearance: [];
  birthday: string;
  category: string;
  char_id: number;
  img: string;
  name: string;
  nickname: string;
  occupation: [];
  portrayed: string;
}

interface IEpisode {
  air_date: string;
  characters: [];
  episode: string;
  episode_id: number;
  season: string;
  series: string;
  title: string;
}

class BreakingBadApi {
  public async getAllCharacters() {
    const res = await fetch('https://www.breakingbadapi.com/api/characters/');
    if (res.status === 200) {
      const characters = await res.json();
      return characters.map((character: ICharacter) => ({
        appearance: character.appearance,
        betterCallSaulAppearance: character.better_call_saul_appearance,
        birthday: character.birthday,
        category: character.category,
        charId: character.char_id,
        img: character.img,
        name: character.name,
        nickname: character.nickname,
        occupation: character.occupation,
        portrayed: character.portrayed,
      }));
    }
    return 0;
  }

  public async getSingleCharacter(id: number) {
    const res = await fetch(`https://www.breakingbadapi.com/api/characters/${id}`);
    if (res.status === 200) {
      const character = await res.json();
      return character;
    }
    return 0;
  }

  public async getAllEpisodes() {
    const res = await fetch('https://www.breakingbadapi.com/api/episodes/');
    if (res.status === 200) {
      const episodes = await res.json();
      return episodes.map((episode: IEpisode) => ({
        airDate: episode.air_date,
        characters: episode.characters,
        fragment: episode.episode,
        episodeId: episode.episode_id,
        season: episode.season,
        series: episode.series,
        title: episode.title,
      }));
    }
    return 0;
  }

  public async getSingleEpisode(id: number) {
    const res = await fetch(`https://www.breakingbadapi.com/api/episodes/${id}`);
    if (res.status === 200) {
      const episode = await res.json();
      return episode;
    }
    return 0;
  }
}

export default BreakingBadApi;
