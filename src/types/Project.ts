type Project = {
  id: string;
  name: string;
  startDate: Date;
  lastUpdateDate: Date;
  image: string;
  description: string;
  links: {name: string; path: string; fontAwesomeClass: string}[];
};

export default Project;
