import Picture from './Picture';

type Project = {
  id: string;
  name: string;
  startDate: Date;
  lastUpdateDate: Date;
  image: string;
  description: string;
  links: {name: string; path: string; fontAwesomeClass: string}[];
  pictures: Picture[];
};

export default Project;
