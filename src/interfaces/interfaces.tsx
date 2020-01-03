export interface HeroItem {
  id: number;
  name: string;
  description: string;
  thumbnail: HeroThumbnail;
  resourceURI: string;
  comics: HeroComics;
  series: HeroSeries;
  stories: HeroStories;
  urls: HeroUrl[];
}

interface HeroThumbnail {
  path: string;
  extension: string;
}

interface HeroComics {
  available: number;
  collectionURI: string;
  items: HeroComic[];
}

interface HeroComic {
  resourceURI: string;
  name: string;
}

interface HeroStories {
  available: number;
  collectionURI: string;
  items: HeroStory[];
}

interface HeroStory {
  resourceURI: string;
  name: string;
  type: string;
}

interface HeroSeries {
  available: number;
  collectionURI: string;
  items: HeroSerie[];
}

interface HeroSerie {
  resourceURI: string;
  name: string;
}

interface HeroUrl {
  type: string;
  url: string;
}
